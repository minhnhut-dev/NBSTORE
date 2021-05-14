<?php

namespace App\Http\Controllers;
use App\Components\Recursion;
use Illuminate\Http\Request;
use App\LoaiSanPham;
use App\SanPham;
use App\Http\Controllers\SanPhamController;
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
        foreach ($categories as $key => $item)
        {
            // Nếu là chuyên mục con thì hiển thị
            if ($item['parent_id'] == $parent_id)
            {
                echo '<option value="'.$item['TenLoai'].'">';
                    echo $char . $item['TenLoai'];
                echo '</option>';

                unset($categories[$key]);
                LoaiSanPhamController::showCategories($categories, $item['id'], $char.$space);
            }
        }
    }
    public function index()
    {
        $data['listloaisanpham'] = LoaiSanPham::where('TrangThai', 1)->paginate(5);
        // return $data;
        return view('pages.quan-ly-loai-san-pham', $data);
    }

    public function ThemLoai()
    {
        $data =$this->LoaiSanPham::where('TrangThai',1)->get();
        $Recursion = new Recursion($data);
        $htmlOption=$Recursion->cat_parent();

        // return LoaiSanPhamController::checkDeleteCategory($data,11);
        return view('pages.them.them-loai-san-pham', compact('htmlOption'));
    }


    public function CapNhatLoaiSanPham($id)
    {
        // $data=LoaiSanPham::find($id);
        $dataOptions =$this->LoaiSanPham::where('TrangThai',1)->get();
        $Recursion = new Recursion($dataOptions);
        $htmlOption=$Recursion->cat_parent();
        $data = LoaiSanPham::where('id', $id)->get();
        // return $data;
        return view('pages.cap-nhat.cap-nhat-loai-san-pham', compact('data','htmlOption'));
    }
    public function InsertProductType(Request $request)
    {
        $data = new LoaiSanPham;
        $data->TenLoai = $request->ten_loai;
        $data->parent_id = $request->parent_id;
        $data->save();
        return redirect('/quan-ly-loai-san-pham');
        // return $data;
    }

    public function UpdateProductType(Request $request, $id)
    {
        $__parent = 0;
        $data = LoaiSanPham::find($id);
        $data->TenLoai = $request->ten_loai;
        $data->parent_id = $request->parent_id;
        $data->save();
        return redirect('/quan-ly-loai-san-pham');
    }

    public function DeleteProductType($id)
    {
        $data = LoaiSanPham::find($id);
        if(LoaiSanPhamController::checkDeleteCategory($data,$id))
        {
            return "Không thể xóa";
        }
        else
        {
            $data->TrangThai = 0;
            $data->save();
        }

        return redirect('/quan-ly-loai-san-pham');
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
    public function checkDeleteCategory($data,$id){

        if(LoaiSanPhamController::checkSanPhamThuocLoai($id))
        {

            return true;
        }
        else{

           return LoaiSanPhamController::recursiveCategory($data,$id);
        }
    }

    public  function  recursiveCategory($data,$id,$char='')
    {
        $space = str_repeat('&nbsp;', 8);
        $temp = false;
        echo $char.' [ Tìm kiếm tree từ categoryId: '.$id.' ] ';
        echo '<br>';
        $count = true;
        foreach ($data as $key => $val) {
            if ($val['parent_id'] == $id) {
                $count =false;
                unset($data[$key]);
                if(LoaiSanPhamController::checkSanPhamThuocLoai($val['id']))
                {
                    echo $char.' [ Trả về kết quả true ]';
                    $temp = true;
                    break;
                }
                else
                 {
                     echo $char.' [ Không có sản phẩm thuộc cateogryId: '.$val['id'].' Gọi đệ quy tại category cha có id: '.$val['id'].'] ';
                     echo ' <br>';
                     $temp= LoaiSanPhamController::recursiveCategory($data,$val['id'],$char.$space.'↓');
                }

            }
        }
        if($count)
        {
            echo $char.' [ Category : '.$id.' không có category con  ] ';
            echo '<br>';
        }

        return $temp;
    }
    public  function checkSanPhamThuocLoai($id){
        $kq = false;
        $sanphams=SanPham::where('TrangThai',1)->get();


        foreach($sanphams as $item){
            if($item->loai_san_phams_id==$id){
                echo ' [ Có sản phẩm { '.$item->TenSanPham.' }  thuộc loại sản phẩm : '.$id.' -> không thể xoá -> return true ] ';
                echo '<br>';
                $kq= true;
                break;
            }
        }
        echo 'Kết quả check: '.$kq;
        echo '<br>';
        return $kq;
    }
}
