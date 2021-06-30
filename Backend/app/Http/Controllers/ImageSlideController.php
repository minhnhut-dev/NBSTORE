<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ImageSlide;
use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Auth;
use App\Classes\ActivationService;
use App\Classes\ResetPasswordService;
use Illuminate\Auth\Events\Registered;
class ImageSlideController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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
                    $nameimages = time() . '.' . $image->getClientOriginalExtension();
                    $image->move(public_path() . '/slides/', $nameimages);
                    $image_slide->image_name = $nameimages;
                    $image_slide->save();
                }
                $imgs =  ImageSlide::get();
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
