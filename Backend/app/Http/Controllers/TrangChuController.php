<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class TrangChuController extends Controller
{
    //
    public function index()
    {
        return view('pages.trang-chu');
    }

    public function FormLogin()
    {
        return view('pages.dang-nhap');
    }

    public function Login(Request $request)
    {

        $arr =[
            'username' =>$request->username,
            'password'=>$request->password,
            'loai_nguoi_dungs_id'=>1
        ];
        // return $arr;
        if(Auth::attempt($arr))
        {
            $user=auth()->user();
            // $user=User::find(Auth::user());
            // return $user;
                // đăng nhập đúng
            // return "Đăng nhập thành công";
              $request->session()->put('user',$user);// muốn dùng auth thì phải mã hóa mật khẩu
            return redirect('/');
        }
         else
         {
             // đăng nhập sai
             return "Đăng nhập thất bại";
         }
    }

    public function Logout()
    {
        Auth::logout();
        return redirect('/login');
    }
}
