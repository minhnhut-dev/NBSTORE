<?php

namespace App\Http\Controllers;

use App\AnhSanPham;
use App\CauHinh;
use App\Components\Recursion;
use Illuminate\Http\Request;
use App\SanPham;
use App\LoaiSanPham;
use Illuminate\Support\Facades\DB;

class SanPhamController extends Controller
{
    //
    private $LoaiSanPham;
    public function __construct(LoaiSanPham $LoaiSanPham)
    {
        $this->htmlselect = '';
        $this->LoaiSanPham = $LoaiSanPham;
    }
    public function index()
    {

        $sanpham['listsanpham'] = SanPham::where('TrangThai', 1)->paginate(5);

        // return $data;
        //  return $data;
        return view('pages.quan-ly-san-pham', $sanpham);
    }

    public function ThemSanPham()
    {
        $data = LoaiSanPham::where('TrangThai', 1)->get();
        $dataOption = $this->LoaiSanPham::where('TrangThai', 1)->get();
        $Recursion = new Recursion($dataOption);
        $htmlOption = $Recursion->cat_parent();
        return view('pages.them.them-san-pham', compact('data', 'htmlOption'));
    }

    public function SuaSanPham($id)
    {
        // $data=SanPham::find($id);
        $data = SanPham::where('id', $id)->get();
        $data1 =  CauHinh::where('san_phams_id', $id)->get();        // $data=DB::select('select * from san_phams  where id =?', [$id]);
        // return $data;
        // $loaisanpham=LoaiSanPham::get();
        $dataOption = $this->LoaiSanPham::where('TrangThai', 1)->get();
        $Recursion = new Recursion($dataOption);
        $htmlOption = $Recursion->cat_parent();
        // return $data1;
        return view('pages.cap-nhat.cap-nhat-san-pham', compact('data', 'htmlOption', 'data1'));
    }

