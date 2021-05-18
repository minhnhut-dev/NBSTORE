<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddConstraintKeyChiTietCauHinh extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('chi_tiet_cau_hinhs', function (Blueprint $table) {
            $table->foreign('loai_san_phams_id')->references('id')->on('loai_san_phams');
            $table->foreign('cau_hinhs_id')->references('id')->on('cau_hinhs');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('chi_tiet_cau_hinhs', function (Blueprint $table) {
            //
            $table->dropForeign('chi_tiet_cau_hinhs_cau_hinhs_id_foreign');
            $table->dropForeign('chi_tiet_cau_hinhs_loai_san_phams_id_foreign');
        });
    }
}
