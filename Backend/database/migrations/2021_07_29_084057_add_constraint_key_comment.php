<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddConstraintKeyComment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('comments', function (Blueprint $table) {
            $table->foreign('nguoi_dungs_id')->references('id')->on('nguoi_dungs');
            $table->foreign('san_phams_id')->references('id')->on('san_phams');
            $table->foreign('parent_id')->references('id')->on('comments');
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
        Schema::table('comments', function (Blueprint $table) {
            //
            $table->dropForeign('comments_nguoi_dungs_id_foreign');
            $table->dropForeign('comments_san_phams_id_foreign');
            $table->dropForeign('comments_parent_id_foreign');
        });
    }
}
