<?php

namespace App\Http\Controllers;

use App\ChiTietDonHang;
use App\Classes\OrderConfirmationService;
use App\DonHang;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class PaymentController extends Controller
{
    //
    public function createOrder(Request $request)
    {
        DB::beginTransaction();
        $rule = [
            "hinh_thuc_giao_hangs_id" => "required",
            'hinh_thuc_thanh_toans_id' => "required",
            "nguoi_dungs_id" => "required",
        ];
        $customMessage = [
            // "Email.unique"=>"Email đã tồn tại !",
            // "username.unique"=>"Tên tài khoản đã tồn tại !",
            // "username.min" =>"Tên tài khoản phải lớn hơn 5 ký tự !",
            "hinh_thuc_giao_hangs_id.required" => "Hình thức giao hàng bắt buộc !",
            "hinh_thuc_thanh_toans_id.required" => "Hình thức thanh toán bắt buộc !",
            "nguoi_dungs_id.required" => "Bạn chưa đăng nhập vui lòng đăng nhập !",
        ];
        $validator = Validator::make($request->all(), $rule, $customMessage);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
            DB::rollBack();
        }
        // try {
        $order = new DonHang();
        $order->nguoi_dungs_id = $request->nguoi_dungs_id;
        $order->hinh_thuc_giao_hangs_id = $request->hinh_thuc_giao_hangs_id;
        $order->hinh_thuc_thanh_toans_id = $request->hinh_thuc_thanh_toans_id;
        $order->ThoiGianMua = Carbon::now();
        $order->Tongtien = 0;
        $order->trang_thai_don_hangs_id = $request->trang_thai_don_hangs_id;
        $order->save();
        $items = ($request->line_items);
        $total = 0;
        foreach ($items as $item) {
            $total += $item['DonGia'] * $item['SoLuong'];
            $result = SanPhamController::AffterOrder($item['san_phams_id'], $item['SoLuong']);
            if ($result['result']) {
                $orderItem = new ChiTietDonHang();
                $orderItem->don_hangs_id = $order->id;
                $orderItem->san_phams_id = $item['san_phams_id'];
                $orderItem->DonGia = $item['DonGia'];
                $orderItem->SoLuong = $item['SoLuong'];
                $orderItem->ThanhTien = $item['SoLuong'] * $item['DonGia'];
                $orderItem->save();
            } else {
                DB::rollBack();
                return response(['error' => 'Số lượng sản phẩm ' . $result['name'] . ' không được quá ' . $result['amount']], 400);
            }
        }
        $order->Tongtien = $total;
        $order->save();
        DB::commit();


        $endpoint="http://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
        $vnp_Returnurl = "http://localhost:3000/resultOrder";
        $vnp_TmnCode = "U5PFWTIM";//Mã website tại VNPAY
        $vnp_HashSecret = "MGJSDHRZLZVJOPCIDXZFIEBWZUBXPWAR"; //Chuỗi bí mật
        $vnp_TxnRef = date('YmdHis');//Mã đơn hàng. Trong thực tế Merchant cần insert đơn hàng vào DB và gửi mã này sang VNPAY
        $vnp_OrderInfo = "Thanh toán VNPAY";
        $vnp_OrderType =  "130000";
        // $vnp_Amount = $amount*100;
         $vnp_Amount =  ($order->Tongtien)*100;
        $vnp_Locale = "vn";
        $vnp_IpAddr = $_SERVER['REMOTE_ADDR'];
        // $vnp_CurrCode= "VND";

        $inputData = array(
            "vnp_Version" => "2.0.0",
            "vnp_TmnCode" => $vnp_TmnCode,
            "vnp_Amount" => $vnp_Amount,
            "vnp_Command" => "pay",
            "vnp_CreateDate" => date('YmdHis'),
            "vnp_CurrCode" => "VND",
            "vnp_IpAddr" => $vnp_IpAddr,
            "vnp_Locale" => $vnp_Locale,
            "vnp_OrderInfo" => $vnp_OrderInfo,
            "vnp_OrderType" => $vnp_OrderType,
            "vnp_ReturnUrl" => $vnp_Returnurl,
            "vnp_TxnRef" => $vnp_TxnRef,
        );

        if (isset($vnp_BankCode) && $vnp_BankCode != "") {
            $inputData['vnp_BankCode'] = $vnp_BankCode;
        }
        ksort($inputData);
        $query = "";
        $i = 0;
        $hashdata = "";
        foreach ($inputData as $key => $value) {
            if ($i == 1) {
                $hashdata .= '&' . $key . "=" . $value;
            } else {
                $hashdata .= $key . "=" . $value;
                $i = 1;
            }
            $query .= urlencode($key) . "=" . urlencode($value) . '&';
        }

        $vnp_Url = $endpoint . "?" . $query;
        if (isset($vnp_HashSecret)) {
           // $vnpSecureHash = md5($vnp_HashSecret . $hashdata);
               $vnpSecureHash = hash('sha256', $vnp_HashSecret . $hashdata);
            $vnp_Url .= 'vnp_SecureHashType=SHA256&vnp_SecureHash=' . $vnpSecureHash;
        }
        $returnData = array(
             'data' => $vnp_Url);
        $data= json_encode($returnData);
        return response()->json(['pay_url'=>$returnData,'Order'=>$order]);
    }

}
