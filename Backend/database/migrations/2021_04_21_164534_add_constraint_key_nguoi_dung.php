<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddConstraintKeyNguoiDung extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('nguoi_dungs', function (Blueprint $table) {
            $table->foreign('loai_nguoi_dungs_id')->references('id')->on('loai_nguoi_dungs');
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
        Schema::table('nguoi_dungs', function (Blueprint $table) {
            //
            $table->dropForeign('nguoi_dungs_loai_nguoi_dungs_id_foreign');
        });
    }
}
