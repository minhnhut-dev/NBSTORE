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
            return Excel::download(new RevenueMonthExport($max_day,$month, $year),'Doanh thu tháng '.$month.' năm '.$year.' NBStore.xlsx');

    }
    public function exportExcelYear(Request $request)
    {
      
            $year = $request->year_revenue_year?$request->year_revenue_year:date('Y');
            $max_month =(int)date('Y')==$year?date('m'):0;
            return Excel::download(new RevenueYearExport($max_month, $year),'Doanh thu năm '.$year.' NBStore.xlsx');

    }
    public function index(Request $request)
    {
        $users = DB::table('nguoi_dungs')->where('TrangThai', 1)->limit(5)->orderBy('created_at', 'DESC')->get();
        foreach ($users as $item) {

            $amount = (int)CustomerController::getProductsByUser($item->id);
            $item->SanPhams = $amount;
        }
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
        ->select('nguoi_dungs.TenNguoidung','nguoi_dungs.SDT','don_hangs.*')->limit(5)->orderBy('don_hangs.created_at', 'DESC')->get();

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
        $max_day =(int)date('m')==$month&& (int)date('Y')==$year_month?date('d'):0;
        $max_month =(int)date('Y')==$year_year?date('m'):0;
        $revenue_each_day_by_this_month = SalesService::revenueEachDayByMonth($max_day,$month, $year_month);
        $revenue_each_month_by_this_year = SalesService::revenueEachMonthByYear($max_month,$year_year);
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
        $revenue_year =[];
        $total_sales_year= 0;
        foreach ($revenue_each_month_by_this_year as $item){

            $item1 =[
                "date"=>"Tháng ".$item["month"],
                "value"=>$item["revenue"],
            ];
            $total_sales_year+=$item["revenue"];
            array_push($revenue_year,$item1);
        }  
        return view('pages.trang-chu', compact('users','prods','orders','chart_product',
        'revenue','year_month','year_year',
        'month','total_sales','revenue_year','total_sales_year'));
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
