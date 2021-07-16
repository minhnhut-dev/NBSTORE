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
use PhpParser\Node\Expr\Cast\Object_;

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

        $data = SanPham::where('san_phams.id', $id)
        // ->join('loai_san_phams','loai_san_phams.id','san_phams.loai_san_phams_id')
        // ->select('san_phams.id')
        ->get();
        $category = LoaiSanPham::where('id', $data[0]->loai_san_phams_id)->first();
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

        return view('pages.cap-nhat.cap-nhat-san-pham', compact('data', 'htmlOption','category', 'html'));
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

    public function GetAccessories()
    {
        $accessories=DB::select('SELECT *
        FROM loai_san_phams
        WHERE loai_san_phams.parent_id=5');
        return response()->json($accessories,200);

    }

    public function getTypeProductById($id)
    {
        // $data=DB::select('SELECT san_phams.*
        // FROM loai_san_phams , san_phams
        // WHERE san_phams.loai_san_phams_id = loai_san_phams.id AND loai_san_phams.id= ?', [$id]);

        $data=DB::table('san_phams')
            ->join('loai_san_phams','san_phams.loai_san_phams_id','=','loai_san_phams.id')
            ->where('san_phams.loai_san_phams_id','=',$id)->orWhere('loai_san_phams.parent_id','=',$id)
            ->select('san_phams.*')
            ->paginate(2);
        return response()->json($data,200);
    }

    public function GetAllProduct()
    {
        $data=SanPham::get();
        return response()->json($data,200);
    }
    public function getProductByTypeProductId($id){
        // $listProduct=SanPham::where('loai_san_phams_id',$id)->get();
            $listProduct=DB::select('SELECT san_phams.*
            FROM san_phams
            JOIN loai_san_phams ON san_phams.loai_san_phams_id = loai_san_phams.id
            WHERE san_phams.loai_san_phams_id = ? OR loai_san_phams.parent_id =?', [$id,$id]);
        return response()->json($listProduct,200);
    }
    public function search($keyword)
    {
        $data = DB::select('select * from san_phams where TenSanPham  like concat("%",?,"%") ', [$keyword]);
        return response()->json($data,200);
    }

    public function test($id)
    {
        // $data = LoaiSanPham::with(['products', 'childrenRecursive', 'childrenRecursive.products'])->where('id', $id)->get()->toArray();
        // return $data;
        // $categories = LoaiSanPham::where('parent_id', $id)
        //                           ->orWhere('id', $id)

        //                             ->join('san_phams','san_phams.loai_san_phams_id','=','loai_san_phams.id')
        //                           ->select('san_phams.*')
        //                           ->latest()
        //                           ->get();
        //                           return $categories;
        // $listProduct=DB::select('SELECT san_phams.*
        // FROM san_phams
        // JOIN loai_san_phams ON san_phams.loai_san_phams_id = loai_san_phams.id
        // WHERE san_phams.loai_san_phams_id = ? OR loai_san_phams.parent_id =?', [$id,$id]);
        // return $listProduct;
         $user = DB::table('san_phams')->select('loai_san_phams_id')->where('id', $id)->get();
         $typeId=(object)$user[0]->loai_san_phams_id;

         return response()->json($typeId);
    }

    public function SuggestProduct($id)
    {
        $data= DB::table('san_phams')
                    ->join('loai_san_phams','san_phams.loai_san_phams_id','=','loai_san_phams.id')
                    ->where('loai_san_phams.id','=',$id)
                    ->select('san_phams.*')
                    ->orderBy('GiaKM','ASC')
                    ->get();
        return response()->json($data,200);
    }
    // api build configs
    public function CPU()
    {
        $cpu=DB::table('san_phams')
        ->join('loai_san_phams','san_phams.loai_san_phams_id','=','loai_san_phams.id')
        ->select('san_phams.*')
        ->where('loai_san_phams.TenLoai','=','CPU')->where('san_phams.TrangThai','=',1)
        ->get();
        return response()->json($cpu);
    }

}
