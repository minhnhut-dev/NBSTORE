<?php

namespace App\Http\Controllers;

use App\User;
use App\NguoiDung;
use Illuminate\Http\Request;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\OrderController;
use Illuminate\Contracts\Session\Session;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\MessageBag;
use Illuminate\Support\Facades\Validator;

class TrangChuController extends Controller
{
    //
    public function index()
    {

        $users = DB::table('nguoi_dungs')->where('TrangThai', 1)->limit(5)->orderBy('created_at', 'DESC')->get();
        foreach ($users as $item) {

            $amount = (int)CustomerController::getProductsByUser($item->id);
            $item->SanPhams = $amount;
        }
        $prods = [];
        $products = DB::table('san_phams')->where('TrangThai', 1)->get();
        foreach ($products as $item) {
            $amount = (int)OrderController::getProductOrdersByProduct($item->id);
            $item->SoLuong = $amount;
            array_push($prods, $item);
        }
        usort(
            $prods,
            function ($a, $b) {
                if ($a == $b) {
                    return 0;
                }
                return ($a->SoLuong > $b->SoLuong) ? -1 : 1;
            }
        );
        $orders = DB::table('don_hangs')->join('nguoi_dungs', 'nguoi_dungs.id', '=', 'don_hangs.nguoi_dungs_id')
        ->select('nguoi_dungs.TenNguoidung','nguoi_dungs.SDT','don_hangs.*')->limit(5)->orderBy('don_hangs.created_at', 'DESC')->get();

        foreach ($orders as $item) {

            $amount = (int)OrderController::getProductOrdersByOrder($item->id);
            $item->SanPhams = $amount;
        }
        // dd($orders);
        return view('pages.trang-chu', compact('users','prods','orders'));
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
            $errors=new MessageBag(['password'=>['Username or password valid']]);

            return redirect('/login')->withErrors($errors);
        }
    }

    public function Logout()
    {
        Auth::logout();
        return redirect('/login');
    }
}
