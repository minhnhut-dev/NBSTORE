<?php
namespace App\Classes;
use DateTime;
class DateService 
{
    public static function getNumerDate($month, $year) {

        switch ($month) {
            case 1:{
                return 31;
                break;
            }
            case 2:{
                return $year%4==0?29:28;
                break;
            }
            case 3:{
                return 31;
                break;
            }
            case 4:{
                return 30;
                break;
            }
            case 5:{
                return 31;
                break;
            }
            case 6:{
                return 30;
                break;
            }
            case 7:{
                return 31;
                break;
            }
            case 8:{
                return 31;
                break;
            }
            case 9:{
                return 30;
                break;
            }
            case 10:{
                return 31;
                break;
            }
            case 11:{
                return 30;
                break;
            }
            case 12:{
                return 31;
                break;
            }
            default:
            return 30;
            break;
            
            
            
        }
    } 
    public static function createDate($d,$m,$year){

        $day =date_create($year.'-'.$m.'-'.$d);
        return $day;
    }
}