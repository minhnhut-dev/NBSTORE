<?php

namespace App\Http\Controllers;

use App\Components\Recursion;
use Illuminate\Http\Request;
use App\LoaiSanPham;
use App\SanPham;
use App\Http\Controllers\SanPhamController;
use Illuminate\Support\Facades\DB;

class LoaiSanPhamController extends Controller
{
    private $LoaiSanPham;
    public function __construct(LoaiSanPham $LoaiSanPham)
    {
        $this->htmlselect = '';
        $this->LoaiSanPham = $LoaiSanPham;
    }
    //
    public static function showCategories($categories, $parent_id = 0, $char = '')
    {
        $space = str_repeat('&nbsp;', 3);
        foreach ($categories as $key => $item) {
            // Nếu là chuyên mục con thì hiển thị
            if ($item['parent_id'] == $parent_id) {
                echo '<option value="' . $item['TenLoai'] . '">';
                echo $char . $item['TenLoai'];
                echo '</option>';

                unset($categories[$key]);
                LoaiSanPhamController::showCategories($categories, $item['id'], $char . $space);
            }
        }
    }
    public function index(Request $request)
    {
        $data = LoaiSanPham::where('TrangThai', 1);
        $categories = LoaiSanPham::where('TrangThai', 1)->get();

        if ($request->search) {

            $data =  LoaiSanPham::where('TrangThai', 1)->where('TenLoai', 'LIKE', '%' . $request->search . '%');
        }
        $checkDel = [];



        foreach ($categories as $item) {
            $kq = LoaiSanPhamController::checkDeleteCategory($categories, $item->id);
            $categoryCheck = ['id' => $item->id, 'delete' => $kq, 'name' => $item->TenLoai];
            array_push($checkDel, $categoryCheck);
        }
        $data = $data->paginate(10);
        return view('pages.quan-ly-loai-san-pham', compact('data', 'checkDel'));
    }
    public function indexTrash(Request $request)
    {
        $data = LoaiSanPham::where('TrangThai','<>', 1);

        if ($request->search) {

            $data =  LoaiSanPham::where('TrangThai','<>' ,1)->where('TenLoai', 'LIKE', '%' . $request->search . '%');
        }
    
        $data = $data->paginate(10);
        return view('pages.thung-rac-loai-san-pham', compact('data'));
    }


    public function ThemLoai()
    {
        $data = $this->LoaiSanPham::where('TrangThai', 1)->get();
        $Recursion = new Recursion($data);
        $htmlOption = $Recursion->cat_parent();

        // return LoaiSanPhamController::checkDeleteCategory($data,11);
        return view('pages.them.them-loai-san-pham', compact('htmlOption'));
    }


