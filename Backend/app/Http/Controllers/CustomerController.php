<?php

namespace App\Http\Controllers;

use App\NguoiDung;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\LoaiNguoiDung;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;

class CustomerController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user['listUser'] = DB::table('nguoi_dungs')
        ->select('TenNguoidung','nguoi_dungs.created_at','loai_nguoi_dungs.TenLoai','SDT','DiaChi','Email','username','nguoi_dungs.id')
        ->join('loai_nguoi_dungs','nguoi_dungs.loai_nguoi_dungs_id','=','loai_nguoi_dungs.id')
        ->paginate(5);
        // //  NguoiDung::where('TrangThai', 1)
        // // ->join('loai_nguoi_dungs','nguoi_dungs.loai_nguoi_dungs_id','=','loai_nguoi_dungs.id')->paginate(10);
        // dd( $user['listUser']);
        return view('pages.quan-ly-nguoi-dung', $user);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $typeUser=DB::table('loai_nguoi_dungs')->get();

        // return $typeUser;
        return view('pages.them.them-nguoi-dung', compact('typeUser'));
    }
    public function store(Request $request)
    {

        $rule=[
            "email"=>"required|email|unique:nguoi_dungs",
            "username"=>"required|unique:nguoi_dungs|min:5",
            "sdt"=>"required|unique:nguoi_dungs|numeric",
            "password"=>"min:5",
            "password_verified"=>"same:password"
        ];
        $customMessage=[
            "password.min"=>"Mật khẩu không được bé hơn 5 kí tự",
            "password_verified.same"=>"Mật khẩu xác nhận không chính xác .",
            "sdt.unique"=>"Số điện thoại ".$request->sdt." đã có người sử dụng!",
            "sdt.numeric"=>"Số điện thoại ".$request->sdt." không đúng định dạng!",
            "email.email"=>"Email ".$request->email." không đúng định dạng!",
            "email.unique"=>"Email ".$request->email." đã có người sử dụng!",
            "username.unique"=>"Tên tài khoản ".$request->username." đã có người sử dụng!",
            "username.min" =>"Tên tài khoản phải lớn hơn 5 ký tự !",
        ];
        $validator=Validator::make($request->all(),$rule,$customMessage);
        if($validator->fails())
        {
            return redirect('/quan-ly-nguoi-dung/them-nguoi-dung')->withErrors($validator);
        }

           $user = new NguoiDung;
           $user->Email = $request->email;
           $user->TenNguoiDung = $request->name;
           $user->SDT = $request->sdt;
           $user->DiaChi = $request->dia_chi;
           $user->GioiTinh = $request->sex;
           $user->username = $request->username;
           $user->password = Hash::make($request->password);
           $user->loai_nguoi_dungs_id = $request->loai_nguoi_dungs_id;;
           $user->save();
           return redirect('/quan-ly-nguoi-dung');

    }
    public function CheckUser(Request $request)
    {
        $email=DB::table('nguoi_dungs')->where('Email','=',$request->email)->get();
        $sdt=DB::table('nguoi_dungs')->where('SDT','=',$request->sdt)->get();
        $username=DB::table('nguoi_dungs')->where('username','=',$request->username)->get();
        dd($email, $sdt, $username);
    }


    public function show(Request $request, $id)
    {
        $user =NguoiDung::where('nguoi_dungs.id','=',$id)
        ->join('loai_nguoi_dungs','nguoi_dungs.loai_nguoi_dungs_id','=','loai_nguoi_dungs.id')
        ->select('loai_nguoi_dungs.TenLoai','nguoi_dungs.id','nguoi_dungs.TenNguoidung','nguoi_dungs.DiaChi','nguoi_dungs.SDT','nguoi_dungs.Email','nguoi_dungs.username','nguoi_dungs.GioiTinh','nguoi_dungs.created_at')
        ->first();

        $orders['orders'] = DB::select('SELECT nguoi_dungs.TenNguoidung,nguoi_dungs.SDT,don_hangs.id,don_hangs.ThoiGianMua,don_hangs.Tongtien FROM `don_hangs`
        INNER JOIN `nguoi_dungs` ON `don_hangs`.nguoi_dungs_id=`nguoi_dungs`.id WHERE don_hangs.nguoi_dungs_id='.$id);
        $amountItemsPage = 10;
        $totalPages = FLOOR(sizeof($orders['orders']) / $amountItemsPage);
        if (sizeof($orders['orders']) % $amountItemsPage > 0) {
            $totalPages++;
        }
        $currentPage = 1;
        $html = '<ul class="pagination"><li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>';
        if (is_numeric($request->page)) {
            $currentPage = $request->page;
            if($currentPage>1) $html = '<ul class="pagination"><li class="page-item">
            <a class="page-link" href="/quan-ly-nguoi-dung/show/'.$id.'?page=' . ($currentPage - 1) . '">Previous</a></li>';
        };

        $orders = array_slice($orders['orders'], ($currentPage - 1) * $amountItemsPage, $amountItemsPage);
        for ($i = 1; $i <= $totalPages; $i++) {
            $disabled='';
            if($i==$currentPage)$disabled='disabled';
            $html .= '<li class="page-item '.$disabled.'"><a class="page-link" href="/quan-ly-nguoi-dung/show/'.$id.'?page=' . $i . '">' . $i . '</a></li>';
        }

        if ($currentPage == $totalPages) {
            $html .= '  <li class="page-item disabled"><a class="page-link" href="#">Next</a></li>';
        } else {
            $html .= ' <li class="page-item"><a class="page-link" href="/quan-ly-nguoi-dung/show/'.$id.'?page=' . ($currentPage + 1) . '">Next</a></li>';
         }

        //  dd($user);
        return view('pages.cap-nhat.cap-nhat-nguoi-dung',compact('user','orders','html'));
    }
    public function MyProfile(Request $request)
    {  

        $admin =Auth::user();
        $user =NguoiDung::where('nguoi_dungs.id','=',$admin->id)
        ->join('loai_nguoi_dungs','nguoi_dungs.loai_nguoi_dungs_id','=','loai_nguoi_dungs.id')
        ->select('loai_nguoi_dungs.TenLoai','nguoi_dungs.id','nguoi_dungs.TenNguoidung','nguoi_dungs.DiaChi','nguoi_dungs.SDT','nguoi_dungs.Email','nguoi_dungs.username','nguoi_dungs.GioiTinh','nguoi_dungs.created_at')
        ->first();

        return view('pages.cap-nhat.my-profile',compact('user'));
    }

    public function edit(Request $request,$id)
    {
        //
        $data=NguoiDung::find($id);
        $data->TenNguoidung=$request->name;
        $data->DiaChi = $request->address;
        $data->SDT= $request->phone;
        $data->save();
        return response()->json(["message"=>"Cập nhât người dùng thành công","user"=>$data],200);
    }

    public function editPassword(Request $request,$id)
    {
        $data=NguoiDung::find($id);
        
     if (!(Hash::check($request->get('oldPassword'), $data->password))) {
            // The passwords matches
            return response()->json(["message" => "Mật khẩu cũ không đúng"], 500);
        }else
        {
            $data->password=bcrypt($request->password);
            $data->save();
            return response()->json(["message"=>"Thay đổi mật khẩu thành công"]);
        }
    }

    public static function getProductsByUser( $id)
    {
        $products = DB::select('SELECT SUM(SoLuong) AS amount FROM chi_tiet_don_hangs WHERE `don_hangs_id` IN (SELECT id FROM don_hangs WHERE nguoi_dungs_id= '.$id.')');
       $amounts =$products[0];
        $amount=(int)$amounts->amount;
        return $amount;
    }


        // }
        
    public function update(Request $request,  $id)
    {


        // $rule=[
        //     "email"=>"required|email|unique:nguoi_dungs",

        //     "sdt"=>"required|unique:nguoi_dungs|numeric",
        //     "password"=>"min:5",
        //     "password_verified"=>"same:password"
        // ];
        // $customMessage=[
        //     "password.min"=>"Mật khẩu không được bé hơn 5 kí tự",
        //     "password_verified.same"=>"Mật khẩu xác nhận không chính xác .",
        //     "sdt.unique"=>"Số điện thoại ".$request->sdt." đã có người sử dụng!",
        //     "sdt.numeric"=>"Số điện thoại ".$request->sdt." không đúng định dạng!",
        //     "email.email"=>"Email ".$request->email." không đúng định dạng!",
        //     "email.unique"=>"Email ".$request->email." đã có người sử dụng!",
        // ];
        // $validator=Validator::make($request->all(),$rule,$customMessage);
        // if($validator->fails())
        // {
        //     return redirect('/quan-ly-nguoi-dung/show/'.$id)->withErrors($validator);
        // }


        $admin =Auth::user();
        if($request->password){
            $rule=[
            "password"=>"required|min:5",
        ];
        $customMessage=[
            "password.min"=>"Mật khẩu không được bé hơn 5 kí tự",
            "password.required"=>"Mật khẩu không được bỏ trống",
        ];
        $validator=Validator::make($request->all(),$rule,$customMessage);
        if($validator->fails())
        {
            if($admin->id==$id) return redirect('/quan-ly-nguoi-dung/my-profile')->withErrors($validator);
            return redirect('/quan-ly-nguoi-dung/show/'.$id)->withErrors($validator);
        }
        }
         
           $user = NguoiDung::find($id);
        //    $user->Email = $request->email;
           $user->TenNguoiDung = $request->name;
           if(!$request->password) $user->password = $user->password;
           else 
           $user->password =  Hash::make($request->password);
           $user->DiaChi = $request->dia_chi;
           $user->GioiTinh = $request->sex;
           $user->save();
           if($admin->id==$id) return redirect('/quan-ly-nguoi-dung/my-profile');
           return redirect('/quan-ly-nguoi-dung/show/'.$id);
    }
    public function destroy(NguoiDung $nguoiDung)
    {
        //
    }
}