    public function InsertProducts(Request $request)
    {
        // $Ocung = "Ổ Cứng";
        // $CarDoHoa = "Card Đồ Họa";
        // $ManHinh = "Màn hình";
        // $CongGiaoTiep = "Cổng giao tiếp";
        // $TheNho = "Thẻ nhớ";
        // $HDH = "Hệ điều hành";
        // $Mausac = "Màu sắc";
        // $TrongLuong = "Trọng lượng";
        // $KichThuoc = "Kích thước";
        // $TocDoQuay = "Tốc độ quay";
        // $VatLieu = "Vật liệu";
        // $DoOn = "Độ ồn";
        // $TanNhiet = "Tản nhiệt";
        // $KetNoi = "Kết nối";
        // $TuoiTho = "Tuổi thọ";
        // $TocDoPhanhoi = "Tốc độ phản hồi";
        // $ThietKe = "Thiết kế";
        // $Hotro = "Hỗ trợ";
        // $PhuKien = "Phụ kiện";
        // $Nguon = "Nguồn";

        $data = new SanPham;
        $data1 = new CauHinh;
        $data->TenSanPham = $request->ten_san_pham;
        $data->ThongTin = $request->detail;
        $data->HangSanXuat = $request->HangSanXuat;
        $data->GiaCu = $request->GiaCu;
        $data->GiaKM = $request->GiaKM;
        $data->SoLuong = $request->SoLuong;
        $data->loai_san_phams_id = $request->LoaiSanPham;
        $data->AnhDaiDien=$request->imageFile[0];

        //Hình ảnh

        // if($request->hasFile('imageFile'))
        // {
        //     $image = $request->file('imageFile');
        //     $name = time() . '.' . $image->getClientOriginalExtension();
        //     $destinationPath = public_path('/images');
        //     $image->move($destinationPath, $name);
        //     $HinhAnh = $name;
        //     $data2->AnhSanPham=$HinhAnh;
        //     $data2->save();
        //    foreach($request->imageFile as $image)
        //    {
        //     $filenameWithText=$image->getClientOriginalName();
        //     $filename=pathinfo($filenameWithText,PATHINFO_FILENAME);
        //     $extension=$image->getClientOriginalExtension();
        //     $filenamestore=$filename.'_'.time().'.'.$extension;
        //     $path=$image->storeAS('public/images',$filenamestore);
        //     $data2->AnhSanPham=$filenamestore;
        //     $data2->san_phams_id=$data->id;
        //     // $data2->save();
        //     return $data2;
        //    }
        // }

        // return $data1;
        if($request->hasFile('imageFile'))
        {
            foreach($request->file('imageFile') as $image)
            {
                $data2 = new AnhSanPham;
                // $name=$image->getClientOriginalName();
                $nameimages= time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path().'/images/',$nameimages);
                $data2->san_phams_id=$data->id;
                $data2->AnhSanPham=$nameimages;
                $data2->save();
            }
        }
        // $data2->AnhSanPham=json_encode($imageUpload);
        return redirect('/quan-ly-san-pham');
    }

    public function UpdateProduct(Request $request, $id)
    {
        $Ocung = "Ổ Cứng";
        $CarDoHoa = "Card Đồ Họa";
        $ManHinh = "Màn hình";
        $CongGiaoTiep = "Cổng giao tiếp";
        $TheNho = "Thẻ nhớ";
        $HDH = "Hệ điều hành";
        $Mausac = "Màu sắc";
        $TrongLuong = "Trọng lượng";
        $KichThuoc = "Kích thước";
        $TocDoQuay = "Tốc độ quay";
        $VatLieu = "Vật liệu";
        $DoOn = "Độ ồn";
        $TanNhiet = "Tản nhiệt";
        $KetNoi = "Kết nối";
        $TuoiTho = "Tuổi thọ";
        $TocDoPhanhoi = "Tốc độ phản hồi";
        $ThietKe = "Thiết kế";
        $Hotro = "Hỗ trợ";
        $PhuKien = "Phụ kiện";
        $Nguon = "Nguồn";

        // $QueryData = DB::select("SELECT cau_hinhs.id
        //     FROM cau_hinhs , san_phams
        //     WHERE cau_hinhs.san_phams_id=san_phams.id AND cau_hinhs.san_phams_id=?", [$id]);

        $data = SanPham::find($id);
        // $data1 = CauHinh::find(1);

        $data->TenSanPham=$request->ten_san_pham;
        $data->ThongTin=$request->detail;
        $data->HangSanXuat=$request->HangSanXuat;
        $data->GiaCu=$request->GiaCu;
        $data->GiaKM=$request->GiaKM;
        $data->SoLuong=$request->SoLuong;
        $data->loai_san_phams_id=$request->loai;
        $data->save();

        //CauHinh
        // $data1->CPU=$request->CPU;
        // $data1->RAM=$request->RAM;
        // $data1->$CarDoHoa=$request->Cardohoa;
        // $data1->$ManHinh=$request->Manhinh;
        // $data1->$Ocung=$request->Ocung;
        // $data1->$CongGiaoTiep=$request->Conggiaotiep;
        // $data1->FDD=$request->FDD;
        // $data1->$TheNho=$request->Thenho;
        // $data1->Audio=$request->Audio;
        // $data1->LAN=$request->LAN;
        // $data1->WIFI=$request->WIFI;
        // $data1->BLuetooth=$request->Bluetooth;
        // $data1->Webcam=$request->Webcam;
        // $data1->Camera=$request->Camera;
        // $data1->$HDH=$request->HDH;
        // $data1->PIN=$request->PIN;
        // $data1->$Mausac=$request->Mausac;
        // $data1->$TrongLuong=$request->Trongluong;
        // $data1->$KichThuoc=$request->Kichthuoc;
        // $data1->$TocDoQuay=$request->Tocdoquay;
        // $data1->$VatLieu=$request->Vatlieu;
        // $data1->$DoOn=$request->Doon;
        // $data1->$TanNhiet=$request->Tannhiet;
        // $data1->$KetNoi=$request->Ketnoi;
        // $data1->$TuoiTho=$request->Tuoitho;
        // $data1->Switch=$request->Switch;
        // $data1->$TocDoPhanhoi=$request->Tocdophanhoi;
        // $data1->$ThietKe=$request->Thietke;
        // $data1->Model=$request->Model;
        // $data1->$Hotro=$request->Hotro;
        // $data1->$PhuKien=$request->Phukien;
        // $data1->Mainboard=$request->Mainboard;
        // $data1->$Nguon=$request->Nguon;
        // $data1->Case=$request->Case;
        // $data1->Fan=$request->Fan;
        // $data1->save();
        // return $QueryData;
        // return $data1;
        // echo ($QueryData);
        return redirect('/quan-ly-san-pham');
    }

    public function DeleteProduct($id)
    {
        $data = SanPham::find($id);
        $data->TrangThai = 0;
        $data->save();
        return redirect('/quan-ly-san-pham');
    }

    // API

    public function GetProductSeal()
    {
        $Product= SanPham::OrderBy('giaKM','ASC')->get();
        return response()->json($Product,200);
        // $listProducts="[";

        // $Product=  SanPham::OrderBy('giaKM','ASC')->get();
        // foreach($Product as $item)
        // {

        //     $imageProducts=DB::select('select anh_san_phams.AnhSanPham from anh_san_phams where anh_san_phams.san_phams_id ='.$item->id);
        //     $string=json_encode($imageProducts);
        //     $add="{ id:".$item->id.", TenSanPham:".'"'.$item->TenSanPham.'"'.", HangSanXuat: ".'"'.$item->HangSanXuat.'"'.", GiaCu:".$item->GiaCu.", GiaKM:".$item->GiaKM.", ThongTin: ".'"'.$item->ThongTin.'"'.", images:".$string."},";
        //     $listProducts=$listProducts.$add;

        // }
        // $listProducts.="]";
        //  return response($listProducts);
    }
    public function GetImageProductByid($id)
    {
        $imageProducts=DB::select('SELECT anh_san_phams.AnhSanPham
        FROM anh_san_phams
        WHERE anh_san_phams.san_phams_id=?', [$id]);
        return response($imageProducts,200);
    }


}
