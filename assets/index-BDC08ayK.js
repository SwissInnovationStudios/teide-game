const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-6c8v8erw.js","assets/index-COBN-aVN.js","assets/index-BNXHsM2Y.js","assets/index-CVH0YhY8.js"])))=>i.map(i=>d[i]);
import{C as Li,_ as Eh}from"./index-COBN-aVN.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ye={sky:12964828,water:3043220,shore:13023631,rock:9077368,snow:15395556,paper:16052712,trunk:7032634,ink:2765624,runway:5591628,pineCanopy:4151864,laurelCanopy:3032880,shrubBody:8160594,grassGround:10858597,cropGround:12100700,urbanGround:10392202,bareGround:10325622,houseWall:15590351,houseRoof:10246468},Pe={size:16e3,segments:1200,waterLevel:.1,fogStart:600,fogEnd:3e3,heightmap:{url:"/teide-game/heightmaps/canaries.png",bbox:{latN:29.5,latS:27.4,lonW:-18.4,lonE:-13.3},center:{lat:28.3,lon:-16.55},metersPerUnit:40,elevRange:[0,4e3],elevationExaggeration:2}},Qi="TFN",Kl={sideApron:6,endApron:40,fadeWidth:55,climbGradient:.3,corridorHalfWidth:22,minAboveWater:.6,vegClearSide:4,vegClearEnd:25},ox={sinkDepth:50},s0={riserSharpness:.5,stepHeight:3,slopeGateLo:.4,slopeGateHi:1.1,slopeEps:8,waterGuard:1.5},du={slopeLo:.5,slopeHi:1.3,strength:.9},li={towerHeight:12,towerScale:.75,towerSide:6,towerAlong:.3,terminal:{length:10,depth:3,height:2.2,side:5,along:-.4},colors:{concrete:14342878,glass:3359311,accent:12597547}},ax=Object.freeze({startSpeed:22,minSpeed:2,maxSpeed:52,stallSpeed:7,pitchRate:.7,maxClimbPitch:.35,rollRate:1.8,turnFactor:1,speedFromPitch:22,drag:.7,sinkRate:.5,stallSink:9,stallPitchRate:1.9,stallAuthority:.25}),Ah=Object.freeze({startSpeed:22,minSpeed:2,maxSpeed:38,stallSpeed:9,pitchRate:.7,maxClimbPitch:.35,rollRate:1.8,turnFactor:1,speedFromPitch:12,drag:1.6,sinkRate:.5,stallSink:9,stallPitchRate:1.9,stallAuthority:.25}),Rt={...Ah},lx=Object.freeze({takeoffSpeed:50,liftoffFraction:.65,linearShare:.15,pitchUpAtLiftoff:.16}),Th=Object.freeze({takeoffSpeed:32,liftoffFraction:.85,linearShare:.45,pitchUpAtLiftoff:.16}),Ds={...Th},es={drag:{kind:"stat",stat:"drag",levels:[1.6,1.467,1.333,1.2,1.067,.967,.9,.833,.767,.7],costs:[0,900,1350,2050,3050,4550,6850,10250,15400,23050]},maxSpeed:{kind:"stat",stat:"maxSpeed",levels:[38,39.8,41.6,43.3,45.1,46.7,48,49.3,50.7,52],costs:[0,1200,1800,2700,4050,6100,9100,13650,20500,30750]},speedFromPitch:{kind:"stat",stat:"speedFromPitch",levels:[12,13.3,14.7,16,17.3,18.4,19.3,20.2,21.1,22],costs:[0,750,1150,1700,2550,3800,5700,8550,12800,19200]},stallSpeed:{kind:"stat",stat:"stallSpeed",levels:[9,8.78,8.56,8.33,8.11,7.89,7.67,7.44,7.22,7],costs:[0,1050,1600,2350,3550,5300,7950,11950,17950,26900]},takeoffSpeed:{kind:"stat",stat:"takeoffSpeed",levels:[32,34.2,36.4,38.7,40.9,42.9,44.7,46.4,48.2,50],costs:[0,900,1350,2050,3050,4550,6850,10250,15400,23050]},brake:{kind:"unlock",levels:[!1,!0],costs:[0,3750]},greyBoost:{kind:"multiStat",target:"greyBoost",levels:[3,3.4,3.9,4.3,4.8,5.2,5.7,6.1,6.6,7],costs:[0,750,1150,1700,2550,3800,5700,8550,12800,19200],stats:{tankDuration:[.4,.444,.489,.533,.578,.622,.667,.711,.756,.8],speedBonus:[3,3.4,3.9,4.3,4.8,5.2,5.7,6.1,6.6,7],rechargeTime:[45,42.8,40.6,38.3,36.1,33.9,31.7,29.4,27.2,25]}}},Zl={obsidianUpgradeCosts:[1,2,3,5,8,13,21,34,55,89],starterDiamonds:3,islandDiscoveryDiamonds:2},Ed=[{id:"default",nameKey:"skins.default.name",descKey:"skins.default.desc",paper:Ye.paper,ink:Ye.ink,vent:1712164,costPunkte:0,costObsidian:null},{id:"charcoal",nameKey:"skins.charcoal.name",descKey:"skins.charcoal.desc",paper:3817284,ink:1316891,vent:921875,costPunkte:8e3,costObsidian:15},{id:"gold",nameKey:"skins.gold.name",descKey:"skins.gold.desc",paper:13938487,ink:7033872,vent:3812864,emissive:3812864,emissiveIntensity:.25,costPunkte:null,costObsidian:500},{id:"comingSoon",nameKey:"skins.comingSoon.name",descKey:"skins.comingSoon.desc",teaser:!0}],Rh=[{id:"small",productId:"diamonds_small",diamonds:20,bonusPct:0,badgeKey:null,priceFallback:"€0.99"},{id:"medium",productId:"diamonds_medium",diamonds:100,bonusPct:20,badgeKey:null,priceFallback:"€4.99"},{id:"large",productId:"diamonds_large",diamonds:200,bonusPct:30,badgeKey:"shop.badgePopular",priceFallback:"€9.99"},{id:"xl",productId:"diamonds_xl",diamonds:400,bonusPct:40,badgeKey:"shop.badgeValue",priceFallback:"€19.99"},{id:"mega",productId:"diamonds_mega",diamonds:1e3,bonusPct:60,badgeKey:null,priceFallback:"€49.99"}],An={enabled:!0,useTestAds:{android:!1,ios:!1},android:{appId:"ca-app-pub-3364943525952017~3363192755",interstitial:"ca-app-pub-3364943525952017/8378313345",rewarded:"ca-app-pub-3364943525952017/2162213186"},ios:{appId:"ca-app-pub-3364943525952017~3827422729",interstitial:"ca-app-pub-3364943525952017/1425188881",rewarded:"ca-app-pub-3364943525952017/8269798831"},test:{android:{interstitial:"ca-app-pub-3940256099942544/1033173712",rewarded:"ca-app-pub-3940256099942544/5224354917"},ios:{interstitial:"ca-app-pub-3940256099942544/4411468910",rewarded:"ca-app-pub-3940256099942544/1712485313"}},interstitialEveryNCrashes:3,interstitialMinGapSec:150,crashGraceCount:3,rewardedDiamonds:2,rewardedDailyCap:5},ua={productId:"remove_ads",entitlement:"no_ads",priceFallback:"€1.99"},Jl={force:9,deployTau:.07,maxAngle:1.35},Dl={triggerDist:85,triggerHeight:40,deployTau:.35},$s={brakeForce:14,landingSpeed:2.5,headingTolerance:.45,rollingHeight:1.8,landingBonus:500},hu={showDistance:240,hideDistance:100,rearmDistance:330},ka={corridorHalfWidth:18,approachDepth:50,maxHeight:25,coneTolerance:.5},Eo={cyclePeriod:6.5,smoothTau:.18,brakeWindow:[.05,1.85],boostWindow:[2.55,4.05],gearWindow:[4.7,6.1]},r0={duration:3,startHeight:5e3},fn={maxTiltDeg:30,deadZoneDeg:2.5,smoothing:.18,sensMin:.5,sensMax:2,sensDefault:1},it={runwayId:"TFS",ring1:{forward:85,side:-5,dy:-4},ring2:{forward:175,side:6,dy:-10},ring3:{forward:380,side:14,dy:46},ring4:{forward:500,side:4,dy:-4},thermal:{forward:300,side:14,radius:34,strength:1.7},ringRadius:11,ringClearance:8,ringsEntrySpeed:30,seawardBias:.8,corridorSearchSteps:8,corridorClearHeight:10,ringsOvershoot:70,highOvershoot:90,thermalReach:12,navThreshold:.45,navHold:.18,boostHold:.3,airSpeed:30,resetGrace:.8,endCardMs:8e3,fog:{start:360,end:1500}},o0={toastDuration:1.4,tweenDuration:2},Ol={duration:.7,camPullback:9,camRise:2.5,camTau:.1},gn={columnColor:16777215,columnOpacity:.1,columnTop:95,maxAltitude:95,liftAtCenter:30,particleColor:16777215,particleOpacity:.55,particleSize:1.7,particleDensity:.05,riseSpeed:14},Xt={distance:6.5,height:2.6,lookAhead:3.5,posTau:.12,yawTau:.1,pitchTau:.55,runwayDistance:3,runwayHeight:.4,runwayLookAhead:0},ji={verts:8,maxLen:2.8},mt={grey:{color:10132122,tankDuration:.4,speedBonus:3,accelRate:35,rechargeTime:45},oneShot:{tiers:[{color:0,tankDuration:0,speedBonus:0,accelRate:0},{color:5086950,tankDuration:1.2,speedBonus:14,accelRate:45},{color:15778888,tankDuration:1.6,speedBonus:20,accelRate:55},{color:14702666,tankDuration:2,speedBonus:28,accelRate:70},{color:10905053,tankDuration:2.5,speedBonus:38,accelRate:85}]},refillDuration:1.6,camPushback:2.5,camPushbackTau:.15,exhaust:{offsetX:.36,offsetY:.13,offsetZ:.42,length:1.8,radiusNarrow:.03,radiusWide:.12,intensityTau:.06}},Et={sampleCount:25e5,treeDensity:1,shrubDensity:.85,grassDensity:.7,cropDensity:.6,bareDensity:.85,droughtShrubDensity:.22,snowDensity:.4,wetlandDensity:.5,slopeThreshold:.45,cliffDensity:.85,cliffHeightRange:[.7,3],rockZoneLowMax:2.5,rockZoneHighMin:37.5,laurelMaxAltitude:1500/40,treeScale:.75,urban:{minClusterPixels:3,churchClusterPixels:8,housesPerPixel:.55,housesMin:2,housesMax:30,houseMinSpacing:2.4,pixelJitter:5.5,clusterScaleMin:.9,clusterScaleMax:1.75},grassTints:[[1.05,1.02,.85],[.85,.95,.7],[1,1,1],[.7,.85,.55],[1.1,1.05,.75],[.95,.9,.8]],rockTintsLow:[[1.2,1.18,1.1],[1.05,.95,.78],[.95,.9,.8],[1.1,1.05,.95],[1.15,1,.82]],rockTintsMid:[[.55,.55,.6],[.45,.45,.5],[.7,.68,.62],[.85,.78,.65],[.5,.52,.55],[.65,.6,.55]],rockTintsHigh:[[1.15,.95,.8],[1.05,.9,.75],[.95,.85,.75],[1.2,1,.85],[.85,.65,.55]],roofTints:[[1,1,1],[.88,.86,.88],[.62,.58,.68],[1.1,.95,.85],[.95,.88,.78]]},ht={ring:{majorRadius:2,tubeRadius:.16,hoverHeight:8,opacity:.93,opacityActivated:.3,colorActivated:7235682},symbol:{size:1.4,extrudeDepth:.22,rotRate:.7,colorActivated:10132122},activation:{radius:2},colorsByType:{peak:{ring:15249978,symbol:16049885},city:{ring:15228219,symbol:15590351},landscape:{ring:14044303,symbol:16511448},beach:{ring:3043220,symbol:16245740}},rewardsByType:{peak:{punkte:800,gofios:5},city:{punkte:400,gofios:1},landscape:{punkte:500,gofios:2},beach:{punkte:400,gofios:1}},tierFractions:[0,.04,.19,.46,.69],hoverLabelRadius:80,activationToast:{duration:3}},Ge={INTRO:"INTRO",PRELAUNCH:"PRELAUNCH",TAKEOFF_ROLL:"TAKEOFF_ROLL",FLYING:"FLYING",LANDING_ROLL:"LANDING_ROLL",LANDED:"LANDED",CRASHING:"CRASHING",CRASHED:"CRASHED"},N={speed:Rt.startSpeed,alive:!0,inThermal:!1,brakeAmount:0,gearAmount:0,flightState:Ge.PRELAUNCH,currentRunway:null,takeoffTime:0,postLiftCooldown:0,landedToastTimer:0,cinematicT:0,cinematicFromPos:null,cinematicToPos:null,cinematicFromQuat:null,cinematicToQuat:null,pendingAirportUnlock:null,crashT:0,introT:0,introStartCamPos:null,greyActive:!1,oneShotActive:!1,boostFuelGrey:1,boostFuelOneshot:0,refillT:1,refillStartGrey:1,refillStartOneshot:0,flightPunkte:0,sessionLandings:0,boosterOverride:null,showPerf:!0,showAds:!0,paused:!1,tutorial:!1},J={punkte:0,gofiosByIsland:{tenerife:0,gomera:0,palma:0,gc:0,hierro:0,fuerte:0,lanza:0,graciosa:0},obsidian:0,obsidianLifetimeGranted:0,landings:0,bestFlightPunkte:0,bestSessionLandings:0,upgrades:{drag:0,maxSpeed:0,speedFromPitch:0,stallSpeed:0,takeoffSpeed:0,brake:0,greyBoost:0},obsidianUpgradeCount:{},oneShotTier:0,exploredPOIs:{},discoveredRunways:{},landedRunways:{},ownedSkins:{default:!0},equippedSkin:"default",visitedIslands:{tenerife:!0},starterGranted:!1,adsRemoveOwned:!1,rewardedDay:"",rewardedToday:0,checkpointRunwayId:null,introPlayed:!1,currentIsland:"tenerife",testMode:!1};function Hc(n){J.punkte+=n,N.flightPunkte+=n}function cx(){N.speed=Rt.startSpeed,N.alive=!0,N.inThermal=!1,N.brakeAmount=0,N.gearAmount=0,N.flightState=Ge.PRELAUNCH,N.currentRunway=null,N.takeoffTime=0,N.postLiftCooldown=0,N.landedToastTimer=0,N.cinematicT=0,N.cinematicFromPos=null,N.cinematicToPos=null,N.cinematicFromQuat=null,N.cinematicToQuat=null,N.pendingAirportUnlock=null,N.crashT=0,N.introT=0,N.introStartCamPos=null,N.greyActive=!1,N.oneShotActive=!1}const ne={PEAK:"peak",CITY:"city",LANDSCAPE:"landscape",BEACH:"beach"};function Ch(n,e){const{center:t,metersPerUnit:i}=Pe.heightmap,s=(e-t.lon)*111320*Math.cos(t.lat*Math.PI/180),r=(n-t.lat)*111320;return{x:s/i,z:-r/i}}const bt=[{id:"tenerife",name:"Tenerife",lat:28.3,lon:-16.55,bboxRadius:1100,playable:!0},{id:"gomera",name:"La Gomera",lat:28.1,lon:-17.21,bboxRadius:350,playable:!0},{id:"palma",name:"La Palma",lat:28.71,lon:-17.85,bboxRadius:600,playable:!0},{id:"gc",name:"Gran Canaria",lat:27.93,lon:-15.59,bboxRadius:700,playable:!0},{id:"hierro",name:"El Hierro",lat:27.74,lon:-18.02,bboxRadius:350,playable:!0},{id:"fuerte",name:"Fuerteventura",lat:28.36,lon:-14.05,bboxRadius:1300,playable:!0},{id:"lanza",name:"Lanzarote",lat:29.04,lon:-13.62,bboxRadius:800,playable:!0},{id:"graciosa",name:"La Graciosa",lat:29.24,lon:-13.5,bboxRadius:180,playable:!0}].map(n=>({...n,...Ch(n.lat,n.lon)})),ux=[{id:"teide",name:"Pico del Teide",island:"tenerife",lat:28.2724,lon:-16.6425,ringRadius:10,ringCount:36},{id:"viejo",name:"Pico Viejo",island:"tenerife",lat:28.2632,lon:-16.6534,ringRadius:18,ringCount:48},{id:"taburiente",name:"Caldera de Taburiente",island:"palma",lat:28.708,lon:-17.872,ringRadius:60,ringCount:80},{id:"cumbre-vieja",name:"Cumbre Vieja",island:"palma",lat:28.574,lon:-17.8358,ringRadius:12,ringCount:32},{id:"teneguia",name:"Volcán Teneguía",island:"palma",lat:28.4669,lon:-17.8425,ringRadius:6,ringCount:22},{id:"bandama",name:"Caldera de Bandama",island:"gc",lat:28.0339,lon:-15.4519,ringRadius:10,ringCount:30},{id:"calderon-hondo",name:"Calderón Hondo",island:"fuerte",lat:28.703,lon:-13.939,ringRadius:10,ringCount:30},{id:"arena",name:"Volcán de la Arena",island:"fuerte",lat:28.6997,lon:-13.9594,ringRadius:8,ringCount:24},{id:"timanfaya",name:"Timanfaya",island:"lanza",lat:29,lon:-13.755,ringRadius:40,ringCount:64},{id:"caldera-blanca",name:"Caldera Blanca",island:"lanza",lat:29.0167,lon:-13.7833,ringRadius:15,ringCount:36}].map(n=>({...n,...Ch(n.lat,n.lon)}));function dx(n){let e="tenerife",t=1/0;for(const i of bt){if(!i.playable)continue;const s=n.x-i.x,r=n.z-i.z,o=s*s+r*r;o<t&&(t=o,e=i.id)}return e}const hx=[{id:"tfe-peak-teide",island:"tenerife",type:ne.PEAK,name:"Pico del Teide",lat:28.2724,lon:-16.6425,ele:3715},{id:"tfe-peak-pico-viejo",island:"tenerife",type:ne.PEAK,name:"Pico Viejo",lat:28.2632,lon:-16.6534,ele:3135},{id:"tfe-peak-montana-blanca",island:"tenerife",type:ne.PEAK,name:"Montaña Blanca",lat:28.251,lon:-16.6035,ele:2748},{id:"tfe-peak-guajara",island:"tenerife",type:ne.PEAK,name:"Guajara",lat:28.2207,lon:-16.6157,ele:2718},{id:"tfe-peak-cinchado",island:"tenerife",type:ne.PEAK,name:"Roque Cinchado",lat:28.228,lon:-16.6172,ele:2167},{id:"tfe-peak-tigaiga",island:"tenerife",type:ne.PEAK,name:"Montaña de Tigaiga",lat:28.37,lon:-16.63,ele:1909},{id:"tfe-peak-conde",island:"tenerife",type:ne.PEAK,name:"Roque del Conde",lat:28.1093,lon:-16.7117,ele:1001},{id:"tfe-peak-cruz-carmen",island:"tenerife",type:ne.PEAK,name:"Cruz del Carmen",lat:28.5358,lon:-16.3025,ele:900},{id:"tfe-peak-roques-anaga",island:"tenerife",type:ne.PEAK,name:"Roques de Anaga",lat:28.5775,lon:-16.153,ele:227},{id:"tfe-city-santa-cruz",island:"tenerife",type:ne.CITY,name:"Santa Cruz de Tenerife",lat:28.4636,lon:-16.2518},{id:"tfe-city-la-laguna",island:"tenerife",type:ne.CITY,name:"San Cristóbal de La Laguna",lat:28.4853,lon:-16.3201},{id:"tfe-city-la-orotava",island:"tenerife",type:ne.CITY,name:"La Orotava",lat:28.3902,lon:-16.5234},{id:"tfe-city-puerto-cruz",island:"tenerife",type:ne.CITY,name:"Puerto de la Cruz",lat:28.4144,lon:-16.544},{id:"tfe-city-los-cristianos",island:"tenerife",type:ne.CITY,name:"Los Cristianos",lat:28.0507,lon:-16.71},{id:"tfe-city-las-americas",island:"tenerife",type:ne.CITY,name:"Playa de las Américas",lat:28.054,lon:-16.729},{id:"tfe-city-adeje",island:"tenerife",type:ne.CITY,name:"Adeje",lat:28.1226,lon:-16.7256},{id:"tfe-city-granadilla",island:"tenerife",type:ne.CITY,name:"Granadilla de Abona",lat:28.1182,lon:-16.5781},{id:"tfe-city-icod",island:"tenerife",type:ne.CITY,name:"Icod de los Vinos",lat:28.3729,lon:-16.7106},{id:"tfe-city-garachico",island:"tenerife",type:ne.CITY,name:"Garachico",lat:28.3735,lon:-16.7635},{id:"tfe-city-vilaflor",island:"tenerife",type:ne.CITY,name:"Vilaflor",lat:28.1572,lon:-16.6356},{id:"tfe-city-buenavista",island:"tenerife",type:ne.CITY,name:"Buenavista del Norte",lat:28.3712,lon:-16.8567},{id:"tfe-city-masca",island:"tenerife",type:ne.CITY,name:"Masca",lat:28.3001,lon:-16.8404},{id:"tfe-land-teide-park",island:"tenerife",type:ne.LANDSCAPE,name:"Parque Nacional del Teide",lat:28.2733,lon:-16.6422},{id:"tfe-land-anaga-park",island:"tenerife",type:ne.LANDSCAPE,name:"Parque Rural de Anaga",lat:28.55,lon:-16.2},{id:"tfe-land-teno-park",island:"tenerife",type:ne.LANDSCAPE,name:"Parque Rural de Teno",lat:28.35,lon:-16.85},{id:"tfe-land-barranco-infierno",island:"tenerife",type:ne.LANDSCAPE,name:"Barranco del Infierno",lat:28.1184,lon:-16.7245},{id:"tfe-land-barranco-masca",island:"tenerife",type:ne.LANDSCAPE,name:"Barranco de Masca",lat:28.3,lon:-16.841},{id:"tfe-land-cueva-viento",island:"tenerife",type:ne.LANDSCAPE,name:"Cueva del Viento",lat:28.3754,lon:-16.714},{id:"tfe-land-esperanza",island:"tenerife",type:ne.LANDSCAPE,name:"Bosque de la Esperanza",lat:28.48,lon:-16.41},{id:"tfe-land-pinar-chio",island:"tenerife",type:ne.LANDSCAPE,name:"Pinar de Chío",lat:28.27,lon:-16.71},{id:"tfe-land-los-gigantes",island:"tenerife",type:ne.LANDSCAPE,name:"Acantilados de Los Gigantes",lat:28.248,lon:-16.843},{id:"tfe-land-mirador-garachico",island:"tenerife",type:ne.LANDSCAPE,name:"Mirador de Garachico",lat:28.368,lon:-16.761},{id:"tfe-beach-teresitas",island:"tenerife",type:ne.BEACH,name:"Playa de las Teresitas",lat:28.5096,lon:-16.186},{id:"tfe-beach-vistas",island:"tenerife",type:ne.BEACH,name:"Playa de las Vistas",lat:28.0489,lon:-16.7218},{id:"tfe-beach-arena",island:"tenerife",type:ne.BEACH,name:"Playa de la Arena",lat:28.244,lon:-16.8053},{id:"tfe-beach-medano",island:"tenerife",type:ne.BEACH,name:"Playa El Médano",lat:28.0461,lon:-16.5343},{id:"tfe-beach-benijo",island:"tenerife",type:ne.BEACH,name:"Playa de Benijo",lat:28.5775,lon:-16.1838},{id:"tfe-beach-bollullo",island:"tenerife",type:ne.BEACH,name:"Playa del Bollullo",lat:28.4106,lon:-16.494},{id:"tfe-beach-fanabe",island:"tenerife",type:ne.BEACH,name:"Playa de Fañabé",lat:28.0907,lon:-16.7383},{id:"tfe-beach-jardin",island:"tenerife",type:ne.BEACH,name:"Playa Jardín",lat:28.4189,lon:-16.5586},{id:"tfe-beach-almaciga",island:"tenerife",type:ne.BEACH,name:"Playa de Almáciga",lat:28.5752,lon:-16.1714},{id:"tfe-beach-abama",island:"tenerife",type:ne.BEACH,name:"Playa de Abama",lat:28.1735,lon:-16.7937},{id:"gom-peak-garajonay",island:"gomera",type:ne.PEAK,name:"Alto de Garajonay",lat:28.1163,lon:-17.2476,ele:1487},{id:"gom-city-san-sebastian",island:"gomera",type:ne.CITY,name:"San Sebastián de La Gomera",lat:28.0911,lon:-17.1106},{id:"gom-city-valle-gran-rey",island:"gomera",type:ne.CITY,name:"Valle Gran Rey",lat:28.0922,lon:-17.3358},{id:"gom-city-vallehermoso",island:"gomera",type:ne.CITY,name:"Vallehermoso",lat:28.1797,lon:-17.2658},{id:"gom-city-hermigua",island:"gomera",type:ne.CITY,name:"Hermigua",lat:28.1656,lon:-17.1942},{id:"gom-land-garajonay-park",island:"gomera",type:ne.LANDSCAPE,name:"Parque Nacional de Garajonay",lat:28.1167,lon:-17.25},{id:"gom-land-los-organos",island:"gomera",type:ne.LANDSCAPE,name:"Los Órganos",lat:28.212,lon:-17.282},{id:"gom-land-roque-agando",island:"gomera",type:ne.LANDSCAPE,name:"Roque de Agando",lat:28.1153,lon:-17.2106},{id:"gom-beach-santiago",island:"gomera",type:ne.BEACH,name:"Playa de Santiago",lat:28.0294,lon:-17.1989},{id:"gom-beach-calera",island:"gomera",type:ne.BEACH,name:"Playa de la Calera",lat:28.1023,lon:-17.3401},{id:"gc-peak-nieves",island:"gc",type:ne.PEAK,name:"Pico de las Nieves",lat:27.9617,lon:-15.5803,ele:1949},{id:"gc-city-las-palmas",island:"gc",type:ne.CITY,name:"Las Palmas de Gran Canaria",lat:28.1235,lon:-15.4363},{id:"gc-city-maspalomas",island:"gc",type:ne.CITY,name:"Maspalomas",lat:27.7547,lon:-15.586},{id:"gc-city-teror",island:"gc",type:ne.CITY,name:"Teror",lat:28.0556,lon:-15.547},{id:"gc-city-telde",island:"gc",type:ne.CITY,name:"Telde",lat:27.9974,lon:-15.4178},{id:"gc-land-nublo",island:"gc",type:ne.LANDSCAPE,name:"Roque Nublo",lat:27.965,lon:-15.6175},{id:"gc-land-dunas",island:"gc",type:ne.LANDSCAPE,name:"Dunas de Maspalomas",lat:27.741,lon:-15.5797},{id:"gc-beach-canteras",island:"gc",type:ne.BEACH,name:"Playa de las Canteras",lat:28.1352,lon:-15.4348},{id:"gc-beach-ingles",island:"gc",type:ne.BEACH,name:"Playa del Inglés",lat:27.7597,lon:-15.58},{id:"gc-peak-tejeda",island:"gc",type:ne.PEAK,name:"Cruz de Tejeda",lat:28.0086,lon:-15.6075,ele:1490},{id:"gc-city-tafira",island:"gc",type:ne.CITY,name:"Tafira",lat:28.0769,lon:-15.4569},{id:"gc-city-san-mateo",island:"gc",type:ne.CITY,name:"San Mateo",lat:28.0205,lon:-15.5358},{id:"gc-city-mogan",island:"gc",type:ne.CITY,name:"Puerto de Mogán",lat:27.8158,lon:-15.7625},{id:"gc-land-bandama",island:"gc",type:ne.LANDSCAPE,name:"Caldera de Bandama",lat:28.0339,lon:-15.4519},{id:"gc-land-bentayga",island:"gc",type:ne.LANDSCAPE,name:"Roque Bentayga",lat:27.9697,lon:-15.6519},{id:"gc-land-andenes",island:"gc",type:ne.LANDSCAPE,name:"Andén Verde",lat:28.0769,lon:-15.7833},{id:"gc-beach-amadores",island:"gc",type:ne.BEACH,name:"Playa de Amadores",lat:27.7866,lon:-15.7264},{id:"gc-beach-tauro",island:"gc",type:ne.BEACH,name:"Playa de Tauro",lat:27.7831,lon:-15.7331},{id:"palma-peak-muchachos",island:"palma",type:ne.PEAK,name:"Roque de los Muchachos",lat:28.7544,lon:-17.8851,ele:2426},{id:"palma-city-santa-cruz",island:"palma",type:ne.CITY,name:"Santa Cruz de La Palma",lat:28.6835,lon:-17.7642},{id:"palma-city-llanos",island:"palma",type:ne.CITY,name:"Los Llanos de Aridane",lat:28.6585,lon:-17.9181},{id:"palma-land-taburiente",island:"palma",type:ne.LANDSCAPE,name:"Caldera de Taburiente",lat:28.708,lon:-17.872},{id:"palma-land-cumbre-vieja",island:"palma",type:ne.LANDSCAPE,name:"Cumbre Vieja",lat:28.574,lon:-17.8358},{id:"palma-beach-nogales",island:"palma",type:ne.BEACH,name:"Playa de Nogales",lat:28.7548,lon:-17.7616},{id:"palma-beach-puerto-naos",island:"palma",type:ne.BEACH,name:"Playa de Puerto Naos",lat:28.5828,lon:-17.9128},{id:"palma-peak-bejenado",island:"palma",type:ne.PEAK,name:"Pico Bejenado",lat:28.7036,lon:-17.8839,ele:1854},{id:"palma-peak-birigoyo",island:"palma",type:ne.PEAK,name:"Pico Birigoyo",lat:28.6483,lon:-17.8492,ele:1808},{id:"palma-city-tazacorte",island:"palma",type:ne.CITY,name:"Tazacorte",lat:28.6394,lon:-17.9333},{id:"palma-city-fuencaliente",island:"palma",type:ne.CITY,name:"Fuencaliente",lat:28.4889,lon:-17.8453},{id:"palma-city-mazo",island:"palma",type:ne.CITY,name:"Villa de Mazo",lat:28.6044,lon:-17.7892},{id:"palma-land-salinas",island:"palma",type:ne.LANDSCAPE,name:"Salinas de Fuencaliente",lat:28.4528,lon:-17.8447},{id:"palma-land-volcan-teneguia",island:"palma",type:ne.LANDSCAPE,name:"Volcán Teneguía",lat:28.4669,lon:-17.8425},{id:"palma-beach-charco-verde",island:"palma",type:ne.BEACH,name:"Playa de Charco Verde",lat:28.5483,lon:-17.8975},{id:"hierro-peak-malpaso",island:"hierro",type:ne.PEAK,name:"Pico de Malpaso",lat:27.733,lon:-18.0177,ele:1501},{id:"hierro-city-valverde",island:"hierro",type:ne.CITY,name:"Valverde",lat:27.8055,lon:-17.9183},{id:"hierro-city-frontera",island:"hierro",type:ne.CITY,name:"La Frontera",lat:27.7639,lon:-18.0122},{id:"hierro-land-sabinar",island:"hierro",type:ne.LANDSCAPE,name:"El Sabinar",lat:27.756,lon:-18.1148},{id:"hierro-land-bonanza",island:"hierro",type:ne.LANDSCAPE,name:"Roque de la Bonanza",lat:27.7029,lon:-17.9429},{id:"hierro-beach-charco-azul",island:"hierro",type:ne.BEACH,name:"Charco Azul",lat:27.8061,lon:-18.1057},{id:"hierro-city-tamaduste",island:"hierro",type:ne.CITY,name:"Tamaduste",lat:27.8125,lon:-17.9136},{id:"hierro-city-el-pinar",island:"hierro",type:ne.CITY,name:"El Pinar",lat:27.7053,lon:-17.9928},{id:"hierro-land-roques-salmor",island:"hierro",type:ne.LANDSCAPE,name:"Roques de Salmor",lat:27.8294,lon:-17.9694},{id:"hierro-land-pozo-salud",island:"hierro",type:ne.LANDSCAPE,name:"Pozo de la Salud",lat:27.7681,lon:-18.1219},{id:"hierro-land-punta-dehesa",island:"hierro",type:ne.LANDSCAPE,name:"Punta de la Dehesa",lat:27.7842,lon:-18.1633},{id:"hierro-beach-mar-calmas",island:"hierro",type:ne.BEACH,name:"Mar de las Calmas",lat:27.6961,lon:-18.0356},{id:"fuerte-peak-zarza",island:"fuerte",type:ne.PEAK,name:"Pico de la Zarza",lat:28.0828,lon:-14.3053,ele:807},{id:"fuerte-city-puerto-rosario",island:"fuerte",type:ne.CITY,name:"Puerto del Rosario",lat:28.5011,lon:-13.8627},{id:"fuerte-city-corralejo",island:"fuerte",type:ne.CITY,name:"Corralejo",lat:28.7361,lon:-13.87},{id:"fuerte-city-morro-jable",island:"fuerte",type:ne.CITY,name:"Morro Jable",lat:28.054,lon:-14.349},{id:"fuerte-land-corralejo-park",island:"fuerte",type:ne.LANDSCAPE,name:"Parque Natural de Corralejo",lat:28.717,lon:-13.834},{id:"fuerte-land-calderon",island:"fuerte",type:ne.LANDSCAPE,name:"Calderón Hondo",lat:28.703,lon:-13.939},{id:"fuerte-beach-sotavento",island:"fuerte",type:ne.BEACH,name:"Playa de Sotavento",lat:28.1973,lon:-14.218},{id:"fuerte-beach-cofete",island:"fuerte",type:ne.BEACH,name:"Playa de Cofete",lat:28.0945,lon:-14.382},{id:"fuerte-city-betancuria",island:"fuerte",type:ne.CITY,name:"Betancuria",lat:28.4244,lon:-14.0589},{id:"fuerte-city-antigua",island:"fuerte",type:ne.CITY,name:"Antigua",lat:28.4181,lon:-14.0114},{id:"fuerte-city-pajara",island:"fuerte",type:ne.CITY,name:"Pájara",lat:28.3531,lon:-14.1006},{id:"fuerte-city-caleta-fuste",island:"fuerte",type:ne.CITY,name:"Caleta de Fuste",lat:28.395,lon:-13.8633},{id:"fuerte-city-tuineje",island:"fuerte",type:ne.CITY,name:"Tuineje",lat:28.3219,lon:-14.0481},{id:"fuerte-land-isla-lobos",island:"fuerte",type:ne.LANDSCAPE,name:"Isla de Lobos",lat:28.7556,lon:-13.8225},{id:"fuerte-land-arena-volcano",island:"fuerte",type:ne.LANDSCAPE,name:"Volcán de la Arena",lat:28.6997,lon:-13.9594},{id:"fuerte-beach-garcey",island:"fuerte",type:ne.BEACH,name:"Playa de Garcey",lat:28.3344,lon:-14.2197},{id:"lanza-peak-penas-chache",island:"lanza",type:ne.PEAK,name:"Peñas del Chache",lat:29.1108,lon:-13.5468,ele:671},{id:"lanza-city-arrecife",island:"lanza",type:ne.CITY,name:"Arrecife",lat:28.9637,lon:-13.5477},{id:"lanza-city-costa-teguise",island:"lanza",type:ne.CITY,name:"Costa Teguise",lat:28.987,lon:-13.5},{id:"lanza-city-playa-blanca",island:"lanza",type:ne.CITY,name:"Playa Blanca",lat:28.8597,lon:-13.8253},{id:"lanza-land-timanfaya",island:"lanza",type:ne.LANDSCAPE,name:"Parque Nacional de Timanfaya",lat:29,lon:-13.755},{id:"lanza-land-cueva-verdes",island:"lanza",type:ne.LANDSCAPE,name:"Cueva de los Verdes",lat:29.1574,lon:-13.4342},{id:"lanza-land-mirador-rio",island:"lanza",type:ne.LANDSCAPE,name:"Mirador del Río",lat:29.2179,lon:-13.4827},{id:"lanza-beach-papagayo",island:"lanza",type:ne.BEACH,name:"Playa Papagayo",lat:28.835,lon:-13.804},{id:"lanza-beach-famara",island:"lanza",type:ne.BEACH,name:"Playa de Famara",lat:29.13,lon:-13.5538},{id:"lanza-peak-montana-roja",island:"lanza",type:ne.PEAK,name:"Montaña Roja",lat:28.8567,lon:-13.8636,ele:194},{id:"lanza-city-teguise",island:"lanza",type:ne.CITY,name:"Teguise",lat:29.0589,lon:-13.5614},{id:"lanza-city-haria",island:"lanza",type:ne.CITY,name:"Haría",lat:29.1453,lon:-13.4972},{id:"lanza-city-yaiza",island:"lanza",type:ne.CITY,name:"Yaiza",lat:28.9528,lon:-13.7686},{id:"lanza-city-tinajo",island:"lanza",type:ne.CITY,name:"Tinajo",lat:29.0628,lon:-13.675},{id:"lanza-land-jameos",island:"lanza",type:ne.LANDSCAPE,name:"Jameos del Agua",lat:29.1583,lon:-13.4344},{id:"lanza-land-el-golfo",island:"lanza",type:ne.LANDSCAPE,name:"El Golfo",lat:28.9722,lon:-13.8261},{id:"lanza-beach-quemada",island:"lanza",type:ne.BEACH,name:"Playa Quemada",lat:28.9039,lon:-13.7572},{id:"graciosa-peak-agujas",island:"graciosa",type:ne.PEAK,name:"Las Agujas Grandes",lat:29.262,lon:-13.502,ele:266},{id:"graciosa-city-caleta",island:"graciosa",type:ne.CITY,name:"Caleta del Sebo",lat:29.2261,lon:-13.5021},{id:"graciosa-land-amarilla",island:"graciosa",type:ne.LANDSCAPE,name:"Montaña Amarilla",lat:29.2128,lon:-13.539},{id:"graciosa-beach-conchas",island:"graciosa",type:ne.BEACH,name:"Playa de las Conchas",lat:29.27,lon:-13.541},{id:"graciosa-beach-francesa",island:"graciosa",type:ne.BEACH,name:"Playa Francesa",lat:29.215,lon:-13.531},{id:"graciosa-city-pedro-barba",island:"graciosa",type:ne.CITY,name:"Pedro Barba",lat:29.2461,lon:-13.4778},{id:"graciosa-peak-bermeja",island:"graciosa",type:ne.PEAK,name:"Montaña Bermeja",lat:29.2603,lon:-13.5183,ele:157},{id:"graciosa-beach-lambra",island:"graciosa",type:ne.BEACH,name:"Playa Lambra",lat:29.2725,lon:-13.505}],kn=hx.map(n=>({...n,...Ch(n.lat,n.lon)}));(function(){const e=2*ht.ring.majorRadius+1.2,t=e*e,i=30;for(let s=0;s<i;s++){let r=!1;for(let o=0;o<kn.length;o++)for(let a=o+1;a<kn.length;a++){const l=kn[o],c=kn[a],u=l.x-c.x,d=l.z-c.z,f=u*u+d*d;if(f>=t)continue;if(f<1e-4){l.x+=.13,l.z+=.07,c.x-=.13,c.z-=.07,r=!0;continue}const m=Math.sqrt(f),g=(e-m)*.5,y=u/m,p=d/m;l.x+=y*g,l.z+=p*g,c.x-=y*g,c.z-=p*g,r=!0}if(!r)break}})();const fu=kn.reduce((n,e)=>((n[e.island]??=[]).push(e),n),{}),fx=kn.reduce((n,e)=>n+(ht.rewardsByType[e.type]?.gofios|0),0),Qo=ht.tierFractions.map(n=>Math.round(n*fx));function px(n){return n in Ah?Rt:n in Th?Ds:null}const mx={greyBoost:mt.grey};function xo(){const n=J.testMode;Object.assign(Rt,n?ax:Ah),Object.assign(Ds,n?lx:Th);for(const[e,t]of Object.entries(es)){const i=n?Number.POSITIVE_INFINITY:J.upgrades?.[e]|0;if(t.kind==="stat"){const s=Math.max(0,Math.min(t.levels.length-1,i)),r=px(t.stat);r&&(r[t.stat]=t.levels[s])}else if(t.kind==="multiStat"){const s=mx[t.target];if(!s)continue;const r=Object.keys(t.stats),o=t.stats[r[0]].length-1,a=Math.max(0,Math.min(o,i));for(const l of r)s[l]=t.stats[l][a]}}}function Ys(){return J.testMode?N.boosterOverride!=null?N.boosterOverride:4:J.oneShotTier|0}function Lh(){let n=0;for(const e of Object.values(J.gofiosByIsland))n+=e|0;return n}function a0(n){let e=0;for(let t=Qo.length-1;t>=0;t--)if(n>=Qo[t]){e=t;break}return e}function Gc(){return J.testMode?!0:!!J.upgrades?.brake}function gx(){const n=a0(Lh());n>(J.oneShotTier|0)&&(J.oneShotTier=n)}const Ph="teide-save",kl=5,l0=["punkte","gofiosByIsland","obsidian","obsidianLifetimeGranted","landings","bestFlightPunkte","bestSessionLandings","upgrades","obsidianUpgradeCount","oneShotTier","exploredPOIs","discoveredRunways","landedRunways","ownedSkins","equippedSkin","visitedIslands","starterGranted","adsRemoveOwned","rewardedDay","rewardedToday","checkpointRunwayId","currentIsland","testMode"];function vx(){const n={version:kl};for(const e of l0)n[e]=J[e];return n}function yx(n){for(const e of l0){const t=n[e];if(t===void 0)continue;const i=J[e];i&&typeof i=="object"&&!Array.isArray(i)&&t&&typeof t=="object"&&!Array.isArray(t)?Object.assign(i,t):J[e]=t}}function xx(n){if(n.version===1){const e={};if(n.exploredPOIs)for(const t of kn){if(!n.exploredPOIs[t.id])continue;const i=ht.rewardsByType[t.type];i&&(e[t.island]=(e[t.island]|0)+i.gofios)}n.gofiosByIsland=e,n.version=2}if(n.version===2&&(n.discoveredRunways={},n.landedRunways={},n.checkpointRunwayId&&(n.discoveredRunways[n.checkpointRunwayId]=!0,n.landedRunways[n.checkpointRunwayId]=!0),n.version=3),n.version===3){const e=n.oneShotTierByIsland||{};let t=0;for(const i of Object.values(e))t=Math.max(t,i|0);n.oneShotTier=t,delete n.oneShotTierByIsland,n.version=4}if(n.version===4){const e=n.upgrades;if(e)for(const t of["drag","maxSpeed","speedFromPitch","stallSpeed","takeoffSpeed","greyBoost"])typeof e[t]=="number"&&(e[t]=Math.round((e[t]|0)/4*9));n.version=5}return n}function _x(){try{const n=localStorage.getItem(Ph);if(!n)return!1;let e=JSON.parse(n);return!e||typeof e!="object"?!1:typeof e.version!="number"?(console.warn("[save] discarding save: missing version"),!1):e.version>kl?(console.warn(`[save] discarding save: future version ${e.version} > ${kl}`),!1):(e=xx(e),e.version!==kl?(console.warn(`[save] discarding save: migration left version at ${e.version}`),!1):(yx(e),!0))}catch(n){return console.warn("[save] load failed:",n),!1}}function bx(){try{localStorage.setItem(Ph,JSON.stringify(vx()))}catch(n){console.warn("[save] write failed:",n)}}let pu=!1;function Ut(){pu||(pu=!0,queueMicrotask(()=>{pu=!1,bx()}))}function Sx(){try{localStorage.removeItem(Ph)}catch{}}const Vn={pitch:0,roll:0,brake:!1,boost:!1,isInputActive:!1,activeInputType:"none"};let Ql=!1;function c0(){Ql=!0}function Mx(){return Ql?(Ql=!1,!0):!1}function Ih(){Ql=!1}let ec=!1;function u0(){ec=!0}function wx(){return ec?(ec=!1,!0):!1}function Vc(){ec=!1}const _t={up:!1,down:!1,left:!1,right:!1,brake:!1,boost:!1,oneShot:!1};let wi=!1;function Ex(){wi=!1}function Ax(){return wi}function Tx(){const n=(_t.down?1:0)-(_t.up?1:0),e=(_t.right?1:0)-(_t.left?1:0),t=_t.up||_t.down||_t.left||_t.right,i=_t.brake||_t.boost||_t.oneShot;return{pitch:n,roll:e,brake:_t.brake,boost:_t.boost,isActive:t||i}}function d0(n,e){switch(n.key){case"ArrowUp":case"w":case"W":_t.up=e,wi=!0;break;case"ArrowDown":case"s":case"S":_t.down=e,wi=!0;break;case"ArrowLeft":case"a":case"A":_t.left=e,wi=!0;break;case"ArrowRight":case"d":case"D":_t.right=e,wi=!0;break;case" ":case"Spacebar":_t.brake=e&&Gc(),wi=!0,n.preventDefault();break;case"Shift":e&&!_t.boost&&u0(),_t.boost=e,wi=!0;break;case"f":case"F":e&&!_t.oneShot&&c0(),_t.oneShot=e,wi=!0;break;case"t":case"T":e&&(J.testMode=!J.testMode,xo(),Ut());break;case"b":case"B":if(e&&J.testMode){const t=mt.oneShot.tiers.length-1,i=N.boosterOverride!=null?N.boosterOverride:4;N.boosterOverride=(i+1)%(t+1)}break}}window.addEventListener("keydown",n=>d0(n,!0));window.addEventListener("keyup",n=>d0(n,!1));function nr(){return typeof window>"u"?!1:"ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}nr()&&document.body.classList.add("touch-mode");const Ts=document.getElementById("touch-joystick-zone"),Ai=document.getElementById("touch-joystick"),so=Ai?.querySelector(".touch-joystick-thumb"),ts=document.getElementById("touch-brake"),ro=document.getElementById("touch-boost"),Qn=document.getElementById("touch-oneshot"),Rx=document.getElementById("touch-boost-corner"),Rf=document.getElementById("touch-actions"),Cf=document.getElementById("map-btn"),di=document.getElementById("map-card"),ns=document.getElementById("map-card-backdrop"),Ua=60,mu=8;let da=null,Ad=0,Td=0,Rd=!0;function tc(n){Rd=!!n,Rd||Nh()}const Kt={pitch:0,roll:0,brake:!1,boost:!1,isActive:!1};let ir=!1;function Cx(){return ir}function Lx(){ir=!1}function Px(){return Kt}const Ix=["welcome-overlay","pause-overlay","levels-overlay","crash","hangar-overlay","shop-overlay","settings-overlay","obsidian-confirm","reset-confirm","imprint-overlay","licenses-overlay"];function Nx(){for(const n of Ix){const e=document.getElementById(n);if(e&&e.classList.contains("visible"))return!0}return!1}function Nh(){da=null,Kt.pitch=0,Kt.roll=0,Kt.isActive=!1,Ai&&(Ai.hidden=!0,Ai.setAttribute("aria-hidden","true")),so&&(so.style.transform="translate(0px, 0px)")}function Dx(n){if(Rd&&n.pointerType==="touch"&&da===null&&!Nx()){da=n.pointerId,Ad=n.clientX,Td=n.clientY,Ai&&(Ai.style.left=Ad+"px",Ai.style.top=Td+"px",Ai.hidden=!1,Ai.setAttribute("aria-hidden","false")),so&&(so.style.transform="translate(0px, 0px)"),Kt.isActive=!0,ir=!0;try{Ts.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}}function Ox(n){if(n.pointerId!==da)return;let e=n.clientX-Ad,t=n.clientY-Td;const i=Math.hypot(e,t);let s=e,r=t;if(i>Ua&&(s=e*Ua/i,r=t*Ua/i),so&&(so.style.transform=`translate(${s.toFixed(1)}px, ${r.toFixed(1)}px)`),i<=mu)Kt.pitch=0,Kt.roll=0;else{const o=Math.min(1,(i-mu)/(Ua-mu));Kt.roll=e/i*o,Kt.pitch=t/i*o}ir=!0}function Lf(n){if(n.pointerId===da){try{Ts.releasePointerCapture?.(n.pointerId)}catch{}Nh()}}Ts&&(Ts.addEventListener("pointerdown",Dx),Ts.addEventListener("pointermove",Ox),Ts.addEventListener("pointerup",Lf),Ts.addEventListener("pointercancel",Lf));let ha=null;const fa=new Set;function Ni(n,e){n&&n.classList.toggle("is-pressed",!!e)}function kx(n){if(!Gc()){n.preventDefault();return}ha=n.pointerId,Kt.brake=!0,ir=!0,Ni(ts,!0);try{ts.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}function Ux(n){n.pointerId===ha&&(ha=null,Kt.brake=!1,Ni(ts,!1))}function h0(n){const e=fa.size===0;fa.add(n.pointerId),Kt.boost=!0,ir=!0,e&&u0(),Ni(ro,!0);try{n.currentTarget.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}function f0(n){fa.delete(n.pointerId)&&fa.size===0&&(Kt.boost=!1,Ni(ro,!1))}const Fx=140;let Fa=null;function zx(n){c0(),ir=!0,Ni(Qn,!0),Fa&&clearTimeout(Fa),Fa=setTimeout(()=>{Ni(Qn,!1),Fa=null},Fx),n.preventDefault()}function Dh(n,e,t){n&&(n.addEventListener("pointerdown",e),n.addEventListener("pointerup",t),n.addEventListener("pointercancel",t),n.addEventListener("pointerleave",t),n.addEventListener("contextmenu",i=>i.preventDefault()))}Dh(ts,kx,Ux);Dh(ro,h0,f0);Dh(Rx,h0,f0);Qn&&(Qn.addEventListener("pointerdown",zx),Qn.addEventListener("contextmenu",n=>n.preventDefault()));const Bx=1e3;let Pf=null,If=-1,Nf=-1,Df=-1,Ao=0,nc=!0,za=!1;function gu(n){n!==!nc&&(nc=!n,Qn&&(Qn.hidden=!n),n&&!za?(Rf?.classList.add("has-oneshot"),za=!0):!n&&za&&(Rf?.classList.remove("has-oneshot"),za=!1))}function Hx(){const n=!Gc();n!==Pf&&(ts&&ts.classList.toggle("is-locked",n),n&&Kt.brake&&(Kt.brake=!1,ha=null,Ni(ts,!1)),Pf=n);const e=Ys();if(e!==If){if(Qn&&e>0){const i=mt.oneShot.tiers[e]?.color??mt.oneShot.tiers[0].color,s=i>>16&255,r=i>>8&255,o=i&255;Qn.style.setProperty("--tier-color",`rgba(${s}, ${r}, ${o}, 0.5)`)}If=e}if(e===0)gu(!1),Ao=0;else{const i=N.boostFuelOneshot;Math.abs(i-Nf)>.005&&(Qn&&Qn.style.setProperty("--fuel",i.toFixed(3)),Nf=i),i<=.001?(Ao===0&&(Ao=performance.now()),!nc&&performance.now()-Ao>=Bx&&gu(!1)):(Ao=0,nc&&gu(!0))}const t=N.boostFuelGrey;Math.abs(t-Df)>.005&&(ro&&ro.style.setProperty("--fuel",t.toFixed(3)),Df=t)}function p0(){Nh(),ha=null,fa.clear(),Kt.brake=!1,Kt.boost=!1,Ni(ts,!1),Ni(ro,!1)}document.addEventListener("visibilitychange",()=>{document.hidden&&p0()});window.addEventListener("blur",p0);let m0=!1;function Gx(){!di||di.classList.contains("is-open")||(m0=N.paused,N.paused=!0,di.classList.add("is-open"),di.setAttribute("aria-modal","true"),ns&&(ns.classList.add("is-open"),ns.setAttribute("aria-hidden","false")))}function Oh(){!di||!di.classList.contains("is-open")||(di.classList.remove("is-open"),di.removeAttribute("aria-modal"),ns&&(ns.classList.remove("is-open"),ns.setAttribute("aria-hidden","true")),m0||(N.paused=!1))}Cf&&Cf.addEventListener("click",()=>{di?.classList.contains("is-open")?Oh():Gx()});ns&&ns.addEventListener("click",Oh);document.addEventListener("keydown",n=>{n.key==="Escape"&&di?.classList.contains("is-open")&&(Oh(),n.stopImmediatePropagation())});const Vx=5,Wx=3e3,qx="1505",Of=document.getElementById("imprint-easter-target"),ti=document.getElementById("testpin-overlay"),Fn=document.getElementById("testpin-input"),oo=document.getElementById("testpin-error"),kf=document.getElementById("testpin-ok"),Uf=document.getElementById("testpin-cancel");function kh(n){J.testMode=n,xo(),Ut()}function Xx(){if(!ti){kh(!0);return}oo&&oo.classList.remove("show"),Fn&&(Fn.value=""),ti.classList.add("visible"),ti.setAttribute("aria-hidden","false"),Fn&&setTimeout(()=>Fn.focus(),30)}function Wc(){ti&&(ti.classList.remove("visible"),ti.setAttribute("aria-hidden","true"),Fn&&(Fn.value=""),oo&&oo.classList.remove("show"))}function g0(){Fn&&(Fn.value.trim()===qx?(Wc(),kh(!0)):(oo&&oo.classList.add("show"),Fn.value="",Fn.focus()))}if(Of){let n=0,e=null;Of.addEventListener("click",()=>{n+=1,clearTimeout(e),e=setTimeout(()=>{n=0},Wx),n>=Vx&&(n=0,clearTimeout(e),J.testMode?kh(!1):Xx())})}kf&&kf.addEventListener("click",g0);Uf&&Uf.addEventListener("click",Wc);ti&&ti.addEventListener("click",n=>{n.target===ti&&Wc()});Fn&&Fn.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),g0())});document.addEventListener("keydown",n=>{n.key==="Escape"&&(!ti||!ti.classList.contains("visible")||(n.stopImmediatePropagation(),Wc()))},!0);const jx=`The MIT License

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
`,$x=`MIT License

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
`,Yx=`Copyright 2006 The Inconsolata Project Authors (https://github.com/cyrealtype/Inconsolata)

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
`,Kx=`Material Symbols
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
   limitations under the License.`,Zx=[{name:"three.js",license:"MIT License",text:jx},{name:"Capacitor",license:"MIT License",text:$x},{name:"Inconsolata",license:"SIL Open Font License 1.1",text:Yx},{name:"Material Symbols",license:"Apache License 2.0",text:Kx}],Ff=document.getElementById("licenses-list");if(Ff)for(const n of Zx){const e=document.createElement("section");e.className="license-item";const t=document.createElement("div");t.className="license-head";const i=document.createElement("span");i.className="license-name",i.textContent=n.name;const s=document.createElement("span");s.className="license-tag",s.textContent=n.license,t.append(i,s);const r=document.createElement("details");r.className="license-details";const o=document.createElement("summary");o.textContent="Lizenztext anzeigen";const a=document.createElement("pre");a.className="license-text",a.textContent=n.text.trim(),r.append(o,a),e.append(t,r),Ff.append(e)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uh="160",Jx=0,zf=1,Qx=2,v0=1,e_=2,Mi=3,cs=0,yn=1,$t=2,is=0,qr=1,ic=2,Bf=3,Hf=4,t_=5,Rs=100,n_=101,i_=102,Gf=103,Vf=104,s_=200,r_=201,o_=202,a_=203,Cd=204,Ld=205,l_=206,c_=207,u_=208,d_=209,h_=210,f_=211,p_=212,m_=213,g_=214,v_=0,y_=1,x_=2,sc=3,__=4,b_=5,S_=6,M_=7,Fh=0,w_=1,E_=2,ss=0,A_=1,T_=2,R_=3,C_=4,L_=5,P_=6,y0=300,ao=301,lo=302,Pd=303,Id=304,qc=306,Nd=1e3,Yn=1001,Dd=1002,dn=1003,Wf=1004,vu=1005,Dn=1006,I_=1007,pa=1008,rs=1009,N_=1010,D_=1011,zh=1012,x0=1013,$i=1014,Yi=1015,ma=1016,_0=1017,b0=1018,Bs=1020,O_=1021,Kn=1023,k_=1024,U_=1025,Hs=1026,co=1027,F_=1028,S0=1029,z_=1030,M0=1031,w0=1033,yu=33776,xu=33777,_u=33778,bu=33779,qf=35840,Xf=35841,jf=35842,$f=35843,E0=36196,Yf=37492,Kf=37496,Zf=37808,Jf=37809,Qf=37810,ep=37811,tp=37812,np=37813,ip=37814,sp=37815,rp=37816,op=37817,ap=37818,lp=37819,cp=37820,up=37821,Su=36492,dp=36494,hp=36495,B_=36283,fp=36284,pp=36285,mp=36286,A0=3e3,Gs=3001,H_=3200,G_=3201,T0=0,V_=1,Un="",Nt="srgb",Di="srgb-linear",Bh="display-p3",Xc="display-p3-linear",rc="linear",dt="srgb",oc="rec709",ac="p3",hr=7680,gp=519,W_=512,q_=513,X_=514,R0=515,j_=516,$_=517,Y_=518,K_=519,vp=35044,yp="300 es",Od=1035,Ti=2e3,lc=2001;class _o{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xp=1234567;const Xr=Math.PI/180,ga=180/Math.PI;function sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function jt(n,e,t){return Math.max(e,Math.min(t,n))}function Hh(n,e){return(n%e+e)%e}function Z_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function J_(n,e,t){return n!==e?(t-n)/(e-n):0}function ea(n,e,t){return(1-t)*n+t*e}function Q_(n,e,t,i){return ea(n,e,1-Math.exp(-t*i))}function eb(n,e=1){return e-Math.abs(Hh(n,e*2)-e)}function tb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function nb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ib(n,e){return n+Math.floor(Math.random()*(e-n+1))}function sb(n,e){return n+Math.random()*(e-n)}function rb(n){return n*(.5-Math.random())}function ob(n){n!==void 0&&(xp=n);let e=xp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ab(n){return n*Xr}function lb(n){return n*ga}function kd(n){return(n&n-1)===0&&n!==0}function cb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function cc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ub(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ir(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Oi={DEG2RAD:Xr,RAD2DEG:ga,generateUUID:sr,clamp:jt,euclideanModulo:Hh,mapLinear:Z_,inverseLerp:J_,lerp:ea,damp:Q_,pingpong:eb,smoothstep:tb,smootherstep:nb,randInt:ib,randFloat:sb,randFloatSpread:rb,seededRandom:ob,degToRad:ab,radToDeg:lb,isPowerOfTwo:kd,ceilPowerOfTwo:cb,floorPowerOfTwo:cc,setQuaternionFromProperEuler:ub,normalize:an,denormalize:Ir};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,s,r,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],g=i[8],y=s[0],p=s[3],h=s[6],_=s[1],v=s[4],b=s[7],R=s[2],E=s[5],A=s[8];return r[0]=o*y+a*_+l*R,r[3]=o*p+a*v+l*E,r[6]=o*h+a*b+l*A,r[1]=c*y+u*_+d*R,r[4]=c*p+u*v+d*E,r[7]=c*h+u*b+d*A,r[2]=f*y+m*_+g*R,r[5]=f*p+m*v+g*E,r[8]=f*h+m*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*r,m=c*r-o*l,g=t*d+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(s*c-u*i)*y,e[2]=(a*i-s*o)*y,e[3]=f*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=m*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Mu.makeScale(e,t)),this}rotate(e){return this.premultiply(Mu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mu=new He;function C0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function uc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function db(){const n=uc("canvas");return n.style.display="block",n}const _p={};function ta(n){n in _p||(_p[n]=!0,console.warn(n))}const bp=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sp=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ba={[Di]:{transfer:rc,primaries:oc,toReference:n=>n,fromReference:n=>n},[Nt]:{transfer:dt,primaries:oc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Xc]:{transfer:rc,primaries:ac,toReference:n=>n.applyMatrix3(Sp),fromReference:n=>n.applyMatrix3(bp)},[Bh]:{transfer:dt,primaries:ac,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Sp),fromReference:n=>n.applyMatrix3(bp).convertLinearToSRGB()}},hb=new Set([Di,Xc]),st={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!hb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ba[e].toReference,s=Ba[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ba[n].primaries},getTransfer:function(n){return n===Un?rc:Ba[n].transfer}};function jr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fr;class L0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fr===void 0&&(fr=uc("canvas")),fr.width=e.width,fr.height=e.height;const i=fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(jr(t[i]/255)*255):t[i]=jr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fb=0;class P0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=sr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Eu(s[o].image)):r.push(Eu(s[o]))}else r=Eu(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Eu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?L0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pb=0;class Rn extends _o{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,i=Yn,s=Yn,r=Dn,o=pa,a=Kn,l=rs,c=Rn.DEFAULT_ANISOTROPY,u=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=sr(),this.name="",this.source=new P0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Gs?Nt:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nd:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nd:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?Gs:A0}set encoding(e){ta("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gs?Nt:Un}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=y0;Rn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,i=0,s=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],y=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,b=(m+1)/2,R=(h+1)/2,E=(u+f)/4,A=(d+y)/4,U=(g+p)/4;return v>b&&v>R?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=E/i,r=A/i):b>R?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=U/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=A/r,s=U/r),this.set(i,s,r,t),this}let _=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(d-y)/_,this.z=(f-u)/_,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mb extends _o{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(ta("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Gs?Nt:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new P0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ks extends mb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class I0 extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gb extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class At{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==f||c!==m||u!==g){let p=1-a;const h=l*f+c*m+u*g+d*y,_=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const R=Math.sqrt(v),E=Math.atan2(R,h*_);p=Math.sin(p*E)/R,a=Math.sin(a*E)/R}const b=a*_;if(l=l*p+f*b,c=c*p+m*b,u=u*p+g*b,d=d*p+y*b,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*m-c*f,e[t+1]=l*g+u*f+c*d-a*m,e[t+2]=c*g+u*m+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Au=new I,Mp=new At;class rr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ha.copy(i.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),Ga.subVectors(this.max,To),pr.subVectors(e.a,To),mr.subVectors(e.b,To),gr.subVectors(e.c,To),Ui.subVectors(mr,pr),Fi.subVectors(gr,mr),ys.subVectors(pr,gr);let t=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-ys.z,ys.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,ys.z,0,-ys.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-ys.y,ys.x,0];return!Tu(t,pr,mr,gr,Ga)||(t=[1,0,0,0,1,0,0,0,1],!Tu(t,pr,mr,gr,Ga))?!1:(Va.crossVectors(Ui,Fi),t=[Va.x,Va.y,Va.z],Tu(t,pr,mr,gr,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new I,new I,new I,new I,new I,new I,new I,new I],Wn=new I,Ha=new rr,pr=new I,mr=new I,gr=new I,Ui=new I,Fi=new I,ys=new I,To=new I,Ga=new I,Va=new I,xs=new I;function Tu(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){xs.fromArray(n,r);const a=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=e.dot(xs),c=t.dot(xs),u=i.dot(xs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const vb=new rr,Ro=new I,Ru=new I;class ps{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vb.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const t=Ro.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ro,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ru.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Ru)),this.expandByPoint(Ro.copy(e.center).sub(Ru))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new I,Cu=new I,Wa=new I,zi=new I,Lu=new I,qa=new I,Pu=new I;class Gh{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Cu.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Cu);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Wa),a=zi.dot(this.direction),l=-zi.dot(Wa),c=zi.lengthSq(),u=Math.abs(1-o*o);let d,f,m,g;if(u>0)if(d=o*l-a,f=o*a-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const y=1/u;d*=y,f*=y,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Cu).addScaledVector(Wa,f),m}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),s=yi.dot(yi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,s,r){Lu.subVectors(t,e),qa.subVectors(i,e),Pu.crossVectors(Lu,qa);let o=this.direction.dot(Pu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(qa.crossVectors(zi,qa));if(l<0)return null;const c=a*this.direction.dot(Lu.cross(zi));if(c<0||l+c>o)return null;const u=-a*zi.dot(Pu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,i,s,r,o,a,l,c,u,d,f,m,g,y,p){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,f,m,g,y,p)}set(e,t,i,s,r,o,a,l,c,u,d,f,m,g,y,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=y,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/vr.setFromMatrixColumn(e,0).length(),r=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,g=c*u,y=c*d;t[0]=f+y*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,g=c*u,y=c*d;t[0]=f-y*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+y,t[1]=l*d,t[5]=y*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=y-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+g,t[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+y,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yb,e,xb)}lookAt(e,t,i){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Bi.crossVectors(i,Sn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Bi.crossVectors(i,Sn)),Bi.normalize(),Xa.crossVectors(Sn,Bi),s[0]=Bi.x,s[4]=Xa.x,s[8]=Sn.x,s[1]=Bi.y,s[5]=Xa.y,s[9]=Sn.y,s[2]=Bi.z,s[6]=Xa.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],g=i[2],y=i[6],p=i[10],h=i[14],_=i[3],v=i[7],b=i[11],R=i[15],E=s[0],A=s[4],U=s[8],M=s[12],w=s[1],V=s[5],W=s[9],oe=s[13],k=s[2],q=s[6],$=s[10],K=s[14],B=s[3],Q=s[7],le=s[11],de=s[15];return r[0]=o*E+a*w+l*k+c*B,r[4]=o*A+a*V+l*q+c*Q,r[8]=o*U+a*W+l*$+c*le,r[12]=o*M+a*oe+l*K+c*de,r[1]=u*E+d*w+f*k+m*B,r[5]=u*A+d*V+f*q+m*Q,r[9]=u*U+d*W+f*$+m*le,r[13]=u*M+d*oe+f*K+m*de,r[2]=g*E+y*w+p*k+h*B,r[6]=g*A+y*V+p*q+h*Q,r[10]=g*U+y*W+p*$+h*le,r[14]=g*M+y*oe+p*K+h*de,r[3]=_*E+v*w+b*k+R*B,r[7]=_*A+v*V+b*q+R*Q,r[11]=_*U+v*W+b*$+R*le,r[15]=_*M+v*oe+b*K+R*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],y=e[7],p=e[11],h=e[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*m-i*l*m)+y*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+t*c*d-t*a*m-r*o*d+i*o*m+r*a*u-i*c*u)+h*(-s*a*u-t*l*d+t*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],y=e[13],p=e[14],h=e[15],_=d*p*c-y*f*c+y*l*m-a*p*m-d*l*h+a*f*h,v=g*f*c-u*p*c-g*l*m+o*p*m+u*l*h-o*f*h,b=u*y*c-g*d*c+g*a*m-o*y*m-u*a*h+o*d*h,R=g*d*l-u*y*l-g*a*f+o*y*f+u*a*p-o*d*p,E=t*_+i*v+s*b+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(y*f*r-d*p*r-y*s*m+i*p*m+d*s*h-i*f*h)*A,e[2]=(a*p*r-y*l*r+y*s*c-i*p*c-a*s*h+i*l*h)*A,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*m-i*l*m)*A,e[4]=v*A,e[5]=(u*p*r-g*f*r+g*s*m-t*p*m-u*s*h+t*f*h)*A,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*h-t*l*h)*A,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*m+t*l*m)*A,e[8]=b*A,e[9]=(g*d*r-u*y*r-g*i*m+t*y*m+u*i*h-t*d*h)*A,e[10]=(o*y*r-g*a*r+g*i*c-t*y*c-o*i*h+t*a*h)*A,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*m-t*a*m)*A,e[12]=R*A,e[13]=(u*y*s-g*d*s+g*i*f-t*y*f-u*i*p+t*d*p)*A,e[14]=(g*a*s-o*y*s-g*i*l+t*y*l+o*i*p-t*a*p)*A,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,f=r*c,m=r*u,g=r*d,y=o*u,p=o*d,h=a*d,_=l*c,v=l*u,b=l*d,R=i.x,E=i.y,A=i.z;return s[0]=(1-(y+h))*R,s[1]=(m+b)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(m-b)*E,s[5]=(1-(f+h))*E,s[6]=(p+_)*E,s[7]=0,s[8]=(g+v)*A,s[9]=(p-_)*A,s[10]=(1-(f+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=vr.set(s[0],s[1],s[2]).length();const o=vr.set(s[4],s[5],s[6]).length(),a=vr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],qn.copy(this);const c=1/r,u=1/o,d=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,t.setFromRotationMatrix(qn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ti){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let m,g;if(a===Ti)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===lc)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ti){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),f=(t+e)*c,m=(i+s)*u;let g,y;if(a===Ti)g=(o+r)*d,y=-2*d;else if(a===lc)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vr=new I,qn=new Je,yb=new I(0,0,0),xb=new I(1,1,1),Bi=new I,Xa=new I,Sn=new I,wp=new Je,Ep=new At;class Hn{constructor(e=0,t=0,i=0,s=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ep.setFromEuler(this),this.setFromQuaternion(Ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class N0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _b=0;const Ap=new I,yr=new At,xi=new Je,ja=new I,Co=new I,bb=new I,Sb=new At,Tp=new I(1,0,0),Rp=new I(0,1,0),Cp=new I(0,0,1),Mb={type:"added"},wb={type:"removed"};class Dt extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new I,t=new Hn,i=new At,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new He}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(Tp,e)}rotateY(e){return this.rotateOnAxis(Rp,e)}rotateZ(e){return this.rotateOnAxis(Cp,e)}translateOnAxis(e,t){return Ap.copy(e).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tp,e)}translateY(e){return this.translateOnAxis(Rp,e)}translateZ(e){return this.translateOnAxis(Cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ja.copy(e):ja.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Co,ja,this.up):xi.lookAt(ja,Co,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(xi),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,bb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,Sb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new I(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new I,_i=new I,Iu=new I,bi=new I,xr=new I,_r=new I,Lp=new I,Nu=new I,Du=new I,Ou=new I;let $a=!1;class On{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Xn.subVectors(e,t),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Xn.subVectors(s,t),_i.subVectors(i,t),Iu.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(_i),l=Xn.dot(Iu),c=_i.dot(_i),u=_i.dot(Iu),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getUV(e,t,i,s,r,o,a,l){return $a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$a=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static isFrontFacing(e,t,i,s){return Xn.subVectors(i,t),_i.subVectors(e,t),Xn.cross(_i).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Xn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return On.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return $a===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$a=!0),On.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return On.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;xr.subVectors(s,i),_r.subVectors(r,i),Nu.subVectors(e,i);const l=xr.dot(Nu),c=_r.dot(Nu);if(l<=0&&c<=0)return t.copy(i);Du.subVectors(e,s);const u=xr.dot(Du),d=_r.dot(Du);if(u>=0&&d<=u)return t.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(xr,o);Ou.subVectors(e,r);const m=xr.dot(Ou),g=_r.dot(Ou);if(g>=0&&m<=g)return t.copy(r);const y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(_r,a);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Lp.subVectors(r,s),a=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(Lp,a);const h=1/(p+y+f);return o=y*h,a=f*h,t.copy(i).addScaledVector(xr,o).addScaledVector(_r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const D0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function ku(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ae{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=Hh(e,1),t=jt(t,0,1),i=jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ku(o,r,e+1/3),this.g=ku(o,r,e),this.b=ku(o,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=Nt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const i=D0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}copyLinearToSRGB(e){return this.r=wu(e.r),this.g=wu(e.g),this.b=wu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return st.fromWorkingColorSpace(Qt.copy(this),e),Math.round(jt(Qt.r*255,0,255))*65536+Math.round(jt(Qt.g*255,0,255))*256+Math.round(jt(Qt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Qt.copy(this),t);const i=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Nt){st.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,s=Qt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(Ya);const i=ea(Hi.h,Ya.h,t),s=ea(Hi.s,Ya.s,t),r=ea(Hi.l,Ya.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Ae;Ae.NAMES=D0;let Eb=0;class or extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=qr,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Ld,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=sc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cd&&(i.blendSrc=this.blendSrc),this.blendDst!==Ld&&(i.blendDst=this.blendDst),this.blendEquation!==Rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gn extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new I,Ka=new me;class Pt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ir(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vp&&(e.usage=this.usage),e}}class O0 extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class k0 extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class et extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ab=0;const Pn=new Je,Uu=new Dt,br=new I,Mn=new rr,Lo=new rr,Bt=new I;class vt extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C0(e)?k0:O0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return Uu.lookAt(e),Uu.updateMatrix(),this.applyMatrix4(Uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(Mn.min,Lo.min),Mn.expandByPoint(Bt),Bt.addVectors(Mn.max,Lo.max),Mn.expandByPoint(Bt)):(Mn.expandByPoint(Lo.min),Mn.expandByPoint(Lo.max))}Mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(br.fromBufferAttribute(e,c),Bt.add(br)),s=Math.max(s,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<a;w++)c[w]=new I,u[w]=new I;const d=new I,f=new I,m=new I,g=new me,y=new me,p=new me,h=new I,_=new I;function v(w,V,W){d.fromArray(s,w*3),f.fromArray(s,V*3),m.fromArray(s,W*3),g.fromArray(o,w*2),y.fromArray(o,V*2),p.fromArray(o,W*2),f.sub(d),m.sub(d),y.sub(g),p.sub(g);const oe=1/(y.x*p.y-p.x*y.y);isFinite(oe)&&(h.copy(f).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(oe),_.copy(m).multiplyScalar(y.x).addScaledVector(f,-p.x).multiplyScalar(oe),c[w].add(h),c[V].add(h),c[W].add(h),u[w].add(_),u[V].add(_),u[W].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let w=0,V=b.length;w<V;++w){const W=b[w],oe=W.start,k=W.count;for(let q=oe,$=oe+k;q<$;q+=3)v(i[q+0],i[q+1],i[q+2])}const R=new I,E=new I,A=new I,U=new I;function M(w){A.fromArray(r,w*3),U.copy(A);const V=c[w];R.copy(V),R.sub(A.multiplyScalar(A.dot(V))).normalize(),E.crossVectors(U,V);const oe=E.dot(u[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=oe}for(let w=0,V=b.length;w<V;++w){const W=b[w],oe=W.start,k=W.count;for(let q=oe,$=oe+k;q<$;q+=3)M(i[q+0]),M(i[q+1]),M(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new Pt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pp=new Je,_s=new Gh,Za=new ps,Ip=new I,Sr=new I,Mr=new I,wr=new I,Fu=new I,Ja=new I,Qa=new me,el=new me,tl=new me,Np=new I,Dp=new I,Op=new I,nl=new I,il=new I;class tt extends Dt{constructor(e=new vt,t=new Gn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ja.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Fu.fromBufferAttribute(d,e),o?Ja.addScaledVector(Fu,u):Ja.addScaledVector(Fu.sub(t),u))}t.add(Ja)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Za.copy(i.boundingSphere),Za.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(Za.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Za,Ip)===null||_s.origin.distanceToSquared(Ip)>(e.far-e.near)**2))&&(Pp.copy(r).invert(),_s.copy(e.ray).applyMatrix4(Pp),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const p=f[g],h=o[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=_,R=v;b<R;b+=3){const E=a.getX(b),A=a.getX(b+1),U=a.getX(b+2);s=sl(this,h,e,i,c,u,d,E,A,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=g,h=y;p<h;p+=3){const _=a.getX(p),v=a.getX(p+1),b=a.getX(p+2);s=sl(this,o,e,i,c,u,d,_,v,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){const p=f[g],h=o[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=_,R=v;b<R;b+=3){const E=b,A=b+1,U=b+2;s=sl(this,h,e,i,c,u,d,E,A,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=g,h=y;p<h;p+=3){const _=p,v=p+1,b=p+2;s=sl(this,o,e,i,c,u,d,_,v,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Tb(n,e,t,i,s,r,o,a){let l;if(e.side===yn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===cs,a),l===null)return null;il.copy(a),il.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(il);return c<t.near||c>t.far?null:{distance:c,point:il.clone(),object:n}}function sl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Sr),n.getVertexPosition(l,Mr),n.getVertexPosition(c,wr);const u=Tb(n,e,t,i,Sr,Mr,wr,nl);if(u){s&&(Qa.fromBufferAttribute(s,a),el.fromBufferAttribute(s,l),tl.fromBufferAttribute(s,c),u.uv=On.getInterpolation(nl,Sr,Mr,wr,Qa,el,tl,new me)),r&&(Qa.fromBufferAttribute(r,a),el.fromBufferAttribute(r,l),tl.fromBufferAttribute(r,c),u.uv1=On.getInterpolation(nl,Sr,Mr,wr,Qa,el,tl,new me),u.uv2=u.uv1),o&&(Np.fromBufferAttribute(o,a),Dp.fromBufferAttribute(o,l),Op.fromBufferAttribute(o,c),u.normal=On.getInterpolation(nl,Sr,Mr,wr,Np,Dp,Op,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};On.getNormal(Sr,Mr,wr,d.normal),u.face=d}return u}class en extends vt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(d,2));function g(y,p,h,_,v,b,R,E,A,U,M){const w=b/A,V=R/U,W=b/2,oe=R/2,k=E/2,q=A+1,$=U+1;let K=0,B=0;const Q=new I;for(let le=0;le<$;le++){const de=le*V-oe;for(let xe=0;xe<q;xe++){const te=xe*w-W;Q[y]=te*_,Q[p]=de*v,Q[h]=k,c.push(Q.x,Q.y,Q.z),Q[y]=0,Q[p]=0,Q[h]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(xe/A),d.push(1-le/U),K+=1}}for(let le=0;le<U;le++)for(let de=0;de<A;de++){const xe=f+de+q*le,te=f+de+q*(le+1),O=f+(de+1)+q*(le+1),D=f+(de+1)+q*le;l.push(xe,te,D),l.push(te,O,D),B+=6}a.addGroup(m,B,M),m+=B,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=uo(n[t]);for(const s in i)e[s]=i[s]}return e}function Rb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function U0(n){return n.getRenderTarget()===null?n.outputColorSpace:st.workingColorSpace}const Cb={clone:uo,merge:ln};var Lb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class us extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lb,this.fragmentShader=Pb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=Rb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class F0 extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends F0{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Er=-90,Ar=1;class Ib extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(Er,Ar,e,t);s.layers=this.layers,this.add(s);const r=new wn(Er,Ar,e,t);r.layers=this.layers,this.add(r);const o=new wn(Er,Ar,e,t);o.layers=this.layers,this.add(o);const a=new wn(Er,Ar,e,t);a.layers=this.layers,this.add(a);const l=new wn(Er,Ar,e,t);l.layers=this.layers,this.add(l);const c=new wn(Er,Ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class z0 extends Rn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ao,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nb extends Ks{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(ta("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gs?Nt:Un),this.texture=new z0(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new us({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:is});r.uniforms.tEquirect.value=t;const o=new tt(s,r),a=t.minFilter;return t.minFilter===pa&&(t.minFilter=Dn),new Ib(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const zu=new I,Db=new I,Ob=new He;class ws{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=zu.subVectors(i,t).cross(Db.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(zu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ob.getNormalMatrix(e),s=this.coplanarPoint(zu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new ps,rl=new I;class Vh{constructor(e=new ws,t=new ws,i=new ws,s=new ws,r=new ws,o=new ws){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ti){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],m=s[8],g=s[9],y=s[10],p=s[11],h=s[12],_=s[13],v=s[14],b=s[15];if(i[0].setComponents(l-r,f-c,p-m,b-h).normalize(),i[1].setComponents(l+r,f+c,p+m,b+h).normalize(),i[2].setComponents(l+o,f+u,p+g,b+_).normalize(),i[3].setComponents(l-o,f-u,p-g,b-_).normalize(),i[4].setComponents(l-a,f-d,p-y,b-v).normalize(),t===Ti)i[5].setComponents(l+a,f+d,p+y,b+v).normalize();else if(t===lc)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(rl.x=s.normal.x>0?e.max.x:e.min.x,rl.y=s.normal.y>0?e.max.y:e.min.y,rl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function B0(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function kb(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const d=c.array,f=c.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,f),c.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,d){const f=u.array,m=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&g.length===0&&n.bufferSubData(d,0,f),g.length!==0){for(let y=0,p=g.length;y<p;y++){const h=g[y];t?n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f,h.start,h.count):n.bufferSubData(d,h.start*f.BYTES_PER_ELEMENT,f.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class ar extends vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,f=t/l,m=[],g=[],y=[],p=[];for(let h=0;h<u;h++){const _=h*f-o;for(let v=0;v<c;v++){const b=v*d-r;g.push(b,-_,0),y.push(0,0,1),p.push(v/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const v=_+c*h,b=_+c*(h+1),R=_+1+c*(h+1),E=_+1+c*h;m.push(v,b,E),m.push(b,R,E)}this.setIndex(m),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(y,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fb=`#ifdef USE_ALPHAHASH
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
#endif`,zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vb=`#ifdef USE_AOMAP
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
#endif`,Wb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qb=`#ifdef USE_BATCHING
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
#endif`,Xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$b=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kb=`#ifdef USE_IRIDESCENCE
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
#endif`,Zb=`#ifdef USE_BUMPMAP
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
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,oS=`#define PI 3.141592653589793
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
} // validated`,aS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lS=`vec3 transformedNormal = objectNormal;
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
#endif`,cS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fS="gl_FragColor = linearToOutputTexel( gl_FragColor );",pS=`
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
}`,mS=`#ifdef USE_ENVMAP
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
#endif`,gS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vS=`#ifdef USE_ENVMAP
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
#endif`,yS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xS=`#ifdef USE_ENVMAP
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
#endif`,_S=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wS=`#ifdef USE_GRADIENTMAP
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
}`,ES=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,AS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CS=`uniform bool receiveShadow;
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
#endif`,LS=`#ifdef USE_ENVMAP
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
#endif`,PS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OS=`PhysicalMaterial material;
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
#endif`,kS=`struct PhysicalMaterial {
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
}`,US=`
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
#endif`,FS=`#if defined( RE_IndirectDiffuse )
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
#endif`,zS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,VS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,WS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jS=`#if defined( USE_POINTS_UV )
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
#endif`,$S=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZS=`#ifdef USE_MORPHNORMALS
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
#endif`,JS=`#ifdef USE_MORPHTARGETS
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
#endif`,QS=`#ifdef USE_MORPHTARGETS
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
#endif`,eM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rM=`#ifdef USE_NORMALMAP
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
#endif`,oM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bM=`float getShadowMask() {
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
}`,SM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MM=`#ifdef USE_SKINNING
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
#endif`,wM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,EM=`#ifdef USE_SKINNING
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
#endif`,AM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LM=`#ifdef USE_TRANSMISSION
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
#endif`,PM=`#ifdef USE_TRANSMISSION
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
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UM=`uniform sampler2D t2D;
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
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`#include <common>
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
}`,VM=`#if DEPTH_PACKING == 3200
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
}`,WM=`#define DISTANCE
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
}`,qM=`#define DISTANCE
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
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`uniform float scale;
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
}`,YM=`uniform vec3 diffuse;
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
}`,KM=`#include <common>
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
}`,ZM=`uniform vec3 diffuse;
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
}`,JM=`#define LAMBERT
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
}`,QM=`#define LAMBERT
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
}`,ew=`#define MATCAP
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
}`,tw=`#define MATCAP
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
}`,nw=`#define NORMAL
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
}`,iw=`#define NORMAL
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
}`,sw=`#define PHONG
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
}`,rw=`#define PHONG
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
}`,ow=`#define STANDARD
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
}`,aw=`#define STANDARD
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
}`,lw=`#define TOON
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
}`,cw=`#define TOON
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
}`,uw=`uniform float size;
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
}`,dw=`uniform vec3 diffuse;
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
}`,hw=`#include <common>
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
}`,fw=`uniform vec3 color;
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
}`,pw=`uniform float rotation;
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
}`,mw=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Ub,alphahash_pars_fragment:Fb,alphamap_fragment:zb,alphamap_pars_fragment:Bb,alphatest_fragment:Hb,alphatest_pars_fragment:Gb,aomap_fragment:Vb,aomap_pars_fragment:Wb,batching_pars_vertex:qb,batching_vertex:Xb,begin_vertex:jb,beginnormal_vertex:$b,bsdfs:Yb,iridescence_fragment:Kb,bumpmap_pars_fragment:Zb,clipping_planes_fragment:Jb,clipping_planes_pars_fragment:Qb,clipping_planes_pars_vertex:eS,clipping_planes_vertex:tS,color_fragment:nS,color_pars_fragment:iS,color_pars_vertex:sS,color_vertex:rS,common:oS,cube_uv_reflection_fragment:aS,defaultnormal_vertex:lS,displacementmap_pars_vertex:cS,displacementmap_vertex:uS,emissivemap_fragment:dS,emissivemap_pars_fragment:hS,colorspace_fragment:fS,colorspace_pars_fragment:pS,envmap_fragment:mS,envmap_common_pars_fragment:gS,envmap_pars_fragment:vS,envmap_pars_vertex:yS,envmap_physical_pars_fragment:LS,envmap_vertex:xS,fog_vertex:_S,fog_pars_vertex:bS,fog_fragment:SS,fog_pars_fragment:MS,gradientmap_pars_fragment:wS,lightmap_fragment:ES,lightmap_pars_fragment:AS,lights_lambert_fragment:TS,lights_lambert_pars_fragment:RS,lights_pars_begin:CS,lights_toon_fragment:PS,lights_toon_pars_fragment:IS,lights_phong_fragment:NS,lights_phong_pars_fragment:DS,lights_physical_fragment:OS,lights_physical_pars_fragment:kS,lights_fragment_begin:US,lights_fragment_maps:FS,lights_fragment_end:zS,logdepthbuf_fragment:BS,logdepthbuf_pars_fragment:HS,logdepthbuf_pars_vertex:GS,logdepthbuf_vertex:VS,map_fragment:WS,map_pars_fragment:qS,map_particle_fragment:XS,map_particle_pars_fragment:jS,metalnessmap_fragment:$S,metalnessmap_pars_fragment:YS,morphcolor_vertex:KS,morphnormal_vertex:ZS,morphtarget_pars_vertex:JS,morphtarget_vertex:QS,normal_fragment_begin:eM,normal_fragment_maps:tM,normal_pars_fragment:nM,normal_pars_vertex:iM,normal_vertex:sM,normalmap_pars_fragment:rM,clearcoat_normal_fragment_begin:oM,clearcoat_normal_fragment_maps:aM,clearcoat_pars_fragment:lM,iridescence_pars_fragment:cM,opaque_fragment:uM,packing:dM,premultiplied_alpha_fragment:hM,project_vertex:fM,dithering_fragment:pM,dithering_pars_fragment:mM,roughnessmap_fragment:gM,roughnessmap_pars_fragment:vM,shadowmap_pars_fragment:yM,shadowmap_pars_vertex:xM,shadowmap_vertex:_M,shadowmask_pars_fragment:bM,skinbase_vertex:SM,skinning_pars_vertex:MM,skinning_vertex:wM,skinnormal_vertex:EM,specularmap_fragment:AM,specularmap_pars_fragment:TM,tonemapping_fragment:RM,tonemapping_pars_fragment:CM,transmission_fragment:LM,transmission_pars_fragment:PM,uv_pars_fragment:IM,uv_pars_vertex:NM,uv_vertex:DM,worldpos_vertex:OM,background_vert:kM,background_frag:UM,backgroundCube_vert:FM,backgroundCube_frag:zM,cube_vert:BM,cube_frag:HM,depth_vert:GM,depth_frag:VM,distanceRGBA_vert:WM,distanceRGBA_frag:qM,equirect_vert:XM,equirect_frag:jM,linedashed_vert:$M,linedashed_frag:YM,meshbasic_vert:KM,meshbasic_frag:ZM,meshlambert_vert:JM,meshlambert_frag:QM,meshmatcap_vert:ew,meshmatcap_frag:tw,meshnormal_vert:nw,meshnormal_frag:iw,meshphong_vert:sw,meshphong_frag:rw,meshphysical_vert:ow,meshphysical_frag:aw,meshtoon_vert:lw,meshtoon_frag:cw,points_vert:uw,points_frag:dw,shadow_vert:hw,shadow_frag:fw,sprite_vert:pw,sprite_frag:mw},Se={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ri={basic:{uniforms:ln([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:ln([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ae(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:ln([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:ln([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:ln([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ae(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:ln([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:ln([Se.points,Se.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:ln([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:ln([Se.common,Se.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:ln([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:ln([Se.sprite,Se.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:ln([Se.common,Se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:ln([Se.lights,Se.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ri.physical={uniforms:ln([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ol={r:0,b:0,g:0};function gw(n,e,t,i,s,r,o){const a=new Ae(0);let l=r===!0?0:1,c,u,d=null,f=0,m=null;function g(p,h){let _=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=(h.backgroundBlurriness>0?t:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),_=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===qc)?(u===void 0&&(u=new tt(new en(1,1,1),new us({name:"BackgroundCubeMaterial",uniforms:uo(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=st.getTransfer(v.colorSpace)!==dt,(d!==v||f!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new tt(new ar(2,2),new us({name:"BackgroundMaterial",uniforms:uo(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=st.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,h){p.getRGB(ol,U0(n)),i.buffers.color.setClear(ol.r,ol.g,ol.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),l=h,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:g}}function vw(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function d(k,q,$,K,B){let Q=!1;if(o){const le=y(K,$,q);c!==le&&(c=le,m(c.object)),Q=h(k,K,$,B),Q&&_(k,K,$,B)}else{const le=q.wireframe===!0;(c.geometry!==K.id||c.program!==$.id||c.wireframe!==le)&&(c.geometry=K.id,c.program=$.id,c.wireframe=le,Q=!0)}B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,U(k,q,$,K),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(k){return i.isWebGL2?n.bindVertexArray(k):r.bindVertexArrayOES(k)}function g(k){return i.isWebGL2?n.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function y(k,q,$){const K=$.wireframe===!0;let B=a[k.id];B===void 0&&(B={},a[k.id]=B);let Q=B[q.id];Q===void 0&&(Q={},B[q.id]=Q);let le=Q[K];return le===void 0&&(le=p(f()),Q[K]=le),le}function p(k){const q=[],$=[],K=[];for(let B=0;B<s;B++)q[B]=0,$[B]=0,K[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:$,attributeDivisors:K,object:k,attributes:{},index:null}}function h(k,q,$,K){const B=c.attributes,Q=q.attributes;let le=0;const de=$.getAttributes();for(const xe in de)if(de[xe].location>=0){const O=B[xe];let D=Q[xe];if(D===void 0&&(xe==="instanceMatrix"&&k.instanceMatrix&&(D=k.instanceMatrix),xe==="instanceColor"&&k.instanceColor&&(D=k.instanceColor)),O===void 0||O.attribute!==D||D&&O.data!==D.data)return!0;le++}return c.attributesNum!==le||c.index!==K}function _(k,q,$,K){const B={},Q=q.attributes;let le=0;const de=$.getAttributes();for(const xe in de)if(de[xe].location>=0){let O=Q[xe];O===void 0&&(xe==="instanceMatrix"&&k.instanceMatrix&&(O=k.instanceMatrix),xe==="instanceColor"&&k.instanceColor&&(O=k.instanceColor));const D={};D.attribute=O,O&&O.data&&(D.data=O.data),B[xe]=D,le++}c.attributes=B,c.attributesNum=le,c.index=K}function v(){const k=c.newAttributes;for(let q=0,$=k.length;q<$;q++)k[q]=0}function b(k){R(k,0)}function R(k,q){const $=c.newAttributes,K=c.enabledAttributes,B=c.attributeDivisors;$[k]=1,K[k]===0&&(n.enableVertexAttribArray(k),K[k]=1),B[k]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,q),B[k]=q)}function E(){const k=c.newAttributes,q=c.enabledAttributes;for(let $=0,K=q.length;$<K;$++)q[$]!==k[$]&&(n.disableVertexAttribArray($),q[$]=0)}function A(k,q,$,K,B,Q,le){le===!0?n.vertexAttribIPointer(k,q,$,B,Q):n.vertexAttribPointer(k,q,$,K,B,Q)}function U(k,q,$,K){if(i.isWebGL2===!1&&(k.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const B=K.attributes,Q=$.getAttributes(),le=q.defaultAttributeValues;for(const de in Q){const xe=Q[de];if(xe.location>=0){let te=B[de];if(te===void 0&&(de==="instanceMatrix"&&k.instanceMatrix&&(te=k.instanceMatrix),de==="instanceColor"&&k.instanceColor&&(te=k.instanceColor)),te!==void 0){const O=te.normalized,D=te.itemSize,C=t.get(te);if(C===void 0)continue;const T=C.buffer,ee=C.type,ce=C.bytesPerElement,X=i.isWebGL2===!0&&(ee===n.INT||ee===n.UNSIGNED_INT||te.gpuType===x0);if(te.isInterleavedBufferAttribute){const he=te.data,P=he.stride,ie=te.offset;if(he.isInstancedInterleavedBuffer){for(let z=0;z<xe.locationSize;z++)R(xe.location+z,he.meshPerAttribute);k.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let z=0;z<xe.locationSize;z++)b(xe.location+z);n.bindBuffer(n.ARRAY_BUFFER,T);for(let z=0;z<xe.locationSize;z++)A(xe.location+z,D/xe.locationSize,ee,O,P*ce,(ie+D/xe.locationSize*z)*ce,X)}else{if(te.isInstancedBufferAttribute){for(let he=0;he<xe.locationSize;he++)R(xe.location+he,te.meshPerAttribute);k.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let he=0;he<xe.locationSize;he++)b(xe.location+he);n.bindBuffer(n.ARRAY_BUFFER,T);for(let he=0;he<xe.locationSize;he++)A(xe.location+he,D/xe.locationSize,ee,O,D*ce,D/xe.locationSize*he*ce,X)}}else if(le!==void 0){const O=le[de];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(xe.location,O);break;case 3:n.vertexAttrib3fv(xe.location,O);break;case 4:n.vertexAttrib4fv(xe.location,O);break;default:n.vertexAttrib1fv(xe.location,O)}}}}E()}function M(){W();for(const k in a){const q=a[k];for(const $ in q){const K=q[$];for(const B in K)g(K[B].object),delete K[B];delete q[$]}delete a[k]}}function w(k){if(a[k.id]===void 0)return;const q=a[k.id];for(const $ in q){const K=q[$];for(const B in K)g(K[B].object),delete K[B];delete q[$]}delete a[k.id]}function V(k){for(const q in a){const $=a[q];if($[k.id]===void 0)continue;const K=$[k.id];for(const B in K)g(K[B].object),delete K[B];delete $[k.id]}}function W(){oe(),u=!0,c!==l&&(c=l,m(c.object))}function oe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:oe,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:b,disableUnusedAttributes:E}}function yw(n,e,t,i){const s=i.isWebGL2;let r;function o(u){r=u}function a(u,d){n.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,f){if(f===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,d,f),t.update(d,r,f)}function c(u,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(r,u,0,d,0,f);let g=0;for(let y=0;y<f;y++)g+=d[y];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function xw(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,b=o||e.has("OES_texture_float"),R=v&&b,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:E}}function _w(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ws,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const _=r?0:i,v=_*4;let b=h.clippingState||null;l.value=b,b=u(g,f,v,m);for(let R=0;R!==v;++R)b[R]=t[R];h.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,g){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,g!==!0||p===null){const h=m+y*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<h)&&(p=new Float32Array(h));for(let v=0,b=m;v!==y;++v,b+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function bw(n){let e=new WeakMap;function t(o,a){return a===Pd?o.mapping=ao:a===Id&&(o.mapping=lo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pd||a===Id)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Nb(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class H0 extends F0{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const kr=4,kp=[.125,.215,.35,.446,.526,.582],Cs=20,Bu=new H0,Up=new Ae;let Hu=null,Gu=0,Vu=0;const Es=(1+Math.sqrt(5))/2,Tr=1/Es,Fp=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Es,Tr),new I(0,Es,-Tr),new I(Tr,0,Es),new I(-Tr,0,Es),new I(Es,Tr,0),new I(-Es,Tr,0)];class zp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Hu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hu,Gu,Vu),e.scissorTest=!1,al(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ao||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Vu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:ma,format:Kn,colorSpace:Di,depthBuffer:!1},s=Bp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sw(r)),this._blurMaterial=Mw(r,e,t)}return s}_compileMaterial(e){const t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,Bu)}_sceneToCubeUV(e,t,i,s){const a=new wn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Up),u.toneMapping=ss,u.autoClear=!1;const m=new Gn({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new tt(new en,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(Up),y=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const v=this._cubeSize;al(s,_*v,h>2?v:0,v,v),u.setRenderTarget(s),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ao||e.mapping===lo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;al(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Bu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Fp[(s-1)%Fp.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new tt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Cs-1),y=r/g,p=isFinite(r)?1+Math.floor(u*y):Cs;p>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Cs}`);const h=[];let _=0;for(let A=0;A<Cs;++A){const U=A/y,M=Math.exp(-U*U/2);h.push(M),A===0?_+=M:A<p&&(_+=2*M)}for(let A=0;A<h.length;A++)h[A]=h[A]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const b=this._sizeLods[s],R=3*b*(s>v-kr?s-v+kr:0),E=4*(this._cubeSize-b);al(t,R,E,3*b,2*b),l.setRenderTarget(t),l.render(d,Bu)}}function Sw(n){const e=[],t=[],i=[];let s=n;const r=n-kr+1+kp.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-kr?l=kp[o-n+kr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,y=3,p=2,h=1,_=new Float32Array(y*g*m),v=new Float32Array(p*g*m),b=new Float32Array(h*g*m);for(let E=0;E<m;E++){const A=E%3*2/3-1,U=E>2?0:-1,M=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];_.set(M,y*g*E),v.set(f,p*g*E);const w=[E,E,E,E,E,E];b.set(w,h*g*E)}const R=new vt;R.setAttribute("position",new Pt(_,y)),R.setAttribute("uv",new Pt(v,p)),R.setAttribute("faceIndex",new Pt(b,h)),e.push(R),s>kr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Bp(n,e,t){const i=new Ks(n,e,t);return i.texture.mapping=qc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function al(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Mw(n,e,t){const i=new Float32Array(Cs),s=new I(0,1,0);return new us({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function Hp(){return new us({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wh(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function Gp(){return new us({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function Wh(){return`

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
	`}function ww(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Pd||l===Id,u=l===ao||l===lo;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new zp(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new zp(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ew(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Aw(n,e,t,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const y=f.morphAttributes[g];for(let p=0,h=y.length;p<h;p++)e.remove(y[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const y=m[g];for(let p=0,h=y.length;p<h;p++)e.update(y[p],n.ARRAY_BUFFER)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let y=0;if(m!==null){const _=m.array;y=m.version;for(let v=0,b=_.length;v<b;v+=3){const R=_[v+0],E=_[v+1],A=_[v+2];f.push(R,E,E,A,A,R)}}else if(g!==void 0){const _=g.array;y=g.version;for(let v=0,b=_.length/3-1;v<b;v+=3){const R=v+0,E=v+1,A=v+2;f.push(R,E,E,A,A,R)}}else return;const p=new(C0(f)?k0:O0)(f,1);p.version=y;const h=r.get(d);h&&e.remove(h),r.set(d,p)}function u(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Tw(n,e,t,i){const s=i.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,g){n.drawElements(r,g,a,m*l),t.update(g,r,1)}function d(m,g,y){if(y===0)return;let p,h;if(s)p=n,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](r,g,a,m*l,y),t.update(g,r,y)}function f(m,g,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<y;h++)this.render(m[h]/l,g[h]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,y);let h=0;for(let _=0;_<y;_++)h+=g[_];t.update(h,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function Rw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Cw(n,e){return n[0]-e[0]}function Lw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Pw(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new Wt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let y=r.get(u);if(y===void 0||y.count!==g){let k=function(){W.dispose(),r.delete(u),u.removeEventListener("dispose",k)};y!==void 0&&y.texture.dispose();const _=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let U=0;_===!0&&(U=1),v===!0&&(U=2),b===!0&&(U=3);let M=u.attributes.position.count*U,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const V=new Float32Array(M*w*4*g),W=new I0(V,M,w,g);W.type=Yi,W.needsUpdate=!0;const oe=U*4;for(let q=0;q<g;q++){const $=R[q],K=E[q],B=A[q],Q=M*w*4*q;for(let le=0;le<$.count;le++){const de=le*oe;_===!0&&(o.fromBufferAttribute($,le),V[Q+de+0]=o.x,V[Q+de+1]=o.y,V[Q+de+2]=o.z,V[Q+de+3]=0),v===!0&&(o.fromBufferAttribute(K,le),V[Q+de+4]=o.x,V[Q+de+5]=o.y,V[Q+de+6]=o.z,V[Q+de+7]=0),b===!0&&(o.fromBufferAttribute(B,le),V[Q+de+8]=o.x,V[Q+de+9]=o.y,V[Q+de+10]=o.z,V[Q+de+11]=B.itemSize===4?o.w:1)}}y={count:g,texture:W,size:new me(M,w)},r.set(u,y),u.addEventListener("dispose",k)}let p=0;for(let _=0;_<f.length;_++)p+=f[_];const h=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",h),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{const m=f===void 0?0:f.length;let g=i[u.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<m;v++){const b=g[v];b[0]=v,b[1]=f[v]}g.sort(Lw);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Cw);const y=u.morphAttributes.position,p=u.morphAttributes.normal;let h=0;for(let v=0;v<8;v++){const b=a[v],R=b[0],E=b[1];R!==Number.MAX_SAFE_INTEGER&&E?(y&&u.getAttribute("morphTarget"+v)!==y[R]&&u.setAttribute("morphTarget"+v,y[R]),p&&u.getAttribute("morphNormal"+v)!==p[R]&&u.setAttribute("morphNormal"+v,p[R]),s[v]=E,h+=E):(y&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}const _=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Iw(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class G0 extends Rn{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Hs,u!==Hs&&u!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hs&&(i=$i),i===void 0&&u===co&&(i=Bs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const V0=new Rn,W0=new G0(1,1);W0.compareFunction=R0;const q0=new I0,X0=new gb,j0=new z0,Vp=[],Wp=[],qp=new Float32Array(16),Xp=new Float32Array(9),jp=new Float32Array(4);function bo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Vp[s];if(r===void 0&&(r=new Float32Array(s),Vp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function jc(n,e){let t=Wp[e];t===void 0&&(t=new Int32Array(e),Wp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Nw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Dw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function Ow(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function kw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function Uw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;jp.set(i),n.uniformMatrix2fv(this.addr,!1,jp),kt(t,i)}}function Fw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;Xp.set(i),n.uniformMatrix3fv(this.addr,!1,Xp),kt(t,i)}}function zw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,i))return;qp.set(i),n.uniformMatrix4fv(this.addr,!1,qp),kt(t,i)}}function Bw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Hw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function Gw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function Vw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function Ww(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function Xw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function jw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function $w(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?W0:V0;t.setTexture2D(e||r,s)}function Yw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||X0,s)}function Kw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||j0,s)}function Zw(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||q0,s)}function Jw(n){switch(n){case 5126:return Nw;case 35664:return Dw;case 35665:return Ow;case 35666:return kw;case 35674:return Uw;case 35675:return Fw;case 35676:return zw;case 5124:case 35670:return Bw;case 35667:case 35671:return Hw;case 35668:case 35672:return Gw;case 35669:case 35673:return Vw;case 5125:return Ww;case 36294:return qw;case 36295:return Xw;case 36296:return jw;case 35678:case 36198:case 36298:case 36306:case 35682:return $w;case 35679:case 36299:case 36307:return Yw;case 35680:case 36300:case 36308:case 36293:return Kw;case 36289:case 36303:case 36311:case 36292:return Zw}}function Qw(n,e){n.uniform1fv(this.addr,e)}function eE(n,e){const t=bo(e,this.size,2);n.uniform2fv(this.addr,t)}function tE(n,e){const t=bo(e,this.size,3);n.uniform3fv(this.addr,t)}function nE(n,e){const t=bo(e,this.size,4);n.uniform4fv(this.addr,t)}function iE(n,e){const t=bo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sE(n,e){const t=bo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rE(n,e){const t=bo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function oE(n,e){n.uniform1iv(this.addr,e)}function aE(n,e){n.uniform2iv(this.addr,e)}function lE(n,e){n.uniform3iv(this.addr,e)}function cE(n,e){n.uniform4iv(this.addr,e)}function uE(n,e){n.uniform1uiv(this.addr,e)}function dE(n,e){n.uniform2uiv(this.addr,e)}function hE(n,e){n.uniform3uiv(this.addr,e)}function fE(n,e){n.uniform4uiv(this.addr,e)}function pE(n,e,t){const i=this.cache,s=e.length,r=jc(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||V0,r[o])}function mE(n,e,t){const i=this.cache,s=e.length,r=jc(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||X0,r[o])}function gE(n,e,t){const i=this.cache,s=e.length,r=jc(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||j0,r[o])}function vE(n,e,t){const i=this.cache,s=e.length,r=jc(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||q0,r[o])}function yE(n){switch(n){case 5126:return Qw;case 35664:return eE;case 35665:return tE;case 35666:return nE;case 35674:return iE;case 35675:return sE;case 35676:return rE;case 5124:case 35670:return oE;case 35667:case 35671:return aE;case 35668:case 35672:return lE;case 35669:case 35673:return cE;case 5125:return uE;case 36294:return dE;case 36295:return hE;case 36296:return fE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return mE;case 35680:case 36300:case 36308:case 36293:return gE;case 36289:case 36303:case 36311:case 36292:return vE}}class xE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Jw(t.type)}}class _E{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yE(t.type)}}class bE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Wu=/(\w+)(\])?(\[|\.)?/g;function $p(n,e){n.seq.push(e),n.map[e.id]=e}function SE(n,e,t){const i=n.name,s=i.length;for(Wu.lastIndex=0;;){const r=Wu.exec(i),o=Wu.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$p(t,c===void 0?new xE(a,n,e):new _E(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new bE(a),$p(t,d)),t=d}}}class Ul{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);SE(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Yp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ME=37297;let wE=0;function EE(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function AE(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===ac&&t===oc?i="LinearDisplayP3ToLinearSRGB":e===oc&&t===ac&&(i="LinearSRGBToLinearDisplayP3"),n){case Di:case Xc:return[i,"LinearTransferOETF"];case Nt:case Bh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Kp(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+EE(n.getShaderSource(e),o)}else return s}function TE(n,e){const t=AE(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function RE(n,e){let t;switch(e){case A_:t="Linear";break;case T_:t="Reinhard";break;case R_:t="OptimizedCineon";break;case C_:t="ACESFilmic";break;case P_:t="AgX";break;case L_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function CE(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ur).join(`
`)}function LE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ur).join(`
`)}function PE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function IE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ur(n){return n!==""}function Zp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(n){return n.replace(NE,OE)}const DE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function OE(n,e){let t=je[e];if(t===void 0){const i=DE.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ud(t)}const kE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qp(n){return n.replace(kE,UE)}function UE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function em(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function FE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===v0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===e_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function zE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ao:case lo:e="ENVMAP_TYPE_CUBE";break;case qc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case lo:e="ENVMAP_MODE_REFRACTION";break}return e}function HE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Fh:e="ENVMAP_BLENDING_MULTIPLY";break;case w_:e="ENVMAP_BLENDING_MIX";break;case E_:e="ENVMAP_BLENDING_ADD";break}return e}function GE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function VE(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=FE(t),c=zE(t),u=BE(t),d=HE(t),f=GE(t),m=t.isWebGL2?"":CE(t),g=LE(t),y=PE(r),p=s.createProgram();let h,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ur).join(`
`),h.length>0&&(h+=`
`),_=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ur).join(`
`),_.length>0&&(_+=`
`)):(h=[em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),_=[m,em(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ss?"#define TONE_MAPPING":"",t.toneMapping!==ss?je.tonemapping_pars_fragment:"",t.toneMapping!==ss?RE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,TE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ur).join(`
`)),o=Ud(o),o=Zp(o,t),o=Jp(o,t),a=Ud(a),a=Zp(a,t),a=Jp(a,t),o=Qp(o),a=Qp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=v+h+o,R=v+_+a,E=Yp(s,s.VERTEX_SHADER,b),A=Yp(s,s.FRAGMENT_SHADER,R);s.attachShader(p,E),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function U(W){if(n.debug.checkShaderErrors){const oe=s.getProgramInfoLog(p).trim(),k=s.getShaderInfoLog(E).trim(),q=s.getShaderInfoLog(A).trim();let $=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,E,A);else{const B=Kp(s,E,"vertex"),Q=Kp(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+oe+`
`+B+`
`+Q)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(k===""||q==="")&&(K=!1);K&&(W.diagnostics={runnable:$,programLog:oe,vertexShader:{log:k,prefix:h},fragmentShader:{log:q,prefix:_}})}s.deleteShader(E),s.deleteShader(A),M=new Ul(s,p),w=IE(s,p)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(p,ME)),V},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=A,this}let WE=0;class qE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new XE(e),t.set(e,i)),i}}class XE{constructor(e){this.id=WE++,this.code=e,this.usedTimes=0}}function jE(n,e,t,i,s,r,o){const a=new N0,l=new qE,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function p(M,w,V,W,oe){const k=W.fog,q=oe.geometry,$=M.isMeshStandardMaterial?W.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),B=K&&K.mapping===qc?K.image.height:null,Q=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const le=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,de=le!==void 0?le.length:0;let xe=0;q.morphAttributes.position!==void 0&&(xe=1),q.morphAttributes.normal!==void 0&&(xe=2),q.morphAttributes.color!==void 0&&(xe=3);let te,O,D,C;if(Q){const sn=ri[Q];te=sn.vertexShader,O=sn.fragmentShader}else te=M.vertexShader,O=M.fragmentShader,l.update(M),D=l.getVertexShaderID(M),C=l.getFragmentShaderID(M);const T=n.getRenderTarget(),ee=oe.isInstancedMesh===!0,ce=oe.isBatchedMesh===!0,X=!!M.map,he=!!M.matcap,P=!!K,ie=!!M.aoMap,z=!!M.lightMap,Y=!!M.bumpMap,j=!!M.normalMap,pe=!!M.displacementMap,F=!!M.emissiveMap,x=!!M.metalnessMap,S=!!M.roughnessMap,G=M.anisotropy>0,ge=M.clearcoat>0,ve=M.iridescence>0,ue=M.sheen>0,Te=M.transmission>0,_e=G&&!!M.anisotropyMap,Re=ge&&!!M.clearcoatMap,Ne=ge&&!!M.clearcoatNormalMap,Fe=ge&&!!M.clearcoatRoughnessMap,ye=ve&&!!M.iridescenceMap,Qe=ve&&!!M.iridescenceThicknessMap,qe=ue&&!!M.sheenColorMap,ze=ue&&!!M.sheenRoughnessMap,De=!!M.specularMap,Le=!!M.specularColorMap,Xe=!!M.specularIntensityMap,nt=Te&&!!M.transmissionMap,yt=Te&&!!M.thicknessMap,Ke=!!M.gradientMap,be=!!M.alphaMap,H=M.alphaTest>0,Me=!!M.alphaHash,we=!!M.extensions,Ue=!!q.attributes.uv1,Oe=!!q.attributes.uv2,ot=!!q.attributes.uv3;let at=ss;return M.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(at=n.toneMapping),{isWebGL2:u,shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:te,fragmentShader:O,defines:M.defines,customVertexShaderID:D,customFragmentShaderID:C,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:ce,instancing:ee,instancingColor:ee&&oe.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:T===null?n.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Di,map:X,matcap:he,envMap:P,envMapMode:P&&K.mapping,envMapCubeUVHeight:B,aoMap:ie,lightMap:z,bumpMap:Y,normalMap:j,displacementMap:f&&pe,emissiveMap:F,normalMapObjectSpace:j&&M.normalMapType===V_,normalMapTangentSpace:j&&M.normalMapType===T0,metalnessMap:x,roughnessMap:S,anisotropy:G,anisotropyMap:_e,clearcoat:ge,clearcoatMap:Re,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Fe,iridescence:ve,iridescenceMap:ye,iridescenceThicknessMap:Qe,sheen:ue,sheenColorMap:qe,sheenRoughnessMap:ze,specularMap:De,specularColorMap:Le,specularIntensityMap:Xe,transmission:Te,transmissionMap:nt,thicknessMap:yt,gradientMap:Ke,opaque:M.transparent===!1&&M.blending===qr,alphaMap:be,alphaTest:H,alphaHash:Me,combine:M.combine,mapUv:X&&y(M.map.channel),aoMapUv:ie&&y(M.aoMap.channel),lightMapUv:z&&y(M.lightMap.channel),bumpMapUv:Y&&y(M.bumpMap.channel),normalMapUv:j&&y(M.normalMap.channel),displacementMapUv:pe&&y(M.displacementMap.channel),emissiveMapUv:F&&y(M.emissiveMap.channel),metalnessMapUv:x&&y(M.metalnessMap.channel),roughnessMapUv:S&&y(M.roughnessMap.channel),anisotropyMapUv:_e&&y(M.anisotropyMap.channel),clearcoatMapUv:Re&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&y(M.sheenRoughnessMap.channel),specularMapUv:De&&y(M.specularMap.channel),specularColorMapUv:Le&&y(M.specularColorMap.channel),specularIntensityMapUv:Xe&&y(M.specularIntensityMap.channel),transmissionMapUv:nt&&y(M.transmissionMap.channel),thicknessMapUv:yt&&y(M.thicknessMap.channel),alphaMapUv:be&&y(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(j||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:Oe,vertexUv3s:ot,pointsUvs:oe.isPoints===!0&&!!q.attributes.uv&&(X||be),fog:!!k,useFog:M.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:oe.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:xe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,useLegacyLights:n._useLegacyLights,decodeVideoTexture:X&&M.map.isVideoTexture===!0&&st.getTransfer(M.map.colorSpace)===dt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===$t,flipSided:M.side===yn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:we&&M.extensions.derivatives===!0,extensionFragDepth:we&&M.extensions.fragDepth===!0,extensionDrawBuffers:we&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)w.push(V),w.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(_(w,M),v(w,M),w.push(n.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){const w=g[M.type];let V;if(w){const W=ri[w];V=Cb.clone(W.uniforms)}else V=M.uniforms;return V}function R(M,w){let V;for(let W=0,oe=c.length;W<oe;W++){const k=c[W];if(k.cacheKey===w){V=k,++V.usedTimes;break}}return V===void 0&&(V=new VE(n,w,M,r),c.push(V)),V}function E(M){if(--M.usedTimes===0){const w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:U}}function $E(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function YE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function tm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function nm(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,m,g,y,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=y,h.group=p),e++,h}function a(d,f,m,g,y,p){const h=o(d,f,m,g,y,p);m.transmission>0?i.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(d,f,m,g,y,p){const h=o(d,f,m,g,y,p);m.transmission>0?i.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||YE),i.length>1&&i.sort(f||tm),s.length>1&&s.sort(f||tm)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function KE(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new nm,n.set(i,[o])):s>=r.length?(o=new nm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ZE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ae};break;case"SpotLight":t={position:new I,direction:new I,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function JE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let QE=0;function eA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tA(n,e){const t=new ZE,i=JE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new I);const r=new I,o=new Je,a=new Je;function l(u,d){let f=0,m=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let y=0,p=0,h=0,_=0,v=0,b=0,R=0,E=0,A=0,U=0,M=0;u.sort(eA);const w=d===!0?Math.PI:1;for(let W=0,oe=u.length;W<oe;W++){const k=u[W],q=k.color,$=k.intensity,K=k.distance,B=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=q.r*$*w,m+=q.g*$*w,g+=q.b*$*w;else if(k.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(k.sh.coefficients[Q],$);M++}else if(k.isDirectionalLight){const Q=t.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity*w),k.castShadow){const le=k.shadow,de=i.get(k);de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,s.directionalShadow[y]=de,s.directionalShadowMap[y]=B,s.directionalShadowMatrix[y]=k.shadow.matrix,b++}s.directional[y]=Q,y++}else if(k.isSpotLight){const Q=t.get(k);Q.position.setFromMatrixPosition(k.matrixWorld),Q.color.copy(q).multiplyScalar($*w),Q.distance=K,Q.coneCos=Math.cos(k.angle),Q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Q.decay=k.decay,s.spot[h]=Q;const le=k.shadow;if(k.map&&(s.spotLightMap[A]=k.map,A++,le.updateMatrices(k),k.castShadow&&U++),s.spotLightMatrix[h]=le.matrix,k.castShadow){const de=i.get(k);de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,s.spotShadow[h]=de,s.spotShadowMap[h]=B,E++}h++}else if(k.isRectAreaLight){const Q=t.get(k);Q.color.copy(q).multiplyScalar($),Q.halfWidth.set(k.width*.5,0,0),Q.halfHeight.set(0,k.height*.5,0),s.rectArea[_]=Q,_++}else if(k.isPointLight){const Q=t.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity*w),Q.distance=k.distance,Q.decay=k.decay,k.castShadow){const le=k.shadow,de=i.get(k);de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,de.shadowCameraNear=le.camera.near,de.shadowCameraFar=le.camera.far,s.pointShadow[p]=de,s.pointShadowMap[p]=B,s.pointShadowMatrix[p]=k.shadow.matrix,R++}s.point[p]=Q,p++}else if(k.isHemisphereLight){const Q=t.get(k);Q.skyColor.copy(k.color).multiplyScalar($*w),Q.groundColor.copy(k.groundColor).multiplyScalar($*w),s.hemi[v]=Q,v++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;const V=s.hash;(V.directionalLength!==y||V.pointLength!==p||V.spotLength!==h||V.rectAreaLength!==_||V.hemiLength!==v||V.numDirectionalShadows!==b||V.numPointShadows!==R||V.numSpotShadows!==E||V.numSpotMaps!==A||V.numLightProbes!==M)&&(s.directional.length=y,s.spot.length=h,s.rectArea.length=_,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=E+A-U,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=M,V.directionalLength=y,V.pointLength=p,V.spotLength=h,V.rectAreaLength=_,V.hemiLength=v,V.numDirectionalShadows=b,V.numPointShadows=R,V.numSpotShadows=E,V.numSpotMaps=A,V.numLightProbes=M,s.version=QE++)}function c(u,d){let f=0,m=0,g=0,y=0,p=0;const h=d.matrixWorldInverse;for(let _=0,v=u.length;_<v;_++){const b=u[_];if(b.isDirectionalLight){const R=s.directional[f];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(h),f++}else if(b.isSpotLight){const R=s.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(h),g++}else if(b.isRectAreaLight){const R=s.rectArea[y];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),a.identity(),o.copy(b.matrixWorld),o.premultiply(h),a.extractRotation(o),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(b.isPointLight){const R=s.point[m];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){const R=s.hemi[p];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(h),p++}}}return{setup:l,setupView:c,state:s}}function im(n,e){const t=new tA(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function nA(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new im(n,e),t.set(r,[l])):o>=a.length?(l=new im(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class iA extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sA extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oA=`uniform sampler2D shadow_pass;
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
}`;function aA(n,e,t){let i=new Vh;const s=new me,r=new me,o=new Wt,a=new iA({depthPacking:G_}),l=new sA,c={},u=t.maxTextureSize,d={[cs]:yn,[yn]:cs,[$t]:$t},f=new us({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:rA,fragmentShader:oA}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new vt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new tt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v0;let h=this.type;this.render=function(E,A,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const M=n.getRenderTarget(),w=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),W=n.state;W.setBlending(is),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const oe=h!==Mi&&this.type===Mi,k=h===Mi&&this.type!==Mi;for(let q=0,$=E.length;q<$;q++){const K=E[q],B=K.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const Q=B.getFrameExtents();if(s.multiply(Q),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,B.mapSize.y=r.y)),B.map===null||oe===!0||k===!0){const de=this.type!==Mi?{minFilter:dn,magFilter:dn}:{};B.map!==null&&B.map.dispose(),B.map=new Ks(s.x,s.y,de),B.map.texture.name=K.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const le=B.getViewportCount();for(let de=0;de<le;de++){const xe=B.getViewport(de);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),W.viewport(o),B.updateMatrices(K,de),i=B.getFrustum(),b(A,U,B.camera,K,this.type)}B.isPointLightShadow!==!0&&this.type===Mi&&_(B,U),B.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(M,w,V)};function _(E,A){const U=e.update(y);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ks(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,U,f,y,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,U,m,y,null)}function v(E,A,U,M){let w=null;const V=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(V!==void 0)w=V;else if(w=U.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=w.uuid,oe=A.uuid;let k=c[W];k===void 0&&(k={},c[W]=k);let q=k[oe];q===void 0&&(q=w.clone(),k[oe]=q,A.addEventListener("dispose",R)),w=q}if(w.visible=A.visible,w.wireframe=A.wireframe,M===Mi?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:d[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const W=n.properties.get(w);W.light=U}return w}function b(E,A,U,M,w){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Mi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);const oe=e.update(E),k=E.material;if(Array.isArray(k)){const q=oe.groups;for(let $=0,K=q.length;$<K;$++){const B=q[$],Q=k[B.materialIndex];if(Q&&Q.visible){const le=v(E,Q,M,w);E.onBeforeShadow(n,E,A,U,oe,le,B),n.renderBufferDirect(U,null,oe,le,E,B),E.onAfterShadow(n,E,A,U,oe,le,B)}}}else if(k.visible){const q=v(E,k,M,w);E.onBeforeShadow(n,E,A,U,oe,q,null),n.renderBufferDirect(U,null,oe,q,E,null),E.onAfterShadow(n,E,A,U,oe,q,null)}}const W=E.children;for(let oe=0,k=W.length;oe<k;oe++)b(W[oe],A,U,M,w)}function R(E){E.target.removeEventListener("dispose",R);for(const U in c){const M=c[U],w=E.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function lA(n,e,t){const i=t.isWebGL2;function s(){let H=!1;const Me=new Wt;let we=null;const Ue=new Wt(0,0,0,0);return{setMask:function(Oe){we!==Oe&&!H&&(n.colorMask(Oe,Oe,Oe,Oe),we=Oe)},setLocked:function(Oe){H=Oe},setClear:function(Oe,ot,at,Ft,sn){sn===!0&&(Oe*=Ft,ot*=Ft,at*=Ft),Me.set(Oe,ot,at,Ft),Ue.equals(Me)===!1&&(n.clearColor(Oe,ot,at,Ft),Ue.copy(Me))},reset:function(){H=!1,we=null,Ue.set(-1,0,0,0)}}}function r(){let H=!1,Me=null,we=null,Ue=null;return{setTest:function(Oe){Oe?ce(n.DEPTH_TEST):X(n.DEPTH_TEST)},setMask:function(Oe){Me!==Oe&&!H&&(n.depthMask(Oe),Me=Oe)},setFunc:function(Oe){if(we!==Oe){switch(Oe){case v_:n.depthFunc(n.NEVER);break;case y_:n.depthFunc(n.ALWAYS);break;case x_:n.depthFunc(n.LESS);break;case sc:n.depthFunc(n.LEQUAL);break;case __:n.depthFunc(n.EQUAL);break;case b_:n.depthFunc(n.GEQUAL);break;case S_:n.depthFunc(n.GREATER);break;case M_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=Oe}},setLocked:function(Oe){H=Oe},setClear:function(Oe){Ue!==Oe&&(n.clearDepth(Oe),Ue=Oe)},reset:function(){H=!1,Me=null,we=null,Ue=null}}}function o(){let H=!1,Me=null,we=null,Ue=null,Oe=null,ot=null,at=null,Ft=null,sn=null;return{setTest:function(lt){H||(lt?ce(n.STENCIL_TEST):X(n.STENCIL_TEST))},setMask:function(lt){Me!==lt&&!H&&(n.stencilMask(lt),Me=lt)},setFunc:function(lt,rn,ni){(we!==lt||Ue!==rn||Oe!==ni)&&(n.stencilFunc(lt,rn,ni),we=lt,Ue=rn,Oe=ni)},setOp:function(lt,rn,ni){(ot!==lt||at!==rn||Ft!==ni)&&(n.stencilOp(lt,rn,ni),ot=lt,at=rn,Ft=ni)},setLocked:function(lt){H=lt},setClear:function(lt){sn!==lt&&(n.clearStencil(lt),sn=lt)},reset:function(){H=!1,Me=null,we=null,Ue=null,Oe=null,ot=null,at=null,Ft=null,sn=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,y=[],p=null,h=!1,_=null,v=null,b=null,R=null,E=null,A=null,U=null,M=new Ae(0,0,0),w=0,V=!1,W=null,oe=null,k=null,q=null,$=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Q=0;const le=n.getParameter(n.VERSION);le.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(le)[1]),B=Q>=1):le.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),B=Q>=2);let de=null,xe={};const te=n.getParameter(n.SCISSOR_BOX),O=n.getParameter(n.VIEWPORT),D=new Wt().fromArray(te),C=new Wt().fromArray(O);function T(H,Me,we,Ue){const Oe=new Uint8Array(4),ot=n.createTexture();n.bindTexture(H,ot),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<we;at++)i&&(H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY)?n.texImage3D(Me,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,Oe):n.texImage2D(Me+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Oe);return ot}const ee={};ee[n.TEXTURE_2D]=T(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=T(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ee[n.TEXTURE_2D_ARRAY]=T(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=T(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ce(n.DEPTH_TEST),l.setFunc(sc),F(!1),x(zf),ce(n.CULL_FACE),j(is);function ce(H){f[H]!==!0&&(n.enable(H),f[H]=!0)}function X(H){f[H]!==!1&&(n.disable(H),f[H]=!1)}function he(H,Me){return m[H]!==Me?(n.bindFramebuffer(H,Me),m[H]=Me,i&&(H===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Me),H===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Me)),!0):!1}function P(H,Me){let we=y,Ue=!1;if(H)if(we=g.get(Me),we===void 0&&(we=[],g.set(Me,we)),H.isWebGLMultipleRenderTargets){const Oe=H.texture;if(we.length!==Oe.length||we[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,at=Oe.length;ot<at;ot++)we[ot]=n.COLOR_ATTACHMENT0+ot;we.length=Oe.length,Ue=!0}}else we[0]!==n.COLOR_ATTACHMENT0&&(we[0]=n.COLOR_ATTACHMENT0,Ue=!0);else we[0]!==n.BACK&&(we[0]=n.BACK,Ue=!0);Ue&&(t.isWebGL2?n.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function ie(H){return p!==H?(n.useProgram(H),p=H,!0):!1}const z={[Rs]:n.FUNC_ADD,[n_]:n.FUNC_SUBTRACT,[i_]:n.FUNC_REVERSE_SUBTRACT};if(i)z[Gf]=n.MIN,z[Vf]=n.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(z[Gf]=H.MIN_EXT,z[Vf]=H.MAX_EXT)}const Y={[s_]:n.ZERO,[r_]:n.ONE,[o_]:n.SRC_COLOR,[Cd]:n.SRC_ALPHA,[h_]:n.SRC_ALPHA_SATURATE,[u_]:n.DST_COLOR,[l_]:n.DST_ALPHA,[a_]:n.ONE_MINUS_SRC_COLOR,[Ld]:n.ONE_MINUS_SRC_ALPHA,[d_]:n.ONE_MINUS_DST_COLOR,[c_]:n.ONE_MINUS_DST_ALPHA,[f_]:n.CONSTANT_COLOR,[p_]:n.ONE_MINUS_CONSTANT_COLOR,[m_]:n.CONSTANT_ALPHA,[g_]:n.ONE_MINUS_CONSTANT_ALPHA};function j(H,Me,we,Ue,Oe,ot,at,Ft,sn,lt){if(H===is){h===!0&&(X(n.BLEND),h=!1);return}if(h===!1&&(ce(n.BLEND),h=!0),H!==t_){if(H!==_||lt!==V){if((v!==Rs||E!==Rs)&&(n.blendEquation(n.FUNC_ADD),v=Rs,E=Rs),lt)switch(H){case qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ic:n.blendFunc(n.ONE,n.ONE);break;case Bf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ic:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Hf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}b=null,R=null,A=null,U=null,M.set(0,0,0),w=0,_=H,V=lt}return}Oe=Oe||Me,ot=ot||we,at=at||Ue,(Me!==v||Oe!==E)&&(n.blendEquationSeparate(z[Me],z[Oe]),v=Me,E=Oe),(we!==b||Ue!==R||ot!==A||at!==U)&&(n.blendFuncSeparate(Y[we],Y[Ue],Y[ot],Y[at]),b=we,R=Ue,A=ot,U=at),(Ft.equals(M)===!1||sn!==w)&&(n.blendColor(Ft.r,Ft.g,Ft.b,sn),M.copy(Ft),w=sn),_=H,V=!1}function pe(H,Me){H.side===$t?X(n.CULL_FACE):ce(n.CULL_FACE);let we=H.side===yn;Me&&(we=!we),F(we),H.blending===qr&&H.transparent===!1?j(is):j(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);const Ue=H.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),G(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):X(n.SAMPLE_ALPHA_TO_COVERAGE)}function F(H){W!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),W=H)}function x(H){H!==Jx?(ce(n.CULL_FACE),H!==oe&&(H===zf?n.cullFace(n.BACK):H===Qx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):X(n.CULL_FACE),oe=H}function S(H){H!==k&&(B&&n.lineWidth(H),k=H)}function G(H,Me,we){H?(ce(n.POLYGON_OFFSET_FILL),(q!==Me||$!==we)&&(n.polygonOffset(Me,we),q=Me,$=we)):X(n.POLYGON_OFFSET_FILL)}function ge(H){H?ce(n.SCISSOR_TEST):X(n.SCISSOR_TEST)}function ve(H){H===void 0&&(H=n.TEXTURE0+K-1),de!==H&&(n.activeTexture(H),de=H)}function ue(H,Me,we){we===void 0&&(de===null?we=n.TEXTURE0+K-1:we=de);let Ue=xe[we];Ue===void 0&&(Ue={type:void 0,texture:void 0},xe[we]=Ue),(Ue.type!==H||Ue.texture!==Me)&&(de!==we&&(n.activeTexture(we),de=we),n.bindTexture(H,Me||ee[H]),Ue.type=H,Ue.texture=Me)}function Te(){const H=xe[de];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function _e(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(H){D.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),D.copy(H))}function nt(H){C.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),C.copy(H))}function yt(H,Me){let we=d.get(Me);we===void 0&&(we=new WeakMap,d.set(Me,we));let Ue=we.get(H);Ue===void 0&&(Ue=n.getUniformBlockIndex(Me,H.name),we.set(H,Ue))}function Ke(H,Me){const Ue=d.get(Me).get(H);u.get(Me)!==Ue&&(n.uniformBlockBinding(Me,Ue,H.__bindingPointIndex),u.set(Me,Ue))}function be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},de=null,xe={},m={},g=new WeakMap,y=[],p=null,h=!1,_=null,v=null,b=null,R=null,E=null,A=null,U=null,M=new Ae(0,0,0),w=0,V=!1,W=null,oe=null,k=null,q=null,$=null,D.set(0,0,n.canvas.width,n.canvas.height),C.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ce,disable:X,bindFramebuffer:he,drawBuffers:P,useProgram:ie,setBlending:j,setMaterial:pe,setFlipSided:F,setCullFace:x,setLineWidth:S,setPolygonOffset:G,setScissorTest:ge,activeTexture:ve,bindTexture:ue,unbindTexture:Te,compressedTexImage2D:_e,compressedTexImage3D:Re,texImage2D:De,texImage3D:Le,updateUBOMapping:yt,uniformBlockBinding:Ke,texStorage2D:qe,texStorage3D:ze,texSubImage2D:Ne,texSubImage3D:Fe,compressedTexSubImage2D:ye,compressedTexSubImage3D:Qe,scissor:Xe,viewport:nt,reset:be}}function cA(n,e,t,i,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,S){return m?new OffscreenCanvas(x,S):uc("canvas")}function y(x,S,G,ge){let ve=1;if((x.width>ge||x.height>ge)&&(ve=ge/Math.max(x.width,x.height)),ve<1||S===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const ue=S?cc:Math.floor,Te=ue(ve*x.width),_e=ue(ve*x.height);d===void 0&&(d=g(Te,_e));const Re=G?g(Te,_e):d;return Re.width=Te,Re.height=_e,Re.getContext("2d").drawImage(x,0,0,Te,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+Te+"x"+_e+")."),Re}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function p(x){return kd(x.width)&&kd(x.height)}function h(x){return a?!1:x.wrapS!==Yn||x.wrapT!==Yn||x.minFilter!==dn&&x.minFilter!==Dn}function _(x,S){return x.generateMipmaps&&S&&x.minFilter!==dn&&x.minFilter!==Dn}function v(x){n.generateMipmap(x)}function b(x,S,G,ge,ve=!1){if(a===!1)return S;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let ue=S;if(S===n.RED&&(G===n.FLOAT&&(ue=n.R32F),G===n.HALF_FLOAT&&(ue=n.R16F),G===n.UNSIGNED_BYTE&&(ue=n.R8)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(ue=n.R8UI),G===n.UNSIGNED_SHORT&&(ue=n.R16UI),G===n.UNSIGNED_INT&&(ue=n.R32UI),G===n.BYTE&&(ue=n.R8I),G===n.SHORT&&(ue=n.R16I),G===n.INT&&(ue=n.R32I)),S===n.RG&&(G===n.FLOAT&&(ue=n.RG32F),G===n.HALF_FLOAT&&(ue=n.RG16F),G===n.UNSIGNED_BYTE&&(ue=n.RG8)),S===n.RGBA){const Te=ve?rc:st.getTransfer(ge);G===n.FLOAT&&(ue=n.RGBA32F),G===n.HALF_FLOAT&&(ue=n.RGBA16F),G===n.UNSIGNED_BYTE&&(ue=Te===dt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function R(x,S,G){return _(x,G)===!0||x.isFramebufferTexture&&x.minFilter!==dn&&x.minFilter!==Dn?Math.log2(Math.max(S.width,S.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?S.mipmaps.length:1}function E(x){return x===dn||x===Wf||x===vu?n.NEAREST:n.LINEAR}function A(x){const S=x.target;S.removeEventListener("dispose",A),M(S),S.isVideoTexture&&u.delete(S)}function U(x){const S=x.target;S.removeEventListener("dispose",U),V(S)}function M(x){const S=i.get(x);if(S.__webglInit===void 0)return;const G=x.source,ge=f.get(G);if(ge){const ve=ge[S.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&w(x),Object.keys(ge).length===0&&f.delete(G)}i.remove(x)}function w(x){const S=i.get(x);n.deleteTexture(S.__webglTexture);const G=x.source,ge=f.get(G);delete ge[S.__cacheKey],o.memory.textures--}function V(x){const S=x.texture,G=i.get(x),ge=i.get(S);if(ge.__webglTexture!==void 0&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(G.__webglFramebuffer[ve]))for(let ue=0;ue<G.__webglFramebuffer[ve].length;ue++)n.deleteFramebuffer(G.__webglFramebuffer[ve][ue]);else n.deleteFramebuffer(G.__webglFramebuffer[ve]);G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[ve])}else{if(Array.isArray(G.__webglFramebuffer))for(let ve=0;ve<G.__webglFramebuffer.length;ve++)n.deleteFramebuffer(G.__webglFramebuffer[ve]);else n.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ve=0;ve<G.__webglColorRenderbuffer.length;ve++)G.__webglColorRenderbuffer[ve]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[ve]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let ve=0,ue=S.length;ve<ue;ve++){const Te=i.get(S[ve]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(S[ve])}i.remove(S),i.remove(x)}let W=0;function oe(){W=0}function k(){const x=W;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),W+=1,x}function q(x){const S=[];return S.push(x.wrapS),S.push(x.wrapT),S.push(x.wrapR||0),S.push(x.magFilter),S.push(x.minFilter),S.push(x.anisotropy),S.push(x.internalFormat),S.push(x.format),S.push(x.type),S.push(x.generateMipmaps),S.push(x.premultiplyAlpha),S.push(x.flipY),S.push(x.unpackAlignment),S.push(x.colorSpace),S.join()}function $(x,S){const G=i.get(x);if(x.isVideoTexture&&pe(x),x.isRenderTargetTexture===!1&&x.version>0&&G.__version!==x.version){const ge=x.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(G,x,S);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function K(x,S){const G=i.get(x);if(x.version>0&&G.__version!==x.version){D(G,x,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function B(x,S){const G=i.get(x);if(x.version>0&&G.__version!==x.version){D(G,x,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function Q(x,S){const G=i.get(x);if(x.version>0&&G.__version!==x.version){C(G,x,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const le={[Nd]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[Dd]:n.MIRRORED_REPEAT},de={[dn]:n.NEAREST,[Wf]:n.NEAREST_MIPMAP_NEAREST,[vu]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[I_]:n.LINEAR_MIPMAP_NEAREST,[pa]:n.LINEAR_MIPMAP_LINEAR},xe={[W_]:n.NEVER,[K_]:n.ALWAYS,[q_]:n.LESS,[R0]:n.LEQUAL,[X_]:n.EQUAL,[Y_]:n.GEQUAL,[j_]:n.GREATER,[$_]:n.NOTEQUAL};function te(x,S,G){if(G?(n.texParameteri(x,n.TEXTURE_WRAP_S,le[S.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,le[S.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,le[S.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,de[S.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,de[S.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==Yn||S.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,E(S.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,E(S.minFilter)),S.minFilter!==dn&&S.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ge=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===dn||S.minFilter!==vu&&S.minFilter!==pa||S.type===Yi&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ma&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(x,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function O(x,S){let G=!1;x.__webglInit===void 0&&(x.__webglInit=!0,S.addEventListener("dispose",A));const ge=S.source;let ve=f.get(ge);ve===void 0&&(ve={},f.set(ge,ve));const ue=q(S);if(ue!==x.__cacheKey){ve[ue]===void 0&&(ve[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ve[ue].usedTimes++;const Te=ve[x.__cacheKey];Te!==void 0&&(ve[x.__cacheKey].usedTimes--,Te.usedTimes===0&&w(S)),x.__cacheKey=ue,x.__webglTexture=ve[ue].texture}return G}function D(x,S,G){let ge=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ge=n.TEXTURE_3D);const ve=O(x,S),ue=S.source;t.bindTexture(ge,x.__webglTexture,n.TEXTURE0+G);const Te=i.get(ue);if(ue.version!==Te.__version||ve===!0){t.activeTexture(n.TEXTURE0+G);const _e=st.getPrimaries(st.workingColorSpace),Re=S.colorSpace===Un?null:st.getPrimaries(S.colorSpace),Ne=S.colorSpace===Un||_e===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const Fe=h(S)&&p(S.image)===!1;let ye=y(S.image,Fe,!1,s.maxTextureSize);ye=F(S,ye);const Qe=p(ye)||a,qe=r.convert(S.format,S.colorSpace);let ze=r.convert(S.type),De=b(S.internalFormat,qe,ze,S.colorSpace,S.isVideoTexture);te(ge,S,Qe);let Le;const Xe=S.mipmaps,nt=a&&S.isVideoTexture!==!0&&De!==E0,yt=Te.__version===void 0||ve===!0,Ke=R(S,ye,Qe);if(S.isDepthTexture)De=n.DEPTH_COMPONENT,a?S.type===Yi?De=n.DEPTH_COMPONENT32F:S.type===$i?De=n.DEPTH_COMPONENT24:S.type===Bs?De=n.DEPTH24_STENCIL8:De=n.DEPTH_COMPONENT16:S.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Hs&&De===n.DEPTH_COMPONENT&&S.type!==zh&&S.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=$i,ze=r.convert(S.type)),S.format===co&&De===n.DEPTH_COMPONENT&&(De=n.DEPTH_STENCIL,S.type!==Bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Bs,ze=r.convert(S.type))),yt&&(nt?t.texStorage2D(n.TEXTURE_2D,1,De,ye.width,ye.height):t.texImage2D(n.TEXTURE_2D,0,De,ye.width,ye.height,0,qe,ze,null));else if(S.isDataTexture)if(Xe.length>0&&Qe){nt&&yt&&t.texStorage2D(n.TEXTURE_2D,Ke,De,Xe[0].width,Xe[0].height);for(let be=0,H=Xe.length;be<H;be++)Le=Xe[be],nt?t.texSubImage2D(n.TEXTURE_2D,be,0,0,Le.width,Le.height,qe,ze,Le.data):t.texImage2D(n.TEXTURE_2D,be,De,Le.width,Le.height,0,qe,ze,Le.data);S.generateMipmaps=!1}else nt?(yt&&t.texStorage2D(n.TEXTURE_2D,Ke,De,ye.width,ye.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye.width,ye.height,qe,ze,ye.data)):t.texImage2D(n.TEXTURE_2D,0,De,ye.width,ye.height,0,qe,ze,ye.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){nt&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,De,Xe[0].width,Xe[0].height,ye.depth);for(let be=0,H=Xe.length;be<H;be++)Le=Xe[be],S.format!==Kn?qe!==null?nt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,Le.width,Le.height,ye.depth,qe,Le.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,be,De,Le.width,Le.height,ye.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,Le.width,Le.height,ye.depth,qe,ze,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,be,De,Le.width,Le.height,ye.depth,0,qe,ze,Le.data)}else{nt&&yt&&t.texStorage2D(n.TEXTURE_2D,Ke,De,Xe[0].width,Xe[0].height);for(let be=0,H=Xe.length;be<H;be++)Le=Xe[be],S.format!==Kn?qe!==null?nt?t.compressedTexSubImage2D(n.TEXTURE_2D,be,0,0,Le.width,Le.height,qe,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,be,De,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(n.TEXTURE_2D,be,0,0,Le.width,Le.height,qe,ze,Le.data):t.texImage2D(n.TEXTURE_2D,be,De,Le.width,Le.height,0,qe,ze,Le.data)}else if(S.isDataArrayTexture)nt?(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,De,ye.width,ye.height,ye.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,qe,ze,ye.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ye.width,ye.height,ye.depth,0,qe,ze,ye.data);else if(S.isData3DTexture)nt?(yt&&t.texStorage3D(n.TEXTURE_3D,Ke,De,ye.width,ye.height,ye.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,qe,ze,ye.data)):t.texImage3D(n.TEXTURE_3D,0,De,ye.width,ye.height,ye.depth,0,qe,ze,ye.data);else if(S.isFramebufferTexture){if(yt)if(nt)t.texStorage2D(n.TEXTURE_2D,Ke,De,ye.width,ye.height);else{let be=ye.width,H=ye.height;for(let Me=0;Me<Ke;Me++)t.texImage2D(n.TEXTURE_2D,Me,De,be,H,0,qe,ze,null),be>>=1,H>>=1}}else if(Xe.length>0&&Qe){nt&&yt&&t.texStorage2D(n.TEXTURE_2D,Ke,De,Xe[0].width,Xe[0].height);for(let be=0,H=Xe.length;be<H;be++)Le=Xe[be],nt?t.texSubImage2D(n.TEXTURE_2D,be,0,0,qe,ze,Le):t.texImage2D(n.TEXTURE_2D,be,De,qe,ze,Le);S.generateMipmaps=!1}else nt?(yt&&t.texStorage2D(n.TEXTURE_2D,Ke,De,ye.width,ye.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,qe,ze,ye)):t.texImage2D(n.TEXTURE_2D,0,De,qe,ze,ye);_(S,Qe)&&v(ge),Te.__version=ue.version,S.onUpdate&&S.onUpdate(S)}x.__version=S.version}function C(x,S,G){if(S.image.length!==6)return;const ge=O(x,S),ve=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+G);const ue=i.get(ve);if(ve.version!==ue.__version||ge===!0){t.activeTexture(n.TEXTURE0+G);const Te=st.getPrimaries(st.workingColorSpace),_e=S.colorSpace===Un?null:st.getPrimaries(S.colorSpace),Re=S.colorSpace===Un||Te===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ne=S.isCompressedTexture||S.image[0].isCompressedTexture,Fe=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let be=0;be<6;be++)!Ne&&!Fe?ye[be]=y(S.image[be],!1,!0,s.maxCubemapSize):ye[be]=Fe?S.image[be].image:S.image[be],ye[be]=F(S,ye[be]);const Qe=ye[0],qe=p(Qe)||a,ze=r.convert(S.format,S.colorSpace),De=r.convert(S.type),Le=b(S.internalFormat,ze,De,S.colorSpace),Xe=a&&S.isVideoTexture!==!0,nt=ue.__version===void 0||ge===!0;let yt=R(S,Qe,qe);te(n.TEXTURE_CUBE_MAP,S,qe);let Ke;if(Ne){Xe&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,yt,Le,Qe.width,Qe.height);for(let be=0;be<6;be++){Ke=ye[be].mipmaps;for(let H=0;H<Ke.length;H++){const Me=Ke[H];S.format!==Kn?ze!==null?Xe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,0,0,Me.width,Me.height,ze,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,Le,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,0,0,Me.width,Me.height,ze,De,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,Le,Me.width,Me.height,0,ze,De,Me.data)}}}else{Ke=S.mipmaps,Xe&&nt&&(Ke.length>0&&yt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,yt,Le,ye[0].width,ye[0].height));for(let be=0;be<6;be++)if(Fe){Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ye[be].width,ye[be].height,ze,De,ye[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Le,ye[be].width,ye[be].height,0,ze,De,ye[be].data);for(let H=0;H<Ke.length;H++){const we=Ke[H].image[be].image;Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,0,0,we.width,we.height,ze,De,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,Le,we.width,we.height,0,ze,De,we.data)}}else{Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ze,De,ye[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Le,ze,De,ye[be]);for(let H=0;H<Ke.length;H++){const Me=Ke[H];Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,0,0,ze,De,Me.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,Le,ze,De,Me.image[be])}}}_(S,qe)&&v(n.TEXTURE_CUBE_MAP),ue.__version=ve.version,S.onUpdate&&S.onUpdate(S)}x.__version=S.version}function T(x,S,G,ge,ve,ue){const Te=r.convert(G.format,G.colorSpace),_e=r.convert(G.type),Re=b(G.internalFormat,Te,_e,G.colorSpace);if(!i.get(S).__hasExternalTextures){const Fe=Math.max(1,S.width>>ue),ye=Math.max(1,S.height>>ue);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,ue,Re,Fe,ye,S.depth,0,Te,_e,null):t.texImage2D(ve,ue,Re,Fe,ye,0,Te,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),j(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,ve,i.get(G).__webglTexture,0,Y(S)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,ve,i.get(G).__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(x,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,x),S.depthBuffer&&!S.stencilBuffer){let ge=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(G||j(S)){const ve=S.depthTexture;ve&&ve.isDepthTexture&&(ve.type===Yi?ge=n.DEPTH_COMPONENT32F:ve.type===$i&&(ge=n.DEPTH_COMPONENT24));const ue=Y(S);j(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,ge,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,ge,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,ge,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(S.depthBuffer&&S.stencilBuffer){const ge=Y(S);G&&j(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,S.width,S.height):j(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const ge=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ve=0;ve<ge.length;ve++){const ue=ge[ve],Te=r.convert(ue.format,ue.colorSpace),_e=r.convert(ue.type),Re=b(ue.internalFormat,Te,_e,ue.colorSpace),Ne=Y(S);G&&j(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Re,S.width,S.height):j(S)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,Re,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Re,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(x,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const ge=i.get(S.depthTexture).__webglTexture,ve=Y(S);if(S.depthTexture.format===Hs)j(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(S.depthTexture.format===co)j(S)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function X(x){const S=i.get(x),G=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ce(S.__webglFramebuffer,x)}else if(G){S.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ge]),S.__webglDepthbuffer[ge]=n.createRenderbuffer(),ee(S.__webglDepthbuffer[ge],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),ee(S.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(x,S,G){const ge=i.get(x);S!==void 0&&T(ge.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&X(x)}function P(x){const S=x.texture,G=i.get(x),ge=i.get(S);x.addEventListener("dispose",U),x.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=S.version,o.memory.textures++);const ve=x.isWebGLCubeRenderTarget===!0,ue=x.isWebGLMultipleRenderTargets===!0,Te=p(x)||a;if(ve){G.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(a&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[_e]=[];for(let Re=0;Re<S.mipmaps.length;Re++)G.__webglFramebuffer[_e][Re]=n.createFramebuffer()}else G.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let _e=0;_e<S.mipmaps.length;_e++)G.__webglFramebuffer[_e]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ue)if(s.drawBuffers){const _e=x.texture;for(let Re=0,Ne=_e.length;Re<Ne;Re++){const Fe=i.get(_e[Re]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&x.samples>0&&j(x)===!1){const _e=ue?S:[S];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Re=0;Re<_e.length;Re++){const Ne=_e[Re];G.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Re]);const Fe=r.convert(Ne.format,Ne.colorSpace),ye=r.convert(Ne.type),Qe=b(Ne.internalFormat,Fe,ye,Ne.colorSpace,x.isXRRenderTarget===!0),qe=Y(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Qe,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,G.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(G.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),te(n.TEXTURE_CUBE_MAP,S,Te);for(let _e=0;_e<6;_e++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)T(G.__webglFramebuffer[_e][Re],x,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re);else T(G.__webglFramebuffer[_e],x,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);_(S,Te)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const _e=x.texture;for(let Re=0,Ne=_e.length;Re<Ne;Re++){const Fe=_e[Re],ye=i.get(Fe);t.bindTexture(n.TEXTURE_2D,ye.__webglTexture),te(n.TEXTURE_2D,Fe,Te),T(G.__webglFramebuffer,x,Fe,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),_(Fe,Te)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?_e=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,ge.__webglTexture),te(_e,S,Te),a&&S.mipmaps&&S.mipmaps.length>0)for(let Re=0;Re<S.mipmaps.length;Re++)T(G.__webglFramebuffer[Re],x,S,n.COLOR_ATTACHMENT0,_e,Re);else T(G.__webglFramebuffer,x,S,n.COLOR_ATTACHMENT0,_e,0);_(S,Te)&&v(_e),t.unbindTexture()}x.depthBuffer&&X(x)}function ie(x){const S=p(x)||a,G=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ge=0,ve=G.length;ge<ve;ge++){const ue=G[ge];if(_(ue,S)){const Te=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=i.get(ue).__webglTexture;t.bindTexture(Te,_e),v(Te),t.unbindTexture()}}}function z(x){if(a&&x.samples>0&&j(x)===!1){const S=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],G=x.width,ge=x.height;let ve=n.COLOR_BUFFER_BIT;const ue=[],Te=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(x),Re=x.isWebGLMultipleRenderTargets===!0;if(Re)for(let Ne=0;Ne<S.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ne=0;Ne<S.length;Ne++){ue.push(n.COLOR_ATTACHMENT0+Ne),x.depthBuffer&&ue.push(Te);const Fe=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(Fe===!1&&(x.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ne]),Fe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Te])),Re){const ye=i.get(S[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,G,ge,0,0,G,ge,ve,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let Ne=0;Ne<S.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,_e.__webglColorRenderbuffer[Ne]);const Fe=i.get(S[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function Y(x){return Math.min(s.maxSamples,x.samples)}function j(x){const S=i.get(x);return a&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(x){const S=o.render.frame;u.get(x)!==S&&(u.set(x,S),x.update())}function F(x,S){const G=x.colorSpace,ge=x.format,ve=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Od||G!==Di&&G!==Un&&(st.getTransfer(G)===dt?a===!1?e.has("EXT_sRGB")===!0&&ge===Kn?(x.format=Od,x.minFilter=Dn,x.generateMipmaps=!1):S=L0.sRGBToLinear(S):(ge!==Kn||ve!==rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}this.allocateTextureUnit=k,this.resetTextureUnits=oe,this.setTexture2D=$,this.setTexture2DArray=K,this.setTexture3D=B,this.setTextureCube=Q,this.rebindTextures=he,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=T,this.useMultisampledRTT=j}function uA(n,e,t){const i=t.isWebGL2;function s(r,o=Un){let a;const l=st.getTransfer(o);if(r===rs)return n.UNSIGNED_BYTE;if(r===_0)return n.UNSIGNED_SHORT_4_4_4_4;if(r===b0)return n.UNSIGNED_SHORT_5_5_5_1;if(r===N_)return n.BYTE;if(r===D_)return n.SHORT;if(r===zh)return n.UNSIGNED_SHORT;if(r===x0)return n.INT;if(r===$i)return n.UNSIGNED_INT;if(r===Yi)return n.FLOAT;if(r===ma)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===O_)return n.ALPHA;if(r===Kn)return n.RGBA;if(r===k_)return n.LUMINANCE;if(r===U_)return n.LUMINANCE_ALPHA;if(r===Hs)return n.DEPTH_COMPONENT;if(r===co)return n.DEPTH_STENCIL;if(r===Od)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===F_)return n.RED;if(r===S0)return n.RED_INTEGER;if(r===z_)return n.RG;if(r===M0)return n.RG_INTEGER;if(r===w0)return n.RGBA_INTEGER;if(r===yu||r===xu||r===_u||r===bu)if(l===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===yu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_u)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===yu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_u)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qf||r===Xf||r===jf||r===$f)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===qf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$f)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===E0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Yf||r===Kf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Yf)return l===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Kf)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zf||r===Jf||r===Qf||r===ep||r===tp||r===np||r===ip||r===sp||r===rp||r===op||r===ap||r===lp||r===cp||r===up)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Zf)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jf)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qf)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ep)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===np)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ip)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===op)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ap)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===up)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Su||r===dp||r===hp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Su)return l===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===dp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===B_||r===fp||r===pp||r===mp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Su)return a.COMPRESSED_RED_RGTC1_EXT;if(r===fp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===mp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bs?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class dA extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ct extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hA={type:"move"};class qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,i),h=this._getHandJoint(c,y);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class fA extends _o{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null;const y=t.getContextAttributes();let p=null,h=null;const _=[],v=[],b=new me;let R=null;const E=new wn;E.layers.enable(1),E.viewport=new Wt;const A=new wn;A.layers.enable(2),A.viewport=new Wt;const U=[E,A],M=new dA;M.layers.enable(1),M.layers.enable(2);let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let O=_[te];return O===void 0&&(O=new qu,_[te]=O),O.getTargetRaySpace()},this.getControllerGrip=function(te){let O=_[te];return O===void 0&&(O=new qu,_[te]=O),O.getGripSpace()},this.getHand=function(te){let O=_[te];return O===void 0&&(O=new qu,_[te]=O),O.getHandSpace()};function W(te){const O=v.indexOf(te.inputSource);if(O===-1)return;const D=_[O];D!==void 0&&(D.update(te.inputSource,te.frame,c||o),D.dispatchEvent({type:te.type,data:te.inputSource}))}function oe(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",k);for(let te=0;te<_.length;te++){const O=v[te];O!==null&&(v[te]=null,_[te].disconnect(O))}w=null,V=null,e.setRenderTarget(p),m=null,f=null,d=null,s=null,h=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,O),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),h=new Ks(m.framebufferWidth,m.framebufferHeight,{format:Kn,type:rs,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let O=null,D=null,C=null;y.depth&&(C=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=y.stencil?co:Hs,D=y.stencil?Bs:$i);const T={colorFormat:t.RGBA8,depthFormat:C,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(T),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),h=new Ks(f.textureWidth,f.textureHeight,{format:Kn,type:rs,depthTexture:new G0(f.textureWidth,f.textureHeight,D,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ee=e.properties.get(h);ee.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(te){for(let O=0;O<te.removed.length;O++){const D=te.removed[O],C=v.indexOf(D);C>=0&&(v[C]=null,_[C].disconnect(D))}for(let O=0;O<te.added.length;O++){const D=te.added[O];let C=v.indexOf(D);if(C===-1){for(let ee=0;ee<_.length;ee++)if(ee>=v.length){v.push(D),C=ee;break}else if(v[ee]===null){v[ee]=D,C=ee;break}if(C===-1)break}const T=_[C];T&&T.connect(D)}}const q=new I,$=new I;function K(te,O,D){q.setFromMatrixPosition(O.matrixWorld),$.setFromMatrixPosition(D.matrixWorld);const C=q.distanceTo($),T=O.projectionMatrix.elements,ee=D.projectionMatrix.elements,ce=T[14]/(T[10]-1),X=T[14]/(T[10]+1),he=(T[9]+1)/T[5],P=(T[9]-1)/T[5],ie=(T[8]-1)/T[0],z=(ee[8]+1)/ee[0],Y=ce*ie,j=ce*z,pe=C/(-ie+z),F=pe*-ie;O.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(F),te.translateZ(pe),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const x=ce+pe,S=X+pe,G=Y-F,ge=j+(C-F),ve=he*X/S*x,ue=P*X/S*x;te.projectionMatrix.makePerspective(G,ge,ve,ue,x,S),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function B(te,O){O===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(O.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;M.near=A.near=E.near=te.near,M.far=A.far=E.far=te.far,(w!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,V=M.far);const O=te.parent,D=M.cameras;B(M,O);for(let C=0;C<D.length;C++)B(D[C],O);D.length===2?K(M,E,A):M.projectionMatrix.copy(E.projectionMatrix),Q(te,M,O)};function Q(te,O,D){D===null?te.matrix.copy(O.matrixWorld):(te.matrix.copy(D.matrixWorld),te.matrix.invert(),te.matrix.multiply(O.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(O.projectionMatrix),te.projectionMatrixInverse.copy(O.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ga*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)};let le=null;function de(te,O){if(u=O.getViewerPose(c||o),g=O,u!==null){const D=u.views;m!==null&&(e.setRenderTargetFramebuffer(h,m.framebuffer),e.setRenderTarget(h));let C=!1;D.length!==M.cameras.length&&(M.cameras.length=0,C=!0);for(let T=0;T<D.length;T++){const ee=D[T];let ce=null;if(m!==null)ce=m.getViewport(ee);else{const he=d.getViewSubImage(f,ee);ce=he.viewport,T===0&&(e.setRenderTargetTextures(h,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(h))}let X=U[T];X===void 0&&(X=new wn,X.layers.enable(T),X.viewport=new Wt,U[T]=X),X.matrix.fromArray(ee.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(ee.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(ce.x,ce.y,ce.width,ce.height),T===0&&(M.matrix.copy(X.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),C===!0&&M.cameras.push(X)}}for(let D=0;D<_.length;D++){const C=v[D],T=_[D];C!==null&&T!==void 0&&T.update(C,O,c||o)}le&&le(te,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),g=null}const xe=new B0;xe.setAnimationLoop(de),this.setAnimationLoop=function(te){le=te},this.dispose=function(){}}}function pA(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,U0(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function s(p,h,_,v,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),d(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(r(p,h),g(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),y(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,_,v):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===yn&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===yn&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const _=e.get(h).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*v,t(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,_,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*_,p.scale.value=v*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,_){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===yn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function y(p,h){const _=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function mA(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const b=v.program;i.uniformBlockBinding(_,b)}function c(_,v){let b=s[_.id];b===void 0&&(g(_),b=u(_),s[_.id]=b,_.addEventListener("dispose",p));const R=v.program;i.updateUBOMapping(_,R);const E=e.render.frame;r[_.id]!==E&&(f(_),r[_.id]=E)}function u(_){const v=d();_.__bindingPointIndex=v;const b=n.createBuffer(),R=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,b),b}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=s[_.id],b=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,A=b.length;E<A;E++){const U=Array.isArray(b[E])?b[E]:[b[E]];for(let M=0,w=U.length;M<w;M++){const V=U[M];if(m(V,E,M,R)===!0){const W=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let k=0;for(let q=0;q<oe.length;q++){const $=oe[q],K=y($);typeof $=="number"||typeof $=="boolean"?(V.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,W+k,V.__data)):$.isMatrix3?(V.__data[0]=$.elements[0],V.__data[1]=$.elements[1],V.__data[2]=$.elements[2],V.__data[3]=0,V.__data[4]=$.elements[3],V.__data[5]=$.elements[4],V.__data[6]=$.elements[5],V.__data[7]=0,V.__data[8]=$.elements[6],V.__data[9]=$.elements[7],V.__data[10]=$.elements[8],V.__data[11]=0):($.toArray(V.__data,k),k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(_,v,b,R){const E=_.value,A=v+"_"+b;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{const U=R[A];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return R[A]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function g(_){const v=_.uniforms;let b=0;const R=16;for(let A=0,U=v.length;A<U;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,V=M.length;w<V;w++){const W=M[w],oe=Array.isArray(W.value)?W.value:[W.value];for(let k=0,q=oe.length;k<q;k++){const $=oe[k],K=y($),B=b%R;B!==0&&R-B<K.boundary&&(b+=R-B),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=K.storage}}}const E=b%R;return E>0&&(b+=R-E),_.__size=b,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function h(){for(const _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class qh{constructor(e={}){const{canvas:t=db(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let y=null,p=null;const h=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=ss,this.toneMappingExposure=1;const v=this;let b=!1,R=0,E=0,A=null,U=-1,M=null;const w=new Wt,V=new Wt;let W=null;const oe=new Ae(0);let k=0,q=t.width,$=t.height,K=1,B=null,Q=null;const le=new Wt(0,0,q,$),de=new Wt(0,0,q,$);let xe=!1;const te=new Vh;let O=!1,D=!1,C=null;const T=new Je,ee=new me,ce=new I,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return A===null?K:1}let P=i;function ie(L,Z){for(let re=0;re<L.length;re++){const ae=L[re],se=t.getContext(ae,Z);if(se!==null)return se}return null}try{const L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uh}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Me,!1),P===null){const Z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Z.shift(),P=ie(Z,L),P===null)throw ie(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let z,Y,j,pe,F,x,S,G,ge,ve,ue,Te,_e,Re,Ne,Fe,ye,Qe,qe,ze,De,Le,Xe,nt;function yt(){z=new Ew(P),Y=new xw(P,z,e),z.init(Y),Le=new uA(P,z,Y),j=new lA(P,z,Y),pe=new Rw(P),F=new $E,x=new cA(P,z,j,F,Y,Le,pe),S=new bw(v),G=new ww(v),ge=new kb(P,Y),Xe=new vw(P,z,ge,Y),ve=new Aw(P,ge,pe,Xe),ue=new Iw(P,ve,ge,pe),qe=new Pw(P,Y,x),Fe=new _w(F),Te=new jE(v,S,G,z,Y,Xe,Fe),_e=new pA(v,F),Re=new KE,Ne=new nA(z,Y),Qe=new gw(v,S,G,j,ue,f,l),ye=new aA(v,ue,Y),nt=new mA(P,pe,Y,j),ze=new yw(P,z,pe,Y),De=new Tw(P,z,pe,Y),pe.programs=Te.programs,v.capabilities=Y,v.extensions=z,v.properties=F,v.renderLists=Re,v.shadowMap=ye,v.state=j,v.info=pe}yt();const Ke=new fA(v,P);this.xr=Ke,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const L=z.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=z.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(L){L!==void 0&&(K=L,this.setSize(q,$,!1))},this.getSize=function(L){return L.set(q,$)},this.setSize=function(L,Z,re=!0){if(Ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=L,$=Z,t.width=Math.floor(L*K),t.height=Math.floor(Z*K),re===!0&&(t.style.width=L+"px",t.style.height=Z+"px"),this.setViewport(0,0,L,Z)},this.getDrawingBufferSize=function(L){return L.set(q*K,$*K).floor()},this.setDrawingBufferSize=function(L,Z,re){q=L,$=Z,K=re,t.width=Math.floor(L*re),t.height=Math.floor(Z*re),this.setViewport(0,0,L,Z)},this.getCurrentViewport=function(L){return L.copy(w)},this.getViewport=function(L){return L.copy(le)},this.setViewport=function(L,Z,re,ae){L.isVector4?le.set(L.x,L.y,L.z,L.w):le.set(L,Z,re,ae),j.viewport(w.copy(le).multiplyScalar(K).floor())},this.getScissor=function(L){return L.copy(de)},this.setScissor=function(L,Z,re,ae){L.isVector4?de.set(L.x,L.y,L.z,L.w):de.set(L,Z,re,ae),j.scissor(V.copy(de).multiplyScalar(K).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(L){j.setScissorTest(xe=L)},this.setOpaqueSort=function(L){B=L},this.setTransparentSort=function(L){Q=L},this.getClearColor=function(L){return L.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(L=!0,Z=!0,re=!0){let ae=0;if(L){let se=!1;if(A!==null){const Ce=A.texture.format;se=Ce===w0||Ce===M0||Ce===S0}if(se){const Ce=A.texture.type,Ie=Ce===rs||Ce===$i||Ce===zh||Ce===Bs||Ce===_0||Ce===b0,ke=Qe.getClearColor(),Be=Qe.getClearAlpha(),$e=ke.r,Ve=ke.g,We=ke.b;Ie?(m[0]=$e,m[1]=Ve,m[2]=We,m[3]=Be,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=$e,g[1]=Ve,g[2]=We,g[3]=Be,P.clearBufferiv(P.COLOR,0,g))}else ae|=P.COLOR_BUFFER_BIT}Z&&(ae|=P.DEPTH_BUFFER_BIT),re&&(ae|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Re.dispose(),Ne.dispose(),F.dispose(),S.dispose(),G.dispose(),ue.dispose(),Xe.dispose(),nt.dispose(),Te.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",sn),Ke.removeEventListener("sessionend",lt),C&&(C.dispose(),C=null),rn.stop()};function be(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const L=pe.autoReset,Z=ye.enabled,re=ye.autoUpdate,ae=ye.needsUpdate,se=ye.type;yt(),pe.autoReset=L,ye.enabled=Z,ye.autoUpdate=re,ye.needsUpdate=ae,ye.type=se}function Me(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function we(L){const Z=L.target;Z.removeEventListener("dispose",we),Ue(Z)}function Ue(L){Oe(L),F.remove(L)}function Oe(L){const Z=F.get(L).programs;Z!==void 0&&(Z.forEach(function(re){Te.releaseProgram(re)}),L.isShaderMaterial&&Te.releaseShaderCache(L))}this.renderBufferDirect=function(L,Z,re,ae,se,Ce){Z===null&&(Z=X);const Ie=se.isMesh&&se.matrixWorld.determinant()<0,ke=nx(L,Z,re,ae,se);j.setMaterial(ae,Ie);let Be=re.index,$e=1;if(ae.wireframe===!0){if(Be=ve.getWireframeAttribute(re),Be===void 0)return;$e=2}const Ve=re.drawRange,We=re.attributes.position;let Mt=Ve.start*$e,bn=(Ve.start+Ve.count)*$e;Ce!==null&&(Mt=Math.max(Mt,Ce.start*$e),bn=Math.min(bn,(Ce.start+Ce.count)*$e)),Be!==null?(Mt=Math.max(Mt,0),bn=Math.min(bn,Be.count)):We!=null&&(Mt=Math.max(Mt,0),bn=Math.min(bn,We.count));const zt=bn-Mt;if(zt<0||zt===1/0)return;Xe.setup(se,ae,ke,re,Be);let gi,ft=ze;if(Be!==null&&(gi=ge.get(Be),ft=De,ft.setIndex(gi)),se.isMesh)ae.wireframe===!0?(j.setLineWidth(ae.wireframeLinewidth*he()),ft.setMode(P.LINES)):ft.setMode(P.TRIANGLES);else if(se.isLine){let Ze=ae.linewidth;Ze===void 0&&(Ze=1),j.setLineWidth(Ze*he()),se.isLineSegments?ft.setMode(P.LINES):se.isLineLoop?ft.setMode(P.LINE_LOOP):ft.setMode(P.LINE_STRIP)}else se.isPoints?ft.setMode(P.POINTS):se.isSprite&&ft.setMode(P.TRIANGLES);if(se.isBatchedMesh)ft.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else if(se.isInstancedMesh)ft.renderInstances(Mt,zt,se.count);else if(re.isInstancedBufferGeometry){const Ze=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,au=Math.min(re.instanceCount,Ze);ft.renderInstances(Mt,zt,au)}else ft.render(Mt,zt)};function ot(L,Z,re){L.transparent===!0&&L.side===$t&&L.forceSinglePass===!1?(L.side=yn,L.needsUpdate=!0,Oa(L,Z,re),L.side=cs,L.needsUpdate=!0,Oa(L,Z,re),L.side=$t):Oa(L,Z,re)}this.compile=function(L,Z,re=null){re===null&&(re=L),p=Ne.get(re),p.init(),_.push(p),re.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(p.pushLight(se),se.castShadow&&p.pushShadow(se))}),L!==re&&L.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(p.pushLight(se),se.castShadow&&p.pushShadow(se))}),p.setupLights(v._useLegacyLights);const ae=new Set;return L.traverse(function(se){const Ce=se.material;if(Ce)if(Array.isArray(Ce))for(let Ie=0;Ie<Ce.length;Ie++){const ke=Ce[Ie];ot(ke,re,se),ae.add(ke)}else ot(Ce,re,se),ae.add(Ce)}),_.pop(),p=null,ae},this.compileAsync=function(L,Z,re=null){const ae=this.compile(L,Z,re);return new Promise(se=>{function Ce(){if(ae.forEach(function(Ie){F.get(Ie).currentProgram.isReady()&&ae.delete(Ie)}),ae.size===0){se(L);return}setTimeout(Ce,10)}z.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let at=null;function Ft(L){at&&at(L)}function sn(){rn.stop()}function lt(){rn.start()}const rn=new B0;rn.setAnimationLoop(Ft),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(L){at=L,Ke.setAnimationLoop(L),L===null?rn.stop():rn.start()},Ke.addEventListener("sessionstart",sn),Ke.addEventListener("sessionend",lt),this.render=function(L,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(Z),Z=Ke.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,Z,A),p=Ne.get(L,_.length),p.init(),_.push(p),T.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),te.setFromProjectionMatrix(T),D=this.localClippingEnabled,O=Fe.init(this.clippingPlanes,D),y=Re.get(L,h.length),y.init(),h.push(y),ni(L,Z,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(B,Q),this.info.render.frame++,O===!0&&Fe.beginShadows();const re=p.state.shadowsArray;if(ye.render(re,L,Z),O===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(y,L),p.setupLights(v._useLegacyLights),Z.isArrayCamera){const ae=Z.cameras;for(let se=0,Ce=ae.length;se<Ce;se++){const Ie=ae[se];Sf(y,L,Ie,Ie.viewport)}}else Sf(y,L,Z);A!==null&&(x.updateMultisampleRenderTarget(A),x.updateRenderTargetMipmap(A)),L.isScene===!0&&L.onAfterRender(v,L,Z),Xe.resetDefaultState(),U=-1,M=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function ni(L,Z,re,ae){if(L.visible===!1)return;if(L.layers.test(Z.layers)){if(L.isGroup)re=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Z);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||te.intersectsSprite(L)){ae&&ce.setFromMatrixPosition(L.matrixWorld).applyMatrix4(T);const Ie=ue.update(L),ke=L.material;ke.visible&&y.push(L,Ie,ke,re,ce.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||te.intersectsObject(L))){const Ie=ue.update(L),ke=L.material;if(ae&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ce.copy(L.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ce.copy(Ie.boundingSphere.center)),ce.applyMatrix4(L.matrixWorld).applyMatrix4(T)),Array.isArray(ke)){const Be=Ie.groups;for(let $e=0,Ve=Be.length;$e<Ve;$e++){const We=Be[$e],Mt=ke[We.materialIndex];Mt&&Mt.visible&&y.push(L,Ie,Mt,re,ce.z,We)}}else ke.visible&&y.push(L,Ie,ke,re,ce.z,null)}}const Ce=L.children;for(let Ie=0,ke=Ce.length;Ie<ke;Ie++)ni(Ce[Ie],Z,re,ae)}function Sf(L,Z,re,ae){const se=L.opaque,Ce=L.transmissive,Ie=L.transparent;p.setupLightsView(re),O===!0&&Fe.setGlobalState(v.clippingPlanes,re),Ce.length>0&&tx(se,Ce,Z,re),ae&&j.viewport(w.copy(ae)),se.length>0&&Da(se,Z,re),Ce.length>0&&Da(Ce,Z,re),Ie.length>0&&Da(Ie,Z,re),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function tx(L,Z,re,ae){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;const Ce=Y.isWebGL2;C===null&&(C=new Ks(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")?ma:rs,minFilter:pa,samples:Ce?4:0})),v.getDrawingBufferSize(ee),Ce?C.setSize(ee.x,ee.y):C.setSize(cc(ee.x),cc(ee.y));const Ie=v.getRenderTarget();v.setRenderTarget(C),v.getClearColor(oe),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear();const ke=v.toneMapping;v.toneMapping=ss,Da(L,re,ae),x.updateMultisampleRenderTarget(C),x.updateRenderTargetMipmap(C);let Be=!1;for(let $e=0,Ve=Z.length;$e<Ve;$e++){const We=Z[$e],Mt=We.object,bn=We.geometry,zt=We.material,gi=We.group;if(zt.side===$t&&Mt.layers.test(ae.layers)){const ft=zt.side;zt.side=yn,zt.needsUpdate=!0,Mf(Mt,re,ae,bn,zt,gi),zt.side=ft,zt.needsUpdate=!0,Be=!0}}Be===!0&&(x.updateMultisampleRenderTarget(C),x.updateRenderTargetMipmap(C)),v.setRenderTarget(Ie),v.setClearColor(oe,k),v.toneMapping=ke}function Da(L,Z,re){const ae=Z.isScene===!0?Z.overrideMaterial:null;for(let se=0,Ce=L.length;se<Ce;se++){const Ie=L[se],ke=Ie.object,Be=Ie.geometry,$e=ae===null?Ie.material:ae,Ve=Ie.group;ke.layers.test(re.layers)&&Mf(ke,Z,re,Be,$e,Ve)}}function Mf(L,Z,re,ae,se,Ce){L.onBeforeRender(v,Z,re,ae,se,Ce),L.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),se.onBeforeRender(v,Z,re,ae,L,Ce),se.transparent===!0&&se.side===$t&&se.forceSinglePass===!1?(se.side=yn,se.needsUpdate=!0,v.renderBufferDirect(re,Z,ae,se,L,Ce),se.side=cs,se.needsUpdate=!0,v.renderBufferDirect(re,Z,ae,se,L,Ce),se.side=$t):v.renderBufferDirect(re,Z,ae,se,L,Ce),L.onAfterRender(v,Z,re,ae,se,Ce)}function Oa(L,Z,re){Z.isScene!==!0&&(Z=X);const ae=F.get(L),se=p.state.lights,Ce=p.state.shadowsArray,Ie=se.state.version,ke=Te.getParameters(L,se.state,Ce,Z,re),Be=Te.getProgramCacheKey(ke);let $e=ae.programs;ae.environment=L.isMeshStandardMaterial?Z.environment:null,ae.fog=Z.fog,ae.envMap=(L.isMeshStandardMaterial?G:S).get(L.envMap||ae.environment),$e===void 0&&(L.addEventListener("dispose",we),$e=new Map,ae.programs=$e);let Ve=$e.get(Be);if(Ve!==void 0){if(ae.currentProgram===Ve&&ae.lightsStateVersion===Ie)return Ef(L,ke),Ve}else ke.uniforms=Te.getUniforms(L),L.onBuild(re,ke,v),L.onBeforeCompile(ke,v),Ve=Te.acquireProgram(ke,Be),$e.set(Be,Ve),ae.uniforms=ke.uniforms;const We=ae.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(We.clippingPlanes=Fe.uniform),Ef(L,ke),ae.needsLights=sx(L),ae.lightsStateVersion=Ie,ae.needsLights&&(We.ambientLightColor.value=se.state.ambient,We.lightProbe.value=se.state.probe,We.directionalLights.value=se.state.directional,We.directionalLightShadows.value=se.state.directionalShadow,We.spotLights.value=se.state.spot,We.spotLightShadows.value=se.state.spotShadow,We.rectAreaLights.value=se.state.rectArea,We.ltc_1.value=se.state.rectAreaLTC1,We.ltc_2.value=se.state.rectAreaLTC2,We.pointLights.value=se.state.point,We.pointLightShadows.value=se.state.pointShadow,We.hemisphereLights.value=se.state.hemi,We.directionalShadowMap.value=se.state.directionalShadowMap,We.directionalShadowMatrix.value=se.state.directionalShadowMatrix,We.spotShadowMap.value=se.state.spotShadowMap,We.spotLightMatrix.value=se.state.spotLightMatrix,We.spotLightMap.value=se.state.spotLightMap,We.pointShadowMap.value=se.state.pointShadowMap,We.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.currentProgram=Ve,ae.uniformsList=null,Ve}function wf(L){if(L.uniformsList===null){const Z=L.currentProgram.getUniforms();L.uniformsList=Ul.seqWithValue(Z.seq,L.uniforms)}return L.uniformsList}function Ef(L,Z){const re=F.get(L);re.outputColorSpace=Z.outputColorSpace,re.batching=Z.batching,re.instancing=Z.instancing,re.instancingColor=Z.instancingColor,re.skinning=Z.skinning,re.morphTargets=Z.morphTargets,re.morphNormals=Z.morphNormals,re.morphColors=Z.morphColors,re.morphTargetsCount=Z.morphTargetsCount,re.numClippingPlanes=Z.numClippingPlanes,re.numIntersection=Z.numClipIntersection,re.vertexAlphas=Z.vertexAlphas,re.vertexTangents=Z.vertexTangents,re.toneMapping=Z.toneMapping}function nx(L,Z,re,ae,se){Z.isScene!==!0&&(Z=X),x.resetTextureUnits();const Ce=Z.fog,Ie=ae.isMeshStandardMaterial?Z.environment:null,ke=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Di,Be=(ae.isMeshStandardMaterial?G:S).get(ae.envMap||Ie),$e=ae.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,Ve=!!re.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),We=!!re.morphAttributes.position,Mt=!!re.morphAttributes.normal,bn=!!re.morphAttributes.color;let zt=ss;ae.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(zt=v.toneMapping);const gi=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ft=gi!==void 0?gi.length:0,Ze=F.get(ae),au=p.state.lights;if(O===!0&&(D===!0||L!==M)){const Ln=L===M&&ae.id===U;Fe.setState(ae,L,Ln)}let xt=!1;ae.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==au.state.version||Ze.outputColorSpace!==ke||se.isBatchedMesh&&Ze.batching===!1||!se.isBatchedMesh&&Ze.batching===!0||se.isInstancedMesh&&Ze.instancing===!1||!se.isInstancedMesh&&Ze.instancing===!0||se.isSkinnedMesh&&Ze.skinning===!1||!se.isSkinnedMesh&&Ze.skinning===!0||se.isInstancedMesh&&Ze.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ze.instancingColor===!1&&se.instanceColor!==null||Ze.envMap!==Be||ae.fog===!0&&Ze.fog!==Ce||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Fe.numPlanes||Ze.numIntersection!==Fe.numIntersection)||Ze.vertexAlphas!==$e||Ze.vertexTangents!==Ve||Ze.morphTargets!==We||Ze.morphNormals!==Mt||Ze.morphColors!==bn||Ze.toneMapping!==zt||Y.isWebGL2===!0&&Ze.morphTargetsCount!==ft)&&(xt=!0):(xt=!0,Ze.__version=ae.version);let gs=Ze.currentProgram;xt===!0&&(gs=Oa(ae,Z,se));let Af=!1,wo=!1,lu=!1;const Zt=gs.getUniforms(),vs=Ze.uniforms;if(j.useProgram(gs.program)&&(Af=!0,wo=!0,lu=!0),ae.id!==U&&(U=ae.id,wo=!0),Af||M!==L){Zt.setValue(P,"projectionMatrix",L.projectionMatrix),Zt.setValue(P,"viewMatrix",L.matrixWorldInverse);const Ln=Zt.map.cameraPosition;Ln!==void 0&&Ln.setValue(P,ce.setFromMatrixPosition(L.matrixWorld)),Y.logarithmicDepthBuffer&&Zt.setValue(P,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Zt.setValue(P,"isOrthographic",L.isOrthographicCamera===!0),M!==L&&(M=L,wo=!0,lu=!0)}if(se.isSkinnedMesh){Zt.setOptional(P,se,"bindMatrix"),Zt.setOptional(P,se,"bindMatrixInverse");const Ln=se.skeleton;Ln&&(Y.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),Zt.setValue(P,"boneTexture",Ln.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}se.isBatchedMesh&&(Zt.setOptional(P,se,"batchingTexture"),Zt.setValue(P,"batchingTexture",se._matricesTexture,x));const cu=re.morphAttributes;if((cu.position!==void 0||cu.normal!==void 0||cu.color!==void 0&&Y.isWebGL2===!0)&&qe.update(se,re,gs),(wo||Ze.receiveShadow!==se.receiveShadow)&&(Ze.receiveShadow=se.receiveShadow,Zt.setValue(P,"receiveShadow",se.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(vs.envMap.value=Be,vs.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),wo&&(Zt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&ix(vs,lu),Ce&&ae.fog===!0&&_e.refreshFogUniforms(vs,Ce),_e.refreshMaterialUniforms(vs,ae,K,$,C),Ul.upload(P,wf(Ze),vs,x)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Ul.upload(P,wf(Ze),vs,x),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Zt.setValue(P,"center",se.center),Zt.setValue(P,"modelViewMatrix",se.modelViewMatrix),Zt.setValue(P,"normalMatrix",se.normalMatrix),Zt.setValue(P,"modelMatrix",se.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Ln=ae.uniformsGroups;for(let uu=0,rx=Ln.length;uu<rx;uu++)if(Y.isWebGL2){const Tf=Ln[uu];nt.update(Tf,gs),nt.bind(Tf,gs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gs}function ix(L,Z){L.ambientLightColor.needsUpdate=Z,L.lightProbe.needsUpdate=Z,L.directionalLights.needsUpdate=Z,L.directionalLightShadows.needsUpdate=Z,L.pointLights.needsUpdate=Z,L.pointLightShadows.needsUpdate=Z,L.spotLights.needsUpdate=Z,L.spotLightShadows.needsUpdate=Z,L.rectAreaLights.needsUpdate=Z,L.hemisphereLights.needsUpdate=Z}function sx(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(L,Z,re){F.get(L.texture).__webglTexture=Z,F.get(L.depthTexture).__webglTexture=re;const ae=F.get(L);ae.__hasExternalTextures=!0,ae.__hasExternalTextures&&(ae.__autoAllocateDepthBuffer=re===void 0,ae.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,Z){const re=F.get(L);re.__webglFramebuffer=Z,re.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(L,Z=0,re=0){A=L,R=Z,E=re;let ae=!0,se=null,Ce=!1,Ie=!1;if(L){const Be=F.get(L);Be.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(P.FRAMEBUFFER,null),ae=!1):Be.__webglFramebuffer===void 0?x.setupRenderTarget(L):Be.__hasExternalTextures&&x.rebindTextures(L,F.get(L.texture).__webglTexture,F.get(L.depthTexture).__webglTexture);const $e=L.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ie=!0);const Ve=F.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ve[Z])?se=Ve[Z][re]:se=Ve[Z],Ce=!0):Y.isWebGL2&&L.samples>0&&x.useMultisampledRTT(L)===!1?se=F.get(L).__webglMultisampledFramebuffer:Array.isArray(Ve)?se=Ve[re]:se=Ve,w.copy(L.viewport),V.copy(L.scissor),W=L.scissorTest}else w.copy(le).multiplyScalar(K).floor(),V.copy(de).multiplyScalar(K).floor(),W=xe;if(j.bindFramebuffer(P.FRAMEBUFFER,se)&&Y.drawBuffers&&ae&&j.drawBuffers(L,se),j.viewport(w),j.scissor(V),j.setScissorTest(W),Ce){const Be=F.get(L.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Be.__webglTexture,re)}else if(Ie){const Be=F.get(L.texture),$e=Z||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Be.__webglTexture,re||0,$e)}U=-1},this.readRenderTargetPixels=function(L,Z,re,ae,se,Ce,Ie){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=F.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ie!==void 0&&(ke=ke[Ie]),ke){j.bindFramebuffer(P.FRAMEBUFFER,ke);try{const Be=L.texture,$e=Be.format,Ve=Be.type;if($e!==Kn&&Le.convert($e)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===ma&&(z.has("EXT_color_buffer_half_float")||Y.isWebGL2&&z.has("EXT_color_buffer_float"));if(Ve!==rs&&Le.convert(Ve)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Yi&&(Y.isWebGL2||z.has("OES_texture_float")||z.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=L.width-ae&&re>=0&&re<=L.height-se&&P.readPixels(Z,re,ae,se,Le.convert($e),Le.convert(Ve),Ce)}finally{const Be=A!==null?F.get(A).__webglFramebuffer:null;j.bindFramebuffer(P.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(L,Z,re=0){const ae=Math.pow(2,-re),se=Math.floor(Z.image.width*ae),Ce=Math.floor(Z.image.height*ae);x.setTexture2D(Z,0),P.copyTexSubImage2D(P.TEXTURE_2D,re,0,0,L.x,L.y,se,Ce),j.unbindTexture()},this.copyTextureToTexture=function(L,Z,re,ae=0){const se=Z.image.width,Ce=Z.image.height,Ie=Le.convert(re.format),ke=Le.convert(re.type);x.setTexture2D(re,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,re.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,re.unpackAlignment),Z.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ae,L.x,L.y,se,Ce,Ie,ke,Z.image.data):Z.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ae,L.x,L.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Ie,Z.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,ae,L.x,L.y,Ie,ke,Z.image),ae===0&&re.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(L,Z,re,ae,se=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=L.max.x-L.min.x+1,Ie=L.max.y-L.min.y+1,ke=L.max.z-L.min.z+1,Be=Le.convert(ae.format),$e=Le.convert(ae.type);let Ve;if(ae.isData3DTexture)x.setTexture3D(ae,0),Ve=P.TEXTURE_3D;else if(ae.isDataArrayTexture||ae.isCompressedArrayTexture)x.setTexture2DArray(ae,0),Ve=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,ae.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,ae.unpackAlignment);const We=P.getParameter(P.UNPACK_ROW_LENGTH),Mt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),bn=P.getParameter(P.UNPACK_SKIP_PIXELS),zt=P.getParameter(P.UNPACK_SKIP_ROWS),gi=P.getParameter(P.UNPACK_SKIP_IMAGES),ft=re.isCompressedTexture?re.mipmaps[se]:re.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,L.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,L.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,L.min.z),re.isDataTexture||re.isData3DTexture?P.texSubImage3D(Ve,se,Z.x,Z.y,Z.z,Ce,Ie,ke,Be,$e,ft.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ve,se,Z.x,Z.y,Z.z,Ce,Ie,ke,Be,ft.data)):P.texSubImage3D(Ve,se,Z.x,Z.y,Z.z,Ce,Ie,ke,Be,$e,ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,We),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,bn),P.pixelStorei(P.UNPACK_SKIP_ROWS,zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,gi),se===0&&ae.generateMipmaps&&P.generateMipmap(Ve),j.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?x.setTextureCube(L,0):L.isData3DTexture?x.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?x.setTexture2DArray(L,0):x.setTexture2D(L,0),j.unbindTexture()},this.resetState=function(){R=0,E=0,A=null,j.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Bh?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===Xc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?Gs:A0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gs?Nt:Di}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class gA extends qh{}gA.prototype.isWebGL1Renderer=!0;class Ta{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=i}clone(){return new Ta(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $0 extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Fd extends Pt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rr=new Je,sm=new Je,ll=[],rm=new rr,vA=new Je,Po=new tt,Io=new ps;class tn extends tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fd(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,vA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rr),rm.copy(e.boundingBox).applyMatrix4(Rr),this.boundingBox.union(rm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ps),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rr),Io.copy(e.boundingSphere).applyMatrix4(Rr),this.boundingSphere.union(Io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Po.geometry=this.geometry,Po.material=this.material,Po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Io.copy(this.boundingSphere),Io.applyMatrix4(i),e.ray.intersectsSphere(Io)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rr),sm.multiplyMatrices(i,Rr),Po.matrixWorld=sm,Po.raycast(e,ll);for(let o=0,a=ll.length;o<a;o++){const l=ll[o];l.instanceId=r,l.object=this,t.push(l)}ll.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fd(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class $c extends or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const om=new I,am=new I,lm=new Je,Xu=new Gh,cl=new ps;class Y0 extends Dt{constructor(e=new vt,t=new $c){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)om.fromBufferAttribute(t,s-1),am.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=om.distanceTo(am);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(s),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;lm.copy(s).invert(),Xu.copy(e.ray).applyMatrix4(lm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,d=new I,f=new I,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const h=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let v=h,b=_-1;v<b;v+=m){const R=g.getX(v),E=g.getX(v+1);if(c.fromBufferAttribute(p,R),u.fromBufferAttribute(p,E),Xu.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(f);U<e.near||U>e.far||t.push({distance:U,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=h,b=_-1;v<b;v+=m){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Xu.distanceSqToSegment(c,u,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const cm=new I,um=new I;class K0 extends Y0{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)cm.fromBufferAttribute(t,s),um.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+cm.distanceTo(um);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Z0 extends or{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dm=new Je,zd=new Gh,ul=new ps,dl=new I;class J0 extends Dt{constructor(e=new vt,t=new Z0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;dm.copy(s).invert(),zd.copy(e.ray).applyMatrix4(dm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,y=m;g<y;g++){const p=c.getX(g);dl.fromBufferAttribute(d,p),hm(dl,p,l,s,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,y=m;g<y;g++)dl.fromBufferAttribute(d,g),hm(dl,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function hm(n,e,t,i,s,r,o){const a=zd.distanceSqToPoint(n);if(a<t){const l=new I;zd.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,m=(o-u)/f;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new me:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,s=[],r=[],o=[],a=new I,l=new Je;for(let m=0;m<=e;m++){const g=m/e;s[m]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(jt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(jt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xh extends mi{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new me,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*d+this.aX,c=f*d+m*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class yA extends Xh{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function jh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,m*=u,s(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const hl=new I,ju=new jh,$u=new jh,Yu=new jh;class xA extends mi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(hl.subVectors(s[0],s[1]).add(s[0]),c=hl);const d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(hl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=hl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),m),y=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),ju.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,g,y,p),$u.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,g,y,p),Yu.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,g,y,p)}else this.curveType==="catmullrom"&&(ju.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),$u.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),Yu.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return i.set(ju.calc(l),$u.calc(l),Yu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function fm(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function _A(n,e){const t=1-n;return t*t*e}function bA(n,e){return 2*(1-n)*n*e}function SA(n,e){return n*n*e}function na(n,e,t,i){return _A(n,e)+bA(n,t)+SA(n,i)}function MA(n,e){const t=1-n;return t*t*t*e}function wA(n,e){const t=1-n;return 3*t*t*n*e}function EA(n,e){return 3*(1-n)*n*n*e}function AA(n,e){return n*n*n*e}function ia(n,e,t,i,s){return MA(n,e)+wA(n,t)+EA(n,i)+AA(n,s)}class Q0 extends mi{constructor(e=new me,t=new me,i=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new me){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ia(e,s.x,r.x,o.x,a.x),ia(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class TA extends mi{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(ia(e,s.x,r.x,o.x,a.x),ia(e,s.y,r.y,o.y,a.y),ia(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ev extends mi{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class RA extends mi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tv extends mi{constructor(e=new me,t=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new me){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(na(e,s.x,r.x,o.x),na(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class CA extends mi{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(na(e,s.x,r.x,o.x),na(e,s.y,r.y,o.y),na(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class nv extends mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(fm(a,l.x,c.x,u.x,d.x),fm(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new me().fromArray(s))}return this}}var Bd=Object.freeze({__proto__:null,ArcCurve:yA,CatmullRomCurve3:xA,CubicBezierCurve:Q0,CubicBezierCurve3:TA,EllipseCurve:Xh,LineCurve:ev,LineCurve3:RA,QuadraticBezierCurve:tv,QuadraticBezierCurve3:CA,SplineCurve:nv});class LA extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bd[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Bd[s.type]().fromJSON(s))}return this}}class $r extends LA{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new ev(this.currentPoint.clone(),new me(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new tv(this.currentPoint.clone(),new me(e,t),new me(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new Q0(this.currentPoint.clone(),new me(e,t),new me(i,s),new me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new nv(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new Xh(e,t,i,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Yc extends vt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new I,u=new me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){const m=i+d/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Bn extends vt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],f=[],m=[];let g=0;const y=[],p=i/2;let h=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new et(d,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(m,2));function _(){const b=new I,R=new I;let E=0;const A=(t-e)/i;for(let U=0;U<=r;U++){const M=[],w=U/r,V=w*(t-e)+e;for(let W=0;W<=s;W++){const oe=W/s,k=oe*l+a,q=Math.sin(k),$=Math.cos(k);R.x=V*q,R.y=-w*i+p,R.z=V*$,d.push(R.x,R.y,R.z),b.set(q,A,$).normalize(),f.push(b.x,b.y,b.z),m.push(oe,1-w),M.push(g++)}y.push(M)}for(let U=0;U<s;U++)for(let M=0;M<r;M++){const w=y[M][U],V=y[M+1][U],W=y[M+1][U+1],oe=y[M][U+1];u.push(w,V,oe),u.push(V,W,oe),E+=6}c.addGroup(h,E,0),h+=E}function v(b){const R=g,E=new me,A=new I;let U=0;const M=b===!0?e:t,w=b===!0?1:-1;for(let W=1;W<=s;W++)d.push(0,p*w,0),f.push(0,w,0),m.push(.5,.5),g++;const V=g;for(let W=0;W<=s;W++){const k=W/s*l+a,q=Math.cos(k),$=Math.sin(k);A.x=M*$,A.y=p*w,A.z=M*q,d.push(A.x,A.y,A.z),f.push(0,w,0),E.x=q*.5+.5,E.y=$*.5*w+.5,m.push(E.x,E.y),g++}for(let W=0;W<s;W++){const oe=R+W,k=V+W;b===!0?u.push(k,k+1,oe):u.push(k+1,k,oe),U+=3}c.addGroup(h,U,b===!0?1:2),h+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ki extends Bn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ki(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $h extends vt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const v=new I,b=new I,R=new I;for(let E=0;E<t.length;E+=3)m(t[E+0],v),m(t[E+1],b),m(t[E+2],R),l(v,b,R,_)}function l(_,v,b,R){const E=R+1,A=[];for(let U=0;U<=E;U++){A[U]=[];const M=_.clone().lerp(b,U/E),w=v.clone().lerp(b,U/E),V=E-U;for(let W=0;W<=V;W++)W===0&&U===E?A[U][W]=M:A[U][W]=M.clone().lerp(w,W/V)}for(let U=0;U<E;U++)for(let M=0;M<2*(E-U)-1;M++){const w=Math.floor(M/2);M%2===0?(f(A[U][w+1]),f(A[U+1][w]),f(A[U][w])):(f(A[U][w+1]),f(A[U+1][w+1]),f(A[U+1][w]))}}function c(_){const v=new I;for(let b=0;b<r.length;b+=3)v.x=r[b+0],v.y=r[b+1],v.z=r[b+2],v.normalize().multiplyScalar(_),r[b+0]=v.x,r[b+1]=v.y,r[b+2]=v.z}function u(){const _=new I;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];const b=p(_)/2/Math.PI+.5,R=h(_)/Math.PI+.5;o.push(b,1-R)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){const v=o[_+0],b=o[_+2],R=o[_+4],E=Math.max(v,b,R),A=Math.min(v,b,R);E>.9&&A<.1&&(v<.2&&(o[_+0]+=1),b<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function m(_,v){const b=_*3;v.x=e[b+0],v.y=e[b+1],v.z=e[b+2]}function g(){const _=new I,v=new I,b=new I,R=new I,E=new me,A=new me,U=new me;for(let M=0,w=0;M<r.length;M+=9,w+=6){_.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),E.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),U.set(o[w+4],o[w+5]),R.copy(_).add(v).add(b).divideScalar(3);const V=p(R);y(E,w+0,_,V),y(A,w+2,v,V),y(U,w+4,b,V)}}function y(_,v,b,R){R<0&&_.x===1&&(o[v]=_.x-1),b.x===0&&b.z===0&&(o[v]=R/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function h(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $h(e.vertices,e.indices,e.radius,e.details)}}const fl=new I,pl=new I,Ku=new I,ml=new On;class iv extends vt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Xr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},m=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:y,b:p,c:h}=ml;if(y.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),ml.getNormal(Ku),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const v=(_+1)%3,b=d[_],R=d[v],E=ml[u[_]],A=ml[u[v]],U=`${b}_${R}`,M=`${R}_${b}`;M in f&&f[M]?(Ku.dot(f[M].normal)<=r&&(m.push(E.x,E.y,E.z),m.push(A.x,A.y,A.z)),f[M]=null):U in f||(f[U]={index0:c[_],index1:c[v],normal:Ku.clone()})}}for(const g in f)if(f[g]){const{index0:y,index1:p}=f[g];fl.fromBufferAttribute(a,y),pl.fromBufferAttribute(a,p),m.push(fl.x,fl.y,fl.z),m.push(pl.x,pl.y,pl.z)}this.setAttribute("position",new et(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Vs extends $r{constructor(e){super(e),this.uuid=sr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new $r().fromJSON(s))}return this}}const PA={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=sv(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,d,f,m;if(i&&(r=kA(n,e,r,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<s;g+=t)d=n[g],f=n[g+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>u&&(u=f);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return va(r,o,t,a,l,m,0),o}};function sv(n,e,t,i,s){let r,o;if(s===jA(n,e,t,i)>0)for(r=e;r<t;r+=i)o=pm(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=pm(r,n[r],n[r+1],o);return o&&Kc(o,o.next)&&(xa(o),o=o.next),o}function Zs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Kc(t,t.next)||pt(t.prev,t,t.next)===0)){if(xa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function va(n,e,t,i,s,r,o){if(!n)return;!o&&r&&HA(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?NA(n,i,s,r):IA(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),xa(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=DA(Zs(n),e,t),va(n,e,t,i,s,r,2)):o===2&&OA(n,e,t,i,s,r):va(Zs(n),e,t,i,s,r,1);break}}}function IA(n){const e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=d&&g.y<=m&&Fr(s,a,r,l,o,c,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function NA(n,e,t,i){const s=n.prev,r=n,o=n.next;if(pt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,g=u<d?u<f?u:f:d<f?d:f,y=a>l?a>c?a:c:l>c?l:c,p=u>d?u>f?u:f:d>f?d:f,h=Hd(m,g,e,t,i),_=Hd(y,p,e,t,i);let v=n.prevZ,b=n.nextZ;for(;v&&v.z>=h&&b&&b.z<=_;){if(v.x>=m&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Fr(a,u,l,d,c,f,v.x,v.y)&&pt(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=m&&b.x<=y&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&Fr(a,u,l,d,c,f,b.x,b.y)&&pt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=h;){if(v.x>=m&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Fr(a,u,l,d,c,f,v.x,v.y)&&pt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=_;){if(b.x>=m&&b.x<=y&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&Fr(a,u,l,d,c,f,b.x,b.y)&&pt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function DA(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Kc(s,r)&&rv(s,i,i.next,r)&&ya(s,r)&&ya(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),xa(i),xa(i.next),i=n=r),i=i.next}while(i!==n);return Zs(i)}function OA(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&WA(o,a)){let l=ov(o,a);o=Zs(o,o.next),l=Zs(l,l.next),va(o,e,t,i,s,r,0),va(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function kA(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=sv(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(VA(c));for(s.sort(UA),r=0;r<s.length;r++)t=FA(s[r],t);return t}function UA(n,e){return n.x-e.x}function FA(n,e){const t=zA(n,e);if(!t)return e;const i=ov(t,n);return Zs(i,i.next),Zs(t,t.next)}function zA(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Fr(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),ya(t,n)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&BA(s,t)))&&(s=t,u=d)),t=t.next;while(t!==a);return s}function BA(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function HA(n,e,t,i){let s=n;do s.z===0&&(s.z=Hd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,GA(s)}function GA(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Hd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function VA(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Fr(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function WA(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!qA(n,e)&&(ya(n,e)&&ya(e,n)&&XA(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||Kc(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Kc(n,e){return n.x===e.x&&n.y===e.y}function rv(n,e,t,i){const s=vl(pt(n,e,t)),r=vl(pt(n,e,i)),o=vl(pt(t,i,n)),a=vl(pt(t,i,e));return!!(s!==r&&o!==a||s===0&&gl(n,t,e)||r===0&&gl(n,i,e)||o===0&&gl(t,n,i)||a===0&&gl(t,e,i))}function gl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function vl(n){return n>0?1:n<0?-1:0}function qA(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&rv(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ya(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function XA(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ov(n,e){const t=new Gd(n.i,n.x,n.y),i=new Gd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function pm(n,e,t,i){const s=new Gd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Gd(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jA(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class fi{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return fi.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];mm(e),gm(i,e);let o=e.length;t.forEach(mm);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,gm(i,t[l]);const a=PA.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function mm(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function gm(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Yh extends vt{constructor(e=new Vs([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const h=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:$A;let v,b=!1,R,E,A,U;h&&(v=h.getSpacedPoints(u),b=!0,f=!1,R=h.computeFrenetFrames(u,!1),E=new I,A=new I,U=new I),f||(p=0,m=0,g=0,y=0);const M=a.extractPoints(c);let w=M.shape;const V=M.holes;if(!fi.isClockWise(w)){w=w.reverse();for(let P=0,ie=V.length;P<ie;P++){const z=V[P];fi.isClockWise(z)&&(V[P]=z.reverse())}}const oe=fi.triangulateShape(w,V),k=w;for(let P=0,ie=V.length;P<ie;P++){const z=V[P];w=w.concat(z)}function q(P,ie,z){return ie||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ie,z)}const $=w.length,K=oe.length;function B(P,ie,z){let Y,j,pe;const F=P.x-ie.x,x=P.y-ie.y,S=z.x-P.x,G=z.y-P.y,ge=F*F+x*x,ve=F*G-x*S;if(Math.abs(ve)>Number.EPSILON){const ue=Math.sqrt(ge),Te=Math.sqrt(S*S+G*G),_e=ie.x-x/ue,Re=ie.y+F/ue,Ne=z.x-G/Te,Fe=z.y+S/Te,ye=((Ne-_e)*G-(Fe-Re)*S)/(F*G-x*S);Y=_e+F*ye-P.x,j=Re+x*ye-P.y;const Qe=Y*Y+j*j;if(Qe<=2)return new me(Y,j);pe=Math.sqrt(Qe/2)}else{let ue=!1;F>Number.EPSILON?S>Number.EPSILON&&(ue=!0):F<-Number.EPSILON?S<-Number.EPSILON&&(ue=!0):Math.sign(x)===Math.sign(G)&&(ue=!0),ue?(Y=-x,j=F,pe=Math.sqrt(ge)):(Y=F,j=x,pe=Math.sqrt(ge/2))}return new me(Y/pe,j/pe)}const Q=[];for(let P=0,ie=k.length,z=ie-1,Y=P+1;P<ie;P++,z++,Y++)z===ie&&(z=0),Y===ie&&(Y=0),Q[P]=B(k[P],k[z],k[Y]);const le=[];let de,xe=Q.concat();for(let P=0,ie=V.length;P<ie;P++){const z=V[P];de=[];for(let Y=0,j=z.length,pe=j-1,F=Y+1;Y<j;Y++,pe++,F++)pe===j&&(pe=0),F===j&&(F=0),de[Y]=B(z[Y],z[pe],z[F]);le.push(de),xe=xe.concat(de)}for(let P=0;P<p;P++){const ie=P/p,z=m*Math.cos(ie*Math.PI/2),Y=g*Math.sin(ie*Math.PI/2)+y;for(let j=0,pe=k.length;j<pe;j++){const F=q(k[j],Q[j],Y);T(F.x,F.y,-z)}for(let j=0,pe=V.length;j<pe;j++){const F=V[j];de=le[j];for(let x=0,S=F.length;x<S;x++){const G=q(F[x],de[x],Y);T(G.x,G.y,-z)}}}const te=g+y;for(let P=0;P<$;P++){const ie=f?q(w[P],xe[P],te):w[P];b?(A.copy(R.normals[0]).multiplyScalar(ie.x),E.copy(R.binormals[0]).multiplyScalar(ie.y),U.copy(v[0]).add(A).add(E),T(U.x,U.y,U.z)):T(ie.x,ie.y,0)}for(let P=1;P<=u;P++)for(let ie=0;ie<$;ie++){const z=f?q(w[ie],xe[ie],te):w[ie];b?(A.copy(R.normals[P]).multiplyScalar(z.x),E.copy(R.binormals[P]).multiplyScalar(z.y),U.copy(v[P]).add(A).add(E),T(U.x,U.y,U.z)):T(z.x,z.y,d/u*P)}for(let P=p-1;P>=0;P--){const ie=P/p,z=m*Math.cos(ie*Math.PI/2),Y=g*Math.sin(ie*Math.PI/2)+y;for(let j=0,pe=k.length;j<pe;j++){const F=q(k[j],Q[j],Y);T(F.x,F.y,d+z)}for(let j=0,pe=V.length;j<pe;j++){const F=V[j];de=le[j];for(let x=0,S=F.length;x<S;x++){const G=q(F[x],de[x],Y);b?T(G.x,G.y+v[u-1].y,v[u-1].x+z):T(G.x,G.y,d+z)}}}O(),D();function O(){const P=s.length/3;if(f){let ie=0,z=$*ie;for(let Y=0;Y<K;Y++){const j=oe[Y];ee(j[2]+z,j[1]+z,j[0]+z)}ie=u+p*2,z=$*ie;for(let Y=0;Y<K;Y++){const j=oe[Y];ee(j[0]+z,j[1]+z,j[2]+z)}}else{for(let ie=0;ie<K;ie++){const z=oe[ie];ee(z[2],z[1],z[0])}for(let ie=0;ie<K;ie++){const z=oe[ie];ee(z[0]+$*u,z[1]+$*u,z[2]+$*u)}}i.addGroup(P,s.length/3-P,0)}function D(){const P=s.length/3;let ie=0;C(k,ie),ie+=k.length;for(let z=0,Y=V.length;z<Y;z++){const j=V[z];C(j,ie),ie+=j.length}i.addGroup(P,s.length/3-P,1)}function C(P,ie){let z=P.length;for(;--z>=0;){const Y=z;let j=z-1;j<0&&(j=P.length-1);for(let pe=0,F=u+p*2;pe<F;pe++){const x=$*pe,S=$*(pe+1),G=ie+Y+x,ge=ie+j+x,ve=ie+j+S,ue=ie+Y+S;ce(G,ge,ve,ue)}}}function T(P,ie,z){l.push(P),l.push(ie),l.push(z)}function ee(P,ie,z){X(P),X(ie),X(z);const Y=s.length/3,j=_.generateTopUV(i,s,Y-3,Y-2,Y-1);he(j[0]),he(j[1]),he(j[2])}function ce(P,ie,z,Y){X(P),X(ie),X(Y),X(ie),X(z),X(Y);const j=s.length/3,pe=_.generateSideWallUV(i,s,j-6,j-3,j-2,j-1);he(pe[0]),he(pe[1]),he(pe[3]),he(pe[1]),he(pe[2]),he(pe[3])}function X(P){s.push(l[P*3+0]),s.push(l[P*3+1]),s.push(l[P*3+2])}function he(P){r.push(P.x),r.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return YA(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Bd[s.type]().fromJSON(s)),new Yh(i,e.options)}}const $A={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new me(r,o),new me(a,l),new me(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],f=e[s*3],m=e[s*3+1],g=e[s*3+2],y=e[r*3],p=e[r*3+1],h=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new me(o,1-l),new me(c,1-d),new me(f,1-g),new me(y,1-h)]:[new me(a,1-l),new me(u,1-d),new me(m,1-g),new me(p,1-h)]}};function YA(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ra extends $h{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ra(e.radius,e.detail)}}class Kh extends vt{constructor(e=new Vs([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(r,3)),this.setAttribute("uv",new et(o,2));function c(u){const d=s.length/3,f=u.extractPoints(t);let m=f.shape;const g=f.holes;fi.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,h=g.length;p<h;p++){const _=g[p];fi.isClockWise(_)===!0&&(g[p]=_.reverse())}const y=fi.triangulateShape(m,g);for(let p=0,h=g.length;p<h;p++){const _=g[p];m=m.concat(_)}for(let p=0,h=m.length;p<h;p++){const _=m[p];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let p=0,h=y.length;p<h;p++){const _=y[p],v=_[0]+d,b=_[1]+d,R=_[2]+d;i.push(v,b,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return KA(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new Kh(i,e.curveSegments)}}function KA(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class Ca extends vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new I,f=new I,m=[],g=[],y=[],p=[];for(let h=0;h<=i;h++){const _=[],v=h/i;let b=0;h===0&&o===0?b=.5/t:h===i&&l===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){const E=R/t;d.x=-e*Math.cos(s+E*r)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(s+E*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),p.push(E+b,1-v),_.push(c++)}u.push(_)}for(let h=0;h<i;h++)for(let _=0;_<t;_++){const v=u[h][_+1],b=u[h][_],R=u[h+1][_],E=u[h+1][_+1];(h!==0||o>0)&&m.push(v,b,E),(h!==i-1||l<Math.PI)&&m.push(b,R,E)}this.setIndex(m),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(y,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zc extends vt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new I,d=new I,f=new I;for(let m=0;m<=i;m++)for(let g=0;g<=s;g++){const y=g/s*r,p=m/i*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(y),d.y=(e+t*Math.cos(p))*Math.sin(y),d.z=t*Math.sin(p),a.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),f.subVectors(d,u).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=s;g++){const y=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,h=(s+1)*(m-1)+g,_=(s+1)*m+g;o.push(y,p,_),o.push(p,h,_)}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ut extends or{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=T0,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const vm={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ZA{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const JA=new ZA;class Zh{constructor(e){this.manager=e!==void 0?e:JA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Zh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Si={};class QA extends Error{constructor(e,t){super(e),this.response=t}}class eT extends Zh{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=vm.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Si[e]!==void 0){Si[e].push({onLoad:t,onProgress:i,onError:s});return}Si[e]=[],Si[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Si[e],d=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0;let y=0;const p=new ReadableStream({start(h){_();function _(){d.read().then(({done:v,value:b})=>{if(v)h.close();else{y+=b.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:m});for(let E=0,A=u.length;E<A;E++){const U=u[E];U.onProgress&&U.onProgress(R)}h.enqueue(b),_()}})}}});return new Response(p)}else throw new QA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{vm.add(e,c);const u=Si[e];delete Si[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Si[e];if(u===void 0)throw this.manager.itemError(e),c;delete Si[e];for(let d=0,f=u.length;d<f;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Jh extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class tT extends Jh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Zu=new Je,ym=new I,xm=new I;class nT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vh,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ym.setFromMatrixPosition(e.matrixWorld),t.position.copy(ym),xm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xm),t.updateMatrixWorld(),Zu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iT extends nT{constructor(){super(new H0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vd extends Jh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new iT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sT extends Jh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const _m=new me;class rT{constructor(e=new me(1/0,1/0),t=new me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_m.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_m).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Ss{constructor(){this.type="ShapePath",this.color=new Ae,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new $r,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,o){return this.currentPath.bezierCurveTo(e,t,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(h){const _=[];for(let v=0,b=h.length;v<b;v++){const R=h[v],E=new Vs;E.curves=R.curves,_.push(E)}return _}function i(h,_){const v=_.length;let b=!1;for(let R=v-1,E=0;E<v;R=E++){let A=_[R],U=_[E],M=U.x-A.x,w=U.y-A.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(A=_[E],M=-M,U=_[R],w=-w),h.y<A.y||h.y>U.y)continue;if(h.y===A.y){if(h.x===A.x)return!0}else{const V=w*(h.x-A.x)-M*(h.y-A.y);if(V===0)return!0;if(V<0)continue;b=!b}}else{if(h.y!==A.y)continue;if(U.x<=h.x&&h.x<=A.x||A.x<=h.x&&h.x<=U.x)return!0}}return b}const s=fi.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Vs,l.curves=a.curves,c.push(l),c;let u=!s(r[0].getPoints());u=e?!u:u;const d=[],f=[];let m=[],g=0,y;f[g]=void 0,m[g]=[];for(let h=0,_=r.length;h<_;h++)a=r[h],y=a.getPoints(),o=s(y),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new Vs,p:y},f[g].s.curves=a.curves,u&&g++,m[g]=[]):m[g].push({h:a,p:y[0]});if(!f[0])return t(r);if(f.length>1){let h=!1,_=0;for(let v=0,b=f.length;v<b;v++)d[v]=[];for(let v=0,b=f.length;v<b;v++){const R=m[v];for(let E=0;E<R.length;E++){const A=R[E];let U=!0;for(let M=0;M<f.length;M++)i(A.p,f[M].p)&&(v!==M&&_++,U?(U=!1,d[M].push(A)):h=!0);U&&d[v].push(A)}}_>0&&h===!1&&(m=d)}let p;for(let h=0,_=f.length;h<_;h++){l=f[h].s,c.push(l),p=m[h];for(let v=0,b=p.length;v<b;v++)l.holes.push(p[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uh);const av="teide-settings",lv=100,Qh=3e3,cv=1e4,ef=1e7,uv={low:{segments:800,samples:15e5},standard:{segments:1200,samples:25e5},high:{segments:2e3,samples:5e6},ultra:{segments:Qh,samples:ef}},_a={low:{segments:600,samples:5e5},standard:{segments:1200,samples:12e5},high:{segments:1200,samples:2e6}},oT={low:1,standard:1.25,high:1.5},aT=1.25,lT=2,cT={...uv.standard},uT={..._a.standard};function Ju(){return{...nr()?uT:cT,language:null,onboardingDone:!1,tutorialDone:!1,invertPitch:!0,controlMode:"touch",gyroSensitivity:fn.sensDefault}}function mn(){try{const n=localStorage.getItem(av);if(!n)return Ju();const e=JSON.parse(n);return dT({...Ju(),...e})}catch{return Ju()}}function lr(n){try{localStorage.setItem(av,JSON.stringify(dv(n)))}catch{}}function dv(n){return{...n,segments:Math.max(lv,Math.min(Qh,n.segments|0)),samples:Math.max(cv,Math.min(ef,n.samples|0))}}function dT(n){if(n=dv(n),!nr())return n;const e=_a.high;return n.segments>e.segments||n.samples>e.samples?(console.info(`[settings] Mobile clamp: persisted segments=${n.segments} samples=${n.samples} exceed mobile-high (${e.segments}/${e.samples}). Using mobile-standard for this session.`),{..._a.standard,language:n.language,onboardingDone:n.onboardingDone,tutorialDone:n.tutorialDone,invertPitch:n.invertPitch,controlMode:n.controlMode,gyroSensitivity:n.gyroSensitivity}):n}function hT(){const n=window.devicePixelRatio||1;if(!nr())return Math.min(n,lT);const e=mn();let t=null;for(const[s,r]of Object.entries(_a))if(r.segments===e.segments&&r.samples===e.samples){t=s;break}const i=t&&oT[t]||aT;return Math.min(n,i)}function fT(){const n=mn(),e=new URLSearchParams(window.location.search),t=parseInt(e.get("segments"),10),i=parseInt(e.get("samples"),10);return Number.isFinite(t)&&t>=lv&&t<=Qh&&(n.segments=t),Number.isFinite(i)&&i>=cv&&i<=ef&&(n.samples=i),Pe.segments=n.segments,Et.sampleCount=n.samples,n}function pT(){const n=nr()?_a:uv;return Object.entries(n).map(([e,t])=>({name:e,...t}))}function mT(){return!!mn().onboardingDone}function gT(n=!0){const e=mn();e.onboardingDone=!!n,lr(e)}function vT(){return!!mn().tutorialDone}function yT(n=!0){const e=mn();e.tutorialDone=!!n,lr(e)}function xT(){const n=mn().invertPitch;return n===void 0?!0:!!n}function _T(n){const e=mn();e.invertPitch=!!n,lr(e)}function bT(){return mn().controlMode==="gyro"?"gyro":"touch"}function bm(n){const e=mn();e.controlMode=n==="gyro"?"gyro":"touch",lr(e)}function tf(){const n=Number(mn().gyroSensitivity);return Number.isFinite(n)?Math.max(fn.sensMin,Math.min(fn.sensMax,n)):fn.sensDefault}function ST(n){const e=mn(),t=Number(n);e.gyroSensitivity=Number.isFinite(t)?Math.max(fn.sensMin,Math.min(fn.sensMax,t)):fn.sensDefault,lr(e)}const St=new $0;St.background=new Ae(Ye.sky);St.fog=new Ta(Ye.sky,Pe.fogStart,Pe.fogEnd);const Gt=new wn(62,window.innerWidth/window.innerHeight,.5,15e3),cn=new qh({antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});cn.setPixelRatio(hT());cn.setSize(window.innerWidth,window.innerHeight);cn.outputColorSpace=Nt;document.body.appendChild(cn.domElement);const hv=new Vd(16774882,1.05);hv.position.set(80,140,60);St.add(hv);const MT=new tT(14542572,8292974,.55);St.add(MT);const Wd=new I(0,1,0);window.addEventListener("resize",()=>{Gt.aspect=window.innerWidth/window.innerHeight,Gt.updateProjectionMatrix(),cn.setSize(window.innerWidth,window.innerHeight)});const wT=typeof window<"u"?new URLSearchParams(window.location.search):null;function fv(n){if(wT?.get(n)==="1")return!0;try{return localStorage.getItem(n)==="1"}catch{return!1}}const pv=fv("debugGl"),ET=fv("debugPerf")||pv;let oi=null,No=0,Do=0;const AT=(()=>{try{for(const n of document.querySelectorAll("script")){const e=(n.src||"").match(/index-([A-Za-z0-9_-]+)\.js/);if(e)return e[1]}}catch{}return"?"})();function TT(){oi||(oi=document.createElement("div"),oi.id="debug-perf",oi.style.cssText=["position: fixed","top:  calc(24px + env(safe-area-inset-top,  0))","left: calc(24px + env(safe-area-inset-left, 0))","z-index: 50","padding: 8px 12px","background: rgba(0, 0, 0, 0.62)","color: #B0FF80",'font: 11px/1.45 ui-monospace, "SF Mono", Menlo, Consolas, monospace',"border-radius: 6px","pointer-events: none","white-space: pre","letter-spacing: 0.02em","min-width: 160px"].join(";"),oi.textContent="measuring…",document.body.appendChild(oi))}const Yr=typeof document<"u"?document.getElementById("perf-toggle-btn"):null,Kr=typeof document<"u"?document.getElementById("ads-toggle-btn"):null;let Sm=null;Yr&&Yr.addEventListener("click",()=>{N.showPerf=!N.showPerf,Yr.classList.toggle("off",!N.showPerf)});Kr&&Kr.addEventListener("click",()=>{N.showAds=!N.showAds,Kr.classList.toggle("off",!N.showAds)});function RT(){const n=!!J.testMode;n!==Sm&&(Sm=n,Yr&&(Yr.classList.toggle("visible",n),Yr.classList.toggle("off",!N.showPerf)),Kr&&(Kr.classList.toggle("visible",n),Kr.classList.toggle("off",!N.showAds)))}function CT(n){RT();const e=ET||J.testMode&&N.showPerf,t=pv||J.testMode&&N.showPerf;if(!e){oi&&(oi.style.display="none"),No=0,Do=0;return}if(TT(),oi.style.display="",No++,!Do){Do=n;return}const i=n-Do;if(i<500)return;const s=Math.round(No*1e3/i),r=Math.round(i/No*10)/10,o=cn?cn.getPixelRatio():0,a=cn?`${cn.domElement.width}x${cn.domElement.height}`:"?";let l=`Build:    ${AT}
FPS:      ${s}
Frame:    ${r} ms
Mobile:   ${nr()?"yes":"no"}
DPR set:  ${o.toFixed(2)} (dev ${(window.devicePixelRatio||0).toFixed(2)})
Buffer:   ${a}
Segments: ${Pe.segments}
Samples:  ${Et.sampleCount.toLocaleString("de-DE")}`;if(t&&cn){const c=cn.info.render,u=cn.info.memory;l+=`
Calls:    ${c.calls}
Tris:     ${c.triangles.toLocaleString("de-DE")}
Programs: ${cn.info.programs?.length??"?"}
Geoms:    ${u.geometries}
Textures: ${u.textures}`}oi.textContent=l,No=0,Do=n}function mv(){const n=new vt,e=new Float32Array([0,0,-1.3,-.48,.07,.36,-.95,-.06,.42,0,0,-1.3,0,.22,.5,-.48,.07,.36,0,0,-1.3,.95,-.06,.42,.48,.07,.36,0,0,-1.3,.48,.07,.36,0,.22,.5,0,0,-1.3,-.95,-.06,.42,-.48,-.04,.36,0,0,-1.3,-.48,-.04,.36,0,-.02,.48,0,0,-1.3,.48,-.04,.36,.95,-.06,.42,0,0,-1.3,0,-.02,.48,.48,-.04,.36,-.95,-.06,.42,-.48,-.04,.36,-.48,.07,.36,-.48,.07,.36,0,-.02,.48,0,.22,.5,-.48,.07,.36,-.48,-.04,.36,0,-.02,.48,.95,-.06,.42,.48,.07,.36,.48,-.04,.36,.48,.07,.36,0,.22,.5,0,-.02,.48,.48,.07,.36,0,-.02,.48,.48,-.04,.36,0,.183,.2,0,.4,.5,0,.22,.5,.36,.16,.05,.44,.035,.1,.28,.08,.08,.36,.16,.05,.36,.2,.42,.44,.075,.42,.36,.16,.05,.44,.075,.42,.44,.035,.1,.36,.16,.05,.28,.08,.08,.28,.12,.42,.36,.16,.05,.28,.12,.42,.36,.2,.42,.36,.2,.42,.28,.12,.42,.44,.075,.42,-.36,.16,.05,-.28,.08,.08,-.44,.035,.1,-.36,.16,.05,-.44,.075,.42,-.36,.2,.42,-.36,.16,.05,-.44,.035,.1,-.44,.075,.42,-.36,.16,.05,-.28,.12,.42,-.28,.08,.08,-.36,.16,.05,-.36,.2,.42,-.28,.12,.42,-.36,.2,.42,-.44,.075,.42,-.28,.12,.42]);n.setAttribute("position",new Pt(e,3)),n.computeVertexNormals();const t=new ut({color:Ye.paper,flatShading:!0,side:$t}),i=new tt(n,t);i.name="paperBody";const s=new iv(n,18),r=new $c({color:Ye.ink,transparent:!0,opacity:.22}),o=new K0(s,r),a=new ct;a.add(i),a.add(o);const l=new Yc(.03,20),c=new Gn({color:1712164,side:$t});for(const u of[-.36,.36]){const d=new tt(l,c);d.position.set(u,.13,.423),a.add(d)}return a}const fe=mv();fe.position.set(0,38,0);const LT=1712164;function nf(){return Ed}function So(n){return Ed.find(e=>e.id===n)||Ed[0]}function gv(){return So(J.equippedSkin)}function vv(n){return!!J.ownedSkins[n]}function Jc(n){J.ownedSkins[n]=!0,Ut()}function sf(n){return So(n).teaser||!vv(n)?!1:(J.equippedSkin=n,xv(),Ut(),!0)}function PT(n){if(n.userData._skinRole!==void 0)return n.userData._skinRole;let e=null;const t=n.color?n.color.getHex():-1;return n.isLineBasicMaterial&&t===Ye.ink?e="ink":n.isMeshBasicMaterial&&t===LT?e="vent":n.isMeshLambertMaterial&&t===Ye.paper&&(e="paper"),n.userData._skinRole=e,e}function yv(n,e){!e||e.teaser||n.traverse(t=>{if(!t.material)return;const i=Array.isArray(t.material)?t.material:[t.material];for(const s of i){const r=PT(s);r==="paper"&&e.paper!=null?(s.color.setHex(e.paper),s.emissive&&(s.emissive.setHex(e.emissive!=null?e.emissive:0),"emissiveIntensity"in s&&(s.emissiveIntensity=e.emissiveIntensity!=null?e.emissiveIntensity:1))):r==="ink"&&e.ink!=null?s.color.setHex(e.ink):r==="vent"&&e.vent!=null&&s.color.setHex(e.vent)}})}function xv(){yv(fe,gv())}const Mm={android:"goog_dseUNtdcnlZGNWfAOgAdDoYIyki",ios:"appl_adobEJBJMEfqpVfgpItUNUsfWVS"},Qu="default",qd=new URLSearchParams(window.location.search).has("mockiap"),ed=()=>!Li.isNativePlatform()||qd,_v=n=>Rh.find(e=>e.id===n),rf=n=>Rh.find(e=>e.productId===n);function bv(n){const e=rf(n);return e?Math.floor(e.diamonds*(1+e.bonusPct/100)):0}function Sv(n){const e=bv(n.productId);return J.obsidian=(J.obsidian|0)+e,J.obsidianLifetimeGranted=(J.obsidianLifetimeGranted|0)+e,Ut(),e}function wm(n){let e=0;for(const i of n?.nonSubscriptionTransactions||[])e+=bv(i.productIdentifier);const t=Math.max(0,e-(J.obsidianLifetimeGranted|0));return t>0&&(J.obsidian=(J.obsidian|0)+t,J.obsidianLifetimeGranted=e,Ut()),t}function td(n){!!n?.entitlements?.active?.[ua.entitlement]&&!J.adsRemoveOwned&&(J.adsRemoveOwned=!0,Ut())}const Mv={name:"mock",async init(){},localizedPrice(n){const e=rf(n);return e?e.priceFallback:""},async purchasePack(n){if(!ed())return{success:!1};const e=_v(n);return e?{success:!0,diamonds:Sv(e)}:{success:!1}},async purchaseSkin(n){return ed()?(Jc(n),{success:!0}):{success:!1}},async purchaseRemoveAds(){return ed()?(J.adsRemoveOwned=!0,Ut(),{success:!0}):{success:!1}},async restore(){return{success:!0,restored:[]}},hasEntitlement(n){return!!J.ownedSkins[n]}},Em={name:"revenuecat",_Purchases:null,_prices:{},_packages:{},async init(n){const{Purchases:e,LOG_LEVEL:t}=await Eh(async()=>{const{Purchases:i,LOG_LEVEL:s}=await import("./index-6c8v8erw.js");return{Purchases:i,LOG_LEVEL:s}},__vite__mapDeps([0,1]));this._Purchases=e,await e.configure({apiKey:n});try{await e.setLogLevel({level:t.WARN})}catch{}await this._loadOfferings(),NT();try{const{customerInfo:i}=await e.getCustomerInfo();wm(i),td(i)}catch(i){console.warn("[iap] init reconcile failed",i)}},async _loadOfferings(){try{const n=await this._Purchases.getOfferings(),e=n?.all?.[Qu]||n?.current;for(const t of e?.availablePackages||[]){const i=t?.product?.identifier;i&&(this._prices[i]=t.product.priceString||"",this._packages[i]=t)}}catch(n){console.warn("[iap] getOfferings failed",n)}},localizedPrice(n){return this._prices[n]||(rf(n)?.priceFallback??"")},async purchasePack(n){const e=_v(n);if(!e)return{success:!1};const t=this._packages[e.productId];if(!t)return console.warn(`[iap] no RevenueCat package for ${e.productId} — is it in the "${Qu}" offering?`),{success:!1};try{return await this._Purchases.purchasePackage({aPackage:t}),{success:!0,diamonds:Sv(e)}}catch(i){return i?.userCancelled||i?.code==="PURCHASE_CANCELLED"?{success:!1,cancelled:!0}:(console.warn("[iap] purchasePack failed",i),{success:!1})}},async purchaseSkin(n){try{return Jc(n),{success:!0}}catch(e){return e?.userCancelled?{success:!1,cancelled:!0}:(console.warn("[iap] purchaseSkin failed",e),{success:!1})}},async purchaseRemoveAds(){const n=this._packages[ua.productId];if(!n)return console.warn(`[iap] no RevenueCat package for ${ua.productId} — is it in the "${Qu}" offering?`),{success:!1};try{const{customerInfo:e}=await this._Purchases.purchasePackage({aPackage:n});return td(e),{success:!0}}catch(e){return e?.userCancelled||e?.code==="PURCHASE_CANCELLED"?{success:!1,cancelled:!0}:(console.warn("[iap] purchaseRemoveAds failed",e),{success:!1})}},async restore(){try{const{customerInfo:n}=await this._Purchases.restorePurchases(),e=wm(n);return td(n),{success:!0,restored:e>0?["obsidian"]:[],regranted:e}}catch(n){return console.warn("[iap] restore failed",n),{success:!1}}},hasEntitlement(n){return!!J.ownedSkins[n]}},wv=[];function IT(n){wv.push(n)}function NT(){for(const n of wv)try{n()}catch(e){console.warn("[iap] price listener failed",e)}}let ii=Mv;const Js={async init(){if(qd||!Li.isNativePlatform())return;const n=Li.getPlatform()==="ios"?Mm.ios:Mm.android;try{await Em.init(n),ii=Em}catch(e){console.warn("[iap] RevenueCat init failed — using mock",e),ii=Mv}},isAvailable(){return Li.isNativePlatform()||qd},localizedPrice(n){return ii.localizedPrice(n)},purchasePack(n){return ii.purchasePack(n)},purchaseSkin(n){return ii.purchaseSkin(n)},purchaseRemoveAds(){return ii.purchaseRemoveAds()},removeAdsPrice(){return ii.localizedPrice(ua.productId)||ua.priceFallback},restore(){return ii.restore()},hasEntitlement(n){return ii.hasEntitlement(n)},get providerName(){return ii.name}},DT=new URLSearchParams(window.location.search).has("mockads"),Fl=Li.isNativePlatform()||DT;function of(){return Li.getPlatform()==="ios"?"ios":"android"}function af(){return!!An.useTestAds?.[of()]}function Am(){const n=of();return af()?An.test[n].interstitial:An[n].interstitial}function Tm(){const n=of();return af()?An.test[n].rewarded:An[n].rewarded}function Rm(){try{window.focus()}catch{}try{window.dispatchEvent(new Event("resize"))}catch{}}function Cm(){return new Date().toISOString().slice(0,10)}function Ev(){J.rewardedDay!==Cm()&&(J.rewardedDay=Cm(),J.rewardedToday=0)}function Lm(){return Ev(),Math.max(0,An.rewardedDailyCap-(J.rewardedToday|0))}let nd=0,Pm=-1/0;const Av={name:"mock",async init(){},async preloadInterstitial(){},async preloadRewarded(){},async showInterstitial(){console.log("[ads] mock interstitial")},async showRewarded(){return console.log("[ads] mock rewarded → granted"),!0}},Xd={name:"admob",_AdMob:null,_mod:null,_interReady:!1,_rewardReady:!1,async init(){this._mod=await Eh(()=>import("./index-BNXHsM2Y.js"),__vite__mapDeps([2,1])),this._AdMob=this._mod.AdMob,await this._AdMob.initialize({initializeForTesting:af()});try{const n=await this._AdMob.requestConsentInfo();n?.isConsentFormAvailable&&n?.status==="REQUIRED"&&await this._AdMob.showConsentForm()}catch(n){console.warn("[ads] consent failed",n)}if(Li.getPlatform()==="ios")try{await this._AdMob.requestTrackingAuthorization()}catch{}},async preloadInterstitial(){try{await this._AdMob.prepareInterstitial({adId:Am()}),this._interReady=!0}catch(n){this._interReady=!1,console.warn("[ads] preload interstitial failed",n)}},async preloadRewarded(){try{await this._AdMob.prepareRewardVideoAd({adId:Tm()}),this._rewardReady=!0}catch(n){this._rewardReady=!1,console.warn("[ads] preload rewarded failed",n)}},_present(n,e,t){return new Promise(i=>{let s=!1,r=null,o=null;const a=()=>{if(!s){s=!0;try{r?.remove()}catch{}try{o?.remove()}catch{}i()}};Promise.all([this._AdMob.addListener(e,a).then(l=>{r=l}),this._AdMob.addListener(t,a).then(l=>{o=l})]).then(()=>n().catch(a))})},async showInterstitial(){try{this._interReady||await this._AdMob.prepareInterstitial({adId:Am()}),this._interReady=!1,await this._present(()=>this._AdMob.showInterstitial(),this._mod.InterstitialAdPluginEvents.Dismissed,this._mod.InterstitialAdPluginEvents.FailedToShow)}catch(n){console.warn("[ads] interstitial failed",n)}Rm(),this.preloadInterstitial()},async showRewarded(){let n=!1,e=null;try{e=await this._AdMob.addListener(this._mod.RewardAdPluginEvents.Rewarded,()=>{n=!0}),this._rewardReady||await this._AdMob.prepareRewardVideoAd({adId:Tm()}),this._rewardReady=!1,await this._present(()=>this._AdMob.showRewardVideoAd(),this._mod.RewardAdPluginEvents.Dismissed,this._mod.RewardAdPluginEvents.FailedToShow)}catch(t){console.warn("[ads] rewarded failed",t)}finally{try{e?.remove()}catch{}}return Rm(),this.preloadRewarded(),n}};let Wi=Av,Cr=null;function yl(){return Cr||(!Fl||!Li.isNativePlatform()?(Cr=Promise.resolve(),Cr):(Cr=Xd.init().then(()=>{Wi=Xd}).catch(n=>{console.warn("[ads] AdMob init failed — using mock",n),Wi=Av}),Cr))}const Qs={isAvailable(){return Fl},async warmup(){await yl(),Wi===Xd&&(Wi.preloadInterstitial(),Wi.preloadRewarded())},async onCrashRestart(){if(nd++,!Fl)return;if(J.testMode){N.showAds&&(await yl(),await Wi.showInterstitial());return}if(J.adsRemoveOwned||nd<=An.crashGraceCount||nd%An.interstitialEveryNCrashes!==0)return;const n=performance.now();n-Pm<An.interstitialMinGapSec*1e3||(Pm=n,await yl(),await Wi.showInterstitial())},rewardedRemaining:Lm,async watchRewarded(){return Fl?Lm()<=0?{success:!1,capped:!0}:(await yl(),await Wi.showRewarded()?(Ev(),J.rewardedToday=(J.rewardedToday|0)+1,J.obsidian=(J.obsidian|0)+An.rewardedDiamonds,Ut(),{success:!0,diamonds:An.rewardedDiamonds}):{success:!1}):{success:!1}}},OT={sub:"Building the world…",hint:"Higher quality settings may take a few seconds."},kT={pause:"Pause",map:"Map",close:"Close",landings:"Landings",brake:"Brake",oneShot:"One-Shot",boost:"Boost",sell:"Sell for {cost} points"},UT={lift:"Lift",soon:"soon",hintNormal:"↑ ↓ Pitch · ← → Bank · Space Brake · Shift Boost · F One-Shot",hintNormalTouch:"Steer with joystick · Right Boost / Brake / One-Shot",hintPrelaunch:"Pull down to launch",hintPrelaunchGyro:"Tap boost to take off",hintTakeoff:"Takeoff roll…",landingToast:"Touchdown! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"New island discovered!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Land at the marked airport to refuel your boosters and earn bonus points.",airportUnlockTitle:"Airport unlocked!",airportUnlockBody:"Spawn at {name} any time from the Levels menu.",airportUnlocked:"{name} unlocked",wrongApproach:"Wrong approach side — line up from the other end."},FT={names:["No Booster","Booster Level 1","Booster Level 2","Booster Level 3","Booster Level MAX"],unlock:["","Booster Level 1 unlocked","Booster Level 2 unlocked — La Gomera in range","Booster Level 3 unlocked — Gran Canaria in range","Booster Level MAX unlocked — Fuerteventura / Lanzarote"]},zT={start:"Start",startSubDefault:"Last checkpoint",levels:"Levels",levelsSub:"Choose airport",hangar:"Hangar",hangarSub:"Upgrades & status",shop:"Shop",shopSub:"Obsidian & designs",settings:"Settings",settingsSub:"Graphics & performance",imprint:"Imprint",licenses:"Licences"},BT={checkpoint:"Checkpoint · {id}",firstFlight:"First flight · TFN"},HT={title:"Pause",resume:"Resume flight",home:"Main menu"},GT={title:"Crash landing",restart:"Take Off Again",hint:"Spacebar",hangar:"Hangar",shop:"Shop"},VT={title:"Hangar",points:"Points",locations:"Locations",obsidian:"Obsidian",highscore:"High score",plane:"Plane",dragToRotate:"Drag to rotate",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tap an upgrade to see its description.",buy:"Buy · {cost}",buyObsidian:"Obsidian · {cost}",max:"Max",level:"Level {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Your boost level rises automatically once you've discovered enough locations. Fly through new POIs to improve your One-Shot boost.",equip:"Equip",equipped:"Equipped",comingSoon:"Coming soon",getDiamonds:"Get Obsidian →",skinPrev:"Previous design",skinNext:"Next design"},WT={title:"Pay with Obsidian?",text:"This upgrade costs <strong></strong>.",warn:"Obsidian is bought with real money. Only tap <em>Confirm</em> if you really want to spend Obsidian.",cancel:"Cancel",confirm:"Confirm",spendSkin:"You're spending {obsidian} on the {label} design."},qT={default:{name:"Paper",desc:"The classic fold."},charcoal:{name:"Charcoal",desc:"A matte slate livery — earned by explorers."},gold:{name:"Gold",desc:"A gleaming premium livery."},comingSoon:{name:"More soon",desc:"New designs are on the way."}},XT={intro:"Obsidian unlocks designs in the hangar and instant upgrades.",bonus:"+{pct}%",badgePopular:"Popular",badgeValue:"Best value",granted:"+ {amount} Obsidian added",restore:"Restore purchases",restored:"Purchases restored",viewSkins:"View designs →",disclosure:"Obsidian and designs are stored on this device.",watchAd:"Watch a video",adsLeftToday:"{count}/{cap} today",adsCapReached:"Come back tomorrow",removeAds:"Remove ads",removeAdsOwned:"Ads removed"},jT={title:"Settings",quality:"Graphics quality",presetLow:"Low",presetStandard:"Standard",presetHigh:"High",presetUltra:"Ultra",advanced:"Advanced",meshRes:"Mesh resolution",meshHint:"Segments · 100–3000",vegSamples:"Vegetation samples",vegHint:"10,000–10,000,000",restartNote:"Changes require a restart. Applying will reload the page.",cancel:"Cancel",apply:"Apply & reload",language:"Language",controls:"Controls",invertPitch:"Inverted flight controls",invertPitchHint:"Pull down to climb",gyroControl:"Tilt steering",gyroControlHint:"Tilt your device to steer",gyroSensitivity:"Sensitivity",gyroRecalibrate:"Recalibrate",tutorial:"Tutorial",replayTutorial:"Replay tutorial",dangerZone:"Danger zone",dangerDesc:"Resets all progress: points, locations, upgrades, discovered POIs, airports and checkpoint. Graphics settings are kept.",resetSave:"Reset progress"},$T={title:"Really delete your save?",text:"All points, locations, upgrades and discovered POIs will be lost. You'll start at <strong>Tenerife Nord</strong> with the basic plane.",warn:"This action cannot be undone.",cancel:"Cancel",confirm:"Reset"},YT={eyebrow:"Island",archTitle:"Canary Islands",legendSpawn:"Spawn",legendDiscovered:"Discovered",legendLocked:"Unknown",hintDefault:"Tap a spawn point to start there.",hintNone:"Land at an airport to unlock it as a spawn point.",hintProgress:"{landed} / {total} airports unlocked. Tap a spawn point.",hintAll:"All airports unlocked. Tap a spawn point.",markerLocked:"???",tipStart:"Start at {id}",tipNotLanded:"{id} — not landed yet",tipUndiscovered:"Not discovered yet"},KT={title:"Imprint",provider:"Provider",contact:"Contact",privacy:"Privacy policy",privacyLink:"Open privacy policy",linksLiability:"Liability for links",linksText:"Our offering contains links to external third-party websites whose content we cannot influence. We therefore cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content.",footer:"Swiss Innovation Studios · 2026"},ZT={title:"Open-source licences",intro:"Teide includes the following open-source components. The full licence texts are below and bundled with the app.",footer:"Swiss Innovation Studios · 2026"},JT={title:"Please rotate your device",sub:"Teide is played in landscape mode"},QT={title:"Test mode",prompt:"Enter PIN",wrong:"Wrong PIN",cancel:"Cancel",confirm:"OK"},e1={drag:{label:"Aerodynamics",desc:"Smoother folds — less drag, longer glide."},maxSpeed:{label:"Top speed",desc:"Raises the maximum cruise speed."},speedFromPitch:{label:"Dive",desc:"More acceleration in a dive — altitude becomes speed."},stallSpeed:{label:"Stability",desc:"Lower stall threshold — forgives slow flying."},takeoffSpeed:{label:"Runway",desc:"Faster take-off acceleration — less roll distance."},brake:{label:"Airbrake",desc:"Unlocks the brake flaps (Space in flight)."},greyBoost:{label:"Reserve boost",desc:"Stronger emergency thrust: longer burn, more push, faster refill."}},t1={pickLanguage:"Choose your language",welcome:"Welcome to the Canaries",story:["You've folded the perfect paper plane and launched it from the slopes of Mount Teide. Now ride the thermals and glide out across the Canary Islands.","Catch rising air to stay aloft, dive through points of interest to collect locations, and touch down on runways to unlock them as new starting points.","Landing is how you keep going: each touchdown refuels your booster for the next hop. Line up with a runway and set down gently.","Spend your points in the hangar to upgrade your plane and booster. Glide far enough and new islands come within reach — from La Gomera all the way to Lanzarote. How far can you go?"],next:"Next",begin:"Let's go"},n1={eyebrow:"Tutorial",skip:"Skip",retry:"Try again!",done:"You're ready — off you go!",launch:"Pull down to take off and start gliding",navLeft:"Now bank left",navRight:"Now bank right",navUp:"Now climb",navDown:"Now descend",rings:"Fly through both rings ({collected}/{total})",boost:"Hold boost for a burst of speed",thermal:"Steer into the updraft to gain height",ringHigh:"Use your new height — catch the high ring",ringLow:"Now dive back down — through the low ring",invertHint:"Climbing feels backwards? Flip it.",steerHint:"Steer here",endTitle:"You're ready to glide!",endBody:"Explore the Canary Islands and dive through rings to collect locations. Gather enough and your One-Shot boost reaches the next island. How far can you glide?",endGo:"Let's go"},i1={loading:OT,a11y:kT,hud:UT,booster:FT,menu:zT,welcome:BT,pause:HT,crash:GT,hangar:VT,obsidian:WT,skins:qT,shop:XT,settings:jT,reset:$T,levels:YT,imprint:KT,licenses:ZT,portrait:JT,testpin:QT,upgrades:e1,onboarding:t1,tutorial:n1},s1={sub:"Welt wird gebaut…",hint:"Bei höheren Qualitätseinstellungen kann das einige Sekunden dauern."},r1={pause:"Pause",map:"Karte",close:"Schliessen",landings:"Landungen",brake:"Bremse",oneShot:"One-Shot",boost:"Boost",sell:"Verkaufen für {cost} Punkte"},o1={lift:"Lift",soon:"bald",hintNormal:"↑ ↓ Pitch · ← → Bank · Space Bremse · Shift Boost · F One-Shot",hintNormalTouch:"Joystick steuern · Rechts Boost / Bremse / One-Shot",hintPrelaunch:"Zum Starten nach unten ziehen",hintPrelaunchGyro:"Boost antippen zum Abheben",hintTakeoff:"Startrollen…",landingToast:"Geschafft! · {id}",landingBonus:"+ {bonus} Pkt",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Neue Insel entdeckt!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Lande am markierten Flughafen, um deine Booster aufzufüllen und Extra-Punkte zu sammeln.",airportUnlockTitle:"Flughafen freigeschaltet!",airportUnlockBody:"Starte jederzeit über das Levels-Menü bei {name}.",airportUnlocked:"{name} freigeschaltet",wrongApproach:"Falsche Anflugseite — flieg von der anderen Seite an."},a1={names:["Kein Booster","Booster Stufe 1","Booster Stufe 2","Booster Stufe 3","Booster Stufe MAX"],unlock:["","Booster Stufe 1 freigeschaltet","Booster Stufe 2 freigeschaltet — La Gomera in Reichweite","Booster Stufe 3 freigeschaltet — Gran Canaria in Reichweite","Booster Stufe MAX freigeschaltet — Fuerteventura / Lanzarote"]},l1={start:"Start",startSubDefault:"Letzter Checkpoint",levels:"Levels",levelsSub:"Flughäfen auswählen",hangar:"Hangar",hangarSub:"Upgrades & Status",shop:"Shop",shopSub:"Obsidian & Designs",settings:"Einstellungen",settingsSub:"Grafik & Performance",imprint:"Impressum",licenses:"Lizenzen"},c1={checkpoint:"Checkpoint · {id}",firstFlight:"Erstflug · TFN"},u1={title:"Pause",resume:"Flug fortsetzen",home:"Hauptmenü"},d1={title:"Bruchlandung",restart:"Erneut abheben",hint:"Leertaste",hangar:"Hangar",shop:"Shop"},h1={title:"Hangar",points:"Punkte",locations:"Orte",obsidian:"Obsidian",highscore:"Highscore",plane:"Flugzeug",dragToRotate:"Ziehen zum Drehen",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tippe ein Upgrade an, um die Beschreibung zu sehen.",buy:"Kaufen · {cost}",buyObsidian:"Obsidian · {cost}",max:"Max",level:"Stufe {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Die Boost-Stufe steigt automatisch, sobald genug Orte entdeckt sind. Flieg neue POIs an, um deinen One-Shot-Boost zu verbessern.",equip:"Anlegen",equipped:"Angelegt",comingSoon:"Bald verfügbar",getDiamonds:"Obsidian holen →",skinPrev:"Vorheriges Design",skinNext:"Nächstes Design"},f1={title:"Mit Obsidian bezahlen?",text:"Dieses Upgrade kostet <strong></strong>.",warn:"Obsidian wird mit echtem Geld gekauft. Klick auf <em>Bestätigen</em> nur, wenn du wirklich Obsidian ausgeben willst.",cancel:"Abbrechen",confirm:"Bestätigen",spendSkin:"Du gibst {obsidian} für das Design {label} aus."},p1={default:{name:"Papier",desc:"Die klassische Faltung."},charcoal:{name:"Anthrazit",desc:"Eine matte Schiefer-Lackierung — von Entdeckern verdient."},gold:{name:"Gold",desc:"Eine glänzende Premium-Lackierung."},comingSoon:{name:"Bald mehr",desc:"Neue Designs sind unterwegs."}},m1={intro:"Obsidian schaltet Designs im Hangar und Sofort-Upgrades frei.",bonus:"+{pct}%",badgePopular:"Beliebt",badgeValue:"Bester Wert",granted:"+ {amount} Obsidian erhalten",restore:"Käufe wiederherstellen",restored:"Käufe wiederhergestellt",viewSkins:"Designs ansehen →",disclosure:"Obsidian und Designs werden auf diesem Gerät gespeichert.",watchAd:"Video ansehen",adsLeftToday:"{count}/{cap} heute",adsCapReached:"Komm morgen wieder",removeAds:"Werbung entfernen",removeAdsOwned:"Werbung entfernt"},g1={title:"Einstellungen",quality:"Grafikqualität",presetLow:"Niedrig",presetStandard:"Standard",presetHigh:"Hoch",presetUltra:"Ultra",advanced:"Erweitert",meshRes:"Mesh-Auflösung",meshHint:"Segments · 100–3000",vegSamples:"Vegetations-Samples",vegHint:"10'000–10'000'000",restartNote:"Änderungen erfordern einen Neustart. Beim Anwenden wird die Seite neu geladen.",cancel:"Abbrechen",apply:"Anwenden & Neu laden",language:"Sprache",controls:"Steuerung",invertPitch:"Umgekehrte Flugsteuerung",invertPitchHint:"Nach unten ziehen zum Steigen",gyroControl:"Neigungssteuerung",gyroControlHint:"Gerät neigen zum Steuern",gyroSensitivity:"Empfindlichkeit",gyroRecalibrate:"Neu kalibrieren",tutorial:"Tutorial",replayTutorial:"Tutorial wiederholen",dangerZone:"Danger Zone",dangerDesc:"Setzt den kompletten Spielfortschritt zurück: Punkte, Orte, Upgrades, entdeckte POIs, Flughäfen und Checkpoint. Grafik-Einstellungen bleiben erhalten.",resetSave:"Spielstand zurücksetzen"},v1={title:"Spielstand wirklich löschen?",text:"Alle Punkte, Orte, Upgrades und entdeckten POIs gehen verloren. Du startest auf <strong>Tenerife Nord</strong> mit dem Basis-Flugzeug.",warn:"Diese Aktion kann nicht rückgängig gemacht werden.",cancel:"Abbrechen",confirm:"Zurücksetzen"},y1={eyebrow:"Insel",archTitle:"Kanarische Inseln",legendSpawn:"Spawn",legendDiscovered:"Entdeckt",legendLocked:"Unbekannt",hintDefault:"Tippe einen Spawn an, um dort zu starten.",hintNone:"Lande einen Flughafen, um ihn als Spawnpunkt freizuschalten.",hintProgress:"{landed} / {total} Flughäfen freigeschaltet. Tippe einen Spawn an.",hintAll:"Alle Flughäfen freigeschaltet. Tippe einen Spawn an.",markerLocked:"???",tipStart:"Bei {id} starten",tipNotLanded:"{id} — noch nicht gelandet",tipUndiscovered:"Noch nicht entdeckt"},x1={title:"Impressum",provider:"Anbieter",contact:"Kontakt",privacy:"Datenschutz",privacyLink:"Datenschutzerklärung öffnen",linksLiability:"Haftung für Links",linksText:"Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",footer:"Swiss Innovation Studios · 2026"},_1={title:"Open-Source-Lizenzen",intro:"Teide enthält die folgenden quelloffenen Komponenten. Die vollständigen Lizenztexte sind unten und im App-Paket beigelegt.",footer:"Swiss Innovation Studios · 2026"},b1={title:"Bitte Gerät drehen",sub:"Teide wird im Landscape-Modus gespielt"},S1={title:"Testmodus",prompt:"PIN eingeben",wrong:"Falsche PIN",cancel:"Abbrechen",confirm:"OK"},M1={drag:{label:"Aerodynamik",desc:"Glättere Faltung — weniger Luftwiderstand, längeres Gleiten."},maxSpeed:{label:"Spitzentempo",desc:"Erhöht die maximale Fluggeschwindigkeit im Cruise."},speedFromPitch:{label:"Sturzflug",desc:"Mehr Beschleunigung im Sturzflug — Höhe wird zu Tempo."},stallSpeed:{label:"Stabilität",desc:"Tiefere Strömungsabriss-Schwelle — verzeiht langsames Fliegen."},takeoffSpeed:{label:"Startbahn",desc:"Schnellere Beschleunigung beim Start — weniger Roll-Strecke."},brake:{label:"Luftbremse",desc:"Schaltet die Bremsklappen frei (Leertaste im Flug)."},greyBoost:{label:"Reserve-Boost",desc:"Stärkerer Notschub: längere Brennzeit, mehr Schub, schnellerer Refill."}},w1={pickLanguage:"Sprache wählen",welcome:"Willkommen auf den Kanaren",story:["Du hast den perfekten Papierflieger gefaltet und ihn von den Hängen des Teide gestartet. Reite jetzt die Thermik und gleite hinaus über die Kanarischen Inseln.","Fang Aufwinde ein, um oben zu bleiben, flieg durch Points of Interest, um Orte zu sammeln, und lande auf Pisten, um sie als neue Startpunkte freizuschalten.","Landen heißt weiterkommen: Jede Landung füllt deinen Booster für den nächsten Sprung wieder auf. Richte dich auf eine Bahn aus und setze sanft auf.","Gib deine Punkte im Hangar aus, um Flugzeug und Booster zu verbessern. Gleitest du weit genug, kommen neue Inseln in Reichweite — von La Gomera bis Lanzarote. Wie weit kommst du?"],next:"Weiter",begin:"Los geht's"},E1={eyebrow:"Tutorial",skip:"Überspringen",retry:"Nochmal!",done:"Geschafft — los geht's!",launch:"Nach unten ziehen zum Abheben und Gleiten",navLeft:"Jetzt nach links",navRight:"Jetzt nach rechts",navUp:"Jetzt steigen",navDown:"Jetzt sinken",rings:"Flieg durch beide Ringe ({collected}/{total})",boost:"Halte Boost für einen Schub",thermal:"Steuere in den Aufwind, um Höhe zu gewinnen",ringHigh:"Nutz deine Höhe — schnapp dir den hohen Ring",ringLow:"Jetzt wieder runter — durch den tiefen Ring",invertHint:"Steigen falsch herum? Hier umstellen.",steerHint:"Hier steuern",endTitle:"Bereit zum Gleiten!",endBody:"Erkunde die Kanaren und flieg durch Ringe, um Orte zu sammeln. Sammle genug, und dein One-Shot-Boost bringt dich zur nächsten Insel. Wie weit gleitest du?",endGo:"Los geht's"},A1={loading:s1,a11y:r1,hud:o1,booster:a1,menu:l1,welcome:c1,pause:u1,crash:d1,hangar:h1,obsidian:f1,skins:p1,shop:m1,settings:g1,reset:v1,levels:y1,imprint:x1,licenses:_1,portrait:b1,testpin:S1,upgrades:M1,onboarding:w1,tutorial:E1},T1={sub:"Construyendo el mundo…",hint:"Con ajustes de calidad altos puede tardar unos segundos."},R1={pause:"Pausa",map:"Mapa",close:"Cerrar",landings:"Aterrizajes",brake:"Freno",oneShot:"One-Shot",boost:"Boost",sell:"Vender por {cost} puntos"},C1={lift:"Ascenso",soon:"pronto",hintNormal:"↑ ↓ Cabeceo · ← → Alabeo · Espacio Freno · Shift Boost · F One-Shot",hintNormalTouch:"Controla con el joystick · Derecha Boost / Freno / One-Shot",hintPrelaunch:"Tira hacia abajo para despegar",hintPrelaunchGyro:"Toca boost para despegar",hintTakeoff:"Carrera de despegue…",landingToast:"¡Aterrizaje! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"¡Nueva isla descubierta!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Aterriza en el aeropuerto marcado para recargar tus propulsores y ganar puntos extra.",airportUnlockTitle:"¡Aeropuerto desbloqueado!",airportUnlockBody:"Aparece en {name} cuando quieras desde el menú Niveles.",airportUnlocked:"{name} desbloqueado",wrongApproach:"Lado de aproximación incorrecto: alinéate desde el otro extremo."},L1={names:["Sin Booster","Booster Nivel 1","Booster Nivel 2","Booster Nivel 3","Booster Nivel MÁX"],unlock:["","Booster Nivel 1 desbloqueado","Booster Nivel 2 desbloqueado — La Gomera a tu alcance","Booster Nivel 3 desbloqueado — Gran Canaria a tu alcance","Booster Nivel MÁX desbloqueado — Fuerteventura / Lanzarote"]},P1={start:"Empezar",startSubDefault:"Último checkpoint",levels:"Niveles",levelsSub:"Elegir aeropuerto",hangar:"Hangar",hangarSub:"Mejoras y estado",shop:"Tienda",shopSub:"Obsidiana y diseños",settings:"Ajustes",settingsSub:"Gráficos y rendimiento",imprint:"Aviso legal",licenses:"Licencias"},I1={checkpoint:"Checkpoint · {id}",firstFlight:"Primer vuelo · TFN"},N1={title:"Pausa",resume:"Reanudar vuelo",home:"Menú principal"},D1={title:"Aterrizaje forzoso",restart:"Despegar de nuevo",hint:"Barra espaciadora",hangar:"Hangar",shop:"Tienda"},O1={title:"Hangar",points:"Puntos",locations:"Lugares",obsidian:"Obsidiana",highscore:"Récord",plane:"Avión",dragToRotate:"Arrastra para girar",upgrades:"Mejoras",booster:"Booster",selectUpgrade:"Toca una mejora para ver su descripción.",buy:"Comprar · {cost}",buyObsidian:"Obsidiana · {cost}",max:"Máx",level:"Nivel {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Tu nivel de boost sube automáticamente cuando descubres suficientes lugares. Vuela a través de nuevos POIs para mejorar tu boost One-Shot.",equip:"Equipar",equipped:"Equipado",comingSoon:"Próximamente",getDiamonds:"Conseguir obsidiana →",skinPrev:"Diseño anterior",skinNext:"Diseño siguiente"},k1={title:"¿Pagar con obsidiana?",text:"Esta mejora cuesta <strong></strong>.",warn:"La obsidiana se compra con dinero real. Pulsa <em>Confirmar</em> solo si de verdad quieres gastar obsidiana.",cancel:"Cancelar",confirm:"Confirmar",spendSkin:"Vas a gastar {obsidian} en el diseño {label}."},U1={default:{name:"Papel",desc:"El pliegue clásico."},charcoal:{name:"Carbón",desc:"Una librea de pizarra mate — para exploradores."},gold:{name:"Oro",desc:"Una reluciente librea premium."},comingSoon:{name:"Más pronto",desc:"Llegan nuevos diseños."}},F1={intro:"La obsidiana desbloquea diseños en el hangar y mejoras instantáneas.",bonus:"+{pct}%",badgePopular:"Popular",badgeValue:"Mejor valor",granted:"+ {amount} obsidiana añadida",restore:"Restaurar compras",restored:"Compras restauradas",viewSkins:"Ver diseños →",disclosure:"La obsidiana y los diseños se guardan en este dispositivo.",watchAd:"Ver un vídeo",adsLeftToday:"{count}/{cap} hoy",adsCapReached:"Vuelve mañana",removeAds:"Quitar anuncios",removeAdsOwned:"Anuncios eliminados"},z1={title:"Ajustes",quality:"Calidad gráfica",presetLow:"Baja",presetStandard:"Estándar",presetHigh:"Alta",presetUltra:"Ultra",advanced:"Avanzado",meshRes:"Resolución de malla",meshHint:"Segments · 100–3000",vegSamples:"Muestras de vegetación",vegHint:"10.000–10.000.000",restartNote:"Los cambios requieren reiniciar. Al aplicar se recargará la página.",cancel:"Cancelar",apply:"Aplicar y recargar",language:"Idioma",controls:"Controles",invertPitch:"Controles de vuelo invertidos",invertPitchHint:"Tira hacia abajo para subir",gyroControl:"Control por inclinación",gyroControlHint:"Inclina el dispositivo para dirigir",gyroSensitivity:"Sensibilidad",gyroRecalibrate:"Recalibrar",tutorial:"Tutorial",replayTutorial:"Repetir tutorial",dangerZone:"Zona de peligro",dangerDesc:"Restablece todo el progreso: puntos, lugares, mejoras, POIs descubiertos, aeropuertos y checkpoint. Los ajustes gráficos se mantienen.",resetSave:"Restablecer progreso"},B1={title:"¿Borrar de verdad tu partida?",text:"Se perderán todos los puntos, lugares, mejoras y POIs descubiertos. Empezarás en <strong>Tenerife Nord</strong> con el avión básico.",warn:"Esta acción no se puede deshacer.",cancel:"Cancelar",confirm:"Restablecer"},H1={eyebrow:"Isla",archTitle:"Islas Canarias",legendSpawn:"Inicio",legendDiscovered:"Descubierto",legendLocked:"Desconocido",hintDefault:"Toca un punto de inicio para empezar ahí.",hintNone:"Aterriza en un aeropuerto para desbloquearlo como punto de inicio.",hintProgress:"{landed} / {total} aeropuertos desbloqueados. Toca un punto de inicio.",hintAll:"Todos los aeropuertos desbloqueados. Toca un punto de inicio.",markerLocked:"???",tipStart:"Empezar en {id}",tipNotLanded:"{id} — aún sin aterrizar",tipUndiscovered:"Aún sin descubrir"},G1={title:"Aviso legal",provider:"Proveedor",contact:"Contacto",privacy:"Privacidad",privacyLink:"Abrir la política de privacidad",linksLiability:"Responsabilidad de los enlaces",linksText:"Nuestra oferta contiene enlaces a sitios web externos de terceros sobre cuyo contenido no tenemos influencia. Por ello no podemos asumir ninguna responsabilidad por estos contenidos ajenos. Del contenido de las páginas enlazadas es siempre responsable el respectivo proveedor u operador de dichas páginas.",footer:"Swiss Innovation Studios · 2026"},V1={title:"Licencias de código abierto",intro:"Teide incluye los siguientes componentes de código abierto. Los textos completos de las licencias están abajo y se incluyen en la app.",footer:"Swiss Innovation Studios · 2026"},W1={title:"Gira tu dispositivo",sub:"Teide se juega en modo horizontal"},q1={title:"Modo de prueba",prompt:"Introduce el PIN",wrong:"PIN incorrecto",cancel:"Cancelar",confirm:"OK"},X1={drag:{label:"Aerodinámica",desc:"Pliegues más limpios — menos resistencia, planeo más largo."},maxSpeed:{label:"Velocidad máx",desc:"Aumenta la velocidad máxima de crucero."},speedFromPitch:{label:"Picado",desc:"Más aceleración en picado — la altura se convierte en velocidad."},stallSpeed:{label:"Estabilidad",desc:"Umbral de pérdida más bajo — perdona el vuelo lento."},takeoffSpeed:{label:"Pista",desc:"Aceleración de despegue más rápida — menos carrera."},brake:{label:"Aerofreno",desc:"Desbloquea los alerones de freno (Espacio en vuelo)."},greyBoost:{label:"Boost de reserva",desc:"Empuje de emergencia más fuerte: más duración, más impulso, recarga más rápida."}},j1={pickLanguage:"Elige tu idioma",welcome:"Bienvenido a las Canarias",story:["Has plegado el avión de papel perfecto y lo has lanzado desde las laderas del Teide. Ahora cabalga las térmicas y planea sobre las Islas Canarias.","Aprovecha las corrientes ascendentes para mantenerte en el aire, atraviesa puntos de interés para recoger lugares y aterriza en las pistas para desbloquearlas como nuevos puntos de partida.","Aterrizar es seguir avanzando: cada toma de tierra recarga tu propulsor para el siguiente salto. Alinéate con una pista y posa con suavidad.","Gasta tus puntos en el hangar para mejorar tu avión y tu booster. Si planeas lo suficiente, nuevas islas quedan a tu alcance — desde La Gomera hasta Lanzarote. ¿Hasta dónde llegarás?"],next:"Siguiente",begin:"¡Vamos!"},$1={eyebrow:"Tutorial",skip:"Saltar",retry:"¡Otra vez!",done:"¡Listo, a volar!",launch:"Tira hacia abajo para despegar y planear",navLeft:"Ahora a la izquierda",navRight:"Ahora a la derecha",navUp:"Ahora sube",navDown:"Ahora baja",rings:"Atraviesa los dos aros ({collected}/{total})",boost:"Mantén el boost para un empujón",thermal:"Dirígete a la corriente ascendente para ganar altura",ringHigh:"Aprovecha la altura — atrapa el aro alto",ringLow:"Ahora baja de nuevo — por el aro bajo",invertHint:"¿Subir va al revés? Cámbialo.",steerHint:"Dirige aquí",endTitle:"¡Listo para planear!",endBody:"Explora las Islas Canarias y atraviesa aros para reunir lugares. Reúne suficientes y tu boost One-Shot te lleva a la siguiente isla. ¿Hasta dónde planeas?",endGo:"¡Vamos!"},Y1={loading:T1,a11y:R1,hud:C1,booster:L1,menu:P1,welcome:I1,pause:N1,crash:D1,hangar:O1,obsidian:k1,skins:U1,shop:F1,settings:z1,reset:B1,levels:H1,imprint:G1,licenses:V1,portrait:W1,testpin:q1,upgrades:X1,onboarding:j1,tutorial:$1},K1={sub:"Construction du monde…",hint:"Avec des réglages de qualité élevés, cela peut prendre quelques secondes."},Z1={pause:"Pause",map:"Carte",close:"Fermer",landings:"Atterrissages",brake:"Frein",oneShot:"One-Shot",boost:"Boost",sell:"Vendre pour {cost} points"},J1={lift:"Ascendance",soon:"bientôt",hintNormal:"↑ ↓ Tangage · ← → Roulis · Espace Frein · Maj Boost · F One-Shot",hintNormalTouch:"Piloter au joystick · Droite Boost / Frein / One-Shot",hintPrelaunch:"Tire vers le bas pour décoller",hintPrelaunchGyro:"Appuie sur boost pour décoller",hintTakeoff:"Roulage au décollage…",landingToast:"Atterri ! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nouvelle île découverte !",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Pose-toi à l'aéroport indiqué pour recharger tes boosters et gagner des points bonus.",airportUnlockTitle:"Aéroport débloqué !",airportUnlockBody:"Réapparais à {name} quand tu veux depuis le menu Niveaux.",airportUnlocked:"{name} débloqué",wrongApproach:"Mauvais côté d'approche — aligne-toi depuis l'autre bout."},Q1={names:["Aucun Booster","Booster Niveau 1","Booster Niveau 2","Booster Niveau 3","Booster Niveau MAX"],unlock:["","Booster Niveau 1 débloqué","Booster Niveau 2 débloqué — La Gomera à portée","Booster Niveau 3 débloqué — Gran Canaria à portée","Booster Niveau MAX débloqué — Fuerteventura / Lanzarote"]},eR={start:"Démarrer",startSubDefault:"Dernier checkpoint",levels:"Niveaux",levelsSub:"Choisir un aéroport",hangar:"Hangar",hangarSub:"Améliorations et statut",shop:"Boutique",shopSub:"Obsidienne et designs",settings:"Réglages",settingsSub:"Graphismes et performances",imprint:"Mentions légales",licenses:"Licences"},tR={checkpoint:"Checkpoint · {id}",firstFlight:"Premier vol · TFN"},nR={title:"Pause",resume:"Reprendre le vol",home:"Menu principal"},iR={title:"Atterrissage manqué",restart:"Redécoller",hint:"Barre d'espace",hangar:"Hangar",shop:"Boutique"},sR={title:"Hangar",points:"Points",locations:"Lieux",obsidian:"Obsidienne",highscore:"Record",plane:"Avion",dragToRotate:"Glisser pour tourner",upgrades:"Améliorations",booster:"Booster",selectUpgrade:"Touche une amélioration pour voir sa description.",buy:"Acheter · {cost}",buyObsidian:"Obsidienne · {cost}",max:"Max",level:"Niveau {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Ton niveau de boost augmente automatiquement quand tu découvres assez de lieux. Survole de nouveaux POI pour améliorer ton boost One-Shot.",equip:"Équiper",equipped:"Équipé",comingSoon:"Bientôt",getDiamonds:"Obtenir de l'obsidienne →",skinPrev:"Design précédent",skinNext:"Design suivant"},rR={title:"Payer avec de l'obsidienne ?",text:"Cette amélioration coûte <strong></strong>.",warn:"L'obsidienne s'achète avec de l'argent réel. Touche <em>Confirmer</em> seulement si tu veux vraiment dépenser de l'obsidienne.",cancel:"Annuler",confirm:"Confirmer",spendSkin:"Tu dépenses {obsidian} pour le design {label}."},oR={default:{name:"Papier",desc:"Le pliage classique."},charcoal:{name:"Anthracite",desc:"Une livrée ardoise mate — méritée par les explorateurs."},gold:{name:"Or",desc:"Une livrée premium étincelante."},comingSoon:{name:"Bientôt plus",desc:"De nouveaux designs arrivent."}},aR={intro:"L'obsidienne débloque des designs dans le hangar et des améliorations instantanées.",bonus:"+{pct}%",badgePopular:"Populaire",badgeValue:"Meilleur prix",granted:"+ {amount} obsidienne ajoutée",restore:"Restaurer les achats",restored:"Achats restaurés",viewSkins:"Voir les designs →",disclosure:"L'obsidienne et les designs sont stockés sur cet appareil.",watchAd:"Regarder une vidéo",adsLeftToday:"{count}/{cap} aujourd'hui",adsCapReached:"Reviens demain",removeAds:"Supprimer les pubs",removeAdsOwned:"Pubs supprimées"},lR={title:"Réglages",quality:"Qualité graphique",presetLow:"Faible",presetStandard:"Standard",presetHigh:"Élevée",presetUltra:"Ultra",advanced:"Avancé",meshRes:"Résolution du maillage",meshHint:"Segments · 100–3000",vegSamples:"Échantillons de végétation",vegHint:"10 000–10 000 000",restartNote:"Les changements nécessitent un redémarrage. L'application rechargera la page.",cancel:"Annuler",apply:"Appliquer et recharger",language:"Langue",controls:"Commandes",invertPitch:"Commandes de vol inversées",invertPitchHint:"Tirez vers le bas pour monter",gyroControl:"Pilotage par inclinaison",gyroControlHint:"Inclinez l'appareil pour diriger",gyroSensitivity:"Sensibilité",gyroRecalibrate:"Recalibrer",tutorial:"Tutoriel",replayTutorial:"Revoir le tutoriel",dangerZone:"Zone de danger",dangerDesc:"Réinitialise toute la progression : points, lieux, améliorations, POI découverts, aéroports et checkpoint. Les réglages graphiques sont conservés.",resetSave:"Réinitialiser la progression"},cR={title:"Vraiment supprimer ta sauvegarde ?",text:"Tous les points, lieux, améliorations et POI découverts seront perdus. Tu recommenceras à <strong>Tenerife Nord</strong> avec l'avion de base.",warn:"Cette action est irréversible.",cancel:"Annuler",confirm:"Réinitialiser"},uR={eyebrow:"Île",archTitle:"Îles Canaries",legendSpawn:"Départ",legendDiscovered:"Découvert",legendLocked:"Inconnu",hintDefault:"Touche un point de départ pour commencer là.",hintNone:"Atterris dans un aéroport pour le débloquer comme point de départ.",hintProgress:"{landed} / {total} aéroports débloqués. Touche un point de départ.",hintAll:"Tous les aéroports débloqués. Touche un point de départ.",markerLocked:"???",tipStart:"Démarrer à {id}",tipNotLanded:"{id} — pas encore atterri",tipUndiscovered:"Pas encore découvert"},dR={title:"Mentions légales",provider:"Fournisseur",contact:"Contact",privacy:"Confidentialité",privacyLink:"Ouvrir la politique de confidentialité",linksLiability:"Responsabilité des liens",linksText:"Notre offre contient des liens vers des sites web externes de tiers dont nous ne pouvons pas influencer le contenu. Nous déclinons donc toute responsabilité quant à ces contenus externes. Le fournisseur ou l'exploitant des pages liées est toujours responsable de leur contenu.",footer:"Swiss Innovation Studios · 2026"},hR={title:"Licences open source",intro:"Teide inclut les composants open source suivants. Les textes complets des licences figurent ci-dessous et sont inclus dans l'application.",footer:"Swiss Innovation Studios · 2026"},fR={title:"Tourne ton appareil",sub:"Teide se joue en mode paysage"},pR={title:"Mode test",prompt:"Saisir le code PIN",wrong:"Code PIN incorrect",cancel:"Annuler",confirm:"OK"},mR={drag:{label:"Aérodynamique",desc:"Pliage plus net — moins de traînée, vol plané plus long."},maxSpeed:{label:"Vitesse max",desc:"Augmente la vitesse de croisière maximale."},speedFromPitch:{label:"Piqué",desc:"Plus d'accélération en piqué — l'altitude devient de la vitesse."},stallSpeed:{label:"Stabilité",desc:"Seuil de décrochage plus bas — pardonne le vol lent."},takeoffSpeed:{label:"Piste",desc:"Accélération au décollage plus rapide — moins de roulage."},brake:{label:"Aérofrein",desc:"Débloque les volets de frein (Espace en vol)."},greyBoost:{label:"Boost de réserve",desc:"Poussée d'urgence plus forte : combustion plus longue, plus de poussée, recharge plus rapide."}},gR={pickLanguage:"Choisis ta langue",welcome:"Bienvenue aux Canaries",story:["Tu as plié l'avion en papier parfait et tu l'as lancé depuis les pentes du Teide. Chevauche maintenant les thermiques et plane au-dessus des îles Canaries.","Capte les courants ascendants pour rester en l'air, traverse des points d'intérêt pour récolter des lieux et pose-toi sur les pistes pour les débloquer comme nouveaux points de départ.","Se poser, c'est continuer : chaque atterrissage recharge ton booster pour le prochain saut. Aligne-toi sur une piste et pose-toi en douceur.","Dépense tes points au hangar pour améliorer ton avion et ton booster. Plane assez loin et de nouvelles îles deviennent accessibles — de La Gomera jusqu'à Lanzarote. Jusqu'où iras-tu ?"],next:"Suivant",begin:"C'est parti !"},vR={eyebrow:"Tutoriel",skip:"Passer",retry:"Réessaie !",done:"Prêt — c'est parti !",launch:"Tire vers le bas pour décoller et planer",navLeft:"Maintenant à gauche",navRight:"Maintenant à droite",navUp:"Maintenant monte",navDown:"Maintenant descends",rings:"Traverse les deux anneaux ({collected}/{total})",boost:"Maintiens le boost pour une accélération",thermal:"Dirige-toi vers l'ascendance pour prendre de l'altitude",ringHigh:"Profite de l'altitude — attrape l'anneau haut",ringLow:"Maintenant redescends — par l'anneau bas",invertHint:"Monter à l'envers ? Inverse-le.",steerHint:"Pilote ici",endTitle:"Prêt à planer !",endBody:"Explore les îles Canaries et traverse des anneaux pour collecter des lieux. Réunis-en assez et ton boost One-Shot t'emmène à l'île suivante. Jusqu'où planeras-tu ?",endGo:"C'est parti !"},yR={loading:K1,a11y:Z1,hud:J1,booster:Q1,menu:eR,welcome:tR,pause:nR,crash:iR,hangar:sR,obsidian:rR,skins:oR,shop:aR,settings:lR,reset:cR,levels:uR,imprint:dR,licenses:hR,portrait:fR,testpin:pR,upgrades:mR,onboarding:gR,tutorial:vR},xR={sub:"Costruzione del mondo…",hint:"Con impostazioni di qualità elevate può richiedere alcuni secondi."},_R={pause:"Pausa",map:"Mappa",close:"Chiudi",landings:"Atterraggi",brake:"Freno",oneShot:"One-Shot",boost:"Boost",sell:"Vendi per {cost} punti"},bR={lift:"Ascendenza",soon:"presto",hintNormal:"↑ ↓ Beccheggio · ← → Rollio · Spazio Freno · Shift Boost · F One-Shot",hintNormalTouch:"Guida col joystick · Destra Boost / Freno / One-Shot",hintPrelaunch:"Tira giù per decollare",hintPrelaunchGyro:"Tocca boost per decollare",hintTakeoff:"Rullaggio al decollo…",landingToast:"Atterrato! · {id}",landingBonus:"+ {bonus} pti",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nuova isola scoperta!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Atterra all'aeroporto segnalato per ricaricare i propulsori e guadagnare punti extra.",airportUnlockTitle:"Aeroporto sbloccato!",airportUnlockBody:"Riparti da {name} quando vuoi dal menu Livelli.",airportUnlocked:"{name} sbloccato",wrongApproach:"Lato di avvicinamento sbagliato: allineati dall'altra estremità."},SR={names:["Nessun Booster","Booster Livello 1","Booster Livello 2","Booster Livello 3","Booster Livello MAX"],unlock:["","Booster Livello 1 sbloccato","Booster Livello 2 sbloccato — La Gomera a portata","Booster Livello 3 sbloccato — Gran Canaria a portata","Booster Livello MAX sbloccato — Fuerteventura / Lanzarote"]},MR={start:"Inizia",startSubDefault:"Ultimo checkpoint",levels:"Livelli",levelsSub:"Scegli aeroporto",hangar:"Hangar",hangarSub:"Potenziamenti e stato",shop:"Negozio",shopSub:"Ossidiana e design",settings:"Impostazioni",settingsSub:"Grafica e prestazioni",imprint:"Note legali",licenses:"Licenze"},wR={checkpoint:"Checkpoint · {id}",firstFlight:"Primo volo · TFN"},ER={title:"Pausa",resume:"Riprendi volo",home:"Menu principale"},AR={title:"Atterraggio di fortuna",restart:"Decolla di nuovo",hint:"Barra spaziatrice",hangar:"Hangar",shop:"Negozio"},TR={title:"Hangar",points:"Punti",locations:"Luoghi",obsidian:"Ossidiana",highscore:"Record",plane:"Aereo",dragToRotate:"Trascina per ruotare",upgrades:"Potenziamenti",booster:"Booster",selectUpgrade:"Tocca un potenziamento per vederne la descrizione.",buy:"Acquista · {cost}",buyObsidian:"Ossidiana · {cost}",max:"Max",level:"Livello {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Il tuo livello di boost aumenta automaticamente quando scopri abbastanza luoghi. Attraversa nuovi POI per migliorare il tuo boost One-Shot.",equip:"Equipaggia",equipped:"Equipaggiato",comingSoon:"In arrivo",getDiamonds:"Ottieni ossidiana →",skinPrev:"Design precedente",skinNext:"Design successivo"},RR={title:"Pagare con l'ossidiana?",text:"Questo potenziamento costa <strong></strong>.",warn:"L'ossidiana si acquista con denaro reale. Tocca <em>Conferma</em> solo se vuoi davvero spendere ossidiana.",cancel:"Annulla",confirm:"Conferma",spendSkin:"Stai spendendo {obsidian} per il design {label}."},CR={default:{name:"Carta",desc:"La piega classica."},charcoal:{name:"Antracite",desc:"Una livrea ardesia opaca — guadagnata dagli esploratori."},gold:{name:"Oro",desc:"Una scintillante livrea premium."},comingSoon:{name:"Altri presto",desc:"Nuovi design in arrivo."}},LR={intro:"L'ossidiana sblocca design nell'hangar e potenziamenti istantanei.",bonus:"+{pct}%",badgePopular:"Popolare",badgeValue:"Miglior valore",granted:"+ {amount} ossidiana aggiunta",restore:"Ripristina acquisti",restored:"Acquisti ripristinati",viewSkins:"Vedi i design →",disclosure:"Ossidiana e design sono salvati su questo dispositivo.",watchAd:"Guarda un video",adsLeftToday:"{count}/{cap} oggi",adsCapReached:"Torna domani",removeAds:"Rimuovi annunci",removeAdsOwned:"Annunci rimossi"},PR={title:"Impostazioni",quality:"Qualità grafica",presetLow:"Bassa",presetStandard:"Standard",presetHigh:"Alta",presetUltra:"Ultra",advanced:"Avanzate",meshRes:"Risoluzione mesh",meshHint:"Segments · 100–3000",vegSamples:"Campioni vegetazione",vegHint:"10.000–10.000.000",restartNote:"Le modifiche richiedono un riavvio. Applicando, la pagina verrà ricaricata.",cancel:"Annulla",apply:"Applica e ricarica",language:"Lingua",controls:"Comandi",invertPitch:"Comandi di volo invertiti",invertPitchHint:"Tira giù per salire",gyroControl:"Controllo a inclinazione",gyroControlHint:"Inclina il dispositivo per virare",gyroSensitivity:"Sensibilità",gyroRecalibrate:"Ricalibra",tutorial:"Tutorial",replayTutorial:"Ripeti tutorial",dangerZone:"Zona pericolo",dangerDesc:"Reimposta tutti i progressi: punti, luoghi, potenziamenti, POI scoperti, aeroporti e checkpoint. Le impostazioni grafiche vengono mantenute.",resetSave:"Reimposta progressi"},IR={title:"Vuoi davvero eliminare il salvataggio?",text:"Tutti i punti, i luoghi, i potenziamenti e i POI scoperti andranno persi. Ripartirai da <strong>Tenerife Nord</strong> con l'aereo base.",warn:"Questa azione non può essere annullata.",cancel:"Annulla",confirm:"Reimposta"},NR={eyebrow:"Isola",archTitle:"Isole Canarie",legendSpawn:"Partenza",legendDiscovered:"Scoperto",legendLocked:"Sconosciuto",hintDefault:"Tocca un punto di partenza per iniziare lì.",hintNone:"Atterra in un aeroporto per sbloccarlo come punto di partenza.",hintProgress:"{landed} / {total} aeroporti sbloccati. Tocca un punto di partenza.",hintAll:"Tutti gli aeroporti sbloccati. Tocca un punto di partenza.",markerLocked:"???",tipStart:"Parti da {id}",tipNotLanded:"{id} — non ancora atterrato",tipUndiscovered:"Non ancora scoperto"},DR={title:"Note legali",provider:"Fornitore",contact:"Contatto",privacy:"Privacy",privacyLink:"Apri l'informativa sulla privacy",linksLiability:"Responsabilità per i link",linksText:"La nostra offerta contiene link a siti web esterni di terzi sui cui contenuti non abbiamo alcuna influenza. Pertanto non possiamo assumerci alcuna responsabilità per tali contenuti di terzi. Del contenuto delle pagine collegate è sempre responsabile il rispettivo fornitore o gestore delle pagine.",footer:"Swiss Innovation Studios · 2026"},OR={title:"Licenze open source",intro:"Teide include i seguenti componenti open source. I testi completi delle licenze sono qui sotto e inclusi nell'app.",footer:"Swiss Innovation Studios · 2026"},kR={title:"Ruota il dispositivo",sub:"Teide si gioca in modalità orizzontale"},UR={title:"Modalità test",prompt:"Inserisci il PIN",wrong:"PIN errato",cancel:"Annulla",confirm:"OK"},FR={drag:{label:"Aerodinamica",desc:"Pieghe più lisce — meno resistenza, planata più lunga."},maxSpeed:{label:"Velocità max",desc:"Aumenta la velocità di crociera massima."},speedFromPitch:{label:"Picchiata",desc:"Più accelerazione in picchiata — la quota diventa velocità."},stallSpeed:{label:"Stabilità",desc:"Soglia di stallo più bassa — perdona il volo lento."},takeoffSpeed:{label:"Pista",desc:"Accelerazione al decollo più rapida — meno rullaggio."},brake:{label:"Aerofreno",desc:"Sblocca gli alettoni freno (Spazio in volo)."},greyBoost:{label:"Boost di riserva",desc:"Spinta d'emergenza più forte: combustione più lunga, più spinta, ricarica più rapida."}},zR={pickLanguage:"Scegli la lingua",welcome:"Benvenuto alle Canarie",story:["Hai piegato il perfetto aeroplanino di carta e lo hai lanciato dai pendii del Teide. Ora cavalca le termiche e plana sulle Isole Canarie.","Sfrutta le correnti ascensionali per restare in volo, attraversa i punti d'interesse per raccogliere i luoghi e atterra sulle piste per sbloccarle come nuovi punti di partenza.","Atterrare significa proseguire: ogni atterraggio ricarica il tuo propulsore per il salto successivo. Allineati a una pista e posati con delicatezza.","Spendi i tuoi punti nell'hangar per potenziare aereo e booster. Plana abbastanza lontano e nuove isole entrano nel raggio — da La Gomera fino a Lanzarote. Fin dove arriverai?"],next:"Avanti",begin:"Si parte!"},BR={eyebrow:"Tutorial",skip:"Salta",retry:"Riprova!",done:"Pronto — si vola!",launch:"Tira giù per decollare e planare",navLeft:"Ora a sinistra",navRight:"Ora a destra",navUp:"Ora sali",navDown:"Ora scendi",rings:"Attraversa entrambi gli anelli ({collected}/{total})",boost:"Tieni premuto il boost per uno scatto",thermal:"Punta verso la corrente ascensionale per guadagnare quota",ringHigh:"Sfrutta la quota — prendi l'anello alto",ringLow:"Ora ridiscendi — attraverso l'anello basso",invertHint:"Salire sembra al contrario? Invertilo.",steerHint:"Guida qui",endTitle:"Pronto a planare!",endBody:"Esplora le Canarie e attraversa gli anelli per raccogliere luoghi. Raccogline a sufficienza e il tuo boost One-Shot ti porta all'isola successiva. Fin dove plani?",endGo:"Si vola!"},HR={loading:xR,a11y:_R,hud:bR,booster:SR,menu:MR,welcome:wR,pause:ER,crash:AR,hangar:TR,obsidian:RR,skins:CR,shop:LR,settings:PR,reset:IR,levels:NR,imprint:DR,licenses:OR,portrait:kR,testpin:UR,upgrades:FR,onboarding:zR,tutorial:BR},GR={sub:"Wereld wordt gebouwd…",hint:"Bij hogere kwaliteitsinstellingen kan dit enkele seconden duren."},VR={pause:"Pauze",map:"Kaart",close:"Sluiten",landings:"Landingen",brake:"Rem",oneShot:"One-Shot",boost:"Boost",sell:"Verkopen voor {cost} punten"},WR={lift:"Lift",soon:"binnenkort",hintNormal:"↑ ↓ Pitch · ← → Rol · Spatie Rem · Shift Boost · F One-Shot",hintNormalTouch:"Stuur met joystick · Rechts Boost / Rem / One-Shot",hintPrelaunch:"Trek omlaag om te starten",hintPrelaunchGyro:"Tik op boost om op te stijgen",hintTakeoff:"Startrun…",landingToast:"Geland! · {id}",landingBonus:"+ {bonus} ptn",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nieuw eiland ontdekt!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Land op het gemarkeerde vliegveld om je boosters bij te vullen en bonuspunten te verdienen.",airportUnlockTitle:"Vliegveld ontgrendeld!",airportUnlockBody:"Start wanneer je wilt bij {name} via het menu Levels.",airportUnlocked:"{name} ontgrendeld",wrongApproach:"Verkeerde aanvliegzijde — kom van de andere kant."},qR={names:["Geen Booster","Booster Niveau 1","Booster Niveau 2","Booster Niveau 3","Booster Niveau MAX"],unlock:["","Booster Niveau 1 ontgrendeld","Booster Niveau 2 ontgrendeld — La Gomera binnen bereik","Booster Niveau 3 ontgrendeld — Gran Canaria binnen bereik","Booster Niveau MAX ontgrendeld — Fuerteventura / Lanzarote"]},XR={start:"Start",startSubDefault:"Laatste checkpoint",levels:"Levels",levelsSub:"Kies vliegveld",hangar:"Hangar",hangarSub:"Upgrades & status",shop:"Winkel",shopSub:"Obsidiaan & designs",settings:"Instellingen",settingsSub:"Graphics & prestaties",imprint:"Colofon",licenses:"Licenties"},jR={checkpoint:"Checkpoint · {id}",firstFlight:"Eerste vlucht · TFN"},$R={title:"Pauze",resume:"Vlucht hervatten",home:"Hoofdmenu"},YR={title:"Crashlanding",restart:"Opnieuw opstijgen",hint:"Spatiebalk",hangar:"Hangar",shop:"Winkel"},KR={title:"Hangar",points:"Punten",locations:"Locaties",obsidian:"Obsidiaan",highscore:"Record",plane:"Vliegtuig",dragToRotate:"Sleep om te draaien",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tik op een upgrade om de beschrijving te zien.",buy:"Kopen · {cost}",buyObsidian:"Obsidiaan · {cost}",max:"Max",level:"Niveau {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Je boostniveau stijgt automatisch zodra je genoeg locaties hebt ontdekt. Vlieg door nieuwe POI's om je One-Shot-boost te verbeteren.",equip:"Uitrusten",equipped:"Uitgerust",comingSoon:"Binnenkort",getDiamonds:"Obsidiaan halen →",skinPrev:"Vorig design",skinNext:"Volgend design"},ZR={title:"Met obsidiaan betalen?",text:"Deze upgrade kost <strong></strong>.",warn:"Obsidiaan wordt met echt geld gekocht. Tik alleen op <em>Bevestigen</em> als je echt obsidiaan wilt uitgeven.",cancel:"Annuleren",confirm:"Bevestigen",spendSkin:"Je geeft {obsidian} uit aan het design {label}."},JR={default:{name:"Papier",desc:"De klassieke vouw."},charcoal:{name:"Antraciet",desc:"Een matte leikleurige livrei — verdiend door ontdekkers."},gold:{name:"Goud",desc:"Een glanzende premium livrei."},comingSoon:{name:"Binnenkort meer",desc:"Nieuwe designs zijn onderweg."}},QR={intro:"Obsidiaan ontgrendelt designs in de hangar en directe upgrades.",bonus:"+{pct}%",badgePopular:"Populair",badgeValue:"Beste waarde",granted:"+ {amount} obsidiaan toegevoegd",restore:"Aankopen herstellen",restored:"Aankopen hersteld",viewSkins:"Designs bekijken →",disclosure:"Obsidiaan en designs worden op dit apparaat bewaard.",watchAd:"Bekijk een video",adsLeftToday:"{count}/{cap} vandaag",adsCapReached:"Kom morgen terug",removeAds:"Advertenties verwijderen",removeAdsOwned:"Advertenties verwijderd"},eC={title:"Instellingen",quality:"Grafische kwaliteit",presetLow:"Laag",presetStandard:"Standaard",presetHigh:"Hoog",presetUltra:"Ultra",advanced:"Geavanceerd",meshRes:"Mesh-resolutie",meshHint:"Segments · 100–3000",vegSamples:"Vegetatie-samples",vegHint:"10.000–10.000.000",restartNote:"Wijzigingen vereisen een herstart. Bij toepassen wordt de pagina herladen.",cancel:"Annuleren",apply:"Toepassen & herladen",language:"Taal",controls:"Besturing",invertPitch:"Omgekeerde vluchtbesturing",invertPitchHint:"Trek omlaag om te klimmen",gyroControl:"Kantelbesturing",gyroControlHint:"Kantel je toestel om te sturen",gyroSensitivity:"Gevoeligheid",gyroRecalibrate:"Herkalibreren",tutorial:"Tutorial",replayTutorial:"Tutorial opnieuw",dangerZone:"Gevarenzone",dangerDesc:"Zet alle voortgang terug: punten, locaties, upgrades, ontdekte POI's, vliegvelden en checkpoint. Grafische instellingen blijven behouden.",resetSave:"Voortgang resetten"},tC={title:"Opslag echt verwijderen?",text:"Alle punten, locaties, upgrades en ontdekte plekken gaan verloren. Je begint op <strong>Tenerife Nord</strong> met het basisvliegtuig.",warn:"Deze actie kan niet ongedaan worden gemaakt.",cancel:"Annuleren",confirm:"Resetten"},nC={eyebrow:"Eiland",archTitle:"Canarische Eilanden",legendSpawn:"Start",legendDiscovered:"Ontdekt",legendLocked:"Onbekend",hintDefault:"Tik op een startpunt om daar te beginnen.",hintNone:"Land op een vliegveld om het als startpunt te ontgrendelen.",hintProgress:"{landed} / {total} vliegvelden ontgrendeld. Tik op een startpunt.",hintAll:"Alle vliegvelden ontgrendeld. Tik op een startpunt.",markerLocked:"???",tipStart:"Start bij {id}",tipNotLanded:"{id} — nog niet geland",tipUndiscovered:"Nog niet ontdekt"},iC={title:"Colofon",provider:"Aanbieder",contact:"Contact",privacy:"Privacy",privacyLink:"Privacybeleid openen",linksLiability:"Aansprakelijkheid voor links",linksText:"Ons aanbod bevat links naar externe websites van derden, op de inhoud waarvan wij geen invloed hebben. Daarom kunnen wij voor deze externe inhoud geen aansprakelijkheid aanvaarden. Voor de inhoud van de gelinkte pagina's is steeds de betreffende aanbieder of beheerder van de pagina's verantwoordelijk.",footer:"Swiss Innovation Studios · 2026"},sC={title:"Opensource-licenties",intro:"Teide bevat de volgende opensourcecomponenten. De volledige licentieteksten staan hieronder en zijn bij de app gevoegd.",footer:"Swiss Innovation Studios · 2026"},rC={title:"Draai je apparaat",sub:"Teide wordt in liggende stand gespeeld"},oC={title:"Testmodus",prompt:"Voer pincode in",wrong:"Onjuiste pincode",cancel:"Annuleren",confirm:"OK"},aC={drag:{label:"Aerodynamica",desc:"Strakkere vouwen — minder weerstand, langere glijvlucht."},maxSpeed:{label:"Topsnelheid",desc:"Verhoogt de maximale kruissnelheid."},speedFromPitch:{label:"Duikvlucht",desc:"Meer versnelling in een duik — hoogte wordt snelheid."},stallSpeed:{label:"Stabiliteit",desc:"Lagere overtreksnelheid — vergeeft langzaam vliegen."},takeoffSpeed:{label:"Startbaan",desc:"Snellere startversnelling — kortere startrun."},brake:{label:"Remklep",desc:"Ontgrendelt de remkleppen (Spatie tijdens de vlucht)."},greyBoost:{label:"Reserveboost",desc:"Sterkere noodstuwing: langere brandtijd, meer duwkracht, sneller bijvullen."}},lC={pickLanguage:"Kies je taal",welcome:"Welkom op de Canarische Eilanden",story:["Je hebt het perfecte papieren vliegtuigje gevouwen en het vanaf de hellingen van de Teide gelanceerd. Berijd nu de thermiek en zweef over de Canarische Eilanden.","Vang opstijgende lucht om in de lucht te blijven, duik door points of interest om locaties te verzamelen en land op startbanen om ze als nieuwe startpunten te ontgrendelen.","Landen is doorgaan: elke landing vult je booster aan voor de volgende sprong. Lijn uit met een baan en zet zacht neer.","Geef je punten uit in de hangar om je vliegtuig en booster te verbeteren. Zweef ver genoeg en nieuwe eilanden komen binnen bereik — van La Gomera tot Lanzarote. Hoe ver kom jij?"],next:"Volgende",begin:"Aan de slag!"},cC={eyebrow:"Tutorial",skip:"Overslaan",retry:"Opnieuw!",done:"Klaar — daar ga je!",launch:"Trek omlaag om op te stijgen en te zweven",navLeft:"Nu naar links",navRight:"Nu naar rechts",navUp:"Nu klimmen",navDown:"Nu dalen",rings:"Vlieg door beide ringen ({collected}/{total})",boost:"Houd boost vast voor een snelheidsstoot",thermal:"Stuur de opstijgwind in om hoogte te winnen",ringHigh:"Gebruik je hoogte — pak de hoge ring",ringLow:"Nu weer omlaag — door de lage ring",invertHint:"Klimmen omgekeerd? Wissel het om.",steerHint:"Hier sturen",endTitle:"Klaar om te zweven!",endBody:"Verken de Canarische Eilanden en vlieg door ringen om locaties te verzamelen. Verzamel er genoeg en je One-Shot-boost brengt je naar het volgende eiland. Hoe ver zweef jij?",endGo:"Daar gaan we"},uC={loading:GR,a11y:VR,hud:WR,booster:qR,menu:XR,welcome:jR,pause:$R,crash:YR,hangar:KR,obsidian:ZR,skins:JR,shop:QR,settings:eC,reset:tC,levels:nC,imprint:iC,licenses:sC,portrait:rC,testpin:oC,upgrades:aC,onboarding:lC,tutorial:cC},dC={sub:"Budowanie świata…",hint:"Przy wyższych ustawieniach jakości może to potrwać kilka sekund."},hC={pause:"Pauza",map:"Mapa",close:"Zamknij",landings:"Lądowania",brake:"Hamulec",oneShot:"One-Shot",boost:"Boost",sell:"Sprzedaj za {cost} pkt"},fC={lift:"Wznoszenie",soon:"wkrótce",hintNormal:"↑ ↓ Pochylenie · ← → Przechył · Spacja Hamulec · Shift Boost · F One-Shot",hintNormalTouch:"Steruj joystickiem · Prawo Boost / Hamulec / One-Shot",hintPrelaunch:"Pociągnij w dół, aby wystartować",hintPrelaunchGyro:"Dotknij boost, aby wystartować",hintTakeoff:"Rozbieg…",landingToast:"Wylądowano! · {id}",landingBonus:"+ {bonus} pkt",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Odkryto nową wyspę!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Wyląduj na oznaczonym lotnisku, aby naładować boostery i zdobyć dodatkowe punkty.",airportUnlockTitle:"Lotnisko odblokowane!",airportUnlockBody:"Startuj w {name} w dowolnej chwili z menu Poziomy.",airportUnlocked:"{name} odblokowane",wrongApproach:"Zła strona podejścia — podejdź z drugiej strony."},pC={names:["Brak Boostera","Booster Poziom 1","Booster Poziom 2","Booster Poziom 3","Booster Poziom MAX"],unlock:["","Booster Poziom 1 odblokowany","Booster Poziom 2 odblokowany — La Gomera w zasięgu","Booster Poziom 3 odblokowany — Gran Canaria w zasięgu","Booster Poziom MAX odblokowany — Fuerteventura / Lanzarote"]},mC={start:"Start",startSubDefault:"Ostatni checkpoint",levels:"Poziomy",levelsSub:"Wybierz lotnisko",hangar:"Hangar",hangarSub:"Ulepszenia i status",shop:"Sklep",shopSub:"Obsydian i wzory",settings:"Ustawienia",settingsSub:"Grafika i wydajność",imprint:"Nota prawna",licenses:"Licencje"},gC={checkpoint:"Checkpoint · {id}",firstFlight:"Pierwszy lot · TFN"},vC={title:"Pauza",resume:"Wznów lot",home:"Menu główne"},yC={title:"Rozbicie",restart:"Wystartuj ponownie",hint:"Spacja",hangar:"Hangar",shop:"Sklep"},xC={title:"Hangar",points:"Punkty",locations:"Miejsca",obsidian:"Obsydian",highscore:"Rekord",plane:"Samolot",dragToRotate:"Przeciągnij, aby obrócić",upgrades:"Ulepszenia",booster:"Booster",selectUpgrade:"Dotknij ulepszenia, aby zobaczyć opis.",buy:"Kup · {cost}",buyObsidian:"Obsydian · {cost}",max:"Maks",level:"Poziom {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Poziom boostera rośnie automatycznie, gdy odkryjesz wystarczająco wiele miejsc. Przelatuj przez nowe POI, aby ulepszyć swój boost One-Shot.",equip:"Załóż",equipped:"Założony",comingSoon:"Wkrótce",getDiamonds:"Zdobądź obsydian →",skinPrev:"Poprzedni wzór",skinNext:"Następny wzór"},_C={title:"Zapłacić obsydianem?",text:"To ulepszenie kosztuje <strong></strong>.",warn:"Obsydian kupuje się za prawdziwe pieniądze. Dotknij <em>Potwierdź</em> tylko, jeśli naprawdę chcesz wydać obsydian.",cancel:"Anuluj",confirm:"Potwierdź",spendSkin:"Wydajesz {obsidian} na wzór {label}."},bC={default:{name:"Papier",desc:"Klasyczne złożenie."},charcoal:{name:"Antracyt",desc:"Matowe łupkowe malowanie — dla odkrywców."},gold:{name:"Złoto",desc:"Lśniące malowanie premium."},comingSoon:{name:"Wkrótce więcej",desc:"Nowe wzory są w drodze."}},SC={intro:"Obsydian odblokowuje wzory w hangarze i natychmiastowe ulepszenia.",bonus:"+{pct}%",badgePopular:"Popularne",badgeValue:"Najlepsza oferta",granted:"+ {amount} obsydianu dodano",restore:"Przywróć zakupy",restored:"Zakupy przywrócone",viewSkins:"Zobacz wzory →",disclosure:"Obsydian i wzory są przechowywane na tym urządzeniu.",watchAd:"Obejrzyj film",adsLeftToday:"{count}/{cap} dziś",adsCapReached:"Wróć jutro",removeAds:"Usuń reklamy",removeAdsOwned:"Reklamy usunięte"},MC={title:"Ustawienia",quality:"Jakość grafiki",presetLow:"Niska",presetStandard:"Standard",presetHigh:"Wysoka",presetUltra:"Ultra",advanced:"Zaawansowane",meshRes:"Rozdzielczość siatki",meshHint:"Segments · 100–3000",vegSamples:"Próbki roślinności",vegHint:"10 000–10 000 000",restartNote:"Zmiany wymagają ponownego uruchomienia. Po zastosowaniu strona zostanie przeładowana.",cancel:"Anuluj",apply:"Zastosuj i przeładuj",language:"Język",controls:"Sterowanie",invertPitch:"Odwrócone sterowanie lotem",invertPitchHint:"Pociągnij w dół, aby się wznosić",gyroControl:"Sterowanie przechyłem",gyroControlHint:"Przechylaj urządzenie, aby sterować",gyroSensitivity:"Czułość",gyroRecalibrate:"Kalibruj ponownie",tutorial:"Samouczek",replayTutorial:"Powtórz samouczek",dangerZone:"Strefa zagrożenia",dangerDesc:"Resetuje cały postęp: punkty, miejsca, ulepszenia, odkryte POI, lotniska i checkpoint. Ustawienia grafiki zostają zachowane.",resetSave:"Zresetuj postęp"},wC={title:"Na pewno usunąć zapis?",text:"Wszystkie punkty, miejsca, ulepszenia i odkryte POI przepadną. Zaczniesz na <strong>Tenerife Nord</strong> podstawowym samolotem.",warn:"Tej operacji nie można cofnąć.",cancel:"Anuluj",confirm:"Resetuj"},EC={eyebrow:"Wyspa",archTitle:"Wyspy Kanaryjskie",legendSpawn:"Start",legendDiscovered:"Odkryte",legendLocked:"Nieznane",hintDefault:"Dotknij punktu startu, aby tam zacząć.",hintNone:"Wyląduj na lotnisku, aby odblokować je jako punkt startu.",hintProgress:"{landed} / {total} lotnisk odblokowanych. Dotknij punktu startu.",hintAll:"Wszystkie lotniska odblokowane. Dotknij punktu startu.",markerLocked:"???",tipStart:"Start na {id}",tipNotLanded:"{id} — jeszcze nie wylądowano",tipUndiscovered:"Jeszcze nieodkryte"},AC={title:"Nota prawna",provider:"Dostawca",contact:"Kontakt",privacy:"Prywatność",privacyLink:"Otwórz politykę prywatności",linksLiability:"Odpowiedzialność za linki",linksText:"Nasza oferta zawiera linki do zewnętrznych stron internetowych osób trzecich, na których treść nie mamy wpływu. Dlatego nie możemy ponosić odpowiedzialności za te obce treści. Za treść stron, do których prowadzą linki, odpowiada zawsze ich dostawca lub operator.",footer:"Swiss Innovation Studios · 2026"},TC={title:"Licencje open source",intro:"Teide zawiera następujące komponenty open source. Pełne teksty licencji znajdują się poniżej i są dołączone do aplikacji.",footer:"Swiss Innovation Studios · 2026"},RC={title:"Obróć urządzenie",sub:"W Teide gra się w trybie poziomym"},CC={title:"Tryb testowy",prompt:"Wpisz PIN",wrong:"Błędny PIN",cancel:"Anuluj",confirm:"OK"},LC={drag:{label:"Aerodynamika",desc:"Gładsze złożenia — mniejszy opór, dłuższy lot ślizgowy."},maxSpeed:{label:"Prędkość maks.",desc:"Zwiększa maksymalną prędkość przelotową."},speedFromPitch:{label:"Nurkowanie",desc:"Większe przyspieszenie w nurkowaniu — wysokość zamienia się w prędkość."},stallSpeed:{label:"Stabilność",desc:"Niższy próg przeciągnięcia — wybacza wolny lot."},takeoffSpeed:{label:"Pas startowy",desc:"Szybsze przyspieszenie przy starcie — krótszy rozbieg."},brake:{label:"Hamulec aerodynamiczny",desc:"Odblokowuje klapy hamujące (Spacja w locie)."},greyBoost:{label:"Boost rezerwowy",desc:"Mocniejszy ciąg awaryjny: dłuższe spalanie, większy napęd, szybsze ładowanie."}},PC={pickLanguage:"Wybierz język",welcome:"Witaj na Wyspach Kanaryjskich",story:["Złożyłeś idealny papierowy samolot i wypuściłeś go ze zboczy Teide. Teraz ujeżdżaj kominy termiczne i szybuj nad Wyspami Kanaryjskimi.","Łap prądy wznoszące, aby utrzymać się w powietrzu, przelatuj przez punkty zainteresowania, aby zbierać miejsca, i ląduj na pasach, aby odblokować je jako nowe punkty startu.","Lądowanie pozwala lecieć dalej: każde lądowanie ładuje twój booster na kolejny skok. Wyrównaj do pasa i wyląduj łagodnie.","Wydawaj punkty w hangarze, aby ulepszać samolot i booster. Szybuj wystarczająco daleko, a nowe wyspy znajdą się w zasięgu — od La Gomery po Lanzarote. Jak daleko dolecisz?"],next:"Dalej",begin:"Zaczynamy!"},IC={eyebrow:"Samouczek",skip:"Pomiń",retry:"Jeszcze raz!",done:"Gotowe — lecimy!",launch:"Pociągnij w dół, aby wystartować i szybować",navLeft:"Teraz w lewo",navRight:"Teraz w prawo",navUp:"Teraz wznoś się",navDown:"Teraz opadaj",rings:"Przeleć przez oba pierścienie ({collected}/{total})",boost:"Przytrzymaj boost, by przyspieszyć",thermal:"Skieruj się w prąd wznoszący, aby nabrać wysokości",ringHigh:"Wykorzystaj wysokość — złap wysoki pierścień",ringLow:"Teraz w dół — przez niski pierścień",invertHint:"Wznoszenie na odwrót? Przełącz.",steerHint:"Steruj tutaj",endTitle:"Gotowy do szybowania!",endBody:"Odkrywaj Wyspy Kanaryjskie i przelatuj przez pierścienie, aby zbierać miejsca. Zbierz ich dość, a boost One-Shot zaniesie cię na kolejną wyspę. Jak daleko poszybujesz?",endGo:"Lecimy!"},NC={loading:dC,a11y:hC,hud:fC,booster:pC,menu:mC,welcome:gC,pause:vC,crash:yC,hangar:xC,obsidian:_C,skins:bC,shop:SC,settings:MC,reset:wC,levels:EC,imprint:AC,licenses:TC,portrait:RC,testpin:CC,upgrades:LC,onboarding:PC,tutorial:IC},DC={en:i1,de:A1,es:Y1,fr:yR,it:HR,nl:uC,pl:NC},La=["en","de","es","fr","it","nl","pl"],OC={en:{label:"English",flag:"🇬🇧"},de:{label:"Deutsch",flag:"🇩🇪"},es:{label:"Español",flag:"🇪🇸"},fr:{label:"Français",flag:"🇫🇷"},it:{label:"Italiano",flag:"🇮🇹"},nl:{label:"Nederlands",flag:"🇳🇱"},pl:{label:"Polski",flag:"🇵🇱"}};let Pi="en";const jd=new Set;function kC(){const e=(navigator.languages&&navigator.languages[0]||navigator.language||"en").slice(0,2).toLowerCase();return La.includes(e)?e:"en"}function UC(n){return n&&La.includes(n)?n:kC()}function Im(n,e){let t=DC[n];for(const i of e.split(".")){if(t==null)return;t=t[i]}return t}function Ee(n,e){let t=Im(Pi,n);return t===void 0&&Pi!=="en"&&(t=Im("en",n)),t===void 0?n:(typeof t!="string"||e&&(t=t.replace(/\{(\w+)\}/g,(i,s)=>s in e?String(e[s]):i)),t)}function FC(){return Pi}const zC={en:"en-GB",de:"de-DE",es:"es-ES",fr:"fr-FR",it:"it-IT",nl:"nl-NL",pl:"pl-PL"};function Tv(){return zC[Pi]||"en-GB"}function BC(){const n=new URLSearchParams(window.location.search).get("lang");return Pi=n&&La.includes(n)?n:UC(mn().language),document.documentElement.lang=Pi,Cv(),Pi}function Rv(n){if(!La.includes(n)||n===Pi)return;Pi=n,document.documentElement.lang=n;const e=mn();e.language=n,lr(e),Cv();for(const t of jd)try{t(n)}catch(i){console.warn("[i18n] listener failed",i)}}function Qc(n){return jd.add(n),()=>jd.delete(n)}function Cv(n=document){n.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=Ee(e.dataset.i18n)}),n.querySelectorAll("[data-i18n-html]").forEach(e=>{e.innerHTML=Ee(e.dataset.i18nHtml)}),n.querySelectorAll("[data-i18n-aria]").forEach(e=>{e.setAttribute("aria-label",Ee(e.dataset.i18nAria))}),n.querySelectorAll("[data-i18n-title]").forEach(e=>{e.title=Ee(e.dataset.i18nTitle)}),n.querySelectorAll("[data-i18n-placeholder]").forEach(e=>{e.placeholder=Ee(e.dataset.i18nPlaceholder)})}function Lv(n,{onPick:e,active:t,flagsOnly:i=!1}={}){if(!n)return;n.innerHTML="";const s=t||FC();for(const r of La){const o=OC[r]||{label:r,flag:""},a=document.createElement("button");a.type="button",a.className="lang-chip"+(i?" lang-chip-flagsonly":"")+(r===s?" active":""),a.dataset.lang=r,a.setAttribute("aria-label",o.label),r===s&&a.setAttribute("aria-current","true"),a.innerHTML=i?`<span class="lang-chip-flag">${o.flag}</span>`:`<span class="lang-chip-flag">${o.flag}</span><span class="lang-chip-label">${o.label}</span>`,a.addEventListener("click",()=>e&&e(r)),n.appendChild(a)}}const HC=Math.PI/180,En={pitch:0,roll:0,isActive:!1};let dc=!1,hc=!1,Pv=fn.sensDefault,Nm=null,Dm=null,ba=!0,zr=0,Br=0,lf=!1;function GC(){return lf}function VC(){lf=!1}function WC(){return En}function Iv(n){const e=Number(n);Number.isFinite(e)&&(Pv=Math.max(fn.sensMin,Math.min(fn.sensMax,e)))}function eu(){ba=!0}function qC(n){return((n+180)%360+360)%360-180}function Nv(n){if(n.beta==null||n.gamma==null)return;if(ba){Nm=n.beta,Dm=n.gamma,ba=!1,zr=0,Br=0,En.pitch=0,En.roll=0,En.isActive=!0;return}const e=qC(n.beta-Nm),t=n.gamma-Dm,i=(typeof screen<"u"&&screen.orientation?screen.orientation.angle:window.orientation??0)*HC,s=Math.cos(i),r=Math.sin(i);let o=t*s+e*r,a=-t*r+e*s;const l=Math.max(1,fn.maxTiltDeg/Pv),c=m=>{const g=Math.abs(m);if(g<=fn.deadZoneDeg)return 0;const y=Math.min(1,(g-fn.deadZoneDeg)/(l-fn.deadZoneDeg));return Math.sign(m)*y};let u=c(o),d=-c(a);const f=fn.smoothing;Br+=(u-Br)*f,zr+=(d-zr)*f,En.roll=Br,En.pitch=zr,En.isActive=!0,lf=!0}function XC(){hc||(window.addEventListener("deviceorientation",Nv),hc=!0)}function jC(){hc&&(window.removeEventListener("deviceorientation",Nv),hc=!1)}async function $C(){const n=typeof DeviceOrientationEvent<"u"?DeviceOrientationEvent:null;if(n&&typeof n.requestPermission=="function")try{return await n.requestPermission()==="granted"}catch{return!1}return!0}async function Dv(){return dc=!0,ba=!0,En.isActive=!1,await $C()?(XC(),!0):(dc=!1,!1)}function YC(){dc=!1,jC(),En.pitch=0,En.roll=0,En.isActive=!1,zr=0,Br=0}function Ov(){En.pitch=0,En.roll=0,zr=0,Br=0,dc&&(ba=!0)}document.addEventListener("visibilitychange",()=>{document.hidden&&Ov()});window.addEventListener("blur",Ov);let fc=xT();function kv(){return fc}function pc(n){fc=!!n,_T(fc)}let Sa=bT();Iv(tf());function cf(){return Sa}async function KC(n){const e=n==="gyro"?"gyro":"touch";return Sa=e,bm(e),tc(e!=="gyro"),e==="gyro"?await Dv()?!0:(Sa="touch",bm("touch"),tc(!0),!1):(YC(),!0)}function ZC(n){Iv(n)}Sa==="gyro"&&(tc(!1),Dv().then(n=>{n||tc(!0)}));let Uv=!1,Fv=!1,zv=!1;function uf({brake:n=!1,boost:e=!1,oneShot:t=!1}={}){Uv=!!n,Fv=!!e,zv=!!t}function cr(){const n=Tx(),e=Px(),t=WC(),i=e.isActive,s=Sa==="gyro"&&t.isActive;let r,o;return i?(r=e.pitch,o=e.roll):s?(r=t.pitch,o=t.roll):(r=n.pitch,o=n.roll),Vn.pitch=fc?r:-r,Vn.roll=o,Vn.brake=e.brake||n.brake,Vn.boost=e.boost||n.boost,Uv&&(Vn.brake=!1),Fv&&(Vn.boost=!1,Vc()),zv&&Ih(),Vn.isInputActive=n.isActive||e.isActive||s,Cx()?(Vn.activeInputType="touch",Lx()):GC()?(Vn.activeInputType="gyro",VC()):Ax()&&(Vn.activeInputType="keyboard",Ex()),Vn}function Bv(){const n=new ct,e=[],t=.32,i=.22,s=Math.atan2(.28,.95),r=new ut({color:Ye.paper,side:$t,flatShading:!0}),o=new $c({color:Ye.ink,transparent:!0,opacity:.32});for(const a of[-.45,.45]){const l=new ct;l.position.set(a,.045,.05),l.rotation.z=a<0?s:-s;const c=new ar(t,i);c.translate(0,-i/2,0),c.rotateX(-Math.PI/2);const u=new tt(c,r),d=new iv(c);u.add(new K0(d,o)),l.add(u),n.add(l),e.push(u)}return{group:n,flaps:e}}const{group:JC,flaps:Hv}=Bv();fe.add(JC);function QC(n){const e=cr().brake&&N.alive&&N.flightState===Ge.FLYING?1:0,t=1-Math.exp(-n/Jl.deployTau);N.brakeAmount+=(e-N.brakeAmount)*t;const i=-N.brakeAmount*Jl.maxAngle;for(const s of Hv)s.rotation.x=i}function eL(){N.brakeAmount=0;for(const n of Hv)n.rotation.x=0}function tL(n){n.vertexShader=`attribute float instanceAlpha;
varying float vInstanceAlpha;
`+n.vertexShader.replace("void main() {",`void main() {
	vInstanceAlpha = instanceAlpha;`),n.fragmentShader=`varying float vInstanceAlpha;
`+n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
	diffuseColor.a *= vInstanceAlpha;`)}function $d(n,e="instanceAlpha"){return n.onBeforeCompile=tL,n.customProgramCacheKey=()=>e,n}function Yd(n,e,t=1){const i=new Float32Array(e).fill(t);return n.setAttribute("instanceAlpha",new Fd(i,1)),i}const rt=[{id:"TFN",x:510,z:-509,heading:1.885,length:80,width:3},{id:"TFS",x:-61,z:712,heading:-1.396,length:80,width:3},{id:"GMZ",x:-1630,z:752,heading:-1.623,length:60,width:3},{id:"SPC",x:-2967,z:-918,heading:-.611,length:70,width:3},{id:"VDE",x:-3286,z:1364,heading:-2.007,length:55,width:3},{id:"LPA",x:2845,z:1030,heading:-.489,length:90,width:3.5},{id:"FUE",x:6500,z:-417,heading:-.244,length:80,width:3},{id:"ACE",x:7210,z:-1809,heading:-.524,length:80,width:3},{id:"GRAC",x:7455,z:-2588,heading:-1.571,length:40,width:2.5}];for(const n of rt)n.activeHeading=n.heading;function Gv(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const nL=.42,iL=.55;function sL(n,e){for(const t of rt){const i=n.x-t.x,s=n.z-t.z,r=Math.cos(t.heading),o=Math.sin(t.heading),a=i*r-s*o,l=i*o+s*r;if(Math.abs(a)>t.width*.5-nL||Math.abs(l)>t.length*.5-iL)continue;const c=n.y-t.elevation;if(c<-.5||c>$s.rollingHeight)continue;const u=Gv(e-t.activeHeading);if(!(Math.abs(u)>$s.headingTolerance))return t}return null}function rL(n,e=1){for(const t of rt){const i=n.x-t.x,s=n.z-t.z,r=Math.cos(t.heading),o=Math.sin(t.heading),a=i*r-s*o,l=i*o+s*r;if(Math.abs(a)<=t.width*.55+e&&Math.abs(l)<=t.length*.5+e)return t}return null}function oL(n,e,t){for(const i of rt){const s=n.x-i.x,r=n.z-i.z,o=Math.sqrt(s*s+r*r),a=n.y-i.elevation;if(o<e&&a<t&&a>-2)return!0}return!1}const Vv=[],Wv=[],aL=$d(new Gn({color:16771240,transparent:!0,depthWrite:!1})),lL=new Gn({}),cL=new Ca(.15,8,6),qv=new Ae(7227922),uL=new Ae(16770976),dL=.45,mc=.22,hL=new ut({color:14729280,flatShading:!0}),Xv=new Bn(.05,.06,mc,5);Xv.translate(0,mc/2,0);const Om=new Ae,km=new Je,fL=new I,pL=new I,mL=new At,df=[],Um=1,gc=.32,Fm=1.6,zm=1.2,Kd={T:["#####","..#..","..#..","..#..","..#..","..#..","..#.."],F:["#####","#....","#....","####.","#....","#....","#...."],N:["#...#","##..#","#.#.#","#.#.#","#..##","#...#","#...#"],S:[".####","#....","#....",".###.","....#","....#","####."],G:[".###.","#...#","#....","#.###","#...#","#...#",".###."],M:["#...#","##.##","#.#.#","#.#.#","#...#","#...#","#...#"],Z:["#####","....#","...#.","..#..",".#...","#....","#####"],P:["####.","#...#","#...#","####.","#....","#....","#...."],C:[".###.","#...#","#....","#....","#....","#...#",".###."],V:["#...#","#...#","#...#","#...#","#...#",".#.#.","..#.."],D:["####.","#...#","#...#","#...#","#...#","#...#","####."],E:["#####","#....","#....","####.","#....","#....","#####"],L:["#....","#....","#....","#....","#....","#....","#####"],A:[".###.","#...#","#...#","#####","#...#","#...#","#...#"],U:["#...#","#...#","#...#","#...#","#...#","#...#",".###."],R:["####.","#...#","#...#","####.","#.#..","#..#.","#...#"]},gL=new Gn({color:15790320,side:$t});function jv(n){const e=[],t=[];for(const[r,o,a,l]of n){const c=e.length/3,u=a/2,d=l/2;e.push(r-u,.06,o-d,r+u,.06,o-d,r+u,.06,o+d,r-u,.06,o+d),t.push(c,c+1,c+2,c,c+2,c+3)}const s=new vt;return s.setAttribute("position",new et(e,3)),s.setIndex(t),new tt(s,gL)}function vL(n){const t=2.8000000000000003,i=.4*.7,s=[...n.id].filter(r=>Kd[r]).length;return{cell:.4,glyphL:t,gap:i,totalL:s*t+Math.max(0,s-1)*i,center:n.length*.3}}function yL(n){const e=[],i=n.width/2-.09-.1;e.push([-i,0,.18,n.length*.98],[i,0,.18,n.length*.98]);const s=6,r=3,o=n.width*.9/s,a=o*.55;for(const l of[-1,1]){const c=l*(n.length/2-r/2-.8);for(let u=0;u<s;u++)e.push([(u-(s-1)/2)*o,c,a,r])}return jv(e)}function xL(n){const e=[],{cell:t,glyphL:i,gap:s,totalL:r,center:o}=vL(n),a=[...n.id].filter(h=>Kd[h]);let l=o-r/2;for(const h of a){const _=Kd[h];for(let v=0;v<7;v++)for(let b=0;b<5;b++)_[v][b]==="#"&&e.push([(b-2)*t,l+v*t,t*.85,t*.85]);l+=i+s}const c=3,u=3,d=.18,f=n.length*.8,m=r/2+6,g=Math.max(1,Math.floor((f+u)/(c+u)));let p=-(g*c+(g-1)*u)/2+c/2;for(let h=0;h<g;h++)Math.abs(p-o)>m&&e.push([0,p,d,c]),p+=c+u;return jv(e)}const Ei={concrete:new ut({color:li.colors.concrete,flatShading:!0}),glass:new ut({color:li.colors.glass,flatShading:!0}),accent:new ut({color:li.colors.accent,flatShading:!0})};function _L(){const n=li.towerHeight,e=n*.66,t=n*.2,i=new ct,s=(a,l,c)=>{const u=new tt(a,l);u.position.y=c,i.add(u)};s(new en(3,.6,3),Ei.concrete,.3),s(new en(1.5,e,1.5),Ei.concrete,.6+e/2),s(new en(2.4,t,2.4),Ei.glass,.6+e+t/2);const r=.6+e+t;s(new en(2.7,.25,2.7),Ei.concrete,r+.125);const o=new Bn(.05,.05,n*.22,5);for(const a of[-.55,.55]){const l=new tt(o,Ei.accent);l.position.set(a,r+.25+n*.11,0),i.add(l)}return s(new Ca(.32,8,6),Ei.concrete,r+.55),i}function bL(){const n=li.terminal,e=new ct,t=(i,s,r,o,a)=>{const l=new tt(i,s);l.position.set(r,o,a),e.add(l)};return t(new en(n.depth,n.height,n.length),Ei.concrete,0,n.height/2,0),t(new en(.2,n.height*.55,n.length*.88),Ei.glass,-3/2,n.height*.5,0),t(new en(n.depth+.6,.25,n.length+.6),Ei.concrete,0,n.height+.125,0),e}const SL=_L(),ML=bL();function wL(){const n=new ct,e=new ut({color:Ye.runway,flatShading:!0}),t=new Je;for(let i=0;i<rt.length;i++){const s=rt[i],r=new ct,o=new ar(s.width,s.length);o.rotateX(-Math.PI/2),r.add(new tt(o,e)),r.add(yL(s));const a=new ct,l=s.width*.68,c=l*1.05,u=new Vs;u.moveTo(0,c*.55),u.lineTo(-l/2,-c*.45),u.lineTo(0,-c*.05),u.lineTo(l/2,-c*.45),u.closePath();const d=new Kh(u);d.rotateX(-Math.PI/2);const f=Math.max(7,Math.round(s.length/5)),m=new Float32Array(f),g=Yd(d,f,gc),y=new tn(d,aL,f);y.renderOrder=1;for(let w=0;w<f;w++){const V=w/(f-1)-.5;t.makeTranslation(0,.08,V*s.length*.85),y.setMatrixAt(w,t),m[w]=.5-V,g[w]=gc}y.instanceMatrix.needsUpdate=!0,a.add(y),Vv.push({mesh:y,alpha:g,posT:m,count:f});const h=Math.max(2,Math.floor(s.length/4.5)),_=h*2,v=new Float32Array(_),b=new Float32Array(_*3),R=new tn(cL,lL,_),E=new tn(Xv,hL,_);let A=0;for(let w=0;w<h;w++){const V=w/(h-1)-.5,W=V*s.length*.97,oe=.5-V;for(const k of[-1,1]){const q=k*s.width*.6;t.makeTranslation(q,mc,W),R.setMatrixAt(A,t),R.setColorAt(A,qv),t.makeTranslation(q,0,W),E.setMatrixAt(A,t),v[A]=oe,b[A*3]=q,b[A*3+1]=mc,b[A*3+2]=W,A++}}R.instanceMatrix.needsUpdate=!0,R.instanceColor.needsUpdate=!0,E.instanceMatrix.needsUpdate=!0,a.add(R),a.add(E),Wv.push({mesh:R,posT:v,base:b,count:_}),a.add(xL(s)),r.add(a),df[i]=a;const U=SL.clone();U.scale.setScalar(li.towerScale),U.position.set(li.towerSide,0,li.towerAlong*s.length*.5),r.add(U);const M=ML.clone();M.position.set(li.terminal.side,0,li.terminal.along*s.length*.5),r.add(M),r.position.set(s.x,s.elevation+.04,s.z),r.rotation.y=s.heading,n.add(r)}return n}function EL(n){const e=n%Fm/Fm;for(const i of Vv){const{alpha:s,posT:r,count:o}=i;for(let a=0;a<o;a++){const l=(e-r[a]+1)%1;s[a]=l<.16?Um-(Um-gc)*(l/.16):gc}i.mesh.geometry.attributes.instanceAlpha.needsUpdate=!0}const t=n%zm/zm;for(const i of Wv){const{mesh:s,posT:r,base:o,count:a}=i;for(let l=0;l<a;l++){const c=(t-r[l]+1)%1,u=c<.22?1-c/.22:0;Om.copy(qv).lerp(uL,u),s.setColorAt(l,Om);const d=1+u*dL;km.compose(fL.set(o[l*3],o[l*3+1],o[l*3+2]),mL,pL.set(d,d,d)),s.setMatrixAt(l,km)}s.instanceColor.needsUpdate=!0,s.instanceMatrix.needsUpdate=!0}}function AL(n){const e=rt.indexOf(n);return df[e]??null}function $v(n){for(let e=0;e<rt.length;e++){const t=rt[e];if(t===n)continue;const i=Math.random()<.5;t.activeHeading=i?Gv(t.heading+Math.PI):t.heading;const s=df[e];s&&(s.rotation.y=i?Math.PI:0)}}function Yv(){const n=new ct,e=new ut({color:Ye.ink,flatShading:!0});function t(i,s,r,o){const a=new ct,l=new Bn(.018,.018,r,6);l.translate(0,-r/2,0),a.add(new tt(l,e));const c=new Bn(o,o,.04,12);return c.rotateZ(Math.PI/2),c.translate(0,-r,0),a.add(new tt(c,e)),a.position.set(i,-.05,s),a}return n.add(t(0,-.55,.11,.055)),n.add(t(-.42,.12,.12,.06)),n.add(t(.42,.12,.12,.06)),n}const er=Yv();er.scale.setScalar(.001);er.visible=!1;fe.add(er);function TL(n){const e=oL(fe.position,Dl.triggerDist,Dl.triggerHeight)?1:0,t=1-Math.exp(-n/Dl.deployTau);N.gearAmount+=(e-N.gearAmount)*t;const i=Math.max(.001,N.gearAmount);er.scale.setScalar(i),er.visible=N.gearAmount>.02}function RL(){N.gearAmount=1,er.scale.setScalar(1),er.visible=!0}const Bm=new Ae;let qo=0;function Kv(){const n=new ct,e=[],t=mt.exhaust;for(const i of[-.36,t.offsetX]){const s=new Bn(t.radiusNarrow,t.radiusWide,1,12,1,!0);s.rotateX(-Math.PI/2),s.translate(0,0,.5);const r=new Gn({color:16777215,transparent:!0,opacity:0,blending:ic,depthWrite:!1,side:$t}),o=new tt(s,r);o.position.set(i,t.offsetY,t.offsetZ),o.scale.z=0,n.add(o),e.push(o)}return{group:n,streams:e}}const{group:CL,streams:Zv}=Kv();fe.add(CL);function LL(){return N.oneShotActive?(mt.oneShot.tiers[Ys()]||mt.oneShot.tiers[0]).color:N.greyActive?mt.grey.color:null}function PL(n){const e=mt.exhaust,t=N.oneShotActive||N.greyActive?1:0,i=1-Math.exp(-n/Math.max(e.intensityTau,1e-4));qo+=(t-qo)*i;const s=LL();s!==null&&Bm.setHex(s);for(const r of Zv)r.scale.z=e.length*qo,r.material.opacity=.85*qo,s!==null&&r.material.color.copy(Bm)}function IL(){qo=0;for(const n of Zv)n.scale.z=0,n.material.opacity=0}let os=null,Nr=null,Zr=null,It=null,Hm=null,sa=null,Zd=null,Os=null,ra=null,Jd=null,id=0,xl=0,_l=0,Gi=0;const Gm=new Ae;let Jr=0,Qd=0,zl=!1,Ms=null,vc=0,yc=0,Oo=null,eh=null;const NL=.35;function DL(){if(os)return!0;const n=document.getElementById("hangar-3d");if(!n)return!1;os=new qh({canvas:n,antialias:!0,alpha:!0}),os.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Nr=new $0;const e=new Vd(16774368,.85);e.position.set(2.5,3,2),Nr.add(e);const t=new Vd(13229290,.45);t.position.set(-2,1.5,-2),Nr.add(t),Nr.add(new sT(16777215,.35)),Zr=new wn(28,1,.05,50),Zr.position.set(0,.25,3.6),Zr.lookAt(0,0,0),It=mv(),It.scale.setScalar(1.5),It.rotation.x=-.18,It.rotation.y=.55,Nr.add(It);const i=Bv();sa=i.group,sa.visible=!1,It.add(sa),Zd=i.flaps,Os=Yv(),Os.scale.setScalar(.001),Os.visible=!1,It.add(Os);const s=Kv();return ra=s.group,ra.visible=!1,It.add(ra),Jd=s.streams,Qv(),OL(n),Hm=new ResizeObserver(Vm),Hm.observe(n),Vm(),!0}function Vm(){if(!os)return;const e=os.domElement.getBoundingClientRect(),t=Math.max(1,Math.round(e.width)),i=Math.max(1,Math.round(e.height));os.setSize(t,i,!1),Zr.aspect=t/i,Zr.updateProjectionMatrix()}function OL(n){n.addEventListener("pointerdown",t=>{zl=!0,Ms={px:t.clientX,py:t.clientY,rotX:It.rotation.x,rotY:It.rotation.y},Oo={ts:performance.now(),px:t.clientX,py:t.clientY},vc=0,yc=0,n.setPointerCapture(t.pointerId),n.style.cursor="grabbing"}),n.addEventListener("pointermove",t=>{if(!zl||!Ms)return;const i=t.clientX-Ms.px,s=t.clientY-Ms.py;It.rotation.y=Ms.rotY+i*.0085,It.rotation.x=Oi.clamp(Ms.rotX+s*.0085,-1.2,1.2);const r=performance.now(),o=Math.max(.001,(r-Oo.ts)/1e3);yc=(t.clientX-Oo.px)*.0085/o,vc=(t.clientY-Oo.py)*.0085/o,Oo={ts:r,px:t.clientX,py:t.clientY}});const e=()=>{zl=!1,Ms=null,n.style.cursor="grab"};n.addEventListener("pointerup",e),n.addEventListener("pointercancel",e),n.addEventListener("pointerleave",e),n.style.cursor="grab",n.style.touchAction="none"}function Jv(n){if(!os||!It)return;const e=Math.min(.05,(n-Qd)/1e3||0);Qd=n,zl||(vc*=.92,yc*=.92,It.rotation.y+=(yc+NL)*e,It.rotation.x=Oi.clamp(It.rotation.x+vc*e-It.rotation.x*.35*e,-1.2,1.2)),kL(e),os.render(Nr,Zr),Jr=requestAnimationFrame(Jv)}function kL(n){Gi=(Gi+n)%Eo.cyclePeriod;const e=1-Math.exp(-n/Math.max(Eo.smoothTau,1e-4));if(Os){const t=J.testMode||(J.upgrades?.takeoffSpeed|0)>0,[i,s]=Eo.gearWindow,o=t&&Gi>=i&&Gi<=s?1:0,a=1-Math.exp(-n/Math.max(Dl.deployTau,1e-4));_l+=(o-_l)*a;const l=Math.max(.001,_l);Os.scale.setScalar(l),Os.visible=t&&_l>.02}if(Zd&&sa){const t=Gc();sa.visible=t;const[i,s]=Eo.brakeWindow,o=t&&Gi>=i&&Gi<=s?1:0;id+=(o-id)*e;const a=-id*Jl.maxAngle;for(const l of Zd)l.rotation.x=a}if(Jd&&ra){const t=Ys(),i=mt.oneShot.tiers[t]||mt.oneShot.tiers[0];ra.visible=t>0;const[s,r]=Eo.boostWindow,a=t>0&&Gi>=s&&Gi<=r?1:0;xl+=(a-xl)*e,Gm.setHex(i.color||16777215);const l=mt.exhaust;for(const c of Jd)c.scale.z=l.length*xl,c.material.opacity=.85*xl,c.material.color.copy(Gm)}}function Qv(){if(!It)return;const n=eh?So(eh):gv();yv(It,n)}function UL(n){eh=n,Qv()}function FL(){DL()&&(Jr||(Qd=performance.now(),Jr=requestAnimationFrame(Jv)))}function ey(){Jr&&(cancelAnimationFrame(Jr),Jr=0)}IT(()=>{zn==="shop"&&ur()});const tu={hangar:document.getElementById("hangar-overlay"),shop:document.getElementById("shop-overlay"),settings:document.getElementById("settings-overlay")},Wm=document.getElementById("garage-punkte"),qm=document.getElementById("garage-highscore"),Xm=document.getElementById("garage-obsidian"),jm=document.getElementById("garage-gofios"),Hr=document.getElementById("garage-upgrades"),sd=document.getElementById("garage-upgrade-info"),$m=document.getElementById("shop-obsidian"),Ym=document.getElementById("hangar-skin-name"),zL=document.getElementById("hangar-skin-price"),BL=document.getElementById("hangar-skin-dots"),Bl=document.getElementById("hangar-skin-action"),HL=document.getElementById("hangar-skin-prev"),GL=document.getElementById("hangar-skin-next"),th=document.getElementById("hangar-skin-getdiamonds"),Dr=document.getElementById("shop-packs"),nh=document.getElementById("shop-restore"),rd=document.getElementById("shop-extras"),Hl=document.getElementById("shop-watch-ad"),Km=document.getElementById("shop-watch-ad-sub"),Zm=document.getElementById("shop-watch-ad-reward"),Gl=document.getElementById("shop-remove-ads"),Jm=document.getElementById("shop-remove-ads-sub");let ci=0,jn=null;const xc="__booster__";let hn=null;const Ki=document.getElementById("obsidian-confirm"),Qm=document.getElementById("obsidian-confirm-text"),VL=document.getElementById("obsidian-confirm-cancel"),WL=document.getElementById("obsidian-confirm-ok"),ho=document.getElementById("settings-segments"),fo=document.getElementById("settings-samples"),qL=document.getElementById("settings-apply"),XL=document.getElementById("settings-cancel"),jL=document.getElementById("settings-reset-save"),$L=document.getElementById("settings-langs"),Ri=document.getElementById("settings-invert-toggle");Ri&&Ri.addEventListener("change",()=>pc(Ri.checked));const eg=document.getElementById("settings-gyro-block"),oa=document.getElementById("settings-gyro-toggle"),_c=document.getElementById("settings-gyro-tune"),po=document.getElementById("settings-gyro-sens"),YL=document.getElementById("settings-gyro-sens-open"),Zn=document.getElementById("settings-gyro-advanced"),KL=document.getElementById("settings-gyro-recalibrate"),mo=document.getElementById("settings-quality-slider"),bc=document.getElementById("settings-quality-ticks"),Gr=document.getElementById("settings-quality-readout"),ZL=document.getElementById("settings-advanced-open"),Jn=document.getElementById("settings-advanced"),Ma=pT(),hi=document.getElementById("reset-confirm"),JL=document.getElementById("reset-confirm-cancel"),QL=document.getElementById("reset-confirm-ok");let zn=null,ds=null,hf=null;function e2(n){return Ee(`booster.names.${n}`)}function pn(n){return Math.round(n).toLocaleString(Tv())}function go(n,e={}){Xo();const t=tu[n];t&&(n==="hangar"&&(d2(),hs()),n==="shop"&&ur(),n==="settings"&&_2(),t.classList.add("visible"),t.setAttribute("aria-hidden","false"),zn=n,ds=typeof e.onClose=="function"?e.onClose:null,n==="hangar"&&FL())}function Xo(){if(!zn)return;zn==="hangar"&&ey();const n=tu[zn];n&&(n.classList.remove("visible"),n.setAttribute("aria-hidden","true")),zn=null;const e=ds;ds=null,e&&e()}function t2(){zn==="hangar"&&ey();for(const n of Object.values(tu))n&&(n.classList.remove("visible"),n.setAttribute("aria-hidden","true"));zn=null,ds=null}function hs(){i2(),n2(),ny(),iy(),ih()}function n2(){if(hn===xc||hn&&es[hn])return;const n=Object.keys(es);for(const e of n){const t=J.upgrades[e]|0,i=es[e].levels.length-1;if(t<i){hn=e;return}}hn=n[0]||null}function ty(){const n=Ys(),e=mt.oneShot.tiers[n]||mt.oneShot.tiers[0],t="#"+(e.color|0).toString(16).padStart(6,"0"),i=Lh(),s=Qo.length-1;if(n>=s)return{tier:n,tierCfg:e,colorHex:t,pct:100,rightLabel:Ee("hangar.max"),gofios:i};const r=Qo[n]|0,o=Qo[n+1]|0,a=Math.max(1,o-r),l=Math.max(0,Math.min(100,(i-r)/a*100));return{tier:n,tierCfg:e,colorHex:t,pct:l,rightLabel:`${i} / ${o} <span class="material-symbols-outlined inline-icon">where_to_vote</span>`,gofios:i}}function i2(){if(Wm&&(Wm.textContent=pn(J.punkte)),qm&&(qm.textContent=pn(J.bestFlightPunkte|0)),Xm&&(Xm.textContent=pn(J.obsidian|0)),jm){const n=J.gofiosByIsland[J.currentIsland]|0;jm.textContent=pn(n)}}const s2={drag:"air",maxSpeed:"speed",speedFromPitch:"trending_down",stallSpeed:"paragliding",takeoffSpeed:"flight_takeoff",brake:"back_hand",greyBoost:"bolt"};function tg(n,e,t){let i="";for(let s=0;s<e;s++){const r=s<n,o=r&&t?` style="background:${t};border-color:${t}"`:"";i+=`<span class="upg-pip${r?" is-on":""}"${o}></span>`}return i}function ny(){if(!Hr)return;Hr.innerHTML="";const n='<span class="material-symbols-outlined upg-buy-icon">stars</span>',e='<span class="material-symbols-outlined upg-buy-icon">diamond</span>';for(const[r,o]of Object.entries(es)){const a=J.upgrades[r]|0,l=o.levels.length-1,c=a>=l,u=c?0:o.costs[a+1],d=c?0:sy(r),f=r===hn;let m,g,y;J.punkte>=u?(m=`${pn(u)} ${n}`,g=Ee("hangar.buy",{cost:pn(u)}),y="punkte"):(J.obsidian|0)>=d?(m=`${d} ${e}`,g=Ee("hangar.buyObsidian",{cost:d}),y="obsidian"):(m=`${d} ${e}`,g=Ee("hangar.getDiamonds"),y="shop");const p=J.testMode&&a>0?`<button class="upg-sell" type="button" data-sell="${r}"
                aria-label="${Ee("a11y.sell",{cost:pn(o.costs[a])})}">−</button>`:"",h=c?`<span class="upg-max">${Ee("hangar.max")}</span>`:`<button class="upg-buy${y==="punkte"?"":" pay-obsidian"}" type="button"
                data-buy="${r}" data-pay="${y}" aria-label="${g}">${m}</button>`,_=document.createElement("div");_.className=`upg-card${c?" is-maxed":""}${f?" is-selected":""}`,_.dataset.select=r,_.innerHTML=`
      <div class="upg-card-head">
        <span class="upg-card-icon material-symbols-outlined">${s2[r]||"tune"}</span>
        <span class="upg-card-label">${Ee(`upgrades.${r}.label`)}</span>
        ${p}
      </div>
      <div class="upg-card-foot">
        <div class="upg-pips">${tg(a,l,null)}</div>
        ${h}
      </div>
    `,Hr.appendChild(_)}const t=ty(),i=hn===xc,s=document.createElement("div");s.className=`upg-card upg-card-booster${i?" is-selected":""}`,s.dataset.select=xc,s.innerHTML=`
    <div class="upg-card-head">
      <span class="upg-card-icon material-symbols-outlined">rocket_launch</span>
      <span class="upg-card-label">${Ee("hangar.booster")}</span>
    </div>
    <div class="upg-card-foot">
      <div class="upg-pips">${tg(t.tier,4,t.colorHex)}</div>
      <span class="upg-gofios">${t.rightLabel}</span>
    </div>
  `,Hr.appendChild(s)}function iy(){if(!sd)return;const n=sd.querySelector(".upgrade-info-title"),e=sd.querySelector(".upgrade-info-desc");if(hn===xc){const o=ty();n&&(n.textContent=Ee("hangar.boosterTitle",{name:e2(o.tier)})),e&&(e.textContent=Ee("hangar.boosterDesc"));return}const t=hn&&es[hn];if(!t){n&&(n.textContent=""),e&&(e.textContent=Ee("hangar.selectUpgrade"));return}const i=J.upgrades[hn]|0,s=t.levels.length-1,r=i>=s;if(n){const o=r?Ee("hangar.max"):Ee("hangar.level",{level:i,max:s});n.textContent=`${Ee(`upgrades.${hn}.label`)} · ${o}`}e&&(e.textContent=Ee(`upgrades.${hn}.desc`))}function r2(n){if(!J.testMode)return;const e=es[n];if(!e)return;const t=J.upgrades[n]|0;if(t<=0)return;const i=e.costs[t];J.upgrades[n]=t-1,J.punkte+=i,xo(),Ut(),hs()}function o2(n){const e=es[n],t=J.upgrades[n]|0,i=e.costs[t+1];J.punkte<i||(J.punkte-=i,J.upgrades[n]=t+1,xo(),Ut(),hs())}function sy(n){const e=Zl.obsidianUpgradeCosts,t=J.obsidianUpgradeCount?.[n]|0;return e[Math.min(t,e.length-1)]}function a2(n){const e=J.upgrades[n]|0,t=sy(n);(J.obsidian|0)<t||(J.obsidian=(J.obsidian|0)-t,J.upgrades[n]=e+1,J.obsidianUpgradeCount[n]=(J.obsidianUpgradeCount?.[n]|0)+1,xo(),Ut(),hs())}function l2({textHtml:n,onConfirm:e}){hf={onConfirm:e},Qm&&(Qm.innerHTML=n),Ki.classList.add("visible"),Ki.setAttribute("aria-hidden","false")}function Vl(){Ki.classList.remove("visible"),Ki.setAttribute("aria-hidden","true"),hf=null}function c2(){const n=hf?.onConfirm;Vl(),n&&n()}function u2(n){const e=So(n),t=`<strong>${e.costObsidian} <span class="material-symbols-outlined inline-icon">diamond</span></strong>`,i=`<strong>${Ee(e.nameKey)}</strong>`;l2({textHtml:Ee("obsidian.spendSkin",{obsidian:t,label:i}),onConfirm:()=>f2(n)})}function d2(){const n=nf().findIndex(e=>e.id===J.equippedSkin);ci=n>=0?n:0}function h2(n){const e=So(n);e.costPunkte==null||J.punkte<e.costPunkte||(J.punkte-=e.costPunkte,Jc(n),sf(n),hs())}function f2(n){const e=So(n);e.costObsidian==null||(J.obsidian|0)<e.costObsidian||(J.obsidian=(J.obsidian|0)-e.costObsidian,Jc(n),sf(n),hs())}function ng(){const n=ds;ds=null,go("shop",{onClose:()=>go("hangar",{onClose:n})})}function p2(){const n=ds;ds=null,go("hangar",{onClose:()=>go("shop",{onClose:n})})}function ih(){if(!Ym)return;const n=nf();(ci<0||ci>=n.length)&&(ci=0);const e=n[ci];Ym.textContent=Ee(e.nameKey),zL.textContent=Ee(e.descKey),BL.innerHTML=n.map((l,c)=>`<span class="skin-dot${c===ci?" is-active":""}"></span>`).join(""),UL(e.teaser?J.equippedSkin:e.id);const t='<span class="material-symbols-outlined skin-action-icon">diamond</span>',i='<span class="material-symbols-outlined skin-action-icon">stars</span>';let s,r=!1,o=!1,a=!1;if(jn=null,e.teaser)s=Ee("hangar.comingSoon"),r=!0,o=!0;else if(vv(e.id))J.equippedSkin===e.id?(s=Ee("hangar.equipped"),r=!0,o=!0):(s=Ee("hangar.equip"),jn={kind:"equip",id:e.id});else{const l=e.costPunkte!=null,c=e.costObsidian!=null,u=l&&J.punkte>=e.costPunkte,d=c&&(J.obsidian|0)>=e.costObsidian;u?(s=`${Ee("hangar.buy",{cost:pn(e.costPunkte)})} ${i}`,jn={kind:"buyPunkte",id:e.id}):d?(s=`${Ee("hangar.buyObsidian",{cost:e.costObsidian})} ${t}`,jn={kind:"buyObsidian",id:e.id}):l?(s=`${Ee("hangar.buy",{cost:pn(e.costPunkte)})} ${i}`,r=!0,a=c):(s=`${Ee("hangar.buyObsidian",{cost:e.costObsidian})} ${t}`,r=!0,a=!0)}Bl.innerHTML=s,Bl.disabled=r,Bl.classList.toggle("is-quiet",o),th&&(th.hidden=!a)}function ur(){$m&&($m.textContent=pn(J.obsidian|0)),m2();const n=Js.isAvailable();if(nh&&(nh.hidden=!n),!!Dr){if(!n){Dr.innerHTML="",Dr.hidden=!0;return}Dr.hidden=!1,Dr.innerHTML=Rh.map(e=>{const t=Math.floor(e.diamonds*(1+e.bonusPct/100)),i=Js.localizedPrice(e.productId),s=e.badgeKey?`<span class="pack-badge">${Ee(e.badgeKey)}</span>`:"",r=e.bonusPct>0?`<span class="pack-bonus">${Ee("shop.bonus",{pct:e.bonusPct})}</span>`:"";return`
      <button class="pack-card" type="button" data-pack="${e.id}">
        ${s}
        <span class="pack-amount">
          <span class="material-symbols-outlined pack-icon">diamond</span>${pn(t)}
        </span>
        ${r}
        <span class="pack-price">${i}</span>
      </button>`}).join("")}}function m2(){if(!rd)return;if(!Qs.isAvailable()){rd.hidden=!0;return}rd.hidden=!1;const n=Qs.rewardedRemaining();Zm&&(Zm.innerHTML=`+${An.rewardedDiamonds} <span class="material-symbols-outlined">diamond</span>`),Km&&(Km.textContent=n>0?Ee("shop.adsLeftToday",{count:n,cap:An.rewardedDailyCap}):Ee("shop.adsCapReached")),Hl&&(Hl.disabled=n<=0,Hl.classList.toggle("is-disabled",n<=0));const e=!!J.adsRemoveOwned;Jm&&(Jm.textContent=e?Ee("shop.removeAdsOwned"):Js.removeAdsPrice()),Gl&&(Gl.disabled=e,Gl.classList.toggle("is-owned",e))}async function g2(){const n=await Qs.watchRewarded();ur();const e=document.getElementById("shop-msg");if(e){if(n?.success)e.textContent=Ee("shop.granted",{amount:pn(n.diamonds)});else if(n?.capped)e.textContent=Ee("shop.adsCapReached");else return;e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),2400)}}async function v2(){(await Js.purchaseRemoveAds())?.success&&ur()}async function y2(n){const e=await Js.purchasePack(n);if(e?.success){ur();const t=document.getElementById("shop-msg");t&&(t.textContent=Ee("shop.granted",{amount:pn(e.diamonds)}),t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2400))}}async function x2(){await Js.restore(),ur();const n=document.getElementById("shop-msg");n&&(n.textContent=Ee("shop.restored"),n.classList.add("show"),setTimeout(()=>n.classList.remove("show"),2400))}let Yt=null;function _2(){Yt=mn(),ho&&(ho.value=Yt.segments),fo&&(fo.value=Yt.samples),E2(),Gr&&(Gr.innerHTML='<span class="settings-ro-item"><span class="material-symbols-outlined">grid_on</span><b data-ro="seg">0</b></span><span class="settings-ro-item"><span class="material-symbols-outlined">forest</span><b data-ro="samples">0</b></span>'),ff(!1),ry(),Ri&&(Ri.checked=kv()),b2()}function b2(){if(!eg)return;const n=nr();if(eg.hidden=!n,!n)return;const e=cf()==="gyro";oa&&(oa.checked=e),po&&(po.value=String(tf())),_c&&(_c.hidden=!e)}function ry(){Lv($L,{flagsOnly:!0,onPick:n=>{Rv(n),Yt&&(Yt.language=n)}})}function S2(n){return n.charAt(0).toUpperCase()+n.slice(1)}function M2(n){return Ma.findIndex(e=>e.segments===n.segments&&e.samples===n.samples)}function w2(n){let e=0,t=1/0;return Ma.forEach((i,s)=>{const r=Math.abs(i.segments-n.segments);r<t&&(t=r,e=s)}),e}function E2(){mo&&(mo.max=String(Ma.length-1)),bc&&(bc.innerHTML=Ma.map(n=>`<span class="settings-tick">${Ee("settings.preset"+S2(n.name))}</span>`).join(""))}function ff(n){if(!Yt)return;const e=M2(Yt),t=e>=0?e:w2(Yt);mo&&(mo.value=String(t)),bc&&[...bc.children].forEach((i,s)=>i.classList.toggle("active",e>=0&&s===t)),Gr&&(ig(Gr.querySelector('[data-ro="seg"]'),Yt.segments,n),ig(Gr.querySelector('[data-ro="samples"]'),Yt.samples,n),Gr.classList.toggle("is-custom",e<0))}function A2(n){const e=Ma[n];e&&(Yt={...Yt,segments:e.segments,samples:e.samples},ho&&(ho.value=e.segments),fo&&(fo.value=e.samples),ff(!0))}function ig(n,e,t){if(!n)return;n._roRaf&&cancelAnimationFrame(n._roRaf);const i=t?parseFloat(n.dataset.cur)||0:e;if(!t||i===e){n.dataset.cur=String(e),n.textContent=pn(e),n._roRaf=0;return}const s=performance.now(),r=320,o=a=>{const l=Math.min(1,(a-s)/r),c=1-Math.pow(1-l,3),u=i+(e-i)*c;n.dataset.cur=l<1?String(u):String(e),n.textContent=pn(Math.round(u)),n._roRaf=l<1?requestAnimationFrame(o):0};n._roRaf=requestAnimationFrame(o)}function sh(){if(!Yt)return;const n=parseInt(ho?.value,10),e=parseInt(fo?.value,10);Number.isFinite(n)&&(Yt.segments=n),Number.isFinite(e)&&(Yt.samples=e),ff(!1)}function T2(){Jn&&(Jn.classList.add("visible"),Jn.setAttribute("aria-hidden","false"))}function od(){Jn&&(Jn.classList.remove("visible"),Jn.setAttribute("aria-hidden","true"))}function R2(){Zn&&(po&&(po.value=String(tf())),Zn.classList.add("visible"),Zn.setAttribute("aria-hidden","false"))}function ad(){Zn&&(Zn.classList.remove("visible"),Zn.setAttribute("aria-hidden","true"))}function C2(){if(sh(),!Yt)return;lr(Yt);const n=new URL(window.location.href);n.searchParams.delete("segments"),n.searchParams.delete("samples"),window.location.href=n.toString()}function L2(){hi&&(hi.classList.add("visible"),hi.setAttribute("aria-hidden","false"))}function ld(){hi&&(hi.classList.remove("visible"),hi.setAttribute("aria-hidden","true"))}function P2(){Sx();const n=new URL(window.location.href);n.searchParams.delete("segments"),n.searchParams.delete("samples"),window.location.href=n.toString()}(function(){document.querySelectorAll(".modal-close[data-modal-close]").forEach(t=>{const i=t.dataset.modalClose;(i==="hangar"||i==="shop"||i==="settings")&&t.addEventListener("click",Xo)});for(const t of Object.values(tu))t&&t.addEventListener("click",i=>{i.target===t&&Xo()});Hr&&Hr.addEventListener("click",t=>{const i=t.target.closest("[data-sell]");if(i&&!i.disabled){r2(i.dataset.sell);return}const s=t.target.closest("[data-buy]");if(s){if(s.disabled)return;const o=s.dataset.buy,a=s.dataset.pay;hn=o,a==="punkte"?o2(o):a==="obsidian"?a2(o):a==="shop"&&ng();return}const r=t.target.closest("[data-select]");r&&(hn=r.dataset.select,ny(),iy())}),Ki&&(Ki.addEventListener("click",t=>{t.target===Ki&&Vl()}),VL?.addEventListener("click",Vl),WL?.addEventListener("click",c2));const e=nf().length;HL?.addEventListener("click",()=>{ci=(ci-1+e)%e,ih()}),GL?.addEventListener("click",()=>{ci=(ci+1)%e,ih()}),Bl?.addEventListener("click",()=>{jn&&(jn.kind==="equip"?(sf(jn.id),hs()):jn.kind==="buyPunkte"?h2(jn.id):jn.kind==="buyObsidian"&&u2(jn.id))}),th?.addEventListener("click",ng),Dr?.addEventListener("click",t=>{const i=t.target.closest("[data-pack]");i&&y2(i.dataset.pack)}),nh?.addEventListener("click",x2),Hl?.addEventListener("click",g2),Gl?.addEventListener("click",v2),document.getElementById("shop-view-skins")?.addEventListener("click",p2),hi&&(hi.addEventListener("click",t=>{t.target===hi&&ld()}),JL?.addEventListener("click",ld),QL?.addEventListener("click",P2)),document.addEventListener("keydown",t=>{t.key==="Escape"&&(hi?.classList.contains("visible")?(ld(),t.stopImmediatePropagation()):Ki?.classList.contains("visible")?(Vl(),t.stopImmediatePropagation()):Jn?.classList.contains("visible")?(od(),t.stopImmediatePropagation()):Zn?.classList.contains("visible")?(ad(),t.stopImmediatePropagation()):zn&&(Xo(),t.stopImmediatePropagation()))}),mo?.addEventListener("input",()=>A2(parseInt(mo.value,10))),ZL?.addEventListener("click",T2),Jn&&(Jn.addEventListener("click",t=>{t.target===Jn&&od()}),Jn.querySelector("[data-settings-advanced-close]")?.addEventListener("click",od)),ho?.addEventListener("input",sh),fo?.addEventListener("input",sh),oa?.addEventListener("change",async()=>{const t=oa.checked,i=await KC(t?"gyro":"touch"),s=t&&i;oa.checked=s,_c&&(_c.hidden=!s),t&&i?(pc(!1),Ri&&(Ri.checked=!1)):t||(pc(!0),Ri&&(Ri.checked=!0))}),po?.addEventListener("input",()=>{const t=parseFloat(po.value);ZC(t),ST(t)}),KL?.addEventListener("click",eu),YL?.addEventListener("click",R2),Zn&&(Zn.addEventListener("click",t=>{t.target===Zn&&ad()}),Zn.querySelector("[data-settings-gyro-advanced-close]")?.addEventListener("click",ad)),XL?.addEventListener("click",Xo),qL?.addEventListener("click",C2),jL?.addEventListener("click",L2),Qc(()=>{zn==="hangar"&&hs(),zn==="shop"&&ur(),zn==="settings"&&ry()})})();function I2(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}const Lt={TREE:10,SHRUB:20,GRASS:30,CROP:40,URBAN:50,BARE:60,SNOW:70,WATER:80,WETLAND:90};let $n=null,oy=[];async function N2(n="/teide-game/landcover/canaries.png"){const e=new Image;e.src=n,await e.decode();const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0);const s=i.getImageData(0,0,e.width,e.height).data,r=new Uint8Array(e.width*e.height);for(let o=0,a=0;a<r.length;o+=4,a++)r[a]=s[o];$n={data:r,w:e.width,h:e.height},oy=k2()}function D2(n,e){const{center:t,metersPerUnit:i}=Pe.heightmap,s=n*i,r=-e*i,o=t.lat+r/111320,a=t.lon+s/(111320*Math.cos(t.lat*Math.PI/180));return{lat:o,lon:a}}function O2(n,e){const{bbox:t,center:i,metersPerUnit:s}=Pe.heightmap,r=t.lonW+n/($n.w-1)*(t.lonE-t.lonW),o=t.latN-e/($n.h-1)*(t.latN-t.latS),a=(r-i.lon)*111320*Math.cos(i.lat*Math.PI/180),l=(o-i.lat)*111320;return{x:a/s,z:-l/s}}function ay(n,e){if(!$n)return Lt.WATER;const{lat:t,lon:i}=D2(n,e),{bbox:s}=Pe.heightmap,r=(i-s.lonW)/(s.lonE-s.lonW)*($n.w-1),o=(s.latN-t)/(s.latN-s.latS)*($n.h-1);if(r<0||o<0||r>$n.w-1||o>$n.h-1)return Lt.WATER;const a=Math.round(r),l=Math.round(o);return $n.data[l*$n.w+a]}function k2(){const{data:n,w:e,h:t}=$n,{minClusterPixels:i}=Et.urban,s=new Uint8Array(n.length),r=[],o=[],a=[0,0,0,0];function l(u){const d=u%e,f=u/e|0;let m=0;return d>0&&(a[m++]=u-1),d<e-1&&(a[m++]=u+1),f>0&&(a[m++]=u-e),f<t-1&&(a[m++]=u+e),m}for(let u=0;u<n.length;u++){if(s[u]||n[u]!==Lt.URBAN)continue;const d=[],f=[u];s[u]=1;let m=0;for(;m<f.length;){const g=f[m++];d.push(g);const y=l(g);for(let p=0;p<y;p++){const h=a[p];!s[h]&&n[h]===Lt.URBAN&&(s[h]=1,f.push(h))}}d.length<i?o.push(...d):r.push(d)}for(const u of o){const d=l(u),f=new Map;for(let y=0;y<d;y++){const p=n[a[y]];p!==Lt.URBAN&&p!==Lt.WATER&&f.set(p,(f.get(p)||0)+1)}let m=Lt.GRASS,g=0;for(const[y,p]of f)p>g&&(m=y,g=p);n[u]=m}const c=r.map(u=>{let d=0,f=0;const m=[];for(const g of u){const y=g%e,p=g/e|0,{x:h,z:_}=O2(y,p);m.push({x:h,z:_}),d+=h,f+=_}return{pixelCount:u.length,centerX:d/u.length,centerZ:f/u.length,pixels:m}});return c.sort((u,d)=>d.pixelCount-u.pixelCount),console.log(`landcover: ${c.length} urban clusters surviving (${o.length} tiny urban pixels reclassified)`),c}function U2(){return oy}let Nn=null;function F2(){return Nn}let Ls=null,jo=0;async function z2(n=Pe.heightmap.url){const e=new Image;e.src=n,await e.decode();const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0),Nn={data:i.getImageData(0,0,e.width,e.height).data,w:e.width,h:e.height}}function B2(n,e){const{center:t,metersPerUnit:i}=Pe.heightmap,s=n*i,r=-e*i,o=t.lat+r/111320,a=t.lon+s/(111320*Math.cos(t.lat*Math.PI/180));return{lat:o,lon:a}}function H2(n,e){if(!Nn)return 0;const{bbox:t,elevRange:i}=Pe.heightmap,s=(e-t.lonW)/(t.lonE-t.lonW)*(Nn.w-1),r=(t.latN-n)/(t.latN-t.latS)*(Nn.h-1);if(s<0||r<0||s>Nn.w-1||r>Nn.h-1)return 0;const o=Math.floor(s),a=Math.floor(r),l=Math.min(o+1,Nn.w-1),c=Math.min(a+1,Nn.h-1),u=s-o,d=r-a,f=i[1]-i[0],m=(g,y)=>{const p=(y*Nn.w+g)*4,h=Nn.data[p]<<8|Nn.data[p+1];return i[0]+h/65535*f};return(1-u)*(1-d)*m(o,a)+u*(1-d)*m(l,a)+(1-u)*d*m(o,c)+u*d*m(l,c)}function Tn(n,e){const{lat:t,lon:i}=B2(n,e);return H2(t,i)/Pe.heightmap.metersPerUnit*Pe.heightmap.elevationExaggeration}function G2(n,e,t){const i=s0;if(t<Pe.waterLevel+i.waterGuard)return t;const s=i.slopeEps,r=(Tn(n+s,e)-Tn(n-s,e))/(2*s),o=(Tn(n,e+s)-Tn(n,e-s))/(2*s),a=Oi.smoothstep(Math.hypot(r,o),i.slopeGateLo,i.slopeGateHi);if(a<=0)return t;const l=i.stepHeight,c=Math.floor(t/l)*l,u=t/l-Math.floor(t/l),d=c+l*u*u*(3-2*u);return t+(d-t)*i.riserSharpness*a}function Pa(n,e){return G2(n,e,Tn(n,e))}function ly(n,e,t){let i=t,s=0;const r=Kl;for(const o of rt){const a=n-o.x,l=e-o.z,c=Math.cos(o.heading),u=Math.sin(o.heading),d=a*c-l*u,f=a*u+l*c,m=Math.max(0,Math.abs(d)-o.width/2),g=Math.max(0,Math.abs(f)-o.length/2),y=Math.max(0,m-r.sideApron),p=Math.max(0,g-r.endApron),h=Math.sqrt(y*y+p*p);if(h<r.fadeWidth){const _=Oi.smoothstep(h,0,r.fadeWidth);i=Oi.lerp(o.elevation,i,_),s=Math.max(s,1-_)}if(m<r.corridorHalfWidth){const _=o.elevation+Math.max(0,g-r.endApron)*r.climbGradient;i>_&&(i=_)}}return{y:i,onRunway:s}}function sg(n,e){return ly(n,e,Pa(n,e)).y}function xn(n,e){if(!Ls)return sg(n,e);const t=Pe.size/2,i=Pe.segments,s=Pe.size/i,r=(n+t)/s,o=(e+t)/s;if(r<0||o<0||r>i||o>i)return sg(n,e);const a=Math.min(i-1,Math.floor(r)),l=Math.min(i-1,Math.floor(o)),c=r-a,u=o-l,d=Ls[l*jo+a],f=Ls[l*jo+a+1],m=Ls[(l+1)*jo+a],g=Ls[(l+1)*jo+a+1];return(1-c)*(1-u)*d+c*(1-u)*f+(1-c)*u*m+c*u*g}const V2=90,W2=200,rh=[];function q2(){const n=Pe.size,e=Pe.segments,t=n/e,i=e+1;jo=i,Ls=new Float32Array(i*i);const s=new Float32Array(i*i),r=new Float32Array(i*i*3),o=new Ae(Ye.pineCanopy),a=new Ae(Ye.laurelCanopy),l=new Ae(Ye.shrubBody),c=new Ae(Ye.grassGround),u=new Ae(Ye.cropGround),d=new Ae(Ye.urbanGround),f=new Ae(Ye.bareGround),m=new Ae(Ye.shore),g=new Ae(Ye.snow),y=new Ae(Ye.runway),p=new Ae(Ye.rock),h=new Ae,_=Pe.heightmap.metersPerUnit,v=Pe.heightmap.elevationExaggeration,b=80/_*v,R=2500/_*v,E=3200/_*v,A=Et.laurelMaxAltitude*v,U=i*i;for(let oe=0;oe<U;oe++){const k=oe%i,q=oe/i|0,$=-8e3+k*t,K=-8e3+q*t,B=ly($,K,Pa($,K)),Q=B.y,le=B.onRunway;switch(s[oe]=Q<Pe.waterLevel?Q-ox.sinkDepth:Q,Ls[oe]=s[oe],ay($,K)){case Lt.TREE:h.copy(Q>=A?o:a);break;case Lt.SHRUB:h.copy(l);break;case Lt.GRASS:h.copy(c);break;case Lt.CROP:h.copy(u);break;case Lt.URBAN:h.copy(d);break;case Lt.BARE:h.copy(f);break;default:h.copy(m);break}if(Q>Pe.waterLevel){const te=s0.slopeEps,O=(Tn($+te,K)-Tn($-te,K))/(2*te),D=(Tn($,K+te)-Tn($,K-te))/(2*te),C=Oi.smoothstep(Math.hypot(O,D),du.slopeLo,du.slopeHi);C>0&&h.lerp(p,C*du.strength)}if(Q>E)h.copy(g);else if(Q>R){const te=(Q-R)/(E-R);h.lerp(g,te)}if(Q<Pe.waterLevel+b){const te=(Q-Pe.waterLevel)/b;h.lerp(m,1-Math.max(0,te))}le>.001&&h.lerp(y,le*.35);const xe=.94+I2($,K)*.12;r[oe*3]=h.r*xe,r[oe*3+1]=h.g*xe,r[oe*3+2]=h.b*xe}const M=new ut({vertexColors:!0,flatShading:!0}),w=new ct,V=V2,W=Math.ceil(e/V);for(let oe=0;oe<W;oe++){const k=oe*V,q=Math.min(V,e-k);for(let $=0;$<W;$++){const K=$*V,B=Math.min(V,e-K),Q=new ar(B*t,q*t,B,q);Q.rotateX(-Math.PI/2);const le=Q.attributes.position,de=new Float32Array(le.count*3);for(let C=0;C<=q;C++)for(let T=0;T<=B;T++){const ee=C*(B+1)+T,ce=(k+C)*i+(K+T);le.setY(ee,s[ce]),de[ee*3]=r[ce*3],de[ee*3+1]=r[ce*3+1],de[ee*3+2]=r[ce*3+2]}Q.setAttribute("color",new Pt(de,3)),Q.computeBoundingSphere();const xe=new tt(Q,M),te=-8e3+K*t+B*t/2,O=-8e3+k*t+q*t/2;xe.position.set(te,0,O),w.add(xe);const D=Q.boundingSphere;rh.push({mesh:xe,cx:te+D.center.x,cy:D.center.y,cz:O+D.center.z,radius:D.radius})}}return w}function X2(n,e){if(!e){for(const o of rh)o.mesh.visible=!0;return}const t=Pe.fogEnd+W2,i=n.position.x,s=n.position.y,r=n.position.z;for(const o of rh){const a=i-o.cx,l=s-o.cy,c=r-o.cz;o.mesh.visible=Math.sqrt(a*a+l*l+c*c)-o.radius<t}}function j2(){const n=new ar(Pe.size*1.6,Pe.size*1.6);n.rotateX(-Math.PI/2);const e=new ut({color:Ye.water,transparent:!0,opacity:.96}),t=new tt(n,e);return t.position.y=Pe.waterLevel,t}const $2={tenerife:{count:18,spread:900,radiusRange:[8,18],strengthRange:[.55,1.55]},gomera:{count:6,spread:280,radiusRange:[9,14],strengthRange:[.65,1.3]},palma:{count:9,spread:480,radiusRange:[8,16],strengthRange:[.6,1.5]},gc:{count:12,spread:560,radiusRange:[8,17],strengthRange:[.55,1.5]},hierro:{count:5,spread:280,radiusRange:[9,13],strengthRange:[.65,1.3]},fuerte:{count:12,spread:1100,radiusRange:[10,18],strengthRange:[.55,1.2]},lanza:{count:9,spread:640,radiusRange:[9,16],strengthRange:[.6,1.3]},graciosa:{count:3,spread:120,radiusRange:[8,12],strengthRange:[.7,1.1]}};function Y2(n){let e=n>>>0;return()=>{e=e+2654435769>>>0;let t=e;return t=Math.imul(t^t>>>16,569420461),t=Math.imul(t^t>>>15,1935289751),((t^t>>>15)>>>0)/4294967296}}function K2(){const n=[],e=Y2(12648430);for(const t of bt){const i=$2[t.id];if(i)for(let s=0;s<i.count;s++){const r=e()*Math.PI*2,o=Math.sqrt(e())*i.spread,a=t.x+Math.cos(r)*o,l=t.z+Math.sin(r)*o,c=i.radiusRange[0]+e()*(i.radiusRange[1]-i.radiusRange[0]),u=i.strengthRange[0]+e()*(i.strengthRange[1]-i.strengthRange[0]);n.push({x:a,z:l,radius:c,strength:u})}}return n}const un=K2(),Sc=.55,cy=1.05,Z2=.9;let ko,Wl,ql,oh,qi,Mc,ah=null;function uy(n){ah&&(ah.visible=!!n)}function J2(){const n=new ct;ah=n;for(let a=un.length-1;a>=0;a--)xn(un[a].x,un[a].z)<Pe.waterLevel+.5&&un.splice(a,1);for(const a of un)a.baseElevation=xn(a.x,a.z);for(const a of un){const l=new Gn({color:gn.columnColor,transparent:!0,opacity:gn.columnOpacity*a.strength,side:$t,depthWrite:!1}),c=new Bn(a.radius*cy,a.radius*Sc,gn.columnTop,20,1,!0);c.translate(0,gn.columnTop/2,0);const u=new tt(c,l);u.position.set(a.x,a.baseElevation,a.z),n.add(u)}const e=un.map(a=>Math.max(10,Math.floor(gn.particleDensity*Math.PI*a.radius*a.radius))),t=e.reduce((a,l)=>a+l,0);ko=new Float32Array(t*3),Wl=new Float32Array(t),ql=new Float32Array(t),oh=new Uint16Array(t),qi=new Float32Array(t);const i=new Float32Array(t);let s=0;for(let a=0;a<un.length;a++){const l=un[a];for(let c=0;c<e[a];c++){const u=Math.sqrt(Math.random())*Z2,d=Math.random()*Math.PI*2;Wl[s]=Math.cos(d)*u,ql[s]=Math.sin(d)*u,oh[s]=a,qi[s]=Math.random(),i[s]=gn.particleSize*(.7+.5*l.strength);const f=l.radius*Sc;ko[s*3+0]=l.x+Wl[s]*f,ko[s*3+1]=l.baseElevation,ko[s*3+2]=l.z+ql[s]*f,s++}}const r=new vt;r.setAttribute("position",new Pt(ko,3)),r.setAttribute("size",new Pt(i,1));const o=new us({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Ae(gn.particleColor)},uOpacity:{value:gn.particleOpacity}},vertexShader:`
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
    `});return Mc=new J0(r,o),n.add(Mc),n}function Q2(n){if(!Mc)return;const e=Mc.geometry.attributes.position,t=e.array,i=gn.columnTop,s=gn.riseSpeed;for(let r=0;r<qi.length;r++){const o=un[oh[r]];qi[r]+=s*o.strength/i*n,qi[r]>=1&&(qi[r]-=1);const a=o.radius*(Sc+(cy-Sc)*qi[r]);t[r*3+0]=o.x+Wl[r]*a,t[r*3+1]=o.baseElevation+qi[r]*i,t[r*3+2]=o.z+ql[r]*a}e.needsUpdate=!0}function eP(n,e,t){let i=0;for(const s of un){const r=n-s.x,o=t-s.z,a=Math.sqrt(r*r+o*o);if(a>=s.radius)continue;const l=e-(s.baseElevation??0);if(l<0)continue;const c=1-a/s.radius,u=Math.max(0,1-l/gn.maxAltitude);i+=gn.liftAtCenter*s.strength*c*u}return i}const tP=.4,nP=.08,wa=20,as=Math.ceil(Pe.size/wa)+2,rg=-8e3-wa,dy=Array.from({length:as*as},()=>[]);function hy(n,e){return{cx:Math.floor((n-rg)/wa),cz:Math.floor((e-rg)/wa)}}function Ia(n,e,t,i,s){const r=i+tP,o={x:n,z:t,r2:r*r,yMin:e,yMax:e+s+nP},a=Math.ceil(r/wa),{cx:l,cz:c}=hy(n,t);for(let u=-a;u<=a;u++)for(let d=-a;d<=a;d++){const f=l+d,m=c+u;f<0||m<0||f>=as||m>=as||dy[m*as+f].push(o)}}function iP(n,e,t){const{cx:i,cz:s}=hy(n,t);if(i<0||s<0||i>=as||s>=as)return!1;const r=dy[s*as+i];for(let o=0;o<r.length;o++){const a=r[o];if(e<a.yMin||e>a.yMax)continue;const l=a.x-n,c=a.z-t;if(l*l+c*c<a.r2)return!0}return!1}const Zi=1024,Ws=427,og=1.08,sP=700,rP=5e3,oP={TFN:"tenerife",TFS:"tenerife",GMZ:"gomera",SPC:"palma",VDE:"hierro",LPA:"gc",FUE:"fuerte",ACE:"lanza",GRAC:"graciosa"},Xi=document.getElementById("tp-minimap-canvas"),Vi=document.createElement("div"),$o=document.createElement("canvas"),wc=document.createElement("div"),bl=document.createElement("div"),Qr=document.createElement("div"),Xl=document.createElement("div"),jl=document.createElement("span"),ag=document.getElementById("tp-island"),lg=document.getElementById("map-card"),aP=6;let Uo=null,cd=0,Ec=!1,lh=0,ch=0,cg="",pf=0,Sl=null;const ud=new I;function mf(){if(Sl)return Sl;let n=1/0,e=-1/0,t=1/0,i=-1/0;for(const s of bt)n=Math.min(n,s.x-s.bboxRadius),e=Math.max(e,s.x+s.bboxRadius),t=Math.min(t,s.z-s.bboxRadius),i=Math.max(i,s.z+s.bboxRadius);return Sl={cx:(n+e)/2,cz:(t+i)/2,hw:(e-n)/2*og,hh:(i-t)/2*og},Sl}function lP(n,e){let t=bt[0].id,i=1/0;for(const s of bt){const r=n-s.x,o=e-s.z,a=r*r+o*o;a<i&&(i=a,t=s.id)}return t}function cP(){!Xi||Ec||(Ec=!0,Xi.innerHTML="",Vi.className="minimap-stage",Vi.style.width=Zi+"px",Vi.style.height=Ws+"px",Vi.style.transformOrigin="0 0",$o.className="minimap-canvas",$o.width=Zi,$o.height=Ws,Vi.appendChild($o),wc.className="minimap-runways",Vi.appendChild(wc),Xi.appendChild(Vi),bl.className="minimap-overlay",Qr.className="minimap-plane",Qr.innerHTML='<span class="minimap-plane-tri"></span>',bl.appendChild(Qr),Xl.className="minimap-compass",jl.className="minimap-compass-inner",jl.textContent="N",Xl.appendChild(jl),bl.appendChild(Xl),Xi.appendChild(bl),Xi.addEventListener("pointerdown",()=>{pf=performance.now()+rP,Xi.classList.add("is-overview")}),fy(),my(),uh(),window.addEventListener("resize",uh))}function fy(){if(!Ec)return;const n=F2();if(!n)return;const e=$o.getContext("2d"),t=e.createImageData(Zi,Ws),{cx:i,cz:s,hw:r,hh:o}=mf(),a=Pe.heightmap.metersPerUnit,l=Pe.waterLevel,c=Pe.heightmap.elevRange,u=Pe.heightmap.bbox,d=Pe.heightmap.center,f=Math.cos(d.lat*Math.PI/180),m=u.lonE-u.lonW,g=u.latN-u.latS,y=(d.lon-u.lonW)/m*(n.w-1),p=a/(111320*f)/m*(n.w-1),h=(u.latN-d.lat)/g*(n.h-1),_=a/111320/g*(n.h-1),v=c[1]-c[0],b=c[0],R={};for(const M of bt)R[M.id]=!1;for(const M of rt)if(J.discoveredRunways[M.id]){const w=oP[M.id];w&&(R[w]=!0)}const E=n.data,A=n.w,U=n.h;for(let M=0;M<Ws;M++){const w=s+(M/(Ws-1)-.5)*2*o,W=Math.max(0,Math.min(U-1,Math.floor(h+w*_)))*A*4;for(let oe=0;oe<Zi;oe++){const k=i+(oe/(Zi-1)-.5)*2*r,q=Math.floor(y+k*p);let $,K,B;if(q<0||q>=A)$=52,K=92,B=118;else{const le=W+q*4,de=E[le]<<8|E[le+1],xe=(b+de/65535*v)/a;if(xe<l+.05)$=52,K=92,B=118;else{const te=lP(k,w),O=xe*a;R[te]?[$,K,B]=uP(O):$=K=B=dP(O)}}const Q=(M*Zi+oe)*4;t.data[Q]=$,t.data[Q+1]=K,t.data[Q+2]=B,t.data[Q+3]=255}}e.putImageData(t,0,0)}function uP(n){return n<80?[199,184,145]:n<600?[134,152,98]:n<1600?[157,138,110]:n<2400?[180,168,148]:n<3e3?[215,212,200]:[240,240,235]}function dP(n){return n<80?124:n<600?140:n<1600?156:n<2400?172:n<3e3?190:206}function py(n,e){const{cx:t,cz:i,hw:s,hh:r}=mf();return{fracX:(n-t)/(2*s)+.5,fracY:(e-i)/(2*r)+.5}}function my(){wc.innerHTML="";for(const n of rt){const e=!!J.landedRunways[n.id];if(!!!J.discoveredRunways[n.id]&&!e)continue;const{fracX:i,fracY:s}=py(n.x,n.z);if(i<0||i>1||s<0||s>1)continue;const r=document.createElement("span");r.className=`minimap-runway ${e?"is-landed":"is-seen"}`,r.style.left=(i*100).toFixed(2)+"%",r.style.top=(s*100).toFixed(2)+"%",wc.appendChild(r)}}function gf(n){if(Pa(n.x,n.z)<Pe.waterLevel+.05)return null;let t=null,i=1/0;for(const s of bt){const r=n.x-s.x,o=n.z-s.z,a=r*r+o*o;a<i&&(i=a,t=s)}return t}function gy(){return performance.now()<pf}const hP="Islas Canarias";let ug="";function fP(n){if(!ag)return;const e=gf(n),i=gy()||!e?hP:e.name;i!==ug&&(ug=i,ag.textContent=i)}function uh(){const n=Xi.getBoundingClientRect();lh=n.width,ch=n.height}function pP(){return lg?!document.body.classList.contains("touch-mode")||lg.classList.contains("is-open"):!0}function mP(n){if(!Ec||!n||(fP(n.position),!pP()))return;const e=rt.map(b=>J.discoveredRunways[b.id]?"1":"0").join("")+"|"+rt.map(b=>J.landedRunways[b.id]?"1":"0").join("");e!==cg&&(fy(),my(),cg=e),(lh<1||ch<1)&&uh();const t=lh,i=ch;if(t<1||i<1)return;const s=t/2,r=i/2;ud.set(0,0,-1).applyQuaternion(n.quaternion);const o=Math.atan2(ud.x,-ud.z),a=performance.now(),l=a<pf,{hw:c}=mf(),u=2*c/Zi,d=t*u/sP,f=i/Ws,m=l?f:d,g=cd?Math.min(.1,(a-cd)/1e3):0;if(cd=a,Uo===null)Uo=m;else{const b=1-Math.exp(-g*aP);Uo+=(m-Uo)*b}l||Xi.classList.remove("is-overview");const{fracX:y,fracY:p}=py(n.position.x,n.position.z),h=y*Zi,_=p*Ws;Vi.style.transform=`translate(${s}px, ${r}px) rotate(${-o}rad) scale(${Uo}) translate(${-h}px, ${-_}px)`,Qr.style.left=s+"px",Qr.style.top=r+"px",Qr.style.transform="translate(-50%, -50%)";const v=Math.min(t,i)*.43;Xl.style.transform=`translate(-50%, -50%) rotate(${-o}rad) translateY(-${v}px)`,jl.style.transform=`rotate(${o}rad)`}const dh=document.getElementById("landing-toast"),dg=document.getElementById("controls-hint"),dd=document.getElementById("boost-grey-fill"),Ml=document.getElementById("boost-oneshot-tile"),hg=document.getElementById("test-mode-border"),Cn=document.getElementById("poi-toast"),ui=document.getElementById("poi-label"),qs=document.getElementById("wrong-approach-toast");document.getElementById("tp-island");const gP={peak:document.querySelector('[data-tp="peak-count"]'),city:document.querySelector('[data-tp="city-count"]'),landscape:document.querySelector('[data-tp="landscape-count"]'),beach:document.querySelector('[data-tp="beach-count"]')},hd=document.getElementById("map-card-punkte"),fd=document.getElementById("map-card-highscore"),pd=document.getElementById("map-card-landings"),fg=document.getElementById("map-card-landings-best");let hh="",fh="";function pg(n){return Math.round(n).toLocaleString(Tv())}let ks=null,Ac=null,wl=null,Tc=!1,Ea=null,mg=-1,gg=null,ph=null,vg=!1,vo=!1;Qc(()=>{ph=null,fh="",hh="",vo&&qs&&(qs.textContent=Ee("hud.wrongApproach"))});function vP(n){const e=Ee("hud.landingBonus",{bonus:$s.landingBonus});dh.innerHTML=`${Ee("hud.landingToast",{id:n.id})}<span class="bonus">${e}</span>`,dh.classList.add("show")}function vy(){dh.classList.remove("show")}function yg(n,e,t,i){if(!ui)return;const s=t>0?Ee("hud.poiRewardFull",{punkte:e,gofios:t}):Ee("hud.poiRewardPunkte",{punkte:e}),r=i?Ee(`booster.unlock.${i}`):"",o=r?`<span class="tier-up">${r}</span>`:"";ui.innerHTML=`<span class="poi-name">${n}</span><span class="reward">${s}</span>${o}`,ui.classList.add("show","prominent"),Tc=!0,Ea=n,wl&&clearTimeout(wl),wl=setTimeout(()=>{ui.classList.remove("prominent"),Tc=!1,wl=null,ui.innerHTML=`<span class="poi-name">${n}</span>`},ht.activationToast.duration*1e3)}function vf(n){Ac=n,Cn.classList.add("show"),ks&&clearTimeout(ks),ks=setTimeout(()=>{Cn.classList.remove("show"),ks=null,Ac=null},ht.activationToast.duration*1e3)}function yP(n,e){Cn&&(Cn.innerHTML=`${n}<span class="reward">${Ee("hud.discoveryReward",{diamonds:e})}</span><span class="tier-up">${Ee("hud.discoveryTitle")}</span>`,Cn.classList.remove("compact"),vf("discovery"))}function xP(){Cn&&(Cn.innerHTML=Ee("hud.runwayApproach"),Cn.classList.remove("compact"),vf("approach"))}function md(){!Cn||Ac!=="approach"||(ks&&(clearTimeout(ks),ks=null),Cn.classList.remove("show"),Ac=null)}function _P(n,e){Cn&&(Cn.innerHTML=e?`${Ee("hud.airportUnlockTitle")}<span class="reward">${Ee("hud.airportUnlockBody",{name:n})}</span>`:Ee("hud.airportUnlocked",{name:n}),Cn.classList.add("compact"),vf("unlock"))}function bP(){!qs||vo||(qs.textContent=Ee("hud.wrongApproach"),qs.classList.add("show"),vo=!0,mh())}function xg(){!qs||!vo||(qs.classList.remove("show"),vo=!1)}function SP(n){ui&&(Tc||vo||n!==Ea&&(ui.innerHTML=`<span class="poi-name">${n}</span>`,ui.classList.add("show"),Ea=n))}function mh(){ui&&(Tc||Ea!==null&&(ui.classList.remove("show"),Ea=null))}function MP(){const n=cf()==="gyro"?"hud.hintPrelaunchGyro":"hud.hintPrelaunch",e=N.flightState===Ge.INTRO||N.flightState===Ge.CRASHING?"":N.flightState===Ge.PRELAUNCH?Ee(n):N.flightState===Ge.TAKEOFF_ROLL?Ee("hud.hintTakeoff"):Ee("hud.hintNormal");e!==ph&&(dg.textContent=e,ph=e);const t=N.flightState===Ge.PRELAUNCH;t!==vg&&(dg.classList.toggle("hint-pinned",t),vg=t),EP(),AP(),TP(),wP()}function wP(){if(!hd&&!fd&&!pd)return;const n=Math.round(N.flightPunkte|0),e=Math.round(J.bestFlightPunkte|0),t=N.sessionLandings|0,i=J.bestSessionLandings|0,s=`${n}|${e}|${t}|${i}`;s!==fh&&(fh=s,hd&&(hd.textContent=pg(n)),fd&&(fd.textContent=pg(e)),pd&&(pd.textContent=t.toString()),fg&&(fg.textContent=i.toString()))}function EP(){if(dd&&(dd.style.width=(N.boostFuelGrey*100).toFixed(1)+"%",dd.style.opacity=N.greyActive?"1":"0.7"),!Ml)return;const n=Ys(),e=mt.oneShot.tiers[n]||mt.oneShot.tiers[0];if(n!==mg){Ml.hidden=n===0;const s="#"+(e.color|0).toString(16).padStart(6,"0");Ml.style.setProperty("--boost-fill",s),mg=n}if(n===0)return;const i=((1-Math.max(0,Math.min(1,N.boostFuelOneshot)))*100).toFixed(1)+"%";Ml.style.setProperty("--drain-pct",i)}function AP(){hg&&J.testMode!==gg&&(hg.classList.toggle("visible",!!J.testMode),gg=J.testMode)}function TP(){const n=gy(),e=gf(fe.position),t=n||!e,i={peak:0,city:0,landscape:0,beach:0},s={peak:0,city:0,landscape:0,beach:0};if(t)for(const a of Object.keys(fu))for(const l of fu[a])i[l.type]++,J.exploredPOIs[l.id]&&s[l.type]++;else for(const a of fu[e.id]||[])i[a.type]++,J.exploredPOIs[a.id]&&s[a.type]++;const o=`${t?"arch":e.id}|${s.peak}/${i.peak}|${s.city}/${i.city}|${s.landscape}/${i.landscape}|${s.beach}/${i.beach}`;if(o!==hh){hh=o;for(const a of["peak","city","landscape","beach"]){const l=gP[a];if(!l)continue;const c=s[a],u=i[a];u>0&&c>=u?l.innerHTML='<span class="material-symbols-outlined tp-gofios-check">check</span>':l.textContent=`${c} / ${u}`}}}const In=new I(0,0,-1),El=new I,_g=new I,Ct=new I,Vt=new I,ai=new I,bg=new I,Fo=new I(0,0,-1),gd=new I;let vd=!1;function yy(){switch(N.flightState){case Ge.PRELAUNCH:case Ge.LANDED:return 0;case Ge.TAKEOFF_ROLL:case Ge.LANDING_ROLL:return Oi.clamp(N.speed/Ds.takeoffSpeed,0,1);default:return 1}}function aa(n,e,t){return n+(e-n)*t}let yd=0;function zo(n,e){return 1-Math.exp(-e/Math.max(n,1e-4))}function Sg(n){const e=1-n;return 1-e*e*e}function RP(n){return Vt.set(0,0,-1).applyQuaternion(fe.quaternion),Ct.set(Vt.x,0,Vt.z),Ct.lengthSq()<1e-4&&Ct.set(0,0,-1),Ct.normalize(),ai.set(0,Xt.height,0),n.copy(fe.position).addScaledVector(Ct,-6.5).add(ai)}function CP(n){if(N.flightState===Ge.INTRO&&N.introStartCamPos){const u=Sg(Math.min(1,N.introT));RP(bg),Gt.position.lerpVectors(N.introStartCamPos,bg,u),Gt.up.set(0,1,0),Gt.lookAt(fe.position);return}if(N.flightState!==Ge.CRASHING&&(vd=!1),N.flightState===Ge.LANDED){Vt.set(0,0,-1).applyQuaternion(fe.quaternion),In.copy(Vt),Ct.set(Vt.x,0,Vt.z),Ct.lengthSq()<1e-4&&Ct.set(0,0,-1),Ct.normalize(),ai.set(0,Xt.runwayHeight,0),Gt.position.copy(fe.position).addScaledVector(Ct,-3).add(ai),Gt.up.set(0,1,0),Gt.lookAt(fe.position);return}if(N.flightState===Ge.CRASHING){vd||(Vt.set(0,0,-1).applyQuaternion(fe.quaternion),Fo.set(Vt.x,0,Vt.z),Fo.lengthSq()<1e-4&&Fo.set(0,0,-1),Fo.normalize(),gd.copy(fe.position),vd=!0);const u=Sg(Math.min(1,N.crashT)),d=Xt.distance+Ol.camPullback*u;ai.set(0,Xt.height+Ol.camRise*u,0),El.copy(gd).addScaledVector(Fo,-d).add(ai),Gt.position.lerp(El,zo(Ol.camTau,n)),Gt.up.set(0,1,0),Gt.lookAt(gd);return}Vt.set(0,0,-1).applyQuaternion(fe.quaternion);const e=zo(Xt.yawTau,n),t=zo(Xt.pitchTau,n);In.x+=(Vt.x-In.x)*e,In.z+=(Vt.z-In.z)*e,In.y+=(Vt.y-In.y)*t,In.normalize(),Ct.set(In.x,0,In.z),Ct.lengthSq()<1e-4&&Ct.set(0,0,-1),Ct.normalize();const i=N.greyActive||N.oneShotActive?1:0,s=zo(mt.camPushbackTau,n);yd+=(i-yd)*s;const r=yy(),o=aa(Xt.runwayDistance,Xt.distance,r),a=aa(Xt.runwayHeight,Xt.height,r),l=aa(Xt.runwayLookAhead,Xt.lookAhead,r);ai.set(0,a,0),El.copy(fe.position).addScaledVector(Ct,-(o+mt.camPushback*yd)).add(ai);const c=zo(Xt.posTau,n);Gt.position.lerp(El,c),_g.copy(fe.position).addScaledVector(In,l),Gt.up.set(0,1,0),Gt.lookAt(_g)}function nu(){Vt.set(0,0,-1).applyQuaternion(fe.quaternion),In.copy(Vt),Ct.set(Vt.x,0,Vt.z),Ct.lengthSq()<1e-4&&Ct.set(0,0,-1),Ct.normalize();const n=yy(),e=aa(Xt.runwayDistance,Xt.distance,n),t=aa(Xt.runwayHeight,Xt.height,n);ai.set(0,t,0),Gt.position.copy(fe.position).addScaledVector(Ct,-e).add(ai)}const yf={value:0},Bo=fe.getObjectByName("paperBody");if(Bo){const n=Bo.geometry,e=n.getAttribute("position"),t=e.count/3,i=new Float32Array(e.count*3),s=new Float32Array(e.count*3);for(let r=0;r<t;r++){const o=r*3,a=o+1,l=o+2,c=(e.getX(o)+e.getX(a)+e.getX(l))/3,u=(e.getY(o)+e.getY(a)+e.getY(l))/3,d=(e.getZ(o)+e.getZ(a)+e.getZ(l))/3,f=Math.random(),m=Math.random(),g=Math.random();for(const y of[o,a,l])i[y*3]=c,i[y*3+1]=u,i[y*3+2]=d,s[y*3]=f,s[y*3+1]=m,s[y*3+2]=g}n.setAttribute("aCentroid",new Pt(i,3)),n.setAttribute("aRand",new Pt(s,3)),Bo.material.onBeforeCompile=r=>{r.uniforms.uShatter=yf,r.vertexShader=`attribute vec3 aCentroid;
attribute vec3 aRand;
uniform float uShatter;
`+r.vertexShader.replace("#include <begin_vertex>",`vec3 transformed = vec3( position );
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
         }`)},Bo.material.customProgramCacheKey=()=>"paperShatter",Bo.material.needsUpdate=!0}let fs=null;function LP(){fs=[],fe.traverse(n=>{if(!n.material)return;const e=Array.isArray(n.material)?n.material:[n.material];for(const t of e)t.userData.crashBaseOpacity=t.opacity,fs.push(t)})}function PP(){fs||LP();for(const n of fs)n.transparent=!0}function IP(n){if(yf.value=n,!fs)return;const e=Math.max(0,1-n*1.15);for(const t of fs)t.opacity=t.userData.crashBaseOpacity*e}function NP(){if(yf.value=0,!!fs)for(const n of fs)n.opacity=n.userData.crashBaseOpacity}let $l=null;const si=new I,Mg=new I,wg=new I,Eg=new At,Ag=new Hn,Al=new I,Tg=new I,DP=new I;function iu(n,e=DP){return e.set(0,0,-1).applyEuler(new Hn(0,n,0))}function xf(n){const e=iu(n.activeHeading);fe.position.set(n.x-e.x*n.length*.45,n.elevation+.22,n.z-e.z*n.length*.45),fe.quaternion.setFromEuler(new Hn(0,n.activeHeading,0)),N.speed=0,N.flightState=Ge.PRELAUNCH,N.currentRunway=n,N.refillStartGrey=N.boostFuelGrey,N.refillStartOneshot=N.boostFuelOneshot,N.refillT=0,N.greyActive=!1,N.oneShotActive=!1,Ih(),Vc(),eu(),nu()}const xy=document.getElementById("crash");let gh=null;function OP(n){gh=n}function kP(){N.flightPunkte=0}function _y(){N.flightPunkte>J.bestFlightPunkte&&(J.bestFlightPunkte=N.flightPunkte),N.flightPunkte=0}function Yl(){if(N.tutorial){gh&&gh("crash");return}N.flightState===Ge.CRASHING||N.flightState===Ge.CRASHED||(N.speed=0,N.flightState=Ge.CRASHING,N.crashT=0,N.sessionLandings=0,_y(),Ut(),PP())}function UP(n){N.crashT+=n/Ol.duration,IP(Math.min(1,N.crashT)),N.crashT>=1&&(N.alive=!1,N.flightState=Ge.CRASHED,xy.classList.add("visible"))}let Rg=!1;function su(n={}){n.runwayId&&n.runwayId!==J.checkpointRunwayId&&(J.checkpointRunwayId=n.runwayId,Ut());const e=J.checkpointRunwayId??Qi,t=rt.find(s=>s.id===e)??rt[0],i=n.forceIntro||!J.introPlayed;if(cx(),eL(),RL(),IL(),NP(),vy(),xy.classList.remove("visible"),xf(t),Rg||($v(t),Rg=!0),i){const s=new I(0,0,-1).applyQuaternion(fe.quaternion),r=new I(s.x,0,s.z).normalize();N.introStartCamPos=fe.position.clone().addScaledVector(r,-4e3).add(new I(0,r0.startHeight,0)),N.introT=0,N.flightState=Ge.INTRO,St.fog&&($l=St.fog,St.fog=null)}}function FP(){const n=cr();return n.pitch!==0||n.roll!==0||n.brake}function by(n){if(N.refillT>=1)return;N.refillT=Math.min(1,N.refillT+n/mt.refillDuration);const e=N.refillT;N.boostFuelGrey=N.refillStartGrey+(1-N.refillStartGrey)*e,N.boostFuelOneshot=N.refillStartOneshot+(1-N.refillStartOneshot)*e}function zP(){N.refillT=1,N.boostFuelGrey=1,N.boostFuelOneshot=1}function BP(n){const e=cr();Mx()&&Ys()>0&&N.boostFuelOneshot>0&&!N.oneShotActive&&(N.oneShotActive=!0),N.greyActive=e.boost&&N.boostFuelGrey>0;let t=0,i=0;if(N.oneShotActive){const s=mt.oneShot.tiers[Ys()]||mt.oneShot.tiers[0];N.boostFuelOneshot-=n/Math.max(s.tankDuration,1e-4),N.boostFuelOneshot<=0?(N.boostFuelOneshot=J.testMode?1:0,N.oneShotActive=!1):(t+=s.speedBonus,i+=s.accelRate)}if(N.greyActive){const s=mt.grey;N.boostFuelGrey-=n/Math.max(s.tankDuration,1e-4),N.boostFuelGrey<=0?(N.boostFuelGrey=0,N.greyActive=!1):(t+=s.speedBonus,i+=s.accelRate)}return!N.greyActive&&!N.oneShotActive&&N.boostFuelGrey<1&&(N.boostFuelGrey=Math.min(1,N.boostFuelGrey+n/mt.grey.rechargeTime)),{speedBonus:t,accelBonus:i}}function HP(n){FP()?N.introT=1:N.introT+=n/r0.duration,N.introT>=1&&(N.introT=0,N.introStartCamPos=null,N.flightState=Ge.PRELAUNCH,J.introPlayed=!0,Vc(),eu(),$l&&(St.fog=$l,$l=null),nu())}function GP(n){by(n);const e=wx();(cf()!=="gyro"&&cr().pitch>0||e)&&(N.flightState=Ge.TAKEOFF_ROLL,N.takeoffTime=0,kP())}function VP(n){const e=N.currentRunway;N.takeoffTime+=n,by(n);const t=Ds.takeoffSpeed,i=Ds.linearShare,s=1-i,o=e.length*Ds.liftoffFraction/(t*(i/2+s/3)),a=Math.min(1,N.takeoffTime/o);N.speed=t*(i*a+s*a*a);const l=iu(e.activeHeading);fe.position.x+=l.x*N.speed*n,fe.position.z+=l.z*N.speed*n,fe.position.y=e.elevation+.22,fe.quaternion.setFromEuler(new Hn(0,e.activeHeading,0)),a>=1&&(fe.rotateX(Ds.pitchUpAtLiftoff),N.flightState=Ge.FLYING,N.currentRunway=null,N.postLiftCooldown=1.2,zP())}const Cg=200,WP=250;function qP(n){for(const e of rt){if(J.discoveredRunways[e.id])continue;const t=n.x-e.x,i=n.z-e.z;if(t*t+i*i>Cg*Cg)continue;const s=n.y-e.elevation;s<-50||s>WP||(J.discoveredRunways[e.id]=!0,Ut())}}function XP(n){const e=BP(n),t=cr(),i=t.pitch,s=t.roll,r=Math.max(0,Rt.stallSpeed-N.speed)/Rt.stallSpeed,o=1-r*(1-Rt.stallAuthority),a=i*o;si.set(0,0,-1).applyQuaternion(fe.quaternion);const l=Math.asin(Oi.clamp(si.y,-1,1));let c=a*Rt.pitchRate*n;c>0&&(c=Math.min(c,Math.max(0,Rt.maxClimbPitch-l))),fe.rotateX(c),fe.rotateZ(-s*Rt.rollRate*n),si.set(0,0,-1).applyQuaternion(fe.quaternion),Mg.set(1,0,0).applyQuaternion(fe.quaternion),wg.set(0,1,0).applyQuaternion(fe.quaternion);const u=Math.atan2(Mg.y,wg.y);fe.rotateOnWorldAxis(Wd,Math.sin(u)*Rt.turnFactor*n),r>.01&&(Al.set(si.x,0,si.z),Al.lengthSq()>1e-4&&(Al.normalize(),Tg.crossVectors(Al,Wd).normalize(),fe.rotateOnWorldAxis(Tg,-r*Rt.stallPitchRate*n))),si.set(0,0,-1).applyQuaternion(fe.quaternion);const d=si.y;N.speed-=d*Rt.speedFromPitch*n,N.speed-=Rt.drag*n,N.brakeAmount>.01&&(N.speed-=N.brakeAmount*Jl.force*n);const f=eP(fe.position.x,fe.position.y,fe.position.z);N.speed+=f*.13*n,N.inThermal=f>.5;const m=Rt.maxSpeed+e.speedBonus;e.accelBonus>0&&N.speed<m&&(N.speed=Math.min(m,N.speed+e.accelBonus*n)),N.speed=Math.max(Rt.minSpeed,Math.min(m,N.speed));const g=fe.position.x,y=fe.position.z;fe.position.addScaledVector(si,N.speed*n);const p=Rt.sinkRate*(1+r*Rt.stallSink);if(fe.position.y-=p*n,fe.position.y+=f*n,!N.tutorial){const b=fe.position.x-g,R=fe.position.z-y;Hc(Math.sqrt(b*b+R*R))}const h=Pe.size/2-30;if(fe.position.x>h&&(fe.position.x=h),fe.position.x<-h&&(fe.position.x=-h),fe.position.z>h&&(fe.position.z=h),fe.position.z<-h&&(fe.position.z=-h),N.postLiftCooldown>0){N.postLiftCooldown-=n;return}if(!N.tutorial){qP(fe.position);const b=Math.atan2(-si.x,-si.z),R=sL(fe.position,b);if(R){N.flightState=Ge.LANDING_ROLL,N.currentRunway=R,fe.position.y=R.elevation+.22;return}}const _=rL(fe.position);if(_&&fe.position.y-_.elevation<$s.rollingHeight){Yl();return}const v=xn(fe.position.x,fe.position.z);(fe.position.y<Math.max(v+.4,Pe.waterLevel+.4)||iP(fe.position.x,fe.position.y,fe.position.z))&&Yl()}function jP(n){const e=N.currentRunway;N.speed=Math.max(0,N.speed-$s.brakeForce*n);const t=iu(e.activeHeading),i=fe.position.x,s=fe.position.z;fe.position.x+=t.x*N.speed*n,fe.position.z+=t.z*N.speed*n,fe.position.y=e.elevation+.22;const r=fe.position.x-i,o=fe.position.z-s;Hc(Math.sqrt(r*r+o*o)),Ag.set(0,e.activeHeading,0),Eg.setFromEuler(Ag),fe.quaternion.slerp(Eg,.22);const a=fe.position.x-e.x,l=fe.position.z-e.z,c=a*Math.sin(e.heading)+l*Math.cos(e.heading);if(Math.abs(c)>e.length*.5){Yl();return}N.speed<$s.landingSpeed&&$P(e)}function $P(n){N.speed=0,N.flightState=Ge.LANDED,N.landedToastTimer=o0.toastDuration,N.cinematicT=0,N.cinematicFromPos=fe.position.clone(),N.cinematicFromQuat=fe.quaternion.clone();const e=n.activeHeading,t=iu(e,new I);N.cinematicToPos=new I(n.x-t.x*n.length*.45,n.elevation+.22,n.z-t.z*n.length*.45),N.cinematicToQuat=new At().setFromEuler(new Hn(0,e,0)),J.landings+=1,Hc($s.landingBonus),J.checkpointRunwayId=n.id,$v(n);const i=!J.landedRunways[n.id],s=Object.keys(J.landedRunways).some(r=>r!==Qi&&J.landedRunways[r]);J.landedRunways[n.id]=!0,J.discoveredRunways[n.id]=!0,N.sessionLandings+=1,N.sessionLandings>J.bestSessionLandings&&(J.bestSessionLandings=N.sessionLandings),_y(),Ut(),vP(n),i&&n.id!==Qi&&(N.pendingAirportUnlock={id:n.id,full:!s})}function YP(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function KP(n){if(N.landedToastTimer>0){N.landedToastTimer-=n;return}if(N.cinematicT+=n/o0.tweenDuration,N.cinematicT>=1){fe.position.copy(N.cinematicToPos),fe.quaternion.copy(N.cinematicToQuat),N.cinematicT=0,N.cinematicFromPos=null,N.cinematicToPos=null,N.cinematicFromQuat=null,N.cinematicToQuat=null,N.flightState=Ge.PRELAUNCH,Ih(),Vc(),eu(),N.refillStartGrey=N.boostFuelGrey,N.refillStartOneshot=N.boostFuelOneshot,N.refillT=0,nu(),vy(),N.pendingAirportUnlock&&(_P(N.pendingAirportUnlock.id,N.pendingAirportUnlock.full),N.pendingAirportUnlock=null);return}const e=YP(N.cinematicT);fe.position.lerpVectors(N.cinematicFromPos,N.cinematicToPos,e),fe.quaternion.copy(N.cinematicFromQuat)}function ZP(n){if(N.alive&&!N.paused)switch(N.flightState){case Ge.INTRO:return HP(n);case Ge.PRELAUNCH:return GP(n);case Ge.TAKEOFF_ROLL:return VP(n);case Ge.FLYING:return XP(n);case Ge.LANDING_ROLL:return jP(n);case Ge.LANDED:return KP(n);case Ge.CRASHING:return UP(n);case Ge.CRASHED:return}}const JP=Nt;class Rc extends Zh{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,i,s){const r=this,o=new eT(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}parse(e){const t=this;function i(O,D){if(O.nodeType!==1)return;const C=b(O);let T=!1,ee=null;switch(O.nodeName){case"svg":D=g(O,D);break;case"style":r(O);break;case"g":D=g(O,D);break;case"path":D=g(O,D),O.hasAttribute("d")&&(ee=s(O));break;case"rect":D=g(O,D),ee=l(O);break;case"polygon":D=g(O,D),ee=c(O);break;case"polyline":D=g(O,D),ee=u(O);break;case"circle":D=g(O,D),ee=d(O);break;case"ellipse":D=g(O,D),ee=f(O);break;case"line":D=g(O,D),ee=m(O);break;case"defs":T=!0;break;case"use":D=g(O,D);const he=(O.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),P=O.viewportElement.getElementById(he);P?i(P,D):console.warn("SVGLoader: 'use node' references non-existent node id: "+he);break}ee&&(D.fill!==void 0&&D.fill!=="none"&&ee.color.setStyle(D.fill,JP),E(ee,de),W.push(ee),ee.userData={node:O,style:D});const ce=O.childNodes;for(let X=0;X<ce.length;X++){const he=ce[X];T&&he.nodeName!=="style"&&he.nodeName!=="defs"||i(he,D)}C&&(k.pop(),k.length>0?de.copy(k[k.length-1]):de.identity())}function s(O){const D=new Ss,C=new me,T=new me,ee=new me;let ce=!0,X=!1;const he=O.getAttribute("d");if(he===""||he==="none")return null;const P=he.match(/[a-df-z][^a-df-z]*/ig);for(let ie=0,z=P.length;ie<z;ie++){const Y=P[ie],j=Y.charAt(0),pe=Y.slice(1).trim();ce===!0&&(X=!0,ce=!1);let F;switch(j){case"M":F=p(pe);for(let x=0,S=F.length;x<S;x+=2)C.x=F[x+0],C.y=F[x+1],T.x=C.x,T.y=C.y,x===0?D.moveTo(C.x,C.y):D.lineTo(C.x,C.y),x===0&&ee.copy(C);break;case"H":F=p(pe);for(let x=0,S=F.length;x<S;x++)C.x=F[x],T.x=C.x,T.y=C.y,D.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"V":F=p(pe);for(let x=0,S=F.length;x<S;x++)C.y=F[x],T.x=C.x,T.y=C.y,D.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"L":F=p(pe);for(let x=0,S=F.length;x<S;x+=2)C.x=F[x+0],C.y=F[x+1],T.x=C.x,T.y=C.y,D.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"C":F=p(pe);for(let x=0,S=F.length;x<S;x+=6)D.bezierCurveTo(F[x+0],F[x+1],F[x+2],F[x+3],F[x+4],F[x+5]),T.x=F[x+2],T.y=F[x+3],C.x=F[x+4],C.y=F[x+5],x===0&&X===!0&&ee.copy(C);break;case"S":F=p(pe);for(let x=0,S=F.length;x<S;x+=4)D.bezierCurveTo(y(C.x,T.x),y(C.y,T.y),F[x+0],F[x+1],F[x+2],F[x+3]),T.x=F[x+0],T.y=F[x+1],C.x=F[x+2],C.y=F[x+3],x===0&&X===!0&&ee.copy(C);break;case"Q":F=p(pe);for(let x=0,S=F.length;x<S;x+=4)D.quadraticCurveTo(F[x+0],F[x+1],F[x+2],F[x+3]),T.x=F[x+0],T.y=F[x+1],C.x=F[x+2],C.y=F[x+3],x===0&&X===!0&&ee.copy(C);break;case"T":F=p(pe);for(let x=0,S=F.length;x<S;x+=2){const G=y(C.x,T.x),ge=y(C.y,T.y);D.quadraticCurveTo(G,ge,F[x+0],F[x+1]),T.x=G,T.y=ge,C.x=F[x+0],C.y=F[x+1],x===0&&X===!0&&ee.copy(C)}break;case"A":F=p(pe,[3,4],7);for(let x=0,S=F.length;x<S;x+=7){if(F[x+5]==C.x&&F[x+6]==C.y)continue;const G=C.clone();C.x=F[x+5],C.y=F[x+6],T.x=C.x,T.y=C.y,o(D,F[x],F[x+1],F[x+2],F[x+3],F[x+4],G,C),x===0&&X===!0&&ee.copy(C)}break;case"m":F=p(pe);for(let x=0,S=F.length;x<S;x+=2)C.x+=F[x+0],C.y+=F[x+1],T.x=C.x,T.y=C.y,x===0?D.moveTo(C.x,C.y):D.lineTo(C.x,C.y),x===0&&ee.copy(C);break;case"h":F=p(pe);for(let x=0,S=F.length;x<S;x++)C.x+=F[x],T.x=C.x,T.y=C.y,D.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"v":F=p(pe);for(let x=0,S=F.length;x<S;x++)C.y+=F[x],T.x=C.x,T.y=C.y,D.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"l":F=p(pe);for(let x=0,S=F.length;x<S;x+=2)C.x+=F[x+0],C.y+=F[x+1],T.x=C.x,T.y=C.y,D.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"c":F=p(pe);for(let x=0,S=F.length;x<S;x+=6)D.bezierCurveTo(C.x+F[x+0],C.y+F[x+1],C.x+F[x+2],C.y+F[x+3],C.x+F[x+4],C.y+F[x+5]),T.x=C.x+F[x+2],T.y=C.y+F[x+3],C.x+=F[x+4],C.y+=F[x+5],x===0&&X===!0&&ee.copy(C);break;case"s":F=p(pe);for(let x=0,S=F.length;x<S;x+=4)D.bezierCurveTo(y(C.x,T.x),y(C.y,T.y),C.x+F[x+0],C.y+F[x+1],C.x+F[x+2],C.y+F[x+3]),T.x=C.x+F[x+0],T.y=C.y+F[x+1],C.x+=F[x+2],C.y+=F[x+3],x===0&&X===!0&&ee.copy(C);break;case"q":F=p(pe);for(let x=0,S=F.length;x<S;x+=4)D.quadraticCurveTo(C.x+F[x+0],C.y+F[x+1],C.x+F[x+2],C.y+F[x+3]),T.x=C.x+F[x+0],T.y=C.y+F[x+1],C.x+=F[x+2],C.y+=F[x+3],x===0&&X===!0&&ee.copy(C);break;case"t":F=p(pe);for(let x=0,S=F.length;x<S;x+=2){const G=y(C.x,T.x),ge=y(C.y,T.y);D.quadraticCurveTo(G,ge,C.x+F[x+0],C.y+F[x+1]),T.x=G,T.y=ge,C.x=C.x+F[x+0],C.y=C.y+F[x+1],x===0&&X===!0&&ee.copy(C)}break;case"a":F=p(pe,[3,4],7);for(let x=0,S=F.length;x<S;x+=7){if(F[x+5]==0&&F[x+6]==0)continue;const G=C.clone();C.x+=F[x+5],C.y+=F[x+6],T.x=C.x,T.y=C.y,o(D,F[x],F[x+1],F[x+2],F[x+3],F[x+4],G,C),x===0&&X===!0&&ee.copy(C)}break;case"Z":case"z":D.currentPath.autoClose=!0,D.currentPath.curves.length>0&&(C.copy(ee),D.currentPath.currentPoint.copy(C),ce=!0);break;default:console.warn(Y)}X=!1}return D}function r(O){if(!(!O.sheet||!O.sheet.cssRules||!O.sheet.cssRules.length))for(let D=0;D<O.sheet.cssRules.length;D++){const C=O.sheet.cssRules[D];if(C.type!==1)continue;const T=C.selectorText.split(/,/gm).filter(Boolean).map(ee=>ee.trim());for(let ee=0;ee<T.length;ee++){const ce=Object.fromEntries(Object.entries(C.style).filter(([,X])=>X!==""));oe[T[ee]]=Object.assign(oe[T[ee]]||{},ce)}}}function o(O,D,C,T,ee,ce,X,he){if(D==0||C==0){O.lineTo(he.x,he.y);return}T=T*Math.PI/180,D=Math.abs(D),C=Math.abs(C);const P=(X.x-he.x)/2,ie=(X.y-he.y)/2,z=Math.cos(T)*P+Math.sin(T)*ie,Y=-Math.sin(T)*P+Math.cos(T)*ie;let j=D*D,pe=C*C;const F=z*z,x=Y*Y,S=F/j+x/pe;if(S>1){const ye=Math.sqrt(S);D=ye*D,C=ye*C,j=D*D,pe=C*C}const G=j*x+pe*F,ge=(j*pe-G)/G;let ve=Math.sqrt(Math.max(0,ge));ee===ce&&(ve=-ve);const ue=ve*D*Y/C,Te=-ve*C*z/D,_e=Math.cos(T)*ue-Math.sin(T)*Te+(X.x+he.x)/2,Re=Math.sin(T)*ue+Math.cos(T)*Te+(X.y+he.y)/2,Ne=a(1,0,(z-ue)/D,(Y-Te)/C),Fe=a((z-ue)/D,(Y-Te)/C,(-z-ue)/D,(-Y-Te)/C)%(Math.PI*2);O.currentPath.absellipse(_e,Re,D,C,Ne,Ne+Fe,ce===0,T)}function a(O,D,C,T){const ee=O*C+D*T,ce=Math.sqrt(O*O+D*D)*Math.sqrt(C*C+T*T);let X=Math.acos(Math.max(-1,Math.min(1,ee/ce)));return O*T-D*C<0&&(X=-X),X}function l(O){const D=v(O.getAttribute("x")||0),C=v(O.getAttribute("y")||0),T=v(O.getAttribute("rx")||O.getAttribute("ry")||0),ee=v(O.getAttribute("ry")||O.getAttribute("rx")||0),ce=v(O.getAttribute("width")),X=v(O.getAttribute("height")),he=1-.551915024494,P=new Ss;return P.moveTo(D+T,C),P.lineTo(D+ce-T,C),(T!==0||ee!==0)&&P.bezierCurveTo(D+ce-T*he,C,D+ce,C+ee*he,D+ce,C+ee),P.lineTo(D+ce,C+X-ee),(T!==0||ee!==0)&&P.bezierCurveTo(D+ce,C+X-ee*he,D+ce-T*he,C+X,D+ce-T,C+X),P.lineTo(D+T,C+X),(T!==0||ee!==0)&&P.bezierCurveTo(D+T*he,C+X,D,C+X-ee*he,D,C+X-ee),P.lineTo(D,C+ee),(T!==0||ee!==0)&&P.bezierCurveTo(D,C+ee*he,D+T*he,C,D+T,C),P}function c(O){function D(ce,X,he){const P=v(X),ie=v(he);ee===0?T.moveTo(P,ie):T.lineTo(P,ie),ee++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,T=new Ss;let ee=0;return O.getAttribute("points").replace(C,D),T.currentPath.autoClose=!0,T}function u(O){function D(ce,X,he){const P=v(X),ie=v(he);ee===0?T.moveTo(P,ie):T.lineTo(P,ie),ee++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,T=new Ss;let ee=0;return O.getAttribute("points").replace(C,D),T.currentPath.autoClose=!1,T}function d(O){const D=v(O.getAttribute("cx")||0),C=v(O.getAttribute("cy")||0),T=v(O.getAttribute("r")||0),ee=new $r;ee.absarc(D,C,T,0,Math.PI*2);const ce=new Ss;return ce.subPaths.push(ee),ce}function f(O){const D=v(O.getAttribute("cx")||0),C=v(O.getAttribute("cy")||0),T=v(O.getAttribute("rx")||0),ee=v(O.getAttribute("ry")||0),ce=new $r;ce.absellipse(D,C,T,ee,0,Math.PI*2);const X=new Ss;return X.subPaths.push(ce),X}function m(O){const D=v(O.getAttribute("x1")||0),C=v(O.getAttribute("y1")||0),T=v(O.getAttribute("x2")||0),ee=v(O.getAttribute("y2")||0),ce=new Ss;return ce.moveTo(D,C),ce.lineTo(T,ee),ce.currentPath.autoClose=!1,ce}function g(O,D){D=Object.assign({},D);let C={};if(O.hasAttribute("class")){const X=O.getAttribute("class").split(/\s/).filter(Boolean).map(he=>he.trim());for(let he=0;he<X.length;he++)C=Object.assign(C,oe["."+X[he]])}O.hasAttribute("id")&&(C=Object.assign(C,oe["#"+O.getAttribute("id")]));function T(X,he,P){P===void 0&&(P=function(z){return z.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),z}),O.hasAttribute(X)&&(D[he]=P(O.getAttribute(X))),C[X]&&(D[he]=P(C[X])),O.style&&O.style[X]!==""&&(D[he]=P(O.style[X]))}function ee(X){return Math.max(0,Math.min(1,v(X)))}function ce(X){return Math.max(0,v(X))}return T("fill","fill"),T("fill-opacity","fillOpacity",ee),T("fill-rule","fillRule"),T("opacity","opacity",ee),T("stroke","stroke"),T("stroke-opacity","strokeOpacity",ee),T("stroke-width","strokeWidth",ce),T("stroke-linejoin","strokeLineJoin"),T("stroke-linecap","strokeLineCap"),T("stroke-miterlimit","strokeMiterLimit",ce),T("visibility","visibility"),D}function y(O,D){return O-(D-O)}function p(O,D,C){if(typeof O!="string")throw new TypeError("Invalid input: "+typeof O);const T={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},ee=0,ce=1,X=2,he=3;let P=ee,ie=!0,z="",Y="";const j=[];function pe(G,ge,ve){const ue=new SyntaxError('Unexpected character "'+G+'" at index '+ge+".");throw ue.partial=ve,ue}function F(){z!==""&&(Y===""?j.push(Number(z)):j.push(Number(z)*Math.pow(10,Number(Y)))),z="",Y=""}let x;const S=O.length;for(let G=0;G<S;G++){if(x=O[G],Array.isArray(D)&&D.includes(j.length%C)&&T.FLAGS.test(x)){P=ce,z=x,F();continue}if(P===ee){if(T.WHITESPACE.test(x))continue;if(T.DIGIT.test(x)||T.SIGN.test(x)){P=ce,z=x;continue}if(T.POINT.test(x)){P=X,z=x;continue}T.COMMA.test(x)&&(ie&&pe(x,G,j),ie=!0)}if(P===ce){if(T.DIGIT.test(x)){z+=x;continue}if(T.POINT.test(x)){z+=x,P=X;continue}if(T.EXP.test(x)){P=he;continue}T.SIGN.test(x)&&z.length===1&&T.SIGN.test(z[0])&&pe(x,G,j)}if(P===X){if(T.DIGIT.test(x)){z+=x;continue}if(T.EXP.test(x)){P=he;continue}T.POINT.test(x)&&z[z.length-1]==="."&&pe(x,G,j)}if(P===he){if(T.DIGIT.test(x)){Y+=x;continue}if(T.SIGN.test(x)){if(Y===""){Y+=x;continue}Y.length===1&&T.SIGN.test(Y)&&pe(x,G,j)}}T.WHITESPACE.test(x)?(F(),P=ee,ie=!1):T.COMMA.test(x)?(F(),P=ee,ie=!0):T.SIGN.test(x)?(F(),P=ce,z=x):T.POINT.test(x)?(F(),P=X,z=x):pe(x,G,j)}return F(),j}const h=["mm","cm","in","pt","pc","px"],_={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function v(O){let D="px";if(typeof O=="string"||O instanceof String)for(let T=0,ee=h.length;T<ee;T++){const ce=h[T];if(O.endsWith(ce)){D=ce,O=O.substring(0,O.length-ce.length);break}}let C;return D==="px"&&t.defaultUnit!=="px"?C=_.in[t.defaultUnit]/t.defaultDPI:(C=_[D][t.defaultUnit],C<0&&(C=_[D].in*t.defaultDPI)),C*parseFloat(O)}function b(O){if(!(O.hasAttribute("transform")||O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))))return null;const D=R(O);return k.length>0&&D.premultiply(k[k.length-1]),de.copy(D),k.push(D),D}function R(O){const D=new He,C=q;if(O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))){const T=v(O.getAttribute("x")),ee=v(O.getAttribute("y"));D.translate(T,ee)}if(O.hasAttribute("transform")){const T=O.getAttribute("transform").split(")");for(let ee=T.length-1;ee>=0;ee--){const ce=T[ee].trim();if(ce==="")continue;const X=ce.indexOf("("),he=ce.length;if(X>0&&X<he){const P=ce.slice(0,X),ie=p(ce.slice(X+1));switch(C.identity(),P){case"translate":if(ie.length>=1){const z=ie[0];let Y=0;ie.length>=2&&(Y=ie[1]),C.translate(z,Y)}break;case"rotate":if(ie.length>=1){let z=0,Y=0,j=0;z=ie[0]*Math.PI/180,ie.length>=3&&(Y=ie[1],j=ie[2]),$.makeTranslation(-Y,-j),K.makeRotation(z),B.multiplyMatrices(K,$),$.makeTranslation(Y,j),C.multiplyMatrices($,B)}break;case"scale":if(ie.length>=1){const z=ie[0];let Y=z;ie.length>=2&&(Y=ie[1]),C.scale(z,Y)}break;case"skewX":ie.length===1&&C.set(1,Math.tan(ie[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":ie.length===1&&C.set(1,0,0,Math.tan(ie[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":ie.length===6&&C.set(ie[0],ie[2],ie[4],ie[1],ie[3],ie[5],0,0,1);break}}D.premultiply(C)}}return D}function E(O,D){function C(X){le.set(X.x,X.y,1).applyMatrix3(D),X.set(le.x,le.y)}function T(X){const he=X.xRadius,P=X.yRadius,ie=Math.cos(X.aRotation),z=Math.sin(X.aRotation),Y=new I(he*ie,he*z,0),j=new I(-P*z,P*ie,0),pe=Y.applyMatrix3(D),F=j.applyMatrix3(D),x=q.set(pe.x,F.x,0,pe.y,F.y,0,0,0,1),S=$.copy(x).invert(),ve=K.copy(S).transpose().multiply(S).elements,ue=V(ve[0],ve[1],ve[4]),Te=Math.sqrt(ue.rt1),_e=Math.sqrt(ue.rt2);if(X.xRadius=1/Te,X.yRadius=1/_e,X.aRotation=Math.atan2(ue.sn,ue.cs),!((X.aEndAngle-X.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Ne=$.set(Te,0,0,0,_e,0,0,0,1),Fe=K.set(ue.cs,ue.sn,0,-ue.sn,ue.cs,0,0,0,1),ye=Ne.multiply(Fe).multiply(x),Qe=qe=>{const{x:ze,y:De}=new I(Math.cos(qe),Math.sin(qe),0).applyMatrix3(ye);return Math.atan2(De,ze)};X.aStartAngle=Qe(X.aStartAngle),X.aEndAngle=Qe(X.aEndAngle),A(D)&&(X.aClockwise=!X.aClockwise)}}function ee(X){const he=M(D),P=w(D);X.xRadius*=he,X.yRadius*=P;const ie=he>Number.EPSILON?Math.atan2(D.elements[1],D.elements[0]):Math.atan2(-D.elements[3],D.elements[4]);X.aRotation+=ie,A(D)&&(X.aStartAngle*=-1,X.aEndAngle*=-1,X.aClockwise=!X.aClockwise)}const ce=O.subPaths;for(let X=0,he=ce.length;X<he;X++){const ie=ce[X].curves;for(let z=0;z<ie.length;z++){const Y=ie[z];Y.isLineCurve?(C(Y.v1),C(Y.v2)):Y.isCubicBezierCurve?(C(Y.v0),C(Y.v1),C(Y.v2),C(Y.v3)):Y.isQuadraticBezierCurve?(C(Y.v0),C(Y.v1),C(Y.v2)):Y.isEllipseCurve&&(Q.set(Y.aX,Y.aY),C(Q),Y.aX=Q.x,Y.aY=Q.y,U(D)?T(Y):ee(Y))}}}function A(O){const D=O.elements;return D[0]*D[4]-D[1]*D[3]<0}function U(O){const D=O.elements,C=D[0]*D[3]+D[1]*D[4];if(C===0)return!1;const T=M(O),ee=w(O);return Math.abs(C/(T*ee))>Number.EPSILON}function M(O){const D=O.elements;return Math.sqrt(D[0]*D[0]+D[1]*D[1])}function w(O){const D=O.elements;return Math.sqrt(D[3]*D[3]+D[4]*D[4])}function V(O,D,C){let T,ee,ce,X,he;const P=O+C,ie=O-C,z=Math.sqrt(ie*ie+4*D*D);return P>0?(T=.5*(P+z),he=1/T,ee=O*he*C-D*he*D):P<0?ee=.5*(P-z):(T=.5*z,ee=-.5*z),ie>0?ce=ie+z:ce=ie-z,Math.abs(ce)>2*Math.abs(D)?(he=-2*D/ce,X=1/Math.sqrt(1+he*he),ce=he*X):Math.abs(D)===0?(ce=1,X=0):(he=-.5*ce/D,ce=1/Math.sqrt(1+he*he),X=he*ce),ie>0&&(he=ce,ce=-X,X=he),{rt1:T,rt2:ee,cs:ce,sn:X}}const W=[],oe={},k=[],q=new He,$=new He,K=new He,B=new He,Q=new me,le=new I,de=new He,xe=new DOMParser().parseFromString(e,"image/svg+xml");return i(xe.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:W,xml:xe.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:i.ORIGIN,t:0};function r(y,p,h,_){const v=y.x,b=p.x,R=h.x,E=_.x,A=y.y,U=p.y,M=h.y,w=_.y,V=(E-R)*(A-M)-(w-M)*(v-R),W=(b-v)*(A-M)-(U-A)*(v-R),oe=(w-M)*(b-v)-(E-R)*(U-A),k=V/oe,q=W/oe;if(oe===0&&V!==0||k<=0||k>=1||q<0||q>1)return null;if(V===0&&oe===0){for(let $=0;$<2;$++)if(o($===0?h:_,y,p),s.loc==i.ORIGIN){const K=$===0?h:_;return{x:K.x,y:K.y,t:s.t}}else if(s.loc==i.BETWEEN){const K=+(v+s.t*(b-v)).toPrecision(10),B=+(A+s.t*(U-A)).toPrecision(10);return{x:K,y:B,t:s.t}}return null}else{for(let B=0;B<2;B++)if(o(B===0?h:_,y,p),s.loc==i.ORIGIN){const Q=B===0?h:_;return{x:Q.x,y:Q.y,t:s.t}}const $=+(v+k*(b-v)).toPrecision(10),K=+(A+k*(U-A)).toPrecision(10);return{x:$,y:K,t:k}}}function o(y,p,h){const _=h.x-p.x,v=h.y-p.y,b=y.x-p.x,R=y.y-p.y,E=_*R-b*v;if(y.x===p.x&&y.y===p.y){s.loc=i.ORIGIN,s.t=0;return}if(y.x===h.x&&y.y===h.y){s.loc=i.DESTINATION,s.t=1;return}if(E<-Number.EPSILON){s.loc=i.LEFT;return}if(E>Number.EPSILON){s.loc=i.RIGHT;return}if(_*b<0||v*R<0){s.loc=i.BEHIND;return}if(Math.sqrt(_*_+v*v)<Math.sqrt(b*b+R*R)){s.loc=i.BEYOND;return}let A;_!==0?A=b/_:A=R/v,s.loc=i.BETWEEN,s.t=A}function a(y,p){const h=[],_=[];for(let v=1;v<y.length;v++){const b=y[v-1],R=y[v];for(let E=1;E<p.length;E++){const A=p[E-1],U=p[E],M=r(b,R,A,U);M!==null&&h.find(w=>w.t<=M.t+Number.EPSILON&&w.t>=M.t-Number.EPSILON)===void 0&&(h.push(M),_.push(new me(M.x,M.y)))}}return _}function l(y,p,h){const _=new me;p.getCenter(_);const v=[];return h.forEach(b=>{b.boundingBox.containsPoint(_)&&a(y,b.points).forEach(E=>{v.push({identifier:b.identifier,isCW:b.isCW,point:E})})}),v.sort((b,R)=>b.point.x-R.point.x),v}function c(y,p,h,_,v){(v==null||v==="")&&(v="nonzero");const b=new me;y.boundingBox.getCenter(b);const R=[new me(h,b.y),new me(_,b.y)],E=l(R,y.boundingBox,p);E.sort((W,oe)=>W.point.x-oe.point.x);const A=[],U=[];E.forEach(W=>{W.identifier===y.identifier?A.push(W):U.push(W)});const M=A[0].point.x,w=[];let V=0;for(;V<U.length&&U[V].point.x<M;)w.length>0&&w[w.length-1]===U[V].identifier?w.pop():w.push(U[V].identifier),V++;if(w.push(y.identifier),v==="evenodd"){const W=w.length%2===0,oe=w[w.length-2];return{identifier:y.identifier,isHole:W,for:oe}}else if(v==="nonzero"){let W=!0,oe=null,k=null;for(let q=0;q<w.length;q++){const $=w[q];W?(k=p[$].isCW,W=!1,oe=$):k!==p[$].isCW&&(k=p[$].isCW,W=!0)}return{identifier:y.identifier,isHole:W,for:oe}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let u=999999999,d=-999999999,f=e.subPaths.map(y=>{const p=y.getPoints();let h=-999999999,_=999999999,v=-999999999,b=999999999;for(let R=0;R<p.length;R++){const E=p[R];E.y>h&&(h=E.y),E.y<_&&(_=E.y),E.x>v&&(v=E.x),E.x<b&&(b=E.x)}return d<=v&&(d=v+1),u>=b&&(u=b-1),{curves:y.curves,points:p,isCW:fi.isClockWise(p),identifier:-1,boundingBox:new rT(new me(b,_),new me(v,h))}});f=f.filter(y=>y.points.length>1);for(let y=0;y<f.length;y++)f[y].identifier=y;const m=f.map(y=>c(y,f,u,d,e.userData?e.userData.style.fillRule:void 0)),g=[];return f.forEach(y=>{if(!m[y.identifier].isHole){const h=new Vs;h.curves=y.curves,m.filter(v=>v.isHole&&v.for===y.identifier).forEach(v=>{const b=f[v.identifier],R=new $r;R.curves=b.curves,h.holes.push(R)}),g.push(h)}}),g}static getStrokeStyle(e,t,i,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",i=i!==void 0?i:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:i,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,i,s){const r=[],o=[],a=[];if(Rc.pointsToStrokeWithBuffers(e,t,i,s,r,o,a)===0)return null;const l=new vt;return l.setAttribute("position",new et(r,3)),l.setAttribute("normal",new et(o,3)),l.setAttribute("uv",new et(a,2)),l}static pointsToStrokeWithBuffers(e,t,i,s,r,o,a,l){const c=new me,u=new me,d=new me,f=new me,m=new me,g=new me,y=new me,p=new me,h=new me,_=new me,v=new me,b=new me,R=new me,E=new me,A=new me,U=new me,M=new me;i=i!==void 0?i:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,e=ie(e);const w=e.length;if(w<2)return 0;const V=e[0].equals(e[w-1]);let W,oe=e[0],k;const q=t.strokeWidth/2,$=1/(w-1);let K=0,B,Q,le,de,xe=!1,te=0,O=l*3,D=l*2;C(e[0],e[1],c).multiplyScalar(q),p.copy(e[0]).sub(c),h.copy(e[0]).add(c),_.copy(p),v.copy(h);for(let z=1;z<w;z++){W=e[z],z===w-1?V?k=e[1]:k=void 0:k=e[z+1];const Y=c;if(C(oe,W,Y),d.copy(Y).multiplyScalar(q),b.copy(W).sub(d),R.copy(W).add(d),B=K+$,Q=!1,k!==void 0){C(W,k,u),d.copy(u).multiplyScalar(q),E.copy(W).sub(d),A.copy(W).add(d),le=!0,d.subVectors(k,oe),Y.dot(d)<0&&(le=!1),z===1&&(xe=le),d.subVectors(k,W),d.normalize();const j=Math.abs(Y.dot(d));if(j>Number.EPSILON){const pe=q/j;d.multiplyScalar(-pe),f.subVectors(W,oe),m.copy(f).setLength(pe).add(d),U.copy(m).negate();const F=m.length(),x=f.length();f.divideScalar(x),g.subVectors(k,W);const S=g.length();switch(g.divideScalar(S),f.dot(U)<x&&g.dot(U)<S&&(Q=!0),M.copy(m).add(W),U.add(W),de=!1,Q?le?(A.copy(U),R.copy(U)):(E.copy(U),b.copy(U)):ce(),t.strokeLineJoin){case"bevel":X(le,Q,B);break;case"round":he(le,Q),le?ee(W,b,E,B,0):ee(W,A,R,B,1);break;case"miter":case"miter-clip":default:const G=q*t.strokeMiterLimit/F;if(G<1)if(t.strokeLineJoin!=="miter-clip"){X(le,Q,B);break}else he(le,Q),le?(g.subVectors(M,b).multiplyScalar(G).add(b),y.subVectors(M,E).multiplyScalar(G).add(E),T(b,B,0),T(g,B,0),T(W,B,.5),T(W,B,.5),T(g,B,0),T(y,B,0),T(W,B,.5),T(y,B,0),T(E,B,0)):(g.subVectors(M,R).multiplyScalar(G).add(R),y.subVectors(M,A).multiplyScalar(G).add(A),T(R,B,1),T(g,B,1),T(W,B,.5),T(W,B,.5),T(g,B,1),T(y,B,1),T(W,B,.5),T(y,B,1),T(A,B,1));else Q?(le?(T(h,K,1),T(p,K,0),T(M,B,0),T(h,K,1),T(M,B,0),T(U,B,1)):(T(h,K,1),T(p,K,0),T(M,B,1),T(p,K,0),T(U,B,0),T(M,B,1)),le?E.copy(M):A.copy(M)):le?(T(b,B,0),T(M,B,0),T(W,B,.5),T(W,B,.5),T(M,B,0),T(E,B,0)):(T(R,B,1),T(M,B,1),T(W,B,.5),T(W,B,.5),T(M,B,1),T(A,B,1)),de=!0;break}}else ce()}else ce();!V&&z===w-1&&P(e[0],_,v,le,!0,K),K=B,oe=W,p.copy(E),h.copy(A)}if(!V)P(W,b,R,le,!1,B);else if(Q&&r){let z=M,Y=U;xe!==le&&(z=U,Y=M),le?(de||xe)&&(Y.toArray(r,0*3),Y.toArray(r,3*3),de&&z.toArray(r,1*3)):(de||!xe)&&(Y.toArray(r,1*3),Y.toArray(r,3*3),de&&z.toArray(r,0*3))}return te;function C(z,Y,j){return j.subVectors(Y,z),j.set(-j.y,j.x).normalize()}function T(z,Y,j){r&&(r[O]=z.x,r[O+1]=z.y,r[O+2]=0,o&&(o[O]=0,o[O+1]=0,o[O+2]=1),O+=3,a&&(a[D]=Y,a[D+1]=j,D+=2)),te+=3}function ee(z,Y,j,pe,F){c.copy(Y).sub(z).normalize(),u.copy(j).sub(z).normalize();let x=Math.PI;const S=c.dot(u);Math.abs(S)<1&&(x=Math.abs(Math.acos(S))),x/=i,d.copy(Y);for(let G=0,ge=i-1;G<ge;G++)f.copy(d).rotateAround(z,x),T(d,pe,F),T(f,pe,F),T(z,pe,.5),d.copy(f);T(f,pe,F),T(j,pe,F),T(z,pe,.5)}function ce(){T(h,K,1),T(p,K,0),T(b,B,0),T(h,K,1),T(b,B,1),T(R,B,0)}function X(z,Y,j){Y?z?(T(h,K,1),T(p,K,0),T(b,B,0),T(h,K,1),T(b,B,0),T(U,B,1),T(b,j,0),T(E,j,0),T(U,j,.5)):(T(h,K,1),T(p,K,0),T(R,B,1),T(p,K,0),T(U,B,0),T(R,B,1),T(R,j,1),T(U,j,0),T(A,j,1)):z?(T(b,j,0),T(E,j,0),T(W,j,.5)):(T(R,j,1),T(A,j,0),T(W,j,.5))}function he(z,Y){Y&&(z?(T(h,K,1),T(p,K,0),T(b,B,0),T(h,K,1),T(b,B,0),T(U,B,1),T(b,K,0),T(W,B,.5),T(U,B,1),T(W,B,.5),T(E,K,0),T(U,B,1)):(T(h,K,1),T(p,K,0),T(R,B,1),T(p,K,0),T(U,B,0),T(R,B,1),T(R,K,1),T(U,B,0),T(W,B,.5),T(W,B,.5),T(U,B,0),T(A,K,1)))}function P(z,Y,j,pe,F,x){switch(t.strokeLineCap){case"round":F?ee(z,j,Y,x,.5):ee(z,Y,j,x,.5);break;case"square":if(F)c.subVectors(Y,z),u.set(c.y,-c.x),d.addVectors(c,u).add(z),f.subVectors(u,c).add(z),pe?(d.toArray(r,1*3),f.toArray(r,0*3),f.toArray(r,3*3)):(d.toArray(r,1*3),d.toArray(r,3*3),f.toArray(r,0*3));else{c.subVectors(j,z),u.set(c.y,-c.x),d.addVectors(c,u).add(z),f.subVectors(u,c).add(z);const S=r.length;pe?(d.toArray(r,S-1*3),f.toArray(r,S-2*3),f.toArray(r,S-4*3)):(f.toArray(r,S-2*3),d.toArray(r,S-1*3),f.toArray(r,S-4*3))}break}}function ie(z){let Y=!1;for(let pe=1,F=z.length-1;pe<F;pe++)if(z[pe].distanceTo(z[pe+1])<s){Y=!0;break}if(!Y)return z;const j=[];j.push(z[0]);for(let pe=1,F=z.length-1;pe<F;pe++)z[pe].distanceTo(z[pe+1])>=s&&j.push(z[pe]);return j.push(z[z.length-1]),j}}}const QP={[ne.PEAK]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-390Zm-132-53 55 37 77-39 77 39 53-35-40-79H386l-38 77ZM209-160h541L646-369l-83 55-83-41-83 41-85-56-103 210ZM80-80l234-475q10-20 29.5-32.5T386-600h54v-280h280l-40 80 40 80H520v120h50q23 0 42 12t30 32L880-80H80Z"/></svg>',[ne.CITY]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>',[ne.LANDSCAPE]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m40-240 240-320 180 240h300L560-586 460-454l-50-66 150-200 360 480H40Zm521-80Zm-361 0h160l-80-107-80 107Zm0 0h160-160Z"/></svg>',[ne.BEACH]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 530-374l56-56 254 254-56 56Zm-546-28q-60-60-89-135t-29-153q0-78 29-152t89-134q60-60 134.5-89.5T525-841q78 0 152.5 29.5T812-722L238-148Zm8-122 54-54q-16-21-30.5-43T243-411q-12-22-21-44t-16-43q-11 59-1.5 118T246-270Zm112-110 222-224q-43-33-86.5-53.5t-81.5-28q-38-7.5-68.5-2.5T296-666q-17 18-22 48.5t2.5 69q7.5 38.5 28 81.5t53.5 87Zm278-280 56-54q-53-32-112-42t-118 2q22 7 44 16t44 20.5q22 11.5 43.5 26T636-660Z"/></svg>'},Sy=[];let Us=null,Ps=null,vh=null;function My(n){vh&&(vh.visible=!!n)}const Fs=new Je,Tl=new At,Lg=new I,Pg=new I(1,1,1),Ig=new I(0,1,0),Vr=new Ae;function eI(){return new Zc(ht.ring.majorRadius,ht.ring.tubeRadius,10,48)}const wy={};function tI(){const n=new Rc,e=ht.symbol.size/960,t=ht.symbol.extrudeDepth/e;for(const[i,s]of Object.entries(QP)){const r=n.parse(s),o=[];for(const l of r.paths)o.push(...Rc.createShapes(l));const a=new Yh(o,{depth:t,bevelEnabled:!1});a.scale(1,-1,1),a.center(),a.scale(e,e,e),wy[i]=a}}function nI(){tI();const n=eI(),e=new ct;vh=e;const t={};for(const o of kn)t[o.type]=(t[o.type]||0)+1;const i=$d(new Gn({transparent:!0}));Yd(n,kn.length,ht.ring.opacity);const s=new tn(n,i,kn.length);s.frustumCulled=!1,e.add(s),Us=s;const r=$d(new ut({transparent:!0,flatShading:!0,side:$t}));Ps={};for(const o of Object.keys(t)){const a=wy[o];Yd(a,t[o],.95);const l=new tn(a,r,t[o]);l.frustumCulled=!1,e.add(l),Ps[o]={mesh:l,next:0}}for(let o=0;o<kn.length;o++){const a=kn[o],l=ht.colorsByType[a.type],u=xn(a.x,a.z)+ht.ring.hoverHeight,d=Ps[a.type],f=d.next++;Fs.makeTranslation(a.x,u,a.z),s.setMatrixAt(o,Fs),d.mesh.setMatrixAt(f,Fs),s.setColorAt(o,Vr.setHex(l.ring)),d.mesh.setColorAt(f,Vr.setHex(l.symbol)),Sy.push({poi:a,ringIndex:o,symbolMesh:d.mesh,symbolIndex:f,ringAlpha:n.attributes.instanceAlpha.array,symbolAlpha:d.mesh.geometry.attributes.instanceAlpha.array,x:a.x,y:u,z:a.z,spin:0,frozen:!1,wasInsideZone:!1,appliedActivated:null})}s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0;for(const o of Object.keys(Ps)){const a=Ps[o].mesh;a.instanceMatrix.needsUpdate=!0,a.instanceColor.needsUpdate=!0}return e}function iI(n,e){const t=e.x-n.x,i=e.y-n.y,s=e.z-n.z;return t*t+i*i+s*s<=ht.activation.radius*ht.activation.radius}function sI(){const n=a0(Lh()),e=J.oneShotTier|0;return n>e?(J.oneShotTier=n,n):0}function rI(n){const e=ht.rewardsByType[n.type];if(J.testMode){yg(n.name,e.punkte,e.gofios,0);return}const t=!!J.exploredPOIs[n.id];Hc(e.punkte);let i=0,s=0;t||(J.exploredPOIs[n.id]=!0,J.gofiosByIsland[n.island]=(J.gofiosByIsland[n.island]|0)+e.gofios,i=e.gofios,s=sI()),yg(n.name,e.punkte,i,s),Ut()}function oI(n,e){if(e)Us.setColorAt(n.ringIndex,Vr.setHex(ht.ring.colorActivated)),n.ringAlpha[n.ringIndex]=ht.ring.opacityActivated,n.symbolMesh.setColorAt(n.symbolIndex,Vr.setHex(ht.symbol.colorActivated)),n.symbolAlpha[n.symbolIndex]=.55;else{const t=ht.colorsByType[n.poi.type];Us.setColorAt(n.ringIndex,Vr.setHex(t.ring)),n.ringAlpha[n.ringIndex]=ht.ring.opacity,n.symbolMesh.setColorAt(n.symbolIndex,Vr.setHex(t.symbol)),n.symbolAlpha[n.symbolIndex]=.95}Us.instanceColor.needsUpdate=!0,Us.geometry.attributes.instanceAlpha.needsUpdate=!0,n.symbolMesh.instanceColor.needsUpdate=!0,n.symbolMesh.geometry.attributes.instanceAlpha.needsUpdate=!0,n.frozen=e}function aI(n,e){if(N.tutorial){mh();return}const t=e.position,i=dx(t);if(i!==J.currentIsland){if(J.currentIsland=i,!J.testMode&&!J.visitedIslands[i]){J.visitedIslands[i]=!0,J.obsidian=(J.obsidian|0)+Zl.islandDiscoveryDiamonds;const o=bt.find(a=>a.id===i);yP(o?o.name:i,Zl.islandDiscoveryDiamonds)}Ut()}let s=null,r=ht.hoverLabelRadius*ht.hoverLabelRadius;for(const o of Sy){const a=!J.testMode&&!!J.exploredPOIs[o.poi.id];a!==o.appliedActivated&&(oI(o,a),o.appliedActivated=a);const l=Math.atan2(t.x-o.x,t.z-o.z);Tl.setFromAxisAngle(Ig,l),Fs.compose(Lg.set(o.x,o.y,o.z),Tl,Pg),Us.setMatrixAt(o.ringIndex,Fs),o.frozen||(o.spin+=ht.symbol.rotRate*n),Tl.setFromAxisAngle(Ig,l+o.spin),Fs.compose(Lg.set(o.x,o.y,o.z),Tl,Pg),o.symbolMesh.setMatrixAt(o.symbolIndex,Fs);const c=iI(o,t);if(c&&!o.wasInsideZone&&rI(o.poi),o.wasInsideZone=c,J.exploredPOIs[o.poi.id]){const u=t.x-o.poi.x,d=t.z-o.poi.z,f=u*u+d*d;f<r&&(r=f,s=o.poi)}}Us.instanceMatrix.needsUpdate=!0;for(const o of Object.keys(Ps))Ps[o].mesh.instanceMatrix.needsUpdate=!0;s?SP(s.name):mh()}const wt={LAUNCH:0,NAV:1,RINGS:2,GREY_BOOST:3,THERMAL:4,RING_HIGH:5,RING_LOW:6,END:7},Wr=[{key:"tutorial.navLeft",test:n=>n.roll<=-.45,invert:!1},{key:"tutorial.navRight",test:n=>n.roll>=it.navThreshold,invert:!1},{key:"tutorial.navUp",test:n=>n.pitch>=it.navThreshold,invert:!0},{key:"tutorial.navDown",test:n=>n.pitch<=-.45,invert:!0}],Ci=document.getElementById("tutorial-layer"),Rl=document.getElementById("tutorial-banner"),Ng=document.getElementById("tutorial-text"),Dg=document.getElementById("tutorial-invert"),la=document.getElementById("tutorial-invert-toggle"),yo=document.getElementById("tutorial-skip"),Ho=document.getElementById("tutorial-flash"),Og=document.getElementById("tutorial-steer-hint"),Ii=document.getElementById("tutorial-end"),kg=document.getElementById("tutorial-end-go");let tr=!1,_n=wt.LAUNCH,As=null,Or=0,Yo=0,Ko=0,Xs=null;const Ji=new I,ls=new I(0,0,-1),xd=new I(1,0,0),_f=new I(0,0,-1),eo={pos:new I,quat:new At,state:"PRELAUNCH"};let yh="",Ey=null,zs=null,gt=[],pi=null,ca=null,Cc=[];const to={x:0,z:0,radius:it.thermal.radius,strength:it.thermal.strength,baseElevation:0},on=new I,Ug=new At,lI=new I(0,1,0),Is=new I(0,0,-1),Lr=new I(0,0,-1),cI=[85,175,300,420,500];function Ay(){return 3046806}function uI(){const n=new ct,e=new Zc(3.4,.2,10,40);gt=[];for(let t=0;t<4;t++){const i=new Gn({color:Ay(),transparent:!0,opacity:.95}),s=new tt(e,i);s.visible=!1,n.add(s),gt.push({mesh:s,mat:i,pos:new I,collected:!1,popT:1,forward:0})}return pi=dI(),pi.visible=!1,n.add(pi),n}function dI(){const n=new ct,e=it.thermal,t=gn.columnTop,i=new Gn({color:13625071,transparent:!0,opacity:.18,side:$t,depthWrite:!1}),s=new Bn(e.radius*1.05,e.radius*.55,t,24,1,!0);s.translate(0,t/2,0),n.add(new tt(s,i));const r=64,o=new Float32Array(r*3);Cc=[];for(let c=0;c<r;c++){const u=Math.random()*Math.PI*2,d=Math.sqrt(Math.random())*e.radius*.82;Cc.push({ux:Math.cos(u)*d,uz:Math.sin(u)*d,phase:Math.random()})}const a=new vt;a.setAttribute("position",new Pt(o,3));const l=new Z0({color:16777215,size:1.7,transparent:!0,opacity:.6,depthWrite:!1});return ca=new J0(a,l),n.add(ca),n}function hI(){zs||(zs=uI()),zs.parent||St.add(zs)}function Ty(){for(const n of gt)n.mesh.visible=!1;pi&&(pi.visible=!1)}function fI(n){let e=-1/0;for(const t of cI){const i=xn(Ji.x+n.x*t,Ji.z+n.z*t);i>e&&(e=i)}return e}function pI(){const n=Pe.waterLevel+it.corridorClearHeight,e=Math.max(1,it.corridorSearchSteps);let t=1/0;ls.copy(Is);for(let i=0;i<=e;i++){if(Lr.copy(Is).lerp(_f,i/e),Lr.lengthSq()<1e-4)continue;Lr.normalize();const s=fI(Lr);if(s<n){ls.copy(Lr);return}s<t&&(t=s,ls.copy(Lr))}}function mI(){Ji.copy(fe.position),on.set(0,0,-1).applyQuaternion(fe.quaternion),Is.set(on.x,0,on.z),Is.lengthSq()<1e-4&&Is.set(0,0,-1),Is.normalize(),Is.addScaledVector(_f,it.seawardBias).normalize(),pI(),xd.crossVectors(ls,Wd).normalize();const n=Ji.y,e=[it.ring1,it.ring2,it.ring3,it.ring4];for(let s=0;s<4;s++){const r=e[s];on.copy(Ji).addScaledVector(ls,r.forward).addScaledVector(xd,r.side);const o=xn(on.x,on.z),a=Math.max(o,Pe.waterLevel)+it.ringClearance,l=Math.max(n+r.dy,a);gt[s].pos.set(on.x,l,on.z),gt[s].mesh.position.copy(gt[s].pos),gt[s].forward=r.forward}const t=it.thermal;on.copy(Ji).addScaledVector(ls,t.forward).addScaledVector(xd,t.side);const i=Math.max(xn(on.x,on.z),Pe.waterLevel);to.x=on.x,to.z=on.z,to.baseElevation=i,pi.position.set(on.x,i,on.z)}function bf(){return(fe.position.x-Ji.x)*ls.x+(fe.position.z-Ji.z)*ls.z}function gI(n){for(const e of gt){if(!e.mesh.visible)continue;const t=Math.atan2(fe.position.x-e.pos.x,fe.position.z-e.pos.z);if(Ug.setFromAxisAngle(lI,t),e.mesh.quaternion.copy(Ug),e.popT<1){e.popT=Math.min(1,e.popT+n*2.2);const i=1+e.popT*.7;e.mesh.scale.setScalar(i),e.mat.opacity=.95*(1-e.popT),e.popT>=1&&(e.mesh.visible=!1)}}if(pi&&pi.visible&&ca){const e=ca.geometry.attributes.position.array,t=gn.columnTop;for(let i=0;i<Cc.length;i++){const s=Cc[i];s.phase+=n*.28,s.phase>=1&&(s.phase-=1),e[i*3]=s.ux,e[i*3+1]=s.phase*t,e[i*3+2]=s.uz}ca.geometry.attributes.position.needsUpdate=!0}}function js(n){const e=gt[n];e.collected=!1,e.popT=1,e.mesh.scale.setScalar(1),e.mat.color.setHex(Ay()),e.mat.opacity=.95,e.mesh.visible=!0}function Ry(n){const e=gt[n];e.collected=!1,e.popT=1,e.mesh.scale.setScalar(1),e.mat.color.setHex(8293522),e.mat.opacity=.4,e.mesh.visible=!0}function Cy(){Ng&&(Ng.textContent=yh?Ee(yh,Ey||void 0):"")}function ms(n,e=null){yh=n,Ey=e,Cy(),Rl&&(Rl.classList.remove("step-pop"),Rl.offsetWidth,Rl.classList.add("step-pop"))}function ru(n){Dg&&(Dg.hidden=!n,n&&la&&(la.checked=kv()))}function xh(n){Og&&Og.classList.toggle("show",!!n)}function vI(n){Ho&&(Ho.textContent=n,Ho.classList.remove("show"),Ho.offsetWidth,Ho.classList.add("show"))}function dr(n){eo.pos.copy(fe.position),eo.quat.copy(fe.quaternion),eo.state=n}function yI(){if(eo.state==="PRELAUNCH"){xf(As);return}fe.position.copy(eo.pos),fe.quaternion.copy(eo.quat),N.speed=it.airSpeed,N.flightState=Ge.FLYING,N.postLiftCooldown=it.resetGrace,N.greyActive=!1,N.oneShotActive=!1,nu()}function ou(){vI(Ee("tutorial.retry")),_n===wt.RINGS?(js(0),Ry(1),Lc()):_n===wt.RING_HIGH?js(2):_n===wt.RING_LOW&&js(3),yI()}function xI(){_n=wt.NAV,Or=0,Yo=0,dr("FLYING"),ms(Wr[0].key),ru(Wr[0].invert)}function _I(n){const e=cr();if(Yo=Wr[Or].test(e)?Yo+n:0,Yo>=it.navHold){if(Or++,Yo=0,Or>=Wr.length){bI();return}ms(Wr[Or].key),ru(Wr[Or].invert)}}function Lc(){const n=(gt[0].collected?1:0)+(gt[1].collected?1:0);ms("tutorial.rings",{collected:n,total:2})}function bI(){_n=wt.RINGS,ru(!1),N.speed=Math.max(N.speed,it.ringsEntrySpeed),dr("FLYING"),mI(),js(0),Ry(1),Lc()}function SI(){if(!gt[0].collected)Pc(0)&&(Ic(0),js(1),Lc());else if(!gt[1].collected&&Pc(1)){Ic(1),Lc(),MI();return}bf()>gt[1].forward+it.ringsOvershoot&&ou()}function MI(){_n=wt.GREY_BOOST,Ko=0,dr("FLYING"),yo&&(yo.hidden=!0),uf({brake:!0,boost:!1,oneShot:!0}),document.body.classList.add("tut-show-boost"),ms("tutorial.boost")}function wI(n){Ko=cr().boost?Ko+n:Math.max(0,Ko-n*.5),Ko>=it.boostHold&&EI()}function EI(){_n=wt.THERMAL,dr("FLYING"),pi.visible=!0,js(2),ms("tutorial.thermal")}function AI(){fe.position.y>=gt[2].pos.y-it.thermalReach&&TI()}function TI(){_n=wt.RING_HIGH,dr("FLYING"),ms("tutorial.ringHigh")}function RI(){if(!gt[2].collected&&Pc(2)){Ic(2),CI();return}bf()>gt[2].forward+it.highOvershoot&&ou()}function CI(){_n=wt.RING_LOW,dr("FLYING"),js(3),ms("tutorial.ringLow")}function LI(){if(!gt[3].collected&&Pc(3)){Ic(3),PI();return}bf()>gt[3].forward+it.highOvershoot&&ou()}function PI(){_n=wt.END,pi.visible=!1,N.paused=!0,Ii&&(Ii.classList.add("visible"),Ii.setAttribute("aria-hidden","false")),Xs=setTimeout(Ly,it.endCardMs)}function Ly(){Xs&&(clearTimeout(Xs),Xs=null),Ii&&(Ii.classList.remove("visible"),Ii.setAttribute("aria-hidden","true")),Iy()}function Pc(n){const e=gt[n],t=fe.position.x-e.pos.x,i=fe.position.y-e.pos.y,s=fe.position.z-e.pos.z;return t*t+i*i+s*s<=it.ringRadius*it.ringRadius}function Ic(n){gt[n].collected=!0,gt[n].popT=0}function Py(){if(tr)return;As=rt.find(e=>e.id===it.runwayId)??rt[0],As.activeHeading=As.heading;const n=AL(As);n&&(n.rotation.y=0),_f.set(0,0,-1).applyEuler(new Hn(0,As.activeHeading,0)),t2(),tr=!0,N.tutorial=!0,J.introPlayed=!0,St.fog=new Ta(Ye.sky,it.fog.start,it.fog.end),hI(),Ty(),My(!1),uy(!1),un.indexOf(to)<0&&un.push(to),uf({brake:!0,boost:!0,oneShot:!0}),document.body.classList.add("tut-hide-actions"),document.body.classList.remove("tut-show-boost"),xf(As),_n=wt.LAUNCH,dr("PRELAUNCH"),Ci&&(Ci.classList.add("visible"),Ci.classList.remove("menu-hidden"),Ci.setAttribute("aria-hidden","false")),yo&&(yo.hidden=!1),ms("tutorial.launch"),ru(!1),N.paused=!1}function II(){return vT()?!1:(Py(),!0)}function Iy(){if(!tr)return;tr=!1,N.tutorial=!1,N.paused=!1,St.fog=new Ta(Ye.sky,Pe.fogStart,Pe.fogEnd),Ty(),My(!0),uy(!0),zs&&zs.parent&&St.remove(zs);const n=un.indexOf(to);n>=0&&un.splice(n,1),uf({brake:!1,boost:!1,oneShot:!1}),document.body.classList.remove("tut-hide-actions","tut-show-boost"),Ci&&(Ci.classList.remove("visible","menu-hidden"),Ci.setAttribute("aria-hidden","true")),xh(!1),yT(!0)}function Ny(){tr&&(Xs&&(clearTimeout(Xs),Xs=null),Ii&&(Ii.classList.remove("visible"),Ii.setAttribute("aria-hidden","true")),Iy())}function NI(n){if(!tr)return;const e=N.paused;if(Ci&&Ci.classList.toggle("menu-hidden",e),e){xh(!1);return}switch(xh(_n===wt.LAUNCH||_n===wt.NAV),_n){case wt.LAUNCH:N.flightState===Ge.FLYING&&xI();break;case wt.NAV:_I(n);break;case wt.RINGS:SI();break;case wt.GREY_BOOST:wI(n);break;case wt.THERMAL:AI();break;case wt.RING_HIGH:RI();break;case wt.RING_LOW:LI();break}gI(n)}OP(ou);la&&la.addEventListener("change",()=>pc(la.checked));yo&&yo.addEventListener("click",Ny);kg&&kg.addEventListener("click",Ly);Qc(()=>{tr&&Cy()});const DI="3.0.0",OI=8,Fg={version:DI,build:OI},kI={TFN:"tenerife",TFS:"tenerife",GMZ:"gomera",SPC:"palma",VDE:"hierro",LPA:"gc",FUE:"fuerte",ACE:"lanza",GRAC:"graciosa"},nn=document.getElementById("welcome-overlay"),zg=document.getElementById("welcome-start-sub"),Bg=document.getElementById("pause-btn"),ei=document.getElementById("pause-overlay"),Hg=document.getElementById("pause-resume"),Gg=document.getElementById("pause-home"),UI=document.getElementById("crash"),Vg=document.getElementById("welcome-version");Vg&&(Vg.textContent=`v${Fg.version} · Build ${Fg.build} · Swiss Innovation Studios`);const vn=document.getElementById("levels-overlay"),Zo=document.getElementById("levels-map"),no=document.getElementById("levels-markers"),Wg=document.getElementById("levels-title"),Cl=document.getElementById("levels-hint"),Go=768,Ll=320,qg=1.08;let Xg=null,Pl=null;function Dy(){if(Pl)return Pl;let n=1/0,e=-1/0,t=1/0,i=-1/0;for(const l of bt)n=Math.min(n,l.x-l.bboxRadius),e=Math.max(e,l.x+l.bboxRadius),t=Math.min(t,l.z-l.bboxRadius),i=Math.max(i,l.z+l.bboxRadius);const s=(n+e)/2,r=(t+i)/2,o=(e-n)/2*qg,a=(i-t)/2*qg;return Pl={cx:s,cz:r,hw:o,hh:a},Pl}function Oy(){return nn?.classList.contains("visible")===!0}function jg(){return ei?.classList.contains("visible")===!0}function Na(){nn&&(Ny(),Jo(),N.paused=!0,Fy(),nn.classList.add("visible"),nn.setAttribute("aria-hidden","false"))}function _h(){nn&&(nn.classList.remove("visible"),nn.setAttribute("aria-hidden","true"),Uy()||(N.paused=!1))}function bh(){ei&&(N.paused=!0,ei.classList.add("visible"),ei.setAttribute("aria-hidden","false"))}function Jo(){ei&&ei.classList.contains("visible")&&(ei.classList.remove("visible"),ei.setAttribute("aria-hidden","true"),Uy()||(N.paused=!1))}function ky(){N.paused||N.flightState!==Ge.CRASHED&&(N.tutorial||bh())}function Uy(){return nn?.classList.contains("visible")||vn?.classList.contains("visible")||document.getElementById("hangar-overlay")?.classList.contains("visible")||document.getElementById("shop-overlay")?.classList.contains("visible")||document.getElementById("settings-overlay")?.classList.contains("visible")}function Fy(){if(!zg)return;const n=J.checkpointRunwayId;zg.textContent=n?Ee("welcome.checkpoint",{id:n}):Ee("welcome.firstFlight")}function FI(){vn&&(nn?.classList.remove("visible"),nn?.setAttribute("aria-hidden","true"),vn.classList.add("visible"),vn.setAttribute("aria-hidden","false"),zy())}function $g(){vn&&(vn.classList.remove("visible"),vn.setAttribute("aria-hidden","true"),Na())}function zy(){if(!Zo)return;Wg&&(Wg.textContent=Ee("levels.archTitle"));const n=zI(),e=bt.map(t=>n[t.id]?"1":"0").join("");Xg!==e&&(HI(n),Xg=e),WI(),qI(n),XI()}function zI(){const n={};for(const e of bt)n[e.id]=!1;for(const e of rt){if(!J.discoveredRunways[e.id])continue;const t=kI[e.id];t&&(n[t]=!0)}return n}function BI(n,e){let t=bt[0].id,i=1/0;for(const s of bt){const r=n-s.x,o=e-s.z,a=r*r+o*o;a<i&&(i=a,t=s.id)}return t}function HI(n){if(!Zo)return;Zo.width=Go,Zo.height=Ll;const e=Zo.getContext("2d"),t=e.createImageData(Go,Ll),{cx:i,cz:s,hw:r,hh:o}=Dy(),a=Pe.heightmap.metersPerUnit,l=Pe.waterLevel;for(let c=0;c<Ll;c++){const u=s+(c/(Ll-1)-.5)*2*o;for(let d=0;d<Go;d++){const f=i+(d/(Go-1)-.5)*2*r,m=Pa(f,u);let g,y,p;if(m<l+.05)g=52,y=92,p=118;else{const _=BI(f,u),v=m*a;n[_]?[g,y,p]=GI(v):g=y=p=VI(v)}const h=(c*Go+d)*4;t.data[h]=g,t.data[h+1]=y,t.data[h+2]=p,t.data[h+3]=255}}e.putImageData(t,0,0)}function GI(n){return n<80?[199,184,145]:n<600?[134,152,98]:n<1600?[157,138,110]:n<2400?[180,168,148]:n<3e3?[215,212,200]:[240,240,235]}function VI(n){return n<80?132:n<600?148:n<1600?162:n<2400?176:n<3e3?192:206}function By(n,e){const{cx:t,cz:i,hw:s,hh:r}=Dy();return{fracX:(n-t)/(2*s)+.5,fracY:(e-i)/(2*r)+.5}}function WI(){if(no){no.querySelectorAll(".levels-marker").forEach(n=>n.remove());for(const n of rt){const e=!!J.landedRunways[n.id],t=!!J.discoveredRunways[n.id],i=e?"landed":t?"discovered":"locked",{fracX:s,fracY:r}=By(n.x,n.z);if(s<0||s>1||r<0||r>1)continue;const o=document.createElement("button");o.type="button",o.className=`levels-marker levels-marker-${i}`,o.style.left=(s*100).toFixed(2)+"%",o.style.top=(r*100).toFixed(2)+"%",o.dataset.runwayId=n.id,o.disabled=!e;const a=i==="locked"?Ee("levels.markerLocked"):n.id;o.innerHTML=`
      <span class="levels-marker-dot"></span>
      <span class="levels-marker-label">${a}</span>
    `,e?(o.title=Ee("levels.tipStart",{id:n.id}),o.addEventListener("click",()=>jI(n.id))):t?o.title=Ee("levels.tipNotLanded",{id:n.id}):o.title=Ee("levels.tipUndiscovered"),no.appendChild(o)}}}function qI(n){if(no){no.querySelectorAll(".levels-island-label").forEach(e=>e.remove());for(const e of bt){if(!n[e.id])continue;const{fracX:t,fracY:i}=By(e.x,e.z);if(t<0||t>1||i<0||i>1)continue;const s=document.createElement("span");s.className="levels-island-label",s.textContent=e.name,s.style.left=(t*100).toFixed(2)+"%",s.style.top=(i*100).toFixed(2)+"%",no.appendChild(s)}}}function XI(){if(!Cl)return;const n=rt.filter(e=>J.landedRunways[e.id]).length;n===0?Cl.textContent=Ee("levels.hintNone"):n<rt.length?Cl.textContent=Ee("levels.hintProgress",{landed:n,total:rt.length}):Cl.textContent=Ee("levels.hintAll")}async function jI(n){vn?.classList.remove("visible"),vn?.setAttribute("aria-hidden","true"),nn?.classList.remove("visible"),nn?.setAttribute("aria-hidden","true"),N.flightState===Ge.CRASHED&&await Qs.onCrashRestart(),N.paused=!1,su({runwayId:n,forceIntro:!0})}async function $I(){N.flightState===Ge.CRASHED?(await Qs.onCrashRestart(),_h(),su()):_h()}function _d(n){nn?.classList.remove("visible"),nn?.setAttribute("aria-hidden","true"),go(n,{onClose:Na})}(function(){nn&&nn.addEventListener("click",t=>{const i=t.target.closest("[data-welcome-action]");if(!i)return;const s=i.dataset.welcomeAction;s==="start"?$I():s==="levels"?FI():s==="hangar"?_d("hangar"):s==="shop"?_d("shop"):s==="settings"&&_d("settings")}),vn&&vn.addEventListener("click",t=>{if(t.target===vn){$g();return}if(t.target.closest('[data-modal-close="levels"]')){$g();return}});const e=document.getElementById("settings-replay-tutorial");e&&e.addEventListener("click",()=>{for(const t of["settings-overlay","welcome-overlay","levels-overlay"]){const i=document.getElementById(t);i&&(i.classList.remove("visible"),i.setAttribute("aria-hidden","true"))}Py()}),Bg&&Bg.addEventListener("click",()=>{jg()?Jo():bh()}),Hg&&Hg.addEventListener("click",Jo),Gg&&Gg.addEventListener("click",Na),ei&&ei.addEventListener("click",t=>{t.target===ei&&Jo()}),document.addEventListener("keydown",t=>{if(t.key==="Escape"&&!document.getElementById("onboarding-overlay")?.classList.contains("visible")&&!document.getElementById("hangar-overlay")?.classList.contains("visible")&&!document.getElementById("shop-overlay")?.classList.contains("visible")&&!document.getElementById("settings-overlay")?.classList.contains("visible")&&!vn?.classList.contains("visible")){if(Oy()){_h(),N.flightState===Ge.CRASHED&&UI?.classList.add("visible");return}if(jg()){Jo();return}N.flightState!==Ge.CRASHED&&bh()}})})();Qc(()=>{Oy()&&Fy(),vn?.classList.contains("visible")&&zy()});const Aa=document.getElementById("onboarding-overlay"),Nc=document.getElementById("onboarding-lang-step"),Dc=document.getElementById("onboarding-story-step"),YI=document.getElementById("onboarding-langs"),Yg=document.getElementById("onboarding-story-text"),bd=document.getElementById("onboarding-dots"),Oc=document.getElementById("onboarding-next");let io=0,Sh=null;function Hy(){const n=Ee("onboarding.story");return Array.isArray(n)?n:[]}function KI(n){if(Sh=typeof n=="function"?n:()=>{},!Aa||mT()){Sh();return}ZI()}function ZI(){N.paused=!0,Aa.classList.add("visible"),Aa.setAttribute("aria-hidden","false"),JI()}function JI(){Dc&&(Dc.hidden=!0),Nc&&(Nc.hidden=!1),Lv(YI,{onPick:n=>{Rv(n),QI()}})}function QI(){Nc&&(Nc.hidden=!0),Dc&&(Dc.hidden=!1),io=0,Gy()}function Gy(){const n=Hy();if(Yg&&(Yg.textContent=n[io]||""),bd){bd.innerHTML="";for(let t=0;t<n.length;t++){const i=document.createElement("span");i.className="onboarding-dot"+(t===io?" active":""),bd.appendChild(i)}}const e=io>=n.length-1;Oc&&(Oc.textContent=Ee(e?"onboarding.begin":"onboarding.next"))}function e3(){io<Hy().length-1?(io++,Gy()):t3()}function t3(){gT(!0),Aa.classList.remove("visible"),Aa.setAttribute("aria-hidden","true"),Sh()}Oc&&Oc.addEventListener("click",e3);const Mo=new I(0,1,0);function kc(n,e){for(const t of rt){const i=n-t.x,s=e-t.z,r=Math.cos(t.heading),o=Math.sin(t.heading),a=i*r-s*o,l=i*o+s*r;if(Math.abs(a)<t.width/2+Kl.vegClearSide&&Math.abs(l)<t.length/2+Kl.vegClearEnd)return!0}return!1}const Pr=8;function n3(n,e,t){const i=Tn(n+Pr,e),s=Tn(n-Pr,e),r=Tn(n,e+Pr),o=Tn(n,e-Pr);return t.gx=(i-s)/(2*Pr),t.gz=(r-o)/(2*Pr),t}function i3(){const e=bt.reduce((t,i)=>t+i.bboxRadius*i.bboxRadius,0);return bt.map(t=>{const i=t.bboxRadius*t.bboxRadius/e;return Math.max(8e3,Math.floor(Et.sampleCount*i))})}function s3(){const{treeDensity:n,shrubDensity:e,grassDensity:t,cropDensity:i,bareDensity:s,droughtShrubDensity:r,snowDensity:o,wetlandDensity:a,laurelMaxAltitude:l}=Et,c={};for(const y of bt)c[y.id]={pines:[],laurels:[],shrubs:[],grasses:[],crops:[],rocks:[],snow:[],wetlands:[],cliffs:[]};const u=Et.slopeThreshold,d=Et.cliffDensity,f=l*Pe.heightmap.elevationExaggeration,m={gx:0,gz:0};for(const y of ux){const p=c[y.island];if(!p)continue;const h=y.ringCount,_=y.ringRadius,v=1.4;for(let R=0;R<h;R++){const E=R/h*Math.PI*2+(Math.random()-.5)*.08,A=_*(.88+Math.random()*.24),U=y.x+Math.cos(E)*A,M=y.z+Math.sin(E)*A,w=xn(U,M);w<Pe.waterLevel+.5||kc(U,M)||p.cliffs.push({x:U,y:w,z:M,gx:Math.cos(E)*v,gz:Math.sin(E)*v})}const b=Math.floor(h*.4);for(let R=0;R<b;R++){const E=Math.random()*Math.PI*2,A=Math.sqrt(Math.random())*_*.75,U=y.x+Math.cos(E)*A,M=y.z+Math.sin(E)*A,w=xn(U,M);w<Pe.waterLevel+.5||p.rocks.push({x:U,y:w,z:M})}}const g=i3();for(let y=0;y<bt.length;y++){const p=bt[y],h=p.bboxRadius,_=g[y],v=c[p.id];for(let b=0;b<_;b++){const R=p.x+(Math.random()-.5)*2*h,E=p.z+(Math.random()-.5)*2*h,A=xn(R,E);if(A<Pe.waterLevel+.5||kc(R,E))continue;n3(R,E,m);const M=Math.hypot(m.gx,m.gz)>=u&&Math.random()<d;M&&v.cliffs.push({x:R,y:A,z:E,gx:m.gx,gz:m.gz});const w=ay(R,E);w===Lt.TREE&&Math.random()<n?A>=f?v.pines.push({x:R,y:A,z:E}):v.laurels.push({x:R,y:A,z:E}):w===Lt.SHRUB&&Math.random()<e?v.shrubs.push({x:R,y:A,z:E}):w===Lt.GRASS&&Math.random()<t?v.grasses.push({x:R,y:A,z:E}):w===Lt.CROP&&Math.random()<i?v.crops.push({x:R,y:A,z:E}):w===Lt.BARE?(!M&&Math.random()<s&&v.rocks.push({x:R,y:A,z:E}),Math.random()<r&&v.shrubs.push({x:R,y:A,z:E})):w===Lt.SNOW&&Math.random()<o?v.snow.push({x:R,y:A,z:E}):w===Lt.WETLAND&&Math.random()<a&&v.wetlands.push({x:R,y:A,z:E})}}return c}function Vy(n,e,t,i,s,r,o,a,l){const c=new tn(e,i,n.length),u=new tn(t,s,n.length),d=new Je,f=new At,m=new I,g=new I;for(let p=0;p<n.length;p++){const{x:h,y:_,z:v}=n[p],b=r+Math.random()*(o-r);g.set(h,_-.3,v),m.set(b,b+Math.random()*.3,b),f.setFromAxisAngle(Mo,Math.random()*Math.PI*2),d.compose(g,f,m),c.setMatrixAt(p,d),u.setMatrixAt(p,d),Ia(h,_,v,a*b,l*b)}c.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0;const y=new ct;return y.add(c,u),y}function r3(n){const e=new Bn(.18,.26,1.6,5);e.translate(0,.8,0);const t=new ki(1,4.8,7);t.translate(0,3.8,0);const i=new ut({color:Ye.trunk,flatShading:!0}),s=new ut({color:Ye.pineCanopy,flatShading:!0}),r=Et.treeScale;return Vy(n,e,t,i,s,.75*r,1.3*r,1,6.2)}function o3(n){const e=new Bn(.22,.32,1,5);e.translate(0,.5,0);const t=new Ca(1.7,7,5);t.scale(1,.85,1),t.translate(0,2,0);const i=new ut({color:Ye.trunk,flatShading:!0}),s=new ut({color:Ye.laurelCanopy,flatShading:!0}),r=Et.treeScale;return Vy(n,e,t,i,s,.85*r,1.25*r,1.7,3.5)}function a3(n){const e=new ki(.7,1,5);e.translate(0,.5,0);const t=new ut({color:Ye.shrubBody,flatShading:!0}),i=new tn(e,t,n.length),s=new Je,r=new At,o=new I,a=new I;for(let l=0;l<n.length;l++){const{x:c,y:u,z:d}=n[l],f=.5+Math.random()*.6;a.set(c,u-.2,d),o.set(f+Math.random()*.2,f,f+Math.random()*.2),r.setFromAxisAngle(Mo,Math.random()*Math.PI*2),s.compose(a,r,o),i.setMatrixAt(l,s),Ia(c,u,d,.85*f,1*f)}return i.instanceMatrix.needsUpdate=!0,i}function l3(n){const e=new ki(.35,.55,4);e.translate(0,.25,0);const t=new ut({color:16777215,flatShading:!0}),i=new tn(e,t,n.length),s=new Je,r=new At,o=new I,a=new I,l=new Ae(Ye.grassGround),c=Et.grassTints,u=new Ae;for(let d=0;d<n.length;d++){const{x:f,y:m,z:g}=n[d],y=.6+Math.random()*.7;a.set(f,m-.1,g),o.set(y,y*(.8+Math.random()*.5),y),r.setFromAxisAngle(Mo,Math.random()*Math.PI*2),s.compose(a,r,o),i.setMatrixAt(d,s);const[p,h,_]=c[Math.random()*c.length|0];u.setRGB(l.r*p,l.g*h,l.b*_),i.setColorAt(d,u)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function c3(n){const e=new ki(.4,.75,4);e.translate(0,.35,0);const t=new ut({color:16777215,flatShading:!0}),i=new tn(e,t,n.length),s=new Je,r=new At,o=new I,a=new I,l=new Ae(Ye.cropGround),c=Et.grassTints,u=new Ae;for(let d=0;d<n.length;d++){const{x:f,y:m,z:g}=n[d],y=.7+Math.random()*.6;a.set(f,m-.12,g),o.set(y,y*(.9+Math.random()*.4),y),r.setFromAxisAngle(Mo,Math.random()*Math.PI*2),s.compose(a,r,o),i.setMatrixAt(d,s);const[p,h,_]=c[Math.random()*c.length|0];u.setRGB(l.r*p,l.g*h,l.b*_),i.setColorAt(d,u)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function u3(n){const e=new Ra(.5,0),t=new ut({color:16777215,flatShading:!0}),i=new tn(e,t,n.length),s=new Je,r=new At,o=new I,a=new I,l=new Hn,c=new Ae(Ye.rock),u=Et.rockTintsLow,d=Et.rockTintsMid,f=Et.rockTintsHigh,m=Et.rockZoneLowMax,g=Et.rockZoneHighMin,y=new Ae;for(let p=0;p<n.length;p++){const{x:h,y:_,z:v}=n[p];let b,R,E;_<m?(b=u,R=.3,E=1.5):_>g?(b=f,R=.4,E=2.5):(b=d,R=.5,E=3.5);const A=R+Math.random()*Math.random()*(E-R);a.set(h,_-A*.15,v),o.set(A*(.7+Math.random()*.6),A*(.55+Math.random()*.45),A*(.7+Math.random()*.6)),l.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),r.setFromEuler(l),s.compose(a,r,o),i.setMatrixAt(p,s);const[U,M,w]=b[Math.random()*b.length|0];y.setRGB(c.r*U,c.g*M,c.b*w),i.setColorAt(p,y),A>1.5&&Ia(h,_,v,A,A)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function d3(n){const e=new Ra(.6,0),t=new ut({color:16777215,flatShading:!0}),i=new tn(e,t,n.length),s=new Je,r=new At,o=new At,a=new I,l=new I,c=new I(0,1,0),u=new I,d=new Ae(Ye.rock),f=[[.5,.5,.55],[.4,.4,.45],[.62,.58,.55],[.55,.5,.48],[.45,.45,.5]],m=new Ae,[g,y]=Et.cliffHeightRange;for(let p=0;p<n.length;p++){const{x:h,y:_,z:v,gx:b,gz:R}=n[p];u.set(-b,1,-R).normalize();const E=g+Math.random()*(y-g),A=1.4+Math.random()*1.8;r.setFromUnitVectors(c,u),o.setFromAxisAngle(u,Math.random()*Math.PI*2),r.premultiply(o);const U=(.3+Math.random()*.1)*E;l.set(h-u.x*U,_-u.y*U,v-u.z*U),a.set(A*(.85+Math.random()*.4),E,A*(.85+Math.random()*.4)),s.compose(l,r,a),i.setMatrixAt(p,s);const[M,w,V]=f[Math.random()*f.length|0];m.setRGB(d.r*M,d.g*w,d.b*V),i.setColorAt(p,m)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function h3(n){const e=new Ra(.5,0),t=new ut({color:16777215,flatShading:!0}),i=new tn(e,t,n.length),s=new Je,r=new At,o=new I,a=new I,l=new Hn,c=new Ae;for(let u=0;u<n.length;u++){const{x:d,y:f,z:m}=n[u],g=.4+Math.random()*.9;a.set(d,f-.05,m),o.set(g*(.9+Math.random()*.3),g*(.25+Math.random()*.2),g*(.9+Math.random()*.3)),l.set(0,Math.random()*Math.PI*2,0),r.setFromEuler(l),s.compose(a,r,o),i.setMatrixAt(u,s);const y=.93+Math.random()*.07;c.setRGB(y,y,y),i.setColorAt(u,c)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function f3(n){const e=new en(1,.04,1);e.translate(0,.02,0);const t=new ut({color:16777215,flatShading:!0}),i=new tn(e,t,n.length),s=new Je,r=new At,o=new I,a=new I,l=new Ae,c=[[1.05,1.1,1.15],[1.15,1.15,1.2],[.95,1,1.05],[1.1,1.05,.95]];for(let u=0;u<n.length;u++){const{x:d,y:f,z:m}=n[u],g=1+Math.random()*.8;a.set(d,f+.05,m),o.set(g*(.9+Math.random()*.4),1,g*(.9+Math.random()*.4)),r.setFromAxisAngle(Mo,Math.random()*Math.PI*2),s.compose(a,r,o),i.setMatrixAt(u,s);const[y,p,h]=c[Math.random()*c.length|0];l.setRGB(.92*y,.94*p,.96*h),i.setColorAt(u,l)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function p3(n){const{clusterScaleMin:e,clusterScaleMax:t}=Et.urban,i=Math.min(1,Math.pow(n/50,.4));return e+i*(t-e)}function m3(){const n=U2(),{churchClusterPixels:e,housesPerPixel:t,housesMin:i,housesMax:s,houseMinSpacing:r,pixelJitter:o}=Et.urban,a=[],l=[],c=r*r;for(const u of n){const d=Math.max(i,Math.min(s,Math.round(u.pixelCount*t))),f=p3(u.pixelCount),m=[];let g=0;const y=d*14;for(;m.length<d&&g<y;){g++;const p=u.pixels[Math.random()*u.pixels.length|0],h=p.x+(Math.random()-.5)*o,_=p.z+(Math.random()-.5)*o;let v=!0;for(const R of m){const E=R.x-h,A=R.z-_;if(E*E+A*A<c){v=!1;break}}if(!v)continue;const b=xn(h,_);b<Pe.waterLevel+.5||kc(h,_)||m.push({x:h,y:b,z:_,scale:f})}if(a.push(...m),u.pixelCount>=e){const p=u.centerX,h=u.centerZ,_=xn(p,h);_>=Pe.waterLevel+.5&&!kc(p,h)&&l.push({x:p,y:_,z:h,scale:f})}}return{houses:a,churches:l}}function g3(n){const e=new en(1.4,1,1.6);e.translate(0,.5,0);const t=new ki(1.15,.75,4);t.rotateY(Math.PI/4),t.translate(0,1.37,0);const i=new ut({color:Ye.houseWall,flatShading:!0}),s=new ut({color:16777215,flatShading:!0}),r=new tn(e,i,n.length),o=new tn(t,s,n.length),a=new Je,l=new At,c=new I,u=new I,d=new Ae(Ye.houseRoof),f=Et.roofTints,m=new Ae;for(let y=0;y<n.length;y++){const{x:p,y:h,z:_,scale:v}=n[y],b=v*(.85+Math.random()*.3),R=v*(.8+Math.random()*.35),E=v*(.85+Math.random()*.3);u.set(p,h,_),c.set(b,R,E);const A=Math.random()*8|0;l.setFromAxisAngle(Mo,A*Math.PI/4),a.compose(u,l,c),r.setMatrixAt(y,a),o.setMatrixAt(y,a);const[U,M,w]=f[Math.random()*f.length|0];m.setRGB(d.r*U,d.g*M,d.b*w),o.setColorAt(y,m),Ia(p,h,_,.85*v,1.75*v)}r.instanceMatrix.needsUpdate=!0,o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0;const g=new ct;return g.add(r,o),g}function v3(){const n=new ut({color:Ye.houseWall,flatShading:!0}),e=new ut({color:Ye.houseRoof,flatShading:!0}),t=new tt(new en(1.6,1.2,2.6),n);t.position.y=.6;const i=new tt(new ki(1.4,.7,4),e);i.rotation.y=Math.PI/4,i.position.y=1.55;const s=new tt(new en(.75,2.4,.75),n);s.position.set(0,1.2,-1.65);const r=new tt(new ki(.5,1.05,4),e);r.rotation.y=Math.PI/4,r.position.set(0,2.95,-1.65);const o=new ct;return o.add(t,i,s,r),o}function y3(n){const e=v3(),t=new ct;for(const{x:i,y:s,z:r,scale:o}of n){const a=e.clone();a.position.set(i,s,r);const l=o*(.95+Math.random()*.2);a.scale.set(l,l,l),a.rotation.y=Math.random()*Math.PI*2,t.add(a),Ia(i,s,r,1.9*l,3.5*l)}return t}const Mh=[],x3=400;function _3(n,e){const t=new I(e.x,60,e.z),i=e.bboxRadius*1.4+50;return n.traverse(s=>{(s.isInstancedMesh||s.isMesh)&&(s.frustumCulled=!0,s.boundingSphere=new ps(t,i))}),{center:t,radius:i}}function b3(){const n=s3(),e=m3(),t=new ct,i={pines:0,laurels:0,shrubs:0,grasses:0,crops:0,rocks:0,cliffs:0,snow:0,wetlands:0};for(const s of bt){const r=n[s.id];if(!r)continue;const o=new ct;o.name=`vegetation:${s.id}`,r.pines.length&&(o.add(r3(r.pines)),i.pines+=r.pines.length),r.laurels.length&&(o.add(o3(r.laurels)),i.laurels+=r.laurels.length),r.shrubs.length&&(o.add(a3(r.shrubs)),i.shrubs+=r.shrubs.length),r.grasses.length&&(o.add(l3(r.grasses)),i.grasses+=r.grasses.length),r.crops.length&&(o.add(c3(r.crops)),i.crops+=r.crops.length),r.rocks.length&&(o.add(u3(r.rocks)),i.rocks+=r.rocks.length),r.cliffs.length&&(o.add(d3(r.cliffs)),i.cliffs+=r.cliffs.length),r.snow.length&&(o.add(h3(r.snow)),i.snow+=r.snow.length),r.wetlands.length&&(o.add(f3(r.wetlands)),i.wetlands+=r.wetlands.length);const a=_3(o,s);Mh.push({group:o,center:a.center,radius:a.radius}),t.add(o)}return e.houses.length&&t.add(g3(e.houses)),e.churches.length&&t.add(y3(e.churches)),console.log(`vegetation: ${i.pines} pines, ${i.laurels} laurels, ${i.shrubs} shrubs, ${i.grasses} grass tufts, ${i.crops} crops, ${i.rocks} rocks, ${i.cliffs} cliffs, ${i.snow} snow, ${i.wetlands} salinas, ${e.houses.length} houses, ${e.churches.length} churches`),t}function S3(n,e){if(!e){for(const i of Mh)i.group.visible=!0;return}const t=Pe.fogEnd+x3;for(const i of Mh)i.group.visible=n.position.distanceTo(i.center)-i.radius<t}const Uc=document.getElementById("island-compass"),Sd=Uc?.querySelector(".compass-track"),Il=document.getElementById("island-name");let Kg=null;const wh=Math.PI/2,Zg=6,M3=400,w3=2,Fc=7,E3=8,A3=6.2,T3=12;let Wy=560;const qy=new Map;let qt=null;const Md=new I;function R3(){if(!Sd)return;for(const e of bt){const t=document.createElement("div");t.className="compass-marker"+(e.playable?"":" unreachable"),t.dataset.island=e.id,t.innerHTML=`
      <span class="compass-name">${e.name}</span>
      <span class="compass-dist"></span>
    `,Sd.appendChild(t),qy.set(e.id,{el:t,dist:t.querySelector(".compass-dist"),lastLeft:null,lastDist:null,lastHidden:null})}const n=document.createElement("div");n.className="compass-marker runway-hint hidden",n.innerHTML=`
    <span class="compass-name"></span>
    <span class="compass-dist"></span>
  `,Sd.appendChild(n),qt={el:n,name:n.querySelector(".compass-name"),dist:n.querySelector(".compass-dist"),lastLeft:null,lastDist:null,lastName:null,lastHidden:!0},Jg(),window.addEventListener("resize",Jg)}function Nl(n,e){if(!qt)return;if(!e){qt.lastHidden||(qt.el.classList.add("hidden"),qt.lastHidden=!0);return}const t=Pe.heightmap.metersPerUnit,i=Xy(n),s=e.x-n.position.x,r=e.z-n.position.z,o=Math.sqrt(s*s+r*r)*t/1e3,a=Math.atan2(s,-r);let c=(jy(a-i)/wh*.5+.5)*100;c=Math.max(Fc,Math.min(100-Fc,c)),qt.lastHidden&&(qt.el.classList.remove("hidden"),qt.lastHidden=!1),e.id!==qt.lastName&&(qt.name.textContent=e.id,qt.lastName=e.id);const u=c.toFixed(1)+"%";u!==qt.lastLeft&&(qt.el.style.left=u,qt.lastLeft=u);const d=o<10?o.toFixed(1)+" km":Math.round(o)+" km";d!==qt.lastDist&&(qt.dist.textContent=d,qt.lastDist=d)}function Xy(n){return Md.set(0,0,-1).applyQuaternion(n.quaternion),Math.atan2(Md.x,-Md.z)}function jy(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const Vo=[],Ht=[];function Jg(){if(!Uc)return;const n=Uc.getBoundingClientRect().width;n>0&&(Wy=n)}function C3(n){if(!Il)return;const e=n?n.name:"";e!==Kg&&(Kg=e,e?(Il.textContent=e,Il.classList.add("show")):Il.classList.remove("show"))}function L3(n){if(!Uc)return;const e=Xy(n),t=Pe.heightmap.metersPerUnit,i=gf(n.position);C3(i),Vo.length=0;for(const s of bt){const r=qy.get(s.id);if(!r)continue;const o=s.x-n.position.x,a=s.z-n.position.z,c=Math.sqrt(o*o+a*a)*t/1e3,u=Math.max(0,c-s.bboxRadius*t/1e3),d=Math.atan2(o,-a),f=jy(d-e);if(i&&s.id===i.id||Math.abs(f)>wh||c<.5||c>M3){Vo.push({m:r,distKm:c,edgeKm:u,pct:0,halfPct:0,show:!1});continue}const g=(f/wh*.5+.5)*100,y=(s.name.length*A3+T3)/Wy*50;Vo.push({m:r,distKm:c,edgeKm:u,pct:g,halfPct:y,show:!0})}Ht.length=0;for(const s of Vo)s.show&&Ht.push(s);Ht.sort((s,r)=>s.distKm-r.distKm);for(let s=Zg;s<Ht.length;s++)Ht[s].show=!1;Ht.length=Math.min(Ht.length,Zg),Ht.sort((s,r)=>s.pct-r.pct);for(let s=0;s<E3;s++){for(let r=0;r<Ht.length-1;r++){const o=Ht[r],a=Ht[r+1],l=o.halfPct+a.halfPct+w3-(a.pct-o.pct);l>0&&(o.pct-=l/2,a.pct+=l/2)}Ht.length&&(Ht[0].pct=Math.max(Fc,Ht[0].pct),Ht[Ht.length-1].pct=Math.min(100-Fc,Ht[Ht.length-1].pct))}for(const s of Vo){const r=s.m,o=!s.show;if(o!==r.lastHidden&&(r.el.classList.toggle("hidden",o),r.lastHidden=o),o)continue;const a=s.pct.toFixed(1)+"%";a!==r.lastLeft&&(r.el.style.left=a,r.lastLeft=a);const l=s.edgeKm<10?s.edgeKm.toFixed(1)+" km":Math.round(s.edgeKm)+" km";l!==r.lastDist&&(r.dist.textContent=l,r.lastDist=l)}}const wd=new I;function P3(){for(const n in J.landedRunways)if(n!==Qi&&J.landedRunways[n])return!1;return!0}function I3(n){let e=null,t=1/0;for(const i of rt){if(i.id===Qi)continue;const s=n.x-i.x,r=n.z-i.z,o=s*s+r*r;o<t&&(t=o,e=i)}return e?{runway:e,dist:Math.sqrt(t)}:null}function N3(n){return wd.set(0,0,-1).applyQuaternion(n.quaternion),Math.atan2(-wd.x,-wd.z)}function D3(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}let Wo=null;function O3(n,e){if(!(N.flightState===Ge.FLYING)||N.paused||N.tutorial){Nl(e,null),md(),xg(),Wo=null;return}const i=e.position;if(P3()){const o=I3(i);o?(Nl(e,o.runway),o.dist<hu.hideDistance?md():o.dist<=hu.showDistance?Wo!==o.runway.id&&(xP(),Wo=o.runway.id):o.dist>hu.rearmDistance&&Wo===o.runway.id&&(Wo=null)):Nl(e,null)}else Nl(e,null),md();const s=N3(e);let r=!1;for(const o of rt){const a=i.x-o.x,l=i.z-o.z,c=Math.cos(o.heading),u=Math.sin(o.heading),d=a*c-l*u,f=a*u+l*c;if(Math.abs(d)>ka.corridorHalfWidth||Math.abs(f)>o.length*.5+ka.approachDepth)continue;const m=i.y-o.elevation;if(m<-2||m>ka.maxHeight)continue;if(Math.abs(D3(s-(o.activeHeading+Math.PI)))<=ka.coneTolerance){r=!0;break}}r?bP():xg()}const k3=[{id:"speed-tape",icon:"speed",range:120,pxPerUnit:4,tickStep:5,majorStep:20},{id:"alt-tape",icon:"height",range:500,pxPerUnit:1.6,tickStep:25,majorStep:100}],zc=[];let Qg=!1;const e0=document.getElementById("lift-indicator");let t0=null;function U3(){for(const n of k3){const e=document.getElementById(n.id);if(!e)continue;e.innerHTML="";const t=document.createElement("div");t.className="edge-tape-eyebrow";const i=document.createElement("span");i.className="material-symbols-outlined",i.textContent=n.icon,t.appendChild(i),e.appendChild(t);const s=document.createElement("div");s.className="edge-tape-window",e.appendChild(s);const r=document.createElement("div");r.className="edge-tape-track",r.style.height=n.range*n.pxPerUnit+"px",s.appendChild(r);for(let l=0;l<=n.range;l+=n.tickStep){const c=document.createElement("div"),u=l%n.majorStep===0;if(c.className="edge-tape-tick"+(u?" major":""),c.style.top=(n.range-l)*n.pxPerUnit+"px",u){const d=document.createElement("span");d.className="edge-tape-label",d.textContent=l,c.appendChild(d)}r.appendChild(c)}const o=document.createElement("div");o.className="edge-tape-center-line",s.appendChild(o);const a=document.createElement("div");a.className="edge-tape-current",a.textContent="0",s.appendChild(a),zc.push({cfg:n,win:s,track:r,current:a,lastDisplayed:NaN,winH:0})}Qg||(Qg=!0,window.addEventListener("resize",()=>{for(const n of zc)n.winH=0}))}function n0(n,e){const t=Math.max(0,Math.min(n.cfg.range,e));let i=n.winH;if(!i){if(i=n.win.clientHeight,i===0)return;n.winH=i}const s=i/2-(n.cfg.range-t)*n.cfg.pxPerUnit;n.track.style.transform=`translateY(${s}px)`;const r=Math.round(e);r!==n.lastDisplayed&&(n.current.textContent=r,n.lastDisplayed=r)}function F3(n){if(!n||zc.length===0)return;const e=xn(n.position.x,n.position.z),t=n.position.y-Math.max(e,Pe.waterLevel);for(const i of zc)i.cfg.id==="speed-tape"?n0(i,N.speed):i.cfg.id==="alt-tape"&&n0(i,t);if(e0){const i=!!N.inThermal;i!==t0&&(e0.classList.toggle("is-active",i),t0=i)}}const $y=[];(function(){for(const e of[-.95,.95]){const t=new Float32Array(ji.verts*3),i=new Float32Array(ji.verts*3);for(let a=0;a<ji.verts;a++){const l=a/(ji.verts-1);t[a*3]=e,t[a*3+1]=-.05,t[a*3+2]=.42+l*ji.maxLen;const c=1-l;i[a*3]=c,i[a*3+1]=c,i[a*3+2]=c}const s=new vt;s.setAttribute("position",new Pt(t,3)),s.setAttribute("color",new Pt(i,3));const r=new $c({vertexColors:!0,transparent:!0,opacity:0,blending:ic,depthWrite:!1}),o=new Y0(s,r);fe.add(o),$y.push(o)}})();function z3(){const n=Rt.stallSpeed+3,e=Rt.maxSpeed*.7,t=Oi.clamp((N.speed-n)/(e-n),0,1),i=ji.maxLen*(.3+t*.7);for(const s of $y){const r=s.geometry.attributes.position.array;for(let o=0;o<ji.verts;o++){const a=o/(ji.verts-1);r[o*3+2]=.42+a*i}s.geometry.attributes.position.needsUpdate=!0,s.material.opacity=t*.95}}const B3=.9,Yy=.55,H3=35,G3=1.6,Ky=new Yc(B3,28);Ky.rotateX(-Math.PI/2);const Zy=new Gn({color:0,transparent:!0,opacity:Yy,depthWrite:!1}),Ns=new tt(Ky,Zy);Ns.renderOrder=1;function V3(){const n=xn(fe.position.x,fe.position.z),e=Math.max(n,Pe.waterLevel),t=Math.max(0,fe.position.y-e);Ns.position.x=fe.position.x,Ns.position.z=fe.position.z,Ns.position.y=e+.04;const i=Math.min(1,t/H3),s=Math.min(1,t/G3);Zy.opacity=Yy*s*(1-.85*i);const r=1+i*.4;Ns.scale.set(r,1,r),Ns.visible=fe.position.y>e-.5}fT();BC();_x();gx();xo();J.landedRunways[Qi]||(J.landedRunways[Qi]=!0,J.discoveredRunways[Qi]=!0);if(!J.starterGranted){J.obsidian=(J.obsidian|0)+Zl.starterDiamonds,J.visitedIslands[J.currentIsland]=!0;for(const n of Object.keys(J.gofiosByIsland))(J.gofiosByIsland[n]|0)>0&&(J.visitedIslands[n]=!0);J.starterGranted=!0,Ut()}xv();Js.init();await Promise.all([z2(),N2()]);rt.forEach(n=>{n.elevation=Math.max(Pa(n.x,n.z),Pe.waterLevel+Kl.minAboveWater)});St.add(q2());St.add(j2());St.add(b3());St.add(wL());St.add(J2());St.add(nI());St.add(Ns);St.add(fe);R3();cP();U3();const W3=document.getElementById("restart-btn"),Bc=document.getElementById("crash");async function Jy(){await Qs.onCrashRestart(),su()}W3.addEventListener("click",Jy);window.addEventListener("keydown",n=>{n.code==="Space"&&Bc.classList.contains("visible")&&(n.preventDefault(),Jy())});function Qy(n){Bc.classList.remove("visible"),go(n,{onClose:()=>Bc.classList.add("visible")})}document.getElementById("crash-hangar-btn").addEventListener("click",()=>Qy("hangar"));document.getElementById("crash-shop-btn").addEventListener("click",()=>Qy("shop"));document.getElementById("crash-home-btn").addEventListener("click",()=>{Bc.classList.remove("visible"),Na()});su();KI(()=>{II()||Na()});requestAnimationFrame(()=>{const n=document.getElementById("loading-screen");n&&(n.classList.add("hidden"),setTimeout(()=>n.remove(),600))});setTimeout(()=>Qs.warmup(),5e3);document.addEventListener("visibilitychange",()=>{document.hidden&&ky()});Li.isNativePlatform()&&Eh(async()=>{const{App:n}=await import("./index-CVH0YhY8.js");return{App:n}},__vite__mapDeps([3,1])).then(({App:n})=>n.addListener("appStateChange",({isActive:e})=>{e||ky()})).catch(n=>console.warn("[lifecycle] appStateChange unavailable",n));let i0=performance.now();function ex(n){requestAnimationFrame(ex);const e=Math.min(.05,(n-i0)/1e3);i0=n,ZP(e),NI(e),QC(e),TL(e),PL(e),z3(),V3(),EL(n/1e3),Q2(e),aI(e,fe),L3(fe),O3(e,fe),mP(fe),F3(fe),CP(e);const t=St.fog!==null;S3(Gt,t),X2(Gt,t),MP(),Hx(),CT(n),cn.render(St,Gt)}requestAnimationFrame(ex);
