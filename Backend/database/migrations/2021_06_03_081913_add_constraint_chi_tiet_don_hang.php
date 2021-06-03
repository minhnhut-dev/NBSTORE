<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddConstraintChiTietDonHang extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('chi_tiet_don_hangs', function (Blueprint $table) {
            $table->foreign('don_hangs_id')->references('id')->on('don_hangs');
            $table->foreign('san_phams_id')->references('id')->on('san_phams');
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
        Schema::table('chi_tiet_don_hangs', function (Blueprint $table) {
            //
            $table->dropForeign('chi_tiet_don_hangs_don_hangs_id_foreign');
            $table->dropForeign('chi_tiet_don_hangs_san_phams_id_foreign');
        });
    }
}
