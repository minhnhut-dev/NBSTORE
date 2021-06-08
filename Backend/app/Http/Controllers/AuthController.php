<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use App\NguoiDung;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    //
    public function Register(Request $request)
    {
        $rule=[
            "Email"=>"required|unique:nguoi_dungs",
            "username"=>"required|unique:nguoi_dungs|min:5"
        ];
        $customMessage=[
            "Email.unique"=>"Email đã tồn tại !",
            "username.unique"=>"Tên tài khoản đã tồn tại !",
            "username.min" =>"Tên tài khoản phải lớn hơn 5 ký tự !",
        ];
        $validator=Validator::make($request->all(),$rule,$customMessage);
        if($validator->fails())
        {
            return response()->json($validator->errors(),400);
        }
        $user = new NguoiDung;
        $user->Email = $request->Email;
        $user->TenNguoiDung = $request->TenNguoidung;
        $user->SDT = $request->SDT;
        $user->DiaChi = $request->DiaChi;
        $user->GioiTinh = $request->GioiTinh;
        $user->username = $request->username;
        $user->password = Hash::make($request->password);
        $user->loai_nguoi_dungs_id = 2;
        $user->save();
        return response()->json(['message' => 'Tài khoản được tạo thành công'], 200);
    }
    public function Login(Request  $request)
    {
        $credentials = $request->only('username', 'password', 'loai_nguoi_dungs_id'==2);
        if (!Auth::attempt($credentials)) {
            return response()->json(["message" => "Sai Tài khoản hoặc mật khẩu"], 401);
        }
        $user = $request->user();
        $tokenResult = $user->createToken('Access Token');

        $token = $tokenResult->token;

        $token->expires_at = Carbon::now()->addWeek(1);
        $token->save();
        return response()->json([
            'data' => [
                'user' => Auth::user(),
                'access_token' => $tokenResult->accessToken,
                'token_type' => 'Bearer',
                'expires_at' => Carbon::parse($tokenResult->token->expires_at)->toDateTimeString()
            ]
        ]);
    }
}
