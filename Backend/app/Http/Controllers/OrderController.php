<?php

namespace App\Http\Controllers;

use App\DonHang;
use App\ChiTietDonHang;
use App\TrangThaiDonHang;
use App\Http\Controllers\SanPhamController;
use App\SanPham;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $orders['orders'] = DB::select('SELECT nguoi_dungs.TenNguoidung, nguoi_dungs.SDT, don_hangs.id, don_hangs.ThoiGianMua, don_hangs.created_at, don_hangs.Tongtien, don_hangs.trang_thai_don_hangs_id, trang_thai_don_hangs.TenTrangThai
        FROM `don_hangs` INNER JOIN `nguoi_dungs` ON `don_hangs`.nguoi_dungs_id=`nguoi_dungs`.id
        INNER JOIN `trang_thai_don_hangs` ON `don_hangs`.trang_thai_don_hangs_id=`trang_thai_don_hangs`.id ORDER BY don_hangs.created_at DESC;
        ');
        if ($request->search) {
            $orders['orders'] = DB::select('SELECT nguoi_dungs.TenNguoidung, nguoi_dungs.SDT, don_hangs.id, don_hangs.ThoiGianMua, don_hangs.created_at, don_hangs.Tongtien, don_hangs.trang_thai_don_hangs_id, trang_thai_don_hangs.TenTrangThai
            FROM `don_hangs` INNER JOIN `nguoi_dungs` ON `don_hangs`.nguoi_dungs_id=`nguoi_dungs`.id
            INNER JOIN `trang_thai_don_hangs` ON `don_hangs`.trang_thai_don_hangs_id=`trang_thai_don_hangs`.id
            WHERE don_hangs.id = "' . $request->search . '"
            OR nguoi_dungs.TenNguoidung LIKE "%' . $request->search . '%"
            OR nguoi_dungs.SDT LIKE "%' . $request->search . '%"
            ORDER BY don_hangs.created_at DESC;
            ');
        }
        if ($request->status > -1) {
            $query = 'SELECT nguoi_dungs.TenNguoidung, nguoi_dungs.SDT, don_hangs.id, don_hangs.ThoiGianMua, don_hangs.created_at, don_hangs.Tongtien, don_hangs.trang_thai_don_hangs_id, trang_thai_don_hangs.TenTrangThai
            FROM `don_hangs` INNER JOIN `nguoi_dungs` ON `don_hangs`.nguoi_dungs_id=`nguoi_dungs`.id
            INNER JOIN `trang_thai_don_hangs` ON `don_hangs`.trang_thai_don_hangs_id=`trang_thai_don_hangs`.id ';
            if ($request->begin) $query .= 'WHERE don_hangs.created_at >= "' . $request->begin . '" AND don_hangs.created_at <= "' . $request->end . '" ';
            else $query .= 'WHERE true ';
            if ($request->status > 0) $query .= ' AND don_hangs.trang_thai_don_hangs_id = "' . $request->status . '" ';
            if ($request->total > 0) {
                switch ($request->total) {
                    case 1: {
                            $begin = 0;
                            $end = 500000;
                            $query .= 'AND don_hangs.Tongtien BETWEEN ' . $begin . ' AND ' . $end . ' ';
                        }
                        break;
                    case 2: {

                            $begin = 500000;
                            $end = 1000000;
                            $query .= 'AND don_hangs.Tongtien BETWEEN ' . $begin . ' AND ' . $end . ' ';
                        }
                        break;
                    case 3: {
                            $begin = 1000000;
                            $end = 5000000;
                            $query .= 'AND don_hangs.Tongtien BETWEEN ' . $begin . ' AND ' . $end . ' ';
                        }
                        break;
                    case 4: {
                            $begin = 5000000;
                            $end = 10000000;
                            $query .= 'AND don_hangs.Tongtien BETWEEN ' . $begin . ' AND ' . $end . ' ';
                        }
                        break;
                    case 5: {
                            $begin = 10000000;
                            $end = 25000000;
                            $query .= 'AND don_hangs.Tongtien BETWEEN ' . $begin . ' AND ' . $end . ' ';
                        }
                        break;
                    case 6: {
                            $begin = 25000000;
                            $end = 50000000;
                            $query .= 'AND don_hangs.Tongtien BETWEEN ' . $begin . ' AND ' . $end . ' ';
                        }
                        break;
                    case 7: {

                            $begin = 50000000;
                            $query .= 'AND don_hangs.Tongtien > ' . $begin . ' ';
                        }
                        break;
                    default: {
                            //
                        }
                }
            }
            $query .= ' ORDER BY don_hangs.created_at DESC;';
            $orders['orders'] = DB::select($query);
        }
        $amountItemsPage = 10;
        $totalPages = FLOOR(sizeof($orders['orders']) / $amountItemsPage);
        if (sizeof($orders['orders']) % $amountItemsPage > 0) {
            $totalPages++;
        }
        $currentPage = 1;
        $html = '<ul class="pagination"><li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>';
        if (is_numeric($request->page)) {
            $currentPage = $request->page;
            if ($currentPage > 1) $html = '<ul class="pagination"><li class="page-item">
            <a class="page-link" href="/quan-ly-don-hang?page=' . ($currentPage - 1) . '">Previous</a></li>';
        };

        $orders = array_slice($orders['orders'], ($currentPage - 1) * $amountItemsPage, $amountItemsPage);
        for ($i = 1; $i <= $totalPages; $i++) {
            $disabled = '';
            if ($i == $currentPage) $disabled = 'disabled';
            $html .= '<li class="page-item ' . $disabled . '"><a class="page-link" href="/quan-ly-don-hang?page=' . $i . '">' . $i . '</a></li>';
        }

        if ($currentPage == $totalPages) {
            $html .= '  <li class="page-item disabled"><a class="page-link" href="#">Next</a></li>';
        } else {
            $html .= ' <li class="page-item"><a class="page-link" href="/quan-ly-don-hang?page=' . ($currentPage + 1) . '">Next</a></li>';
        }
        $status = TrangThaiDonHang::get();
        return view('pages.quan-ly-don-hang', compact('orders', 'html', 'status'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public static function  create(Request $request)
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
        $order = new DonHang;
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
                $orderItem = new ChiTietDonHang;
                $orderItem->don_hangs_id = $order->id;
                $orderItem->san_phams_id = $item['san_phams_id'];
                $orderItem->DonGia = $item['DonGia'];
                $orderItem->SoLuong = $item['SoLuong'];
                $orderItem->ThanhTien = $item['SoLuong'] * $item['DonGia'];
                $orderItem->save();
            } else {
                DB::rollBack();
                return response(['message' => 'unsuccessful', 'error' => 'Số lượng sản phẩm ' . $result['name'] . ' không được quá ' . $result['amount']], 400);
            }
        }
        $order->Tongtien = $total;
        $order->save();
        DB::commit();


        // } catch (\Exception $e) {
        //     DB::rollBack();
        //     return response(['message' => 'unsuccessful', 'error' => $e],500);
        // }
        return response(['message' => 'successful', 'order' => $order]);
    }


    public function createAPI(Request $request)
    {

        $id = 0;
        try {
            $order = new DonHang;
            $order->nguoi_dungs_id = $request->nguoi_dungs_id;
            $order->hinh_thuc_giao_hangs_id = $request->hinh_thuc_giao_hangs_id;
            $order->hinh_thuc_thanh_toans_id = $request->hinh_thuc_thanh_toans_id;
            $order->ThoiGianMua = Carbon::now();
            $order->Tongtien = 0;
            $order->TrangThai = $request->TrangThai;
            $order->save();
            $id = $order->id;
            $items = ($request->line_items);
            $total = 0;
            $OrderItems = [];
            foreach ($items as $item) {
                $total += $item['DonGia'] * $item['SoLuong'];

                $result = SanPhamController::AffterOrder($item['san_phams_id'], $item['SoLuong']);
                if ($result['result']) {
                    $orderItem = new ChiTietDonHang;
                    $orderItem->don_hangs_id = $order->id;
                    $orderItem->san_phams_id = $item['san_phams_id'];
                    $orderItem->DonGia = $item['DonGia'];
                    $orderItem->SoLuong = $item['SoLuong'];
                    $orderItem->ThanhTien = $item['SoLuong'] * $item['DonGia'];
                    $orderItem->save();
                    array_push($OrderItems, $orderItem->id);
                } else {

                    foreach ($OrderItems as $item) {
                        try {
                            DB::table('chi_tiet_don_hangs')->where('id', '=', $item)->delete();
                        } catch (\Exception $e) {
                        }
                    }
                    DB::table('don_hangs')->where('id', '=', $order->id)->delete();
                    return response(['message' => 'unsuccessful', 'error' => 'Số lượng sản phẩm ' . $result['name'] . ' không được quá ' . $result['amount']]);
                }
            }
            $order->Tongtien = $total;
            $order->save();
        } catch (\Exception $e) {
            try {
                DB::table('don_hangs')->where('id', '=', $id)->delete();
            } catch (\Exception $e) {
            }
            return response(['message' => 'unsuccessful', 'error' => $e]);
        }
        return response(['message' => 'successful', 'order' => $order]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\DonHang  $donHang
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $listOrder = DB::table('chi_tiet_don_hangs')
            ->join('san_phams', 'chi_tiet_don_hangs.san_phams_id', '=', 'san_phams.id')
            ->where('don_hangs_id', '=', $id)
            ->select('chi_tiet_don_hangs.SoLuong', 'chi_tiet_don_hangs.DonGia', 'ThanhTien', 'san_phams.TenSanPham', 'san_phams.AnhDaiDien', 'san_phams.id')
            ->paginate(5);
        // dd($listOrder);
        // $order=DB::table('don_hangs')->where('don_hangs.id','=',$id)
        // ->join('hinh_thuc_thanh_toans', 'don_hangs.hinh_thuc_thanh_toans_id', '=', 'hinh_thuc_thanh_toans.id')
        // ->join('nguoi_dungs', 'don_hangs.id', '=', 'nguoi_dungs.id')->first();
        $orders = DB::select('SELECT nguoi_dungs.TenNguoidung, nguoi_dungs.SDT, trang_thai_don_hangs.TenTrangThai, don_hangs.trang_thai_don_hangs_id, nguoi_dungs.DiaChi, don_hangs.id, don_hangs.ThoiGianMua, don_hangs.Tongtien, hinh_thuc_thanh_toans.TenThanhToan
            FROM `don_hangs` INNER JOIN `nguoi_dungs` ON `don_hangs`.nguoi_dungs_id=`nguoi_dungs`.id
            INNER JOIN `hinh_thuc_thanh_toans` ON `don_hangs`.hinh_thuc_thanh_toans_id=`hinh_thuc_thanh_toans`.id
            INNER JOIN `trang_thai_don_hangs` ON `don_hangs`.trang_thai_don_hangs_id=`trang_thai_don_hangs`.id
            WHERE don_hangs.id=' . $id . ' LIMIT 1');

        if (sizeof($orders) > 0) {

            $order = $orders[0];
            $disabled = $order->trang_thai_don_hangs_id == 3 ? 'disabled' : '';
            return view('pages.cap-nhat.xem-don-hang', compact('listOrder', 'order', 'disabled'));
        } else {
            return redirect('/notFound');
        }
    }

    public function complete(Request $request, $id)
    {
        $order = DonHang::find($id);
        $order->trang_thai_don_hangs_id = 3;
        $order->save();
        return redirect('/quan-ly-don-hang/' . $id);
    }
    public function edit(DonHang $donHang)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\DonHang  $donHang
     * @return \Illuminate\Http\Response
     */
    public function updateOrderPaid(Request $request, $id)
    {
        //
        $data = DonHang::find($id);
        if (empty($data)) {
            return response()->json(["message" => "id không tồn tại"], 400);
        }
        $data->trang_thai_don_hangs_id = 2;
        $data->save();
        return response()->json(["message" => "Cập nhật trạng thái đơn hàng thành công"], 200);
    }

    public function updateOrderCanceled($id)
    {
        //
        $result=SanPhamController::recoveryProduct($id);

        $data=DonHang::find($id);
        if(empty($data))
        {
            return response()->json(["message"=>"id không tồn tại"],400);

        }
        $data->trang_thai_don_hangs_id=4;
        $data->save();

        return response()->json(["message"=>"Cập nhật trạng thái đơn hàng thành công",'result'=>$result],200);
    }
    public function GetOrderUnpiadByUserID($id)
    {
        $data = DB::select('SELECT don_hangs.id,don_hangs.ThoiGianMua,hinh_thuc_giao_hangs.TenHinhThuc,hinh_thuc_thanh_toans.TenThanhToan,don_hangs.Tongtien,trang_thai_don_hangs.TenTrangThai
        FROM don_hangs , hinh_thuc_thanh_toans,hinh_thuc_giao_hangs, trang_thai_don_hangs
        WHERE don_hangs.hinh_thuc_giao_hangs_id=hinh_thuc_giao_hangs.id AND don_hangs.hinh_thuc_thanh_toans_id=hinh_thuc_thanh_toans.id AND don_hangs.trang_thai_don_hangs_id=trang_thai_don_hangs.id AND trang_thai_don_hangs.id=1 AND don_hangs.nguoi_dungs_id=?', [$id]);
        return response()->json($data);
    }
    public function GetOrderPaidByUserID($id)
    {
        $data = DB::select('SELECT don_hangs.id,don_hangs.ThoiGianMua,hinh_thuc_giao_hangs.TenHinhThuc,hinh_thuc_thanh_toans.TenThanhToan,don_hangs.Tongtien,trang_thai_don_hangs.TenTrangThai
        FROM don_hangs , hinh_thuc_thanh_toans,hinh_thuc_giao_hangs, trang_thai_don_hangs
        WHERE don_hangs.hinh_thuc_giao_hangs_id=hinh_thuc_giao_hangs.id AND don_hangs.hinh_thuc_thanh_toans_id=hinh_thuc_thanh_toans.id AND don_hangs.trang_thai_don_hangs_id=trang_thai_don_hangs.id AND trang_thai_don_hangs.id=2 AND don_hangs.nguoi_dungs_id=?', [$id]);
        return response()->json($data);
    }
    public function getOrderCompleteByUserId($id)
    {
        $data = DB::select('SELECT don_hangs.id,don_hangs.ThoiGianMua,hinh_thuc_giao_hangs.TenHinhThuc,hinh_thuc_thanh_toans.TenThanhToan,don_hangs.Tongtien,trang_thai_don_hangs.TenTrangThai
        FROM don_hangs , hinh_thuc_thanh_toans,hinh_thuc_giao_hangs, trang_thai_don_hangs
        WHERE don_hangs.hinh_thuc_giao_hangs_id=hinh_thuc_giao_hangs.id AND don_hangs.hinh_thuc_thanh_toans_id=hinh_thuc_thanh_toans.id AND don_hangs.trang_thai_don_hangs_id=trang_thai_don_hangs.id AND trang_thai_don_hangs.id=3 AND don_hangs.nguoi_dungs_id=?', [$id]);
        return response()->json($data, 200);
    }

    public function GetOrderDetails($id)
    {
        $data = DB::select('SELECT don_hangs.ThoiGianMua,don_hangs.trang_thai_don_hangs_id,san_phams.TenSanPham,chi_tiet_don_hangs.DonGia,chi_tiet_don_hangs.SoLuong,don_hangs.Tongtien
        FROM don_hangs, chi_tiet_don_hangs,san_phams
        WHERE don_hangs.id=chi_tiet_don_hangs.don_hangs_id AND chi_tiet_don_hangs.san_phams_id=san_phams.id AND don_hangs.id= ?', [$id]);
        return response()->json($data, 200);
    }

    public function getInformationOrderById($id)
    {
        $data = DB::select('SELECT don_hangs.* ,nguoi_dungs.TenNguoidung,nguoi_dungs.DiaChi,hinh_thuc_thanh_toans.TenThanhToan,hinh_thuc_giao_hangs.TenHinhThuc,nguoi_dungs.SDT
        FROM don_hangs, nguoi_dungs,hinh_thuc_thanh_toans,hinh_thuc_giao_hangs
        WHERE don_hangs.id=? AND don_hangs.hinh_thuc_giao_hangs_id=hinh_thuc_giao_hangs.id
         AND don_hangs.hinh_thuc_thanh_toans_id=hinh_thuc_thanh_toans.id AND nguoi_dungs.id=don_hangs.nguoi_dungs_id
        ', [$id]);
        return response()->json($data, 200);
    }
    public static function getProductOrdersByProduct($id)
    {
        $products = DB::select('SELECT SUM(SoLuong) AS amount FROM chi_tiet_don_hangs WHERE `san_phams_id` IN (SELECT id FROM san_phams WHERE id= ' . $id . ')');
        $amounts = $products[0];
        $amount = (int)$amounts->amount;
        return $amount;
    }
    public static function getProductOrdersByOrder($id)
    {
        $products = DB::select('SELECT SUM(SoLuong) AS amount FROM chi_tiet_don_hangs WHERE `don_hangs_id` IN (SELECT id FROM don_hangs WHERE id= ' . $id . ')');
        $amounts = $products[0];
        $amount = (int)$amounts->amount;
        return $amount;
    }
    public function getOrderCanceled($id)
    {
        $data= DB::select('SELECT don_hangs.id,don_hangs.ThoiGianMua,hinh_thuc_giao_hangs.TenHinhThuc,hinh_thuc_thanh_toans.TenThanhToan,don_hangs.Tongtien,trang_thai_don_hangs.TenTrangThai
        FROM don_hangs , hinh_thuc_thanh_toans,hinh_thuc_giao_hangs, trang_thai_don_hangs
        WHERE don_hangs.hinh_thuc_giao_hangs_id=hinh_thuc_giao_hangs.id AND don_hangs.hinh_thuc_thanh_toans_id=hinh_thuc_thanh_toans.id AND don_hangs.trang_thai_don_hangs_id=trang_thai_don_hangs.id AND trang_thai_don_hangs.id=4 AND don_hangs.nguoi_dungs_id=?', [$id]);
        return response()->json($data);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\DonHang  $donHang
     * @return \Illuminate\Http\Response
     */
    public function destroy(DonHang $donHang)
    {
        //
    }
}
