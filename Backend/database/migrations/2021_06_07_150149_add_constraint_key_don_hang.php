<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddConstraintKeyDonHang extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('don_hangs', function (Blueprint $table) {
            $table->foreign('trang_thai_don_hangs_id')->references('id')->on('trang_thai_don_hangs');
            $table->foreign('hinh_thuc_giao_hangs_id')->references('id')->on('hinh_thuc_giao_hangs');
            $table->foreign('hinh_thuc_thanh_toans_id')->references('id')->on('hinh_thuc_thanh_toans');
            $table->foreign('nguoi_dungs_id')->references('id')->on('nguoi_dungs');
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
        Schema::table('don_hangs', function (Blueprint $table) {
            //
            $table->dropForeign('don_hangs_trang_thai_don_hangs_id_foreign');
            $table->dropForeign('don_hangs_hinh_thuc_giao_hangs_id_foreign');
            $table->dropForeign('don_hangs_hinh_thuc_thanh_toans_id_foreign');
            $table->dropForeign('don_hangs_nguoi_dungs_id_foreign');
        });
    }
}
