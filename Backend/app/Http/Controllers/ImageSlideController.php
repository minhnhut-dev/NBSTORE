<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ImageSlide;
use App\AnhSanPham;

use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Auth;
use App\Classes\ActivationService;
use App\Classes\ResetPasswordService;
use Illuminate\Auth\Events\Registered;
class ImageSlideController extends Controller
{
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
        $str = preg_replace("/(\“|\”|\‘|\’|\,|\!|\&|\;|\@|\#|\%|\~|\`|\=|\_|\'|\]|\[|\}|\{|\)|\(|\+|\^)/", '-', $str);
        $str = preg_replace("/( )/", '-', $str);
        return strtolower($str);
    }
    public function index(Request $request)
    {
        $images =  ImageSlide::get();
        return view('pages.quan-ly-slide',compact('images'));
    }
    public function InsertImageAPI(Request $request)
    {
        try{      
                $images= $request->img;
                foreach($images as $image){
                    $image_slide = new ImageSlide;
                    $nameimages =  $this->convert_name($request->name).'-'. time() . '.' . $image->getClientOriginalExtension();
                    $image->move(public_path() . '/slides/', $nameimages);
                    $image_slide->image_name = $nameimages;
                    $image_slide->title =  $request->name;
                    $image_slide->save();
                }
                $imgs =  ImageSlide::get();
            return response()->json([ 'message'=>'succeess','images'=>$imgs ],200);
        } catch (\Exception $e){
            return response()->json([ 'message'=>$e,'err'=>'failed'],500);
        }

    }
    public function updateImageAPI(Request $request)
    {
        try{      
                $image_slide = ImageSlide::find($request->id);
                $image_name =  $this->convert_name($request->name).time();
                $image_slide->image_name= $image_name;
                $request->name;
                $imgs =  ImageSlide::get();
            return response()->json([ 'message'=>'succeess','images'=>$imgs ],200);
        } catch (\Exception $e){
            return response()->json([ 'message'=>$e,'err'=>'failed'],500);
        }

    }
    public function InsertProductImagesAPI(Request $request)
    {
        // dd($request->file('images'));
        try{      
                foreach($request->file('images') as $image)
                {
                    $image_temp = $image;
                    $product_image = new AnhSanPham;
                    $nameimages = time() . '.' . $image_temp->getClientOriginalExtension();
                    $image_temp->move(public_path() . '/images/', $nameimages);
                    $product_image->AnhSanPham = $nameimages;
                    $product_image->san_phams_id = $request->product_id;
                    $product_image->save();
                }
                $imgs =  AnhSanPham::where('san_phams_id','=',$request->product_id)->get();
            return response()->json([ 'message'=>'succeess','images'=>$imgs ],200);
        } catch (\Exception $e){
            return response()->json([ 'message'=>$e,'err'=>'failed'],500);
        }

    }
    public function DeleteImageAPI(Request $request)
    {
        try{      
            DB::table('table_image_slides')->where('id', '=', $request->id)->delete();
            $imgs =  ImageSlide::get();
            return response()->json([ 'message'=>'succeess','images'=>$imgs],200);
        } catch (\Exception $e){
            return response()->json([ 'message'=>$e,'err'=>'failed' ],500);
        }

    }
    public function DeleteImageProductAPI(Request $request)
    {
        try{      
            DB::table('anh_san_phams')->where('id', '=', $request->id)->delete();
            $imgs =  AnhSanPham::where('san_phams_id','=',$request->product_id)->get();
            return response()->json([ 'message'=>'succeess','images'=>$imgs],200);
        } catch (\Exception $e){
            return response()->json([ 'message'=>$e,'err'=>'failed' ],500);
        }

    }
    public function getURLImages(Request $request)
    {
        try{      
            $imgs =  ImageSlide::get();
            return response()->json([ 'message'=>'succeess','images'=>$imgs,'path'=>'/slides'],200);
        } catch (\Exception $e){
            return response()->json([ 'message'=>'failed','err'=> $e],500);
        }

    }

}
