<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChiTietCauHinhsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chi_tiet_cau_hinhs', function (Blueprint $table) {
            $table->unsignedBigInteger('loai_san_phams_id');
            $table->unsignedBigInteger('cau_hinhs_id');
            $table->primary(array('loai_san_phams_id','cau_hinhs_id'));
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chi_tiet_cau_hinhs');
    }
}
