<?php
namespace App\Classes;
use Illuminate\Support\Facades\DB;
use App\Classes\DateService;
class  SalesService
{
    public static function revenueEachDayByMonth($max_day, $month, $year,$status=0){
        $numer_in_month=$max_day>0?$max_day:DateService::getNumerDate($month,$year);
        $result=[];
        for ($i =1;$i<=$numer_in_month;$i++){
            $revenue_by_day = DB::table('don_hangs')->whereYear('ThoiGianMua', '=', $year)
            ->whereMonth('ThoiGianMua', '=', $month)->whereDay('ThoiGianMua', '=', $i);
            if($status!=0){
                $revenue_by_day =   $revenue_by_day->where('trang_thai_don_hangs_id','=',$status);
            }
            $revenue_by_day=$revenue_by_day->sum('Tongtien');
            $day =DateService::createDate($i,$month,$year);
            $in_day = [
                "timestamp" =>$day,
                "day"=>date_format(date_create($year.'-'.$month.'-'.$i),"d/m/Y"),
                "revenue"=>$revenue_by_day
            ];
            array_push($result,$in_day);
        }
        return $result;
    }
    public static function revenueEachMonthByYear($max_month, $year,$trang_thai_don_hangs_id=0){
        $numer_in_year=$max_month>0?$max_month:12;
        $result=[];
        for ($i =1;$i<=$numer_in_year;$i++){           
            $revenue_by_day = DB::table('don_hangs')->whereYear('ThoiGianMua', '=', $year)
            ->whereMonth('ThoiGianMua', '=', $i);
            if ($trang_thai_don_hangs_id!=0) $revenue_by_day = $revenue_by_day->where('trang_thai_don_hangs_id','=',$trang_thai_don_hangs_id);
            $revenue_by_day = $revenue_by_day->sum('Tongtien');
            $in_month = [
                "month" =>$i,
                "revenue"=>$revenue_by_day
            ];
            array_push($result,$in_month);
        }
        return $result;
    }
    public static function numberOrdersPerMonthByYear($max_month, $year,$status=0){
        $numer_in_year=$max_month>0?$max_month:12;
        $result=[];
        for ($i =1;$i<=$numer_in_year;$i++){           
            $revenue_by_day = DB::table('don_hangs')->whereYear('ThoiGianMua', '=', $year)
            ->whereMonth('ThoiGianMua', '=', $i);
            if($status!=0)  $revenue_by_day  =  $revenue_by_day->where('trang_thai_don_hangs_id','=',$status);
            $revenue_by_day = $revenue_by_day->count();
            $in_month = [
                "month" =>$i,
                "amount"=>$revenue_by_day
            ];
            array_push($result,$in_month);
        }
        return $result;
    }
    public static function numberOrdersPerDayByMonth($max_day, $month, $year, $status = 0){
        $numer_in_month=$max_day>0?$max_day:DateService::getNumerDate($month,$year);
        $result=[];
        for ($i =1;$i<=$numer_in_month;$i++){
            $revenue_by_day = DB::table('don_hangs')->whereYear('ThoiGianMua', '=', $year)
            ->whereMonth('ThoiGianMua', '=', $month)->whereDay('ThoiGianMua', '=', $i);
            if ($status!=0)   $revenue_by_day =   $revenue_by_day-> where('trang_thai_don_hangs_id','=',$status);
                $revenue_by_day = $revenue_by_day->count();
            $day =DateService::createDate($i,$month,$year);
            $in_day = [
                "timestamp" =>$day,
                "day"=>date_format(date_create($year.'-'.$month.'-'.$i),"d/m/Y"),
                "orders"=>$revenue_by_day
            ];
            array_push($result,$in_day);
        }
        return $result;
    }
}