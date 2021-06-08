<?php

namespace App\Http\Controllers;

use App\AnhSanPham;
use App\CauHinh;
use App\Components\Recursion;
use Illuminate\Http\Request;
use App\SanPham;
use App\LoaiSanPham;
use Hamcrest\Core\HasToString;
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
        return view('pages.quan-ly-san-pham', $sanpham);
    }

    public function ThemSanPham()
    {
        $data = LoaiSanPham::where('TrangThai', 1)->get();
        $dataOption = $this->LoaiSanPham::where('TrangThai', 1)->get();
        $Recursion = new Recursion($dataOption);

        $configs = DB::table('chi_tiet_cau_hinhs')
            ->join('cau_hinhs', 'chi_tiet_cau_hinhs.cau_hinhs_id', '=', 'cau_hinhs.id')
            ->where('chi_tiet_cau_hinhs.loai_san_phams_id', '=', $dataOption[0]->id)->get();
        $html = '';

        foreach ($configs as $item) {
            $html .= '<div class="form-group col-12"><label for="' . $item->KeyName . '">'
                . $item->TenCauHinh . ':</label><input type="text" class="form-control" id="'
                . $item->KeyName . '" placeholder="Nhập tên '
                . $item->TenCauHinh . '"name="' . $item->KeyName . '" ></div>';
        }
        $htmlOption = $Recursion->cat_parent();
        return view('pages.them.them-san-pham', compact('data', 'htmlOption', 'html'));
    }

    public function SuaSanPham($id)
    {

        $data = SanPham::where('san_phams.id', $id)->join('loai_san_phams','loai_san_phams.id','san_phams.loai_san_phams_id')->get();
        $dataOption = $this->LoaiSanPham::where('TrangThai', 1)->get();
        $configs = json_decode($data[0]->CauHinh);
        $html = '';

        $configs_by_category = DB::table('chi_tiet_cau_hinhs')
            ->join('cau_hinhs', 'chi_tiet_cau_hinhs.cau_hinhs_id', '=', 'cau_hinhs.id')
            ->where('chi_tiet_cau_hinhs.loai_san_phams_id', '=', $data[0]->loai_san_phams_id)->get();
        $len = sizeof($configs_by_category);

        if ($len > 0)

            for ($i = 0; $i < $len; $i++) {
                $key = $configs_by_category[$i]->KeyName;
                $cont = null;
                try {
                    $content = $configs->$key;
                    $cont = $content->content;
                } catch (\ErrorException $e) {
                    $cont = null;

                }

                $html .= '<div class="form-group col-12"><label for="'
                    . $key . '">' . $configs_by_category[$i]->TenCauHinh . ':</label><input type="text" class="form-control" id="'
                    . $key . '" placeholder="Nhập ' . $configs_by_category[$i]->TenCauHinh . '"name="'
                    . $key . '" value="' . $cont . '"></div>';
            }
            else{
                $html = '<div class="card-header"><label>Loại sản phẩm này chưa có cấu hình vui lòng thêm cấu hình<label></div>';
            }


        $Recursion = new Recursion($dataOption);
        $htmlOption = $Recursion->cat_parent();

        return view('pages.cap-nhat.cap-nhat-san-pham', compact('data', 'htmlOption', 'html'));
    }

    public function InsertProducts(Request $request)
    {

        $data = new SanPham;

        $data->TenSanPham = $request->ten_san_pham;
        $data->ThongTin = $request->detail;
        $data->HangSanXuat = $request->HangSanXuat;
        $data->GiaCu = $request->GiaCu;
        $data->GiaKM = $request->GiaKM;
        $data->SoLuong = $request->SoLuong;
        $data->loai_san_phams_id = $request->LoaiSanPham;
        if ($request->hasFile('AnhDaiDien')) {
            $image = $request->file('AnhDaiDien');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/images');
            $image->move($destinationPath, $name);
            $HinhAnh = $name;
        } else {
            $HinhAnh = "meo.jpg"; // nếu k thì có thì chọn tên ảnh mặc định ảnh mặc định
        }
        $data->AnhDaiDien=$HinhAnh;
        $configs = DB::table('chi_tiet_cau_hinhs')
            ->join('cau_hinhs', 'chi_tiet_cau_hinhs.cau_hinhs_id', '=', 'cau_hinhs.id')
            ->where('chi_tiet_cau_hinhs.loai_san_phams_id', '=', $request->LoaiSanPham)->get();

        $configJson = array();

        foreach ($configs as $item) {
            $config = array();
            $key = $config['key'] = $item->KeyName;
            $config['config_name'] = $item->TenCauHinh;

            $config['content'] = $request->$key;

            $configJson[$key] = $config;
        }


        $cauhinhString = json_encode($configJson);

        $data->CauHinh = $cauhinhString;
        $data->save();



        if ($request->hasFile('imageFile')) {
            foreach ($request->file('imageFile') as $image) {
                $imageProduct = new AnhSanPham;
                $nameimages = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path() . '/images/', $nameimages);
                $imageProduct->AnhSanPham = $nameimages;
                $imageProduct->san_phams_id = $data->id;
                $imageProduct->save();
            }
        }


        return redirect('/quan-ly-san-pham');
    }
    public static function AffterOrder($id,$soluong)
    {

        $data = SanPham::find($id);
        if($data->SoLuong<$soluong){
            return ['result'=>false,'amount'=>$data->SoLuong,'name'=>$data->TenSanPham];
        }
        else{
            $amount=$data->SoLuong-$soluong;
            $data->SoLuong =  $amount;
            $data->save();
            return ['result'=>true,'amount'=>$data->SoLuong];
        }
        return ['result'=>false,'amount'=>$data->SoLuong,'name'=>$data->TenSanPham];
    }
    public function UpdateProduct(Request $request, $id)
    {

        $data = SanPham::find($id);
        // $data1 = CauHinh::find(1);

        $data->TenSanPham = $request->ten_san_pham;
        $data->ThongTin = $request->detail;
        $data->HangSanXuat = $request->HangSanXuat;
        $data->GiaCu = $request->GiaCu;
        $data->GiaKM = $request->GiaKM;
        $data->SoLuong = $request->SoLuong;

        $configs = DB::table('chi_tiet_cau_hinhs')
            ->join('cau_hinhs', 'chi_tiet_cau_hinhs.cau_hinhs_id', '=', 'cau_hinhs.id')
            ->where('chi_tiet_cau_hinhs.loai_san_phams_id', '=', $request->LoaiSanPham)->get();

        $configJson = array();
        if (sizeof($configs) > 0)
            foreach ($configs as $item) {
                $config = array();
                $key = $config['key'] = $item->KeyName;
                $config['config_name'] = $item->TenCauHinh;

                $config['content'] = $request->$key;

                $configJson[$key] = $config;
            }

        $cauhinhString = json_encode($configJson);
        $data->CauHinh = $cauhinhString;
        $data->save();

        return redirect('/quan-ly-san-pham');
    }

    public function DeleteProduct($id)
    {
        $data = SanPham::find($id);
        $data->TrangThai = 0;
        $data->save();
        return redirect('/quan-ly-san-pham');
    }
    public function ConfigByCategory($id)
    {
        $configs = DB::table('chi_tiet_cau_hinhs')
            ->join('cau_hinhs', 'chi_tiet_cau_hinhs.cau_hinhs_id', '=', 'cau_hinhs.id')
            ->where('chi_tiet_cau_hinhs.loai_san_phams_id', '=', $id)->get();
        $html = '';
        foreach ($configs as $item) {
            $html .= '<div class="form-group col-12"><label for="'
            . $item->KeyName . '">'
            . $item->TenCauHinh .':</label> <input type="text" class="form-control" id="'
            . $item->KeyName .'" placeholder="Nhập tên '
            . $item->TenCauHinh . '"name="'
            . $item->KeyName . '" > </div>';
        }
        if (sizeof($configs) > 0)
            return response()->json(['message' => 'success', 'html' => $html]);
        return response()->json(['message' => 'unsuccessful']);
    }

    // api
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
    public function GetProductById($id)
    {
        $products = SanPham::where('id',$id )->get();
        return response()->json($products);
    }

    public function GetProductMouse()
    {
        $productMouse=DB::select('SELECT san_phams.* FROM san_phams , loai_san_phams
        WHERE san_phams.loai_san_phams_id=loai_san_phams.id AND loai_san_phams.id=1');
        return response()->json($productMouse,200);
    }
}
