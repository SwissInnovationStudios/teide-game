const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-6c8v8erw.js","assets/index-COBN-aVN.js","assets/index-BNXHsM2Y.js","assets/index-CVH0YhY8.js"])))=>i.map(i=>d[i]);
import{C as Oi,_ as Zh}from"./index-COBN-aVN.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const Ye={sky:12964828,water:3043220,shore:13023631,rock:9077368,snow:15395556,paper:16052712,trunk:7032634,ink:2765624,runway:5591628,pineCanopy:4151864,laurelCanopy:3032880,shrubBody:8160594,grassGround:10858597,cropGround:12100700,urbanGround:10392202,bareGround:10325622,houseWall:15590351,houseRoof:10246468},Te={size:16e3,segments:1200,waterLevel:.1,fogStart:600,fogEnd:3e3,heightmap:{url:"/teide-game/heightmaps/canaries.png",bbox:{latN:29.5,latS:27.4,lonW:-18.4,lonE:-13.3},center:{lat:28.3,lon:-16.55},metersPerUnit:40,elevRange:[0,4e3],elevationExaggeration:2}},sa="TFN",fc={sideApron:6,endApron:40,fadeWidth:55,climbGradient:.3,corridorHalfWidth:22,minAboveWater:.6,vegClearSide:4,vegClearEnd:25},Kx={sinkDepth:50},F0={riserSharpness:.5,stepHeight:3,slopeGateLo:.4,slopeGateHi:1.1,slopeEps:8,waterGuard:1.5},Od={slopeLo:.5,slopeHi:1.3,strength:.9},fi={towerHeight:12,towerScale:.75,towerSide:6,towerAlong:.3,terminal:{length:10,depth:3,height:2.2,side:5,along:-.4},colors:{concrete:14342878,glass:3359311,accent:12597547}},Zx=Object.freeze({startSpeed:22,minSpeed:2,maxSpeed:52,stallSpeed:7,pitchRate:.7,maxClimbPitch:.35,rollRate:1.8,turnFactor:1,speedFromPitch:22,drag:.7,sinkRate:.5,stallSink:9,stallPitchRate:1.9,stallAuthority:.25}),Jh=Object.freeze({startSpeed:22,minSpeed:2,maxSpeed:38,stallSpeed:9,pitchRate:.7,maxClimbPitch:.35,rollRate:1.8,turnFactor:1,speedFromPitch:12,drag:1.6,sinkRate:.5,stallSink:9,stallPitchRate:1.9,stallAuthority:.25}),It={...Jh},Jx=Object.freeze({takeoffSpeed:50,liftoffFraction:.65,linearShare:.15,pitchUpAtLiftoff:.16}),Qh=Object.freeze({takeoffSpeed:32,liftoffFraction:.85,linearShare:.45,pitchUpAtLiftoff:.16}),Ha={...Qh},oa={drag:{kind:"stat",stat:"drag",levels:[1.6,1.467,1.333,1.2,1.067,.967,.9,.833,.767,.7],costs:[0,900,1350,2050,3050,4550,8200,15400,29250,55300]},maxSpeed:{kind:"stat",stat:"maxSpeed",levels:[38,39.8,41.6,43.3,45.1,46.7,48,49.3,50.7,52],costs:[0,1200,1800,2700,4050,6100,10900,20500,38950,73800]},speedFromPitch:{kind:"stat",stat:"speedFromPitch",levels:[12,13.3,14.7,16,17.3,18.4,19.3,20.2,21.1,22],costs:[0,750,1150,1700,2550,3800,6850,12800,24300,46100]},stallSpeed:{kind:"stat",stat:"stallSpeed",levels:[9,8.78,8.56,8.33,8.11,7.89,7.67,7.44,7.22,7],costs:[0,1050,1600,2350,3550,5300,9550,17950,34100,64550]},takeoffSpeed:{kind:"stat",stat:"takeoffSpeed",levels:[32,34.2,36.4,38.7,40.9,42.9,44.7,46.4,48.2,50],costs:[0,900,1350,2050,3050,4550,8200,15400,29250,55300]},brake:{kind:"unlock",levels:[!1,!0],costs:[0,3750]},greyBoost:{kind:"multiStat",target:"greyBoost",levels:[3,3.4,3.9,4.3,4.8,5.2,5.7,6.1,6.6,7],costs:[0,750,1150,1700,2550,3800,6850,12800,24300,46100],stats:{tankDuration:[.4,.444,.489,.533,.578,.622,.667,.711,.756,.8],speedBonus:[3,3.4,3.9,4.3,4.8,5.2,5.7,6.1,6.6,7],rechargeTime:[45,42.8,40.6,38.3,36.1,33.9,31.7,29.4,27.2,25]}}},pc={obsidianUpgradeCosts:[1,2,3,5,8,13,21,34,55,89],starterDiamonds:3,islandDiscoveryDiamonds:2},Ku=[{id:"default",nameKey:"skins.default.name",descKey:"skins.default.desc",paper:Ye.paper,ink:Ye.ink,vent:1712164,costPunkte:0,costObsidian:null},{id:"charcoal",nameKey:"skins.charcoal.name",descKey:"skins.charcoal.desc",paper:3817284,ink:1316891,vent:921875,costPunkte:8e3,costObsidian:15},{id:"gold",nameKey:"skins.gold.name",descKey:"skins.gold.desc",paper:13938487,ink:7033872,vent:3812864,emissive:3812864,emissiveIntensity:.25,costPunkte:null,costObsidian:500},{id:"comingSoon",nameKey:"skins.comingSoon.name",descKey:"skins.comingSoon.desc",teaser:!0}],ef=[{id:"small",productId:"diamonds_small",diamonds:20,bonusPct:0,badgeKey:null,priceFallback:"€0.99"},{id:"medium",productId:"diamonds_medium",diamonds:100,bonusPct:20,badgeKey:null,priceFallback:"€4.99"},{id:"large",productId:"diamonds_large",diamonds:200,bonusPct:30,badgeKey:"shop.badgePopular",priceFallback:"€9.99"},{id:"xl",productId:"diamonds_xl",diamonds:400,bonusPct:40,badgeKey:"shop.badgeValue",priceFallback:"€19.99"},{id:"mega",productId:"diamonds_mega",diamonds:1e3,bonusPct:60,badgeKey:null,priceFallback:"€49.99"}],Cn={enabled:!0,useTestAds:{android:!1,ios:!1},android:{appId:"ca-app-pub-3364943525952017~3363192755",interstitial:"ca-app-pub-3364943525952017/8378313345",rewarded:"ca-app-pub-3364943525952017/2162213186"},ios:{appId:"ca-app-pub-3364943525952017~3827422729",interstitial:"ca-app-pub-3364943525952017/1425188881",rewarded:"ca-app-pub-3364943525952017/8269798831"},test:{android:{interstitial:"ca-app-pub-3940256099942544/1033173712",rewarded:"ca-app-pub-3940256099942544/5224354917"},ios:{interstitial:"ca-app-pub-3940256099942544/4411468910",rewarded:"ca-app-pub-3940256099942544/1712485313"}},interstitialEveryNCrashes:3,interstitialMinGapSec:150,crashGraceCount:3,rewardedDiamonds:2,rewardedDailyCap:5},Ar={productId:"remove_ads",entitlement:"no_ads",priceFallback:"€1.99"},mc={force:9,deployTau:.07,maxAngle:1.35},Kl={triggerDist:85,triggerHeight:40,deployTau:.35},ns={brakeForce:14,landingSpeed:2.5,headingTolerance:.45,rollingHeight:1.8,landingBonus:500},Ud={showDistance:240,hideDistance:100,rearmDistance:330},Jr={corridorHalfWidth:18,approachDepth:50,maxHeight:25,coneTolerance:.5},Do={cyclePeriod:6.5,smoothTau:.18,brakeWindow:[.05,1.85],boostWindow:[2.55,4.05],gearWindow:[4.7,6.1]},z0={duration:3,startHeight:5e3},yn={maxTiltDeg:30,deadZoneDeg:2.5,smoothing:.18,sensMin:.5,sensMax:2,sensDefault:1},at={runwayId:"TFS",ring1:{forward:85,side:-5,dy:-4},ring2:{forward:175,side:6,dy:-10},ring3:{forward:380,side:14,dy:46},ring4:{forward:500,side:4,dy:-4},thermal:{forward:300,side:14,radius:34,strength:1.7},ringRadius:11,ringClearance:8,ringsEntrySpeed:30,seawardBias:.8,corridorSearchSteps:8,corridorClearHeight:10,ringsOvershoot:70,highOvershoot:90,thermalReach:12,navThreshold:.45,navHold:.18,boostHold:.3,airSpeed:30,resetGrace:.8,endCardMs:8e3,fog:{start:360,end:1500}},B0={toastDuration:1.4,tweenDuration:2},Zl={duration:.7,camPullback:9,camRise:2.5,camTau:.1},xn={columnColor:16777215,columnOpacity:.1,columnTop:95,maxAltitude:95,liftAtCenter:30,particleColor:16777215,particleOpacity:.55,particleSize:1.7,particleDensity:.05,riseSpeed:14},Kt={distance:6.5,height:2.6,lookAhead:3.5,posTau:.12,yawTau:.1,pitchTau:.55,runwayDistance:3,runwayHeight:.4,runwayLookAhead:0},Qi={verts:8,maxLen:2.8},yt={grey:{color:10132122,tankDuration:.4,speedBonus:3,accelRate:35,rechargeTime:45},oneShot:{tiers:[{color:0,tankDuration:0,speedBonus:0,accelRate:0},{color:5086950,tankDuration:1.2,speedBonus:14,accelRate:45},{color:15778888,tankDuration:1.6,speedBonus:20,accelRate:55},{color:14702666,tankDuration:2,speedBonus:28,accelRate:70},{color:10905053,tankDuration:2.5,speedBonus:38,accelRate:85}]},refillDuration:1.6,camPushback:2.5,camPushbackTau:.15,exhaust:{offsetX:.36,offsetY:.13,offsetZ:.42,length:1.8,radiusNarrow:.03,radiusWide:.12,intensityTau:.06}},Ct={sampleCount:25e5,treeDensity:1,shrubDensity:.85,grassDensity:.7,cropDensity:.6,bareDensity:.85,droughtShrubDensity:.22,snowDensity:.4,wetlandDensity:.5,slopeThreshold:.45,cliffDensity:.85,cliffHeightRange:[.7,3],rockZoneLowMax:2.5,rockZoneHighMin:37.5,laurelMaxAltitude:1500/40,treeScale:.75,urban:{minClusterPixels:3,churchClusterPixels:8,housesPerPixel:.55,housesMin:2,housesMax:30,houseMinSpacing:2.4,pixelJitter:5.5,clusterScaleMin:.9,clusterScaleMax:1.75},grassTints:[[1.05,1.02,.85],[.85,.95,.7],[1,1,1],[.7,.85,.55],[1.1,1.05,.75],[.95,.9,.8]],rockTintsLow:[[1.2,1.18,1.1],[1.05,.95,.78],[.95,.9,.8],[1.1,1.05,.95],[1.15,1,.82]],rockTintsMid:[[.55,.55,.6],[.45,.45,.5],[.7,.68,.62],[.85,.78,.65],[.5,.52,.55],[.65,.6,.55]],rockTintsHigh:[[1.15,.95,.8],[1.05,.9,.75],[.95,.85,.75],[1.2,1,.85],[.85,.65,.55]],roofTints:[[1,1,1],[.88,.86,.88],[.62,.58,.68],[1.1,.95,.85],[.95,.88,.78]]},Tt={master:1,musicVolume:.6,sfxVolume:.85,wind:{speedMin:8,speedMax:52,gainMin:.1,gainMax:.42,rateMin:.85,rateMax:1.18,cutoffMin:380,cutoffMax:5200,brakeRate:.72,brakeCutoff:.5,brakeGain:1.15,smooth:.12},ocean:{gain:.55,coastRadius:30,maxAlt:90,smooth:.5},forest:{gain:.7,coastRadius:34,maxAlt:85,smooth:.5},city:{gain:.5,coastRadius:30,maxAlt:60,smooth:.5},thermal:{gain:.6,liftRef:6,smooth:.25},boost:{greyGain:.5,oneShotGain:.8},fade:{musicIn:1200,musicOut:800}},ft={ring:{majorRadius:2,tubeRadius:.16,hoverHeight:8,coastRingHeight:6,terrainClearance:2,terrainSearchRadius:3,opacity:.93,opacityActivated:.3,colorActivated:7235682},symbol:{size:1.4,extrudeDepth:.22,rotRate:.7,colorActivated:10132122},activation:{radius:2},colorsByType:{peak:{ring:15249978,symbol:16049885},city:{ring:15228219,symbol:15590351},landscape:{ring:14044303,symbol:16511448},beach:{ring:3043220,symbol:16245740}},rewardsByType:{peak:{punkte:800,gofios:5},city:{punkte:400,gofios:1},landscape:{punkte:500,gofios:2},beach:{punkte:400,gofios:1}},revisitPunkteFactor:.25,tierFractions:[0,.04,.19,.46,.69],hoverLabelRadius:80,activationToast:{duration:3}},He={INTRO:"INTRO",PRELAUNCH:"PRELAUNCH",TAKEOFF_ROLL:"TAKEOFF_ROLL",FLYING:"FLYING",LANDING_ROLL:"LANDING_ROLL",LANDED:"LANDED",CRASHING:"CRASHING",CRASHED:"CRASHED"},I={speed:It.startSpeed,alive:!0,inThermal:!1,brakeAmount:0,gearAmount:0,flightState:He.PRELAUNCH,currentRunway:null,takeoffTime:0,postLiftCooldown:0,landedToastTimer:0,cinematicT:0,cinematicFromPos:null,cinematicToPos:null,cinematicFromQuat:null,cinematicToQuat:null,pendingAirportUnlock:null,crashT:0,introT:0,introStartCamPos:null,greyActive:!1,oneShotActive:!1,boostFuelGrey:1,boostFuelOneshot:0,refillT:1,refillStartGrey:1,refillStartOneshot:0,flightPunkte:0,sessionLandings:0,boosterOverride:null,showPerf:!0,showAds:!0,paused:!1,tutorial:!1},J={punkte:0,gofiosByIsland:{tenerife:0,gomera:0,palma:0,gc:0,hierro:0,fuerte:0,lanza:0,graciosa:0},obsidian:0,obsidianLifetimeGranted:0,landings:0,bestFlightPunkte:0,bestSessionLandings:0,upgrades:{drag:0,maxSpeed:0,speedFromPitch:0,stallSpeed:0,takeoffSpeed:0,brake:0,greyBoost:0},obsidianUpgradeCount:{},oneShotTier:0,exploredPOIs:{},discoveredRunways:{},landedRunways:{},ownedSkins:{default:!0},equippedSkin:"default",visitedIslands:{tenerife:!0},starterGranted:!1,adsRemoveOwned:!1,rewardedDay:"",rewardedToday:0,checkpointRunwayId:null,introPlayed:!1,currentIsland:"tenerife",testMode:!1};function ud(n){J.punkte+=n,I.flightPunkte+=n}function Qx(){I.speed=It.startSpeed,I.alive=!0,I.inThermal=!1,I.brakeAmount=0,I.gearAmount=0,I.flightState=He.PRELAUNCH,I.currentRunway=null,I.takeoffTime=0,I.postLiftCooldown=0,I.landedToastTimer=0,I.cinematicT=0,I.cinematicFromPos=null,I.cinematicToPos=null,I.cinematicFromQuat=null,I.cinematicToQuat=null,I.pendingAirportUnlock=null,I.crashT=0,I.introT=0,I.introStartCamPos=null,I.greyActive=!1,I.oneShotActive=!1}const e_=[{id:"tenerife-landscape-conjunto-historico-de-arona",island:"tenerife",type:"landscape",name:"Conjunto Histórico de Arona",lat:28.1,lon:-16.68031},{id:"tenerife-landscape-conjunto-historico-icod-de-los-vinos",island:"tenerife",type:"landscape",name:"Conjunto Histórico Icod de los Vinos",lat:28.3686,lon:-16.72136},{id:"tenerife-city-fasnia",island:"tenerife",type:"city",name:"Fasnia",lat:28.2356,lon:-16.43935},{id:"tenerife-landscape-reserva-de-la-biosfera-del-macizo-de-ana",island:"tenerife",type:"landscape",name:"Reserva de la Biosfera del Macizo de Anaga",lat:28.55887,lon:-16.20473},{id:"tenerife-city-san-andres",island:"tenerife",type:"city",name:"San Andrés",lat:28.5055,lon:-16.19249},{id:"tenerife-landscape-centro-de-interpretacion-del-castillo-de",island:"tenerife",type:"landscape",name:"Centro de Interpretación del Castillo de San Cristóbal",lat:28.46687,lon:-16.24678},{id:"tenerife-landscape-lago-martianez",island:"tenerife",type:"landscape",name:"Lago Martiánez",lat:28.41927,lon:-16.54344},{id:"tenerife-landscape-monumento-natural-del-roque-de-garachico",island:"tenerife",type:"landscape",name:"Monumento Natural del Roque de Garachico",lat:28.37952,lon:-16.76258},{id:"tenerife-landscape-parque-natural-de-corona-forestal",island:"tenerife",type:"landscape",name:"Parque Natural de Corona Forestal",lat:28.27511,lon:-16.59101},{id:"tenerife-landscape-punta-de-teno",island:"tenerife",type:"landscape",name:"Punta de Teno",lat:28.3416,lon:-16.92434},{id:"tenerife-landscape-reserva-natural-especial-del-barranco-de",island:"tenerife",type:"landscape",name:"Reserva Natural Especial del Barranco del Infierno",lat:28.12304,lon:-16.71104},{id:"tenerife-landscape-reserva-natural-integral-de-los-roques-d",island:"tenerife",type:"landscape",name:"Reserva Natural Integral de los Roques de Anaga",lat:28.59829,lon:-16.158},{id:"tenerife-city-bajamar",island:"tenerife",type:"city",name:"Bajamar",lat:28.55382,lon:-16.34572},{id:"tenerife-landscape-cueva-de-chinguaro",island:"tenerife",type:"landscape",name:"Cueva de Chinguaro",lat:28.32346,lon:-16.39581},{id:"tenerife-peak-roque-de-la-grieta",island:"tenerife",type:"peak",name:"Roque de la Grieta",lat:28.22755,lon:-16.58674,ele:2576},{id:"tenerife-city-punta-del-hidalgo",island:"tenerife",type:"city",name:"Punta del Hidalgo",lat:28.5692,lon:-16.32174},{id:"tenerife-city-villa-de-arico",island:"tenerife",type:"city",name:"Villa de Arico",lat:28.16659,lon:-16.5017},{id:"tenerife-city-los-realejos",island:"tenerife",type:"city",name:"Los Realejos",lat:28.38147,lon:-16.58385},{id:"tenerife-city-valle-de-guerra",island:"tenerife",type:"city",name:"Valle de Guerra",lat:28.52022,lon:-16.3942},{id:"tenerife-city-la-esperanza",island:"tenerife",type:"city",name:"La Esperanza",lat:28.45236,lon:-16.36703},{id:"tenerife-beach-la-tejita",island:"tenerife",type:"beach",name:"La Tejita",lat:28.03107,lon:-16.55642},{id:"tenerife-beach-playa-de-las-gaviotas",island:"tenerife",type:"beach",name:"Playa de las Gaviotas",lat:28.51286,lon:-16.17611},{id:"tenerife-city-guia-de-isora",island:"tenerife",type:"city",name:"Guía de Isora",lat:28.21014,lon:-16.77873},{id:"tenerife-city-arafo",island:"tenerife",type:"city",name:"Arafo",lat:28.34045,lon:-16.41733},{id:"tenerife-city-tamaimo",island:"tenerife",type:"city",name:"Tamaimo",lat:28.2686,lon:-16.81931},{id:"gomera-city-agulo",island:"gomera",type:"city",name:"Agulo",lat:28.18818,lon:-17.19457},{id:"gomera-peak-fortaleza",island:"gomera",type:"peak",name:"Fortaleza",lat:28.09899,lon:-17.27757,ele:1231},{id:"gomera-landscape-acantilado-de-los-organos",island:"gomera",type:"landscape",name:"Acantilado de los Órganos",lat:28.21745,lon:-17.27682},{id:"gomera-landscape-parque-natural-de-majona",island:"gomera",type:"landscape",name:"Parque Natural de Majona",lat:28.14476,lon:-17.16186},{id:"gomera-city-la-calera",island:"gomera",type:"city",name:"La Calera",lat:28.09623,lon:-17.33453},{id:"gomera-landscape-sagrado-corazon",island:"gomera",type:"landscape",name:"Sagrado Corazón",lat:28.08448,lon:-17.11959},{id:"gomera-beach-playa-de-vueltas",island:"gomera",type:"beach",name:"Playa de Vueltas",lat:28.08241,lon:-17.33231},{id:"gomera-beach-playa-de-la-puntilla",island:"gomera",type:"beach",name:"Playa de La Puntilla",lat:28.08956,lon:-17.33978},{id:"gomera-beach-playa-de-argaga",island:"gomera",type:"beach",name:"Playa de Argaga",lat:28.07818,lon:-17.32291},{id:"gomera-peak-montana-de-igualero",island:"gomera",type:"peak",name:"Montaña de Igualero",lat:28.10686,lon:-17.24912,ele:1484},{id:"gomera-peak-alto-de-pajarito",island:"gomera",type:"peak",name:"Alto de Pajarito",lat:28.11084,lon:-17.24536,ele:1469},{id:"gomera-peak-montana-de-las-negrilas",island:"gomera",type:"peak",name:"Montaña de las Negrilas",lat:28.10399,lon:-17.24014,ele:1383},{id:"gomera-peak-alto-de-cherelepin",island:"gomera",type:"peak",name:"Alto de Cherelepín",lat:28.12188,lon:-17.24941,ele:1365},{id:"gomera-peak-paredes",island:"gomera",type:"peak",name:"Paredes",lat:28.09521,lon:-17.24575,ele:1359},{id:"gomera-peak-alto-de-la-tunera",island:"gomera",type:"peak",name:"Alto de la Tunera",lat:28.10793,lon:-17.22058,ele:1302},{id:"palma-landscape-parque-nacional-de-la-caldera-de-taburie",island:"palma",type:"landscape",name:"Parque nacional de la Caldera de Taburiente",lat:28.72098,lon:-17.8707},{id:"palma-peak-volcan-de-tajogaite",island:"palma",type:"peak",name:"Volcán de Tajogaite",lat:28.61325,lon:-17.86641,ele:1120},{id:"palma-landscape-parque-natural-de-cumbre-vieja",island:"palma",type:"landscape",name:"Parque natural de Cumbre Vieja",lat:28.57938,lon:-17.837},{id:"palma-landscape-monumento-natural-de-idafe",island:"palma",type:"landscape",name:"Monumento Natural de Idafe",lat:28.71264,lon:-17.87597},{id:"palma-peak-volcan-de-san-antonio",island:"palma",type:"peak",name:"Volcán de San Antonio",lat:28.48277,lon:-17.84839,ele:656},{id:"palma-peak-volcan-llano-del-banco",island:"palma",type:"peak",name:"Volcán Llano del Banco",lat:28.60225,lon:-17.85492},{id:"palma-beach-playa-de-bajamar",island:"palma",type:"beach",name:"Playa de Bajamar",lat:28.67026,lon:-17.76892},{id:"palma-city-mazo-2",island:"palma",type:"city",name:"Mazo",lat:28.60496,lon:-17.77966},{id:"palma-city-santo-domingo",island:"palma",type:"city",name:"Santo Domingo",lat:28.83018,lon:-17.94467},{id:"palma-peak-montana-todoque",island:"palma",type:"peak",name:"Montaña Todoque",lat:28.61607,lon:-17.91287,ele:350},{id:"palma-landscape-cueva-de-las-palomas",island:"palma",type:"landscape",name:"Cueva de Las Palomas",lat:28.60132,lon:-17.89077},{id:"palma-landscape-monumento-natural-de-los-volcanes-de-ten",island:"palma",type:"landscape",name:"Monumento natural de los Volcanes de Teneguía",lat:28.47708,lon:-17.84985},{id:"palma-peak-roque-palmero",island:"palma",type:"peak",name:"Roque Palmero",lat:28.73762,lon:-17.89832,ele:2306},{id:"palma-peak-montana-la-barquita",island:"palma",type:"peak",name:"Montaña la Barquita",lat:28.59977,lon:-17.8395,ele:1809},{id:"palma-peak-montana-rajada",island:"palma",type:"peak",name:"Montaña Rajada",lat:28.6131,lon:-17.87869,ele:686},{id:"palma-city-puerto-espindola",island:"palma",type:"city",name:"Puerto Espíndola",lat:28.80963,lon:-17.76332},{id:"palma-landscape-dragos-gemelos",island:"palma",type:"landscape",name:"Dragos Gemelos",lat:28.64829,lon:-17.78754},{id:"palma-landscape-fuente-santa",island:"palma",type:"landscape",name:"Fuente Santa",lat:28.45983,lon:-17.85066},{id:"palma-landscape-cueva-de-belmaco",island:"palma",type:"landscape",name:"Cueva de Belmaco",lat:28.578,lon:-17.77707},{id:"gc-city-aguimes",island:"gc",type:"city",name:"Agüimes",lat:27.90495,lon:-15.44451},{id:"gc-city-agaete",island:"gc",type:"city",name:"Agaete",lat:28.10085,lon:-15.70235},{id:"gc-city-tejeda",island:"gc",type:"city",name:"Tejeda",lat:27.99538,lon:-15.61537},{id:"gc-city-moya",island:"gc",type:"city",name:"Moya",lat:28.11077,lon:-15.58322},{id:"gc-peak-pico-de-bandama",island:"gc",type:"peak",name:"Pico de Bandama",lat:28.03751,lon:-15.45785,ele:575},{id:"gc-landscape-monumento-natural-del-barranco-de-guayad",island:"gc",type:"landscape",name:"Monumento Natural del Barranco de Guayadeque",lat:27.92637,lon:-15.47324},{id:"gc-landscape-parque-natural-de-tamadaba",island:"gc",type:"landscape",name:"Parque Natural de Tamadaba",lat:28.04136,lon:-15.74195},{id:"gc-landscape-dedo-de-dios",island:"gc",type:"landscape",name:"Dedo de Dios",lat:28.09639,lon:-15.708},{id:"gc-beach-pozo-izquierdo",island:"gc",type:"beach",name:"Pozo Izquierdo",lat:27.8249,lon:-15.42273},{id:"gc-landscape-parque-natural-de-pilancones",island:"gc",type:"landscape",name:"Parque Natural de Pilancones",lat:27.87217,lon:-15.61873},{id:"gc-peak-morron-de-la-agujereada",island:"gc",type:"peak",name:"Morrón de la Agujereada",lat:27.96086,lon:-15.57119,ele:1956},{id:"gc-beach-playa-de-las-alcaravaneras",island:"gc",type:"beach",name:"Playa de Las Alcaravaneras",lat:28.13071,lon:-15.42898},{id:"gc-beach-playa-del-confital",island:"gc",type:"beach",name:"Playa del Confital",lat:28.15949,lon:-15.43598},{id:"gc-peak-montana-de-tauro",island:"gc",type:"peak",name:"Montaña de Tauro",lat:27.89575,lon:-15.69126,ele:1225},{id:"gc-city-san-bartolome-de-tirajana",island:"gc",type:"city",name:"San Bartolomé de Tirajana",lat:27.92525,lon:-15.573},{id:"gc-peak-montana-de-ajodar",island:"gc",type:"peak",name:"Montaña de Ajódar",lat:28.15169,lon:-15.64068,ele:433},{id:"gc-peak-montana-de-arinaga",island:"gc",type:"peak",name:"Montaña de Arinaga",lat:27.86939,lon:-15.39371,ele:199},{id:"gc-landscape-cuatro-puertas",island:"gc",type:"landscape",name:"Cuatro Puertas",lat:27.95894,lon:-15.41836},{id:"gc-landscape-vegueta",island:"gc",type:"landscape",name:"Vegueta",lat:28.09936,lon:-15.41447},{id:"gc-landscape-reserva-natural-especial-de-los-marteles",island:"gc",type:"landscape",name:"Reserva Natural Especial de los Marteles",lat:27.94767,lon:-15.5175},{id:"gc-landscape-monumento-natural-riscos-de-tirajana",island:"gc",type:"landscape",name:"Monumento Natural Riscos de Tirajana",lat:27.94649,lon:-15.56924},{id:"gc-beach-playa-de-arinaga",island:"gc",type:"beach",name:"Playa de Arinaga",lat:27.85483,lon:-15.39833},{id:"gc-peak-roque-aguayro",island:"gc",type:"peak",name:"Roque Aguayro",lat:27.88429,lon:-15.47604,ele:542},{id:"gc-beach-playa-de-san-agustin",island:"gc",type:"beach",name:"Playa de San Agustín",lat:27.76891,lon:-15.54128},{id:"gc-landscape-reserva-natural-integral-de-barranco-osc",island:"gc",type:"landscape",name:"Reserva Natural Integral de Barranco Oscuro",lat:28.06392,lon:-15.59211},{id:"gc-landscape-reserva-natural-integral-de-inagua",island:"gc",type:"landscape",name:"Reserva Natural Integral de Inagua",lat:27.94424,lon:-15.69348},{id:"gc-beach-playa-de-gui-gui",island:"gc",type:"beach",name:"Playa de Güi-Güí",lat:27.94532,lon:-15.82785},{id:"gc-beach-playa-de-vargas",island:"gc",type:"beach",name:"Playa de Vargas",lat:27.89019,lon:-15.39406},{id:"gc-city-santa-brigida",island:"gc",type:"city",name:"Santa Brígida",lat:28.03568,lon:-15.49747},{id:"gc-peak-masaciega",island:"gc",type:"peak",name:"Masaciega",lat:27.86483,lon:-15.45728,ele:276},{id:"gc-landscape-mundo-aborigen",island:"gc",type:"landscape",name:"Mundo Aborigen",lat:27.8136,lon:-15.58328},{id:"gc-beach-playa-de-anfi-del-mar",island:"gc",type:"beach",name:"Playa de Anfi del Mar",lat:27.77269,lon:-15.69585},{id:"gc-beach-playa-de-puerto-rico",island:"gc",type:"beach",name:"Playa de Puerto Rico",lat:27.78462,lon:-15.71383},{id:"gc-beach-playa-de-la-laja",island:"gc",type:"beach",name:"Playa de La Laja",lat:28.05855,lon:-15.41727},{id:"gc-beach-playa-de-melenara",island:"gc",type:"beach",name:"Playa de Melenara",lat:27.98723,lon:-15.37523},{id:"hierro-peak-malpaso-2",island:"hierro",type:"peak",name:"Malpaso",lat:27.7293,lon:-18.04047,ele:1501},{id:"hierro-peak-tanganasoga",island:"hierro",type:"peak",name:"Tanganasoga",lat:27.73012,lon:-18.05933,ele:1384},{id:"hierro-landscape-cueva-de-don-justo",island:"hierro",type:"landscape",name:"Cueva de Don Justo",lat:27.65012,lon:-17.98881},{id:"hierro-peak-montana-de-tejeguate",island:"hierro",type:"peak",name:"Montaña de Tejeguate",lat:27.76493,lon:-18.03027},{id:"hierro-beach-playa-del-verodal",island:"hierro",type:"beach",name:"Playa del Verodal",lat:27.74727,lon:-18.15156},{id:"hierro-landscape-zona-arqueologica-poblado-de-guinea",island:"hierro",type:"landscape",name:"Zona Arqueológica Poblado de Guinea",lat:27.77339,lon:-17.99717},{id:"hierro-beach-playa-dulce",island:"hierro",type:"beach",name:"Playa Dulce",lat:27.68497,lon:-17.96679},{id:"hierro-beach-las-playas",island:"hierro",type:"beach",name:"Las Playas",lat:27.72327,lon:-17.95327},{id:"hierro-peak-tenerista",island:"hierro",type:"peak",name:"Tenerista",lat:27.73042,lon:-18.01023,ele:1417},{id:"hierro-peak-montana-de-los-asomadas",island:"hierro",type:"peak",name:"Montaña de los Asomadas",lat:27.7466,lon:-17.98171,ele:1371},{id:"hierro-city-tigaday",island:"hierro",type:"city",name:"Tigaday",lat:27.75166,lon:-18.01284},{id:"fuerte-peak-tindaya",island:"fuerte",type:"peak",name:"Tindaya",lat:28.59648,lon:-13.9765,ele:401},{id:"fuerte-city-el-cotillo",island:"fuerte",type:"city",name:"El Cotillo",lat:28.6827,lon:-14.01011},{id:"fuerte-landscape-faro-del-toston",island:"fuerte",type:"landscape",name:"Faro del Toston",lat:28.71544,lon:-14.01376},{id:"fuerte-landscape-faro-de-la-entallada",island:"fuerte",type:"landscape",name:"Faro de la Entallada",lat:28.23034,lon:-13.94856},{id:"fuerte-landscape-malpais-de-la-arena",island:"fuerte",type:"landscape",name:"Malpaís de la Arena",lat:28.63496,lon:-13.93167},{id:"fuerte-beach-playa-del-matorral",island:"fuerte",type:"beach",name:"Playa Del Matorral",lat:28.06847,lon:-14.31623},{id:"fuerte-city-villaverde",island:"fuerte",type:"city",name:"Villaverde",lat:28.6354,lon:-13.90219},{id:"fuerte-landscape-morro-velosa",island:"fuerte",type:"landscape",name:"Morro Velosa",lat:28.43862,lon:-14.05001},{id:"fuerte-city-la-oliva",island:"fuerte",type:"city",name:"La Oliva",lat:28.61103,lon:-13.92813},{id:"fuerte-peak-montana-roja",island:"fuerte",type:"peak",name:"Montaña Roja",lat:28.63696,lon:-13.8417,ele:315},{id:"fuerte-landscape-monumento-hornos-de-cal-de-la-guirra",island:"fuerte",type:"landscape",name:"Monumento Hornos de Cal de la Guirra",lat:28.38551,lon:-13.86379},{id:"fuerte-beach-playa-barlovento",island:"fuerte",type:"beach",name:"Playa Barlovento",lat:28.13174,lon:-14.34052},{id:"fuerte-peak-caracol",island:"fuerte",type:"peak",name:"Caracol",lat:28.22236,lon:-14.09365,ele:468},{id:"fuerte-peak-montana-de-tirba",island:"fuerte",type:"peak",name:"Montaña de Tirba",lat:28.26338,lon:-14.09117,ele:341},{id:"fuerte-peak-morro-de-la-cruzada",island:"fuerte",type:"peak",name:"Morro de la Cruzada",lat:28.21677,lon:-14.13435,ele:320},{id:"fuerte-peak-morro-del-cencerro",island:"fuerte",type:"peak",name:"Morro del Cencerro",lat:28.24041,lon:-13.9561,ele:287},{id:"fuerte-peak-caldera-de-liria",island:"fuerte",type:"peak",name:"Caldera de Liria",lat:28.32147,lon:-13.99363,ele:227},{id:"fuerte-landscape-mirador-astronomico-de-sicasumbre",island:"fuerte",type:"landscape",name:"Mirador Astronómico de Sicasumbre",lat:28.28796,lon:-14.15986},{id:"fuerte-beach-playa-del-castillo",island:"fuerte",type:"beach",name:"Playa del Castillo",lat:28.67671,lon:-14.00903},{id:"fuerte-beach-playa-de-la-lajita",island:"fuerte",type:"beach",name:"Playa de La Lajita",lat:28.1775,lon:-14.16339},{id:"fuerte-beach-playa-de-ugan",island:"fuerte",type:"beach",name:"Playa de Ugán",lat:28.24398,lon:-14.21253},{id:"fuerte-beach-playa-del-viejo-rey",island:"fuerte",type:"beach",name:"Playa del Viejo Rey",lat:28.2126,lon:-14.22589},{id:"fuerte-city-lajares",island:"fuerte",type:"city",name:"Lajares",lat:28.6802,lon:-13.93405},{id:"fuerte-city-la-lajita",island:"fuerte",type:"city",name:"La Lajita",lat:28.1834,lon:-14.15195},{id:"fuerte-peak-pico-de-mocan",island:"fuerte",type:"peak",name:"Pico de Mocán",lat:28.10562,lon:-14.35107,ele:801},{id:"fuerte-peak-pico-de-la-palma",island:"fuerte",type:"peak",name:"Pico de la Palma",lat:28.10031,lon:-14.36098,ele:744},{id:"fuerte-peak-morro-del-cavadero",island:"fuerte",type:"peak",name:"Morro del Cavadero",lat:28.09197,lon:-14.3614,ele:741},{id:"fuerte-peak-pico-de-la-atalaya",island:"fuerte",type:"peak",name:"Pico de la Atalaya",lat:28.41306,lon:-14.07936,ele:726},{id:"fuerte-peak-gran-montana",island:"fuerte",type:"peak",name:"Gran Montaña",lat:28.37559,lon:-14.0627,ele:710},{id:"fuerte-peak-cardon",island:"fuerte",type:"peak",name:"Cardón",lat:28.25702,lon:-14.15818,ele:695},{id:"fuerte-peak-montana-de-la-muda",island:"fuerte",type:"peak",name:"Montaña de la Muda",lat:28.57194,lon:-13.9592,ele:691},{id:"fuerte-peak-fraile",island:"fuerte",type:"peak",name:"Fraile",lat:28.09033,lon:-14.39397,ele:688},{id:"fuerte-city-cofete",island:"fuerte",type:"city",name:"Cofete",lat:28.10231,lon:-14.38882},{id:"lanza-peak-monte-corona",island:"lanza",type:"peak",name:"Monte Corona",lat:29.18287,lon:-13.48471,ele:603},{id:"lanza-landscape-parque-natural-de-los-volcanes",island:"lanza",type:"landscape",name:"Parque Natural de Los Volcanes",lat:29.01191,lon:-13.75396},{id:"lanza-city-tahiche",island:"lanza",type:"city",name:"Tahíche",lat:29.01362,lon:-13.54306},{id:"lanza-city-uga",island:"lanza",type:"city",name:"Uga",lat:28.95016,lon:-13.74414},{id:"lanza-peak-hacha-grande",island:"lanza",type:"peak",name:"Hacha Grande",lat:28.88641,lon:-13.78183,ele:562},{id:"lanza-peak-montana-de-las-lapas-o-del-cuervo",island:"lanza",type:"peak",name:"Montaña de las Lapas o del Cuervo",lat:28.99103,lon:-13.69389,ele:390},{id:"lanza-landscape-laguna-verde",island:"lanza",type:"landscape",name:"Laguna Verde",lat:28.97673,lon:-13.82778},{id:"lanza-city-la-santa",island:"lanza",type:"city",name:"La Santa",lat:29.10773,lon:-13.66568},{id:"lanza-peak-montana-tamia",island:"lanza",type:"peak",name:"Montaña Tamia",lat:29.0358,lon:-13.63735,ele:551},{id:"lanza-peak-montana-diama",island:"lanza",type:"peak",name:"Montaña Diama",lat:28.97872,lon:-13.71235,ele:472},{id:"lanza-city-san-bartolome",island:"lanza",type:"city",name:"San Bartolomé",lat:29.0017,lon:-13.61391},{id:"lanza-city-tias",island:"lanza",type:"city",name:"Tías",lat:28.95431,lon:-13.65292},{id:"lanza-peak-caldera-blanca",island:"lanza",type:"peak",name:"Caldera Blanca",lat:29.03441,lon:-13.73175,ele:460},{id:"lanza-landscape-monumento-natural-los-ajaches",island:"lanza",type:"landscape",name:"Monumento Natural Los Ajaches",lat:28.88425,lon:-13.76318},{id:"lanza-peak-montana-blanca",island:"lanza",type:"peak",name:"Montaña Blanca",lat:28.97826,lon:-13.64095,ele:596},{id:"lanza-peak-montana-negra",island:"lanza",type:"peak",name:"Montaña Negra",lat:28.99484,lon:-13.67915,ele:513},{id:"lanza-beach-playa-del-paso",island:"lanza",type:"beach",name:"Playa del Paso",lat:28.99706,lon:-13.83042},{id:"lanza-beach-playa-de-la-canteria",island:"lanza",type:"beach",name:"Playa de La Cantería",lat:29.22482,lon:-13.46204},{id:"graciosa-beach-playa-baja-del-ganado",island:"graciosa",type:"beach",name:"Playa Baja del Ganado",lat:29.26346,lon:-13.52154},{id:"graciosa-peak-agujas-chicas",island:"graciosa",type:"peak",name:"Agujas Chicas",lat:29.25694,lon:-13.50038,ele:257},{id:"graciosa-peak-montana-clara",island:"graciosa",type:"peak",name:"Montaña Clara",lat:29.29884,lon:-13.53494,ele:255},{id:"graciosa-landscape-punta-del-pobre",island:"graciosa",type:"landscape",name:"Punta del Pobre",lat:29.21909,lon:-13.54361},{id:"graciosa-landscape-arcos-de-los-caletones",island:"graciosa",type:"landscape",name:"Arcos de los Caletones",lat:29.2838,lon:-13.49994}],ne={PEAK:"peak",CITY:"city",LANDSCAPE:"landscape",BEACH:"beach"};function tf(n,e){const{center:t,metersPerUnit:i}=Te.heightmap,a=(e-t.lon)*111320*Math.cos(t.lat*Math.PI/180),s=(n-t.lat)*111320;return{x:a/i,z:-s/i}}const wt=[{id:"tenerife",name:"Tenerife",lat:28.3,lon:-16.55,bboxRadius:1100,playable:!0},{id:"gomera",name:"La Gomera",lat:28.1,lon:-17.21,bboxRadius:350,playable:!0},{id:"palma",name:"La Palma",lat:28.71,lon:-17.85,bboxRadius:600,playable:!0},{id:"gc",name:"Gran Canaria",lat:27.93,lon:-15.59,bboxRadius:700,playable:!0},{id:"hierro",name:"El Hierro",lat:27.74,lon:-18.02,bboxRadius:350,playable:!0},{id:"fuerte",name:"Fuerteventura",lat:28.36,lon:-14.05,bboxRadius:1300,playable:!0},{id:"lanza",name:"Lanzarote",lat:29.04,lon:-13.62,bboxRadius:800,playable:!0},{id:"graciosa",name:"La Graciosa",lat:29.24,lon:-13.5,bboxRadius:180,playable:!0}].map(n=>({...n,...tf(n.lat,n.lon)})),t_=[{id:"teide",name:"Pico del Teide",island:"tenerife",lat:28.2724,lon:-16.6425,ringRadius:10,ringCount:36},{id:"viejo",name:"Pico Viejo",island:"tenerife",lat:28.2632,lon:-16.6534,ringRadius:18,ringCount:48},{id:"taburiente",name:"Caldera de Taburiente",island:"palma",lat:28.708,lon:-17.872,ringRadius:60,ringCount:80},{id:"cumbre-vieja",name:"Cumbre Vieja",island:"palma",lat:28.574,lon:-17.8358,ringRadius:12,ringCount:32},{id:"teneguia",name:"Volcán Teneguía",island:"palma",lat:28.4669,lon:-17.8425,ringRadius:6,ringCount:22},{id:"bandama",name:"Caldera de Bandama",island:"gc",lat:28.0339,lon:-15.4519,ringRadius:10,ringCount:30},{id:"calderon-hondo",name:"Calderón Hondo",island:"fuerte",lat:28.703,lon:-13.939,ringRadius:10,ringCount:30},{id:"arena",name:"Volcán de la Arena",island:"fuerte",lat:28.6997,lon:-13.9594,ringRadius:8,ringCount:24},{id:"timanfaya",name:"Timanfaya",island:"lanza",lat:29,lon:-13.755,ringRadius:40,ringCount:64},{id:"caldera-blanca",name:"Caldera Blanca",island:"lanza",lat:29.0167,lon:-13.7833,ringRadius:15,ringCount:36}].map(n=>({...n,...tf(n.lat,n.lon)}));function n_(n){let e="tenerife",t=1/0;for(const i of wt){if(!i.playable)continue;const a=n.x-i.x,s=n.z-i.z,o=a*a+s*s;o<t&&(t=o,e=i.id)}return e}const i_=[{id:"tfe-peak-teide",island:"tenerife",type:ne.PEAK,name:"Pico del Teide",lat:28.2724,lon:-16.6425,ele:3715},{id:"tfe-peak-pico-viejo",island:"tenerife",type:ne.PEAK,name:"Pico Viejo",lat:28.2632,lon:-16.6534,ele:3135},{id:"tfe-peak-montana-blanca",island:"tenerife",type:ne.PEAK,name:"Montaña Blanca",lat:28.251,lon:-16.6035,ele:2748},{id:"tfe-peak-guajara",island:"tenerife",type:ne.PEAK,name:"Guajara",lat:28.2207,lon:-16.6157,ele:2718},{id:"tfe-peak-cinchado",island:"tenerife",type:ne.PEAK,name:"Roque Cinchado",lat:28.228,lon:-16.6172,ele:2167},{id:"tfe-peak-tigaiga",island:"tenerife",type:ne.PEAK,name:"Montaña de Tigaiga",lat:28.37,lon:-16.63,ele:1909},{id:"tfe-peak-conde",island:"tenerife",type:ne.PEAK,name:"Roque del Conde",lat:28.1093,lon:-16.7117,ele:1001},{id:"tfe-peak-cruz-carmen",island:"tenerife",type:ne.PEAK,name:"Cruz del Carmen",lat:28.5358,lon:-16.3025,ele:900},{id:"tfe-peak-roques-anaga",island:"tenerife",type:ne.PEAK,name:"Roques de Anaga",lat:28.5775,lon:-16.153,ele:227},{id:"tfe-city-santa-cruz",island:"tenerife",type:ne.CITY,name:"Santa Cruz de Tenerife",lat:28.4636,lon:-16.2518},{id:"tfe-city-la-laguna",island:"tenerife",type:ne.CITY,name:"San Cristóbal de La Laguna",lat:28.4853,lon:-16.3201},{id:"tfe-city-la-orotava",island:"tenerife",type:ne.CITY,name:"La Orotava",lat:28.3902,lon:-16.5234},{id:"tfe-city-puerto-cruz",island:"tenerife",type:ne.CITY,name:"Puerto de la Cruz",lat:28.4144,lon:-16.544},{id:"tfe-city-los-cristianos",island:"tenerife",type:ne.CITY,name:"Los Cristianos",lat:28.0507,lon:-16.71},{id:"tfe-city-las-americas",island:"tenerife",type:ne.CITY,name:"Playa de las Américas",lat:28.054,lon:-16.729},{id:"tfe-city-adeje",island:"tenerife",type:ne.CITY,name:"Adeje",lat:28.1226,lon:-16.7256},{id:"tfe-city-granadilla",island:"tenerife",type:ne.CITY,name:"Granadilla de Abona",lat:28.1182,lon:-16.5781},{id:"tfe-city-icod",island:"tenerife",type:ne.CITY,name:"Icod de los Vinos",lat:28.3729,lon:-16.7106},{id:"tfe-city-garachico",island:"tenerife",type:ne.CITY,name:"Garachico",lat:28.3735,lon:-16.7635},{id:"tfe-city-vilaflor",island:"tenerife",type:ne.CITY,name:"Vilaflor",lat:28.1572,lon:-16.6356},{id:"tfe-city-buenavista",island:"tenerife",type:ne.CITY,name:"Buenavista del Norte",lat:28.3712,lon:-16.8567},{id:"tfe-city-masca",island:"tenerife",type:ne.CITY,name:"Masca",lat:28.3001,lon:-16.8404},{id:"tfe-land-teide-park",island:"tenerife",type:ne.LANDSCAPE,name:"Parque Nacional del Teide",lat:28.2733,lon:-16.6422},{id:"tfe-land-anaga-park",island:"tenerife",type:ne.LANDSCAPE,name:"Parque Rural de Anaga",lat:28.55,lon:-16.2},{id:"tfe-land-teno-park",island:"tenerife",type:ne.LANDSCAPE,name:"Parque Rural de Teno",lat:28.35,lon:-16.85},{id:"tfe-land-barranco-infierno",island:"tenerife",type:ne.LANDSCAPE,name:"Barranco del Infierno",lat:28.1184,lon:-16.7245},{id:"tfe-land-barranco-masca",island:"tenerife",type:ne.LANDSCAPE,name:"Barranco de Masca",lat:28.3,lon:-16.841},{id:"tfe-land-cueva-viento",island:"tenerife",type:ne.LANDSCAPE,name:"Cueva del Viento",lat:28.3754,lon:-16.714},{id:"tfe-land-esperanza",island:"tenerife",type:ne.LANDSCAPE,name:"Bosque de la Esperanza",lat:28.48,lon:-16.41},{id:"tfe-land-pinar-chio",island:"tenerife",type:ne.LANDSCAPE,name:"Pinar de Chío",lat:28.27,lon:-16.71},{id:"tfe-land-los-gigantes",island:"tenerife",type:ne.LANDSCAPE,name:"Acantilados de Los Gigantes",lat:28.248,lon:-16.843},{id:"tfe-land-mirador-garachico",island:"tenerife",type:ne.LANDSCAPE,name:"Mirador de Garachico",lat:28.368,lon:-16.761},{id:"tfe-beach-teresitas",island:"tenerife",type:ne.BEACH,name:"Playa de las Teresitas",lat:28.5096,lon:-16.186},{id:"tfe-beach-vistas",island:"tenerife",type:ne.BEACH,name:"Playa de las Vistas",lat:28.0489,lon:-16.7218},{id:"tfe-beach-arena",island:"tenerife",type:ne.BEACH,name:"Playa de la Arena",lat:28.244,lon:-16.8053},{id:"tfe-beach-medano",island:"tenerife",type:ne.BEACH,name:"Playa El Médano",lat:28.0461,lon:-16.5343},{id:"tfe-beach-benijo",island:"tenerife",type:ne.BEACH,name:"Playa de Benijo",lat:28.5775,lon:-16.1838},{id:"tfe-beach-bollullo",island:"tenerife",type:ne.BEACH,name:"Playa del Bollullo",lat:28.4106,lon:-16.494},{id:"tfe-beach-fanabe",island:"tenerife",type:ne.BEACH,name:"Playa de Fañabé",lat:28.0907,lon:-16.7383},{id:"tfe-beach-jardin",island:"tenerife",type:ne.BEACH,name:"Playa Jardín",lat:28.4189,lon:-16.5586},{id:"tfe-beach-almaciga",island:"tenerife",type:ne.BEACH,name:"Playa de Almáciga",lat:28.5752,lon:-16.1714},{id:"tfe-beach-abama",island:"tenerife",type:ne.BEACH,name:"Playa de Abama",lat:28.1735,lon:-16.7937},{id:"gom-peak-garajonay",island:"gomera",type:ne.PEAK,name:"Alto de Garajonay",lat:28.1163,lon:-17.2476,ele:1487},{id:"gom-city-san-sebastian",island:"gomera",type:ne.CITY,name:"San Sebastián de La Gomera",lat:28.0911,lon:-17.1106},{id:"gom-city-valle-gran-rey",island:"gomera",type:ne.CITY,name:"Valle Gran Rey",lat:28.0922,lon:-17.3358},{id:"gom-city-vallehermoso",island:"gomera",type:ne.CITY,name:"Vallehermoso",lat:28.1797,lon:-17.2658},{id:"gom-city-hermigua",island:"gomera",type:ne.CITY,name:"Hermigua",lat:28.1656,lon:-17.1942},{id:"gom-land-garajonay-park",island:"gomera",type:ne.LANDSCAPE,name:"Parque Nacional de Garajonay",lat:28.1167,lon:-17.25},{id:"gom-land-los-organos",island:"gomera",type:ne.LANDSCAPE,name:"Los Órganos",lat:28.212,lon:-17.282},{id:"gom-land-roque-agando",island:"gomera",type:ne.LANDSCAPE,name:"Roque de Agando",lat:28.1153,lon:-17.2106},{id:"gom-beach-santiago",island:"gomera",type:ne.BEACH,name:"Playa de Santiago",lat:28.0294,lon:-17.1989},{id:"gom-beach-calera",island:"gomera",type:ne.BEACH,name:"Playa de la Calera",lat:28.1023,lon:-17.3401},{id:"gc-peak-nieves",island:"gc",type:ne.PEAK,name:"Pico de las Nieves",lat:27.9617,lon:-15.5803,ele:1949},{id:"gc-city-las-palmas",island:"gc",type:ne.CITY,name:"Las Palmas de Gran Canaria",lat:28.1235,lon:-15.4363},{id:"gc-city-maspalomas",island:"gc",type:ne.CITY,name:"Maspalomas",lat:27.7547,lon:-15.586},{id:"gc-city-teror",island:"gc",type:ne.CITY,name:"Teror",lat:28.0556,lon:-15.547},{id:"gc-city-telde",island:"gc",type:ne.CITY,name:"Telde",lat:27.9974,lon:-15.4178},{id:"gc-land-nublo",island:"gc",type:ne.LANDSCAPE,name:"Roque Nublo",lat:27.965,lon:-15.6175},{id:"gc-land-dunas",island:"gc",type:ne.LANDSCAPE,name:"Dunas de Maspalomas",lat:27.741,lon:-15.5797},{id:"gc-beach-canteras",island:"gc",type:ne.BEACH,name:"Playa de las Canteras",lat:28.1352,lon:-15.4348},{id:"gc-beach-ingles",island:"gc",type:ne.BEACH,name:"Playa del Inglés",lat:27.7597,lon:-15.58},{id:"gc-peak-tejeda",island:"gc",type:ne.PEAK,name:"Cruz de Tejeda",lat:28.0086,lon:-15.6075,ele:1490},{id:"gc-city-tafira",island:"gc",type:ne.CITY,name:"Tafira",lat:28.0769,lon:-15.4569},{id:"gc-city-san-mateo",island:"gc",type:ne.CITY,name:"San Mateo",lat:28.0205,lon:-15.5358},{id:"gc-city-mogan",island:"gc",type:ne.CITY,name:"Puerto de Mogán",lat:27.8158,lon:-15.7625},{id:"gc-land-bandama",island:"gc",type:ne.LANDSCAPE,name:"Caldera de Bandama",lat:28.0339,lon:-15.4519},{id:"gc-land-bentayga",island:"gc",type:ne.LANDSCAPE,name:"Roque Bentayga",lat:27.9697,lon:-15.6519},{id:"gc-land-andenes",island:"gc",type:ne.LANDSCAPE,name:"Andén Verde",lat:28.0769,lon:-15.7833},{id:"gc-beach-amadores",island:"gc",type:ne.BEACH,name:"Playa de Amadores",lat:27.7866,lon:-15.7264},{id:"gc-beach-tauro",island:"gc",type:ne.BEACH,name:"Playa de Tauro",lat:27.7831,lon:-15.7331},{id:"palma-peak-muchachos",island:"palma",type:ne.PEAK,name:"Roque de los Muchachos",lat:28.7544,lon:-17.8851,ele:2426},{id:"palma-city-santa-cruz",island:"palma",type:ne.CITY,name:"Santa Cruz de La Palma",lat:28.6835,lon:-17.7642},{id:"palma-city-llanos",island:"palma",type:ne.CITY,name:"Los Llanos de Aridane",lat:28.6585,lon:-17.9181},{id:"palma-land-taburiente",island:"palma",type:ne.LANDSCAPE,name:"Caldera de Taburiente",lat:28.708,lon:-17.872},{id:"palma-land-cumbre-vieja",island:"palma",type:ne.LANDSCAPE,name:"Cumbre Vieja",lat:28.574,lon:-17.8358},{id:"palma-beach-nogales",island:"palma",type:ne.BEACH,name:"Playa de Nogales",lat:28.7548,lon:-17.7616},{id:"palma-beach-puerto-naos",island:"palma",type:ne.BEACH,name:"Playa de Puerto Naos",lat:28.5828,lon:-17.9128},{id:"palma-peak-bejenado",island:"palma",type:ne.PEAK,name:"Pico Bejenado",lat:28.7036,lon:-17.8839,ele:1854},{id:"palma-peak-birigoyo",island:"palma",type:ne.PEAK,name:"Pico Birigoyo",lat:28.6483,lon:-17.8492,ele:1808},{id:"palma-city-tazacorte",island:"palma",type:ne.CITY,name:"Tazacorte",lat:28.6394,lon:-17.9333},{id:"palma-city-fuencaliente",island:"palma",type:ne.CITY,name:"Fuencaliente",lat:28.4889,lon:-17.8453},{id:"palma-city-mazo",island:"palma",type:ne.CITY,name:"Villa de Mazo",lat:28.6044,lon:-17.7892},{id:"palma-land-salinas",island:"palma",type:ne.LANDSCAPE,name:"Salinas de Fuencaliente",lat:28.4528,lon:-17.8447},{id:"palma-land-volcan-teneguia",island:"palma",type:ne.LANDSCAPE,name:"Volcán Teneguía",lat:28.4669,lon:-17.8425},{id:"palma-beach-charco-verde",island:"palma",type:ne.BEACH,name:"Playa de Charco Verde",lat:28.5483,lon:-17.8975},{id:"hierro-peak-malpaso",island:"hierro",type:ne.PEAK,name:"Pico de Malpaso",lat:27.733,lon:-18.0177,ele:1501},{id:"hierro-city-valverde",island:"hierro",type:ne.CITY,name:"Valverde",lat:27.8055,lon:-17.9183},{id:"hierro-city-frontera",island:"hierro",type:ne.CITY,name:"La Frontera",lat:27.7639,lon:-18.0122},{id:"hierro-land-sabinar",island:"hierro",type:ne.LANDSCAPE,name:"El Sabinar",lat:27.756,lon:-18.1148},{id:"hierro-land-bonanza",island:"hierro",type:ne.LANDSCAPE,name:"Roque de la Bonanza",lat:27.7029,lon:-17.9429},{id:"hierro-beach-charco-azul",island:"hierro",type:ne.BEACH,name:"Charco Azul",lat:27.8061,lon:-18.1057},{id:"hierro-city-tamaduste",island:"hierro",type:ne.CITY,name:"Tamaduste",lat:27.8125,lon:-17.9136},{id:"hierro-city-el-pinar",island:"hierro",type:ne.CITY,name:"El Pinar",lat:27.7053,lon:-17.9928},{id:"hierro-land-roques-salmor",island:"hierro",type:ne.LANDSCAPE,name:"Roques de Salmor",lat:27.8294,lon:-17.9694},{id:"hierro-land-pozo-salud",island:"hierro",type:ne.LANDSCAPE,name:"Pozo de la Salud",lat:27.7681,lon:-18.1219},{id:"hierro-land-punta-dehesa",island:"hierro",type:ne.LANDSCAPE,name:"Punta de la Dehesa",lat:27.7842,lon:-18.1633},{id:"hierro-beach-mar-calmas",island:"hierro",type:ne.BEACH,name:"Mar de las Calmas",lat:27.6961,lon:-18.0356},{id:"fuerte-peak-zarza",island:"fuerte",type:ne.PEAK,name:"Pico de la Zarza",lat:28.0828,lon:-14.3053,ele:807},{id:"fuerte-city-puerto-rosario",island:"fuerte",type:ne.CITY,name:"Puerto del Rosario",lat:28.5011,lon:-13.8627},{id:"fuerte-city-corralejo",island:"fuerte",type:ne.CITY,name:"Corralejo",lat:28.7361,lon:-13.87},{id:"fuerte-city-morro-jable",island:"fuerte",type:ne.CITY,name:"Morro Jable",lat:28.054,lon:-14.349},{id:"fuerte-land-corralejo-park",island:"fuerte",type:ne.LANDSCAPE,name:"Parque Natural de Corralejo",lat:28.717,lon:-13.834},{id:"fuerte-land-calderon",island:"fuerte",type:ne.LANDSCAPE,name:"Calderón Hondo",lat:28.703,lon:-13.939},{id:"fuerte-beach-sotavento",island:"fuerte",type:ne.BEACH,name:"Playa de Sotavento",lat:28.1973,lon:-14.218},{id:"fuerte-beach-cofete",island:"fuerte",type:ne.BEACH,name:"Playa de Cofete",lat:28.0945,lon:-14.382},{id:"fuerte-city-betancuria",island:"fuerte",type:ne.CITY,name:"Betancuria",lat:28.4244,lon:-14.0589},{id:"fuerte-city-antigua",island:"fuerte",type:ne.CITY,name:"Antigua",lat:28.4181,lon:-14.0114},{id:"fuerte-city-pajara",island:"fuerte",type:ne.CITY,name:"Pájara",lat:28.3531,lon:-14.1006},{id:"fuerte-city-caleta-fuste",island:"fuerte",type:ne.CITY,name:"Caleta de Fuste",lat:28.395,lon:-13.8633},{id:"fuerte-city-tuineje",island:"fuerte",type:ne.CITY,name:"Tuineje",lat:28.3219,lon:-14.0481},{id:"fuerte-land-isla-lobos",island:"fuerte",type:ne.LANDSCAPE,name:"Isla de Lobos",lat:28.7556,lon:-13.8225},{id:"fuerte-land-arena-volcano",island:"fuerte",type:ne.LANDSCAPE,name:"Volcán de la Arena",lat:28.6997,lon:-13.9594},{id:"fuerte-beach-garcey",island:"fuerte",type:ne.BEACH,name:"Playa de Garcey",lat:28.3344,lon:-14.2197},{id:"lanza-peak-penas-chache",island:"lanza",type:ne.PEAK,name:"Peñas del Chache",lat:29.1108,lon:-13.5468,ele:671},{id:"lanza-city-arrecife",island:"lanza",type:ne.CITY,name:"Arrecife",lat:28.9637,lon:-13.5477},{id:"lanza-city-costa-teguise",island:"lanza",type:ne.CITY,name:"Costa Teguise",lat:28.987,lon:-13.5},{id:"lanza-city-playa-blanca",island:"lanza",type:ne.CITY,name:"Playa Blanca",lat:28.8597,lon:-13.8253},{id:"lanza-land-timanfaya",island:"lanza",type:ne.LANDSCAPE,name:"Parque Nacional de Timanfaya",lat:29,lon:-13.755},{id:"lanza-land-cueva-verdes",island:"lanza",type:ne.LANDSCAPE,name:"Cueva de los Verdes",lat:29.1574,lon:-13.4342},{id:"lanza-land-mirador-rio",island:"lanza",type:ne.LANDSCAPE,name:"Mirador del Río",lat:29.2179,lon:-13.4827},{id:"lanza-beach-papagayo",island:"lanza",type:ne.BEACH,name:"Playa Papagayo",lat:28.835,lon:-13.804},{id:"lanza-beach-famara",island:"lanza",type:ne.BEACH,name:"Playa de Famara",lat:29.13,lon:-13.5538},{id:"lanza-peak-montana-roja",island:"lanza",type:ne.PEAK,name:"Montaña Roja",lat:28.8567,lon:-13.8636,ele:194},{id:"lanza-city-teguise",island:"lanza",type:ne.CITY,name:"Teguise",lat:29.0589,lon:-13.5614},{id:"lanza-city-haria",island:"lanza",type:ne.CITY,name:"Haría",lat:29.1453,lon:-13.4972},{id:"lanza-city-yaiza",island:"lanza",type:ne.CITY,name:"Yaiza",lat:28.9528,lon:-13.7686},{id:"lanza-city-tinajo",island:"lanza",type:ne.CITY,name:"Tinajo",lat:29.0628,lon:-13.675},{id:"lanza-land-jameos",island:"lanza",type:ne.LANDSCAPE,name:"Jameos del Agua",lat:29.1583,lon:-13.4344},{id:"lanza-land-el-golfo",island:"lanza",type:ne.LANDSCAPE,name:"El Golfo",lat:28.9722,lon:-13.8261},{id:"lanza-beach-quemada",island:"lanza",type:ne.BEACH,name:"Playa Quemada",lat:28.9039,lon:-13.7572},{id:"graciosa-peak-agujas",island:"graciosa",type:ne.PEAK,name:"Las Agujas Grandes",lat:29.262,lon:-13.502,ele:266},{id:"graciosa-city-caleta",island:"graciosa",type:ne.CITY,name:"Caleta del Sebo",lat:29.2261,lon:-13.5021},{id:"graciosa-land-amarilla",island:"graciosa",type:ne.LANDSCAPE,name:"Montaña Amarilla",lat:29.2128,lon:-13.539},{id:"graciosa-beach-conchas",island:"graciosa",type:ne.BEACH,name:"Playa de las Conchas",lat:29.27,lon:-13.541},{id:"graciosa-beach-francesa",island:"graciosa",type:ne.BEACH,name:"Playa Francesa",lat:29.215,lon:-13.531},{id:"graciosa-city-pedro-barba",island:"graciosa",type:ne.CITY,name:"Pedro Barba",lat:29.2461,lon:-13.4778},{id:"graciosa-peak-bermeja",island:"graciosa",type:ne.PEAK,name:"Montaña Bermeja",lat:29.2603,lon:-13.5183,ele:157},{id:"graciosa-beach-lambra",island:"graciosa",type:ne.BEACH,name:"Playa Lambra",lat:29.2725,lon:-13.505}],zn=[...i_,...e_].map(n=>({...n,...tf(n.lat,n.lon)}));(function(){const e=2*ft.ring.majorRadius+1.2,t=e*e,i=30;for(let a=0;a<i;a++){let s=!1;for(let o=0;o<zn.length;o++)for(let r=o+1;r<zn.length;r++){const l=zn[o],c=zn[r],d=l.x-c.x,u=l.z-c.z,f=d*d+u*u;if(f>=t)continue;if(f<1e-4){l.x+=.13,l.z+=.07,c.x-=.13,c.z-=.07,s=!0;continue}const m=Math.sqrt(f),y=(e-m)*.5,v=d/m,p=u/m;l.x+=v*y,l.z+=p*y,c.x-=v*y,c.z-=p*y,s=!0}if(!s)break}})();const Fd=zn.reduce((n,e)=>((n[e.island]??=[]).push(e),n),{}),a_=zn.reduce((n,e)=>n+(ft.rewardsByType[e.type]?.gofios|0),0),cr=ft.tierFractions.map(n=>Math.round(n*a_));function s_(n){return n in Jh?It:n in Qh?Ha:null}const o_={greyBoost:yt.grey};function To(){const n=J.testMode;Object.assign(It,n?Zx:Jh),Object.assign(Ha,n?Jx:Qh);for(const[e,t]of Object.entries(oa)){const i=n?Number.POSITIVE_INFINITY:J.upgrades?.[e]|0;if(t.kind==="stat"){const a=Math.max(0,Math.min(t.levels.length-1,i)),s=s_(t.stat);s&&(s[t.stat]=t.levels[a])}else if(t.kind==="multiStat"){const a=o_[t.target];if(!a)continue;const s=Object.keys(t.stats),o=t.stats[s[0]].length-1,r=Math.max(0,Math.min(o,i));for(const l of s)a[l]=t.stats[l][r]}}}function is(){return J.testMode?I.boosterOverride!=null?I.boosterOverride:4:J.oneShotTier|0}function nf(){let n=0;for(const e of Object.values(J.gofiosByIsland))n+=e|0;return n}function H0(n){let e=0;for(let t=cr.length-1;t>=0;t--)if(n>=cr[t]){e=t;break}return e}function hd(){return J.testMode?!0:!!J.upgrades?.brake}function r_(){const n=H0(nf());n>(J.oneShotTier|0)&&(J.oneShotTier=n)}const af="teide-save",Jl=5,G0=["punkte","gofiosByIsland","obsidian","obsidianLifetimeGranted","landings","bestFlightPunkte","bestSessionLandings","upgrades","obsidianUpgradeCount","oneShotTier","exploredPOIs","discoveredRunways","landedRunways","ownedSkins","equippedSkin","visitedIslands","starterGranted","adsRemoveOwned","rewardedDay","rewardedToday","checkpointRunwayId","currentIsland","testMode"];function l_(){const n={version:Jl};for(const e of G0)n[e]=J[e];return n}function c_(n){for(const e of G0){const t=n[e];if(t===void 0)continue;const i=J[e];i&&typeof i=="object"&&!Array.isArray(i)&&t&&typeof t=="object"&&!Array.isArray(t)?Object.assign(i,t):J[e]=t}}function d_(n){if(n.version===1){const e={};if(n.exploredPOIs)for(const t of zn){if(!n.exploredPOIs[t.id])continue;const i=ft.rewardsByType[t.type];i&&(e[t.island]=(e[t.island]|0)+i.gofios)}n.gofiosByIsland=e,n.version=2}if(n.version===2&&(n.discoveredRunways={},n.landedRunways={},n.checkpointRunwayId&&(n.discoveredRunways[n.checkpointRunwayId]=!0,n.landedRunways[n.checkpointRunwayId]=!0),n.version=3),n.version===3){const e=n.oneShotTierByIsland||{};let t=0;for(const i of Object.values(e))t=Math.max(t,i|0);n.oneShotTier=t,delete n.oneShotTierByIsland,n.version=4}if(n.version===4){const e=n.upgrades;if(e)for(const t of["drag","maxSpeed","speedFromPitch","stallSpeed","takeoffSpeed","greyBoost"])typeof e[t]=="number"&&(e[t]=Math.round((e[t]|0)/4*9));n.version=5}return n}function u_(){try{const n=localStorage.getItem(af);if(!n)return!1;let e=JSON.parse(n);return!e||typeof e!="object"?!1:typeof e.version!="number"?(console.warn("[save] discarding save: missing version"),!1):e.version>Jl?(console.warn(`[save] discarding save: future version ${e.version} > ${Jl}`),!1):(e=d_(e),e.version!==Jl?(console.warn(`[save] discarding save: migration left version at ${e.version}`),!1):(c_(e),!0))}catch(n){return console.warn("[save] load failed:",n),!1}}function h_(){try{localStorage.setItem(af,JSON.stringify(l_()))}catch(n){console.warn("[save] write failed:",n)}}let zd=!1;function Ht(){zd||(zd=!0,queueMicrotask(()=>{zd=!1,h_()}))}function f_(){try{localStorage.removeItem(af)}catch{}}const jn={pitch:0,roll:0,brake:!1,boost:!1,isInputActive:!1,activeInputType:"none"};let gc=!1;function V0(){gc=!0}function p_(){return gc?(gc=!1,!0):!1}function sf(){gc=!1}let yc=!1;function W0(){yc=!0}function m_(){return yc?(yc=!1,!0):!1}function fd(){yc=!1}const St={up:!1,down:!1,left:!1,right:!1,brake:!1,boost:!1,oneShot:!1};let Li=!1;function g_(){Li=!1}function y_(){return Li}function v_(){const n=(St.down?1:0)-(St.up?1:0),e=(St.right?1:0)-(St.left?1:0),t=St.up||St.down||St.left||St.right,i=St.brake||St.boost||St.oneShot;return{pitch:n,roll:e,brake:St.brake,boost:St.boost,isActive:t||i}}function q0(n,e){switch(n.key){case"ArrowUp":case"w":case"W":St.up=e,Li=!0;break;case"ArrowDown":case"s":case"S":St.down=e,Li=!0;break;case"ArrowLeft":case"a":case"A":St.left=e,Li=!0;break;case"ArrowRight":case"d":case"D":St.right=e,Li=!0;break;case" ":case"Spacebar":St.brake=e&&hd(),Li=!0,n.preventDefault();break;case"Shift":e&&!St.boost&&W0(),St.boost=e,Li=!0;break;case"f":case"F":e&&!St.oneShot&&V0(),St.oneShot=e,Li=!0;break;case"t":case"T":e&&(J.testMode=!J.testMode,To(),Ht());break;case"b":case"B":if(e&&J.testMode){const t=yt.oneShot.tiers.length-1,i=I.boosterOverride!=null?I.boosterOverride:4;I.boosterOverride=(i+1)%(t+1)}break}}window.addEventListener("keydown",n=>q0(n,!0));window.addEventListener("keyup",n=>q0(n,!1));function ds(){return typeof window>"u"?!1:"ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}ds()&&document.body.classList.add("touch-mode");const Na=document.getElementById("touch-joystick-zone"),Ii=document.getElementById("touch-joystick"),fo=Ii?.querySelector(".touch-joystick-thumb"),ra=document.getElementById("touch-brake"),po=document.getElementById("touch-boost"),ii=document.getElementById("touch-oneshot"),x_=document.getElementById("touch-boost-corner"),sp=document.getElementById("touch-actions"),op=document.getElementById("map-btn"),gi=document.getElementById("map-card"),la=document.getElementById("map-card-backdrop"),Qr=60,Bd=8;let Tr=null,Zu=0,Ju=0,Qu=!0;function vc(n){Qu=!!n,Qu||of()}const en={pitch:0,roll:0,brake:!1,boost:!1,isActive:!1};let us=!1;function __(){return us}function b_(){us=!1}function S_(){return en}const M_=["welcome-overlay","pause-overlay","levels-overlay","crash","hangar-overlay","shop-overlay","settings-overlay","obsidian-confirm","reset-confirm","imprint-overlay","licenses-overlay"];function w_(){for(const n of M_){const e=document.getElementById(n);if(e&&e.classList.contains("visible"))return!0}return!1}function of(){Tr=null,en.pitch=0,en.roll=0,en.isActive=!1,Ii&&(Ii.hidden=!0,Ii.setAttribute("aria-hidden","true")),fo&&(fo.style.transform="translate(0px, 0px)")}function E_(n){if(Qu&&n.pointerType==="touch"&&Tr===null&&!w_()){Tr=n.pointerId,Zu=n.clientX,Ju=n.clientY,Ii&&(Ii.style.left=Zu+"px",Ii.style.top=Ju+"px",Ii.hidden=!1,Ii.setAttribute("aria-hidden","false")),fo&&(fo.style.transform="translate(0px, 0px)"),en.isActive=!0,us=!0;try{Na.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}}function A_(n){if(n.pointerId!==Tr)return;let e=n.clientX-Zu,t=n.clientY-Ju;const i=Math.hypot(e,t);let a=e,s=t;if(i>Qr&&(a=e*Qr/i,s=t*Qr/i),fo&&(fo.style.transform=`translate(${a.toFixed(1)}px, ${s.toFixed(1)}px)`),i<=Bd)en.pitch=0,en.roll=0;else{const o=Math.min(1,(i-Bd)/(Qr-Bd));en.roll=e/i*o,en.pitch=t/i*o}us=!0}function rp(n){if(n.pointerId===Tr){try{Na.releasePointerCapture?.(n.pointerId)}catch{}of()}}Na&&(Na.addEventListener("pointerdown",E_),Na.addEventListener("pointermove",A_),Na.addEventListener("pointerup",rp),Na.addEventListener("pointercancel",rp));let Rr=null;const Cr=new Set;function zi(n,e){n&&n.classList.toggle("is-pressed",!!e)}function T_(n){if(!hd()){n.preventDefault();return}Rr=n.pointerId,en.brake=!0,us=!0,zi(ra,!0);try{ra.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}function R_(n){n.pointerId===Rr&&(Rr=null,en.brake=!1,zi(ra,!1))}function X0(n){const e=Cr.size===0;Cr.add(n.pointerId),en.boost=!0,us=!0,e&&W0(),zi(po,!0);try{n.currentTarget.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}function j0(n){Cr.delete(n.pointerId)&&Cr.size===0&&(en.boost=!1,zi(po,!1))}const C_=140;let el=null;function L_(n){V0(),us=!0,zi(ii,!0),el&&clearTimeout(el),el=setTimeout(()=>{zi(ii,!1),el=null},C_),n.preventDefault()}function rf(n,e,t){n&&(n.addEventListener("pointerdown",e),n.addEventListener("pointerup",t),n.addEventListener("pointercancel",t),n.addEventListener("pointerleave",t),n.addEventListener("contextmenu",i=>i.preventDefault()))}rf(ra,T_,R_);rf(po,X0,j0);rf(x_,X0,j0);ii&&(ii.addEventListener("pointerdown",L_),ii.addEventListener("contextmenu",n=>n.preventDefault()));const P_=1e3;let lp=null,cp=-1,dp=-1,up=-1,ko=0,xc=!0,tl=!1;function Hd(n){n!==!xc&&(xc=!n,ii&&(ii.hidden=!n),n&&!tl?(sp?.classList.add("has-oneshot"),tl=!0):!n&&tl&&(sp?.classList.remove("has-oneshot"),tl=!1))}function I_(){const n=!hd();n!==lp&&(ra&&ra.classList.toggle("is-locked",n),n&&en.brake&&(en.brake=!1,Rr=null,zi(ra,!1)),lp=n);const e=is();if(e!==cp){if(ii&&e>0){const i=yt.oneShot.tiers[e]?.color??yt.oneShot.tiers[0].color,a=i>>16&255,s=i>>8&255,o=i&255;ii.style.setProperty("--tier-color",`rgba(${a}, ${s}, ${o}, 0.5)`)}cp=e}if(e===0)Hd(!1),ko=0;else{const i=I.boostFuelOneshot;Math.abs(i-dp)>.005&&(ii&&ii.style.setProperty("--fuel",i.toFixed(3)),dp=i),i<=.001?(ko===0&&(ko=performance.now()),!xc&&performance.now()-ko>=P_&&Hd(!1)):(ko=0,xc&&Hd(!0))}const t=I.boostFuelGrey;Math.abs(t-up)>.005&&(po&&po.style.setProperty("--fuel",t.toFixed(3)),up=t)}function $0(){of(),Rr=null,Cr.clear(),en.brake=!1,en.boost=!1,zi(ra,!1),zi(po,!1)}document.addEventListener("visibilitychange",()=>{document.hidden&&$0()});window.addEventListener("blur",$0);let Y0=!1;function N_(){!gi||gi.classList.contains("is-open")||(Y0=I.paused,I.paused=!0,gi.classList.add("is-open"),gi.setAttribute("aria-modal","true"),la&&(la.classList.add("is-open"),la.setAttribute("aria-hidden","false")))}function lf(){!gi||!gi.classList.contains("is-open")||(gi.classList.remove("is-open"),gi.removeAttribute("aria-modal"),la&&(la.classList.remove("is-open"),la.setAttribute("aria-hidden","true")),Y0||(I.paused=!1))}op&&op.addEventListener("click",()=>{gi?.classList.contains("is-open")?lf():N_()});la&&la.addEventListener("click",lf);document.addEventListener("keydown",n=>{n.key==="Escape"&&gi?.classList.contains("is-open")&&(lf(),n.stopImmediatePropagation())});const D_=5,k_=3e3,O_="1505",hp=document.getElementById("imprint-easter-target"),si=document.getElementById("testpin-overlay"),Gn=document.getElementById("testpin-input"),mo=document.getElementById("testpin-error"),fp=document.getElementById("testpin-ok"),pp=document.getElementById("testpin-cancel");function cf(n){J.testMode=n,To(),Ht()}function U_(){if(!si){cf(!0);return}mo&&mo.classList.remove("show"),Gn&&(Gn.value=""),si.classList.add("visible"),si.setAttribute("aria-hidden","false"),Gn&&setTimeout(()=>Gn.focus(),30)}function pd(){si&&(si.classList.remove("visible"),si.setAttribute("aria-hidden","true"),Gn&&(Gn.value=""),mo&&mo.classList.remove("show"))}function K0(){Gn&&(Gn.value.trim()===O_?(pd(),cf(!0)):(mo&&mo.classList.add("show"),Gn.value="",Gn.focus()))}if(hp){let n=0,e=null;hp.addEventListener("click",()=>{n+=1,clearTimeout(e),e=setTimeout(()=>{n=0},k_),n>=D_&&(n=0,clearTimeout(e),J.testMode?cf(!1):U_())})}fp&&fp.addEventListener("click",K0);pp&&pp.addEventListener("click",pd);si&&si.addEventListener("click",n=>{n.target===si&&pd()});Gn&&Gn.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),K0())});document.addEventListener("keydown",n=>{n.key==="Escape"&&(!si||!si.classList.contains("visible")||(n.stopImmediatePropagation(),pd()))},!0);const F_=`The MIT License

Copyright © 2010-2023 three.js authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
`,z_=`MIT License

Copyright (c) 2017-present Drifty Co.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`,B_=`Copyright 2006 The Inconsolata Project Authors (https://github.com/cyrealtype/Inconsolata)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.
`,H_=`Material Symbols
Copyright Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
The full license text follows.

-----------------------------------------------------------


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.`,G_=[{name:"three.js",license:"MIT License",text:F_},{name:"Capacitor",license:"MIT License",text:z_},{name:"Inconsolata",license:"SIL Open Font License 1.1",text:B_},{name:"Material Symbols",license:"Apache License 2.0",text:H_}],mp=document.getElementById("licenses-list");if(mp)for(const n of G_){const e=document.createElement("section");e.className="license-item";const t=document.createElement("div");t.className="license-head";const i=document.createElement("span");i.className="license-name",i.textContent=n.name;const a=document.createElement("span");a.className="license-tag",a.textContent=n.license,t.append(i,a);const s=document.createElement("details");s.className="license-details";const o=document.createElement("summary");o.textContent="Lizenztext anzeigen";const r=document.createElement("pre");r.className="license-text",r.textContent=n.text.trim(),s.append(o,r),e.append(t,s),mp.append(e)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const df="160",V_=0,gp=1,W_=2,Z0=1,q_=2,Ci=3,ma=0,Sn=1,Jt=2,ca=0,Qs=1,_c=2,yp=3,vp=4,X_=5,Da=100,j_=101,$_=102,xp=103,_p=104,Y_=200,K_=201,Z_=202,J_=203,eh=204,th=205,Q_=206,eb=207,tb=208,nb=209,ib=210,ab=211,sb=212,ob=213,rb=214,lb=0,cb=1,db=2,bc=3,ub=4,hb=5,fb=6,pb=7,uf=0,mb=1,gb=2,da=0,yb=1,vb=2,xb=3,_b=4,bb=5,Sb=6,J0=300,go=301,yo=302,nh=303,ih=304,md=306,ah=1e3,Qn=1001,sh=1002,mn=1003,bp=1004,Gd=1005,Un=1006,Mb=1007,Lr=1008,ua=1009,wb=1010,Eb=1011,hf=1012,Q0=1013,ea=1014,ta=1015,Pr=1016,ey=1017,ty=1018,$a=1020,Ab=1021,ei=1023,Tb=1024,Rb=1025,Ya=1026,vo=1027,Cb=1028,ny=1029,Lb=1030,iy=1031,ay=1033,Vd=33776,Wd=33777,qd=33778,Xd=33779,Sp=35840,Mp=35841,wp=35842,Ep=35843,sy=36196,Ap=37492,Tp=37496,Rp=37808,Cp=37809,Lp=37810,Pp=37811,Ip=37812,Np=37813,Dp=37814,kp=37815,Op=37816,Up=37817,Fp=37818,zp=37819,Bp=37820,Hp=37821,jd=36492,Gp=36494,Vp=36495,Pb=36283,Wp=36284,qp=36285,Xp=36286,oy=3e3,Ka=3001,Ib=3200,Nb=3201,ry=0,Db=1,Bn="",Ot="srgb",Bi="srgb-linear",ff="display-p3",gd="display-p3-linear",Sc="linear",ht="srgb",Mc="rec709",wc="p3",xs=7680,jp=519,kb=512,Ob=513,Ub=514,ly=515,Fb=516,zb=517,Bb=518,Hb=519,$p=35044,Yp="300 es",oh=1035,Ni=2e3,Ec=2001;class Ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let s=0,o=a.length;s<o;s++)a[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kp=1234567;const eo=Math.PI/180,Ir=180/Math.PI;function hs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Zt(n,e,t){return Math.max(e,Math.min(t,n))}function pf(n,e){return(n%e+e)%e}function Gb(n,e,t,i,a){return i+(n-e)*(a-i)/(t-e)}function Vb(n,e,t){return n!==e?(t-n)/(e-n):0}function dr(n,e,t){return(1-t)*n+t*e}function Wb(n,e,t,i){return dr(n,e,1-Math.exp(-t*i))}function qb(n,e=1){return e-Math.abs(pf(n,e*2)-e)}function Xb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function jb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $b(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Yb(n,e){return n+Math.random()*(e-n)}function Kb(n){return n*(.5-Math.random())}function Zb(n){n!==void 0&&(Kp=n);let e=Kp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jb(n){return n*eo}function Qb(n){return n*Ir}function rh(n){return(n&n-1)===0&&n!==0}function eS(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ac(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function tS(n,e,t,i,a){const s=Math.cos,o=Math.sin,r=s(t/2),l=o(t/2),c=s((e+i)/2),d=o((e+i)/2),u=s((e-i)/2),f=o((e-i)/2),m=s((i-e)/2),y=o((i-e)/2);switch(a){case"XYX":n.set(r*d,l*u,l*f,r*c);break;case"YZY":n.set(l*f,r*d,l*u,r*c);break;case"ZXZ":n.set(l*u,l*f,r*d,r*c);break;case"XZX":n.set(r*d,l*y,l*m,r*c);break;case"YXY":n.set(l*m,r*d,l*y,r*c);break;case"ZYZ":n.set(l*y,l*m,r*d,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Bs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function un(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Hi={DEG2RAD:eo,RAD2DEG:Ir,generateUUID:hs,clamp:Zt,euclideanModulo:pf,mapLinear:Gb,inverseLerp:Vb,lerp:dr,damp:Wb,pingpong:qb,smoothstep:Xb,smootherstep:jb,randInt:$b,randFloat:Yb,randFloatSpread:Kb,seededRandom:Zb,degToRad:Jb,radToDeg:Qb,isPowerOfTwo:rh,ceilPowerOfTwo:eS,floorPowerOfTwo:Ac,setQuaternionFromProperEuler:tS,normalize:un,denormalize:Bs};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*a+e.x,this.y=s*a+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,a,s,o,r,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,o,r,l,c)}set(e,t,i,a,s,o,r,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=r,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,o=i[0],r=i[3],l=i[6],c=i[1],d=i[4],u=i[7],f=i[2],m=i[5],y=i[8],v=a[0],p=a[3],h=a[6],_=a[1],g=a[4],b=a[7],R=a[2],E=a[5],A=a[8];return s[0]=o*v+r*_+l*R,s[3]=o*p+r*g+l*E,s[6]=o*h+r*b+l*A,s[1]=c*v+d*_+u*R,s[4]=c*p+d*g+u*E,s[7]=c*h+d*b+u*A,s[2]=f*v+m*_+y*R,s[5]=f*p+m*g+y*E,s[8]=f*h+m*b+y*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*r*c-i*s*d+i*r*l+a*s*c-a*o*l}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],d=e[8],u=d*o-r*c,f=r*l-d*s,m=c*s-o*l,y=t*u+i*f+a*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=u*v,e[1]=(a*c-d*i)*v,e[2]=(r*i-a*o)*v,e[3]=f*v,e[4]=(d*t-a*l)*v,e[5]=(a*s-r*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,s,o,r){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*r)+o+e,-a*c,a*l,-a*(-c*o+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply($d.makeScale(e,t)),this}rotate(e){return this.premultiply($d.makeRotation(-e)),this}translate(e,t){return this.premultiply($d.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $d=new Ge;function cy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Tc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nS(){const n=Tc("canvas");return n.style.display="block",n}const Zp={};function ur(n){n in Zp||(Zp[n]=!0,console.warn(n))}const Jp=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qp=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),nl={[Bi]:{transfer:Sc,primaries:Mc,toReference:n=>n,fromReference:n=>n},[Ot]:{transfer:ht,primaries:Mc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[gd]:{transfer:Sc,primaries:wc,toReference:n=>n.applyMatrix3(Qp),fromReference:n=>n.applyMatrix3(Jp)},[ff]:{transfer:ht,primaries:wc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Qp),fromReference:n=>n.applyMatrix3(Jp).convertLinearToSRGB()}},iS=new Set([Bi,gd]),st={enabled:!0,_workingColorSpace:Bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!iS.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=nl[e].toReference,a=nl[t].fromReference;return a(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return nl[n].primaries},getTransfer:function(n){return n===Bn?Sc:nl[n].transfer}};function to(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _s;class dy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=Tc("canvas")),_s.width=e.width,_s.height=e.height;const i=_s.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),s=a.data;for(let o=0;o<s.length;o++)s[o]=to(s[o]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(to(t[i]/255)*255):t[i]=to(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aS=0;class uy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=hs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let o=0,r=a.length;o<r;o++)a[o].isDataTexture?s.push(Kd(a[o].image)):s.push(Kd(a[o]))}else s=Kd(a);i.url=s}return t||(e.images[this.uuid]=i),i}}function Kd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?dy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sS=0;class Pn extends Ro{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,i=Qn,a=Qn,s=Un,o=Lr,r=ei,l=ua,c=Pn.DEFAULT_ANISOTROPY,d=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=hs(),this.name="",this.source=new uy(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ka?Ot:Bn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==J0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ah:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ah:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?Ka:oy}set encoding(e){ur("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ka?Ot:Bn}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=J0;Pn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,i=0,a=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*a+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*a+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*a+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,s;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],m=l[5],y=l[9],v=l[2],p=l[6],h=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-v)<.01&&Math.abs(y-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+v)<.1&&Math.abs(y+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,b=(m+1)/2,R=(h+1)/2,E=(d+f)/4,A=(u+v)/4,U=(y+p)/4;return g>b&&g>R?g<.01?(i=0,a=.707106781,s=.707106781):(i=Math.sqrt(g),a=E/i,s=A/i):b>R?b<.01?(i=.707106781,a=0,s=.707106781):(a=Math.sqrt(b),i=E/a,s=U/a):R<.01?(i=.707106781,a=.707106781,s=0):(s=Math.sqrt(R),i=A/s,a=U/s),this.set(i,a,s,t),this}let _=Math.sqrt((p-y)*(p-y)+(u-v)*(u-v)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(p-y)/_,this.y=(u-v)/_,this.z=(f-d)/_,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oS extends Ro{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const a={width:e,height:t,depth:1};i.encoding!==void 0&&(ur("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ka?Ot:Bn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Pn(a,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new uy(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class as extends oS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hy extends Pn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=mn,this.minFilter=mn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rS extends Pn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=mn,this.minFilter=mn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lt{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,s,o,r){let l=i[a+0],c=i[a+1],d=i[a+2],u=i[a+3];const f=s[o+0],m=s[o+1],y=s[o+2],v=s[o+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(r===1){e[t+0]=f,e[t+1]=m,e[t+2]=y,e[t+3]=v;return}if(u!==v||l!==f||c!==m||d!==y){let p=1-r;const h=l*f+c*m+d*y+u*v,_=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const R=Math.sqrt(g),E=Math.atan2(R,h*_);p=Math.sin(p*E)/R,r=Math.sin(r*E)/R}const b=r*_;if(l=l*p+f*b,c=c*p+m*b,d=d*p+y*b,u=u*p+v*b,p===1-r){const R=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=R,c*=R,d*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,a,s,o){const r=i[a],l=i[a+1],c=i[a+2],d=i[a+3],u=s[o],f=s[o+1],m=s[o+2],y=s[o+3];return e[t]=r*y+d*u+l*m-c*f,e[t+1]=l*y+d*f+c*u-r*m,e[t+2]=c*y+d*m+r*f-l*u,e[t+3]=d*y-r*u-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,s=e._z,o=e._order,r=Math.cos,l=Math.sin,c=r(i/2),d=r(a/2),u=r(s/2),f=l(i/2),m=l(a/2),y=l(s/2);switch(o){case"XYZ":this._x=f*d*u+c*m*y,this._y=c*m*u-f*d*y,this._z=c*d*y+f*m*u,this._w=c*d*u-f*m*y;break;case"YXZ":this._x=f*d*u+c*m*y,this._y=c*m*u-f*d*y,this._z=c*d*y-f*m*u,this._w=c*d*u+f*m*y;break;case"ZXY":this._x=f*d*u-c*m*y,this._y=c*m*u+f*d*y,this._z=c*d*y+f*m*u,this._w=c*d*u-f*m*y;break;case"ZYX":this._x=f*d*u-c*m*y,this._y=c*m*u+f*d*y,this._z=c*d*y-f*m*u,this._w=c*d*u+f*m*y;break;case"YZX":this._x=f*d*u+c*m*y,this._y=c*m*u+f*d*y,this._z=c*d*y-f*m*u,this._w=c*d*u-f*m*y;break;case"XZY":this._x=f*d*u-c*m*y,this._y=c*m*u-f*d*y,this._z=c*d*y+f*m*u,this._w=c*d*u+f*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],s=t[8],o=t[1],r=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=i+r+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(o-a)*m}else if(i>r&&i>u){const m=2*Math.sqrt(1+i-r-u);this._w=(d-l)/m,this._x=.25*m,this._y=(a+o)/m,this._z=(s+c)/m}else if(r>u){const m=2*Math.sqrt(1+r-i-u);this._w=(s-c)/m,this._x=(a+o)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+u-i-r);this._w=(o-a)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,s=e._z,o=e._w,r=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*r+a*c-s*l,this._y=a*d+o*l+s*r-i*c,this._z=s*d+o*c+i*l-a*r,this._w=o*d-i*r-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,a=this._y,s=this._z,o=this._w;let r=o*e._w+i*e._x+a*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=i,this._y=a,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*a+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,r),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=a*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),a=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(a),i*Math.sin(s),i*Math.cos(s),t*Math.sin(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(em.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(em.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*a,this.y=s[1]*t+s[4]*i+s[7]*a,this.z=s[2]*t+s[5]*i+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*a+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*a+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*a+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,s=e.x,o=e.y,r=e.z,l=e.w,c=2*(o*a-r*i),d=2*(r*t-s*a),u=2*(s*i-o*t);return this.x=t+l*c+o*u-r*d,this.y=i+l*d+r*c-s*u,this.z=a+l*u+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*a,this.y=s[1]*t+s[5]*i+s[9]*a,this.z=s[2]*t+s[6]*i+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,s=e.z,o=t.x,r=t.y,l=t.z;return this.x=a*l-s*r,this.y=s*o-i*l,this.z=i*r-a*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zd.copy(this).projectOnVector(e),this.sub(Zd)}reflect(e){return this.sub(Zd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zd=new N,em=new Lt;class fs{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,r=s.count;o<r;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),il.copy(i.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}const a=e.children;for(let s=0,o=a.length;s<o;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),al.subVectors(this.max,Oo),bs.subVectors(e.a,Oo),Ss.subVectors(e.b,Oo),Ms.subVectors(e.c,Oo),Vi.subVectors(Ss,bs),Wi.subVectors(Ms,Ss),wa.subVectors(bs,Ms);let t=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-wa.z,wa.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,wa.z,0,-wa.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-wa.y,wa.x,0];return!Jd(t,bs,Ss,Ms,al)||(t=[1,0,0,0,1,0,0,0,1],!Jd(t,bs,Ss,Ms,al))?!1:(sl.crossVectors(Vi,Wi),t=[sl.x,sl.y,sl.z],Jd(t,bs,Ss,Ms,al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new N,new N,new N,new N,new N,new N,new N,new N],$n=new N,il=new fs,bs=new N,Ss=new N,Ms=new N,Vi=new N,Wi=new N,wa=new N,Oo=new N,al=new N,sl=new N,Ea=new N;function Jd(n,e,t,i,a){for(let s=0,o=n.length-3;s<=o;s+=3){Ea.fromArray(n,s);const r=a.x*Math.abs(Ea.x)+a.y*Math.abs(Ea.y)+a.z*Math.abs(Ea.z),l=e.dot(Ea),c=t.dot(Ea),d=i.dot(Ea);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>r)return!1}return!0}const lS=new fs,Uo=new N,Qd=new N;class _a{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lS.setFromPoints(e).getCenter(i);let a=0;for(let s=0,o=e.length;s<o;s++)a=Math.max(a,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const t=Uo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(Uo,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Qd)),this.expandByPoint(Uo.copy(e.center).sub(Qd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new N,eu=new N,ol=new N,qi=new N,tu=new N,rl=new N,nu=new N;class mf{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){eu.copy(e).add(t).multiplyScalar(.5),ol.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(eu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ol),r=qi.dot(this.direction),l=-qi.dot(ol),c=qi.lengthSq(),d=Math.abs(1-o*o);let u,f,m,y;if(d>0)if(u=o*l-r,f=o*r-l,y=s*d,u>=0)if(f>=-y)if(f<=y){const v=1/d;u*=v,f*=v,m=u*(u+o*f+2*r)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+r)),m=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+r)),m=-u*u+f*(f+2*l)+c;else f<=-y?(u=Math.max(0,-(-o*s+r)),f=u>0?-s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c):f<=y?(u=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(u=Math.max(0,-(o*s+r)),f=u>0?s:Math.min(Math.max(-s,-l),s),m=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+r)),m=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(eu).addScaledVector(ol,f),m}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),a=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(a>s)return null;const o=Math.sqrt(s-a),r=i-o,l=i+o;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,s,o,r,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,a=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,a=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>a||((s>i||isNaN(i))&&(i=s),(o<a||isNaN(a))&&(a=o),u>=0?(r=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(r=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||r>a)||((r>i||i!==i)&&(i=r),(l<a||a!==a)&&(a=l),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,i,a,s){tu.subVectors(t,e),rl.subVectors(i,e),nu.crossVectors(tu,rl);let o=this.direction.dot(nu),r;if(o>0){if(a)return null;r=1}else if(o<0)r=-1,o=-o;else return null;qi.subVectors(this.origin,e);const l=r*this.direction.dot(rl.crossVectors(qi,rl));if(l<0)return null;const c=r*this.direction.dot(tu.cross(qi));if(c<0||l+c>o)return null;const d=-r*qi.dot(nu);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,i,a,s,o,r,l,c,d,u,f,m,y,v,p){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,s,o,r,l,c,d,u,f,m,y,v,p)}set(e,t,i,a,s,o,r,l,c,d,u,f,m,y,v,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=a,h[1]=s,h[5]=o,h[9]=r,h[13]=l,h[2]=c,h[6]=d,h[10]=u,h[14]=f,h[3]=m,h[7]=y,h[11]=v,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,a=1/ws.setFromMatrixColumn(e,0).length(),s=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,s=e.z,o=Math.cos(i),r=Math.sin(i),l=Math.cos(a),c=Math.sin(a),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=o*d,m=o*u,y=r*d,v=r*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=m+y*c,t[5]=f-v*c,t[9]=-r*l,t[2]=v-f*c,t[6]=y+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*d,m=l*u,y=c*d,v=c*u;t[0]=f+v*r,t[4]=y*r-m,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-r,t[2]=m*r-y,t[6]=v+f*r,t[10]=o*l}else if(e.order==="ZXY"){const f=l*d,m=l*u,y=c*d,v=c*u;t[0]=f-v*r,t[4]=-o*u,t[8]=y+m*r,t[1]=m+y*r,t[5]=o*d,t[9]=v-f*r,t[2]=-o*c,t[6]=r,t[10]=o*l}else if(e.order==="ZYX"){const f=o*d,m=o*u,y=r*d,v=r*u;t[0]=l*d,t[4]=y*c-m,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=m*c-y,t[2]=-c,t[6]=r*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,y=r*l,v=r*c;t[0]=l*d,t[4]=v-f*u,t[8]=y*u+m,t[1]=u,t[5]=o*d,t[9]=-r*d,t[2]=-c*d,t[6]=m*u+y,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*l,m=o*c,y=r*l,v=r*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+v,t[5]=o*d,t[9]=m*u-y,t[2]=y*u-m,t[6]=r*d,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cS,e,dS)}lookAt(e,t,i){const a=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Xi.crossVectors(i,En),Xi.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Xi.crossVectors(i,En)),Xi.normalize(),ll.crossVectors(En,Xi),a[0]=Xi.x,a[4]=ll.x,a[8]=En.x,a[1]=Xi.y,a[5]=ll.y,a[9]=En.y,a[2]=Xi.z,a[6]=ll.z,a[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,s=this.elements,o=i[0],r=i[4],l=i[8],c=i[12],d=i[1],u=i[5],f=i[9],m=i[13],y=i[2],v=i[6],p=i[10],h=i[14],_=i[3],g=i[7],b=i[11],R=i[15],E=a[0],A=a[4],U=a[8],M=a[12],w=a[1],V=a[5],W=a[9],oe=a[13],O=a[2],q=a[6],$=a[10],K=a[14],B=a[3],Q=a[7],le=a[11],ue=a[15];return s[0]=o*E+r*w+l*O+c*B,s[4]=o*A+r*V+l*q+c*Q,s[8]=o*U+r*W+l*$+c*le,s[12]=o*M+r*oe+l*K+c*ue,s[1]=d*E+u*w+f*O+m*B,s[5]=d*A+u*V+f*q+m*Q,s[9]=d*U+u*W+f*$+m*le,s[13]=d*M+u*oe+f*K+m*ue,s[2]=y*E+v*w+p*O+h*B,s[6]=y*A+v*V+p*q+h*Q,s[10]=y*U+v*W+p*$+h*le,s[14]=y*M+v*oe+p*K+h*ue,s[3]=_*E+g*w+b*O+R*B,s[7]=_*A+g*V+b*q+R*Q,s[11]=_*U+g*W+b*$+R*le,s[15]=_*M+g*oe+b*K+R*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],s=e[12],o=e[1],r=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],m=e[14],y=e[3],v=e[7],p=e[11],h=e[15];return y*(+s*l*u-a*c*u-s*r*f+i*c*f+a*r*m-i*l*m)+v*(+t*l*m-t*c*f+s*o*f-a*o*m+a*c*d-s*l*d)+p*(+t*c*u-t*r*m-s*o*u+i*o*m+s*r*d-i*c*d)+h*(-a*r*d-t*l*u+t*r*f+a*o*u-i*o*f+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],s=e[3],o=e[4],r=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],m=e[11],y=e[12],v=e[13],p=e[14],h=e[15],_=u*p*c-v*f*c+v*l*m-r*p*m-u*l*h+r*f*h,g=y*f*c-d*p*c-y*l*m+o*p*m+d*l*h-o*f*h,b=d*v*c-y*u*c+y*r*m-o*v*m-d*r*h+o*u*h,R=y*u*l-d*v*l-y*r*f+o*v*f+d*r*p-o*u*p,E=t*_+i*g+a*b+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(v*f*s-u*p*s-v*a*m+i*p*m+u*a*h-i*f*h)*A,e[2]=(r*p*s-v*l*s+v*a*c-i*p*c-r*a*h+i*l*h)*A,e[3]=(u*l*s-r*f*s-u*a*c+i*f*c+r*a*m-i*l*m)*A,e[4]=g*A,e[5]=(d*p*s-y*f*s+y*a*m-t*p*m-d*a*h+t*f*h)*A,e[6]=(y*l*s-o*p*s-y*a*c+t*p*c+o*a*h-t*l*h)*A,e[7]=(o*f*s-d*l*s+d*a*c-t*f*c-o*a*m+t*l*m)*A,e[8]=b*A,e[9]=(y*u*s-d*v*s-y*i*m+t*v*m+d*i*h-t*u*h)*A,e[10]=(o*v*s-y*r*s+y*i*c-t*v*c-o*i*h+t*r*h)*A,e[11]=(d*r*s-o*u*s-d*i*c+t*u*c+o*i*m-t*r*m)*A,e[12]=R*A,e[13]=(d*v*a-y*u*a+y*i*f-t*v*f-d*i*p+t*u*p)*A,e[14]=(y*r*a-o*v*a-y*i*l+t*v*l+o*i*p-t*r*p)*A,e[15]=(o*u*a-d*r*a+d*i*l-t*u*l-o*i*f+t*r*f)*A,this}scale(e){const t=this.elements,i=e.x,a=e.y,s=e.z;return t[0]*=i,t[4]*=a,t[8]*=s,t[1]*=i,t[5]*=a,t[9]*=s,t[2]*=i,t[6]*=a,t[10]*=s,t[3]*=i,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),s=1-i,o=e.x,r=e.y,l=e.z,c=s*o,d=s*r;return this.set(c*o+i,c*r-a*l,c*l+a*r,0,c*r+a*l,d*r+i,d*l-a*o,0,c*l-a*r,d*l+a*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,s,o){return this.set(1,i,s,0,e,1,o,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,s=t._x,o=t._y,r=t._z,l=t._w,c=s+s,d=o+o,u=r+r,f=s*c,m=s*d,y=s*u,v=o*d,p=o*u,h=r*u,_=l*c,g=l*d,b=l*u,R=i.x,E=i.y,A=i.z;return a[0]=(1-(v+h))*R,a[1]=(m+b)*R,a[2]=(y-g)*R,a[3]=0,a[4]=(m-b)*E,a[5]=(1-(f+h))*E,a[6]=(p+_)*E,a[7]=0,a[8]=(y+g)*A,a[9]=(p-_)*A,a[10]=(1-(f+v))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;let s=ws.set(a[0],a[1],a[2]).length();const o=ws.set(a[4],a[5],a[6]).length(),r=ws.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],Yn.copy(this);const c=1/s,d=1/o,u=1/r;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=d,Yn.elements[5]*=d,Yn.elements[6]*=d,Yn.elements[8]*=u,Yn.elements[9]*=u,Yn.elements[10]*=u,t.setFromRotationMatrix(Yn),i.x=s,i.y=o,i.z=r,this}makePerspective(e,t,i,a,s,o,r=Ni){const l=this.elements,c=2*s/(t-e),d=2*s/(i-a),u=(t+e)/(t-e),f=(i+a)/(i-a);let m,y;if(r===Ni)m=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(r===Ec)m=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,a,s,o,r=Ni){const l=this.elements,c=1/(t-e),d=1/(i-a),u=1/(o-s),f=(t+e)*c,m=(i+a)*d;let y,v;if(r===Ni)y=(o+s)*u,v=-2*u;else if(r===Ec)y=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ws=new N,Yn=new Je,cS=new N(0,0,0),dS=new N(1,1,1),Xi=new N,ll=new N,En=new N,tm=new Je,nm=new Lt;class qn{constructor(e=0,t=0,i=0,a=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,s=a[0],o=a[4],r=a[8],l=a[1],c=a[5],d=a[9],u=a[2],f=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(Zt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nm.setFromEuler(this),this.setFromQuaternion(nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class fy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uS=0;const im=new N,Es=new Lt,wi=new Je,cl=new N,Fo=new N,hS=new N,fS=new Lt,am=new N(1,0,0),sm=new N(0,1,0),om=new N(0,0,1),pS={type:"added"},mS={type:"removed"};class Ft extends Ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new N,t=new qn,i=new Lt,a=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Je},normalMatrix:{value:new Ge}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(am,e)}rotateY(e){return this.rotateOnAxis(sm,e)}rotateZ(e){return this.rotateOnAxis(om,e)}translateOnAxis(e,t){return im.copy(e).applyQuaternion(this.quaternion),this.position.add(im.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(am,e)}translateY(e){return this.translateOnAxis(sm,e)}translateZ(e){return this.translateOnAxis(om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?cl.copy(e):cl.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Fo,cl,this.up):wi.lookAt(cl,Fo,this.up),this.quaternion.setFromRotationMatrix(wi),a&&(wi.extractRotation(a.matrixWorld),Es.setFromRotationMatrix(wi),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let s=0,o=a.length;s<o;s++)a[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,hS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,fS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const a=this.children;for(let s=0,o=a.length;s<o;s++){const r=a[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(e.materials,this.material[l]));a.material=r}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let r=0;r<this.children.length;r++)a.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];a.animations.push(s(e.animations,l))}}if(t){const r=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),f=o(e.skeletons),m=o(e.animations),y=o(e.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=a,i;function o(r){const l=[];for(const c in r){const d=r[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Ft.DEFAULT_UP=new N(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new N,Ei=new N,iu=new N,Ai=new N,As=new N,Ts=new N,rm=new N,au=new N,su=new N,ou=new N;let dl=!1;class Fn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),Kn.subVectors(e,t),a.cross(Kn);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,i,a,s){Kn.subVectors(a,t),Ei.subVectors(i,t),iu.subVectors(e,t);const o=Kn.dot(Kn),r=Kn.dot(Ei),l=Kn.dot(iu),c=Ei.dot(Ei),d=Ei.dot(iu),u=o*c-r*r;if(u===0)return s.set(0,0,0),null;const f=1/u,m=(c*l-r*d)*f,y=(o*d-r*l)*f;return s.set(1-m-y,y,m)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getUV(e,t,i,a,s,o,r,l){return dl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dl=!0),this.getInterpolation(e,t,i,a,s,o,r,l)}static getInterpolation(e,t,i,a,s,o,r,l){return this.getBarycoord(e,t,i,a,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(r,Ai.z),l)}static isFrontFacing(e,t,i,a){return Kn.subVectors(i,t),Ei.subVectors(e,t),Kn.cross(Ei).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),Kn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,a,s){return dl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dl=!0),Fn.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}getInterpolation(e,t,i,a,s){return Fn.getInterpolation(e,this.a,this.b,this.c,t,i,a,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,s=this.c;let o,r;As.subVectors(a,i),Ts.subVectors(s,i),au.subVectors(e,i);const l=As.dot(au),c=Ts.dot(au);if(l<=0&&c<=0)return t.copy(i);su.subVectors(e,a);const d=As.dot(su),u=Ts.dot(su);if(d>=0&&u<=d)return t.copy(a);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(As,o);ou.subVectors(e,s);const m=As.dot(ou),y=Ts.dot(ou);if(y>=0&&m<=y)return t.copy(s);const v=m*c-l*y;if(v<=0&&c>=0&&y<=0)return r=c/(c-y),t.copy(i).addScaledVector(Ts,r);const p=d*y-m*u;if(p<=0&&u-d>=0&&m-y>=0)return rm.subVectors(s,a),r=(u-d)/(u-d+(m-y)),t.copy(a).addScaledVector(rm,r);const h=1/(p+v+f);return o=v*h,r=f*h,t.copy(i).addScaledVector(As,o).addScaledVector(Ts,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const py={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},ul={h:0,s:0,l:0};function ru(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ae{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,a=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,a),this}setHSL(e,t,i,a=st.workingColorSpace){if(e=pf(e,1),t=Zt(t,0,1),i=Zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ru(o,s,e+1/3),this.g=ru(o,s,e),this.b=ru(o,s,e-1/3)}return st.toWorkingColorSpace(this,a),this}setStyle(e,t=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=a[1],r=a[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const i=py[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}copyLinearToSRGB(e){return this.r=Yd(e.r),this.g=Yd(e.g),this.b=Yd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return st.fromWorkingColorSpace(an.copy(this),e),Math.round(Zt(an.r*255,0,255))*65536+Math.round(Zt(an.g*255,0,255))*256+Math.round(Zt(an.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(an.copy(this),t);const i=an.r,a=an.g,s=an.b,o=Math.max(i,a,s),r=Math.min(i,a,s);let l,c;const d=(r+o)/2;if(r===o)l=0,c=0;else{const u=o-r;switch(c=d<=.5?u/(o+r):u/(2-o-r),o){case i:l=(a-s)/u+(a<s?6:0);break;case a:l=(s-i)/u+2;break;case s:l=(i-a)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Ot){st.fromWorkingColorSpace(an.copy(this),e);const t=an.r,i=an.g,a=an.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(ul);const i=dr(ji.h,ul.h,t),a=dr(ji.s,ul.s,t),s=dr(ji.l,ul.l,t);return this.setHSL(i,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*a,this.g=s[1]*t+s[4]*i+s[7]*a,this.b=s[2]*t+s[5]*i+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new Ae;Ae.NAMES=py;let gS=0;class ps extends Ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=Qs,this.side=ma,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=th,this.blendEquation=Da,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=bc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==ma&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eh&&(i.blendSrc=this.blendSrc),this.blendDst!==th&&(i.blendDst=this.blendDst),this.blendEquation!==Da&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==bc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(s){const o=[];for(const r in s){const l=s[r];delete l.metadata,o.push(l)}return o}if(t){const s=a(e.textures),o=a(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let s=0;s!==a;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xn extends ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new N,hl=new me;class Dt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$p,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hl.fromBufferAttribute(this,t),hl.applyMatrix3(e),this.setXY(t,hl.x,hl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),a=un(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),i=un(i,this.array),a=un(a,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$p&&(e.usage=this.usage),e}}class my extends Dt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gy extends Dt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class et extends Dt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yS=0;const Dn=new Je,lu=new Ft,Rs=new N,An=new fs,zo=new fs,Wt=new N;class xt extends Ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cy(e)?gy:my)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,i){return Dn.makeTranslation(e,t,i),this.applyMatrix4(Dn),this}scale(e,t,i){return Dn.makeScale(e,t,i),this.applyMatrix4(Dn),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=[];for(let i=0,a=e.length;i<a;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const s=t[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const r=t[s];zo.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(An.min,zo.min),An.expandByPoint(Wt),Wt.addVectors(An.max,zo.max),An.expandByPoint(Wt)):(An.expandByPoint(zo.min),An.expandByPoint(zo.max))}An.getCenter(i);let a=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),a=Math.max(a,i.distanceToSquared(Wt));if(t)for(let s=0,o=t.length;s<o;s++){const r=t[s],l=this.morphTargetsRelative;for(let c=0,d=r.count;c<d;c++)Wt.fromBufferAttribute(r,c),l&&(Rs.fromBufferAttribute(e,c),Wt.add(Rs)),a=Math.max(a,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,a=t.position.array,s=t.normal.array,o=t.uv.array,r=a.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*r),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let w=0;w<r;w++)c[w]=new N,d[w]=new N;const u=new N,f=new N,m=new N,y=new me,v=new me,p=new me,h=new N,_=new N;function g(w,V,W){u.fromArray(a,w*3),f.fromArray(a,V*3),m.fromArray(a,W*3),y.fromArray(o,w*2),v.fromArray(o,V*2),p.fromArray(o,W*2),f.sub(u),m.sub(u),v.sub(y),p.sub(y);const oe=1/(v.x*p.y-p.x*v.y);isFinite(oe)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(oe),_.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(oe),c[w].add(h),c[V].add(h),c[W].add(h),d[w].add(_),d[V].add(_),d[W].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let w=0,V=b.length;w<V;++w){const W=b[w],oe=W.start,O=W.count;for(let q=oe,$=oe+O;q<$;q+=3)g(i[q+0],i[q+1],i[q+2])}const R=new N,E=new N,A=new N,U=new N;function M(w){A.fromArray(s,w*3),U.copy(A);const V=c[w];R.copy(V),R.sub(A.multiplyScalar(A.dot(V))).normalize(),E.crossVectors(U,V);const oe=E.dot(d[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=oe}for(let w=0,V=b.length;w<V;++w){const W=b[w],oe=W.start,O=W.count;for(let q=oe,$=oe+O;q<$;q+=3)M(i[q+0]),M(i[q+1]),M(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const a=new N,s=new N,o=new N,r=new N,l=new N,c=new N,d=new N,u=new N;if(e)for(let f=0,m=e.count;f<m;f+=3){const y=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);a.fromBufferAttribute(t,y),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),d.subVectors(o,s),u.subVectors(a,s),d.cross(u),r.fromBufferAttribute(i,y),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),r.add(d),l.add(d),c.add(d),i.setXYZ(y,r.x,r.y,r.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),d.subVectors(o,s),u.subVectors(a,s),d.cross(u),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(r,l){const c=r.array,d=r.itemSize,u=r.normalized,f=new c.constructor(l.length*d);let m=0,y=0;for(let v=0,p=l.length;v<p;v++){r.isInterleavedBufferAttribute?m=l[v]*r.data.stride+r.offset:m=l[v]*d;for(let h=0;h<d;h++)f[y++]=c[m++]}return new Dt(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xt,i=this.index.array,a=this.attributes;for(const r in a){const l=a[r],c=e(l,i);t.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let d=0,u=c.length;d<u;d++){const f=c[d],m=e(f,i);l.push(m)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,l=o.length;r<l;r++){const c=o[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];d.push(m.toJSON(e.data))}d.length>0&&(a[l]=d,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let f=0,m=u.length;f<m;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lm=new Je,Aa=new mf,fl=new _a,cm=new N,Cs=new N,Ls=new N,Ps=new N,cu=new N,pl=new N,ml=new me,gl=new me,yl=new me,dm=new N,um=new N,hm=new N,vl=new N,xl=new N;class nt extends Ft{constructor(e=new xt,t=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=a.length;s<o;s++){const r=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const r=this.morphTargetInfluences;if(s&&r){pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=r[l],u=s[l];d!==0&&(cu.fromBufferAttribute(u,e),o?pl.addScaledVector(cu,d):pl.addScaledVector(cu.sub(t),d))}t.add(pl)}return t}raycast(e,t){const i=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(s),Aa.copy(e.ray).recast(e.near),!(fl.containsPoint(Aa.origin)===!1&&(Aa.intersectSphere(fl,cm)===null||Aa.origin.distanceToSquared(cm)>(e.far-e.near)**2))&&(lm.copy(s).invert(),Aa.copy(e.ray).applyMatrix4(lm),!(i.boundingBox!==null&&Aa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Aa)))}_computeIntersections(e,t,i){let a;const s=this.geometry,o=this.material,r=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(r!==null)if(Array.isArray(o))for(let y=0,v=f.length;y<v;y++){const p=f[y],h=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(r.count,Math.min(p.start+p.count,m.start+m.count));for(let b=_,R=g;b<R;b+=3){const E=r.getX(b),A=r.getX(b+1),U=r.getX(b+2);a=_l(this,h,e,i,c,d,u,E,A,U),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const y=Math.max(0,m.start),v=Math.min(r.count,m.start+m.count);for(let p=y,h=v;p<h;p+=3){const _=r.getX(p),g=r.getX(p+1),b=r.getX(p+2);a=_l(this,o,e,i,c,d,u,_,g,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,v=f.length;y<v;y++){const p=f[y],h=o[p.materialIndex],_=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=_,R=g;b<R;b+=3){const E=b,A=b+1,U=b+2;a=_l(this,h,e,i,c,d,u,E,A,U),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const y=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=y,h=v;p<h;p+=3){const _=p,g=p+1,b=p+2;a=_l(this,o,e,i,c,d,u,_,g,b),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function vS(n,e,t,i,a,s,o,r){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,a,!0,r):l=i.intersectTriangle(a,s,o,e.side===ma,r),l===null)return null;xl.copy(r),xl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(xl);return c<t.near||c>t.far?null:{distance:c,point:xl.clone(),object:n}}function _l(n,e,t,i,a,s,o,r,l,c){n.getVertexPosition(r,Cs),n.getVertexPosition(l,Ls),n.getVertexPosition(c,Ps);const d=vS(n,e,t,i,Cs,Ls,Ps,vl);if(d){a&&(ml.fromBufferAttribute(a,r),gl.fromBufferAttribute(a,l),yl.fromBufferAttribute(a,c),d.uv=Fn.getInterpolation(vl,Cs,Ls,Ps,ml,gl,yl,new me)),s&&(ml.fromBufferAttribute(s,r),gl.fromBufferAttribute(s,l),yl.fromBufferAttribute(s,c),d.uv1=Fn.getInterpolation(vl,Cs,Ls,Ps,ml,gl,yl,new me),d.uv2=d.uv1),o&&(dm.fromBufferAttribute(o,r),um.fromBufferAttribute(o,l),hm.fromBufferAttribute(o,c),d.normal=Fn.getInterpolation(vl,Cs,Ls,Ps,dm,um,hm,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:r,b:l,c,normal:new N,materialIndex:0};Fn.getNormal(Cs,Ls,Ps,u.normal),d.face=u}return d}class sn extends xt{constructor(e=1,t=1,i=1,a=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:s,depthSegments:o};const r=this;a=Math.floor(a),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],u=[];let f=0,m=0;y("z","y","x",-1,-1,i,t,e,o,s,0),y("z","y","x",1,-1,i,t,-e,o,s,1),y("x","z","y",1,1,e,i,t,a,o,2),y("x","z","y",1,-1,e,i,-t,a,o,3),y("x","y","z",1,-1,e,t,i,a,s,4),y("x","y","z",-1,-1,e,t,-i,a,s,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(u,2));function y(v,p,h,_,g,b,R,E,A,U,M){const w=b/A,V=R/U,W=b/2,oe=R/2,O=E/2,q=A+1,$=U+1;let K=0,B=0;const Q=new N;for(let le=0;le<$;le++){const ue=le*V-oe;for(let xe=0;xe<q;xe++){const te=xe*w-W;Q[v]=te*_,Q[p]=ue*g,Q[h]=O,c.push(Q.x,Q.y,Q.z),Q[v]=0,Q[p]=0,Q[h]=E>0?1:-1,d.push(Q.x,Q.y,Q.z),u.push(xe/A),u.push(1-le/U),K+=1}}for(let le=0;le<U;le++)for(let ue=0;ue<A;ue++){const xe=f+ue+q*le,te=f+ue+q*(le+1),k=f+(ue+1)+q*(le+1),D=f+(ue+1)+q*le;l.push(xe,te,D),l.push(te,k,D),B+=6}r.addGroup(m,B,M),m+=B,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const a=n[t][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone():Array.isArray(a)?e[t][i]=a.slice():e[t][i]=a}}return e}function hn(n){const e={};for(let t=0;t<n.length;t++){const i=xo(n[t]);for(const a in i)e[a]=i[a]}return e}function xS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function yy(n){return n.getRenderTarget()===null?n.outputColorSpace:st.workingColorSpace}const _S={clone:xo,merge:hn};var bS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ga extends ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bS,this.fragmentShader=SS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=xS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const o=this.uniforms[a].value;o&&o.isTexture?t.uniforms[a]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[a]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[a]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[a]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[a]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[a]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[a]={type:"m4",value:o.toArray()}:t.uniforms[a]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vy extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Ni}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tn extends vy{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,a,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(eo*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,s=-.5*a;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*a/l,t-=o.offsetY*i/c,a*=o.width/l,i*=o.height/c}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Is=-90,Ns=1;class MS extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Tn(Is,Ns,e,t);a.layers=this.layers,this.add(a);const s=new Tn(Is,Ns,e,t);s.layers=this.layers,this.add(s);const o=new Tn(Is,Ns,e,t);o.layers=this.layers,this.add(o);const r=new Tn(Is,Ns,e,t);r.layers=this.layers,this.add(r);const l=new Tn(Is,Ns,e,t);l.layers=this.layers,this.add(l);const c=new Tn(Is,Ns,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,s,o,r,l]=t;for(const c of t)this.remove(c);if(e===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ec)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,r,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,a),e.render(t,s),e.setRenderTarget(i,1,a),e.render(t,o),e.setRenderTarget(i,2,a),e.render(t,r),e.setRenderTarget(i,3,a),e.render(t,l),e.setRenderTarget(i,4,a),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,a),e.render(t,d),e.setRenderTarget(u,f,m),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class xy extends Pn{constructor(e,t,i,a,s,o,r,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:go,super(e,t,i,a,s,o,r,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wS extends as{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];t.encoding!==void 0&&(ur("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ka?Ot:Bn),this.texture=new xy(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new sn(5,5,5),s=new ga({name:"CubemapFromEquirect",uniforms:xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:ca});s.uniforms.tEquirect.value=t;const o=new nt(a,s),r=t.minFilter;return t.minFilter===Lr&&(t.minFilter=Un),new MS(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,a){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,a);e.setRenderTarget(s)}}const du=new N,ES=new N,AS=new Ge;class La{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=du.subVectors(i,t).cross(ES.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(du),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||AS.getNormalMatrix(e),a=this.coplanarPoint(du).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ta=new _a,bl=new N;class gf{constructor(e=new La,t=new La,i=new La,a=new La,s=new La,o=new La){this.planes=[e,t,i,a,s,o]}set(e,t,i,a,s,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(i),r[3].copy(a),r[4].copy(s),r[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ni){const i=this.planes,a=e.elements,s=a[0],o=a[1],r=a[2],l=a[3],c=a[4],d=a[5],u=a[6],f=a[7],m=a[8],y=a[9],v=a[10],p=a[11],h=a[12],_=a[13],g=a[14],b=a[15];if(i[0].setComponents(l-s,f-c,p-m,b-h).normalize(),i[1].setComponents(l+s,f+c,p+m,b+h).normalize(),i[2].setComponents(l+o,f+d,p+y,b+_).normalize(),i[3].setComponents(l-o,f-d,p-y,b-_).normalize(),i[4].setComponents(l-r,f-u,p-v,b-g).normalize(),t===Ni)i[5].setComponents(l+r,f+u,p+v,b+g).normalize();else if(t===Ec)i[5].setComponents(r,u,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ta.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ta.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ta)}intersectsSprite(e){return Ta.center.set(0,0,0),Ta.radius=.7071067811865476,Ta.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ta)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(bl.x=a.normal.x>0?e.max.x:e.min.x,bl.y=a.normal.y>0?e.max.y:e.min.y,bl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _y(){let n=null,e=!1,t=null,i=null;function a(s,o){t(s,o),i=n.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(a),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function TS(n,e){const t=e.isWebGL2,i=new WeakMap;function a(c,d){const u=c.array,f=c.usage,m=u.byteLength,y=n.createBuffer();n.bindBuffer(d,y),n.bufferData(d,u,f),c.onUploadCallback();let v;if(u instanceof Float32Array)v=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=n.SHORT;else if(u instanceof Uint32Array)v=n.UNSIGNED_INT;else if(u instanceof Int32Array)v=n.INT;else if(u instanceof Int8Array)v=n.BYTE;else if(u instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:y,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,u){const f=d.array,m=d._updateRange,y=d.updateRanges;if(n.bindBuffer(u,c),m.count===-1&&y.length===0&&n.bufferSubData(u,0,f),y.length!==0){for(let v=0,p=y.length;v<p;v++){const h=y[v];t?n.bufferSubData(u,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):n.bufferSubData(u,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}d.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);if(u===void 0)i.set(c,a(c,d));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,c,d),u.version=c.version}}return{get:o,remove:r,update:l}}class ms extends xt{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const s=e/2,o=t/2,r=Math.floor(i),l=Math.floor(a),c=r+1,d=l+1,u=e/r,f=t/l,m=[],y=[],v=[],p=[];for(let h=0;h<d;h++){const _=h*f-o;for(let g=0;g<c;g++){const b=g*u-s;y.push(b,-_,0),v.push(0,0,1),p.push(g/r),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<r;_++){const g=_+c*h,b=_+c*(h+1),R=_+1+c*(h+1),E=_+1+c*h;m.push(g,b,E),m.push(b,R,E)}this.setIndex(m),this.setAttribute("position",new et(y,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.widthSegments,e.heightSegments)}}var RS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,NS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,US=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,FS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,WS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,YS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,KS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ZS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,JS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,QS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aM="gl_FragColor = linearToOutputTexel( gl_FragColor );",sM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,oM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,yM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_M=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,SM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,TM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,RM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,CM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,DM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,VM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,WM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,qM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,QM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ew=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ow=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,dw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_w=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Aw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,kw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ow=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ww=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$w=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,n1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,s1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:RS,alphahash_pars_fragment:CS,alphamap_fragment:LS,alphamap_pars_fragment:PS,alphatest_fragment:IS,alphatest_pars_fragment:NS,aomap_fragment:DS,aomap_pars_fragment:kS,batching_pars_vertex:OS,batching_vertex:US,begin_vertex:FS,beginnormal_vertex:zS,bsdfs:BS,iridescence_fragment:HS,bumpmap_pars_fragment:GS,clipping_planes_fragment:VS,clipping_planes_pars_fragment:WS,clipping_planes_pars_vertex:qS,clipping_planes_vertex:XS,color_fragment:jS,color_pars_fragment:$S,color_pars_vertex:YS,color_vertex:KS,common:ZS,cube_uv_reflection_fragment:JS,defaultnormal_vertex:QS,displacementmap_pars_vertex:eM,displacementmap_vertex:tM,emissivemap_fragment:nM,emissivemap_pars_fragment:iM,colorspace_fragment:aM,colorspace_pars_fragment:sM,envmap_fragment:oM,envmap_common_pars_fragment:rM,envmap_pars_fragment:lM,envmap_pars_vertex:cM,envmap_physical_pars_fragment:bM,envmap_vertex:dM,fog_vertex:uM,fog_pars_vertex:hM,fog_fragment:fM,fog_pars_fragment:pM,gradientmap_pars_fragment:mM,lightmap_fragment:gM,lightmap_pars_fragment:yM,lights_lambert_fragment:vM,lights_lambert_pars_fragment:xM,lights_pars_begin:_M,lights_toon_fragment:SM,lights_toon_pars_fragment:MM,lights_phong_fragment:wM,lights_phong_pars_fragment:EM,lights_physical_fragment:AM,lights_physical_pars_fragment:TM,lights_fragment_begin:RM,lights_fragment_maps:CM,lights_fragment_end:LM,logdepthbuf_fragment:PM,logdepthbuf_pars_fragment:IM,logdepthbuf_pars_vertex:NM,logdepthbuf_vertex:DM,map_fragment:kM,map_pars_fragment:OM,map_particle_fragment:UM,map_particle_pars_fragment:FM,metalnessmap_fragment:zM,metalnessmap_pars_fragment:BM,morphcolor_vertex:HM,morphnormal_vertex:GM,morphtarget_pars_vertex:VM,morphtarget_vertex:WM,normal_fragment_begin:qM,normal_fragment_maps:XM,normal_pars_fragment:jM,normal_pars_vertex:$M,normal_vertex:YM,normalmap_pars_fragment:KM,clearcoat_normal_fragment_begin:ZM,clearcoat_normal_fragment_maps:JM,clearcoat_pars_fragment:QM,iridescence_pars_fragment:ew,opaque_fragment:tw,packing:nw,premultiplied_alpha_fragment:iw,project_vertex:aw,dithering_fragment:sw,dithering_pars_fragment:ow,roughnessmap_fragment:rw,roughnessmap_pars_fragment:lw,shadowmap_pars_fragment:cw,shadowmap_pars_vertex:dw,shadowmap_vertex:uw,shadowmask_pars_fragment:hw,skinbase_vertex:fw,skinning_pars_vertex:pw,skinning_vertex:mw,skinnormal_vertex:gw,specularmap_fragment:yw,specularmap_pars_fragment:vw,tonemapping_fragment:xw,tonemapping_pars_fragment:_w,transmission_fragment:bw,transmission_pars_fragment:Sw,uv_pars_fragment:Mw,uv_pars_vertex:ww,uv_vertex:Ew,worldpos_vertex:Aw,background_vert:Tw,background_frag:Rw,backgroundCube_vert:Cw,backgroundCube_frag:Lw,cube_vert:Pw,cube_frag:Iw,depth_vert:Nw,depth_frag:Dw,distanceRGBA_vert:kw,distanceRGBA_frag:Ow,equirect_vert:Uw,equirect_frag:Fw,linedashed_vert:zw,linedashed_frag:Bw,meshbasic_vert:Hw,meshbasic_frag:Gw,meshlambert_vert:Vw,meshlambert_frag:Ww,meshmatcap_vert:qw,meshmatcap_frag:Xw,meshnormal_vert:jw,meshnormal_frag:$w,meshphong_vert:Yw,meshphong_frag:Kw,meshphysical_vert:Zw,meshphysical_frag:Jw,meshtoon_vert:Qw,meshtoon_frag:e1,points_vert:t1,points_frag:n1,shadow_vert:i1,shadow_frag:a1,sprite_vert:s1,sprite_frag:o1},Se={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},di={basic:{uniforms:hn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:hn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ae(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:hn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:hn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:hn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ae(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:hn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:hn([Se.points,Se.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:hn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:hn([Se.common,Se.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:hn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:hn([Se.sprite,Se.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:hn([Se.common,Se.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:hn([Se.lights,Se.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};di.physical={uniforms:hn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Sl={r:0,b:0,g:0};function r1(n,e,t,i,a,s,o){const r=new Ae(0);let l=s===!0?0:1,c,d,u=null,f=0,m=null;function y(p,h){let _=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?t:e).get(g)),g===null?v(r,l):g&&g.isColor&&(v(g,1),_=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===md)?(d===void 0&&(d=new nt(new sn(1,1,1),new ga({name:"BackgroundCubeMaterial",uniforms:xo(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,d.material.toneMapped=st.getTransfer(g.colorSpace)!==ht,(u!==g||f!==g.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,u=g,f=g.version,m=n.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new nt(new ms(2,2),new ga({name:"BackgroundMaterial",uniforms:xo(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:ma,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=st.getTransfer(g.colorSpace)!==ht,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||f!==g.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=g,f=g.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,h){p.getRGB(Sl,yy(n)),i.buffers.color.setClear(Sl.r,Sl.g,Sl.b,h,o)}return{getClearColor:function(){return r},setClearColor:function(p,h=1){r.set(p),l=h,v(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(r,l)},render:y}}function l1(n,e,t,i){const a=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,r={},l=p(null);let c=l,d=!1;function u(O,q,$,K,B){let Q=!1;if(o){const le=v(K,$,q);c!==le&&(c=le,m(c.object)),Q=h(O,K,$,B),Q&&_(O,K,$,B)}else{const le=q.wireframe===!0;(c.geometry!==K.id||c.program!==$.id||c.wireframe!==le)&&(c.geometry=K.id,c.program=$.id,c.wireframe=le,Q=!0)}B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(Q||d)&&(d=!1,U(O,q,$,K),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(O){return i.isWebGL2?n.bindVertexArray(O):s.bindVertexArrayOES(O)}function y(O){return i.isWebGL2?n.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function v(O,q,$){const K=$.wireframe===!0;let B=r[O.id];B===void 0&&(B={},r[O.id]=B);let Q=B[q.id];Q===void 0&&(Q={},B[q.id]=Q);let le=Q[K];return le===void 0&&(le=p(f()),Q[K]=le),le}function p(O){const q=[],$=[],K=[];for(let B=0;B<a;B++)q[B]=0,$[B]=0,K[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:$,attributeDivisors:K,object:O,attributes:{},index:null}}function h(O,q,$,K){const B=c.attributes,Q=q.attributes;let le=0;const ue=$.getAttributes();for(const xe in ue)if(ue[xe].location>=0){const k=B[xe];let D=Q[xe];if(D===void 0&&(xe==="instanceMatrix"&&O.instanceMatrix&&(D=O.instanceMatrix),xe==="instanceColor"&&O.instanceColor&&(D=O.instanceColor)),k===void 0||k.attribute!==D||D&&k.data!==D.data)return!0;le++}return c.attributesNum!==le||c.index!==K}function _(O,q,$,K){const B={},Q=q.attributes;let le=0;const ue=$.getAttributes();for(const xe in ue)if(ue[xe].location>=0){let k=Q[xe];k===void 0&&(xe==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),xe==="instanceColor"&&O.instanceColor&&(k=O.instanceColor));const D={};D.attribute=k,k&&k.data&&(D.data=k.data),B[xe]=D,le++}c.attributes=B,c.attributesNum=le,c.index=K}function g(){const O=c.newAttributes;for(let q=0,$=O.length;q<$;q++)O[q]=0}function b(O){R(O,0)}function R(O,q){const $=c.newAttributes,K=c.enabledAttributes,B=c.attributeDivisors;$[O]=1,K[O]===0&&(n.enableVertexAttribArray(O),K[O]=1),B[O]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,q),B[O]=q)}function E(){const O=c.newAttributes,q=c.enabledAttributes;for(let $=0,K=q.length;$<K;$++)q[$]!==O[$]&&(n.disableVertexAttribArray($),q[$]=0)}function A(O,q,$,K,B,Q,le){le===!0?n.vertexAttribIPointer(O,q,$,B,Q):n.vertexAttribPointer(O,q,$,K,B,Q)}function U(O,q,$,K){if(i.isWebGL2===!1&&(O.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const B=K.attributes,Q=$.getAttributes(),le=q.defaultAttributeValues;for(const ue in Q){const xe=Q[ue];if(xe.location>=0){let te=B[ue];if(te===void 0&&(ue==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),ue==="instanceColor"&&O.instanceColor&&(te=O.instanceColor)),te!==void 0){const k=te.normalized,D=te.itemSize,C=t.get(te);if(C===void 0)continue;const T=C.buffer,ee=C.type,ce=C.bytesPerElement,X=i.isWebGL2===!0&&(ee===n.INT||ee===n.UNSIGNED_INT||te.gpuType===Q0);if(te.isInterleavedBufferAttribute){const he=te.data,P=he.stride,ie=te.offset;if(he.isInstancedInterleavedBuffer){for(let z=0;z<xe.locationSize;z++)R(xe.location+z,he.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let z=0;z<xe.locationSize;z++)b(xe.location+z);n.bindBuffer(n.ARRAY_BUFFER,T);for(let z=0;z<xe.locationSize;z++)A(xe.location+z,D/xe.locationSize,ee,k,P*ce,(ie+D/xe.locationSize*z)*ce,X)}else{if(te.isInstancedBufferAttribute){for(let he=0;he<xe.locationSize;he++)R(xe.location+he,te.meshPerAttribute);O.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let he=0;he<xe.locationSize;he++)b(xe.location+he);n.bindBuffer(n.ARRAY_BUFFER,T);for(let he=0;he<xe.locationSize;he++)A(xe.location+he,D/xe.locationSize,ee,k,D*ce,D/xe.locationSize*he*ce,X)}}else if(le!==void 0){const k=le[ue];if(k!==void 0)switch(k.length){case 2:n.vertexAttrib2fv(xe.location,k);break;case 3:n.vertexAttrib3fv(xe.location,k);break;case 4:n.vertexAttrib4fv(xe.location,k);break;default:n.vertexAttrib1fv(xe.location,k)}}}}E()}function M(){W();for(const O in r){const q=r[O];for(const $ in q){const K=q[$];for(const B in K)y(K[B].object),delete K[B];delete q[$]}delete r[O]}}function w(O){if(r[O.id]===void 0)return;const q=r[O.id];for(const $ in q){const K=q[$];for(const B in K)y(K[B].object),delete K[B];delete q[$]}delete r[O.id]}function V(O){for(const q in r){const $=r[q];if($[O.id]===void 0)continue;const K=$[O.id];for(const B in K)y(K[B].object),delete K[B];delete $[O.id]}}function W(){oe(),d=!0,c!==l&&(c=l,m(c.object))}function oe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:W,resetDefaultState:oe,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:V,initAttributes:g,enableAttribute:b,disableUnusedAttributes:E}}function c1(n,e,t,i){const a=i.isWebGL2;let s;function o(d){s=d}function r(d,u){n.drawArrays(s,d,u),t.update(u,s,1)}function l(d,u,f){if(f===0)return;let m,y;if(a)m=n,y="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[y](s,d,u,f),t.update(u,s,f)}function c(d,u,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<f;y++)this.render(d[y],u[y]);else{m.multiDrawArraysWEBGL(s,d,0,u,0,f);let y=0;for(let v=0;v<f;v++)y+=u[v];t.update(y,s,1)}}this.setMode=o,this.render=r,this.renderInstances=l,this.renderMultiDraw=c}function d1(n,e,t){let i;function a(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let r=t.precision!==void 0?t.precision:"highp";const l=s(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);const c=o||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,b=o||e.has("OES_texture_float"),R=g&&b,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:a,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:E}}function u1(n){const e=this;let t=null,i=0,a=!1,s=!1;const o=new La,r=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||i!==0||a;return a=f,i=u.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,m){const y=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,h=n.get(u);if(!a||y===null||y.length===0||s&&!p)s?d(null):c();else{const _=s?0:i,g=_*4;let b=h.clippingState||null;l.value=b,b=d(y,f,g,m);for(let R=0;R!==g;++R)b[R]=t[R];h.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,f,m,y){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,y!==!0||p===null){const h=m+v*4,_=f.matrixWorldInverse;r.getNormalMatrix(_),(p===null||p.length<h)&&(p=new Float32Array(h));for(let g=0,b=m;g!==v;++g,b+=4)o.copy(u[g]).applyMatrix4(_,r),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function h1(n){let e=new WeakMap;function t(o,r){return r===nh?o.mapping=go:r===ih&&(o.mapping=yo),o}function i(o){if(o&&o.isTexture){const r=o.mapping;if(r===nh||r===ih)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wS(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",a),t(c.texture,o.mapping)}else return null}}return o}function a(o){const r=o.target;r.removeEventListener("dispose",a);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class by extends vy{constructor(e=-1,t=1,i=1,a=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=i-e,o=i+e,r=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,r-=d*this.view.offsetY,l=r-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ws=4,fm=[.125,.215,.35,.446,.526,.582],ka=20,uu=new by,pm=new Ae;let hu=null,fu=0,pu=0;const Pa=(1+Math.sqrt(5))/2,Ds=1/Pa,mm=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Pa,Ds),new N(0,Pa,-Ds),new N(Ds,0,Pa),new N(-Ds,0,Pa),new N(Pa,Ds,0),new N(-Pa,Ds,0)];class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,a=100){hu=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hu,fu,pu),e.scissorTest=!1,Ml(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===go||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hu=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Pr,format:ei,colorSpace:Bi,depthBuffer:!1},a=ym(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f1(s)),this._blurMaterial=p1(s,e,t)}return a}_compileMaterial(e){const t=new nt(this._lodPlanes[0],e);this._renderer.compile(t,uu)}_sceneToCubeUV(e,t,i,a){const r=new Tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(pm),d.toneMapping=da,d.autoClear=!1;const m=new Xn({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),y=new nt(new sn,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(pm),v=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(r.up.set(0,l[h],0),r.lookAt(c[h],0,0)):_===1?(r.up.set(0,0,l[h]),r.lookAt(0,c[h],0)):(r.up.set(0,l[h],0),r.lookAt(0,0,c[h]));const g=this._cubeSize;Ml(a,_*g,h>2?g:0,g,g),d.setRenderTarget(a),v&&d.render(y,r),d.render(e,r)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===go||e.mapping===yo;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const s=a?this._cubemapMaterial:this._equirectMaterial,o=new nt(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const l=this._cubeSize;Ml(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,uu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let a=1;a<this._lodPlanes.length;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=mm[(a-1)%mm.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,a,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,a,"latitudinal",s),this._halfBlur(o,e,i,i,a,"longitudinal",s)}_halfBlur(e,t,i,a,s,o,r){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new nt(this._lodPlanes[a],c),f=c.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ka-1),v=s/y,p=isFinite(s)?1+Math.floor(d*v):ka;p>ka&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ka}`);const h=[];let _=0;for(let A=0;A<ka;++A){const U=A/v,M=Math.exp(-U*U/2);h.push(M),A===0?_+=M:A<p&&(_+=2*M)}for(let A=0;A<h.length;A++)h[A]=h[A]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:g}=this;f.dTheta.value=y,f.mipInt.value=g-i;const b=this._sizeLods[a],R=3*b*(a>g-Ws?a-g+Ws:0),E=4*(this._cubeSize-b);Ml(t,R,E,3*b,2*b),l.setRenderTarget(t),l.render(u,uu)}}function f1(n){const e=[],t=[],i=[];let a=n;const s=n-Ws+1+fm.length;for(let o=0;o<s;o++){const r=Math.pow(2,a);t.push(r);let l=1/r;o>n-Ws?l=fm[o-n+Ws-1]:o===0&&(l=0),i.push(l);const c=1/(r-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],m=6,y=6,v=3,p=2,h=1,_=new Float32Array(v*y*m),g=new Float32Array(p*y*m),b=new Float32Array(h*y*m);for(let E=0;E<m;E++){const A=E%3*2/3-1,U=E>2?0:-1,M=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];_.set(M,v*y*E),g.set(f,p*y*E);const w=[E,E,E,E,E,E];b.set(w,h*y*E)}const R=new xt;R.setAttribute("position",new Dt(_,v)),R.setAttribute("uv",new Dt(g,p)),R.setAttribute("faceIndex",new Dt(b,h)),e.push(R),a>Ws&&a--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ym(n,e,t){const i=new as(n,e,t);return i.texture.mapping=md,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ml(n,e,t,i,a){n.viewport.set(e,t,i,a),n.scissor.set(e,t,i,a)}function p1(n,e,t){const i=new Float32Array(ka),a=new N(0,1,0);return new ga({name:"SphericalGaussianBlur",defines:{n:ka,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function vm(){return new ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function xm(){return new ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function yf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function m1(n){let e=new WeakMap,t=null;function i(r){if(r&&r.isTexture){const l=r.mapping,c=l===nh||l===ih,d=l===go||l===yo;if(c||d)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let u=e.get(r);return t===null&&(t=new gm(n)),u=c?t.fromEquirectangular(r,u):t.fromCubemap(r,u),e.set(r,u),u.texture}else{if(e.has(r))return e.get(r).texture;{const u=r.image;if(c&&u&&u.height>0||d&&u&&a(u)){t===null&&(t=new gm(n));const f=c?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,f),r.addEventListener("dispose",s),f.texture}else return null}}}return r}function a(r){let l=0;const c=6;for(let d=0;d<c;d++)r[d]!==void 0&&l++;return l===c}function s(r){const l=r.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function g1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let a;switch(i){case"WEBGL_depth_texture":a=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=n.getExtension(i)}return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const a=t(i);return a===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function y1(n,e,t,i){const a={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const y in f.attributes)e.remove(f.attributes[y]);for(const y in f.morphAttributes){const v=f.morphAttributes[y];for(let p=0,h=v.length;p<h;p++)e.remove(v[p])}f.removeEventListener("dispose",o),delete a[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(u,f){return a[f.id]===!0||(f.addEventListener("dispose",o),a[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const y in f)e.update(f[y],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const y in m){const v=m[y];for(let p=0,h=v.length;p<h;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,y=u.attributes.position;let v=0;if(m!==null){const _=m.array;v=m.version;for(let g=0,b=_.length;g<b;g+=3){const R=_[g+0],E=_[g+1],A=_[g+2];f.push(R,E,E,A,A,R)}}else if(y!==void 0){const _=y.array;v=y.version;for(let g=0,b=_.length/3-1;g<b;g+=3){const R=g+0,E=g+1,A=g+2;f.push(R,E,E,A,A,R)}}else return;const p=new(cy(f)?gy:my)(f,1);p.version=v;const h=s.get(u);h&&e.remove(h),s.set(u,p)}function d(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return s.get(u)}return{get:r,update:l,getWireframeAttribute:d}}function v1(n,e,t,i){const a=i.isWebGL2;let s;function o(m){s=m}let r,l;function c(m){r=m.type,l=m.bytesPerElement}function d(m,y){n.drawElements(s,y,r,m*l),t.update(y,s,1)}function u(m,y,v){if(v===0)return;let p,h;if(a)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,y,r,m*l,v),t.update(y,s,v)}function f(m,y,v){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<v;h++)this.render(m[h]/l,y[h]);else{p.multiDrawElementsWEBGL(s,y,0,r,m,0,v);let h=0;for(let _=0;_<v;_++)h+=y[_];t.update(h,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=u,this.renderMultiDraw=f}function x1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,r){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=r*(s/3);break;case n.LINES:t.lines+=r*(s/2);break;case n.LINE_STRIP:t.lines+=r*(s-1);break;case n.LINE_LOOP:t.lines+=r*s;break;case n.POINTS:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function _1(n,e){return n[0]-e[0]}function b1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function S1(n,e,t){const i={},a=new Float32Array(8),s=new WeakMap,o=new $t,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function l(c,d,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=m!==void 0?m.length:0;let v=s.get(d);if(v===void 0||v.count!==y){let O=function(){W.dispose(),s.delete(d),d.removeEventListener("dispose",O)};v!==void 0&&v.texture.dispose();const _=d.morphAttributes.position!==void 0,g=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,R=d.morphAttributes.position||[],E=d.morphAttributes.normal||[],A=d.morphAttributes.color||[];let U=0;_===!0&&(U=1),g===!0&&(U=2),b===!0&&(U=3);let M=d.attributes.position.count*U,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const V=new Float32Array(M*w*4*y),W=new hy(V,M,w,y);W.type=ta,W.needsUpdate=!0;const oe=U*4;for(let q=0;q<y;q++){const $=R[q],K=E[q],B=A[q],Q=M*w*4*q;for(let le=0;le<$.count;le++){const ue=le*oe;_===!0&&(o.fromBufferAttribute($,le),V[Q+ue+0]=o.x,V[Q+ue+1]=o.y,V[Q+ue+2]=o.z,V[Q+ue+3]=0),g===!0&&(o.fromBufferAttribute(K,le),V[Q+ue+4]=o.x,V[Q+ue+5]=o.y,V[Q+ue+6]=o.z,V[Q+ue+7]=0),b===!0&&(o.fromBufferAttribute(B,le),V[Q+ue+8]=o.x,V[Q+ue+9]=o.y,V[Q+ue+10]=o.z,V[Q+ue+11]=B.itemSize===4?o.w:1)}}v={count:y,texture:W,size:new me(M,w)},s.set(d,v),d.addEventListener("dispose",O)}let p=0;for(let _=0;_<f.length;_++)p+=f[_];const h=d.morphTargetsRelative?1:1-p;u.getUniforms().setValue(n,"morphTargetBaseInfluence",h),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const m=f===void 0?0:f.length;let y=i[d.id];if(y===void 0||y.length!==m){y=[];for(let g=0;g<m;g++)y[g]=[g,0];i[d.id]=y}for(let g=0;g<m;g++){const b=y[g];b[0]=g,b[1]=f[g]}y.sort(b1);for(let g=0;g<8;g++)g<m&&y[g][1]?(r[g][0]=y[g][0],r[g][1]=y[g][1]):(r[g][0]=Number.MAX_SAFE_INTEGER,r[g][1]=0);r.sort(_1);const v=d.morphAttributes.position,p=d.morphAttributes.normal;let h=0;for(let g=0;g<8;g++){const b=r[g],R=b[0],E=b[1];R!==Number.MAX_SAFE_INTEGER&&E?(v&&d.getAttribute("morphTarget"+g)!==v[R]&&d.setAttribute("morphTarget"+g,v[R]),p&&d.getAttribute("morphNormal"+g)!==p[R]&&d.setAttribute("morphNormal"+g,p[R]),a[g]=E,h+=E):(v&&d.hasAttribute("morphTarget"+g)===!0&&d.deleteAttribute("morphTarget"+g),p&&d.hasAttribute("morphNormal"+g)===!0&&d.deleteAttribute("morphNormal"+g),a[g]=0)}const _=d.morphTargetsRelative?1:1-h;u.getUniforms().setValue(n,"morphTargetBaseInfluence",_),u.getUniforms().setValue(n,"morphTargetInfluences",a)}}return{update:l}}function M1(n,e,t,i){let a=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,u=e.get(l,d);if(a.get(u)!==c&&(e.update(u),a.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),a.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return u}function o(){a=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Sy extends Pn{constructor(e,t,i,a,s,o,r,l,c,d){if(d=d!==void 0?d:Ya,d!==Ya&&d!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ya&&(i=ea),i===void 0&&d===vo&&(i=$a),super(null,a,s,o,r,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:mn,this.minFilter=l!==void 0?l:mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const My=new Pn,wy=new Sy(1,1);wy.compareFunction=ly;const Ey=new hy,Ay=new rS,Ty=new xy,_m=[],bm=[],Sm=new Float32Array(16),Mm=new Float32Array(9),wm=new Float32Array(4);function Co(n,e,t){const i=n[0];if(i<=0||i>0)return n;const a=e*t;let s=_m[a];if(s===void 0&&(s=new Float32Array(a),_m[a]=s),e!==0){i.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,n[o].toArray(s,r)}return s}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function yd(n,e){let t=bm[e];t===void 0&&(t=new Int32Array(e),bm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function w1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function E1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function A1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function T1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function R1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,i))return;wm.set(i),n.uniformMatrix2fv(this.addr,!1,wm),Bt(t,i)}}function C1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,i))return;Mm.set(i),n.uniformMatrix3fv(this.addr,!1,Mm),Bt(t,i)}}function L1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(zt(t,i))return;Sm.set(i),n.uniformMatrix4fv(this.addr,!1,Sm),Bt(t,i)}}function P1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function I1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function N1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function D1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function k1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function O1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function U1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function F1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function z1(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a);const s=this.type===n.SAMPLER_2D_SHADOW?wy:My;t.setTexture2D(e||s,a)}function B1(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||Ay,a)}function H1(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Ty,a)}function G1(n,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(n.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Ey,a)}function V1(n){switch(n){case 5126:return w1;case 35664:return E1;case 35665:return A1;case 35666:return T1;case 35674:return R1;case 35675:return C1;case 35676:return L1;case 5124:case 35670:return P1;case 35667:case 35671:return I1;case 35668:case 35672:return N1;case 35669:case 35673:return D1;case 5125:return k1;case 36294:return O1;case 36295:return U1;case 36296:return F1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return G1}}function W1(n,e){n.uniform1fv(this.addr,e)}function q1(n,e){const t=Co(e,this.size,2);n.uniform2fv(this.addr,t)}function X1(n,e){const t=Co(e,this.size,3);n.uniform3fv(this.addr,t)}function j1(n,e){const t=Co(e,this.size,4);n.uniform4fv(this.addr,t)}function $1(n,e){const t=Co(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Y1(n,e){const t=Co(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function K1(n,e){const t=Co(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Z1(n,e){n.uniform1iv(this.addr,e)}function J1(n,e){n.uniform2iv(this.addr,e)}function Q1(n,e){n.uniform3iv(this.addr,e)}function eE(n,e){n.uniform4iv(this.addr,e)}function tE(n,e){n.uniform1uiv(this.addr,e)}function nE(n,e){n.uniform2uiv(this.addr,e)}function iE(n,e){n.uniform3uiv(this.addr,e)}function aE(n,e){n.uniform4uiv(this.addr,e)}function sE(n,e,t){const i=this.cache,a=e.length,s=yd(t,a);zt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==a;++o)t.setTexture2D(e[o]||My,s[o])}function oE(n,e,t){const i=this.cache,a=e.length,s=yd(t,a);zt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==a;++o)t.setTexture3D(e[o]||Ay,s[o])}function rE(n,e,t){const i=this.cache,a=e.length,s=yd(t,a);zt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==a;++o)t.setTextureCube(e[o]||Ty,s[o])}function lE(n,e,t){const i=this.cache,a=e.length,s=yd(t,a);zt(i,s)||(n.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==a;++o)t.setTexture2DArray(e[o]||Ey,s[o])}function cE(n){switch(n){case 5126:return W1;case 35664:return q1;case 35665:return X1;case 35666:return j1;case 35674:return $1;case 35675:return Y1;case 35676:return K1;case 5124:case 35670:return Z1;case 35667:case 35671:return J1;case 35668:case 35672:return Q1;case 35669:case 35673:return eE;case 5125:return tE;case 36294:return nE;case 36295:return iE;case 36296:return aE;case 35678:case 36198:case 36298:case 36306:case 35682:return sE;case 35679:case 36299:case 36307:return oE;case 35680:case 36300:case 36308:case 36293:return rE;case 36289:case 36303:case 36311:case 36292:return lE}}class dE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=V1(t.type)}}class uE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cE(t.type)}}class hE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let s=0,o=a.length;s!==o;++s){const r=a[s];r.setValue(e,t[r.id],i)}}}const mu=/(\w+)(\])?(\[|\.)?/g;function Em(n,e){n.seq.push(e),n.map[e.id]=e}function fE(n,e,t){const i=n.name,a=i.length;for(mu.lastIndex=0;;){const s=mu.exec(i),o=mu.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&o+2===a){Em(t,c===void 0?new dE(r,n,e):new uE(r,n,e));break}else{let u=t.map[r];u===void 0&&(u=new hE(r),Em(t,u)),t=u}}}class Ql{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const s=e.getActiveUniform(t,a),o=e.getUniformLocation(t,s.name);fE(s,o,this)}}setValue(e,t,i,a){const s=this.map[t];s!==void 0&&s.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let s=0,o=t.length;s!==o;++s){const r=t[s],l=i[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,s=e.length;a!==s;++a){const o=e[a];o.id in t&&i.push(o)}return i}}function Am(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const pE=37297;let mE=0;function gE(n,e){const t=n.split(`
`),i=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=a;o<s;o++){const r=o+1;i.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return i.join(`
`)}function yE(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===wc&&t===Mc?i="LinearDisplayP3ToLinearSRGB":e===Mc&&t===wc&&(i="LinearSRGBToLinearDisplayP3"),n){case Bi:case gd:return[i,"LinearTransferOETF"];case Ot:case ff:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Tm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=n.getShaderInfoLog(e).trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+gE(n.getShaderSource(e),o)}else return a}function vE(n,e){const t=yE(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function xE(n,e){let t;switch(e){case yb:t="Linear";break;case vb:t="Reinhard";break;case xb:t="OptimizedCineon";break;case _b:t="ACESFilmic";break;case Sb:t="AgX";break;case bb:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _E(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(qs).join(`
`)}function bE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(qs).join(`
`)}function SE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ME(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const s=n.getActiveAttrib(e,a),o=s.name;let r=1;s.type===n.FLOAT_MAT2&&(r=2),s.type===n.FLOAT_MAT3&&(r=3),s.type===n.FLOAT_MAT4&&(r=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:r}}return t}function qs(n){return n!==""}function Rm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wE=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(n){return n.replace(wE,AE)}const EE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function AE(n,e){let t=je[e];if(t===void 0){const i=EE.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lh(t)}const TE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lm(n){return n.replace(TE,RE)}function RE(n,e,t,i){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Pm(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Z0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===q_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function LE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case go:case yo:e="ENVMAP_TYPE_CUBE";break;case md:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yo:e="ENVMAP_MODE_REFRACTION";break}return e}function IE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case uf:e="ENVMAP_BLENDING_MULTIPLY";break;case mb:e="ENVMAP_BLENDING_MIX";break;case gb:e="ENVMAP_BLENDING_ADD";break}return e}function NE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function DE(n,e,t,i){const a=n.getContext(),s=t.defines;let o=t.vertexShader,r=t.fragmentShader;const l=CE(t),c=LE(t),d=PE(t),u=IE(t),f=NE(t),m=t.isWebGL2?"":_E(t),y=bE(t),v=SE(s),p=a.createProgram();let h,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(qs).join(`
`),h.length>0&&(h+=`
`),_=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(qs).join(`
`),_.length>0&&(_+=`
`)):(h=[Pm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),_=[m,Pm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==da?"#define TONE_MAPPING":"",t.toneMapping!==da?je.tonemapping_pars_fragment:"",t.toneMapping!==da?xE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,vE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),o=lh(o),o=Rm(o,t),o=Cm(o,t),r=lh(r),r=Rm(r,t),r=Cm(r,t),o=Lm(o),r=Lm(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,h=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=g+h+o,R=g+_+r,E=Am(a,a.VERTEX_SHADER,b),A=Am(a,a.FRAGMENT_SHADER,R);a.attachShader(p,E),a.attachShader(p,A),t.index0AttributeName!==void 0?a.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(p,0,"position"),a.linkProgram(p);function U(W){if(n.debug.checkShaderErrors){const oe=a.getProgramInfoLog(p).trim(),O=a.getShaderInfoLog(E).trim(),q=a.getShaderInfoLog(A).trim();let $=!0,K=!0;if(a.getProgramParameter(p,a.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,p,E,A);else{const B=Tm(a,E,"vertex"),Q=Tm(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(p,a.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+B+`
`+Q)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(O===""||q==="")&&(K=!1);K&&(W.diagnostics={runnable:$,programLog:oe,vertexShader:{log:O,prefix:h},fragmentShader:{log:q,prefix:_}})}a.deleteShader(E),a.deleteShader(A),M=new Ql(a,p),w=ME(a,p)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=a.getProgramParameter(p,pE)),V},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=A,this}let kE=0;class OE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(a)===!1&&(o.add(a),a.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new UE(e),t.set(e,i)),i}}class UE{constructor(e){this.id=kE++,this.code=e,this.usedTimes=0}}function FE(n,e,t,i,a,s,o){const r=new fy,l=new OE,c=[],d=a.isWebGL2,u=a.logarithmicDepthBuffer,f=a.vertexTextures;let m=a.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function p(M,w,V,W,oe){const O=W.fog,q=oe.geometry,$=M.isMeshStandardMaterial?W.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),B=K&&K.mapping===md?K.image.height:null,Q=y[M.type];M.precision!==null&&(m=a.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const le=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ue=le!==void 0?le.length:0;let xe=0;q.morphAttributes.position!==void 0&&(xe=1),q.morphAttributes.normal!==void 0&&(xe=2),q.morphAttributes.color!==void 0&&(xe=3);let te,k,D,C;if(Q){const ln=di[Q];te=ln.vertexShader,k=ln.fragmentShader}else te=M.vertexShader,k=M.fragmentShader,l.update(M),D=l.getVertexShaderID(M),C=l.getFragmentShaderID(M);const T=n.getRenderTarget(),ee=oe.isInstancedMesh===!0,ce=oe.isBatchedMesh===!0,X=!!M.map,he=!!M.matcap,P=!!K,ie=!!M.aoMap,z=!!M.lightMap,Y=!!M.bumpMap,j=!!M.normalMap,pe=!!M.displacementMap,F=!!M.emissiveMap,x=!!M.metalnessMap,S=!!M.roughnessMap,G=M.anisotropy>0,ge=M.clearcoat>0,ye=M.iridescence>0,de=M.sheen>0,Re=M.transmission>0,_e=G&&!!M.anisotropyMap,Ce=ge&&!!M.clearcoatMap,Ne=ge&&!!M.clearcoatNormalMap,Fe=ge&&!!M.clearcoatRoughnessMap,ve=ye&&!!M.iridescenceMap,Qe=ye&&!!M.iridescenceThicknessMap,qe=de&&!!M.sheenColorMap,ze=de&&!!M.sheenRoughnessMap,De=!!M.specularMap,Pe=!!M.specularColorMap,Xe=!!M.specularIntensityMap,it=Re&&!!M.transmissionMap,_t=Re&&!!M.thicknessMap,Ke=!!M.gradientMap,be=!!M.alphaMap,H=M.alphaTest>0,Me=!!M.alphaHash,we=!!M.extensions,Ue=!!q.attributes.uv1,ke=!!q.attributes.uv2,rt=!!q.attributes.uv3;let lt=da;return M.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(lt=n.toneMapping),{isWebGL2:d,shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:te,fragmentShader:k,defines:M.defines,customVertexShaderID:D,customFragmentShaderID:C,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:ce,instancing:ee,instancingColor:ee&&oe.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:T===null?n.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Bi,map:X,matcap:he,envMap:P,envMapMode:P&&K.mapping,envMapCubeUVHeight:B,aoMap:ie,lightMap:z,bumpMap:Y,normalMap:j,displacementMap:f&&pe,emissiveMap:F,normalMapObjectSpace:j&&M.normalMapType===Db,normalMapTangentSpace:j&&M.normalMapType===ry,metalnessMap:x,roughnessMap:S,anisotropy:G,anisotropyMap:_e,clearcoat:ge,clearcoatMap:Ce,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Fe,iridescence:ye,iridescenceMap:ve,iridescenceThicknessMap:Qe,sheen:de,sheenColorMap:qe,sheenRoughnessMap:ze,specularMap:De,specularColorMap:Pe,specularIntensityMap:Xe,transmission:Re,transmissionMap:it,thicknessMap:_t,gradientMap:Ke,opaque:M.transparent===!1&&M.blending===Qs,alphaMap:be,alphaTest:H,alphaHash:Me,combine:M.combine,mapUv:X&&v(M.map.channel),aoMapUv:ie&&v(M.aoMap.channel),lightMapUv:z&&v(M.lightMap.channel),bumpMapUv:Y&&v(M.bumpMap.channel),normalMapUv:j&&v(M.normalMap.channel),displacementMapUv:pe&&v(M.displacementMap.channel),emissiveMapUv:F&&v(M.emissiveMap.channel),metalnessMapUv:x&&v(M.metalnessMap.channel),roughnessMapUv:S&&v(M.roughnessMap.channel),anisotropyMapUv:_e&&v(M.anisotropyMap.channel),clearcoatMapUv:Ce&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&v(M.sheenRoughnessMap.channel),specularMapUv:De&&v(M.specularMap.channel),specularColorMapUv:Pe&&v(M.specularColorMap.channel),specularIntensityMapUv:Xe&&v(M.specularIntensityMap.channel),transmissionMapUv:it&&v(M.transmissionMap.channel),thicknessMapUv:_t&&v(M.thicknessMap.channel),alphaMapUv:be&&v(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(j||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:ke,vertexUv3s:rt,pointsUvs:oe.isPoints===!0&&!!q.attributes.uv&&(X||be),fog:!!O,useFog:M.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:oe.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:xe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:X&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===ht,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jt,flipSided:M.side===Sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:we&&M.extensions.derivatives===!0,extensionFragDepth:we&&M.extensions.fragDepth===!0,extensionDrawBuffers:we&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)w.push(V),w.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(_(w,M),g(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function g(M,w){r.disableAll(),w.isWebGL2&&r.enable(0),w.supportsVertexTextures&&r.enable(1),w.instancing&&r.enable(2),w.instancingColor&&r.enable(3),w.matcap&&r.enable(4),w.envMap&&r.enable(5),w.normalMapObjectSpace&&r.enable(6),w.normalMapTangentSpace&&r.enable(7),w.clearcoat&&r.enable(8),w.iridescence&&r.enable(9),w.alphaTest&&r.enable(10),w.vertexColors&&r.enable(11),w.vertexAlphas&&r.enable(12),w.vertexUv1s&&r.enable(13),w.vertexUv2s&&r.enable(14),w.vertexUv3s&&r.enable(15),w.vertexTangents&&r.enable(16),w.anisotropy&&r.enable(17),w.alphaHash&&r.enable(18),w.batching&&r.enable(19),M.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.skinning&&r.enable(4),w.morphTargets&&r.enable(5),w.morphNormals&&r.enable(6),w.morphColors&&r.enable(7),w.premultipliedAlpha&&r.enable(8),w.shadowMapEnabled&&r.enable(9),w.useLegacyLights&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),M.push(r.mask)}function b(M){const w=y[M.type];let V;if(w){const W=di[w];V=_S.clone(W.uniforms)}else V=M.uniforms;return V}function R(M,w){let V;for(let W=0,oe=c.length;W<oe;W++){const O=c[W];if(O.cacheKey===w){V=O,++V.usedTimes;break}}return V===void 0&&(V=new DE(n,w,M,s),c.push(V)),V}function E(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:U}}function zE(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,r){n.get(s)[o]=r}function a(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:a}}function BE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Im(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nm(){const n=[];let e=0;const t=[],i=[],a=[];function s(){e=0,t.length=0,i.length=0,a.length=0}function o(u,f,m,y,v,p){let h=n[e];return h===void 0?(h={id:u.id,object:u,geometry:f,material:m,groupOrder:y,renderOrder:u.renderOrder,z:v,group:p},n[e]=h):(h.id=u.id,h.object=u,h.geometry=f,h.material=m,h.groupOrder=y,h.renderOrder=u.renderOrder,h.z=v,h.group=p),e++,h}function r(u,f,m,y,v,p){const h=o(u,f,m,y,v,p);m.transmission>0?i.push(h):m.transparent===!0?a.push(h):t.push(h)}function l(u,f,m,y,v,p){const h=o(u,f,m,y,v,p);m.transmission>0?i.unshift(h):m.transparent===!0?a.unshift(h):t.unshift(h)}function c(u,f){t.length>1&&t.sort(u||BE),i.length>1&&i.sort(f||Im),a.length>1&&a.sort(f||Im)}function d(){for(let u=e,f=n.length;u<f;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:a,init:s,push:r,unshift:l,finish:d,sort:c}}function HE(){let n=new WeakMap;function e(i,a){const s=n.get(i);let o;return s===void 0?(o=new Nm,n.set(i,[o])):a>=s.length?(o=new Nm,s.push(o)):o=s[a],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function GE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ae};break;case"SpotLight":t={position:new N,direction:new N,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function VE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let WE=0;function qE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function XE(n,e){const t=new GE,i=VE(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new N);const s=new N,o=new Je,r=new Je;function l(d,u){let f=0,m=0,y=0;for(let W=0;W<9;W++)a.probe[W].set(0,0,0);let v=0,p=0,h=0,_=0,g=0,b=0,R=0,E=0,A=0,U=0,M=0;d.sort(qE);const w=u===!0?Math.PI:1;for(let W=0,oe=d.length;W<oe;W++){const O=d[W],q=O.color,$=O.intensity,K=O.distance,B=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=q.r*$*w,m+=q.g*$*w,y+=q.b*$*w;else if(O.isLightProbe){for(let Q=0;Q<9;Q++)a.probe[Q].addScaledVector(O.sh.coefficients[Q],$);M++}else if(O.isDirectionalLight){const Q=t.get(O);if(Q.color.copy(O.color).multiplyScalar(O.intensity*w),O.castShadow){const le=O.shadow,ue=i.get(O);ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,a.directionalShadow[v]=ue,a.directionalShadowMap[v]=B,a.directionalShadowMatrix[v]=O.shadow.matrix,b++}a.directional[v]=Q,v++}else if(O.isSpotLight){const Q=t.get(O);Q.position.setFromMatrixPosition(O.matrixWorld),Q.color.copy(q).multiplyScalar($*w),Q.distance=K,Q.coneCos=Math.cos(O.angle),Q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Q.decay=O.decay,a.spot[h]=Q;const le=O.shadow;if(O.map&&(a.spotLightMap[A]=O.map,A++,le.updateMatrices(O),O.castShadow&&U++),a.spotLightMatrix[h]=le.matrix,O.castShadow){const ue=i.get(O);ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,a.spotShadow[h]=ue,a.spotShadowMap[h]=B,E++}h++}else if(O.isRectAreaLight){const Q=t.get(O);Q.color.copy(q).multiplyScalar($),Q.halfWidth.set(O.width*.5,0,0),Q.halfHeight.set(0,O.height*.5,0),a.rectArea[_]=Q,_++}else if(O.isPointLight){const Q=t.get(O);if(Q.color.copy(O.color).multiplyScalar(O.intensity*w),Q.distance=O.distance,Q.decay=O.decay,O.castShadow){const le=O.shadow,ue=i.get(O);ue.shadowBias=le.bias,ue.shadowNormalBias=le.normalBias,ue.shadowRadius=le.radius,ue.shadowMapSize=le.mapSize,ue.shadowCameraNear=le.camera.near,ue.shadowCameraFar=le.camera.far,a.pointShadow[p]=ue,a.pointShadowMap[p]=B,a.pointShadowMatrix[p]=O.shadow.matrix,R++}a.point[p]=Q,p++}else if(O.isHemisphereLight){const Q=t.get(O);Q.skyColor.copy(O.color).multiplyScalar($*w),Q.groundColor.copy(O.groundColor).multiplyScalar($*w),a.hemi[g]=Q,g++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Se.LTC_FLOAT_1,a.rectAreaLTC2=Se.LTC_FLOAT_2):(a.rectAreaLTC1=Se.LTC_HALF_1,a.rectAreaLTC2=Se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Se.LTC_FLOAT_1,a.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(a.rectAreaLTC1=Se.LTC_HALF_1,a.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),a.ambient[0]=f,a.ambient[1]=m,a.ambient[2]=y;const V=a.hash;(V.directionalLength!==v||V.pointLength!==p||V.spotLength!==h||V.rectAreaLength!==_||V.hemiLength!==g||V.numDirectionalShadows!==b||V.numPointShadows!==R||V.numSpotShadows!==E||V.numSpotMaps!==A||V.numLightProbes!==M)&&(a.directional.length=v,a.spot.length=h,a.rectArea.length=_,a.point.length=p,a.hemi.length=g,a.directionalShadow.length=b,a.directionalShadowMap.length=b,a.pointShadow.length=R,a.pointShadowMap.length=R,a.spotShadow.length=E,a.spotShadowMap.length=E,a.directionalShadowMatrix.length=b,a.pointShadowMatrix.length=R,a.spotLightMatrix.length=E+A-U,a.spotLightMap.length=A,a.numSpotLightShadowsWithMaps=U,a.numLightProbes=M,V.directionalLength=v,V.pointLength=p,V.spotLength=h,V.rectAreaLength=_,V.hemiLength=g,V.numDirectionalShadows=b,V.numPointShadows=R,V.numSpotShadows=E,V.numSpotMaps=A,V.numLightProbes=M,a.version=WE++)}function c(d,u){let f=0,m=0,y=0,v=0,p=0;const h=u.matrixWorldInverse;for(let _=0,g=d.length;_<g;_++){const b=d[_];if(b.isDirectionalLight){const R=a.directional[f];R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(h),f++}else if(b.isSpotLight){const R=a.spot[y];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(h),y++}else if(b.isRectAreaLight){const R=a.rectArea[v];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),r.identity(),o.copy(b.matrixWorld),o.premultiply(h),r.extractRotation(o),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(r),R.halfHeight.applyMatrix4(r),v++}else if(b.isPointLight){const R=a.point[m];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){const R=a.hemi[p];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:a}}function Dm(n,e){const t=new XE(n,e),i=[],a=[];function s(){i.length=0,a.length=0}function o(u){i.push(u)}function r(u){a.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:a,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:r}}function jE(n,e){let t=new WeakMap;function i(s,o=0){const r=t.get(s);let l;return r===void 0?(l=new Dm(n,e),t.set(s,[l])):o>=r.length?(l=new Dm(n,e),r.push(l)):l=r[o],l}function a(){t=new WeakMap}return{get:i,dispose:a}}class $E extends ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ib,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YE extends ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const KE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JE(n,e,t){let i=new gf;const a=new me,s=new me,o=new $t,r=new $E({depthPacking:Nb}),l=new YE,c={},d=t.maxTextureSize,u={[ma]:Sn,[Sn]:ma,[Jt]:Jt},f=new ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:KE,fragmentShader:ZE}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const y=new xt;y.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new nt(y,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Z0;let h=this.type;this.render=function(E,A,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const M=n.getRenderTarget(),w=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),W=n.state;W.setBlending(ca),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const oe=h!==Ci&&this.type===Ci,O=h===Ci&&this.type!==Ci;for(let q=0,$=E.length;q<$;q++){const K=E[q],B=K.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const Q=B.getFrameExtents();if(a.multiply(Q),s.copy(B.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(s.x=Math.floor(d/Q.x),a.x=s.x*Q.x,B.mapSize.x=s.x),a.y>d&&(s.y=Math.floor(d/Q.y),a.y=s.y*Q.y,B.mapSize.y=s.y)),B.map===null||oe===!0||O===!0){const ue=this.type!==Ci?{minFilter:mn,magFilter:mn}:{};B.map!==null&&B.map.dispose(),B.map=new as(a.x,a.y,ue),B.map.texture.name=K.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const le=B.getViewportCount();for(let ue=0;ue<le;ue++){const xe=B.getViewport(ue);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),W.viewport(o),B.updateMatrices(K,ue),i=B.getFrustum(),b(A,U,B.camera,K,this.type)}B.isPointLightShadow!==!0&&this.type===Ci&&_(B,U),B.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(M,w,V)};function _(E,A){const U=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new as(a.x,a.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,U,f,v,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,U,m,v,null)}function g(E,A,U,M){let w=null;const V=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(V!==void 0)w=V;else if(w=U.isPointLight===!0?l:r,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=w.uuid,oe=A.uuid;let O=c[W];O===void 0&&(O={},c[W]=O);let q=O[oe];q===void 0&&(q=w.clone(),O[oe]=q,A.addEventListener("dispose",R)),w=q}if(w.visible=A.visible,w.wireframe=A.wireframe,M===Ci?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const W=n.properties.get(w);W.light=U}return w}function b(E,A,U,M,w){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Ci)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);const oe=e.update(E),O=E.material;if(Array.isArray(O)){const q=oe.groups;for(let $=0,K=q.length;$<K;$++){const B=q[$],Q=O[B.materialIndex];if(Q&&Q.visible){const le=g(E,Q,M,w);E.onBeforeShadow(n,E,A,U,oe,le,B),n.renderBufferDirect(U,null,oe,le,E,B),E.onAfterShadow(n,E,A,U,oe,le,B)}}}else if(O.visible){const q=g(E,O,M,w);E.onBeforeShadow(n,E,A,U,oe,q,null),n.renderBufferDirect(U,null,oe,q,E,null),E.onAfterShadow(n,E,A,U,oe,q,null)}}const W=E.children;for(let oe=0,O=W.length;oe<O;oe++)b(W[oe],A,U,M,w)}function R(E){E.target.removeEventListener("dispose",R);for(const U in c){const M=c[U],w=E.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function QE(n,e,t){const i=t.isWebGL2;function a(){let H=!1;const Me=new $t;let we=null;const Ue=new $t(0,0,0,0);return{setMask:function(ke){we!==ke&&!H&&(n.colorMask(ke,ke,ke,ke),we=ke)},setLocked:function(ke){H=ke},setClear:function(ke,rt,lt,Gt,ln){ln===!0&&(ke*=Gt,rt*=Gt,lt*=Gt),Me.set(ke,rt,lt,Gt),Ue.equals(Me)===!1&&(n.clearColor(ke,rt,lt,Gt),Ue.copy(Me))},reset:function(){H=!1,we=null,Ue.set(-1,0,0,0)}}}function s(){let H=!1,Me=null,we=null,Ue=null;return{setTest:function(ke){ke?ce(n.DEPTH_TEST):X(n.DEPTH_TEST)},setMask:function(ke){Me!==ke&&!H&&(n.depthMask(ke),Me=ke)},setFunc:function(ke){if(we!==ke){switch(ke){case lb:n.depthFunc(n.NEVER);break;case cb:n.depthFunc(n.ALWAYS);break;case db:n.depthFunc(n.LESS);break;case bc:n.depthFunc(n.LEQUAL);break;case ub:n.depthFunc(n.EQUAL);break;case hb:n.depthFunc(n.GEQUAL);break;case fb:n.depthFunc(n.GREATER);break;case pb:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=ke}},setLocked:function(ke){H=ke},setClear:function(ke){Ue!==ke&&(n.clearDepth(ke),Ue=ke)},reset:function(){H=!1,Me=null,we=null,Ue=null}}}function o(){let H=!1,Me=null,we=null,Ue=null,ke=null,rt=null,lt=null,Gt=null,ln=null;return{setTest:function(ct){H||(ct?ce(n.STENCIL_TEST):X(n.STENCIL_TEST))},setMask:function(ct){Me!==ct&&!H&&(n.stencilMask(ct),Me=ct)},setFunc:function(ct,cn,ri){(we!==ct||Ue!==cn||ke!==ri)&&(n.stencilFunc(ct,cn,ri),we=ct,Ue=cn,ke=ri)},setOp:function(ct,cn,ri){(rt!==ct||lt!==cn||Gt!==ri)&&(n.stencilOp(ct,cn,ri),rt=ct,lt=cn,Gt=ri)},setLocked:function(ct){H=ct},setClear:function(ct){ln!==ct&&(n.clearStencil(ct),ln=ct)},reset:function(){H=!1,Me=null,we=null,Ue=null,ke=null,rt=null,lt=null,Gt=null,ln=null}}}const r=new a,l=new s,c=new o,d=new WeakMap,u=new WeakMap;let f={},m={},y=new WeakMap,v=[],p=null,h=!1,_=null,g=null,b=null,R=null,E=null,A=null,U=null,M=new Ae(0,0,0),w=0,V=!1,W=null,oe=null,O=null,q=null,$=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Q=0;const le=n.getParameter(n.VERSION);le.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(le)[1]),B=Q>=1):le.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),B=Q>=2);let ue=null,xe={};const te=n.getParameter(n.SCISSOR_BOX),k=n.getParameter(n.VIEWPORT),D=new $t().fromArray(te),C=new $t().fromArray(k);function T(H,Me,we,Ue){const ke=new Uint8Array(4),rt=n.createTexture();n.bindTexture(H,rt),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let lt=0;lt<we;lt++)i&&(H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY)?n.texImage3D(Me,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(Me+lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return rt}const ee={};ee[n.TEXTURE_2D]=T(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=T(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ee[n.TEXTURE_2D_ARRAY]=T(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=T(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ce(n.DEPTH_TEST),l.setFunc(bc),F(!1),x(gp),ce(n.CULL_FACE),j(ca);function ce(H){f[H]!==!0&&(n.enable(H),f[H]=!0)}function X(H){f[H]!==!1&&(n.disable(H),f[H]=!1)}function he(H,Me){return m[H]!==Me?(n.bindFramebuffer(H,Me),m[H]=Me,i&&(H===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Me),H===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Me)),!0):!1}function P(H,Me){let we=v,Ue=!1;if(H)if(we=y.get(Me),we===void 0&&(we=[],y.set(Me,we)),H.isWebGLMultipleRenderTargets){const ke=H.texture;if(we.length!==ke.length||we[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,lt=ke.length;rt<lt;rt++)we[rt]=n.COLOR_ATTACHMENT0+rt;we.length=ke.length,Ue=!0}}else we[0]!==n.COLOR_ATTACHMENT0&&(we[0]=n.COLOR_ATTACHMENT0,Ue=!0);else we[0]!==n.BACK&&(we[0]=n.BACK,Ue=!0);Ue&&(t.isWebGL2?n.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function ie(H){return p!==H?(n.useProgram(H),p=H,!0):!1}const z={[Da]:n.FUNC_ADD,[j_]:n.FUNC_SUBTRACT,[$_]:n.FUNC_REVERSE_SUBTRACT};if(i)z[xp]=n.MIN,z[_p]=n.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(z[xp]=H.MIN_EXT,z[_p]=H.MAX_EXT)}const Y={[Y_]:n.ZERO,[K_]:n.ONE,[Z_]:n.SRC_COLOR,[eh]:n.SRC_ALPHA,[ib]:n.SRC_ALPHA_SATURATE,[tb]:n.DST_COLOR,[Q_]:n.DST_ALPHA,[J_]:n.ONE_MINUS_SRC_COLOR,[th]:n.ONE_MINUS_SRC_ALPHA,[nb]:n.ONE_MINUS_DST_COLOR,[eb]:n.ONE_MINUS_DST_ALPHA,[ab]:n.CONSTANT_COLOR,[sb]:n.ONE_MINUS_CONSTANT_COLOR,[ob]:n.CONSTANT_ALPHA,[rb]:n.ONE_MINUS_CONSTANT_ALPHA};function j(H,Me,we,Ue,ke,rt,lt,Gt,ln,ct){if(H===ca){h===!0&&(X(n.BLEND),h=!1);return}if(h===!1&&(ce(n.BLEND),h=!0),H!==X_){if(H!==_||ct!==V){if((g!==Da||E!==Da)&&(n.blendEquation(n.FUNC_ADD),g=Da,E=Da),ct)switch(H){case Qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFunc(n.ONE,n.ONE);break;case yp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _c:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case yp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,R=null,A=null,U=null,M.set(0,0,0),w=0,_=H,V=ct}return}ke=ke||Me,rt=rt||we,lt=lt||Ue,(Me!==g||ke!==E)&&(n.blendEquationSeparate(z[Me],z[ke]),g=Me,E=ke),(we!==b||Ue!==R||rt!==A||lt!==U)&&(n.blendFuncSeparate(Y[we],Y[Ue],Y[rt],Y[lt]),b=we,R=Ue,A=rt,U=lt),(Gt.equals(M)===!1||ln!==w)&&(n.blendColor(Gt.r,Gt.g,Gt.b,ln),M.copy(Gt),w=ln),_=H,V=!1}function pe(H,Me){H.side===Jt?X(n.CULL_FACE):ce(n.CULL_FACE);let we=H.side===Sn;Me&&(we=!we),F(we),H.blending===Qs&&H.transparent===!1?j(ca):j(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),r.setMask(H.colorWrite);const Ue=H.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),G(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):X(n.SAMPLE_ALPHA_TO_COVERAGE)}function F(H){W!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),W=H)}function x(H){H!==V_?(ce(n.CULL_FACE),H!==oe&&(H===gp?n.cullFace(n.BACK):H===W_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):X(n.CULL_FACE),oe=H}function S(H){H!==O&&(B&&n.lineWidth(H),O=H)}function G(H,Me,we){H?(ce(n.POLYGON_OFFSET_FILL),(q!==Me||$!==we)&&(n.polygonOffset(Me,we),q=Me,$=we)):X(n.POLYGON_OFFSET_FILL)}function ge(H){H?ce(n.SCISSOR_TEST):X(n.SCISSOR_TEST)}function ye(H){H===void 0&&(H=n.TEXTURE0+K-1),ue!==H&&(n.activeTexture(H),ue=H)}function de(H,Me,we){we===void 0&&(ue===null?we=n.TEXTURE0+K-1:we=ue);let Ue=xe[we];Ue===void 0&&(Ue={type:void 0,texture:void 0},xe[we]=Ue),(Ue.type!==H||Ue.texture!==Me)&&(ue!==we&&(n.activeTexture(we),ue=we),n.bindTexture(H,Me||ee[H]),Ue.type=H,Ue.texture=Me)}function Re(){const H=xe[ue];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function _e(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(H){D.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),D.copy(H))}function it(H){C.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),C.copy(H))}function _t(H,Me){let we=u.get(Me);we===void 0&&(we=new WeakMap,u.set(Me,we));let Ue=we.get(H);Ue===void 0&&(Ue=n.getUniformBlockIndex(Me,H.name),we.set(H,Ue))}function Ke(H,Me){const Ue=u.get(Me).get(H);d.get(Me)!==Ue&&(n.uniformBlockBinding(Me,Ue,H.__bindingPointIndex),d.set(Me,Ue))}function be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ue=null,xe={},m={},y=new WeakMap,v=[],p=null,h=!1,_=null,g=null,b=null,R=null,E=null,A=null,U=null,M=new Ae(0,0,0),w=0,V=!1,W=null,oe=null,O=null,q=null,$=null,D.set(0,0,n.canvas.width,n.canvas.height),C.set(0,0,n.canvas.width,n.canvas.height),r.reset(),l.reset(),c.reset()}return{buffers:{color:r,depth:l,stencil:c},enable:ce,disable:X,bindFramebuffer:he,drawBuffers:P,useProgram:ie,setBlending:j,setMaterial:pe,setFlipSided:F,setCullFace:x,setLineWidth:S,setPolygonOffset:G,setScissorTest:ge,activeTexture:ye,bindTexture:de,unbindTexture:Re,compressedTexImage2D:_e,compressedTexImage3D:Ce,texImage2D:De,texImage3D:Pe,updateUBOMapping:_t,uniformBlockBinding:Ke,texStorage2D:qe,texStorage3D:ze,texSubImage2D:Ne,texSubImage3D:Fe,compressedTexSubImage2D:ve,compressedTexSubImage3D:Qe,scissor:Xe,viewport:it,reset:be}}function eA(n,e,t,i,a,s,o){const r=a.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(x,S){return m?new OffscreenCanvas(x,S):Tc("canvas")}function v(x,S,G,ge){let ye=1;if((x.width>ge||x.height>ge)&&(ye=ge/Math.max(x.width,x.height)),ye<1||S===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const de=S?Ac:Math.floor,Re=de(ye*x.width),_e=de(ye*x.height);u===void 0&&(u=y(Re,_e));const Ce=G?y(Re,_e):u;return Ce.width=Re,Ce.height=_e,Ce.getContext("2d").drawImage(x,0,0,Re,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+Re+"x"+_e+")."),Ce}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function p(x){return rh(x.width)&&rh(x.height)}function h(x){return r?!1:x.wrapS!==Qn||x.wrapT!==Qn||x.minFilter!==mn&&x.minFilter!==Un}function _(x,S){return x.generateMipmaps&&S&&x.minFilter!==mn&&x.minFilter!==Un}function g(x){n.generateMipmap(x)}function b(x,S,G,ge,ye=!1){if(r===!1)return S;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let de=S;if(S===n.RED&&(G===n.FLOAT&&(de=n.R32F),G===n.HALF_FLOAT&&(de=n.R16F),G===n.UNSIGNED_BYTE&&(de=n.R8)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(de=n.R8UI),G===n.UNSIGNED_SHORT&&(de=n.R16UI),G===n.UNSIGNED_INT&&(de=n.R32UI),G===n.BYTE&&(de=n.R8I),G===n.SHORT&&(de=n.R16I),G===n.INT&&(de=n.R32I)),S===n.RG&&(G===n.FLOAT&&(de=n.RG32F),G===n.HALF_FLOAT&&(de=n.RG16F),G===n.UNSIGNED_BYTE&&(de=n.RG8)),S===n.RGBA){const Re=ye?Sc:st.getTransfer(ge);G===n.FLOAT&&(de=n.RGBA32F),G===n.HALF_FLOAT&&(de=n.RGBA16F),G===n.UNSIGNED_BYTE&&(de=Re===ht?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(x,S,G){return _(x,G)===!0||x.isFramebufferTexture&&x.minFilter!==mn&&x.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?S.mipmaps.length:1}function E(x){return x===mn||x===bp||x===Gd?n.NEAREST:n.LINEAR}function A(x){const S=x.target;S.removeEventListener("dispose",A),M(S),S.isVideoTexture&&d.delete(S)}function U(x){const S=x.target;S.removeEventListener("dispose",U),V(S)}function M(x){const S=i.get(x);if(S.__webglInit===void 0)return;const G=x.source,ge=f.get(G);if(ge){const ye=ge[S.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&w(x),Object.keys(ge).length===0&&f.delete(G)}i.remove(x)}function w(x){const S=i.get(x);n.deleteTexture(S.__webglTexture);const G=x.source,ge=f.get(G);delete ge[S.__cacheKey],o.memory.textures--}function V(x){const S=x.texture,G=i.get(x),ge=i.get(S);if(ge.__webglTexture!==void 0&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(G.__webglFramebuffer[ye]))for(let de=0;de<G.__webglFramebuffer[ye].length;de++)n.deleteFramebuffer(G.__webglFramebuffer[ye][de]);else n.deleteFramebuffer(G.__webglFramebuffer[ye]);G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[ye])}else{if(Array.isArray(G.__webglFramebuffer))for(let ye=0;ye<G.__webglFramebuffer.length;ye++)n.deleteFramebuffer(G.__webglFramebuffer[ye]);else n.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ye=0;ye<G.__webglColorRenderbuffer.length;ye++)G.__webglColorRenderbuffer[ye]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[ye]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let ye=0,de=S.length;ye<de;ye++){const Re=i.get(S[ye]);Re.__webglTexture&&(n.deleteTexture(Re.__webglTexture),o.memory.textures--),i.remove(S[ye])}i.remove(S),i.remove(x)}let W=0;function oe(){W=0}function O(){const x=W;return x>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+a.maxTextures),W+=1,x}function q(x){const S=[];return S.push(x.wrapS),S.push(x.wrapT),S.push(x.wrapR||0),S.push(x.magFilter),S.push(x.minFilter),S.push(x.anisotropy),S.push(x.internalFormat),S.push(x.format),S.push(x.type),S.push(x.generateMipmaps),S.push(x.premultiplyAlpha),S.push(x.flipY),S.push(x.unpackAlignment),S.push(x.colorSpace),S.join()}function $(x,S){const G=i.get(x);if(x.isVideoTexture&&pe(x),x.isRenderTargetTexture===!1&&x.version>0&&G.__version!==x.version){const ge=x.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(G,x,S);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function K(x,S){const G=i.get(x);if(x.version>0&&G.__version!==x.version){D(G,x,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function B(x,S){const G=i.get(x);if(x.version>0&&G.__version!==x.version){D(G,x,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function Q(x,S){const G=i.get(x);if(x.version>0&&G.__version!==x.version){C(G,x,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const le={[ah]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[sh]:n.MIRRORED_REPEAT},ue={[mn]:n.NEAREST,[bp]:n.NEAREST_MIPMAP_NEAREST,[Gd]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[Mb]:n.LINEAR_MIPMAP_NEAREST,[Lr]:n.LINEAR_MIPMAP_LINEAR},xe={[kb]:n.NEVER,[Hb]:n.ALWAYS,[Ob]:n.LESS,[ly]:n.LEQUAL,[Ub]:n.EQUAL,[Bb]:n.GEQUAL,[Fb]:n.GREATER,[zb]:n.NOTEQUAL};function te(x,S,G){if(G?(n.texParameteri(x,n.TEXTURE_WRAP_S,le[S.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,le[S.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,le[S.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ue[S.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ue[S.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==Qn||S.wrapT!==Qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,E(S.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,E(S.minFilter)),S.minFilter!==mn&&S.minFilter!==Un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ge=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===mn||S.minFilter!==Gd&&S.minFilter!==Lr||S.type===ta&&e.has("OES_texture_float_linear")===!1||r===!1&&S.type===Pr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(x,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,a.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function k(x,S){let G=!1;x.__webglInit===void 0&&(x.__webglInit=!0,S.addEventListener("dispose",A));const ge=S.source;let ye=f.get(ge);ye===void 0&&(ye={},f.set(ge,ye));const de=q(S);if(de!==x.__cacheKey){ye[de]===void 0&&(ye[de]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ye[de].usedTimes++;const Re=ye[x.__cacheKey];Re!==void 0&&(ye[x.__cacheKey].usedTimes--,Re.usedTimes===0&&w(S)),x.__cacheKey=de,x.__webglTexture=ye[de].texture}return G}function D(x,S,G){let ge=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ge=n.TEXTURE_3D);const ye=k(x,S),de=S.source;t.bindTexture(ge,x.__webglTexture,n.TEXTURE0+G);const Re=i.get(de);if(de.version!==Re.__version||ye===!0){t.activeTexture(n.TEXTURE0+G);const _e=st.getPrimaries(st.workingColorSpace),Ce=S.colorSpace===Bn?null:st.getPrimaries(S.colorSpace),Ne=S.colorSpace===Bn||_e===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Fe=h(S)&&p(S.image)===!1;let ve=v(S.image,Fe,!1,a.maxTextureSize);ve=F(S,ve);const Qe=p(ve)||r,qe=s.convert(S.format,S.colorSpace);let ze=s.convert(S.type),De=b(S.internalFormat,qe,ze,S.colorSpace,S.isVideoTexture);te(ge,S,Qe);let Pe;const Xe=S.mipmaps,it=r&&S.isVideoTexture!==!0&&De!==sy,_t=Re.__version===void 0||ye===!0,Ke=R(S,ve,Qe);if(S.isDepthTexture)De=n.DEPTH_COMPONENT,r?S.type===ta?De=n.DEPTH_COMPONENT32F:S.type===ea?De=n.DEPTH_COMPONENT24:S.type===$a?De=n.DEPTH24_STENCIL8:De=n.DEPTH_COMPONENT16:S.type===ta&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Ya&&De===n.DEPTH_COMPONENT&&S.type!==hf&&S.type!==ea&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ea,ze=s.convert(S.type)),S.format===vo&&De===n.DEPTH_COMPONENT&&(De=n.DEPTH_STENCIL,S.type!==$a&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=$a,ze=s.convert(S.type))),_t&&(it?t.texStorage2D(n.TEXTURE_2D,1,De,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,De,ve.width,ve.height,0,qe,ze,null));else if(S.isDataTexture)if(Xe.length>0&&Qe){it&&_t&&t.texStorage2D(n.TEXTURE_2D,Ke,De,Xe[0].width,Xe[0].height);for(let be=0,H=Xe.length;be<H;be++)Pe=Xe[be],it?t.texSubImage2D(n.TEXTURE_2D,be,0,0,Pe.width,Pe.height,qe,ze,Pe.data):t.texImage2D(n.TEXTURE_2D,be,De,Pe.width,Pe.height,0,qe,ze,Pe.data);S.generateMipmaps=!1}else it?(_t&&t.texStorage2D(n.TEXTURE_2D,Ke,De,ve.width,ve.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve.width,ve.height,qe,ze,ve.data)):t.texImage2D(n.TEXTURE_2D,0,De,ve.width,ve.height,0,qe,ze,ve.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){it&&_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,De,Xe[0].width,Xe[0].height,ve.depth);for(let be=0,H=Xe.length;be<H;be++)Pe=Xe[be],S.format!==ei?qe!==null?it?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,Pe.width,Pe.height,ve.depth,qe,Pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,be,De,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,Pe.width,Pe.height,ve.depth,qe,ze,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,be,De,Pe.width,Pe.height,ve.depth,0,qe,ze,Pe.data)}else{it&&_t&&t.texStorage2D(n.TEXTURE_2D,Ke,De,Xe[0].width,Xe[0].height);for(let be=0,H=Xe.length;be<H;be++)Pe=Xe[be],S.format!==ei?qe!==null?it?t.compressedTexSubImage2D(n.TEXTURE_2D,be,0,0,Pe.width,Pe.height,qe,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,be,De,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage2D(n.TEXTURE_2D,be,0,0,Pe.width,Pe.height,qe,ze,Pe.data):t.texImage2D(n.TEXTURE_2D,be,De,Pe.width,Pe.height,0,qe,ze,Pe.data)}else if(S.isDataArrayTexture)it?(_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,De,ve.width,ve.height,ve.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,qe,ze,ve.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ve.width,ve.height,ve.depth,0,qe,ze,ve.data);else if(S.isData3DTexture)it?(_t&&t.texStorage3D(n.TEXTURE_3D,Ke,De,ve.width,ve.height,ve.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,qe,ze,ve.data)):t.texImage3D(n.TEXTURE_3D,0,De,ve.width,ve.height,ve.depth,0,qe,ze,ve.data);else if(S.isFramebufferTexture){if(_t)if(it)t.texStorage2D(n.TEXTURE_2D,Ke,De,ve.width,ve.height);else{let be=ve.width,H=ve.height;for(let Me=0;Me<Ke;Me++)t.texImage2D(n.TEXTURE_2D,Me,De,be,H,0,qe,ze,null),be>>=1,H>>=1}}else if(Xe.length>0&&Qe){it&&_t&&t.texStorage2D(n.TEXTURE_2D,Ke,De,Xe[0].width,Xe[0].height);for(let be=0,H=Xe.length;be<H;be++)Pe=Xe[be],it?t.texSubImage2D(n.TEXTURE_2D,be,0,0,qe,ze,Pe):t.texImage2D(n.TEXTURE_2D,be,De,qe,ze,Pe);S.generateMipmaps=!1}else it?(_t&&t.texStorage2D(n.TEXTURE_2D,Ke,De,ve.width,ve.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,qe,ze,ve)):t.texImage2D(n.TEXTURE_2D,0,De,qe,ze,ve);_(S,Qe)&&g(ge),Re.__version=de.version,S.onUpdate&&S.onUpdate(S)}x.__version=S.version}function C(x,S,G){if(S.image.length!==6)return;const ge=k(x,S),ye=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+G);const de=i.get(ye);if(ye.version!==de.__version||ge===!0){t.activeTexture(n.TEXTURE0+G);const Re=st.getPrimaries(st.workingColorSpace),_e=S.colorSpace===Bn?null:st.getPrimaries(S.colorSpace),Ce=S.colorSpace===Bn||Re===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ne=S.isCompressedTexture||S.image[0].isCompressedTexture,Fe=S.image[0]&&S.image[0].isDataTexture,ve=[];for(let be=0;be<6;be++)!Ne&&!Fe?ve[be]=v(S.image[be],!1,!0,a.maxCubemapSize):ve[be]=Fe?S.image[be].image:S.image[be],ve[be]=F(S,ve[be]);const Qe=ve[0],qe=p(Qe)||r,ze=s.convert(S.format,S.colorSpace),De=s.convert(S.type),Pe=b(S.internalFormat,ze,De,S.colorSpace),Xe=r&&S.isVideoTexture!==!0,it=de.__version===void 0||ge===!0;let _t=R(S,Qe,qe);te(n.TEXTURE_CUBE_MAP,S,qe);let Ke;if(Ne){Xe&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Pe,Qe.width,Qe.height);for(let be=0;be<6;be++){Ke=ve[be].mipmaps;for(let H=0;H<Ke.length;H++){const Me=Ke[H];S.format!==ei?ze!==null?Xe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,0,0,Me.width,Me.height,ze,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,Pe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,0,0,Me.width,Me.height,ze,De,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,Pe,Me.width,Me.height,0,ze,De,Me.data)}}}else{Ke=S.mipmaps,Xe&&it&&(Ke.length>0&&_t++,t.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Pe,ve[0].width,ve[0].height));for(let be=0;be<6;be++)if(Fe){Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ve[be].width,ve[be].height,ze,De,ve[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Pe,ve[be].width,ve[be].height,0,ze,De,ve[be].data);for(let H=0;H<Ke.length;H++){const we=Ke[H].image[be].image;Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,0,0,we.width,we.height,ze,De,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,Pe,we.width,we.height,0,ze,De,we.data)}}else{Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ze,De,ve[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Pe,ze,De,ve[be]);for(let H=0;H<Ke.length;H++){const Me=Ke[H];Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,0,0,ze,De,Me.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,Pe,ze,De,Me.image[be])}}}_(S,qe)&&g(n.TEXTURE_CUBE_MAP),de.__version=ye.version,S.onUpdate&&S.onUpdate(S)}x.__version=S.version}function T(x,S,G,ge,ye,de){const Re=s.convert(G.format,G.colorSpace),_e=s.convert(G.type),Ce=b(G.internalFormat,Re,_e,G.colorSpace);if(!i.get(S).__hasExternalTextures){const Fe=Math.max(1,S.width>>de),ve=Math.max(1,S.height>>de);ye===n.TEXTURE_3D||ye===n.TEXTURE_2D_ARRAY?t.texImage3D(ye,de,Ce,Fe,ve,S.depth,0,Re,_e,null):t.texImage2D(ye,de,Ce,Fe,ve,0,Re,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),j(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,ye,i.get(G).__webglTexture,0,Y(S)):(ye===n.TEXTURE_2D||ye>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,ye,i.get(G).__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(x,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,x),S.depthBuffer&&!S.stencilBuffer){let ge=r===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(G||j(S)){const ye=S.depthTexture;ye&&ye.isDepthTexture&&(ye.type===ta?ge=n.DEPTH_COMPONENT32F:ye.type===ea&&(ge=n.DEPTH_COMPONENT24));const de=Y(S);j(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,ge,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,de,ge,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,ge,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(S.depthBuffer&&S.stencilBuffer){const ge=Y(S);G&&j(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,S.width,S.height):j(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const ge=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ye=0;ye<ge.length;ye++){const de=ge[ye],Re=s.convert(de.format,de.colorSpace),_e=s.convert(de.type),Ce=b(de.internalFormat,Re,_e,de.colorSpace),Ne=Y(S);G&&j(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Ce,S.width,S.height):j(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,Ce,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(x,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const ge=i.get(S.depthTexture).__webglTexture,ye=Y(S);if(S.depthTexture.format===Ya)j(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(S.depthTexture.format===vo)j(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,ye):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function X(x){const S=i.get(x),G=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ce(S.__webglFramebuffer,x)}else if(G){S.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ge]),S.__webglDepthbuffer[ge]=n.createRenderbuffer(),ee(S.__webglDepthbuffer[ge],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),ee(S.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(x,S,G){const ge=i.get(x);S!==void 0&&T(ge.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&X(x)}function P(x){const S=x.texture,G=i.get(x),ge=i.get(S);x.addEventListener("dispose",U),x.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=S.version,o.memory.textures++);const ye=x.isWebGLCubeRenderTarget===!0,de=x.isWebGLMultipleRenderTargets===!0,Re=p(x)||r;if(ye){G.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(r&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[_e]=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)G.__webglFramebuffer[_e][Ce]=n.createFramebuffer()}else G.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(r&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let _e=0;_e<S.mipmaps.length;_e++)G.__webglFramebuffer[_e]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(de)if(a.drawBuffers){const _e=x.texture;for(let Ce=0,Ne=_e.length;Ce<Ne;Ce++){const Fe=i.get(_e[Ce]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&x.samples>0&&j(x)===!1){const _e=de?S:[S];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ce=0;Ce<_e.length;Ce++){const Ne=_e[Ce];G.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Ce]);const Fe=s.convert(Ne.format,Ne.colorSpace),ve=s.convert(Ne.type),Qe=b(Ne.internalFormat,Fe,ve,Ne.colorSpace,x.isXRRenderTarget===!0),qe=Y(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Qe,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,G.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(G.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ye){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),te(n.TEXTURE_CUBE_MAP,S,Re);for(let _e=0;_e<6;_e++)if(r&&S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)T(G.__webglFramebuffer[_e][Ce],x,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce);else T(G.__webglFramebuffer[_e],x,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);_(S,Re)&&g(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){const _e=x.texture;for(let Ce=0,Ne=_e.length;Ce<Ne;Ce++){const Fe=_e[Ce],ve=i.get(Fe);t.bindTexture(n.TEXTURE_2D,ve.__webglTexture),te(n.TEXTURE_2D,Fe,Re),T(G.__webglFramebuffer,x,Fe,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,0),_(Fe,Re)&&g(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(r?_e=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,ge.__webglTexture),te(_e,S,Re),r&&S.mipmaps&&S.mipmaps.length>0)for(let Ce=0;Ce<S.mipmaps.length;Ce++)T(G.__webglFramebuffer[Ce],x,S,n.COLOR_ATTACHMENT0,_e,Ce);else T(G.__webglFramebuffer,x,S,n.COLOR_ATTACHMENT0,_e,0);_(S,Re)&&g(_e),t.unbindTexture()}x.depthBuffer&&X(x)}function ie(x){const S=p(x)||r,G=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ge=0,ye=G.length;ge<ye;ge++){const de=G[ge];if(_(de,S)){const Re=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=i.get(de).__webglTexture;t.bindTexture(Re,_e),g(Re),t.unbindTexture()}}}function z(x){if(r&&x.samples>0&&j(x)===!1){const S=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],G=x.width,ge=x.height;let ye=n.COLOR_BUFFER_BIT;const de=[],Re=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(x),Ce=x.isWebGLMultipleRenderTargets===!0;if(Ce)for(let Ne=0;Ne<S.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ne=0;Ne<S.length;Ne++){de.push(n.COLOR_ATTACHMENT0+Ne),x.depthBuffer&&de.push(Re);const Fe=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(Fe===!1&&(x.depthBuffer&&(ye|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(ye|=n.STENCIL_BUFFER_BIT)),Ce&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ne]),Fe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Re]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Re])),Ce){const ve=i.get(S[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,G,ge,0,0,G,ge,ye,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ce)for(let Ne=0;Ne<S.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ne]);const Fe=i.get(S[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function Y(x){return Math.min(a.maxSamples,x.samples)}function j(x){const S=i.get(x);return r&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(x){const S=o.render.frame;d.get(x)!==S&&(d.set(x,S),x.update())}function F(x,S){const G=x.colorSpace,ge=x.format,ye=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===oh||G!==Bi&&G!==Bn&&(st.getTransfer(G)===ht?r===!1?e.has("EXT_sRGB")===!0&&ge===ei?(x.format=oh,x.minFilter=Un,x.generateMipmaps=!1):S=dy.sRGBToLinear(S):(ge!==ei||ye!==ua)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}this.allocateTextureUnit=O,this.resetTextureUnits=oe,this.setTexture2D=$,this.setTexture2DArray=K,this.setTexture3D=B,this.setTextureCube=Q,this.rebindTextures=he,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=T,this.useMultisampledRTT=j}function tA(n,e,t){const i=t.isWebGL2;function a(s,o=Bn){let r;const l=st.getTransfer(o);if(s===ua)return n.UNSIGNED_BYTE;if(s===ey)return n.UNSIGNED_SHORT_4_4_4_4;if(s===ty)return n.UNSIGNED_SHORT_5_5_5_1;if(s===wb)return n.BYTE;if(s===Eb)return n.SHORT;if(s===hf)return n.UNSIGNED_SHORT;if(s===Q0)return n.INT;if(s===ea)return n.UNSIGNED_INT;if(s===ta)return n.FLOAT;if(s===Pr)return i?n.HALF_FLOAT:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===Ab)return n.ALPHA;if(s===ei)return n.RGBA;if(s===Tb)return n.LUMINANCE;if(s===Rb)return n.LUMINANCE_ALPHA;if(s===Ya)return n.DEPTH_COMPONENT;if(s===vo)return n.DEPTH_STENCIL;if(s===oh)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===Cb)return n.RED;if(s===ny)return n.RED_INTEGER;if(s===Lb)return n.RG;if(s===iy)return n.RG_INTEGER;if(s===ay)return n.RGBA_INTEGER;if(s===Vd||s===Wd||s===qd||s===Xd)if(l===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===Vd)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wd)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qd)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xd)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===Vd)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wd)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qd)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xd)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sp||s===Mp||s===wp||s===Ep)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===Sp)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mp)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===wp)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ep)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===sy)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ap||s===Tp)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(s===Ap)return l===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===Tp)return l===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Rp||s===Cp||s===Lp||s===Pp||s===Ip||s===Np||s===Dp||s===kp||s===Op||s===Up||s===Fp||s===zp||s===Bp||s===Hp)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Rp)return l===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Cp)return l===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Lp)return l===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Pp)return l===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ip)return l===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Np)return l===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Dp)return l===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===kp)return l===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Op)return l===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Up)return l===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Fp)return l===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zp)return l===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Bp)return l===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Hp)return l===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jd||s===Gp||s===Vp)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(s===jd)return l===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gp)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Vp)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Pb||s===Wp||s===qp||s===Xp)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(s===jd)return r.COMPRESSED_RED_RGTC1_EXT;if(s===Wp)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qp)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xp)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$a?i?n.UNSIGNED_INT_24_8:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:a}}class nA extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dt extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iA={type:"move"};class gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,s=null,o=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),h=this._getHandJoint(c,v);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),m=.02,y=.005;c.inputState.pinching&&f>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&s!==null&&(a=s),a!==null&&(r.matrix.fromArray(a.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,a.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(a.linearVelocity)):r.hasLinearVelocity=!1,a.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(a.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(iA)))}return r!==null&&(r.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class aA extends Ro{constructor(e,t){super();const i=this;let a=null,s=1,o=null,r="local-floor",l=1,c=null,d=null,u=null,f=null,m=null,y=null;const v=t.getContextAttributes();let p=null,h=null;const _=[],g=[],b=new me;let R=null;const E=new Tn;E.layers.enable(1),E.viewport=new $t;const A=new Tn;A.layers.enable(2),A.viewport=new $t;const U=[E,A],M=new nA;M.layers.enable(1),M.layers.enable(2);let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let k=_[te];return k===void 0&&(k=new gu,_[te]=k),k.getTargetRaySpace()},this.getControllerGrip=function(te){let k=_[te];return k===void 0&&(k=new gu,_[te]=k),k.getGripSpace()},this.getHand=function(te){let k=_[te];return k===void 0&&(k=new gu,_[te]=k),k.getHandSpace()};function W(te){const k=g.indexOf(te.inputSource);if(k===-1)return;const D=_[k];D!==void 0&&(D.update(te.inputSource,te.frame,c||o),D.dispatchEvent({type:te.type,data:te.inputSource}))}function oe(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",O);for(let te=0;te<_.length;te++){const k=g[te];k!==null&&(g[te]=null,_[te].disconnect(k))}w=null,V=null,e.setRenderTarget(p),m=null,f=null,u=null,a=null,h=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(te){if(a=te,a!==null){if(p=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),a.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:a.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(a,t,k),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new as(m.framebufferWidth,m.framebufferHeight,{format:ei,type:ua,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let k=null,D=null,C=null;v.depth&&(C=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=v.stencil?vo:Ya,D=v.stencil?$a:ea);const T={colorFormat:t.RGBA8,depthFormat:C,scaleFactor:s};u=new XRWebGLBinding(a,t),f=u.createProjectionLayer(T),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new as(f.textureWidth,f.textureHeight,{format:ei,type:ua,depthTexture:new Sy(f.textureWidth,f.textureHeight,D,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ee=e.properties.get(h);ee.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await a.requestReferenceSpace(r),xe.setContext(a),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function O(te){for(let k=0;k<te.removed.length;k++){const D=te.removed[k],C=g.indexOf(D);C>=0&&(g[C]=null,_[C].disconnect(D))}for(let k=0;k<te.added.length;k++){const D=te.added[k];let C=g.indexOf(D);if(C===-1){for(let ee=0;ee<_.length;ee++)if(ee>=g.length){g.push(D),C=ee;break}else if(g[ee]===null){g[ee]=D,C=ee;break}if(C===-1)break}const T=_[C];T&&T.connect(D)}}const q=new N,$=new N;function K(te,k,D){q.setFromMatrixPosition(k.matrixWorld),$.setFromMatrixPosition(D.matrixWorld);const C=q.distanceTo($),T=k.projectionMatrix.elements,ee=D.projectionMatrix.elements,ce=T[14]/(T[10]-1),X=T[14]/(T[10]+1),he=(T[9]+1)/T[5],P=(T[9]-1)/T[5],ie=(T[8]-1)/T[0],z=(ee[8]+1)/ee[0],Y=ce*ie,j=ce*z,pe=C/(-ie+z),F=pe*-ie;k.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(F),te.translateZ(pe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const x=ce+pe,S=X+pe,G=Y-F,ge=j+(C-F),ye=he*X/S*x,de=P*X/S*x;te.projectionMatrix.makePerspective(G,ge,ye,de,x,S),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function B(te,k){k===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(k.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(a===null)return;M.near=A.near=E.near=te.near,M.far=A.far=E.far=te.far,(w!==M.near||V!==M.far)&&(a.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,V=M.far);const k=te.parent,D=M.cameras;B(M,k);for(let C=0;C<D.length;C++)B(D[C],k);D.length===2?K(M,E,A):M.projectionMatrix.copy(E.projectionMatrix),Q(te,M,k)};function Q(te,k,D){D===null?te.matrix.copy(k.matrixWorld):(te.matrix.copy(D.matrixWorld),te.matrix.invert(),te.matrix.multiply(k.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(k.projectionMatrix),te.projectionMatrixInverse.copy(k.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ir*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)};let le=null;function ue(te,k){if(d=k.getViewerPose(c||o),y=k,d!==null){const D=d.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let C=!1;D.length!==M.cameras.length&&(M.cameras.length=0,C=!0);for(let T=0;T<D.length;T++){const ee=D[T];let ce=null;if(m!==null)ce=m.getViewport(ee);else{const he=u.getViewSubImage(f,ee);ce=he.viewport,T===0&&(e.setRenderTargetTextures(h,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(h))}let X=U[T];X===void 0&&(X=new Tn,X.layers.enable(T),X.viewport=new $t,U[T]=X),X.matrix.fromArray(ee.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(ee.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(ce.x,ce.y,ce.width,ce.height),T===0&&(M.matrix.copy(X.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),C===!0&&M.cameras.push(X)}}for(let D=0;D<_.length;D++){const C=g[D],T=_[D];C!==null&&T!==void 0&&T.update(C,k,c||o)}le&&le(te,k),k.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:k}),y=null}const xe=new _y;xe.setAnimationLoop(ue),this.setAnimationLoop=function(te){le=te},this.dispose=function(){}}}function sA(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,yy(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function a(p,h,_,g,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),u(p,h)):h.isMeshPhongMaterial?(s(p,h),d(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(s(p,h),y(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),v(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&r(p,h)):h.isPointsMaterial?l(p,h,_,g):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Sn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Sn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const g=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*g,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function r(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,_,g){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*_,p.scale.value=g*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function d(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,_){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function y(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){const _=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function oA(n,e,t,i){let a={},s={},o=[];const r=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const b=g.program;i.uniformBlockBinding(_,b)}function c(_,g){let b=a[_.id];b===void 0&&(y(_),b=d(_),a[_.id]=b,_.addEventListener("dispose",p));const R=g.program;i.updateUBOMapping(_,R);const E=e.render.frame;s[_.id]!==E&&(f(_),s[_.id]=E)}function d(_){const g=u();_.__bindingPointIndex=g;const b=n.createBuffer(),R=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,b),b}function u(){for(let _=0;_<r;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const g=a[_.id],b=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let E=0,A=b.length;E<A;E++){const U=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,w=U.length;M<w;M++){const V=U[M];if(m(V,E,M,R)===!0){const W=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let O=0;for(let q=0;q<oe.length;q++){const $=oe[q],K=v($);typeof $=="number"||typeof $=="boolean"?(V.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,W+O,V.__data)):$.isMatrix3?(V.__data[0]=$.elements[0],V.__data[1]=$.elements[1],V.__data[2]=$.elements[2],V.__data[3]=0,V.__data[4]=$.elements[3],V.__data[5]=$.elements[4],V.__data[6]=$.elements[5],V.__data[7]=0,V.__data[8]=$.elements[6],V.__data[9]=$.elements[7],V.__data[10]=$.elements[8],V.__data[11]=0):($.toArray(V.__data,O),O+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(_,g,b,R){const E=_.value,A=g+"_"+b;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{const U=R[A];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return R[A]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function y(_){const g=_.uniforms;let b=0;const R=16;for(let A=0,U=g.length;A<U;A++){const M=Array.isArray(g[A])?g[A]:[g[A]];for(let w=0,V=M.length;w<V;w++){const W=M[w],oe=Array.isArray(W.value)?W.value:[W.value];for(let O=0,q=oe.length;O<q;O++){const $=oe[O],K=v($),B=b%R;B!==0&&R-B<K.boundary&&(b+=R-B),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=K.storage}}}const E=b%R;return E>0&&(b+=R-E),_.__size=b,_.__cache={},this}function v(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function p(_){const g=_.target;g.removeEventListener("dispose",p);const b=o.indexOf(g.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(a[g.id]),delete a[g.id],delete s[g.id]}function h(){for(const _ in a)n.deleteBuffer(a[_]);o=[],a={},s={}}return{bind:l,update:c,dispose:h}}class vf{constructor(e={}){const{canvas:t=nS(),context:i=null,depth:a=!0,stencil:s=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),y=new Int32Array(4);let v=null,p=null;const h=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=da,this.toneMappingExposure=1;const g=this;let b=!1,R=0,E=0,A=null,U=-1,M=null;const w=new $t,V=new $t;let W=null;const oe=new Ae(0);let O=0,q=t.width,$=t.height,K=1,B=null,Q=null;const le=new $t(0,0,q,$),ue=new $t(0,0,q,$);let xe=!1;const te=new gf;let k=!1,D=!1,C=null;const T=new Je,ee=new me,ce=new N,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return A===null?K:1}let P=i;function ie(L,Z){for(let se=0;se<L.length;se++){const re=L[se],ae=t.getContext(re,Z);if(ae!==null)return ae}return null}try{const L={alpha:!0,depth:a,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${df}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Me,!1),P===null){const Z=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&Z.shift(),P=ie(Z,L),P===null)throw ie(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let z,Y,j,pe,F,x,S,G,ge,ye,de,Re,_e,Ce,Ne,Fe,ve,Qe,qe,ze,De,Pe,Xe,it;function _t(){z=new g1(P),Y=new d1(P,z,e),z.init(Y),Pe=new tA(P,z,Y),j=new QE(P,z,Y),pe=new x1(P),F=new zE,x=new eA(P,z,j,F,Y,Pe,pe),S=new h1(g),G=new m1(g),ge=new TS(P,Y),Xe=new l1(P,z,ge,Y),ye=new y1(P,ge,pe,Xe),de=new M1(P,ye,ge,pe),qe=new S1(P,Y,x),Fe=new u1(F),Re=new FE(g,S,G,z,Y,Xe,Fe),_e=new sA(g,F),Ce=new HE,Ne=new jE(z,Y),Qe=new r1(g,S,G,j,de,f,l),ve=new JE(g,de,Y),it=new oA(P,pe,Y,j),ze=new c1(P,z,pe,Y),De=new v1(P,z,pe,Y),pe.programs=Re.programs,g.capabilities=Y,g.extensions=z,g.properties=F,g.renderLists=Ce,g.shadowMap=ve,g.state=j,g.info=pe}_t();const Ke=new aA(g,P);this.xr=Ke,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const L=z.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=z.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(L){L!==void 0&&(K=L,this.setSize(q,$,!1))},this.getSize=function(L){return L.set(q,$)},this.setSize=function(L,Z,se=!0){if(Ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=L,$=Z,t.width=Math.floor(L*K),t.height=Math.floor(Z*K),se===!0&&(t.style.width=L+"px",t.style.height=Z+"px"),this.setViewport(0,0,L,Z)},this.getDrawingBufferSize=function(L){return L.set(q*K,$*K).floor()},this.setDrawingBufferSize=function(L,Z,se){q=L,$=Z,K=se,t.width=Math.floor(L*se),t.height=Math.floor(Z*se),this.setViewport(0,0,L,Z)},this.getCurrentViewport=function(L){return L.copy(w)},this.getViewport=function(L){return L.copy(le)},this.setViewport=function(L,Z,se,re){L.isVector4?le.set(L.x,L.y,L.z,L.w):le.set(L,Z,se,re),j.viewport(w.copy(le).multiplyScalar(K).floor())},this.getScissor=function(L){return L.copy(ue)},this.setScissor=function(L,Z,se,re){L.isVector4?ue.set(L.x,L.y,L.z,L.w):ue.set(L,Z,se,re),j.scissor(V.copy(ue).multiplyScalar(K).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(L){j.setScissorTest(xe=L)},this.setOpaqueSort=function(L){B=L},this.setTransparentSort=function(L){Q=L},this.getClearColor=function(L){return L.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(L=!0,Z=!0,se=!0){let re=0;if(L){let ae=!1;if(A!==null){const Le=A.texture.format;ae=Le===ay||Le===iy||Le===ny}if(ae){const Le=A.texture.type,Ie=Le===ua||Le===ea||Le===hf||Le===$a||Le===ey||Le===ty,Oe=Qe.getClearColor(),Be=Qe.getClearAlpha(),$e=Oe.r,Ve=Oe.g,We=Oe.b;Ie?(m[0]=$e,m[1]=Ve,m[2]=We,m[3]=Be,P.clearBufferuiv(P.COLOR,0,m)):(y[0]=$e,y[1]=Ve,y[2]=We,y[3]=Be,P.clearBufferiv(P.COLOR,0,y))}else re|=P.COLOR_BUFFER_BIT}Z&&(re|=P.DEPTH_BUFFER_BIT),se&&(re|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Ce.dispose(),Ne.dispose(),F.dispose(),S.dispose(),G.dispose(),de.dispose(),Xe.dispose(),it.dispose(),Re.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",ln),Ke.removeEventListener("sessionend",ct),C&&(C.dispose(),C=null),cn.stop()};function be(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const L=pe.autoReset,Z=ve.enabled,se=ve.autoUpdate,re=ve.needsUpdate,ae=ve.type;_t(),pe.autoReset=L,ve.enabled=Z,ve.autoUpdate=se,ve.needsUpdate=re,ve.type=ae}function Me(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function we(L){const Z=L.target;Z.removeEventListener("dispose",we),Ue(Z)}function Ue(L){ke(L),F.remove(L)}function ke(L){const Z=F.get(L).programs;Z!==void 0&&(Z.forEach(function(se){Re.releaseProgram(se)}),L.isShaderMaterial&&Re.releaseShaderCache(L))}this.renderBufferDirect=function(L,Z,se,re,ae,Le){Z===null&&(Z=X);const Ie=ae.isMesh&&ae.matrixWorld.determinant()<0,Oe=Xx(L,Z,se,re,ae);j.setMaterial(re,Ie);let Be=se.index,$e=1;if(re.wireframe===!0){if(Be=ye.getWireframeAttribute(se),Be===void 0)return;$e=2}const Ve=se.drawRange,We=se.attributes.position;let At=Ve.start*$e,wn=(Ve.start+Ve.count)*$e;Le!==null&&(At=Math.max(At,Le.start*$e),wn=Math.min(wn,(Le.start+Le.count)*$e)),Be!==null?(At=Math.max(At,0),wn=Math.min(wn,Be.count)):We!=null&&(At=Math.max(At,0),wn=Math.min(wn,We.count));const Vt=wn-At;if(Vt<0||Vt===1/0)return;Xe.setup(ae,re,Oe,se,Be);let bi,mt=ze;if(Be!==null&&(bi=ge.get(Be),mt=De,mt.setIndex(bi)),ae.isMesh)re.wireframe===!0?(j.setLineWidth(re.wireframeLinewidth*he()),mt.setMode(P.LINES)):mt.setMode(P.TRIANGLES);else if(ae.isLine){let Ze=re.linewidth;Ze===void 0&&(Ze=1),j.setLineWidth(Ze*he()),ae.isLineSegments?mt.setMode(P.LINES):ae.isLineLoop?mt.setMode(P.LINE_LOOP):mt.setMode(P.LINE_STRIP)}else ae.isPoints?mt.setMode(P.POINTS):ae.isSprite&&mt.setMode(P.TRIANGLES);if(ae.isBatchedMesh)mt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else if(ae.isInstancedMesh)mt.renderInstances(At,Vt,ae.count);else if(se.isInstancedBufferGeometry){const Ze=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Id=Math.min(se.instanceCount,Ze);mt.renderInstances(At,Vt,Id)}else mt.render(At,Vt)};function rt(L,Z,se){L.transparent===!0&&L.side===Jt&&L.forceSinglePass===!1?(L.side=Sn,L.needsUpdate=!0,Zr(L,Z,se),L.side=ma,L.needsUpdate=!0,Zr(L,Z,se),L.side=Jt):Zr(L,Z,se)}this.compile=function(L,Z,se=null){se===null&&(se=L),p=Ne.get(se),p.init(),_.push(p),se.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(p.pushLight(ae),ae.castShadow&&p.pushShadow(ae))}),L!==se&&L.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Z.layers)&&(p.pushLight(ae),ae.castShadow&&p.pushShadow(ae))}),p.setupLights(g._useLegacyLights);const re=new Set;return L.traverse(function(ae){const Le=ae.material;if(Le)if(Array.isArray(Le))for(let Ie=0;Ie<Le.length;Ie++){const Oe=Le[Ie];rt(Oe,se,ae),re.add(Oe)}else rt(Le,se,ae),re.add(Le)}),_.pop(),p=null,re},this.compileAsync=function(L,Z,se=null){const re=this.compile(L,Z,se);return new Promise(ae=>{function Le(){if(re.forEach(function(Ie){F.get(Ie).currentProgram.isReady()&&re.delete(Ie)}),re.size===0){ae(L);return}setTimeout(Le,10)}z.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let lt=null;function Gt(L){lt&&lt(L)}function ln(){cn.stop()}function ct(){cn.start()}const cn=new _y;cn.setAnimationLoop(Gt),typeof self<"u"&&cn.setContext(self),this.setAnimationLoop=function(L){lt=L,Ke.setAnimationLoop(L),L===null?cn.stop():cn.start()},Ke.addEventListener("sessionstart",ln),Ke.addEventListener("sessionend",ct),this.render=function(L,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(Z),Z=Ke.getCamera()),L.isScene===!0&&L.onBeforeRender(g,L,Z,A),p=Ne.get(L,_.length),p.init(),_.push(p),T.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),te.setFromProjectionMatrix(T),D=this.localClippingEnabled,k=Fe.init(this.clippingPlanes,D),v=Ce.get(L,h.length),v.init(),h.push(v),ri(L,Z,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(B,Q),this.info.render.frame++,k===!0&&Fe.beginShadows();const se=p.state.shadowsArray;if(ve.render(se,L,Z),k===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(v,L),p.setupLights(g._useLegacyLights),Z.isArrayCamera){const re=Z.cameras;for(let ae=0,Le=re.length;ae<Le;ae++){const Ie=re[ae];Qf(v,L,Ie,Ie.viewport)}}else Qf(v,L,Z);A!==null&&(x.updateMultisampleRenderTarget(A),x.updateRenderTargetMipmap(A)),L.isScene===!0&&L.onAfterRender(g,L,Z),Xe.resetDefaultState(),U=-1,M=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function ri(L,Z,se,re){if(L.visible===!1)return;if(L.layers.test(Z.layers)){if(L.isGroup)se=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Z);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||te.intersectsSprite(L)){re&&ce.setFromMatrixPosition(L.matrixWorld).applyMatrix4(T);const Ie=de.update(L),Oe=L.material;Oe.visible&&v.push(L,Ie,Oe,se,ce.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||te.intersectsObject(L))){const Ie=de.update(L),Oe=L.material;if(re&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ce.copy(L.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ce.copy(Ie.boundingSphere.center)),ce.applyMatrix4(L.matrixWorld).applyMatrix4(T)),Array.isArray(Oe)){const Be=Ie.groups;for(let $e=0,Ve=Be.length;$e<Ve;$e++){const We=Be[$e],At=Oe[We.materialIndex];At&&At.visible&&v.push(L,Ie,At,se,ce.z,We)}}else Oe.visible&&v.push(L,Ie,Oe,se,ce.z,null)}}const Le=L.children;for(let Ie=0,Oe=Le.length;Ie<Oe;Ie++)ri(Le[Ie],Z,se,re)}function Qf(L,Z,se,re){const ae=L.opaque,Le=L.transmissive,Ie=L.transparent;p.setupLightsView(se),k===!0&&Fe.setGlobalState(g.clippingPlanes,se),Le.length>0&&qx(ae,Le,Z,se),re&&j.viewport(w.copy(re)),ae.length>0&&Kr(ae,Z,se),Le.length>0&&Kr(Le,Z,se),Ie.length>0&&Kr(Ie,Z,se),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function qx(L,Z,se,re){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;const Le=Y.isWebGL2;C===null&&(C=new as(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")?Pr:ua,minFilter:Lr,samples:Le?4:0})),g.getDrawingBufferSize(ee),Le?C.setSize(ee.x,ee.y):C.setSize(Ac(ee.x),Ac(ee.y));const Ie=g.getRenderTarget();g.setRenderTarget(C),g.getClearColor(oe),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear();const Oe=g.toneMapping;g.toneMapping=da,Kr(L,se,re),x.updateMultisampleRenderTarget(C),x.updateRenderTargetMipmap(C);let Be=!1;for(let $e=0,Ve=Z.length;$e<Ve;$e++){const We=Z[$e],At=We.object,wn=We.geometry,Vt=We.material,bi=We.group;if(Vt.side===Jt&&At.layers.test(re.layers)){const mt=Vt.side;Vt.side=Sn,Vt.needsUpdate=!0,ep(At,se,re,wn,Vt,bi),Vt.side=mt,Vt.needsUpdate=!0,Be=!0}}Be===!0&&(x.updateMultisampleRenderTarget(C),x.updateRenderTargetMipmap(C)),g.setRenderTarget(Ie),g.setClearColor(oe,O),g.toneMapping=Oe}function Kr(L,Z,se){const re=Z.isScene===!0?Z.overrideMaterial:null;for(let ae=0,Le=L.length;ae<Le;ae++){const Ie=L[ae],Oe=Ie.object,Be=Ie.geometry,$e=re===null?Ie.material:re,Ve=Ie.group;Oe.layers.test(se.layers)&&ep(Oe,Z,se,Be,$e,Ve)}}function ep(L,Z,se,re,ae,Le){L.onBeforeRender(g,Z,se,re,ae,Le),L.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ae.onBeforeRender(g,Z,se,re,L,Le),ae.transparent===!0&&ae.side===Jt&&ae.forceSinglePass===!1?(ae.side=Sn,ae.needsUpdate=!0,g.renderBufferDirect(se,Z,re,ae,L,Le),ae.side=ma,ae.needsUpdate=!0,g.renderBufferDirect(se,Z,re,ae,L,Le),ae.side=Jt):g.renderBufferDirect(se,Z,re,ae,L,Le),L.onAfterRender(g,Z,se,re,ae,Le)}function Zr(L,Z,se){Z.isScene!==!0&&(Z=X);const re=F.get(L),ae=p.state.lights,Le=p.state.shadowsArray,Ie=ae.state.version,Oe=Re.getParameters(L,ae.state,Le,Z,se),Be=Re.getProgramCacheKey(Oe);let $e=re.programs;re.environment=L.isMeshStandardMaterial?Z.environment:null,re.fog=Z.fog,re.envMap=(L.isMeshStandardMaterial?G:S).get(L.envMap||re.environment),$e===void 0&&(L.addEventListener("dispose",we),$e=new Map,re.programs=$e);let Ve=$e.get(Be);if(Ve!==void 0){if(re.currentProgram===Ve&&re.lightsStateVersion===Ie)return np(L,Oe),Ve}else Oe.uniforms=Re.getUniforms(L),L.onBuild(se,Oe,g),L.onBeforeCompile(Oe,g),Ve=Re.acquireProgram(Oe,Be),$e.set(Be,Ve),re.uniforms=Oe.uniforms;const We=re.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(We.clippingPlanes=Fe.uniform),np(L,Oe),re.needsLights=$x(L),re.lightsStateVersion=Ie,re.needsLights&&(We.ambientLightColor.value=ae.state.ambient,We.lightProbe.value=ae.state.probe,We.directionalLights.value=ae.state.directional,We.directionalLightShadows.value=ae.state.directionalShadow,We.spotLights.value=ae.state.spot,We.spotLightShadows.value=ae.state.spotShadow,We.rectAreaLights.value=ae.state.rectArea,We.ltc_1.value=ae.state.rectAreaLTC1,We.ltc_2.value=ae.state.rectAreaLTC2,We.pointLights.value=ae.state.point,We.pointLightShadows.value=ae.state.pointShadow,We.hemisphereLights.value=ae.state.hemi,We.directionalShadowMap.value=ae.state.directionalShadowMap,We.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,We.spotShadowMap.value=ae.state.spotShadowMap,We.spotLightMatrix.value=ae.state.spotLightMatrix,We.spotLightMap.value=ae.state.spotLightMap,We.pointShadowMap.value=ae.state.pointShadowMap,We.pointShadowMatrix.value=ae.state.pointShadowMatrix),re.currentProgram=Ve,re.uniformsList=null,Ve}function tp(L){if(L.uniformsList===null){const Z=L.currentProgram.getUniforms();L.uniformsList=Ql.seqWithValue(Z.seq,L.uniforms)}return L.uniformsList}function np(L,Z){const se=F.get(L);se.outputColorSpace=Z.outputColorSpace,se.batching=Z.batching,se.instancing=Z.instancing,se.instancingColor=Z.instancingColor,se.skinning=Z.skinning,se.morphTargets=Z.morphTargets,se.morphNormals=Z.morphNormals,se.morphColors=Z.morphColors,se.morphTargetsCount=Z.morphTargetsCount,se.numClippingPlanes=Z.numClippingPlanes,se.numIntersection=Z.numClipIntersection,se.vertexAlphas=Z.vertexAlphas,se.vertexTangents=Z.vertexTangents,se.toneMapping=Z.toneMapping}function Xx(L,Z,se,re,ae){Z.isScene!==!0&&(Z=X),x.resetTextureUnits();const Le=Z.fog,Ie=re.isMeshStandardMaterial?Z.environment:null,Oe=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Bi,Be=(re.isMeshStandardMaterial?G:S).get(re.envMap||Ie),$e=re.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Ve=!!se.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),We=!!se.morphAttributes.position,At=!!se.morphAttributes.normal,wn=!!se.morphAttributes.color;let Vt=da;re.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Vt=g.toneMapping);const bi=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,mt=bi!==void 0?bi.length:0,Ze=F.get(re),Id=p.state.lights;if(k===!0&&(D===!0||L!==M)){const Nn=L===M&&re.id===U;Fe.setState(re,L,Nn)}let bt=!1;re.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Id.state.version||Ze.outputColorSpace!==Oe||ae.isBatchedMesh&&Ze.batching===!1||!ae.isBatchedMesh&&Ze.batching===!0||ae.isInstancedMesh&&Ze.instancing===!1||!ae.isInstancedMesh&&Ze.instancing===!0||ae.isSkinnedMesh&&Ze.skinning===!1||!ae.isSkinnedMesh&&Ze.skinning===!0||ae.isInstancedMesh&&Ze.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ze.instancingColor===!1&&ae.instanceColor!==null||Ze.envMap!==Be||re.fog===!0&&Ze.fog!==Le||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Fe.numPlanes||Ze.numIntersection!==Fe.numIntersection)||Ze.vertexAlphas!==$e||Ze.vertexTangents!==Ve||Ze.morphTargets!==We||Ze.morphNormals!==At||Ze.morphColors!==wn||Ze.toneMapping!==Vt||Y.isWebGL2===!0&&Ze.morphTargetsCount!==mt)&&(bt=!0):(bt=!0,Ze.__version=re.version);let Sa=Ze.currentProgram;bt===!0&&(Sa=Zr(re,Z,ae));let ip=!1,No=!1,Nd=!1;const tn=Sa.getUniforms(),Ma=Ze.uniforms;if(j.useProgram(Sa.program)&&(ip=!0,No=!0,Nd=!0),re.id!==U&&(U=re.id,No=!0),ip||M!==L){tn.setValue(P,"projectionMatrix",L.projectionMatrix),tn.setValue(P,"viewMatrix",L.matrixWorldInverse);const Nn=tn.map.cameraPosition;Nn!==void 0&&Nn.setValue(P,ce.setFromMatrixPosition(L.matrixWorld)),Y.logarithmicDepthBuffer&&tn.setValue(P,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&tn.setValue(P,"isOrthographic",L.isOrthographicCamera===!0),M!==L&&(M=L,No=!0,Nd=!0)}if(ae.isSkinnedMesh){tn.setOptional(P,ae,"bindMatrix"),tn.setOptional(P,ae,"bindMatrixInverse");const Nn=ae.skeleton;Nn&&(Y.floatVertexTextures?(Nn.boneTexture===null&&Nn.computeBoneTexture(),tn.setValue(P,"boneTexture",Nn.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ae.isBatchedMesh&&(tn.setOptional(P,ae,"batchingTexture"),tn.setValue(P,"batchingTexture",ae._matricesTexture,x));const Dd=se.morphAttributes;if((Dd.position!==void 0||Dd.normal!==void 0||Dd.color!==void 0&&Y.isWebGL2===!0)&&qe.update(ae,se,Sa),(No||Ze.receiveShadow!==ae.receiveShadow)&&(Ze.receiveShadow=ae.receiveShadow,tn.setValue(P,"receiveShadow",ae.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Ma.envMap.value=Be,Ma.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),No&&(tn.setValue(P,"toneMappingExposure",g.toneMappingExposure),Ze.needsLights&&jx(Ma,Nd),Le&&re.fog===!0&&_e.refreshFogUniforms(Ma,Le),_e.refreshMaterialUniforms(Ma,re,K,$,C),Ql.upload(P,tp(Ze),Ma,x)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Ql.upload(P,tp(Ze),Ma,x),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&tn.setValue(P,"center",ae.center),tn.setValue(P,"modelViewMatrix",ae.modelViewMatrix),tn.setValue(P,"normalMatrix",ae.normalMatrix),tn.setValue(P,"modelMatrix",ae.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Nn=re.uniformsGroups;for(let kd=0,Yx=Nn.length;kd<Yx;kd++)if(Y.isWebGL2){const ap=Nn[kd];it.update(ap,Sa),it.bind(ap,Sa)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sa}function jx(L,Z){L.ambientLightColor.needsUpdate=Z,L.lightProbe.needsUpdate=Z,L.directionalLights.needsUpdate=Z,L.directionalLightShadows.needsUpdate=Z,L.pointLights.needsUpdate=Z,L.pointLightShadows.needsUpdate=Z,L.spotLights.needsUpdate=Z,L.spotLightShadows.needsUpdate=Z,L.rectAreaLights.needsUpdate=Z,L.hemisphereLights.needsUpdate=Z}function $x(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(L,Z,se){F.get(L.texture).__webglTexture=Z,F.get(L.depthTexture).__webglTexture=se;const re=F.get(L);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=se===void 0,re.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,Z){const se=F.get(L);se.__webglFramebuffer=Z,se.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(L,Z=0,se=0){A=L,R=Z,E=se;let re=!0,ae=null,Le=!1,Ie=!1;if(L){const Be=F.get(L);Be.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(P.FRAMEBUFFER,null),re=!1):Be.__webglFramebuffer===void 0?x.setupRenderTarget(L):Be.__hasExternalTextures&&x.rebindTextures(L,F.get(L.texture).__webglTexture,F.get(L.depthTexture).__webglTexture);const $e=L.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ie=!0);const Ve=F.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ve[Z])?ae=Ve[Z][se]:ae=Ve[Z],Le=!0):Y.isWebGL2&&L.samples>0&&x.useMultisampledRTT(L)===!1?ae=F.get(L).__webglMultisampledFramebuffer:Array.isArray(Ve)?ae=Ve[se]:ae=Ve,w.copy(L.viewport),V.copy(L.scissor),W=L.scissorTest}else w.copy(le).multiplyScalar(K).floor(),V.copy(ue).multiplyScalar(K).floor(),W=xe;if(j.bindFramebuffer(P.FRAMEBUFFER,ae)&&Y.drawBuffers&&re&&j.drawBuffers(L,ae),j.viewport(w),j.scissor(V),j.setScissorTest(W),Le){const Be=F.get(L.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Be.__webglTexture,se)}else if(Ie){const Be=F.get(L.texture),$e=Z||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Be.__webglTexture,se||0,$e)}U=-1},this.readRenderTargetPixels=function(L,Z,se,re,ae,Le,Ie){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=F.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){j.bindFramebuffer(P.FRAMEBUFFER,Oe);try{const Be=L.texture,$e=Be.format,Ve=Be.type;if($e!==ei&&Pe.convert($e)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===Pr&&(z.has("EXT_color_buffer_half_float")||Y.isWebGL2&&z.has("EXT_color_buffer_float"));if(Ve!==ua&&Pe.convert(Ve)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===ta&&(Y.isWebGL2||z.has("OES_texture_float")||z.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=L.width-re&&se>=0&&se<=L.height-ae&&P.readPixels(Z,se,re,ae,Pe.convert($e),Pe.convert(Ve),Le)}finally{const Be=A!==null?F.get(A).__webglFramebuffer:null;j.bindFramebuffer(P.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(L,Z,se=0){const re=Math.pow(2,-se),ae=Math.floor(Z.image.width*re),Le=Math.floor(Z.image.height*re);x.setTexture2D(Z,0),P.copyTexSubImage2D(P.TEXTURE_2D,se,0,0,L.x,L.y,ae,Le),j.unbindTexture()},this.copyTextureToTexture=function(L,Z,se,re=0){const ae=Z.image.width,Le=Z.image.height,Ie=Pe.convert(se.format),Oe=Pe.convert(se.type);x.setTexture2D(se,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,se.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,se.unpackAlignment),Z.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,re,L.x,L.y,ae,Le,Ie,Oe,Z.image.data):Z.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,re,L.x,L.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Ie,Z.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,re,L.x,L.y,Ie,Oe,Z.image),re===0&&se.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(L,Z,se,re,ae=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=L.max.x-L.min.x+1,Ie=L.max.y-L.min.y+1,Oe=L.max.z-L.min.z+1,Be=Pe.convert(re.format),$e=Pe.convert(re.type);let Ve;if(re.isData3DTexture)x.setTexture3D(re,0),Ve=P.TEXTURE_3D;else if(re.isDataArrayTexture||re.isCompressedArrayTexture)x.setTexture2DArray(re,0),Ve=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,re.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,re.unpackAlignment);const We=P.getParameter(P.UNPACK_ROW_LENGTH),At=P.getParameter(P.UNPACK_IMAGE_HEIGHT),wn=P.getParameter(P.UNPACK_SKIP_PIXELS),Vt=P.getParameter(P.UNPACK_SKIP_ROWS),bi=P.getParameter(P.UNPACK_SKIP_IMAGES),mt=se.isCompressedTexture?se.mipmaps[ae]:se.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,L.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,L.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,L.min.z),se.isDataTexture||se.isData3DTexture?P.texSubImage3D(Ve,ae,Z.x,Z.y,Z.z,Le,Ie,Oe,Be,$e,mt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ve,ae,Z.x,Z.y,Z.z,Le,Ie,Oe,Be,mt.data)):P.texSubImage3D(Ve,ae,Z.x,Z.y,Z.z,Le,Ie,Oe,Be,$e,mt),P.pixelStorei(P.UNPACK_ROW_LENGTH,We),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,At),P.pixelStorei(P.UNPACK_SKIP_PIXELS,wn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,bi),ae===0&&re.generateMipmaps&&P.generateMipmap(Ve),j.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?x.setTextureCube(L,0):L.isData3DTexture?x.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?x.setTexture2DArray(L,0):x.setTexture2D(L,0),j.unbindTexture()},this.resetState=function(){R=0,E=0,A=null,j.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ff?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===gd?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?Ka:oy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ka?Ot:Bi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class rA extends vf{}rA.prototype.isWebGL1Renderer=!0;class Vr{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=i}clone(){return new Vr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ry extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ch extends Dt{constructor(e,t,i,a=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ks=new Je,km=new Je,wl=[],Om=new fs,lA=new Je,Bo=new nt,Ho=new _a;class on extends nt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ch(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<i;a++)this.setMatrixAt(a,lA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ks),Om.copy(e.boundingBox).applyMatrix4(ks),this.boundingBox.union(Om)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _a),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ks),Ho.copy(e.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(Ho)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,a=this.count;if(Bo.geometry=this.geometry,Bo.material=this.material,Bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ho.copy(this.boundingSphere),Ho.applyMatrix4(i),e.ray.intersectsSphere(Ho)!==!1))for(let s=0;s<a;s++){this.getMatrixAt(s,ks),km.multiplyMatrices(i,ks),Bo.matrixWorld=km,Bo.raycast(e,wl);for(let o=0,r=wl.length;o<r;o++){const l=wl[o];l.instanceId=s,l.object=this,t.push(l)}wl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ch(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class vd extends ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Um=new N,Fm=new N,zm=new Je,yu=new mf,El=new _a;class Cy extends Ft{constructor(e=new xt,t=new vd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,s=t.count;a<s;a++)Um.fromBufferAttribute(t,a-1),Fm.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=Um.distanceTo(Fm);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(a),El.radius+=s,e.ray.intersectsSphere(El)===!1)return;zm.copy(a).invert(),yu.copy(e.ray).applyMatrix4(zm);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=new N,d=new N,u=new N,f=new N,m=this.isLineSegments?2:1,y=i.index,p=i.attributes.position;if(y!==null){const h=Math.max(0,o.start),_=Math.min(y.count,o.start+o.count);for(let g=h,b=_-1;g<b;g+=m){const R=y.getX(g),E=y.getX(g+1);if(c.fromBufferAttribute(p,R),d.fromBufferAttribute(p,E),yu.distanceSqToSegment(c,d,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(f);U<e.near||U>e.far||t.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let g=h,b=_-1;g<b;g+=m){if(c.fromBufferAttribute(p,g),d.fromBufferAttribute(p,g+1),yu.distanceSqToSegment(c,d,f,u)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=a.length;s<o;s++){const r=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}const Bm=new N,Hm=new N;class Ly extends Cy{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,s=t.count;a<s;a+=2)Bm.fromBufferAttribute(t,a),Hm.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Bm.distanceTo(Hm);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Py extends ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gm=new Je,dh=new mf,Al=new _a,Tl=new N;class Iy extends Ft{constructor(e=new xt,t=new Py){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(a),Al.radius+=s,e.ray.intersectsSphere(Al)===!1)return;Gm.copy(a).invert(),dh.copy(e.ray).applyMatrix4(Gm);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let y=f,v=m;y<v;y++){const p=c.getX(y);Tl.fromBufferAttribute(u,p),Vm(Tl,p,l,a,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=f,v=m;y<v;y++)Tl.fromBufferAttribute(u,y),Vm(Tl,y,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=a.length;s<o;s++){const r=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function Vm(n,e,t,i,a,s,o){const r=dh.distanceSqToPoint(n);if(r<t){const l=new N;dh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:e,face:null,object:o})}}class _i{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(a),t.push(s),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let a=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let r=0,l=s-1,c;for(;r<=l;)if(a=Math.floor(r+(l-r)/2),c=i[a]-o,c<0)r=a+1;else if(c>0)l=a-1;else{l=a;break}if(a=l,i[a]===o)return a/(s-1);const d=i[a],f=i[a+1]-d,m=(o-d)/f;return(a+m)/(s-1)}getTangent(e,t){let a=e-1e-4,s=e+1e-4;a<0&&(a=0),s>1&&(s=1);const o=this.getPoint(a),r=this.getPoint(s),l=t||(o.isVector2?new me:new N);return l.copy(r).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new N,a=[],s=[],o=[],r=new N,l=new Je;for(let m=0;m<=e;m++){const y=m/e;a[m]=this.getTangentAt(y,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const d=Math.abs(a[0].x),u=Math.abs(a[0].y),f=Math.abs(a[0].z);d<=c&&(c=d,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),r.crossVectors(a[0],i).normalize(),s[0].crossVectors(a[0],r),o[0].crossVectors(a[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),r.crossVectors(a[m-1],a[m]),r.length()>Number.EPSILON){r.normalize();const y=Math.acos(Zt(a[m-1].dot(a[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(r,y))}o[m].crossVectors(a[m],s[m])}if(t===!0){let m=Math.acos(Zt(s[0].dot(s[e]),-1,1));m/=e,a[0].dot(r.crossVectors(s[0],s[e]))>0&&(m=-m);for(let y=1;y<=e;y++)s[y].applyMatrix4(l.makeRotationAxis(a[y],m*y)),o[y].crossVectors(a[y],s[y])}return{tangents:a,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xf extends _i{constructor(e=0,t=0,i=1,a=1,s=0,o=Math.PI*2,r=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=r,this.aRotation=l}getPoint(e,t){const i=t||new me,a=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=a;for(;s>a;)s-=a;s<Number.EPSILON&&(o?s=0:s=a),this.aClockwise===!0&&!o&&(s===a?s=-a:s=s-a);const r=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(r),c=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*d-m*u+this.aX,c=f*u+m*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class cA extends xf{constructor(e,t,i,a,s,o){super(e,t,i,i,a,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function _f(){let n=0,e=0,t=0,i=0;function a(s,o,r,l){n=s,e=r,t=-3*s+3*o-2*r-l,i=2*s-2*o+r+l}return{initCatmullRom:function(s,o,r,l,c){a(o,r,c*(r-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,r,l,c,d,u){let f=(o-s)/c-(r-s)/(c+d)+(r-o)/d,m=(r-o)/d-(l-o)/(d+u)+(l-r)/u;f*=d,m*=d,a(o,r,f,m)},calc:function(s){const o=s*s,r=o*s;return n+e*s+t*o+i*r}}}const Rl=new N,vu=new _f,xu=new _f,_u=new _f;class dA extends _i{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new N){const i=t,a=this.points,s=a.length,o=(s-(this.closed?0:1))*e;let r=Math.floor(o),l=o-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/s)+1)*s:l===0&&r===s-1&&(r=s-2,l=1);let c,d;this.closed||r>0?c=a[(r-1)%s]:(Rl.subVectors(a[0],a[1]).add(a[0]),c=Rl);const u=a[r%s],f=a[(r+1)%s];if(this.closed||r+2<s?d=a[(r+2)%s]:(Rl.subVectors(a[s-1],a[s-2]).add(a[s-1]),d=Rl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(u),m),v=Math.pow(u.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(d),m);v<1e-4&&(v=1),y<1e-4&&(y=v),p<1e-4&&(p=v),vu.initNonuniformCatmullRom(c.x,u.x,f.x,d.x,y,v,p),xu.initNonuniformCatmullRom(c.y,u.y,f.y,d.y,y,v,p),_u.initNonuniformCatmullRom(c.z,u.z,f.z,d.z,y,v,p)}else this.curveType==="catmullrom"&&(vu.initCatmullRom(c.x,u.x,f.x,d.x,this.tension),xu.initCatmullRom(c.y,u.y,f.y,d.y,this.tension),_u.initCatmullRom(c.z,u.z,f.z,d.z,this.tension));return i.set(vu.calc(l),xu.calc(l),_u.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new N().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wm(n,e,t,i,a){const s=(i-e)*.5,o=(a-t)*.5,r=n*n,l=n*r;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*r+s*n+t}function uA(n,e){const t=1-n;return t*t*e}function hA(n,e){return 2*(1-n)*n*e}function fA(n,e){return n*n*e}function hr(n,e,t,i){return uA(n,e)+hA(n,t)+fA(n,i)}function pA(n,e){const t=1-n;return t*t*t*e}function mA(n,e){const t=1-n;return 3*t*t*n*e}function gA(n,e){return 3*(1-n)*n*n*e}function yA(n,e){return n*n*n*e}function fr(n,e,t,i,a){return pA(n,e)+mA(n,t)+gA(n,i)+yA(n,a)}class Ny extends _i{constructor(e=new me,t=new me,i=new me,a=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new me){const i=t,a=this.v0,s=this.v1,o=this.v2,r=this.v3;return i.set(fr(e,a.x,s.x,o.x,r.x),fr(e,a.y,s.y,o.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vA extends _i{constructor(e=new N,t=new N,i=new N,a=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new N){const i=t,a=this.v0,s=this.v1,o=this.v2,r=this.v3;return i.set(fr(e,a.x,s.x,o.x,r.x),fr(e,a.y,s.y,o.y,r.y),fr(e,a.z,s.z,o.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Dy extends _i{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xA extends _i{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ky extends _i{constructor(e=new me,t=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new me){const i=t,a=this.v0,s=this.v1,o=this.v2;return i.set(hr(e,a.x,s.x,o.x),hr(e,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _A extends _i{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){const i=t,a=this.v0,s=this.v1,o=this.v2;return i.set(hr(e,a.x,s.x,o.x),hr(e,a.y,s.y,o.y),hr(e,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oy extends _i{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const i=t,a=this.points,s=(a.length-1)*e,o=Math.floor(s),r=s-o,l=a[o===0?o:o-1],c=a[o],d=a[o>a.length-2?a.length-1:o+1],u=a[o>a.length-3?a.length-1:o+2];return i.set(Wm(r,l.x,c.x,d.x,u.x),Wm(r,l.y,c.y,d.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new me().fromArray(a))}return this}}var uh=Object.freeze({__proto__:null,ArcCurve:cA,CatmullRomCurve3:dA,CubicBezierCurve:Ny,CubicBezierCurve3:vA,EllipseCurve:xf,LineCurve:Dy,LineCurve3:xA,QuadraticBezierCurve:ky,QuadraticBezierCurve3:_A,SplineCurve:Oy});class bA extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uh[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let s=0;for(;s<a.length;){if(a[s]>=i){const o=a[s]-i,r=this.curves[s],l=r.getLength(),c=l===0?0:1-o/l;return r.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,s=this.curves;a<s.length;a++){const o=s[a],r=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(r);for(let c=0;c<l.length;c++){const d=l[c];i&&i.equals(d)||(t.push(d),i=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new uh[a.type]().fromJSON(a))}return this}}class no extends bA{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Dy(this.currentPoint.clone(),new me(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const s=new ky(this.currentPoint.clone(),new me(e,t),new me(i,a));return this.curves.push(s),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,s,o){const r=new Ny(this.currentPoint.clone(),new me(e,t),new me(i,a),new me(s,o));return this.curves.push(r),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Oy(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,s,o){const r=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+r,t+l,i,a,s,o),this}absarc(e,t,i,a,s,o){return this.absellipse(e,t,i,i,a,s,o),this}ellipse(e,t,i,a,s,o,r,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,i,a,s,o,r,l),this}absellipse(e,t,i,a,s,o,r,l){const c=new xf(e,t,i,a,s,o,r,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xd extends xt{constructor(e=1,t=32,i=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:a},t=Math.max(3,t);const s=[],o=[],r=[],l=[],c=new N,d=new me;o.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const m=i+u/t*a;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),r.push(0,0,1),d.x=(o[f]/e+1)/2,d.y=(o[f+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(r,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wn extends xt{constructor(e=1,t=1,i=1,a=32,s=1,o=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:a,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:l};const c=this;a=Math.floor(a),s=Math.floor(s);const d=[],u=[],f=[],m=[];let y=0;const v=[],p=i/2;let h=0;_(),o===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(d),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(m,2));function _(){const b=new N,R=new N;let E=0;const A=(t-e)/i;for(let U=0;U<=s;U++){const M=[],w=U/s,V=w*(t-e)+e;for(let W=0;W<=a;W++){const oe=W/a,O=oe*l+r,q=Math.sin(O),$=Math.cos(O);R.x=V*q,R.y=-w*i+p,R.z=V*$,u.push(R.x,R.y,R.z),b.set(q,A,$).normalize(),f.push(b.x,b.y,b.z),m.push(oe,1-w),M.push(y++)}v.push(M)}for(let U=0;U<a;U++)for(let M=0;M<s;M++){const w=v[M][U],V=v[M+1][U],W=v[M+1][U+1],oe=v[M][U+1];d.push(w,V,oe),d.push(V,W,oe),E+=6}c.addGroup(h,E,0),h+=E}function g(b){const R=y,E=new me,A=new N;let U=0;const M=b===!0?e:t,w=b===!0?1:-1;for(let W=1;W<=a;W++)u.push(0,p*w,0),f.push(0,w,0),m.push(.5,.5),y++;const V=y;for(let W=0;W<=a;W++){const O=W/a*l+r,q=Math.cos(O),$=Math.sin(O);A.x=M*$,A.y=p*w,A.z=M*q,u.push(A.x,A.y,A.z),f.push(0,w,0),E.x=q*.5+.5,E.y=$*.5*w+.5,m.push(E.x,E.y),y++}for(let W=0;W<a;W++){const oe=R+W,O=V+W;b===!0?d.push(O,O+1,oe):d.push(O+1,O,oe),U+=3}c.addGroup(h,U,b===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gi extends Wn{constructor(e=1,t=1,i=32,a=1,s=!1,o=0,r=Math.PI*2){super(0,e,t,i,a,s,o,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:r}}static fromJSON(e){return new Gi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bf extends xt{constructor(e=[],t=[],i=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:a};const s=[],o=[];r(a),c(i),d(),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(s.slice(),3)),this.setAttribute("uv",new et(o,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function r(_){const g=new N,b=new N,R=new N;for(let E=0;E<t.length;E+=3)m(t[E+0],g),m(t[E+1],b),m(t[E+2],R),l(g,b,R,_)}function l(_,g,b,R){const E=R+1,A=[];for(let U=0;U<=E;U++){A[U]=[];const M=_.clone().lerp(b,U/E),w=g.clone().lerp(b,U/E),V=E-U;for(let W=0;W<=V;W++)W===0&&U===E?A[U][W]=M:A[U][W]=M.clone().lerp(w,W/V)}for(let U=0;U<E;U++)for(let M=0;M<2*(E-U)-1;M++){const w=Math.floor(M/2);M%2===0?(f(A[U][w+1]),f(A[U+1][w]),f(A[U][w])):(f(A[U][w+1]),f(A[U+1][w+1]),f(A[U+1][w]))}}function c(_){const g=new N;for(let b=0;b<s.length;b+=3)g.x=s[b+0],g.y=s[b+1],g.z=s[b+2],g.normalize().multiplyScalar(_),s[b+0]=g.x,s[b+1]=g.y,s[b+2]=g.z}function d(){const _=new N;for(let g=0;g<s.length;g+=3){_.x=s[g+0],_.y=s[g+1],_.z=s[g+2];const b=p(_)/2/Math.PI+.5,R=h(_)/Math.PI+.5;o.push(b,1-R)}y(),u()}function u(){for(let _=0;_<o.length;_+=6){const g=o[_+0],b=o[_+2],R=o[_+4],E=Math.max(g,b,R),A=Math.min(g,b,R);E>.9&&A<.1&&(g<.2&&(o[_+0]+=1),b<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function f(_){s.push(_.x,_.y,_.z)}function m(_,g){const b=_*3;g.x=e[b+0],g.y=e[b+1],g.z=e[b+2]}function y(){const _=new N,g=new N,b=new N,R=new N,E=new me,A=new me,U=new me;for(let M=0,w=0;M<s.length;M+=9,w+=6){_.set(s[M+0],s[M+1],s[M+2]),g.set(s[M+3],s[M+4],s[M+5]),b.set(s[M+6],s[M+7],s[M+8]),E.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),U.set(o[w+4],o[w+5]),R.copy(_).add(g).add(b).divideScalar(3);const V=p(R);v(E,w+0,_,V),v(A,w+2,g,V),v(U,w+4,b,V)}}function v(_,g,b,R){R<0&&_.x===1&&(o[g]=_.x-1),b.x===0&&b.z===0&&(o[g]=R/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function h(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bf(e.vertices,e.indices,e.radius,e.details)}}const Cl=new N,Ll=new N,bu=new N,Pl=new Fn;class Uy extends xt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),s=Math.cos(eo*t),o=e.getIndex(),r=e.getAttribute("position"),l=o?o.count:r.count,c=[0,0,0],d=["a","b","c"],u=new Array(3),f={},m=[];for(let y=0;y<l;y+=3){o?(c[0]=o.getX(y),c[1]=o.getX(y+1),c[2]=o.getX(y+2)):(c[0]=y,c[1]=y+1,c[2]=y+2);const{a:v,b:p,c:h}=Pl;if(v.fromBufferAttribute(r,c[0]),p.fromBufferAttribute(r,c[1]),h.fromBufferAttribute(r,c[2]),Pl.getNormal(bu),u[0]=`${Math.round(v.x*a)},${Math.round(v.y*a)},${Math.round(v.z*a)}`,u[1]=`${Math.round(p.x*a)},${Math.round(p.y*a)},${Math.round(p.z*a)}`,u[2]=`${Math.round(h.x*a)},${Math.round(h.y*a)},${Math.round(h.z*a)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let _=0;_<3;_++){const g=(_+1)%3,b=u[_],R=u[g],E=Pl[d[_]],A=Pl[d[g]],U=`${b}_${R}`,M=`${R}_${b}`;M in f&&f[M]?(bu.dot(f[M].normal)<=s&&(m.push(E.x,E.y,E.z),m.push(A.x,A.y,A.z)),f[M]=null):U in f||(f[U]={index0:c[_],index1:c[g],normal:bu.clone()})}}for(const y in f)if(f[y]){const{index0:v,index1:p}=f[y];Cl.fromBufferAttribute(r,v),Ll.fromBufferAttribute(r,p),m.push(Cl.x,Cl.y,Cl.z),m.push(Ll.x,Ll.y,Ll.z)}this.setAttribute("position",new et(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Za extends no{constructor(e){super(e),this.uuid=hs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,a=this.holes.length;i<a;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(new no().fromJSON(a))}return this}}const SA={triangulate:function(n,e,t=2){const i=e&&e.length,a=i?e[0]*t:n.length;let s=Fy(n,0,a,t,!0);const o=[];if(!s||s.next===s.prev)return o;let r,l,c,d,u,f,m;if(i&&(s=TA(n,e,s,t)),n.length>80*t){r=c=n[0],l=d=n[1];for(let y=t;y<a;y+=t)u=n[y],f=n[y+1],u<r&&(r=u),f<l&&(l=f),u>c&&(c=u),f>d&&(d=f);m=Math.max(c-r,d-l),m=m!==0?32767/m:0}return Nr(s,o,t,r,l,m,0),o}};function Fy(n,e,t,i,a){let s,o;if(a===FA(n,e,t,i)>0)for(s=e;s<t;s+=i)o=qm(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=qm(s,n[s],n[s+1],o);return o&&_d(o,o.next)&&(kr(o),o=o.next),o}function ss(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(_d(t,t.next)||gt(t.prev,t,t.next)===0)){if(kr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Nr(n,e,t,i,a,s,o){if(!n)return;!o&&s&&IA(n,i,a,s);let r=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?wA(n,i,a,s):MA(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),kr(n),n=c.next,r=c.next;continue}if(n=c,n===r){o?o===1?(n=EA(ss(n),e,t),Nr(n,e,t,i,a,s,2)):o===2&&AA(n,e,t,i,a,s):Nr(ss(n),e,t,i,a,s,1);break}}}function MA(n){const e=n.prev,t=n,i=n.next;if(gt(e,t,i)>=0)return!1;const a=e.x,s=t.x,o=i.x,r=e.y,l=t.y,c=i.y,d=a<s?a<o?a:o:s<o?s:o,u=r<l?r<c?r:c:l<c?l:c,f=a>s?a>o?a:o:s>o?s:o,m=r>l?r>c?r:c:l>c?l:c;let y=i.next;for(;y!==e;){if(y.x>=d&&y.x<=f&&y.y>=u&&y.y<=m&&Xs(a,r,s,l,o,c,y.x,y.y)&&gt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function wA(n,e,t,i){const a=n.prev,s=n,o=n.next;if(gt(a,s,o)>=0)return!1;const r=a.x,l=s.x,c=o.x,d=a.y,u=s.y,f=o.y,m=r<l?r<c?r:c:l<c?l:c,y=d<u?d<f?d:f:u<f?u:f,v=r>l?r>c?r:c:l>c?l:c,p=d>u?d>f?d:f:u>f?u:f,h=hh(m,y,e,t,i),_=hh(v,p,e,t,i);let g=n.prevZ,b=n.nextZ;for(;g&&g.z>=h&&b&&b.z<=_;){if(g.x>=m&&g.x<=v&&g.y>=y&&g.y<=p&&g!==a&&g!==o&&Xs(r,d,l,u,c,f,g.x,g.y)&&gt(g.prev,g,g.next)>=0||(g=g.prevZ,b.x>=m&&b.x<=v&&b.y>=y&&b.y<=p&&b!==a&&b!==o&&Xs(r,d,l,u,c,f,b.x,b.y)&&gt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;g&&g.z>=h;){if(g.x>=m&&g.x<=v&&g.y>=y&&g.y<=p&&g!==a&&g!==o&&Xs(r,d,l,u,c,f,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;b&&b.z<=_;){if(b.x>=m&&b.x<=v&&b.y>=y&&b.y<=p&&b!==a&&b!==o&&Xs(r,d,l,u,c,f,b.x,b.y)&&gt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function EA(n,e,t){let i=n;do{const a=i.prev,s=i.next.next;!_d(a,s)&&zy(a,i,i.next,s)&&Dr(a,s)&&Dr(s,a)&&(e.push(a.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),kr(i),kr(i.next),i=n=s),i=i.next}while(i!==n);return ss(i)}function AA(n,e,t,i,a,s){let o=n;do{let r=o.next.next;for(;r!==o.prev;){if(o.i!==r.i&&kA(o,r)){let l=By(o,r);o=ss(o,o.next),l=ss(l,l.next),Nr(o,e,t,i,a,s,0),Nr(l,e,t,i,a,s,0);return}r=r.next}o=o.next}while(o!==n)}function TA(n,e,t,i){const a=[];let s,o,r,l,c;for(s=0,o=e.length;s<o;s++)r=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Fy(n,r,l,i,!1),c===c.next&&(c.steiner=!0),a.push(DA(c));for(a.sort(RA),s=0;s<a.length;s++)t=CA(a[s],t);return t}function RA(n,e){return n.x-e.x}function CA(n,e){const t=LA(n,e);if(!t)return e;const i=By(t,n);return ss(i,i.next),ss(t,t.next)}function LA(n,e){let t=e,i=-1/0,a;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,a=t.x<t.next.x?t:t.next,f===s))return a}t=t.next}while(t!==e);if(!a)return null;const r=a,l=a.x,c=a.y;let d=1/0,u;t=a;do s>=t.x&&t.x>=l&&s!==t.x&&Xs(o<c?s:i,o,l,c,o<c?i:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),Dr(t,n)&&(u<d||u===d&&(t.x>a.x||t.x===a.x&&PA(a,t)))&&(a=t,d=u)),t=t.next;while(t!==r);return a}function PA(n,e){return gt(n.prev,n,e.prev)<0&&gt(e.next,n,n.next)<0}function IA(n,e,t,i){let a=n;do a.z===0&&(a.z=hh(a.x,a.y,e,t,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==n);a.prevZ.nextZ=null,a.prevZ=null,NA(a)}function NA(n){let e,t,i,a,s,o,r,l,c=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,r=0,e=0;e<c&&(r++,i=i.nextZ,!!i);e++);for(l=c;r>0||l>0&&i;)r!==0&&(l===0||!i||t.z<=i.z)?(a=t,t=t.nextZ,r--):(a=i,i=i.nextZ,l--),s?s.nextZ=a:n=a,a.prevZ=s,s=a;t=i}s.nextZ=null,c*=2}while(o>1);return n}function hh(n,e,t,i,a){return n=(n-t)*a|0,e=(e-i)*a|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function DA(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Xs(n,e,t,i,a,s,o,r){return(a-o)*(e-r)>=(n-o)*(s-r)&&(n-o)*(i-r)>=(t-o)*(e-r)&&(t-o)*(s-r)>=(a-o)*(i-r)}function kA(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!OA(n,e)&&(Dr(n,e)&&Dr(e,n)&&UA(n,e)&&(gt(n.prev,n,e.prev)||gt(n,e.prev,e))||_d(n,e)&&gt(n.prev,n,n.next)>0&&gt(e.prev,e,e.next)>0)}function gt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function _d(n,e){return n.x===e.x&&n.y===e.y}function zy(n,e,t,i){const a=Nl(gt(n,e,t)),s=Nl(gt(n,e,i)),o=Nl(gt(t,i,n)),r=Nl(gt(t,i,e));return!!(a!==s&&o!==r||a===0&&Il(n,t,e)||s===0&&Il(n,i,e)||o===0&&Il(t,n,i)||r===0&&Il(t,e,i))}function Il(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Nl(n){return n>0?1:n<0?-1:0}function OA(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&zy(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Dr(n,e){return gt(n.prev,n,n.next)<0?gt(n,e,n.next)>=0&&gt(n,n.prev,e)>=0:gt(n,e,n.prev)<0||gt(n,n.next,e)<0}function UA(n,e){let t=n,i=!1;const a=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&a<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function By(n,e){const t=new fh(n.i,n.x,n.y),i=new fh(e.i,e.x,e.y),a=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=a,a.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function qm(n,e,t,i){const a=new fh(n,e,t);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function kr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function fh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function FA(n,e,t,i){let a=0;for(let s=e,o=t-i;s<t;s+=i)a+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return a}class vi{static area(e){const t=e.length;let i=0;for(let a=t-1,s=0;s<t;a=s++)i+=e[a].x*e[s].y-e[s].x*e[a].y;return i*.5}static isClockWise(e){return vi.area(e)<0}static triangulateShape(e,t){const i=[],a=[],s=[];Xm(e),jm(i,e);let o=e.length;t.forEach(Xm);for(let l=0;l<t.length;l++)a.push(o),o+=t[l].length,jm(i,t[l]);const r=SA.triangulate(i,a);for(let l=0;l<r.length;l+=3)s.push(r.slice(l,l+3));return s}}function Xm(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function jm(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Sf extends xt{constructor(e=new Za([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,a=[],s=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];o(c)}this.setAttribute("position",new et(a,3)),this.setAttribute("uv",new et(s,2)),this.computeVertexNormals();function o(r){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:m-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const h=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:zA;let g,b=!1,R,E,A,U;h&&(g=h.getSpacedPoints(d),b=!0,f=!1,R=h.computeFrenetFrames(d,!1),E=new N,A=new N,U=new N),f||(p=0,m=0,y=0,v=0);const M=r.extractPoints(c);let w=M.shape;const V=M.holes;if(!vi.isClockWise(w)){w=w.reverse();for(let P=0,ie=V.length;P<ie;P++){const z=V[P];vi.isClockWise(z)&&(V[P]=z.reverse())}}const oe=vi.triangulateShape(w,V),O=w;for(let P=0,ie=V.length;P<ie;P++){const z=V[P];w=w.concat(z)}function q(P,ie,z){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ie,z)}const $=w.length,K=oe.length;function B(P,ie,z){let Y,j,pe;const F=P.x-ie.x,x=P.y-ie.y,S=z.x-P.x,G=z.y-P.y,ge=F*F+x*x,ye=F*G-x*S;if(Math.abs(ye)>Number.EPSILON){const de=Math.sqrt(ge),Re=Math.sqrt(S*S+G*G),_e=ie.x-x/de,Ce=ie.y+F/de,Ne=z.x-G/Re,Fe=z.y+S/Re,ve=((Ne-_e)*G-(Fe-Ce)*S)/(F*G-x*S);Y=_e+F*ve-P.x,j=Ce+x*ve-P.y;const Qe=Y*Y+j*j;if(Qe<=2)return new me(Y,j);pe=Math.sqrt(Qe/2)}else{let de=!1;F>Number.EPSILON?S>Number.EPSILON&&(de=!0):F<-Number.EPSILON?S<-Number.EPSILON&&(de=!0):Math.sign(x)===Math.sign(G)&&(de=!0),de?(Y=-x,j=F,pe=Math.sqrt(ge)):(Y=F,j=x,pe=Math.sqrt(ge/2))}return new me(Y/pe,j/pe)}const Q=[];for(let P=0,ie=O.length,z=ie-1,Y=P+1;P<ie;P++,z++,Y++)z===ie&&(z=0),Y===ie&&(Y=0),Q[P]=B(O[P],O[z],O[Y]);const le=[];let ue,xe=Q.concat();for(let P=0,ie=V.length;P<ie;P++){const z=V[P];ue=[];for(let Y=0,j=z.length,pe=j-1,F=Y+1;Y<j;Y++,pe++,F++)pe===j&&(pe=0),F===j&&(F=0),ue[Y]=B(z[Y],z[pe],z[F]);le.push(ue),xe=xe.concat(ue)}for(let P=0;P<p;P++){const ie=P/p,z=m*Math.cos(ie*Math.PI/2),Y=y*Math.sin(ie*Math.PI/2)+v;for(let j=0,pe=O.length;j<pe;j++){const F=q(O[j],Q[j],Y);T(F.x,F.y,-z)}for(let j=0,pe=V.length;j<pe;j++){const F=V[j];ue=le[j];for(let x=0,S=F.length;x<S;x++){const G=q(F[x],ue[x],Y);T(G.x,G.y,-z)}}}const te=y+v;for(let P=0;P<$;P++){const ie=f?q(w[P],xe[P],te):w[P];b?(A.copy(R.normals[0]).multiplyScalar(ie.x),E.copy(R.binormals[0]).multiplyScalar(ie.y),U.copy(g[0]).add(A).add(E),T(U.x,U.y,U.z)):T(ie.x,ie.y,0)}for(let P=1;P<=d;P++)for(let ie=0;ie<$;ie++){const z=f?q(w[ie],xe[ie],te):w[ie];b?(A.copy(R.normals[P]).multiplyScalar(z.x),E.copy(R.binormals[P]).multiplyScalar(z.y),U.copy(g[P]).add(A).add(E),T(U.x,U.y,U.z)):T(z.x,z.y,u/d*P)}for(let P=p-1;P>=0;P--){const ie=P/p,z=m*Math.cos(ie*Math.PI/2),Y=y*Math.sin(ie*Math.PI/2)+v;for(let j=0,pe=O.length;j<pe;j++){const F=q(O[j],Q[j],Y);T(F.x,F.y,u+z)}for(let j=0,pe=V.length;j<pe;j++){const F=V[j];ue=le[j];for(let x=0,S=F.length;x<S;x++){const G=q(F[x],ue[x],Y);b?T(G.x,G.y+g[d-1].y,g[d-1].x+z):T(G.x,G.y,u+z)}}}k(),D();function k(){const P=a.length/3;if(f){let ie=0,z=$*ie;for(let Y=0;Y<K;Y++){const j=oe[Y];ee(j[2]+z,j[1]+z,j[0]+z)}ie=d+p*2,z=$*ie;for(let Y=0;Y<K;Y++){const j=oe[Y];ee(j[0]+z,j[1]+z,j[2]+z)}}else{for(let ie=0;ie<K;ie++){const z=oe[ie];ee(z[2],z[1],z[0])}for(let ie=0;ie<K;ie++){const z=oe[ie];ee(z[0]+$*d,z[1]+$*d,z[2]+$*d)}}i.addGroup(P,a.length/3-P,0)}function D(){const P=a.length/3;let ie=0;C(O,ie),ie+=O.length;for(let z=0,Y=V.length;z<Y;z++){const j=V[z];C(j,ie),ie+=j.length}i.addGroup(P,a.length/3-P,1)}function C(P,ie){let z=P.length;for(;--z>=0;){const Y=z;let j=z-1;j<0&&(j=P.length-1);for(let pe=0,F=d+p*2;pe<F;pe++){const x=$*pe,S=$*(pe+1),G=ie+Y+x,ge=ie+j+x,ye=ie+j+S,de=ie+Y+S;ce(G,ge,ye,de)}}}function T(P,ie,z){l.push(P),l.push(ie),l.push(z)}function ee(P,ie,z){X(P),X(ie),X(z);const Y=a.length/3,j=_.generateTopUV(i,a,Y-3,Y-2,Y-1);he(j[0]),he(j[1]),he(j[2])}function ce(P,ie,z,Y){X(P),X(ie),X(Y),X(ie),X(z),X(Y);const j=a.length/3,pe=_.generateSideWallUV(i,a,j-6,j-3,j-2,j-1);he(pe[0]),he(pe[1]),he(pe[3]),he(pe[1]),he(pe[2]),he(pe[3])}function X(P){a.push(l[P*3+0]),a.push(l[P*3+1]),a.push(l[P*3+2])}function he(P){s.push(P.x),s.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return BA(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const r=t[e.shapes[s]];i.push(r)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new uh[a.type]().fromJSON(a)),new Sf(i,e.options)}}const zA={generateTopUV:function(n,e,t,i,a){const s=e[t*3],o=e[t*3+1],r=e[i*3],l=e[i*3+1],c=e[a*3],d=e[a*3+1];return[new me(s,o),new me(r,l),new me(c,d)]},generateSideWallUV:function(n,e,t,i,a,s){const o=e[t*3],r=e[t*3+1],l=e[t*3+2],c=e[i*3],d=e[i*3+1],u=e[i*3+2],f=e[a*3],m=e[a*3+1],y=e[a*3+2],v=e[s*3],p=e[s*3+1],h=e[s*3+2];return Math.abs(r-d)<Math.abs(o-c)?[new me(o,1-l),new me(c,1-u),new me(f,1-y),new me(v,1-h)]:[new me(r,1-l),new me(d,1-u),new me(m,1-y),new me(p,1-h)]}};function BA(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,a=n.length;i<a;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Wr extends bf{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,a=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wr(e.radius,e.detail)}}class Mf extends xt{constructor(e=new Za([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],a=[],s=[],o=[];let r=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(r,l,d),r+=l,l=0;this.setIndex(i),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(s,3)),this.setAttribute("uv",new et(o,2));function c(d){const u=a.length/3,f=d.extractPoints(t);let m=f.shape;const y=f.holes;vi.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,h=y.length;p<h;p++){const _=y[p];vi.isClockWise(_)===!0&&(y[p]=_.reverse())}const v=vi.triangulateShape(m,y);for(let p=0,h=y.length;p<h;p++){const _=y[p];m=m.concat(_)}for(let p=0,h=m.length;p<h;p++){const _=m[p];a.push(_.x,_.y,0),s.push(0,0,1),o.push(_.x,_.y)}for(let p=0,h=v.length;p<h;p++){const _=v[p],g=_[0]+u,b=_[1]+u,R=_[2]+u;i.push(g,b,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return HA(t,e)}static fromJSON(e,t){const i=[];for(let a=0,s=e.shapes.length;a<s;a++){const o=t[e.shapes[a]];i.push(o)}return new Mf(i,e.curveSegments)}}function HA(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const a=n[t];e.shapes.push(a.uuid)}else e.shapes.push(n.uuid);return e}class qr extends xt{constructor(e=1,t=32,i=16,a=0,s=Math.PI*2,o=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:s,thetaStart:o,thetaLength:r},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+r,Math.PI);let c=0;const d=[],u=new N,f=new N,m=[],y=[],v=[],p=[];for(let h=0;h<=i;h++){const _=[],g=h/i;let b=0;h===0&&o===0?b=.5/t:h===i&&l===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){const E=R/t;u.x=-e*Math.cos(a+E*s)*Math.sin(o+g*r),u.y=e*Math.cos(o+g*r),u.z=e*Math.sin(a+E*s)*Math.sin(o+g*r),y.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),p.push(E+b,1-g),_.push(c++)}d.push(_)}for(let h=0;h<i;h++)for(let _=0;_<t;_++){const g=d[h][_+1],b=d[h][_],R=d[h+1][_],E=d[h+1][_+1];(h!==0||o>0)&&m.push(g,b,E),(h!==i-1||l<Math.PI)&&m.push(b,R,E)}this.setIndex(m),this.setAttribute("position",new et(y,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bd extends xt{constructor(e=1,t=.4,i=12,a=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:a,arc:s},i=Math.floor(i),a=Math.floor(a);const o=[],r=[],l=[],c=[],d=new N,u=new N,f=new N;for(let m=0;m<=i;m++)for(let y=0;y<=a;y++){const v=y/a*s,p=m/i*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(v),u.y=(e+t*Math.cos(p))*Math.sin(v),u.z=t*Math.sin(p),r.push(u.x,u.y,u.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),c.push(y/a),c.push(m/i)}for(let m=1;m<=i;m++)for(let y=1;y<=a;y++){const v=(a+1)*m+y-1,p=(a+1)*(m-1)+y-1,h=(a+1)*(m-1)+y,_=(a+1)*m+y;o.push(v,p,_),o.push(p,h,_)}this.setIndex(o),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ut extends ps{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ry,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const $m={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class GA{constructor(e,t,i){const a=this;let s=!1,o=0,r=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(d){r++,s===!1&&a.onStart!==void 0&&a.onStart(d,o,r),s=!0},this.itemEnd=function(d){o++,a.onProgress!==void 0&&a.onProgress(d,o,r),o===r&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],y=c[u+1];if(m.global&&(m.lastIndex=0),m.test(d))return y}return null}}}const VA=new GA;class wf{constructor(e){this.manager=e!==void 0?e:VA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,s){i.load(e,a,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}wf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ti={};class WA extends Error{constructor(e,t){super(e),this.response=t}}class qA extends wf{constructor(e){super(e)}load(e,t,i,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=$m.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ti[e]!==void 0){Ti[e].push({onLoad:t,onProgress:i,onError:a});return}Ti[e]=[],Ti[e].push({onLoad:t,onProgress:i,onError:a});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),r=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Ti[e],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,y=m!==0;let v=0;const p=new ReadableStream({start(h){_();function _(){u.read().then(({done:g,value:b})=>{if(g)h.close();else{v+=b.byteLength;const R=new ProgressEvent("progress",{lengthComputable:y,loaded:v,total:m});for(let E=0,A=d.length;E<A;E++){const U=d[E];U.onProgress&&U.onProgress(R)}h.enqueue(b),_()}})}}});return new Response(p)}else throw new WA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,r));case"json":return c.json();default:if(r===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(r),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(y=>m.decode(y))}}}).then(c=>{$m.add(e,c);const d=Ti[e];delete Ti[e];for(let u=0,f=d.length;u<f;u++){const m=d[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const d=Ti[e];if(d===void 0)throw this.manager.itemError(e),c;delete Ti[e];for(let u=0,f=d.length;u<f;u++){const m=d[u];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ef extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class XA extends Ef{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Su=new Je,Ym=new N,Km=new N;class jA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gf,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ym.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ym),Km.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Km),t.updateMatrixWorld(),Su.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $A extends jA{constructor(){super(new by(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ph extends Ef{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new $A}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class YA extends Ef{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Zm=new me;class KA{constructor(e=new me(1/0,1/0),t=new me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Ra{constructor(){this.type="ShapePath",this.color=new Ae,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new no,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,a){return this.currentPath.quadraticCurveTo(e,t,i,a),this}bezierCurveTo(e,t,i,a,s,o){return this.currentPath.bezierCurveTo(e,t,i,a,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(h){const _=[];for(let g=0,b=h.length;g<b;g++){const R=h[g],E=new Za;E.curves=R.curves,_.push(E)}return _}function i(h,_){const g=_.length;let b=!1;for(let R=g-1,E=0;E<g;R=E++){let A=_[R],U=_[E],M=U.x-A.x,w=U.y-A.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(A=_[E],M=-M,U=_[R],w=-w),h.y<A.y||h.y>U.y)continue;if(h.y===A.y){if(h.x===A.x)return!0}else{const V=w*(h.x-A.x)-M*(h.y-A.y);if(V===0)return!0;if(V<0)continue;b=!b}}else{if(h.y!==A.y)continue;if(U.x<=h.x&&h.x<=A.x||A.x<=h.x&&h.x<=U.x)return!0}}return b}const a=vi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,r,l;const c=[];if(s.length===1)return r=s[0],l=new Za,l.curves=r.curves,c.push(l),c;let d=!a(s[0].getPoints());d=e?!d:d;const u=[],f=[];let m=[],y=0,v;f[y]=void 0,m[y]=[];for(let h=0,_=s.length;h<_;h++)r=s[h],v=r.getPoints(),o=a(v),o=e?!o:o,o?(!d&&f[y]&&y++,f[y]={s:new Za,p:v},f[y].s.curves=r.curves,d&&y++,m[y]=[]):m[y].push({h:r,p:v[0]});if(!f[0])return t(s);if(f.length>1){let h=!1,_=0;for(let g=0,b=f.length;g<b;g++)u[g]=[];for(let g=0,b=f.length;g<b;g++){const R=m[g];for(let E=0;E<R.length;E++){const A=R[E];let U=!0;for(let M=0;M<f.length;M++)i(A.p,f[M].p)&&(g!==M&&_++,U?(U=!1,u[M].push(A)):h=!0);U&&u[g].push(A)}}_>0&&h===!1&&(m=u)}let p;for(let h=0,_=f.length;h<_;h++){l=f[h].s,c.push(l),p=m[h];for(let g=0,b=p.length;g<b;g++)l.holes.push(p[g].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:df}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=df);const Hy="teide-settings",Gy=100,Af=3e3,Vy=1e4,Tf=1e7,Wy={low:{segments:800,samples:15e5},standard:{segments:1200,samples:25e5},high:{segments:2e3,samples:5e6},ultra:{segments:Af,samples:Tf}},Or={low:{segments:600,samples:5e5},standard:{segments:1200,samples:12e5},high:{segments:1200,samples:2e6}},ZA={low:1,standard:1.25,high:1.5},JA=1.25,QA=2,eT={...Wy.standard},tT={...Or.standard};function Mu(){return{...ds()?tT:eT,language:null,onboardingDone:!1,tutorialDone:!1,invertPitch:!0,controlMode:"touch",gyroSensitivity:yn.sensDefault,musicVolume:Tt.musicVolume,musicMuted:!1,sfxVolume:Tt.sfxVolume,sfxMuted:!1}}function pt(){try{const n=localStorage.getItem(Hy);if(!n)return Mu();const e=JSON.parse(n);return nT({...Mu(),...e})}catch{return Mu()}}function oi(n){try{localStorage.setItem(Hy,JSON.stringify(qy(n)))}catch{}}function qy(n){return{...n,segments:Math.max(Gy,Math.min(Af,n.segments|0)),samples:Math.max(Vy,Math.min(Tf,n.samples|0))}}function nT(n){if(n=qy(n),!ds())return n;const e=Or.high;return n.segments>e.segments||n.samples>e.samples?(console.info(`[settings] Mobile clamp: persisted segments=${n.segments} samples=${n.samples} exceed mobile-high (${e.segments}/${e.samples}). Using mobile-standard for this session.`),{...Or.standard,language:n.language,onboardingDone:n.onboardingDone,tutorialDone:n.tutorialDone,invertPitch:n.invertPitch,controlMode:n.controlMode,gyroSensitivity:n.gyroSensitivity,musicVolume:n.musicVolume,musicMuted:n.musicMuted,sfxVolume:n.sfxVolume,sfxMuted:n.sfxMuted}):n}function iT(){const n=window.devicePixelRatio||1;if(!ds())return Math.min(n,QA);const e=pt();let t=null;for(const[a,s]of Object.entries(Or))if(s.segments===e.segments&&s.samples===e.samples){t=a;break}const i=t&&ZA[t]||JA;return Math.min(n,i)}function aT(){const n=pt(),e=new URLSearchParams(window.location.search),t=parseInt(e.get("segments"),10),i=parseInt(e.get("samples"),10);return Number.isFinite(t)&&t>=Gy&&t<=Af&&(n.segments=t),Number.isFinite(i)&&i>=Vy&&i<=Tf&&(n.samples=i),Te.segments=n.segments,Ct.sampleCount=n.samples,n}function sT(){const n=ds()?Or:Wy;return Object.entries(n).map(([e,t])=>({name:e,...t}))}function oT(){return!!pt().onboardingDone}function rT(n=!0){const e=pt();e.onboardingDone=!!n,oi(e)}function lT(){return!!pt().tutorialDone}function cT(n=!0){const e=pt();e.tutorialDone=!!n,oi(e)}function dT(){const n=pt().invertPitch;return n===void 0?!0:!!n}function uT(n){const e=pt();e.invertPitch=!!n,oi(e)}function hT(){return pt().controlMode==="gyro"?"gyro":"touch"}function Jm(n){const e=pt();e.controlMode=n==="gyro"?"gyro":"touch",oi(e)}function Rf(){const n=Number(pt().gyroSensitivity);return Number.isFinite(n)?Math.max(yn.sensMin,Math.min(yn.sensMax,n)):yn.sensDefault}function fT(n){const e=pt(),t=Number(n);e.gyroSensitivity=Number.isFinite(t)?Math.max(yn.sensMin,Math.min(yn.sensMax,t)):yn.sensDefault,oi(e)}const Sd=(n,e)=>(n=Number(n),Number.isFinite(n)?Math.max(0,Math.min(1,n)):e);function pT(){return Sd(pt().musicVolume,Tt.musicVolume)}function mT(n){const e=pt();e.musicVolume=Sd(n,Tt.musicVolume),oi(e)}function Xy(){return!!pt().musicMuted}function jy(n){const e=pt();e.musicMuted=!!n,oi(e)}function gT(){return Sd(pt().sfxVolume,Tt.sfxVolume)}function yT(n){const e=pt();e.sfxVolume=Sd(n,Tt.sfxVolume),oi(e)}function $y(){return!!pt().sfxMuted}function Yy(n){const e=pt();e.sfxMuted=!!n,oi(e)}const Et=new Ry;Et.background=new Ae(Ye.sky);Et.fog=new Vr(Ye.sky,Te.fogStart,Te.fogEnd);const Xt=new Tn(62,window.innerWidth/window.innerHeight,.5,15e3),fn=new vf({antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});fn.setPixelRatio(iT());fn.setSize(window.innerWidth,window.innerHeight);fn.outputColorSpace=Ot;document.body.appendChild(fn.domElement);const Ky=new ph(16774882,1.05);Ky.position.set(80,140,60);Et.add(Ky);const vT=new XA(14542572,8292974,.55);Et.add(vT);const mh=new N(0,1,0);window.addEventListener("resize",()=>{Xt.aspect=window.innerWidth/window.innerHeight,Xt.updateProjectionMatrix(),fn.setSize(window.innerWidth,window.innerHeight)});const Zy={"glider-wind":{src:"ambient/wind-glide.mp3",channel:"sfx",mode:"loop",gain:.3,filtered:!0},"ocean-surf-bed":{src:"ambient/ocean-waves.mp3",channel:"sfx",mode:"loop",gain:.55},"forest-bed":{src:"ambient/forest-ambience.mp3",channel:"sfx",mode:"loop",gain:.5},"thermal-lift":{src:"ambient/thermal-lift.mp3",channel:"sfx",mode:"loop",gain:.6},"city-bed":{src:"ambient/city-ambience.mp3",channel:"sfx",mode:"loop",gain:.5},touchdown:{src:"sfx/tyres-touchdown.mp3",channel:"sfx",mode:"oneshot",gain:.13},crash:{src:"sfx/crash.mp3",channel:"sfx",mode:"oneshot",gain:.8},"gear-deploy":{src:"sfx/gear-extend.mp3",channel:"sfx",mode:"oneshot",gain:.16},"spend-points":{src:"sfx/spend-points.mp3",channel:"sfx",mode:"oneshot",gain:.6},"buy-diamonds":{src:"sfx/diamonds-earn.mp3",channel:"sfx",mode:"oneshot",gain:.7},"spend-diamonds":{src:"sfx/diamonds-earn.mp3",channel:"sfx",mode:"oneshot",gain:.6,rate:.82},"ring-first":{src:"sfx/ring.mp3",channel:"sfx",mode:"oneshot",gain:.18},"ring-recollect":{src:"sfx/ring.mp3",channel:"sfx",mode:"oneshot",gain:.08,rate:.92},"one-shot-boost":{src:"sfx/boost.mp3",channel:"sfx",mode:"oneshot",gain:.7},"landing-success":{src:"sfx/success.mp3",channel:"sfx",mode:"oneshot",gain:.3},denied:{src:"sfx/denied.mp3",channel:"sfx",mode:"oneshot",gain:.45},"ui-confirm":{src:"sfx/ui-click.mp3",channel:"sfx",mode:"oneshot",gain:.35},"menu-music":{src:"music/menu-music.mp3",channel:"music",mode:"stream",gain:1}};function xT(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function _T(n){n.vertexShader=`attribute float instanceAlpha;
varying float vInstanceAlpha;
`+n.vertexShader.replace("void main() {",`void main() {
	vInstanceAlpha = instanceAlpha;`),n.fragmentShader=`varying float vInstanceAlpha;
`+n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
	diffuseColor.a *= vInstanceAlpha;`)}function gh(n,e="instanceAlpha"){return n.onBeforeCompile=_T,n.customProgramCacheKey=()=>e,n}function yh(n,e,t=1){const i=new Float32Array(e).fill(t);return n.setAttribute("instanceAlpha",new ch(i,1)),i}const ot=[{id:"TFN",x:510,z:-509,heading:1.885,length:80,width:3},{id:"TFS",x:-61,z:712,heading:-1.396,length:80,width:3},{id:"GMZ",x:-1630,z:752,heading:-1.623,length:60,width:3},{id:"SPC",x:-2967,z:-918,heading:-.611,length:70,width:3},{id:"VDE",x:-3286,z:1364,heading:-2.007,length:55,width:3},{id:"LPA",x:2845,z:1030,heading:-.489,length:90,width:3.5},{id:"FUE",x:6500,z:-417,heading:-.244,length:80,width:3},{id:"ACE",x:7210,z:-1809,heading:-.524,length:80,width:3},{id:"GRAC",x:7455,z:-2588,heading:-1.571,length:40,width:2.5}];for(const n of ot)n.activeHeading=n.heading;function Jy(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const bT=.42,ST=.55;function MT(n,e){for(const t of ot){const i=n.x-t.x,a=n.z-t.z,s=Math.cos(t.heading),o=Math.sin(t.heading),r=i*s-a*o,l=i*o+a*s;if(Math.abs(r)>t.width*.5-bT||Math.abs(l)>t.length*.5-ST)continue;const c=n.y-t.elevation;if(c<-.5||c>ns.rollingHeight)continue;const d=Jy(e-t.activeHeading);if(!(Math.abs(d)>ns.headingTolerance))return t}return null}function wT(n,e=1){for(const t of ot){const i=n.x-t.x,a=n.z-t.z,s=Math.cos(t.heading),o=Math.sin(t.heading),r=i*s-a*o,l=i*o+a*s;if(Math.abs(r)<=t.width*.55+e&&Math.abs(l)<=t.length*.5+e)return t}return null}function ET(n,e,t){for(const i of ot){const a=n.x-i.x,s=n.z-i.z,o=Math.sqrt(a*a+s*s),r=n.y-i.elevation;if(o<e&&r<t&&r>-2)return!0}return!1}const Qy=[],ev=[],AT=gh(new Xn({color:16771240,transparent:!0,depthWrite:!1})),TT=new Xn({}),RT=new qr(.15,8,6),tv=new Ae(7227922),CT=new Ae(16770976),LT=.45,Rc=.22,PT=new ut({color:14729280,flatShading:!0}),nv=new Wn(.05,.06,Rc,5);nv.translate(0,Rc/2,0);const Qm=new Ae,eg=new Je,IT=new N,NT=new N,DT=new Lt,Cf=[],tg=1,Cc=.32,ng=1.6,ig=1.2,vh={T:["#####","..#..","..#..","..#..","..#..","..#..","..#.."],F:["#####","#....","#....","####.","#....","#....","#...."],N:["#...#","##..#","#.#.#","#.#.#","#..##","#...#","#...#"],S:[".####","#....","#....",".###.","....#","....#","####."],G:[".###.","#...#","#....","#.###","#...#","#...#",".###."],M:["#...#","##.##","#.#.#","#.#.#","#...#","#...#","#...#"],Z:["#####","....#","...#.","..#..",".#...","#....","#####"],P:["####.","#...#","#...#","####.","#....","#....","#...."],C:[".###.","#...#","#....","#....","#....","#...#",".###."],V:["#...#","#...#","#...#","#...#","#...#",".#.#.","..#.."],D:["####.","#...#","#...#","#...#","#...#","#...#","####."],E:["#####","#....","#....","####.","#....","#....","#####"],L:["#....","#....","#....","#....","#....","#....","#####"],A:[".###.","#...#","#...#","#####","#...#","#...#","#...#"],U:["#...#","#...#","#...#","#...#","#...#","#...#",".###."],R:["####.","#...#","#...#","####.","#.#..","#..#.","#...#"]},kT=new Xn({color:15790320,side:Jt});function iv(n){const e=[],t=[];for(const[s,o,r,l]of n){const c=e.length/3,d=r/2,u=l/2;e.push(s-d,.06,o-u,s+d,.06,o-u,s+d,.06,o+u,s-d,.06,o+u),t.push(c,c+1,c+2,c,c+2,c+3)}const a=new xt;return a.setAttribute("position",new et(e,3)),a.setIndex(t),new nt(a,kT)}function OT(n){const t=2.8000000000000003,i=.4*.7,a=[...n.id].filter(s=>vh[s]).length;return{cell:.4,glyphL:t,gap:i,totalL:a*t+Math.max(0,a-1)*i,center:n.length*.3}}function UT(n){const e=[],i=n.width/2-.09-.1;e.push([-i,0,.18,n.length*.98],[i,0,.18,n.length*.98]);const a=6,s=3,o=n.width*.9/a,r=o*.55;for(const l of[-1,1]){const c=l*(n.length/2-s/2-.8);for(let d=0;d<a;d++)e.push([(d-(a-1)/2)*o,c,r,s])}return iv(e)}function FT(n){const e=[],{cell:t,glyphL:i,gap:a,totalL:s,center:o}=OT(n),r=[...n.id].filter(h=>vh[h]);let l=o-s/2;for(const h of r){const _=vh[h];for(let g=0;g<7;g++)for(let b=0;b<5;b++)_[g][b]==="#"&&e.push([(b-2)*t,l+g*t,t*.85,t*.85]);l+=i+a}const c=3,d=3,u=.18,f=n.length*.8,m=s/2+6,y=Math.max(1,Math.floor((f+d)/(c+d)));let p=-(y*c+(y-1)*d)/2+c/2;for(let h=0;h<y;h++)Math.abs(p-o)>m&&e.push([0,p,u,c]),p+=c+d;return iv(e)}const Pi={concrete:new ut({color:fi.colors.concrete,flatShading:!0}),glass:new ut({color:fi.colors.glass,flatShading:!0}),accent:new ut({color:fi.colors.accent,flatShading:!0})};function zT(){const n=fi.towerHeight,e=n*.66,t=n*.2,i=new dt,a=(r,l,c)=>{const d=new nt(r,l);d.position.y=c,i.add(d)};a(new sn(3,.6,3),Pi.concrete,.3),a(new sn(1.5,e,1.5),Pi.concrete,.6+e/2),a(new sn(2.4,t,2.4),Pi.glass,.6+e+t/2);const s=.6+e+t;a(new sn(2.7,.25,2.7),Pi.concrete,s+.125);const o=new Wn(.05,.05,n*.22,5);for(const r of[-.55,.55]){const l=new nt(o,Pi.accent);l.position.set(r,s+.25+n*.11,0),i.add(l)}return a(new qr(.32,8,6),Pi.concrete,s+.55),i}function BT(){const n=fi.terminal,e=new dt,t=(i,a,s,o,r)=>{const l=new nt(i,a);l.position.set(s,o,r),e.add(l)};return t(new sn(n.depth,n.height,n.length),Pi.concrete,0,n.height/2,0),t(new sn(.2,n.height*.55,n.length*.88),Pi.glass,-3/2,n.height*.5,0),t(new sn(n.depth+.6,.25,n.length+.6),Pi.concrete,0,n.height+.125,0),e}const HT=zT(),GT=BT();function VT(){const n=new dt,e=new ut({color:Ye.runway,flatShading:!0}),t=new Je;for(let i=0;i<ot.length;i++){const a=ot[i],s=new dt,o=new ms(a.width,a.length);o.rotateX(-Math.PI/2),s.add(new nt(o,e)),s.add(UT(a));const r=new dt,l=a.width*.68,c=l*1.05,d=new Za;d.moveTo(0,c*.55),d.lineTo(-l/2,-c*.45),d.lineTo(0,-c*.05),d.lineTo(l/2,-c*.45),d.closePath();const u=new Mf(d);u.rotateX(-Math.PI/2);const f=Math.max(7,Math.round(a.length/5)),m=new Float32Array(f),y=yh(u,f,Cc),v=new on(u,AT,f);v.renderOrder=1;for(let w=0;w<f;w++){const V=w/(f-1)-.5;t.makeTranslation(0,.08,V*a.length*.85),v.setMatrixAt(w,t),m[w]=.5-V,y[w]=Cc}v.instanceMatrix.needsUpdate=!0,r.add(v),Qy.push({mesh:v,alpha:y,posT:m,count:f});const h=Math.max(2,Math.floor(a.length/4.5)),_=h*2,g=new Float32Array(_),b=new Float32Array(_*3),R=new on(RT,TT,_),E=new on(nv,PT,_);let A=0;for(let w=0;w<h;w++){const V=w/(h-1)-.5,W=V*a.length*.97,oe=.5-V;for(const O of[-1,1]){const q=O*a.width*.6;t.makeTranslation(q,Rc,W),R.setMatrixAt(A,t),R.setColorAt(A,tv),t.makeTranslation(q,0,W),E.setMatrixAt(A,t),g[A]=oe,b[A*3]=q,b[A*3+1]=Rc,b[A*3+2]=W,A++}}R.instanceMatrix.needsUpdate=!0,R.instanceColor.needsUpdate=!0,E.instanceMatrix.needsUpdate=!0,r.add(R),r.add(E),ev.push({mesh:R,posT:g,base:b,count:_}),r.add(FT(a)),s.add(r),Cf[i]=r;const U=HT.clone();U.scale.setScalar(fi.towerScale),U.position.set(fi.towerSide,0,fi.towerAlong*a.length*.5),s.add(U);const M=GT.clone();M.position.set(fi.terminal.side,0,fi.terminal.along*a.length*.5),s.add(M),s.position.set(a.x,a.elevation+.04,a.z),s.rotation.y=a.heading,n.add(s)}return n}function WT(n){const e=n%ng/ng;for(const i of Qy){const{alpha:a,posT:s,count:o}=i;for(let r=0;r<o;r++){const l=(e-s[r]+1)%1;a[r]=l<.16?tg-(tg-Cc)*(l/.16):Cc}i.mesh.geometry.attributes.instanceAlpha.needsUpdate=!0}const t=n%ig/ig;for(const i of ev){const{mesh:a,posT:s,base:o,count:r}=i;for(let l=0;l<r;l++){const c=(t-s[l]+1)%1,d=c<.22?1-c/.22:0;Qm.copy(tv).lerp(CT,d),a.setColorAt(l,Qm);const u=1+d*LT;eg.compose(IT.set(o[l*3],o[l*3+1],o[l*3+2]),DT,NT.set(u,u,u)),a.setMatrixAt(l,eg)}a.instanceColor.needsUpdate=!0,a.instanceMatrix.needsUpdate=!0}}function qT(n){const e=ot.indexOf(n);return Cf[e]??null}function av(n){for(let e=0;e<ot.length;e++){const t=ot[e];if(t===n)continue;const i=Math.random()<.5;t.activeHeading=i?Jy(t.heading+Math.PI):t.heading;const a=Cf[e];a&&(a.rotation.y=i?Math.PI:0)}}const Mt={TREE:10,SHRUB:20,GRASS:30,CROP:40,URBAN:50,BARE:60,SNOW:70,WATER:80,WETLAND:90};let Zn=null,sv=[];async function XT(n="/teide-game/landcover/canaries.png"){const e=new Image;e.src=n,await e.decode();const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0);const a=i.getImageData(0,0,e.width,e.height).data,s=new Uint8Array(e.width*e.height);for(let o=0,r=0;r<s.length;o+=4,r++)s[r]=a[o];Zn={data:s,w:e.width,h:e.height},sv=YT()}function jT(n,e){const{center:t,metersPerUnit:i}=Te.heightmap,a=n*i,s=-e*i,o=t.lat+s/111320,r=t.lon+a/(111320*Math.cos(t.lat*Math.PI/180));return{lat:o,lon:r}}function $T(n,e){const{bbox:t,center:i,metersPerUnit:a}=Te.heightmap,s=t.lonW+n/(Zn.w-1)*(t.lonE-t.lonW),o=t.latN-e/(Zn.h-1)*(t.latN-t.latS),r=(s-i.lon)*111320*Math.cos(i.lat*Math.PI/180),l=(o-i.lat)*111320;return{x:r/a,z:-l/a}}function Hn(n,e){if(!Zn)return Mt.WATER;const{lat:t,lon:i}=jT(n,e),{bbox:a}=Te.heightmap,s=(i-a.lonW)/(a.lonE-a.lonW)*(Zn.w-1),o=(a.latN-t)/(a.latN-a.latS)*(Zn.h-1);if(s<0||o<0||s>Zn.w-1||o>Zn.h-1)return Mt.WATER;const r=Math.round(s),l=Math.round(o);return Zn.data[l*Zn.w+r]}function YT(){const{data:n,w:e,h:t}=Zn,{minClusterPixels:i}=Ct.urban,a=new Uint8Array(n.length),s=[],o=[],r=[0,0,0,0];function l(d){const u=d%e,f=d/e|0;let m=0;return u>0&&(r[m++]=d-1),u<e-1&&(r[m++]=d+1),f>0&&(r[m++]=d-e),f<t-1&&(r[m++]=d+e),m}for(let d=0;d<n.length;d++){if(a[d]||n[d]!==Mt.URBAN)continue;const u=[],f=[d];a[d]=1;let m=0;for(;m<f.length;){const y=f[m++];u.push(y);const v=l(y);for(let p=0;p<v;p++){const h=r[p];!a[h]&&n[h]===Mt.URBAN&&(a[h]=1,f.push(h))}}u.length<i?o.push(...u):s.push(u)}for(const d of o){const u=l(d),f=new Map;for(let v=0;v<u;v++){const p=n[r[v]];p!==Mt.URBAN&&p!==Mt.WATER&&f.set(p,(f.get(p)||0)+1)}let m=Mt.GRASS,y=0;for(const[v,p]of f)p>y&&(m=v,y=p);n[d]=m}const c=s.map(d=>{let u=0,f=0;const m=[];for(const y of d){const v=y%e,p=y/e|0,{x:h,z:_}=$T(v,p);m.push({x:h,z:_}),u+=h,f+=_}return{pixelCount:d.length,centerX:u/d.length,centerZ:f/d.length,pixels:m}});return c.sort((d,u)=>u.pixelCount-d.pixelCount),console.log(`landcover: ${c.length} urban clusters surviving (${o.length} tiny urban pixels reclassified)`),c}function KT(){return sv}let On=null;function ZT(){return On}let Oa=null,tr=0;async function JT(n=Te.heightmap.url){const e=new Image;e.src=n,await e.decode();const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0),On={data:i.getImageData(0,0,e.width,e.height).data,w:e.width,h:e.height}}function QT(n,e){const{center:t,metersPerUnit:i}=Te.heightmap,a=n*i,s=-e*i,o=t.lat+s/111320,r=t.lon+a/(111320*Math.cos(t.lat*Math.PI/180));return{lat:o,lon:r}}function e2(n,e){if(!On)return 0;const{bbox:t,elevRange:i}=Te.heightmap,a=(e-t.lonW)/(t.lonE-t.lonW)*(On.w-1),s=(t.latN-n)/(t.latN-t.latS)*(On.h-1);if(a<0||s<0||a>On.w-1||s>On.h-1)return 0;const o=Math.floor(a),r=Math.floor(s),l=Math.min(o+1,On.w-1),c=Math.min(r+1,On.h-1),d=a-o,u=s-r,f=i[1]-i[0],m=(y,v)=>{const p=(v*On.w+y)*4,h=On.data[p]<<8|On.data[p+1];return i[0]+h/65535*f};return(1-d)*(1-u)*m(o,r)+d*(1-u)*m(l,r)+(1-d)*u*m(o,c)+d*u*m(l,c)}function Ln(n,e){const{lat:t,lon:i}=QT(n,e);return e2(t,i)/Te.heightmap.metersPerUnit*Te.heightmap.elevationExaggeration}function t2(n,e,t){const i=F0;if(t<Te.waterLevel+i.waterGuard)return t;const a=i.slopeEps,s=(Ln(n+a,e)-Ln(n-a,e))/(2*a),o=(Ln(n,e+a)-Ln(n,e-a))/(2*a),r=Hi.smoothstep(Math.hypot(s,o),i.slopeGateLo,i.slopeGateHi);if(r<=0)return t;const l=i.stepHeight,c=Math.floor(t/l)*l,d=t/l-Math.floor(t/l),u=c+l*d*d*(3-2*d);return t+(u-t)*i.riserSharpness*r}function Lo(n,e){return t2(n,e,Ln(n,e))}function ov(n,e,t){let i=t,a=0;const s=fc;for(const o of ot){const r=n-o.x,l=e-o.z,c=Math.cos(o.heading),d=Math.sin(o.heading),u=r*c-l*d,f=r*d+l*c,m=Math.max(0,Math.abs(u)-o.width/2),y=Math.max(0,Math.abs(f)-o.length/2),v=Math.max(0,m-s.sideApron),p=Math.max(0,y-s.endApron),h=Math.sqrt(v*v+p*p);if(h<s.fadeWidth){const _=Hi.smoothstep(h,0,s.fadeWidth);i=Hi.lerp(o.elevation,i,_),a=Math.max(a,1-_)}if(m<s.corridorHalfWidth){const _=o.elevation+Math.max(0,y-s.endApron)*s.climbGradient;i>_&&(i=_)}}return{y:i,onRunway:a}}function ag(n,e){return ov(n,e,Lo(n,e)).y}function Ut(n,e){if(!Oa)return ag(n,e);const t=Te.size/2,i=Te.segments,a=Te.size/i,s=(n+t)/a,o=(e+t)/a;if(s<0||o<0||s>i||o>i)return ag(n,e);const r=Math.min(i-1,Math.floor(s)),l=Math.min(i-1,Math.floor(o)),c=s-r,d=o-l,u=Oa[l*tr+r],f=Oa[l*tr+r+1],m=Oa[(l+1)*tr+r],y=Oa[(l+1)*tr+r+1];return(1-c)*(1-d)*u+c*(1-d)*f+(1-c)*d*m+c*d*y}const n2=90,i2=200,xh=[];function a2(){const n=Te.size,e=Te.segments,t=n/e,i=e+1;tr=i,Oa=new Float32Array(i*i);const a=new Float32Array(i*i),s=new Float32Array(i*i*3),o=new Ae(Ye.pineCanopy),r=new Ae(Ye.laurelCanopy),l=new Ae(Ye.shrubBody),c=new Ae(Ye.grassGround),d=new Ae(Ye.cropGround),u=new Ae(Ye.urbanGround),f=new Ae(Ye.bareGround),m=new Ae(Ye.shore),y=new Ae(Ye.snow),v=new Ae(Ye.runway),p=new Ae(Ye.rock),h=new Ae,_=Te.heightmap.metersPerUnit,g=Te.heightmap.elevationExaggeration,b=80/_*g,R=2500/_*g,E=3200/_*g,A=Ct.laurelMaxAltitude*g,U=i*i;for(let oe=0;oe<U;oe++){const O=oe%i,q=oe/i|0,$=-8e3+O*t,K=-8e3+q*t,B=ov($,K,Lo($,K)),Q=B.y,le=B.onRunway;switch(a[oe]=Q<Te.waterLevel?Q-Kx.sinkDepth:Q,Oa[oe]=a[oe],Hn($,K)){case Mt.TREE:h.copy(Q>=A?o:r);break;case Mt.SHRUB:h.copy(l);break;case Mt.GRASS:h.copy(c);break;case Mt.CROP:h.copy(d);break;case Mt.URBAN:h.copy(u);break;case Mt.BARE:h.copy(f);break;default:h.copy(m);break}if(Q>Te.waterLevel){const te=F0.slopeEps,k=(Ln($+te,K)-Ln($-te,K))/(2*te),D=(Ln($,K+te)-Ln($,K-te))/(2*te),C=Hi.smoothstep(Math.hypot(k,D),Od.slopeLo,Od.slopeHi);C>0&&h.lerp(p,C*Od.strength)}if(Q>E)h.copy(y);else if(Q>R){const te=(Q-R)/(E-R);h.lerp(y,te)}if(Q<Te.waterLevel+b){const te=(Q-Te.waterLevel)/b;h.lerp(m,1-Math.max(0,te))}le>.001&&h.lerp(v,le*.35);const xe=.94+xT($,K)*.12;s[oe*3]=h.r*xe,s[oe*3+1]=h.g*xe,s[oe*3+2]=h.b*xe}const M=new ut({vertexColors:!0,flatShading:!0}),w=new dt,V=n2,W=Math.ceil(e/V);for(let oe=0;oe<W;oe++){const O=oe*V,q=Math.min(V,e-O);for(let $=0;$<W;$++){const K=$*V,B=Math.min(V,e-K),Q=new ms(B*t,q*t,B,q);Q.rotateX(-Math.PI/2);const le=Q.attributes.position,ue=new Float32Array(le.count*3);for(let C=0;C<=q;C++)for(let T=0;T<=B;T++){const ee=C*(B+1)+T,ce=(O+C)*i+(K+T);le.setY(ee,a[ce]),ue[ee*3]=s[ce*3],ue[ee*3+1]=s[ce*3+1],ue[ee*3+2]=s[ce*3+2]}Q.setAttribute("color",new Dt(ue,3)),Q.computeBoundingSphere();const xe=new nt(Q,M),te=-8e3+K*t+B*t/2,k=-8e3+O*t+q*t/2;xe.position.set(te,0,k),w.add(xe);const D=Q.boundingSphere;xh.push({mesh:xe,cx:te+D.center.x,cy:D.center.y,cz:k+D.center.z,radius:D.radius})}}return w}function s2(n,e){if(!e){for(const o of xh)o.mesh.visible=!0;return}const t=Te.fogEnd+i2,i=n.position.x,a=n.position.y,s=n.position.z;for(const o of xh){const r=i-o.cx,l=a-o.cy,c=s-o.cz;o.mesh.visible=Math.sqrt(r*r+l*l+c*c)-o.radius<t}}function o2(){const n=new ms(Te.size*1.6,Te.size*1.6);n.rotateX(-Math.PI/2);const e=new ut({color:Ye.water,transparent:!0,opacity:.96}),t=new nt(n,e);return t.position.y=Te.waterLevel,t}const r2={tenerife:{count:18,spread:900,radiusRange:[8,18],strengthRange:[.55,1.55]},gomera:{count:6,spread:280,radiusRange:[9,14],strengthRange:[.65,1.3]},palma:{count:9,spread:480,radiusRange:[8,16],strengthRange:[.6,1.5]},gc:{count:12,spread:560,radiusRange:[8,17],strengthRange:[.55,1.5]},hierro:{count:5,spread:280,radiusRange:[9,13],strengthRange:[.65,1.3]},fuerte:{count:12,spread:1100,radiusRange:[10,18],strengthRange:[.55,1.2]},lanza:{count:9,spread:640,radiusRange:[9,16],strengthRange:[.6,1.3]},graciosa:{count:3,spread:120,radiusRange:[8,12],strengthRange:[.7,1.1]}};function l2(n){let e=n>>>0;return()=>{e=e+2654435769>>>0;let t=e;return t=Math.imul(t^t>>>16,569420461),t=Math.imul(t^t>>>15,1935289751),((t^t>>>15)>>>0)/4294967296}}function c2(){const n=[],e=l2(12648430);for(const t of wt){const i=r2[t.id];if(i)for(let a=0;a<i.count;a++){const s=e()*Math.PI*2,o=Math.sqrt(e())*i.spread,r=t.x+Math.cos(s)*o,l=t.z+Math.sin(s)*o,c=i.radiusRange[0]+e()*(i.radiusRange[1]-i.radiusRange[0]),d=i.strengthRange[0]+e()*(i.strengthRange[1]-i.strengthRange[0]);n.push({x:r,z:l,radius:c,strength:d})}}return n}const pn=c2(),Lc=.55,rv=1.05,d2=.9;let Go,ec,tc,_h,Ki,Pc,bh=null;function lv(n){bh&&(bh.visible=!!n)}function u2(){const n=new dt;bh=n;for(let r=pn.length-1;r>=0;r--)Ut(pn[r].x,pn[r].z)<Te.waterLevel+.5&&pn.splice(r,1);for(const r of pn)r.baseElevation=Ut(r.x,r.z);for(const r of pn){const l=new Xn({color:xn.columnColor,transparent:!0,opacity:xn.columnOpacity*r.strength,side:Jt,depthWrite:!1}),c=new Wn(r.radius*rv,r.radius*Lc,xn.columnTop,20,1,!0);c.translate(0,xn.columnTop/2,0);const d=new nt(c,l);d.position.set(r.x,r.baseElevation,r.z),n.add(d)}const e=pn.map(r=>Math.max(10,Math.floor(xn.particleDensity*Math.PI*r.radius*r.radius))),t=e.reduce((r,l)=>r+l,0);Go=new Float32Array(t*3),ec=new Float32Array(t),tc=new Float32Array(t),_h=new Uint16Array(t),Ki=new Float32Array(t);const i=new Float32Array(t);let a=0;for(let r=0;r<pn.length;r++){const l=pn[r];for(let c=0;c<e[r];c++){const d=Math.sqrt(Math.random())*d2,u=Math.random()*Math.PI*2;ec[a]=Math.cos(u)*d,tc[a]=Math.sin(u)*d,_h[a]=r,Ki[a]=Math.random(),i[a]=xn.particleSize*(.7+.5*l.strength);const f=l.radius*Lc;Go[a*3+0]=l.x+ec[a]*f,Go[a*3+1]=l.baseElevation,Go[a*3+2]=l.z+tc[a]*f,a++}}const s=new xt;s.setAttribute("position",new Dt(Go,3)),s.setAttribute("size",new Dt(i,1));const o=new ga({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Ae(xn.particleColor)},uOpacity:{value:xn.particleOpacity}},vertexShader:`
      attribute float size;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uOpacity;
      void main() {
        // Soft round dot
        vec2 d = gl_PointCoord - vec2(0.5);
        float a = smoothstep(0.5, 0.15, length(d));
        if (a < 0.01) discard;
        gl_FragColor = vec4(uColor, uOpacity * a);
      }
    `});return Pc=new Iy(s,o),n.add(Pc),n}function h2(n){if(!Pc)return;const e=Pc.geometry.attributes.position,t=e.array,i=xn.columnTop,a=xn.riseSpeed;for(let s=0;s<Ki.length;s++){const o=pn[_h[s]];Ki[s]+=a*o.strength/i*n,Ki[s]>=1&&(Ki[s]-=1);const r=o.radius*(Lc+(rv-Lc)*Ki[s]);t[s*3+0]=o.x+ec[s]*r,t[s*3+1]=o.baseElevation+Ki[s]*i,t[s*3+2]=o.z+tc[s]*r}e.needsUpdate=!0}function cv(n,e,t){let i=0;for(const a of pn){const s=n-a.x,o=t-a.z,r=Math.sqrt(s*s+o*o);if(r>=a.radius)continue;const l=e-(a.baseElevation??0);if(l<0)continue;const c=1-r/a.radius,d=Math.max(0,1-l/xn.maxAltitude);i+=xn.liftAtCenter*a.strength*c*d}return i}const dv="/teide-game/audio/",sg=window.AudioContext||window.webkitAudioContext;let tt=null,Vo=null,Ic=null,Nc=null,Lf=!1;const Dc={},Pf={},kc={},Ga={};let Oc=Tt.musicVolume,If=!1,Uc=Tt.sfxVolume,Nf=!1,nc=null,Sh=!1,og=!1;const Ua=n=>n<0?0:n>1?1:n,Os=(n,e,t)=>n+(e-n)*t,Fc=(n,e)=>(n=Number(n),Number.isFinite(n)?n:e);function f2(){if(tt||!sg)return;try{tt=new sg}catch{tt=null;return}Vo=tt.createGain(),Vo.gain.value=Tt.master,Vo.connect(tt.destination),Ic=tt.createGain(),Nc=tt.createGain(),Ic.connect(Vo),Nc.connect(Vo);const n=pt();Oc=Fc(n.musicVolume,Tt.musicVolume),If=!!n.musicMuted,Uc=Fc(n.sfxVolume,Tt.sfxVolume),Nf=!!n.sfxMuted,Xr(),nc=I.flightState,Sh=I.gearAmount>.02,g2(),Lf=!0}function p2(){if(!(!tt||tt.state==="running")){tt.resume().catch(()=>{});try{const n=tt.createBufferSource();n.buffer=tt.createBuffer(1,1,22050),n.connect(tt.destination),n.start(0)}catch{}}}function uv(){if(tt){for(const n in kc){const e=kc[n];e&&!e.el.paused&&e.el.pause()}tt.state==="running"&&tt.suspend()}}function hv(){tt&&tt.state!=="running"&&tt.resume().catch(()=>{})}function Xr(){tt&&(Ic.gain.value=If?0:Oc,Nc.gain.value=Nf?0:Uc)}function m2(n){return fetch(n).then(e=>e.arrayBuffer()).then(e=>e&&e.byteLength>0?e:Promise.reject(new Error("empty"))).catch(()=>new Promise((e,t)=>{const i=new XMLHttpRequest;i.open("GET",n),i.responseType="arraybuffer",i.onload=()=>i.response&&i.response.byteLength>0?e(i.response):t(new Error("empty")),i.onerror=()=>t(new Error("xhr")),i.send()}))}async function g2(){for(const[e,t]of Object.entries(Zy)){if(t.mode==="stream"){x2(e,t);continue}let i;try{i=await m2(dv+t.src)}catch{Ga[e]="load";continue}try{Dc[e]=await tt.decodeAudioData(i)}catch{Ga[e]="decode";continue}Ga[e]="ok",t.mode==="loop"&&v2(e,t)}const n=Object.entries(Ga).filter(([,e])=>e!=="ok");n.length&&console.warn("[audio] nicht ladbar:",n.map(([e,t])=>`${e} (${t})`).join(", "))}function y2(){let n=0;const e=[];for(const i in Ga)Ga[i]==="ok"?n++:e.push(`${i}: ${Ga[i]}`);let t=`${tt?tt.state:"no-ctx"} · buf ${n}/${n+e.length}`;return e.length&&(t+=`
  ✗ `+e.slice(0,5).join(`
  ✗ `)),t}function Df(n){return n==="music"?Ic:Nc}function v2(n,e){const t=tt.createBufferSource();t.buffer=Dc[n],t.loop=!0,t.playbackRate.value=e.rate||1;const i=tt.createGain();i.gain.value=0;let a=null;e.filtered?(a=tt.createBiquadFilter(),a.type="lowpass",a.frequency.value=Tt.wind.cutoffMin,t.connect(a),a.connect(i)):t.connect(i),i.connect(Df(e.channel)),t.start(),Pf[n]={src:t,gain:i,lp:a}}function x2(n,e){const t=new Audio(dv+e.src);t.loop=!0,t.preload="auto";let i;try{i=tt.createMediaElementSource(t)}catch{return}const a=tt.createGain();a.gain.value=0,i.connect(a),a.connect(Df(e.channel)),kc[n]={el:t,gain:a}}function _2(n){Oc=Ua(Fc(n,Oc)),Xr()}function fv(n){If=!!n,Xr()}function b2(n){Uc=Ua(Fc(n,Uc)),Xr()}function pv(n){Nf=!!n,Xr()}function _n(n,e){if(!Lf||!Dc[n])return;const t=Zy[n],i=tt.createBufferSource();i.buffer=Dc[n],i.playbackRate.value=e&&e.rate||t.rate||1;const a=tt.createGain();a.gain.value=e&&e.gain!=null?e.gain:t.gain!=null?t.gain:1,i.connect(a),a.connect(Df(t.channel)),i.onended=()=>{try{i.disconnect(),a.disconnect()}catch{}};try{i.start()}catch{}}function Ri(n,e,t){const i=Pf[n];i&&i.gain.gain.setTargetAtTime(Math.max(0,e),tt.currentTime,t||.1)}function rg(n,e,t,i){const a=Pf["glider-wind"];if(!a)return;const s=tt.currentTime;a.gain.gain.setTargetAtTime(Math.max(0,n),s,i),a.src.playbackRate.setTargetAtTime(e,s,i),a.lp&&a.lp.frequency.setTargetAtTime(t,s,i)}function S2(n,e,t){const i=kc[n];i&&(i.gain.gain.setTargetAtTime(e,tt.currentTime,Math.max(.02,t/1e3/3)),e>.001&&i.el.paused?i.el.play().catch(()=>{}):e<=.001&&!i.el.paused&&i.gain.gain.value<.005&&i.el.pause())}function M2(n,e,t){let i=0;return Ut(n,e)<Te.waterLevel&&i++,Ut(n+t,e)<Te.waterLevel&&i++,Ut(n-t,e)<Te.waterLevel&&i++,Ut(n,e+t)<Te.waterLevel&&i++,Ut(n,e-t)<Te.waterLevel&&i++,i/5}function w2(n,e,t){const i=Mt.TREE;let a=0;return Hn(n,e)===i&&a++,Hn(n+t,e)===i&&a++,Hn(n-t,e)===i&&a++,Hn(n,e+t)===i&&a++,Hn(n,e-t)===i&&a++,a/5}function E2(n,e,t){const i=Mt.URBAN;let a=0;return Hn(n,e)===i&&a++,Hn(n+t,e)===i&&a++,Hn(n-t,e)===i&&a++,Hn(n,e+t)===i&&a++,Hn(n,e-t)===i&&a++,a/5}function A2(n,e){if(!Lf)return;const t=I,i=He,a=t.paused;S2("menu-music",a?1:0,a?Tt.fade.musicIn:Tt.fade.musicOut);const s=!a&&t.flightState===i.FLYING,o=t.flightState===i.TAKEOFF_ROLL||t.flightState===i.LANDING_ROLL,r=!a&&(s||o),l=Tt.wind;if(r){const v=Ua((t.speed-l.speedMin)/(l.speedMax-l.speedMin));let p=Os(l.gainMin,l.gainMax,v),h=Os(l.rateMin,l.rateMax,v),_=Os(l.cutoffMin,l.cutoffMax,v);const g=t.brakeAmount;g>.001&&(h*=Os(1,l.brakeRate,g),_*=Os(1,l.brakeCutoff,g),p*=Os(1,l.brakeGain,g)),rg(p,h,_,l.smooth)}else rg(0,1,l.cutoffMin,l.smooth);const c=Tt.ocean,d=Tt.forest,u=Tt.city,f=Tt.thermal;if(s){const v=e.position.x,p=e.position.z,h=e.position.y,_=Ua(1-(h-Te.waterLevel)/c.maxAlt);Ri("ocean-surf-bed",M2(v,p,c.coastRadius)*_*c.gain,c.smooth);const g=Ua(1-(h-Te.waterLevel)/d.maxAlt);Ri("forest-bed",w2(v,p,d.coastRadius)*g*d.gain,d.smooth);const b=Ua(1-(h-Te.waterLevel)/u.maxAlt);Ri("city-bed",E2(v,p,u.coastRadius)*b*u.gain,u.smooth),Ri("thermal-lift",Ua(cv(v,h,p)/f.liftRef)*f.gain,f.smooth)}else Ri("ocean-surf-bed",0,c.smooth),Ri("forest-bed",0,d.smooth),Ri("city-bed",0,u.smooth),Ri("thermal-lift",0,f.smooth);Ri("grey-boost",t.greyActive?Tt.boost.greyGain:0,.05),t.oneShotActive&&!og&&_n("one-shot-boost",{gain:Tt.boost.oneShotGain}),og=t.oneShotActive;const m=t.flightState;m!==nc&&(m===i.LANDING_ROLL&&nc===i.FLYING?_n("touchdown"):m===i.LANDED?_n("landing-success"):m===i.CRASHING&&_n("crash"),nc=m);const y=t.gearAmount>.02;y&&!Sh&&m===i.FLYING&&_n("gear-deploy"),Sh=y}const T2=typeof window<"u"?new URLSearchParams(window.location.search):null;function mv(n){if(T2?.get(n)==="1")return!0;try{return localStorage.getItem(n)==="1"}catch{return!1}}const gv=mv("debugGl"),R2=mv("debugPerf")||gv;let ui=null,Wo=0,qo=0;const C2=(()=>{try{for(const n of document.querySelectorAll("script")){const e=(n.src||"").match(/index-([A-Za-z0-9_-]+)\.js/);if(e)return e[1]}}catch{}return"?"})();function L2(){ui||(ui=document.createElement("div"),ui.id="debug-perf",ui.style.cssText=["position: fixed","top:  calc(24px + env(safe-area-inset-top,  0))","left: calc(24px + env(safe-area-inset-left, 0))","z-index: 50","padding: 8px 12px","background: rgba(0, 0, 0, 0.62)","color: #B0FF80",'font: 11px/1.45 ui-monospace, "SF Mono", Menlo, Consolas, monospace',"border-radius: 6px","pointer-events: none","white-space: pre","letter-spacing: 0.02em","min-width: 160px"].join(";"),ui.textContent="measuring…",document.body.appendChild(ui))}const io=typeof document<"u"?document.getElementById("perf-toggle-btn"):null,ao=typeof document<"u"?document.getElementById("ads-toggle-btn"):null;let lg=null;io&&io.addEventListener("click",()=>{I.showPerf=!I.showPerf,io.classList.toggle("off",!I.showPerf)});ao&&ao.addEventListener("click",()=>{I.showAds=!I.showAds,ao.classList.toggle("off",!I.showAds)});function P2(){const n=!!J.testMode;n!==lg&&(lg=n,io&&(io.classList.toggle("visible",n),io.classList.toggle("off",!I.showPerf)),ao&&(ao.classList.toggle("visible",n),ao.classList.toggle("off",!I.showAds)))}function I2(n){P2();const e=R2||J.testMode&&I.showPerf,t=gv||J.testMode&&I.showPerf;if(!e){ui&&(ui.style.display="none"),Wo=0,qo=0;return}if(L2(),ui.style.display="",Wo++,!qo){qo=n;return}const i=n-qo;if(i<500)return;const a=Math.round(Wo*1e3/i),s=Math.round(i/Wo*10)/10,o=fn?fn.getPixelRatio():0,r=fn?`${fn.domElement.width}x${fn.domElement.height}`:"?";let l=`Build:    ${C2}
FPS:      ${a}
Frame:    ${s} ms
Mobile:   ${ds()?"yes":"no"}
DPR set:  ${o.toFixed(2)} (dev ${(window.devicePixelRatio||0).toFixed(2)})
Buffer:   ${r}
Segments: ${Te.segments}
Samples:  ${Ct.sampleCount.toLocaleString("de-DE")}
Audio:    ${y2()}`;if(t&&fn){const c=fn.info.render,d=fn.info.memory;l+=`
Calls:    ${c.calls}
Tris:     ${c.triangles.toLocaleString("de-DE")}
Programs: ${fn.info.programs?.length??"?"}
Geoms:    ${d.geometries}
Textures: ${d.textures}`}ui.textContent=l,Wo=0,qo=n}function yv(){const n=new xt,e=new Float32Array([0,0,-1.3,-.48,.07,.36,-.95,-.06,.42,0,0,-1.3,0,.22,.5,-.48,.07,.36,0,0,-1.3,.95,-.06,.42,.48,.07,.36,0,0,-1.3,.48,.07,.36,0,.22,.5,0,0,-1.3,-.95,-.06,.42,-.48,-.04,.36,0,0,-1.3,-.48,-.04,.36,0,-.02,.48,0,0,-1.3,.48,-.04,.36,.95,-.06,.42,0,0,-1.3,0,-.02,.48,.48,-.04,.36,-.95,-.06,.42,-.48,-.04,.36,-.48,.07,.36,-.48,.07,.36,0,-.02,.48,0,.22,.5,-.48,.07,.36,-.48,-.04,.36,0,-.02,.48,.95,-.06,.42,.48,.07,.36,.48,-.04,.36,.48,.07,.36,0,.22,.5,0,-.02,.48,.48,.07,.36,0,-.02,.48,.48,-.04,.36,0,.183,.2,0,.4,.5,0,.22,.5,.36,.16,.05,.44,.035,.1,.28,.08,.08,.36,.16,.05,.36,.2,.42,.44,.075,.42,.36,.16,.05,.44,.075,.42,.44,.035,.1,.36,.16,.05,.28,.08,.08,.28,.12,.42,.36,.16,.05,.28,.12,.42,.36,.2,.42,.36,.2,.42,.28,.12,.42,.44,.075,.42,-.36,.16,.05,-.28,.08,.08,-.44,.035,.1,-.36,.16,.05,-.44,.075,.42,-.36,.2,.42,-.36,.16,.05,-.44,.035,.1,-.44,.075,.42,-.36,.16,.05,-.28,.12,.42,-.28,.08,.08,-.36,.16,.05,-.36,.2,.42,-.28,.12,.42,-.36,.2,.42,-.44,.075,.42,-.28,.12,.42]);n.setAttribute("position",new Dt(e,3)),n.computeVertexNormals();const t=new ut({color:Ye.paper,flatShading:!0,side:Jt}),i=new nt(n,t);i.name="paperBody";const a=new Uy(n,18),s=new vd({color:Ye.ink,transparent:!0,opacity:.22}),o=new Ly(a,s),r=new dt;r.add(i),r.add(o);const l=new xd(.03,20),c=new Xn({color:1712164,side:Jt});for(const d of[-.36,.36]){const u=new nt(l,c);u.position.set(d,.13,.423),r.add(u)}return r}const fe=yv();fe.position.set(0,38,0);const N2=1712164;function kf(){return Ku}function Po(n){return Ku.find(e=>e.id===n)||Ku[0]}function vv(){return Po(J.equippedSkin)}function xv(n){return!!J.ownedSkins[n]}function Md(n){J.ownedSkins[n]=!0,Ht()}function Of(n){return Po(n).teaser||!xv(n)?!1:(J.equippedSkin=n,bv(),Ht(),!0)}function D2(n){if(n.userData._skinRole!==void 0)return n.userData._skinRole;let e=null;const t=n.color?n.color.getHex():-1;return n.isLineBasicMaterial&&t===Ye.ink?e="ink":n.isMeshBasicMaterial&&t===N2?e="vent":n.isMeshLambertMaterial&&t===Ye.paper&&(e="paper"),n.userData._skinRole=e,e}function _v(n,e){!e||e.teaser||n.traverse(t=>{if(!t.material)return;const i=Array.isArray(t.material)?t.material:[t.material];for(const a of i){const s=D2(a);s==="paper"&&e.paper!=null?(a.color.setHex(e.paper),a.emissive&&(a.emissive.setHex(e.emissive!=null?e.emissive:0),"emissiveIntensity"in a&&(a.emissiveIntensity=e.emissiveIntensity!=null?e.emissiveIntensity:1))):s==="ink"&&e.ink!=null?a.color.setHex(e.ink):s==="vent"&&e.vent!=null&&a.color.setHex(e.vent)}})}function bv(){_v(fe,vv())}const cg={android:"goog_dseUNtdcnlZGNWfAOgAdDoYIyki",ios:"appl_adobEJBJMEfqpVfgpItUNUsfWVS"},wu="default",Mh=new URLSearchParams(window.location.search).has("mockiap"),Eu=()=>!Oi.isNativePlatform()||Mh,Sv=n=>ef.find(e=>e.id===n),Uf=n=>ef.find(e=>e.productId===n);function Mv(n){const e=Uf(n);return e?Math.floor(e.diamonds*(1+e.bonusPct/100)):0}function wv(n){const e=Mv(n.productId);return J.obsidian=(J.obsidian|0)+e,J.obsidianLifetimeGranted=(J.obsidianLifetimeGranted|0)+e,_n("buy-diamonds"),Ht(),e}function dg(n){let e=0;for(const i of n?.nonSubscriptionTransactions||[])e+=Mv(i.productIdentifier);const t=Math.max(0,e-(J.obsidianLifetimeGranted|0));return t>0&&(J.obsidian=(J.obsidian|0)+t,J.obsidianLifetimeGranted=e,Ht()),t}function Au(n){!!n?.entitlements?.active?.[Ar.entitlement]&&!J.adsRemoveOwned&&(J.adsRemoveOwned=!0,Ht())}const Ev={name:"mock",async init(){},localizedPrice(n){const e=Uf(n);return e?e.priceFallback:""},async purchasePack(n){if(!Eu())return{success:!1};const e=Sv(n);return e?{success:!0,diamonds:wv(e)}:{success:!1}},async purchaseSkin(n){return Eu()?(Md(n),{success:!0}):{success:!1}},async purchaseRemoveAds(){return Eu()?(J.adsRemoveOwned=!0,Ht(),{success:!0}):{success:!1}},async restore(){return{success:!0,restored:[]}},hasEntitlement(n){return!!J.ownedSkins[n]}},ug={name:"revenuecat",_Purchases:null,_prices:{},_packages:{},async init(n){const{Purchases:e,LOG_LEVEL:t}=await Zh(async()=>{const{Purchases:i,LOG_LEVEL:a}=await import("./index-6c8v8erw.js");return{Purchases:i,LOG_LEVEL:a}},__vite__mapDeps([0,1]));this._Purchases=e,await e.configure({apiKey:n});try{await e.setLogLevel({level:t.WARN})}catch{}await this._loadOfferings(),O2();try{const{customerInfo:i}=await e.getCustomerInfo();dg(i),Au(i)}catch(i){console.warn("[iap] init reconcile failed",i)}},async _loadOfferings(){try{const n=await this._Purchases.getOfferings(),e=n?.all?.[wu]||n?.current;for(const t of e?.availablePackages||[]){const i=t?.product?.identifier;i&&(this._prices[i]=t.product.priceString||"",this._packages[i]=t)}}catch(n){console.warn("[iap] getOfferings failed",n)}},localizedPrice(n){return this._prices[n]||(Uf(n)?.priceFallback??"")},async purchasePack(n){const e=Sv(n);if(!e)return{success:!1};const t=this._packages[e.productId];if(!t)return console.warn(`[iap] no RevenueCat package for ${e.productId} — is it in the "${wu}" offering?`),{success:!1};try{return await this._Purchases.purchasePackage({aPackage:t}),{success:!0,diamonds:wv(e)}}catch(i){return i?.userCancelled||i?.code==="PURCHASE_CANCELLED"?{success:!1,cancelled:!0}:(console.warn("[iap] purchasePack failed",i),{success:!1})}},async purchaseSkin(n){try{return Md(n),{success:!0}}catch(e){return e?.userCancelled?{success:!1,cancelled:!0}:(console.warn("[iap] purchaseSkin failed",e),{success:!1})}},async purchaseRemoveAds(){const n=this._packages[Ar.productId];if(!n)return console.warn(`[iap] no RevenueCat package for ${Ar.productId} — is it in the "${wu}" offering?`),{success:!1};try{const{customerInfo:e}=await this._Purchases.purchasePackage({aPackage:n});return Au(e),{success:!0}}catch(e){return e?.userCancelled||e?.code==="PURCHASE_CANCELLED"?{success:!1,cancelled:!0}:(console.warn("[iap] purchaseRemoveAds failed",e),{success:!1})}},async restore(){try{const{customerInfo:n}=await this._Purchases.restorePurchases(),e=dg(n);return Au(n),{success:!0,restored:e>0?["obsidian"]:[],regranted:e}}catch(n){return console.warn("[iap] restore failed",n),{success:!1}}},hasEntitlement(n){return!!J.ownedSkins[n]}},Av=[];function k2(n){Av.push(n)}function O2(){for(const n of Av)try{n()}catch(e){console.warn("[iap] price listener failed",e)}}let li=Ev;const os={async init(){if(Mh||!Oi.isNativePlatform())return;const n=Oi.getPlatform()==="ios"?cg.ios:cg.android;try{await ug.init(n),li=ug}catch(e){console.warn("[iap] RevenueCat init failed — using mock",e),li=Ev}},isAvailable(){return Oi.isNativePlatform()||Mh},localizedPrice(n){return li.localizedPrice(n)},purchasePack(n){return li.purchasePack(n)},purchaseSkin(n){return li.purchaseSkin(n)},purchaseRemoveAds(){return li.purchaseRemoveAds()},removeAdsPrice(){return li.localizedPrice(Ar.productId)||Ar.priceFallback},restore(){return li.restore()},hasEntitlement(n){return li.hasEntitlement(n)},get providerName(){return li.name}},U2=new URLSearchParams(window.location.search).has("mockads"),ic=Oi.isNativePlatform()||U2;function Ff(){return Oi.getPlatform()==="ios"?"ios":"android"}function zf(){return!!Cn.useTestAds?.[Ff()]}function hg(){const n=Ff();return zf()?Cn.test[n].interstitial:Cn[n].interstitial}function fg(){const n=Ff();return zf()?Cn.test[n].rewarded:Cn[n].rewarded}function pg(){try{window.focus()}catch{}try{window.dispatchEvent(new Event("resize"))}catch{}}function mg(){return new Date().toISOString().slice(0,10)}function Tv(){J.rewardedDay!==mg()&&(J.rewardedDay=mg(),J.rewardedToday=0)}function gg(){return Tv(),Math.max(0,Cn.rewardedDailyCap-(J.rewardedToday|0))}let Tu=0,yg=-1/0;const Rv={name:"mock",async init(){},async preloadInterstitial(){},async preloadRewarded(){},async showInterstitial(){console.log("[ads] mock interstitial")},async showRewarded(){return console.log("[ads] mock rewarded → granted"),!0}},wh={name:"admob",_AdMob:null,_mod:null,_interReady:!1,_rewardReady:!1,async init(){this._mod=await Zh(()=>import("./index-BNXHsM2Y.js"),__vite__mapDeps([2,1])),this._AdMob=this._mod.AdMob,await this._AdMob.initialize({initializeForTesting:zf()});try{const n=await this._AdMob.requestConsentInfo();n?.isConsentFormAvailable&&n?.status==="REQUIRED"&&await this._AdMob.showConsentForm()}catch(n){console.warn("[ads] consent failed",n)}if(Oi.getPlatform()==="ios")try{await this._AdMob.requestTrackingAuthorization()}catch{}},async preloadInterstitial(){try{await this._AdMob.prepareInterstitial({adId:hg()}),this._interReady=!0}catch(n){this._interReady=!1,console.warn("[ads] preload interstitial failed",n)}},async preloadRewarded(){try{await this._AdMob.prepareRewardVideoAd({adId:fg()}),this._rewardReady=!0}catch(n){this._rewardReady=!1,console.warn("[ads] preload rewarded failed",n)}},_present(n,e,t){return new Promise(i=>{let a=!1,s=null,o=null;const r=()=>{if(!a){a=!0;try{s?.remove()}catch{}try{o?.remove()}catch{}i()}};Promise.all([this._AdMob.addListener(e,r).then(l=>{s=l}),this._AdMob.addListener(t,r).then(l=>{o=l})]).then(()=>n().catch(r))})},async showInterstitial(){try{this._interReady||await this._AdMob.prepareInterstitial({adId:hg()}),this._interReady=!1,await this._present(()=>this._AdMob.showInterstitial(),this._mod.InterstitialAdPluginEvents.Dismissed,this._mod.InterstitialAdPluginEvents.FailedToShow)}catch(n){console.warn("[ads] interstitial failed",n)}pg(),this.preloadInterstitial()},async showRewarded(){let n=!1,e=null;try{e=await this._AdMob.addListener(this._mod.RewardAdPluginEvents.Rewarded,()=>{n=!0}),this._rewardReady||await this._AdMob.prepareRewardVideoAd({adId:fg()}),this._rewardReady=!1,await this._present(()=>this._AdMob.showRewardVideoAd(),this._mod.RewardAdPluginEvents.Dismissed,this._mod.RewardAdPluginEvents.FailedToShow)}catch(t){console.warn("[ads] rewarded failed",t)}finally{try{e?.remove()}catch{}}return pg(),this.preloadRewarded(),n}};let Zi=Rv,Us=null;function Dl(){return Us||(!ic||!Oi.isNativePlatform()?(Us=Promise.resolve(),Us):(Us=wh.init().then(()=>{Zi=wh}).catch(n=>{console.warn("[ads] AdMob init failed — using mock",n),Zi=Rv}),Us))}const rs={isAvailable(){return ic},async warmup(){await Dl(),Zi===wh&&(Zi.preloadInterstitial(),Zi.preloadRewarded())},async onCrashRestart(){if(Tu++,!ic)return;if(J.testMode){I.showAds&&(await Dl(),await Zi.showInterstitial());return}if(J.adsRemoveOwned||Tu<=Cn.crashGraceCount||Tu%Cn.interstitialEveryNCrashes!==0)return;const n=performance.now();n-yg<Cn.interstitialMinGapSec*1e3||(yg=n,await Dl(),await Zi.showInterstitial())},rewardedRemaining:gg,async watchRewarded(){return ic?gg()<=0?{success:!1,capped:!0}:(await Dl(),await Zi.showRewarded()?(Tv(),J.rewardedToday=(J.rewardedToday|0)+1,J.obsidian=(J.obsidian|0)+Cn.rewardedDiamonds,_n("buy-diamonds"),Ht(),{success:!0,diamonds:Cn.rewardedDiamonds}):{success:!1}):{success:!1}}},F2={sub:"Building the world…",hint:"Higher quality settings may take a few seconds."},z2={pause:"Pause",map:"Map",close:"Close",landings:"Landings",brake:"Brake",oneShot:"One-Shot",boost:"Boost",sell:"Sell for {cost} points"},B2={lift:"Lift",soon:"soon",hintNormal:"↑ ↓ Pitch · ← → Bank · Space Brake · Shift Boost · F One-Shot",hintNormalTouch:"Steer with joystick · Right Boost / Brake / One-Shot",hintPrelaunch:"Pull down to launch",hintPrelaunchGyro:"Tap boost to take off",hintTakeoff:"Takeoff roll…",landingToast:"Touchdown! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"New island discovered!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Land at the marked airport to refuel your boosters and earn bonus points.",airportUnlockTitle:"Airport unlocked!",airportUnlockBody:"Spawn at {name} any time from the Levels menu.",airportUnlocked:"{name} unlocked",wrongApproach:"Wrong approach side — line up from the other end."},H2={names:["No Booster","Booster Level 1","Booster Level 2","Booster Level 3","Booster Level MAX"],unlock:["","Booster Level 1 unlocked","Booster Level 2 unlocked — La Gomera in range","Booster Level 3 unlocked — Gran Canaria in range","Booster Level MAX unlocked — Fuerteventura / Lanzarote"]},G2={start:"Start",startSubDefault:"Last checkpoint",levels:"Levels",levelsSub:"Choose airport",hangar:"Hangar",hangarSub:"Upgrades & status",shop:"Shop",shopSub:"Obsidian & designs",settings:"Settings",settingsSub:"Graphics & performance",imprint:"Imprint",licenses:"Licences"},V2={checkpoint:"Checkpoint · {id}",firstFlight:"First flight · TFN"},W2={title:"Pause",resume:"Resume flight",home:"Main menu"},q2={title:"Crash landing",restart:"Take Off Again",hint:"Spacebar",hangar:"Hangar",shop:"Shop"},X2={title:"Hangar",points:"Points",locations:"Locations",obsidian:"Obsidian",highscore:"High score",plane:"Plane",dragToRotate:"Drag to rotate",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tap an upgrade to see its description.",buy:"Buy · {cost}",buyObsidian:"Obsidian · {cost}",max:"Max",level:"Level {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Your boost level rises automatically once you've discovered enough locations. Fly through new POIs to improve your One-Shot boost.",equip:"Equip",equipped:"Equipped",comingSoon:"Coming soon",getDiamonds:"Get Obsidian →",skinPrev:"Previous design",skinNext:"Next design"},j2={title:"Pay with Obsidian?",text:"This upgrade costs <strong></strong>.",warn:"Obsidian is bought with real money. Only tap <em>Confirm</em> if you really want to spend Obsidian.",cancel:"Cancel",confirm:"Confirm",spendSkin:"You're spending {obsidian} on the {label} design."},$2={default:{name:"Paper",desc:"The classic fold."},charcoal:{name:"Charcoal",desc:"A matte slate livery — earned by explorers."},gold:{name:"Gold",desc:"A gleaming premium livery."},comingSoon:{name:"More soon",desc:"New designs are on the way."}},Y2={intro:"Obsidian unlocks designs in the hangar and instant upgrades.",bonus:"+{pct}%",badgePopular:"Popular",badgeValue:"Best value",granted:"+ {amount} Obsidian added",restore:"Restore purchases",restored:"Purchases restored",viewSkins:"View designs →",disclosure:"Obsidian and designs are stored on this device.",watchAd:"Watch a video",adsLeftToday:"{count}/{cap} today",adsCapReached:"Come back tomorrow",removeAds:"Remove ads",removeAdsOwned:"Ads removed"},K2={title:"Settings",quality:"Graphics quality",presetLow:"Low",presetStandard:"Standard",presetHigh:"High",presetUltra:"Ultra",advanced:"Advanced",meshRes:"Mesh resolution",meshHint:"Segments · 100–3000",vegSamples:"Vegetation samples",vegHint:"10,000–10,000,000",restartNote:"Changes require a restart. Applying will reload the page.",cancel:"Cancel",apply:"Apply & reload",language:"Language",controls:"Controls",invertPitch:"Inverted flight controls",invertPitchHint:"Pull down to climb",gyroControl:"Tilt steering",gyroControlHint:"Tilt your device to steer",gyroSensitivity:"Sensitivity",gyroRecalibrate:"Recalibrate",tutorial:"Tutorial",replayTutorial:"Replay tutorial",dangerZone:"Danger zone",dangerDesc:"Resets all progress: points, locations, upgrades, discovered POIs, airports and checkpoint. Graphics settings are kept.",resetSave:"Reset progress",audio:"Audio",music:"Music",musicHint:"Menu theme by Daniel Schultes",musicVolume:"Music volume",sound:"Sound",soundHint:"Wind, ambience & effects",soundVolume:"Sound volume",headphoneHint:"Best experienced with headphones."},Z2={title:"Really delete your save?",text:"All points, locations, upgrades and discovered POIs will be lost. You'll start at <strong>Tenerife Nord</strong> with the basic plane.",warn:"This action cannot be undone.",cancel:"Cancel",confirm:"Reset"},J2={eyebrow:"Island",archTitle:"Canary Islands",legendSpawn:"Spawn",legendDiscovered:"Discovered",legendLocked:"Unknown",hintDefault:"Tap a spawn point to start there.",hintNone:"Land at an airport to unlock it as a spawn point.",hintProgress:"{landed} / {total} airports unlocked. Tap a spawn point.",hintAll:"All airports unlocked. Tap a spawn point.",markerLocked:"???",tipStart:"Start at {id}",tipNotLanded:"{id} — not landed yet",tipUndiscovered:"Not discovered yet"},Q2={title:"Imprint",provider:"Provider",contact:"Contact",privacy:"Privacy policy",privacyLink:"Open privacy policy",linksLiability:"Liability for links",linksText:"Our offering contains links to external third-party websites whose content we cannot influence. We therefore cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content.",footer:"Swiss Innovation Studios · 2026"},eR={title:"Open-source licences",intro:"Teide includes the following open-source components. The full licence texts are below and bundled with the app.",audioTitle:"Audio — sound & music",audioCredit:"Sound effects from Pixabay, used under the Pixabay Content Licence. Music composed by Daniel Schultes.",footer:"Swiss Innovation Studios · 2026"},tR={title:"Please rotate your device",sub:"Teide is played in landscape mode"},nR={title:"Test mode",prompt:"Enter PIN",wrong:"Wrong PIN",cancel:"Cancel",confirm:"OK"},iR={drag:{label:"Aerodynamics",desc:"Smoother folds — less drag, longer glide."},maxSpeed:{label:"Top speed",desc:"Raises the maximum cruise speed."},speedFromPitch:{label:"Dive",desc:"More acceleration in a dive — altitude becomes speed."},stallSpeed:{label:"Stability",desc:"Lower stall threshold — forgives slow flying."},takeoffSpeed:{label:"Runway",desc:"Faster take-off acceleration — less roll distance."},brake:{label:"Airbrake",desc:"Unlocks the brake flaps (Space in flight)."},greyBoost:{label:"Reserve boost",desc:"Stronger emergency thrust: longer burn, more push, faster refill."}},aR={pickLanguage:"Choose your language",welcome:"Welcome to the Canaries",story:["You've folded the perfect paper plane and launched it from the slopes of Mount Teide. Now ride the thermals and glide out across the Canary Islands.","Catch rising air to stay aloft, dive through points of interest to collect locations, and touch down on runways to unlock them as new starting points.","Landing is how you keep going: each touchdown refuels your booster for the next hop. Line up with a runway and set down gently.","Spend your points in the hangar to upgrade your plane and booster. Glide far enough and new islands come within reach — from La Gomera all the way to Lanzarote. How far can you go?"],next:"Next",begin:"Let's go"},sR={eyebrow:"Tutorial",skip:"Skip",retry:"Try again!",done:"You're ready — off you go!",launch:"Pull down to take off and start gliding",navLeft:"Now bank left",navRight:"Now bank right",navUp:"Now climb",navDown:"Now descend",rings:"Fly through both rings ({collected}/{total})",boost:"Hold boost for a burst of speed",thermal:"Steer into the updraft to gain height",ringHigh:"Use your new height — catch the high ring",ringLow:"Now dive back down — through the low ring",invertHint:"Climbing feels backwards? Flip it.",steerHint:"Steer here",endTitle:"You're ready to glide!",endBody:"Explore the Canary Islands and dive through rings to collect locations. Gather enough and your One-Shot boost reaches the next island. How far can you glide?",endGo:"Let's go"},oR={loading:F2,a11y:z2,hud:B2,booster:H2,menu:G2,welcome:V2,pause:W2,crash:q2,hangar:X2,obsidian:j2,skins:$2,shop:Y2,settings:K2,reset:Z2,levels:J2,imprint:Q2,licenses:eR,portrait:tR,testpin:nR,upgrades:iR,onboarding:aR,tutorial:sR},rR={sub:"Welt wird gebaut…",hint:"Bei höheren Qualitätseinstellungen kann das einige Sekunden dauern."},lR={pause:"Pause",map:"Karte",close:"Schliessen",landings:"Landungen",brake:"Bremse",oneShot:"One-Shot",boost:"Boost",sell:"Verkaufen für {cost} Punkte"},cR={lift:"Lift",soon:"bald",hintNormal:"↑ ↓ Pitch · ← → Bank · Space Bremse · Shift Boost · F One-Shot",hintNormalTouch:"Joystick steuern · Rechts Boost / Bremse / One-Shot",hintPrelaunch:"Zum Starten nach unten ziehen",hintPrelaunchGyro:"Boost antippen zum Abheben",hintTakeoff:"Startrollen…",landingToast:"Geschafft! · {id}",landingBonus:"+ {bonus} Pkt",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Neue Insel entdeckt!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Lande am markierten Flughafen, um deine Booster aufzufüllen und Extra-Punkte zu sammeln.",airportUnlockTitle:"Flughafen freigeschaltet!",airportUnlockBody:"Starte jederzeit über das Levels-Menü bei {name}.",airportUnlocked:"{name} freigeschaltet",wrongApproach:"Falsche Anflugseite — flieg von der anderen Seite an."},dR={names:["Kein Booster","Booster Stufe 1","Booster Stufe 2","Booster Stufe 3","Booster Stufe MAX"],unlock:["","Booster Stufe 1 freigeschaltet","Booster Stufe 2 freigeschaltet — La Gomera in Reichweite","Booster Stufe 3 freigeschaltet — Gran Canaria in Reichweite","Booster Stufe MAX freigeschaltet — Fuerteventura / Lanzarote"]},uR={start:"Start",startSubDefault:"Letzter Checkpoint",levels:"Levels",levelsSub:"Flughäfen auswählen",hangar:"Hangar",hangarSub:"Upgrades & Status",shop:"Shop",shopSub:"Obsidian & Designs",settings:"Einstellungen",settingsSub:"Grafik & Performance",imprint:"Impressum",licenses:"Lizenzen"},hR={checkpoint:"Checkpoint · {id}",firstFlight:"Erstflug · TFN"},fR={title:"Pause",resume:"Flug fortsetzen",home:"Hauptmenü"},pR={title:"Bruchlandung",restart:"Erneut abheben",hint:"Leertaste",hangar:"Hangar",shop:"Shop"},mR={title:"Hangar",points:"Punkte",locations:"Orte",obsidian:"Obsidian",highscore:"Highscore",plane:"Flugzeug",dragToRotate:"Ziehen zum Drehen",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tippe ein Upgrade an, um die Beschreibung zu sehen.",buy:"Kaufen · {cost}",buyObsidian:"Obsidian · {cost}",max:"Max",level:"Stufe {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Die Boost-Stufe steigt automatisch, sobald genug Orte entdeckt sind. Flieg neue POIs an, um deinen One-Shot-Boost zu verbessern.",equip:"Anlegen",equipped:"Angelegt",comingSoon:"Bald verfügbar",getDiamonds:"Obsidian holen →",skinPrev:"Vorheriges Design",skinNext:"Nächstes Design"},gR={title:"Mit Obsidian bezahlen?",text:"Dieses Upgrade kostet <strong></strong>.",warn:"Obsidian wird mit echtem Geld gekauft. Klick auf <em>Bestätigen</em> nur, wenn du wirklich Obsidian ausgeben willst.",cancel:"Abbrechen",confirm:"Bestätigen",spendSkin:"Du gibst {obsidian} für das Design {label} aus."},yR={default:{name:"Papier",desc:"Die klassische Faltung."},charcoal:{name:"Anthrazit",desc:"Eine matte Schiefer-Lackierung — von Entdeckern verdient."},gold:{name:"Gold",desc:"Eine glänzende Premium-Lackierung."},comingSoon:{name:"Bald mehr",desc:"Neue Designs sind unterwegs."}},vR={intro:"Obsidian schaltet Designs im Hangar und Sofort-Upgrades frei.",bonus:"+{pct}%",badgePopular:"Beliebt",badgeValue:"Bester Wert",granted:"+ {amount} Obsidian erhalten",restore:"Käufe wiederherstellen",restored:"Käufe wiederhergestellt",viewSkins:"Designs ansehen →",disclosure:"Obsidian und Designs werden auf diesem Gerät gespeichert.",watchAd:"Video ansehen",adsLeftToday:"{count}/{cap} heute",adsCapReached:"Komm morgen wieder",removeAds:"Werbung entfernen",removeAdsOwned:"Werbung entfernt"},xR={title:"Einstellungen",quality:"Grafikqualität",presetLow:"Niedrig",presetStandard:"Standard",presetHigh:"Hoch",presetUltra:"Ultra",advanced:"Erweitert",meshRes:"Mesh-Auflösung",meshHint:"Segments · 100–3000",vegSamples:"Vegetations-Samples",vegHint:"10'000–10'000'000",restartNote:"Änderungen erfordern einen Neustart. Beim Anwenden wird die Seite neu geladen.",cancel:"Abbrechen",apply:"Anwenden & Neu laden",language:"Sprache",controls:"Steuerung",invertPitch:"Umgekehrte Flugsteuerung",invertPitchHint:"Nach unten ziehen zum Steigen",gyroControl:"Neigungssteuerung",gyroControlHint:"Gerät neigen zum Steuern",gyroSensitivity:"Empfindlichkeit",gyroRecalibrate:"Neu kalibrieren",tutorial:"Tutorial",replayTutorial:"Tutorial wiederholen",dangerZone:"Danger Zone",dangerDesc:"Setzt den kompletten Spielfortschritt zurück: Punkte, Orte, Upgrades, entdeckte POIs, Flughäfen und Checkpoint. Grafik-Einstellungen bleiben erhalten.",resetSave:"Spielstand zurücksetzen",audio:"Audio",music:"Musik",musicHint:"Menü-Titel von Daniel Schultes",musicVolume:"Musiklautstärke",sound:"Ton",soundHint:"Wind, Ambiente & Effekte",soundVolume:"Tonlautstärke",headphoneHint:"Am besten mit Kopfhörern."},_R={title:"Spielstand wirklich löschen?",text:"Alle Punkte, Orte, Upgrades und entdeckten POIs gehen verloren. Du startest auf <strong>Tenerife Nord</strong> mit dem Basis-Flugzeug.",warn:"Diese Aktion kann nicht rückgängig gemacht werden.",cancel:"Abbrechen",confirm:"Zurücksetzen"},bR={eyebrow:"Insel",archTitle:"Kanarische Inseln",legendSpawn:"Spawn",legendDiscovered:"Entdeckt",legendLocked:"Unbekannt",hintDefault:"Tippe einen Spawn an, um dort zu starten.",hintNone:"Lande einen Flughafen, um ihn als Spawnpunkt freizuschalten.",hintProgress:"{landed} / {total} Flughäfen freigeschaltet. Tippe einen Spawn an.",hintAll:"Alle Flughäfen freigeschaltet. Tippe einen Spawn an.",markerLocked:"???",tipStart:"Bei {id} starten",tipNotLanded:"{id} — noch nicht gelandet",tipUndiscovered:"Noch nicht entdeckt"},SR={title:"Impressum",provider:"Anbieter",contact:"Kontakt",privacy:"Datenschutz",privacyLink:"Datenschutzerklärung öffnen",linksLiability:"Haftung für Links",linksText:"Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",footer:"Swiss Innovation Studios · 2026"},MR={title:"Open-Source-Lizenzen",intro:"Teide enthält die folgenden quelloffenen Komponenten. Die vollständigen Lizenztexte sind unten und im App-Paket beigelegt.",audioTitle:"Audio — Ton & Musik",audioCredit:"Soundeffekte von Pixabay, genutzt unter der Pixabay Content License. Musik komponiert von Daniel Schultes.",footer:"Swiss Innovation Studios · 2026"},wR={title:"Bitte Gerät drehen",sub:"Teide wird im Landscape-Modus gespielt"},ER={title:"Testmodus",prompt:"PIN eingeben",wrong:"Falsche PIN",cancel:"Abbrechen",confirm:"OK"},AR={drag:{label:"Aerodynamik",desc:"Glättere Faltung — weniger Luftwiderstand, längeres Gleiten."},maxSpeed:{label:"Spitzentempo",desc:"Erhöht die maximale Fluggeschwindigkeit im Cruise."},speedFromPitch:{label:"Sturzflug",desc:"Mehr Beschleunigung im Sturzflug — Höhe wird zu Tempo."},stallSpeed:{label:"Stabilität",desc:"Tiefere Strömungsabriss-Schwelle — verzeiht langsames Fliegen."},takeoffSpeed:{label:"Startbahn",desc:"Schnellere Beschleunigung beim Start — weniger Roll-Strecke."},brake:{label:"Luftbremse",desc:"Schaltet die Bremsklappen frei (Leertaste im Flug)."},greyBoost:{label:"Reserve-Boost",desc:"Stärkerer Notschub: längere Brennzeit, mehr Schub, schnellerer Refill."}},TR={pickLanguage:"Sprache wählen",welcome:"Willkommen auf den Kanaren",story:["Du hast den perfekten Papierflieger gefaltet und ihn von den Hängen des Teide gestartet. Reite jetzt die Thermik und gleite hinaus über die Kanarischen Inseln.","Fang Aufwinde ein, um oben zu bleiben, flieg durch Points of Interest, um Orte zu sammeln, und lande auf Pisten, um sie als neue Startpunkte freizuschalten.","Landen heißt weiterkommen: Jede Landung füllt deinen Booster für den nächsten Sprung wieder auf. Richte dich auf eine Bahn aus und setze sanft auf.","Gib deine Punkte im Hangar aus, um Flugzeug und Booster zu verbessern. Gleitest du weit genug, kommen neue Inseln in Reichweite — von La Gomera bis Lanzarote. Wie weit kommst du?"],next:"Weiter",begin:"Los geht's"},RR={eyebrow:"Tutorial",skip:"Überspringen",retry:"Nochmal!",done:"Geschafft — los geht's!",launch:"Nach unten ziehen zum Abheben und Gleiten",navLeft:"Jetzt nach links",navRight:"Jetzt nach rechts",navUp:"Jetzt steigen",navDown:"Jetzt sinken",rings:"Flieg durch beide Ringe ({collected}/{total})",boost:"Halte Boost für einen Schub",thermal:"Steuere in den Aufwind, um Höhe zu gewinnen",ringHigh:"Nutz deine Höhe — schnapp dir den hohen Ring",ringLow:"Jetzt wieder runter — durch den tiefen Ring",invertHint:"Steigen falsch herum? Hier umstellen.",steerHint:"Hier steuern",endTitle:"Bereit zum Gleiten!",endBody:"Erkunde die Kanaren und flieg durch Ringe, um Orte zu sammeln. Sammle genug, und dein One-Shot-Boost bringt dich zur nächsten Insel. Wie weit gleitest du?",endGo:"Los geht's"},CR={loading:rR,a11y:lR,hud:cR,booster:dR,menu:uR,welcome:hR,pause:fR,crash:pR,hangar:mR,obsidian:gR,skins:yR,shop:vR,settings:xR,reset:_R,levels:bR,imprint:SR,licenses:MR,portrait:wR,testpin:ER,upgrades:AR,onboarding:TR,tutorial:RR},LR={sub:"Construyendo el mundo…",hint:"Con ajustes de calidad altos puede tardar unos segundos."},PR={pause:"Pausa",map:"Mapa",close:"Cerrar",landings:"Aterrizajes",brake:"Freno",oneShot:"One-Shot",boost:"Boost",sell:"Vender por {cost} puntos"},IR={lift:"Ascenso",soon:"pronto",hintNormal:"↑ ↓ Cabeceo · ← → Alabeo · Espacio Freno · Shift Boost · F One-Shot",hintNormalTouch:"Controla con el joystick · Derecha Boost / Freno / One-Shot",hintPrelaunch:"Tira hacia abajo para despegar",hintPrelaunchGyro:"Toca boost para despegar",hintTakeoff:"Carrera de despegue…",landingToast:"¡Aterrizaje! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"¡Nueva isla descubierta!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Aterriza en el aeropuerto marcado para recargar tus propulsores y ganar puntos extra.",airportUnlockTitle:"¡Aeropuerto desbloqueado!",airportUnlockBody:"Aparece en {name} cuando quieras desde el menú Niveles.",airportUnlocked:"{name} desbloqueado",wrongApproach:"Lado de aproximación incorrecto: alinéate desde el otro extremo."},NR={names:["Sin Booster","Booster Nivel 1","Booster Nivel 2","Booster Nivel 3","Booster Nivel MÁX"],unlock:["","Booster Nivel 1 desbloqueado","Booster Nivel 2 desbloqueado — La Gomera a tu alcance","Booster Nivel 3 desbloqueado — Gran Canaria a tu alcance","Booster Nivel MÁX desbloqueado — Fuerteventura / Lanzarote"]},DR={start:"Empezar",startSubDefault:"Último checkpoint",levels:"Niveles",levelsSub:"Elegir aeropuerto",hangar:"Hangar",hangarSub:"Mejoras y estado",shop:"Tienda",shopSub:"Obsidiana y diseños",settings:"Ajustes",settingsSub:"Gráficos y rendimiento",imprint:"Aviso legal",licenses:"Licencias"},kR={checkpoint:"Checkpoint · {id}",firstFlight:"Primer vuelo · TFN"},OR={title:"Pausa",resume:"Reanudar vuelo",home:"Menú principal"},UR={title:"Aterrizaje forzoso",restart:"Despegar de nuevo",hint:"Barra espaciadora",hangar:"Hangar",shop:"Tienda"},FR={title:"Hangar",points:"Puntos",locations:"Lugares",obsidian:"Obsidiana",highscore:"Récord",plane:"Avión",dragToRotate:"Arrastra para girar",upgrades:"Mejoras",booster:"Booster",selectUpgrade:"Toca una mejora para ver su descripción.",buy:"Comprar · {cost}",buyObsidian:"Obsidiana · {cost}",max:"Máx",level:"Nivel {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Tu nivel de boost sube automáticamente cuando descubres suficientes lugares. Vuela a través de nuevos POIs para mejorar tu boost One-Shot.",equip:"Equipar",equipped:"Equipado",comingSoon:"Próximamente",getDiamonds:"Conseguir obsidiana →",skinPrev:"Diseño anterior",skinNext:"Diseño siguiente"},zR={title:"¿Pagar con obsidiana?",text:"Esta mejora cuesta <strong></strong>.",warn:"La obsidiana se compra con dinero real. Pulsa <em>Confirmar</em> solo si de verdad quieres gastar obsidiana.",cancel:"Cancelar",confirm:"Confirmar",spendSkin:"Vas a gastar {obsidian} en el diseño {label}."},BR={default:{name:"Papel",desc:"El pliegue clásico."},charcoal:{name:"Carbón",desc:"Una librea de pizarra mate — para exploradores."},gold:{name:"Oro",desc:"Una reluciente librea premium."},comingSoon:{name:"Más pronto",desc:"Llegan nuevos diseños."}},HR={intro:"La obsidiana desbloquea diseños en el hangar y mejoras instantáneas.",bonus:"+{pct}%",badgePopular:"Popular",badgeValue:"Mejor valor",granted:"+ {amount} obsidiana añadida",restore:"Restaurar compras",restored:"Compras restauradas",viewSkins:"Ver diseños →",disclosure:"La obsidiana y los diseños se guardan en este dispositivo.",watchAd:"Ver un vídeo",adsLeftToday:"{count}/{cap} hoy",adsCapReached:"Vuelve mañana",removeAds:"Quitar anuncios",removeAdsOwned:"Anuncios eliminados"},GR={title:"Ajustes",quality:"Calidad gráfica",presetLow:"Baja",presetStandard:"Estándar",presetHigh:"Alta",presetUltra:"Ultra",advanced:"Avanzado",meshRes:"Resolución de malla",meshHint:"Segments · 100–3000",vegSamples:"Muestras de vegetación",vegHint:"10.000–10.000.000",restartNote:"Los cambios requieren reiniciar. Al aplicar se recargará la página.",cancel:"Cancelar",apply:"Aplicar y recargar",language:"Idioma",controls:"Controles",invertPitch:"Controles de vuelo invertidos",invertPitchHint:"Tira hacia abajo para subir",gyroControl:"Control por inclinación",gyroControlHint:"Inclina el dispositivo para dirigir",gyroSensitivity:"Sensibilidad",gyroRecalibrate:"Recalibrar",tutorial:"Tutorial",replayTutorial:"Repetir tutorial",dangerZone:"Zona de peligro",dangerDesc:"Restablece todo el progreso: puntos, lugares, mejoras, POIs descubiertos, aeropuertos y checkpoint. Los ajustes gráficos se mantienen.",resetSave:"Restablecer progreso",audio:"Audio",music:"Música",musicHint:"Tema del menú de Daniel Schultes",musicVolume:"Volumen de música",sound:"Sonido",soundHint:"Viento, ambiente y efectos",soundVolume:"Volumen de sonido",headphoneHint:"Mejor con auriculares."},VR={title:"¿Borrar de verdad tu partida?",text:"Se perderán todos los puntos, lugares, mejoras y POIs descubiertos. Empezarás en <strong>Tenerife Nord</strong> con el avión básico.",warn:"Esta acción no se puede deshacer.",cancel:"Cancelar",confirm:"Restablecer"},WR={eyebrow:"Isla",archTitle:"Islas Canarias",legendSpawn:"Inicio",legendDiscovered:"Descubierto",legendLocked:"Desconocido",hintDefault:"Toca un punto de inicio para empezar ahí.",hintNone:"Aterriza en un aeropuerto para desbloquearlo como punto de inicio.",hintProgress:"{landed} / {total} aeropuertos desbloqueados. Toca un punto de inicio.",hintAll:"Todos los aeropuertos desbloqueados. Toca un punto de inicio.",markerLocked:"???",tipStart:"Empezar en {id}",tipNotLanded:"{id} — aún sin aterrizar",tipUndiscovered:"Aún sin descubrir"},qR={title:"Aviso legal",provider:"Proveedor",contact:"Contacto",privacy:"Privacidad",privacyLink:"Abrir la política de privacidad",linksLiability:"Responsabilidad de los enlaces",linksText:"Nuestra oferta contiene enlaces a sitios web externos de terceros sobre cuyo contenido no tenemos influencia. Por ello no podemos asumir ninguna responsabilidad por estos contenidos ajenos. Del contenido de las páginas enlazadas es siempre responsable el respectivo proveedor u operador de dichas páginas.",footer:"Swiss Innovation Studios · 2026"},XR={title:"Licencias de código abierto",intro:"Teide incluye los siguientes componentes de código abierto. Los textos completos de las licencias están abajo y se incluyen en la app.",audioTitle:"Audio — sonido y música",audioCredit:"Efectos de sonido de Pixabay, usados bajo la Licencia de Contenido de Pixabay. Música compuesta por Daniel Schultes.",footer:"Swiss Innovation Studios · 2026"},jR={title:"Gira tu dispositivo",sub:"Teide se juega en modo horizontal"},$R={title:"Modo de prueba",prompt:"Introduce el PIN",wrong:"PIN incorrecto",cancel:"Cancelar",confirm:"OK"},YR={drag:{label:"Aerodinámica",desc:"Pliegues más limpios — menos resistencia, planeo más largo."},maxSpeed:{label:"Velocidad máx",desc:"Aumenta la velocidad máxima de crucero."},speedFromPitch:{label:"Picado",desc:"Más aceleración en picado — la altura se convierte en velocidad."},stallSpeed:{label:"Estabilidad",desc:"Umbral de pérdida más bajo — perdona el vuelo lento."},takeoffSpeed:{label:"Pista",desc:"Aceleración de despegue más rápida — menos carrera."},brake:{label:"Aerofreno",desc:"Desbloquea los alerones de freno (Espacio en vuelo)."},greyBoost:{label:"Boost de reserva",desc:"Empuje de emergencia más fuerte: más duración, más impulso, recarga más rápida."}},KR={pickLanguage:"Elige tu idioma",welcome:"Bienvenido a las Canarias",story:["Has plegado el avión de papel perfecto y lo has lanzado desde las laderas del Teide. Ahora cabalga las térmicas y planea sobre las Islas Canarias.","Aprovecha las corrientes ascendentes para mantenerte en el aire, atraviesa puntos de interés para recoger lugares y aterriza en las pistas para desbloquearlas como nuevos puntos de partida.","Aterrizar es seguir avanzando: cada toma de tierra recarga tu propulsor para el siguiente salto. Alinéate con una pista y posa con suavidad.","Gasta tus puntos en el hangar para mejorar tu avión y tu booster. Si planeas lo suficiente, nuevas islas quedan a tu alcance — desde La Gomera hasta Lanzarote. ¿Hasta dónde llegarás?"],next:"Siguiente",begin:"¡Vamos!"},ZR={eyebrow:"Tutorial",skip:"Saltar",retry:"¡Otra vez!",done:"¡Listo, a volar!",launch:"Tira hacia abajo para despegar y planear",navLeft:"Ahora a la izquierda",navRight:"Ahora a la derecha",navUp:"Ahora sube",navDown:"Ahora baja",rings:"Atraviesa los dos aros ({collected}/{total})",boost:"Mantén el boost para un empujón",thermal:"Dirígete a la corriente ascendente para ganar altura",ringHigh:"Aprovecha la altura — atrapa el aro alto",ringLow:"Ahora baja de nuevo — por el aro bajo",invertHint:"¿Subir va al revés? Cámbialo.",steerHint:"Dirige aquí",endTitle:"¡Listo para planear!",endBody:"Explora las Islas Canarias y atraviesa aros para reunir lugares. Reúne suficientes y tu boost One-Shot te lleva a la siguiente isla. ¿Hasta dónde planeas?",endGo:"¡Vamos!"},JR={loading:LR,a11y:PR,hud:IR,booster:NR,menu:DR,welcome:kR,pause:OR,crash:UR,hangar:FR,obsidian:zR,skins:BR,shop:HR,settings:GR,reset:VR,levels:WR,imprint:qR,licenses:XR,portrait:jR,testpin:$R,upgrades:YR,onboarding:KR,tutorial:ZR},QR={sub:"Construction du monde…",hint:"Avec des réglages de qualité élevés, cela peut prendre quelques secondes."},eC={pause:"Pause",map:"Carte",close:"Fermer",landings:"Atterrissages",brake:"Frein",oneShot:"One-Shot",boost:"Boost",sell:"Vendre pour {cost} points"},tC={lift:"Ascendance",soon:"bientôt",hintNormal:"↑ ↓ Tangage · ← → Roulis · Espace Frein · Maj Boost · F One-Shot",hintNormalTouch:"Piloter au joystick · Droite Boost / Frein / One-Shot",hintPrelaunch:"Tire vers le bas pour décoller",hintPrelaunchGyro:"Appuie sur boost pour décoller",hintTakeoff:"Roulage au décollage…",landingToast:"Atterri ! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nouvelle île découverte !",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Pose-toi à l'aéroport indiqué pour recharger tes boosters et gagner des points bonus.",airportUnlockTitle:"Aéroport débloqué !",airportUnlockBody:"Réapparais à {name} quand tu veux depuis le menu Niveaux.",airportUnlocked:"{name} débloqué",wrongApproach:"Mauvais côté d'approche — aligne-toi depuis l'autre bout."},nC={names:["Aucun Booster","Booster Niveau 1","Booster Niveau 2","Booster Niveau 3","Booster Niveau MAX"],unlock:["","Booster Niveau 1 débloqué","Booster Niveau 2 débloqué — La Gomera à portée","Booster Niveau 3 débloqué — Gran Canaria à portée","Booster Niveau MAX débloqué — Fuerteventura / Lanzarote"]},iC={start:"Démarrer",startSubDefault:"Dernier checkpoint",levels:"Niveaux",levelsSub:"Choisir un aéroport",hangar:"Hangar",hangarSub:"Améliorations et statut",shop:"Boutique",shopSub:"Obsidienne et designs",settings:"Réglages",settingsSub:"Graphismes et performances",imprint:"Mentions légales",licenses:"Licences"},aC={checkpoint:"Checkpoint · {id}",firstFlight:"Premier vol · TFN"},sC={title:"Pause",resume:"Reprendre le vol",home:"Menu principal"},oC={title:"Atterrissage manqué",restart:"Redécoller",hint:"Barre d'espace",hangar:"Hangar",shop:"Boutique"},rC={title:"Hangar",points:"Points",locations:"Lieux",obsidian:"Obsidienne",highscore:"Record",plane:"Avion",dragToRotate:"Glisser pour tourner",upgrades:"Améliorations",booster:"Booster",selectUpgrade:"Touche une amélioration pour voir sa description.",buy:"Acheter · {cost}",buyObsidian:"Obsidienne · {cost}",max:"Max",level:"Niveau {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Ton niveau de boost augmente automatiquement quand tu découvres assez de lieux. Survole de nouveaux POI pour améliorer ton boost One-Shot.",equip:"Équiper",equipped:"Équipé",comingSoon:"Bientôt",getDiamonds:"Obtenir de l'obsidienne →",skinPrev:"Design précédent",skinNext:"Design suivant"},lC={title:"Payer avec de l'obsidienne ?",text:"Cette amélioration coûte <strong></strong>.",warn:"L'obsidienne s'achète avec de l'argent réel. Touche <em>Confirmer</em> seulement si tu veux vraiment dépenser de l'obsidienne.",cancel:"Annuler",confirm:"Confirmer",spendSkin:"Tu dépenses {obsidian} pour le design {label}."},cC={default:{name:"Papier",desc:"Le pliage classique."},charcoal:{name:"Anthracite",desc:"Une livrée ardoise mate — méritée par les explorateurs."},gold:{name:"Or",desc:"Une livrée premium étincelante."},comingSoon:{name:"Bientôt plus",desc:"De nouveaux designs arrivent."}},dC={intro:"L'obsidienne débloque des designs dans le hangar et des améliorations instantanées.",bonus:"+{pct}%",badgePopular:"Populaire",badgeValue:"Meilleur prix",granted:"+ {amount} obsidienne ajoutée",restore:"Restaurer les achats",restored:"Achats restaurés",viewSkins:"Voir les designs →",disclosure:"L'obsidienne et les designs sont stockés sur cet appareil.",watchAd:"Regarder une vidéo",adsLeftToday:"{count}/{cap} aujourd'hui",adsCapReached:"Reviens demain",removeAds:"Supprimer les pubs",removeAdsOwned:"Pubs supprimées"},uC={title:"Réglages",quality:"Qualité graphique",presetLow:"Faible",presetStandard:"Standard",presetHigh:"Élevée",presetUltra:"Ultra",advanced:"Avancé",meshRes:"Résolution du maillage",meshHint:"Segments · 100–3000",vegSamples:"Échantillons de végétation",vegHint:"10 000–10 000 000",restartNote:"Les changements nécessitent un redémarrage. L'application rechargera la page.",cancel:"Annuler",apply:"Appliquer et recharger",language:"Langue",controls:"Commandes",invertPitch:"Commandes de vol inversées",invertPitchHint:"Tirez vers le bas pour monter",gyroControl:"Pilotage par inclinaison",gyroControlHint:"Inclinez l'appareil pour diriger",gyroSensitivity:"Sensibilité",gyroRecalibrate:"Recalibrer",tutorial:"Tutoriel",replayTutorial:"Revoir le tutoriel",dangerZone:"Zone de danger",dangerDesc:"Réinitialise toute la progression : points, lieux, améliorations, POI découverts, aéroports et checkpoint. Les réglages graphiques sont conservés.",resetSave:"Réinitialiser la progression",audio:"Audio",music:"Musique",musicHint:"Thème du menu par Daniel Schultes",musicVolume:"Volume de la musique",sound:"Son",soundHint:"Vent, ambiance et effets",soundVolume:"Volume du son",headphoneHint:"Idéal au casque."},hC={title:"Vraiment supprimer ta sauvegarde ?",text:"Tous les points, lieux, améliorations et POI découverts seront perdus. Tu recommenceras à <strong>Tenerife Nord</strong> avec l'avion de base.",warn:"Cette action est irréversible.",cancel:"Annuler",confirm:"Réinitialiser"},fC={eyebrow:"Île",archTitle:"Îles Canaries",legendSpawn:"Départ",legendDiscovered:"Découvert",legendLocked:"Inconnu",hintDefault:"Touche un point de départ pour commencer là.",hintNone:"Atterris dans un aéroport pour le débloquer comme point de départ.",hintProgress:"{landed} / {total} aéroports débloqués. Touche un point de départ.",hintAll:"Tous les aéroports débloqués. Touche un point de départ.",markerLocked:"???",tipStart:"Démarrer à {id}",tipNotLanded:"{id} — pas encore atterri",tipUndiscovered:"Pas encore découvert"},pC={title:"Mentions légales",provider:"Fournisseur",contact:"Contact",privacy:"Confidentialité",privacyLink:"Ouvrir la politique de confidentialité",linksLiability:"Responsabilité des liens",linksText:"Notre offre contient des liens vers des sites web externes de tiers dont nous ne pouvons pas influencer le contenu. Nous déclinons donc toute responsabilité quant à ces contenus externes. Le fournisseur ou l'exploitant des pages liées est toujours responsable de leur contenu.",footer:"Swiss Innovation Studios · 2026"},mC={title:"Licences open source",intro:"Teide inclut les composants open source suivants. Les textes complets des licences figurent ci-dessous et sont inclus dans l'application.",audioTitle:"Audio — son et musique",audioCredit:"Effets sonores de Pixabay, utilisés sous la licence de contenu Pixabay. Musique composée par Daniel Schultes.",footer:"Swiss Innovation Studios · 2026"},gC={title:"Tourne ton appareil",sub:"Teide se joue en mode paysage"},yC={title:"Mode test",prompt:"Saisir le code PIN",wrong:"Code PIN incorrect",cancel:"Annuler",confirm:"OK"},vC={drag:{label:"Aérodynamique",desc:"Pliage plus net — moins de traînée, vol plané plus long."},maxSpeed:{label:"Vitesse max",desc:"Augmente la vitesse de croisière maximale."},speedFromPitch:{label:"Piqué",desc:"Plus d'accélération en piqué — l'altitude devient de la vitesse."},stallSpeed:{label:"Stabilité",desc:"Seuil de décrochage plus bas — pardonne le vol lent."},takeoffSpeed:{label:"Piste",desc:"Accélération au décollage plus rapide — moins de roulage."},brake:{label:"Aérofrein",desc:"Débloque les volets de frein (Espace en vol)."},greyBoost:{label:"Boost de réserve",desc:"Poussée d'urgence plus forte : combustion plus longue, plus de poussée, recharge plus rapide."}},xC={pickLanguage:"Choisis ta langue",welcome:"Bienvenue aux Canaries",story:["Tu as plié l'avion en papier parfait et tu l'as lancé depuis les pentes du Teide. Chevauche maintenant les thermiques et plane au-dessus des îles Canaries.","Capte les courants ascendants pour rester en l'air, traverse des points d'intérêt pour récolter des lieux et pose-toi sur les pistes pour les débloquer comme nouveaux points de départ.","Se poser, c'est continuer : chaque atterrissage recharge ton booster pour le prochain saut. Aligne-toi sur une piste et pose-toi en douceur.","Dépense tes points au hangar pour améliorer ton avion et ton booster. Plane assez loin et de nouvelles îles deviennent accessibles — de La Gomera jusqu'à Lanzarote. Jusqu'où iras-tu ?"],next:"Suivant",begin:"C'est parti !"},_C={eyebrow:"Tutoriel",skip:"Passer",retry:"Réessaie !",done:"Prêt — c'est parti !",launch:"Tire vers le bas pour décoller et planer",navLeft:"Maintenant à gauche",navRight:"Maintenant à droite",navUp:"Maintenant monte",navDown:"Maintenant descends",rings:"Traverse les deux anneaux ({collected}/{total})",boost:"Maintiens le boost pour une accélération",thermal:"Dirige-toi vers l'ascendance pour prendre de l'altitude",ringHigh:"Profite de l'altitude — attrape l'anneau haut",ringLow:"Maintenant redescends — par l'anneau bas",invertHint:"Monter à l'envers ? Inverse-le.",steerHint:"Pilote ici",endTitle:"Prêt à planer !",endBody:"Explore les îles Canaries et traverse des anneaux pour collecter des lieux. Réunis-en assez et ton boost One-Shot t'emmène à l'île suivante. Jusqu'où planeras-tu ?",endGo:"C'est parti !"},bC={loading:QR,a11y:eC,hud:tC,booster:nC,menu:iC,welcome:aC,pause:sC,crash:oC,hangar:rC,obsidian:lC,skins:cC,shop:dC,settings:uC,reset:hC,levels:fC,imprint:pC,licenses:mC,portrait:gC,testpin:yC,upgrades:vC,onboarding:xC,tutorial:_C},SC={sub:"Costruzione del mondo…",hint:"Con impostazioni di qualità elevate può richiedere alcuni secondi."},MC={pause:"Pausa",map:"Mappa",close:"Chiudi",landings:"Atterraggi",brake:"Freno",oneShot:"One-Shot",boost:"Boost",sell:"Vendi per {cost} punti"},wC={lift:"Ascendenza",soon:"presto",hintNormal:"↑ ↓ Beccheggio · ← → Rollio · Spazio Freno · Shift Boost · F One-Shot",hintNormalTouch:"Guida col joystick · Destra Boost / Freno / One-Shot",hintPrelaunch:"Tira giù per decollare",hintPrelaunchGyro:"Tocca boost per decollare",hintTakeoff:"Rullaggio al decollo…",landingToast:"Atterrato! · {id}",landingBonus:"+ {bonus} pti",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nuova isola scoperta!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Atterra all'aeroporto segnalato per ricaricare i propulsori e guadagnare punti extra.",airportUnlockTitle:"Aeroporto sbloccato!",airportUnlockBody:"Riparti da {name} quando vuoi dal menu Livelli.",airportUnlocked:"{name} sbloccato",wrongApproach:"Lato di avvicinamento sbagliato: allineati dall'altra estremità."},EC={names:["Nessun Booster","Booster Livello 1","Booster Livello 2","Booster Livello 3","Booster Livello MAX"],unlock:["","Booster Livello 1 sbloccato","Booster Livello 2 sbloccato — La Gomera a portata","Booster Livello 3 sbloccato — Gran Canaria a portata","Booster Livello MAX sbloccato — Fuerteventura / Lanzarote"]},AC={start:"Inizia",startSubDefault:"Ultimo checkpoint",levels:"Livelli",levelsSub:"Scegli aeroporto",hangar:"Hangar",hangarSub:"Potenziamenti e stato",shop:"Negozio",shopSub:"Ossidiana e design",settings:"Impostazioni",settingsSub:"Grafica e prestazioni",imprint:"Note legali",licenses:"Licenze"},TC={checkpoint:"Checkpoint · {id}",firstFlight:"Primo volo · TFN"},RC={title:"Pausa",resume:"Riprendi volo",home:"Menu principale"},CC={title:"Atterraggio di fortuna",restart:"Decolla di nuovo",hint:"Barra spaziatrice",hangar:"Hangar",shop:"Negozio"},LC={title:"Hangar",points:"Punti",locations:"Luoghi",obsidian:"Ossidiana",highscore:"Record",plane:"Aereo",dragToRotate:"Trascina per ruotare",upgrades:"Potenziamenti",booster:"Booster",selectUpgrade:"Tocca un potenziamento per vederne la descrizione.",buy:"Acquista · {cost}",buyObsidian:"Ossidiana · {cost}",max:"Max",level:"Livello {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Il tuo livello di boost aumenta automaticamente quando scopri abbastanza luoghi. Attraversa nuovi POI per migliorare il tuo boost One-Shot.",equip:"Equipaggia",equipped:"Equipaggiato",comingSoon:"In arrivo",getDiamonds:"Ottieni ossidiana →",skinPrev:"Design precedente",skinNext:"Design successivo"},PC={title:"Pagare con l'ossidiana?",text:"Questo potenziamento costa <strong></strong>.",warn:"L'ossidiana si acquista con denaro reale. Tocca <em>Conferma</em> solo se vuoi davvero spendere ossidiana.",cancel:"Annulla",confirm:"Conferma",spendSkin:"Stai spendendo {obsidian} per il design {label}."},IC={default:{name:"Carta",desc:"La piega classica."},charcoal:{name:"Antracite",desc:"Una livrea ardesia opaca — guadagnata dagli esploratori."},gold:{name:"Oro",desc:"Una scintillante livrea premium."},comingSoon:{name:"Altri presto",desc:"Nuovi design in arrivo."}},NC={intro:"L'ossidiana sblocca design nell'hangar e potenziamenti istantanei.",bonus:"+{pct}%",badgePopular:"Popolare",badgeValue:"Miglior valore",granted:"+ {amount} ossidiana aggiunta",restore:"Ripristina acquisti",restored:"Acquisti ripristinati",viewSkins:"Vedi i design →",disclosure:"Ossidiana e design sono salvati su questo dispositivo.",watchAd:"Guarda un video",adsLeftToday:"{count}/{cap} oggi",adsCapReached:"Torna domani",removeAds:"Rimuovi annunci",removeAdsOwned:"Annunci rimossi"},DC={title:"Impostazioni",quality:"Qualità grafica",presetLow:"Bassa",presetStandard:"Standard",presetHigh:"Alta",presetUltra:"Ultra",advanced:"Avanzate",meshRes:"Risoluzione mesh",meshHint:"Segments · 100–3000",vegSamples:"Campioni vegetazione",vegHint:"10.000–10.000.000",restartNote:"Le modifiche richiedono un riavvio. Applicando, la pagina verrà ricaricata.",cancel:"Annulla",apply:"Applica e ricarica",language:"Lingua",controls:"Comandi",invertPitch:"Comandi di volo invertiti",invertPitchHint:"Tira giù per salire",gyroControl:"Controllo a inclinazione",gyroControlHint:"Inclina il dispositivo per virare",gyroSensitivity:"Sensibilità",gyroRecalibrate:"Ricalibra",tutorial:"Tutorial",replayTutorial:"Ripeti tutorial",dangerZone:"Zona pericolo",dangerDesc:"Reimposta tutti i progressi: punti, luoghi, potenziamenti, POI scoperti, aeroporti e checkpoint. Le impostazioni grafiche vengono mantenute.",resetSave:"Reimposta progressi",audio:"Audio",music:"Musica",musicHint:"Tema del menu di Daniel Schultes",musicVolume:"Volume musica",sound:"Suono",soundHint:"Vento, ambiente ed effetti",soundVolume:"Volume suoni",headphoneHint:"Meglio con le cuffie."},kC={title:"Vuoi davvero eliminare il salvataggio?",text:"Tutti i punti, i luoghi, i potenziamenti e i POI scoperti andranno persi. Ripartirai da <strong>Tenerife Nord</strong> con l'aereo base.",warn:"Questa azione non può essere annullata.",cancel:"Annulla",confirm:"Reimposta"},OC={eyebrow:"Isola",archTitle:"Isole Canarie",legendSpawn:"Partenza",legendDiscovered:"Scoperto",legendLocked:"Sconosciuto",hintDefault:"Tocca un punto di partenza per iniziare lì.",hintNone:"Atterra in un aeroporto per sbloccarlo come punto di partenza.",hintProgress:"{landed} / {total} aeroporti sbloccati. Tocca un punto di partenza.",hintAll:"Tutti gli aeroporti sbloccati. Tocca un punto di partenza.",markerLocked:"???",tipStart:"Parti da {id}",tipNotLanded:"{id} — non ancora atterrato",tipUndiscovered:"Non ancora scoperto"},UC={title:"Note legali",provider:"Fornitore",contact:"Contatto",privacy:"Privacy",privacyLink:"Apri l'informativa sulla privacy",linksLiability:"Responsabilità per i link",linksText:"La nostra offerta contiene link a siti web esterni di terzi sui cui contenuti non abbiamo alcuna influenza. Pertanto non possiamo assumerci alcuna responsabilità per tali contenuti di terzi. Del contenuto delle pagine collegate è sempre responsabile il rispettivo fornitore o gestore delle pagine.",footer:"Swiss Innovation Studios · 2026"},FC={title:"Licenze open source",intro:"Teide include i seguenti componenti open source. I testi completi delle licenze sono qui sotto e inclusi nell'app.",audioTitle:"Audio — suoni e musica",audioCredit:"Effetti sonori da Pixabay, usati con la Licenza dei Contenuti Pixabay. Musica composta da Daniel Schultes.",footer:"Swiss Innovation Studios · 2026"},zC={title:"Ruota il dispositivo",sub:"Teide si gioca in modalità orizzontale"},BC={title:"Modalità test",prompt:"Inserisci il PIN",wrong:"PIN errato",cancel:"Annulla",confirm:"OK"},HC={drag:{label:"Aerodinamica",desc:"Pieghe più lisce — meno resistenza, planata più lunga."},maxSpeed:{label:"Velocità max",desc:"Aumenta la velocità di crociera massima."},speedFromPitch:{label:"Picchiata",desc:"Più accelerazione in picchiata — la quota diventa velocità."},stallSpeed:{label:"Stabilità",desc:"Soglia di stallo più bassa — perdona il volo lento."},takeoffSpeed:{label:"Pista",desc:"Accelerazione al decollo più rapida — meno rullaggio."},brake:{label:"Aerofreno",desc:"Sblocca gli alettoni freno (Spazio in volo)."},greyBoost:{label:"Boost di riserva",desc:"Spinta d'emergenza più forte: combustione più lunga, più spinta, ricarica più rapida."}},GC={pickLanguage:"Scegli la lingua",welcome:"Benvenuto alle Canarie",story:["Hai piegato il perfetto aeroplanino di carta e lo hai lanciato dai pendii del Teide. Ora cavalca le termiche e plana sulle Isole Canarie.","Sfrutta le correnti ascensionali per restare in volo, attraversa i punti d'interesse per raccogliere i luoghi e atterra sulle piste per sbloccarle come nuovi punti di partenza.","Atterrare significa proseguire: ogni atterraggio ricarica il tuo propulsore per il salto successivo. Allineati a una pista e posati con delicatezza.","Spendi i tuoi punti nell'hangar per potenziare aereo e booster. Plana abbastanza lontano e nuove isole entrano nel raggio — da La Gomera fino a Lanzarote. Fin dove arriverai?"],next:"Avanti",begin:"Si parte!"},VC={eyebrow:"Tutorial",skip:"Salta",retry:"Riprova!",done:"Pronto — si vola!",launch:"Tira giù per decollare e planare",navLeft:"Ora a sinistra",navRight:"Ora a destra",navUp:"Ora sali",navDown:"Ora scendi",rings:"Attraversa entrambi gli anelli ({collected}/{total})",boost:"Tieni premuto il boost per uno scatto",thermal:"Punta verso la corrente ascensionale per guadagnare quota",ringHigh:"Sfrutta la quota — prendi l'anello alto",ringLow:"Ora ridiscendi — attraverso l'anello basso",invertHint:"Salire sembra al contrario? Invertilo.",steerHint:"Guida qui",endTitle:"Pronto a planare!",endBody:"Esplora le Canarie e attraversa gli anelli per raccogliere luoghi. Raccogline a sufficienza e il tuo boost One-Shot ti porta all'isola successiva. Fin dove plani?",endGo:"Si vola!"},WC={loading:SC,a11y:MC,hud:wC,booster:EC,menu:AC,welcome:TC,pause:RC,crash:CC,hangar:LC,obsidian:PC,skins:IC,shop:NC,settings:DC,reset:kC,levels:OC,imprint:UC,licenses:FC,portrait:zC,testpin:BC,upgrades:HC,onboarding:GC,tutorial:VC},qC={sub:"Wereld wordt gebouwd…",hint:"Bij hogere kwaliteitsinstellingen kan dit enkele seconden duren."},XC={pause:"Pauze",map:"Kaart",close:"Sluiten",landings:"Landingen",brake:"Rem",oneShot:"One-Shot",boost:"Boost",sell:"Verkopen voor {cost} punten"},jC={lift:"Lift",soon:"binnenkort",hintNormal:"↑ ↓ Pitch · ← → Rol · Spatie Rem · Shift Boost · F One-Shot",hintNormalTouch:"Stuur met joystick · Rechts Boost / Rem / One-Shot",hintPrelaunch:"Trek omlaag om te starten",hintPrelaunchGyro:"Tik op boost om op te stijgen",hintTakeoff:"Startrun…",landingToast:"Geland! · {id}",landingBonus:"+ {bonus} ptn",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nieuw eiland ontdekt!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Land op het gemarkeerde vliegveld om je boosters bij te vullen en bonuspunten te verdienen.",airportUnlockTitle:"Vliegveld ontgrendeld!",airportUnlockBody:"Start wanneer je wilt bij {name} via het menu Levels.",airportUnlocked:"{name} ontgrendeld",wrongApproach:"Verkeerde aanvliegzijde — kom van de andere kant."},$C={names:["Geen Booster","Booster Niveau 1","Booster Niveau 2","Booster Niveau 3","Booster Niveau MAX"],unlock:["","Booster Niveau 1 ontgrendeld","Booster Niveau 2 ontgrendeld — La Gomera binnen bereik","Booster Niveau 3 ontgrendeld — Gran Canaria binnen bereik","Booster Niveau MAX ontgrendeld — Fuerteventura / Lanzarote"]},YC={start:"Start",startSubDefault:"Laatste checkpoint",levels:"Levels",levelsSub:"Kies vliegveld",hangar:"Hangar",hangarSub:"Upgrades & status",shop:"Winkel",shopSub:"Obsidiaan & designs",settings:"Instellingen",settingsSub:"Graphics & prestaties",imprint:"Colofon",licenses:"Licenties"},KC={checkpoint:"Checkpoint · {id}",firstFlight:"Eerste vlucht · TFN"},ZC={title:"Pauze",resume:"Vlucht hervatten",home:"Hoofdmenu"},JC={title:"Crashlanding",restart:"Opnieuw opstijgen",hint:"Spatiebalk",hangar:"Hangar",shop:"Winkel"},QC={title:"Hangar",points:"Punten",locations:"Locaties",obsidian:"Obsidiaan",highscore:"Record",plane:"Vliegtuig",dragToRotate:"Sleep om te draaien",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tik op een upgrade om de beschrijving te zien.",buy:"Kopen · {cost}",buyObsidian:"Obsidiaan · {cost}",max:"Max",level:"Niveau {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Je boostniveau stijgt automatisch zodra je genoeg locaties hebt ontdekt. Vlieg door nieuwe POI's om je One-Shot-boost te verbeteren.",equip:"Uitrusten",equipped:"Uitgerust",comingSoon:"Binnenkort",getDiamonds:"Obsidiaan halen →",skinPrev:"Vorig design",skinNext:"Volgend design"},eL={title:"Met obsidiaan betalen?",text:"Deze upgrade kost <strong></strong>.",warn:"Obsidiaan wordt met echt geld gekocht. Tik alleen op <em>Bevestigen</em> als je echt obsidiaan wilt uitgeven.",cancel:"Annuleren",confirm:"Bevestigen",spendSkin:"Je geeft {obsidian} uit aan het design {label}."},tL={default:{name:"Papier",desc:"De klassieke vouw."},charcoal:{name:"Antraciet",desc:"Een matte leikleurige livrei — verdiend door ontdekkers."},gold:{name:"Goud",desc:"Een glanzende premium livrei."},comingSoon:{name:"Binnenkort meer",desc:"Nieuwe designs zijn onderweg."}},nL={intro:"Obsidiaan ontgrendelt designs in de hangar en directe upgrades.",bonus:"+{pct}%",badgePopular:"Populair",badgeValue:"Beste waarde",granted:"+ {amount} obsidiaan toegevoegd",restore:"Aankopen herstellen",restored:"Aankopen hersteld",viewSkins:"Designs bekijken →",disclosure:"Obsidiaan en designs worden op dit apparaat bewaard.",watchAd:"Bekijk een video",adsLeftToday:"{count}/{cap} vandaag",adsCapReached:"Kom morgen terug",removeAds:"Advertenties verwijderen",removeAdsOwned:"Advertenties verwijderd"},iL={title:"Instellingen",quality:"Grafische kwaliteit",presetLow:"Laag",presetStandard:"Standaard",presetHigh:"Hoog",presetUltra:"Ultra",advanced:"Geavanceerd",meshRes:"Mesh-resolutie",meshHint:"Segments · 100–3000",vegSamples:"Vegetatie-samples",vegHint:"10.000–10.000.000",restartNote:"Wijzigingen vereisen een herstart. Bij toepassen wordt de pagina herladen.",cancel:"Annuleren",apply:"Toepassen & herladen",language:"Taal",controls:"Besturing",invertPitch:"Omgekeerde vluchtbesturing",invertPitchHint:"Trek omlaag om te klimmen",gyroControl:"Kantelbesturing",gyroControlHint:"Kantel je toestel om te sturen",gyroSensitivity:"Gevoeligheid",gyroRecalibrate:"Herkalibreren",tutorial:"Tutorial",replayTutorial:"Tutorial opnieuw",dangerZone:"Gevarenzone",dangerDesc:"Zet alle voortgang terug: punten, locaties, upgrades, ontdekte POI's, vliegvelden en checkpoint. Grafische instellingen blijven behouden.",resetSave:"Voortgang resetten",audio:"Audio",music:"Muziek",musicHint:"Menuthema van Daniel Schultes",musicVolume:"Muziekvolume",sound:"Geluid",soundHint:"Wind, sfeer en effecten",soundVolume:"Geluidsvolume",headphoneHint:"Het best met een koptelefoon."},aL={title:"Opslag echt verwijderen?",text:"Alle punten, locaties, upgrades en ontdekte plekken gaan verloren. Je begint op <strong>Tenerife Nord</strong> met het basisvliegtuig.",warn:"Deze actie kan niet ongedaan worden gemaakt.",cancel:"Annuleren",confirm:"Resetten"},sL={eyebrow:"Eiland",archTitle:"Canarische Eilanden",legendSpawn:"Start",legendDiscovered:"Ontdekt",legendLocked:"Onbekend",hintDefault:"Tik op een startpunt om daar te beginnen.",hintNone:"Land op een vliegveld om het als startpunt te ontgrendelen.",hintProgress:"{landed} / {total} vliegvelden ontgrendeld. Tik op een startpunt.",hintAll:"Alle vliegvelden ontgrendeld. Tik op een startpunt.",markerLocked:"???",tipStart:"Start bij {id}",tipNotLanded:"{id} — nog niet geland",tipUndiscovered:"Nog niet ontdekt"},oL={title:"Colofon",provider:"Aanbieder",contact:"Contact",privacy:"Privacy",privacyLink:"Privacybeleid openen",linksLiability:"Aansprakelijkheid voor links",linksText:"Ons aanbod bevat links naar externe websites van derden, op de inhoud waarvan wij geen invloed hebben. Daarom kunnen wij voor deze externe inhoud geen aansprakelijkheid aanvaarden. Voor de inhoud van de gelinkte pagina's is steeds de betreffende aanbieder of beheerder van de pagina's verantwoordelijk.",footer:"Swiss Innovation Studios · 2026"},rL={title:"Opensource-licenties",intro:"Teide bevat de volgende opensourcecomponenten. De volledige licentieteksten staan hieronder en zijn bij de app gevoegd.",audioTitle:"Audio — geluid en muziek",audioCredit:"Geluidseffecten van Pixabay, gebruikt onder de Pixabay Content-licentie. Muziek gecomponeerd door Daniel Schultes.",footer:"Swiss Innovation Studios · 2026"},lL={title:"Draai je apparaat",sub:"Teide wordt in liggende stand gespeeld"},cL={title:"Testmodus",prompt:"Voer pincode in",wrong:"Onjuiste pincode",cancel:"Annuleren",confirm:"OK"},dL={drag:{label:"Aerodynamica",desc:"Strakkere vouwen — minder weerstand, langere glijvlucht."},maxSpeed:{label:"Topsnelheid",desc:"Verhoogt de maximale kruissnelheid."},speedFromPitch:{label:"Duikvlucht",desc:"Meer versnelling in een duik — hoogte wordt snelheid."},stallSpeed:{label:"Stabiliteit",desc:"Lagere overtreksnelheid — vergeeft langzaam vliegen."},takeoffSpeed:{label:"Startbaan",desc:"Snellere startversnelling — kortere startrun."},brake:{label:"Remklep",desc:"Ontgrendelt de remkleppen (Spatie tijdens de vlucht)."},greyBoost:{label:"Reserveboost",desc:"Sterkere noodstuwing: langere brandtijd, meer duwkracht, sneller bijvullen."}},uL={pickLanguage:"Kies je taal",welcome:"Welkom op de Canarische Eilanden",story:["Je hebt het perfecte papieren vliegtuigje gevouwen en het vanaf de hellingen van de Teide gelanceerd. Berijd nu de thermiek en zweef over de Canarische Eilanden.","Vang opstijgende lucht om in de lucht te blijven, duik door points of interest om locaties te verzamelen en land op startbanen om ze als nieuwe startpunten te ontgrendelen.","Landen is doorgaan: elke landing vult je booster aan voor de volgende sprong. Lijn uit met een baan en zet zacht neer.","Geef je punten uit in de hangar om je vliegtuig en booster te verbeteren. Zweef ver genoeg en nieuwe eilanden komen binnen bereik — van La Gomera tot Lanzarote. Hoe ver kom jij?"],next:"Volgende",begin:"Aan de slag!"},hL={eyebrow:"Tutorial",skip:"Overslaan",retry:"Opnieuw!",done:"Klaar — daar ga je!",launch:"Trek omlaag om op te stijgen en te zweven",navLeft:"Nu naar links",navRight:"Nu naar rechts",navUp:"Nu klimmen",navDown:"Nu dalen",rings:"Vlieg door beide ringen ({collected}/{total})",boost:"Houd boost vast voor een snelheidsstoot",thermal:"Stuur de opstijgwind in om hoogte te winnen",ringHigh:"Gebruik je hoogte — pak de hoge ring",ringLow:"Nu weer omlaag — door de lage ring",invertHint:"Klimmen omgekeerd? Wissel het om.",steerHint:"Hier sturen",endTitle:"Klaar om te zweven!",endBody:"Verken de Canarische Eilanden en vlieg door ringen om locaties te verzamelen. Verzamel er genoeg en je One-Shot-boost brengt je naar het volgende eiland. Hoe ver zweef jij?",endGo:"Daar gaan we"},fL={loading:qC,a11y:XC,hud:jC,booster:$C,menu:YC,welcome:KC,pause:ZC,crash:JC,hangar:QC,obsidian:eL,skins:tL,shop:nL,settings:iL,reset:aL,levels:sL,imprint:oL,licenses:rL,portrait:lL,testpin:cL,upgrades:dL,onboarding:uL,tutorial:hL},pL={sub:"Budowanie świata…",hint:"Przy wyższych ustawieniach jakości może to potrwać kilka sekund."},mL={pause:"Pauza",map:"Mapa",close:"Zamknij",landings:"Lądowania",brake:"Hamulec",oneShot:"One-Shot",boost:"Boost",sell:"Sprzedaj za {cost} pkt"},gL={lift:"Wznoszenie",soon:"wkrótce",hintNormal:"↑ ↓ Pochylenie · ← → Przechył · Spacja Hamulec · Shift Boost · F One-Shot",hintNormalTouch:"Steruj joystickiem · Prawo Boost / Hamulec / One-Shot",hintPrelaunch:"Pociągnij w dół, aby wystartować",hintPrelaunchGyro:"Dotknij boost, aby wystartować",hintTakeoff:"Rozbieg…",landingToast:"Wylądowano! · {id}",landingBonus:"+ {bonus} pkt",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Odkryto nową wyspę!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Wyląduj na oznaczonym lotnisku, aby naładować boostery i zdobyć dodatkowe punkty.",airportUnlockTitle:"Lotnisko odblokowane!",airportUnlockBody:"Startuj w {name} w dowolnej chwili z menu Poziomy.",airportUnlocked:"{name} odblokowane",wrongApproach:"Zła strona podejścia — podejdź z drugiej strony."},yL={names:["Brak Boostera","Booster Poziom 1","Booster Poziom 2","Booster Poziom 3","Booster Poziom MAX"],unlock:["","Booster Poziom 1 odblokowany","Booster Poziom 2 odblokowany — La Gomera w zasięgu","Booster Poziom 3 odblokowany — Gran Canaria w zasięgu","Booster Poziom MAX odblokowany — Fuerteventura / Lanzarote"]},vL={start:"Start",startSubDefault:"Ostatni checkpoint",levels:"Poziomy",levelsSub:"Wybierz lotnisko",hangar:"Hangar",hangarSub:"Ulepszenia i status",shop:"Sklep",shopSub:"Obsydian i wzory",settings:"Ustawienia",settingsSub:"Grafika i wydajność",imprint:"Nota prawna",licenses:"Licencje"},xL={checkpoint:"Checkpoint · {id}",firstFlight:"Pierwszy lot · TFN"},_L={title:"Pauza",resume:"Wznów lot",home:"Menu główne"},bL={title:"Rozbicie",restart:"Wystartuj ponownie",hint:"Spacja",hangar:"Hangar",shop:"Sklep"},SL={title:"Hangar",points:"Punkty",locations:"Miejsca",obsidian:"Obsydian",highscore:"Rekord",plane:"Samolot",dragToRotate:"Przeciągnij, aby obrócić",upgrades:"Ulepszenia",booster:"Booster",selectUpgrade:"Dotknij ulepszenia, aby zobaczyć opis.",buy:"Kup · {cost}",buyObsidian:"Obsydian · {cost}",max:"Maks",level:"Poziom {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Poziom boostera rośnie automatycznie, gdy odkryjesz wystarczająco wiele miejsc. Przelatuj przez nowe POI, aby ulepszyć swój boost One-Shot.",equip:"Załóż",equipped:"Założony",comingSoon:"Wkrótce",getDiamonds:"Zdobądź obsydian →",skinPrev:"Poprzedni wzór",skinNext:"Następny wzór"},ML={title:"Zapłacić obsydianem?",text:"To ulepszenie kosztuje <strong></strong>.",warn:"Obsydian kupuje się za prawdziwe pieniądze. Dotknij <em>Potwierdź</em> tylko, jeśli naprawdę chcesz wydać obsydian.",cancel:"Anuluj",confirm:"Potwierdź",spendSkin:"Wydajesz {obsidian} na wzór {label}."},wL={default:{name:"Papier",desc:"Klasyczne złożenie."},charcoal:{name:"Antracyt",desc:"Matowe łupkowe malowanie — dla odkrywców."},gold:{name:"Złoto",desc:"Lśniące malowanie premium."},comingSoon:{name:"Wkrótce więcej",desc:"Nowe wzory są w drodze."}},EL={intro:"Obsydian odblokowuje wzory w hangarze i natychmiastowe ulepszenia.",bonus:"+{pct}%",badgePopular:"Popularne",badgeValue:"Najlepsza oferta",granted:"+ {amount} obsydianu dodano",restore:"Przywróć zakupy",restored:"Zakupy przywrócone",viewSkins:"Zobacz wzory →",disclosure:"Obsydian i wzory są przechowywane na tym urządzeniu.",watchAd:"Obejrzyj film",adsLeftToday:"{count}/{cap} dziś",adsCapReached:"Wróć jutro",removeAds:"Usuń reklamy",removeAdsOwned:"Reklamy usunięte"},AL={title:"Ustawienia",quality:"Jakość grafiki",presetLow:"Niska",presetStandard:"Standard",presetHigh:"Wysoka",presetUltra:"Ultra",advanced:"Zaawansowane",meshRes:"Rozdzielczość siatki",meshHint:"Segments · 100–3000",vegSamples:"Próbki roślinności",vegHint:"10 000–10 000 000",restartNote:"Zmiany wymagają ponownego uruchomienia. Po zastosowaniu strona zostanie przeładowana.",cancel:"Anuluj",apply:"Zastosuj i przeładuj",language:"Język",controls:"Sterowanie",invertPitch:"Odwrócone sterowanie lotem",invertPitchHint:"Pociągnij w dół, aby się wznosić",gyroControl:"Sterowanie przechyłem",gyroControlHint:"Przechylaj urządzenie, aby sterować",gyroSensitivity:"Czułość",gyroRecalibrate:"Kalibruj ponownie",tutorial:"Samouczek",replayTutorial:"Powtórz samouczek",dangerZone:"Strefa zagrożenia",dangerDesc:"Resetuje cały postęp: punkty, miejsca, ulepszenia, odkryte POI, lotniska i checkpoint. Ustawienia grafiki zostają zachowane.",resetSave:"Zresetuj postęp",audio:"Audio",music:"Muzyka",musicHint:"Motyw menu: Daniel Schultes",musicVolume:"Głośność muzyki",sound:"Dźwięk",soundHint:"Wiatr, tło i efekty",soundVolume:"Głośność dźwięku",headphoneHint:"Najlepiej na słuchawkach."},TL={title:"Na pewno usunąć zapis?",text:"Wszystkie punkty, miejsca, ulepszenia i odkryte POI przepadną. Zaczniesz na <strong>Tenerife Nord</strong> podstawowym samolotem.",warn:"Tej operacji nie można cofnąć.",cancel:"Anuluj",confirm:"Resetuj"},RL={eyebrow:"Wyspa",archTitle:"Wyspy Kanaryjskie",legendSpawn:"Start",legendDiscovered:"Odkryte",legendLocked:"Nieznane",hintDefault:"Dotknij punktu startu, aby tam zacząć.",hintNone:"Wyląduj na lotnisku, aby odblokować je jako punkt startu.",hintProgress:"{landed} / {total} lotnisk odblokowanych. Dotknij punktu startu.",hintAll:"Wszystkie lotniska odblokowane. Dotknij punktu startu.",markerLocked:"???",tipStart:"Start na {id}",tipNotLanded:"{id} — jeszcze nie wylądowano",tipUndiscovered:"Jeszcze nieodkryte"},CL={title:"Nota prawna",provider:"Dostawca",contact:"Kontakt",privacy:"Prywatność",privacyLink:"Otwórz politykę prywatności",linksLiability:"Odpowiedzialność za linki",linksText:"Nasza oferta zawiera linki do zewnętrznych stron internetowych osób trzecich, na których treść nie mamy wpływu. Dlatego nie możemy ponosić odpowiedzialności za te obce treści. Za treść stron, do których prowadzą linki, odpowiada zawsze ich dostawca lub operator.",footer:"Swiss Innovation Studios · 2026"},LL={title:"Licencje open source",intro:"Teide zawiera następujące komponenty open source. Pełne teksty licencji znajdują się poniżej i są dołączone do aplikacji.",audioTitle:"Audio — dźwięk i muzyka",audioCredit:"Efekty dźwiękowe z Pixabay, na licencji Pixabay Content License. Muzykę skomponował Daniel Schultes.",footer:"Swiss Innovation Studios · 2026"},PL={title:"Obróć urządzenie",sub:"W Teide gra się w trybie poziomym"},IL={title:"Tryb testowy",prompt:"Wpisz PIN",wrong:"Błędny PIN",cancel:"Anuluj",confirm:"OK"},NL={drag:{label:"Aerodynamika",desc:"Gładsze złożenia — mniejszy opór, dłuższy lot ślizgowy."},maxSpeed:{label:"Prędkość maks.",desc:"Zwiększa maksymalną prędkość przelotową."},speedFromPitch:{label:"Nurkowanie",desc:"Większe przyspieszenie w nurkowaniu — wysokość zamienia się w prędkość."},stallSpeed:{label:"Stabilność",desc:"Niższy próg przeciągnięcia — wybacza wolny lot."},takeoffSpeed:{label:"Pas startowy",desc:"Szybsze przyspieszenie przy starcie — krótszy rozbieg."},brake:{label:"Hamulec aerodynamiczny",desc:"Odblokowuje klapy hamujące (Spacja w locie)."},greyBoost:{label:"Boost rezerwowy",desc:"Mocniejszy ciąg awaryjny: dłuższe spalanie, większy napęd, szybsze ładowanie."}},DL={pickLanguage:"Wybierz język",welcome:"Witaj na Wyspach Kanaryjskich",story:["Złożyłeś idealny papierowy samolot i wypuściłeś go ze zboczy Teide. Teraz ujeżdżaj kominy termiczne i szybuj nad Wyspami Kanaryjskimi.","Łap prądy wznoszące, aby utrzymać się w powietrzu, przelatuj przez punkty zainteresowania, aby zbierać miejsca, i ląduj na pasach, aby odblokować je jako nowe punkty startu.","Lądowanie pozwala lecieć dalej: każde lądowanie ładuje twój booster na kolejny skok. Wyrównaj do pasa i wyląduj łagodnie.","Wydawaj punkty w hangarze, aby ulepszać samolot i booster. Szybuj wystarczająco daleko, a nowe wyspy znajdą się w zasięgu — od La Gomery po Lanzarote. Jak daleko dolecisz?"],next:"Dalej",begin:"Zaczynamy!"},kL={eyebrow:"Samouczek",skip:"Pomiń",retry:"Jeszcze raz!",done:"Gotowe — lecimy!",launch:"Pociągnij w dół, aby wystartować i szybować",navLeft:"Teraz w lewo",navRight:"Teraz w prawo",navUp:"Teraz wznoś się",navDown:"Teraz opadaj",rings:"Przeleć przez oba pierścienie ({collected}/{total})",boost:"Przytrzymaj boost, by przyspieszyć",thermal:"Skieruj się w prąd wznoszący, aby nabrać wysokości",ringHigh:"Wykorzystaj wysokość — złap wysoki pierścień",ringLow:"Teraz w dół — przez niski pierścień",invertHint:"Wznoszenie na odwrót? Przełącz.",steerHint:"Steruj tutaj",endTitle:"Gotowy do szybowania!",endBody:"Odkrywaj Wyspy Kanaryjskie i przelatuj przez pierścienie, aby zbierać miejsca. Zbierz ich dość, a boost One-Shot zaniesie cię na kolejną wyspę. Jak daleko poszybujesz?",endGo:"Lecimy!"},OL={loading:pL,a11y:mL,hud:gL,booster:yL,menu:vL,welcome:xL,pause:_L,crash:bL,hangar:SL,obsidian:ML,skins:wL,shop:EL,settings:AL,reset:TL,levels:RL,imprint:CL,licenses:LL,portrait:PL,testpin:IL,upgrades:NL,onboarding:DL,tutorial:kL},UL={en:oR,de:CR,es:JR,fr:bC,it:WC,nl:fL,pl:OL},jr=["en","de","es","fr","it","nl","pl"],FL={en:{label:"English",flag:"🇬🇧"},de:{label:"Deutsch",flag:"🇩🇪"},es:{label:"Español",flag:"🇪🇸"},fr:{label:"Français",flag:"🇫🇷"},it:{label:"Italiano",flag:"🇮🇹"},nl:{label:"Nederlands",flag:"🇳🇱"},pl:{label:"Polski",flag:"🇵🇱"}};let Ui="en";const Eh=new Set;function zL(){const e=(navigator.languages&&navigator.languages[0]||navigator.language||"en").slice(0,2).toLowerCase();return jr.includes(e)?e:"en"}function BL(n){return n&&jr.includes(n)?n:zL()}function vg(n,e){let t=UL[n];for(const i of e.split(".")){if(t==null)return;t=t[i]}return t}function Ee(n,e){let t=vg(Ui,n);return t===void 0&&Ui!=="en"&&(t=vg("en",n)),t===void 0?n:(typeof t!="string"||e&&(t=t.replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):i)),t)}function HL(){return Ui}const GL={en:"en-GB",de:"de-DE",es:"es-ES",fr:"fr-FR",it:"it-IT",nl:"nl-NL",pl:"pl-PL"};function Cv(){return GL[Ui]||"en-GB"}function VL(){const n=new URLSearchParams(window.location.search).get("lang");return Ui=n&&jr.includes(n)?n:BL(pt().language),document.documentElement.lang=Ui,Pv(),Ui}function Lv(n){if(!jr.includes(n)||n===Ui)return;Ui=n,document.documentElement.lang=n;const e=pt();e.language=n,oi(e),Pv();for(const t of Eh)try{t(n)}catch(i){console.warn("[i18n] listener failed",i)}}function wd(n){return Eh.add(n),()=>Eh.delete(n)}function Pv(n=document){n.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=Ee(e.dataset.i18n)}),n.querySelectorAll("[data-i18n-html]").forEach(e=>{e.innerHTML=Ee(e.dataset.i18nHtml)}),n.querySelectorAll("[data-i18n-aria]").forEach(e=>{e.setAttribute("aria-label",Ee(e.dataset.i18nAria))}),n.querySelectorAll("[data-i18n-title]").forEach(e=>{e.title=Ee(e.dataset.i18nTitle)}),n.querySelectorAll("[data-i18n-placeholder]").forEach(e=>{e.placeholder=Ee(e.dataset.i18nPlaceholder)})}function Iv(n,{onPick:e,active:t,flagsOnly:i=!1}={}){if(!n)return;n.innerHTML="";const a=t||HL();for(const s of jr){const o=FL[s]||{label:s,flag:""},r=document.createElement("button");r.type="button",r.className="lang-chip"+(i?" lang-chip-flagsonly":"")+(s===a?" active":""),r.dataset.lang=s,r.setAttribute("aria-label",o.label),s===a&&r.setAttribute("aria-current","true"),r.innerHTML=i?`<span class="lang-chip-flag">${o.flag}</span>`:`<span class="lang-chip-flag">${o.flag}</span><span class="lang-chip-label">${o.label}</span>`,r.addEventListener("click",()=>e&&e(s)),n.appendChild(r)}}const WL=Math.PI/180,Rn={pitch:0,roll:0,isActive:!1};let zc=!1,Bc=!1,Nv=yn.sensDefault,xg=null,_g=null,Ur=!0,js=0,$s=0,Bf=!1;function qL(){return Bf}function XL(){Bf=!1}function jL(){return Rn}function Dv(n){const e=Number(n);Number.isFinite(e)&&(Nv=Math.max(yn.sensMin,Math.min(yn.sensMax,e)))}function Ed(){Ur=!0}function $L(n){return((n+180)%360+360)%360-180}function kv(n){if(n.beta==null||n.gamma==null)return;if(Ur){xg=n.beta,_g=n.gamma,Ur=!1,js=0,$s=0,Rn.pitch=0,Rn.roll=0,Rn.isActive=!0;return}const e=$L(n.beta-xg),t=n.gamma-_g,i=(typeof screen<"u"&&screen.orientation?screen.orientation.angle:window.orientation??0)*WL,a=Math.cos(i),s=Math.sin(i);let o=t*a+e*s,r=-t*s+e*a;const l=Math.max(1,yn.maxTiltDeg/Nv),c=m=>{const y=Math.abs(m);if(y<=yn.deadZoneDeg)return 0;const v=Math.min(1,(y-yn.deadZoneDeg)/(l-yn.deadZoneDeg));return Math.sign(m)*v};let d=c(o),u=-c(r);const f=yn.smoothing;$s+=(d-$s)*f,js+=(u-js)*f,Rn.roll=$s,Rn.pitch=js,Rn.isActive=!0,Bf=!0}function YL(){Bc||(window.addEventListener("deviceorientation",kv),Bc=!0)}function KL(){Bc&&(window.removeEventListener("deviceorientation",kv),Bc=!1)}async function ZL(){const n=typeof DeviceOrientationEvent<"u"?DeviceOrientationEvent:null;if(n&&typeof n.requestPermission=="function")try{return await n.requestPermission()==="granted"}catch{return!1}return!0}async function Ov(){return zc=!0,Ur=!0,Rn.isActive=!1,await ZL()?(YL(),!0):(zc=!1,!1)}function JL(){zc=!1,KL(),Rn.pitch=0,Rn.roll=0,Rn.isActive=!1,js=0,$s=0}function Uv(){Rn.pitch=0,Rn.roll=0,js=0,$s=0,zc&&(Ur=!0)}document.addEventListener("visibilitychange",()=>{document.hidden&&Uv()});window.addEventListener("blur",Uv);let Hc=dT();function Fv(){return Hc}function Gc(n){Hc=!!n,uT(Hc)}let Fr=hT();Dv(Rf());function Hf(){return Fr}async function QL(n){const e=n==="gyro"?"gyro":"touch";return Fr=e,Jm(e),vc(e!=="gyro"),e==="gyro"?await Ov()?!0:(Fr="touch",Jm("touch"),vc(!0),!1):(JL(),!0)}function eP(n){Dv(n)}Fr==="gyro"&&(vc(!1),Ov().then(n=>{n||vc(!0)}));let zv=!1,Bv=!1,Hv=!1;function Gf({brake:n=!1,boost:e=!1,oneShot:t=!1}={}){zv=!!n,Bv=!!e,Hv=!!t}function gs(){const n=v_(),e=S_(),t=jL(),i=e.isActive,a=Fr==="gyro"&&t.isActive;let s,o;return i?(s=e.pitch,o=e.roll):a?(s=t.pitch,o=t.roll):(s=n.pitch,o=n.roll),jn.pitch=Hc?s:-s,jn.roll=o,jn.brake=e.brake||n.brake,jn.boost=e.boost||n.boost,zv&&(jn.brake=!1),Bv&&(jn.boost=!1,fd()),Hv&&sf(),jn.isInputActive=n.isActive||e.isActive||a,__()?(jn.activeInputType="touch",b_()):qL()?(jn.activeInputType="gyro",XL()):y_()&&(jn.activeInputType="keyboard",g_()),jn}function Gv(){const n=new dt,e=[],t=.32,i=.22,a=Math.atan2(.28,.95),s=new ut({color:Ye.paper,side:Jt,flatShading:!0}),o=new vd({color:Ye.ink,transparent:!0,opacity:.32});for(const r of[-.45,.45]){const l=new dt;l.position.set(r,.045,.05),l.rotation.z=r<0?a:-a;const c=new ms(t,i);c.translate(0,-i/2,0),c.rotateX(-Math.PI/2);const d=new nt(c,s),u=new Uy(c);d.add(new Ly(u,o)),l.add(d),n.add(l),e.push(d)}return{group:n,flaps:e}}const{group:tP,flaps:Vv}=Gv();fe.add(tP);function nP(n){const e=gs().brake&&I.alive&&I.flightState===He.FLYING?1:0,t=1-Math.exp(-n/mc.deployTau);I.brakeAmount+=(e-I.brakeAmount)*t;const i=-I.brakeAmount*mc.maxAngle;for(const a of Vv)a.rotation.x=i}function iP(){I.brakeAmount=0;for(const n of Vv)n.rotation.x=0}function Wv(){const n=new dt,e=new ut({color:Ye.ink,flatShading:!0});function t(i,a,s,o){const r=new dt,l=new Wn(.018,.018,s,6);l.translate(0,-s/2,0),r.add(new nt(l,e));const c=new Wn(o,o,.04,12);return c.rotateZ(Math.PI/2),c.translate(0,-s,0),r.add(new nt(c,e)),r.position.set(i,-.05,a),r}return n.add(t(0,-.55,.11,.055)),n.add(t(-.42,.12,.12,.06)),n.add(t(.42,.12,.12,.06)),n}const ls=Wv();ls.scale.setScalar(.001);ls.visible=!1;fe.add(ls);function aP(n){const e=ET(fe.position,Kl.triggerDist,Kl.triggerHeight)?1:0,t=1-Math.exp(-n/Kl.deployTau);I.gearAmount+=(e-I.gearAmount)*t;const i=Math.max(.001,I.gearAmount);ls.scale.setScalar(i),ls.visible=I.gearAmount>.02}function sP(){I.gearAmount=1,ls.scale.setScalar(1),ls.visible=!0}const bg=new Ae;let nr=0;function qv(){const n=new dt,e=[],t=yt.exhaust;for(const i of[-.36,t.offsetX]){const a=new Wn(t.radiusNarrow,t.radiusWide,1,12,1,!0);a.rotateX(-Math.PI/2),a.translate(0,0,.5);const s=new Xn({color:16777215,transparent:!0,opacity:0,blending:_c,depthWrite:!1,side:Jt}),o=new nt(a,s);o.position.set(i,t.offsetY,t.offsetZ),o.scale.z=0,n.add(o),e.push(o)}return{group:n,streams:e}}const{group:oP,streams:Xv}=qv();fe.add(oP);function rP(){return I.oneShotActive?(yt.oneShot.tiers[is()]||yt.oneShot.tiers[0]).color:I.greyActive?yt.grey.color:null}function lP(n){const e=yt.exhaust,t=I.oneShotActive||I.greyActive?1:0,i=1-Math.exp(-n/Math.max(e.intensityTau,1e-4));nr+=(t-nr)*i;const a=rP();a!==null&&bg.setHex(a);for(const s of Xv)s.scale.z=e.length*nr,s.material.opacity=.85*nr,a!==null&&s.material.color.copy(bg)}function cP(){nr=0;for(const n of Xv)n.scale.z=0,n.material.opacity=0}let ha=null,Hs=null,so=null,kt=null,Sg=null,pr=null,Ah=null,Va=null,mr=null,Th=null,Ru=0,kl=0,Ol=0,$i=0;const Mg=new Ae;let oo=0,Rh=0,ac=!1,Ca=null,Vc=0,Wc=0,Xo=null,Ch=null;const dP=.35;function uP(){if(ha)return!0;const n=document.getElementById("hangar-3d");if(!n)return!1;ha=new vf({canvas:n,antialias:!0,alpha:!0}),ha.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Hs=new Ry;const e=new ph(16774368,.85);e.position.set(2.5,3,2),Hs.add(e);const t=new ph(13229290,.45);t.position.set(-2,1.5,-2),Hs.add(t),Hs.add(new YA(16777215,.35)),so=new Tn(28,1,.05,50),so.position.set(0,.25,3.6),so.lookAt(0,0,0),kt=yv(),kt.scale.setScalar(1.5),kt.rotation.x=-.18,kt.rotation.y=.55,Hs.add(kt);const i=Gv();pr=i.group,pr.visible=!1,kt.add(pr),Ah=i.flaps,Va=Wv(),Va.scale.setScalar(.001),Va.visible=!1,kt.add(Va);const a=qv();return mr=a.group,mr.visible=!1,kt.add(mr),Th=a.streams,$v(),hP(n),Sg=new ResizeObserver(wg),Sg.observe(n),wg(),!0}function wg(){if(!ha)return;const e=ha.domElement.getBoundingClientRect(),t=Math.max(1,Math.round(e.width)),i=Math.max(1,Math.round(e.height));ha.setSize(t,i,!1),so.aspect=t/i,so.updateProjectionMatrix()}function hP(n){n.addEventListener("pointerdown",t=>{ac=!0,Ca={px:t.clientX,py:t.clientY,rotX:kt.rotation.x,rotY:kt.rotation.y},Xo={ts:performance.now(),px:t.clientX,py:t.clientY},Vc=0,Wc=0,n.setPointerCapture(t.pointerId),n.style.cursor="grabbing"}),n.addEventListener("pointermove",t=>{if(!ac||!Ca)return;const i=t.clientX-Ca.px,a=t.clientY-Ca.py;kt.rotation.y=Ca.rotY+i*.0085,kt.rotation.x=Hi.clamp(Ca.rotX+a*.0085,-1.2,1.2);const s=performance.now(),o=Math.max(.001,(s-Xo.ts)/1e3);Wc=(t.clientX-Xo.px)*.0085/o,Vc=(t.clientY-Xo.py)*.0085/o,Xo={ts:s,px:t.clientX,py:t.clientY}});const e=()=>{ac=!1,Ca=null,n.style.cursor="grab"};n.addEventListener("pointerup",e),n.addEventListener("pointercancel",e),n.addEventListener("pointerleave",e),n.style.cursor="grab",n.style.touchAction="none"}function jv(n){if(!ha||!kt)return;const e=Math.min(.05,(n-Rh)/1e3||0);Rh=n,ac||(Vc*=.92,Wc*=.92,kt.rotation.y+=(Wc+dP)*e,kt.rotation.x=Hi.clamp(kt.rotation.x+Vc*e-kt.rotation.x*.35*e,-1.2,1.2)),fP(e),ha.render(Hs,so),oo=requestAnimationFrame(jv)}function fP(n){$i=($i+n)%Do.cyclePeriod;const e=1-Math.exp(-n/Math.max(Do.smoothTau,1e-4));if(Va){const t=J.testMode||(J.upgrades?.takeoffSpeed|0)>0,[i,a]=Do.gearWindow,o=t&&$i>=i&&$i<=a?1:0,r=1-Math.exp(-n/Math.max(Kl.deployTau,1e-4));Ol+=(o-Ol)*r;const l=Math.max(.001,Ol);Va.scale.setScalar(l),Va.visible=t&&Ol>.02}if(Ah&&pr){const t=hd();pr.visible=t;const[i,a]=Do.brakeWindow,o=t&&$i>=i&&$i<=a?1:0;Ru+=(o-Ru)*e;const r=-Ru*mc.maxAngle;for(const l of Ah)l.rotation.x=r}if(Th&&mr){const t=is(),i=yt.oneShot.tiers[t]||yt.oneShot.tiers[0];mr.visible=t>0;const[a,s]=Do.boostWindow,r=t>0&&$i>=a&&$i<=s?1:0;kl+=(r-kl)*e,Mg.setHex(i.color||16777215);const l=yt.exhaust;for(const c of Th)c.scale.z=l.length*kl,c.material.opacity=.85*kl,c.material.color.copy(Mg)}}function $v(){if(!kt)return;const n=Ch?Po(Ch):vv();_v(kt,n)}function pP(n){Ch=n,$v()}function mP(){uP()&&(oo||(Rh=performance.now(),oo=requestAnimationFrame(jv)))}function Yv(){oo&&(cancelAnimationFrame(oo),oo=0)}k2(()=>{Vn==="shop"&&ys()});const Ad={hangar:document.getElementById("hangar-overlay"),shop:document.getElementById("shop-overlay"),settings:document.getElementById("settings-overlay")},Eg=document.getElementById("garage-punkte"),Ag=document.getElementById("garage-highscore"),Tg=document.getElementById("garage-obsidian"),Rg=document.getElementById("garage-gofios"),Ys=document.getElementById("garage-upgrades"),Cu=document.getElementById("garage-upgrade-info"),Cg=document.getElementById("shop-obsidian"),Lg=document.getElementById("hangar-skin-name"),gP=document.getElementById("hangar-skin-price"),yP=document.getElementById("hangar-skin-dots"),sc=document.getElementById("hangar-skin-action"),vP=document.getElementById("hangar-skin-prev"),xP=document.getElementById("hangar-skin-next"),Lh=document.getElementById("hangar-skin-getdiamonds"),Gs=document.getElementById("shop-packs"),Ph=document.getElementById("shop-restore"),Lu=document.getElementById("shop-extras"),oc=document.getElementById("shop-watch-ad"),Pg=document.getElementById("shop-watch-ad-sub"),Ig=document.getElementById("shop-watch-ad-reward"),rc=document.getElementById("shop-remove-ads"),Ng=document.getElementById("shop-remove-ads-sub");let pi=0,Jn=null;const qc="__booster__";let gn=null;const na=document.getElementById("obsidian-confirm"),Dg=document.getElementById("obsidian-confirm-text"),_P=document.getElementById("obsidian-confirm-cancel"),bP=document.getElementById("obsidian-confirm-ok"),_o=document.getElementById("settings-segments"),bo=document.getElementById("settings-samples"),SP=document.getElementById("settings-apply"),MP=document.getElementById("settings-cancel"),wP=document.getElementById("settings-reset-save"),EP=document.getElementById("settings-langs"),Di=document.getElementById("settings-invert-toggle");Di&&Di.addEventListener("change",()=>Gc(Di.checked));const gr=document.getElementById("settings-music-toggle"),yr=document.getElementById("settings-music-vol"),vr=document.getElementById("settings-sfx-toggle"),xr=document.getElementById("settings-sfx-vol");gr&&gr.addEventListener("change",()=>{const n=!gr.checked;jy(n),fv(n)});vr&&vr.addEventListener("change",()=>{const n=!vr.checked;Yy(n),pv(n)});yr&&yr.addEventListener("input",()=>{const n=parseFloat(yr.value);mT(n),_2(n)});xr&&xr.addEventListener("input",()=>{const n=parseFloat(xr.value);yT(n),b2(n)});const kg=document.getElementById("settings-gyro-block"),_r=document.getElementById("settings-gyro-toggle"),Xc=document.getElementById("settings-gyro-tune"),So=document.getElementById("settings-gyro-sens"),AP=document.getElementById("settings-gyro-sens-open"),ti=document.getElementById("settings-gyro-advanced"),TP=document.getElementById("settings-gyro-recalibrate"),Mo=document.getElementById("settings-quality-slider"),jc=document.getElementById("settings-quality-ticks"),Ks=document.getElementById("settings-quality-readout"),RP=document.getElementById("settings-advanced-open"),ni=document.getElementById("settings-advanced"),zr=sT(),yi=document.getElementById("reset-confirm"),CP=document.getElementById("reset-confirm-cancel"),LP=document.getElementById("reset-confirm-ok");let Vn=null,ya=null,Vf=null;function PP(n){return Ee(`booster.names.${n}`)}function vn(n){return Math.round(n).toLocaleString(Cv())}function wo(n,e={}){ir();const t=Ad[n];t&&(n==="hangar"&&(GP(),va()),n==="shop"&&ys(),n==="settings"&&ZP(),t.classList.add("visible"),t.setAttribute("aria-hidden","false"),Vn=n,ya=typeof e.onClose=="function"?e.onClose:null,n==="hangar"&&mP())}function ir(){if(!Vn)return;Vn==="hangar"&&Yv();const n=Ad[Vn];n&&(n.classList.remove("visible"),n.setAttribute("aria-hidden","true")),Vn=null;const e=ya;ya=null,e&&e()}function IP(){Vn==="hangar"&&Yv();for(const n of Object.values(Ad))n&&(n.classList.remove("visible"),n.setAttribute("aria-hidden","true"));Vn=null,ya=null}function va(){DP(),NP(),Zv(),Jv(),Ih()}function NP(){if(gn===qc||gn&&oa[gn])return;const n=Object.keys(oa);for(const e of n){const t=J.upgrades[e]|0,i=oa[e].levels.length-1;if(t<i){gn=e;return}}gn=n[0]||null}function Kv(){const n=is(),e=yt.oneShot.tiers[n]||yt.oneShot.tiers[0],t="#"+(e.color|0).toString(16).padStart(6,"0"),i=nf(),a=cr.length-1;if(n>=a)return{tier:n,tierCfg:e,colorHex:t,pct:100,rightLabel:Ee("hangar.max"),gofios:i};const s=cr[n]|0,o=cr[n+1]|0,r=Math.max(1,o-s),l=Math.max(0,Math.min(100,(i-s)/r*100));return{tier:n,tierCfg:e,colorHex:t,pct:l,rightLabel:`${i} / ${o} <span class="material-symbols-outlined inline-icon">where_to_vote</span>`,gofios:i}}function DP(){if(Eg&&(Eg.textContent=vn(J.punkte)),Ag&&(Ag.textContent=vn(J.bestFlightPunkte|0)),Tg&&(Tg.textContent=vn(J.obsidian|0)),Rg){const n=J.gofiosByIsland[J.currentIsland]|0;Rg.textContent=vn(n)}}const kP={drag:"air",maxSpeed:"speed",speedFromPitch:"trending_down",stallSpeed:"paragliding",takeoffSpeed:"flight_takeoff",brake:"back_hand",greyBoost:"bolt"};function Og(n,e,t){let i="";for(let a=0;a<e;a++){const s=a<n,o=s&&t?` style="background:${t};border-color:${t}"`:"";i+=`<span class="upg-pip${s?" is-on":""}"${o}></span>`}return i}function Zv(){if(!Ys)return;Ys.innerHTML="";const n='<span class="material-symbols-outlined upg-buy-icon">stars</span>',e='<span class="material-symbols-outlined upg-buy-icon">diamond</span>';for(const[s,o]of Object.entries(oa)){const r=J.upgrades[s]|0,l=o.levels.length-1,c=r>=l,d=c?0:o.costs[r+1],u=c?0:Qv(s),f=s===gn;let m,y,v;J.punkte>=d?(m=`${vn(d)} ${n}`,y=Ee("hangar.buy",{cost:vn(d)}),v="punkte"):(J.obsidian|0)>=u?(m=`${u} ${e}`,y=Ee("hangar.buyObsidian",{cost:u}),v="obsidian"):(m=`${u} ${e}`,y=Ee("hangar.getDiamonds"),v="shop");const p=J.testMode&&r>0?`<button class="upg-sell" type="button" data-sell="${s}"
                aria-label="${Ee("a11y.sell",{cost:vn(o.costs[r])})}">−</button>`:"",h=c?`<span class="upg-max">${Ee("hangar.max")}</span>`:`<button class="upg-buy${v==="punkte"?"":" pay-obsidian"}" type="button"
                data-buy="${s}" data-pay="${v}" aria-label="${y}">${m}</button>`,_=document.createElement("div");_.className=`upg-card${c?" is-maxed":""}${f?" is-selected":""}`,_.dataset.select=s,_.innerHTML=`
      <div class="upg-card-head">
        <span class="upg-card-icon material-symbols-outlined">${kP[s]||"tune"}</span>
        <span class="upg-card-label">${Ee(`upgrades.${s}.label`)}</span>
        ${p}
      </div>
      <div class="upg-card-foot">
        <div class="upg-pips">${Og(r,l,null)}</div>
        ${h}
      </div>
    `,Ys.appendChild(_)}const t=Kv(),i=gn===qc,a=document.createElement("div");a.className=`upg-card upg-card-booster${i?" is-selected":""}`,a.dataset.select=qc,a.innerHTML=`
    <div class="upg-card-head">
      <span class="upg-card-icon material-symbols-outlined">rocket_launch</span>
      <span class="upg-card-label">${Ee("hangar.booster")}</span>
    </div>
    <div class="upg-card-foot">
      <div class="upg-pips">${Og(t.tier,4,t.colorHex)}</div>
      <span class="upg-gofios">${t.rightLabel}</span>
    </div>
  `,Ys.appendChild(a)}function Jv(){if(!Cu)return;const n=Cu.querySelector(".upgrade-info-title"),e=Cu.querySelector(".upgrade-info-desc");if(gn===qc){const o=Kv();n&&(n.textContent=Ee("hangar.boosterTitle",{name:PP(o.tier)})),e&&(e.textContent=Ee("hangar.boosterDesc"));return}const t=gn&&oa[gn];if(!t){n&&(n.textContent=""),e&&(e.textContent=Ee("hangar.selectUpgrade"));return}const i=J.upgrades[gn]|0,a=t.levels.length-1,s=i>=a;if(n){const o=s?Ee("hangar.max"):Ee("hangar.level",{level:i,max:a});n.textContent=`${Ee(`upgrades.${gn}.label`)} · ${o}`}e&&(e.textContent=Ee(`upgrades.${gn}.desc`))}function OP(n){if(!J.testMode)return;const e=oa[n];if(!e)return;const t=J.upgrades[n]|0;if(t<=0)return;const i=e.costs[t];J.upgrades[n]=t-1,J.punkte+=i,To(),Ht(),va()}function UP(n){const e=oa[n],t=J.upgrades[n]|0,i=e.costs[t+1];J.punkte<i||(J.punkte-=i,_n("spend-points"),J.upgrades[n]=t+1,To(),Ht(),va())}function Qv(n){const e=pc.obsidianUpgradeCosts,t=J.obsidianUpgradeCount?.[n]|0;return e[Math.min(t,e.length-1)]}function FP(n){const e=J.upgrades[n]|0,t=Qv(n);(J.obsidian|0)<t||(J.obsidian=(J.obsidian|0)-t,_n("spend-diamonds"),J.upgrades[n]=e+1,J.obsidianUpgradeCount[n]=(J.obsidianUpgradeCount?.[n]|0)+1,To(),Ht(),va())}function zP({textHtml:n,onConfirm:e}){Vf={onConfirm:e},Dg&&(Dg.innerHTML=n),na.classList.add("visible"),na.setAttribute("aria-hidden","false")}function lc(){na.classList.remove("visible"),na.setAttribute("aria-hidden","true"),Vf=null}function BP(){const n=Vf?.onConfirm;lc(),n&&n()}function HP(n){const e=Po(n),t=`<strong>${e.costObsidian} <span class="material-symbols-outlined inline-icon">diamond</span></strong>`,i=`<strong>${Ee(e.nameKey)}</strong>`;zP({textHtml:Ee("obsidian.spendSkin",{obsidian:t,label:i}),onConfirm:()=>WP(n)})}function GP(){const n=kf().findIndex(e=>e.id===J.equippedSkin);pi=n>=0?n:0}function VP(n){const e=Po(n);e.costPunkte==null||J.punkte<e.costPunkte||(J.punkte-=e.costPunkte,_n("spend-points"),Md(n),Of(n),va())}function WP(n){const e=Po(n);e.costObsidian==null||(J.obsidian|0)<e.costObsidian||(J.obsidian=(J.obsidian|0)-e.costObsidian,_n("spend-diamonds"),Md(n),Of(n),va())}function Ug(){_n("denied");const n=ya;ya=null,wo("shop",{onClose:()=>wo("hangar",{onClose:n})})}function qP(){const n=ya;ya=null,wo("hangar",{onClose:()=>wo("shop",{onClose:n})})}function Ih(){if(!Lg)return;const n=kf();(pi<0||pi>=n.length)&&(pi=0);const e=n[pi];Lg.textContent=Ee(e.nameKey),gP.textContent=Ee(e.descKey),yP.innerHTML=n.map((l,c)=>`<span class="skin-dot${c===pi?" is-active":""}"></span>`).join(""),pP(e.teaser?J.equippedSkin:e.id);const t='<span class="material-symbols-outlined skin-action-icon">diamond</span>',i='<span class="material-symbols-outlined skin-action-icon">stars</span>';let a,s=!1,o=!1,r=!1;if(Jn=null,e.teaser)a=Ee("hangar.comingSoon"),s=!0,o=!0;else if(xv(e.id))J.equippedSkin===e.id?(a=Ee("hangar.equipped"),s=!0,o=!0):(a=Ee("hangar.equip"),Jn={kind:"equip",id:e.id});else{const l=e.costPunkte!=null,c=e.costObsidian!=null,d=l&&J.punkte>=e.costPunkte,u=c&&(J.obsidian|0)>=e.costObsidian;d?(a=`${Ee("hangar.buy",{cost:vn(e.costPunkte)})} ${i}`,Jn={kind:"buyPunkte",id:e.id}):u?(a=`${Ee("hangar.buyObsidian",{cost:e.costObsidian})} ${t}`,Jn={kind:"buyObsidian",id:e.id}):l?(a=`${Ee("hangar.buy",{cost:vn(e.costPunkte)})} ${i}`,s=!0,r=c):(a=`${Ee("hangar.buyObsidian",{cost:e.costObsidian})} ${t}`,s=!0,r=!0)}sc.innerHTML=a,sc.disabled=s,sc.classList.toggle("is-quiet",o),Lh&&(Lh.hidden=!r)}function ys(){Cg&&(Cg.textContent=vn(J.obsidian|0)),XP();const n=os.isAvailable();if(Ph&&(Ph.hidden=!n),!!Gs){if(!n){Gs.innerHTML="",Gs.hidden=!0;return}Gs.hidden=!1,Gs.innerHTML=ef.map(e=>{const t=Math.floor(e.diamonds*(1+e.bonusPct/100)),i=os.localizedPrice(e.productId),a=e.badgeKey?`<span class="pack-badge">${Ee(e.badgeKey)}</span>`:"",s=e.bonusPct>0?`<span class="pack-bonus">${Ee("shop.bonus",{pct:e.bonusPct})}</span>`:"";return`
      <button class="pack-card" type="button" data-pack="${e.id}">
        ${a}
        <span class="pack-amount">
          <span class="material-symbols-outlined pack-icon">diamond</span>${vn(t)}
        </span>
        ${s}
        <span class="pack-price">${i}</span>
      </button>`}).join("")}}function XP(){if(!Lu)return;if(!rs.isAvailable()){Lu.hidden=!0;return}Lu.hidden=!1;const n=rs.rewardedRemaining();Ig&&(Ig.innerHTML=`+${Cn.rewardedDiamonds} <span class="material-symbols-outlined">diamond</span>`),Pg&&(Pg.textContent=n>0?Ee("shop.adsLeftToday",{count:n,cap:Cn.rewardedDailyCap}):Ee("shop.adsCapReached")),oc&&(oc.disabled=n<=0,oc.classList.toggle("is-disabled",n<=0));const e=!!J.adsRemoveOwned;Ng&&(Ng.textContent=e?Ee("shop.removeAdsOwned"):os.removeAdsPrice()),rc&&(rc.disabled=e,rc.classList.toggle("is-owned",e))}async function jP(){const n=await rs.watchRewarded();ys();const e=document.getElementById("shop-msg");if(e){if(n?.success)e.textContent=Ee("shop.granted",{amount:vn(n.diamonds)});else if(n?.capped)e.textContent=Ee("shop.adsCapReached");else return;e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),2400)}}async function $P(){(await os.purchaseRemoveAds())?.success&&ys()}async function YP(n){const e=await os.purchasePack(n);if(e?.success){ys();const t=document.getElementById("shop-msg");t&&(t.textContent=Ee("shop.granted",{amount:vn(e.diamonds)}),t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2400))}}async function KP(){await os.restore(),ys();const n=document.getElementById("shop-msg");n&&(n.textContent=Ee("shop.restored"),n.classList.add("show"),setTimeout(()=>n.classList.remove("show"),2400))}let Qt=null;function ZP(){Qt=pt(),_o&&(_o.value=Qt.segments),bo&&(bo.value=Qt.samples),n3(),Ks&&(Ks.innerHTML='<span class="settings-ro-item"><span class="material-symbols-outlined">grid_on</span><b data-ro="seg">0</b></span><span class="settings-ro-item"><span class="material-symbols-outlined">forest</span><b data-ro="samples">0</b></span>'),Wf(!1),ex(),Di&&(Di.checked=Fv()),gr&&(gr.checked=!Xy()),yr&&(yr.value=pT()),vr&&(vr.checked=!$y()),xr&&(xr.value=gT()),JP()}function JP(){if(!kg)return;const n=ds();if(kg.hidden=!n,!n)return;const e=Hf()==="gyro";_r&&(_r.checked=e),So&&(So.value=String(Rf())),Xc&&(Xc.hidden=!e)}function ex(){Iv(EP,{flagsOnly:!0,onPick:n=>{Lv(n),Qt&&(Qt.language=n)}})}function QP(n){return n.charAt(0).toUpperCase()+n.slice(1)}function e3(n){return zr.findIndex(e=>e.segments===n.segments&&e.samples===n.samples)}function t3(n){let e=0,t=1/0;return zr.forEach((i,a)=>{const s=Math.abs(i.segments-n.segments);s<t&&(t=s,e=a)}),e}function n3(){Mo&&(Mo.max=String(zr.length-1)),jc&&(jc.innerHTML=zr.map(n=>`<span class="settings-tick">${Ee("settings.preset"+QP(n.name))}</span>`).join(""))}function Wf(n){if(!Qt)return;const e=e3(Qt),t=e>=0?e:t3(Qt);Mo&&(Mo.value=String(t)),jc&&[...jc.children].forEach((i,a)=>i.classList.toggle("active",e>=0&&a===t)),Ks&&(Fg(Ks.querySelector('[data-ro="seg"]'),Qt.segments,n),Fg(Ks.querySelector('[data-ro="samples"]'),Qt.samples,n),Ks.classList.toggle("is-custom",e<0))}function i3(n){const e=zr[n];e&&(Qt={...Qt,segments:e.segments,samples:e.samples},_o&&(_o.value=e.segments),bo&&(bo.value=e.samples),Wf(!0))}function Fg(n,e,t){if(!n)return;n._roRaf&&cancelAnimationFrame(n._roRaf);const i=t?parseFloat(n.dataset.cur)||0:e;if(!t||i===e){n.dataset.cur=String(e),n.textContent=vn(e),n._roRaf=0;return}const a=performance.now(),s=320,o=r=>{const l=Math.min(1,(r-a)/s),c=1-Math.pow(1-l,3),d=i+(e-i)*c;n.dataset.cur=l<1?String(d):String(e),n.textContent=vn(Math.round(d)),n._roRaf=l<1?requestAnimationFrame(o):0};n._roRaf=requestAnimationFrame(o)}function Nh(){if(!Qt)return;const n=parseInt(_o?.value,10),e=parseInt(bo?.value,10);Number.isFinite(n)&&(Qt.segments=n),Number.isFinite(e)&&(Qt.samples=e),Wf(!1)}function a3(){ni&&(ni.classList.add("visible"),ni.setAttribute("aria-hidden","false"))}function Pu(){ni&&(ni.classList.remove("visible"),ni.setAttribute("aria-hidden","true"))}function s3(){ti&&(So&&(So.value=String(Rf())),ti.classList.add("visible"),ti.setAttribute("aria-hidden","false"))}function Iu(){ti&&(ti.classList.remove("visible"),ti.setAttribute("aria-hidden","true"))}function o3(){if(Nh(),!Qt)return;oi(Qt);const n=new URL(window.location.href);n.searchParams.delete("segments"),n.searchParams.delete("samples"),window.location.href=n.toString()}function r3(){yi&&(yi.classList.add("visible"),yi.setAttribute("aria-hidden","false"))}function Nu(){yi&&(yi.classList.remove("visible"),yi.setAttribute("aria-hidden","true"))}function l3(){f_();const n=new URL(window.location.href);n.searchParams.delete("segments"),n.searchParams.delete("samples"),window.location.href=n.toString()}(function(){document.querySelectorAll(".modal-close[data-modal-close]").forEach(t=>{const i=t.dataset.modalClose;(i==="hangar"||i==="shop"||i==="settings")&&t.addEventListener("click",ir)});for(const t of Object.values(Ad))t&&t.addEventListener("click",i=>{i.target===t&&ir()});Ys&&Ys.addEventListener("click",t=>{const i=t.target.closest("[data-sell]");if(i&&!i.disabled){OP(i.dataset.sell);return}const a=t.target.closest("[data-buy]");if(a){if(a.disabled)return;const o=a.dataset.buy,r=a.dataset.pay;gn=o,r==="punkte"?UP(o):r==="obsidian"?FP(o):r==="shop"&&Ug();return}const s=t.target.closest("[data-select]");s&&(gn=s.dataset.select,Zv(),Jv())}),na&&(na.addEventListener("click",t=>{t.target===na&&lc()}),_P?.addEventListener("click",lc),bP?.addEventListener("click",BP));const e=kf().length;vP?.addEventListener("click",()=>{pi=(pi-1+e)%e,Ih()}),xP?.addEventListener("click",()=>{pi=(pi+1)%e,Ih()}),sc?.addEventListener("click",()=>{Jn&&(Jn.kind==="equip"?(Of(Jn.id),va()):Jn.kind==="buyPunkte"?VP(Jn.id):Jn.kind==="buyObsidian"&&HP(Jn.id))}),Lh?.addEventListener("click",Ug),Gs?.addEventListener("click",t=>{const i=t.target.closest("[data-pack]");i&&YP(i.dataset.pack)}),Ph?.addEventListener("click",KP),oc?.addEventListener("click",jP),rc?.addEventListener("click",$P),document.getElementById("shop-view-skins")?.addEventListener("click",qP),yi&&(yi.addEventListener("click",t=>{t.target===yi&&Nu()}),CP?.addEventListener("click",Nu),LP?.addEventListener("click",l3)),document.addEventListener("keydown",t=>{t.key==="Escape"&&(yi?.classList.contains("visible")?(Nu(),t.stopImmediatePropagation()):na?.classList.contains("visible")?(lc(),t.stopImmediatePropagation()):ni?.classList.contains("visible")?(Pu(),t.stopImmediatePropagation()):ti?.classList.contains("visible")?(Iu(),t.stopImmediatePropagation()):Vn&&(ir(),t.stopImmediatePropagation()))}),Mo?.addEventListener("input",()=>i3(parseInt(Mo.value,10))),RP?.addEventListener("click",a3),ni&&(ni.addEventListener("click",t=>{t.target===ni&&Pu()}),ni.querySelector("[data-settings-advanced-close]")?.addEventListener("click",Pu)),_o?.addEventListener("input",Nh),bo?.addEventListener("input",Nh),_r?.addEventListener("change",async()=>{const t=_r.checked,i=await QL(t?"gyro":"touch"),a=t&&i;_r.checked=a,Xc&&(Xc.hidden=!a),t&&i?(Gc(!1),Di&&(Di.checked=!1)):t||(Gc(!0),Di&&(Di.checked=!0))}),So?.addEventListener("input",()=>{const t=parseFloat(So.value);eP(t),fT(t)}),TP?.addEventListener("click",Ed),AP?.addEventListener("click",s3),ti&&(ti.addEventListener("click",t=>{t.target===ti&&Iu()}),ti.querySelector("[data-settings-gyro-advanced-close]")?.addEventListener("click",Iu)),MP?.addEventListener("click",ir),SP?.addEventListener("click",o3),wP?.addEventListener("click",r3),wd(()=>{Vn==="hangar"&&va(),Vn==="shop"&&ys(),Vn==="settings"&&ex()})})();const c3=.4,d3=.08,Br=20,fa=Math.ceil(Te.size/Br)+2,zg=-8e3-Br,tx=Array.from({length:fa*fa},()=>[]);function nx(n,e){return{cx:Math.floor((n-zg)/Br),cz:Math.floor((e-zg)/Br)}}function $r(n,e,t,i,a){const s=i+c3,o={x:n,z:t,r2:s*s,yMin:e,yMax:e+a+d3},r=Math.ceil(s/Br),{cx:l,cz:c}=nx(n,t);for(let d=-r;d<=r;d++)for(let u=-r;u<=r;u++){const f=l+u,m=c+d;f<0||m<0||f>=fa||m>=fa||tx[m*fa+f].push(o)}}function u3(n,e,t){const{cx:i,cz:a}=nx(n,t);if(i<0||a<0||i>=fa||a>=fa)return!1;const s=tx[a*fa+i];for(let o=0;o<s.length;o++){const r=s[o];if(e<r.yMin||e>r.yMax)continue;const l=r.x-n,c=r.z-t;if(l*l+c*c<r.r2)return!0}return!1}const ia=1024,Ja=427,Bg=1.08,h3=700,f3=5e3,p3={TFN:"tenerife",TFS:"tenerife",GMZ:"gomera",SPC:"palma",VDE:"hierro",LPA:"gc",FUE:"fuerte",ACE:"lanza",GRAC:"graciosa"},Ji=document.getElementById("tp-minimap-canvas"),Yi=document.createElement("div"),ar=document.createElement("canvas"),$c=document.createElement("div"),Ul=document.createElement("div"),ro=document.createElement("div"),cc=document.createElement("div"),dc=document.createElement("span"),Hg=document.getElementById("tp-island"),Gg=document.getElementById("map-card"),m3=6;let jo=null,Du=0,Yc=!1,Dh=0,kh=0,Vg="",qf=0,Fl=null;const ku=new N;function Xf(){if(Fl)return Fl;let n=1/0,e=-1/0,t=1/0,i=-1/0;for(const a of wt)n=Math.min(n,a.x-a.bboxRadius),e=Math.max(e,a.x+a.bboxRadius),t=Math.min(t,a.z-a.bboxRadius),i=Math.max(i,a.z+a.bboxRadius);return Fl={cx:(n+e)/2,cz:(t+i)/2,hw:(e-n)/2*Bg,hh:(i-t)/2*Bg},Fl}function g3(n,e){let t=wt[0].id,i=1/0;for(const a of wt){const s=n-a.x,o=e-a.z,r=s*s+o*o;r<i&&(i=r,t=a.id)}return t}function y3(){!Ji||Yc||(Yc=!0,Ji.innerHTML="",Yi.className="minimap-stage",Yi.style.width=ia+"px",Yi.style.height=Ja+"px",Yi.style.transformOrigin="0 0",ar.className="minimap-canvas",ar.width=ia,ar.height=Ja,Yi.appendChild(ar),$c.className="minimap-runways",Yi.appendChild($c),Ji.appendChild(Yi),Ul.className="minimap-overlay",ro.className="minimap-plane",ro.innerHTML='<span class="minimap-plane-tri"></span>',Ul.appendChild(ro),cc.className="minimap-compass",dc.className="minimap-compass-inner",dc.textContent="N",cc.appendChild(dc),Ul.appendChild(cc),Ji.appendChild(Ul),Ji.addEventListener("pointerdown",()=>{qf=performance.now()+f3,Ji.classList.add("is-overview")}),ix(),sx(),Oh(),window.addEventListener("resize",Oh))}function ix(){if(!Yc)return;const n=ZT();if(!n)return;const e=ar.getContext("2d"),t=e.createImageData(ia,Ja),{cx:i,cz:a,hw:s,hh:o}=Xf(),r=Te.heightmap.metersPerUnit,l=Te.waterLevel,c=Te.heightmap.elevRange,d=Te.heightmap.bbox,u=Te.heightmap.center,f=Math.cos(u.lat*Math.PI/180),m=d.lonE-d.lonW,y=d.latN-d.latS,v=(u.lon-d.lonW)/m*(n.w-1),p=r/(111320*f)/m*(n.w-1),h=(d.latN-u.lat)/y*(n.h-1),_=r/111320/y*(n.h-1),g=c[1]-c[0],b=c[0],R={};for(const M of wt)R[M.id]=!1;for(const M of ot)if(J.discoveredRunways[M.id]){const w=p3[M.id];w&&(R[w]=!0)}const E=n.data,A=n.w,U=n.h;for(let M=0;M<Ja;M++){const w=a+(M/(Ja-1)-.5)*2*o,W=Math.max(0,Math.min(U-1,Math.floor(h+w*_)))*A*4;for(let oe=0;oe<ia;oe++){const O=i+(oe/(ia-1)-.5)*2*s,q=Math.floor(v+O*p);let $,K,B;if(q<0||q>=A)$=52,K=92,B=118;else{const le=W+q*4,ue=E[le]<<8|E[le+1],xe=(b+ue/65535*g)/r;if(xe<l+.05)$=52,K=92,B=118;else{const te=g3(O,w),k=xe*r;R[te]?[$,K,B]=v3(k):$=K=B=x3(k)}}const Q=(M*ia+oe)*4;t.data[Q]=$,t.data[Q+1]=K,t.data[Q+2]=B,t.data[Q+3]=255}}e.putImageData(t,0,0)}function v3(n){return n<80?[199,184,145]:n<600?[134,152,98]:n<1600?[157,138,110]:n<2400?[180,168,148]:n<3e3?[215,212,200]:[240,240,235]}function x3(n){return n<80?124:n<600?140:n<1600?156:n<2400?172:n<3e3?190:206}function ax(n,e){const{cx:t,cz:i,hw:a,hh:s}=Xf();return{fracX:(n-t)/(2*a)+.5,fracY:(e-i)/(2*s)+.5}}function sx(){$c.innerHTML="";for(const n of ot){const e=!!J.landedRunways[n.id];if(!!!J.discoveredRunways[n.id]&&!e)continue;const{fracX:i,fracY:a}=ax(n.x,n.z);if(i<0||i>1||a<0||a>1)continue;const s=document.createElement("span");s.className=`minimap-runway ${e?"is-landed":"is-seen"}`,s.style.left=(i*100).toFixed(2)+"%",s.style.top=(a*100).toFixed(2)+"%",$c.appendChild(s)}}function jf(n){if(Lo(n.x,n.z)<Te.waterLevel+.05)return null;let t=null,i=1/0;for(const a of wt){const s=n.x-a.x,o=n.z-a.z,r=s*s+o*o;r<i&&(i=r,t=a)}return t}function ox(){return performance.now()<qf}const _3="Islas Canarias";let Wg="";function b3(n){if(!Hg)return;const e=jf(n),i=ox()||!e?_3:e.name;i!==Wg&&(Wg=i,Hg.textContent=i)}function Oh(){const n=Ji.getBoundingClientRect();Dh=n.width,kh=n.height}function S3(){return Gg?!document.body.classList.contains("touch-mode")||Gg.classList.contains("is-open"):!0}function M3(n){if(!Yc||!n||(b3(n.position),!S3()))return;const e=ot.map(b=>J.discoveredRunways[b.id]?"1":"0").join("")+"|"+ot.map(b=>J.landedRunways[b.id]?"1":"0").join("");e!==Vg&&(ix(),sx(),Vg=e),(Dh<1||kh<1)&&Oh();const t=Dh,i=kh;if(t<1||i<1)return;const a=t/2,s=i/2;ku.set(0,0,-1).applyQuaternion(n.quaternion);const o=Math.atan2(ku.x,-ku.z),r=performance.now(),l=r<qf,{hw:c}=Xf(),d=2*c/ia,u=t*d/h3,f=i/Ja,m=l?f:u,y=Du?Math.min(.1,(r-Du)/1e3):0;if(Du=r,jo===null)jo=m;else{const b=1-Math.exp(-y*m3);jo+=(m-jo)*b}l||Ji.classList.remove("is-overview");const{fracX:v,fracY:p}=ax(n.position.x,n.position.z),h=v*ia,_=p*Ja;Yi.style.transform=`translate(${a}px, ${s}px) rotate(${-o}rad) scale(${jo}) translate(${-h}px, ${-_}px)`,ro.style.left=a+"px",ro.style.top=s+"px",ro.style.transform="translate(-50%, -50%)";const g=Math.min(t,i)*.43;cc.style.transform=`translate(-50%, -50%) rotate(${-o}rad) translateY(-${g}px)`,dc.style.transform=`rotate(${o}rad)`}const Uh=document.getElementById("landing-toast"),qg=document.getElementById("controls-hint"),Ou=document.getElementById("boost-grey-fill"),zl=document.getElementById("boost-oneshot-tile"),Xg=document.getElementById("test-mode-border"),In=document.getElementById("poi-toast"),mi=document.getElementById("poi-label"),Qa=document.getElementById("wrong-approach-toast");document.getElementById("tp-island");const w3={peak:document.querySelector('[data-tp="peak-count"]'),city:document.querySelector('[data-tp="city-count"]'),landscape:document.querySelector('[data-tp="landscape-count"]'),beach:document.querySelector('[data-tp="beach-count"]')},Uu=document.getElementById("map-card-punkte"),Fu=document.getElementById("map-card-highscore"),zu=document.getElementById("map-card-landings"),jg=document.getElementById("map-card-landings-best");let Fh="",zh="";function $g(n){return Math.round(n).toLocaleString(Cv())}let Wa=null,Kc=null,Bl=null,Zc=!1,Hr=null,Yg=-1,Kg=null,Bh=null,Zg=!1,Eo=!1;wd(()=>{Bh=null,zh="",Fh="",Eo&&Qa&&(Qa.textContent=Ee("hud.wrongApproach"))});function E3(n){const e=Ee("hud.landingBonus",{bonus:ns.landingBonus});Uh.innerHTML=`${Ee("hud.landingToast",{id:n.id})}<span class="bonus">${e}</span>`,Uh.classList.add("show")}function rx(){Uh.classList.remove("show")}function Jg(n,e,t,i){if(!mi)return;const a=t>0?Ee("hud.poiRewardFull",{punkte:e,gofios:t}):Ee("hud.poiRewardPunkte",{punkte:e}),s=i?Ee(`booster.unlock.${i}`):"",o=s?`<span class="tier-up">${s}</span>`:"";mi.innerHTML=`<span class="poi-name">${n}</span><span class="reward">${a}</span>${o}`,mi.classList.add("show","prominent"),Zc=!0,Hr=n,Bl&&clearTimeout(Bl),Bl=setTimeout(()=>{mi.classList.remove("prominent"),Zc=!1,Bl=null,mi.innerHTML=`<span class="poi-name">${n}</span>`},ft.activationToast.duration*1e3)}function $f(n){Kc=n,In.classList.add("show"),Wa&&clearTimeout(Wa),Wa=setTimeout(()=>{In.classList.remove("show"),Wa=null,Kc=null},ft.activationToast.duration*1e3)}function A3(n,e){In&&(In.innerHTML=`${n}<span class="reward">${Ee("hud.discoveryReward",{diamonds:e})}</span><span class="tier-up">${Ee("hud.discoveryTitle")}</span>`,In.classList.remove("compact"),$f("discovery"))}function T3(){In&&(In.innerHTML=Ee("hud.runwayApproach"),In.classList.remove("compact"),$f("approach"))}function Bu(){!In||Kc!=="approach"||(Wa&&(clearTimeout(Wa),Wa=null),In.classList.remove("show"),Kc=null)}function R3(n,e){In&&(In.innerHTML=e?`${Ee("hud.airportUnlockTitle")}<span class="reward">${Ee("hud.airportUnlockBody",{name:n})}</span>`:Ee("hud.airportUnlocked",{name:n}),In.classList.add("compact"),$f("unlock"))}function C3(){!Qa||Eo||(Qa.textContent=Ee("hud.wrongApproach"),Qa.classList.add("show"),Eo=!0,Hh())}function Qg(){!Qa||!Eo||(Qa.classList.remove("show"),Eo=!1)}function L3(n){mi&&(Zc||Eo||n!==Hr&&(mi.innerHTML=`<span class="poi-name">${n}</span>`,mi.classList.add("show"),Hr=n))}function Hh(){mi&&(Zc||Hr!==null&&(mi.classList.remove("show"),Hr=null))}function P3(){const n=Hf()==="gyro"?"hud.hintPrelaunchGyro":"hud.hintPrelaunch",e=I.flightState===He.INTRO||I.flightState===He.CRASHING?"":I.flightState===He.PRELAUNCH?Ee(n):I.flightState===He.TAKEOFF_ROLL?Ee("hud.hintTakeoff"):Ee("hud.hintNormal");e!==Bh&&(qg.textContent=e,Bh=e);const t=I.flightState===He.PRELAUNCH;t!==Zg&&(qg.classList.toggle("hint-pinned",t),Zg=t),N3(),D3(),k3(),I3()}function I3(){if(!Uu&&!Fu&&!zu)return;const n=Math.round(I.flightPunkte|0),e=Math.round(J.bestFlightPunkte|0),t=I.sessionLandings|0,i=J.bestSessionLandings|0,a=`${n}|${e}|${t}|${i}`;a!==zh&&(zh=a,Uu&&(Uu.textContent=$g(n)),Fu&&(Fu.textContent=$g(e)),zu&&(zu.textContent=t.toString()),jg&&(jg.textContent=i.toString()))}function N3(){if(Ou&&(Ou.style.width=(I.boostFuelGrey*100).toFixed(1)+"%",Ou.style.opacity=I.greyActive?"1":"0.7"),!zl)return;const n=is(),e=yt.oneShot.tiers[n]||yt.oneShot.tiers[0];if(n!==Yg){zl.hidden=n===0;const a="#"+(e.color|0).toString(16).padStart(6,"0");zl.style.setProperty("--boost-fill",a),Yg=n}if(n===0)return;const i=((1-Math.max(0,Math.min(1,I.boostFuelOneshot)))*100).toFixed(1)+"%";zl.style.setProperty("--drain-pct",i)}function D3(){Xg&&J.testMode!==Kg&&(Xg.classList.toggle("visible",!!J.testMode),Kg=J.testMode)}function k3(){const n=ox(),e=jf(fe.position),t=n||!e,i={peak:0,city:0,landscape:0,beach:0},a={peak:0,city:0,landscape:0,beach:0};if(t)for(const r of Object.keys(Fd))for(const l of Fd[r])i[l.type]++,J.exploredPOIs[l.id]&&a[l.type]++;else for(const r of Fd[e.id]||[])i[r.type]++,J.exploredPOIs[r.id]&&a[r.type]++;const o=`${t?"arch":e.id}|${a.peak}/${i.peak}|${a.city}/${i.city}|${a.landscape}/${i.landscape}|${a.beach}/${i.beach}`;if(o!==Fh){Fh=o;for(const r of["peak","city","landscape","beach"]){const l=w3[r];if(!l)continue;const c=a[r],d=i[r];d>0&&c>=d?l.innerHTML='<span class="material-symbols-outlined tp-gofios-check">check</span>':l.textContent=`${c} / ${d}`}}}const kn=new N(0,0,-1),Hl=new N,e0=new N,Nt=new N,jt=new N,hi=new N,t0=new N,$o=new N(0,0,-1),Hu=new N;let Gu=!1;function lx(){switch(I.flightState){case He.PRELAUNCH:case He.LANDED:return 0;case He.TAKEOFF_ROLL:case He.LANDING_ROLL:return Hi.clamp(I.speed/Ha.takeoffSpeed,0,1);default:return 1}}function br(n,e,t){return n+(e-n)*t}let Vu=0;function Yo(n,e){return 1-Math.exp(-e/Math.max(n,1e-4))}function n0(n){const e=1-n;return 1-e*e*e}function O3(n){return jt.set(0,0,-1).applyQuaternion(fe.quaternion),Nt.set(jt.x,0,jt.z),Nt.lengthSq()<1e-4&&Nt.set(0,0,-1),Nt.normalize(),hi.set(0,Kt.height,0),n.copy(fe.position).addScaledVector(Nt,-6.5).add(hi)}function U3(n){if(I.flightState===He.INTRO&&I.introStartCamPos){const d=n0(Math.min(1,I.introT));O3(t0),Xt.position.lerpVectors(I.introStartCamPos,t0,d),Xt.up.set(0,1,0),Xt.lookAt(fe.position);return}if(I.flightState!==He.CRASHING&&(Gu=!1),I.flightState===He.LANDED){jt.set(0,0,-1).applyQuaternion(fe.quaternion),kn.copy(jt),Nt.set(jt.x,0,jt.z),Nt.lengthSq()<1e-4&&Nt.set(0,0,-1),Nt.normalize(),hi.set(0,Kt.runwayHeight,0),Xt.position.copy(fe.position).addScaledVector(Nt,-3).add(hi),Xt.up.set(0,1,0),Xt.lookAt(fe.position);return}if(I.flightState===He.CRASHING){Gu||(jt.set(0,0,-1).applyQuaternion(fe.quaternion),$o.set(jt.x,0,jt.z),$o.lengthSq()<1e-4&&$o.set(0,0,-1),$o.normalize(),Hu.copy(fe.position),Gu=!0);const d=n0(Math.min(1,I.crashT)),u=Kt.distance+Zl.camPullback*d;hi.set(0,Kt.height+Zl.camRise*d,0),Hl.copy(Hu).addScaledVector($o,-u).add(hi),Xt.position.lerp(Hl,Yo(Zl.camTau,n)),Xt.up.set(0,1,0),Xt.lookAt(Hu);return}jt.set(0,0,-1).applyQuaternion(fe.quaternion);const e=Yo(Kt.yawTau,n),t=Yo(Kt.pitchTau,n);kn.x+=(jt.x-kn.x)*e,kn.z+=(jt.z-kn.z)*e,kn.y+=(jt.y-kn.y)*t,kn.normalize(),Nt.set(kn.x,0,kn.z),Nt.lengthSq()<1e-4&&Nt.set(0,0,-1),Nt.normalize();const i=I.greyActive||I.oneShotActive?1:0,a=Yo(yt.camPushbackTau,n);Vu+=(i-Vu)*a;const s=lx(),o=br(Kt.runwayDistance,Kt.distance,s),r=br(Kt.runwayHeight,Kt.height,s),l=br(Kt.runwayLookAhead,Kt.lookAhead,s);hi.set(0,r,0),Hl.copy(fe.position).addScaledVector(Nt,-(o+yt.camPushback*Vu)).add(hi);const c=Yo(Kt.posTau,n);Xt.position.lerp(Hl,c),e0.copy(fe.position).addScaledVector(kn,l),Xt.up.set(0,1,0),Xt.lookAt(e0)}function Td(){jt.set(0,0,-1).applyQuaternion(fe.quaternion),kn.copy(jt),Nt.set(jt.x,0,jt.z),Nt.lengthSq()<1e-4&&Nt.set(0,0,-1),Nt.normalize();const n=lx(),e=br(Kt.runwayDistance,Kt.distance,n),t=br(Kt.runwayHeight,Kt.height,n);hi.set(0,t,0),Xt.position.copy(fe.position).addScaledVector(Nt,-e).add(hi)}const Yf={value:0},Ko=fe.getObjectByName("paperBody");if(Ko){const n=Ko.geometry,e=n.getAttribute("position"),t=e.count/3,i=new Float32Array(e.count*3),a=new Float32Array(e.count*3);for(let s=0;s<t;s++){const o=s*3,r=o+1,l=o+2,c=(e.getX(o)+e.getX(r)+e.getX(l))/3,d=(e.getY(o)+e.getY(r)+e.getY(l))/3,u=(e.getZ(o)+e.getZ(r)+e.getZ(l))/3,f=Math.random(),m=Math.random(),y=Math.random();for(const v of[o,r,l])i[v*3]=c,i[v*3+1]=d,i[v*3+2]=u,a[v*3]=f,a[v*3+1]=m,a[v*3+2]=y}n.setAttribute("aCentroid",new Dt(i,3)),n.setAttribute("aRand",new Dt(a,3)),Ko.material.onBeforeCompile=s=>{s.uniforms.uShatter=Yf,s.vertexShader=`attribute vec3 aCentroid;
attribute vec3 aRand;
uniform float uShatter;
`+s.vertexShader.replace("#include <begin_vertex>",`vec3 transformed = vec3( position );
         if ( uShatter > 0.0001 ) {
           float s = uShatter;
           vec3 c = aCentroid;
           // outward drift direction, biased slightly upward + jittered per tri
           vec3 dir = normalize( c + vec3( 0.0, 0.15, 0.0 ) + ( aRand - 0.5 ) * 0.6 );
           // tumble each triangle around its own centroid (Rodrigues rotation)
           vec3 axis = normalize( aRand * 2.0 - 1.0 );
           float ang = s * ( 4.0 + aRand.x * 8.0 );
           vec3 rel  = position - c;
           vec3 rot  = rel * cos( ang ) + cross( axis, rel ) * sin( ang )
                       + axis * dot( axis, rel ) * ( 1.0 - cos( ang ) );
           vec3 disp = dir * ( s * ( 2.0 + aRand.y * 3.0 ) );
           disp.y -= s * s * 5.0;   // gravity — accelerates downward
           transformed = c + rot + disp;
         }`)},Ko.material.customProgramCacheKey=()=>"paperShatter",Ko.material.needsUpdate=!0}let xa=null;function F3(){xa=[],fe.traverse(n=>{if(!n.material)return;const e=Array.isArray(n.material)?n.material:[n.material];for(const t of e)t.userData.crashBaseOpacity=t.opacity,xa.push(t)})}function z3(){xa||F3();for(const n of xa)n.transparent=!0}function B3(n){if(Yf.value=n,!xa)return;const e=Math.max(0,1-n*1.15);for(const t of xa)t.opacity=t.userData.crashBaseOpacity*e}function H3(){if(Yf.value=0,!!xa)for(const n of xa)n.opacity=n.userData.crashBaseOpacity}let uc=null;const ci=new N,i0=new N,a0=new N,s0=new Lt,o0=new qn,Gl=new N,r0=new N,G3=new N;function Rd(n,e=G3){return e.set(0,0,-1).applyEuler(new qn(0,n,0))}function Kf(n){const e=Rd(n.activeHeading);fe.position.set(n.x-e.x*n.length*.45,n.elevation+.22,n.z-e.z*n.length*.45),fe.quaternion.setFromEuler(new qn(0,n.activeHeading,0)),I.speed=0,I.flightState=He.PRELAUNCH,I.currentRunway=n,I.refillStartGrey=I.boostFuelGrey,I.refillStartOneshot=I.boostFuelOneshot,I.refillT=0,I.greyActive=!1,I.oneShotActive=!1,sf(),fd(),Ed(),Td()}const cx=document.getElementById("crash");let Gh=null;function V3(n){Gh=n}function W3(){I.flightPunkte=0}function dx(){I.flightPunkte>J.bestFlightPunkte&&(J.bestFlightPunkte=I.flightPunkte),I.flightPunkte=0}function hc(){if(I.tutorial){Gh&&Gh("crash");return}I.flightState===He.CRASHING||I.flightState===He.CRASHED||(I.speed=0,I.flightState=He.CRASHING,I.crashT=0,I.sessionLandings=0,dx(),Ht(),z3())}function q3(n){I.crashT+=n/Zl.duration,B3(Math.min(1,I.crashT)),I.crashT>=1&&(I.alive=!1,I.flightState=He.CRASHED,cx.classList.add("visible"))}let l0=!1;function Cd(n={}){n.runwayId&&n.runwayId!==J.checkpointRunwayId&&(J.checkpointRunwayId=n.runwayId,Ht());const e=J.checkpointRunwayId??sa,t=ot.find(a=>a.id===e)??ot[0],i=n.forceIntro||!J.introPlayed;if(Qx(),iP(),sP(),cP(),H3(),rx(),cx.classList.remove("visible"),Kf(t),l0||(av(t),l0=!0),i){const a=new N(0,0,-1).applyQuaternion(fe.quaternion),s=new N(a.x,0,a.z).normalize();I.introStartCamPos=fe.position.clone().addScaledVector(s,-4e3).add(new N(0,z0.startHeight,0)),I.introT=0,I.flightState=He.INTRO,Et.fog&&(uc=Et.fog,Et.fog=null)}}function X3(){const n=gs();return n.pitch!==0||n.roll!==0||n.brake}function ux(n){if(I.refillT>=1)return;I.refillT=Math.min(1,I.refillT+n/yt.refillDuration);const e=I.refillT;I.boostFuelGrey=I.refillStartGrey+(1-I.refillStartGrey)*e,I.boostFuelOneshot=I.refillStartOneshot+(1-I.refillStartOneshot)*e}function j3(){I.refillT=1,I.boostFuelGrey=1,I.boostFuelOneshot=1}function $3(n){const e=gs();p_()&&is()>0&&(J.testMode&&I.oneShotActive?I.oneShotActive=!1:!I.oneShotActive&&I.boostFuelOneshot>0&&(I.oneShotActive=!0)),I.greyActive=e.boost&&I.boostFuelGrey>0;let t=0,i=0;if(I.oneShotActive){const a=yt.oneShot.tiers[is()]||yt.oneShot.tiers[0];I.boostFuelOneshot-=n/Math.max(a.tankDuration,1e-4),I.boostFuelOneshot<=0&&(I.boostFuelOneshot=J.testMode?1:0,I.oneShotActive=J.testMode),I.oneShotActive&&(t+=a.speedBonus,i+=a.accelRate)}if(I.greyActive){const a=yt.grey;I.boostFuelGrey-=n/Math.max(a.tankDuration,1e-4),I.boostFuelGrey<=0?(I.boostFuelGrey=0,I.greyActive=!1):(t+=a.speedBonus,i+=a.accelRate)}return!I.greyActive&&!I.oneShotActive&&I.boostFuelGrey<1&&(I.boostFuelGrey=Math.min(1,I.boostFuelGrey+n/yt.grey.rechargeTime)),{speedBonus:t,accelBonus:i}}function Y3(n){X3()?I.introT=1:I.introT+=n/z0.duration,I.introT>=1&&(I.introT=0,I.introStartCamPos=null,I.flightState=He.PRELAUNCH,J.introPlayed=!0,fd(),Ed(),uc&&(Et.fog=uc,uc=null),Td())}function K3(n){ux(n);const e=m_();(Hf()!=="gyro"&&gs().pitch>0||e)&&(I.flightState=He.TAKEOFF_ROLL,I.takeoffTime=0,W3())}function Z3(n){const e=I.currentRunway;I.takeoffTime+=n,ux(n);const t=Ha.takeoffSpeed,i=Ha.linearShare,a=1-i,o=e.length*Ha.liftoffFraction/(t*(i/2+a/3)),r=Math.min(1,I.takeoffTime/o);I.speed=t*(i*r+a*r*r);const l=Rd(e.activeHeading);fe.position.x+=l.x*I.speed*n,fe.position.z+=l.z*I.speed*n,fe.position.y=e.elevation+.22,fe.quaternion.setFromEuler(new qn(0,e.activeHeading,0)),r>=1&&(fe.rotateX(Ha.pitchUpAtLiftoff),I.flightState=He.FLYING,I.currentRunway=null,I.postLiftCooldown=1.2,j3())}const c0=200,J3=250;function Q3(n){for(const e of ot){if(J.discoveredRunways[e.id])continue;const t=n.x-e.x,i=n.z-e.z;if(t*t+i*i>c0*c0)continue;const a=n.y-e.elevation;a<-50||a>J3||(J.discoveredRunways[e.id]=!0,Ht())}}function eI(n){const e=$3(n),t=gs(),i=t.pitch,a=t.roll,s=Math.max(0,It.stallSpeed-I.speed)/It.stallSpeed,o=1-s*(1-It.stallAuthority),r=i*o;ci.set(0,0,-1).applyQuaternion(fe.quaternion);const l=Math.asin(Hi.clamp(ci.y,-1,1));let c=r*It.pitchRate*n;c>0&&(c=Math.min(c,Math.max(0,It.maxClimbPitch-l))),fe.rotateX(c),fe.rotateZ(-a*It.rollRate*n),ci.set(0,0,-1).applyQuaternion(fe.quaternion),i0.set(1,0,0).applyQuaternion(fe.quaternion),a0.set(0,1,0).applyQuaternion(fe.quaternion);const d=Math.atan2(i0.y,a0.y);fe.rotateOnWorldAxis(mh,Math.sin(d)*It.turnFactor*n),s>.01&&(Gl.set(ci.x,0,ci.z),Gl.lengthSq()>1e-4&&(Gl.normalize(),r0.crossVectors(Gl,mh).normalize(),fe.rotateOnWorldAxis(r0,-s*It.stallPitchRate*n))),ci.set(0,0,-1).applyQuaternion(fe.quaternion);const u=ci.y;I.speed-=u*It.speedFromPitch*n,I.speed-=It.drag*n,I.brakeAmount>.01&&(I.speed-=I.brakeAmount*mc.force*n);const f=cv(fe.position.x,fe.position.y,fe.position.z);I.speed+=f*.13*n,I.inThermal=f>.5;const m=It.maxSpeed+e.speedBonus;e.accelBonus>0&&I.speed<m&&(I.speed=Math.min(m,I.speed+e.accelBonus*n)),I.speed=Math.max(It.minSpeed,Math.min(m,I.speed));const y=fe.position.x,v=fe.position.z;fe.position.addScaledVector(ci,I.speed*n);const p=It.sinkRate*(1+s*It.stallSink);if(fe.position.y-=p*n,fe.position.y+=f*n,!I.tutorial){const b=fe.position.x-y,R=fe.position.z-v;ud(Math.sqrt(b*b+R*R))}const h=Te.size/2-30;if(fe.position.x>h&&(fe.position.x=h),fe.position.x<-h&&(fe.position.x=-h),fe.position.z>h&&(fe.position.z=h),fe.position.z<-h&&(fe.position.z=-h),I.postLiftCooldown>0){I.postLiftCooldown-=n;return}if(!I.tutorial){Q3(fe.position);const b=Math.atan2(-ci.x,-ci.z),R=MT(fe.position,b);if(R){I.flightState=He.LANDING_ROLL,I.currentRunway=R,fe.position.y=R.elevation+.22;return}}const _=wT(fe.position);if(_&&fe.position.y-_.elevation<ns.rollingHeight){hc();return}const g=Ut(fe.position.x,fe.position.z);(fe.position.y<Math.max(g+.4,Te.waterLevel+.4)||u3(fe.position.x,fe.position.y,fe.position.z))&&hc()}function tI(n){const e=I.currentRunway;I.speed=Math.max(0,I.speed-ns.brakeForce*n);const t=Rd(e.activeHeading),i=fe.position.x,a=fe.position.z;fe.position.x+=t.x*I.speed*n,fe.position.z+=t.z*I.speed*n,fe.position.y=e.elevation+.22;const s=fe.position.x-i,o=fe.position.z-a;ud(Math.sqrt(s*s+o*o)),o0.set(0,e.activeHeading,0),s0.setFromEuler(o0),fe.quaternion.slerp(s0,.22);const r=fe.position.x-e.x,l=fe.position.z-e.z,c=r*Math.sin(e.heading)+l*Math.cos(e.heading);if(Math.abs(c)>e.length*.5){hc();return}I.speed<ns.landingSpeed&&nI(e)}function nI(n){I.speed=0,I.flightState=He.LANDED,I.landedToastTimer=B0.toastDuration,I.cinematicT=0,I.cinematicFromPos=fe.position.clone(),I.cinematicFromQuat=fe.quaternion.clone();const e=n.activeHeading,t=Rd(e,new N);I.cinematicToPos=new N(n.x-t.x*n.length*.45,n.elevation+.22,n.z-t.z*n.length*.45),I.cinematicToQuat=new Lt().setFromEuler(new qn(0,e,0)),J.landings+=1,ud(ns.landingBonus),J.checkpointRunwayId=n.id,av(n);const i=!J.landedRunways[n.id],a=Object.keys(J.landedRunways).some(s=>s!==sa&&J.landedRunways[s]);J.landedRunways[n.id]=!0,J.discoveredRunways[n.id]=!0,I.sessionLandings+=1,I.sessionLandings>J.bestSessionLandings&&(J.bestSessionLandings=I.sessionLandings),dx(),Ht(),E3(n),i&&n.id!==sa&&(I.pendingAirportUnlock={id:n.id,full:!a})}function iI(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function aI(n){if(I.landedToastTimer>0){I.landedToastTimer-=n;return}if(I.cinematicT+=n/B0.tweenDuration,I.cinematicT>=1){fe.position.copy(I.cinematicToPos),fe.quaternion.copy(I.cinematicToQuat),I.cinematicT=0,I.cinematicFromPos=null,I.cinematicToPos=null,I.cinematicFromQuat=null,I.cinematicToQuat=null,I.flightState=He.PRELAUNCH,sf(),fd(),Ed(),I.refillStartGrey=I.boostFuelGrey,I.refillStartOneshot=I.boostFuelOneshot,I.refillT=0,Td(),rx(),I.pendingAirportUnlock&&(R3(I.pendingAirportUnlock.id,I.pendingAirportUnlock.full),I.pendingAirportUnlock=null);return}const e=iI(I.cinematicT);fe.position.lerpVectors(I.cinematicFromPos,I.cinematicToPos,e),fe.quaternion.copy(I.cinematicFromQuat)}function sI(n){if(I.alive&&!I.paused)switch(I.flightState){case He.INTRO:return Y3(n);case He.PRELAUNCH:return K3(n);case He.TAKEOFF_ROLL:return Z3(n);case He.FLYING:return eI(n);case He.LANDING_ROLL:return tI(n);case He.LANDED:return aI(n);case He.CRASHING:return q3(n);case He.CRASHED:return}}const oI=Ot;class Jc extends wf{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,i,a){const s=this,o=new qA(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(r){try{t(s.parse(r))}catch(l){a?a(l):console.error(l),s.manager.itemError(e)}},i,a)}parse(e){const t=this;function i(k,D){if(k.nodeType!==1)return;const C=b(k);let T=!1,ee=null;switch(k.nodeName){case"svg":D=y(k,D);break;case"style":s(k);break;case"g":D=y(k,D);break;case"path":D=y(k,D),k.hasAttribute("d")&&(ee=a(k));break;case"rect":D=y(k,D),ee=l(k);break;case"polygon":D=y(k,D),ee=c(k);break;case"polyline":D=y(k,D),ee=d(k);break;case"circle":D=y(k,D),ee=u(k);break;case"ellipse":D=y(k,D),ee=f(k);break;case"line":D=y(k,D),ee=m(k);break;case"defs":T=!0;break;case"use":D=y(k,D);const he=(k.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),P=k.viewportElement.getElementById(he);P?i(P,D):console.warn("SVGLoader: 'use node' references non-existent node id: "+he);break}ee&&(D.fill!==void 0&&D.fill!=="none"&&ee.color.setStyle(D.fill,oI),E(ee,ue),W.push(ee),ee.userData={node:k,style:D});const ce=k.childNodes;for(let X=0;X<ce.length;X++){const he=ce[X];T&&he.nodeName!=="style"&&he.nodeName!=="defs"||i(he,D)}C&&(O.pop(),O.length>0?ue.copy(O[O.length-1]):ue.identity())}function a(k){const D=new Ra,C=new me,T=new me,ee=new me;let ce=!0,X=!1;const he=k.getAttribute("d");if(he===""||he==="none")return null;const P=he.match(/[a-df-z][^a-df-z]*/ig);for(let ie=0,z=P.length;ie<z;ie++){const Y=P[ie],j=Y.charAt(0),pe=Y.slice(1).trim();ce===!0&&(X=!0,ce=!1);let F;switch(j){case"M":F=p(pe);for(let x=0,S=F.length;x<S;x+=2)C.x=F[x+0],C.y=F[x+1],T.x=C.x,T.y=C.y,x===0?D.moveTo(C.x,C.y):D.lineTo(C.x,C.y),x===0&&ee.copy(C);break;case"H":F=p(pe);for(let x=0,S=F.length;x<S;x++)C.x=F[x],T.x=C.x,T.y=C.y,D.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"V":F=p(pe);for(let x=0,S=F.length;x<S;x++)C.y=F[x],T.x=C.x,T.y=C.y,D.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"L":F=p(pe);for(let x=0,S=F.length;x<S;x+=2)C.x=F[x+0],C.y=F[x+1],T.x=C.x,T.y=C.y,D.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"C":F=p(pe);for(let x=0,S=F.length;x<S;x+=6)D.bezierCurveTo(F[x+0],F[x+1],F[x+2],F[x+3],F[x+4],F[x+5]),T.x=F[x+2],T.y=F[x+3],C.x=F[x+4],C.y=F[x+5],x===0&&X===!0&&ee.copy(C);break;case"S":F=p(pe);for(let x=0,S=F.length;x<S;x+=4)D.bezierCurveTo(v(C.x,T.x),v(C.y,T.y),F[x+0],F[x+1],F[x+2],F[x+3]),T.x=F[x+0],T.y=F[x+1],C.x=F[x+2],C.y=F[x+3],x===0&&X===!0&&ee.copy(C);break;case"Q":F=p(pe);for(let x=0,S=F.length;x<S;x+=4)D.quadraticCurveTo(F[x+0],F[x+1],F[x+2],F[x+3]),T.x=F[x+0],T.y=F[x+1],C.x=F[x+2],C.y=F[x+3],x===0&&X===!0&&ee.copy(C);break;case"T":F=p(pe);for(let x=0,S=F.length;x<S;x+=2){const G=v(C.x,T.x),ge=v(C.y,T.y);D.quadraticCurveTo(G,ge,F[x+0],F[x+1]),T.x=G,T.y=ge,C.x=F[x+0],C.y=F[x+1],x===0&&X===!0&&ee.copy(C)}break;case"A":F=p(pe,[3,4],7);for(let x=0,S=F.length;x<S;x+=7){if(F[x+5]==C.x&&F[x+6]==C.y)continue;const G=C.clone();C.x=F[x+5],C.y=F[x+6],T.x=C.x,T.y=C.y,o(D,F[x],F[x+1],F[x+2],F[x+3],F[x+4],G,C),x===0&&X===!0&&ee.copy(C)}break;case"m":F=p(pe);for(let x=0,S=F.length;x<S;x+=2)C.x+=F[x+0],C.y+=F[x+1],T.x=C.x,T.y=C.y,x===0?D.moveTo(C.x,C.y):D.lineTo(C.x,C.y),x===0&&ee.copy(C);break;case"h":F=p(pe);for(let x=0,S=F.length;x<S;x++)C.x+=F[x],T.x=C.x,T.y=C.y,D.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"v":F=p(pe);for(let x=0,S=F.length;x<S;x++)C.y+=F[x],T.x=C.x,T.y=C.y,D.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"l":F=p(pe);for(let x=0,S=F.length;x<S;x+=2)C.x+=F[x+0],C.y+=F[x+1],T.x=C.x,T.y=C.y,D.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"c":F=p(pe);for(let x=0,S=F.length;x<S;x+=6)D.bezierCurveTo(C.x+F[x+0],C.y+F[x+1],C.x+F[x+2],C.y+F[x+3],C.x+F[x+4],C.y+F[x+5]),T.x=C.x+F[x+2],T.y=C.y+F[x+3],C.x+=F[x+4],C.y+=F[x+5],x===0&&X===!0&&ee.copy(C);break;case"s":F=p(pe);for(let x=0,S=F.length;x<S;x+=4)D.bezierCurveTo(v(C.x,T.x),v(C.y,T.y),C.x+F[x+0],C.y+F[x+1],C.x+F[x+2],C.y+F[x+3]),T.x=C.x+F[x+0],T.y=C.y+F[x+1],C.x+=F[x+2],C.y+=F[x+3],x===0&&X===!0&&ee.copy(C);break;case"q":F=p(pe);for(let x=0,S=F.length;x<S;x+=4)D.quadraticCurveTo(C.x+F[x+0],C.y+F[x+1],C.x+F[x+2],C.y+F[x+3]),T.x=C.x+F[x+0],T.y=C.y+F[x+1],C.x+=F[x+2],C.y+=F[x+3],x===0&&X===!0&&ee.copy(C);break;case"t":F=p(pe);for(let x=0,S=F.length;x<S;x+=2){const G=v(C.x,T.x),ge=v(C.y,T.y);D.quadraticCurveTo(G,ge,C.x+F[x+0],C.y+F[x+1]),T.x=G,T.y=ge,C.x=C.x+F[x+0],C.y=C.y+F[x+1],x===0&&X===!0&&ee.copy(C)}break;case"a":F=p(pe,[3,4],7);for(let x=0,S=F.length;x<S;x+=7){if(F[x+5]==0&&F[x+6]==0)continue;const G=C.clone();C.x+=F[x+5],C.y+=F[x+6],T.x=C.x,T.y=C.y,o(D,F[x],F[x+1],F[x+2],F[x+3],F[x+4],G,C),x===0&&X===!0&&ee.copy(C)}break;case"Z":case"z":D.currentPath.autoClose=!0,D.currentPath.curves.length>0&&(C.copy(ee),D.currentPath.currentPoint.copy(C),ce=!0);break;default:console.warn(Y)}X=!1}return D}function s(k){if(!(!k.sheet||!k.sheet.cssRules||!k.sheet.cssRules.length))for(let D=0;D<k.sheet.cssRules.length;D++){const C=k.sheet.cssRules[D];if(C.type!==1)continue;const T=C.selectorText.split(/,/gm).filter(Boolean).map(ee=>ee.trim());for(let ee=0;ee<T.length;ee++){const ce=Object.fromEntries(Object.entries(C.style).filter(([,X])=>X!==""));oe[T[ee]]=Object.assign(oe[T[ee]]||{},ce)}}}function o(k,D,C,T,ee,ce,X,he){if(D==0||C==0){k.lineTo(he.x,he.y);return}T=T*Math.PI/180,D=Math.abs(D),C=Math.abs(C);const P=(X.x-he.x)/2,ie=(X.y-he.y)/2,z=Math.cos(T)*P+Math.sin(T)*ie,Y=-Math.sin(T)*P+Math.cos(T)*ie;let j=D*D,pe=C*C;const F=z*z,x=Y*Y,S=F/j+x/pe;if(S>1){const ve=Math.sqrt(S);D=ve*D,C=ve*C,j=D*D,pe=C*C}const G=j*x+pe*F,ge=(j*pe-G)/G;let ye=Math.sqrt(Math.max(0,ge));ee===ce&&(ye=-ye);const de=ye*D*Y/C,Re=-ye*C*z/D,_e=Math.cos(T)*de-Math.sin(T)*Re+(X.x+he.x)/2,Ce=Math.sin(T)*de+Math.cos(T)*Re+(X.y+he.y)/2,Ne=r(1,0,(z-de)/D,(Y-Re)/C),Fe=r((z-de)/D,(Y-Re)/C,(-z-de)/D,(-Y-Re)/C)%(Math.PI*2);k.currentPath.absellipse(_e,Ce,D,C,Ne,Ne+Fe,ce===0,T)}function r(k,D,C,T){const ee=k*C+D*T,ce=Math.sqrt(k*k+D*D)*Math.sqrt(C*C+T*T);let X=Math.acos(Math.max(-1,Math.min(1,ee/ce)));return k*T-D*C<0&&(X=-X),X}function l(k){const D=g(k.getAttribute("x")||0),C=g(k.getAttribute("y")||0),T=g(k.getAttribute("rx")||k.getAttribute("ry")||0),ee=g(k.getAttribute("ry")||k.getAttribute("rx")||0),ce=g(k.getAttribute("width")),X=g(k.getAttribute("height")),he=1-.551915024494,P=new Ra;return P.moveTo(D+T,C),P.lineTo(D+ce-T,C),(T!==0||ee!==0)&&P.bezierCurveTo(D+ce-T*he,C,D+ce,C+ee*he,D+ce,C+ee),P.lineTo(D+ce,C+X-ee),(T!==0||ee!==0)&&P.bezierCurveTo(D+ce,C+X-ee*he,D+ce-T*he,C+X,D+ce-T,C+X),P.lineTo(D+T,C+X),(T!==0||ee!==0)&&P.bezierCurveTo(D+T*he,C+X,D,C+X-ee*he,D,C+X-ee),P.lineTo(D,C+ee),(T!==0||ee!==0)&&P.bezierCurveTo(D,C+ee*he,D+T*he,C,D+T,C),P}function c(k){function D(ce,X,he){const P=g(X),ie=g(he);ee===0?T.moveTo(P,ie):T.lineTo(P,ie),ee++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,T=new Ra;let ee=0;return k.getAttribute("points").replace(C,D),T.currentPath.autoClose=!0,T}function d(k){function D(ce,X,he){const P=g(X),ie=g(he);ee===0?T.moveTo(P,ie):T.lineTo(P,ie),ee++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,T=new Ra;let ee=0;return k.getAttribute("points").replace(C,D),T.currentPath.autoClose=!1,T}function u(k){const D=g(k.getAttribute("cx")||0),C=g(k.getAttribute("cy")||0),T=g(k.getAttribute("r")||0),ee=new no;ee.absarc(D,C,T,0,Math.PI*2);const ce=new Ra;return ce.subPaths.push(ee),ce}function f(k){const D=g(k.getAttribute("cx")||0),C=g(k.getAttribute("cy")||0),T=g(k.getAttribute("rx")||0),ee=g(k.getAttribute("ry")||0),ce=new no;ce.absellipse(D,C,T,ee,0,Math.PI*2);const X=new Ra;return X.subPaths.push(ce),X}function m(k){const D=g(k.getAttribute("x1")||0),C=g(k.getAttribute("y1")||0),T=g(k.getAttribute("x2")||0),ee=g(k.getAttribute("y2")||0),ce=new Ra;return ce.moveTo(D,C),ce.lineTo(T,ee),ce.currentPath.autoClose=!1,ce}function y(k,D){D=Object.assign({},D);let C={};if(k.hasAttribute("class")){const X=k.getAttribute("class").split(/\s/).filter(Boolean).map(he=>he.trim());for(let he=0;he<X.length;he++)C=Object.assign(C,oe["."+X[he]])}k.hasAttribute("id")&&(C=Object.assign(C,oe["#"+k.getAttribute("id")]));function T(X,he,P){P===void 0&&(P=function(z){return z.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),z}),k.hasAttribute(X)&&(D[he]=P(k.getAttribute(X))),C[X]&&(D[he]=P(C[X])),k.style&&k.style[X]!==""&&(D[he]=P(k.style[X]))}function ee(X){return Math.max(0,Math.min(1,g(X)))}function ce(X){return Math.max(0,g(X))}return T("fill","fill"),T("fill-opacity","fillOpacity",ee),T("fill-rule","fillRule"),T("opacity","opacity",ee),T("stroke","stroke"),T("stroke-opacity","strokeOpacity",ee),T("stroke-width","strokeWidth",ce),T("stroke-linejoin","strokeLineJoin"),T("stroke-linecap","strokeLineCap"),T("stroke-miterlimit","strokeMiterLimit",ce),T("visibility","visibility"),D}function v(k,D){return k-(D-k)}function p(k,D,C){if(typeof k!="string")throw new TypeError("Invalid input: "+typeof k);const T={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},ee=0,ce=1,X=2,he=3;let P=ee,ie=!0,z="",Y="";const j=[];function pe(G,ge,ye){const de=new SyntaxError('Unexpected character "'+G+'" at index '+ge+".");throw de.partial=ye,de}function F(){z!==""&&(Y===""?j.push(Number(z)):j.push(Number(z)*Math.pow(10,Number(Y)))),z="",Y=""}let x;const S=k.length;for(let G=0;G<S;G++){if(x=k[G],Array.isArray(D)&&D.includes(j.length%C)&&T.FLAGS.test(x)){P=ce,z=x,F();continue}if(P===ee){if(T.WHITESPACE.test(x))continue;if(T.DIGIT.test(x)||T.SIGN.test(x)){P=ce,z=x;continue}if(T.POINT.test(x)){P=X,z=x;continue}T.COMMA.test(x)&&(ie&&pe(x,G,j),ie=!0)}if(P===ce){if(T.DIGIT.test(x)){z+=x;continue}if(T.POINT.test(x)){z+=x,P=X;continue}if(T.EXP.test(x)){P=he;continue}T.SIGN.test(x)&&z.length===1&&T.SIGN.test(z[0])&&pe(x,G,j)}if(P===X){if(T.DIGIT.test(x)){z+=x;continue}if(T.EXP.test(x)){P=he;continue}T.POINT.test(x)&&z[z.length-1]==="."&&pe(x,G,j)}if(P===he){if(T.DIGIT.test(x)){Y+=x;continue}if(T.SIGN.test(x)){if(Y===""){Y+=x;continue}Y.length===1&&T.SIGN.test(Y)&&pe(x,G,j)}}T.WHITESPACE.test(x)?(F(),P=ee,ie=!1):T.COMMA.test(x)?(F(),P=ee,ie=!0):T.SIGN.test(x)?(F(),P=ce,z=x):T.POINT.test(x)?(F(),P=X,z=x):pe(x,G,j)}return F(),j}const h=["mm","cm","in","pt","pc","px"],_={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function g(k){let D="px";if(typeof k=="string"||k instanceof String)for(let T=0,ee=h.length;T<ee;T++){const ce=h[T];if(k.endsWith(ce)){D=ce,k=k.substring(0,k.length-ce.length);break}}let C;return D==="px"&&t.defaultUnit!=="px"?C=_.in[t.defaultUnit]/t.defaultDPI:(C=_[D][t.defaultUnit],C<0&&(C=_[D].in*t.defaultDPI)),C*parseFloat(k)}function b(k){if(!(k.hasAttribute("transform")||k.nodeName==="use"&&(k.hasAttribute("x")||k.hasAttribute("y"))))return null;const D=R(k);return O.length>0&&D.premultiply(O[O.length-1]),ue.copy(D),O.push(D),D}function R(k){const D=new Ge,C=q;if(k.nodeName==="use"&&(k.hasAttribute("x")||k.hasAttribute("y"))){const T=g(k.getAttribute("x")),ee=g(k.getAttribute("y"));D.translate(T,ee)}if(k.hasAttribute("transform")){const T=k.getAttribute("transform").split(")");for(let ee=T.length-1;ee>=0;ee--){const ce=T[ee].trim();if(ce==="")continue;const X=ce.indexOf("("),he=ce.length;if(X>0&&X<he){const P=ce.slice(0,X),ie=p(ce.slice(X+1));switch(C.identity(),P){case"translate":if(ie.length>=1){const z=ie[0];let Y=0;ie.length>=2&&(Y=ie[1]),C.translate(z,Y)}break;case"rotate":if(ie.length>=1){let z=0,Y=0,j=0;z=ie[0]*Math.PI/180,ie.length>=3&&(Y=ie[1],j=ie[2]),$.makeTranslation(-Y,-j),K.makeRotation(z),B.multiplyMatrices(K,$),$.makeTranslation(Y,j),C.multiplyMatrices($,B)}break;case"scale":if(ie.length>=1){const z=ie[0];let Y=z;ie.length>=2&&(Y=ie[1]),C.scale(z,Y)}break;case"skewX":ie.length===1&&C.set(1,Math.tan(ie[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":ie.length===1&&C.set(1,0,0,Math.tan(ie[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":ie.length===6&&C.set(ie[0],ie[2],ie[4],ie[1],ie[3],ie[5],0,0,1);break}}D.premultiply(C)}}return D}function E(k,D){function C(X){le.set(X.x,X.y,1).applyMatrix3(D),X.set(le.x,le.y)}function T(X){const he=X.xRadius,P=X.yRadius,ie=Math.cos(X.aRotation),z=Math.sin(X.aRotation),Y=new N(he*ie,he*z,0),j=new N(-P*z,P*ie,0),pe=Y.applyMatrix3(D),F=j.applyMatrix3(D),x=q.set(pe.x,F.x,0,pe.y,F.y,0,0,0,1),S=$.copy(x).invert(),ye=K.copy(S).transpose().multiply(S).elements,de=V(ye[0],ye[1],ye[4]),Re=Math.sqrt(de.rt1),_e=Math.sqrt(de.rt2);if(X.xRadius=1/Re,X.yRadius=1/_e,X.aRotation=Math.atan2(de.sn,de.cs),!((X.aEndAngle-X.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Ne=$.set(Re,0,0,0,_e,0,0,0,1),Fe=K.set(de.cs,de.sn,0,-de.sn,de.cs,0,0,0,1),ve=Ne.multiply(Fe).multiply(x),Qe=qe=>{const{x:ze,y:De}=new N(Math.cos(qe),Math.sin(qe),0).applyMatrix3(ve);return Math.atan2(De,ze)};X.aStartAngle=Qe(X.aStartAngle),X.aEndAngle=Qe(X.aEndAngle),A(D)&&(X.aClockwise=!X.aClockwise)}}function ee(X){const he=M(D),P=w(D);X.xRadius*=he,X.yRadius*=P;const ie=he>Number.EPSILON?Math.atan2(D.elements[1],D.elements[0]):Math.atan2(-D.elements[3],D.elements[4]);X.aRotation+=ie,A(D)&&(X.aStartAngle*=-1,X.aEndAngle*=-1,X.aClockwise=!X.aClockwise)}const ce=k.subPaths;for(let X=0,he=ce.length;X<he;X++){const ie=ce[X].curves;for(let z=0;z<ie.length;z++){const Y=ie[z];Y.isLineCurve?(C(Y.v1),C(Y.v2)):Y.isCubicBezierCurve?(C(Y.v0),C(Y.v1),C(Y.v2),C(Y.v3)):Y.isQuadraticBezierCurve?(C(Y.v0),C(Y.v1),C(Y.v2)):Y.isEllipseCurve&&(Q.set(Y.aX,Y.aY),C(Q),Y.aX=Q.x,Y.aY=Q.y,U(D)?T(Y):ee(Y))}}}function A(k){const D=k.elements;return D[0]*D[4]-D[1]*D[3]<0}function U(k){const D=k.elements,C=D[0]*D[3]+D[1]*D[4];if(C===0)return!1;const T=M(k),ee=w(k);return Math.abs(C/(T*ee))>Number.EPSILON}function M(k){const D=k.elements;return Math.sqrt(D[0]*D[0]+D[1]*D[1])}function w(k){const D=k.elements;return Math.sqrt(D[3]*D[3]+D[4]*D[4])}function V(k,D,C){let T,ee,ce,X,he;const P=k+C,ie=k-C,z=Math.sqrt(ie*ie+4*D*D);return P>0?(T=.5*(P+z),he=1/T,ee=k*he*C-D*he*D):P<0?ee=.5*(P-z):(T=.5*z,ee=-.5*z),ie>0?ce=ie+z:ce=ie-z,Math.abs(ce)>2*Math.abs(D)?(he=-2*D/ce,X=1/Math.sqrt(1+he*he),ce=he*X):Math.abs(D)===0?(ce=1,X=0):(he=-.5*ce/D,ce=1/Math.sqrt(1+he*he),X=he*ce),ie>0&&(he=ce,ce=-X,X=he),{rt1:T,rt2:ee,cs:ce,sn:X}}const W=[],oe={},O=[],q=new Ge,$=new Ge,K=new Ge,B=new Ge,Q=new me,le=new N,ue=new Ge,xe=new DOMParser().parseFromString(e,"image/svg+xml");return i(xe.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:W,xml:xe.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},a={loc:i.ORIGIN,t:0};function s(v,p,h,_){const g=v.x,b=p.x,R=h.x,E=_.x,A=v.y,U=p.y,M=h.y,w=_.y,V=(E-R)*(A-M)-(w-M)*(g-R),W=(b-g)*(A-M)-(U-A)*(g-R),oe=(w-M)*(b-g)-(E-R)*(U-A),O=V/oe,q=W/oe;if(oe===0&&V!==0||O<=0||O>=1||q<0||q>1)return null;if(V===0&&oe===0){for(let $=0;$<2;$++)if(o($===0?h:_,v,p),a.loc==i.ORIGIN){const K=$===0?h:_;return{x:K.x,y:K.y,t:a.t}}else if(a.loc==i.BETWEEN){const K=+(g+a.t*(b-g)).toPrecision(10),B=+(A+a.t*(U-A)).toPrecision(10);return{x:K,y:B,t:a.t}}return null}else{for(let B=0;B<2;B++)if(o(B===0?h:_,v,p),a.loc==i.ORIGIN){const Q=B===0?h:_;return{x:Q.x,y:Q.y,t:a.t}}const $=+(g+O*(b-g)).toPrecision(10),K=+(A+O*(U-A)).toPrecision(10);return{x:$,y:K,t:O}}}function o(v,p,h){const _=h.x-p.x,g=h.y-p.y,b=v.x-p.x,R=v.y-p.y,E=_*R-b*g;if(v.x===p.x&&v.y===p.y){a.loc=i.ORIGIN,a.t=0;return}if(v.x===h.x&&v.y===h.y){a.loc=i.DESTINATION,a.t=1;return}if(E<-Number.EPSILON){a.loc=i.LEFT;return}if(E>Number.EPSILON){a.loc=i.RIGHT;return}if(_*b<0||g*R<0){a.loc=i.BEHIND;return}if(Math.sqrt(_*_+g*g)<Math.sqrt(b*b+R*R)){a.loc=i.BEYOND;return}let A;_!==0?A=b/_:A=R/g,a.loc=i.BETWEEN,a.t=A}function r(v,p){const h=[],_=[];for(let g=1;g<v.length;g++){const b=v[g-1],R=v[g];for(let E=1;E<p.length;E++){const A=p[E-1],U=p[E],M=s(b,R,A,U);M!==null&&h.find(w=>w.t<=M.t+Number.EPSILON&&w.t>=M.t-Number.EPSILON)===void 0&&(h.push(M),_.push(new me(M.x,M.y)))}}return _}function l(v,p,h){const _=new me;p.getCenter(_);const g=[];return h.forEach(b=>{b.boundingBox.containsPoint(_)&&r(v,b.points).forEach(E=>{g.push({identifier:b.identifier,isCW:b.isCW,point:E})})}),g.sort((b,R)=>b.point.x-R.point.x),g}function c(v,p,h,_,g){(g==null||g==="")&&(g="nonzero");const b=new me;v.boundingBox.getCenter(b);const R=[new me(h,b.y),new me(_,b.y)],E=l(R,v.boundingBox,p);E.sort((W,oe)=>W.point.x-oe.point.x);const A=[],U=[];E.forEach(W=>{W.identifier===v.identifier?A.push(W):U.push(W)});const M=A[0].point.x,w=[];let V=0;for(;V<U.length&&U[V].point.x<M;)w.length>0&&w[w.length-1]===U[V].identifier?w.pop():w.push(U[V].identifier),V++;if(w.push(v.identifier),g==="evenodd"){const W=w.length%2===0,oe=w[w.length-2];return{identifier:v.identifier,isHole:W,for:oe}}else if(g==="nonzero"){let W=!0,oe=null,O=null;for(let q=0;q<w.length;q++){const $=w[q];W?(O=p[$].isCW,W=!1,oe=$):O!==p[$].isCW&&(O=p[$].isCW,W=!0)}return{identifier:v.identifier,isHole:W,for:oe}}else console.warn('fill-rule: "'+g+'" is currently not implemented.')}let d=999999999,u=-999999999,f=e.subPaths.map(v=>{const p=v.getPoints();let h=-999999999,_=999999999,g=-999999999,b=999999999;for(let R=0;R<p.length;R++){const E=p[R];E.y>h&&(h=E.y),E.y<_&&(_=E.y),E.x>g&&(g=E.x),E.x<b&&(b=E.x)}return u<=g&&(u=g+1),d>=b&&(d=b-1),{curves:v.curves,points:p,isCW:vi.isClockWise(p),identifier:-1,boundingBox:new KA(new me(b,_),new me(g,h))}});f=f.filter(v=>v.points.length>1);for(let v=0;v<f.length;v++)f[v].identifier=v;const m=f.map(v=>c(v,f,d,u,e.userData?e.userData.style.fillRule:void 0)),y=[];return f.forEach(v=>{if(!m[v.identifier].isHole){const h=new Za;h.curves=v.curves,m.filter(g=>g.isHole&&g.for===v.identifier).forEach(g=>{const b=f[g.identifier],R=new no;R.curves=b.curves,h.holes.push(R)}),y.push(h)}}),y}static getStrokeStyle(e,t,i,a,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",i=i!==void 0?i:"miter",a=a!==void 0?a:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:i,strokeLineCap:a,strokeMiterLimit:s}}static pointsToStroke(e,t,i,a){const s=[],o=[],r=[];if(Jc.pointsToStrokeWithBuffers(e,t,i,a,s,o,r)===0)return null;const l=new xt;return l.setAttribute("position",new et(s,3)),l.setAttribute("normal",new et(o,3)),l.setAttribute("uv",new et(r,2)),l}static pointsToStrokeWithBuffers(e,t,i,a,s,o,r,l){const c=new me,d=new me,u=new me,f=new me,m=new me,y=new me,v=new me,p=new me,h=new me,_=new me,g=new me,b=new me,R=new me,E=new me,A=new me,U=new me,M=new me;i=i!==void 0?i:12,a=a!==void 0?a:.001,l=l!==void 0?l:0,e=ie(e);const w=e.length;if(w<2)return 0;const V=e[0].equals(e[w-1]);let W,oe=e[0],O;const q=t.strokeWidth/2,$=1/(w-1);let K=0,B,Q,le,ue,xe=!1,te=0,k=l*3,D=l*2;C(e[0],e[1],c).multiplyScalar(q),p.copy(e[0]).sub(c),h.copy(e[0]).add(c),_.copy(p),g.copy(h);for(let z=1;z<w;z++){W=e[z],z===w-1?V?O=e[1]:O=void 0:O=e[z+1];const Y=c;if(C(oe,W,Y),u.copy(Y).multiplyScalar(q),b.copy(W).sub(u),R.copy(W).add(u),B=K+$,Q=!1,O!==void 0){C(W,O,d),u.copy(d).multiplyScalar(q),E.copy(W).sub(u),A.copy(W).add(u),le=!0,u.subVectors(O,oe),Y.dot(u)<0&&(le=!1),z===1&&(xe=le),u.subVectors(O,W),u.normalize();const j=Math.abs(Y.dot(u));if(j>Number.EPSILON){const pe=q/j;u.multiplyScalar(-pe),f.subVectors(W,oe),m.copy(f).setLength(pe).add(u),U.copy(m).negate();const F=m.length(),x=f.length();f.divideScalar(x),y.subVectors(O,W);const S=y.length();switch(y.divideScalar(S),f.dot(U)<x&&y.dot(U)<S&&(Q=!0),M.copy(m).add(W),U.add(W),ue=!1,Q?le?(A.copy(U),R.copy(U)):(E.copy(U),b.copy(U)):ce(),t.strokeLineJoin){case"bevel":X(le,Q,B);break;case"round":he(le,Q),le?ee(W,b,E,B,0):ee(W,A,R,B,1);break;case"miter":case"miter-clip":default:const G=q*t.strokeMiterLimit/F;if(G<1)if(t.strokeLineJoin!=="miter-clip"){X(le,Q,B);break}else he(le,Q),le?(y.subVectors(M,b).multiplyScalar(G).add(b),v.subVectors(M,E).multiplyScalar(G).add(E),T(b,B,0),T(y,B,0),T(W,B,.5),T(W,B,.5),T(y,B,0),T(v,B,0),T(W,B,.5),T(v,B,0),T(E,B,0)):(y.subVectors(M,R).multiplyScalar(G).add(R),v.subVectors(M,A).multiplyScalar(G).add(A),T(R,B,1),T(y,B,1),T(W,B,.5),T(W,B,.5),T(y,B,1),T(v,B,1),T(W,B,.5),T(v,B,1),T(A,B,1));else Q?(le?(T(h,K,1),T(p,K,0),T(M,B,0),T(h,K,1),T(M,B,0),T(U,B,1)):(T(h,K,1),T(p,K,0),T(M,B,1),T(p,K,0),T(U,B,0),T(M,B,1)),le?E.copy(M):A.copy(M)):le?(T(b,B,0),T(M,B,0),T(W,B,.5),T(W,B,.5),T(M,B,0),T(E,B,0)):(T(R,B,1),T(M,B,1),T(W,B,.5),T(W,B,.5),T(M,B,1),T(A,B,1)),ue=!0;break}}else ce()}else ce();!V&&z===w-1&&P(e[0],_,g,le,!0,K),K=B,oe=W,p.copy(E),h.copy(A)}if(!V)P(W,b,R,le,!1,B);else if(Q&&s){let z=M,Y=U;xe!==le&&(z=U,Y=M),le?(ue||xe)&&(Y.toArray(s,0*3),Y.toArray(s,3*3),ue&&z.toArray(s,1*3)):(ue||!xe)&&(Y.toArray(s,1*3),Y.toArray(s,3*3),ue&&z.toArray(s,0*3))}return te;function C(z,Y,j){return j.subVectors(Y,z),j.set(-j.y,j.x).normalize()}function T(z,Y,j){s&&(s[k]=z.x,s[k+1]=z.y,s[k+2]=0,o&&(o[k]=0,o[k+1]=0,o[k+2]=1),k+=3,r&&(r[D]=Y,r[D+1]=j,D+=2)),te+=3}function ee(z,Y,j,pe,F){c.copy(Y).sub(z).normalize(),d.copy(j).sub(z).normalize();let x=Math.PI;const S=c.dot(d);Math.abs(S)<1&&(x=Math.abs(Math.acos(S))),x/=i,u.copy(Y);for(let G=0,ge=i-1;G<ge;G++)f.copy(u).rotateAround(z,x),T(u,pe,F),T(f,pe,F),T(z,pe,.5),u.copy(f);T(f,pe,F),T(j,pe,F),T(z,pe,.5)}function ce(){T(h,K,1),T(p,K,0),T(b,B,0),T(h,K,1),T(b,B,1),T(R,B,0)}function X(z,Y,j){Y?z?(T(h,K,1),T(p,K,0),T(b,B,0),T(h,K,1),T(b,B,0),T(U,B,1),T(b,j,0),T(E,j,0),T(U,j,.5)):(T(h,K,1),T(p,K,0),T(R,B,1),T(p,K,0),T(U,B,0),T(R,B,1),T(R,j,1),T(U,j,0),T(A,j,1)):z?(T(b,j,0),T(E,j,0),T(W,j,.5)):(T(R,j,1),T(A,j,0),T(W,j,.5))}function he(z,Y){Y&&(z?(T(h,K,1),T(p,K,0),T(b,B,0),T(h,K,1),T(b,B,0),T(U,B,1),T(b,K,0),T(W,B,.5),T(U,B,1),T(W,B,.5),T(E,K,0),T(U,B,1)):(T(h,K,1),T(p,K,0),T(R,B,1),T(p,K,0),T(U,B,0),T(R,B,1),T(R,K,1),T(U,B,0),T(W,B,.5),T(W,B,.5),T(U,B,0),T(A,K,1)))}function P(z,Y,j,pe,F,x){switch(t.strokeLineCap){case"round":F?ee(z,j,Y,x,.5):ee(z,Y,j,x,.5);break;case"square":if(F)c.subVectors(Y,z),d.set(c.y,-c.x),u.addVectors(c,d).add(z),f.subVectors(d,c).add(z),pe?(u.toArray(s,1*3),f.toArray(s,0*3),f.toArray(s,3*3)):(u.toArray(s,1*3),u.toArray(s,3*3),f.toArray(s,0*3));else{c.subVectors(j,z),d.set(c.y,-c.x),u.addVectors(c,d).add(z),f.subVectors(d,c).add(z);const S=s.length;pe?(u.toArray(s,S-1*3),f.toArray(s,S-2*3),f.toArray(s,S-4*3)):(f.toArray(s,S-2*3),u.toArray(s,S-1*3),f.toArray(s,S-4*3))}break}}function ie(z){let Y=!1;for(let pe=1,F=z.length-1;pe<F;pe++)if(z[pe].distanceTo(z[pe+1])<a){Y=!0;break}if(!Y)return z;const j=[];j.push(z[0]);for(let pe=1,F=z.length-1;pe<F;pe++)z[pe].distanceTo(z[pe+1])>=a&&j.push(z[pe]);return j.push(z[z.length-1]),j}}}const rI={[ne.PEAK]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-390Zm-132-53 55 37 77-39 77 39 53-35-40-79H386l-38 77ZM209-160h541L646-369l-83 55-83-41-83 41-85-56-103 210ZM80-80l234-475q10-20 29.5-32.5T386-600h54v-280h280l-40 80 40 80H520v120h50q23 0 42 12t30 32L880-80H80Z"/></svg>',[ne.CITY]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>',[ne.LANDSCAPE]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m40-240 240-320 180 240h300L560-586 460-454l-50-66 150-200 360 480H40Zm521-80Zm-361 0h160l-80-107-80 107Zm0 0h160-160Z"/></svg>',[ne.BEACH]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 530-374l56-56 254 254-56 56Zm-546-28q-60-60-89-135t-29-153q0-78 29-152t89-134q60-60 134.5-89.5T525-841q78 0 152.5 29.5T812-722L238-148Zm8-122 54-54q-16-21-30.5-43T243-411q-12-22-21-44t-16-43q-11 59-1.5 118T246-270Zm112-110 222-224q-43-33-86.5-53.5t-81.5-28q-38-7.5-68.5-2.5T296-666q-17 18-22 48.5t2.5 69q7.5 38.5 28 81.5t53.5 87Zm278-280 56-54q-53-32-112-42t-118 2q22 7 44 16t44 20.5q22 11.5 43.5 26T636-660Z"/></svg>'},hx=[];let qa=null,Fa=null,Vh=null;function fx(n){Vh&&(Vh.visible=!!n)}const Xa=new Je,Vl=new Lt,d0=new N,u0=new N(1,1,1),h0=new N(0,1,0),Zs=new Ae;function lI(){return new bd(ft.ring.majorRadius,ft.ring.tubeRadius,10,48)}const px={};function cI(){const n=new Jc,e=ft.symbol.size/960,t=ft.symbol.extrudeDepth/e;for(const[i,a]of Object.entries(rI)){const s=n.parse(a),o=[];for(const l of s.paths)o.push(...Jc.createShapes(l));const r=new Sf(o,{depth:t,bevelEnabled:!1});r.scale(1,-1,1),r.center(),r.scale(e,e,e),px[i]=r}}function dI(n,e){const t=ft.ring,i=Ut(n,e);if(i<Te.waterLevel)return Te.waterLevel+t.coastRingHeight;const a=t.terrainSearchRadius;let s=-1/0;for(let r=-a;r<=a;r+=1)for(let l=-a;l<=a;l+=1){if(r*r+l*l>a*a)continue;const c=Lo(n+r,e+l);c>s&&(s=c)}return Math.max(i,s+t.terrainClearance-t.hoverHeight)+t.hoverHeight}function uI(){cI();const n=lI(),e=new dt;Vh=e;const t={};for(const o of zn)t[o.type]=(t[o.type]||0)+1;const i=gh(new Xn({transparent:!0}));yh(n,zn.length,ft.ring.opacity);const a=new on(n,i,zn.length);a.frustumCulled=!1,e.add(a),qa=a;const s=gh(new ut({transparent:!0,flatShading:!0,side:Jt}));Fa={};for(const o of Object.keys(t)){const r=px[o];yh(r,t[o],.95);const l=new on(r,s,t[o]);l.frustumCulled=!1,e.add(l),Fa[o]={mesh:l,next:0}}for(let o=0;o<zn.length;o++){const r=zn[o],l=ft.colorsByType[r.type],c=dI(r.x,r.z),d=Fa[r.type],u=d.next++;Xa.makeTranslation(r.x,c,r.z),a.setMatrixAt(o,Xa),d.mesh.setMatrixAt(u,Xa),a.setColorAt(o,Zs.setHex(l.ring)),d.mesh.setColorAt(u,Zs.setHex(l.symbol)),hx.push({poi:r,ringIndex:o,symbolMesh:d.mesh,symbolIndex:u,ringAlpha:n.attributes.instanceAlpha.array,symbolAlpha:d.mesh.geometry.attributes.instanceAlpha.array,x:r.x,y:c,z:r.z,spin:0,frozen:!1,wasInsideZone:!1,appliedActivated:null})}a.instanceMatrix.needsUpdate=!0,a.instanceColor.needsUpdate=!0;for(const o of Object.keys(Fa)){const r=Fa[o].mesh;r.instanceMatrix.needsUpdate=!0,r.instanceColor.needsUpdate=!0}return e}function hI(n,e){const t=e.x-n.x,i=e.y-n.y,a=e.z-n.z;return t*t+i*i+a*a<=ft.activation.radius*ft.activation.radius}function fI(){const n=H0(nf()),e=J.oneShotTier|0;return n>e?(J.oneShotTier=n,n):0}function pI(n){const e=ft.rewardsByType[n.type];if(J.testMode){Jg(n.name,e.punkte,e.gofios,0);return}const t=!!J.exploredPOIs[n.id],i=t?Math.round(e.punkte*ft.revisitPunkteFactor):e.punkte;ud(i),_n(t?"ring-recollect":"ring-first");let a=0,s=0;t||(J.exploredPOIs[n.id]=!0,J.gofiosByIsland[n.island]=(J.gofiosByIsland[n.island]|0)+e.gofios,a=e.gofios,s=fI()),Jg(n.name,i,a,s),Ht()}function mI(n,e){if(e)qa.setColorAt(n.ringIndex,Zs.setHex(ft.ring.colorActivated)),n.ringAlpha[n.ringIndex]=ft.ring.opacityActivated,n.symbolMesh.setColorAt(n.symbolIndex,Zs.setHex(ft.symbol.colorActivated)),n.symbolAlpha[n.symbolIndex]=.55;else{const t=ft.colorsByType[n.poi.type];qa.setColorAt(n.ringIndex,Zs.setHex(t.ring)),n.ringAlpha[n.ringIndex]=ft.ring.opacity,n.symbolMesh.setColorAt(n.symbolIndex,Zs.setHex(t.symbol)),n.symbolAlpha[n.symbolIndex]=.95}qa.instanceColor.needsUpdate=!0,qa.geometry.attributes.instanceAlpha.needsUpdate=!0,n.symbolMesh.instanceColor.needsUpdate=!0,n.symbolMesh.geometry.attributes.instanceAlpha.needsUpdate=!0,n.frozen=e}function gI(n,e){if(I.tutorial){Hh();return}const t=e.position,i=n_(t);if(i!==J.currentIsland){if(J.currentIsland=i,!J.testMode&&!J.visitedIslands[i]){J.visitedIslands[i]=!0,J.obsidian=(J.obsidian|0)+pc.islandDiscoveryDiamonds;const o=wt.find(r=>r.id===i);A3(o?o.name:i,pc.islandDiscoveryDiamonds)}Ht()}let a=null,s=ft.hoverLabelRadius*ft.hoverLabelRadius;for(const o of hx){const r=!J.testMode&&!!J.exploredPOIs[o.poi.id];r!==o.appliedActivated&&(mI(o,r),o.appliedActivated=r);const l=Math.atan2(t.x-o.x,t.z-o.z);Vl.setFromAxisAngle(h0,l),Xa.compose(d0.set(o.x,o.y,o.z),Vl,u0),qa.setMatrixAt(o.ringIndex,Xa),o.frozen||(o.spin+=ft.symbol.rotRate*n),Vl.setFromAxisAngle(h0,l+o.spin),Xa.compose(d0.set(o.x,o.y,o.z),Vl,u0),o.symbolMesh.setMatrixAt(o.symbolIndex,Xa);const c=hI(o,t);if(c&&!o.wasInsideZone&&pI(o.poi),o.wasInsideZone=c,J.exploredPOIs[o.poi.id]){const d=t.x-o.poi.x,u=t.z-o.poi.z,f=d*d+u*u;f<s&&(s=f,a=o.poi)}}qa.instanceMatrix.needsUpdate=!0;for(const o of Object.keys(Fa))Fa[o].mesh.instanceMatrix.needsUpdate=!0;a?L3(a.name):Hh()}const Rt={LAUNCH:0,NAV:1,RINGS:2,GREY_BOOST:3,THERMAL:4,RING_HIGH:5,RING_LOW:6,END:7},Js=[{key:"tutorial.navLeft",test:n=>n.roll<=-.45,invert:!1},{key:"tutorial.navRight",test:n=>n.roll>=at.navThreshold,invert:!1},{key:"tutorial.navUp",test:n=>n.pitch>=at.navThreshold,invert:!0},{key:"tutorial.navDown",test:n=>n.pitch<=-.45,invert:!0}],ki=document.getElementById("tutorial-layer"),Wl=document.getElementById("tutorial-banner"),f0=document.getElementById("tutorial-text"),p0=document.getElementById("tutorial-invert"),Sr=document.getElementById("tutorial-invert-toggle"),Ao=document.getElementById("tutorial-skip"),Zo=document.getElementById("tutorial-flash"),m0=document.getElementById("tutorial-steer-hint"),Fi=document.getElementById("tutorial-end"),g0=document.getElementById("tutorial-end-go");let cs=!1,Mn=Rt.LAUNCH,Ia=null,Vs=0,sr=0,or=0,es=null;const aa=new N,pa=new N(0,0,-1),Wu=new N(1,0,0),Zf=new N(0,0,-1),lo={pos:new N,quat:new Lt,state:"PRELAUNCH"};let Wh="",mx=null,ja=null,vt=[],xi=null,Mr=null,Qc=[];const co={x:0,z:0,radius:at.thermal.radius,strength:at.thermal.strength,baseElevation:0},dn=new N,y0=new Lt,yI=new N(0,1,0),za=new N(0,0,-1),Fs=new N(0,0,-1),vI=[85,175,300,420,500];function gx(){return 3046806}function xI(){const n=new dt,e=new bd(3.4,.2,10,40);vt=[];for(let t=0;t<4;t++){const i=new Xn({color:gx(),transparent:!0,opacity:.95}),a=new nt(e,i);a.visible=!1,n.add(a),vt.push({mesh:a,mat:i,pos:new N,collected:!1,popT:1,forward:0})}return xi=_I(),xi.visible=!1,n.add(xi),n}function _I(){const n=new dt,e=at.thermal,t=xn.columnTop,i=new Xn({color:13625071,transparent:!0,opacity:.18,side:Jt,depthWrite:!1}),a=new Wn(e.radius*1.05,e.radius*.55,t,24,1,!0);a.translate(0,t/2,0),n.add(new nt(a,i));const s=64,o=new Float32Array(s*3);Qc=[];for(let c=0;c<s;c++){const d=Math.random()*Math.PI*2,u=Math.sqrt(Math.random())*e.radius*.82;Qc.push({ux:Math.cos(d)*u,uz:Math.sin(d)*u,phase:Math.random()})}const r=new xt;r.setAttribute("position",new Dt(o,3));const l=new Py({color:16777215,size:1.7,transparent:!0,opacity:.6,depthWrite:!1});return Mr=new Iy(r,l),n.add(Mr),n}function bI(){ja||(ja=xI()),ja.parent||Et.add(ja)}function yx(){for(const n of vt)n.mesh.visible=!1;xi&&(xi.visible=!1)}function SI(n){let e=-1/0;for(const t of vI){const i=Ut(aa.x+n.x*t,aa.z+n.z*t);i>e&&(e=i)}return e}function MI(){const n=Te.waterLevel+at.corridorClearHeight,e=Math.max(1,at.corridorSearchSteps);let t=1/0;pa.copy(za);for(let i=0;i<=e;i++){if(Fs.copy(za).lerp(Zf,i/e),Fs.lengthSq()<1e-4)continue;Fs.normalize();const a=SI(Fs);if(a<n){pa.copy(Fs);return}a<t&&(t=a,pa.copy(Fs))}}function wI(){aa.copy(fe.position),dn.set(0,0,-1).applyQuaternion(fe.quaternion),za.set(dn.x,0,dn.z),za.lengthSq()<1e-4&&za.set(0,0,-1),za.normalize(),za.addScaledVector(Zf,at.seawardBias).normalize(),MI(),Wu.crossVectors(pa,mh).normalize();const n=aa.y,e=[at.ring1,at.ring2,at.ring3,at.ring4];for(let a=0;a<4;a++){const s=e[a];dn.copy(aa).addScaledVector(pa,s.forward).addScaledVector(Wu,s.side);const o=Ut(dn.x,dn.z),r=Math.max(o,Te.waterLevel)+at.ringClearance,l=Math.max(n+s.dy,r);vt[a].pos.set(dn.x,l,dn.z),vt[a].mesh.position.copy(vt[a].pos),vt[a].forward=s.forward}const t=at.thermal;dn.copy(aa).addScaledVector(pa,t.forward).addScaledVector(Wu,t.side);const i=Math.max(Ut(dn.x,dn.z),Te.waterLevel);co.x=dn.x,co.z=dn.z,co.baseElevation=i,xi.position.set(dn.x,i,dn.z)}function Jf(){return(fe.position.x-aa.x)*pa.x+(fe.position.z-aa.z)*pa.z}function EI(n){for(const e of vt){if(!e.mesh.visible)continue;const t=Math.atan2(fe.position.x-e.pos.x,fe.position.z-e.pos.z);if(y0.setFromAxisAngle(yI,t),e.mesh.quaternion.copy(y0),e.popT<1){e.popT=Math.min(1,e.popT+n*2.2);const i=1+e.popT*.7;e.mesh.scale.setScalar(i),e.mat.opacity=.95*(1-e.popT),e.popT>=1&&(e.mesh.visible=!1)}}if(xi&&xi.visible&&Mr){const e=Mr.geometry.attributes.position.array,t=xn.columnTop;for(let i=0;i<Qc.length;i++){const a=Qc[i];a.phase+=n*.28,a.phase>=1&&(a.phase-=1),e[i*3]=a.ux,e[i*3+1]=a.phase*t,e[i*3+2]=a.uz}Mr.geometry.attributes.position.needsUpdate=!0}}function ts(n){const e=vt[n];e.collected=!1,e.popT=1,e.mesh.scale.setScalar(1),e.mat.color.setHex(gx()),e.mat.opacity=.95,e.mesh.visible=!0}function vx(n){const e=vt[n];e.collected=!1,e.popT=1,e.mesh.scale.setScalar(1),e.mat.color.setHex(8293522),e.mat.opacity=.4,e.mesh.visible=!0}function xx(){f0&&(f0.textContent=Wh?Ee(Wh,mx||void 0):"")}function ba(n,e=null){Wh=n,mx=e,xx(),Wl&&(Wl.classList.remove("step-pop"),Wl.offsetWidth,Wl.classList.add("step-pop"))}function Ld(n){p0&&(p0.hidden=!n,n&&Sr&&(Sr.checked=Fv()))}function qh(n){m0&&m0.classList.toggle("show",!!n)}function AI(n){Zo&&(Zo.textContent=n,Zo.classList.remove("show"),Zo.offsetWidth,Zo.classList.add("show"))}function vs(n){lo.pos.copy(fe.position),lo.quat.copy(fe.quaternion),lo.state=n}function TI(){if(lo.state==="PRELAUNCH"){Kf(Ia);return}fe.position.copy(lo.pos),fe.quaternion.copy(lo.quat),I.speed=at.airSpeed,I.flightState=He.FLYING,I.postLiftCooldown=at.resetGrace,I.greyActive=!1,I.oneShotActive=!1,Td()}function Pd(){AI(Ee("tutorial.retry")),Mn===Rt.RINGS?(ts(0),vx(1),ed()):Mn===Rt.RING_HIGH?ts(2):Mn===Rt.RING_LOW&&ts(3),TI()}function RI(){Mn=Rt.NAV,Vs=0,sr=0,vs("FLYING"),ba(Js[0].key),Ld(Js[0].invert)}function CI(n){const e=gs();if(sr=Js[Vs].test(e)?sr+n:0,sr>=at.navHold){if(Vs++,sr=0,Vs>=Js.length){LI();return}ba(Js[Vs].key),Ld(Js[Vs].invert)}}function ed(){const n=(vt[0].collected?1:0)+(vt[1].collected?1:0);ba("tutorial.rings",{collected:n,total:2})}function LI(){Mn=Rt.RINGS,Ld(!1),I.speed=Math.max(I.speed,at.ringsEntrySpeed),vs("FLYING"),wI(),ts(0),vx(1),ed()}function PI(){if(!vt[0].collected)td(0)&&(nd(0),ts(1),ed());else if(!vt[1].collected&&td(1)){nd(1),ed(),II();return}Jf()>vt[1].forward+at.ringsOvershoot&&Pd()}function II(){Mn=Rt.GREY_BOOST,or=0,vs("FLYING"),Ao&&(Ao.hidden=!0),Gf({brake:!0,boost:!1,oneShot:!0}),document.body.classList.add("tut-show-boost"),ba("tutorial.boost")}function NI(n){or=gs().boost?or+n:Math.max(0,or-n*.5),or>=at.boostHold&&DI()}function DI(){Mn=Rt.THERMAL,vs("FLYING"),xi.visible=!0,ts(2),ba("tutorial.thermal")}function kI(){fe.position.y>=vt[2].pos.y-at.thermalReach&&OI()}function OI(){Mn=Rt.RING_HIGH,vs("FLYING"),ba("tutorial.ringHigh")}function UI(){if(!vt[2].collected&&td(2)){nd(2),FI();return}Jf()>vt[2].forward+at.highOvershoot&&Pd()}function FI(){Mn=Rt.RING_LOW,vs("FLYING"),ts(3),ba("tutorial.ringLow")}function zI(){if(!vt[3].collected&&td(3)){nd(3),BI();return}Jf()>vt[3].forward+at.highOvershoot&&Pd()}function BI(){Mn=Rt.END,xi.visible=!1,I.paused=!0,Fi&&(Fi.classList.add("visible"),Fi.setAttribute("aria-hidden","false")),es=setTimeout(_x,at.endCardMs)}function _x(){es&&(clearTimeout(es),es=null),Fi&&(Fi.classList.remove("visible"),Fi.setAttribute("aria-hidden","true")),Sx()}function td(n){const e=vt[n],t=fe.position.x-e.pos.x,i=fe.position.y-e.pos.y,a=fe.position.z-e.pos.z;return t*t+i*i+a*a<=at.ringRadius*at.ringRadius}function nd(n){vt[n].collected=!0,vt[n].popT=0}function bx(){if(cs)return;Ia=ot.find(e=>e.id===at.runwayId)??ot[0],Ia.activeHeading=Ia.heading;const n=qT(Ia);n&&(n.rotation.y=0),Zf.set(0,0,-1).applyEuler(new qn(0,Ia.activeHeading,0)),IP(),cs=!0,I.tutorial=!0,J.introPlayed=!0,Et.fog=new Vr(Ye.sky,at.fog.start,at.fog.end),bI(),yx(),fx(!1),lv(!1),pn.indexOf(co)<0&&pn.push(co),Gf({brake:!0,boost:!0,oneShot:!0}),document.body.classList.add("tut-hide-actions"),document.body.classList.remove("tut-show-boost"),Kf(Ia),Mn=Rt.LAUNCH,vs("PRELAUNCH"),ki&&(ki.classList.add("visible"),ki.classList.remove("menu-hidden"),ki.setAttribute("aria-hidden","false")),Ao&&(Ao.hidden=!1),ba("tutorial.launch"),Ld(!1),I.paused=!1}function HI(){return lT()?!1:(bx(),!0)}function Sx(){if(!cs)return;cs=!1,I.tutorial=!1,I.paused=!1,Et.fog=new Vr(Ye.sky,Te.fogStart,Te.fogEnd),yx(),fx(!0),lv(!0),ja&&ja.parent&&Et.remove(ja);const n=pn.indexOf(co);n>=0&&pn.splice(n,1),Gf({brake:!1,boost:!1,oneShot:!1}),document.body.classList.remove("tut-hide-actions","tut-show-boost"),ki&&(ki.classList.remove("visible","menu-hidden"),ki.setAttribute("aria-hidden","true")),qh(!1),cT(!0)}function Mx(){cs&&(es&&(clearTimeout(es),es=null),Fi&&(Fi.classList.remove("visible"),Fi.setAttribute("aria-hidden","true")),Sx())}function GI(n){if(!cs)return;const e=I.paused;if(ki&&ki.classList.toggle("menu-hidden",e),e){qh(!1);return}switch(qh(Mn===Rt.LAUNCH||Mn===Rt.NAV),Mn){case Rt.LAUNCH:I.flightState===He.FLYING&&RI();break;case Rt.NAV:CI(n);break;case Rt.RINGS:PI();break;case Rt.GREY_BOOST:NI(n);break;case Rt.THERMAL:kI();break;case Rt.RING_HIGH:UI();break;case Rt.RING_LOW:zI();break}EI(n)}V3(Pd);Sr&&Sr.addEventListener("change",()=>Gc(Sr.checked));Ao&&Ao.addEventListener("click",Mx);g0&&g0.addEventListener("click",_x);wd(()=>{cs&&xx()});const VI="3.2.0",WI=14,v0={version:VI,build:WI},qI={TFN:"tenerife",TFS:"tenerife",GMZ:"gomera",SPC:"palma",VDE:"hierro",LPA:"gc",FUE:"fuerte",ACE:"lanza",GRAC:"graciosa"},rn=document.getElementById("welcome-overlay"),x0=document.getElementById("welcome-start-sub"),_0=document.getElementById("pause-btn"),ai=document.getElementById("pause-overlay"),b0=document.getElementById("pause-resume"),S0=document.getElementById("pause-home"),wr=document.getElementById("pause-music-toggle"),Er=document.getElementById("pause-sfx-toggle"),XI=document.getElementById("crash"),M0=document.getElementById("welcome-version");M0&&(M0.textContent=`v${v0.version} · Build ${v0.build} · Swiss Innovation Studios`);const bn=document.getElementById("levels-overlay"),rr=document.getElementById("levels-map"),uo=document.getElementById("levels-markers"),w0=document.getElementById("levels-title"),ql=document.getElementById("levels-hint"),Jo=768,Xl=320,E0=1.08;let A0=null,jl=null;function wx(){if(jl)return jl;let n=1/0,e=-1/0,t=1/0,i=-1/0;for(const l of wt)n=Math.min(n,l.x-l.bboxRadius),e=Math.max(e,l.x+l.bboxRadius),t=Math.min(t,l.z-l.bboxRadius),i=Math.max(i,l.z+l.bboxRadius);const a=(n+e)/2,s=(t+i)/2,o=(e-n)/2*E0,r=(i-t)/2*E0;return jl={cx:a,cz:s,hw:o,hh:r},jl}function Ex(){return rn?.classList.contains("visible")===!0}function T0(){return ai?.classList.contains("visible")===!0}function Yr(){rn&&(Mx(),lr(),I.paused=!0,Rx(),rn.classList.add("visible"),rn.setAttribute("aria-hidden","false"))}function Xh(){rn&&(rn.classList.remove("visible"),rn.setAttribute("aria-hidden","true"),Tx()||(I.paused=!1))}function jh(){ai&&(I.paused=!0,wr&&(wr.checked=!Xy()),Er&&(Er.checked=!$y()),ai.classList.add("visible"),ai.setAttribute("aria-hidden","false"))}function lr(){ai&&ai.classList.contains("visible")&&(ai.classList.remove("visible"),ai.setAttribute("aria-hidden","true"),Tx()||(I.paused=!1))}function Ax(){I.paused||I.flightState!==He.CRASHED&&(I.tutorial||jh())}function Tx(){return rn?.classList.contains("visible")||bn?.classList.contains("visible")||document.getElementById("hangar-overlay")?.classList.contains("visible")||document.getElementById("shop-overlay")?.classList.contains("visible")||document.getElementById("settings-overlay")?.classList.contains("visible")}function Rx(){if(!x0)return;const n=J.checkpointRunwayId;x0.textContent=n?Ee("welcome.checkpoint",{id:n}):Ee("welcome.firstFlight")}function jI(){bn&&(rn?.classList.remove("visible"),rn?.setAttribute("aria-hidden","true"),bn.classList.add("visible"),bn.setAttribute("aria-hidden","false"),Cx())}function R0(){bn&&(bn.classList.remove("visible"),bn.setAttribute("aria-hidden","true"),Yr())}function Cx(){if(!rr)return;w0&&(w0.textContent=Ee("levels.archTitle"));const n=$I(),e=wt.map(t=>n[t.id]?"1":"0").join("");A0!==e&&(KI(n),A0=e),QI(),eN(n),tN()}function $I(){const n={};for(const e of wt)n[e.id]=!1;for(const e of ot){if(!J.discoveredRunways[e.id])continue;const t=qI[e.id];t&&(n[t]=!0)}return n}function YI(n,e){let t=wt[0].id,i=1/0;for(const a of wt){const s=n-a.x,o=e-a.z,r=s*s+o*o;r<i&&(i=r,t=a.id)}return t}function KI(n){if(!rr)return;rr.width=Jo,rr.height=Xl;const e=rr.getContext("2d"),t=e.createImageData(Jo,Xl),{cx:i,cz:a,hw:s,hh:o}=wx(),r=Te.heightmap.metersPerUnit,l=Te.waterLevel;for(let c=0;c<Xl;c++){const d=a+(c/(Xl-1)-.5)*2*o;for(let u=0;u<Jo;u++){const f=i+(u/(Jo-1)-.5)*2*s,m=Lo(f,d);let y,v,p;if(m<l+.05)y=52,v=92,p=118;else{const _=YI(f,d),g=m*r;n[_]?[y,v,p]=ZI(g):y=v=p=JI(g)}const h=(c*Jo+u)*4;t.data[h]=y,t.data[h+1]=v,t.data[h+2]=p,t.data[h+3]=255}}e.putImageData(t,0,0)}function ZI(n){return n<80?[199,184,145]:n<600?[134,152,98]:n<1600?[157,138,110]:n<2400?[180,168,148]:n<3e3?[215,212,200]:[240,240,235]}function JI(n){return n<80?132:n<600?148:n<1600?162:n<2400?176:n<3e3?192:206}function Lx(n,e){const{cx:t,cz:i,hw:a,hh:s}=wx();return{fracX:(n-t)/(2*a)+.5,fracY:(e-i)/(2*s)+.5}}function QI(){if(uo){uo.querySelectorAll(".levels-marker").forEach(n=>n.remove());for(const n of ot){const e=!!J.landedRunways[n.id],t=!!J.discoveredRunways[n.id],i=e?"landed":t?"discovered":"locked",{fracX:a,fracY:s}=Lx(n.x,n.z);if(a<0||a>1||s<0||s>1)continue;const o=document.createElement("button");o.type="button",o.className=`levels-marker levels-marker-${i}`,o.style.left=(a*100).toFixed(2)+"%",o.style.top=(s*100).toFixed(2)+"%",o.dataset.runwayId=n.id,o.disabled=!e;const r=i==="locked"?Ee("levels.markerLocked"):n.id;o.innerHTML=`
      <span class="levels-marker-dot"></span>
      <span class="levels-marker-label">${r}</span>
    `,e?(o.title=Ee("levels.tipStart",{id:n.id}),o.addEventListener("click",()=>nN(n.id))):t?o.title=Ee("levels.tipNotLanded",{id:n.id}):o.title=Ee("levels.tipUndiscovered"),uo.appendChild(o)}}}function eN(n){if(uo){uo.querySelectorAll(".levels-island-label").forEach(e=>e.remove());for(const e of wt){if(!n[e.id])continue;const{fracX:t,fracY:i}=Lx(e.x,e.z);if(t<0||t>1||i<0||i>1)continue;const a=document.createElement("span");a.className="levels-island-label",a.textContent=e.name,a.style.left=(t*100).toFixed(2)+"%",a.style.top=(i*100).toFixed(2)+"%",uo.appendChild(a)}}}function tN(){if(!ql)return;const n=ot.filter(e=>J.landedRunways[e.id]).length;n===0?ql.textContent=Ee("levels.hintNone"):n<ot.length?ql.textContent=Ee("levels.hintProgress",{landed:n,total:ot.length}):ql.textContent=Ee("levels.hintAll")}async function nN(n){bn?.classList.remove("visible"),bn?.setAttribute("aria-hidden","true"),rn?.classList.remove("visible"),rn?.setAttribute("aria-hidden","true"),I.flightState===He.CRASHED&&await rs.onCrashRestart(),I.paused=!1,Cd({runwayId:n,forceIntro:!0})}async function iN(){I.flightState===He.CRASHED?(await rs.onCrashRestart(),Xh(),Cd()):Xh()}function qu(n){rn?.classList.remove("visible"),rn?.setAttribute("aria-hidden","true"),wo(n,{onClose:Yr})}(function(){rn&&rn.addEventListener("click",t=>{const i=t.target.closest("[data-welcome-action]");if(!i)return;const a=i.dataset.welcomeAction;a==="start"?iN():a==="levels"?jI():a==="hangar"?qu("hangar"):a==="shop"?qu("shop"):a==="settings"&&qu("settings")}),bn&&bn.addEventListener("click",t=>{if(t.target===bn){R0();return}if(t.target.closest('[data-modal-close="levels"]')){R0();return}});const e=document.getElementById("settings-replay-tutorial");e&&e.addEventListener("click",()=>{for(const t of["settings-overlay","welcome-overlay","levels-overlay"]){const i=document.getElementById(t);i&&(i.classList.remove("visible"),i.setAttribute("aria-hidden","true"))}bx()}),_0&&_0.addEventListener("click",()=>{T0()?lr():jh()}),b0&&b0.addEventListener("click",lr),wr&&wr.addEventListener("change",()=>{const t=!wr.checked;jy(t),fv(t)}),Er&&Er.addEventListener("change",()=>{const t=!Er.checked;Yy(t),pv(t)}),S0&&S0.addEventListener("click",Yr),ai&&ai.addEventListener("click",t=>{t.target===ai&&lr()}),document.addEventListener("keydown",t=>{if(t.key==="Escape"&&!document.getElementById("onboarding-overlay")?.classList.contains("visible")&&!document.getElementById("hangar-overlay")?.classList.contains("visible")&&!document.getElementById("shop-overlay")?.classList.contains("visible")&&!document.getElementById("settings-overlay")?.classList.contains("visible")&&!bn?.classList.contains("visible")){if(Ex()){Xh(),I.flightState===He.CRASHED&&XI?.classList.add("visible");return}if(T0()){lr();return}I.flightState!==He.CRASHED&&jh()}})})();wd(()=>{Ex()&&Rx(),bn?.classList.contains("visible")&&Cx()});const Gr=document.getElementById("onboarding-overlay"),id=document.getElementById("onboarding-lang-step"),ad=document.getElementById("onboarding-story-step"),aN=document.getElementById("onboarding-langs"),C0=document.getElementById("onboarding-story-text"),Xu=document.getElementById("onboarding-dots"),sd=document.getElementById("onboarding-next");let ho=0,$h=null;function Px(){const n=Ee("onboarding.story");return Array.isArray(n)?n:[]}function sN(n){if($h=typeof n=="function"?n:()=>{},!Gr||oT()){$h();return}oN()}function oN(){I.paused=!0,Gr.classList.add("visible"),Gr.setAttribute("aria-hidden","false"),rN()}function rN(){ad&&(ad.hidden=!0),id&&(id.hidden=!1),Iv(aN,{onPick:n=>{Lv(n),lN()}})}function lN(){id&&(id.hidden=!0),ad&&(ad.hidden=!1),ho=0,Ix()}function Ix(){const n=Px();if(C0&&(C0.textContent=n[ho]||""),Xu){Xu.innerHTML="";for(let t=0;t<n.length;t++){const i=document.createElement("span");i.className="onboarding-dot"+(t===ho?" active":""),Xu.appendChild(i)}}const e=ho>=n.length-1;sd&&(sd.textContent=Ee(e?"onboarding.begin":"onboarding.next"))}function cN(){ho<Px().length-1?(ho++,Ix()):dN()}function dN(){rT(!0),Gr.classList.remove("visible"),Gr.setAttribute("aria-hidden","true"),$h()}sd&&sd.addEventListener("click",cN);const Io=new N(0,1,0);function od(n,e){for(const t of ot){const i=n-t.x,a=e-t.z,s=Math.cos(t.heading),o=Math.sin(t.heading),r=i*s-a*o,l=i*o+a*s;if(Math.abs(r)<t.width/2+fc.vegClearSide&&Math.abs(l)<t.length/2+fc.vegClearEnd)return!0}return!1}const zs=8;function uN(n,e,t){const i=Ln(n+zs,e),a=Ln(n-zs,e),s=Ln(n,e+zs),o=Ln(n,e-zs);return t.gx=(i-a)/(2*zs),t.gz=(s-o)/(2*zs),t}function hN(){const e=wt.reduce((t,i)=>t+i.bboxRadius*i.bboxRadius,0);return wt.map(t=>{const i=t.bboxRadius*t.bboxRadius/e;return Math.max(8e3,Math.floor(Ct.sampleCount*i))})}function fN(){const{treeDensity:n,shrubDensity:e,grassDensity:t,cropDensity:i,bareDensity:a,droughtShrubDensity:s,snowDensity:o,wetlandDensity:r,laurelMaxAltitude:l}=Ct,c={};for(const v of wt)c[v.id]={pines:[],laurels:[],shrubs:[],grasses:[],crops:[],rocks:[],snow:[],wetlands:[],cliffs:[]};const d=Ct.slopeThreshold,u=Ct.cliffDensity,f=l*Te.heightmap.elevationExaggeration,m={gx:0,gz:0};for(const v of t_){const p=c[v.island];if(!p)continue;const h=v.ringCount,_=v.ringRadius,g=1.4;for(let R=0;R<h;R++){const E=R/h*Math.PI*2+(Math.random()-.5)*.08,A=_*(.88+Math.random()*.24),U=v.x+Math.cos(E)*A,M=v.z+Math.sin(E)*A,w=Ut(U,M);w<Te.waterLevel+.5||od(U,M)||p.cliffs.push({x:U,y:w,z:M,gx:Math.cos(E)*g,gz:Math.sin(E)*g})}const b=Math.floor(h*.4);for(let R=0;R<b;R++){const E=Math.random()*Math.PI*2,A=Math.sqrt(Math.random())*_*.75,U=v.x+Math.cos(E)*A,M=v.z+Math.sin(E)*A,w=Ut(U,M);w<Te.waterLevel+.5||p.rocks.push({x:U,y:w,z:M})}}const y=hN();for(let v=0;v<wt.length;v++){const p=wt[v],h=p.bboxRadius,_=y[v],g=c[p.id];for(let b=0;b<_;b++){const R=p.x+(Math.random()-.5)*2*h,E=p.z+(Math.random()-.5)*2*h,A=Ut(R,E);if(A<Te.waterLevel+.5||od(R,E))continue;uN(R,E,m);const M=Math.hypot(m.gx,m.gz)>=d&&Math.random()<u;M&&g.cliffs.push({x:R,y:A,z:E,gx:m.gx,gz:m.gz});const w=Hn(R,E);w===Mt.TREE&&Math.random()<n?A>=f?g.pines.push({x:R,y:A,z:E}):g.laurels.push({x:R,y:A,z:E}):w===Mt.SHRUB&&Math.random()<e?g.shrubs.push({x:R,y:A,z:E}):w===Mt.GRASS&&Math.random()<t?g.grasses.push({x:R,y:A,z:E}):w===Mt.CROP&&Math.random()<i?g.crops.push({x:R,y:A,z:E}):w===Mt.BARE?(!M&&Math.random()<a&&g.rocks.push({x:R,y:A,z:E}),Math.random()<s&&g.shrubs.push({x:R,y:A,z:E})):w===Mt.SNOW&&Math.random()<o?g.snow.push({x:R,y:A,z:E}):w===Mt.WETLAND&&Math.random()<r&&g.wetlands.push({x:R,y:A,z:E})}}return c}function Nx(n,e,t,i,a,s,o,r,l){const c=new on(e,i,n.length),d=new on(t,a,n.length),u=new Je,f=new Lt,m=new N,y=new N;for(let p=0;p<n.length;p++){const{x:h,y:_,z:g}=n[p],b=s+Math.random()*(o-s);y.set(h,_-.3,g),m.set(b,b+Math.random()*.3,b),f.setFromAxisAngle(Io,Math.random()*Math.PI*2),u.compose(y,f,m),c.setMatrixAt(p,u),d.setMatrixAt(p,u),$r(h,_,g,r*b,l*b)}c.instanceMatrix.needsUpdate=!0,d.instanceMatrix.needsUpdate=!0;const v=new dt;return v.add(c,d),v}function pN(n){const e=new Wn(.18,.26,1.6,5);e.translate(0,.8,0);const t=new Gi(1,4.8,7);t.translate(0,3.8,0);const i=new ut({color:Ye.trunk,flatShading:!0}),a=new ut({color:Ye.pineCanopy,flatShading:!0}),s=Ct.treeScale;return Nx(n,e,t,i,a,.75*s,1.3*s,1,6.2)}function mN(n){const e=new Wn(.22,.32,1,5);e.translate(0,.5,0);const t=new qr(1.7,7,5);t.scale(1,.85,1),t.translate(0,2,0);const i=new ut({color:Ye.trunk,flatShading:!0}),a=new ut({color:Ye.laurelCanopy,flatShading:!0}),s=Ct.treeScale;return Nx(n,e,t,i,a,.85*s,1.25*s,1.7,3.5)}function gN(n){const e=new Gi(.7,1,5);e.translate(0,.5,0);const t=new ut({color:Ye.shrubBody,flatShading:!0}),i=new on(e,t,n.length),a=new Je,s=new Lt,o=new N,r=new N;for(let l=0;l<n.length;l++){const{x:c,y:d,z:u}=n[l],f=.5+Math.random()*.6;r.set(c,d-.2,u),o.set(f+Math.random()*.2,f,f+Math.random()*.2),s.setFromAxisAngle(Io,Math.random()*Math.PI*2),a.compose(r,s,o),i.setMatrixAt(l,a),$r(c,d,u,.85*f,1*f)}return i.instanceMatrix.needsUpdate=!0,i}function yN(n){const e=new Gi(.35,.55,4);e.translate(0,.25,0);const t=new ut({color:16777215,flatShading:!0}),i=new on(e,t,n.length),a=new Je,s=new Lt,o=new N,r=new N,l=new Ae(Ye.grassGround),c=Ct.grassTints,d=new Ae;for(let u=0;u<n.length;u++){const{x:f,y:m,z:y}=n[u],v=.6+Math.random()*.7;r.set(f,m-.1,y),o.set(v,v*(.8+Math.random()*.5),v),s.setFromAxisAngle(Io,Math.random()*Math.PI*2),a.compose(r,s,o),i.setMatrixAt(u,a);const[p,h,_]=c[Math.random()*c.length|0];d.setRGB(l.r*p,l.g*h,l.b*_),i.setColorAt(u,d)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function vN(n){const e=new Gi(.4,.75,4);e.translate(0,.35,0);const t=new ut({color:16777215,flatShading:!0}),i=new on(e,t,n.length),a=new Je,s=new Lt,o=new N,r=new N,l=new Ae(Ye.cropGround),c=Ct.grassTints,d=new Ae;for(let u=0;u<n.length;u++){const{x:f,y:m,z:y}=n[u],v=.7+Math.random()*.6;r.set(f,m-.12,y),o.set(v,v*(.9+Math.random()*.4),v),s.setFromAxisAngle(Io,Math.random()*Math.PI*2),a.compose(r,s,o),i.setMatrixAt(u,a);const[p,h,_]=c[Math.random()*c.length|0];d.setRGB(l.r*p,l.g*h,l.b*_),i.setColorAt(u,d)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function xN(n){const e=new Wr(.5,0),t=new ut({color:16777215,flatShading:!0}),i=new on(e,t,n.length),a=new Je,s=new Lt,o=new N,r=new N,l=new qn,c=new Ae(Ye.rock),d=Ct.rockTintsLow,u=Ct.rockTintsMid,f=Ct.rockTintsHigh,m=Ct.rockZoneLowMax,y=Ct.rockZoneHighMin,v=new Ae;for(let p=0;p<n.length;p++){const{x:h,y:_,z:g}=n[p];let b,R,E;_<m?(b=d,R=.3,E=1.5):_>y?(b=f,R=.4,E=2.5):(b=u,R=.5,E=3.5);const A=R+Math.random()*Math.random()*(E-R);r.set(h,_-A*.15,g),o.set(A*(.7+Math.random()*.6),A*(.55+Math.random()*.45),A*(.7+Math.random()*.6)),l.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),s.setFromEuler(l),a.compose(r,s,o),i.setMatrixAt(p,a);const[U,M,w]=b[Math.random()*b.length|0];v.setRGB(c.r*U,c.g*M,c.b*w),i.setColorAt(p,v),A>1.5&&$r(h,_,g,A,A)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function _N(n){const e=new Wr(.6,0),t=new ut({color:16777215,flatShading:!0}),i=new on(e,t,n.length),a=new Je,s=new Lt,o=new Lt,r=new N,l=new N,c=new N(0,1,0),d=new N,u=new Ae(Ye.rock),f=[[.5,.5,.55],[.4,.4,.45],[.62,.58,.55],[.55,.5,.48],[.45,.45,.5]],m=new Ae,[y,v]=Ct.cliffHeightRange;for(let p=0;p<n.length;p++){const{x:h,y:_,z:g,gx:b,gz:R}=n[p];d.set(-b,1,-R).normalize();const E=y+Math.random()*(v-y),A=1.4+Math.random()*1.8;s.setFromUnitVectors(c,d),o.setFromAxisAngle(d,Math.random()*Math.PI*2),s.premultiply(o);const U=(.3+Math.random()*.1)*E;l.set(h-d.x*U,_-d.y*U,g-d.z*U),r.set(A*(.85+Math.random()*.4),E,A*(.85+Math.random()*.4)),a.compose(l,s,r),i.setMatrixAt(p,a);const[M,w,V]=f[Math.random()*f.length|0];m.setRGB(u.r*M,u.g*w,u.b*V),i.setColorAt(p,m)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function bN(n){const e=new Wr(.5,0),t=new ut({color:16777215,flatShading:!0}),i=new on(e,t,n.length),a=new Je,s=new Lt,o=new N,r=new N,l=new qn,c=new Ae;for(let d=0;d<n.length;d++){const{x:u,y:f,z:m}=n[d],y=.4+Math.random()*.9;r.set(u,f-.05,m),o.set(y*(.9+Math.random()*.3),y*(.25+Math.random()*.2),y*(.9+Math.random()*.3)),l.set(0,Math.random()*Math.PI*2,0),s.setFromEuler(l),a.compose(r,s,o),i.setMatrixAt(d,a);const v=.93+Math.random()*.07;c.setRGB(v,v,v),i.setColorAt(d,c)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function SN(n){const e=new sn(1,.04,1);e.translate(0,.02,0);const t=new ut({color:16777215,flatShading:!0}),i=new on(e,t,n.length),a=new Je,s=new Lt,o=new N,r=new N,l=new Ae,c=[[1.05,1.1,1.15],[1.15,1.15,1.2],[.95,1,1.05],[1.1,1.05,.95]];for(let d=0;d<n.length;d++){const{x:u,y:f,z:m}=n[d],y=1+Math.random()*.8;r.set(u,f+.05,m),o.set(y*(.9+Math.random()*.4),1,y*(.9+Math.random()*.4)),s.setFromAxisAngle(Io,Math.random()*Math.PI*2),a.compose(r,s,o),i.setMatrixAt(d,a);const[v,p,h]=c[Math.random()*c.length|0];l.setRGB(.92*v,.94*p,.96*h),i.setColorAt(d,l)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function MN(n){const{clusterScaleMin:e,clusterScaleMax:t}=Ct.urban,i=Math.min(1,Math.pow(n/50,.4));return e+i*(t-e)}function wN(){const n=KT(),{churchClusterPixels:e,housesPerPixel:t,housesMin:i,housesMax:a,houseMinSpacing:s,pixelJitter:o}=Ct.urban,r=[],l=[],c=s*s;for(const d of n){const u=Math.max(i,Math.min(a,Math.round(d.pixelCount*t))),f=MN(d.pixelCount),m=[];let y=0;const v=u*14;for(;m.length<u&&y<v;){y++;const p=d.pixels[Math.random()*d.pixels.length|0],h=p.x+(Math.random()-.5)*o,_=p.z+(Math.random()-.5)*o;let g=!0;for(const R of m){const E=R.x-h,A=R.z-_;if(E*E+A*A<c){g=!1;break}}if(!g)continue;const b=Ut(h,_);b<Te.waterLevel+.5||od(h,_)||m.push({x:h,y:b,z:_,scale:f})}if(r.push(...m),d.pixelCount>=e){const p=d.centerX,h=d.centerZ,_=Ut(p,h);_>=Te.waterLevel+.5&&!od(p,h)&&l.push({x:p,y:_,z:h,scale:f})}}return{houses:r,churches:l}}function EN(n){const e=new sn(1.4,1,1.6);e.translate(0,.5,0);const t=new Gi(1.15,.75,4);t.rotateY(Math.PI/4),t.translate(0,1.37,0);const i=new ut({color:Ye.houseWall,flatShading:!0}),a=new ut({color:16777215,flatShading:!0}),s=new on(e,i,n.length),o=new on(t,a,n.length),r=new Je,l=new Lt,c=new N,d=new N,u=new Ae(Ye.houseRoof),f=Ct.roofTints,m=new Ae;for(let v=0;v<n.length;v++){const{x:p,y:h,z:_,scale:g}=n[v],b=g*(.85+Math.random()*.3),R=g*(.8+Math.random()*.35),E=g*(.85+Math.random()*.3);d.set(p,h,_),c.set(b,R,E);const A=Math.random()*8|0;l.setFromAxisAngle(Io,A*Math.PI/4),r.compose(d,l,c),s.setMatrixAt(v,r),o.setMatrixAt(v,r);const[U,M,w]=f[Math.random()*f.length|0];m.setRGB(u.r*U,u.g*M,u.b*w),o.setColorAt(v,m),$r(p,h,_,.85*g,1.75*g)}s.instanceMatrix.needsUpdate=!0,o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0;const y=new dt;return y.add(s,o),y}function AN(){const n=new ut({color:Ye.houseWall,flatShading:!0}),e=new ut({color:Ye.houseRoof,flatShading:!0}),t=new nt(new sn(1.6,1.2,2.6),n);t.position.y=.6;const i=new nt(new Gi(1.4,.7,4),e);i.rotation.y=Math.PI/4,i.position.y=1.55;const a=new nt(new sn(.75,2.4,.75),n);a.position.set(0,1.2,-1.65);const s=new nt(new Gi(.5,1.05,4),e);s.rotation.y=Math.PI/4,s.position.set(0,2.95,-1.65);const o=new dt;return o.add(t,i,a,s),o}function TN(n){const e=AN(),t=new dt;for(const{x:i,y:a,z:s,scale:o}of n){const r=e.clone();r.position.set(i,a,s);const l=o*(.95+Math.random()*.2);r.scale.set(l,l,l),r.rotation.y=Math.random()*Math.PI*2,t.add(r),$r(i,a,s,1.9*l,3.5*l)}return t}const Yh=[],RN=400;function CN(n,e){const t=new N(e.x,60,e.z),i=e.bboxRadius*1.4+50;return n.traverse(a=>{(a.isInstancedMesh||a.isMesh)&&(a.frustumCulled=!0,a.boundingSphere=new _a(t,i))}),{center:t,radius:i}}function LN(){const n=fN(),e=wN(),t=new dt,i={pines:0,laurels:0,shrubs:0,grasses:0,crops:0,rocks:0,cliffs:0,snow:0,wetlands:0};for(const a of wt){const s=n[a.id];if(!s)continue;const o=new dt;o.name=`vegetation:${a.id}`,s.pines.length&&(o.add(pN(s.pines)),i.pines+=s.pines.length),s.laurels.length&&(o.add(mN(s.laurels)),i.laurels+=s.laurels.length),s.shrubs.length&&(o.add(gN(s.shrubs)),i.shrubs+=s.shrubs.length),s.grasses.length&&(o.add(yN(s.grasses)),i.grasses+=s.grasses.length),s.crops.length&&(o.add(vN(s.crops)),i.crops+=s.crops.length),s.rocks.length&&(o.add(xN(s.rocks)),i.rocks+=s.rocks.length),s.cliffs.length&&(o.add(_N(s.cliffs)),i.cliffs+=s.cliffs.length),s.snow.length&&(o.add(bN(s.snow)),i.snow+=s.snow.length),s.wetlands.length&&(o.add(SN(s.wetlands)),i.wetlands+=s.wetlands.length);const r=CN(o,a);Yh.push({group:o,center:r.center,radius:r.radius}),t.add(o)}return e.houses.length&&t.add(EN(e.houses)),e.churches.length&&t.add(TN(e.churches)),console.log(`vegetation: ${i.pines} pines, ${i.laurels} laurels, ${i.shrubs} shrubs, ${i.grasses} grass tufts, ${i.crops} crops, ${i.rocks} rocks, ${i.cliffs} cliffs, ${i.snow} snow, ${i.wetlands} salinas, ${e.houses.length} houses, ${e.churches.length} churches`),t}function PN(n,e){if(!e){for(const i of Yh)i.group.visible=!0;return}const t=Te.fogEnd+RN;for(const i of Yh)i.group.visible=n.position.distanceTo(i.center)-i.radius<t}const rd=document.getElementById("island-compass"),ju=rd?.querySelector(".compass-track"),$l=document.getElementById("island-name");let L0=null;const Kh=Math.PI/2,P0=6,IN=400,NN=2,ld=7,DN=8,kN=6.2,ON=12;let Dx=560;const kx=new Map;let Yt=null;const $u=new N;function UN(){if(!ju)return;for(const e of wt){const t=document.createElement("div");t.className="compass-marker"+(e.playable?"":" unreachable"),t.dataset.island=e.id,t.innerHTML=`
      <span class="compass-name">${e.name}</span>
      <span class="compass-dist"></span>
    `,ju.appendChild(t),kx.set(e.id,{el:t,dist:t.querySelector(".compass-dist"),lastLeft:null,lastDist:null,lastHidden:null})}const n=document.createElement("div");n.className="compass-marker runway-hint hidden",n.innerHTML=`
    <span class="compass-name"></span>
    <span class="compass-dist"></span>
  `,ju.appendChild(n),Yt={el:n,name:n.querySelector(".compass-name"),dist:n.querySelector(".compass-dist"),lastLeft:null,lastDist:null,lastName:null,lastHidden:!0},I0(),window.addEventListener("resize",I0)}function Yl(n,e){if(!Yt)return;if(!e){Yt.lastHidden||(Yt.el.classList.add("hidden"),Yt.lastHidden=!0);return}const t=Te.heightmap.metersPerUnit,i=Ox(n),a=e.x-n.position.x,s=e.z-n.position.z,o=Math.sqrt(a*a+s*s)*t/1e3,r=Math.atan2(a,-s);let c=(Ux(r-i)/Kh*.5+.5)*100;c=Math.max(ld,Math.min(100-ld,c)),Yt.lastHidden&&(Yt.el.classList.remove("hidden"),Yt.lastHidden=!1),e.id!==Yt.lastName&&(Yt.name.textContent=e.id,Yt.lastName=e.id);const d=c.toFixed(1)+"%";d!==Yt.lastLeft&&(Yt.el.style.left=d,Yt.lastLeft=d);const u=o<10?o.toFixed(1)+" km":Math.round(o)+" km";u!==Yt.lastDist&&(Yt.dist.textContent=u,Yt.lastDist=u)}function Ox(n){return $u.set(0,0,-1).applyQuaternion(n.quaternion),Math.atan2($u.x,-$u.z)}function Ux(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const Qo=[],qt=[];function I0(){if(!rd)return;const n=rd.getBoundingClientRect().width;n>0&&(Dx=n)}function FN(n){if(!$l)return;const e=n?n.name:"";e!==L0&&(L0=e,e?($l.textContent=e,$l.classList.add("show")):$l.classList.remove("show"))}function zN(n){if(!rd)return;const e=Ox(n),t=Te.heightmap.metersPerUnit,i=jf(n.position);FN(i),Qo.length=0;for(const a of wt){const s=kx.get(a.id);if(!s)continue;const o=a.x-n.position.x,r=a.z-n.position.z,c=Math.sqrt(o*o+r*r)*t/1e3,d=Math.max(0,c-a.bboxRadius*t/1e3),u=Math.atan2(o,-r),f=Ux(u-e);if(i&&a.id===i.id||Math.abs(f)>Kh||c<.5||c>IN){Qo.push({m:s,distKm:c,edgeKm:d,pct:0,halfPct:0,show:!1});continue}const y=(f/Kh*.5+.5)*100,v=(a.name.length*kN+ON)/Dx*50;Qo.push({m:s,distKm:c,edgeKm:d,pct:y,halfPct:v,show:!0})}qt.length=0;for(const a of Qo)a.show&&qt.push(a);qt.sort((a,s)=>a.distKm-s.distKm);for(let a=P0;a<qt.length;a++)qt[a].show=!1;qt.length=Math.min(qt.length,P0),qt.sort((a,s)=>a.pct-s.pct);for(let a=0;a<DN;a++){for(let s=0;s<qt.length-1;s++){const o=qt[s],r=qt[s+1],l=o.halfPct+r.halfPct+NN-(r.pct-o.pct);l>0&&(o.pct-=l/2,r.pct+=l/2)}qt.length&&(qt[0].pct=Math.max(ld,qt[0].pct),qt[qt.length-1].pct=Math.min(100-ld,qt[qt.length-1].pct))}for(const a of Qo){const s=a.m,o=!a.show;if(o!==s.lastHidden&&(s.el.classList.toggle("hidden",o),s.lastHidden=o),o)continue;const r=a.pct.toFixed(1)+"%";r!==s.lastLeft&&(s.el.style.left=r,s.lastLeft=r);const l=a.edgeKm<10?a.edgeKm.toFixed(1)+" km":Math.round(a.edgeKm)+" km";l!==s.lastDist&&(s.dist.textContent=l,s.lastDist=l)}}const Yu=new N;function BN(){for(const n in J.landedRunways)if(n!==sa&&J.landedRunways[n])return!1;return!0}function HN(n){let e=null,t=1/0;for(const i of ot){if(i.id===sa)continue;const a=n.x-i.x,s=n.z-i.z,o=a*a+s*s;o<t&&(t=o,e=i)}return e?{runway:e,dist:Math.sqrt(t)}:null}function GN(n){return Yu.set(0,0,-1).applyQuaternion(n.quaternion),Math.atan2(-Yu.x,-Yu.z)}function VN(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}let er=null;function WN(n,e){if(!(I.flightState===He.FLYING)||I.paused||I.tutorial){Yl(e,null),Bu(),Qg(),er=null;return}const i=e.position;if(BN()){const o=HN(i);o?(Yl(e,o.runway),o.dist<Ud.hideDistance?Bu():o.dist<=Ud.showDistance?er!==o.runway.id&&(T3(),er=o.runway.id):o.dist>Ud.rearmDistance&&er===o.runway.id&&(er=null)):Yl(e,null)}else Yl(e,null),Bu();const a=GN(e);let s=!1;for(const o of ot){const r=i.x-o.x,l=i.z-o.z,c=Math.cos(o.heading),d=Math.sin(o.heading),u=r*c-l*d,f=r*d+l*c;if(Math.abs(u)>Jr.corridorHalfWidth||Math.abs(f)>o.length*.5+Jr.approachDepth)continue;const m=i.y-o.elevation;if(m<-2||m>Jr.maxHeight)continue;if(Math.abs(VN(a-(o.activeHeading+Math.PI)))<=Jr.coneTolerance){s=!0;break}}s?C3():Qg()}const qN=[{id:"speed-tape",icon:"speed",range:120,pxPerUnit:4,tickStep:5,majorStep:20},{id:"alt-tape",icon:"height",range:500,pxPerUnit:1.6,tickStep:25,majorStep:100}],cd=[];let N0=!1;const D0=document.getElementById("lift-indicator");let k0=null;function XN(){for(const n of qN){const e=document.getElementById(n.id);if(!e)continue;e.innerHTML="";const t=document.createElement("div");t.className="edge-tape-eyebrow";const i=document.createElement("span");i.className="material-symbols-outlined",i.textContent=n.icon,t.appendChild(i),e.appendChild(t);const a=document.createElement("div");a.className="edge-tape-window",e.appendChild(a);const s=document.createElement("div");s.className="edge-tape-track",s.style.height=n.range*n.pxPerUnit+"px",a.appendChild(s);for(let l=0;l<=n.range;l+=n.tickStep){const c=document.createElement("div"),d=l%n.majorStep===0;if(c.className="edge-tape-tick"+(d?" major":""),c.style.top=(n.range-l)*n.pxPerUnit+"px",d){const u=document.createElement("span");u.className="edge-tape-label",u.textContent=l,c.appendChild(u)}s.appendChild(c)}const o=document.createElement("div");o.className="edge-tape-center-line",a.appendChild(o);const r=document.createElement("div");r.className="edge-tape-current",r.textContent="0",a.appendChild(r),cd.push({cfg:n,win:a,track:s,current:r,lastDisplayed:NaN,winH:0})}N0||(N0=!0,window.addEventListener("resize",()=>{for(const n of cd)n.winH=0}))}function O0(n,e){const t=Math.max(0,Math.min(n.cfg.range,e));let i=n.winH;if(!i){if(i=n.win.clientHeight,i===0)return;n.winH=i}const a=i/2-(n.cfg.range-t)*n.cfg.pxPerUnit;n.track.style.transform=`translateY(${a}px)`;const s=Math.round(e);s!==n.lastDisplayed&&(n.current.textContent=s,n.lastDisplayed=s)}function jN(n){if(!n||cd.length===0)return;const e=Ut(n.position.x,n.position.z),t=n.position.y-Math.max(e,Te.waterLevel);for(const i of cd)i.cfg.id==="speed-tape"?O0(i,I.speed):i.cfg.id==="alt-tape"&&O0(i,t);if(D0){const i=!!I.inThermal;i!==k0&&(D0.classList.toggle("is-active",i),k0=i)}}const Fx=[];(function(){for(const e of[-.95,.95]){const t=new Float32Array(Qi.verts*3),i=new Float32Array(Qi.verts*3);for(let r=0;r<Qi.verts;r++){const l=r/(Qi.verts-1);t[r*3]=e,t[r*3+1]=-.05,t[r*3+2]=.42+l*Qi.maxLen;const c=1-l;i[r*3]=c,i[r*3+1]=c,i[r*3+2]=c}const a=new xt;a.setAttribute("position",new Dt(t,3)),a.setAttribute("color",new Dt(i,3));const s=new vd({vertexColors:!0,transparent:!0,opacity:0,blending:_c,depthWrite:!1}),o=new Cy(a,s);fe.add(o),Fx.push(o)}})();function $N(){const n=It.stallSpeed+3,e=It.maxSpeed*.7,t=Hi.clamp((I.speed-n)/(e-n),0,1),i=Qi.maxLen*(.3+t*.7);for(const a of Fx){const s=a.geometry.attributes.position.array;for(let o=0;o<Qi.verts;o++){const r=o/(Qi.verts-1);s[o*3+2]=.42+r*i}a.geometry.attributes.position.needsUpdate=!0,a.material.opacity=t*.95}}const YN=.9,zx=.55,KN=35,ZN=1.6,Bx=new xd(YN,28);Bx.rotateX(-Math.PI/2);const Hx=new Xn({color:0,transparent:!0,opacity:zx,depthWrite:!1}),Ba=new nt(Bx,Hx);Ba.renderOrder=1;function JN(){const n=Ut(fe.position.x,fe.position.z),e=Math.max(n,Te.waterLevel),t=Math.max(0,fe.position.y-e);Ba.position.x=fe.position.x,Ba.position.z=fe.position.z,Ba.position.y=e+.04;const i=Math.min(1,t/KN),a=Math.min(1,t/ZN);Hx.opacity=zx*a*(1-.85*i);const s=1+i*.4;Ba.scale.set(s,1,s),Ba.visible=fe.position.y>e-.5}aT();VL();u_();r_();To();J.landedRunways[sa]||(J.landedRunways[sa]=!0,J.discoveredRunways[sa]=!0);if(!J.starterGranted){J.obsidian=(J.obsidian|0)+pc.starterDiamonds,J.visitedIslands[J.currentIsland]=!0;for(const n of Object.keys(J.gofiosByIsland))(J.gofiosByIsland[n]|0)>0&&(J.visitedIslands[n]=!0);J.starterGranted=!0,Ht()}bv();os.init();await Promise.all([JT(),XT()]);ot.forEach(n=>{n.elevation=Math.max(Lo(n.x,n.z),Te.waterLevel+fc.minAboveWater)});Et.add(a2());Et.add(o2());Et.add(LN());Et.add(VT());Et.add(u2());Et.add(uI());Et.add(Ba);Et.add(fe);UN();y3();XN();f2();["pointerdown","touchend","click","keydown"].forEach(n=>window.addEventListener(n,p2));window.addEventListener("click",n=>{const e=n.target.closest("button");e&&e.closest("#welcome-overlay, #pause-overlay, #levels-overlay, #crash, .modal-overlay")&&_n("ui-confirm")});const QN=document.getElementById("restart-btn"),dd=document.getElementById("crash");async function Gx(){await rs.onCrashRestart(),Cd()}QN.addEventListener("click",Gx);window.addEventListener("keydown",n=>{n.code==="Space"&&dd.classList.contains("visible")&&(n.preventDefault(),Gx())});function Vx(n){dd.classList.remove("visible"),wo(n,{onClose:()=>dd.classList.add("visible")})}document.getElementById("crash-hangar-btn").addEventListener("click",()=>Vx("hangar"));document.getElementById("crash-shop-btn").addEventListener("click",()=>Vx("shop"));document.getElementById("crash-home-btn").addEventListener("click",()=>{dd.classList.remove("visible"),Yr()});Cd();sN(()=>{HI()||Yr()});requestAnimationFrame(()=>{const n=document.getElementById("loading-screen");n&&(n.classList.add("hidden"),setTimeout(()=>n.remove(),600))});setTimeout(()=>rs.warmup(),5e3);document.addEventListener("visibilitychange",()=>{document.hidden?(uv(),Ax()):hv()});Oi.isNativePlatform()&&Zh(async()=>{const{App:n}=await import("./index-CVH0YhY8.js");return{App:n}},__vite__mapDeps([3,1])).then(({App:n})=>n.addListener("appStateChange",({isActive:e})=>{if(e){hv();return}uv(),Ax()})).catch(n=>console.warn("[lifecycle] appStateChange unavailable",n));let U0=performance.now();function Wx(n){requestAnimationFrame(Wx);const e=Math.min(.05,(n-U0)/1e3);U0=n,sI(e),GI(e),nP(e),aP(e),lP(e),$N(),JN(),WT(n/1e3),h2(e),gI(e,fe),A2(e,fe),zN(fe),WN(e,fe),M3(fe),jN(fe),U3(e);const t=Et.fog!==null;PN(Xt,t),s2(Xt,t),P3(),I_(),I2(n),fn.render(Et,Xt)}requestAnimationFrame(Wx);
