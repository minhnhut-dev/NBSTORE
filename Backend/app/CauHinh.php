<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\SanPham;
class CauHinh extends Model
{
    //
    protected $table='cau_hinhs';
    public $timestamps=false;
    public function SanPham()
    {
        return $this->belongsTo(SanPham::class,'san_phams_id','id');
    }
}
