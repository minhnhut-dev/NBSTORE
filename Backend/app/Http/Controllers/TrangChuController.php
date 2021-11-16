<?php

namespace App\Http\Controllers;

use App\User;
use App\NguoiDung;
use App\SanPham;
use App\TrangThaiDonHang;
use Illuminate\Http\Request;
use App\Http\Controllers\CustomerController;
use App\Classes\OrderConfirmationService;
use App\Http\Controllers\OrderController;
use Illuminate\Contracts\Session\Session;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\MessageBag;
use Illuminate\Support\Facades\Validator;
use App\Classes\DateService;
use App\Classes\SalesService;
use PhpParser\Node\Expr\Cast\Object_;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\RevenueMonthExport;
use App\Exports\RevenueYearExport;
class TrangChuController extends Controller
{
    public function exportExcelMonth(Request $request)
    {
       
            $month = $request->month? $request->month:date('m');
            $year = $request->year_revenue_month? $request->year_revenue_month:date('Y');
            $max_day =(int)date('m')==$month&& (int)date('Y')==$year?date('d'):0;
           
            $status = $request->status_month<6&&$request->status_month>0?$request->status_month:0;
            $order_status= TrangThaiDonHang::find($status);
            $status_name = $order_status?$order_status->TenTrangThai:'Tất cả';
            return Excel::download(new RevenueMonthExport($max_day,$month, $year,$status,$status_name),'Doanh thu ('.$status_name.') tháng '.$month.' năm '.$year.' NBStore.xlsx');

    }
    public function exportExcelYear(Request $request)
    {
      
            $year = $request->year_revenue_year?$request->year_revenue_year:date('Y');
            $max_month =(int)date('Y')==$year?date('m'):0;
            $status = $request->status_year<6&&$request->status_year>0?$request->status_year:0;
            $order_status= TrangThaiDonHang::find($status);
            $status_name = $order_status?$order_status->TenTrangThai:'Tất cả';
           
            return Excel::download(new RevenueYearExport($max_month, $year,$status,$status_name),'Doanh thu ('.$status_name.') năm '.$year.' NBStore.xlsx');

    }
    public function revenueMonthApi(Request $request){
        $month =($request->month)? $request->month:date('m');
        $year_month = ($request->year_revenue_month)? $request->year_revenue_month:date('Y');
        $max_day =(int)date('m')==$month&& (int)date('Y')==$year_month?date('d'):0;
        $status = $request->status<6&&$request->status>0?$request->status:0;
        $revenue_each_day_by_this_month = SalesService::revenueEachDayByMonth($max_day,$month, $year_month,$status);
        $revenue =[];
        $total_sales= 0;
        foreach ($revenue_each_day_by_this_month as $item){

            $item1 =[
                "date"=>date("d-m", $item["timestamp"]->getTimestamp()),
                "value"=>$item["revenue"],
            ];
            $total_sales+=$item["revenue"];
            array_push($revenue,$item1);
        }  
        $total_sales = number_format($total_sales, 0, '', ',').' VNĐ';
        return response()->json(['total'=>$total_sales,'revenue'=>  $revenue,'year'=>$year_month,'month'=>$month]);
    }
    public function revenueYeahApi(Request $request){
        $year_year = ($request->year_revenue_year)? $request->year_revenue_year:date('Y');
        $max_month =(int)date('Y')==$year_year?date('m'):0;
        $status = $request->status<6&&$request->status>0?$request->status:0;
        $revenue_each_month_by_this_year = SalesService::revenueEachMonthByYear($max_month,$year_year,$status);
        $total = 0;

        $revenue=[];
        foreach ($revenue_each_month_by_this_year as $item){

            $item1 =[
                "date"=>"Tháng".$item["month"],
                "value"=>$item["revenue"],
            ];
            $total+=$item["revenue"];
            array_push($revenue,$item1);
        }
        $total = number_format($total, 0, '', ',').' VNĐ';
        return response()->json(['total'=>$total,'revenue'=>  $revenue,'year'=>$year_year]);
    }
    public function index(Request $request)
    {

        $prods = [];
        $products = DB::table('chi_tiet_don_hangs')->select('san_phams_id')->groupBy('san_phams_id')->get();
        foreach ($products as $item) {
            $amount = (int)OrderController::getProductOrdersByProduct($item->san_phams_id);
            $sp = SanPham::find($item->san_phams_id);
            $sp->SoLuong = $amount;
            $sp->Hide = "";
            array_push($prods, $sp);
        }
        // sắp xếp giảm dần
        usort(
            $prods,
            function ($a, $b) {
                if ($a == $b) {
                    return 0;
                }
                return ($a->SoLuong > $b->SoLuong) ? -1 : 1;
            }
        );
        // limit 5
        $prods= array_slice($prods,0,5);

    
        $orders = DB::table('don_hangs')->join('nguoi_dungs', 'nguoi_dungs.id', '=', 'don_hangs.nguoi_dungs_id')
        ->join('trang_thai_don_hangs','don_hangs.trang_thai_don_hangs_id','=','trang_thai_don_hangs.id')
        ->select('nguoi_dungs.TenNguoidung','nguoi_dungs.SDT','don_hangs.*','trang_thai_don_hangs.TenTrangThai')->limit(5)->orderBy('don_hangs.ThoiGianMua', 'DESC')->get();

        foreach ($orders as $item) {

            $amount = (int)OrderController::getProductOrdersByOrder($item->id);
            $item->SanPhams = $amount;
        }
        $chart_product = [];
        foreach ($prods as $item){
            array_push($chart_product,['name' => $item->TenSanPham,'steps'=>$item->SoLuong,'href'=>'images/'.$item->AnhDaiDien,'hide'=>$item->id]);
        }

        $month =($request->month&& $request->month!='undefined')? $request->month:date('m');
        $year_month = ($request->year_revenue_month&&$request->year_revenue_month!='undefined')? $request->year_revenue_month:date('Y');
        $year_year = ($request->year_revenue_year&&$request->year_revenue_year!='undefined')? $request->year_revenue_year:date('Y');
        $revenue =[];
        $total_sales= 0;
      
        $revenue_year =[];
        $total_sales_year= 0;
      
        $orders_status = TrangThaiDonHang::get();
        return view('pages.trang-chu', compact('prods','orders','chart_product'
        ,'year_month','year_year',
        'month','total_sales','total_sales_year','orders_status'));
    }
    
    public function FormLogin()
    {
        return view('pages.dang-nhap');
    }

    public function Login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|',
            'password' => 'required|',
        ]);
        $arr = [
            'username' => $request->username,
            'password' => $request->password,
            'loai_nguoi_dungs_id' => 1
        ];
        $errors = new MessageBag;

        if($validator->fails()){
            return redirect('/login')->withErrors($validator);
        }

        if (Auth::attempt($arr)) {
            $user = auth()->user();
            // $user=User::find(Auth::user());
            // return $user;
            // đăng nhập đúng
            // return "Đăng nhập thành công";
            $request->session()->put('user', $user); // muốn dùng auth thì phải mã hóa mật khẩu

            return redirect('/');
        } else {
            // đăng nhập sai
            //if any error send back with message.
            $errors=new MessageBag(['password'=>['Username or password invalid']]);

            return redirect('/login')->withErrors($errors);
        }
    }

    public function Logout()
    {
        Auth::logout();
        return redirect('/login');
    }
}
