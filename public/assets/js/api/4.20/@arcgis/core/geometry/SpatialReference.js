/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{a as o}from"../chunks/JSONSupport.js";import{i as e,b as f,clone as t}from"../core/lang.js";import{I as i}from"../chunks/ensureType.js";import{property as a}from"../core/accessorSupport/decorators/property.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import{w as s}from"../chunks/writer.js";import{r as l}from"../chunks/string.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/object.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/Message.js";import"../chunks/write.js";let d;const _={values:[1,.3048,.3048006096012192,.3047972654,.9143917962,.201166195164,.9143984146160287,.3047994715386762,20.11676512155263,20.11678249437587,.9143985307444408,.91439523,.3047997101815088,20.116756,5e4,15e4],units:["Meter","Foot","Foot_US","Foot_Clarke","Yard_Clarke","Link_Clarke","Yard_Sears","Foot_Sears","Chain_Sears","Chain_Benoit_1895_B","Yard_Indian","Yard_Indian_1937","Foot_Gold_Coast","Chain_Sears_1922_Truncated","50_Kilometers","150_Kilometers"],2066:5,2136:12,2155:2,2157:0,2158:0,2159:12,2160:12,2204:2,2219:0,2220:0,2254:2,2255:2,2256:1,2265:1,2266:1,2267:2,2268:2,2269:1,2270:1,2271:2,2272:2,2273:1,2294:0,2295:0,2314:3,2899:2,2900:2,2901:1,2909:1,2910:1,2911:2,2912:2,2913:1,2914:1,2992:1,2993:0,2994:1,3080:1,3089:2,3090:0,3091:2,3102:2,3141:0,3142:0,3167:13,3359:2,3360:0,3361:1,3362:0,3363:2,3364:0,3365:2,3366:3,3404:2,3405:0,3406:0,3407:3,3439:0,3440:0,3479:1,3480:0,3481:1,3482:0,3483:1,3484:0,3485:2,3486:0,3487:2,3488:0,3489:0,3490:2,3491:0,3492:2,3493:0,3494:2,3495:0,3496:2,3497:0,3498:2,3499:0,3500:2,3501:0,3502:2,3503:0,3504:2,3505:0,3506:2,3507:0,3508:2,3509:0,3510:2,3511:0,3512:2,3513:0,3514:0,3515:2,3516:0,3517:2,3518:0,3519:2,3520:0,3521:2,3522:0,3523:2,3524:0,3525:2,3526:0,3527:2,3528:0,3529:2,3530:0,3531:2,3532:0,3533:2,3534:0,3535:2,3536:0,3537:2,3538:0,3539:2,3540:0,3541:2,3542:0,3543:2,3544:0,3545:2,3546:0,3547:2,3548:0,3549:2,3550:0,3551:2,3552:0,3553:2,3582:2,3583:0,3584:2,3585:0,3586:2,3587:0,3588:1,3589:0,3590:1,3591:0,3592:0,3593:1,3598:2,3599:0,3600:2,3605:1,3606:0,3607:0,3608:2,3609:0,3610:2,3611:0,3612:2,3613:0,3614:2,3615:0,3616:2,3617:0,3618:2,3619:0,3620:2,3621:0,3622:2,3623:0,3624:2,3625:0,3626:2,3627:0,3628:2,3629:0,3630:2,3631:0,3632:2,3633:0,3634:1,3635:0,3636:1,3640:2,3641:0,3642:2,3643:0,3644:1,3645:0,3646:1,3647:0,3648:1,3649:0,3650:2,3651:0,3652:2,3653:0,3654:2,3655:0,3656:1,3657:0,3658:2,3659:0,3660:2,3661:0,3662:2,3663:0,3664:2,3668:2,3669:0,3670:2,3671:0,3672:2,3673:0,3674:2,3675:0,3676:1,3677:2,3678:0,3679:1,3680:2,3681:0,3682:1,3683:2,3684:0,3685:0,3686:2,3687:0,3688:2,3689:0,3690:2,3691:0,3692:2,3696:2,3697:0,3698:2,3699:0,3700:2,3793:0,3794:0,3812:0,3854:0,3857:0,3920:0,3978:0,3979:0,3991:2,3992:2,4026:0,4037:0,4038:0,4071:0,4082:0,4083:0,4087:0,4088:0,4217:2,4414:0,4415:0,4417:0,4434:0,4437:0,4438:2,4439:2,4462:0,4467:0,4471:0,4474:0,4559:0,4647:0,4822:0,4826:0,4839:0,5018:0,5048:0,5167:0,5168:0,5221:0,5223:0,5234:0,5235:0,5243:0,5247:0,5266:0,5316:0,5320:0,5321:0,5325:0,5337:0,5361:0,5362:0,5367:0,5382:0,5383:0,5396:0,5456:0,5457:0,5469:0,5472:4,5490:0,5513:0,5514:0,5523:0,5559:0,5588:1,5589:3,5596:0,5627:0,5629:0,5641:0,5643:0,5644:0,5646:2,5654:2,5655:2,5659:0,5700:0,5825:0,5836:0,5837:0,5839:0,5842:0,5844:0,5858:0,5879:0,5880:0,5887:0,5890:0,6128:1,6129:1,6141:1,6204:0,6210:0,6211:0,6307:0,6312:0,6316:0,6362:0,6391:1,6405:1,6406:0,6407:1,6408:0,6409:1,6410:0,6411:2,6412:0,6413:2,6414:0,6415:0,6416:2,6417:0,6418:2,6419:0,6420:2,6421:0,6422:2,6423:0,6424:2,6425:0,6426:2,6427:0,6428:2,6429:0,6430:2,6431:0,6432:2,6433:0,6434:2,6435:0,6436:2,6437:0,6438:2,6439:0,6440:0,6441:2,6442:0,6443:2,6444:0,6445:2,6446:0,6447:2,6448:0,6449:2,6450:0,6451:2,6452:0,6453:2,6454:0,6455:2,6456:0,6457:2,6458:0,6459:2,6460:0,6461:2,6462:0,6463:2,6464:0,6465:2,6466:0,6467:2,6468:0,6469:2,6470:0,6471:2,6472:0,6473:2,6474:0,6475:2,6476:0,6477:2,6478:0,6479:2,6484:2,6485:0,6486:2,6487:0,6488:2,6489:0,6490:2,6491:0,6492:2,6493:0,6494:1,6495:0,6496:1,6497:0,6498:0,6499:1,6500:0,6501:2,6502:0,6503:2,6504:0,6505:2,6506:0,6507:2,6508:0,6509:0,6510:2,6515:1,6516:0,6518:0,6519:2,6520:0,6521:2,6522:0,6523:2,6524:0,6525:2,6526:0,6527:2,6528:0,6529:2,6530:0,6531:2,6532:0,6533:2,6534:0,6535:2,6536:0,6537:2,6538:0,6539:2,6540:0,6541:2,6542:0,6543:2,6544:0,6545:1,6546:0,6547:1,6548:0,6549:2,6550:0,6551:2,6552:0,6553:2,6554:0,6555:2,6556:0,6557:1,6558:0,6559:1,6560:0,6561:1,6562:0,6563:2,6564:0,6565:2,6566:0,6567:0,6568:2,6569:0,6570:1,6571:0,6572:2,6573:0,6574:2,6575:0,6576:2,6577:0,6578:2,6582:2,6583:0,6584:2,6585:0,6586:2,6587:0,6588:2,6589:0,6590:2,6591:0,6592:0,6593:2,6594:0,6595:2,6596:0,6597:2,6598:0,6599:2,6600:0,6601:2,6602:0,6603:2,6605:2,6606:0,6607:2,6608:0,6609:2,6610:0,6611:0,6612:2,6613:0,6614:2,6615:0,6616:2,6617:0,6618:2,6633:2,6646:0,6703:0,6784:0,6785:1,6786:0,6787:1,6788:0,6789:1,6790:0,6791:1,6792:0,6793:1,6794:0,6795:1,6796:0,6797:1,6798:0,6799:1,6800:0,6801:1,6802:0,6803:1,6804:0,6805:1,6806:0,6807:1,6808:0,6809:1,6810:0,6811:1,6812:0,6813:1,6814:0,6815:1,6816:0,6817:1,6818:0,6819:1,6820:0,6821:1,6822:0,6823:1,6824:0,6825:1,6826:0,6827:1,6828:0,6829:1,6830:0,6831:1,6832:0,6833:1,6834:0,6835:1,6836:0,6837:1,6838:0,6839:1,6840:0,6841:1,6842:0,6843:1,6844:0,6845:1,6846:0,6847:1,6848:0,6849:1,6850:0,6851:1,6852:0,6853:1,6854:0,6855:1,6856:0,6857:1,6858:0,6859:1,6860:0,6861:1,6862:0,6863:1,6867:0,6868:1,6870:0,6875:0,6876:0,6879:0,6880:2,6884:0,6885:1,6886:0,6887:1,6915:0,6922:0,6923:2,6924:0,6925:2,6962:0,6984:0,6991:0,7128:2,7131:0,7132:2,7142:0,7257:0,7258:2,7259:0,7260:2,7261:0,7262:2,7263:0,7264:2,7265:0,7266:2,7267:0,7268:2,7269:0,7270:2,7271:0,7272:2,7273:0,7274:2,7275:0,7276:2,7277:0,7278:2,7279:0,7280:2,7281:0,7282:2,7283:0,7284:2,7285:0,7286:2,7287:0,7288:2,7289:0,7290:2,7291:0,7292:2,7293:0,7294:2,7295:0,7296:2,7297:0,7298:2,7299:0,7300:2,7301:0,7302:2,7303:0,7304:2,7305:0,7306:2,7307:0,7308:2,7309:0,7310:2,7311:0,7312:2,7313:0,7314:2,7315:0,7316:2,7317:0,7318:2,7319:0,7320:2,7321:0,7322:2,7323:0,7324:2,7325:0,7326:2,7327:0,7328:2,7329:0,7330:2,7331:0,7332:2,7333:0,7334:2,7335:0,7336:2,7337:0,7338:2,7339:0,7340:2,7341:0,7342:2,7343:0,7344:2,7345:0,7346:2,7347:0,7348:2,7349:0,7350:2,7351:0,7352:2,7353:0,7354:2,7355:0,7356:2,7357:0,7358:2,7359:0,7360:2,7361:0,7362:2,7363:0,7364:2,7365:0,7366:2,7367:0,7368:2,7369:0,7370:2,7877:0,7878:0,7882:0,7883:0,7887:0,7899:0,7991:0,7992:0,8035:2,8036:2,8058:0,8059:0,8082:0,8083:0,8088:0,8090:0,8091:2,8092:0,8093:2,8095:0,8096:2,8097:0,8098:2,8099:0,8100:2,8101:0,8102:2,8103:0,8104:2,8105:0,8106:2,8107:0,8108:2,8109:0,8110:2,8111:0,8112:2,8113:0,8114:2,8115:0,8116:2,8117:0,8118:2,8119:0,8120:2,8121:0,8122:2,8123:0,8124:2,8125:0,8126:2,8127:0,8128:2,8129:0,8130:2,8131:0,8132:2,8133:0,8134:2,8135:0,8136:2,8137:0,8138:2,8139:0,8140:2,8141:0,8142:2,8143:0,8144:2,8145:0,8146:2,8147:0,8148:2,8149:0,8150:2,8151:0,8152:2,8153:0,8154:2,8155:0,8156:2,8157:0,8158:2,8159:0,8160:2,8161:0,8162:2,8163:0,8164:2,8165:0,8166:2,8167:0,8168:2,8169:0,8170:2,8171:0,8172:2,8173:0,8177:2,8179:0,8180:2,8181:0,8182:2,8184:0,8185:2,8187:0,8189:2,8191:0,8193:2,8196:0,8197:2,8198:0,8200:2,8201:0,8202:2,8203:0,8204:2,8205:0,8206:2,8207:0,8208:2,8209:0,8210:2,8212:0,8213:2,8214:0,8216:2,8218:0,8220:2,8222:0,8224:2,8225:0,8226:2,8311:0,8312:1,8313:0,8314:1,8315:0,8316:1,8317:0,8318:1,8319:0,8320:1,8321:0,8322:1,8323:0,8324:1,8325:0,8326:1,8327:0,8328:1,8329:0,8330:1,8331:0,8332:1,8333:0,8334:1,8335:0,8336:1,8337:0,8338:1,8339:0,8340:1,8341:0,8342:1,8343:0,8344:1,8345:0,8346:1,8347:0,8348:1,8352:0,8353:0,8379:0,8380:2,8381:0,8382:2,8383:0,8384:2,8385:0,8387:2,8391:0,8395:0,8433:0,8441:0,8455:0,8456:0,8531:2,8682:0,8686:0,8687:0,8692:0,8693:0,8826:0,8903:0,8950:0,8951:0,9039:0,9040:0,9141:0,9149:0,9150:0,9191:0,9221:0,9222:0,9249:0,9250:0,9252:0,9254:0,9265:0,9284:0,9285:0,9300:0,9354:0,9367:0,9373:0,9377:0,9387:0,9391:0,9456:0,9473:0,9498:0,9674:0,9678:0,9680:0,20499:0,20538:0,20539:0,20790:0,20791:0,21291:0,21292:0,21500:0,21817:0,21818:0,22032:0,22033:0,22091:0,22092:0,22332:0,22391:0,22392:0,22700:0,22770:0,22780:0,22832:0,23090:0,23095:0,23239:0,23240:0,23433:0,23700:0,24047:0,24048:0,24100:3,24200:0,24305:0,24306:0,24382:10,24383:0,24500:0,24547:0,24548:0,24571:9,24600:0,25e3:0,25231:0,25884:0,25932:0,26237:0,26331:0,26332:0,26432:0,26591:0,26592:0,26632:0,26692:0,27120:0,27200:0,27291:6,27292:6,27429:0,27492:0,27493:0,27500:0,27700:0,28232:0,28600:0,28991:0,28992:0,29100:0,29101:0,29220:0,29221:0,29333:0,29635:0,29636:0,29701:0,29738:0,29739:0,29849:0,29850:0,29871:8,29872:7,29873:0,29874:0,30200:5,30339:0,30340:0,30591:0,30592:0,30791:0,30792:0,30800:0,31028:0,31121:0,31154:0,31170:0,31171:0,31370:0,31528:0,31529:0,31600:0,31700:0,31838:0,31839:0,31900:0,31901:0,32061:0,32062:0,32098:0,32099:2,32100:0,32104:0,32161:0,32766:0,53048:0,53049:0,54090:0,54091:0,65061:2,65062:2,65161:0,65163:0,102041:2,102064:11,102068:14,102069:15,102118:2,102119:1,102120:2,102121:2,102217:2,102218:0,102219:2,102220:2,102378:1,102379:1,102380:0,102381:1,102589:2,102599:2,102600:2,102604:2,102647:0,102704:2,102705:2,102706:0,102761:2,102762:0,102763:2,102764:0,102765:0,102766:2,102962:0,102963:0,102970:1,102974:2,102993:0,102994:0,102995:2,102996:2,103015:0,103016:2,103017:0,103018:2,103025:0,103026:0,103027:2,103028:2,103035:0,103036:0,103037:2,103038:2,103039:0,103040:0,103041:2,103042:2,103043:0,103044:0,103045:2,103046:2,103047:0,103048:0,103049:2,103050:2,103051:0,103052:2,103053:0,103054:2,103055:0,103056:2,103057:0,103058:0,103059:2,103060:2,103061:0,103062:0,103063:2,103064:2,103069:2,103070:0,103071:0,103072:2,103073:2,103086:0,103087:0,103088:2,103089:2,103094:1,103095:0,103096:2,103103:0,103104:2,103105:0,103106:2,103121:0,103122:2,103123:0,103124:0,103125:1,103126:1,103127:0,103128:0,103129:2,103130:2,103131:0,103132:0,103133:2,103134:2,103135:0,103136:0,103137:1,103138:1,103139:0,103140:2,103141:0,103142:2,103143:0,103144:2,103145:0,103146:1,103147:0,103148:0,103149:2,103150:2,103151:0,103152:2,103172:0,103173:2,103174:0,103175:0,103176:2,103177:2,103178:0,103179:0,103180:2,103181:2,103182:0,103183:0,103184:2,103185:2,103228:0,103229:0,103230:2,103231:2,103250:0,103251:2,103252:0,103253:2,103260:0,103261:0,103262:2,103263:2,103270:0,103271:0,103272:2,103273:2,103274:0,103275:0,103276:2,103277:2,103278:0,103279:0,103280:2,103281:2,103282:0,103283:0,103284:2,103285:2,103286:0,103287:2,103288:0,103289:2,103290:0,103291:2,103292:0,103293:0,103294:2,103295:2,103296:0,103297:0,103298:2,103299:2,103376:2,103377:0,103378:0,103379:2,103380:2,103393:0,103394:0,103395:2,103396:2,103472:0,103473:1,103474:0,103475:2,103482:0,103483:2,103484:0,103485:2,103500:0,103501:2,103502:0,103503:0,103504:1,103505:1,103506:0,103507:0,103508:2,103509:2,103510:0,103511:0,103512:2,103513:2,103514:0,103515:2,103516:0,103517:2,103518:0,103519:2,103520:0,103521:1,103522:0,103523:0,103524:2,103525:2,103526:0,103527:2,103561:2,103562:2,103563:0,103564:0,103565:2,103566:2,103567:0,103568:0,103569:2,103570:2,103584:0,103585:2,103586:0,103587:2,103588:1,103589:0,103590:2,103591:1,103592:0,103593:2,103594:1,103695:2};for(d=2e3;d<=2045;d++)_[d]=0;for(d=2056;d<=2065;d++)_[d]=0;for(d=2067;d<=2135;d++)_[d]=0;for(d=2137;d<=2154;d++)_[d]=0;for(d=2161;d<=2170;d++)_[d]=0;for(d=2172;d<=2193;d++)_[d]=0;for(d=2195;d<=2198;d++)_[d]=0;for(d=2200;d<=2203;d++)_[d]=0;for(d=2205;d<=2217;d++)_[d]=0;for(d=2222;d<=2224;d++)_[d]=1;for(d=2225;d<=2250;d++)_[d]=2;for(d=2251;d<=2253;d++)_[d]=1;for(d=2257;d<=2264;d++)_[d]=2;for(d=2274;d<=2279;d++)_[d]=2;for(d=2280;d<=2282;d++)_[d]=1;for(d=2283;d<=2289;d++)_[d]=2;for(d=2290;d<=2292;d++)_[d]=0;for(d=2308;d<=2313;d++)_[d]=0;for(d=2315;d<=2491;d++)_[d]=0;for(d=2494;d<=2866;d++)_[d]=0;for(d=2867;d<=2869;d++)_[d]=1;for(d=2870;d<=2888;d++)_[d]=2;for(d=2891;d<=2895;d++)_[d]=2;for(d=2896;d<=2898;d++)_[d]=1;for(d=2902;d<=2908;d++)_[d]=2;for(d=2915;d<=2920;d++)_[d]=2;for(d=2921;d<=2923;d++)_[d]=1;for(d=2924;d<=2930;d++)_[d]=2;for(d=2931;d<=2962;d++)_[d]=0;for(d=2964;d<=2968;d++)_[d]=2;for(d=2969;d<=2973;d++)_[d]=0;for(d=2975;d<=2991;d++)_[d]=0;for(d=2995;d<=3051;d++)_[d]=0;for(d=3054;d<=3079;d++)_[d]=0;for(d=3081;d<=3088;d++)_[d]=0;for(d=3092;d<=3101;d++)_[d]=0;for(d=3106;d<=3138;d++)_[d]=0;for(d=3146;d<=3151;d++)_[d]=0;for(d=3153;d<=3166;d++)_[d]=0;for(d=3168;d<=3172;d++)_[d]=0;for(d=3174;d<=3203;d++)_[d]=0;for(d=3294;d<=3358;d++)_[d]=0;for(d=3367;d<=3403;d++)_[d]=0;for(d=3408;d<=3416;d++)_[d]=0;for(d=3417;d<=3438;d++)_[d]=2;for(d=3441;d<=3446;d++)_[d]=2;for(d=3447;d<=3450;d++)_[d]=0;for(d=3451;d<=3459;d++)_[d]=2;for(d=3460;d<=3478;d++)_[d]=0;for(d=3554;d<=3559;d++)_[d]=0;for(d=3560;d<=3570;d++)_[d]=2;for(d=3571;d<=3581;d++)_[d]=0;for(d=3594;d<=3597;d++)_[d]=0;for(d=3601;d<=3604;d++)_[d]=0;for(d=3637;d<=3639;d++)_[d]=0;for(d=3665;d<=3667;d++)_[d]=0;for(d=3693;d<=3695;d++)_[d]=0;for(d=3701;d<=3727;d++)_[d]=0;for(d=3728;d<=3739;d++)_[d]=2;for(d=3740;d<=3751;d++)_[d]=0;for(d=3753;d<=3760;d++)_[d]=2;for(d=3761;d<=3773;d++)_[d]=0;for(d=3775;d<=3777;d++)_[d]=0;for(d=3779;d<=3781;d++)_[d]=0;for(d=3783;d<=3785;d++)_[d]=0;for(d=3788;d<=3791;d++)_[d]=0;for(d=3797;d<=3802;d++)_[d]=0;for(d=3814;d<=3816;d++)_[d]=0;for(d=3825;d<=3829;d++)_[d]=0;for(d=3832;d<=3841;d++)_[d]=0;for(d=3844;d<=3852;d++)_[d]=0;for(d=3873;d<=3885;d++)_[d]=0;for(d=3890;d<=3893;d++)_[d]=0;for(d=3907;d<=3912;d++)_[d]=0;for(d=3942;d<=3950;d++)_[d]=0;for(d=3968;d<=3970;d++)_[d]=0;for(d=3973;d<=3976;d++)_[d]=0;for(d=3986;d<=3989;d++)_[d]=0;for(d=3994;d<=3997;d++)_[d]=0;for(d=4048;d<=4051;d++)_[d]=0;for(d=4056;d<=4063;d++)_[d]=0;for(d=4093;d<=4096;d++)_[d]=0;for(d=4390;d<=4398;d++)_[d]=0;for(d=4399;d<=4413;d++)_[d]=2;for(d=4418;d<=4433;d++)_[d]=2;for(d=4455;d<=4457;d++)_[d]=2;for(d=4484;d<=4489;d++)_[d]=0;for(d=4491;d<=4554;d++)_[d]=0;for(d=4568;d<=4589;d++)_[d]=0;for(d=4652;d<=4656;d++)_[d]=0;for(d=4766;d<=4800;d++)_[d]=0;for(d=5014;d<=5016;d++)_[d]=0;for(d=5069;d<=5072;d++)_[d]=0;for(d=5105;d<=5130;d++)_[d]=0;for(d=5173;d<=5188;d++)_[d]=0;for(d=5253;d<=5259;d++)_[d]=0;for(d=5269;d<=5275;d++)_[d]=0;for(d=5292;d<=5311;d++)_[d]=0;for(d=5329;d<=5331;d++)_[d]=0;for(d=5343;d<=5349;d++)_[d]=0;for(d=5355;d<=5357;d++)_[d]=0;for(d=5387;d<=5389;d++)_[d]=0;for(d=5459;d<=5463;d++)_[d]=0;for(d=5479;d<=5482;d++)_[d]=0;for(d=5518;d<=5520;d++)_[d]=0;for(d=5530;d<=5539;d++)_[d]=0;for(d=5550;d<=5552;d++)_[d]=0;for(d=5562;d<=5583;d++)_[d]=0;for(d=5623;d<=5625;d++)_[d]=2;for(d=5631;d<=5639;d++)_[d]=0;for(d=5649;d<=5653;d++)_[d]=0;for(d=5663;d<=5680;d++)_[d]=0;for(d=5682;d<=5685;d++)_[d]=0;for(d=5875;d<=5877;d++)_[d]=0;for(d=5896;d<=5899;d++)_[d]=0;for(d=5921;d<=5940;d++)_[d]=0;for(d=6050;d<=6125;d++)_[d]=0;for(d=6244;d<=6275;d++)_[d]=0;for(d=6328;d<=6348;d++)_[d]=0;for(d=6350;d<=6356;d++)_[d]=0;for(d=6366;d<=6372;d++)_[d]=0;for(d=6381;d<=6387;d++)_[d]=0;for(d=6393;d<=6404;d++)_[d]=0;for(d=6480;d<=6483;d++)_[d]=0;for(d=6511;d<=6514;d++)_[d]=0;for(d=6579;d<=6581;d++)_[d]=0;for(d=6619;d<=6624;d++)_[d]=0;for(d=6625;d<=6627;d++)_[d]=2;for(d=6628;d<=6632;d++)_[d]=0;for(d=6634;d<=6637;d++)_[d]=0;for(d=6669;d<=6692;d++)_[d]=0;for(d=6707;d<=6709;d++)_[d]=0;for(d=6720;d<=6723;d++)_[d]=0;for(d=6732;d<=6738;d++)_[d]=0;for(d=6931;d<=6933;d++)_[d]=0;for(d=6956;d<=6959;d++)_[d]=0;for(d=7005;d<=7007;d++)_[d]=0;for(d=7057;d<=7070;d++)_[d]=2;for(d=7074;d<=7082;d++)_[d]=0;for(d=7109;d<=7118;d++)_[d]=0;for(d=7119;d<=7127;d++)_[d]=1;for(d=7374;d<=7376;d++)_[d]=0;for(d=7528;d<=7586;d++)_[d]=0;for(d=7587;d<=7645;d++)_[d]=2;for(d=7692;d<=7696;d++)_[d]=0;for(d=7755;d<=7787;d++)_[d]=0;for(d=7791;d<=7795;d++)_[d]=0;for(d=7799;d<=7801;d++)_[d]=0;for(d=7803;d<=7805;d++)_[d]=0;for(d=7825;d<=7831;d++)_[d]=0;for(d=7845;d<=7859;d++)_[d]=0;for(d=8013;d<=8032;d++)_[d]=0;for(d=8065;d<=8068;d++)_[d]=1;for(d=8518;d<=8529;d++)_[d]=2;for(d=8533;d<=8536;d++)_[d]=2;for(d=8538;d<=8540;d++)_[d]=2;for(d=8677;d<=8679;d++)_[d]=0;for(d=8836;d<=8840;d++)_[d]=0;for(d=8857;d<=8859;d++)_[d]=0;for(d=8908;d<=8910;d++)_[d]=0;for(d=9154;d<=9159;d++)_[d]=0;for(d=9205;d<=9218;d++)_[d]=0;for(d=9271;d<=9273;d++)_[d]=0;for(d=9295;d<=9297;d++)_[d]=0;for(d=9356;d<=9360;d++)_[d]=0;for(d=9404;d<=9407;d++)_[d]=0;for(d=9476;d<=9482;d++)_[d]=0;for(d=9487;d<=9494;d++)_[d]=0;for(d=9697;d<=9699;d++)_[d]=0;for(d=20002;d<=20032;d++)_[d]=0;for(d=20062;d<=20092;d++)_[d]=0;for(d=20135;d<=20138;d++)_[d]=0;for(d=20248;d<=20258;d++)_[d]=0;for(d=20348;d<=20358;d++)_[d]=0;for(d=20436;d<=20440;d++)_[d]=0;for(d=20822;d<=20824;d++)_[d]=0;for(d=20934;d<=20936;d++)_[d]=0;for(d=21035;d<=21037;d++)_[d]=0;for(d=21095;d<=21097;d++)_[d]=0;for(d=21148;d<=21150;d++)_[d]=0;for(d=21413;d<=21423;d++)_[d]=0;for(d=21453;d<=21463;d++)_[d]=0;for(d=21473;d<=21483;d++)_[d]=0;for(d=21780;d<=21782;d++)_[d]=0;for(d=21891;d<=21894;d++)_[d]=0;for(d=21896;d<=21899;d++)_[d]=0;for(d=22171;d<=22177;d++)_[d]=0;for(d=22181;d<=22187;d++)_[d]=0;for(d=22191;d<=22197;d++)_[d]=0;for(d=22234;d<=22236;d++)_[d]=0;for(d=22521;d<=22525;d++)_[d]=0;for(d=22991;d<=22994;d++)_[d]=0;for(d=23028;d<=23038;d++)_[d]=0;for(d=23830;d<=23853;d++)_[d]=0;for(d=23866;d<=23872;d++)_[d]=0;for(d=23877;d<=23884;d++)_[d]=0;for(d=23886;d<=23894;d++)_[d]=0;for(d=23946;d<=23948;d++)_[d]=0;for(d=24311;d<=24313;d++)_[d]=0;for(d=24342;d<=24347;d++)_[d]=0;for(d=24370;d<=24374;d++)_[d]=10;for(d=24375;d<=24381;d++)_[d]=0;for(d=24718;d<=24721;d++)_[d]=0;for(d=24817;d<=24821;d++)_[d]=0;for(d=24877;d<=24882;d++)_[d]=0;for(d=24891;d<=24893;d++)_[d]=0;for(d=25391;d<=25395;d++)_[d]=0;for(d=25828;d<=25838;d++)_[d]=0;for(d=26191;d<=26195;d++)_[d]=0;for(d=26391;d<=26393;d++)_[d]=0;for(d=26701;d<=26722;d++)_[d]=0;for(d=26729;d<=26799;d++)_[d]=2;for(d=26801;d<=26803;d++)_[d]=2;for(d=26811;d<=26813;d++)_[d]=2;for(d=26847;d<=26870;d++)_[d]=2;for(d=26891;d<=26899;d++)_[d]=0;for(d=26901;d<=26923;d++)_[d]=0;for(d=26929;d<=26946;d++)_[d]=0;for(d=26948;d<=26998;d++)_[d]=0;for(d=27037;d<=27040;d++)_[d]=0;for(d=27205;d<=27232;d++)_[d]=0;for(d=27258;d<=27260;d++)_[d]=0;for(d=27391;d<=27398;d++)_[d]=0;for(d=27561;d<=27564;d++)_[d]=0;for(d=27571;d<=27574;d++)_[d]=0;for(d=27581;d<=27584;d++)_[d]=0;for(d=27591;d<=27594;d++)_[d]=0;for(d=28191;d<=28193;d++)_[d]=0;for(d=28348;d<=28358;d++)_[d]=0;for(d=28402;d<=28432;d++)_[d]=0;for(d=28462;d<=28492;d++)_[d]=0;for(d=29118;d<=29122;d++)_[d]=0;for(d=29168;d<=29172;d++)_[d]=0;for(d=29177;d<=29185;d++)_[d]=0;for(d=29187;d<=29195;d++)_[d]=0;for(d=29900;d<=29903;d++)_[d]=0;for(d=30161;d<=30179;d++)_[d]=0;for(d=30491;d<=30494;d++)_[d]=0;for(d=30729;d<=30732;d++)_[d]=0;for(d=31251;d<=31259;d++)_[d]=0;for(d=31265;d<=31268;d++)_[d]=0;for(d=31275;d<=31279;d++)_[d]=0;for(d=31281;d<=31297;d++)_[d]=0;for(d=31461;d<=31469;d++)_[d]=0;for(d=31491;d<=31495;d++)_[d]=0;for(d=31917;d<=31922;d++)_[d]=0;for(d=31965;d<=32e3;d++)_[d]=0;for(d=32001;d<=32003;d++)_[d]=2;for(d=32005;d<=32031;d++)_[d]=2;for(d=32033;d<=32060;d++)_[d]=2;for(d=32064;d<=32067;d++)_[d]=2;for(d=32074;d<=32077;d++)_[d]=2;for(d=32081;d<=32086;d++)_[d]=0;for(d=32107;d<=32130;d++)_[d]=0;for(d=32133;d<=32158;d++)_[d]=0;for(d=32164;d<=32167;d++)_[d]=2;for(d=32180;d<=32199;d++)_[d]=0;for(d=32201;d<=32260;d++)_[d]=0;for(d=32301;d<=32360;d++)_[d]=0;for(d=32601;d<=32662;d++)_[d]=0;for(d=32664;d<=32667;d++)_[d]=2;for(d=32701;d<=32761;d++)_[d]=0;for(d=53001;d<=53004;d++)_[d]=0;for(d=53008;d<=53019;d++)_[d]=0;for(d=53021;d<=53032;d++)_[d]=0;for(d=53034;d<=53037;d++)_[d]=0;for(d=53042;d<=53046;d++)_[d]=0;for(d=53074;d<=53080;d++)_[d]=0;for(d=54001;d<=54004;d++)_[d]=0;for(d=54008;d<=54019;d++)_[d]=0;for(d=54021;d<=54032;d++)_[d]=0;for(d=54034;d<=54037;d++)_[d]=0;for(d=54042;d<=54046;d++)_[d]=0;for(d=54048;d<=54053;d++)_[d]=0;for(d=54074;d<=54080;d++)_[d]=0;for(d=54098;d<=54101;d++)_[d]=0;for(d=102001;d<=102040;d++)_[d]=0;for(d=102042;d<=102063;d++)_[d]=0;for(d=102065;d<=102067;d++)_[d]=0;for(d=102070;d<=102117;d++)_[d]=0;for(d=102122;d<=102216;d++)_[d]=0;for(d=102221;d<=102377;d++)_[d]=0;for(d=102382;d<=102388;d++)_[d]=0;for(d=102389;d<=102398;d++)_[d]=2;for(d=102399;d<=102444;d++)_[d]=0;for(d=102445;d<=102447;d++)_[d]=2;for(d=102448;d<=102458;d++)_[d]=0;for(d=102459;d<=102468;d++)_[d]=2;for(d=102469;d<=102499;d++)_[d]=0;for(d=102500;d<=102519;d++)_[d]=1;for(d=102520;d<=102524;d++)_[d]=0;for(d=102525;d<=102529;d++)_[d]=2;for(d=102530;d<=102588;d++)_[d]=0;for(d=102590;d<=102598;d++)_[d]=0;for(d=102601;d<=102603;d++)_[d]=0;for(d=102605;d<=102628;d++)_[d]=0;for(d=102629;d<=102646;d++)_[d]=2;for(d=102648;d<=102700;d++)_[d]=2;for(d=102701;d<=102703;d++)_[d]=0;for(d=102707;d<=102730;d++)_[d]=2;for(d=102733;d<=102758;d++)_[d]=2;for(d=102767;d<=102900;d++)_[d]=0;for(d=102965;d<=102969;d++)_[d]=0;for(d=102971;d<=102973;d++)_[d]=0;for(d=102975;d<=102989;d++)_[d]=0;for(d=102990;d<=102992;d++)_[d]=1;for(d=102997;d<=103002;d++)_[d]=0;for(d=103003;d<=103008;d++)_[d]=2;for(d=103009;d<=103011;d++)_[d]=0;for(d=103012;d<=103014;d++)_[d]=2;for(d=103019;d<=103021;d++)_[d]=0;for(d=103022;d<=103024;d++)_[d]=2;for(d=103029;d<=103031;d++)_[d]=0;for(d=103032;d<=103034;d++)_[d]=2;for(d=103065;d<=103068;d++)_[d]=0;for(d=103074;d<=103076;d++)_[d]=0;for(d=103077;d<=103079;d++)_[d]=1;for(d=103080;d<=103082;d++)_[d]=0;for(d=103083;d<=103085;d++)_[d]=2;for(d=103090;d<=103093;d++)_[d]=0;for(d=103097;d<=103099;d++)_[d]=0;for(d=103100;d<=103102;d++)_[d]=2;for(d=103107;d<=103109;d++)_[d]=0;for(d=103110;d<=103112;d++)_[d]=2;for(d=103113;d<=103116;d++)_[d]=0;for(d=103117;d<=103120;d++)_[d]=2;for(d=103153;d<=103157;d++)_[d]=0;for(d=103158;d<=103162;d++)_[d]=2;for(d=103163;d<=103165;d++)_[d]=0;for(d=103166;d<=103168;d++)_[d]=1;for(d=103169;d<=103171;d++)_[d]=2;for(d=103186;d<=103188;d++)_[d]=0;for(d=103189;d<=103191;d++)_[d]=2;for(d=103192;d<=103195;d++)_[d]=0;for(d=103196;d<=103199;d++)_[d]=2;for(d=103200;d<=103224;d++)_[d]=0;for(d=103225;d<=103227;d++)_[d]=1;for(d=103232;d<=103237;d++)_[d]=0;for(d=103238;d<=103243;d++)_[d]=2;for(d=103244;d<=103246;d++)_[d]=0;for(d=103247;d<=103249;d++)_[d]=2;for(d=103254;d<=103256;d++)_[d]=0;for(d=103257;d<=103259;d++)_[d]=2;for(d=103264;d<=103266;d++)_[d]=0;for(d=103267;d<=103269;d++)_[d]=2;for(d=103300;d<=103375;d++)_[d]=0;for(d=103381;d<=103383;d++)_[d]=0;for(d=103384;d<=103386;d++)_[d]=1;for(d=103387;d<=103389;d++)_[d]=0;for(d=103390;d<=103392;d++)_[d]=2;for(d=103397;d<=103399;d++)_[d]=0;for(d=103400;d<=103471;d++)_[d]=2;for(d=103476;d<=103478;d++)_[d]=0;for(d=103479;d<=103481;d++)_[d]=2;for(d=103486;d<=103488;d++)_[d]=0;for(d=103489;d<=103491;d++)_[d]=2;for(d=103492;d<=103495;d++)_[d]=0;for(d=103496;d<=103499;d++)_[d]=2;for(d=103528;d<=103543;d++)_[d]=0;for(d=103544;d<=103548;d++)_[d]=2;for(d=103549;d<=103551;d++)_[d]=0;for(d=103552;d<=103554;d++)_[d]=1;for(d=103555;d<=103557;d++)_[d]=2;for(d=103558;d<=103560;d++)_[d]=0;for(d=103571;d<=103573;d++)_[d]=0;for(d=103574;d<=103576;d++)_[d]=2;for(d=103577;d<=103580;d++)_[d]=0;for(d=103581;d<=103583;d++)_[d]=2;for(d=103595;d<=103694;d++)_[d]=0;for(d=103696;d<=103699;d++)_[d]=0;for(d=103700;d<=103793;d++)_[d]=2;for(d=103794;d<=103872;d++)_[d]=0;for(d=103900;d<=103971;d++)_[d]=2;const u={102113:!0,102100:!0,3857:!0,3785:!0},c={102113:!0,102100:!0,3857:!0,3785:!0,4326:!0},k='PROJCS["WGS_1984_Web_Mercator_Auxiliary_Sphere",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator_Auxiliary_Sphere"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],PARAMETER["Auxiliary_Sphere_Type",0.0],UNIT["Meter",1.0]]',S=[-20037508.342788905,20037508.342788905],p=[-20037508.342787,20037508.342787],w={102113:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:S,origin:p,dx:1e-5},102100:{wkTemplate:k,valid:S,origin:p,dx:1e-5},3785:{wkTemplate:'PROJCS["WGS_1984_Web_Mercator",GEOGCS["GCS_WGS_1984_Major_Auxiliary_Sphere",DATUM["D_WGS_1984_Major_Auxiliary_Sphere",SPHEROID["WGS_1984_Major_Auxiliary_Sphere",6378137.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Mercator"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],PARAMETER["Standard_Parallel_1",0.0],UNIT["Meter",1.0]]',valid:S,origin:p,dx:1e-5},3857:{wkTemplate:k,valid:S,origin:p,dx:1e-5},4326:{wkTemplate:'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",{Central_Meridian}],UNIT["Degree",0.0174532925199433]]',altTemplate:'PROJCS["WGS_1984_Plate_Carree",GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Plate_Carree"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",{Central_Meridian}],UNIT["Degrees",111319.491]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104971:{wkTemplate:'GEOGCS["Mars_2000_(Sphere)",DATUM["Mars_2000_(Sphere)",SPHEROID["Mars_2000_(Sphere)",3396190.0,0.0]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5},104905:{wkTemplate:'GEOGCS["GCS_Mars_2000",DATUM["D_Mars_2000",SPHEROID["Mars_2000_IAU_IAG",3396190.0,169.8944472236118]],PRIMEM["Reference_Meridian",0.0],UNIT["Degree",0.0174532925199433]]',valid:[-180,180],origin:[-180,90],dx:1e-5}};function M(r,o){return!f(r)&&!f(o)&&(r===o||(null!=r.wkid||null!=o.wkid?r.wkid===o.wkid||W(r)&&W(o)||null!=o.latestWkid&&r.wkid===o.latestWkid||null!=r.latestWkid&&o.wkid===r.latestWkid:!(!r.wkt||!o.wkt)&&r.wkt.toUpperCase()===o.wkt.toUpperCase()))}function h(r){return P(r)&&r.wkid?w[r.wkid]:null}function m(r){return!!P(r)&&(r.wkid?null==_[r.wkid]:!!r.wkt&&!!/^\s*GEOGCS/i.test(r.wkt))}function E(r){return!(g(r)||y(r))}function G(r){return P(r)&&4326===r.wkid}function C(r){return P(r)&&4490===r.wkid}function W(r){return P(r)&&null!=r.wkid&&!0===u[r.wkid]}function R(r){return 104971===r||104905===r}function g(r){return P(r)&&null!=r.wkid&&R(r.wkid)}function A(r){return 104903===r}function y(r){return P(r)&&null!=r.wkid&&A(r.wkid)}function T(r){return P(r)&&null!=r.wkid&&!0===c[r.wkid]}function P(r){return e(r)&&(null!=r.wkid&&r.wkid>=2e3||null!=r.wkt)}const O={wkid:4326,wkt:l(w[4326].wkTemplate,{Central_Meridian:"0.0"})};var j;let I=j=class extends o{constructor(r){super(r),this.latestWkid=null,this.wkid=null,this.wkt=null,this.vcsWkid=null,this.latestVcsWkid=null,this.imageCoordinateSystem=null}static fromJSON(r){if(!r)return null;if(r.wkid){if(102100===r.wkid)return j.WebMercator;if(4326===r.wkid)return j.WGS84}const o=new j;return o.read(r),o}normalizeCtorArgs(r){if(r&&"object"==typeof r)return r;return{["string"==typeof r?"wkt":"wkid"]:r}}get isWGS84(){return G(this)}get isWebMercator(){return W(this)}get isGeographic(){return m(this)}get isWrappable(){return T(this)}writeWkt(r,o){this.wkid||(o.wkt=r)}clone(){if(this===j.WGS84)return j.WGS84;if(this===j.WebMercator)return j.WebMercator;const r=new j;return null!=this.wkid?(r.wkid=this.wkid,null!=this.latestWkid&&(r.latestWkid=this.latestWkid),null!=this.vcsWkid&&(r.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(r.latestVcsWkid=this.latestVcsWkid)):null!=this.wkt&&(r.wkt=this.wkt),this.imageCoordinateSystem&&(r.imageCoordinateSystem=t(this.imageCoordinateSystem)),r}equals(r){if(null==r)return!1;if(this.imageCoordinateSystem||r.imageCoordinateSystem){if(null==this.imageCoordinateSystem||null==r.imageCoordinateSystem)return!1;const{id:o,referenceServiceName:e}=r.imageCoordinateSystem,{geodataXform:f}=r.imageCoordinateSystem,t=this.imageCoordinateSystem;return null==o||f?JSON.stringify(t)===JSON.stringify(r.imageCoordinateSystem):e?t.id===o&&t.referenceServiceName===e:t.id===o}return M(this,r)}toJSON(r){return this.write(void 0,r)}};I.GCS_NAD_1927=null,I.WGS84=null,I.WebMercator=null,r([a({readOnly:!0})],I.prototype,"isWGS84",null),r([a({readOnly:!0})],I.prototype,"isWebMercator",null),r([a({readOnly:!0})],I.prototype,"isGeographic",null),r([a({readOnly:!0})],I.prototype,"isWrappable",null),r([a({type:i,json:{write:!0}})],I.prototype,"latestWkid",void 0),r([a({type:i,json:{write:!0,origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null===this.wkt}}}}}}})],I.prototype,"wkid",void 0),r([a({type:String,json:{origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null===this.wkid}}}}}}})],I.prototype,"wkt",void 0),r([s("wkt"),s("web-scene","wkt")],I.prototype,"writeWkt",null),r([a({type:i,json:{write:!0}})],I.prototype,"vcsWkid",void 0),r([a({type:i,json:{write:!0}})],I.prototype,"latestVcsWkid",void 0),r([a()],I.prototype,"imageCoordinateSystem",void 0),I=j=r([n("esri.geometry.SpatialReference")],I),I.prototype.toJSON.isDefaultToJSON=!0,I.GCS_NAD_1927=new I({wkid:4267,wkt:'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'}),I.WGS84=new I(O),I.WebMercator=new I({wkid:102100,latestWkid:3857}),Object.freeze&&(Object.freeze(I.GCS_NAD_1927),Object.freeze(I.WGS84),Object.freeze(I.WebMercator));var D=I;export default D;export{O as W,G as a,E as b,R as c,A as d,M as e,g as f,h as g,y as h,W as i,P as j,C as k,m as l,T as m,_ as o};
