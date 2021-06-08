<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\DonHang;
use Illuminate\Support\Facades\DB;
class DonHangController extends Controller
{
    //API
    public function GetOrderUnpiadByUserID($id)
    {
        $data= DB::select('SELECT don_hangs.id,don_hangs.ThoiGianMua,hinh_thuc_giao_hangs.TenHinhThuc,hinh_thuc_thanh_toans.TenThanhToan,don_hangs.Tongtien,trang_thai_don_hangs.TenTrangThai
        FROM don_hangs , hinh_thuc_thanh_toans,hinh_thuc_giao_hangs, trang_thai_don_hangs
        WHERE don_hangs.hinh_thuc_giao_hangs_id=hinh_thuc_giao_hangs.id AND don_hangs.hinh_thuc_thanh_toans_id=hinh_thuc_thanh_toans.id AND don_hangs.trang_thai_don_hangs_id=trang_thai_don_hangs.id AND trang_thai_don_hangs.id=1 AND don_hangs.nguoi_dungs_id=?', [$id]);
        return response()->json($data);
    }
}