    public function CapNhatLoaiSanPham($id)
    {


       
        $data = LoaiSanPham::where('id', $id)->get();
        $dataOptions = $this->LoaiSanPham::where('TrangThai', 1)->where('id','<>',$id)->get();
        $Recursion = new Recursion($dataOptions);
        // lấy cấu hình thuộc loại
        $configs_added = DB::table('chi_tiet_cau_hinhs')
            ->join('cau_hinhs', 'chi_tiet_cau_hinhs.cau_hinhs_id', '=', 'cau_hinhs.id')
            ->where('chi_tiet_cau_hinhs.loai_san_phams_id', '=', $id)->get();


        $html_configs_added = '';
        foreach ($configs_added as $val) {

            $html_configs_added .= "<option value=" . $val->cau_hinhs_id . ">" . $val->TenCauHinh . "</option>";
        }
        // lấy cấu hình chưa thuộc loại
        $configs_not_added = DB::select('SELECT * FROM `cau_hinhs`
        WHERE id NOT IN
        (SELECT cau_hinhs_id
            FROM chi_tiet_cau_hinhs
            WHERE loai_san_phams_id =' . $id . '
        )');

        $html_configs_not_added = '';
        foreach ($configs_not_added as $val) {
            $html_configs_not_added .= "<option value=" . $val->id . ">" . $val->TenCauHinh . "</option>";
        }
        $htmlOption = $Recursion->cat_parent_selected(0,'',$data[0]->parent_id);
        $kq = LoaiSanPhamController::checkDeleteCategory($dataOptions, $data[0]->id);
        return view('pages.cap-nhat.cap-nhat-loai-san-pham', compact('data', 'htmlOption', 'html_configs_added', 'html_configs_not_added','kq'));
    }
    public function InsertProductType(Request $request)
    {
        $data = new LoaiSanPham;
        try {
            $data->TenLoai = $request->ten_loai;
            $data->parent_id = $request->parent_id;
    
            $data->icon = $request->icon;
        
            $data->save();
        } catch (\Throwable $th) {
            return redirect('/quan-ly-loai-san-pham');

        }
   
        if($data->parent_id){
            try {
                  $parent_added_configs = DB::table('chi_tiet_cau_hinhs')
 
                ->where('loai_san_phams_id', '=', $data->parent_id)->get();
                foreach ($parent_added_configs as $item) {
                    DB::insert('insert into chi_tiet_cau_hinhs (loai_san_phams_id, cau_hinhs_id) values (?, ?)', [$data->id, $item->cau_hinhs_id]);
                }

            } catch (\Throwable $th) {
                return redirect('/quan-ly-loai-san-pham/update/'.$data->id);
            }   
        }
        return redirect('/quan-ly-loai-san-pham/update/'.$data->id);
        // return $data;
    }

    public function UpdateProductType(Request $request, $id)
    {
        $__parent = 0;
        $data = LoaiSanPham::find($id);
        $data->TenLoai = $request->ten_loai;
        $data->parent_id = $request->parent_id;
        // $subjectVal =$request->icon;

        // $replace_class=str_replace('class','className',$subjectVal);
        // $data->icon=$replace_class;
        $data->icon = $request->icon;
        // return $data;
        $data->save();
        return redirect('/quan-ly-loai-san-pham');
    }

    public function DeleteProductType(Request $request, $id)
    {
        $data = LoaiSanPham::where('TrangThai', 1)->get();
        $category = LoaiSanPham::find($id);
        if (!LoaiSanPhamController::checkDeleteCategory($data, $id)) {

            $category->TrangThai = 0;
            $category->parent_id = null;

            $category->save();
        }
        if ($request->page) $page = 'page=' . $request->page;
        else $page = '';
        return redirect("/quan-ly-loai-san-pham?$page");
    }
    public function recoverProductType(Request $request, $id)
    {
             $category = LoaiSanPham::find($id);
            $category->TrangThai = 1;
            $category->save();

        if ($request->page) $page = 'page=' . $request->page;
        else $page = '';
        return redirect("/quan-ly-loai-san-pham/thung-rac?$page");
    }

    public function checkDeleteCategory($data, $id)
    {

        if (LoaiSanPhamController::checkSanPhamThuocLoai($id)) {

            return true;
        } else {

            return LoaiSanPhamController::recursiveCategory($data, $id);
        }
    }

    public  function  recursiveCategory($data, $id, $char = '')
    {
        $space = str_repeat('&nbsp;', 8);
        $temp = false;
        // echo $char . ' [ Tìm kiếm tree từ categoryId: ' . $id . ' ] ';
        // echo '<br>';
        $count = true;
        foreach ($data as $key => $val) {
            if ($val['parent_id'] == $id) {
                $count = false;
                return true;
                unset($data[$key]);
                if (LoaiSanPhamController::checkSanPhamThuocLoai($val['id']))  {
                    // echo $char . ' [ Trả về kết quả true ]';
                   $temp = true;
                  
                } else {
                    // echo $char . ' [ Không có sản phẩm thuộc cateogryId: ' . $val['id'] . ' Gọi đệ quy tại category cha có id: ' . $val['id'] . '] ';
                    // echo ' <br>';
                    $temp = LoaiSanPhamController::recursiveCategory($data, $val['id'], $char . $space . '↓');
                }
            }
        }
        // if ($count) {
        //     echo $char . ' [ Category : ' . $id . ' không có category con  ] ';
        //     echo '<br>';
        // }

        return $temp;
    }
    public  function checkSanPhamThuocLoai($id)
    {
        $kq = (bool)false;

        $sanphams = SanPham::where('TrangThai', 1)->get();


        foreach ($sanphams as $item) {
            if ($item->loai_san_phams_id == $id) {
                // echo ' [ Có sản phẩm { ' . $item->TenSanPham . ' }  thuộc loại sản phẩm : ' . $id . ' -> không thể xoá -> return true ] ';
                // echo '<br>';
                $kq = (bool)true;
                break;
            }
        }
        // $string = $kq ? 'true' : 'false';
        // echo 'Kết quả check ' . $string;
        // echo '<br>';
        return $kq;
    }

    // api
    public function AddConfigsAPI(Request $req, $id)
    {

        foreach ($req->configIds as $item) {
            try{
                DB::insert('insert into chi_tiet_cau_hinhs (loai_san_phams_id, cau_hinhs_id) values (?, ?)', [$id, $item]);
            } catch(\Exception $e){
                return response([],402);
            }
        }
        $configs_added = DB::table('chi_tiet_cau_hinhs')
            ->join('cau_hinhs', 'chi_tiet_cau_hinhs.cau_hinhs_id', '=', 'cau_hinhs.id')
            ->where('chi_tiet_cau_hinhs.loai_san_phams_id', '=', $id)->get();


        $html_configs_added = '<select id="configs-added" class="form-control" size="10" style="height: 100%;" multiple="multiple" name="configs-added[]">';
        foreach ($configs_added as $val) {

            $html_configs_added .= "<option value=" . $val->cau_hinhs_id . ">" . $val->TenCauHinh . "</option>";
        }
        $html_configs_added .= '</select>';
        // lấy cấu hình chưa thuộc loại
        $configs_not_added = DB::select('SELECT * FROM `cau_hinhs`
        WHERE id NOT IN
        (SELECT cau_hinhs_id
            FROM chi_tiet_cau_hinhs
            WHERE loai_san_phams_id =' . $id . '
        )');

        $html_configs_not_added = '<select id="configs-not-added" class="form-control" size="10" style="height: 100%;" multiple="multiple" name="configs-not-added[]">';
        foreach ($configs_not_added as $val) {
            $html_configs_not_added .= "<option value=" . $val->id . ">" . $val->TenCauHinh . "</option>";
        }
        $html_configs_not_added .= '</select>';

        return response()->json(['html_configs_added' => $html_configs_added, 'html_configs_not_added' => $html_configs_not_added]);
    }
    public function DeleteConfigsAPI(Request $req, $id)
    {

        foreach ($req->configIds as $item) {
            DB::delete('DELETE FROM chi_tiet_cau_hinhs WHERE chi_tiet_cau_hinhs.loai_san_phams_id = ? AND chi_tiet_cau_hinhs.cau_hinhs_id = ?', [$id, $item]);
        }
        $configs_added = DB::table('chi_tiet_cau_hinhs')
            ->join('cau_hinhs', 'chi_tiet_cau_hinhs.cau_hinhs_id', '=', 'cau_hinhs.id')
            ->where('chi_tiet_cau_hinhs.loai_san_phams_id', '=', $id)->get();


        $html_configs_added = '<select id="configs-added" class="form-control" size="10" style="height: 100%;" multiple="multiple" name="configs-added[]">';
        foreach ($configs_added as $val) {

            $html_configs_added .= "<option value=" . $val->cau_hinhs_id . ">" . $val->TenCauHinh . "</option>";
        }
        $html_configs_added .= '</select>';
        // lấy cấu hình chưa thuộc loại
        $configs_not_added = DB::select('SELECT * FROM `cau_hinhs`
        WHERE id NOT IN
        (SELECT cau_hinhs_id
            FROM chi_tiet_cau_hinhs
            WHERE loai_san_phams_id =' . $id . '
        )');

        $html_configs_not_added = '<select id="configs-not-added" class="form-control" size="10" style="height: 100%;" multiple="multiple" name="configs-not-added[]">';
        foreach ($configs_not_added as $val) {
            $html_configs_not_added .= "<option value=" . $val->id . ">" . $val->TenCauHinh . "</option>";
        }
        $html_configs_not_added .= '</select>';

        return response()->json(['html_configs_added' => $html_configs_added, 'html_configs_not_added' => $html_configs_not_added]);
    }
    public function AddConfigAPI(Request $req, $id)
    {
        $key = $this->convert_name($req->config);
        DB::insert('insert into cau_hinhs (TenCauHinh, KeyName) values (?, ?)', [$req->config, $key]);


        // lấy cấu hình chưa thuộc loại
        $configs_not_added = DB::select('SELECT * FROM `cau_hinhs`
        WHERE id NOT IN
        (SELECT cau_hinhs_id
            FROM chi_tiet_cau_hinhs
            WHERE loai_san_phams_id =' . $id . '
        )');

        $html_configs_not_added = '<select id="configs-not-added" class="form-control" size="10" style="height: 100%;" multiple="multiple" name="configs-not-added[]">';
        foreach ($configs_not_added as $val) {
            $html_configs_not_added .= "<option value=" . $val->id . ">" . $val->TenCauHinh . "</option>";
        }
        $html_configs_not_added .= '</select>';

        return response()->json(['html_configs_not_added' => $html_configs_not_added]);
    }
    //function supports
    function convert_name($str)
    {
        $str = preg_replace("/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/", 'a', $str);
        $str = preg_replace("/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/", 'e', $str);
        $str = preg_replace("/(ì|í|ị|ỉ|ĩ)/", 'i', $str);
        $str = preg_replace("/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/", 'o', $str);
        $str = preg_replace("/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/", 'u', $str);
        $str = preg_replace("/(ỳ|ý|ỵ|ỷ|ỹ)/", 'y', $str);
        $str = preg_replace("/(đ)/", 'd', $str);
        $str = preg_replace("/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/", 'A', $str);
        $str = preg_replace("/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/", 'E', $str);
        $str = preg_replace("/(Ì|Í|Ị|Ỉ|Ĩ)/", 'I', $str);
        $str = preg_replace("/(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/", 'O', $str);
        $str = preg_replace("/(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/", 'U', $str);
        $str = preg_replace("/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/", 'Y', $str);
        $str = preg_replace("/(Đ)/", 'D', $str);
        $str = preg_replace("/(\“|\”|\‘|\’|\,|\!|\&|\;|\@|\#|\%|\~|\`|\=|\_|\'|\]|\[|\}|\{|\)|\(|\+|\^)/", '_', $str);
        $str = preg_replace("/( )/", '_', $str);
        return strtolower($str);
    }
    public function getListTypeProduct()
    {
        $listTypeProduct = LoaiSanPham::where('TrangThai', 1)
            ->whereNull('parent_id')
            ->get();
        return response()->json($listTypeProduct, 200);
    }
    public function getTypeProductById($id)
    {
        $typeProduct = LoaiSanPham::find($id);
        return response()->json($typeProduct, 200);
    }
    //get typeProduct CPU
    public function getTypeCPU()
    {
        $TypeCPU = DB::table('loai_san_phams')
            ->where('TrangThai', '=', 1)->where('TenLoai', '=', 'CPU')
            ->get();
        return response()->json($TypeCPU);
    }
    //get type Ram
    public function getTypeRAM()
    {
        $TypeCPU = DB::table('loai_san_phams')
            ->where('TrangThai', '=', 1)->where('TenLoai', '=', 'RAM')
            ->get();
        return response()->json($TypeCPU);
    }
    // get type MainBoard
    public function getTypeMainBoard()
    {
        $TypeMainBoard = DB::table('loai_san_phams')
            ->where('TrangThai', '=', 1)->where('TenLoai', '=', 'MainBoard')
            ->get();
        return response()->json($TypeMainBoard);
    }
    // get type Monitor
    public function getTypeMonitor()
    {
        $TypeMonitor = DB::table('loai_san_phams')
            ->where('TrangThai', '=', 1)->where('TenLoai', '=', 'Monitor')
            ->get();
        return response()->json($TypeMonitor);
    }
    // get type Storage
    public function getTypeStorage()
    {
        $TypeStorager = DB::table('loai_san_phams')
            ->where('TrangThai', '=', 1)->where('TenLoai', '=', 'Storage')
            ->get();
        return response()->json($TypeStorager);
    }
    // get type Storage
    public function getTypePower()
    {
        $TypePower = DB::table('loai_san_phams')
            ->where('TrangThai', '=', 1)->where('TenLoai', '=', 'Power')
            ->get();
        return response()->json($TypePower);
    }
    // get type Storage
    public function getTypeVGA()
    {
        $TypeVGA = DB::table('loai_san_phams')
            ->where('TrangThai', '=', 1)->where('TenLoai', '=', 'VGA')
            ->get();
        return response()->json($TypeVGA);
    }
    // get type Cooler
    public function getTypeCooler()
    {
        $TypeCooler = DB::table('loai_san_phams')
            ->where('TrangThai', '=', 1)->where('TenLoai', '=', 'Cooler')
            ->get();
        return response()->json($TypeCooler);
    }
    public static function getChildCategory($categories)
    {
        foreach ($categories as $key => $item) {
                 $child_category = DB::table('loai_san_phams')->where('parent_id',$item->id)->get();
                 $item->childs=  $child_category;
        }
    }
    public static function treeCategory()
    {
        $categories = DB::table('loai_san_phams')->where('TrangThai', 1)->where('parent_id',Null)->get();
                LoaiSanPhamController::getChildCategory($categories);
                     foreach ($categories as $key => $item) {
                            LoaiSanPhamController::getChildCategory($item->childs);
                            // foreach ($item->childs as $key => $item) {
                            //     // foreach ($item->childs as $key => $item) {
                            //         LoaiSanPhamController::getChildCategory($item->childs);
                            //     // }
                            // }
                    }
        return $categories;
    }
    // public function checkDeleteCategory($data,$id){

    //     if(SanPhamController::checkSanPhamThuocLoai($id))
    //     {
    //         echo 'Have a product at Category :'.$id;
    //         return true;
    //     }
    //     else{

    //        return LoaiSanPhamController::recursiveCategory($data,$id);
    //     }
    // }

    // public static function  recursiveCategory($data,$id)
    // {


    //     foreach ($data as $key => $val) {
    //         if ($val['parent_id'] == $id) {
    //             unset($data[$key]);
    //             if(LoaiSanPhamController::checkSanPhamThuocLoai($val['id']))
    //             {   echo 'Have duplicate at '.$val['TenLoai'].'\\n';

    //                 return true;

    //             }
    //             else
    //              {
    //                  echo ' Call recursive at Id: '.$val['id'];
    //                  LoaiSanPhamController::recursiveCategory($data,$val['id']);
    //             }

    //         }
    //     }
    //     return false;
    // }
    // public static function checkSanPhamThuocLoai($id){
    //     $kq = false;
    //     $sanphams=SanPham::where('TrangThai',1)->get();


    //     foreach($sanphams as $item){
    //         if($item->loai_san_phams_id==$id){
    //             echo 'Have a product at Category :'.$id;
    //             $kq= true;
    //             echo 'Ket qua check ton tai :'.'Id : '.$id.'la: '. $kq;
    //             break;
    //         }

    //     }

    //     return $kq;
    // }
}
