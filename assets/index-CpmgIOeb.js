(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ye={sky:12964828,water:3043220,shore:13023631,rock:9077368,snow:15395556,paper:16052712,trunk:7032634,ink:2765624,runway:5591628,pineCanopy:4151864,laurelCanopy:3032880,shrubBody:8160594,grassGround:10858597,cropGround:12100700,urbanGround:10392202,bareGround:10325622,houseWall:15590351,houseRoof:10246468},Pe={size:16e3,segments:1200,waterLevel:.1,fogStart:600,fogEnd:3e3,heightmap:{url:"/teide-game/heightmaps/canaries.png",bbox:{latN:29.5,latS:27.4,lonW:-18.4,lonE:-13.3},center:{lat:28.3,lon:-16.55},metersPerUnit:40,elevRange:[0,4e3],elevationExaggeration:2}},Qi="TFN",Zl={sideApron:6,endApron:40,fadeWidth:55,climbGradient:.3,corridorHalfWidth:22,minAboveWater:.6,vegClearSide:4,vegClearEnd:25},fx={sinkDepth:50},h0={riserSharpness:.5,stepHeight:3,slopeGateLo:.4,slopeGateHi:1.1,slopeEps:8,waterGuard:1.5},hu={slopeLo:.5,slopeHi:1.3,strength:.9},ci={towerHeight:12,towerScale:.75,towerSide:6,towerAlong:.3,terminal:{length:10,depth:3,height:2.2,side:5,along:-.4},colors:{concrete:14342878,glass:3359311,accent:12597547}},px=Object.freeze({startSpeed:22,minSpeed:2,maxSpeed:52,stallSpeed:7,pitchRate:.7,maxClimbPitch:.35,rollRate:1.8,turnFactor:1,speedFromPitch:22,drag:.7,sinkRate:.5,stallSink:9,stallPitchRate:1.9,stallAuthority:.25}),Th=Object.freeze({startSpeed:22,minSpeed:2,maxSpeed:38,stallSpeed:9,pitchRate:.7,maxClimbPitch:.35,rollRate:1.8,turnFactor:1,speedFromPitch:12,drag:1.6,sinkRate:.5,stallSink:9,stallPitchRate:1.9,stallAuthority:.25}),Rt={...Th},mx=Object.freeze({takeoffSpeed:50,liftoffFraction:.65,linearShare:.15,pitchUpAtLiftoff:.16}),Rh=Object.freeze({takeoffSpeed:32,liftoffFraction:.85,linearShare:.45,pitchUpAtLiftoff:.16}),Ns={...Rh},es={drag:{kind:"stat",stat:"drag",levels:[1.6,1.467,1.333,1.2,1.067,.967,.9,.833,.767,.7],costs:[0,900,1350,2050,3050,4550,6850,10250,15400,23050]},maxSpeed:{kind:"stat",stat:"maxSpeed",levels:[38,39.8,41.6,43.3,45.1,46.7,48,49.3,50.7,52],costs:[0,1200,1800,2700,4050,6100,9100,13650,20500,30750]},speedFromPitch:{kind:"stat",stat:"speedFromPitch",levels:[12,13.3,14.7,16,17.3,18.4,19.3,20.2,21.1,22],costs:[0,750,1150,1700,2550,3800,5700,8550,12800,19200]},stallSpeed:{kind:"stat",stat:"stallSpeed",levels:[9,8.78,8.56,8.33,8.11,7.89,7.67,7.44,7.22,7],costs:[0,1050,1600,2350,3550,5300,7950,11950,17950,26900]},takeoffSpeed:{kind:"stat",stat:"takeoffSpeed",levels:[32,34.2,36.4,38.7,40.9,42.9,44.7,46.4,48.2,50],costs:[0,900,1350,2050,3050,4550,6850,10250,15400,23050]},brake:{kind:"unlock",levels:[!1,!0],costs:[0,3750]},greyBoost:{kind:"multiStat",target:"greyBoost",levels:[3,3.4,3.9,4.3,4.8,5.2,5.7,6.1,6.6,7],costs:[0,750,1150,1700,2550,3800,5700,8550,12800,19200],stats:{tankDuration:[.4,.444,.489,.533,.578,.622,.667,.711,.756,.8],speedBonus:[3,3.4,3.9,4.3,4.8,5.2,5.7,6.1,6.6,7],rechargeTime:[45,42.8,40.6,38.3,36.1,33.9,31.7,29.4,27.2,25]}}},Jl={obsidianUpgradeCosts:[1,2,3,5,8,13,21,34,55,89],starterDiamonds:3,islandDiscoveryDiamonds:2},Td=[{id:"default",nameKey:"skins.default.name",descKey:"skins.default.desc",paper:Ye.paper,ink:Ye.ink,vent:1712164,costPunkte:0,costObsidian:null},{id:"charcoal",nameKey:"skins.charcoal.name",descKey:"skins.charcoal.desc",paper:3817284,ink:1316891,vent:921875,costPunkte:8e3,costObsidian:15},{id:"gold",nameKey:"skins.gold.name",descKey:"skins.gold.desc",paper:13938487,ink:7033872,vent:3812864,emissive:3812864,emissiveIntensity:.25,costPunkte:null,costObsidian:500},{id:"comingSoon",nameKey:"skins.comingSoon.name",descKey:"skins.comingSoon.desc",teaser:!0}],Ch=[{id:"small",productId:"diamonds_small",diamonds:20,bonusPct:0,badgeKey:null,priceFallback:"€0.99"},{id:"medium",productId:"diamonds_medium",diamonds:100,bonusPct:20,badgeKey:null,priceFallback:"€4.99"},{id:"large",productId:"diamonds_large",diamonds:200,bonusPct:30,badgeKey:"shop.badgePopular",priceFallback:"€9.99"},{id:"xl",productId:"diamonds_xl",diamonds:400,bonusPct:40,badgeKey:"shop.badgeValue",priceFallback:"€19.99"},{id:"mega",productId:"diamonds_mega",diamonds:1e3,bonusPct:60,badgeKey:null,priceFallback:"€49.99"}],An={enabled:!0,useTestAds:{android:!1,ios:!0},android:{appId:"ca-app-pub-3364943525952017~3363192755",interstitial:"ca-app-pub-3364943525952017/8378313345",rewarded:"ca-app-pub-3364943525952017/2162213186"},ios:{appId:"ca-app-pub-3364943525952017~3827422729",interstitial:"ca-app-pub-3364943525952017/1425188881",rewarded:"ca-app-pub-3364943525952017/8269798831"},test:{android:{interstitial:"ca-app-pub-3940256099942544/1033173712",rewarded:"ca-app-pub-3940256099942544/5224354917"},ios:{interstitial:"ca-app-pub-3940256099942544/4411468910",rewarded:"ca-app-pub-3940256099942544/1712485313"}},interstitialEveryNCrashes:3,interstitialMinGapSec:150,crashGraceCount:3,rewardedDiamonds:2,rewardedDailyCap:5},da={productId:"remove_ads",entitlement:"no_ads",priceFallback:"€1.99"},Ql={force:9,deployTau:.07,maxAngle:1.35},kl={triggerDist:85,triggerHeight:40,deployTau:.35},$s={brakeForce:14,landingSpeed:2.5,headingTolerance:.45,rollingHeight:1.8,landingBonus:500},fu={showDistance:240,hideDistance:100,rearmDistance:330},Ua={corridorHalfWidth:18,approachDepth:50,maxHeight:25,coneTolerance:.5},Ao={cyclePeriod:6.5,smoothTau:.18,brakeWindow:[.05,1.85],boostWindow:[2.55,4.05],gearWindow:[4.7,6.1]},f0={duration:3,startHeight:5e3},fn={maxTiltDeg:30,deadZoneDeg:2.5,smoothing:.18,sensMin:.5,sensMax:2,sensDefault:1},it={runwayId:"TFS",ring1:{forward:85,side:-5,dy:-4},ring2:{forward:175,side:6,dy:-10},ring3:{forward:380,side:14,dy:46},ring4:{forward:500,side:4,dy:-4},thermal:{forward:300,side:14,radius:34,strength:1.7},ringRadius:11,ringClearance:8,ringsEntrySpeed:30,seawardBias:.8,corridorSearchSteps:8,corridorClearHeight:10,ringsOvershoot:70,highOvershoot:90,thermalReach:12,navThreshold:.45,navHold:.18,boostHold:.3,airSpeed:30,resetGrace:.8,endCardMs:8e3,fog:{start:360,end:1500}},p0={toastDuration:1.4,tweenDuration:2},Ol={duration:.7,camPullback:9,camRise:2.5,camTau:.1},gn={columnColor:16777215,columnOpacity:.1,columnTop:95,maxAltitude:95,liftAtCenter:30,particleColor:16777215,particleOpacity:.55,particleSize:1.7,particleDensity:.05,riseSpeed:14},Xt={distance:6.5,height:2.6,lookAhead:3.5,posTau:.12,yawTau:.1,pitchTau:.55,runwayDistance:3,runwayHeight:.4,runwayLookAhead:0},ji={verts:8,maxLen:2.8},mt={grey:{color:10132122,tankDuration:.4,speedBonus:3,accelRate:35,rechargeTime:45},oneShot:{tiers:[{color:0,tankDuration:0,speedBonus:0,accelRate:0},{color:5086950,tankDuration:1.2,speedBonus:14,accelRate:45},{color:15778888,tankDuration:1.6,speedBonus:20,accelRate:55},{color:14702666,tankDuration:2,speedBonus:28,accelRate:70},{color:10905053,tankDuration:2.5,speedBonus:38,accelRate:85}]},refillDuration:1.6,camPushback:2.5,camPushbackTau:.15,exhaust:{offsetX:.36,offsetY:.13,offsetZ:.42,length:1.8,radiusNarrow:.03,radiusWide:.12,intensityTau:.06}},Et={sampleCount:25e5,treeDensity:1,shrubDensity:.85,grassDensity:.7,cropDensity:.6,bareDensity:.85,droughtShrubDensity:.22,snowDensity:.4,wetlandDensity:.5,slopeThreshold:.45,cliffDensity:.85,cliffHeightRange:[.7,3],rockZoneLowMax:2.5,rockZoneHighMin:37.5,laurelMaxAltitude:1500/40,treeScale:.75,urban:{minClusterPixels:3,churchClusterPixels:8,housesPerPixel:.55,housesMin:2,housesMax:30,houseMinSpacing:2.4,pixelJitter:5.5,clusterScaleMin:.9,clusterScaleMax:1.75},grassTints:[[1.05,1.02,.85],[.85,.95,.7],[1,1,1],[.7,.85,.55],[1.1,1.05,.75],[.95,.9,.8]],rockTintsLow:[[1.2,1.18,1.1],[1.05,.95,.78],[.95,.9,.8],[1.1,1.05,.95],[1.15,1,.82]],rockTintsMid:[[.55,.55,.6],[.45,.45,.5],[.7,.68,.62],[.85,.78,.65],[.5,.52,.55],[.65,.6,.55]],rockTintsHigh:[[1.15,.95,.8],[1.05,.9,.75],[.95,.85,.75],[1.2,1,.85],[.85,.65,.55]],roofTints:[[1,1,1],[.88,.86,.88],[.62,.58,.68],[1.1,.95,.85],[.95,.88,.78]]},ht={ring:{majorRadius:2,tubeRadius:.16,hoverHeight:8,opacity:.93,opacityActivated:.3,colorActivated:7235682},symbol:{size:1.4,extrudeDepth:.22,rotRate:.7,colorActivated:10132122},activation:{radius:2},colorsByType:{peak:{ring:15249978,symbol:16049885},city:{ring:15228219,symbol:15590351},landscape:{ring:14044303,symbol:16511448},beach:{ring:3043220,symbol:16245740}},rewardsByType:{peak:{punkte:800,gofios:5},city:{punkte:400,gofios:1},landscape:{punkte:500,gofios:2},beach:{punkte:400,gofios:1}},tierFractions:[0,.04,.19,.46,.69],hoverLabelRadius:80,activationToast:{duration:3}},Ge={INTRO:"INTRO",PRELAUNCH:"PRELAUNCH",TAKEOFF_ROLL:"TAKEOFF_ROLL",FLYING:"FLYING",LANDING_ROLL:"LANDING_ROLL",LANDED:"LANDED",CRASHING:"CRASHING",CRASHED:"CRASHED"},D={speed:Rt.startSpeed,alive:!0,inThermal:!1,brakeAmount:0,gearAmount:0,flightState:Ge.PRELAUNCH,currentRunway:null,takeoffTime:0,postLiftCooldown:0,landedToastTimer:0,cinematicT:0,cinematicFromPos:null,cinematicToPos:null,cinematicFromQuat:null,cinematicToQuat:null,pendingAirportUnlock:null,crashT:0,introT:0,introStartCamPos:null,greyActive:!1,oneShotActive:!1,boostFuelGrey:1,boostFuelOneshot:0,refillT:1,refillStartGrey:1,refillStartOneshot:0,flightPunkte:0,sessionLandings:0,boosterOverride:null,showPerf:!0,showAds:!0,paused:!1,tutorial:!1},J={punkte:0,gofiosByIsland:{tenerife:0,gomera:0,palma:0,gc:0,hierro:0,fuerte:0,lanza:0,graciosa:0},obsidian:0,obsidianLifetimeGranted:0,landings:0,bestFlightPunkte:0,bestSessionLandings:0,upgrades:{drag:0,maxSpeed:0,speedFromPitch:0,stallSpeed:0,takeoffSpeed:0,brake:0,greyBoost:0},obsidianUpgradeCount:{},oneShotTier:0,exploredPOIs:{},discoveredRunways:{},landedRunways:{},ownedSkins:{default:!0},equippedSkin:"default",visitedIslands:{tenerife:!0},starterGranted:!1,adsRemoveOwned:!1,rewardedDay:"",rewardedToday:0,checkpointRunwayId:null,introPlayed:!1,currentIsland:"tenerife",testMode:!1};function Gc(n){J.punkte+=n,D.flightPunkte+=n}function gx(){D.speed=Rt.startSpeed,D.alive=!0,D.inThermal=!1,D.brakeAmount=0,D.gearAmount=0,D.flightState=Ge.PRELAUNCH,D.currentRunway=null,D.takeoffTime=0,D.postLiftCooldown=0,D.landedToastTimer=0,D.cinematicT=0,D.cinematicFromPos=null,D.cinematicToPos=null,D.cinematicFromQuat=null,D.cinematicToQuat=null,D.pendingAirportUnlock=null,D.crashT=0,D.introT=0,D.introStartCamPos=null,D.greyActive=!1,D.oneShotActive=!1}const ie={PEAK:"peak",CITY:"city",LANDSCAPE:"landscape",BEACH:"beach"};function Lh(n,e){const{center:t,metersPerUnit:i}=Pe.heightmap,s=(e-t.lon)*111320*Math.cos(t.lat*Math.PI/180),r=(n-t.lat)*111320;return{x:s/i,z:-r/i}}const bt=[{id:"tenerife",name:"Tenerife",lat:28.3,lon:-16.55,bboxRadius:1100,playable:!0},{id:"gomera",name:"La Gomera",lat:28.1,lon:-17.21,bboxRadius:350,playable:!0},{id:"palma",name:"La Palma",lat:28.71,lon:-17.85,bboxRadius:600,playable:!0},{id:"gc",name:"Gran Canaria",lat:27.93,lon:-15.59,bboxRadius:700,playable:!0},{id:"hierro",name:"El Hierro",lat:27.74,lon:-18.02,bboxRadius:350,playable:!0},{id:"fuerte",name:"Fuerteventura",lat:28.36,lon:-14.05,bboxRadius:1300,playable:!0},{id:"lanza",name:"Lanzarote",lat:29.04,lon:-13.62,bboxRadius:800,playable:!0},{id:"graciosa",name:"La Graciosa",lat:29.24,lon:-13.5,bboxRadius:180,playable:!0}].map(n=>({...n,...Lh(n.lat,n.lon)})),vx=[{id:"teide",name:"Pico del Teide",island:"tenerife",lat:28.2724,lon:-16.6425,ringRadius:10,ringCount:36},{id:"viejo",name:"Pico Viejo",island:"tenerife",lat:28.2632,lon:-16.6534,ringRadius:18,ringCount:48},{id:"taburiente",name:"Caldera de Taburiente",island:"palma",lat:28.708,lon:-17.872,ringRadius:60,ringCount:80},{id:"cumbre-vieja",name:"Cumbre Vieja",island:"palma",lat:28.574,lon:-17.8358,ringRadius:12,ringCount:32},{id:"teneguia",name:"Volcán Teneguía",island:"palma",lat:28.4669,lon:-17.8425,ringRadius:6,ringCount:22},{id:"bandama",name:"Caldera de Bandama",island:"gc",lat:28.0339,lon:-15.4519,ringRadius:10,ringCount:30},{id:"calderon-hondo",name:"Calderón Hondo",island:"fuerte",lat:28.703,lon:-13.939,ringRadius:10,ringCount:30},{id:"arena",name:"Volcán de la Arena",island:"fuerte",lat:28.6997,lon:-13.9594,ringRadius:8,ringCount:24},{id:"timanfaya",name:"Timanfaya",island:"lanza",lat:29,lon:-13.755,ringRadius:40,ringCount:64},{id:"caldera-blanca",name:"Caldera Blanca",island:"lanza",lat:29.0167,lon:-13.7833,ringRadius:15,ringCount:36}].map(n=>({...n,...Lh(n.lat,n.lon)}));function yx(n){let e="tenerife",t=1/0;for(const i of bt){if(!i.playable)continue;const s=n.x-i.x,r=n.z-i.z,o=s*s+r*r;o<t&&(t=o,e=i.id)}return e}const xx=[{id:"tfe-peak-teide",island:"tenerife",type:ie.PEAK,name:"Pico del Teide",lat:28.2724,lon:-16.6425,ele:3715},{id:"tfe-peak-pico-viejo",island:"tenerife",type:ie.PEAK,name:"Pico Viejo",lat:28.2632,lon:-16.6534,ele:3135},{id:"tfe-peak-montana-blanca",island:"tenerife",type:ie.PEAK,name:"Montaña Blanca",lat:28.251,lon:-16.6035,ele:2748},{id:"tfe-peak-guajara",island:"tenerife",type:ie.PEAK,name:"Guajara",lat:28.2207,lon:-16.6157,ele:2718},{id:"tfe-peak-cinchado",island:"tenerife",type:ie.PEAK,name:"Roque Cinchado",lat:28.228,lon:-16.6172,ele:2167},{id:"tfe-peak-tigaiga",island:"tenerife",type:ie.PEAK,name:"Montaña de Tigaiga",lat:28.37,lon:-16.63,ele:1909},{id:"tfe-peak-conde",island:"tenerife",type:ie.PEAK,name:"Roque del Conde",lat:28.1093,lon:-16.7117,ele:1001},{id:"tfe-peak-cruz-carmen",island:"tenerife",type:ie.PEAK,name:"Cruz del Carmen",lat:28.5358,lon:-16.3025,ele:900},{id:"tfe-peak-roques-anaga",island:"tenerife",type:ie.PEAK,name:"Roques de Anaga",lat:28.5775,lon:-16.153,ele:227},{id:"tfe-city-santa-cruz",island:"tenerife",type:ie.CITY,name:"Santa Cruz de Tenerife",lat:28.4636,lon:-16.2518},{id:"tfe-city-la-laguna",island:"tenerife",type:ie.CITY,name:"San Cristóbal de La Laguna",lat:28.4853,lon:-16.3201},{id:"tfe-city-la-orotava",island:"tenerife",type:ie.CITY,name:"La Orotava",lat:28.3902,lon:-16.5234},{id:"tfe-city-puerto-cruz",island:"tenerife",type:ie.CITY,name:"Puerto de la Cruz",lat:28.4144,lon:-16.544},{id:"tfe-city-los-cristianos",island:"tenerife",type:ie.CITY,name:"Los Cristianos",lat:28.0507,lon:-16.71},{id:"tfe-city-las-americas",island:"tenerife",type:ie.CITY,name:"Playa de las Américas",lat:28.054,lon:-16.729},{id:"tfe-city-adeje",island:"tenerife",type:ie.CITY,name:"Adeje",lat:28.1226,lon:-16.7256},{id:"tfe-city-granadilla",island:"tenerife",type:ie.CITY,name:"Granadilla de Abona",lat:28.1182,lon:-16.5781},{id:"tfe-city-icod",island:"tenerife",type:ie.CITY,name:"Icod de los Vinos",lat:28.3729,lon:-16.7106},{id:"tfe-city-garachico",island:"tenerife",type:ie.CITY,name:"Garachico",lat:28.3735,lon:-16.7635},{id:"tfe-city-vilaflor",island:"tenerife",type:ie.CITY,name:"Vilaflor",lat:28.1572,lon:-16.6356},{id:"tfe-city-buenavista",island:"tenerife",type:ie.CITY,name:"Buenavista del Norte",lat:28.3712,lon:-16.8567},{id:"tfe-city-masca",island:"tenerife",type:ie.CITY,name:"Masca",lat:28.3001,lon:-16.8404},{id:"tfe-land-teide-park",island:"tenerife",type:ie.LANDSCAPE,name:"Parque Nacional del Teide",lat:28.2733,lon:-16.6422},{id:"tfe-land-anaga-park",island:"tenerife",type:ie.LANDSCAPE,name:"Parque Rural de Anaga",lat:28.55,lon:-16.2},{id:"tfe-land-teno-park",island:"tenerife",type:ie.LANDSCAPE,name:"Parque Rural de Teno",lat:28.35,lon:-16.85},{id:"tfe-land-barranco-infierno",island:"tenerife",type:ie.LANDSCAPE,name:"Barranco del Infierno",lat:28.1184,lon:-16.7245},{id:"tfe-land-barranco-masca",island:"tenerife",type:ie.LANDSCAPE,name:"Barranco de Masca",lat:28.3,lon:-16.841},{id:"tfe-land-cueva-viento",island:"tenerife",type:ie.LANDSCAPE,name:"Cueva del Viento",lat:28.3754,lon:-16.714},{id:"tfe-land-esperanza",island:"tenerife",type:ie.LANDSCAPE,name:"Bosque de la Esperanza",lat:28.48,lon:-16.41},{id:"tfe-land-pinar-chio",island:"tenerife",type:ie.LANDSCAPE,name:"Pinar de Chío",lat:28.27,lon:-16.71},{id:"tfe-land-los-gigantes",island:"tenerife",type:ie.LANDSCAPE,name:"Acantilados de Los Gigantes",lat:28.248,lon:-16.843},{id:"tfe-land-mirador-garachico",island:"tenerife",type:ie.LANDSCAPE,name:"Mirador de Garachico",lat:28.368,lon:-16.761},{id:"tfe-beach-teresitas",island:"tenerife",type:ie.BEACH,name:"Playa de las Teresitas",lat:28.5096,lon:-16.186},{id:"tfe-beach-vistas",island:"tenerife",type:ie.BEACH,name:"Playa de las Vistas",lat:28.0489,lon:-16.7218},{id:"tfe-beach-arena",island:"tenerife",type:ie.BEACH,name:"Playa de la Arena",lat:28.244,lon:-16.8053},{id:"tfe-beach-medano",island:"tenerife",type:ie.BEACH,name:"Playa El Médano",lat:28.0461,lon:-16.5343},{id:"tfe-beach-benijo",island:"tenerife",type:ie.BEACH,name:"Playa de Benijo",lat:28.5775,lon:-16.1838},{id:"tfe-beach-bollullo",island:"tenerife",type:ie.BEACH,name:"Playa del Bollullo",lat:28.4106,lon:-16.494},{id:"tfe-beach-fanabe",island:"tenerife",type:ie.BEACH,name:"Playa de Fañabé",lat:28.0907,lon:-16.7383},{id:"tfe-beach-jardin",island:"tenerife",type:ie.BEACH,name:"Playa Jardín",lat:28.4189,lon:-16.5586},{id:"tfe-beach-almaciga",island:"tenerife",type:ie.BEACH,name:"Playa de Almáciga",lat:28.5752,lon:-16.1714},{id:"tfe-beach-abama",island:"tenerife",type:ie.BEACH,name:"Playa de Abama",lat:28.1735,lon:-16.7937},{id:"gom-peak-garajonay",island:"gomera",type:ie.PEAK,name:"Alto de Garajonay",lat:28.1163,lon:-17.2476,ele:1487},{id:"gom-city-san-sebastian",island:"gomera",type:ie.CITY,name:"San Sebastián de La Gomera",lat:28.0911,lon:-17.1106},{id:"gom-city-valle-gran-rey",island:"gomera",type:ie.CITY,name:"Valle Gran Rey",lat:28.0922,lon:-17.3358},{id:"gom-city-vallehermoso",island:"gomera",type:ie.CITY,name:"Vallehermoso",lat:28.1797,lon:-17.2658},{id:"gom-city-hermigua",island:"gomera",type:ie.CITY,name:"Hermigua",lat:28.1656,lon:-17.1942},{id:"gom-land-garajonay-park",island:"gomera",type:ie.LANDSCAPE,name:"Parque Nacional de Garajonay",lat:28.1167,lon:-17.25},{id:"gom-land-los-organos",island:"gomera",type:ie.LANDSCAPE,name:"Los Órganos",lat:28.212,lon:-17.282},{id:"gom-land-roque-agando",island:"gomera",type:ie.LANDSCAPE,name:"Roque de Agando",lat:28.1153,lon:-17.2106},{id:"gom-beach-santiago",island:"gomera",type:ie.BEACH,name:"Playa de Santiago",lat:28.0294,lon:-17.1989},{id:"gom-beach-calera",island:"gomera",type:ie.BEACH,name:"Playa de la Calera",lat:28.1023,lon:-17.3401},{id:"gc-peak-nieves",island:"gc",type:ie.PEAK,name:"Pico de las Nieves",lat:27.9617,lon:-15.5803,ele:1949},{id:"gc-city-las-palmas",island:"gc",type:ie.CITY,name:"Las Palmas de Gran Canaria",lat:28.1235,lon:-15.4363},{id:"gc-city-maspalomas",island:"gc",type:ie.CITY,name:"Maspalomas",lat:27.7547,lon:-15.586},{id:"gc-city-teror",island:"gc",type:ie.CITY,name:"Teror",lat:28.0556,lon:-15.547},{id:"gc-city-telde",island:"gc",type:ie.CITY,name:"Telde",lat:27.9974,lon:-15.4178},{id:"gc-land-nublo",island:"gc",type:ie.LANDSCAPE,name:"Roque Nublo",lat:27.965,lon:-15.6175},{id:"gc-land-dunas",island:"gc",type:ie.LANDSCAPE,name:"Dunas de Maspalomas",lat:27.741,lon:-15.5797},{id:"gc-beach-canteras",island:"gc",type:ie.BEACH,name:"Playa de las Canteras",lat:28.1352,lon:-15.4348},{id:"gc-beach-ingles",island:"gc",type:ie.BEACH,name:"Playa del Inglés",lat:27.7597,lon:-15.58},{id:"gc-peak-tejeda",island:"gc",type:ie.PEAK,name:"Cruz de Tejeda",lat:28.0086,lon:-15.6075,ele:1490},{id:"gc-city-tafira",island:"gc",type:ie.CITY,name:"Tafira",lat:28.0769,lon:-15.4569},{id:"gc-city-san-mateo",island:"gc",type:ie.CITY,name:"San Mateo",lat:28.0205,lon:-15.5358},{id:"gc-city-mogan",island:"gc",type:ie.CITY,name:"Puerto de Mogán",lat:27.8158,lon:-15.7625},{id:"gc-land-bandama",island:"gc",type:ie.LANDSCAPE,name:"Caldera de Bandama",lat:28.0339,lon:-15.4519},{id:"gc-land-bentayga",island:"gc",type:ie.LANDSCAPE,name:"Roque Bentayga",lat:27.9697,lon:-15.6519},{id:"gc-land-andenes",island:"gc",type:ie.LANDSCAPE,name:"Andén Verde",lat:28.0769,lon:-15.7833},{id:"gc-beach-amadores",island:"gc",type:ie.BEACH,name:"Playa de Amadores",lat:27.7866,lon:-15.7264},{id:"gc-beach-tauro",island:"gc",type:ie.BEACH,name:"Playa de Tauro",lat:27.7831,lon:-15.7331},{id:"palma-peak-muchachos",island:"palma",type:ie.PEAK,name:"Roque de los Muchachos",lat:28.7544,lon:-17.8851,ele:2426},{id:"palma-city-santa-cruz",island:"palma",type:ie.CITY,name:"Santa Cruz de La Palma",lat:28.6835,lon:-17.7642},{id:"palma-city-llanos",island:"palma",type:ie.CITY,name:"Los Llanos de Aridane",lat:28.6585,lon:-17.9181},{id:"palma-land-taburiente",island:"palma",type:ie.LANDSCAPE,name:"Caldera de Taburiente",lat:28.708,lon:-17.872},{id:"palma-land-cumbre-vieja",island:"palma",type:ie.LANDSCAPE,name:"Cumbre Vieja",lat:28.574,lon:-17.8358},{id:"palma-beach-nogales",island:"palma",type:ie.BEACH,name:"Playa de Nogales",lat:28.7548,lon:-17.7616},{id:"palma-beach-puerto-naos",island:"palma",type:ie.BEACH,name:"Playa de Puerto Naos",lat:28.5828,lon:-17.9128},{id:"palma-peak-bejenado",island:"palma",type:ie.PEAK,name:"Pico Bejenado",lat:28.7036,lon:-17.8839,ele:1854},{id:"palma-peak-birigoyo",island:"palma",type:ie.PEAK,name:"Pico Birigoyo",lat:28.6483,lon:-17.8492,ele:1808},{id:"palma-city-tazacorte",island:"palma",type:ie.CITY,name:"Tazacorte",lat:28.6394,lon:-17.9333},{id:"palma-city-fuencaliente",island:"palma",type:ie.CITY,name:"Fuencaliente",lat:28.4889,lon:-17.8453},{id:"palma-city-mazo",island:"palma",type:ie.CITY,name:"Villa de Mazo",lat:28.6044,lon:-17.7892},{id:"palma-land-salinas",island:"palma",type:ie.LANDSCAPE,name:"Salinas de Fuencaliente",lat:28.4528,lon:-17.8447},{id:"palma-land-volcan-teneguia",island:"palma",type:ie.LANDSCAPE,name:"Volcán Teneguía",lat:28.4669,lon:-17.8425},{id:"palma-beach-charco-verde",island:"palma",type:ie.BEACH,name:"Playa de Charco Verde",lat:28.5483,lon:-17.8975},{id:"hierro-peak-malpaso",island:"hierro",type:ie.PEAK,name:"Pico de Malpaso",lat:27.733,lon:-18.0177,ele:1501},{id:"hierro-city-valverde",island:"hierro",type:ie.CITY,name:"Valverde",lat:27.8055,lon:-17.9183},{id:"hierro-city-frontera",island:"hierro",type:ie.CITY,name:"La Frontera",lat:27.7639,lon:-18.0122},{id:"hierro-land-sabinar",island:"hierro",type:ie.LANDSCAPE,name:"El Sabinar",lat:27.756,lon:-18.1148},{id:"hierro-land-bonanza",island:"hierro",type:ie.LANDSCAPE,name:"Roque de la Bonanza",lat:27.7029,lon:-17.9429},{id:"hierro-beach-charco-azul",island:"hierro",type:ie.BEACH,name:"Charco Azul",lat:27.8061,lon:-18.1057},{id:"hierro-city-tamaduste",island:"hierro",type:ie.CITY,name:"Tamaduste",lat:27.8125,lon:-17.9136},{id:"hierro-city-el-pinar",island:"hierro",type:ie.CITY,name:"El Pinar",lat:27.7053,lon:-17.9928},{id:"hierro-land-roques-salmor",island:"hierro",type:ie.LANDSCAPE,name:"Roques de Salmor",lat:27.8294,lon:-17.9694},{id:"hierro-land-pozo-salud",island:"hierro",type:ie.LANDSCAPE,name:"Pozo de la Salud",lat:27.7681,lon:-18.1219},{id:"hierro-land-punta-dehesa",island:"hierro",type:ie.LANDSCAPE,name:"Punta de la Dehesa",lat:27.7842,lon:-18.1633},{id:"hierro-beach-mar-calmas",island:"hierro",type:ie.BEACH,name:"Mar de las Calmas",lat:27.6961,lon:-18.0356},{id:"fuerte-peak-zarza",island:"fuerte",type:ie.PEAK,name:"Pico de la Zarza",lat:28.0828,lon:-14.3053,ele:807},{id:"fuerte-city-puerto-rosario",island:"fuerte",type:ie.CITY,name:"Puerto del Rosario",lat:28.5011,lon:-13.8627},{id:"fuerte-city-corralejo",island:"fuerte",type:ie.CITY,name:"Corralejo",lat:28.7361,lon:-13.87},{id:"fuerte-city-morro-jable",island:"fuerte",type:ie.CITY,name:"Morro Jable",lat:28.054,lon:-14.349},{id:"fuerte-land-corralejo-park",island:"fuerte",type:ie.LANDSCAPE,name:"Parque Natural de Corralejo",lat:28.717,lon:-13.834},{id:"fuerte-land-calderon",island:"fuerte",type:ie.LANDSCAPE,name:"Calderón Hondo",lat:28.703,lon:-13.939},{id:"fuerte-beach-sotavento",island:"fuerte",type:ie.BEACH,name:"Playa de Sotavento",lat:28.1973,lon:-14.218},{id:"fuerte-beach-cofete",island:"fuerte",type:ie.BEACH,name:"Playa de Cofete",lat:28.0945,lon:-14.382},{id:"fuerte-city-betancuria",island:"fuerte",type:ie.CITY,name:"Betancuria",lat:28.4244,lon:-14.0589},{id:"fuerte-city-antigua",island:"fuerte",type:ie.CITY,name:"Antigua",lat:28.4181,lon:-14.0114},{id:"fuerte-city-pajara",island:"fuerte",type:ie.CITY,name:"Pájara",lat:28.3531,lon:-14.1006},{id:"fuerte-city-caleta-fuste",island:"fuerte",type:ie.CITY,name:"Caleta de Fuste",lat:28.395,lon:-13.8633},{id:"fuerte-city-tuineje",island:"fuerte",type:ie.CITY,name:"Tuineje",lat:28.3219,lon:-14.0481},{id:"fuerte-land-isla-lobos",island:"fuerte",type:ie.LANDSCAPE,name:"Isla de Lobos",lat:28.7556,lon:-13.8225},{id:"fuerte-land-arena-volcano",island:"fuerte",type:ie.LANDSCAPE,name:"Volcán de la Arena",lat:28.6997,lon:-13.9594},{id:"fuerte-beach-garcey",island:"fuerte",type:ie.BEACH,name:"Playa de Garcey",lat:28.3344,lon:-14.2197},{id:"lanza-peak-penas-chache",island:"lanza",type:ie.PEAK,name:"Peñas del Chache",lat:29.1108,lon:-13.5468,ele:671},{id:"lanza-city-arrecife",island:"lanza",type:ie.CITY,name:"Arrecife",lat:28.9637,lon:-13.5477},{id:"lanza-city-costa-teguise",island:"lanza",type:ie.CITY,name:"Costa Teguise",lat:28.987,lon:-13.5},{id:"lanza-city-playa-blanca",island:"lanza",type:ie.CITY,name:"Playa Blanca",lat:28.8597,lon:-13.8253},{id:"lanza-land-timanfaya",island:"lanza",type:ie.LANDSCAPE,name:"Parque Nacional de Timanfaya",lat:29,lon:-13.755},{id:"lanza-land-cueva-verdes",island:"lanza",type:ie.LANDSCAPE,name:"Cueva de los Verdes",lat:29.1574,lon:-13.4342},{id:"lanza-land-mirador-rio",island:"lanza",type:ie.LANDSCAPE,name:"Mirador del Río",lat:29.2179,lon:-13.4827},{id:"lanza-beach-papagayo",island:"lanza",type:ie.BEACH,name:"Playa Papagayo",lat:28.835,lon:-13.804},{id:"lanza-beach-famara",island:"lanza",type:ie.BEACH,name:"Playa de Famara",lat:29.13,lon:-13.5538},{id:"lanza-peak-montana-roja",island:"lanza",type:ie.PEAK,name:"Montaña Roja",lat:28.8567,lon:-13.8636,ele:194},{id:"lanza-city-teguise",island:"lanza",type:ie.CITY,name:"Teguise",lat:29.0589,lon:-13.5614},{id:"lanza-city-haria",island:"lanza",type:ie.CITY,name:"Haría",lat:29.1453,lon:-13.4972},{id:"lanza-city-yaiza",island:"lanza",type:ie.CITY,name:"Yaiza",lat:28.9528,lon:-13.7686},{id:"lanza-city-tinajo",island:"lanza",type:ie.CITY,name:"Tinajo",lat:29.0628,lon:-13.675},{id:"lanza-land-jameos",island:"lanza",type:ie.LANDSCAPE,name:"Jameos del Agua",lat:29.1583,lon:-13.4344},{id:"lanza-land-el-golfo",island:"lanza",type:ie.LANDSCAPE,name:"El Golfo",lat:28.9722,lon:-13.8261},{id:"lanza-beach-quemada",island:"lanza",type:ie.BEACH,name:"Playa Quemada",lat:28.9039,lon:-13.7572},{id:"graciosa-peak-agujas",island:"graciosa",type:ie.PEAK,name:"Las Agujas Grandes",lat:29.262,lon:-13.502,ele:266},{id:"graciosa-city-caleta",island:"graciosa",type:ie.CITY,name:"Caleta del Sebo",lat:29.2261,lon:-13.5021},{id:"graciosa-land-amarilla",island:"graciosa",type:ie.LANDSCAPE,name:"Montaña Amarilla",lat:29.2128,lon:-13.539},{id:"graciosa-beach-conchas",island:"graciosa",type:ie.BEACH,name:"Playa de las Conchas",lat:29.27,lon:-13.541},{id:"graciosa-beach-francesa",island:"graciosa",type:ie.BEACH,name:"Playa Francesa",lat:29.215,lon:-13.531},{id:"graciosa-city-pedro-barba",island:"graciosa",type:ie.CITY,name:"Pedro Barba",lat:29.2461,lon:-13.4778},{id:"graciosa-peak-bermeja",island:"graciosa",type:ie.PEAK,name:"Montaña Bermeja",lat:29.2603,lon:-13.5183,ele:157},{id:"graciosa-beach-lambra",island:"graciosa",type:ie.BEACH,name:"Playa Lambra",lat:29.2725,lon:-13.505}],On=xx.map(n=>({...n,...Lh(n.lat,n.lon)}));(function(){const e=2*ht.ring.majorRadius+1.2,t=e*e,i=30;for(let s=0;s<i;s++){let r=!1;for(let o=0;o<On.length;o++)for(let a=o+1;a<On.length;a++){const l=On[o],c=On[a],u=l.x-c.x,d=l.z-c.z,h=u*u+d*d;if(h>=t)continue;if(h<1e-4){l.x+=.13,l.z+=.07,c.x-=.13,c.z-=.07,r=!0;continue}const m=Math.sqrt(h),g=(e-m)*.5,y=u/m,p=d/m;l.x+=y*g,l.z+=p*g,c.x-=y*g,c.z-=p*g,r=!0}if(!r)break}})();const pu=On.reduce((n,e)=>((n[e.island]??=[]).push(e),n),{}),_x=On.reduce((n,e)=>n+(ht.rewardsByType[e.type]?.gofios|0),0),ea=ht.tierFractions.map(n=>Math.round(n*_x));function bx(n){return n in Th?Rt:n in Rh?Ns:null}const Sx={greyBoost:mt.grey};function xo(){const n=J.testMode;Object.assign(Rt,n?px:Th),Object.assign(Ns,n?mx:Rh);for(const[e,t]of Object.entries(es)){const i=n?Number.POSITIVE_INFINITY:J.upgrades?.[e]|0;if(t.kind==="stat"){const s=Math.max(0,Math.min(t.levels.length-1,i)),r=bx(t.stat);r&&(r[t.stat]=t.levels[s])}else if(t.kind==="multiStat"){const s=Sx[t.target];if(!s)continue;const r=Object.keys(t.stats),o=t.stats[r[0]].length-1,a=Math.max(0,Math.min(o,i));for(const l of r)s[l]=t.stats[l][a]}}}function Ys(){return J.testMode?D.boosterOverride!=null?D.boosterOverride:4:J.oneShotTier|0}function Ph(){let n=0;for(const e of Object.values(J.gofiosByIsland))n+=e|0;return n}function m0(n){let e=0;for(let t=ea.length-1;t>=0;t--)if(n>=ea[t]){e=t;break}return e}function Vc(){return J.testMode?!0:!!J.upgrades?.brake}function Mx(){const n=m0(Ph());n>(J.oneShotTier|0)&&(J.oneShotTier=n)}const Ih="teide-save",Ul=5,g0=["punkte","gofiosByIsland","obsidian","obsidianLifetimeGranted","landings","bestFlightPunkte","bestSessionLandings","upgrades","obsidianUpgradeCount","oneShotTier","exploredPOIs","discoveredRunways","landedRunways","ownedSkins","equippedSkin","visitedIslands","starterGranted","adsRemoveOwned","rewardedDay","rewardedToday","checkpointRunwayId","currentIsland","testMode"];function wx(){const n={version:Ul};for(const e of g0)n[e]=J[e];return n}function Ex(n){for(const e of g0){const t=n[e];if(t===void 0)continue;const i=J[e];i&&typeof i=="object"&&!Array.isArray(i)&&t&&typeof t=="object"&&!Array.isArray(t)?Object.assign(i,t):J[e]=t}}function Ax(n){if(n.version===1){const e={};if(n.exploredPOIs)for(const t of On){if(!n.exploredPOIs[t.id])continue;const i=ht.rewardsByType[t.type];i&&(e[t.island]=(e[t.island]|0)+i.gofios)}n.gofiosByIsland=e,n.version=2}if(n.version===2&&(n.discoveredRunways={},n.landedRunways={},n.checkpointRunwayId&&(n.discoveredRunways[n.checkpointRunwayId]=!0,n.landedRunways[n.checkpointRunwayId]=!0),n.version=3),n.version===3){const e=n.oneShotTierByIsland||{};let t=0;for(const i of Object.values(e))t=Math.max(t,i|0);n.oneShotTier=t,delete n.oneShotTierByIsland,n.version=4}if(n.version===4){const e=n.upgrades;if(e)for(const t of["drag","maxSpeed","speedFromPitch","stallSpeed","takeoffSpeed","greyBoost"])typeof e[t]=="number"&&(e[t]=Math.round((e[t]|0)/4*9));n.version=5}return n}function Tx(){try{const n=localStorage.getItem(Ih);if(!n)return!1;let e=JSON.parse(n);return!e||typeof e!="object"?!1:typeof e.version!="number"?(console.warn("[save] discarding save: missing version"),!1):e.version>Ul?(console.warn(`[save] discarding save: future version ${e.version} > ${Ul}`),!1):(e=Ax(e),e.version!==Ul?(console.warn(`[save] discarding save: migration left version at ${e.version}`),!1):(Ex(e),!0))}catch(n){return console.warn("[save] load failed:",n),!1}}function Rx(){try{localStorage.setItem(Ih,JSON.stringify(wx()))}catch(n){console.warn("[save] write failed:",n)}}let mu=!1;function Ut(){mu||(mu=!0,queueMicrotask(()=>{mu=!1,Rx()}))}function Cx(){try{localStorage.removeItem(Ih)}catch{}}const Gn={pitch:0,roll:0,brake:!1,boost:!1,isInputActive:!1,activeInputType:"none"};let ec=!1;function v0(){ec=!0}function Lx(){return ec?(ec=!1,!0):!1}function Dh(){ec=!1}let tc=!1;function y0(){tc=!0}function Px(){return tc?(tc=!1,!0):!1}function Wc(){tc=!1}const _t={up:!1,down:!1,left:!1,right:!1,brake:!1,boost:!1,oneShot:!1};let Ei=!1;function Ix(){Ei=!1}function Dx(){return Ei}function Nx(){const n=(_t.down?1:0)-(_t.up?1:0),e=(_t.right?1:0)-(_t.left?1:0),t=_t.up||_t.down||_t.left||_t.right,i=_t.brake||_t.boost||_t.oneShot;return{pitch:n,roll:e,brake:_t.brake,boost:_t.boost,isActive:t||i}}function x0(n,e){switch(n.key){case"ArrowUp":case"w":case"W":_t.up=e,Ei=!0;break;case"ArrowDown":case"s":case"S":_t.down=e,Ei=!0;break;case"ArrowLeft":case"a":case"A":_t.left=e,Ei=!0;break;case"ArrowRight":case"d":case"D":_t.right=e,Ei=!0;break;case" ":case"Spacebar":_t.brake=e&&Vc(),Ei=!0,n.preventDefault();break;case"Shift":e&&!_t.boost&&y0(),_t.boost=e,Ei=!0;break;case"f":case"F":e&&!_t.oneShot&&v0(),_t.oneShot=e,Ei=!0;break;case"t":case"T":e&&(J.testMode=!J.testMode,xo(),Ut());break;case"b":case"B":if(e&&J.testMode){const t=mt.oneShot.tiers.length-1,i=D.boosterOverride!=null?D.boosterOverride:4;D.boosterOverride=(i+1)%(t+1)}break}}window.addEventListener("keydown",n=>x0(n,!0));window.addEventListener("keyup",n=>x0(n,!1));function nr(){return typeof window>"u"?!1:"ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}nr()&&document.body.classList.add("touch-mode");const Ts=document.getElementById("touch-joystick-zone"),Ti=document.getElementById("touch-joystick"),io=Ti?.querySelector(".touch-joystick-thumb"),ts=document.getElementById("touch-brake"),so=document.getElementById("touch-boost"),Jn=document.getElementById("touch-oneshot"),kx=document.getElementById("touch-boost-corner"),Pf=document.getElementById("touch-actions"),If=document.getElementById("map-btn"),hi=document.getElementById("map-card"),ns=document.getElementById("map-card-backdrop"),Fa=60,gu=8;let ha=null,Rd=0,Cd=0,Ld=!0;function nc(n){Ld=!!n,Ld||Nh()}const Kt={pitch:0,roll:0,brake:!1,boost:!1,isActive:!1};let ir=!1;function Ox(){return ir}function Ux(){ir=!1}function Fx(){return Kt}const zx=["welcome-overlay","pause-overlay","levels-overlay","crash","hangar-overlay","shop-overlay","settings-overlay","obsidian-confirm","reset-confirm","imprint-overlay","licenses-overlay"];function Bx(){for(const n of zx){const e=document.getElementById(n);if(e&&e.classList.contains("visible"))return!0}return!1}function Nh(){ha=null,Kt.pitch=0,Kt.roll=0,Kt.isActive=!1,Ti&&(Ti.hidden=!0,Ti.setAttribute("aria-hidden","true")),io&&(io.style.transform="translate(0px, 0px)")}function Hx(n){if(Ld&&n.pointerType==="touch"&&ha===null&&!Bx()){ha=n.pointerId,Rd=n.clientX,Cd=n.clientY,Ti&&(Ti.style.left=Rd+"px",Ti.style.top=Cd+"px",Ti.hidden=!1,Ti.setAttribute("aria-hidden","false")),io&&(io.style.transform="translate(0px, 0px)"),Kt.isActive=!0,ir=!0;try{Ts.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}}function Gx(n){if(n.pointerId!==ha)return;let e=n.clientX-Rd,t=n.clientY-Cd;const i=Math.hypot(e,t);let s=e,r=t;if(i>Fa&&(s=e*Fa/i,r=t*Fa/i),io&&(io.style.transform=`translate(${s.toFixed(1)}px, ${r.toFixed(1)}px)`),i<=gu)Kt.pitch=0,Kt.roll=0;else{const o=Math.min(1,(i-gu)/(Fa-gu));Kt.roll=e/i*o,Kt.pitch=t/i*o}ir=!0}function Df(n){if(n.pointerId===ha){try{Ts.releasePointerCapture?.(n.pointerId)}catch{}Nh()}}Ts&&(Ts.addEventListener("pointerdown",Hx),Ts.addEventListener("pointermove",Gx),Ts.addEventListener("pointerup",Df),Ts.addEventListener("pointercancel",Df));let fa=null;const pa=new Set;function Di(n,e){n&&n.classList.toggle("is-pressed",!!e)}function Vx(n){if(!Vc()){n.preventDefault();return}fa=n.pointerId,Kt.brake=!0,ir=!0,Di(ts,!0);try{ts.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}function Wx(n){n.pointerId===fa&&(fa=null,Kt.brake=!1,Di(ts,!1))}function _0(n){const e=pa.size===0;pa.add(n.pointerId),Kt.boost=!0,ir=!0,e&&y0(),Di(so,!0);try{n.currentTarget.setPointerCapture(n.pointerId)}catch{}n.preventDefault()}function b0(n){pa.delete(n.pointerId)&&pa.size===0&&(Kt.boost=!1,Di(so,!1))}const qx=140;let za=null;function Xx(n){v0(),ir=!0,Di(Jn,!0),za&&clearTimeout(za),za=setTimeout(()=>{Di(Jn,!1),za=null},qx),n.preventDefault()}function kh(n,e,t){n&&(n.addEventListener("pointerdown",e),n.addEventListener("pointerup",t),n.addEventListener("pointercancel",t),n.addEventListener("pointerleave",t),n.addEventListener("contextmenu",i=>i.preventDefault()))}kh(ts,Vx,Wx);kh(so,_0,b0);kh(kx,_0,b0);Jn&&(Jn.addEventListener("pointerdown",Xx),Jn.addEventListener("contextmenu",n=>n.preventDefault()));const jx=1e3;let Nf=null,kf=-1,Of=-1,Uf=-1,To=0,ic=!0,Ba=!1;function vu(n){n!==!ic&&(ic=!n,Jn&&(Jn.hidden=!n),n&&!Ba?(Pf?.classList.add("has-oneshot"),Ba=!0):!n&&Ba&&(Pf?.classList.remove("has-oneshot"),Ba=!1))}function $x(){const n=!Vc();n!==Nf&&(ts&&ts.classList.toggle("is-locked",n),n&&Kt.brake&&(Kt.brake=!1,fa=null,Di(ts,!1)),Nf=n);const e=Ys();if(e!==kf){if(Jn&&e>0){const i=mt.oneShot.tiers[e]?.color??mt.oneShot.tiers[0].color,s=i>>16&255,r=i>>8&255,o=i&255;Jn.style.setProperty("--tier-color",`rgba(${s}, ${r}, ${o}, 0.5)`)}kf=e}if(e===0)vu(!1),To=0;else{const i=D.boostFuelOneshot;Math.abs(i-Of)>.005&&(Jn&&Jn.style.setProperty("--fuel",i.toFixed(3)),Of=i),i<=.001?(To===0&&(To=performance.now()),!ic&&performance.now()-To>=jx&&vu(!1)):(To=0,ic&&vu(!0))}const t=D.boostFuelGrey;Math.abs(t-Uf)>.005&&(so&&so.style.setProperty("--fuel",t.toFixed(3)),Uf=t)}function S0(){Nh(),fa=null,pa.clear(),Kt.brake=!1,Kt.boost=!1,Di(ts,!1),Di(so,!1)}document.addEventListener("visibilitychange",()=>{document.hidden&&S0()});window.addEventListener("blur",S0);let M0=!1;function Yx(){!hi||hi.classList.contains("is-open")||(M0=D.paused,D.paused=!0,hi.classList.add("is-open"),hi.setAttribute("aria-modal","true"),ns&&(ns.classList.add("is-open"),ns.setAttribute("aria-hidden","false")))}function Oh(){!hi||!hi.classList.contains("is-open")||(hi.classList.remove("is-open"),hi.removeAttribute("aria-modal"),ns&&(ns.classList.remove("is-open"),ns.setAttribute("aria-hidden","true")),M0||(D.paused=!1))}If&&If.addEventListener("click",()=>{hi?.classList.contains("is-open")?Oh():Yx()});ns&&ns.addEventListener("click",Oh);document.addEventListener("keydown",n=>{n.key==="Escape"&&hi?.classList.contains("is-open")&&(Oh(),n.stopImmediatePropagation())});const Kx=5,Zx=3e3,Jx="1505",Ff=document.getElementById("imprint-easter-target"),ti=document.getElementById("testpin-overlay"),Fn=document.getElementById("testpin-input"),ro=document.getElementById("testpin-error"),zf=document.getElementById("testpin-ok"),Bf=document.getElementById("testpin-cancel");function Uh(n){J.testMode=n,xo(),Ut()}function Qx(){if(!ti){Uh(!0);return}ro&&ro.classList.remove("show"),Fn&&(Fn.value=""),ti.classList.add("visible"),ti.setAttribute("aria-hidden","false"),Fn&&setTimeout(()=>Fn.focus(),30)}function qc(){ti&&(ti.classList.remove("visible"),ti.setAttribute("aria-hidden","true"),Fn&&(Fn.value=""),ro&&ro.classList.remove("show"))}function w0(){Fn&&(Fn.value.trim()===Jx?(qc(),Uh(!0)):(ro&&ro.classList.add("show"),Fn.value="",Fn.focus()))}if(Ff){let n=0,e=null;Ff.addEventListener("click",()=>{n+=1,clearTimeout(e),e=setTimeout(()=>{n=0},Zx),n>=Kx&&(n=0,clearTimeout(e),J.testMode?Uh(!1):Qx())})}zf&&zf.addEventListener("click",w0);Bf&&Bf.addEventListener("click",qc);ti&&ti.addEventListener("click",n=>{n.target===ti&&qc()});Fn&&Fn.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),w0())});document.addEventListener("keydown",n=>{n.key==="Escape"&&(!ti||!ti.classList.contains("visible")||(n.stopImmediatePropagation(),qc()))},!0);const e_=`The MIT License

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
`,t_=`MIT License

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
`,n_=`Copyright 2006 The Inconsolata Project Authors (https://github.com/cyrealtype/Inconsolata)

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
`,i_=`Material Symbols
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
   limitations under the License.`,s_=[{name:"three.js",license:"MIT License",text:e_},{name:"Capacitor",license:"MIT License",text:t_},{name:"Inconsolata",license:"SIL Open Font License 1.1",text:n_},{name:"Material Symbols",license:"Apache License 2.0",text:i_}],Hf=document.getElementById("licenses-list");if(Hf)for(const n of s_){const e=document.createElement("section");e.className="license-item";const t=document.createElement("div");t.className="license-head";const i=document.createElement("span");i.className="license-name",i.textContent=n.name;const s=document.createElement("span");s.className="license-tag",s.textContent=n.license,t.append(i,s);const r=document.createElement("details");r.className="license-details";const o=document.createElement("summary");o.textContent="Lizenztext anzeigen";const a=document.createElement("pre");a.className="license-text",a.textContent=n.text.trim(),r.append(o,a),e.append(t,r),Hf.append(e)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="160",r_=0,Gf=1,o_=2,E0=1,a_=2,wi=3,cs=0,yn=1,$t=2,is=0,Wr=1,sc=2,Vf=3,Wf=4,l_=5,Rs=100,c_=101,u_=102,qf=103,Xf=104,d_=200,h_=201,f_=202,p_=203,Pd=204,Id=205,m_=206,g_=207,v_=208,y_=209,x_=210,__=211,b_=212,S_=213,M_=214,w_=0,E_=1,A_=2,rc=3,T_=4,R_=5,C_=6,L_=7,zh=0,P_=1,I_=2,ss=0,D_=1,N_=2,k_=3,O_=4,U_=5,F_=6,A0=300,oo=301,ao=302,Dd=303,Nd=304,Xc=306,kd=1e3,$n=1001,Od=1002,dn=1003,jf=1004,yu=1005,Nn=1006,z_=1007,ma=1008,rs=1009,B_=1010,H_=1011,Bh=1012,T0=1013,$i=1014,Yi=1015,ga=1016,R0=1017,C0=1018,Bs=1020,G_=1021,Yn=1023,V_=1024,W_=1025,Hs=1026,lo=1027,q_=1028,L0=1029,X_=1030,P0=1031,I0=1033,xu=33776,_u=33777,bu=33778,Su=33779,$f=35840,Yf=35841,Kf=35842,Zf=35843,D0=36196,Jf=37492,Qf=37496,ep=37808,tp=37809,np=37810,ip=37811,sp=37812,rp=37813,op=37814,ap=37815,lp=37816,cp=37817,up=37818,dp=37819,hp=37820,fp=37821,Mu=36492,pp=36494,mp=36495,j_=36283,gp=36284,vp=36285,yp=36286,N0=3e3,Gs=3001,$_=3200,Y_=3201,k0=0,K_=1,Un="",Dt="srgb",Ni="srgb-linear",Hh="display-p3",jc="display-p3-linear",oc="linear",dt="srgb",ac="rec709",lc="p3",dr=7680,xp=519,Z_=512,J_=513,Q_=514,O0=515,eb=516,tb=517,nb=518,ib=519,_p=35044,bp="300 es",Ud=1035,Ri=2e3,cc=2001;class _o{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sp=1234567;const qr=Math.PI/180,va=180/Math.PI;function sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function jt(n,e,t){return Math.max(e,Math.min(t,n))}function Gh(n,e){return(n%e+e)%e}function sb(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function rb(n,e,t){return n!==e?(t-n)/(e-n):0}function ta(n,e,t){return(1-t)*n+t*e}function ob(n,e,t,i){return ta(n,e,1-Math.exp(-t*i))}function ab(n,e=1){return e-Math.abs(Gh(n,e*2)-e)}function lb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function cb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ub(n,e){return n+Math.floor(Math.random()*(e-n+1))}function db(n,e){return n+Math.random()*(e-n)}function hb(n){return n*(.5-Math.random())}function fb(n){n!==void 0&&(Sp=n);let e=Sp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pb(n){return n*qr}function mb(n){return n*va}function Fd(n){return(n&n-1)===0&&n!==0}function gb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function uc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vb(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),d=r((e-i)/2),h=o((e-i)/2),m=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*d,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ki={DEG2RAD:qr,RAD2DEG:va,generateUUID:sr,clamp:jt,euclideanModulo:Gh,mapLinear:sb,inverseLerp:rb,lerp:ta,damp:ob,pingpong:ab,smoothstep:lb,smootherstep:cb,randInt:ub,randFloat:db,randFloatSpread:hb,seededRandom:fb,degToRad:pb,radToDeg:mb,isPowerOfTwo:Fd,ceilPowerOfTwo:gb,floorPowerOfTwo:uc,setQuaternionFromProperEuler:vb,normalize:an,denormalize:Pr};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,s,r,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],y=s[0],p=s[3],f=s[6],_=s[1],v=s[4],S=s[7],R=s[2],E=s[5],A=s[8];return r[0]=o*y+a*_+l*R,r[3]=o*p+a*v+l*E,r[6]=o*f+a*S+l*A,r[1]=c*y+u*_+d*R,r[4]=c*p+u*v+d*E,r[7]=c*f+u*S+d*A,r[2]=h*y+m*_+g*R,r[5]=h*p+m*v+g*E,r[8]=h*f+m*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,m=c*r-o*l,g=t*d+i*h+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(s*c-u*i)*y,e[2]=(a*i-s*o)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-a*t)*y,e[6]=m*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*r)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(wu.makeScale(e,t)),this}rotate(e){return this.premultiply(wu.makeRotation(-e)),this}translate(e,t){return this.premultiply(wu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wu=new He;function U0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function dc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function yb(){const n=dc("canvas");return n.style.display="block",n}const Mp={};function na(n){n in Mp||(Mp[n]=!0,console.warn(n))}const wp=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ep=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ha={[Ni]:{transfer:oc,primaries:ac,toReference:n=>n,fromReference:n=>n},[Dt]:{transfer:dt,primaries:ac,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[jc]:{transfer:oc,primaries:lc,toReference:n=>n.applyMatrix3(Ep),fromReference:n=>n.applyMatrix3(wp)},[Hh]:{transfer:dt,primaries:lc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ep),fromReference:n=>n.applyMatrix3(wp).convertLinearToSRGB()}},xb=new Set([Ni,jc]),st={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!xb.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ha[e].toReference,s=Ha[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ha[n].primaries},getTransfer:function(n){return n===Un?oc:Ha[n].transfer}};function Xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Eu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let hr;class F0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hr===void 0&&(hr=dc("canvas")),hr.width=e.width,hr.height=e.height;const i=hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=hr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=dc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xr(t[i]/255)*255):t[i]=Xr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _b=0;class z0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=sr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Au(s[o].image)):r.push(Au(s[o]))}else r=Au(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Au(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?F0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bb=0;class Rn extends _o{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,i=$n,s=$n,r=Nn,o=ma,a=Yn,l=rs,c=Rn.DEFAULT_ANISOTROPY,u=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=sr(),this.name="",this.source=new z0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Gs?Dt:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?Gs:N0}set encoding(e){na("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Gs?Dt:Un}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=A0;Rn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,i=0,s=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],y=l[2],p=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(m+1)/2,R=(f+1)/2,E=(u+h)/4,A=(d+y)/4,k=(g+p)/4;return v>S&&v>R?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=E/i,r=A/i):S>R?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=E/s,r=k/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=A/r,s=k/r),this.set(i,s,r,t),this}let _=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(d-y)/_,this.z=(h-u)/_,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sb extends _o{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(na("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Gs?Dt:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Rn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new z0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ks extends Sb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class B0 extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mb extends Rn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class At{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const h=r[o+0],m=r[o+1],g=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==h||c!==m||u!==g){let p=1-a;const f=l*h+c*m+u*g+d*y,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const R=Math.sqrt(v),E=Math.atan2(R,f*_);p=Math.sin(p*E)/R,a=Math.sin(a*E)/R}const S=a*_;if(l=l*p+h*S,c=c*p+m*S,u=u*p+g*S,d=d*p+y*S,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],h=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*d+l*m-c*h,e[t+1]=l*g+u*h+c*d-a*m,e[t+2]=c*g+u*m+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),h=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ap.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ap.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tu.copy(this).projectOnVector(e),this.sub(Tu)}reflect(e){return this.sub(Tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tu=new I,Ap=new At;class rr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(r,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ga.copy(i.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),Va.subVectors(this.max,Ro),fr.subVectors(e.a,Ro),pr.subVectors(e.b,Ro),mr.subVectors(e.c,Ro),Ui.subVectors(pr,fr),Fi.subVectors(mr,pr),ys.subVectors(fr,mr);let t=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-ys.z,ys.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,ys.z,0,-ys.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-ys.y,ys.x,0];return!Ru(t,fr,pr,mr,Va)||(t=[1,0,0,0,1,0,0,0,1],!Ru(t,fr,pr,mr,Va))?!1:(Wa.crossVectors(Ui,Fi),t=[Wa.x,Wa.y,Wa.z],Ru(t,fr,pr,mr,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new I,new I,new I,new I,new I,new I,new I,new I],Vn=new I,Ga=new rr,fr=new I,pr=new I,mr=new I,Ui=new I,Fi=new I,ys=new I,Ro=new I,Va=new I,Wa=new I,xs=new I;function Ru(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){xs.fromArray(n,r);const a=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=e.dot(xs),c=t.dot(xs),u=i.dot(xs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const wb=new rr,Co=new I,Cu=new I;class ps{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wb.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const t=Co.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Co,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Cu)),this.expandByPoint(Co.copy(e.center).sub(Cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new I,Lu=new I,qa=new I,zi=new I,Pu=new I,Xa=new I,Iu=new I;class Vh{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Lu.copy(e).add(t).multiplyScalar(.5),qa.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(Lu);const r=e.distanceTo(t)*.5,o=-this.direction.dot(qa),a=zi.dot(this.direction),l=-zi.dot(qa),c=zi.lengthSq(),u=Math.abs(1-o*o);let d,h,m,g;if(u>0)if(d=o*l-a,h=o*a-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const y=1/u;d*=y,h*=y,m=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Lu).addScaledVector(qa,h),m}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,s,r){Pu.subVectors(t,e),Xa.subVectors(i,e),Iu.crossVectors(Pu,Xa);let o=this.direction.dot(Iu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(Xa.crossVectors(zi,Xa));if(l<0)return null;const c=a*this.direction.dot(Pu.cross(zi));if(c<0||l+c>o)return null;const u=-a*zi.dot(Iu);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,i,s,r,o,a,l,c,u,d,h,m,g,y,p){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,d,h,m,g,y,p)}set(e,t,i,s,r,o,a,l,c,u,d,h,m,g,y,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/gr.setFromMatrixColumn(e,0).length(),r=1/gr.setFromMatrixColumn(e,1).length(),o=1/gr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,m=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=h-y*c,t[9]=-a*l,t[2]=y-h*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,g=c*u,y=c*d;t[0]=h+y*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=y+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,g=c*u,y=c*d;t[0]=h-y*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=y-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+g,t[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,m=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eb,e,Ab)}lookAt(e,t,i){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Bi.crossVectors(i,Sn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Bi.crossVectors(i,Sn)),Bi.normalize(),ja.crossVectors(Sn,Bi),s[0]=Bi.x,s[4]=ja.x,s[8]=Sn.x,s[1]=Bi.y,s[5]=ja.y,s[9]=Sn.y,s[2]=Bi.z,s[6]=ja.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],y=i[6],p=i[10],f=i[14],_=i[3],v=i[7],S=i[11],R=i[15],E=s[0],A=s[4],k=s[8],b=s[12],w=s[1],G=s[5],W=s[9],te=s[13],U=s[2],q=s[6],$=s[10],K=s[14],B=s[3],Q=s[7],le=s[11],de=s[15];return r[0]=o*E+a*w+l*U+c*B,r[4]=o*A+a*G+l*q+c*Q,r[8]=o*k+a*W+l*$+c*le,r[12]=o*b+a*te+l*K+c*de,r[1]=u*E+d*w+h*U+m*B,r[5]=u*A+d*G+h*q+m*Q,r[9]=u*k+d*W+h*$+m*le,r[13]=u*b+d*te+h*K+m*de,r[2]=g*E+y*w+p*U+f*B,r[6]=g*A+y*G+p*q+f*Q,r[10]=g*k+y*W+p*$+f*le,r[14]=g*b+y*te+p*K+f*de,r[3]=_*E+v*w+S*U+R*B,r[7]=_*A+v*G+S*q+R*Q,r[11]=_*k+v*W+S*$+R*le,r[15]=_*b+v*te+S*K+R*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],y=e[7],p=e[11],f=e[15];return g*(+r*l*d-s*c*d-r*a*h+i*c*h+s*a*m-i*l*m)+y*(+t*l*m-t*c*h+r*o*h-s*o*m+s*c*u-r*l*u)+p*(+t*c*d-t*a*m-r*o*d+i*o*m+r*a*u-i*c*u)+f*(-s*a*u-t*l*d+t*a*h+s*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],y=e[13],p=e[14],f=e[15],_=d*p*c-y*h*c+y*l*m-a*p*m-d*l*f+a*h*f,v=g*h*c-u*p*c-g*l*m+o*p*m+u*l*f-o*h*f,S=u*y*c-g*d*c+g*a*m-o*y*m-u*a*f+o*d*f,R=g*d*l-u*y*l-g*a*h+o*y*h+u*a*p-o*d*p,E=t*_+i*v+s*S+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(y*h*r-d*p*r-y*s*m+i*p*m+d*s*f-i*h*f)*A,e[2]=(a*p*r-y*l*r+y*s*c-i*p*c-a*s*f+i*l*f)*A,e[3]=(d*l*r-a*h*r-d*s*c+i*h*c+a*s*m-i*l*m)*A,e[4]=v*A,e[5]=(u*p*r-g*h*r+g*s*m-t*p*m-u*s*f+t*h*f)*A,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*f-t*l*f)*A,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*m+t*l*m)*A,e[8]=S*A,e[9]=(g*d*r-u*y*r-g*i*m+t*y*m+u*i*f-t*d*f)*A,e[10]=(o*y*r-g*a*r+g*i*c-t*y*c-o*i*f+t*a*f)*A,e[11]=(u*a*r-o*d*r-u*i*c+t*d*c+o*i*m-t*a*m)*A,e[12]=R*A,e[13]=(u*y*s-g*d*s+g*i*h-t*y*h-u*i*p+t*d*p)*A,e[14]=(g*a*s-o*y*s-g*i*l+t*y*l+o*i*p-t*a*p)*A,e[15]=(o*d*s-u*a*s+u*i*l-t*d*l-o*i*h+t*a*h)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,m=r*u,g=r*d,y=o*u,p=o*d,f=a*d,_=l*c,v=l*u,S=l*d,R=i.x,E=i.y,A=i.z;return s[0]=(1-(y+f))*R,s[1]=(m+S)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(m-S)*E,s[5]=(1-(h+f))*E,s[6]=(p+_)*E,s[7]=0,s[8]=(g+v)*A,s[9]=(p-_)*A,s[10]=(1-(h+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=gr.set(s[0],s[1],s[2]).length();const o=gr.set(s[4],s[5],s[6]).length(),a=gr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wn.copy(this);const c=1/r,u=1/o,d=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,t.setFromRotationMatrix(Wn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ri){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),h=(i+s)/(i-s);let m,g;if(a===Ri)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===cc)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ri){const l=this.elements,c=1/(t-e),u=1/(i-s),d=1/(o-r),h=(t+e)*c,m=(i+s)*u;let g,y;if(a===Ri)g=(o+r)*d,y=-2*d;else if(a===cc)g=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const gr=new I,Wn=new Je,Eb=new I(0,0,0),Ab=new I(1,1,1),Bi=new I,ja=new I,Sn=new I,Tp=new Je,Rp=new At;class Bn{constructor(e=0,t=0,i=0,s=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rp.setFromEuler(this),this.setFromQuaternion(Rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class H0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tb=0;const Cp=new I,vr=new At,_i=new Je,$a=new I,Lo=new I,Rb=new I,Cb=new At,Lp=new I(1,0,0),Pp=new I(0,1,0),Ip=new I(0,0,1),Lb={type:"added"},Pb={type:"removed"};class Nt extends _o{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new I,t=new Bn,i=new At,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new He}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new H0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(Lp,e)}rotateY(e){return this.rotateOnAxis(Pp,e)}rotateZ(e){return this.rotateOnAxis(Ip,e)}translateOnAxis(e,t){return Cp.copy(e).applyQuaternion(this.quaternion),this.position.add(Cp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lp,e)}translateY(e){return this.translateOnAxis(Pp,e)}translateZ(e){return this.translateOnAxis(Ip,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$a.copy(e):$a.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Lo,$a,this.up):_i.lookAt($a,Lo,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),vr.setFromRotationMatrix(_i),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Lb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pb)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,Rb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,Cb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Nt.DEFAULT_UP=new I(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new I,bi=new I,Du=new I,Si=new I,yr=new I,xr=new I,Dp=new I,Nu=new I,ku=new I,Ou=new I;let Ya=!1;class kn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qn.subVectors(e,t),s.cross(qn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qn.subVectors(s,t),bi.subVectors(i,t),Du.subVectors(e,t);const o=qn.dot(qn),a=qn.dot(bi),l=qn.dot(Du),c=bi.dot(bi),u=bi.dot(Du),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,m=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(e,t,i,s,r,o,a,l){return Ya===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ya=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static isFrontFacing(e,t,i,s){return qn.subVectors(i,t),bi.subVectors(e,t),qn.cross(bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),qn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Ya===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ya=!0),kn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return kn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;yr.subVectors(s,i),xr.subVectors(r,i),Nu.subVectors(e,i);const l=yr.dot(Nu),c=xr.dot(Nu);if(l<=0&&c<=0)return t.copy(i);ku.subVectors(e,s);const u=yr.dot(ku),d=xr.dot(ku);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(yr,o);Ou.subVectors(e,r);const m=yr.dot(Ou),g=xr.dot(Ou);if(g>=0&&m<=g)return t.copy(r);const y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(xr,a);const p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return Dp.subVectors(r,s),a=(d-u)/(d-u+(m-g)),t.copy(s).addScaledVector(Dp,a);const f=1/(p+y+h);return o=y*f,a=h*f,t.copy(i).addScaledVector(yr,o).addScaledVector(xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const G0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Uu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ae{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=st.workingColorSpace){if(e=Gh(e,1),t=jt(t,0,1),i=jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Uu(o,r,e+1/3),this.g=Uu(o,r,e),this.b=Uu(o,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=Dt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const i=G0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=Eu(e.r),this.g=Eu(e.g),this.b=Eu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return st.fromWorkingColorSpace(Qt.copy(this),e),Math.round(jt(Qt.r*255,0,255))*65536+Math.round(jt(Qt.g*255,0,255))*256+Math.round(jt(Qt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Qt.copy(this),t);const i=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Dt){st.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,s=Qt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(Ka);const i=ta(Hi.h,Ka.h,t),s=ta(Hi.s,Ka.s,t),r=ta(Hi.l,Ka.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Ae;Ae.NAMES=G0;let Ib=0;class or extends _o{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=Wr,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Id,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=rc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pd&&(i.blendSrc=this.blendSrc),this.blendDst!==Id&&(i.blendDst=this.blendDst),this.blendEquation!==Rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Hn extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new I,Za=new me;class Pt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_p,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_p&&(e.usage=this.usage),e}}class V0 extends Pt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class W0 extends Pt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class et extends Pt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Db=0;const Pn=new Je,Fu=new Nt,_r=new I,Mn=new rr,Po=new rr,Bt=new I;class vt extends _o{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U0(e)?W0:V0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(Mn.min,Po.min),Mn.expandByPoint(Bt),Bt.addVectors(Mn.max,Po.max),Mn.expandByPoint(Bt)):(Mn.expandByPoint(Po.min),Mn.expandByPoint(Po.max))}Mn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(_r.fromBufferAttribute(e,c),Bt.add(_r)),s=Math.max(s,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let w=0;w<a;w++)c[w]=new I,u[w]=new I;const d=new I,h=new I,m=new I,g=new me,y=new me,p=new me,f=new I,_=new I;function v(w,G,W){d.fromArray(s,w*3),h.fromArray(s,G*3),m.fromArray(s,W*3),g.fromArray(o,w*2),y.fromArray(o,G*2),p.fromArray(o,W*2),h.sub(d),m.sub(d),y.sub(g),p.sub(g);const te=1/(y.x*p.y-p.x*y.y);isFinite(te)&&(f.copy(h).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(te),_.copy(m).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(te),c[w].add(f),c[G].add(f),c[W].add(f),u[w].add(_),u[G].add(_),u[W].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let w=0,G=S.length;w<G;++w){const W=S[w],te=W.start,U=W.count;for(let q=te,$=te+U;q<$;q+=3)v(i[q+0],i[q+1],i[q+2])}const R=new I,E=new I,A=new I,k=new I;function b(w){A.fromArray(r,w*3),k.copy(A);const G=c[w];R.copy(G),R.sub(A.multiplyScalar(A.dot(G))).normalize(),E.crossVectors(k,G);const te=E.dot(u[w])<0?-1:1;l[w*4]=R.x,l[w*4+1]=R.y,l[w*4+2]=R.z,l[w*4+3]=te}for(let w=0,G=S.length;w<G;++w){const W=S[w],te=W.start,U=W.count;for(let q=te,$=te+U;q<$;q+=3)b(i[q+0]),b(i[q+1]),b(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*u;for(let f=0;f<u;f++)h[g++]=c[m++]}return new Pt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Np=new Je,_s=new Vh,Ja=new ps,kp=new I,br=new I,Sr=new I,Mr=new I,zu=new I,Qa=new I,el=new me,tl=new me,nl=new me,Op=new I,Up=new I,Fp=new I,il=new I,sl=new I;class tt extends Nt{constructor(e=new vt,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(zu.fromBufferAttribute(d,e),o?Qa.addScaledVector(zu,u):Qa.addScaledVector(zu.sub(t),u))}t.add(Qa)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(r),_s.copy(e.ray).recast(e.near),!(Ja.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Ja,kp)===null||_s.origin.distanceToSquared(kp)>(e.far-e.near)**2))&&(Np.copy(r).invert(),_s.copy(e.ray).applyMatrix4(Np),!(i.boundingBox!==null&&_s.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const p=h[g],f=o[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,R=v;S<R;S+=3){const E=a.getX(S),A=a.getX(S+1),k=a.getX(S+2);s=rl(this,f,e,i,c,u,d,E,A,k),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){const _=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);s=rl(this,o,e,i,c,u,d,_,v,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const p=h[g],f=o[p.materialIndex],_=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=_,R=v;S<R;S+=3){const E=S,A=S+1,k=S+2;s=rl(this,f,e,i,c,u,d,E,A,k),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){const _=p,v=p+1,S=p+2;s=rl(this,o,e,i,c,u,d,_,v,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Nb(n,e,t,i,s,r,o,a){let l;if(e.side===yn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===cs,a),l===null)return null;sl.copy(a),sl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(sl);return c<t.near||c>t.far?null:{distance:c,point:sl.clone(),object:n}}function rl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,br),n.getVertexPosition(l,Sr),n.getVertexPosition(c,Mr);const u=Nb(n,e,t,i,br,Sr,Mr,il);if(u){s&&(el.fromBufferAttribute(s,a),tl.fromBufferAttribute(s,l),nl.fromBufferAttribute(s,c),u.uv=kn.getInterpolation(il,br,Sr,Mr,el,tl,nl,new me)),r&&(el.fromBufferAttribute(r,a),tl.fromBufferAttribute(r,l),nl.fromBufferAttribute(r,c),u.uv1=kn.getInterpolation(il,br,Sr,Mr,el,tl,nl,new me),u.uv2=u.uv1),o&&(Op.fromBufferAttribute(o,a),Up.fromBufferAttribute(o,l),Fp.fromBufferAttribute(o,c),u.normal=kn.getInterpolation(il,br,Sr,Mr,Op,Up,Fp,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};kn.getNormal(br,Sr,Mr,d.normal),u.face=d}return u}class en extends vt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new et(c,3)),this.setAttribute("normal",new et(u,3)),this.setAttribute("uv",new et(d,2));function g(y,p,f,_,v,S,R,E,A,k,b){const w=S/A,G=R/k,W=S/2,te=R/2,U=E/2,q=A+1,$=k+1;let K=0,B=0;const Q=new I;for(let le=0;le<$;le++){const de=le*G-te;for(let xe=0;xe<q;xe++){const ne=xe*w-W;Q[y]=ne*_,Q[p]=de*v,Q[f]=U,c.push(Q.x,Q.y,Q.z),Q[y]=0,Q[p]=0,Q[f]=E>0?1:-1,u.push(Q.x,Q.y,Q.z),d.push(xe/A),d.push(1-le/k),K+=1}}for(let le=0;le<k;le++)for(let de=0;de<A;de++){const xe=h+de+q*le,ne=h+de+q*(le+1),O=h+(de+1)+q*(le+1),N=h+(de+1)+q*le;l.push(xe,ne,N),l.push(ne,O,N),B+=6}a.addGroup(m,B,b),m+=B,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function co(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=co(n[t]);for(const s in i)e[s]=i[s]}return e}function kb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function q0(n){return n.getRenderTarget()===null?n.outputColorSpace:st.workingColorSpace}const Ob={clone:co,merge:ln};var Ub=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class us extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ub,this.fragmentShader=Fb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=kb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class X0 extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends X0{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wr=-90,Er=1;class zb extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(wr,Er,e,t);s.layers=this.layers,this.add(s);const r=new wn(wr,Er,e,t);r.layers=this.layers,this.add(r);const o=new wn(wr,Er,e,t);o.layers=this.layers,this.add(o);const a=new wn(wr,Er,e,t);a.layers=this.layers,this.add(a);const l=new wn(wr,Er,e,t);l.layers=this.layers,this.add(l);const c=new wn(wr,Er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ri)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class j0 extends Rn{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:oo,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bb extends Ks{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(na("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Gs?Dt:Un),this.texture=new j0(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new us({name:"CubemapFromEquirect",uniforms:co(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:is});r.uniforms.tEquirect.value=t;const o=new tt(s,r),a=t.minFilter;return t.minFilter===ma&&(t.minFilter=Nn),new zb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Bu=new I,Hb=new I,Gb=new He;class ws{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Bu.subVectors(i,t).cross(Hb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Bu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gb.getNormalMatrix(e),s=this.coplanarPoint(Bu).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new ps,ol=new I;class Wh{constructor(e=new ws,t=new ws,i=new ws,s=new ws,r=new ws,o=new ws){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ri){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],m=s[8],g=s[9],y=s[10],p=s[11],f=s[12],_=s[13],v=s[14],S=s[15];if(i[0].setComponents(l-r,h-c,p-m,S-f).normalize(),i[1].setComponents(l+r,h+c,p+m,S+f).normalize(),i[2].setComponents(l+o,h+u,p+g,S+_).normalize(),i[3].setComponents(l-o,h-u,p-g,S-_).normalize(),i[4].setComponents(l-a,h-d,p-y,S-v).normalize(),t===Ri)i[5].setComponents(l+a,h+d,p+y,S+v).normalize();else if(t===cc)i[5].setComponents(a,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){return bs.center.set(0,0,0),bs.radius=.7071067811865476,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ol.x=s.normal.x>0?e.max.x:e.min.x,ol.y=s.normal.y>0?e.max.y:e.min.y,ol.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $0(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Vb(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const d=c.array,h=c.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,h),c.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,d){const h=u.array,m=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let y=0,p=g.length;y<p;y++){const f=g[y];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:o,remove:a,update:l}}class ar extends vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=e/a,h=t/l,m=[],g=[],y=[],p=[];for(let f=0;f<u;f++){const _=f*h-o;for(let v=0;v<c;v++){const S=v*d-r;g.push(S,-_,0),y.push(0,0,1),p.push(v/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const v=_+c*f,S=_+c*(f+1),R=_+1+c*(f+1),E=_+1+c*f;m.push(v,S,E),m.push(S,R,E)}this.setIndex(m),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(y,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qb=`#ifdef USE_ALPHAHASH
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
#endif`,Xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$b=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kb=`#ifdef USE_AOMAP
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
#endif`,Zb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jb=`#ifdef USE_BATCHING
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
#endif`,Qb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,eS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iS=`#ifdef USE_IRIDESCENCE
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
#endif`,sS=`#ifdef USE_BUMPMAP
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
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fS=`#define PI 3.141592653589793
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
} // validated`,pS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mS=`vec3 transformedNormal = objectNormal;
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
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_S="gl_FragColor = linearToOutputTexel( gl_FragColor );",bS=`
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
}`,SS=`#ifdef USE_ENVMAP
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
#endif`,MS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wS=`#ifdef USE_ENVMAP
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
#endif`,ES=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AS=`#ifdef USE_ENVMAP
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
#endif`,TS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PS=`#ifdef USE_GRADIENTMAP
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
}`,IS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,DS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OS=`uniform bool receiveShadow;
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
#endif`,US=`#ifdef USE_ENVMAP
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
#endif`,FS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GS=`PhysicalMaterial material;
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
#endif`,VS=`struct PhysicalMaterial {
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
}`,WS=`
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
#endif`,qS=`#if defined( RE_IndirectDiffuse )
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
#endif`,XS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$S=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,KS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ZS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eM=`#if defined( USE_POINTS_UV )
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
#endif`,tM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sM=`#ifdef USE_MORPHNORMALS
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
#endif`,rM=`#ifdef USE_MORPHTARGETS
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
#endif`,oM=`#ifdef USE_MORPHTARGETS
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
#endif`,aM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hM=`#ifdef USE_NORMALMAP
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
#endif`,fM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_M=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,RM=`float getShadowMask() {
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
}`,CM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LM=`#ifdef USE_SKINNING
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
#endif`,PM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,IM=`#ifdef USE_SKINNING
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
#endif`,DM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UM=`#ifdef USE_TRANSMISSION
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
#endif`,FM=`#ifdef USE_TRANSMISSION
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
#endif`,zM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WM=`uniform sampler2D t2D;
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
}`,qM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`#include <common>
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
}`,KM=`#if DEPTH_PACKING == 3200
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
}`,ZM=`#define DISTANCE
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
}`,JM=`#define DISTANCE
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
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ew=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tw=`uniform float scale;
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
}`,nw=`uniform vec3 diffuse;
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
}`,iw=`#include <common>
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
}`,sw=`uniform vec3 diffuse;
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
}`,rw=`#define LAMBERT
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
}`,ow=`#define LAMBERT
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
}`,aw=`#define MATCAP
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
}`,lw=`#define MATCAP
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
}`,cw=`#define NORMAL
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
}`,uw=`#define NORMAL
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
}`,dw=`#define PHONG
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
}`,hw=`#define PHONG
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
}`,fw=`#define STANDARD
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
}`,pw=`#define STANDARD
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
}`,mw=`#define TOON
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
}`,gw=`#define TOON
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
}`,vw=`uniform float size;
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
}`,yw=`uniform vec3 diffuse;
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
}`,xw=`#include <common>
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
}`,_w=`uniform vec3 color;
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
}`,bw=`uniform float rotation;
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
}`,Sw=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Wb,alphahash_pars_fragment:qb,alphamap_fragment:Xb,alphamap_pars_fragment:jb,alphatest_fragment:$b,alphatest_pars_fragment:Yb,aomap_fragment:Kb,aomap_pars_fragment:Zb,batching_pars_vertex:Jb,batching_vertex:Qb,begin_vertex:eS,beginnormal_vertex:tS,bsdfs:nS,iridescence_fragment:iS,bumpmap_pars_fragment:sS,clipping_planes_fragment:rS,clipping_planes_pars_fragment:oS,clipping_planes_pars_vertex:aS,clipping_planes_vertex:lS,color_fragment:cS,color_pars_fragment:uS,color_pars_vertex:dS,color_vertex:hS,common:fS,cube_uv_reflection_fragment:pS,defaultnormal_vertex:mS,displacementmap_pars_vertex:gS,displacementmap_vertex:vS,emissivemap_fragment:yS,emissivemap_pars_fragment:xS,colorspace_fragment:_S,colorspace_pars_fragment:bS,envmap_fragment:SS,envmap_common_pars_fragment:MS,envmap_pars_fragment:wS,envmap_pars_vertex:ES,envmap_physical_pars_fragment:US,envmap_vertex:AS,fog_vertex:TS,fog_pars_vertex:RS,fog_fragment:CS,fog_pars_fragment:LS,gradientmap_pars_fragment:PS,lightmap_fragment:IS,lightmap_pars_fragment:DS,lights_lambert_fragment:NS,lights_lambert_pars_fragment:kS,lights_pars_begin:OS,lights_toon_fragment:FS,lights_toon_pars_fragment:zS,lights_phong_fragment:BS,lights_phong_pars_fragment:HS,lights_physical_fragment:GS,lights_physical_pars_fragment:VS,lights_fragment_begin:WS,lights_fragment_maps:qS,lights_fragment_end:XS,logdepthbuf_fragment:jS,logdepthbuf_pars_fragment:$S,logdepthbuf_pars_vertex:YS,logdepthbuf_vertex:KS,map_fragment:ZS,map_pars_fragment:JS,map_particle_fragment:QS,map_particle_pars_fragment:eM,metalnessmap_fragment:tM,metalnessmap_pars_fragment:nM,morphcolor_vertex:iM,morphnormal_vertex:sM,morphtarget_pars_vertex:rM,morphtarget_vertex:oM,normal_fragment_begin:aM,normal_fragment_maps:lM,normal_pars_fragment:cM,normal_pars_vertex:uM,normal_vertex:dM,normalmap_pars_fragment:hM,clearcoat_normal_fragment_begin:fM,clearcoat_normal_fragment_maps:pM,clearcoat_pars_fragment:mM,iridescence_pars_fragment:gM,opaque_fragment:vM,packing:yM,premultiplied_alpha_fragment:xM,project_vertex:_M,dithering_fragment:bM,dithering_pars_fragment:SM,roughnessmap_fragment:MM,roughnessmap_pars_fragment:wM,shadowmap_pars_fragment:EM,shadowmap_pars_vertex:AM,shadowmap_vertex:TM,shadowmask_pars_fragment:RM,skinbase_vertex:CM,skinning_pars_vertex:LM,skinning_vertex:PM,skinnormal_vertex:IM,specularmap_fragment:DM,specularmap_pars_fragment:NM,tonemapping_fragment:kM,tonemapping_pars_fragment:OM,transmission_fragment:UM,transmission_pars_fragment:FM,uv_pars_fragment:zM,uv_pars_vertex:BM,uv_vertex:HM,worldpos_vertex:GM,background_vert:VM,background_frag:WM,backgroundCube_vert:qM,backgroundCube_frag:XM,cube_vert:jM,cube_frag:$M,depth_vert:YM,depth_frag:KM,distanceRGBA_vert:ZM,distanceRGBA_frag:JM,equirect_vert:QM,equirect_frag:ew,linedashed_vert:tw,linedashed_frag:nw,meshbasic_vert:iw,meshbasic_frag:sw,meshlambert_vert:rw,meshlambert_frag:ow,meshmatcap_vert:aw,meshmatcap_frag:lw,meshnormal_vert:cw,meshnormal_frag:uw,meshphong_vert:dw,meshphong_frag:hw,meshphysical_vert:fw,meshphysical_frag:pw,meshtoon_vert:mw,meshtoon_frag:gw,points_vert:vw,points_frag:yw,shadow_vert:xw,shadow_frag:_w,sprite_vert:bw,sprite_frag:Sw},Se={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},oi={basic:{uniforms:ln([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:ln([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ae(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:ln([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:ln([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:ln([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ae(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:ln([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:ln([Se.points,Se.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:ln([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:ln([Se.common,Se.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:ln([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:ln([Se.sprite,Se.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:ln([Se.common,Se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:ln([Se.lights,Se.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};oi.physical={uniforms:ln([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const al={r:0,b:0,g:0};function Mw(n,e,t,i,s,r,o){const a=new Ae(0);let l=r===!0?0:1,c,u,d=null,h=0,m=null;function g(p,f){let _=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),_=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Xc)?(u===void 0&&(u=new tt(new en(1,1,1),new us({name:"BackgroundCubeMaterial",uniforms:co(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=st.getTransfer(v.colorSpace)!==dt,(d!==v||h!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new tt(new ar(2,2),new us({name:"BackgroundMaterial",uniforms:co(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=st.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,f){p.getRGB(al,q0(n)),i.buffers.color.setClear(al.r,al.g,al.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:g}}function ww(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function d(U,q,$,K,B){let Q=!1;if(o){const le=y(K,$,q);c!==le&&(c=le,m(c.object)),Q=f(U,K,$,B),Q&&_(U,K,$,B)}else{const le=q.wireframe===!0;(c.geometry!==K.id||c.program!==$.id||c.wireframe!==le)&&(c.geometry=K.id,c.program=$.id,c.wireframe=le,Q=!0)}B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,k(U,q,$,K),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function h(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(U){return i.isWebGL2?n.bindVertexArray(U):r.bindVertexArrayOES(U)}function g(U){return i.isWebGL2?n.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function y(U,q,$){const K=$.wireframe===!0;let B=a[U.id];B===void 0&&(B={},a[U.id]=B);let Q=B[q.id];Q===void 0&&(Q={},B[q.id]=Q);let le=Q[K];return le===void 0&&(le=p(h()),Q[K]=le),le}function p(U){const q=[],$=[],K=[];for(let B=0;B<s;B++)q[B]=0,$[B]=0,K[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:$,attributeDivisors:K,object:U,attributes:{},index:null}}function f(U,q,$,K){const B=c.attributes,Q=q.attributes;let le=0;const de=$.getAttributes();for(const xe in de)if(de[xe].location>=0){const O=B[xe];let N=Q[xe];if(N===void 0&&(xe==="instanceMatrix"&&U.instanceMatrix&&(N=U.instanceMatrix),xe==="instanceColor"&&U.instanceColor&&(N=U.instanceColor)),O===void 0||O.attribute!==N||N&&O.data!==N.data)return!0;le++}return c.attributesNum!==le||c.index!==K}function _(U,q,$,K){const B={},Q=q.attributes;let le=0;const de=$.getAttributes();for(const xe in de)if(de[xe].location>=0){let O=Q[xe];O===void 0&&(xe==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),xe==="instanceColor"&&U.instanceColor&&(O=U.instanceColor));const N={};N.attribute=O,O&&O.data&&(N.data=O.data),B[xe]=N,le++}c.attributes=B,c.attributesNum=le,c.index=K}function v(){const U=c.newAttributes;for(let q=0,$=U.length;q<$;q++)U[q]=0}function S(U){R(U,0)}function R(U,q){const $=c.newAttributes,K=c.enabledAttributes,B=c.attributeDivisors;$[U]=1,K[U]===0&&(n.enableVertexAttribArray(U),K[U]=1),B[U]!==q&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,q),B[U]=q)}function E(){const U=c.newAttributes,q=c.enabledAttributes;for(let $=0,K=q.length;$<K;$++)q[$]!==U[$]&&(n.disableVertexAttribArray($),q[$]=0)}function A(U,q,$,K,B,Q,le){le===!0?n.vertexAttribIPointer(U,q,$,B,Q):n.vertexAttribPointer(U,q,$,K,B,Q)}function k(U,q,$,K){if(i.isWebGL2===!1&&(U.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const B=K.attributes,Q=$.getAttributes(),le=q.defaultAttributeValues;for(const de in Q){const xe=Q[de];if(xe.location>=0){let ne=B[de];if(ne===void 0&&(de==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),de==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor)),ne!==void 0){const O=ne.normalized,N=ne.itemSize,C=t.get(ne);if(C===void 0)continue;const T=C.buffer,ee=C.type,ce=C.bytesPerElement,X=i.isWebGL2===!0&&(ee===n.INT||ee===n.UNSIGNED_INT||ne.gpuType===T0);if(ne.isInterleavedBufferAttribute){const he=ne.data,P=he.stride,se=ne.offset;if(he.isInstancedInterleavedBuffer){for(let z=0;z<xe.locationSize;z++)R(xe.location+z,he.meshPerAttribute);U.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let z=0;z<xe.locationSize;z++)S(xe.location+z);n.bindBuffer(n.ARRAY_BUFFER,T);for(let z=0;z<xe.locationSize;z++)A(xe.location+z,N/xe.locationSize,ee,O,P*ce,(se+N/xe.locationSize*z)*ce,X)}else{if(ne.isInstancedBufferAttribute){for(let he=0;he<xe.locationSize;he++)R(xe.location+he,ne.meshPerAttribute);U.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let he=0;he<xe.locationSize;he++)S(xe.location+he);n.bindBuffer(n.ARRAY_BUFFER,T);for(let he=0;he<xe.locationSize;he++)A(xe.location+he,N/xe.locationSize,ee,O,N*ce,N/xe.locationSize*he*ce,X)}}else if(le!==void 0){const O=le[de];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(xe.location,O);break;case 3:n.vertexAttrib3fv(xe.location,O);break;case 4:n.vertexAttrib4fv(xe.location,O);break;default:n.vertexAttrib1fv(xe.location,O)}}}}E()}function b(){W();for(const U in a){const q=a[U];for(const $ in q){const K=q[$];for(const B in K)g(K[B].object),delete K[B];delete q[$]}delete a[U]}}function w(U){if(a[U.id]===void 0)return;const q=a[U.id];for(const $ in q){const K=q[$];for(const B in K)g(K[B].object),delete K[B];delete q[$]}delete a[U.id]}function G(U){for(const q in a){const $=a[q];if($[U.id]===void 0)continue;const K=$[U.id];for(const B in K)g(K[B].object),delete K[B];delete $[U.id]}}function W(){te(),u=!0,c!==l&&(c=l,m(c.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:te,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:G,initAttributes:v,enableAttribute:S,disableUnusedAttributes:E}}function Ew(n,e,t,i){const s=i.isWebGL2;let r;function o(u){r=u}function a(u,d){n.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,h){if(h===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,d,h),t.update(d,r,h)}function c(u,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(r,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=d[y];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Aw(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,S=o||e.has("OES_texture_float"),R=v&&S,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:E}}function Tw(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new ws,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||s;return s=h,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){const g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const _=r?0:i,v=_*4;let S=f.clippingState||null;l.value=S,S=u(g,h,v,m);for(let R=0;R!==v;++R)S[R]=t[R];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,g){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=l.value,g!==!0||p===null){const f=m+y*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<f)&&(p=new Float32Array(f));for(let v=0,S=m;v!==y;++v,S+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function Rw(n){let e=new WeakMap;function t(o,a){return a===Dd?o.mapping=oo:a===Nd&&(o.mapping=ao),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Dd||a===Nd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Bb(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Y0 extends X0{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const kr=4,zp=[.125,.215,.35,.446,.526,.582],Cs=20,Hu=new Y0,Bp=new Ae;let Gu=null,Vu=0,Wu=0;const Es=(1+Math.sqrt(5))/2,Ar=1/Es,Hp=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Es,Ar),new I(0,Es,-Ar),new I(Ar,0,Es),new I(-Ar,0,Es),new I(Es,Ar,0),new I(-Es,Ar,0)];class Gp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Gu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gu,Vu,Wu),e.scissorTest=!1,ll(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oo||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:ga,format:Yn,colorSpace:Ni,depthBuffer:!1},s=Vp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vp(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cw(r)),this._blurMaterial=Lw(r,e,t)}return s}_compileMaterial(e){const t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,Hu)}_sceneToCubeUV(e,t,i,s){const a=new wn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Bp),u.toneMapping=ss,u.autoClear=!1;const m=new Hn({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new tt(new en,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(Bp),y=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;ll(s,_*v,f>2?v:0,v,v),u.setRenderTarget(s),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===oo||e.mapping===ao;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wp());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ll(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Hu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Hp[(s-1)%Hp.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new tt(this._lodPlanes[s],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Cs-1),y=r/g,p=isFinite(r)?1+Math.floor(u*y):Cs;p>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Cs}`);const f=[];let _=0;for(let A=0;A<Cs;++A){const k=A/y,b=Math.exp(-k*k/2);f.push(b),A===0?_+=b:A<p&&(_+=2*b)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const S=this._sizeLods[s],R=3*S*(s>v-kr?s-v+kr:0),E=4*(this._cubeSize-S);ll(t,R,E,3*S,2*S),l.setRenderTarget(t),l.render(d,Hu)}}function Cw(n){const e=[],t=[],i=[];let s=n;const r=n-kr+1+zp.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-kr?l=zp[o-n+kr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,y=3,p=2,f=1,_=new Float32Array(y*g*m),v=new Float32Array(p*g*m),S=new Float32Array(f*g*m);for(let E=0;E<m;E++){const A=E%3*2/3-1,k=E>2?0:-1,b=[A,k,0,A+2/3,k,0,A+2/3,k+1,0,A,k,0,A+2/3,k+1,0,A,k+1,0];_.set(b,y*g*E),v.set(h,p*g*E);const w=[E,E,E,E,E,E];S.set(w,f*g*E)}const R=new vt;R.setAttribute("position",new Pt(_,y)),R.setAttribute("uv",new Pt(v,p)),R.setAttribute("faceIndex",new Pt(S,f)),e.push(R),s>kr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vp(n,e,t){const i=new Ks(n,e,t);return i.texture.mapping=Xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ll(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Lw(n,e,t){const i=new Float32Array(Cs),s=new I(0,1,0);return new us({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:qh(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function Wp(){return new us({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

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
		`,blending:is,depthTest:!1,depthWrite:!1})}function qp(){return new us({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:is,depthTest:!1,depthWrite:!1})}function qh(){return`

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
	`}function Pw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Dd||l===Nd,u=l===oo||l===ao;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Gp(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new Gp(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Iw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Dw(n,e,t,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const y=h.morphAttributes[g];for(let p=0,f=y.length;p<f;p++)e.remove(y[p])}h.removeEventListener("dispose",o),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const y=m[g];for(let p=0,f=y.length;p<f;p++)e.update(y[p],n.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let y=0;if(m!==null){const _=m.array;y=m.version;for(let v=0,S=_.length;v<S;v+=3){const R=_[v+0],E=_[v+1],A=_[v+2];h.push(R,E,E,A,A,R)}}else if(g!==void 0){const _=g.array;y=g.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const R=v+0,E=v+1,A=v+2;h.push(R,E,E,A,A,R)}}else return;const p=new(U0(h)?W0:V0)(h,1);p.version=y;const f=r.get(d);f&&e.remove(f),r.set(d,p)}function u(d){const h=r.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Nw(n,e,t,i){const s=i.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,g){n.drawElements(r,g,a,m*l),t.update(g,r,1)}function d(m,g,y){if(y===0)return;let p,f;if(s)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,a,m*l,y),t.update(g,r,y)}function h(m,g,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<y;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,y);let f=0;for(let _=0;_<y;_++)f+=g[_];t.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function kw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ow(n,e){return n[0]-e[0]}function Uw(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Fw(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new Wt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let y=r.get(u);if(y===void 0||y.count!==g){let U=function(){W.dispose(),r.delete(u),u.removeEventListener("dispose",U)};y!==void 0&&y.texture.dispose();const _=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let k=0;_===!0&&(k=1),v===!0&&(k=2),S===!0&&(k=3);let b=u.attributes.position.count*k,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const G=new Float32Array(b*w*4*g),W=new B0(G,b,w,g);W.type=Yi,W.needsUpdate=!0;const te=k*4;for(let q=0;q<g;q++){const $=R[q],K=E[q],B=A[q],Q=b*w*4*q;for(let le=0;le<$.count;le++){const de=le*te;_===!0&&(o.fromBufferAttribute($,le),G[Q+de+0]=o.x,G[Q+de+1]=o.y,G[Q+de+2]=o.z,G[Q+de+3]=0),v===!0&&(o.fromBufferAttribute(K,le),G[Q+de+4]=o.x,G[Q+de+5]=o.y,G[Q+de+6]=o.z,G[Q+de+7]=0),S===!0&&(o.fromBufferAttribute(B,le),G[Q+de+8]=o.x,G[Q+de+9]=o.y,G[Q+de+10]=o.z,G[Q+de+11]=B.itemSize===4?o.w:1)}}y={count:g,texture:W,size:new me(b,w)},r.set(u,y),u.addEventListener("dispose",U)}let p=0;for(let _=0;_<h.length;_++)p+=h[_];const f=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",f),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",y.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",y.size)}else{const m=h===void 0?0:h.length;let g=i[u.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<m;v++){const S=g[v];S[0]=v,S[1]=h[v]}g.sort(Uw);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Ow);const y=u.morphAttributes.position,p=u.morphAttributes.normal;let f=0;for(let v=0;v<8;v++){const S=a[v],R=S[0],E=S[1];R!==Number.MAX_SAFE_INTEGER&&E?(y&&u.getAttribute("morphTarget"+v)!==y[R]&&u.setAttribute("morphTarget"+v,y[R]),p&&u.getAttribute("morphNormal"+v)!==p[R]&&u.setAttribute("morphNormal"+v,p[R]),s[v]=E,f+=E):(y&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}const _=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function zw(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class K0 extends Rn{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:Hs,u!==Hs&&u!==lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hs&&(i=$i),i===void 0&&u===lo&&(i=Bs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Z0=new Rn,J0=new K0(1,1);J0.compareFunction=O0;const Q0=new B0,ev=new Mb,tv=new j0,Xp=[],jp=[],$p=new Float32Array(16),Yp=new Float32Array(9),Kp=new Float32Array(4);function bo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Xp[s];if(r===void 0&&(r=new Float32Array(s),Xp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $c(n,e){let t=jp[e];t===void 0&&(t=new Int32Array(e),jp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Bw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function Gw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function Vw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function Ww(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(kt(t,i))return;Kp.set(i),n.uniformMatrix2fv(this.addr,!1,Kp),Ot(t,i)}}function qw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(kt(t,i))return;Yp.set(i),n.uniformMatrix3fv(this.addr,!1,Yp),Ot(t,i)}}function Xw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(kt(t,i))return;$p.set(i),n.uniformMatrix4fv(this.addr,!1,$p),Ot(t,i)}}function jw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $w(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function Yw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function Kw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function Zw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Jw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function Qw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function eE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function tE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?J0:Z0;t.setTexture2D(e||r,s)}function nE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ev,s)}function iE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||tv,s)}function sE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Q0,s)}function rE(n){switch(n){case 5126:return Bw;case 35664:return Hw;case 35665:return Gw;case 35666:return Vw;case 35674:return Ww;case 35675:return qw;case 35676:return Xw;case 5124:case 35670:return jw;case 35667:case 35671:return $w;case 35668:case 35672:return Yw;case 35669:case 35673:return Kw;case 5125:return Zw;case 36294:return Jw;case 36295:return Qw;case 36296:return eE;case 35678:case 36198:case 36298:case 36306:case 35682:return tE;case 35679:case 36299:case 36307:return nE;case 35680:case 36300:case 36308:case 36293:return iE;case 36289:case 36303:case 36311:case 36292:return sE}}function oE(n,e){n.uniform1fv(this.addr,e)}function aE(n,e){const t=bo(e,this.size,2);n.uniform2fv(this.addr,t)}function lE(n,e){const t=bo(e,this.size,3);n.uniform3fv(this.addr,t)}function cE(n,e){const t=bo(e,this.size,4);n.uniform4fv(this.addr,t)}function uE(n,e){const t=bo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dE(n,e){const t=bo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hE(n,e){const t=bo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fE(n,e){n.uniform1iv(this.addr,e)}function pE(n,e){n.uniform2iv(this.addr,e)}function mE(n,e){n.uniform3iv(this.addr,e)}function gE(n,e){n.uniform4iv(this.addr,e)}function vE(n,e){n.uniform1uiv(this.addr,e)}function yE(n,e){n.uniform2uiv(this.addr,e)}function xE(n,e){n.uniform3uiv(this.addr,e)}function _E(n,e){n.uniform4uiv(this.addr,e)}function bE(n,e,t){const i=this.cache,s=e.length,r=$c(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Z0,r[o])}function SE(n,e,t){const i=this.cache,s=e.length,r=$c(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ev,r[o])}function ME(n,e,t){const i=this.cache,s=e.length,r=$c(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||tv,r[o])}function wE(n,e,t){const i=this.cache,s=e.length,r=$c(t,s);kt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Q0,r[o])}function EE(n){switch(n){case 5126:return oE;case 35664:return aE;case 35665:return lE;case 35666:return cE;case 35674:return uE;case 35675:return dE;case 35676:return hE;case 5124:case 35670:return fE;case 35667:case 35671:return pE;case 35668:case 35672:return mE;case 35669:case 35673:return gE;case 5125:return vE;case 36294:return yE;case 36295:return xE;case 36296:return _E;case 35678:case 36198:case 36298:case 36306:case 35682:return bE;case 35679:case 36299:case 36307:return SE;case 35680:case 36300:case 36308:case 36293:return ME;case 36289:case 36303:case 36311:case 36292:return wE}}class AE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=rE(t.type)}}class TE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=EE(t.type)}}class RE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const qu=/(\w+)(\])?(\[|\.)?/g;function Zp(n,e){n.seq.push(e),n.map[e.id]=e}function CE(n,e,t){const i=n.name,s=i.length;for(qu.lastIndex=0;;){const r=qu.exec(i),o=qu.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zp(t,c===void 0?new AE(a,n,e):new TE(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new RE(a),Zp(t,d)),t=d}}}class Fl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);CE(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Jp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const LE=37297;let PE=0;function IE(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function DE(n){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(n);let i;switch(e===t?i="":e===lc&&t===ac?i="LinearDisplayP3ToLinearSRGB":e===ac&&t===lc&&(i="LinearSRGBToLinearDisplayP3"),n){case Ni:case jc:return[i,"LinearTransferOETF"];case Dt:case Hh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Qp(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+IE(n.getShaderSource(e),o)}else return s}function NE(n,e){const t=DE(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kE(n,e){let t;switch(e){case D_:t="Linear";break;case N_:t="Reinhard";break;case k_:t="OptimizedCineon";break;case O_:t="ACESFilmic";break;case F_:t="AgX";break;case U_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function OE(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Or).join(`
`)}function UE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Or).join(`
`)}function FE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Or(n){return n!==""}function em(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BE=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(n){return n.replace(BE,GE)}const HE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function GE(n,e){let t=je[e];if(t===void 0){const i=HE.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zd(t)}const VE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nm(n){return n.replace(VE,WE)}function WE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function im(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===E0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===a_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function XE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case oo:case ao:e="ENVMAP_TYPE_CUBE";break;case Xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ao:e="ENVMAP_MODE_REFRACTION";break}return e}function $E(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zh:e="ENVMAP_BLENDING_MULTIPLY";break;case P_:e="ENVMAP_BLENDING_MIX";break;case I_:e="ENVMAP_BLENDING_ADD";break}return e}function YE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function KE(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qE(t),c=XE(t),u=jE(t),d=$E(t),h=YE(t),m=t.isWebGL2?"":OE(t),g=UE(t),y=FE(r),p=s.createProgram();let f,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Or).join(`
`),f.length>0&&(f+=`
`),_=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Or).join(`
`),_.length>0&&(_+=`
`)):(f=[im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),_=[m,im(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ss?"#define TONE_MAPPING":"",t.toneMapping!==ss?je.tonemapping_pars_fragment:"",t.toneMapping!==ss?kE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,NE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=zd(o),o=em(o,t),o=tm(o,t),a=zd(a),a=em(a,t),a=tm(a,t),o=nm(o),a=nm(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=v+f+o,R=v+_+a,E=Jp(s,s.VERTEX_SHADER,S),A=Jp(s,s.FRAGMENT_SHADER,R);s.attachShader(p,E),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function k(W){if(n.debug.checkShaderErrors){const te=s.getProgramInfoLog(p).trim(),U=s.getShaderInfoLog(E).trim(),q=s.getShaderInfoLog(A).trim();let $=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,E,A);else{const B=Qp(s,E,"vertex"),Q=Qp(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+te+`
`+B+`
`+Q)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(U===""||q==="")&&(K=!1);K&&(W.diagnostics={runnable:$,programLog:te,vertexShader:{log:U,prefix:f},fragmentShader:{log:q,prefix:_}})}s.deleteShader(E),s.deleteShader(A),b=new Fl(s,p),w=zE(s,p)}let b;this.getUniforms=function(){return b===void 0&&k(this),b};let w;this.getAttributes=function(){return w===void 0&&k(this),w};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(p,LE)),G},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=PE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=A,this}let ZE=0;class JE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new QE(e),t.set(e,i)),i}}class QE{constructor(e){this.id=ZE++,this.code=e,this.usedTimes=0}}function eA(n,e,t,i,s,r,o){const a=new H0,l=new JE,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,h=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return b===0?"uv":`uv${b}`}function p(b,w,G,W,te){const U=W.fog,q=te.geometry,$=b.isMeshStandardMaterial?W.environment:null,K=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),B=K&&K.mapping===Xc?K.image.height:null,Q=g[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const le=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,de=le!==void 0?le.length:0;let xe=0;q.morphAttributes.position!==void 0&&(xe=1),q.morphAttributes.normal!==void 0&&(xe=2),q.morphAttributes.color!==void 0&&(xe=3);let ne,O,N,C;if(Q){const sn=oi[Q];ne=sn.vertexShader,O=sn.fragmentShader}else ne=b.vertexShader,O=b.fragmentShader,l.update(b),N=l.getVertexShaderID(b),C=l.getFragmentShaderID(b);const T=n.getRenderTarget(),ee=te.isInstancedMesh===!0,ce=te.isBatchedMesh===!0,X=!!b.map,he=!!b.matcap,P=!!K,se=!!b.aoMap,z=!!b.lightMap,Y=!!b.bumpMap,j=!!b.normalMap,pe=!!b.displacementMap,F=!!b.emissiveMap,x=!!b.metalnessMap,M=!!b.roughnessMap,V=b.anisotropy>0,ge=b.clearcoat>0,ve=b.iridescence>0,ue=b.sheen>0,Te=b.transmission>0,_e=V&&!!b.anisotropyMap,Re=ge&&!!b.clearcoatMap,De=ge&&!!b.clearcoatNormalMap,Fe=ge&&!!b.clearcoatRoughnessMap,ye=ve&&!!b.iridescenceMap,Qe=ve&&!!b.iridescenceThicknessMap,qe=ue&&!!b.sheenColorMap,ze=ue&&!!b.sheenRoughnessMap,Ne=!!b.specularMap,Le=!!b.specularColorMap,Xe=!!b.specularIntensityMap,nt=Te&&!!b.transmissionMap,yt=Te&&!!b.thicknessMap,Ke=!!b.gradientMap,be=!!b.alphaMap,H=b.alphaTest>0,Me=!!b.alphaHash,we=!!b.extensions,Ue=!!q.attributes.uv1,ke=!!q.attributes.uv2,ot=!!q.attributes.uv3;let at=ss;return b.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(at=n.toneMapping),{isWebGL2:u,shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:ne,fragmentShader:O,defines:b.defines,customVertexShaderID:N,customFragmentShaderID:C,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:ce,instancing:ee,instancingColor:ee&&te.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:T===null?n.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ni,map:X,matcap:he,envMap:P,envMapMode:P&&K.mapping,envMapCubeUVHeight:B,aoMap:se,lightMap:z,bumpMap:Y,normalMap:j,displacementMap:h&&pe,emissiveMap:F,normalMapObjectSpace:j&&b.normalMapType===K_,normalMapTangentSpace:j&&b.normalMapType===k0,metalnessMap:x,roughnessMap:M,anisotropy:V,anisotropyMap:_e,clearcoat:ge,clearcoatMap:Re,clearcoatNormalMap:De,clearcoatRoughnessMap:Fe,iridescence:ve,iridescenceMap:ye,iridescenceThicknessMap:Qe,sheen:ue,sheenColorMap:qe,sheenRoughnessMap:ze,specularMap:Ne,specularColorMap:Le,specularIntensityMap:Xe,transmission:Te,transmissionMap:nt,thicknessMap:yt,gradientMap:Ke,opaque:b.transparent===!1&&b.blending===Wr,alphaMap:be,alphaTest:H,alphaHash:Me,combine:b.combine,mapUv:X&&y(b.map.channel),aoMapUv:se&&y(b.aoMap.channel),lightMapUv:z&&y(b.lightMap.channel),bumpMapUv:Y&&y(b.bumpMap.channel),normalMapUv:j&&y(b.normalMap.channel),displacementMapUv:pe&&y(b.displacementMap.channel),emissiveMapUv:F&&y(b.emissiveMap.channel),metalnessMapUv:x&&y(b.metalnessMap.channel),roughnessMapUv:M&&y(b.roughnessMap.channel),anisotropyMapUv:_e&&y(b.anisotropyMap.channel),clearcoatMapUv:Re&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:De&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:ze&&y(b.sheenRoughnessMap.channel),specularMapUv:Ne&&y(b.specularMap.channel),specularColorMapUv:Le&&y(b.specularColorMap.channel),specularIntensityMapUv:Xe&&y(b.specularIntensityMap.channel),transmissionMapUv:nt&&y(b.transmissionMap.channel),thicknessMapUv:yt&&y(b.thicknessMap.channel),alphaMapUv:be&&y(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(j||V),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:ke,vertexUv3s:ot,pointsUvs:te.isPoints===!0&&!!q.attributes.uv&&(X||be),fog:!!U,useFog:b.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:te.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:xe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,useLegacyLights:n._useLegacyLights,decodeVideoTexture:X&&b.map.isVideoTexture===!0&&st.getTransfer(b.map.colorSpace)===dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$t,flipSided:b.side===yn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:we&&b.extensions.derivatives===!0,extensionFragDepth:we&&b.extensions.fragDepth===!0,extensionDrawBuffers:we&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const G in b.defines)w.push(G),w.push(b.defines[G]);return b.isRawShaderMaterial===!1&&(_(w,b),v(w,b),w.push(n.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function _(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function v(b,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function S(b){const w=g[b.type];let G;if(w){const W=oi[w];G=Ob.clone(W.uniforms)}else G=b.uniforms;return G}function R(b,w){let G;for(let W=0,te=c.length;W<te;W++){const U=c[W];if(U.cacheKey===w){G=U,++G.usedTimes;break}}return G===void 0&&(G=new KE(n,w,b,r),c.push(G)),G}function E(b){if(--b.usedTimes===0){const w=c.indexOf(b);c[w]=c[c.length-1],c.pop(),b.destroy()}}function A(b){l.remove(b)}function k(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:k}}function tA(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function nA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function sm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rm(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,h,m,g,y,p){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=y,f.group=p),e++,f}function a(d,h,m,g,y,p){const f=o(d,h,m,g,y,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(d,h,m,g,y,p){const f=o(d,h,m,g,y,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||nA),i.length>1&&i.sort(h||sm),s.length>1&&s.sort(h||sm)}function u(){for(let d=e,h=n.length;d<h;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function iA(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new rm,n.set(i,[o])):s>=r.length?(o=new rm,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function sA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ae};break;case"SpotLight":t={position:new I,direction:new I,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function rA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let oA=0;function aA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function lA(n,e){const t=new sA,i=rA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new I);const r=new I,o=new Je,a=new Je;function l(u,d){let h=0,m=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let y=0,p=0,f=0,_=0,v=0,S=0,R=0,E=0,A=0,k=0,b=0;u.sort(aA);const w=d===!0?Math.PI:1;for(let W=0,te=u.length;W<te;W++){const U=u[W],q=U.color,$=U.intensity,K=U.distance,B=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=q.r*$*w,m+=q.g*$*w,g+=q.b*$*w;else if(U.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(U.sh.coefficients[Q],$);b++}else if(U.isDirectionalLight){const Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity*w),U.castShadow){const le=U.shadow,de=i.get(U);de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,s.directionalShadow[y]=de,s.directionalShadowMap[y]=B,s.directionalShadowMatrix[y]=U.shadow.matrix,S++}s.directional[y]=Q,y++}else if(U.isSpotLight){const Q=t.get(U);Q.position.setFromMatrixPosition(U.matrixWorld),Q.color.copy(q).multiplyScalar($*w),Q.distance=K,Q.coneCos=Math.cos(U.angle),Q.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Q.decay=U.decay,s.spot[f]=Q;const le=U.shadow;if(U.map&&(s.spotLightMap[A]=U.map,A++,le.updateMatrices(U),U.castShadow&&k++),s.spotLightMatrix[f]=le.matrix,U.castShadow){const de=i.get(U);de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,s.spotShadow[f]=de,s.spotShadowMap[f]=B,E++}f++}else if(U.isRectAreaLight){const Q=t.get(U);Q.color.copy(q).multiplyScalar($),Q.halfWidth.set(U.width*.5,0,0),Q.halfHeight.set(0,U.height*.5,0),s.rectArea[_]=Q,_++}else if(U.isPointLight){const Q=t.get(U);if(Q.color.copy(U.color).multiplyScalar(U.intensity*w),Q.distance=U.distance,Q.decay=U.decay,U.castShadow){const le=U.shadow,de=i.get(U);de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,de.shadowCameraNear=le.camera.near,de.shadowCameraFar=le.camera.far,s.pointShadow[p]=de,s.pointShadowMap[p]=B,s.pointShadowMatrix[p]=U.shadow.matrix,R++}s.point[p]=Q,p++}else if(U.isHemisphereLight){const Q=t.get(U);Q.skyColor.copy(U.color).multiplyScalar($*w),Q.groundColor.copy(U.groundColor).multiplyScalar($*w),s.hemi[v]=Q,v++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=h,s.ambient[1]=m,s.ambient[2]=g;const G=s.hash;(G.directionalLength!==y||G.pointLength!==p||G.spotLength!==f||G.rectAreaLength!==_||G.hemiLength!==v||G.numDirectionalShadows!==S||G.numPointShadows!==R||G.numSpotShadows!==E||G.numSpotMaps!==A||G.numLightProbes!==b)&&(s.directional.length=y,s.spot.length=f,s.rectArea.length=_,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=E+A-k,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=b,G.directionalLength=y,G.pointLength=p,G.spotLength=f,G.rectAreaLength=_,G.hemiLength=v,G.numDirectionalShadows=S,G.numPointShadows=R,G.numSpotShadows=E,G.numSpotMaps=A,G.numLightProbes=b,s.version=oA++)}function c(u,d){let h=0,m=0,g=0,y=0,p=0;const f=d.matrixWorldInverse;for(let _=0,v=u.length;_<v;_++){const S=u[_];if(S.isDirectionalLight){const R=s.directional[h];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),h++}else if(S.isSpotLight){const R=s.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const R=s.rectArea[y];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),a.identity(),o.copy(S.matrixWorld),o.premultiply(f),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const R=s.point[m];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(f),m++}else if(S.isHemisphereLight){const R=s.hemi[p];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:s}}function om(n,e){const t=new lA(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function cA(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new om(n,e),t.set(r,[l])):o>=a.length?(l=new om(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class uA extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dA extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fA=`uniform sampler2D shadow_pass;
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
}`;function pA(n,e,t){let i=new Wh;const s=new me,r=new me,o=new Wt,a=new uA({depthPacking:Y_}),l=new dA,c={},u=t.maxTextureSize,d={[cs]:yn,[yn]:cs,[$t]:$t},h=new us({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:hA,fragmentShader:fA}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new vt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new tt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E0;let f=this.type;this.render=function(E,A,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const b=n.getRenderTarget(),w=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),W=n.state;W.setBlending(is),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const te=f!==wi&&this.type===wi,U=f===wi&&this.type!==wi;for(let q=0,$=E.length;q<$;q++){const K=E[q],B=K.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const Q=B.getFrameExtents();if(s.multiply(Q),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Q.x),s.x=r.x*Q.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Q.y),s.y=r.y*Q.y,B.mapSize.y=r.y)),B.map===null||te===!0||U===!0){const de=this.type!==wi?{minFilter:dn,magFilter:dn}:{};B.map!==null&&B.map.dispose(),B.map=new Ks(s.x,s.y,de),B.map.texture.name=K.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const le=B.getViewportCount();for(let de=0;de<le;de++){const xe=B.getViewport(de);o.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),W.viewport(o),B.updateMatrices(K,de),i=B.getFrustum(),S(A,k,B.camera,K,this.type)}B.isPointLightShadow!==!0&&this.type===wi&&_(B,k),B.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(b,w,G)};function _(E,A){const k=e.update(y);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ks(s.x,s.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,k,h,y,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,k,m,y,null)}function v(E,A,k,b){let w=null;const G=k.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(G!==void 0)w=G;else if(w=k.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=w.uuid,te=A.uuid;let U=c[W];U===void 0&&(U={},c[W]=U);let q=U[te];q===void 0&&(q=w.clone(),U[te]=q,A.addEventListener("dispose",R)),w=q}if(w.visible=A.visible,w.wireframe=A.wireframe,b===wi?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:d[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const W=n.properties.get(w);W.light=k}return w}function S(E,A,k,b,w){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===wi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld);const te=e.update(E),U=E.material;if(Array.isArray(U)){const q=te.groups;for(let $=0,K=q.length;$<K;$++){const B=q[$],Q=U[B.materialIndex];if(Q&&Q.visible){const le=v(E,Q,b,w);E.onBeforeShadow(n,E,A,k,te,le,B),n.renderBufferDirect(k,null,te,le,E,B),E.onAfterShadow(n,E,A,k,te,le,B)}}}else if(U.visible){const q=v(E,U,b,w);E.onBeforeShadow(n,E,A,k,te,q,null),n.renderBufferDirect(k,null,te,q,E,null),E.onAfterShadow(n,E,A,k,te,q,null)}}const W=E.children;for(let te=0,U=W.length;te<U;te++)S(W[te],A,k,b,w)}function R(E){E.target.removeEventListener("dispose",R);for(const k in c){const b=c[k],w=E.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function mA(n,e,t){const i=t.isWebGL2;function s(){let H=!1;const Me=new Wt;let we=null;const Ue=new Wt(0,0,0,0);return{setMask:function(ke){we!==ke&&!H&&(n.colorMask(ke,ke,ke,ke),we=ke)},setLocked:function(ke){H=ke},setClear:function(ke,ot,at,Ft,sn){sn===!0&&(ke*=Ft,ot*=Ft,at*=Ft),Me.set(ke,ot,at,Ft),Ue.equals(Me)===!1&&(n.clearColor(ke,ot,at,Ft),Ue.copy(Me))},reset:function(){H=!1,we=null,Ue.set(-1,0,0,0)}}}function r(){let H=!1,Me=null,we=null,Ue=null;return{setTest:function(ke){ke?ce(n.DEPTH_TEST):X(n.DEPTH_TEST)},setMask:function(ke){Me!==ke&&!H&&(n.depthMask(ke),Me=ke)},setFunc:function(ke){if(we!==ke){switch(ke){case w_:n.depthFunc(n.NEVER);break;case E_:n.depthFunc(n.ALWAYS);break;case A_:n.depthFunc(n.LESS);break;case rc:n.depthFunc(n.LEQUAL);break;case T_:n.depthFunc(n.EQUAL);break;case R_:n.depthFunc(n.GEQUAL);break;case C_:n.depthFunc(n.GREATER);break;case L_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}we=ke}},setLocked:function(ke){H=ke},setClear:function(ke){Ue!==ke&&(n.clearDepth(ke),Ue=ke)},reset:function(){H=!1,Me=null,we=null,Ue=null}}}function o(){let H=!1,Me=null,we=null,Ue=null,ke=null,ot=null,at=null,Ft=null,sn=null;return{setTest:function(lt){H||(lt?ce(n.STENCIL_TEST):X(n.STENCIL_TEST))},setMask:function(lt){Me!==lt&&!H&&(n.stencilMask(lt),Me=lt)},setFunc:function(lt,rn,ii){(we!==lt||Ue!==rn||ke!==ii)&&(n.stencilFunc(lt,rn,ii),we=lt,Ue=rn,ke=ii)},setOp:function(lt,rn,ii){(ot!==lt||at!==rn||Ft!==ii)&&(n.stencilOp(lt,rn,ii),ot=lt,at=rn,Ft=ii)},setLocked:function(lt){H=lt},setClear:function(lt){sn!==lt&&(n.clearStencil(lt),sn=lt)},reset:function(){H=!1,Me=null,we=null,Ue=null,ke=null,ot=null,at=null,Ft=null,sn=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,d=new WeakMap;let h={},m={},g=new WeakMap,y=[],p=null,f=!1,_=null,v=null,S=null,R=null,E=null,A=null,k=null,b=new Ae(0,0,0),w=0,G=!1,W=null,te=null,U=null,q=null,$=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Q=0;const le=n.getParameter(n.VERSION);le.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(le)[1]),B=Q>=1):le.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),B=Q>=2);let de=null,xe={};const ne=n.getParameter(n.SCISSOR_BOX),O=n.getParameter(n.VIEWPORT),N=new Wt().fromArray(ne),C=new Wt().fromArray(O);function T(H,Me,we,Ue){const ke=new Uint8Array(4),ot=n.createTexture();n.bindTexture(H,ot),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<we;at++)i&&(H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY)?n.texImage3D(Me,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(Me+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return ot}const ee={};ee[n.TEXTURE_2D]=T(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=T(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ee[n.TEXTURE_2D_ARRAY]=T(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=T(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ce(n.DEPTH_TEST),l.setFunc(rc),F(!1),x(Gf),ce(n.CULL_FACE),j(is);function ce(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function X(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function he(H,Me){return m[H]!==Me?(n.bindFramebuffer(H,Me),m[H]=Me,i&&(H===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Me),H===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Me)),!0):!1}function P(H,Me){let we=y,Ue=!1;if(H)if(we=g.get(Me),we===void 0&&(we=[],g.set(Me,we)),H.isWebGLMultipleRenderTargets){const ke=H.texture;if(we.length!==ke.length||we[0]!==n.COLOR_ATTACHMENT0){for(let ot=0,at=ke.length;ot<at;ot++)we[ot]=n.COLOR_ATTACHMENT0+ot;we.length=ke.length,Ue=!0}}else we[0]!==n.COLOR_ATTACHMENT0&&(we[0]=n.COLOR_ATTACHMENT0,Ue=!0);else we[0]!==n.BACK&&(we[0]=n.BACK,Ue=!0);Ue&&(t.isWebGL2?n.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function se(H){return p!==H?(n.useProgram(H),p=H,!0):!1}const z={[Rs]:n.FUNC_ADD,[c_]:n.FUNC_SUBTRACT,[u_]:n.FUNC_REVERSE_SUBTRACT};if(i)z[qf]=n.MIN,z[Xf]=n.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(z[qf]=H.MIN_EXT,z[Xf]=H.MAX_EXT)}const Y={[d_]:n.ZERO,[h_]:n.ONE,[f_]:n.SRC_COLOR,[Pd]:n.SRC_ALPHA,[x_]:n.SRC_ALPHA_SATURATE,[v_]:n.DST_COLOR,[m_]:n.DST_ALPHA,[p_]:n.ONE_MINUS_SRC_COLOR,[Id]:n.ONE_MINUS_SRC_ALPHA,[y_]:n.ONE_MINUS_DST_COLOR,[g_]:n.ONE_MINUS_DST_ALPHA,[__]:n.CONSTANT_COLOR,[b_]:n.ONE_MINUS_CONSTANT_COLOR,[S_]:n.CONSTANT_ALPHA,[M_]:n.ONE_MINUS_CONSTANT_ALPHA};function j(H,Me,we,Ue,ke,ot,at,Ft,sn,lt){if(H===is){f===!0&&(X(n.BLEND),f=!1);return}if(f===!1&&(ce(n.BLEND),f=!0),H!==l_){if(H!==_||lt!==G){if((v!==Rs||E!==Rs)&&(n.blendEquation(n.FUNC_ADD),v=Rs,E=Rs),lt)switch(H){case Wr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sc:n.blendFunc(n.ONE,n.ONE);break;case Vf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Wr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}S=null,R=null,A=null,k=null,b.set(0,0,0),w=0,_=H,G=lt}return}ke=ke||Me,ot=ot||we,at=at||Ue,(Me!==v||ke!==E)&&(n.blendEquationSeparate(z[Me],z[ke]),v=Me,E=ke),(we!==S||Ue!==R||ot!==A||at!==k)&&(n.blendFuncSeparate(Y[we],Y[Ue],Y[ot],Y[at]),S=we,R=Ue,A=ot,k=at),(Ft.equals(b)===!1||sn!==w)&&(n.blendColor(Ft.r,Ft.g,Ft.b,sn),b.copy(Ft),w=sn),_=H,G=!1}function pe(H,Me){H.side===$t?X(n.CULL_FACE):ce(n.CULL_FACE);let we=H.side===yn;Me&&(we=!we),F(we),H.blending===Wr&&H.transparent===!1?j(is):j(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);const Ue=H.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),V(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):X(n.SAMPLE_ALPHA_TO_COVERAGE)}function F(H){W!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),W=H)}function x(H){H!==r_?(ce(n.CULL_FACE),H!==te&&(H===Gf?n.cullFace(n.BACK):H===o_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):X(n.CULL_FACE),te=H}function M(H){H!==U&&(B&&n.lineWidth(H),U=H)}function V(H,Me,we){H?(ce(n.POLYGON_OFFSET_FILL),(q!==Me||$!==we)&&(n.polygonOffset(Me,we),q=Me,$=we)):X(n.POLYGON_OFFSET_FILL)}function ge(H){H?ce(n.SCISSOR_TEST):X(n.SCISSOR_TEST)}function ve(H){H===void 0&&(H=n.TEXTURE0+K-1),de!==H&&(n.activeTexture(H),de=H)}function ue(H,Me,we){we===void 0&&(de===null?we=n.TEXTURE0+K-1:we=de);let Ue=xe[we];Ue===void 0&&(Ue={type:void 0,texture:void 0},xe[we]=Ue),(Ue.type!==H||Ue.texture!==Me)&&(de!==we&&(n.activeTexture(we),de=we),n.bindTexture(H,Me||ee[H]),Ue.type=H,Ue.texture=Me)}function Te(){const H=xe[de];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function _e(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Qe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ze(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Xe(H){N.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),N.copy(H))}function nt(H){C.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),C.copy(H))}function yt(H,Me){let we=d.get(Me);we===void 0&&(we=new WeakMap,d.set(Me,we));let Ue=we.get(H);Ue===void 0&&(Ue=n.getUniformBlockIndex(Me,H.name),we.set(H,Ue))}function Ke(H,Me){const Ue=d.get(Me).get(H);u.get(Me)!==Ue&&(n.uniformBlockBinding(Me,Ue,H.__bindingPointIndex),u.set(Me,Ue))}function be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},de=null,xe={},m={},g=new WeakMap,y=[],p=null,f=!1,_=null,v=null,S=null,R=null,E=null,A=null,k=null,b=new Ae(0,0,0),w=0,G=!1,W=null,te=null,U=null,q=null,$=null,N.set(0,0,n.canvas.width,n.canvas.height),C.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ce,disable:X,bindFramebuffer:he,drawBuffers:P,useProgram:se,setBlending:j,setMaterial:pe,setFlipSided:F,setCullFace:x,setLineWidth:M,setPolygonOffset:V,setScissorTest:ge,activeTexture:ve,bindTexture:ue,unbindTexture:Te,compressedTexImage2D:_e,compressedTexImage3D:Re,texImage2D:Ne,texImage3D:Le,updateUBOMapping:yt,uniformBlockBinding:Ke,texStorage2D:qe,texStorage3D:ze,texSubImage2D:De,texSubImage3D:Fe,compressedTexSubImage2D:ye,compressedTexSubImage3D:Qe,scissor:Xe,viewport:nt,reset:be}}function gA(n,e,t,i,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,M){return m?new OffscreenCanvas(x,M):dc("canvas")}function y(x,M,V,ge){let ve=1;if((x.width>ge||x.height>ge)&&(ve=ge/Math.max(x.width,x.height)),ve<1||M===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const ue=M?uc:Math.floor,Te=ue(ve*x.width),_e=ue(ve*x.height);d===void 0&&(d=g(Te,_e));const Re=V?g(Te,_e):d;return Re.width=Te,Re.height=_e,Re.getContext("2d").drawImage(x,0,0,Te,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+Te+"x"+_e+")."),Re}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function p(x){return Fd(x.width)&&Fd(x.height)}function f(x){return a?!1:x.wrapS!==$n||x.wrapT!==$n||x.minFilter!==dn&&x.minFilter!==Nn}function _(x,M){return x.generateMipmaps&&M&&x.minFilter!==dn&&x.minFilter!==Nn}function v(x){n.generateMipmap(x)}function S(x,M,V,ge,ve=!1){if(a===!1)return M;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let ue=M;if(M===n.RED&&(V===n.FLOAT&&(ue=n.R32F),V===n.HALF_FLOAT&&(ue=n.R16F),V===n.UNSIGNED_BYTE&&(ue=n.R8)),M===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(ue=n.R8UI),V===n.UNSIGNED_SHORT&&(ue=n.R16UI),V===n.UNSIGNED_INT&&(ue=n.R32UI),V===n.BYTE&&(ue=n.R8I),V===n.SHORT&&(ue=n.R16I),V===n.INT&&(ue=n.R32I)),M===n.RG&&(V===n.FLOAT&&(ue=n.RG32F),V===n.HALF_FLOAT&&(ue=n.RG16F),V===n.UNSIGNED_BYTE&&(ue=n.RG8)),M===n.RGBA){const Te=ve?oc:st.getTransfer(ge);V===n.FLOAT&&(ue=n.RGBA32F),V===n.HALF_FLOAT&&(ue=n.RGBA16F),V===n.UNSIGNED_BYTE&&(ue=Te===dt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function R(x,M,V){return _(x,V)===!0||x.isFramebufferTexture&&x.minFilter!==dn&&x.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?M.mipmaps.length:1}function E(x){return x===dn||x===jf||x===yu?n.NEAREST:n.LINEAR}function A(x){const M=x.target;M.removeEventListener("dispose",A),b(M),M.isVideoTexture&&u.delete(M)}function k(x){const M=x.target;M.removeEventListener("dispose",k),G(M)}function b(x){const M=i.get(x);if(M.__webglInit===void 0)return;const V=x.source,ge=h.get(V);if(ge){const ve=ge[M.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&w(x),Object.keys(ge).length===0&&h.delete(V)}i.remove(x)}function w(x){const M=i.get(x);n.deleteTexture(M.__webglTexture);const V=x.source,ge=h.get(V);delete ge[M.__cacheKey],o.memory.textures--}function G(x){const M=x.texture,V=i.get(x),ge=i.get(M);if(ge.__webglTexture!==void 0&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(V.__webglFramebuffer[ve]))for(let ue=0;ue<V.__webglFramebuffer[ve].length;ue++)n.deleteFramebuffer(V.__webglFramebuffer[ve][ue]);else n.deleteFramebuffer(V.__webglFramebuffer[ve]);V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[ve])}else{if(Array.isArray(V.__webglFramebuffer))for(let ve=0;ve<V.__webglFramebuffer.length;ve++)n.deleteFramebuffer(V.__webglFramebuffer[ve]);else n.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ve=0;ve<V.__webglColorRenderbuffer.length;ve++)V.__webglColorRenderbuffer[ve]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[ve]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let ve=0,ue=M.length;ve<ue;ve++){const Te=i.get(M[ve]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),o.memory.textures--),i.remove(M[ve])}i.remove(M),i.remove(x)}let W=0;function te(){W=0}function U(){const x=W;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),W+=1,x}function q(x){const M=[];return M.push(x.wrapS),M.push(x.wrapT),M.push(x.wrapR||0),M.push(x.magFilter),M.push(x.minFilter),M.push(x.anisotropy),M.push(x.internalFormat),M.push(x.format),M.push(x.type),M.push(x.generateMipmaps),M.push(x.premultiplyAlpha),M.push(x.flipY),M.push(x.unpackAlignment),M.push(x.colorSpace),M.join()}function $(x,M){const V=i.get(x);if(x.isVideoTexture&&pe(x),x.isRenderTargetTexture===!1&&x.version>0&&V.__version!==x.version){const ge=x.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(V,x,M);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+M)}function K(x,M){const V=i.get(x);if(x.version>0&&V.__version!==x.version){N(V,x,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+M)}function B(x,M){const V=i.get(x);if(x.version>0&&V.__version!==x.version){N(V,x,M);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+M)}function Q(x,M){const V=i.get(x);if(x.version>0&&V.__version!==x.version){C(V,x,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+M)}const le={[kd]:n.REPEAT,[$n]:n.CLAMP_TO_EDGE,[Od]:n.MIRRORED_REPEAT},de={[dn]:n.NEAREST,[jf]:n.NEAREST_MIPMAP_NEAREST,[yu]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[z_]:n.LINEAR_MIPMAP_NEAREST,[ma]:n.LINEAR_MIPMAP_LINEAR},xe={[Z_]:n.NEVER,[ib]:n.ALWAYS,[J_]:n.LESS,[O0]:n.LEQUAL,[Q_]:n.EQUAL,[nb]:n.GEQUAL,[eb]:n.GREATER,[tb]:n.NOTEQUAL};function ne(x,M,V){if(V?(n.texParameteri(x,n.TEXTURE_WRAP_S,le[M.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,le[M.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,le[M.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,de[M.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,de[M.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==$n||M.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,E(M.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,E(M.minFilter)),M.minFilter!==dn&&M.minFilter!==Nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,xe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ge=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===dn||M.minFilter!==yu&&M.minFilter!==ma||M.type===Yi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ga&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(x,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function O(x,M){let V=!1;x.__webglInit===void 0&&(x.__webglInit=!0,M.addEventListener("dispose",A));const ge=M.source;let ve=h.get(ge);ve===void 0&&(ve={},h.set(ge,ve));const ue=q(M);if(ue!==x.__cacheKey){ve[ue]===void 0&&(ve[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ve[ue].usedTimes++;const Te=ve[x.__cacheKey];Te!==void 0&&(ve[x.__cacheKey].usedTimes--,Te.usedTimes===0&&w(M)),x.__cacheKey=ue,x.__webglTexture=ve[ue].texture}return V}function N(x,M,V){let ge=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ge=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ge=n.TEXTURE_3D);const ve=O(x,M),ue=M.source;t.bindTexture(ge,x.__webglTexture,n.TEXTURE0+V);const Te=i.get(ue);if(ue.version!==Te.__version||ve===!0){t.activeTexture(n.TEXTURE0+V);const _e=st.getPrimaries(st.workingColorSpace),Re=M.colorSpace===Un?null:st.getPrimaries(M.colorSpace),De=M.colorSpace===Un||_e===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);const Fe=f(M)&&p(M.image)===!1;let ye=y(M.image,Fe,!1,s.maxTextureSize);ye=F(M,ye);const Qe=p(ye)||a,qe=r.convert(M.format,M.colorSpace);let ze=r.convert(M.type),Ne=S(M.internalFormat,qe,ze,M.colorSpace,M.isVideoTexture);ne(ge,M,Qe);let Le;const Xe=M.mipmaps,nt=a&&M.isVideoTexture!==!0&&Ne!==D0,yt=Te.__version===void 0||ve===!0,Ke=R(M,ye,Qe);if(M.isDepthTexture)Ne=n.DEPTH_COMPONENT,a?M.type===Yi?Ne=n.DEPTH_COMPONENT32F:M.type===$i?Ne=n.DEPTH_COMPONENT24:M.type===Bs?Ne=n.DEPTH24_STENCIL8:Ne=n.DEPTH_COMPONENT16:M.type===Yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Hs&&Ne===n.DEPTH_COMPONENT&&M.type!==Bh&&M.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=$i,ze=r.convert(M.type)),M.format===lo&&Ne===n.DEPTH_COMPONENT&&(Ne=n.DEPTH_STENCIL,M.type!==Bs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Bs,ze=r.convert(M.type))),yt&&(nt?t.texStorage2D(n.TEXTURE_2D,1,Ne,ye.width,ye.height):t.texImage2D(n.TEXTURE_2D,0,Ne,ye.width,ye.height,0,qe,ze,null));else if(M.isDataTexture)if(Xe.length>0&&Qe){nt&&yt&&t.texStorage2D(n.TEXTURE_2D,Ke,Ne,Xe[0].width,Xe[0].height);for(let be=0,H=Xe.length;be<H;be++)Le=Xe[be],nt?t.texSubImage2D(n.TEXTURE_2D,be,0,0,Le.width,Le.height,qe,ze,Le.data):t.texImage2D(n.TEXTURE_2D,be,Ne,Le.width,Le.height,0,qe,ze,Le.data);M.generateMipmaps=!1}else nt?(yt&&t.texStorage2D(n.TEXTURE_2D,Ke,Ne,ye.width,ye.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye.width,ye.height,qe,ze,ye.data)):t.texImage2D(n.TEXTURE_2D,0,Ne,ye.width,ye.height,0,qe,ze,ye.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){nt&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,Ne,Xe[0].width,Xe[0].height,ye.depth);for(let be=0,H=Xe.length;be<H;be++)Le=Xe[be],M.format!==Yn?qe!==null?nt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,Le.width,Le.height,ye.depth,qe,Le.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,be,Ne,Le.width,Le.height,ye.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,be,0,0,0,Le.width,Le.height,ye.depth,qe,ze,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,be,Ne,Le.width,Le.height,ye.depth,0,qe,ze,Le.data)}else{nt&&yt&&t.texStorage2D(n.TEXTURE_2D,Ke,Ne,Xe[0].width,Xe[0].height);for(let be=0,H=Xe.length;be<H;be++)Le=Xe[be],M.format!==Yn?qe!==null?nt?t.compressedTexSubImage2D(n.TEXTURE_2D,be,0,0,Le.width,Le.height,qe,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,be,Ne,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(n.TEXTURE_2D,be,0,0,Le.width,Le.height,qe,ze,Le.data):t.texImage2D(n.TEXTURE_2D,be,Ne,Le.width,Le.height,0,qe,ze,Le.data)}else if(M.isDataArrayTexture)nt?(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ke,Ne,ye.width,ye.height,ye.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,qe,ze,ye.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,ye.width,ye.height,ye.depth,0,qe,ze,ye.data);else if(M.isData3DTexture)nt?(yt&&t.texStorage3D(n.TEXTURE_3D,Ke,Ne,ye.width,ye.height,ye.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,qe,ze,ye.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,ye.width,ye.height,ye.depth,0,qe,ze,ye.data);else if(M.isFramebufferTexture){if(yt)if(nt)t.texStorage2D(n.TEXTURE_2D,Ke,Ne,ye.width,ye.height);else{let be=ye.width,H=ye.height;for(let Me=0;Me<Ke;Me++)t.texImage2D(n.TEXTURE_2D,Me,Ne,be,H,0,qe,ze,null),be>>=1,H>>=1}}else if(Xe.length>0&&Qe){nt&&yt&&t.texStorage2D(n.TEXTURE_2D,Ke,Ne,Xe[0].width,Xe[0].height);for(let be=0,H=Xe.length;be<H;be++)Le=Xe[be],nt?t.texSubImage2D(n.TEXTURE_2D,be,0,0,qe,ze,Le):t.texImage2D(n.TEXTURE_2D,be,Ne,qe,ze,Le);M.generateMipmaps=!1}else nt?(yt&&t.texStorage2D(n.TEXTURE_2D,Ke,Ne,ye.width,ye.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,qe,ze,ye)):t.texImage2D(n.TEXTURE_2D,0,Ne,qe,ze,ye);_(M,Qe)&&v(ge),Te.__version=ue.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function C(x,M,V){if(M.image.length!==6)return;const ge=O(x,M),ve=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+V);const ue=i.get(ve);if(ve.version!==ue.__version||ge===!0){t.activeTexture(n.TEXTURE0+V);const Te=st.getPrimaries(st.workingColorSpace),_e=M.colorSpace===Un?null:st.getPrimaries(M.colorSpace),Re=M.colorSpace===Un||Te===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const De=M.isCompressedTexture||M.image[0].isCompressedTexture,Fe=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let be=0;be<6;be++)!De&&!Fe?ye[be]=y(M.image[be],!1,!0,s.maxCubemapSize):ye[be]=Fe?M.image[be].image:M.image[be],ye[be]=F(M,ye[be]);const Qe=ye[0],qe=p(Qe)||a,ze=r.convert(M.format,M.colorSpace),Ne=r.convert(M.type),Le=S(M.internalFormat,ze,Ne,M.colorSpace),Xe=a&&M.isVideoTexture!==!0,nt=ue.__version===void 0||ge===!0;let yt=R(M,Qe,qe);ne(n.TEXTURE_CUBE_MAP,M,qe);let Ke;if(De){Xe&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,yt,Le,Qe.width,Qe.height);for(let be=0;be<6;be++){Ke=ye[be].mipmaps;for(let H=0;H<Ke.length;H++){const Me=Ke[H];M.format!==Yn?ze!==null?Xe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,0,0,Me.width,Me.height,ze,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,Le,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,0,0,Me.width,Me.height,ze,Ne,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H,Le,Me.width,Me.height,0,ze,Ne,Me.data)}}}else{Ke=M.mipmaps,Xe&&nt&&(Ke.length>0&&yt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,yt,Le,ye[0].width,ye[0].height));for(let be=0;be<6;be++)if(Fe){Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ye[be].width,ye[be].height,ze,Ne,ye[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Le,ye[be].width,ye[be].height,0,ze,Ne,ye[be].data);for(let H=0;H<Ke.length;H++){const we=Ke[H].image[be].image;Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,0,0,we.width,we.height,ze,Ne,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,Le,we.width,we.height,0,ze,Ne,we.data)}}else{Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ze,Ne,ye[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Le,ze,Ne,ye[be]);for(let H=0;H<Ke.length;H++){const Me=Ke[H];Xe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,0,0,ze,Ne,Me.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,H+1,Le,ze,Ne,Me.image[be])}}}_(M,qe)&&v(n.TEXTURE_CUBE_MAP),ue.__version=ve.version,M.onUpdate&&M.onUpdate(M)}x.__version=M.version}function T(x,M,V,ge,ve,ue){const Te=r.convert(V.format,V.colorSpace),_e=r.convert(V.type),Re=S(V.internalFormat,Te,_e,V.colorSpace);if(!i.get(M).__hasExternalTextures){const Fe=Math.max(1,M.width>>ue),ye=Math.max(1,M.height>>ue);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,ue,Re,Fe,ye,M.depth,0,Te,_e,null):t.texImage2D(ve,ue,Re,Fe,ye,0,Te,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,x),j(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,ve,i.get(V).__webglTexture,0,Y(M)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ge,ve,i.get(V).__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(x,M,V){if(n.bindRenderbuffer(n.RENDERBUFFER,x),M.depthBuffer&&!M.stencilBuffer){let ge=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||j(M)){const ve=M.depthTexture;ve&&ve.isDepthTexture&&(ve.type===Yi?ge=n.DEPTH_COMPONENT32F:ve.type===$i&&(ge=n.DEPTH_COMPONENT24));const ue=Y(M);j(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,ge,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,ge,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,ge,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(M.depthBuffer&&M.stencilBuffer){const ge=Y(M);V&&j(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,M.width,M.height):j(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const ge=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ve=0;ve<ge.length;ve++){const ue=ge[ve],Te=r.convert(ue.format,ue.colorSpace),_e=r.convert(ue.type),Re=S(ue.internalFormat,Te,_e,ue.colorSpace),De=Y(M);V&&j(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Re,M.width,M.height):j(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,Re,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Re,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(x,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,x),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const ge=i.get(M.depthTexture).__webglTexture,ve=Y(M);if(M.depthTexture.format===Hs)j(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(M.depthTexture.format===lo)j(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,ve):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function X(x){const M=i.get(x),V=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ce(M.__webglFramebuffer,x)}else if(V){M.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ge]),M.__webglDepthbuffer[ge]=n.createRenderbuffer(),ee(M.__webglDepthbuffer[ge],x,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),ee(M.__webglDepthbuffer,x,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(x,M,V){const ge=i.get(x);M!==void 0&&T(ge.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&X(x)}function P(x){const M=x.texture,V=i.get(x),ge=i.get(M);x.addEventListener("dispose",k),x.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture()),ge.__version=M.version,o.memory.textures++);const ve=x.isWebGLCubeRenderTarget===!0,ue=x.isWebGLMultipleRenderTargets===!0,Te=p(x)||a;if(ve){V.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(a&&M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[_e]=[];for(let Re=0;Re<M.mipmaps.length;Re++)V.__webglFramebuffer[_e][Re]=n.createFramebuffer()}else V.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let _e=0;_e<M.mipmaps.length;_e++)V.__webglFramebuffer[_e]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(ue)if(s.drawBuffers){const _e=x.texture;for(let Re=0,De=_e.length;Re<De;Re++){const Fe=i.get(_e[Re]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&x.samples>0&&j(x)===!1){const _e=ue?M:[M];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Re=0;Re<_e.length;Re++){const De=_e[Re];V.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[Re]);const Fe=r.convert(De.format,De.colorSpace),ye=r.convert(De.type),Qe=S(De.internalFormat,Fe,ye,De.colorSpace,x.isXRRenderTarget===!0),qe=Y(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Qe,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,V.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(V.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),ne(n.TEXTURE_CUBE_MAP,M,Te);for(let _e=0;_e<6;_e++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)T(V.__webglFramebuffer[_e][Re],x,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re);else T(V.__webglFramebuffer[_e],x,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);_(M,Te)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const _e=x.texture;for(let Re=0,De=_e.length;Re<De;Re++){const Fe=_e[Re],ye=i.get(Fe);t.bindTexture(n.TEXTURE_2D,ye.__webglTexture),ne(n.TEXTURE_2D,Fe,Te),T(V.__webglFramebuffer,x,Fe,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,0),_(Fe,Te)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(a?_e=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,ge.__webglTexture),ne(_e,M,Te),a&&M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)T(V.__webglFramebuffer[Re],x,M,n.COLOR_ATTACHMENT0,_e,Re);else T(V.__webglFramebuffer,x,M,n.COLOR_ATTACHMENT0,_e,0);_(M,Te)&&v(_e),t.unbindTexture()}x.depthBuffer&&X(x)}function se(x){const M=p(x)||a,V=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ge=0,ve=V.length;ge<ve;ge++){const ue=V[ge];if(_(ue,M)){const Te=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,_e=i.get(ue).__webglTexture;t.bindTexture(Te,_e),v(Te),t.unbindTexture()}}}function z(x){if(a&&x.samples>0&&j(x)===!1){const M=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],V=x.width,ge=x.height;let ve=n.COLOR_BUFFER_BIT;const ue=[],Te=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(x),Re=x.isWebGLMultipleRenderTargets===!0;if(Re)for(let De=0;De<M.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let De=0;De<M.length;De++){ue.push(n.COLOR_ATTACHMENT0+De),x.depthBuffer&&ue.push(Te);const Fe=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(Fe===!1&&(x.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[De]),Fe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Te])),Re){const ye=i.get(M[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,V,ge,0,0,V,ge,ve,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let De=0;De<M.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,_e.__webglColorRenderbuffer[De]);const Fe=i.get(M[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function Y(x){return Math.min(s.maxSamples,x.samples)}function j(x){const M=i.get(x);return a&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function pe(x){const M=o.render.frame;u.get(x)!==M&&(u.set(x,M),x.update())}function F(x,M){const V=x.colorSpace,ge=x.format,ve=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Ud||V!==Ni&&V!==Un&&(st.getTransfer(V)===dt?a===!1?e.has("EXT_sRGB")===!0&&ge===Yn?(x.format=Ud,x.minFilter=Nn,x.generateMipmaps=!1):M=F0.sRGBToLinear(M):(ge!==Yn||ve!==rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}this.allocateTextureUnit=U,this.resetTextureUnits=te,this.setTexture2D=$,this.setTexture2DArray=K,this.setTexture3D=B,this.setTextureCube=Q,this.rebindTextures=he,this.setupRenderTarget=P,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=T,this.useMultisampledRTT=j}function vA(n,e,t){const i=t.isWebGL2;function s(r,o=Un){let a;const l=st.getTransfer(o);if(r===rs)return n.UNSIGNED_BYTE;if(r===R0)return n.UNSIGNED_SHORT_4_4_4_4;if(r===C0)return n.UNSIGNED_SHORT_5_5_5_1;if(r===B_)return n.BYTE;if(r===H_)return n.SHORT;if(r===Bh)return n.UNSIGNED_SHORT;if(r===T0)return n.INT;if(r===$i)return n.UNSIGNED_INT;if(r===Yi)return n.FLOAT;if(r===ga)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===G_)return n.ALPHA;if(r===Yn)return n.RGBA;if(r===V_)return n.LUMINANCE;if(r===W_)return n.LUMINANCE_ALPHA;if(r===Hs)return n.DEPTH_COMPONENT;if(r===lo)return n.DEPTH_STENCIL;if(r===Ud)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===q_)return n.RED;if(r===L0)return n.RED_INTEGER;if(r===X_)return n.RG;if(r===P0)return n.RG_INTEGER;if(r===I0)return n.RGBA_INTEGER;if(r===xu||r===_u||r===bu||r===Su)if(l===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===xu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_u)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===xu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_u)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Su)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$f||r===Yf||r===Kf||r===Zf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===$f)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===D0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Jf||r===Qf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Jf)return l===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Qf)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ep||r===tp||r===np||r===ip||r===sp||r===rp||r===op||r===ap||r===lp||r===cp||r===up||r===dp||r===hp||r===fp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ep)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===tp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===np)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ip)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===op)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ap)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===up)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===hp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fp)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mu||r===pp||r===mp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Mu)return l===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===pp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===mp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===j_||r===gp||r===vp||r===yp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Mu)return a.COMPRESSED_RED_RGTC1_EXT;if(r===gp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===yp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bs?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class yA extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ct extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xA={type:"move"};class Xu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,i),f=this._getHandJoint(c,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xA)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class _A extends _o{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,m=null,g=null;const y=t.getContextAttributes();let p=null,f=null;const _=[],v=[],S=new me;let R=null;const E=new wn;E.layers.enable(1),E.viewport=new Wt;const A=new wn;A.layers.enable(2),A.viewport=new Wt;const k=[E,A],b=new yA;b.layers.enable(1),b.layers.enable(2);let w=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let O=_[ne];return O===void 0&&(O=new Xu,_[ne]=O),O.getTargetRaySpace()},this.getControllerGrip=function(ne){let O=_[ne];return O===void 0&&(O=new Xu,_[ne]=O),O.getGripSpace()},this.getHand=function(ne){let O=_[ne];return O===void 0&&(O=new Xu,_[ne]=O),O.getHandSpace()};function W(ne){const O=v.indexOf(ne.inputSource);if(O===-1)return;const N=_[O];N!==void 0&&(N.update(ne.inputSource,ne.frame,c||o),N.dispatchEvent({type:ne.type,data:ne.inputSource}))}function te(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",U);for(let ne=0;ne<_.length;ne++){const O=v[ne];O!==null&&(v[ne]=null,_[ne].disconnect(O))}w=null,G=null,e.setRenderTarget(p),m=null,h=null,d=null,s=null,f=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",te),s.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:s.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,O),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Ks(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:rs,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let O=null,N=null,C=null;y.depth&&(C=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=y.stencil?lo:Hs,N=y.stencil?Bs:$i);const T={colorFormat:t.RGBA8,depthFormat:C,scaleFactor:r};d=new XRWebGLBinding(s,t),h=d.createProjectionLayer(T),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new Ks(h.textureWidth,h.textureHeight,{format:Yn,type:rs,depthTexture:new K0(h.textureWidth,h.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ee=e.properties.get(f);ee.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),xe.setContext(s),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function U(ne){for(let O=0;O<ne.removed.length;O++){const N=ne.removed[O],C=v.indexOf(N);C>=0&&(v[C]=null,_[C].disconnect(N))}for(let O=0;O<ne.added.length;O++){const N=ne.added[O];let C=v.indexOf(N);if(C===-1){for(let ee=0;ee<_.length;ee++)if(ee>=v.length){v.push(N),C=ee;break}else if(v[ee]===null){v[ee]=N,C=ee;break}if(C===-1)break}const T=_[C];T&&T.connect(N)}}const q=new I,$=new I;function K(ne,O,N){q.setFromMatrixPosition(O.matrixWorld),$.setFromMatrixPosition(N.matrixWorld);const C=q.distanceTo($),T=O.projectionMatrix.elements,ee=N.projectionMatrix.elements,ce=T[14]/(T[10]-1),X=T[14]/(T[10]+1),he=(T[9]+1)/T[5],P=(T[9]-1)/T[5],se=(T[8]-1)/T[0],z=(ee[8]+1)/ee[0],Y=ce*se,j=ce*z,pe=C/(-se+z),F=pe*-se;O.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(F),ne.translateZ(pe),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const x=ce+pe,M=X+pe,V=Y-F,ge=j+(C-F),ve=he*X/M*x,ue=P*X/M*x;ne.projectionMatrix.makePerspective(V,ge,ve,ue,x,M),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function B(ne,O){O===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(O.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;b.near=A.near=E.near=ne.near,b.far=A.far=E.far=ne.far,(w!==b.near||G!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,G=b.far);const O=ne.parent,N=b.cameras;B(b,O);for(let C=0;C<N.length;C++)B(N[C],O);N.length===2?K(b,E,A):b.projectionMatrix.copy(E.projectionMatrix),Q(ne,b,O)};function Q(ne,O,N){N===null?ne.matrix.copy(O.matrixWorld):(ne.matrix.copy(N.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(O.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(O.projectionMatrix),ne.projectionMatrixInverse.copy(O.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=va*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)};let le=null;function de(ne,O){if(u=O.getViewerPose(c||o),g=O,u!==null){const N=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let C=!1;N.length!==b.cameras.length&&(b.cameras.length=0,C=!0);for(let T=0;T<N.length;T++){const ee=N[T];let ce=null;if(m!==null)ce=m.getViewport(ee);else{const he=d.getViewSubImage(h,ee);ce=he.viewport,T===0&&(e.setRenderTargetTextures(f,he.colorTexture,h.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(f))}let X=k[T];X===void 0&&(X=new wn,X.layers.enable(T),X.viewport=new Wt,k[T]=X),X.matrix.fromArray(ee.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(ee.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(ce.x,ce.y,ce.width,ce.height),T===0&&(b.matrix.copy(X.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),C===!0&&b.cameras.push(X)}}for(let N=0;N<_.length;N++){const C=v[N],T=_[N];C!==null&&T!==void 0&&T.update(C,O,c||o)}le&&le(ne,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),g=null}const xe=new $0;xe.setAnimationLoop(de),this.setAnimationLoop=function(ne){le=ne},this.dispose=function(){}}}function bA(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,q0(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,_,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),y(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,_,v):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===yn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===yn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,_,v){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=v*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===yn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){const _=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function SA(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const S=v.program;i.uniformBlockBinding(_,S)}function c(_,v){let S=s[_.id];S===void 0&&(g(_),S=u(_),s[_.id]=S,_.addEventListener("dispose",p));const R=v.program;i.updateUBOMapping(_,R);const E=e.render.frame;r[_.id]!==E&&(h(_),r[_.id]=E)}function u(_){const v=d();_.__bindingPointIndex=v;const S=n.createBuffer(),R=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=s[_.id],S=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,A=S.length;E<A;E++){const k=Array.isArray(S[E])?S[E]:[S[E]];for(let b=0,w=k.length;b<w;b++){const G=k[b];if(m(G,E,b,R)===!0){const W=G.__offset,te=Array.isArray(G.value)?G.value:[G.value];let U=0;for(let q=0;q<te.length;q++){const $=te[q],K=y($);typeof $=="number"||typeof $=="boolean"?(G.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,W+U,G.__data)):$.isMatrix3?(G.__data[0]=$.elements[0],G.__data[1]=$.elements[1],G.__data[2]=$.elements[2],G.__data[3]=0,G.__data[4]=$.elements[3],G.__data[5]=$.elements[4],G.__data[6]=$.elements[5],G.__data[7]=0,G.__data[8]=$.elements[6],G.__data[9]=$.elements[7],G.__data[10]=$.elements[8],G.__data[11]=0):($.toArray(G.__data,U),U+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,G.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(_,v,S,R){const E=_.value,A=v+"_"+S;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{const k=R[A];if(typeof E=="number"||typeof E=="boolean"){if(k!==E)return R[A]=E,!0}else if(k.equals(E)===!1)return k.copy(E),!0}return!1}function g(_){const v=_.uniforms;let S=0;const R=16;for(let A=0,k=v.length;A<k;A++){const b=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,G=b.length;w<G;w++){const W=b[w],te=Array.isArray(W.value)?W.value:[W.value];for(let U=0,q=te.length;U<q;U++){const $=te[U],K=y($),B=S%R;B!==0&&R-B<K.boundary&&(S+=R-B),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=K.storage}}}const E=S%R;return E>0&&(S+=R-E),_.__size=S,_.__cache={},this}function y(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Xh{constructor(e={}){const{canvas:t=yb(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),g=new Int32Array(4);let y=null,p=null;const f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=ss,this.toneMappingExposure=1;const v=this;let S=!1,R=0,E=0,A=null,k=-1,b=null;const w=new Wt,G=new Wt;let W=null;const te=new Ae(0);let U=0,q=t.width,$=t.height,K=1,B=null,Q=null;const le=new Wt(0,0,q,$),de=new Wt(0,0,q,$);let xe=!1;const ne=new Wh;let O=!1,N=!1,C=null;const T=new Je,ee=new me,ce=new I,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function he(){return A===null?K:1}let P=i;function se(L,Z){for(let oe=0;oe<L.length;oe++){const ae=L[oe],re=t.getContext(ae,Z);if(re!==null)return re}return null}try{const L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fh}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Me,!1),P===null){const Z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&Z.shift(),P=se(Z,L),P===null)throw se(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let z,Y,j,pe,F,x,M,V,ge,ve,ue,Te,_e,Re,De,Fe,ye,Qe,qe,ze,Ne,Le,Xe,nt;function yt(){z=new Iw(P),Y=new Aw(P,z,e),z.init(Y),Le=new vA(P,z,Y),j=new mA(P,z,Y),pe=new kw(P),F=new tA,x=new gA(P,z,j,F,Y,Le,pe),M=new Rw(v),V=new Pw(v),ge=new Vb(P,Y),Xe=new ww(P,z,ge,Y),ve=new Dw(P,ge,pe,Xe),ue=new zw(P,ve,ge,pe),qe=new Fw(P,Y,x),Fe=new Tw(F),Te=new eA(v,M,V,z,Y,Xe,Fe),_e=new bA(v,F),Re=new iA,De=new cA(z,Y),Qe=new Mw(v,M,V,j,ue,h,l),ye=new pA(v,ue,Y),nt=new SA(P,pe,Y,j),ze=new Ew(P,z,pe,Y),Ne=new Nw(P,z,pe,Y),pe.programs=Te.programs,v.capabilities=Y,v.extensions=z,v.properties=F,v.renderLists=Re,v.shadowMap=ye,v.state=j,v.info=pe}yt();const Ke=new _A(v,P);this.xr=Ke,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const L=z.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=z.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(L){L!==void 0&&(K=L,this.setSize(q,$,!1))},this.getSize=function(L){return L.set(q,$)},this.setSize=function(L,Z,oe=!0){if(Ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=L,$=Z,t.width=Math.floor(L*K),t.height=Math.floor(Z*K),oe===!0&&(t.style.width=L+"px",t.style.height=Z+"px"),this.setViewport(0,0,L,Z)},this.getDrawingBufferSize=function(L){return L.set(q*K,$*K).floor()},this.setDrawingBufferSize=function(L,Z,oe){q=L,$=Z,K=oe,t.width=Math.floor(L*oe),t.height=Math.floor(Z*oe),this.setViewport(0,0,L,Z)},this.getCurrentViewport=function(L){return L.copy(w)},this.getViewport=function(L){return L.copy(le)},this.setViewport=function(L,Z,oe,ae){L.isVector4?le.set(L.x,L.y,L.z,L.w):le.set(L,Z,oe,ae),j.viewport(w.copy(le).multiplyScalar(K).floor())},this.getScissor=function(L){return L.copy(de)},this.setScissor=function(L,Z,oe,ae){L.isVector4?de.set(L.x,L.y,L.z,L.w):de.set(L,Z,oe,ae),j.scissor(G.copy(de).multiplyScalar(K).floor())},this.getScissorTest=function(){return xe},this.setScissorTest=function(L){j.setScissorTest(xe=L)},this.setOpaqueSort=function(L){B=L},this.setTransparentSort=function(L){Q=L},this.getClearColor=function(L){return L.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(L=!0,Z=!0,oe=!0){let ae=0;if(L){let re=!1;if(A!==null){const Ce=A.texture.format;re=Ce===I0||Ce===P0||Ce===L0}if(re){const Ce=A.texture.type,Ie=Ce===rs||Ce===$i||Ce===Bh||Ce===Bs||Ce===R0||Ce===C0,Oe=Qe.getClearColor(),Be=Qe.getClearAlpha(),$e=Oe.r,Ve=Oe.g,We=Oe.b;Ie?(m[0]=$e,m[1]=Ve,m[2]=We,m[3]=Be,P.clearBufferuiv(P.COLOR,0,m)):(g[0]=$e,g[1]=Ve,g[2]=We,g[3]=Be,P.clearBufferiv(P.COLOR,0,g))}else ae|=P.COLOR_BUFFER_BIT}Z&&(ae|=P.DEPTH_BUFFER_BIT),oe&&(ae|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Re.dispose(),De.dispose(),F.dispose(),M.dispose(),V.dispose(),ue.dispose(),Xe.dispose(),nt.dispose(),Te.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",sn),Ke.removeEventListener("sessionend",lt),C&&(C.dispose(),C=null),rn.stop()};function be(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const L=pe.autoReset,Z=ye.enabled,oe=ye.autoUpdate,ae=ye.needsUpdate,re=ye.type;yt(),pe.autoReset=L,ye.enabled=Z,ye.autoUpdate=oe,ye.needsUpdate=ae,ye.type=re}function Me(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function we(L){const Z=L.target;Z.removeEventListener("dispose",we),Ue(Z)}function Ue(L){ke(L),F.remove(L)}function ke(L){const Z=F.get(L).programs;Z!==void 0&&(Z.forEach(function(oe){Te.releaseProgram(oe)}),L.isShaderMaterial&&Te.releaseShaderCache(L))}this.renderBufferDirect=function(L,Z,oe,ae,re,Ce){Z===null&&(Z=X);const Ie=re.isMesh&&re.matrixWorld.determinant()<0,Oe=cx(L,Z,oe,ae,re);j.setMaterial(ae,Ie);let Be=oe.index,$e=1;if(ae.wireframe===!0){if(Be=ve.getWireframeAttribute(oe),Be===void 0)return;$e=2}const Ve=oe.drawRange,We=oe.attributes.position;let Mt=Ve.start*$e,bn=(Ve.start+Ve.count)*$e;Ce!==null&&(Mt=Math.max(Mt,Ce.start*$e),bn=Math.min(bn,(Ce.start+Ce.count)*$e)),Be!==null?(Mt=Math.max(Mt,0),bn=Math.min(bn,Be.count)):We!=null&&(Mt=Math.max(Mt,0),bn=Math.min(bn,We.count));const zt=bn-Mt;if(zt<0||zt===1/0)return;Xe.setup(re,ae,Oe,oe,Be);let vi,ft=ze;if(Be!==null&&(vi=ge.get(Be),ft=Ne,ft.setIndex(vi)),re.isMesh)ae.wireframe===!0?(j.setLineWidth(ae.wireframeLinewidth*he()),ft.setMode(P.LINES)):ft.setMode(P.TRIANGLES);else if(re.isLine){let Ze=ae.linewidth;Ze===void 0&&(Ze=1),j.setLineWidth(Ze*he()),re.isLineSegments?ft.setMode(P.LINES):re.isLineLoop?ft.setMode(P.LINE_LOOP):ft.setMode(P.LINE_STRIP)}else re.isPoints?ft.setMode(P.POINTS):re.isSprite&&ft.setMode(P.TRIANGLES);if(re.isBatchedMesh)ft.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else if(re.isInstancedMesh)ft.renderInstances(Mt,zt,re.count);else if(oe.isInstancedBufferGeometry){const Ze=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,lu=Math.min(oe.instanceCount,Ze);ft.renderInstances(Mt,zt,lu)}else ft.render(Mt,zt)};function ot(L,Z,oe){L.transparent===!0&&L.side===$t&&L.forceSinglePass===!1?(L.side=yn,L.needsUpdate=!0,Oa(L,Z,oe),L.side=cs,L.needsUpdate=!0,Oa(L,Z,oe),L.side=$t):Oa(L,Z,oe)}this.compile=function(L,Z,oe=null){oe===null&&(oe=L),p=De.get(oe),p.init(),_.push(p),oe.traverseVisible(function(re){re.isLight&&re.layers.test(Z.layers)&&(p.pushLight(re),re.castShadow&&p.pushShadow(re))}),L!==oe&&L.traverseVisible(function(re){re.isLight&&re.layers.test(Z.layers)&&(p.pushLight(re),re.castShadow&&p.pushShadow(re))}),p.setupLights(v._useLegacyLights);const ae=new Set;return L.traverse(function(re){const Ce=re.material;if(Ce)if(Array.isArray(Ce))for(let Ie=0;Ie<Ce.length;Ie++){const Oe=Ce[Ie];ot(Oe,oe,re),ae.add(Oe)}else ot(Ce,oe,re),ae.add(Ce)}),_.pop(),p=null,ae},this.compileAsync=function(L,Z,oe=null){const ae=this.compile(L,Z,oe);return new Promise(re=>{function Ce(){if(ae.forEach(function(Ie){F.get(Ie).currentProgram.isReady()&&ae.delete(Ie)}),ae.size===0){re(L);return}setTimeout(Ce,10)}z.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let at=null;function Ft(L){at&&at(L)}function sn(){rn.stop()}function lt(){rn.start()}const rn=new $0;rn.setAnimationLoop(Ft),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(L){at=L,Ke.setAnimationLoop(L),L===null?rn.stop():rn.start()},Ke.addEventListener("sessionstart",sn),Ke.addEventListener("sessionend",lt),this.render=function(L,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(Z),Z=Ke.getCamera()),L.isScene===!0&&L.onBeforeRender(v,L,Z,A),p=De.get(L,_.length),p.init(),_.push(p),T.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ne.setFromProjectionMatrix(T),N=this.localClippingEnabled,O=Fe.init(this.clippingPlanes,N),y=Re.get(L,f.length),y.init(),f.push(y),ii(L,Z,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(B,Q),this.info.render.frame++,O===!0&&Fe.beginShadows();const oe=p.state.shadowsArray;if(ye.render(oe,L,Z),O===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qe.render(y,L),p.setupLights(v._useLegacyLights),Z.isArrayCamera){const ae=Z.cameras;for(let re=0,Ce=ae.length;re<Ce;re++){const Ie=ae[re];Ef(y,L,Ie,Ie.viewport)}}else Ef(y,L,Z);A!==null&&(x.updateMultisampleRenderTarget(A),x.updateRenderTargetMipmap(A)),L.isScene===!0&&L.onAfterRender(v,L,Z),Xe.resetDefaultState(),k=-1,b=null,_.pop(),_.length>0?p=_[_.length-1]:p=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function ii(L,Z,oe,ae){if(L.visible===!1)return;if(L.layers.test(Z.layers)){if(L.isGroup)oe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Z);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ne.intersectsSprite(L)){ae&&ce.setFromMatrixPosition(L.matrixWorld).applyMatrix4(T);const Ie=ue.update(L),Oe=L.material;Oe.visible&&y.push(L,Ie,Oe,oe,ce.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ne.intersectsObject(L))){const Ie=ue.update(L),Oe=L.material;if(ae&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ce.copy(L.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ce.copy(Ie.boundingSphere.center)),ce.applyMatrix4(L.matrixWorld).applyMatrix4(T)),Array.isArray(Oe)){const Be=Ie.groups;for(let $e=0,Ve=Be.length;$e<Ve;$e++){const We=Be[$e],Mt=Oe[We.materialIndex];Mt&&Mt.visible&&y.push(L,Ie,Mt,oe,ce.z,We)}}else Oe.visible&&y.push(L,Ie,Oe,oe,ce.z,null)}}const Ce=L.children;for(let Ie=0,Oe=Ce.length;Ie<Oe;Ie++)ii(Ce[Ie],Z,oe,ae)}function Ef(L,Z,oe,ae){const re=L.opaque,Ce=L.transmissive,Ie=L.transparent;p.setupLightsView(oe),O===!0&&Fe.setGlobalState(v.clippingPlanes,oe),Ce.length>0&&lx(re,Ce,Z,oe),ae&&j.viewport(w.copy(ae)),re.length>0&&ka(re,Z,oe),Ce.length>0&&ka(Ce,Z,oe),Ie.length>0&&ka(Ie,Z,oe),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function lx(L,Z,oe,ae){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;const Ce=Y.isWebGL2;C===null&&(C=new Ks(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")?ga:rs,minFilter:ma,samples:Ce?4:0})),v.getDrawingBufferSize(ee),Ce?C.setSize(ee.x,ee.y):C.setSize(uc(ee.x),uc(ee.y));const Ie=v.getRenderTarget();v.setRenderTarget(C),v.getClearColor(te),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();const Oe=v.toneMapping;v.toneMapping=ss,ka(L,oe,ae),x.updateMultisampleRenderTarget(C),x.updateRenderTargetMipmap(C);let Be=!1;for(let $e=0,Ve=Z.length;$e<Ve;$e++){const We=Z[$e],Mt=We.object,bn=We.geometry,zt=We.material,vi=We.group;if(zt.side===$t&&Mt.layers.test(ae.layers)){const ft=zt.side;zt.side=yn,zt.needsUpdate=!0,Af(Mt,oe,ae,bn,zt,vi),zt.side=ft,zt.needsUpdate=!0,Be=!0}}Be===!0&&(x.updateMultisampleRenderTarget(C),x.updateRenderTargetMipmap(C)),v.setRenderTarget(Ie),v.setClearColor(te,U),v.toneMapping=Oe}function ka(L,Z,oe){const ae=Z.isScene===!0?Z.overrideMaterial:null;for(let re=0,Ce=L.length;re<Ce;re++){const Ie=L[re],Oe=Ie.object,Be=Ie.geometry,$e=ae===null?Ie.material:ae,Ve=Ie.group;Oe.layers.test(oe.layers)&&Af(Oe,Z,oe,Be,$e,Ve)}}function Af(L,Z,oe,ae,re,Ce){L.onBeforeRender(v,Z,oe,ae,re,Ce),L.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),re.onBeforeRender(v,Z,oe,ae,L,Ce),re.transparent===!0&&re.side===$t&&re.forceSinglePass===!1?(re.side=yn,re.needsUpdate=!0,v.renderBufferDirect(oe,Z,ae,re,L,Ce),re.side=cs,re.needsUpdate=!0,v.renderBufferDirect(oe,Z,ae,re,L,Ce),re.side=$t):v.renderBufferDirect(oe,Z,ae,re,L,Ce),L.onAfterRender(v,Z,oe,ae,re,Ce)}function Oa(L,Z,oe){Z.isScene!==!0&&(Z=X);const ae=F.get(L),re=p.state.lights,Ce=p.state.shadowsArray,Ie=re.state.version,Oe=Te.getParameters(L,re.state,Ce,Z,oe),Be=Te.getProgramCacheKey(Oe);let $e=ae.programs;ae.environment=L.isMeshStandardMaterial?Z.environment:null,ae.fog=Z.fog,ae.envMap=(L.isMeshStandardMaterial?V:M).get(L.envMap||ae.environment),$e===void 0&&(L.addEventListener("dispose",we),$e=new Map,ae.programs=$e);let Ve=$e.get(Be);if(Ve!==void 0){if(ae.currentProgram===Ve&&ae.lightsStateVersion===Ie)return Rf(L,Oe),Ve}else Oe.uniforms=Te.getUniforms(L),L.onBuild(oe,Oe,v),L.onBeforeCompile(Oe,v),Ve=Te.acquireProgram(Oe,Be),$e.set(Be,Ve),ae.uniforms=Oe.uniforms;const We=ae.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(We.clippingPlanes=Fe.uniform),Rf(L,Oe),ae.needsLights=dx(L),ae.lightsStateVersion=Ie,ae.needsLights&&(We.ambientLightColor.value=re.state.ambient,We.lightProbe.value=re.state.probe,We.directionalLights.value=re.state.directional,We.directionalLightShadows.value=re.state.directionalShadow,We.spotLights.value=re.state.spot,We.spotLightShadows.value=re.state.spotShadow,We.rectAreaLights.value=re.state.rectArea,We.ltc_1.value=re.state.rectAreaLTC1,We.ltc_2.value=re.state.rectAreaLTC2,We.pointLights.value=re.state.point,We.pointLightShadows.value=re.state.pointShadow,We.hemisphereLights.value=re.state.hemi,We.directionalShadowMap.value=re.state.directionalShadowMap,We.directionalShadowMatrix.value=re.state.directionalShadowMatrix,We.spotShadowMap.value=re.state.spotShadowMap,We.spotLightMatrix.value=re.state.spotLightMatrix,We.spotLightMap.value=re.state.spotLightMap,We.pointShadowMap.value=re.state.pointShadowMap,We.pointShadowMatrix.value=re.state.pointShadowMatrix),ae.currentProgram=Ve,ae.uniformsList=null,Ve}function Tf(L){if(L.uniformsList===null){const Z=L.currentProgram.getUniforms();L.uniformsList=Fl.seqWithValue(Z.seq,L.uniforms)}return L.uniformsList}function Rf(L,Z){const oe=F.get(L);oe.outputColorSpace=Z.outputColorSpace,oe.batching=Z.batching,oe.instancing=Z.instancing,oe.instancingColor=Z.instancingColor,oe.skinning=Z.skinning,oe.morphTargets=Z.morphTargets,oe.morphNormals=Z.morphNormals,oe.morphColors=Z.morphColors,oe.morphTargetsCount=Z.morphTargetsCount,oe.numClippingPlanes=Z.numClippingPlanes,oe.numIntersection=Z.numClipIntersection,oe.vertexAlphas=Z.vertexAlphas,oe.vertexTangents=Z.vertexTangents,oe.toneMapping=Z.toneMapping}function cx(L,Z,oe,ae,re){Z.isScene!==!0&&(Z=X),x.resetTextureUnits();const Ce=Z.fog,Ie=ae.isMeshStandardMaterial?Z.environment:null,Oe=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ni,Be=(ae.isMeshStandardMaterial?V:M).get(ae.envMap||Ie),$e=ae.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Ve=!!oe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),We=!!oe.morphAttributes.position,Mt=!!oe.morphAttributes.normal,bn=!!oe.morphAttributes.color;let zt=ss;ae.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(zt=v.toneMapping);const vi=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,ft=vi!==void 0?vi.length:0,Ze=F.get(ae),lu=p.state.lights;if(O===!0&&(N===!0||L!==b)){const Ln=L===b&&ae.id===k;Fe.setState(ae,L,Ln)}let xt=!1;ae.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==lu.state.version||Ze.outputColorSpace!==Oe||re.isBatchedMesh&&Ze.batching===!1||!re.isBatchedMesh&&Ze.batching===!0||re.isInstancedMesh&&Ze.instancing===!1||!re.isInstancedMesh&&Ze.instancing===!0||re.isSkinnedMesh&&Ze.skinning===!1||!re.isSkinnedMesh&&Ze.skinning===!0||re.isInstancedMesh&&Ze.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Ze.instancingColor===!1&&re.instanceColor!==null||Ze.envMap!==Be||ae.fog===!0&&Ze.fog!==Ce||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Fe.numPlanes||Ze.numIntersection!==Fe.numIntersection)||Ze.vertexAlphas!==$e||Ze.vertexTangents!==Ve||Ze.morphTargets!==We||Ze.morphNormals!==Mt||Ze.morphColors!==bn||Ze.toneMapping!==zt||Y.isWebGL2===!0&&Ze.morphTargetsCount!==ft)&&(xt=!0):(xt=!0,Ze.__version=ae.version);let gs=Ze.currentProgram;xt===!0&&(gs=Oa(ae,Z,re));let Cf=!1,Eo=!1,cu=!1;const Zt=gs.getUniforms(),vs=Ze.uniforms;if(j.useProgram(gs.program)&&(Cf=!0,Eo=!0,cu=!0),ae.id!==k&&(k=ae.id,Eo=!0),Cf||b!==L){Zt.setValue(P,"projectionMatrix",L.projectionMatrix),Zt.setValue(P,"viewMatrix",L.matrixWorldInverse);const Ln=Zt.map.cameraPosition;Ln!==void 0&&Ln.setValue(P,ce.setFromMatrixPosition(L.matrixWorld)),Y.logarithmicDepthBuffer&&Zt.setValue(P,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Zt.setValue(P,"isOrthographic",L.isOrthographicCamera===!0),b!==L&&(b=L,Eo=!0,cu=!0)}if(re.isSkinnedMesh){Zt.setOptional(P,re,"bindMatrix"),Zt.setOptional(P,re,"bindMatrixInverse");const Ln=re.skeleton;Ln&&(Y.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),Zt.setValue(P,"boneTexture",Ln.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}re.isBatchedMesh&&(Zt.setOptional(P,re,"batchingTexture"),Zt.setValue(P,"batchingTexture",re._matricesTexture,x));const uu=oe.morphAttributes;if((uu.position!==void 0||uu.normal!==void 0||uu.color!==void 0&&Y.isWebGL2===!0)&&qe.update(re,oe,gs),(Eo||Ze.receiveShadow!==re.receiveShadow)&&(Ze.receiveShadow=re.receiveShadow,Zt.setValue(P,"receiveShadow",re.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(vs.envMap.value=Be,vs.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Eo&&(Zt.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&ux(vs,cu),Ce&&ae.fog===!0&&_e.refreshFogUniforms(vs,Ce),_e.refreshMaterialUniforms(vs,ae,K,$,C),Fl.upload(P,Tf(Ze),vs,x)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Fl.upload(P,Tf(Ze),vs,x),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Zt.setValue(P,"center",re.center),Zt.setValue(P,"modelViewMatrix",re.modelViewMatrix),Zt.setValue(P,"normalMatrix",re.normalMatrix),Zt.setValue(P,"modelMatrix",re.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Ln=ae.uniformsGroups;for(let du=0,hx=Ln.length;du<hx;du++)if(Y.isWebGL2){const Lf=Ln[du];nt.update(Lf,gs),nt.bind(Lf,gs)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gs}function ux(L,Z){L.ambientLightColor.needsUpdate=Z,L.lightProbe.needsUpdate=Z,L.directionalLights.needsUpdate=Z,L.directionalLightShadows.needsUpdate=Z,L.pointLights.needsUpdate=Z,L.pointLightShadows.needsUpdate=Z,L.spotLights.needsUpdate=Z,L.spotLightShadows.needsUpdate=Z,L.rectAreaLights.needsUpdate=Z,L.hemisphereLights.needsUpdate=Z}function dx(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(L,Z,oe){F.get(L.texture).__webglTexture=Z,F.get(L.depthTexture).__webglTexture=oe;const ae=F.get(L);ae.__hasExternalTextures=!0,ae.__hasExternalTextures&&(ae.__autoAllocateDepthBuffer=oe===void 0,ae.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ae.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,Z){const oe=F.get(L);oe.__webglFramebuffer=Z,oe.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(L,Z=0,oe=0){A=L,R=Z,E=oe;let ae=!0,re=null,Ce=!1,Ie=!1;if(L){const Be=F.get(L);Be.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(P.FRAMEBUFFER,null),ae=!1):Be.__webglFramebuffer===void 0?x.setupRenderTarget(L):Be.__hasExternalTextures&&x.rebindTextures(L,F.get(L.texture).__webglTexture,F.get(L.depthTexture).__webglTexture);const $e=L.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ie=!0);const Ve=F.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Ve[Z])?re=Ve[Z][oe]:re=Ve[Z],Ce=!0):Y.isWebGL2&&L.samples>0&&x.useMultisampledRTT(L)===!1?re=F.get(L).__webglMultisampledFramebuffer:Array.isArray(Ve)?re=Ve[oe]:re=Ve,w.copy(L.viewport),G.copy(L.scissor),W=L.scissorTest}else w.copy(le).multiplyScalar(K).floor(),G.copy(de).multiplyScalar(K).floor(),W=xe;if(j.bindFramebuffer(P.FRAMEBUFFER,re)&&Y.drawBuffers&&ae&&j.drawBuffers(L,re),j.viewport(w),j.scissor(G),j.setScissorTest(W),Ce){const Be=F.get(L.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Be.__webglTexture,oe)}else if(Ie){const Be=F.get(L.texture),$e=Z||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Be.__webglTexture,oe||0,$e)}k=-1},this.readRenderTargetPixels=function(L,Z,oe,ae,re,Ce,Ie){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=F.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){j.bindFramebuffer(P.FRAMEBUFFER,Oe);try{const Be=L.texture,$e=Be.format,Ve=Be.type;if($e!==Yn&&Le.convert($e)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===ga&&(z.has("EXT_color_buffer_half_float")||Y.isWebGL2&&z.has("EXT_color_buffer_float"));if(Ve!==rs&&Le.convert(Ve)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Yi&&(Y.isWebGL2||z.has("OES_texture_float")||z.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=L.width-ae&&oe>=0&&oe<=L.height-re&&P.readPixels(Z,oe,ae,re,Le.convert($e),Le.convert(Ve),Ce)}finally{const Be=A!==null?F.get(A).__webglFramebuffer:null;j.bindFramebuffer(P.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(L,Z,oe=0){const ae=Math.pow(2,-oe),re=Math.floor(Z.image.width*ae),Ce=Math.floor(Z.image.height*ae);x.setTexture2D(Z,0),P.copyTexSubImage2D(P.TEXTURE_2D,oe,0,0,L.x,L.y,re,Ce),j.unbindTexture()},this.copyTextureToTexture=function(L,Z,oe,ae=0){const re=Z.image.width,Ce=Z.image.height,Ie=Le.convert(oe.format),Oe=Le.convert(oe.type);x.setTexture2D(oe,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,oe.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,oe.unpackAlignment),Z.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ae,L.x,L.y,re,Ce,Ie,Oe,Z.image.data):Z.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ae,L.x,L.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Ie,Z.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,ae,L.x,L.y,Ie,Oe,Z.image),ae===0&&oe.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(L,Z,oe,ae,re=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=L.max.x-L.min.x+1,Ie=L.max.y-L.min.y+1,Oe=L.max.z-L.min.z+1,Be=Le.convert(ae.format),$e=Le.convert(ae.type);let Ve;if(ae.isData3DTexture)x.setTexture3D(ae,0),Ve=P.TEXTURE_3D;else if(ae.isDataArrayTexture||ae.isCompressedArrayTexture)x.setTexture2DArray(ae,0),Ve=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,ae.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ae.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,ae.unpackAlignment);const We=P.getParameter(P.UNPACK_ROW_LENGTH),Mt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),bn=P.getParameter(P.UNPACK_SKIP_PIXELS),zt=P.getParameter(P.UNPACK_SKIP_ROWS),vi=P.getParameter(P.UNPACK_SKIP_IMAGES),ft=oe.isCompressedTexture?oe.mipmaps[re]:oe.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,L.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,L.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,L.min.z),oe.isDataTexture||oe.isData3DTexture?P.texSubImage3D(Ve,re,Z.x,Z.y,Z.z,Ce,Ie,Oe,Be,$e,ft.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ve,re,Z.x,Z.y,Z.z,Ce,Ie,Oe,Be,ft.data)):P.texSubImage3D(Ve,re,Z.x,Z.y,Z.z,Ce,Ie,Oe,Be,$e,ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,We),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,bn),P.pixelStorei(P.UNPACK_SKIP_ROWS,zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,vi),re===0&&ae.generateMipmaps&&P.generateMipmap(Ve),j.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?x.setTextureCube(L,0):L.isData3DTexture?x.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?x.setTexture2DArray(L,0):x.setTexture2D(L,0),j.unbindTexture()},this.resetState=function(){R=0,E=0,A=null,j.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Hh?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===jc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?Gs:N0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Gs?Dt:Ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class MA extends Xh{}MA.prototype.isWebGL1Renderer=!0;class Ra{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=t,this.far=i}clone(){return new Ra(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nv extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Bd extends Pt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Tr=new Je,am=new Je,cl=[],lm=new rr,wA=new Je,Io=new tt,Do=new ps;class tn extends tt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bd(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,wA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new rr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Tr),lm.copy(e.boundingBox).applyMatrix4(Tr),this.boundingBox.union(lm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ps),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Tr),Do.copy(e.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union(Do)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(i),e.ray.intersectsSphere(Do)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Tr),am.multiplyMatrices(i,Tr),Io.matrixWorld=am,Io.raycast(e,cl);for(let o=0,a=cl.length;o<a;o++){const l=cl[o];l.instanceId=r,l.object=this,t.push(l)}cl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bd(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Yc extends or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cm=new I,um=new I,dm=new Je,ju=new Vh,ul=new ps;class iv extends Nt{constructor(e=new vt,t=new Yc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)cm.fromBufferAttribute(t,s-1),um.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=cm.distanceTo(um);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(s),ul.radius+=r,e.ray.intersectsSphere(ul)===!1)return;dm.copy(s).invert(),ju.copy(e.ray).applyMatrix4(dm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new I,u=new I,d=new I,h=new I,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const f=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let v=f,S=_-1;v<S;v+=m){const R=g.getX(v),E=g.getX(v+1);if(c.fromBufferAttribute(p,R),u.fromBufferAttribute(p,E),ju.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const k=e.ray.origin.distanceTo(h);k<e.near||k>e.far||t.push({distance:k,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let v=f,S=_-1;v<S;v+=m){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),ju.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const hm=new I,fm=new I;class sv extends iv{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)hm.fromBufferAttribute(t,s),fm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+hm.distanceTo(fm);e.setAttribute("lineDistance",new et(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rv extends or{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pm=new Je,Hd=new Vh,dl=new ps,hl=new I;class ov extends Nt{constructor(e=new vt,t=new rv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(s),dl.radius+=r,e.ray.intersectsSphere(dl)===!1)return;pm.copy(s).invert(),Hd.copy(e.ray).applyMatrix4(pm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=h,y=m;g<y;g++){const p=c.getX(g);hl.fromBufferAttribute(d,p),mm(hl,p,l,s,e,t,this)}}else{const h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=h,y=m;g<y;g++)hl.fromBufferAttribute(d,g),mm(hl,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mm(n,e,t,i,s,r,o){const a=Hd.distanceSqToPoint(n);if(a<t){const l=new I;Hd.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class gi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,m=(o-u)/h;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new me:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new I,s=[],r=[],o=[],a=new I,l=new Je;for(let m=0;m<=e;m++){const g=m/e;s[m]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(jt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(jt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class jh extends gi{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new me,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,m=c-this.aY;l=h*u-m*d+this.aX,c=h*d+m*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class EA extends jh{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function $h(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,m*=u,s(o,a,h,m)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const fl=new I,$u=new $h,Yu=new $h,Ku=new $h;class AA extends gi{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(fl.subVectors(s[0],s[1]).add(s[0]),c=fl);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(fl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=fl),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),m),y=Math.pow(d.distanceToSquared(h),m),p=Math.pow(h.distanceToSquared(u),m);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),$u.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,y,p),Yu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,y,p),Ku.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,y,p)}else this.curveType==="catmullrom"&&($u.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Yu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Ku.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set($u.calc(l),Yu.calc(l),Ku.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gm(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function TA(n,e){const t=1-n;return t*t*e}function RA(n,e){return 2*(1-n)*n*e}function CA(n,e){return n*n*e}function ia(n,e,t,i){return TA(n,e)+RA(n,t)+CA(n,i)}function LA(n,e){const t=1-n;return t*t*t*e}function PA(n,e){const t=1-n;return 3*t*t*n*e}function IA(n,e){return 3*(1-n)*n*n*e}function DA(n,e){return n*n*n*e}function sa(n,e,t,i,s){return LA(n,e)+PA(n,t)+IA(n,i)+DA(n,s)}class av extends gi{constructor(e=new me,t=new me,i=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new me){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(sa(e,s.x,r.x,o.x,a.x),sa(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class NA extends gi{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(sa(e,s.x,r.x,o.x,a.x),sa(e,s.y,r.y,o.y,a.y),sa(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lv extends gi{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class kA extends gi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cv extends gi{constructor(e=new me,t=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new me){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ia(e,s.x,r.x,o.x),ia(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class OA extends gi{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ia(e,s.x,r.x,o.x),ia(e,s.y,r.y,o.y),ia(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uv extends gi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(gm(a,l.x,c.x,u.x,d.x),gm(a,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new me().fromArray(s))}return this}}var Gd=Object.freeze({__proto__:null,ArcCurve:EA,CatmullRomCurve3:AA,CubicBezierCurve:av,CubicBezierCurve3:NA,EllipseCurve:jh,LineCurve:lv,LineCurve3:kA,QuadraticBezierCurve:cv,QuadraticBezierCurve3:OA,SplineCurve:uv});class UA extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gd[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new Gd[s.type]().fromJSON(s))}return this}}class jr extends UA{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new lv(this.currentPoint.clone(),new me(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new cv(this.currentPoint.clone(),new me(e,t),new me(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new av(this.currentPoint.clone(),new me(e,t),new me(i,s),new me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new uv(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new jh(e,t,i,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Kc extends vt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new I,u=new me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const m=i+d/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class zn extends vt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],m=[];let g=0;const y=[],p=i/2;let f=0;_(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new et(d,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(m,2));function _(){const S=new I,R=new I;let E=0;const A=(t-e)/i;for(let k=0;k<=r;k++){const b=[],w=k/r,G=w*(t-e)+e;for(let W=0;W<=s;W++){const te=W/s,U=te*l+a,q=Math.sin(U),$=Math.cos(U);R.x=G*q,R.y=-w*i+p,R.z=G*$,d.push(R.x,R.y,R.z),S.set(q,A,$).normalize(),h.push(S.x,S.y,S.z),m.push(te,1-w),b.push(g++)}y.push(b)}for(let k=0;k<s;k++)for(let b=0;b<r;b++){const w=y[b][k],G=y[b+1][k],W=y[b+1][k+1],te=y[b][k+1];u.push(w,G,te),u.push(G,W,te),E+=6}c.addGroup(f,E,0),f+=E}function v(S){const R=g,E=new me,A=new I;let k=0;const b=S===!0?e:t,w=S===!0?1:-1;for(let W=1;W<=s;W++)d.push(0,p*w,0),h.push(0,w,0),m.push(.5,.5),g++;const G=g;for(let W=0;W<=s;W++){const U=W/s*l+a,q=Math.cos(U),$=Math.sin(U);A.x=b*$,A.y=p*w,A.z=b*q,d.push(A.x,A.y,A.z),h.push(0,w,0),E.x=q*.5+.5,E.y=$*.5*w+.5,m.push(E.x,E.y),g++}for(let W=0;W<s;W++){const te=R+W,U=G+W;S===!0?u.push(U,U+1,te):u.push(U+1,U,te),k+=3}c.addGroup(f,k,S===!0?1:2),f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oi extends zn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Oi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yh extends vt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new et(r,3)),this.setAttribute("normal",new et(r.slice(),3)),this.setAttribute("uv",new et(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const v=new I,S=new I,R=new I;for(let E=0;E<t.length;E+=3)m(t[E+0],v),m(t[E+1],S),m(t[E+2],R),l(v,S,R,_)}function l(_,v,S,R){const E=R+1,A=[];for(let k=0;k<=E;k++){A[k]=[];const b=_.clone().lerp(S,k/E),w=v.clone().lerp(S,k/E),G=E-k;for(let W=0;W<=G;W++)W===0&&k===E?A[k][W]=b:A[k][W]=b.clone().lerp(w,W/G)}for(let k=0;k<E;k++)for(let b=0;b<2*(E-k)-1;b++){const w=Math.floor(b/2);b%2===0?(h(A[k][w+1]),h(A[k+1][w]),h(A[k][w])):(h(A[k][w+1]),h(A[k+1][w+1]),h(A[k+1][w]))}}function c(_){const v=new I;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(_),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function u(){const _=new I;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];const S=p(_)/2/Math.PI+.5,R=f(_)/Math.PI+.5;o.push(S,1-R)}g(),d()}function d(){for(let _=0;_<o.length;_+=6){const v=o[_+0],S=o[_+2],R=o[_+4],E=Math.max(v,S,R),A=Math.min(v,S,R);E>.9&&A<.1&&(v<.2&&(o[_+0]+=1),S<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function h(_){r.push(_.x,_.y,_.z)}function m(_,v){const S=_*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function g(){const _=new I,v=new I,S=new I,R=new I,E=new me,A=new me,k=new me;for(let b=0,w=0;b<r.length;b+=9,w+=6){_.set(r[b+0],r[b+1],r[b+2]),v.set(r[b+3],r[b+4],r[b+5]),S.set(r[b+6],r[b+7],r[b+8]),E.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),k.set(o[w+4],o[w+5]),R.copy(_).add(v).add(S).divideScalar(3);const G=p(R);y(E,w+0,_,G),y(A,w+2,v,G),y(k,w+4,S,G)}}function y(_,v,S,R){R<0&&_.x===1&&(o[v]=_.x-1),S.x===0&&S.z===0&&(o[v]=R/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yh(e.vertices,e.indices,e.radius,e.details)}}const pl=new I,ml=new I,Zu=new I,gl=new kn;class dv extends vt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(qr*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},m=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:y,b:p,c:f}=gl;if(y.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),gl.getNormal(Zu),d[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,d[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const v=(_+1)%3,S=d[_],R=d[v],E=gl[u[_]],A=gl[u[v]],k=`${S}_${R}`,b=`${R}_${S}`;b in h&&h[b]?(Zu.dot(h[b].normal)<=r&&(m.push(E.x,E.y,E.z),m.push(A.x,A.y,A.z)),h[b]=null):k in h||(h[k]={index0:c[_],index1:c[v],normal:Zu.clone()})}}for(const g in h)if(h[g]){const{index0:y,index1:p}=h[g];pl.fromBufferAttribute(a,y),ml.fromBufferAttribute(a,p),m.push(pl.x,pl.y,pl.z),m.push(ml.x,ml.y,ml.z)}this.setAttribute("position",new et(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Vs extends jr{constructor(e){super(e),this.uuid=sr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new jr().fromJSON(s))}return this}}const FA={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=hv(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,d,h,m;if(i&&(r=VA(n,e,r,t)),n.length>80*t){a=c=n[0],l=u=n[1];for(let g=t;g<s;g+=t)d=n[g],h=n[g+1],d<a&&(a=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return ya(r,o,t,a,l,m,0),o}};function hv(n,e,t,i,s){let r,o;if(s===eT(n,e,t,i)>0)for(r=e;r<t;r+=i)o=vm(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=vm(r,n[r],n[r+1],o);return o&&Zc(o,o.next)&&(_a(o),o=o.next),o}function Zs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Zc(t,t.next)||pt(t.prev,t,t.next)===0)){if(_a(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ya(n,e,t,i,s,r,o){if(!n)return;!o&&r&&$A(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?BA(n,i,s,r):zA(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),_a(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=HA(Zs(n),e,t),ya(n,e,t,i,s,r,2)):o===2&&GA(n,e,t,i,s,r):ya(Zs(n),e,t,i,s,r,1);break}}}function zA(n){const e=n.prev,t=n,i=n.next;if(pt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,h=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=m&&Ur(s,a,r,l,o,c,g.x,g.y)&&pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function BA(n,e,t,i){const s=n.prev,r=n,o=n.next;if(pt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,m=a<l?a<c?a:c:l<c?l:c,g=u<d?u<h?u:h:d<h?d:h,y=a>l?a>c?a:c:l>c?l:c,p=u>d?u>h?u:h:d>h?d:h,f=Vd(m,g,e,t,i),_=Vd(y,p,e,t,i);let v=n.prevZ,S=n.nextZ;for(;v&&v.z>=f&&S&&S.z<=_;){if(v.x>=m&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Ur(a,u,l,d,c,h,v.x,v.y)&&pt(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=m&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&Ur(a,u,l,d,c,h,S.x,S.y)&&pt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=f;){if(v.x>=m&&v.x<=y&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Ur(a,u,l,d,c,h,v.x,v.y)&&pt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=_;){if(S.x>=m&&S.x<=y&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&Ur(a,u,l,d,c,h,S.x,S.y)&&pt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function HA(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!Zc(s,r)&&fv(s,i,i.next,r)&&xa(s,r)&&xa(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),_a(i),_a(i.next),i=n=r),i=i.next}while(i!==n);return Zs(i)}function GA(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ZA(o,a)){let l=pv(o,a);o=Zs(o,o.next),l=Zs(l,l.next),ya(o,e,t,i,s,r,0),ya(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function VA(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=hv(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(KA(c));for(s.sort(WA),r=0;r<s.length;r++)t=qA(s[r],t);return t}function WA(n,e){return n.x-e.x}function qA(n,e){const t=XA(n,e);if(!t)return e;const i=pv(t,n);return Zs(i,i.next),Zs(t,t.next)}function XA(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>i&&(i=h,s=t.x<t.next.x?t:t.next,h===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ur(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),xa(t,n)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&jA(s,t)))&&(s=t,u=d)),t=t.next;while(t!==a);return s}function jA(n,e){return pt(n.prev,n,e.prev)<0&&pt(e.next,n,n.next)<0}function $A(n,e,t,i){let s=n;do s.z===0&&(s.z=Vd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,YA(s)}function YA(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Vd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function KA(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ur(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function ZA(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!JA(n,e)&&(xa(n,e)&&xa(e,n)&&QA(n,e)&&(pt(n.prev,n,e.prev)||pt(n,e.prev,e))||Zc(n,e)&&pt(n.prev,n,n.next)>0&&pt(e.prev,e,e.next)>0)}function pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Zc(n,e){return n.x===e.x&&n.y===e.y}function fv(n,e,t,i){const s=yl(pt(n,e,t)),r=yl(pt(n,e,i)),o=yl(pt(t,i,n)),a=yl(pt(t,i,e));return!!(s!==r&&o!==a||s===0&&vl(n,t,e)||r===0&&vl(n,i,e)||o===0&&vl(t,n,i)||a===0&&vl(t,e,i))}function vl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function yl(n){return n>0?1:n<0?-1:0}function JA(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&fv(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function xa(n,e){return pt(n.prev,n,n.next)<0?pt(n,e,n.next)>=0&&pt(n,n.prev,e)>=0:pt(n,e,n.prev)<0||pt(n,n.next,e)<0}function QA(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function pv(n,e){const t=new Wd(n.i,n.x,n.y),i=new Wd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function vm(n,e,t,i){const s=new Wd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function _a(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Wd(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eT(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class pi{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return pi.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];ym(e),xm(i,e);let o=e.length;t.forEach(ym);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,xm(i,t[l]);const a=FA.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function ym(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function xm(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Kh extends vt{constructor(e=new Vs([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:tT;let v,S=!1,R,E,A,k;f&&(v=f.getSpacedPoints(u),S=!0,h=!1,R=f.computeFrenetFrames(u,!1),E=new I,A=new I,k=new I),h||(p=0,m=0,g=0,y=0);const b=a.extractPoints(c);let w=b.shape;const G=b.holes;if(!pi.isClockWise(w)){w=w.reverse();for(let P=0,se=G.length;P<se;P++){const z=G[P];pi.isClockWise(z)&&(G[P]=z.reverse())}}const te=pi.triangulateShape(w,G),U=w;for(let P=0,se=G.length;P<se;P++){const z=G[P];w=w.concat(z)}function q(P,se,z){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(se,z)}const $=w.length,K=te.length;function B(P,se,z){let Y,j,pe;const F=P.x-se.x,x=P.y-se.y,M=z.x-P.x,V=z.y-P.y,ge=F*F+x*x,ve=F*V-x*M;if(Math.abs(ve)>Number.EPSILON){const ue=Math.sqrt(ge),Te=Math.sqrt(M*M+V*V),_e=se.x-x/ue,Re=se.y+F/ue,De=z.x-V/Te,Fe=z.y+M/Te,ye=((De-_e)*V-(Fe-Re)*M)/(F*V-x*M);Y=_e+F*ye-P.x,j=Re+x*ye-P.y;const Qe=Y*Y+j*j;if(Qe<=2)return new me(Y,j);pe=Math.sqrt(Qe/2)}else{let ue=!1;F>Number.EPSILON?M>Number.EPSILON&&(ue=!0):F<-Number.EPSILON?M<-Number.EPSILON&&(ue=!0):Math.sign(x)===Math.sign(V)&&(ue=!0),ue?(Y=-x,j=F,pe=Math.sqrt(ge)):(Y=F,j=x,pe=Math.sqrt(ge/2))}return new me(Y/pe,j/pe)}const Q=[];for(let P=0,se=U.length,z=se-1,Y=P+1;P<se;P++,z++,Y++)z===se&&(z=0),Y===se&&(Y=0),Q[P]=B(U[P],U[z],U[Y]);const le=[];let de,xe=Q.concat();for(let P=0,se=G.length;P<se;P++){const z=G[P];de=[];for(let Y=0,j=z.length,pe=j-1,F=Y+1;Y<j;Y++,pe++,F++)pe===j&&(pe=0),F===j&&(F=0),de[Y]=B(z[Y],z[pe],z[F]);le.push(de),xe=xe.concat(de)}for(let P=0;P<p;P++){const se=P/p,z=m*Math.cos(se*Math.PI/2),Y=g*Math.sin(se*Math.PI/2)+y;for(let j=0,pe=U.length;j<pe;j++){const F=q(U[j],Q[j],Y);T(F.x,F.y,-z)}for(let j=0,pe=G.length;j<pe;j++){const F=G[j];de=le[j];for(let x=0,M=F.length;x<M;x++){const V=q(F[x],de[x],Y);T(V.x,V.y,-z)}}}const ne=g+y;for(let P=0;P<$;P++){const se=h?q(w[P],xe[P],ne):w[P];S?(A.copy(R.normals[0]).multiplyScalar(se.x),E.copy(R.binormals[0]).multiplyScalar(se.y),k.copy(v[0]).add(A).add(E),T(k.x,k.y,k.z)):T(se.x,se.y,0)}for(let P=1;P<=u;P++)for(let se=0;se<$;se++){const z=h?q(w[se],xe[se],ne):w[se];S?(A.copy(R.normals[P]).multiplyScalar(z.x),E.copy(R.binormals[P]).multiplyScalar(z.y),k.copy(v[P]).add(A).add(E),T(k.x,k.y,k.z)):T(z.x,z.y,d/u*P)}for(let P=p-1;P>=0;P--){const se=P/p,z=m*Math.cos(se*Math.PI/2),Y=g*Math.sin(se*Math.PI/2)+y;for(let j=0,pe=U.length;j<pe;j++){const F=q(U[j],Q[j],Y);T(F.x,F.y,d+z)}for(let j=0,pe=G.length;j<pe;j++){const F=G[j];de=le[j];for(let x=0,M=F.length;x<M;x++){const V=q(F[x],de[x],Y);S?T(V.x,V.y+v[u-1].y,v[u-1].x+z):T(V.x,V.y,d+z)}}}O(),N();function O(){const P=s.length/3;if(h){let se=0,z=$*se;for(let Y=0;Y<K;Y++){const j=te[Y];ee(j[2]+z,j[1]+z,j[0]+z)}se=u+p*2,z=$*se;for(let Y=0;Y<K;Y++){const j=te[Y];ee(j[0]+z,j[1]+z,j[2]+z)}}else{for(let se=0;se<K;se++){const z=te[se];ee(z[2],z[1],z[0])}for(let se=0;se<K;se++){const z=te[se];ee(z[0]+$*u,z[1]+$*u,z[2]+$*u)}}i.addGroup(P,s.length/3-P,0)}function N(){const P=s.length/3;let se=0;C(U,se),se+=U.length;for(let z=0,Y=G.length;z<Y;z++){const j=G[z];C(j,se),se+=j.length}i.addGroup(P,s.length/3-P,1)}function C(P,se){let z=P.length;for(;--z>=0;){const Y=z;let j=z-1;j<0&&(j=P.length-1);for(let pe=0,F=u+p*2;pe<F;pe++){const x=$*pe,M=$*(pe+1),V=se+Y+x,ge=se+j+x,ve=se+j+M,ue=se+Y+M;ce(V,ge,ve,ue)}}}function T(P,se,z){l.push(P),l.push(se),l.push(z)}function ee(P,se,z){X(P),X(se),X(z);const Y=s.length/3,j=_.generateTopUV(i,s,Y-3,Y-2,Y-1);he(j[0]),he(j[1]),he(j[2])}function ce(P,se,z,Y){X(P),X(se),X(Y),X(se),X(z),X(Y);const j=s.length/3,pe=_.generateSideWallUV(i,s,j-6,j-3,j-2,j-1);he(pe[0]),he(pe[1]),he(pe[3]),he(pe[1]),he(pe[2]),he(pe[3])}function X(P){s.push(l[P*3+0]),s.push(l[P*3+1]),s.push(l[P*3+2])}function he(P){r.push(P.x),r.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return nT(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Gd[s.type]().fromJSON(s)),new Kh(i,e.options)}}const tT={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new me(r,o),new me(a,l),new me(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],m=e[s*3+1],g=e[s*3+2],y=e[r*3],p=e[r*3+1],f=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new me(o,1-l),new me(c,1-d),new me(h,1-g),new me(y,1-f)]:[new me(a,1-l),new me(u,1-d),new me(m,1-g),new me(p,1-f)]}};function nT(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ca extends Yh{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ca(e.radius,e.detail)}}class Zh extends vt{constructor(e=new Vs([new me(0,.5),new me(-.5,-.5),new me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new et(s,3)),this.setAttribute("normal",new et(r,3)),this.setAttribute("uv",new et(o,2));function c(u){const d=s.length/3,h=u.extractPoints(t);let m=h.shape;const g=h.holes;pi.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,f=g.length;p<f;p++){const _=g[p];pi.isClockWise(_)===!0&&(g[p]=_.reverse())}const y=pi.triangulateShape(m,g);for(let p=0,f=g.length;p<f;p++){const _=g[p];m=m.concat(_)}for(let p=0,f=m.length;p<f;p++){const _=m[p];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let p=0,f=y.length;p<f;p++){const _=y[p],v=_[0]+d,S=_[1]+d,R=_[2]+d;i.push(v,S,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return iT(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new Zh(i,e.curveSegments)}}function iT(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class La extends vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new I,h=new I,m=[],g=[],y=[],p=[];for(let f=0;f<=i;f++){const _=[],v=f/i;let S=0;f===0&&o===0?S=.5/t:f===i&&l===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const E=R/t;d.x=-e*Math.cos(s+E*r)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(s+E*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),p.push(E+S,1-v),_.push(c++)}u.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){const v=u[f][_+1],S=u[f][_],R=u[f+1][_],E=u[f+1][_+1];(f!==0||o>0)&&m.push(v,S,E),(f!==i-1||l<Math.PI)&&m.push(S,R,E)}this.setIndex(m),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(y,3)),this.setAttribute("uv",new et(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jc extends vt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new I,d=new I,h=new I;for(let m=0;m<=i;m++)for(let g=0;g<=s;g++){const y=g/s*r,p=m/i*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(y),d.y=(e+t*Math.cos(p))*Math.sin(y),d.z=t*Math.sin(p),a.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=s;g++){const y=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,_=(s+1)*m+g;o.push(y,p,_),o.push(p,f,_)}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(l,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ut extends or{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k0,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const _m={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class sT{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const rT=new sT;class Jh{constructor(e){this.manager=e!==void 0?e:rT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Jh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class oT extends Error{constructor(e,t){super(e),this.response=t}}class aT extends Jh{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=_m.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:i,onError:s});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Mi[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=h?parseInt(h):0,g=m!==0;let y=0;const p=new ReadableStream({start(f){_();function _(){d.read().then(({done:v,value:S})=>{if(v)f.close();else{y+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:m});for(let E=0,A=u.length;E<A;E++){const k=u[E];k.onProgress&&k.onProgress(R)}f.enqueue(S),_()}})}}});return new Response(p)}else throw new oT(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{_m.add(e,c);const u=Mi[e];delete Mi[e];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Mi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let d=0,h=u.length;d<h;d++){const m=u[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Qh extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class lT extends Qh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ju=new Je,bm=new I,Sm=new I;class cT{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wh,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;bm.setFromMatrixPosition(e.matrixWorld),t.position.copy(bm),Sm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sm),t.updateMatrixWorld(),Ju.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ju),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ju)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uT extends cT{constructor(){super(new Y0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qd extends Qh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new uT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dT extends Qh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Mm=new me;class hT{constructor(e=new me(1/0,1/0),t=new me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Ss{constructor(){this.type="ShapePath",this.color=new Ae,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new jr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,r,o){return this.currentPath.bezierCurveTo(e,t,i,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const _=[];for(let v=0,S=f.length;v<S;v++){const R=f[v],E=new Vs;E.curves=R.curves,_.push(E)}return _}function i(f,_){const v=_.length;let S=!1;for(let R=v-1,E=0;E<v;R=E++){let A=_[R],k=_[E],b=k.x-A.x,w=k.y-A.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(A=_[E],b=-b,k=_[R],w=-w),f.y<A.y||f.y>k.y)continue;if(f.y===A.y){if(f.x===A.x)return!0}else{const G=w*(f.x-A.x)-b*(f.y-A.y);if(G===0)return!0;if(G<0)continue;S=!S}}else{if(f.y!==A.y)continue;if(k.x<=f.x&&f.x<=A.x||A.x<=f.x&&f.x<=k.x)return!0}}return S}const s=pi.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new Vs,l.curves=a.curves,c.push(l),c;let u=!s(r[0].getPoints());u=e?!u:u;const d=[],h=[];let m=[],g=0,y;h[g]=void 0,m[g]=[];for(let f=0,_=r.length;f<_;f++)a=r[f],y=a.getPoints(),o=s(y),o=e?!o:o,o?(!u&&h[g]&&g++,h[g]={s:new Vs,p:y},h[g].s.curves=a.curves,u&&g++,m[g]=[]):m[g].push({h:a,p:y[0]});if(!h[0])return t(r);if(h.length>1){let f=!1,_=0;for(let v=0,S=h.length;v<S;v++)d[v]=[];for(let v=0,S=h.length;v<S;v++){const R=m[v];for(let E=0;E<R.length;E++){const A=R[E];let k=!0;for(let b=0;b<h.length;b++)i(A.p,h[b].p)&&(v!==b&&_++,k?(k=!1,d[b].push(A)):f=!0);k&&d[v].push(A)}}_>0&&f===!1&&(m=d)}let p;for(let f=0,_=h.length;f<_;f++){l=h[f].s,c.push(l),p=m[f];for(let v=0,S=p.length;v<S;v++)l.holes.push(p[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);const mv="teide-settings",gv=100,ef=3e3,vv=1e4,tf=1e7,yv={low:{segments:800,samples:15e5},standard:{segments:1200,samples:25e5},high:{segments:2e3,samples:5e6},ultra:{segments:ef,samples:tf}},ba={low:{segments:600,samples:5e5},standard:{segments:1200,samples:12e5},high:{segments:1200,samples:2e6}},fT={low:1,standard:1.25,high:1.5},pT=1.25,mT=2,gT={...yv.standard},vT={...ba.standard};function Qu(){return{...nr()?vT:gT,language:null,onboardingDone:!1,tutorialDone:!1,invertPitch:!0,controlMode:"touch",gyroSensitivity:fn.sensDefault}}function mn(){try{const n=localStorage.getItem(mv);if(!n)return Qu();const e=JSON.parse(n);return yT({...Qu(),...e})}catch{return Qu()}}function lr(n){try{localStorage.setItem(mv,JSON.stringify(xv(n)))}catch{}}function xv(n){return{...n,segments:Math.max(gv,Math.min(ef,n.segments|0)),samples:Math.max(vv,Math.min(tf,n.samples|0))}}function yT(n){if(n=xv(n),!nr())return n;const e=ba.high;return n.segments>e.segments||n.samples>e.samples?(console.info(`[settings] Mobile clamp: persisted segments=${n.segments} samples=${n.samples} exceed mobile-high (${e.segments}/${e.samples}). Using mobile-standard for this session.`),{...ba.standard,language:n.language,onboardingDone:n.onboardingDone,tutorialDone:n.tutorialDone,invertPitch:n.invertPitch,controlMode:n.controlMode,gyroSensitivity:n.gyroSensitivity}):n}function xT(){const n=window.devicePixelRatio||1;if(!nr())return Math.min(n,mT);const e=mn();let t=null;for(const[s,r]of Object.entries(ba))if(r.segments===e.segments&&r.samples===e.samples){t=s;break}const i=t&&fT[t]||pT;return Math.min(n,i)}function _T(){const n=mn(),e=new URLSearchParams(window.location.search),t=parseInt(e.get("segments"),10),i=parseInt(e.get("samples"),10);return Number.isFinite(t)&&t>=gv&&t<=ef&&(n.segments=t),Number.isFinite(i)&&i>=vv&&i<=tf&&(n.samples=i),Pe.segments=n.segments,Et.sampleCount=n.samples,n}function bT(){const n=nr()?ba:yv;return Object.entries(n).map(([e,t])=>({name:e,...t}))}function ST(){return!!mn().onboardingDone}function MT(n=!0){const e=mn();e.onboardingDone=!!n,lr(e)}function wT(){return!!mn().tutorialDone}function ET(n=!0){const e=mn();e.tutorialDone=!!n,lr(e)}function AT(){const n=mn().invertPitch;return n===void 0?!0:!!n}function TT(n){const e=mn();e.invertPitch=!!n,lr(e)}function RT(){return mn().controlMode==="gyro"?"gyro":"touch"}function wm(n){const e=mn();e.controlMode=n==="gyro"?"gyro":"touch",lr(e)}function nf(){const n=Number(mn().gyroSensitivity);return Number.isFinite(n)?Math.max(fn.sensMin,Math.min(fn.sensMax,n)):fn.sensDefault}function CT(n){const e=mn(),t=Number(n);e.gyroSensitivity=Number.isFinite(t)?Math.max(fn.sensMin,Math.min(fn.sensMax,t)):fn.sensDefault,lr(e)}const St=new nv;St.background=new Ae(Ye.sky);St.fog=new Ra(Ye.sky,Pe.fogStart,Pe.fogEnd);const Gt=new wn(62,window.innerWidth/window.innerHeight,.5,15e3),cn=new Xh({antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});cn.setPixelRatio(xT());cn.setSize(window.innerWidth,window.innerHeight);cn.outputColorSpace=Dt;document.body.appendChild(cn.domElement);const _v=new qd(16774882,1.05);_v.position.set(80,140,60);St.add(_v);const LT=new lT(14542572,8292974,.55);St.add(LT);const Xd=new I(0,1,0);window.addEventListener("resize",()=>{Gt.aspect=window.innerWidth/window.innerHeight,Gt.updateProjectionMatrix(),cn.setSize(window.innerWidth,window.innerHeight)});const PT=typeof window<"u"?new URLSearchParams(window.location.search):null;function bv(n){if(PT?.get(n)==="1")return!0;try{return localStorage.getItem(n)==="1"}catch{return!1}}const Sv=bv("debugGl"),IT=bv("debugPerf")||Sv;let ai=null,No=0,ko=0;const DT=(()=>{try{for(const n of document.querySelectorAll("script")){const e=(n.src||"").match(/index-([A-Za-z0-9_-]+)\.js/);if(e)return e[1]}}catch{}return"?"})();function NT(){ai||(ai=document.createElement("div"),ai.id="debug-perf",ai.style.cssText=["position: fixed","top:  calc(24px + env(safe-area-inset-top,  0))","left: calc(24px + env(safe-area-inset-left, 0))","z-index: 50","padding: 8px 12px","background: rgba(0, 0, 0, 0.62)","color: #B0FF80",'font: 11px/1.45 ui-monospace, "SF Mono", Menlo, Consolas, monospace',"border-radius: 6px","pointer-events: none","white-space: pre","letter-spacing: 0.02em","min-width: 160px"].join(";"),ai.textContent="measuring…",document.body.appendChild(ai))}const $r=typeof document<"u"?document.getElementById("perf-toggle-btn"):null,Yr=typeof document<"u"?document.getElementById("ads-toggle-btn"):null;let Em=null;$r&&$r.addEventListener("click",()=>{D.showPerf=!D.showPerf,$r.classList.toggle("off",!D.showPerf)});Yr&&Yr.addEventListener("click",()=>{D.showAds=!D.showAds,Yr.classList.toggle("off",!D.showAds)});function kT(){const n=!!J.testMode;n!==Em&&(Em=n,$r&&($r.classList.toggle("visible",n),$r.classList.toggle("off",!D.showPerf)),Yr&&(Yr.classList.toggle("visible",n),Yr.classList.toggle("off",!D.showAds)))}function OT(n){kT();const e=IT||J.testMode&&D.showPerf,t=Sv||J.testMode&&D.showPerf;if(!e){ai&&(ai.style.display="none"),No=0,ko=0;return}if(NT(),ai.style.display="",No++,!ko){ko=n;return}const i=n-ko;if(i<500)return;const s=Math.round(No*1e3/i),r=Math.round(i/No*10)/10,o=cn?cn.getPixelRatio():0,a=cn?`${cn.domElement.width}x${cn.domElement.height}`:"?";let l=`Build:    ${DT}
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
Textures: ${u.textures}`}ai.textContent=l,No=0,ko=n}function Mv(){const n=new vt,e=new Float32Array([0,0,-1.3,-.48,.07,.36,-.95,-.06,.42,0,0,-1.3,0,.22,.5,-.48,.07,.36,0,0,-1.3,.95,-.06,.42,.48,.07,.36,0,0,-1.3,.48,.07,.36,0,.22,.5,0,0,-1.3,-.95,-.06,.42,-.48,-.04,.36,0,0,-1.3,-.48,-.04,.36,0,-.02,.48,0,0,-1.3,.48,-.04,.36,.95,-.06,.42,0,0,-1.3,0,-.02,.48,.48,-.04,.36,-.95,-.06,.42,-.48,-.04,.36,-.48,.07,.36,-.48,.07,.36,0,-.02,.48,0,.22,.5,-.48,.07,.36,-.48,-.04,.36,0,-.02,.48,.95,-.06,.42,.48,.07,.36,.48,-.04,.36,.48,.07,.36,0,.22,.5,0,-.02,.48,.48,.07,.36,0,-.02,.48,.48,-.04,.36,0,.183,.2,0,.4,.5,0,.22,.5,.36,.16,.05,.44,.035,.1,.28,.08,.08,.36,.16,.05,.36,.2,.42,.44,.075,.42,.36,.16,.05,.44,.075,.42,.44,.035,.1,.36,.16,.05,.28,.08,.08,.28,.12,.42,.36,.16,.05,.28,.12,.42,.36,.2,.42,.36,.2,.42,.28,.12,.42,.44,.075,.42,-.36,.16,.05,-.28,.08,.08,-.44,.035,.1,-.36,.16,.05,-.44,.075,.42,-.36,.2,.42,-.36,.16,.05,-.44,.035,.1,-.44,.075,.42,-.36,.16,.05,-.28,.12,.42,-.28,.08,.08,-.36,.16,.05,-.36,.2,.42,-.28,.12,.42,-.36,.2,.42,-.44,.075,.42,-.28,.12,.42]);n.setAttribute("position",new Pt(e,3)),n.computeVertexNormals();const t=new ut({color:Ye.paper,flatShading:!0,side:$t}),i=new tt(n,t);i.name="paperBody";const s=new dv(n,18),r=new Yc({color:Ye.ink,transparent:!0,opacity:.22}),o=new sv(s,r),a=new ct;a.add(i),a.add(o);const l=new Kc(.03,20),c=new Hn({color:1712164,side:$t});for(const u of[-.36,.36]){const d=new tt(l,c);d.position.set(u,.13,.423),a.add(d)}return a}const fe=Mv();fe.position.set(0,38,0);const UT=1712164;function sf(){return Td}function So(n){return Td.find(e=>e.id===n)||Td[0]}function wv(){return So(J.equippedSkin)}function Ev(n){return!!J.ownedSkins[n]}function Qc(n){J.ownedSkins[n]=!0,Ut()}function rf(n){return So(n).teaser||!Ev(n)?!1:(J.equippedSkin=n,Tv(),Ut(),!0)}function FT(n){if(n.userData._skinRole!==void 0)return n.userData._skinRole;let e=null;const t=n.color?n.color.getHex():-1;return n.isLineBasicMaterial&&t===Ye.ink?e="ink":n.isMeshBasicMaterial&&t===UT?e="vent":n.isMeshLambertMaterial&&t===Ye.paper&&(e="paper"),n.userData._skinRole=e,e}function Av(n,e){!e||e.teaser||n.traverse(t=>{if(!t.material)return;const i=Array.isArray(t.material)?t.material:[t.material];for(const s of i){const r=FT(s);r==="paper"&&e.paper!=null?(s.color.setHex(e.paper),s.emissive&&(s.emissive.setHex(e.emissive!=null?e.emissive:0),"emissiveIntensity"in s&&(s.emissiveIntensity=e.emissiveIntensity!=null?e.emissiveIntensity:1))):r==="ink"&&e.ink!=null?s.color.setHex(e.ink):r==="vent"&&e.vent!=null&&s.color.setHex(e.vent)}})}function Tv(){Av(fe,wv())}const zT="modulepreload",BT=function(n){return"/teide-game/"+n},Am={},Rv=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=Promise.allSettled(t.map(l=>{if(l=BT(l),l in Am)return;Am[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":zT,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((h,m)=>{d.addEventListener("load",h),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */var uo;(function(n){n.Unimplemented="UNIMPLEMENTED",n.Unavailable="UNAVAILABLE"})(uo||(uo={}));class ed extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}}const HT=n=>{var e,t;return n?.androidBridge?"android":!((t=(e=n?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},GT=n=>{const e=n.CapacitorCustomPlatform||null,t=n.Capacitor||{},i=t.Plugins=t.Plugins||{},s=()=>e!==null?e.name:HT(n),r=()=>s()!=="web",o=d=>{const h=c.get(d);return!!(h?.platforms.has(s())||a(d))},a=d=>{var h;return(h=t.PluginHeaders)===null||h===void 0?void 0:h.find(m=>m.name===d)},l=d=>n.console.error(d),c=new Map,u=(d,h={})=>{const m=c.get(d);if(m)return console.warn(`Capacitor plugin "${d}" already registered. Cannot register plugins twice.`),m.proxy;const g=s(),y=a(d);let p;const f=async()=>(!p&&g in h?p=typeof h[g]=="function"?p=await h[g]():p=h[g]:e!==null&&!p&&"web"in h&&(p=typeof h.web=="function"?p=await h.web():p=h.web),p),_=(k,b)=>{var w,G;if(y){const W=y?.methods.find(te=>b===te.name);if(W)return W.rtype==="promise"?te=>t.nativePromise(d,b.toString(),te):(te,U)=>t.nativeCallback(d,b.toString(),te,U);if(k)return(w=k[b])===null||w===void 0?void 0:w.bind(k)}else{if(k)return(G=k[b])===null||G===void 0?void 0:G.bind(k);throw new ed(`"${d}" plugin is not implemented on ${g}`,uo.Unimplemented)}},v=k=>{let b;const w=(...G)=>{const W=f().then(te=>{const U=_(te,k);if(U){const q=U(...G);return b=q?.remove,q}else throw new ed(`"${d}.${k}()" is not implemented on ${g}`,uo.Unimplemented)});return k==="addListener"&&(W.remove=async()=>b()),W};return w.toString=()=>`${k.toString()}() { [capacitor code] }`,Object.defineProperty(w,"name",{value:k,writable:!1,configurable:!1}),w},S=v("addListener"),R=v("removeListener"),E=(k,b)=>{const w=S({eventName:k},b),G=async()=>{const te=await w;R({eventName:k,callbackId:te},b)},W=new Promise(te=>w.then(()=>te({remove:G})));return W.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await G()},W},A=new Proxy({},{get(k,b){switch(b){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return y?E:S;case"removeListener":return R;default:return v(b)}}});return i[d]=A,c.set(d,{name:d,proxy:A,platforms:new Set([...Object.keys(h),...y?[g]:[]])}),A};return t.convertFileSrc||(t.convertFileSrc=d=>d),t.getPlatform=s,t.handleError=l,t.isNativePlatform=r,t.isPluginAvailable=o,t.registerPlugin=u,t.Exception=ed,t.DEBUG=!!t.DEBUG,t.isLoggingEnabled=!!t.isLoggingEnabled,t},VT=n=>n.Capacitor=GT(n),ni=VT(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),of=ni.registerPlugin;class af{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,t){let i=!1;this.listeners[e]||(this.listeners[e]=[],i=!0),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r),i&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,t);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,t,i){const s=this.listeners[e];if(!s){if(i){let r=this.retainedEventArguments[e];r||(r=[]),r.push(t),this.retainedEventArguments[e]=r}return}s.forEach(r=>r(t))}hasListeners(e){var t;return!!(!((t=this.listeners[e])===null||t===void 0)&&t.length)}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new ni.Exception(e,uo.Unimplemented)}unavailable(e="not available"){return new ni.Exception(e,uo.Unavailable)}async removeListener(e,t){const i=this.listeners[e];if(!i)return;const s=i.indexOf(t);this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const t=this.retainedEventArguments[e];t&&(delete this.retainedEventArguments[e],t.forEach(i=>{this.notifyListeners(e,i)}))}}const Tm=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Rm=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class WT extends af{async getCookies(){const e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[s,r]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=Rm(s).trim(),r=Rm(r).trim(),t[s]=r}),t}async setCookie(e){try{const t=Tm(e.key),i=Tm(e.value),s=e.expires?`; expires=${e.expires.replace("expires=","")}`:"",r=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${s}; path=${r}; ${o};`}catch(t){return Promise.reject(t)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}of("CapacitorCookies",{web:()=>new WT});const qT=async n=>new Promise((e,t)=>{const i=new FileReader;i.onload=()=>{const s=i.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},i.onerror=s=>t(s),i.readAsDataURL(n)}),XT=(n={})=>{const e=Object.keys(n);return Object.keys(n).map(s=>s.toLocaleLowerCase()).reduce((s,r,o)=>(s[r]=n[e[o]],s),{})},jT=(n,e=!0)=>n?Object.entries(n).reduce((i,s)=>{const[r,o]=s;let a,l;return Array.isArray(o)?(l="",o.forEach(c=>{a=e?encodeURIComponent(c):c,l+=`${r}=${a}&`}),l.slice(0,-1)):(a=e?encodeURIComponent(o):o,l=`${r}=${a}`),`${i}&${l}`},"").substr(1):null,$T=(n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),s=XT(n.headers)["content-type"]||"";if(typeof n.data=="string")t.body=n.data;else if(s.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[o,a]of Object.entries(n.data||{}))r.set(o,a);t.body=r.toString()}else if(s.includes("multipart/form-data")||n.data instanceof FormData){const r=new FormData;if(n.data instanceof FormData)n.data.forEach((a,l)=>{r.append(l,a)});else for(const a of Object.keys(n.data))r.append(a,n.data[a]);t.body=r;const o=new Headers(t.headers);o.delete("content-type"),t.headers=o}else(s.includes("application/json")||typeof n.data=="object")&&(t.body=JSON.stringify(n.data));return t};class YT extends af{async request(e){const t=$T(e,e.webFetchExtra),i=jT(e.params,e.shouldEncodeUrlParams),s=i?`${e.url}?${i}`:e.url,r=await fetch(s,t),o=r.headers.get("content-type")||"";let{responseType:a="text"}=r.ok?e:{};o.includes("application/json")&&(a="json");let l,c;switch(a){case"arraybuffer":case"blob":c=await r.blob(),l=await qT(c);break;case"json":l=await r.json();break;case"document":case"text":default:l=await r.text()}const u={};return r.headers.forEach((d,h)=>{u[h]=d}),{data:l,headers:u,status:r.status,url:r.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}of("CapacitorHttp",{web:()=>new YT});var Cm;(function(n){n.Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT"})(Cm||(Cm={}));var Lm;(function(n){n.StatusBar="StatusBar",n.NavigationBar="NavigationBar"})(Lm||(Lm={}));class KT extends af{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}of("SystemBars",{web:()=>new KT});const Pm={android:"goog_dseUNtdcnlZGNWfAOgAdDoYIyki",ios:"appl_adobEJBJMEfqpVfgpItUNUsfWVS"},td="default",jd=new URLSearchParams(window.location.search).has("mockiap"),nd=()=>!ni.isNativePlatform()||jd,Cv=n=>Ch.find(e=>e.id===n),lf=n=>Ch.find(e=>e.productId===n);function Lv(n){const e=lf(n);return e?Math.floor(e.diamonds*(1+e.bonusPct/100)):0}function Pv(n){const e=Lv(n.productId);return J.obsidian=(J.obsidian|0)+e,J.obsidianLifetimeGranted=(J.obsidianLifetimeGranted|0)+e,Ut(),e}function Im(n){let e=0;for(const i of n?.nonSubscriptionTransactions||[])e+=Lv(i.productIdentifier);const t=Math.max(0,e-(J.obsidianLifetimeGranted|0));return t>0&&(J.obsidian=(J.obsidian|0)+t,J.obsidianLifetimeGranted=e,Ut()),t}function id(n){!!n?.entitlements?.active?.[da.entitlement]&&!J.adsRemoveOwned&&(J.adsRemoveOwned=!0,Ut())}const Iv={name:"mock",async init(){},localizedPrice(n){const e=lf(n);return e?e.priceFallback:""},async purchasePack(n){if(!nd())return{success:!1};const e=Cv(n);return e?{success:!0,diamonds:Pv(e)}:{success:!1}},async purchaseSkin(n){return nd()?(Qc(n),{success:!0}):{success:!1}},async purchaseRemoveAds(){return nd()?(J.adsRemoveOwned=!0,Ut(),{success:!0}):{success:!1}},async restore(){return{success:!0,restored:[]}},hasEntitlement(n){return!!J.ownedSkins[n]}},Dm={name:"revenuecat",_Purchases:null,_prices:{},_packages:{},async init(n){const{Purchases:e,LOG_LEVEL:t}=await Rv(async()=>{const{Purchases:i,LOG_LEVEL:s}=await import("./index-BEVdJUXT.js");return{Purchases:i,LOG_LEVEL:s}},[]);this._Purchases=e,await e.configure({apiKey:n});try{await e.setLogLevel({level:t.WARN})}catch{}await this._loadOfferings();try{const{customerInfo:i}=await e.getCustomerInfo();Im(i),id(i)}catch(i){console.warn("[iap] init reconcile failed",i)}},async _loadOfferings(){try{const n=await this._Purchases.getOfferings(),e=n?.all?.[td]||n?.current;for(const t of e?.availablePackages||[]){const i=t?.product?.identifier;i&&(this._prices[i]=t.product.priceString||"",this._packages[i]=t)}}catch(n){console.warn("[iap] getOfferings failed",n)}},localizedPrice(n){return this._prices[n]||(lf(n)?.priceFallback??"")},async purchasePack(n){const e=Cv(n);if(!e)return{success:!1};const t=this._packages[e.productId];if(!t)return console.warn(`[iap] no RevenueCat package for ${e.productId} — is it in the "${td}" offering?`),{success:!1};try{return await this._Purchases.purchasePackage({aPackage:t}),{success:!0,diamonds:Pv(e)}}catch(i){return i?.userCancelled||i?.code==="PURCHASE_CANCELLED"?{success:!1,cancelled:!0}:(console.warn("[iap] purchasePack failed",i),{success:!1})}},async purchaseSkin(n){try{return Qc(n),{success:!0}}catch(e){return e?.userCancelled?{success:!1,cancelled:!0}:(console.warn("[iap] purchaseSkin failed",e),{success:!1})}},async purchaseRemoveAds(){const n=this._packages[da.productId];if(!n)return console.warn(`[iap] no RevenueCat package for ${da.productId} — is it in the "${td}" offering?`),{success:!1};try{const{customerInfo:e}=await this._Purchases.purchasePackage({aPackage:n});return id(e),{success:!0}}catch(e){return e?.userCancelled||e?.code==="PURCHASE_CANCELLED"?{success:!1,cancelled:!0}:(console.warn("[iap] purchaseRemoveAds failed",e),{success:!1})}},async restore(){try{const{customerInfo:n}=await this._Purchases.restorePurchases(),e=Im(n);return id(n),{success:!0,restored:e>0?["obsidian"]:[],regranted:e}}catch(n){return console.warn("[iap] restore failed",n),{success:!1}}},hasEntitlement(n){return!!J.ownedSkins[n]}};let si=Iv;const Js={async init(){if(jd||!ni.isNativePlatform())return;const n=ni.getPlatform()==="ios"?Pm.ios:Pm.android;try{await Dm.init(n),si=Dm}catch(e){console.warn("[iap] RevenueCat init failed — using mock",e),si=Iv}},isAvailable(){return ni.isNativePlatform()||jd},localizedPrice(n){return si.localizedPrice(n)},purchasePack(n){return si.purchasePack(n)},purchaseSkin(n){return si.purchaseSkin(n)},purchaseRemoveAds(){return si.purchaseRemoveAds()},removeAdsPrice(){return si.localizedPrice(da.productId)||da.priceFallback},restore(){return si.restore()},hasEntitlement(n){return si.hasEntitlement(n)},get providerName(){return si.name}},ZT=new URLSearchParams(window.location.search).has("mockads"),zl=ni.isNativePlatform()||ZT;function cf(){return ni.getPlatform()==="ios"?"ios":"android"}function uf(){return!!An.useTestAds?.[cf()]}function Nm(){const n=cf();return uf()?An.test[n].interstitial:An[n].interstitial}function km(){const n=cf();return uf()?An.test[n].rewarded:An[n].rewarded}function Om(){try{window.focus()}catch{}try{window.dispatchEvent(new Event("resize"))}catch{}}function Um(){return new Date().toISOString().slice(0,10)}function Dv(){J.rewardedDay!==Um()&&(J.rewardedDay=Um(),J.rewardedToday=0)}function Fm(){return Dv(),Math.max(0,An.rewardedDailyCap-(J.rewardedToday|0))}let sd=0,zm=-1/0;const Nv={name:"mock",async init(){},async preloadInterstitial(){},async preloadRewarded(){},async showInterstitial(){console.log("[ads] mock interstitial")},async showRewarded(){return console.log("[ads] mock rewarded → granted"),!0}},$d={name:"admob",_AdMob:null,_mod:null,_interReady:!1,_rewardReady:!1,async init(){this._mod=await Rv(()=>import("./index-CAmtWF8E.js"),[]),this._AdMob=this._mod.AdMob,await this._AdMob.initialize({initializeForTesting:uf()});try{const n=await this._AdMob.requestConsentInfo();n?.isConsentFormAvailable&&n?.status==="REQUIRED"&&await this._AdMob.showConsentForm()}catch(n){console.warn("[ads] consent failed",n)}if(ni.getPlatform()==="ios")try{await this._AdMob.requestTrackingAuthorization()}catch{}},async preloadInterstitial(){try{await this._AdMob.prepareInterstitial({adId:Nm()}),this._interReady=!0}catch(n){this._interReady=!1,console.warn("[ads] preload interstitial failed",n)}},async preloadRewarded(){try{await this._AdMob.prepareRewardVideoAd({adId:km()}),this._rewardReady=!0}catch(n){this._rewardReady=!1,console.warn("[ads] preload rewarded failed",n)}},_present(n,e,t){return new Promise(i=>{let s=!1,r=null,o=null;const a=()=>{if(!s){s=!0;try{r?.remove()}catch{}try{o?.remove()}catch{}i()}};Promise.all([this._AdMob.addListener(e,a).then(l=>{r=l}),this._AdMob.addListener(t,a).then(l=>{o=l})]).then(()=>n().catch(a))})},async showInterstitial(){try{this._interReady||await this._AdMob.prepareInterstitial({adId:Nm()}),this._interReady=!1,await this._present(()=>this._AdMob.showInterstitial(),this._mod.InterstitialAdPluginEvents.Dismissed,this._mod.InterstitialAdPluginEvents.FailedToShow)}catch(n){console.warn("[ads] interstitial failed",n)}Om(),this.preloadInterstitial()},async showRewarded(){let n=!1,e=null;try{e=await this._AdMob.addListener(this._mod.RewardAdPluginEvents.Rewarded,()=>{n=!0}),this._rewardReady||await this._AdMob.prepareRewardVideoAd({adId:km()}),this._rewardReady=!1,await this._present(()=>this._AdMob.showRewardVideoAd(),this._mod.RewardAdPluginEvents.Dismissed,this._mod.RewardAdPluginEvents.FailedToShow)}catch(t){console.warn("[ads] rewarded failed",t)}finally{try{e?.remove()}catch{}}return Om(),this.preloadRewarded(),n}};let Wi=Nv,Rr=null;function xl(){return Rr||(!zl||!ni.isNativePlatform()?(Rr=Promise.resolve(),Rr):(Rr=$d.init().then(()=>{Wi=$d}).catch(n=>{console.warn("[ads] AdMob init failed — using mock",n),Wi=Nv}),Rr))}const Qs={isAvailable(){return zl},async warmup(){await xl(),Wi===$d&&(Wi.preloadInterstitial(),Wi.preloadRewarded())},async onCrashRestart(){if(sd++,!zl)return;if(J.testMode){D.showAds&&(await xl(),await Wi.showInterstitial());return}if(J.adsRemoveOwned||sd<=An.crashGraceCount||sd%An.interstitialEveryNCrashes!==0)return;const n=performance.now();n-zm<An.interstitialMinGapSec*1e3||(zm=n,await xl(),await Wi.showInterstitial())},rewardedRemaining:Fm,async watchRewarded(){return zl?Fm()<=0?{success:!1,capped:!0}:(await xl(),await Wi.showRewarded()?(Dv(),J.rewardedToday=(J.rewardedToday|0)+1,J.obsidian=(J.obsidian|0)+An.rewardedDiamonds,Ut(),{success:!0,diamonds:An.rewardedDiamonds}):{success:!1}):{success:!1}}},JT={sub:"Building the world…",hint:"Higher quality settings may take a few seconds."},QT={pause:"Pause",map:"Map",close:"Close",landings:"Landings",brake:"Brake",oneShot:"One-Shot",boost:"Boost",sell:"Sell for {cost} points"},e1={lift:"Lift",soon:"soon",hintNormal:"↑ ↓ Pitch · ← → Bank · Space Brake · Shift Boost · F One-Shot",hintNormalTouch:"Steer with joystick · Right Boost / Brake / One-Shot",hintPrelaunch:"Pull down to launch",hintPrelaunchGyro:"Tap boost to take off",hintTakeoff:"Takeoff roll…",landingToast:"Touchdown! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"New island discovered!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Land at the marked airport to refuel your boosters and earn bonus points.",airportUnlockTitle:"Airport unlocked!",airportUnlockBody:"Spawn at {name} any time from the Levels menu.",airportUnlocked:"{name} unlocked",wrongApproach:"Wrong approach side — line up from the other end."},t1={names:["No Booster","Booster Level 1","Booster Level 2","Booster Level 3","Booster Level MAX"],unlock:["","Booster Level 1 unlocked","Booster Level 2 unlocked — La Gomera in range","Booster Level 3 unlocked — Gran Canaria in range","Booster Level MAX unlocked — Fuerteventura / Lanzarote"]},n1={start:"Start",startSubDefault:"Last checkpoint",levels:"Levels",levelsSub:"Choose airport",hangar:"Hangar",hangarSub:"Upgrades & status",shop:"Shop",shopSub:"Obsidian & designs",settings:"Settings",settingsSub:"Graphics & performance",imprint:"Imprint",licenses:"Licences"},i1={checkpoint:"Checkpoint · {id}",firstFlight:"First flight · TFN"},s1={title:"Pause",resume:"Resume flight",home:"Main menu"},r1={title:"Crash landing",restart:"Take Off Again",hint:"Spacebar",hangar:"Hangar",shop:"Shop"},o1={title:"Hangar",points:"Points",locations:"Locations",obsidian:"Obsidian",highscore:"High score",plane:"Plane",dragToRotate:"Drag to rotate",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tap an upgrade to see its description.",buy:"Buy · {cost}",buyObsidian:"Obsidian · {cost}",max:"Max",level:"Level {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Your boost level rises automatically once you've discovered enough locations. Fly through new POIs to improve your One-Shot boost.",equip:"Equip",equipped:"Equipped",comingSoon:"Coming soon",getDiamonds:"Get Obsidian →",skinPrev:"Previous design",skinNext:"Next design"},a1={title:"Pay with Obsidian?",text:"This upgrade costs <strong></strong>.",warn:"Obsidian is bought with real money. Only tap <em>Confirm</em> if you really want to spend Obsidian.",cancel:"Cancel",confirm:"Confirm",spendSkin:"You're spending {obsidian} on the {label} design."},l1={default:{name:"Paper",desc:"The classic fold."},charcoal:{name:"Charcoal",desc:"A matte slate livery — earned by explorers."},gold:{name:"Gold",desc:"A gleaming premium livery."},comingSoon:{name:"More soon",desc:"New designs are on the way."}},c1={intro:"Obsidian unlocks designs in the hangar and instant upgrades.",bonus:"+{pct}%",badgePopular:"Popular",badgeValue:"Best value",granted:"+ {amount} Obsidian added",restore:"Restore purchases",restored:"Purchases restored",viewSkins:"View designs →",disclosure:"Obsidian and designs are stored on this device.",watchAd:"Watch a video",adsLeftToday:"{count}/{cap} today",adsCapReached:"Come back tomorrow",removeAds:"Remove ads",removeAdsOwned:"Ads removed"},u1={title:"Settings",quality:"Graphics quality",presetLow:"Low",presetStandard:"Standard",presetHigh:"High",presetUltra:"Ultra",advanced:"Advanced",meshRes:"Mesh resolution",meshHint:"Segments · 100–3000",vegSamples:"Vegetation samples",vegHint:"10,000–10,000,000",restartNote:"Changes require a restart. Applying will reload the page.",cancel:"Cancel",apply:"Apply & reload",language:"Language",controls:"Controls",invertPitch:"Inverted flight controls",invertPitchHint:"Pull down to climb",gyroControl:"Tilt steering",gyroControlHint:"Tilt your device to steer",gyroSensitivity:"Sensitivity",gyroRecalibrate:"Recalibrate",tutorial:"Tutorial",replayTutorial:"Replay tutorial",dangerZone:"Danger zone",dangerDesc:"Resets all progress: points, locations, upgrades, discovered POIs, airports and checkpoint. Graphics settings are kept.",resetSave:"Reset progress"},d1={title:"Really delete your save?",text:"All points, locations, upgrades and discovered POIs will be lost. You'll start at <strong>Tenerife Nord</strong> with the basic plane.",warn:"This action cannot be undone.",cancel:"Cancel",confirm:"Reset"},h1={eyebrow:"Island",archTitle:"Canary Islands",legendSpawn:"Spawn",legendDiscovered:"Discovered",legendLocked:"Unknown",hintDefault:"Tap a spawn point to start there.",hintNone:"Land at an airport to unlock it as a spawn point.",hintProgress:"{landed} / {total} airports unlocked. Tap a spawn point.",hintAll:"All airports unlocked. Tap a spawn point.",markerLocked:"???",tipStart:"Start at {id}",tipNotLanded:"{id} — not landed yet",tipUndiscovered:"Not discovered yet"},f1={title:"Imprint",provider:"Provider",contact:"Contact",privacy:"Privacy policy",privacyLink:"Open privacy policy",linksLiability:"Liability for links",linksText:"Our offering contains links to external third-party websites whose content we cannot influence. We therefore cannot accept any liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content.",footer:"Swiss Innovation Studios · 2026"},p1={title:"Open-source licences",intro:"Teide includes the following open-source components. The full licence texts are below and bundled with the app.",footer:"Swiss Innovation Studios · 2026"},m1={title:"Please rotate your device",sub:"Teide is played in landscape mode"},g1={title:"Test mode",prompt:"Enter PIN",wrong:"Wrong PIN",cancel:"Cancel",confirm:"OK"},v1={drag:{label:"Aerodynamics",desc:"Smoother folds — less drag, longer glide."},maxSpeed:{label:"Top speed",desc:"Raises the maximum cruise speed."},speedFromPitch:{label:"Dive",desc:"More acceleration in a dive — altitude becomes speed."},stallSpeed:{label:"Stability",desc:"Lower stall threshold — forgives slow flying."},takeoffSpeed:{label:"Runway",desc:"Faster take-off acceleration — less roll distance."},brake:{label:"Airbrake",desc:"Unlocks the brake flaps (Space in flight)."},greyBoost:{label:"Reserve boost",desc:"Stronger emergency thrust: longer burn, more push, faster refill."}},y1={pickLanguage:"Choose your language",welcome:"Welcome to the Canaries",story:["You've folded the perfect paper plane and launched it from the slopes of Mount Teide. Now ride the thermals and glide out across the Canary Islands.","Catch rising air to stay aloft, dive through points of interest to collect locations, and touch down on runways to unlock them as new starting points.","Landing is how you keep going: each touchdown refuels your booster for the next hop. Line up with a runway and set down gently.","Spend your points in the hangar to upgrade your plane and booster. Glide far enough and new islands come within reach — from La Gomera all the way to Lanzarote. How far can you go?"],next:"Next",begin:"Let's go"},x1={eyebrow:"Tutorial",skip:"Skip",retry:"Try again!",done:"You're ready — off you go!",launch:"Pull down to take off and start gliding",navLeft:"Now bank left",navRight:"Now bank right",navUp:"Now climb",navDown:"Now descend",rings:"Fly through both rings ({collected}/{total})",boost:"Hold boost for a burst of speed",thermal:"Steer into the updraft to gain height",ringHigh:"Use your new height — catch the high ring",ringLow:"Now dive back down — through the low ring",invertHint:"Climbing feels backwards? Flip it.",steerHint:"Steer here",endTitle:"You're ready to glide!",endBody:"Explore the Canary Islands and dive through rings to collect locations. Gather enough and your One-Shot boost reaches the next island. How far can you glide?",endGo:"Let's go"},_1={loading:JT,a11y:QT,hud:e1,booster:t1,menu:n1,welcome:i1,pause:s1,crash:r1,hangar:o1,obsidian:a1,skins:l1,shop:c1,settings:u1,reset:d1,levels:h1,imprint:f1,licenses:p1,portrait:m1,testpin:g1,upgrades:v1,onboarding:y1,tutorial:x1},b1={sub:"Welt wird gebaut…",hint:"Bei höheren Qualitätseinstellungen kann das einige Sekunden dauern."},S1={pause:"Pause",map:"Karte",close:"Schliessen",landings:"Landungen",brake:"Bremse",oneShot:"One-Shot",boost:"Boost",sell:"Verkaufen für {cost} Punkte"},M1={lift:"Lift",soon:"bald",hintNormal:"↑ ↓ Pitch · ← → Bank · Space Bremse · Shift Boost · F One-Shot",hintNormalTouch:"Joystick steuern · Rechts Boost / Bremse / One-Shot",hintPrelaunch:"Zum Starten nach unten ziehen",hintPrelaunchGyro:"Boost antippen zum Abheben",hintTakeoff:"Startrollen…",landingToast:"Geschafft! · {id}",landingBonus:"+ {bonus} Pkt",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Neue Insel entdeckt!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Lande am markierten Flughafen, um deine Booster aufzufüllen und Extra-Punkte zu sammeln.",airportUnlockTitle:"Flughafen freigeschaltet!",airportUnlockBody:"Starte jederzeit über das Levels-Menü bei {name}.",airportUnlocked:"{name} freigeschaltet",wrongApproach:"Falsche Anflugseite — flieg von der anderen Seite an."},w1={names:["Kein Booster","Booster Stufe 1","Booster Stufe 2","Booster Stufe 3","Booster Stufe MAX"],unlock:["","Booster Stufe 1 freigeschaltet","Booster Stufe 2 freigeschaltet — La Gomera in Reichweite","Booster Stufe 3 freigeschaltet — Gran Canaria in Reichweite","Booster Stufe MAX freigeschaltet — Fuerteventura / Lanzarote"]},E1={start:"Start",startSubDefault:"Letzter Checkpoint",levels:"Levels",levelsSub:"Flughäfen auswählen",hangar:"Hangar",hangarSub:"Upgrades & Status",shop:"Shop",shopSub:"Obsidian & Designs",settings:"Einstellungen",settingsSub:"Grafik & Performance",imprint:"Impressum",licenses:"Lizenzen"},A1={checkpoint:"Checkpoint · {id}",firstFlight:"Erstflug · TFN"},T1={title:"Pause",resume:"Flug fortsetzen",home:"Hauptmenü"},R1={title:"Bruchlandung",restart:"Erneut abheben",hint:"Leertaste",hangar:"Hangar",shop:"Shop"},C1={title:"Hangar",points:"Punkte",locations:"Orte",obsidian:"Obsidian",highscore:"Highscore",plane:"Flugzeug",dragToRotate:"Ziehen zum Drehen",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tippe ein Upgrade an, um die Beschreibung zu sehen.",buy:"Kaufen · {cost}",buyObsidian:"Obsidian · {cost}",max:"Max",level:"Stufe {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Die Boost-Stufe steigt automatisch, sobald genug Orte entdeckt sind. Flieg neue POIs an, um deinen One-Shot-Boost zu verbessern.",equip:"Anlegen",equipped:"Angelegt",comingSoon:"Bald verfügbar",getDiamonds:"Obsidian holen →",skinPrev:"Vorheriges Design",skinNext:"Nächstes Design"},L1={title:"Mit Obsidian bezahlen?",text:"Dieses Upgrade kostet <strong></strong>.",warn:"Obsidian wird mit echtem Geld gekauft. Klick auf <em>Bestätigen</em> nur, wenn du wirklich Obsidian ausgeben willst.",cancel:"Abbrechen",confirm:"Bestätigen",spendSkin:"Du gibst {obsidian} für das Design {label} aus."},P1={default:{name:"Papier",desc:"Die klassische Faltung."},charcoal:{name:"Anthrazit",desc:"Eine matte Schiefer-Lackierung — von Entdeckern verdient."},gold:{name:"Gold",desc:"Eine glänzende Premium-Lackierung."},comingSoon:{name:"Bald mehr",desc:"Neue Designs sind unterwegs."}},I1={intro:"Obsidian schaltet Designs im Hangar und Sofort-Upgrades frei.",bonus:"+{pct}%",badgePopular:"Beliebt",badgeValue:"Bester Wert",granted:"+ {amount} Obsidian erhalten",restore:"Käufe wiederherstellen",restored:"Käufe wiederhergestellt",viewSkins:"Designs ansehen →",disclosure:"Obsidian und Designs werden auf diesem Gerät gespeichert.",watchAd:"Video ansehen",adsLeftToday:"{count}/{cap} heute",adsCapReached:"Komm morgen wieder",removeAds:"Werbung entfernen",removeAdsOwned:"Werbung entfernt"},D1={title:"Einstellungen",quality:"Grafikqualität",presetLow:"Niedrig",presetStandard:"Standard",presetHigh:"Hoch",presetUltra:"Ultra",advanced:"Erweitert",meshRes:"Mesh-Auflösung",meshHint:"Segments · 100–3000",vegSamples:"Vegetations-Samples",vegHint:"10'000–10'000'000",restartNote:"Änderungen erfordern einen Neustart. Beim Anwenden wird die Seite neu geladen.",cancel:"Abbrechen",apply:"Anwenden & Neu laden",language:"Sprache",controls:"Steuerung",invertPitch:"Umgekehrte Flugsteuerung",invertPitchHint:"Nach unten ziehen zum Steigen",gyroControl:"Neigungssteuerung",gyroControlHint:"Gerät neigen zum Steuern",gyroSensitivity:"Empfindlichkeit",gyroRecalibrate:"Neu kalibrieren",tutorial:"Tutorial",replayTutorial:"Tutorial wiederholen",dangerZone:"Danger Zone",dangerDesc:"Setzt den kompletten Spielfortschritt zurück: Punkte, Orte, Upgrades, entdeckte POIs, Flughäfen und Checkpoint. Grafik-Einstellungen bleiben erhalten.",resetSave:"Spielstand zurücksetzen"},N1={title:"Spielstand wirklich löschen?",text:"Alle Punkte, Orte, Upgrades und entdeckten POIs gehen verloren. Du startest auf <strong>Tenerife Nord</strong> mit dem Basis-Flugzeug.",warn:"Diese Aktion kann nicht rückgängig gemacht werden.",cancel:"Abbrechen",confirm:"Zurücksetzen"},k1={eyebrow:"Insel",archTitle:"Kanarische Inseln",legendSpawn:"Spawn",legendDiscovered:"Entdeckt",legendLocked:"Unbekannt",hintDefault:"Tippe einen Spawn an, um dort zu starten.",hintNone:"Lande einen Flughafen, um ihn als Spawnpunkt freizuschalten.",hintProgress:"{landed} / {total} Flughäfen freigeschaltet. Tippe einen Spawn an.",hintAll:"Alle Flughäfen freigeschaltet. Tippe einen Spawn an.",markerLocked:"???",tipStart:"Bei {id} starten",tipNotLanded:"{id} — noch nicht gelandet",tipUndiscovered:"Noch nicht entdeckt"},O1={title:"Impressum",provider:"Anbieter",contact:"Kontakt",privacy:"Datenschutz",privacyLink:"Datenschutzerklärung öffnen",linksLiability:"Haftung für Links",linksText:"Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.",footer:"Swiss Innovation Studios · 2026"},U1={title:"Open-Source-Lizenzen",intro:"Teide enthält die folgenden quelloffenen Komponenten. Die vollständigen Lizenztexte sind unten und im App-Paket beigelegt.",footer:"Swiss Innovation Studios · 2026"},F1={title:"Bitte Gerät drehen",sub:"Teide wird im Landscape-Modus gespielt"},z1={title:"Testmodus",prompt:"PIN eingeben",wrong:"Falsche PIN",cancel:"Abbrechen",confirm:"OK"},B1={drag:{label:"Aerodynamik",desc:"Glättere Faltung — weniger Luftwiderstand, längeres Gleiten."},maxSpeed:{label:"Spitzentempo",desc:"Erhöht die maximale Fluggeschwindigkeit im Cruise."},speedFromPitch:{label:"Sturzflug",desc:"Mehr Beschleunigung im Sturzflug — Höhe wird zu Tempo."},stallSpeed:{label:"Stabilität",desc:"Tiefere Strömungsabriss-Schwelle — verzeiht langsames Fliegen."},takeoffSpeed:{label:"Startbahn",desc:"Schnellere Beschleunigung beim Start — weniger Roll-Strecke."},brake:{label:"Luftbremse",desc:"Schaltet die Bremsklappen frei (Leertaste im Flug)."},greyBoost:{label:"Reserve-Boost",desc:"Stärkerer Notschub: längere Brennzeit, mehr Schub, schnellerer Refill."}},H1={pickLanguage:"Sprache wählen",welcome:"Willkommen auf den Kanaren",story:["Du hast den perfekten Papierflieger gefaltet und ihn von den Hängen des Teide gestartet. Reite jetzt die Thermik und gleite hinaus über die Kanarischen Inseln.","Fang Aufwinde ein, um oben zu bleiben, flieg durch Points of Interest, um Orte zu sammeln, und lande auf Pisten, um sie als neue Startpunkte freizuschalten.","Landen heißt weiterkommen: Jede Landung füllt deinen Booster für den nächsten Sprung wieder auf. Richte dich auf eine Bahn aus und setze sanft auf.","Gib deine Punkte im Hangar aus, um Flugzeug und Booster zu verbessern. Gleitest du weit genug, kommen neue Inseln in Reichweite — von La Gomera bis Lanzarote. Wie weit kommst du?"],next:"Weiter",begin:"Los geht's"},G1={eyebrow:"Tutorial",skip:"Überspringen",retry:"Nochmal!",done:"Geschafft — los geht's!",launch:"Nach unten ziehen zum Abheben und Gleiten",navLeft:"Jetzt nach links",navRight:"Jetzt nach rechts",navUp:"Jetzt steigen",navDown:"Jetzt sinken",rings:"Flieg durch beide Ringe ({collected}/{total})",boost:"Halte Boost für einen Schub",thermal:"Steuere in den Aufwind, um Höhe zu gewinnen",ringHigh:"Nutz deine Höhe — schnapp dir den hohen Ring",ringLow:"Jetzt wieder runter — durch den tiefen Ring",invertHint:"Steigen falsch herum? Hier umstellen.",steerHint:"Hier steuern",endTitle:"Bereit zum Gleiten!",endBody:"Erkunde die Kanaren und flieg durch Ringe, um Orte zu sammeln. Sammle genug, und dein One-Shot-Boost bringt dich zur nächsten Insel. Wie weit gleitest du?",endGo:"Los geht's"},V1={loading:b1,a11y:S1,hud:M1,booster:w1,menu:E1,welcome:A1,pause:T1,crash:R1,hangar:C1,obsidian:L1,skins:P1,shop:I1,settings:D1,reset:N1,levels:k1,imprint:O1,licenses:U1,portrait:F1,testpin:z1,upgrades:B1,onboarding:H1,tutorial:G1},W1={sub:"Construyendo el mundo…",hint:"Con ajustes de calidad altos puede tardar unos segundos."},q1={pause:"Pausa",map:"Mapa",close:"Cerrar",landings:"Aterrizajes",brake:"Freno",oneShot:"One-Shot",boost:"Boost",sell:"Vender por {cost} puntos"},X1={lift:"Ascenso",soon:"pronto",hintNormal:"↑ ↓ Cabeceo · ← → Alabeo · Espacio Freno · Shift Boost · F One-Shot",hintNormalTouch:"Controla con el joystick · Derecha Boost / Freno / One-Shot",hintPrelaunch:"Tira hacia abajo para despegar",hintPrelaunchGyro:"Toca boost para despegar",hintTakeoff:"Carrera de despegue…",landingToast:"¡Aterrizaje! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"¡Nueva isla descubierta!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Aterriza en el aeropuerto marcado para recargar tus propulsores y ganar puntos extra.",airportUnlockTitle:"¡Aeropuerto desbloqueado!",airportUnlockBody:"Aparece en {name} cuando quieras desde el menú Niveles.",airportUnlocked:"{name} desbloqueado",wrongApproach:"Lado de aproximación incorrecto: alinéate desde el otro extremo."},j1={names:["Sin Booster","Booster Nivel 1","Booster Nivel 2","Booster Nivel 3","Booster Nivel MÁX"],unlock:["","Booster Nivel 1 desbloqueado","Booster Nivel 2 desbloqueado — La Gomera a tu alcance","Booster Nivel 3 desbloqueado — Gran Canaria a tu alcance","Booster Nivel MÁX desbloqueado — Fuerteventura / Lanzarote"]},$1={start:"Empezar",startSubDefault:"Último checkpoint",levels:"Niveles",levelsSub:"Elegir aeropuerto",hangar:"Hangar",hangarSub:"Mejoras y estado",shop:"Tienda",shopSub:"Obsidiana y diseños",settings:"Ajustes",settingsSub:"Gráficos y rendimiento",imprint:"Aviso legal",licenses:"Licencias"},Y1={checkpoint:"Checkpoint · {id}",firstFlight:"Primer vuelo · TFN"},K1={title:"Pausa",resume:"Reanudar vuelo",home:"Menú principal"},Z1={title:"Aterrizaje forzoso",restart:"Despegar de nuevo",hint:"Barra espaciadora",hangar:"Hangar",shop:"Tienda"},J1={title:"Hangar",points:"Puntos",locations:"Lugares",obsidian:"Obsidiana",highscore:"Récord",plane:"Avión",dragToRotate:"Arrastra para girar",upgrades:"Mejoras",booster:"Booster",selectUpgrade:"Toca una mejora para ver su descripción.",buy:"Comprar · {cost}",buyObsidian:"Obsidiana · {cost}",max:"Máx",level:"Nivel {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Tu nivel de boost sube automáticamente cuando descubres suficientes lugares. Vuela a través de nuevos POIs para mejorar tu boost One-Shot.",equip:"Equipar",equipped:"Equipado",comingSoon:"Próximamente",getDiamonds:"Conseguir obsidiana →",skinPrev:"Diseño anterior",skinNext:"Diseño siguiente"},Q1={title:"¿Pagar con obsidiana?",text:"Esta mejora cuesta <strong></strong>.",warn:"La obsidiana se compra con dinero real. Pulsa <em>Confirmar</em> solo si de verdad quieres gastar obsidiana.",cancel:"Cancelar",confirm:"Confirmar",spendSkin:"Vas a gastar {obsidian} en el diseño {label}."},eR={default:{name:"Papel",desc:"El pliegue clásico."},charcoal:{name:"Carbón",desc:"Una librea de pizarra mate — para exploradores."},gold:{name:"Oro",desc:"Una reluciente librea premium."},comingSoon:{name:"Más pronto",desc:"Llegan nuevos diseños."}},tR={intro:"La obsidiana desbloquea diseños en el hangar y mejoras instantáneas.",bonus:"+{pct}%",badgePopular:"Popular",badgeValue:"Mejor valor",granted:"+ {amount} obsidiana añadida",restore:"Restaurar compras",restored:"Compras restauradas",viewSkins:"Ver diseños →",disclosure:"La obsidiana y los diseños se guardan en este dispositivo.",watchAd:"Ver un vídeo",adsLeftToday:"{count}/{cap} hoy",adsCapReached:"Vuelve mañana",removeAds:"Quitar anuncios",removeAdsOwned:"Anuncios eliminados"},nR={title:"Ajustes",quality:"Calidad gráfica",presetLow:"Baja",presetStandard:"Estándar",presetHigh:"Alta",presetUltra:"Ultra",advanced:"Avanzado",meshRes:"Resolución de malla",meshHint:"Segments · 100–3000",vegSamples:"Muestras de vegetación",vegHint:"10.000–10.000.000",restartNote:"Los cambios requieren reiniciar. Al aplicar se recargará la página.",cancel:"Cancelar",apply:"Aplicar y recargar",language:"Idioma",controls:"Controles",invertPitch:"Controles de vuelo invertidos",invertPitchHint:"Tira hacia abajo para subir",gyroControl:"Control por inclinación",gyroControlHint:"Inclina el dispositivo para dirigir",gyroSensitivity:"Sensibilidad",gyroRecalibrate:"Recalibrar",tutorial:"Tutorial",replayTutorial:"Repetir tutorial",dangerZone:"Zona de peligro",dangerDesc:"Restablece todo el progreso: puntos, lugares, mejoras, POIs descubiertos, aeropuertos y checkpoint. Los ajustes gráficos se mantienen.",resetSave:"Restablecer progreso"},iR={title:"¿Borrar de verdad tu partida?",text:"Se perderán todos los puntos, lugares, mejoras y POIs descubiertos. Empezarás en <strong>Tenerife Nord</strong> con el avión básico.",warn:"Esta acción no se puede deshacer.",cancel:"Cancelar",confirm:"Restablecer"},sR={eyebrow:"Isla",archTitle:"Islas Canarias",legendSpawn:"Inicio",legendDiscovered:"Descubierto",legendLocked:"Desconocido",hintDefault:"Toca un punto de inicio para empezar ahí.",hintNone:"Aterriza en un aeropuerto para desbloquearlo como punto de inicio.",hintProgress:"{landed} / {total} aeropuertos desbloqueados. Toca un punto de inicio.",hintAll:"Todos los aeropuertos desbloqueados. Toca un punto de inicio.",markerLocked:"???",tipStart:"Empezar en {id}",tipNotLanded:"{id} — aún sin aterrizar",tipUndiscovered:"Aún sin descubrir"},rR={title:"Aviso legal",provider:"Proveedor",contact:"Contacto",privacy:"Privacidad",privacyLink:"Abrir la política de privacidad",linksLiability:"Responsabilidad de los enlaces",linksText:"Nuestra oferta contiene enlaces a sitios web externos de terceros sobre cuyo contenido no tenemos influencia. Por ello no podemos asumir ninguna responsabilidad por estos contenidos ajenos. Del contenido de las páginas enlazadas es siempre responsable el respectivo proveedor u operador de dichas páginas.",footer:"Swiss Innovation Studios · 2026"},oR={title:"Licencias de código abierto",intro:"Teide incluye los siguientes componentes de código abierto. Los textos completos de las licencias están abajo y se incluyen en la app.",footer:"Swiss Innovation Studios · 2026"},aR={title:"Gira tu dispositivo",sub:"Teide se juega en modo horizontal"},lR={title:"Modo de prueba",prompt:"Introduce el PIN",wrong:"PIN incorrecto",cancel:"Cancelar",confirm:"OK"},cR={drag:{label:"Aerodinámica",desc:"Pliegues más limpios — menos resistencia, planeo más largo."},maxSpeed:{label:"Velocidad máx",desc:"Aumenta la velocidad máxima de crucero."},speedFromPitch:{label:"Picado",desc:"Más aceleración en picado — la altura se convierte en velocidad."},stallSpeed:{label:"Estabilidad",desc:"Umbral de pérdida más bajo — perdona el vuelo lento."},takeoffSpeed:{label:"Pista",desc:"Aceleración de despegue más rápida — menos carrera."},brake:{label:"Aerofreno",desc:"Desbloquea los alerones de freno (Espacio en vuelo)."},greyBoost:{label:"Boost de reserva",desc:"Empuje de emergencia más fuerte: más duración, más impulso, recarga más rápida."}},uR={pickLanguage:"Elige tu idioma",welcome:"Bienvenido a las Canarias",story:["Has plegado el avión de papel perfecto y lo has lanzado desde las laderas del Teide. Ahora cabalga las térmicas y planea sobre las Islas Canarias.","Aprovecha las corrientes ascendentes para mantenerte en el aire, atraviesa puntos de interés para recoger lugares y aterriza en las pistas para desbloquearlas como nuevos puntos de partida.","Aterrizar es seguir avanzando: cada toma de tierra recarga tu propulsor para el siguiente salto. Alinéate con una pista y posa con suavidad.","Gasta tus puntos en el hangar para mejorar tu avión y tu booster. Si planeas lo suficiente, nuevas islas quedan a tu alcance — desde La Gomera hasta Lanzarote. ¿Hasta dónde llegarás?"],next:"Siguiente",begin:"¡Vamos!"},dR={eyebrow:"Tutorial",skip:"Saltar",retry:"¡Otra vez!",done:"¡Listo, a volar!",launch:"Tira hacia abajo para despegar y planear",navLeft:"Ahora a la izquierda",navRight:"Ahora a la derecha",navUp:"Ahora sube",navDown:"Ahora baja",rings:"Atraviesa los dos aros ({collected}/{total})",boost:"Mantén el boost para un empujón",thermal:"Dirígete a la corriente ascendente para ganar altura",ringHigh:"Aprovecha la altura — atrapa el aro alto",ringLow:"Ahora baja de nuevo — por el aro bajo",invertHint:"¿Subir va al revés? Cámbialo.",steerHint:"Dirige aquí",endTitle:"¡Listo para planear!",endBody:"Explora las Islas Canarias y atraviesa aros para reunir lugares. Reúne suficientes y tu boost One-Shot te lleva a la siguiente isla. ¿Hasta dónde planeas?",endGo:"¡Vamos!"},hR={loading:W1,a11y:q1,hud:X1,booster:j1,menu:$1,welcome:Y1,pause:K1,crash:Z1,hangar:J1,obsidian:Q1,skins:eR,shop:tR,settings:nR,reset:iR,levels:sR,imprint:rR,licenses:oR,portrait:aR,testpin:lR,upgrades:cR,onboarding:uR,tutorial:dR},fR={sub:"Construction du monde…",hint:"Avec des réglages de qualité élevés, cela peut prendre quelques secondes."},pR={pause:"Pause",map:"Carte",close:"Fermer",landings:"Atterrissages",brake:"Frein",oneShot:"One-Shot",boost:"Boost",sell:"Vendre pour {cost} points"},mR={lift:"Ascendance",soon:"bientôt",hintNormal:"↑ ↓ Tangage · ← → Roulis · Espace Frein · Maj Boost · F One-Shot",hintNormalTouch:"Piloter au joystick · Droite Boost / Frein / One-Shot",hintPrelaunch:"Tire vers le bas pour décoller",hintPrelaunchGyro:"Appuie sur boost pour décoller",hintTakeoff:"Roulage au décollage…",landingToast:"Atterri ! · {id}",landingBonus:"+ {bonus} pts",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nouvelle île découverte !",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Pose-toi à l'aéroport indiqué pour recharger tes boosters et gagner des points bonus.",airportUnlockTitle:"Aéroport débloqué !",airportUnlockBody:"Réapparais à {name} quand tu veux depuis le menu Niveaux.",airportUnlocked:"{name} débloqué",wrongApproach:"Mauvais côté d'approche — aligne-toi depuis l'autre bout."},gR={names:["Aucun Booster","Booster Niveau 1","Booster Niveau 2","Booster Niveau 3","Booster Niveau MAX"],unlock:["","Booster Niveau 1 débloqué","Booster Niveau 2 débloqué — La Gomera à portée","Booster Niveau 3 débloqué — Gran Canaria à portée","Booster Niveau MAX débloqué — Fuerteventura / Lanzarote"]},vR={start:"Démarrer",startSubDefault:"Dernier checkpoint",levels:"Niveaux",levelsSub:"Choisir un aéroport",hangar:"Hangar",hangarSub:"Améliorations et statut",shop:"Boutique",shopSub:"Obsidienne et designs",settings:"Réglages",settingsSub:"Graphismes et performances",imprint:"Mentions légales",licenses:"Licences"},yR={checkpoint:"Checkpoint · {id}",firstFlight:"Premier vol · TFN"},xR={title:"Pause",resume:"Reprendre le vol",home:"Menu principal"},_R={title:"Atterrissage manqué",restart:"Redécoller",hint:"Barre d'espace",hangar:"Hangar",shop:"Boutique"},bR={title:"Hangar",points:"Points",locations:"Lieux",obsidian:"Obsidienne",highscore:"Record",plane:"Avion",dragToRotate:"Glisser pour tourner",upgrades:"Améliorations",booster:"Booster",selectUpgrade:"Touche une amélioration pour voir sa description.",buy:"Acheter · {cost}",buyObsidian:"Obsidienne · {cost}",max:"Max",level:"Niveau {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Ton niveau de boost augmente automatiquement quand tu découvres assez de lieux. Survole de nouveaux POI pour améliorer ton boost One-Shot.",equip:"Équiper",equipped:"Équipé",comingSoon:"Bientôt",getDiamonds:"Obtenir de l'obsidienne →",skinPrev:"Design précédent",skinNext:"Design suivant"},SR={title:"Payer avec de l'obsidienne ?",text:"Cette amélioration coûte <strong></strong>.",warn:"L'obsidienne s'achète avec de l'argent réel. Touche <em>Confirmer</em> seulement si tu veux vraiment dépenser de l'obsidienne.",cancel:"Annuler",confirm:"Confirmer",spendSkin:"Tu dépenses {obsidian} pour le design {label}."},MR={default:{name:"Papier",desc:"Le pliage classique."},charcoal:{name:"Anthracite",desc:"Une livrée ardoise mate — méritée par les explorateurs."},gold:{name:"Or",desc:"Une livrée premium étincelante."},comingSoon:{name:"Bientôt plus",desc:"De nouveaux designs arrivent."}},wR={intro:"L'obsidienne débloque des designs dans le hangar et des améliorations instantanées.",bonus:"+{pct}%",badgePopular:"Populaire",badgeValue:"Meilleur prix",granted:"+ {amount} obsidienne ajoutée",restore:"Restaurer les achats",restored:"Achats restaurés",viewSkins:"Voir les designs →",disclosure:"L'obsidienne et les designs sont stockés sur cet appareil.",watchAd:"Regarder une vidéo",adsLeftToday:"{count}/{cap} aujourd'hui",adsCapReached:"Reviens demain",removeAds:"Supprimer les pubs",removeAdsOwned:"Pubs supprimées"},ER={title:"Réglages",quality:"Qualité graphique",presetLow:"Faible",presetStandard:"Standard",presetHigh:"Élevée",presetUltra:"Ultra",advanced:"Avancé",meshRes:"Résolution du maillage",meshHint:"Segments · 100–3000",vegSamples:"Échantillons de végétation",vegHint:"10 000–10 000 000",restartNote:"Les changements nécessitent un redémarrage. L'application rechargera la page.",cancel:"Annuler",apply:"Appliquer et recharger",language:"Langue",controls:"Commandes",invertPitch:"Commandes de vol inversées",invertPitchHint:"Tirez vers le bas pour monter",gyroControl:"Pilotage par inclinaison",gyroControlHint:"Inclinez l'appareil pour diriger",gyroSensitivity:"Sensibilité",gyroRecalibrate:"Recalibrer",tutorial:"Tutoriel",replayTutorial:"Revoir le tutoriel",dangerZone:"Zone de danger",dangerDesc:"Réinitialise toute la progression : points, lieux, améliorations, POI découverts, aéroports et checkpoint. Les réglages graphiques sont conservés.",resetSave:"Réinitialiser la progression"},AR={title:"Vraiment supprimer ta sauvegarde ?",text:"Tous les points, lieux, améliorations et POI découverts seront perdus. Tu recommenceras à <strong>Tenerife Nord</strong> avec l'avion de base.",warn:"Cette action est irréversible.",cancel:"Annuler",confirm:"Réinitialiser"},TR={eyebrow:"Île",archTitle:"Îles Canaries",legendSpawn:"Départ",legendDiscovered:"Découvert",legendLocked:"Inconnu",hintDefault:"Touche un point de départ pour commencer là.",hintNone:"Atterris dans un aéroport pour le débloquer comme point de départ.",hintProgress:"{landed} / {total} aéroports débloqués. Touche un point de départ.",hintAll:"Tous les aéroports débloqués. Touche un point de départ.",markerLocked:"???",tipStart:"Démarrer à {id}",tipNotLanded:"{id} — pas encore atterri",tipUndiscovered:"Pas encore découvert"},RR={title:"Mentions légales",provider:"Fournisseur",contact:"Contact",privacy:"Confidentialité",privacyLink:"Ouvrir la politique de confidentialité",linksLiability:"Responsabilité des liens",linksText:"Notre offre contient des liens vers des sites web externes de tiers dont nous ne pouvons pas influencer le contenu. Nous déclinons donc toute responsabilité quant à ces contenus externes. Le fournisseur ou l'exploitant des pages liées est toujours responsable de leur contenu.",footer:"Swiss Innovation Studios · 2026"},CR={title:"Licences open source",intro:"Teide inclut les composants open source suivants. Les textes complets des licences figurent ci-dessous et sont inclus dans l'application.",footer:"Swiss Innovation Studios · 2026"},LR={title:"Tourne ton appareil",sub:"Teide se joue en mode paysage"},PR={title:"Mode test",prompt:"Saisir le code PIN",wrong:"Code PIN incorrect",cancel:"Annuler",confirm:"OK"},IR={drag:{label:"Aérodynamique",desc:"Pliage plus net — moins de traînée, vol plané plus long."},maxSpeed:{label:"Vitesse max",desc:"Augmente la vitesse de croisière maximale."},speedFromPitch:{label:"Piqué",desc:"Plus d'accélération en piqué — l'altitude devient de la vitesse."},stallSpeed:{label:"Stabilité",desc:"Seuil de décrochage plus bas — pardonne le vol lent."},takeoffSpeed:{label:"Piste",desc:"Accélération au décollage plus rapide — moins de roulage."},brake:{label:"Aérofrein",desc:"Débloque les volets de frein (Espace en vol)."},greyBoost:{label:"Boost de réserve",desc:"Poussée d'urgence plus forte : combustion plus longue, plus de poussée, recharge plus rapide."}},DR={pickLanguage:"Choisis ta langue",welcome:"Bienvenue aux Canaries",story:["Tu as plié l'avion en papier parfait et tu l'as lancé depuis les pentes du Teide. Chevauche maintenant les thermiques et plane au-dessus des îles Canaries.","Capte les courants ascendants pour rester en l'air, traverse des points d'intérêt pour récolter des lieux et pose-toi sur les pistes pour les débloquer comme nouveaux points de départ.","Se poser, c'est continuer : chaque atterrissage recharge ton booster pour le prochain saut. Aligne-toi sur une piste et pose-toi en douceur.","Dépense tes points au hangar pour améliorer ton avion et ton booster. Plane assez loin et de nouvelles îles deviennent accessibles — de La Gomera jusqu'à Lanzarote. Jusqu'où iras-tu ?"],next:"Suivant",begin:"C'est parti !"},NR={eyebrow:"Tutoriel",skip:"Passer",retry:"Réessaie !",done:"Prêt — c'est parti !",launch:"Tire vers le bas pour décoller et planer",navLeft:"Maintenant à gauche",navRight:"Maintenant à droite",navUp:"Maintenant monte",navDown:"Maintenant descends",rings:"Traverse les deux anneaux ({collected}/{total})",boost:"Maintiens le boost pour une accélération",thermal:"Dirige-toi vers l'ascendance pour prendre de l'altitude",ringHigh:"Profite de l'altitude — attrape l'anneau haut",ringLow:"Maintenant redescends — par l'anneau bas",invertHint:"Monter à l'envers ? Inverse-le.",steerHint:"Pilote ici",endTitle:"Prêt à planer !",endBody:"Explore les îles Canaries et traverse des anneaux pour collecter des lieux. Réunis-en assez et ton boost One-Shot t'emmène à l'île suivante. Jusqu'où planeras-tu ?",endGo:"C'est parti !"},kR={loading:fR,a11y:pR,hud:mR,booster:gR,menu:vR,welcome:yR,pause:xR,crash:_R,hangar:bR,obsidian:SR,skins:MR,shop:wR,settings:ER,reset:AR,levels:TR,imprint:RR,licenses:CR,portrait:LR,testpin:PR,upgrades:IR,onboarding:DR,tutorial:NR},OR={sub:"Costruzione del mondo…",hint:"Con impostazioni di qualità elevate può richiedere alcuni secondi."},UR={pause:"Pausa",map:"Mappa",close:"Chiudi",landings:"Atterraggi",brake:"Freno",oneShot:"One-Shot",boost:"Boost",sell:"Vendi per {cost} punti"},FR={lift:"Ascendenza",soon:"presto",hintNormal:"↑ ↓ Beccheggio · ← → Rollio · Spazio Freno · Shift Boost · F One-Shot",hintNormalTouch:"Guida col joystick · Destra Boost / Freno / One-Shot",hintPrelaunch:"Tira giù per decollare",hintPrelaunchGyro:"Tocca boost per decollare",hintTakeoff:"Rullaggio al decollo…",landingToast:"Atterrato! · {id}",landingBonus:"+ {bonus} pti",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nuova isola scoperta!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Atterra all'aeroporto segnalato per ricaricare i propulsori e guadagnare punti extra.",airportUnlockTitle:"Aeroporto sbloccato!",airportUnlockBody:"Riparti da {name} quando vuoi dal menu Livelli.",airportUnlocked:"{name} sbloccato",wrongApproach:"Lato di avvicinamento sbagliato: allineati dall'altra estremità."},zR={names:["Nessun Booster","Booster Livello 1","Booster Livello 2","Booster Livello 3","Booster Livello MAX"],unlock:["","Booster Livello 1 sbloccato","Booster Livello 2 sbloccato — La Gomera a portata","Booster Livello 3 sbloccato — Gran Canaria a portata","Booster Livello MAX sbloccato — Fuerteventura / Lanzarote"]},BR={start:"Inizia",startSubDefault:"Ultimo checkpoint",levels:"Livelli",levelsSub:"Scegli aeroporto",hangar:"Hangar",hangarSub:"Potenziamenti e stato",shop:"Negozio",shopSub:"Ossidiana e design",settings:"Impostazioni",settingsSub:"Grafica e prestazioni",imprint:"Note legali",licenses:"Licenze"},HR={checkpoint:"Checkpoint · {id}",firstFlight:"Primo volo · TFN"},GR={title:"Pausa",resume:"Riprendi volo",home:"Menu principale"},VR={title:"Atterraggio di fortuna",restart:"Decolla di nuovo",hint:"Barra spaziatrice",hangar:"Hangar",shop:"Negozio"},WR={title:"Hangar",points:"Punti",locations:"Luoghi",obsidian:"Ossidiana",highscore:"Record",plane:"Aereo",dragToRotate:"Trascina per ruotare",upgrades:"Potenziamenti",booster:"Booster",selectUpgrade:"Tocca un potenziamento per vederne la descrizione.",buy:"Acquista · {cost}",buyObsidian:"Ossidiana · {cost}",max:"Max",level:"Livello {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Il tuo livello di boost aumenta automaticamente quando scopri abbastanza luoghi. Attraversa nuovi POI per migliorare il tuo boost One-Shot.",equip:"Equipaggia",equipped:"Equipaggiato",comingSoon:"In arrivo",getDiamonds:"Ottieni ossidiana →",skinPrev:"Design precedente",skinNext:"Design successivo"},qR={title:"Pagare con l'ossidiana?",text:"Questo potenziamento costa <strong></strong>.",warn:"L'ossidiana si acquista con denaro reale. Tocca <em>Conferma</em> solo se vuoi davvero spendere ossidiana.",cancel:"Annulla",confirm:"Conferma",spendSkin:"Stai spendendo {obsidian} per il design {label}."},XR={default:{name:"Carta",desc:"La piega classica."},charcoal:{name:"Antracite",desc:"Una livrea ardesia opaca — guadagnata dagli esploratori."},gold:{name:"Oro",desc:"Una scintillante livrea premium."},comingSoon:{name:"Altri presto",desc:"Nuovi design in arrivo."}},jR={intro:"L'ossidiana sblocca design nell'hangar e potenziamenti istantanei.",bonus:"+{pct}%",badgePopular:"Popolare",badgeValue:"Miglior valore",granted:"+ {amount} ossidiana aggiunta",restore:"Ripristina acquisti",restored:"Acquisti ripristinati",viewSkins:"Vedi i design →",disclosure:"Ossidiana e design sono salvati su questo dispositivo.",watchAd:"Guarda un video",adsLeftToday:"{count}/{cap} oggi",adsCapReached:"Torna domani",removeAds:"Rimuovi annunci",removeAdsOwned:"Annunci rimossi"},$R={title:"Impostazioni",quality:"Qualità grafica",presetLow:"Bassa",presetStandard:"Standard",presetHigh:"Alta",presetUltra:"Ultra",advanced:"Avanzate",meshRes:"Risoluzione mesh",meshHint:"Segments · 100–3000",vegSamples:"Campioni vegetazione",vegHint:"10.000–10.000.000",restartNote:"Le modifiche richiedono un riavvio. Applicando, la pagina verrà ricaricata.",cancel:"Annulla",apply:"Applica e ricarica",language:"Lingua",controls:"Comandi",invertPitch:"Comandi di volo invertiti",invertPitchHint:"Tira giù per salire",gyroControl:"Controllo a inclinazione",gyroControlHint:"Inclina il dispositivo per virare",gyroSensitivity:"Sensibilità",gyroRecalibrate:"Ricalibra",tutorial:"Tutorial",replayTutorial:"Ripeti tutorial",dangerZone:"Zona pericolo",dangerDesc:"Reimposta tutti i progressi: punti, luoghi, potenziamenti, POI scoperti, aeroporti e checkpoint. Le impostazioni grafiche vengono mantenute.",resetSave:"Reimposta progressi"},YR={title:"Vuoi davvero eliminare il salvataggio?",text:"Tutti i punti, i luoghi, i potenziamenti e i POI scoperti andranno persi. Ripartirai da <strong>Tenerife Nord</strong> con l'aereo base.",warn:"Questa azione non può essere annullata.",cancel:"Annulla",confirm:"Reimposta"},KR={eyebrow:"Isola",archTitle:"Isole Canarie",legendSpawn:"Partenza",legendDiscovered:"Scoperto",legendLocked:"Sconosciuto",hintDefault:"Tocca un punto di partenza per iniziare lì.",hintNone:"Atterra in un aeroporto per sbloccarlo come punto di partenza.",hintProgress:"{landed} / {total} aeroporti sbloccati. Tocca un punto di partenza.",hintAll:"Tutti gli aeroporti sbloccati. Tocca un punto di partenza.",markerLocked:"???",tipStart:"Parti da {id}",tipNotLanded:"{id} — non ancora atterrato",tipUndiscovered:"Non ancora scoperto"},ZR={title:"Note legali",provider:"Fornitore",contact:"Contatto",privacy:"Privacy",privacyLink:"Apri l'informativa sulla privacy",linksLiability:"Responsabilità per i link",linksText:"La nostra offerta contiene link a siti web esterni di terzi sui cui contenuti non abbiamo alcuna influenza. Pertanto non possiamo assumerci alcuna responsabilità per tali contenuti di terzi. Del contenuto delle pagine collegate è sempre responsabile il rispettivo fornitore o gestore delle pagine.",footer:"Swiss Innovation Studios · 2026"},JR={title:"Licenze open source",intro:"Teide include i seguenti componenti open source. I testi completi delle licenze sono qui sotto e inclusi nell'app.",footer:"Swiss Innovation Studios · 2026"},QR={title:"Ruota il dispositivo",sub:"Teide si gioca in modalità orizzontale"},eC={title:"Modalità test",prompt:"Inserisci il PIN",wrong:"PIN errato",cancel:"Annulla",confirm:"OK"},tC={drag:{label:"Aerodinamica",desc:"Pieghe più lisce — meno resistenza, planata più lunga."},maxSpeed:{label:"Velocità max",desc:"Aumenta la velocità di crociera massima."},speedFromPitch:{label:"Picchiata",desc:"Più accelerazione in picchiata — la quota diventa velocità."},stallSpeed:{label:"Stabilità",desc:"Soglia di stallo più bassa — perdona il volo lento."},takeoffSpeed:{label:"Pista",desc:"Accelerazione al decollo più rapida — meno rullaggio."},brake:{label:"Aerofreno",desc:"Sblocca gli alettoni freno (Spazio in volo)."},greyBoost:{label:"Boost di riserva",desc:"Spinta d'emergenza più forte: combustione più lunga, più spinta, ricarica più rapida."}},nC={pickLanguage:"Scegli la lingua",welcome:"Benvenuto alle Canarie",story:["Hai piegato il perfetto aeroplanino di carta e lo hai lanciato dai pendii del Teide. Ora cavalca le termiche e plana sulle Isole Canarie.","Sfrutta le correnti ascensionali per restare in volo, attraversa i punti d'interesse per raccogliere i luoghi e atterra sulle piste per sbloccarle come nuovi punti di partenza.","Atterrare significa proseguire: ogni atterraggio ricarica il tuo propulsore per il salto successivo. Allineati a una pista e posati con delicatezza.","Spendi i tuoi punti nell'hangar per potenziare aereo e booster. Plana abbastanza lontano e nuove isole entrano nel raggio — da La Gomera fino a Lanzarote. Fin dove arriverai?"],next:"Avanti",begin:"Si parte!"},iC={eyebrow:"Tutorial",skip:"Salta",retry:"Riprova!",done:"Pronto — si vola!",launch:"Tira giù per decollare e planare",navLeft:"Ora a sinistra",navRight:"Ora a destra",navUp:"Ora sali",navDown:"Ora scendi",rings:"Attraversa entrambi gli anelli ({collected}/{total})",boost:"Tieni premuto il boost per uno scatto",thermal:"Punta verso la corrente ascensionale per guadagnare quota",ringHigh:"Sfrutta la quota — prendi l'anello alto",ringLow:"Ora ridiscendi — attraverso l'anello basso",invertHint:"Salire sembra al contrario? Invertilo.",steerHint:"Guida qui",endTitle:"Pronto a planare!",endBody:"Esplora le Canarie e attraversa gli anelli per raccogliere luoghi. Raccogline a sufficienza e il tuo boost One-Shot ti porta all'isola successiva. Fin dove plani?",endGo:"Si vola!"},sC={loading:OR,a11y:UR,hud:FR,booster:zR,menu:BR,welcome:HR,pause:GR,crash:VR,hangar:WR,obsidian:qR,skins:XR,shop:jR,settings:$R,reset:YR,levels:KR,imprint:ZR,licenses:JR,portrait:QR,testpin:eC,upgrades:tC,onboarding:nC,tutorial:iC},rC={sub:"Wereld wordt gebouwd…",hint:"Bij hogere kwaliteitsinstellingen kan dit enkele seconden duren."},oC={pause:"Pauze",map:"Kaart",close:"Sluiten",landings:"Landingen",brake:"Rem",oneShot:"One-Shot",boost:"Boost",sell:"Verkopen voor {cost} punten"},aC={lift:"Lift",soon:"binnenkort",hintNormal:"↑ ↓ Pitch · ← → Rol · Spatie Rem · Shift Boost · F One-Shot",hintNormalTouch:"Stuur met joystick · Rechts Boost / Rem / One-Shot",hintPrelaunch:"Trek omlaag om te starten",hintPrelaunchGyro:"Tik op boost om op te stijgen",hintTakeoff:"Startrun…",landingToast:"Geland! · {id}",landingBonus:"+ {bonus} ptn",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Nieuw eiland ontdekt!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Land op het gemarkeerde vliegveld om je boosters bij te vullen en bonuspunten te verdienen.",airportUnlockTitle:"Vliegveld ontgrendeld!",airportUnlockBody:"Start wanneer je wilt bij {name} via het menu Levels.",airportUnlocked:"{name} ontgrendeld",wrongApproach:"Verkeerde aanvliegzijde — kom van de andere kant."},lC={names:["Geen Booster","Booster Niveau 1","Booster Niveau 2","Booster Niveau 3","Booster Niveau MAX"],unlock:["","Booster Niveau 1 ontgrendeld","Booster Niveau 2 ontgrendeld — La Gomera binnen bereik","Booster Niveau 3 ontgrendeld — Gran Canaria binnen bereik","Booster Niveau MAX ontgrendeld — Fuerteventura / Lanzarote"]},cC={start:"Start",startSubDefault:"Laatste checkpoint",levels:"Levels",levelsSub:"Kies vliegveld",hangar:"Hangar",hangarSub:"Upgrades & status",shop:"Winkel",shopSub:"Obsidiaan & designs",settings:"Instellingen",settingsSub:"Graphics & prestaties",imprint:"Colofon",licenses:"Licenties"},uC={checkpoint:"Checkpoint · {id}",firstFlight:"Eerste vlucht · TFN"},dC={title:"Pauze",resume:"Vlucht hervatten",home:"Hoofdmenu"},hC={title:"Crashlanding",restart:"Opnieuw opstijgen",hint:"Spatiebalk",hangar:"Hangar",shop:"Winkel"},fC={title:"Hangar",points:"Punten",locations:"Locaties",obsidian:"Obsidiaan",highscore:"Record",plane:"Vliegtuig",dragToRotate:"Sleep om te draaien",upgrades:"Upgrades",booster:"Booster",selectUpgrade:"Tik op een upgrade om de beschrijving te zien.",buy:"Kopen · {cost}",buyObsidian:"Obsidiaan · {cost}",max:"Max",level:"Niveau {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Je boostniveau stijgt automatisch zodra je genoeg locaties hebt ontdekt. Vlieg door nieuwe POI's om je One-Shot-boost te verbeteren.",equip:"Uitrusten",equipped:"Uitgerust",comingSoon:"Binnenkort",getDiamonds:"Obsidiaan halen →",skinPrev:"Vorig design",skinNext:"Volgend design"},pC={title:"Met obsidiaan betalen?",text:"Deze upgrade kost <strong></strong>.",warn:"Obsidiaan wordt met echt geld gekocht. Tik alleen op <em>Bevestigen</em> als je echt obsidiaan wilt uitgeven.",cancel:"Annuleren",confirm:"Bevestigen",spendSkin:"Je geeft {obsidian} uit aan het design {label}."},mC={default:{name:"Papier",desc:"De klassieke vouw."},charcoal:{name:"Antraciet",desc:"Een matte leikleurige livrei — verdiend door ontdekkers."},gold:{name:"Goud",desc:"Een glanzende premium livrei."},comingSoon:{name:"Binnenkort meer",desc:"Nieuwe designs zijn onderweg."}},gC={intro:"Obsidiaan ontgrendelt designs in de hangar en directe upgrades.",bonus:"+{pct}%",badgePopular:"Populair",badgeValue:"Beste waarde",granted:"+ {amount} obsidiaan toegevoegd",restore:"Aankopen herstellen",restored:"Aankopen hersteld",viewSkins:"Designs bekijken →",disclosure:"Obsidiaan en designs worden op dit apparaat bewaard.",watchAd:"Bekijk een video",adsLeftToday:"{count}/{cap} vandaag",adsCapReached:"Kom morgen terug",removeAds:"Advertenties verwijderen",removeAdsOwned:"Advertenties verwijderd"},vC={title:"Instellingen",quality:"Grafische kwaliteit",presetLow:"Laag",presetStandard:"Standaard",presetHigh:"Hoog",presetUltra:"Ultra",advanced:"Geavanceerd",meshRes:"Mesh-resolutie",meshHint:"Segments · 100–3000",vegSamples:"Vegetatie-samples",vegHint:"10.000–10.000.000",restartNote:"Wijzigingen vereisen een herstart. Bij toepassen wordt de pagina herladen.",cancel:"Annuleren",apply:"Toepassen & herladen",language:"Taal",controls:"Besturing",invertPitch:"Omgekeerde vluchtbesturing",invertPitchHint:"Trek omlaag om te klimmen",gyroControl:"Kantelbesturing",gyroControlHint:"Kantel je toestel om te sturen",gyroSensitivity:"Gevoeligheid",gyroRecalibrate:"Herkalibreren",tutorial:"Tutorial",replayTutorial:"Tutorial opnieuw",dangerZone:"Gevarenzone",dangerDesc:"Zet alle voortgang terug: punten, locaties, upgrades, ontdekte POI's, vliegvelden en checkpoint. Grafische instellingen blijven behouden.",resetSave:"Voortgang resetten"},yC={title:"Opslag echt verwijderen?",text:"Alle punten, locaties, upgrades en ontdekte plekken gaan verloren. Je begint op <strong>Tenerife Nord</strong> met het basisvliegtuig.",warn:"Deze actie kan niet ongedaan worden gemaakt.",cancel:"Annuleren",confirm:"Resetten"},xC={eyebrow:"Eiland",archTitle:"Canarische Eilanden",legendSpawn:"Start",legendDiscovered:"Ontdekt",legendLocked:"Onbekend",hintDefault:"Tik op een startpunt om daar te beginnen.",hintNone:"Land op een vliegveld om het als startpunt te ontgrendelen.",hintProgress:"{landed} / {total} vliegvelden ontgrendeld. Tik op een startpunt.",hintAll:"Alle vliegvelden ontgrendeld. Tik op een startpunt.",markerLocked:"???",tipStart:"Start bij {id}",tipNotLanded:"{id} — nog niet geland",tipUndiscovered:"Nog niet ontdekt"},_C={title:"Colofon",provider:"Aanbieder",contact:"Contact",privacy:"Privacy",privacyLink:"Privacybeleid openen",linksLiability:"Aansprakelijkheid voor links",linksText:"Ons aanbod bevat links naar externe websites van derden, op de inhoud waarvan wij geen invloed hebben. Daarom kunnen wij voor deze externe inhoud geen aansprakelijkheid aanvaarden. Voor de inhoud van de gelinkte pagina's is steeds de betreffende aanbieder of beheerder van de pagina's verantwoordelijk.",footer:"Swiss Innovation Studios · 2026"},bC={title:"Opensource-licenties",intro:"Teide bevat de volgende opensourcecomponenten. De volledige licentieteksten staan hieronder en zijn bij de app gevoegd.",footer:"Swiss Innovation Studios · 2026"},SC={title:"Draai je apparaat",sub:"Teide wordt in liggende stand gespeeld"},MC={title:"Testmodus",prompt:"Voer pincode in",wrong:"Onjuiste pincode",cancel:"Annuleren",confirm:"OK"},wC={drag:{label:"Aerodynamica",desc:"Strakkere vouwen — minder weerstand, langere glijvlucht."},maxSpeed:{label:"Topsnelheid",desc:"Verhoogt de maximale kruissnelheid."},speedFromPitch:{label:"Duikvlucht",desc:"Meer versnelling in een duik — hoogte wordt snelheid."},stallSpeed:{label:"Stabiliteit",desc:"Lagere overtreksnelheid — vergeeft langzaam vliegen."},takeoffSpeed:{label:"Startbaan",desc:"Snellere startversnelling — kortere startrun."},brake:{label:"Remklep",desc:"Ontgrendelt de remkleppen (Spatie tijdens de vlucht)."},greyBoost:{label:"Reserveboost",desc:"Sterkere noodstuwing: langere brandtijd, meer duwkracht, sneller bijvullen."}},EC={pickLanguage:"Kies je taal",welcome:"Welkom op de Canarische Eilanden",story:["Je hebt het perfecte papieren vliegtuigje gevouwen en het vanaf de hellingen van de Teide gelanceerd. Berijd nu de thermiek en zweef over de Canarische Eilanden.","Vang opstijgende lucht om in de lucht te blijven, duik door points of interest om locaties te verzamelen en land op startbanen om ze als nieuwe startpunten te ontgrendelen.","Landen is doorgaan: elke landing vult je booster aan voor de volgende sprong. Lijn uit met een baan en zet zacht neer.","Geef je punten uit in de hangar om je vliegtuig en booster te verbeteren. Zweef ver genoeg en nieuwe eilanden komen binnen bereik — van La Gomera tot Lanzarote. Hoe ver kom jij?"],next:"Volgende",begin:"Aan de slag!"},AC={eyebrow:"Tutorial",skip:"Overslaan",retry:"Opnieuw!",done:"Klaar — daar ga je!",launch:"Trek omlaag om op te stijgen en te zweven",navLeft:"Nu naar links",navRight:"Nu naar rechts",navUp:"Nu klimmen",navDown:"Nu dalen",rings:"Vlieg door beide ringen ({collected}/{total})",boost:"Houd boost vast voor een snelheidsstoot",thermal:"Stuur de opstijgwind in om hoogte te winnen",ringHigh:"Gebruik je hoogte — pak de hoge ring",ringLow:"Nu weer omlaag — door de lage ring",invertHint:"Klimmen omgekeerd? Wissel het om.",steerHint:"Hier sturen",endTitle:"Klaar om te zweven!",endBody:"Verken de Canarische Eilanden en vlieg door ringen om locaties te verzamelen. Verzamel er genoeg en je One-Shot-boost brengt je naar het volgende eiland. Hoe ver zweef jij?",endGo:"Daar gaan we"},TC={loading:rC,a11y:oC,hud:aC,booster:lC,menu:cC,welcome:uC,pause:dC,crash:hC,hangar:fC,obsidian:pC,skins:mC,shop:gC,settings:vC,reset:yC,levels:xC,imprint:_C,licenses:bC,portrait:SC,testpin:MC,upgrades:wC,onboarding:EC,tutorial:AC},RC={sub:"Budowanie świata…",hint:"Przy wyższych ustawieniach jakości może to potrwać kilka sekund."},CC={pause:"Pauza",map:"Mapa",close:"Zamknij",landings:"Lądowania",brake:"Hamulec",oneShot:"One-Shot",boost:"Boost",sell:"Sprzedaj za {cost} pkt"},LC={lift:"Wznoszenie",soon:"wkrótce",hintNormal:"↑ ↓ Pochylenie · ← → Przechył · Spacja Hamulec · Shift Boost · F One-Shot",hintNormalTouch:"Steruj joystickiem · Prawo Boost / Hamulec / One-Shot",hintPrelaunch:"Pociągnij w dół, aby wystartować",hintPrelaunchGyro:"Dotknij boost, aby wystartować",hintTakeoff:"Rozbieg…",landingToast:"Wylądowano! · {id}",landingBonus:"+ {bonus} pkt",poiRewardFull:"+ {punkte} P · + {gofios} 📍",poiRewardPunkte:"+ {punkte} P",discoveryTitle:"Odkryto nową wyspę!",discoveryReward:"+ {diamonds} 💎",runwayApproach:"Wyląduj na oznaczonym lotnisku, aby naładować boostery i zdobyć dodatkowe punkty.",airportUnlockTitle:"Lotnisko odblokowane!",airportUnlockBody:"Startuj w {name} w dowolnej chwili z menu Poziomy.",airportUnlocked:"{name} odblokowane",wrongApproach:"Zła strona podejścia — podejdź z drugiej strony."},PC={names:["Brak Boostera","Booster Poziom 1","Booster Poziom 2","Booster Poziom 3","Booster Poziom MAX"],unlock:["","Booster Poziom 1 odblokowany","Booster Poziom 2 odblokowany — La Gomera w zasięgu","Booster Poziom 3 odblokowany — Gran Canaria w zasięgu","Booster Poziom MAX odblokowany — Fuerteventura / Lanzarote"]},IC={start:"Start",startSubDefault:"Ostatni checkpoint",levels:"Poziomy",levelsSub:"Wybierz lotnisko",hangar:"Hangar",hangarSub:"Ulepszenia i status",shop:"Sklep",shopSub:"Obsydian i wzory",settings:"Ustawienia",settingsSub:"Grafika i wydajność",imprint:"Nota prawna",licenses:"Licencje"},DC={checkpoint:"Checkpoint · {id}",firstFlight:"Pierwszy lot · TFN"},NC={title:"Pauza",resume:"Wznów lot",home:"Menu główne"},kC={title:"Rozbicie",restart:"Wystartuj ponownie",hint:"Spacja",hangar:"Hangar",shop:"Sklep"},OC={title:"Hangar",points:"Punkty",locations:"Miejsca",obsidian:"Obsydian",highscore:"Rekord",plane:"Samolot",dragToRotate:"Przeciągnij, aby obrócić",upgrades:"Ulepszenia",booster:"Booster",selectUpgrade:"Dotknij ulepszenia, aby zobaczyć opis.",buy:"Kup · {cost}",buyObsidian:"Obsydian · {cost}",max:"Maks",level:"Poziom {level} / {max}",boosterTitle:"Booster · {name}",boosterDesc:"Poziom boostera rośnie automatycznie, gdy odkryjesz wystarczająco wiele miejsc. Przelatuj przez nowe POI, aby ulepszyć swój boost One-Shot.",equip:"Załóż",equipped:"Założony",comingSoon:"Wkrótce",getDiamonds:"Zdobądź obsydian →",skinPrev:"Poprzedni wzór",skinNext:"Następny wzór"},UC={title:"Zapłacić obsydianem?",text:"To ulepszenie kosztuje <strong></strong>.",warn:"Obsydian kupuje się za prawdziwe pieniądze. Dotknij <em>Potwierdź</em> tylko, jeśli naprawdę chcesz wydać obsydian.",cancel:"Anuluj",confirm:"Potwierdź",spendSkin:"Wydajesz {obsidian} na wzór {label}."},FC={default:{name:"Papier",desc:"Klasyczne złożenie."},charcoal:{name:"Antracyt",desc:"Matowe łupkowe malowanie — dla odkrywców."},gold:{name:"Złoto",desc:"Lśniące malowanie premium."},comingSoon:{name:"Wkrótce więcej",desc:"Nowe wzory są w drodze."}},zC={intro:"Obsydian odblokowuje wzory w hangarze i natychmiastowe ulepszenia.",bonus:"+{pct}%",badgePopular:"Popularne",badgeValue:"Najlepsza oferta",granted:"+ {amount} obsydianu dodano",restore:"Przywróć zakupy",restored:"Zakupy przywrócone",viewSkins:"Zobacz wzory →",disclosure:"Obsydian i wzory są przechowywane na tym urządzeniu.",watchAd:"Obejrzyj film",adsLeftToday:"{count}/{cap} dziś",adsCapReached:"Wróć jutro",removeAds:"Usuń reklamy",removeAdsOwned:"Reklamy usunięte"},BC={title:"Ustawienia",quality:"Jakość grafiki",presetLow:"Niska",presetStandard:"Standard",presetHigh:"Wysoka",presetUltra:"Ultra",advanced:"Zaawansowane",meshRes:"Rozdzielczość siatki",meshHint:"Segments · 100–3000",vegSamples:"Próbki roślinności",vegHint:"10 000–10 000 000",restartNote:"Zmiany wymagają ponownego uruchomienia. Po zastosowaniu strona zostanie przeładowana.",cancel:"Anuluj",apply:"Zastosuj i przeładuj",language:"Język",controls:"Sterowanie",invertPitch:"Odwrócone sterowanie lotem",invertPitchHint:"Pociągnij w dół, aby się wznosić",gyroControl:"Sterowanie przechyłem",gyroControlHint:"Przechylaj urządzenie, aby sterować",gyroSensitivity:"Czułość",gyroRecalibrate:"Kalibruj ponownie",tutorial:"Samouczek",replayTutorial:"Powtórz samouczek",dangerZone:"Strefa zagrożenia",dangerDesc:"Resetuje cały postęp: punkty, miejsca, ulepszenia, odkryte POI, lotniska i checkpoint. Ustawienia grafiki zostają zachowane.",resetSave:"Zresetuj postęp"},HC={title:"Na pewno usunąć zapis?",text:"Wszystkie punkty, miejsca, ulepszenia i odkryte POI przepadną. Zaczniesz na <strong>Tenerife Nord</strong> podstawowym samolotem.",warn:"Tej operacji nie można cofnąć.",cancel:"Anuluj",confirm:"Resetuj"},GC={eyebrow:"Wyspa",archTitle:"Wyspy Kanaryjskie",legendSpawn:"Start",legendDiscovered:"Odkryte",legendLocked:"Nieznane",hintDefault:"Dotknij punktu startu, aby tam zacząć.",hintNone:"Wyląduj na lotnisku, aby odblokować je jako punkt startu.",hintProgress:"{landed} / {total} lotnisk odblokowanych. Dotknij punktu startu.",hintAll:"Wszystkie lotniska odblokowane. Dotknij punktu startu.",markerLocked:"???",tipStart:"Start na {id}",tipNotLanded:"{id} — jeszcze nie wylądowano",tipUndiscovered:"Jeszcze nieodkryte"},VC={title:"Nota prawna",provider:"Dostawca",contact:"Kontakt",privacy:"Prywatność",privacyLink:"Otwórz politykę prywatności",linksLiability:"Odpowiedzialność za linki",linksText:"Nasza oferta zawiera linki do zewnętrznych stron internetowych osób trzecich, na których treść nie mamy wpływu. Dlatego nie możemy ponosić odpowiedzialności za te obce treści. Za treść stron, do których prowadzą linki, odpowiada zawsze ich dostawca lub operator.",footer:"Swiss Innovation Studios · 2026"},WC={title:"Licencje open source",intro:"Teide zawiera następujące komponenty open source. Pełne teksty licencji znajdują się poniżej i są dołączone do aplikacji.",footer:"Swiss Innovation Studios · 2026"},qC={title:"Obróć urządzenie",sub:"W Teide gra się w trybie poziomym"},XC={title:"Tryb testowy",prompt:"Wpisz PIN",wrong:"Błędny PIN",cancel:"Anuluj",confirm:"OK"},jC={drag:{label:"Aerodynamika",desc:"Gładsze złożenia — mniejszy opór, dłuższy lot ślizgowy."},maxSpeed:{label:"Prędkość maks.",desc:"Zwiększa maksymalną prędkość przelotową."},speedFromPitch:{label:"Nurkowanie",desc:"Większe przyspieszenie w nurkowaniu — wysokość zamienia się w prędkość."},stallSpeed:{label:"Stabilność",desc:"Niższy próg przeciągnięcia — wybacza wolny lot."},takeoffSpeed:{label:"Pas startowy",desc:"Szybsze przyspieszenie przy starcie — krótszy rozbieg."},brake:{label:"Hamulec aerodynamiczny",desc:"Odblokowuje klapy hamujące (Spacja w locie)."},greyBoost:{label:"Boost rezerwowy",desc:"Mocniejszy ciąg awaryjny: dłuższe spalanie, większy napęd, szybsze ładowanie."}},$C={pickLanguage:"Wybierz język",welcome:"Witaj na Wyspach Kanaryjskich",story:["Złożyłeś idealny papierowy samolot i wypuściłeś go ze zboczy Teide. Teraz ujeżdżaj kominy termiczne i szybuj nad Wyspami Kanaryjskimi.","Łap prądy wznoszące, aby utrzymać się w powietrzu, przelatuj przez punkty zainteresowania, aby zbierać miejsca, i ląduj na pasach, aby odblokować je jako nowe punkty startu.","Lądowanie pozwala lecieć dalej: każde lądowanie ładuje twój booster na kolejny skok. Wyrównaj do pasa i wyląduj łagodnie.","Wydawaj punkty w hangarze, aby ulepszać samolot i booster. Szybuj wystarczająco daleko, a nowe wyspy znajdą się w zasięgu — od La Gomery po Lanzarote. Jak daleko dolecisz?"],next:"Dalej",begin:"Zaczynamy!"},YC={eyebrow:"Samouczek",skip:"Pomiń",retry:"Jeszcze raz!",done:"Gotowe — lecimy!",launch:"Pociągnij w dół, aby wystartować i szybować",navLeft:"Teraz w lewo",navRight:"Teraz w prawo",navUp:"Teraz wznoś się",navDown:"Teraz opadaj",rings:"Przeleć przez oba pierścienie ({collected}/{total})",boost:"Przytrzymaj boost, by przyspieszyć",thermal:"Skieruj się w prąd wznoszący, aby nabrać wysokości",ringHigh:"Wykorzystaj wysokość — złap wysoki pierścień",ringLow:"Teraz w dół — przez niski pierścień",invertHint:"Wznoszenie na odwrót? Przełącz.",steerHint:"Steruj tutaj",endTitle:"Gotowy do szybowania!",endBody:"Odkrywaj Wyspy Kanaryjskie i przelatuj przez pierścienie, aby zbierać miejsca. Zbierz ich dość, a boost One-Shot zaniesie cię na kolejną wyspę. Jak daleko poszybujesz?",endGo:"Lecimy!"},KC={loading:RC,a11y:CC,hud:LC,booster:PC,menu:IC,welcome:DC,pause:NC,crash:kC,hangar:OC,obsidian:UC,skins:FC,shop:zC,settings:BC,reset:HC,levels:GC,imprint:VC,licenses:WC,portrait:qC,testpin:XC,upgrades:jC,onboarding:$C,tutorial:YC},ZC={en:_1,de:V1,es:hR,fr:kR,it:sC,nl:TC,pl:KC},Pa=["en","de","es","fr","it","nl","pl"],JC={en:{label:"English",flag:"🇬🇧"},de:{label:"Deutsch",flag:"🇩🇪"},es:{label:"Español",flag:"🇪🇸"},fr:{label:"Français",flag:"🇫🇷"},it:{label:"Italiano",flag:"🇮🇹"},nl:{label:"Nederlands",flag:"🇳🇱"},pl:{label:"Polski",flag:"🇵🇱"}};let Pi="en";const Yd=new Set;function QC(){const e=(navigator.languages&&navigator.languages[0]||navigator.language||"en").slice(0,2).toLowerCase();return Pa.includes(e)?e:"en"}function eL(n){return n&&Pa.includes(n)?n:QC()}function Bm(n,e){let t=ZC[n];for(const i of e.split(".")){if(t==null)return;t=t[i]}return t}function Ee(n,e){let t=Bm(Pi,n);return t===void 0&&Pi!=="en"&&(t=Bm("en",n)),t===void 0?n:(typeof t!="string"||e&&(t=t.replace(/\{(\w+)\}/g,(i,s)=>s in e?String(e[s]):i)),t)}function tL(){return Pi}const nL={en:"en-GB",de:"de-DE",es:"es-ES",fr:"fr-FR",it:"it-IT",nl:"nl-NL",pl:"pl-PL"};function kv(){return nL[Pi]||"en-GB"}function iL(){const n=new URLSearchParams(window.location.search).get("lang");return Pi=n&&Pa.includes(n)?n:eL(mn().language),document.documentElement.lang=Pi,Uv(),Pi}function Ov(n){if(!Pa.includes(n)||n===Pi)return;Pi=n,document.documentElement.lang=n;const e=mn();e.language=n,lr(e),Uv();for(const t of Yd)try{t(n)}catch(i){console.warn("[i18n] listener failed",i)}}function eu(n){return Yd.add(n),()=>Yd.delete(n)}function Uv(n=document){n.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=Ee(e.dataset.i18n)}),n.querySelectorAll("[data-i18n-html]").forEach(e=>{e.innerHTML=Ee(e.dataset.i18nHtml)}),n.querySelectorAll("[data-i18n-aria]").forEach(e=>{e.setAttribute("aria-label",Ee(e.dataset.i18nAria))}),n.querySelectorAll("[data-i18n-title]").forEach(e=>{e.title=Ee(e.dataset.i18nTitle)}),n.querySelectorAll("[data-i18n-placeholder]").forEach(e=>{e.placeholder=Ee(e.dataset.i18nPlaceholder)})}function Fv(n,{onPick:e,active:t,flagsOnly:i=!1}={}){if(!n)return;n.innerHTML="";const s=t||tL();for(const r of Pa){const o=JC[r]||{label:r,flag:""},a=document.createElement("button");a.type="button",a.className="lang-chip"+(i?" lang-chip-flagsonly":"")+(r===s?" active":""),a.dataset.lang=r,a.setAttribute("aria-label",o.label),r===s&&a.setAttribute("aria-current","true"),a.innerHTML=i?`<span class="lang-chip-flag">${o.flag}</span>`:`<span class="lang-chip-flag">${o.flag}</span><span class="lang-chip-label">${o.label}</span>`,a.addEventListener("click",()=>e&&e(r)),n.appendChild(a)}}const sL=Math.PI/180,En={pitch:0,roll:0,isActive:!1};let hc=!1,fc=!1,zv=fn.sensDefault,Hm=null,Gm=null,Sa=!0,Fr=0,zr=0,df=!1;function rL(){return df}function oL(){df=!1}function aL(){return En}function Bv(n){const e=Number(n);Number.isFinite(e)&&(zv=Math.max(fn.sensMin,Math.min(fn.sensMax,e)))}function tu(){Sa=!0}function lL(n){return((n+180)%360+360)%360-180}function Hv(n){if(n.beta==null||n.gamma==null)return;if(Sa){Hm=n.beta,Gm=n.gamma,Sa=!1,Fr=0,zr=0,En.pitch=0,En.roll=0,En.isActive=!0;return}const e=lL(n.beta-Hm),t=n.gamma-Gm,i=(typeof screen<"u"&&screen.orientation?screen.orientation.angle:window.orientation??0)*sL,s=Math.cos(i),r=Math.sin(i);let o=t*s+e*r,a=-t*r+e*s;const l=Math.max(1,fn.maxTiltDeg/zv),c=m=>{const g=Math.abs(m);if(g<=fn.deadZoneDeg)return 0;const y=Math.min(1,(g-fn.deadZoneDeg)/(l-fn.deadZoneDeg));return Math.sign(m)*y};let u=c(o),d=-c(a);const h=fn.smoothing;zr+=(u-zr)*h,Fr+=(d-Fr)*h,En.roll=zr,En.pitch=Fr,En.isActive=!0,df=!0}function cL(){fc||(window.addEventListener("deviceorientation",Hv),fc=!0)}function uL(){fc&&(window.removeEventListener("deviceorientation",Hv),fc=!1)}async function dL(){const n=typeof DeviceOrientationEvent<"u"?DeviceOrientationEvent:null;if(n&&typeof n.requestPermission=="function")try{return await n.requestPermission()==="granted"}catch{return!1}return!0}async function Gv(){return hc=!0,Sa=!0,En.isActive=!1,await dL()?(cL(),!0):(hc=!1,!1)}function hL(){hc=!1,uL(),En.pitch=0,En.roll=0,En.isActive=!1,Fr=0,zr=0}function Vv(){En.pitch=0,En.roll=0,Fr=0,zr=0,hc&&(Sa=!0)}document.addEventListener("visibilitychange",()=>{document.hidden&&Vv()});window.addEventListener("blur",Vv);let pc=AT();function Wv(){return pc}function mc(n){pc=!!n,TT(pc)}let Ma=RT();Bv(nf());function hf(){return Ma}async function fL(n){const e=n==="gyro"?"gyro":"touch";return Ma=e,wm(e),nc(e!=="gyro"),e==="gyro"?await Gv()?!0:(Ma="touch",wm("touch"),nc(!0),!1):(hL(),!0)}function pL(n){Bv(n)}Ma==="gyro"&&(nc(!1),Gv().then(n=>{n||nc(!0)}));let qv=!1,Xv=!1,jv=!1;function ff({brake:n=!1,boost:e=!1,oneShot:t=!1}={}){qv=!!n,Xv=!!e,jv=!!t}function cr(){const n=Nx(),e=Fx(),t=aL(),i=e.isActive,s=Ma==="gyro"&&t.isActive;let r,o;return i?(r=e.pitch,o=e.roll):s?(r=t.pitch,o=t.roll):(r=n.pitch,o=n.roll),Gn.pitch=pc?r:-r,Gn.roll=o,Gn.brake=e.brake||n.brake,Gn.boost=e.boost||n.boost,qv&&(Gn.brake=!1),Xv&&(Gn.boost=!1,Wc()),jv&&Dh(),Gn.isInputActive=n.isActive||e.isActive||s,Ox()?(Gn.activeInputType="touch",Ux()):rL()?(Gn.activeInputType="gyro",oL()):Dx()&&(Gn.activeInputType="keyboard",Ix()),Gn}function $v(){const n=new ct,e=[],t=.32,i=.22,s=Math.atan2(.28,.95),r=new ut({color:Ye.paper,side:$t,flatShading:!0}),o=new Yc({color:Ye.ink,transparent:!0,opacity:.32});for(const a of[-.45,.45]){const l=new ct;l.position.set(a,.045,.05),l.rotation.z=a<0?s:-s;const c=new ar(t,i);c.translate(0,-i/2,0),c.rotateX(-Math.PI/2);const u=new tt(c,r),d=new dv(c);u.add(new sv(d,o)),l.add(u),n.add(l),e.push(u)}return{group:n,flaps:e}}const{group:mL,flaps:Yv}=$v();fe.add(mL);function gL(n){const e=cr().brake&&D.alive&&D.flightState===Ge.FLYING?1:0,t=1-Math.exp(-n/Ql.deployTau);D.brakeAmount+=(e-D.brakeAmount)*t;const i=-D.brakeAmount*Ql.maxAngle;for(const s of Yv)s.rotation.x=i}function vL(){D.brakeAmount=0;for(const n of Yv)n.rotation.x=0}function yL(n){n.vertexShader=`attribute float instanceAlpha;
varying float vInstanceAlpha;
`+n.vertexShader.replace("void main() {",`void main() {
	vInstanceAlpha = instanceAlpha;`),n.fragmentShader=`varying float vInstanceAlpha;
`+n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
	diffuseColor.a *= vInstanceAlpha;`)}function Kd(n,e="instanceAlpha"){return n.onBeforeCompile=yL,n.customProgramCacheKey=()=>e,n}function Zd(n,e,t=1){const i=new Float32Array(e).fill(t);return n.setAttribute("instanceAlpha",new Bd(i,1)),i}const rt=[{id:"TFN",x:510,z:-509,heading:1.885,length:80,width:3},{id:"TFS",x:-61,z:712,heading:-1.396,length:80,width:3},{id:"GMZ",x:-1630,z:752,heading:-1.623,length:60,width:3},{id:"SPC",x:-2967,z:-918,heading:-.611,length:70,width:3},{id:"VDE",x:-3286,z:1364,heading:-2.007,length:55,width:3},{id:"LPA",x:2845,z:1030,heading:-.489,length:90,width:3.5},{id:"FUE",x:6500,z:-417,heading:-.244,length:80,width:3},{id:"ACE",x:7210,z:-1809,heading:-.524,length:80,width:3},{id:"GRAC",x:7455,z:-2588,heading:-1.571,length:40,width:2.5}];for(const n of rt)n.activeHeading=n.heading;function Kv(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const xL=.42,_L=.55;function bL(n,e){for(const t of rt){const i=n.x-t.x,s=n.z-t.z,r=Math.cos(t.heading),o=Math.sin(t.heading),a=i*r-s*o,l=i*o+s*r;if(Math.abs(a)>t.width*.5-xL||Math.abs(l)>t.length*.5-_L)continue;const c=n.y-t.elevation;if(c<-.5||c>$s.rollingHeight)continue;const u=Kv(e-t.activeHeading);if(!(Math.abs(u)>$s.headingTolerance))return t}return null}function SL(n,e=1){for(const t of rt){const i=n.x-t.x,s=n.z-t.z,r=Math.cos(t.heading),o=Math.sin(t.heading),a=i*r-s*o,l=i*o+s*r;if(Math.abs(a)<=t.width*.55+e&&Math.abs(l)<=t.length*.5+e)return t}return null}function ML(n,e,t){for(const i of rt){const s=n.x-i.x,r=n.z-i.z,o=Math.sqrt(s*s+r*r),a=n.y-i.elevation;if(o<e&&a<t&&a>-2)return!0}return!1}const Zv=[],Jv=[],wL=Kd(new Hn({color:16771240,transparent:!0,depthWrite:!1})),EL=new Hn({}),AL=new La(.15,8,6),Qv=new Ae(7227922),TL=new Ae(16770976),RL=.45,gc=.22,CL=new ut({color:14729280,flatShading:!0}),ey=new zn(.05,.06,gc,5);ey.translate(0,gc/2,0);const Vm=new Ae,Wm=new Je,LL=new I,PL=new I,IL=new At,pf=[],qm=1,vc=.32,Xm=1.6,jm=1.2,Jd={T:["#####","..#..","..#..","..#..","..#..","..#..","..#.."],F:["#####","#....","#....","####.","#....","#....","#...."],N:["#...#","##..#","#.#.#","#.#.#","#..##","#...#","#...#"],S:[".####","#....","#....",".###.","....#","....#","####."],G:[".###.","#...#","#....","#.###","#...#","#...#",".###."],M:["#...#","##.##","#.#.#","#.#.#","#...#","#...#","#...#"],Z:["#####","....#","...#.","..#..",".#...","#....","#####"],P:["####.","#...#","#...#","####.","#....","#....","#...."],C:[".###.","#...#","#....","#....","#....","#...#",".###."],V:["#...#","#...#","#...#","#...#","#...#",".#.#.","..#.."],D:["####.","#...#","#...#","#...#","#...#","#...#","####."],E:["#####","#....","#....","####.","#....","#....","#####"],L:["#....","#....","#....","#....","#....","#....","#####"],A:[".###.","#...#","#...#","#####","#...#","#...#","#...#"],U:["#...#","#...#","#...#","#...#","#...#","#...#",".###."],R:["####.","#...#","#...#","####.","#.#..","#..#.","#...#"]},DL=new Hn({color:15790320,side:$t});function ty(n){const e=[],t=[];for(const[r,o,a,l]of n){const c=e.length/3,u=a/2,d=l/2;e.push(r-u,.06,o-d,r+u,.06,o-d,r+u,.06,o+d,r-u,.06,o+d),t.push(c,c+1,c+2,c,c+2,c+3)}const s=new vt;return s.setAttribute("position",new et(e,3)),s.setIndex(t),new tt(s,DL)}function NL(n){const t=2.8000000000000003,i=.4*.7,s=[...n.id].filter(r=>Jd[r]).length;return{cell:.4,glyphL:t,gap:i,totalL:s*t+Math.max(0,s-1)*i,center:n.length*.3}}function kL(n){const e=[],i=n.width/2-.09-.1;e.push([-i,0,.18,n.length*.98],[i,0,.18,n.length*.98]);const s=6,r=3,o=n.width*.9/s,a=o*.55;for(const l of[-1,1]){const c=l*(n.length/2-r/2-.8);for(let u=0;u<s;u++)e.push([(u-(s-1)/2)*o,c,a,r])}return ty(e)}function OL(n){const e=[],{cell:t,glyphL:i,gap:s,totalL:r,center:o}=NL(n),a=[...n.id].filter(f=>Jd[f]);let l=o-r/2;for(const f of a){const _=Jd[f];for(let v=0;v<7;v++)for(let S=0;S<5;S++)_[v][S]==="#"&&e.push([(S-2)*t,l+v*t,t*.85,t*.85]);l+=i+s}const c=3,u=3,d=.18,h=n.length*.8,m=r/2+6,g=Math.max(1,Math.floor((h+u)/(c+u)));let p=-(g*c+(g-1)*u)/2+c/2;for(let f=0;f<g;f++)Math.abs(p-o)>m&&e.push([0,p,d,c]),p+=c+u;return ty(e)}const Ai={concrete:new ut({color:ci.colors.concrete,flatShading:!0}),glass:new ut({color:ci.colors.glass,flatShading:!0}),accent:new ut({color:ci.colors.accent,flatShading:!0})};function UL(){const n=ci.towerHeight,e=n*.66,t=n*.2,i=new ct,s=(a,l,c)=>{const u=new tt(a,l);u.position.y=c,i.add(u)};s(new en(3,.6,3),Ai.concrete,.3),s(new en(1.5,e,1.5),Ai.concrete,.6+e/2),s(new en(2.4,t,2.4),Ai.glass,.6+e+t/2);const r=.6+e+t;s(new en(2.7,.25,2.7),Ai.concrete,r+.125);const o=new zn(.05,.05,n*.22,5);for(const a of[-.55,.55]){const l=new tt(o,Ai.accent);l.position.set(a,r+.25+n*.11,0),i.add(l)}return s(new La(.32,8,6),Ai.concrete,r+.55),i}function FL(){const n=ci.terminal,e=new ct,t=(i,s,r,o,a)=>{const l=new tt(i,s);l.position.set(r,o,a),e.add(l)};return t(new en(n.depth,n.height,n.length),Ai.concrete,0,n.height/2,0),t(new en(.2,n.height*.55,n.length*.88),Ai.glass,-3/2,n.height*.5,0),t(new en(n.depth+.6,.25,n.length+.6),Ai.concrete,0,n.height+.125,0),e}const zL=UL(),BL=FL();function HL(){const n=new ct,e=new ut({color:Ye.runway,flatShading:!0}),t=new Je;for(let i=0;i<rt.length;i++){const s=rt[i],r=new ct,o=new ar(s.width,s.length);o.rotateX(-Math.PI/2),r.add(new tt(o,e)),r.add(kL(s));const a=new ct,l=s.width*.68,c=l*1.05,u=new Vs;u.moveTo(0,c*.55),u.lineTo(-l/2,-c*.45),u.lineTo(0,-c*.05),u.lineTo(l/2,-c*.45),u.closePath();const d=new Zh(u);d.rotateX(-Math.PI/2);const h=Math.max(7,Math.round(s.length/5)),m=new Float32Array(h),g=Zd(d,h,vc),y=new tn(d,wL,h);y.renderOrder=1;for(let w=0;w<h;w++){const G=w/(h-1)-.5;t.makeTranslation(0,.08,G*s.length*.85),y.setMatrixAt(w,t),m[w]=.5-G,g[w]=vc}y.instanceMatrix.needsUpdate=!0,a.add(y),Zv.push({mesh:y,alpha:g,posT:m,count:h});const f=Math.max(2,Math.floor(s.length/4.5)),_=f*2,v=new Float32Array(_),S=new Float32Array(_*3),R=new tn(AL,EL,_),E=new tn(ey,CL,_);let A=0;for(let w=0;w<f;w++){const G=w/(f-1)-.5,W=G*s.length*.97,te=.5-G;for(const U of[-1,1]){const q=U*s.width*.6;t.makeTranslation(q,gc,W),R.setMatrixAt(A,t),R.setColorAt(A,Qv),t.makeTranslation(q,0,W),E.setMatrixAt(A,t),v[A]=te,S[A*3]=q,S[A*3+1]=gc,S[A*3+2]=W,A++}}R.instanceMatrix.needsUpdate=!0,R.instanceColor.needsUpdate=!0,E.instanceMatrix.needsUpdate=!0,a.add(R),a.add(E),Jv.push({mesh:R,posT:v,base:S,count:_}),a.add(OL(s)),r.add(a),pf[i]=a;const k=zL.clone();k.scale.setScalar(ci.towerScale),k.position.set(ci.towerSide,0,ci.towerAlong*s.length*.5),r.add(k);const b=BL.clone();b.position.set(ci.terminal.side,0,ci.terminal.along*s.length*.5),r.add(b),r.position.set(s.x,s.elevation+.04,s.z),r.rotation.y=s.heading,n.add(r)}return n}function GL(n){const e=n%Xm/Xm;for(const i of Zv){const{alpha:s,posT:r,count:o}=i;for(let a=0;a<o;a++){const l=(e-r[a]+1)%1;s[a]=l<.16?qm-(qm-vc)*(l/.16):vc}i.mesh.geometry.attributes.instanceAlpha.needsUpdate=!0}const t=n%jm/jm;for(const i of Jv){const{mesh:s,posT:r,base:o,count:a}=i;for(let l=0;l<a;l++){const c=(t-r[l]+1)%1,u=c<.22?1-c/.22:0;Vm.copy(Qv).lerp(TL,u),s.setColorAt(l,Vm);const d=1+u*RL;Wm.compose(LL.set(o[l*3],o[l*3+1],o[l*3+2]),IL,PL.set(d,d,d)),s.setMatrixAt(l,Wm)}s.instanceColor.needsUpdate=!0,s.instanceMatrix.needsUpdate=!0}}function VL(n){const e=rt.indexOf(n);return pf[e]??null}function ny(n){for(let e=0;e<rt.length;e++){const t=rt[e];if(t===n)continue;const i=Math.random()<.5;t.activeHeading=i?Kv(t.heading+Math.PI):t.heading;const s=pf[e];s&&(s.rotation.y=i?Math.PI:0)}}function iy(){const n=new ct,e=new ut({color:Ye.ink,flatShading:!0});function t(i,s,r,o){const a=new ct,l=new zn(.018,.018,r,6);l.translate(0,-r/2,0),a.add(new tt(l,e));const c=new zn(o,o,.04,12);return c.rotateZ(Math.PI/2),c.translate(0,-r,0),a.add(new tt(c,e)),a.position.set(i,-.05,s),a}return n.add(t(0,-.55,.11,.055)),n.add(t(-.42,.12,.12,.06)),n.add(t(.42,.12,.12,.06)),n}const er=iy();er.scale.setScalar(.001);er.visible=!1;fe.add(er);function WL(n){const e=ML(fe.position,kl.triggerDist,kl.triggerHeight)?1:0,t=1-Math.exp(-n/kl.deployTau);D.gearAmount+=(e-D.gearAmount)*t;const i=Math.max(.001,D.gearAmount);er.scale.setScalar(i),er.visible=D.gearAmount>.02}function qL(){D.gearAmount=1,er.scale.setScalar(1),er.visible=!0}const $m=new Ae;let Xo=0;function sy(){const n=new ct,e=[],t=mt.exhaust;for(const i of[-.36,t.offsetX]){const s=new zn(t.radiusNarrow,t.radiusWide,1,12,1,!0);s.rotateX(-Math.PI/2),s.translate(0,0,.5);const r=new Hn({color:16777215,transparent:!0,opacity:0,blending:sc,depthWrite:!1,side:$t}),o=new tt(s,r);o.position.set(i,t.offsetY,t.offsetZ),o.scale.z=0,n.add(o),e.push(o)}return{group:n,streams:e}}const{group:XL,streams:ry}=sy();fe.add(XL);function jL(){return D.oneShotActive?(mt.oneShot.tiers[Ys()]||mt.oneShot.tiers[0]).color:D.greyActive?mt.grey.color:null}function $L(n){const e=mt.exhaust,t=D.oneShotActive||D.greyActive?1:0,i=1-Math.exp(-n/Math.max(e.intensityTau,1e-4));Xo+=(t-Xo)*i;const s=jL();s!==null&&$m.setHex(s);for(const r of ry)r.scale.z=e.length*Xo,r.material.opacity=.85*Xo,s!==null&&r.material.color.copy($m)}function YL(){Xo=0;for(const n of ry)n.scale.z=0,n.material.opacity=0}let os=null,Ir=null,Kr=null,It=null,Ym=null,ra=null,Qd=null,ks=null,oa=null,eh=null,rd=0,_l=0,bl=0,Gi=0;const Km=new Ae;let Zr=0,th=0,Bl=!1,Ms=null,yc=0,xc=0,Oo=null,nh=null;const KL=.35;function ZL(){if(os)return!0;const n=document.getElementById("hangar-3d");if(!n)return!1;os=new Xh({canvas:n,antialias:!0,alpha:!0}),os.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Ir=new nv;const e=new qd(16774368,.85);e.position.set(2.5,3,2),Ir.add(e);const t=new qd(13229290,.45);t.position.set(-2,1.5,-2),Ir.add(t),Ir.add(new dT(16777215,.35)),Kr=new wn(28,1,.05,50),Kr.position.set(0,.25,3.6),Kr.lookAt(0,0,0),It=Mv(),It.scale.setScalar(1.5),It.rotation.x=-.18,It.rotation.y=.55,Ir.add(It);const i=$v();ra=i.group,ra.visible=!1,It.add(ra),Qd=i.flaps,ks=iy(),ks.scale.setScalar(.001),ks.visible=!1,It.add(ks);const s=sy();return oa=s.group,oa.visible=!1,It.add(oa),eh=s.streams,ay(),JL(n),Ym=new ResizeObserver(Zm),Ym.observe(n),Zm(),!0}function Zm(){if(!os)return;const e=os.domElement.getBoundingClientRect(),t=Math.max(1,Math.round(e.width)),i=Math.max(1,Math.round(e.height));os.setSize(t,i,!1),Kr.aspect=t/i,Kr.updateProjectionMatrix()}function JL(n){n.addEventListener("pointerdown",t=>{Bl=!0,Ms={px:t.clientX,py:t.clientY,rotX:It.rotation.x,rotY:It.rotation.y},Oo={ts:performance.now(),px:t.clientX,py:t.clientY},yc=0,xc=0,n.setPointerCapture(t.pointerId),n.style.cursor="grabbing"}),n.addEventListener("pointermove",t=>{if(!Bl||!Ms)return;const i=t.clientX-Ms.px,s=t.clientY-Ms.py;It.rotation.y=Ms.rotY+i*.0085,It.rotation.x=ki.clamp(Ms.rotX+s*.0085,-1.2,1.2);const r=performance.now(),o=Math.max(.001,(r-Oo.ts)/1e3);xc=(t.clientX-Oo.px)*.0085/o,yc=(t.clientY-Oo.py)*.0085/o,Oo={ts:r,px:t.clientX,py:t.clientY}});const e=()=>{Bl=!1,Ms=null,n.style.cursor="grab"};n.addEventListener("pointerup",e),n.addEventListener("pointercancel",e),n.addEventListener("pointerleave",e),n.style.cursor="grab",n.style.touchAction="none"}function oy(n){if(!os||!It)return;const e=Math.min(.05,(n-th)/1e3||0);th=n,Bl||(yc*=.92,xc*=.92,It.rotation.y+=(xc+KL)*e,It.rotation.x=ki.clamp(It.rotation.x+yc*e-It.rotation.x*.35*e,-1.2,1.2)),QL(e),os.render(Ir,Kr),Zr=requestAnimationFrame(oy)}function QL(n){Gi=(Gi+n)%Ao.cyclePeriod;const e=1-Math.exp(-n/Math.max(Ao.smoothTau,1e-4));if(ks){const t=J.testMode||(J.upgrades?.takeoffSpeed|0)>0,[i,s]=Ao.gearWindow,o=t&&Gi>=i&&Gi<=s?1:0,a=1-Math.exp(-n/Math.max(kl.deployTau,1e-4));bl+=(o-bl)*a;const l=Math.max(.001,bl);ks.scale.setScalar(l),ks.visible=t&&bl>.02}if(Qd&&ra){const t=Vc();ra.visible=t;const[i,s]=Ao.brakeWindow,o=t&&Gi>=i&&Gi<=s?1:0;rd+=(o-rd)*e;const a=-rd*Ql.maxAngle;for(const l of Qd)l.rotation.x=a}if(eh&&oa){const t=Ys(),i=mt.oneShot.tiers[t]||mt.oneShot.tiers[0];oa.visible=t>0;const[s,r]=Ao.boostWindow,a=t>0&&Gi>=s&&Gi<=r?1:0;_l+=(a-_l)*e,Km.setHex(i.color||16777215);const l=mt.exhaust;for(const c of eh)c.scale.z=l.length*_l,c.material.opacity=.85*_l,c.material.color.copy(Km)}}function ay(){if(!It)return;const n=nh?So(nh):wv();Av(It,n)}function e2(n){nh=n,ay()}function t2(){ZL()&&(Zr||(th=performance.now(),Zr=requestAnimationFrame(oy)))}function ly(){Zr&&(cancelAnimationFrame(Zr),Zr=0)}const nu={hangar:document.getElementById("hangar-overlay"),shop:document.getElementById("shop-overlay"),settings:document.getElementById("settings-overlay")},Jm=document.getElementById("garage-punkte"),Qm=document.getElementById("garage-highscore"),eg=document.getElementById("garage-obsidian"),tg=document.getElementById("garage-gofios"),Br=document.getElementById("garage-upgrades"),od=document.getElementById("garage-upgrade-info"),ng=document.getElementById("shop-obsidian"),ig=document.getElementById("hangar-skin-name"),n2=document.getElementById("hangar-skin-price"),i2=document.getElementById("hangar-skin-dots"),Hl=document.getElementById("hangar-skin-action"),s2=document.getElementById("hangar-skin-prev"),r2=document.getElementById("hangar-skin-next"),ih=document.getElementById("hangar-skin-getdiamonds"),Dr=document.getElementById("shop-packs"),sh=document.getElementById("shop-restore"),ad=document.getElementById("shop-extras"),Gl=document.getElementById("shop-watch-ad"),sg=document.getElementById("shop-watch-ad-sub"),rg=document.getElementById("shop-watch-ad-reward"),Vl=document.getElementById("shop-remove-ads"),og=document.getElementById("shop-remove-ads-sub");let ui=0,Xn=null;const _c="__booster__";let hn=null;const Ki=document.getElementById("obsidian-confirm"),ag=document.getElementById("obsidian-confirm-text"),o2=document.getElementById("obsidian-confirm-cancel"),a2=document.getElementById("obsidian-confirm-ok"),ho=document.getElementById("settings-segments"),fo=document.getElementById("settings-samples"),l2=document.getElementById("settings-apply"),c2=document.getElementById("settings-cancel"),u2=document.getElementById("settings-reset-save"),d2=document.getElementById("settings-langs"),Ci=document.getElementById("settings-invert-toggle");Ci&&Ci.addEventListener("change",()=>mc(Ci.checked));const lg=document.getElementById("settings-gyro-block"),aa=document.getElementById("settings-gyro-toggle"),bc=document.getElementById("settings-gyro-tune"),po=document.getElementById("settings-gyro-sens"),h2=document.getElementById("settings-gyro-sens-open"),Kn=document.getElementById("settings-gyro-advanced"),f2=document.getElementById("settings-gyro-recalibrate"),mo=document.getElementById("settings-quality-slider"),Sc=document.getElementById("settings-quality-ticks"),Hr=document.getElementById("settings-quality-readout"),p2=document.getElementById("settings-advanced-open"),Zn=document.getElementById("settings-advanced"),wa=bT(),fi=document.getElementById("reset-confirm"),m2=document.getElementById("reset-confirm-cancel"),g2=document.getElementById("reset-confirm-ok");let Qn=null,ds=null,mf=null;function v2(n){return Ee(`booster.names.${n}`)}function pn(n){return Math.round(n).toLocaleString(kv())}function go(n,e={}){jo();const t=nu[n];t&&(n==="hangar"&&(R2(),hs()),n==="shop"&&Mo(),n==="settings"&&U2(),t.classList.add("visible"),t.setAttribute("aria-hidden","false"),Qn=n,ds=typeof e.onClose=="function"?e.onClose:null,n==="hangar"&&t2())}function jo(){if(!Qn)return;Qn==="hangar"&&ly();const n=nu[Qn];n&&(n.classList.remove("visible"),n.setAttribute("aria-hidden","true")),Qn=null;const e=ds;ds=null,e&&e()}function y2(){Qn==="hangar"&&ly();for(const n of Object.values(nu))n&&(n.classList.remove("visible"),n.setAttribute("aria-hidden","true"));Qn=null,ds=null}function hs(){_2(),x2(),uy(),dy(),rh()}function x2(){if(hn===_c||hn&&es[hn])return;const n=Object.keys(es);for(const e of n){const t=J.upgrades[e]|0,i=es[e].levels.length-1;if(t<i){hn=e;return}}hn=n[0]||null}function cy(){const n=Ys(),e=mt.oneShot.tiers[n]||mt.oneShot.tiers[0],t="#"+(e.color|0).toString(16).padStart(6,"0"),i=Ph(),s=ea.length-1;if(n>=s)return{tier:n,tierCfg:e,colorHex:t,pct:100,rightLabel:Ee("hangar.max"),gofios:i};const r=ea[n]|0,o=ea[n+1]|0,a=Math.max(1,o-r),l=Math.max(0,Math.min(100,(i-r)/a*100));return{tier:n,tierCfg:e,colorHex:t,pct:l,rightLabel:`${i} / ${o} <span class="material-symbols-outlined inline-icon">where_to_vote</span>`,gofios:i}}function _2(){if(Jm&&(Jm.textContent=pn(J.punkte)),Qm&&(Qm.textContent=pn(J.bestFlightPunkte|0)),eg&&(eg.textContent=pn(J.obsidian|0)),tg){const n=J.gofiosByIsland[J.currentIsland]|0;tg.textContent=pn(n)}}const b2={drag:"air",maxSpeed:"speed",speedFromPitch:"trending_down",stallSpeed:"paragliding",takeoffSpeed:"flight_takeoff",brake:"back_hand",greyBoost:"bolt"};function cg(n,e,t){let i="";for(let s=0;s<e;s++){const r=s<n,o=r&&t?` style="background:${t};border-color:${t}"`:"";i+=`<span class="upg-pip${r?" is-on":""}"${o}></span>`}return i}function uy(){if(!Br)return;Br.innerHTML="";const n='<span class="material-symbols-outlined upg-buy-icon">stars</span>',e='<span class="material-symbols-outlined upg-buy-icon">diamond</span>';for(const[r,o]of Object.entries(es)){const a=J.upgrades[r]|0,l=o.levels.length-1,c=a>=l,u=c?0:o.costs[a+1],d=c?0:hy(r),h=r===hn;let m,g,y;J.punkte>=u?(m=`${pn(u)} ${n}`,g=Ee("hangar.buy",{cost:pn(u)}),y="punkte"):(J.obsidian|0)>=d?(m=`${d} ${e}`,g=Ee("hangar.buyObsidian",{cost:d}),y="obsidian"):(m=`${d} ${e}`,g=Ee("hangar.getDiamonds"),y="shop");const p=J.testMode&&a>0?`<button class="upg-sell" type="button" data-sell="${r}"
                aria-label="${Ee("a11y.sell",{cost:pn(o.costs[a])})}">−</button>`:"",f=c?`<span class="upg-max">${Ee("hangar.max")}</span>`:`<button class="upg-buy${y==="punkte"?"":" pay-obsidian"}" type="button"
                data-buy="${r}" data-pay="${y}" aria-label="${g}">${m}</button>`,_=document.createElement("div");_.className=`upg-card${c?" is-maxed":""}${h?" is-selected":""}`,_.dataset.select=r,_.innerHTML=`
      <div class="upg-card-head">
        <span class="upg-card-icon material-symbols-outlined">${b2[r]||"tune"}</span>
        <span class="upg-card-label">${Ee(`upgrades.${r}.label`)}</span>
        ${p}
      </div>
      <div class="upg-card-foot">
        <div class="upg-pips">${cg(a,l,null)}</div>
        ${f}
      </div>
    `,Br.appendChild(_)}const t=cy(),i=hn===_c,s=document.createElement("div");s.className=`upg-card upg-card-booster${i?" is-selected":""}`,s.dataset.select=_c,s.innerHTML=`
    <div class="upg-card-head">
      <span class="upg-card-icon material-symbols-outlined">rocket_launch</span>
      <span class="upg-card-label">${Ee("hangar.booster")}</span>
    </div>
    <div class="upg-card-foot">
      <div class="upg-pips">${cg(t.tier,4,t.colorHex)}</div>
      <span class="upg-gofios">${t.rightLabel}</span>
    </div>
  `,Br.appendChild(s)}function dy(){if(!od)return;const n=od.querySelector(".upgrade-info-title"),e=od.querySelector(".upgrade-info-desc");if(hn===_c){const o=cy();n&&(n.textContent=Ee("hangar.boosterTitle",{name:v2(o.tier)})),e&&(e.textContent=Ee("hangar.boosterDesc"));return}const t=hn&&es[hn];if(!t){n&&(n.textContent=""),e&&(e.textContent=Ee("hangar.selectUpgrade"));return}const i=J.upgrades[hn]|0,s=t.levels.length-1,r=i>=s;if(n){const o=r?Ee("hangar.max"):Ee("hangar.level",{level:i,max:s});n.textContent=`${Ee(`upgrades.${hn}.label`)} · ${o}`}e&&(e.textContent=Ee(`upgrades.${hn}.desc`))}function S2(n){if(!J.testMode)return;const e=es[n];if(!e)return;const t=J.upgrades[n]|0;if(t<=0)return;const i=e.costs[t];J.upgrades[n]=t-1,J.punkte+=i,xo(),Ut(),hs()}function M2(n){const e=es[n],t=J.upgrades[n]|0,i=e.costs[t+1];J.punkte<i||(J.punkte-=i,J.upgrades[n]=t+1,xo(),Ut(),hs())}function hy(n){const e=Jl.obsidianUpgradeCosts,t=J.obsidianUpgradeCount?.[n]|0;return e[Math.min(t,e.length-1)]}function w2(n){const e=J.upgrades[n]|0,t=hy(n);(J.obsidian|0)<t||(J.obsidian=(J.obsidian|0)-t,J.upgrades[n]=e+1,J.obsidianUpgradeCount[n]=(J.obsidianUpgradeCount?.[n]|0)+1,xo(),Ut(),hs())}function E2({textHtml:n,onConfirm:e}){mf={onConfirm:e},ag&&(ag.innerHTML=n),Ki.classList.add("visible"),Ki.setAttribute("aria-hidden","false")}function Wl(){Ki.classList.remove("visible"),Ki.setAttribute("aria-hidden","true"),mf=null}function A2(){const n=mf?.onConfirm;Wl(),n&&n()}function T2(n){const e=So(n),t=`<strong>${e.costObsidian} <span class="material-symbols-outlined inline-icon">diamond</span></strong>`,i=`<strong>${Ee(e.nameKey)}</strong>`;E2({textHtml:Ee("obsidian.spendSkin",{obsidian:t,label:i}),onConfirm:()=>L2(n)})}function R2(){const n=sf().findIndex(e=>e.id===J.equippedSkin);ui=n>=0?n:0}function C2(n){const e=So(n);e.costPunkte==null||J.punkte<e.costPunkte||(J.punkte-=e.costPunkte,Qc(n),rf(n),hs())}function L2(n){const e=So(n);e.costObsidian==null||(J.obsidian|0)<e.costObsidian||(J.obsidian=(J.obsidian|0)-e.costObsidian,Qc(n),rf(n),hs())}function ug(){const n=ds;ds=null,go("shop",{onClose:()=>go("hangar",{onClose:n})})}function P2(){const n=ds;ds=null,go("hangar",{onClose:()=>go("shop",{onClose:n})})}function rh(){if(!ig)return;const n=sf();(ui<0||ui>=n.length)&&(ui=0);const e=n[ui];ig.textContent=Ee(e.nameKey),n2.textContent=Ee(e.descKey),i2.innerHTML=n.map((l,c)=>`<span class="skin-dot${c===ui?" is-active":""}"></span>`).join(""),e2(e.teaser?J.equippedSkin:e.id);const t='<span class="material-symbols-outlined skin-action-icon">diamond</span>',i='<span class="material-symbols-outlined skin-action-icon">stars</span>';let s,r=!1,o=!1,a=!1;if(Xn=null,e.teaser)s=Ee("hangar.comingSoon"),r=!0,o=!0;else if(Ev(e.id))J.equippedSkin===e.id?(s=Ee("hangar.equipped"),r=!0,o=!0):(s=Ee("hangar.equip"),Xn={kind:"equip",id:e.id});else{const l=e.costPunkte!=null,c=e.costObsidian!=null,u=l&&J.punkte>=e.costPunkte,d=c&&(J.obsidian|0)>=e.costObsidian;u?(s=`${Ee("hangar.buy",{cost:pn(e.costPunkte)})} ${i}`,Xn={kind:"buyPunkte",id:e.id}):d?(s=`${Ee("hangar.buyObsidian",{cost:e.costObsidian})} ${t}`,Xn={kind:"buyObsidian",id:e.id}):l?(s=`${Ee("hangar.buy",{cost:pn(e.costPunkte)})} ${i}`,r=!0,a=c):(s=`${Ee("hangar.buyObsidian",{cost:e.costObsidian})} ${t}`,r=!0,a=!0)}Hl.innerHTML=s,Hl.disabled=r,Hl.classList.toggle("is-quiet",o),ih&&(ih.hidden=!a)}function Mo(){ng&&(ng.textContent=pn(J.obsidian|0)),I2();const n=Js.isAvailable();if(sh&&(sh.hidden=!n),!!Dr){if(!n){Dr.innerHTML="",Dr.hidden=!0;return}Dr.hidden=!1,Dr.innerHTML=Ch.map(e=>{const t=Math.floor(e.diamonds*(1+e.bonusPct/100)),i=Js.localizedPrice(e.productId),s=e.badgeKey?`<span class="pack-badge">${Ee(e.badgeKey)}</span>`:"",r=e.bonusPct>0?`<span class="pack-bonus">${Ee("shop.bonus",{pct:e.bonusPct})}</span>`:"";return`
      <button class="pack-card" type="button" data-pack="${e.id}">
        ${s}
        <span class="pack-amount">
          <span class="material-symbols-outlined pack-icon">diamond</span>${pn(t)}
        </span>
        ${r}
        <span class="pack-price">${i}</span>
      </button>`}).join("")}}function I2(){if(!ad)return;if(!Qs.isAvailable()){ad.hidden=!0;return}ad.hidden=!1;const n=Qs.rewardedRemaining();rg&&(rg.innerHTML=`+${An.rewardedDiamonds} <span class="material-symbols-outlined">diamond</span>`),sg&&(sg.textContent=n>0?Ee("shop.adsLeftToday",{count:n,cap:An.rewardedDailyCap}):Ee("shop.adsCapReached")),Gl&&(Gl.disabled=n<=0,Gl.classList.toggle("is-disabled",n<=0));const e=!!J.adsRemoveOwned;og&&(og.textContent=e?Ee("shop.removeAdsOwned"):Js.removeAdsPrice()),Vl&&(Vl.disabled=e,Vl.classList.toggle("is-owned",e))}async function D2(){const n=await Qs.watchRewarded();Mo();const e=document.getElementById("shop-msg");if(e){if(n?.success)e.textContent=Ee("shop.granted",{amount:pn(n.diamonds)});else if(n?.capped)e.textContent=Ee("shop.adsCapReached");else return;e.classList.add("show"),setTimeout(()=>e.classList.remove("show"),2400)}}async function N2(){(await Js.purchaseRemoveAds())?.success&&Mo()}async function k2(n){const e=await Js.purchasePack(n);if(e?.success){Mo();const t=document.getElementById("shop-msg");t&&(t.textContent=Ee("shop.granted",{amount:pn(e.diamonds)}),t.classList.add("show"),setTimeout(()=>t.classList.remove("show"),2400))}}async function O2(){await Js.restore(),Mo();const n=document.getElementById("shop-msg");n&&(n.textContent=Ee("shop.restored"),n.classList.add("show"),setTimeout(()=>n.classList.remove("show"),2400))}let Yt=null;function U2(){Yt=mn(),ho&&(ho.value=Yt.segments),fo&&(fo.value=Yt.samples),G2(),Hr&&(Hr.innerHTML='<span class="settings-ro-item"><span class="material-symbols-outlined">grid_on</span><b data-ro="seg">0</b></span><span class="settings-ro-item"><span class="material-symbols-outlined">forest</span><b data-ro="samples">0</b></span>'),gf(!1),fy(),Ci&&(Ci.checked=Wv()),F2()}function F2(){if(!lg)return;const n=nr();if(lg.hidden=!n,!n)return;const e=hf()==="gyro";aa&&(aa.checked=e),po&&(po.value=String(nf())),bc&&(bc.hidden=!e)}function fy(){Fv(d2,{flagsOnly:!0,onPick:n=>{Ov(n),Yt&&(Yt.language=n)}})}function z2(n){return n.charAt(0).toUpperCase()+n.slice(1)}function B2(n){return wa.findIndex(e=>e.segments===n.segments&&e.samples===n.samples)}function H2(n){let e=0,t=1/0;return wa.forEach((i,s)=>{const r=Math.abs(i.segments-n.segments);r<t&&(t=r,e=s)}),e}function G2(){mo&&(mo.max=String(wa.length-1)),Sc&&(Sc.innerHTML=wa.map(n=>`<span class="settings-tick">${Ee("settings.preset"+z2(n.name))}</span>`).join(""))}function gf(n){if(!Yt)return;const e=B2(Yt),t=e>=0?e:H2(Yt);mo&&(mo.value=String(t)),Sc&&[...Sc.children].forEach((i,s)=>i.classList.toggle("active",e>=0&&s===t)),Hr&&(dg(Hr.querySelector('[data-ro="seg"]'),Yt.segments,n),dg(Hr.querySelector('[data-ro="samples"]'),Yt.samples,n),Hr.classList.toggle("is-custom",e<0))}function V2(n){const e=wa[n];e&&(Yt={...Yt,segments:e.segments,samples:e.samples},ho&&(ho.value=e.segments),fo&&(fo.value=e.samples),gf(!0))}function dg(n,e,t){if(!n)return;n._roRaf&&cancelAnimationFrame(n._roRaf);const i=t?parseFloat(n.dataset.cur)||0:e;if(!t||i===e){n.dataset.cur=String(e),n.textContent=pn(e),n._roRaf=0;return}const s=performance.now(),r=320,o=a=>{const l=Math.min(1,(a-s)/r),c=1-Math.pow(1-l,3),u=i+(e-i)*c;n.dataset.cur=l<1?String(u):String(e),n.textContent=pn(Math.round(u)),n._roRaf=l<1?requestAnimationFrame(o):0};n._roRaf=requestAnimationFrame(o)}function oh(){if(!Yt)return;const n=parseInt(ho?.value,10),e=parseInt(fo?.value,10);Number.isFinite(n)&&(Yt.segments=n),Number.isFinite(e)&&(Yt.samples=e),gf(!1)}function W2(){Zn&&(Zn.classList.add("visible"),Zn.setAttribute("aria-hidden","false"))}function ld(){Zn&&(Zn.classList.remove("visible"),Zn.setAttribute("aria-hidden","true"))}function q2(){Kn&&(po&&(po.value=String(nf())),Kn.classList.add("visible"),Kn.setAttribute("aria-hidden","false"))}function cd(){Kn&&(Kn.classList.remove("visible"),Kn.setAttribute("aria-hidden","true"))}function X2(){if(oh(),!Yt)return;lr(Yt);const n=new URL(window.location.href);n.searchParams.delete("segments"),n.searchParams.delete("samples"),window.location.href=n.toString()}function j2(){fi&&(fi.classList.add("visible"),fi.setAttribute("aria-hidden","false"))}function ud(){fi&&(fi.classList.remove("visible"),fi.setAttribute("aria-hidden","true"))}function $2(){Cx();const n=new URL(window.location.href);n.searchParams.delete("segments"),n.searchParams.delete("samples"),window.location.href=n.toString()}(function(){document.querySelectorAll(".modal-close[data-modal-close]").forEach(t=>{const i=t.dataset.modalClose;(i==="hangar"||i==="shop"||i==="settings")&&t.addEventListener("click",jo)});for(const t of Object.values(nu))t&&t.addEventListener("click",i=>{i.target===t&&jo()});Br&&Br.addEventListener("click",t=>{const i=t.target.closest("[data-sell]");if(i&&!i.disabled){S2(i.dataset.sell);return}const s=t.target.closest("[data-buy]");if(s){if(s.disabled)return;const o=s.dataset.buy,a=s.dataset.pay;hn=o,a==="punkte"?M2(o):a==="obsidian"?w2(o):a==="shop"&&ug();return}const r=t.target.closest("[data-select]");r&&(hn=r.dataset.select,uy(),dy())}),Ki&&(Ki.addEventListener("click",t=>{t.target===Ki&&Wl()}),o2?.addEventListener("click",Wl),a2?.addEventListener("click",A2));const e=sf().length;s2?.addEventListener("click",()=>{ui=(ui-1+e)%e,rh()}),r2?.addEventListener("click",()=>{ui=(ui+1)%e,rh()}),Hl?.addEventListener("click",()=>{Xn&&(Xn.kind==="equip"?(rf(Xn.id),hs()):Xn.kind==="buyPunkte"?C2(Xn.id):Xn.kind==="buyObsidian"&&T2(Xn.id))}),ih?.addEventListener("click",ug),Dr?.addEventListener("click",t=>{const i=t.target.closest("[data-pack]");i&&k2(i.dataset.pack)}),sh?.addEventListener("click",O2),Gl?.addEventListener("click",D2),Vl?.addEventListener("click",N2),document.getElementById("shop-view-skins")?.addEventListener("click",P2),fi&&(fi.addEventListener("click",t=>{t.target===fi&&ud()}),m2?.addEventListener("click",ud),g2?.addEventListener("click",$2)),document.addEventListener("keydown",t=>{t.key==="Escape"&&(fi?.classList.contains("visible")?(ud(),t.stopImmediatePropagation()):Ki?.classList.contains("visible")?(Wl(),t.stopImmediatePropagation()):Zn?.classList.contains("visible")?(ld(),t.stopImmediatePropagation()):Kn?.classList.contains("visible")?(cd(),t.stopImmediatePropagation()):Qn&&(jo(),t.stopImmediatePropagation()))}),mo?.addEventListener("input",()=>V2(parseInt(mo.value,10))),p2?.addEventListener("click",W2),Zn&&(Zn.addEventListener("click",t=>{t.target===Zn&&ld()}),Zn.querySelector("[data-settings-advanced-close]")?.addEventListener("click",ld)),ho?.addEventListener("input",oh),fo?.addEventListener("input",oh),aa?.addEventListener("change",async()=>{const t=aa.checked,i=await fL(t?"gyro":"touch"),s=t&&i;aa.checked=s,bc&&(bc.hidden=!s),t&&i?(mc(!1),Ci&&(Ci.checked=!1)):t||(mc(!0),Ci&&(Ci.checked=!0))}),po?.addEventListener("input",()=>{const t=parseFloat(po.value);pL(t),CT(t)}),f2?.addEventListener("click",tu),h2?.addEventListener("click",q2),Kn&&(Kn.addEventListener("click",t=>{t.target===Kn&&cd()}),Kn.querySelector("[data-settings-gyro-advanced-close]")?.addEventListener("click",cd)),c2?.addEventListener("click",jo),l2?.addEventListener("click",X2),u2?.addEventListener("click",j2),eu(()=>{Qn==="hangar"&&hs(),Qn==="shop"&&Mo(),Qn==="settings"&&fy()})})();function Y2(n,e){const t=Math.sin(n*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}const Lt={TREE:10,SHRUB:20,GRASS:30,CROP:40,URBAN:50,BARE:60,SNOW:70,WATER:80,WETLAND:90};let jn=null,py=[];async function K2(n="/teide-game/landcover/canaries.png"){const e=new Image;e.src=n,await e.decode();const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0);const s=i.getImageData(0,0,e.width,e.height).data,r=new Uint8Array(e.width*e.height);for(let o=0,a=0;a<r.length;o+=4,a++)r[a]=s[o];jn={data:r,w:e.width,h:e.height},py=Q2()}function Z2(n,e){const{center:t,metersPerUnit:i}=Pe.heightmap,s=n*i,r=-e*i,o=t.lat+r/111320,a=t.lon+s/(111320*Math.cos(t.lat*Math.PI/180));return{lat:o,lon:a}}function J2(n,e){const{bbox:t,center:i,metersPerUnit:s}=Pe.heightmap,r=t.lonW+n/(jn.w-1)*(t.lonE-t.lonW),o=t.latN-e/(jn.h-1)*(t.latN-t.latS),a=(r-i.lon)*111320*Math.cos(i.lat*Math.PI/180),l=(o-i.lat)*111320;return{x:a/s,z:-l/s}}function my(n,e){if(!jn)return Lt.WATER;const{lat:t,lon:i}=Z2(n,e),{bbox:s}=Pe.heightmap,r=(i-s.lonW)/(s.lonE-s.lonW)*(jn.w-1),o=(s.latN-t)/(s.latN-s.latS)*(jn.h-1);if(r<0||o<0||r>jn.w-1||o>jn.h-1)return Lt.WATER;const a=Math.round(r),l=Math.round(o);return jn.data[l*jn.w+a]}function Q2(){const{data:n,w:e,h:t}=jn,{minClusterPixels:i}=Et.urban,s=new Uint8Array(n.length),r=[],o=[],a=[0,0,0,0];function l(u){const d=u%e,h=u/e|0;let m=0;return d>0&&(a[m++]=u-1),d<e-1&&(a[m++]=u+1),h>0&&(a[m++]=u-e),h<t-1&&(a[m++]=u+e),m}for(let u=0;u<n.length;u++){if(s[u]||n[u]!==Lt.URBAN)continue;const d=[],h=[u];s[u]=1;let m=0;for(;m<h.length;){const g=h[m++];d.push(g);const y=l(g);for(let p=0;p<y;p++){const f=a[p];!s[f]&&n[f]===Lt.URBAN&&(s[f]=1,h.push(f))}}d.length<i?o.push(...d):r.push(d)}for(const u of o){const d=l(u),h=new Map;for(let y=0;y<d;y++){const p=n[a[y]];p!==Lt.URBAN&&p!==Lt.WATER&&h.set(p,(h.get(p)||0)+1)}let m=Lt.GRASS,g=0;for(const[y,p]of h)p>g&&(m=y,g=p);n[u]=m}const c=r.map(u=>{let d=0,h=0;const m=[];for(const g of u){const y=g%e,p=g/e|0,{x:f,z:_}=J2(y,p);m.push({x:f,z:_}),d+=f,h+=_}return{pixelCount:u.length,centerX:d/u.length,centerZ:h/u.length,pixels:m}});return c.sort((u,d)=>d.pixelCount-u.pixelCount),console.log(`landcover: ${c.length} urban clusters surviving (${o.length} tiny urban pixels reclassified)`),c}function eP(){return py}let Dn=null;function tP(){return Dn}let Ls=null,$o=0;async function nP(n=Pe.heightmap.url){const e=new Image;e.src=n,await e.decode();const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d",{willReadFrequently:!0});i.drawImage(e,0,0),Dn={data:i.getImageData(0,0,e.width,e.height).data,w:e.width,h:e.height}}function iP(n,e){const{center:t,metersPerUnit:i}=Pe.heightmap,s=n*i,r=-e*i,o=t.lat+r/111320,a=t.lon+s/(111320*Math.cos(t.lat*Math.PI/180));return{lat:o,lon:a}}function sP(n,e){if(!Dn)return 0;const{bbox:t,elevRange:i}=Pe.heightmap,s=(e-t.lonW)/(t.lonE-t.lonW)*(Dn.w-1),r=(t.latN-n)/(t.latN-t.latS)*(Dn.h-1);if(s<0||r<0||s>Dn.w-1||r>Dn.h-1)return 0;const o=Math.floor(s),a=Math.floor(r),l=Math.min(o+1,Dn.w-1),c=Math.min(a+1,Dn.h-1),u=s-o,d=r-a,h=i[1]-i[0],m=(g,y)=>{const p=(y*Dn.w+g)*4,f=Dn.data[p]<<8|Dn.data[p+1];return i[0]+f/65535*h};return(1-u)*(1-d)*m(o,a)+u*(1-d)*m(l,a)+(1-u)*d*m(o,c)+u*d*m(l,c)}function Tn(n,e){const{lat:t,lon:i}=iP(n,e);return sP(t,i)/Pe.heightmap.metersPerUnit*Pe.heightmap.elevationExaggeration}function rP(n,e,t){const i=h0;if(t<Pe.waterLevel+i.waterGuard)return t;const s=i.slopeEps,r=(Tn(n+s,e)-Tn(n-s,e))/(2*s),o=(Tn(n,e+s)-Tn(n,e-s))/(2*s),a=ki.smoothstep(Math.hypot(r,o),i.slopeGateLo,i.slopeGateHi);if(a<=0)return t;const l=i.stepHeight,c=Math.floor(t/l)*l,u=t/l-Math.floor(t/l),d=c+l*u*u*(3-2*u);return t+(d-t)*i.riserSharpness*a}function Ia(n,e){return rP(n,e,Tn(n,e))}function gy(n,e,t){let i=t,s=0;const r=Zl;for(const o of rt){const a=n-o.x,l=e-o.z,c=Math.cos(o.heading),u=Math.sin(o.heading),d=a*c-l*u,h=a*u+l*c,m=Math.max(0,Math.abs(d)-o.width/2),g=Math.max(0,Math.abs(h)-o.length/2),y=Math.max(0,m-r.sideApron),p=Math.max(0,g-r.endApron),f=Math.sqrt(y*y+p*p);if(f<r.fadeWidth){const _=ki.smoothstep(f,0,r.fadeWidth);i=ki.lerp(o.elevation,i,_),s=Math.max(s,1-_)}if(m<r.corridorHalfWidth){const _=o.elevation+Math.max(0,g-r.endApron)*r.climbGradient;i>_&&(i=_)}}return{y:i,onRunway:s}}function hg(n,e){return gy(n,e,Ia(n,e)).y}function xn(n,e){if(!Ls)return hg(n,e);const t=Pe.size/2,i=Pe.segments,s=Pe.size/i,r=(n+t)/s,o=(e+t)/s;if(r<0||o<0||r>i||o>i)return hg(n,e);const a=Math.min(i-1,Math.floor(r)),l=Math.min(i-1,Math.floor(o)),c=r-a,u=o-l,d=Ls[l*$o+a],h=Ls[l*$o+a+1],m=Ls[(l+1)*$o+a],g=Ls[(l+1)*$o+a+1];return(1-c)*(1-u)*d+c*(1-u)*h+(1-c)*u*m+c*u*g}const oP=90,aP=200,ah=[];function lP(){const n=Pe.size,e=Pe.segments,t=n/e,i=e+1;$o=i,Ls=new Float32Array(i*i);const s=new Float32Array(i*i),r=new Float32Array(i*i*3),o=new Ae(Ye.pineCanopy),a=new Ae(Ye.laurelCanopy),l=new Ae(Ye.shrubBody),c=new Ae(Ye.grassGround),u=new Ae(Ye.cropGround),d=new Ae(Ye.urbanGround),h=new Ae(Ye.bareGround),m=new Ae(Ye.shore),g=new Ae(Ye.snow),y=new Ae(Ye.runway),p=new Ae(Ye.rock),f=new Ae,_=Pe.heightmap.metersPerUnit,v=Pe.heightmap.elevationExaggeration,S=80/_*v,R=2500/_*v,E=3200/_*v,A=Et.laurelMaxAltitude*v,k=i*i;for(let te=0;te<k;te++){const U=te%i,q=te/i|0,$=-8e3+U*t,K=-8e3+q*t,B=gy($,K,Ia($,K)),Q=B.y,le=B.onRunway;switch(s[te]=Q<Pe.waterLevel?Q-fx.sinkDepth:Q,Ls[te]=s[te],my($,K)){case Lt.TREE:f.copy(Q>=A?o:a);break;case Lt.SHRUB:f.copy(l);break;case Lt.GRASS:f.copy(c);break;case Lt.CROP:f.copy(u);break;case Lt.URBAN:f.copy(d);break;case Lt.BARE:f.copy(h);break;default:f.copy(m);break}if(Q>Pe.waterLevel){const ne=h0.slopeEps,O=(Tn($+ne,K)-Tn($-ne,K))/(2*ne),N=(Tn($,K+ne)-Tn($,K-ne))/(2*ne),C=ki.smoothstep(Math.hypot(O,N),hu.slopeLo,hu.slopeHi);C>0&&f.lerp(p,C*hu.strength)}if(Q>E)f.copy(g);else if(Q>R){const ne=(Q-R)/(E-R);f.lerp(g,ne)}if(Q<Pe.waterLevel+S){const ne=(Q-Pe.waterLevel)/S;f.lerp(m,1-Math.max(0,ne))}le>.001&&f.lerp(y,le*.35);const xe=.94+Y2($,K)*.12;r[te*3]=f.r*xe,r[te*3+1]=f.g*xe,r[te*3+2]=f.b*xe}const b=new ut({vertexColors:!0,flatShading:!0}),w=new ct,G=oP,W=Math.ceil(e/G);for(let te=0;te<W;te++){const U=te*G,q=Math.min(G,e-U);for(let $=0;$<W;$++){const K=$*G,B=Math.min(G,e-K),Q=new ar(B*t,q*t,B,q);Q.rotateX(-Math.PI/2);const le=Q.attributes.position,de=new Float32Array(le.count*3);for(let C=0;C<=q;C++)for(let T=0;T<=B;T++){const ee=C*(B+1)+T,ce=(U+C)*i+(K+T);le.setY(ee,s[ce]),de[ee*3]=r[ce*3],de[ee*3+1]=r[ce*3+1],de[ee*3+2]=r[ce*3+2]}Q.setAttribute("color",new Pt(de,3)),Q.computeBoundingSphere();const xe=new tt(Q,b),ne=-8e3+K*t+B*t/2,O=-8e3+U*t+q*t/2;xe.position.set(ne,0,O),w.add(xe);const N=Q.boundingSphere;ah.push({mesh:xe,cx:ne+N.center.x,cy:N.center.y,cz:O+N.center.z,radius:N.radius})}}return w}function cP(n,e){if(!e){for(const o of ah)o.mesh.visible=!0;return}const t=Pe.fogEnd+aP,i=n.position.x,s=n.position.y,r=n.position.z;for(const o of ah){const a=i-o.cx,l=s-o.cy,c=r-o.cz;o.mesh.visible=Math.sqrt(a*a+l*l+c*c)-o.radius<t}}function uP(){const n=new ar(Pe.size*1.6,Pe.size*1.6);n.rotateX(-Math.PI/2);const e=new ut({color:Ye.water,transparent:!0,opacity:.96}),t=new tt(n,e);return t.position.y=Pe.waterLevel,t}const dP={tenerife:{count:18,spread:900,radiusRange:[8,18],strengthRange:[.55,1.55]},gomera:{count:6,spread:280,radiusRange:[9,14],strengthRange:[.65,1.3]},palma:{count:9,spread:480,radiusRange:[8,16],strengthRange:[.6,1.5]},gc:{count:12,spread:560,radiusRange:[8,17],strengthRange:[.55,1.5]},hierro:{count:5,spread:280,radiusRange:[9,13],strengthRange:[.65,1.3]},fuerte:{count:12,spread:1100,radiusRange:[10,18],strengthRange:[.55,1.2]},lanza:{count:9,spread:640,radiusRange:[9,16],strengthRange:[.6,1.3]},graciosa:{count:3,spread:120,radiusRange:[8,12],strengthRange:[.7,1.1]}};function hP(n){let e=n>>>0;return()=>{e=e+2654435769>>>0;let t=e;return t=Math.imul(t^t>>>16,569420461),t=Math.imul(t^t>>>15,1935289751),((t^t>>>15)>>>0)/4294967296}}function fP(){const n=[],e=hP(12648430);for(const t of bt){const i=dP[t.id];if(i)for(let s=0;s<i.count;s++){const r=e()*Math.PI*2,o=Math.sqrt(e())*i.spread,a=t.x+Math.cos(r)*o,l=t.z+Math.sin(r)*o,c=i.radiusRange[0]+e()*(i.radiusRange[1]-i.radiusRange[0]),u=i.strengthRange[0]+e()*(i.strengthRange[1]-i.strengthRange[0]);n.push({x:a,z:l,radius:c,strength:u})}}return n}const un=fP(),Mc=.55,vy=1.05,pP=.9;let Uo,ql,Xl,lh,qi,wc,ch=null;function yy(n){ch&&(ch.visible=!!n)}function mP(){const n=new ct;ch=n;for(let a=un.length-1;a>=0;a--)xn(un[a].x,un[a].z)<Pe.waterLevel+.5&&un.splice(a,1);for(const a of un)a.baseElevation=xn(a.x,a.z);for(const a of un){const l=new Hn({color:gn.columnColor,transparent:!0,opacity:gn.columnOpacity*a.strength,side:$t,depthWrite:!1}),c=new zn(a.radius*vy,a.radius*Mc,gn.columnTop,20,1,!0);c.translate(0,gn.columnTop/2,0);const u=new tt(c,l);u.position.set(a.x,a.baseElevation,a.z),n.add(u)}const e=un.map(a=>Math.max(10,Math.floor(gn.particleDensity*Math.PI*a.radius*a.radius))),t=e.reduce((a,l)=>a+l,0);Uo=new Float32Array(t*3),ql=new Float32Array(t),Xl=new Float32Array(t),lh=new Uint16Array(t),qi=new Float32Array(t);const i=new Float32Array(t);let s=0;for(let a=0;a<un.length;a++){const l=un[a];for(let c=0;c<e[a];c++){const u=Math.sqrt(Math.random())*pP,d=Math.random()*Math.PI*2;ql[s]=Math.cos(d)*u,Xl[s]=Math.sin(d)*u,lh[s]=a,qi[s]=Math.random(),i[s]=gn.particleSize*(.7+.5*l.strength);const h=l.radius*Mc;Uo[s*3+0]=l.x+ql[s]*h,Uo[s*3+1]=l.baseElevation,Uo[s*3+2]=l.z+Xl[s]*h,s++}}const r=new vt;r.setAttribute("position",new Pt(Uo,3)),r.setAttribute("size",new Pt(i,1));const o=new us({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Ae(gn.particleColor)},uOpacity:{value:gn.particleOpacity}},vertexShader:`
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
    `});return wc=new ov(r,o),n.add(wc),n}function gP(n){if(!wc)return;const e=wc.geometry.attributes.position,t=e.array,i=gn.columnTop,s=gn.riseSpeed;for(let r=0;r<qi.length;r++){const o=un[lh[r]];qi[r]+=s*o.strength/i*n,qi[r]>=1&&(qi[r]-=1);const a=o.radius*(Mc+(vy-Mc)*qi[r]);t[r*3+0]=o.x+ql[r]*a,t[r*3+1]=o.baseElevation+qi[r]*i,t[r*3+2]=o.z+Xl[r]*a}e.needsUpdate=!0}function vP(n,e,t){let i=0;for(const s of un){const r=n-s.x,o=t-s.z,a=Math.sqrt(r*r+o*o);if(a>=s.radius)continue;const l=e-(s.baseElevation??0);if(l<0)continue;const c=1-a/s.radius,u=Math.max(0,1-l/gn.maxAltitude);i+=gn.liftAtCenter*s.strength*c*u}return i}const yP=.4,xP=.08,Ea=20,as=Math.ceil(Pe.size/Ea)+2,fg=-8e3-Ea,xy=Array.from({length:as*as},()=>[]);function _y(n,e){return{cx:Math.floor((n-fg)/Ea),cz:Math.floor((e-fg)/Ea)}}function Da(n,e,t,i,s){const r=i+yP,o={x:n,z:t,r2:r*r,yMin:e,yMax:e+s+xP},a=Math.ceil(r/Ea),{cx:l,cz:c}=_y(n,t);for(let u=-a;u<=a;u++)for(let d=-a;d<=a;d++){const h=l+d,m=c+u;h<0||m<0||h>=as||m>=as||xy[m*as+h].push(o)}}function _P(n,e,t){const{cx:i,cz:s}=_y(n,t);if(i<0||s<0||i>=as||s>=as)return!1;const r=xy[s*as+i];for(let o=0;o<r.length;o++){const a=r[o];if(e<a.yMin||e>a.yMax)continue;const l=a.x-n,c=a.z-t;if(l*l+c*c<a.r2)return!0}return!1}const Zi=1024,Ws=427,pg=1.08,bP=700,SP=5e3,MP={TFN:"tenerife",TFS:"tenerife",GMZ:"gomera",SPC:"palma",VDE:"hierro",LPA:"gc",FUE:"fuerte",ACE:"lanza",GRAC:"graciosa"},Xi=document.getElementById("tp-minimap-canvas"),Vi=document.createElement("div"),Yo=document.createElement("canvas"),Ec=document.createElement("div"),Sl=document.createElement("div"),Jr=document.createElement("div"),jl=document.createElement("div"),$l=document.createElement("span"),mg=document.getElementById("tp-island"),gg=document.getElementById("map-card"),wP=6;let Fo=null,dd=0,Ac=!1,uh=0,dh=0,vg="",vf=0,Ml=null;const hd=new I;function yf(){if(Ml)return Ml;let n=1/0,e=-1/0,t=1/0,i=-1/0;for(const s of bt)n=Math.min(n,s.x-s.bboxRadius),e=Math.max(e,s.x+s.bboxRadius),t=Math.min(t,s.z-s.bboxRadius),i=Math.max(i,s.z+s.bboxRadius);return Ml={cx:(n+e)/2,cz:(t+i)/2,hw:(e-n)/2*pg,hh:(i-t)/2*pg},Ml}function EP(n,e){let t=bt[0].id,i=1/0;for(const s of bt){const r=n-s.x,o=e-s.z,a=r*r+o*o;a<i&&(i=a,t=s.id)}return t}function AP(){!Xi||Ac||(Ac=!0,Xi.innerHTML="",Vi.className="minimap-stage",Vi.style.width=Zi+"px",Vi.style.height=Ws+"px",Vi.style.transformOrigin="0 0",Yo.className="minimap-canvas",Yo.width=Zi,Yo.height=Ws,Vi.appendChild(Yo),Ec.className="minimap-runways",Vi.appendChild(Ec),Xi.appendChild(Vi),Sl.className="minimap-overlay",Jr.className="minimap-plane",Jr.innerHTML='<span class="minimap-plane-tri"></span>',Sl.appendChild(Jr),jl.className="minimap-compass",$l.className="minimap-compass-inner",$l.textContent="N",jl.appendChild($l),Sl.appendChild(jl),Xi.appendChild(Sl),Xi.addEventListener("pointerdown",()=>{vf=performance.now()+SP,Xi.classList.add("is-overview")}),by(),My(),hh(),window.addEventListener("resize",hh))}function by(){if(!Ac)return;const n=tP();if(!n)return;const e=Yo.getContext("2d"),t=e.createImageData(Zi,Ws),{cx:i,cz:s,hw:r,hh:o}=yf(),a=Pe.heightmap.metersPerUnit,l=Pe.waterLevel,c=Pe.heightmap.elevRange,u=Pe.heightmap.bbox,d=Pe.heightmap.center,h=Math.cos(d.lat*Math.PI/180),m=u.lonE-u.lonW,g=u.latN-u.latS,y=(d.lon-u.lonW)/m*(n.w-1),p=a/(111320*h)/m*(n.w-1),f=(u.latN-d.lat)/g*(n.h-1),_=a/111320/g*(n.h-1),v=c[1]-c[0],S=c[0],R={};for(const b of bt)R[b.id]=!1;for(const b of rt)if(J.discoveredRunways[b.id]){const w=MP[b.id];w&&(R[w]=!0)}const E=n.data,A=n.w,k=n.h;for(let b=0;b<Ws;b++){const w=s+(b/(Ws-1)-.5)*2*o,W=Math.max(0,Math.min(k-1,Math.floor(f+w*_)))*A*4;for(let te=0;te<Zi;te++){const U=i+(te/(Zi-1)-.5)*2*r,q=Math.floor(y+U*p);let $,K,B;if(q<0||q>=A)$=52,K=92,B=118;else{const le=W+q*4,de=E[le]<<8|E[le+1],xe=(S+de/65535*v)/a;if(xe<l+.05)$=52,K=92,B=118;else{const ne=EP(U,w),O=xe*a;R[ne]?[$,K,B]=TP(O):$=K=B=RP(O)}}const Q=(b*Zi+te)*4;t.data[Q]=$,t.data[Q+1]=K,t.data[Q+2]=B,t.data[Q+3]=255}}e.putImageData(t,0,0)}function TP(n){return n<80?[199,184,145]:n<600?[134,152,98]:n<1600?[157,138,110]:n<2400?[180,168,148]:n<3e3?[215,212,200]:[240,240,235]}function RP(n){return n<80?124:n<600?140:n<1600?156:n<2400?172:n<3e3?190:206}function Sy(n,e){const{cx:t,cz:i,hw:s,hh:r}=yf();return{fracX:(n-t)/(2*s)+.5,fracY:(e-i)/(2*r)+.5}}function My(){Ec.innerHTML="";for(const n of rt){const e=!!J.landedRunways[n.id];if(!!!J.discoveredRunways[n.id]&&!e)continue;const{fracX:i,fracY:s}=Sy(n.x,n.z);if(i<0||i>1||s<0||s>1)continue;const r=document.createElement("span");r.className=`minimap-runway ${e?"is-landed":"is-seen"}`,r.style.left=(i*100).toFixed(2)+"%",r.style.top=(s*100).toFixed(2)+"%",Ec.appendChild(r)}}function xf(n){if(Ia(n.x,n.z)<Pe.waterLevel+.05)return null;let t=null,i=1/0;for(const s of bt){const r=n.x-s.x,o=n.z-s.z,a=r*r+o*o;a<i&&(i=a,t=s)}return t}function wy(){return performance.now()<vf}const CP="Islas Canarias";let yg="";function LP(n){if(!mg)return;const e=xf(n),i=wy()||!e?CP:e.name;i!==yg&&(yg=i,mg.textContent=i)}function hh(){const n=Xi.getBoundingClientRect();uh=n.width,dh=n.height}function PP(){return gg?!document.body.classList.contains("touch-mode")||gg.classList.contains("is-open"):!0}function IP(n){if(!Ac||!n||(LP(n.position),!PP()))return;const e=rt.map(S=>J.discoveredRunways[S.id]?"1":"0").join("")+"|"+rt.map(S=>J.landedRunways[S.id]?"1":"0").join("");e!==vg&&(by(),My(),vg=e),(uh<1||dh<1)&&hh();const t=uh,i=dh;if(t<1||i<1)return;const s=t/2,r=i/2;hd.set(0,0,-1).applyQuaternion(n.quaternion);const o=Math.atan2(hd.x,-hd.z),a=performance.now(),l=a<vf,{hw:c}=yf(),u=2*c/Zi,d=t*u/bP,h=i/Ws,m=l?h:d,g=dd?Math.min(.1,(a-dd)/1e3):0;if(dd=a,Fo===null)Fo=m;else{const S=1-Math.exp(-g*wP);Fo+=(m-Fo)*S}l||Xi.classList.remove("is-overview");const{fracX:y,fracY:p}=Sy(n.position.x,n.position.z),f=y*Zi,_=p*Ws;Vi.style.transform=`translate(${s}px, ${r}px) rotate(${-o}rad) scale(${Fo}) translate(${-f}px, ${-_}px)`,Jr.style.left=s+"px",Jr.style.top=r+"px",Jr.style.transform="translate(-50%, -50%)";const v=Math.min(t,i)*.43;jl.style.transform=`translate(-50%, -50%) rotate(${-o}rad) translateY(-${v}px)`,$l.style.transform=`rotate(${o}rad)`}const fh=document.getElementById("landing-toast"),xg=document.getElementById("controls-hint"),fd=document.getElementById("boost-grey-fill"),wl=document.getElementById("boost-oneshot-tile"),_g=document.getElementById("test-mode-border"),Cn=document.getElementById("poi-toast"),di=document.getElementById("poi-label"),qs=document.getElementById("wrong-approach-toast");document.getElementById("tp-island");const DP={peak:document.querySelector('[data-tp="peak-count"]'),city:document.querySelector('[data-tp="city-count"]'),landscape:document.querySelector('[data-tp="landscape-count"]'),beach:document.querySelector('[data-tp="beach-count"]')},pd=document.getElementById("map-card-punkte"),md=document.getElementById("map-card-highscore"),gd=document.getElementById("map-card-landings"),bg=document.getElementById("map-card-landings-best");let ph="",mh="";function Sg(n){return Math.round(n).toLocaleString(kv())}let Os=null,Tc=null,El=null,Rc=!1,Aa=null,Mg=-1,wg=null,gh=null,Eg=!1,vo=!1;eu(()=>{gh=null,mh="",ph="",vo&&qs&&(qs.textContent=Ee("hud.wrongApproach"))});function NP(n){const e=Ee("hud.landingBonus",{bonus:$s.landingBonus});fh.innerHTML=`${Ee("hud.landingToast",{id:n.id})}<span class="bonus">${e}</span>`,fh.classList.add("show")}function Ey(){fh.classList.remove("show")}function Ag(n,e,t,i){if(!di)return;const s=t>0?Ee("hud.poiRewardFull",{punkte:e,gofios:t}):Ee("hud.poiRewardPunkte",{punkte:e}),r=i?Ee(`booster.unlock.${i}`):"",o=r?`<span class="tier-up">${r}</span>`:"";di.innerHTML=`<span class="poi-name">${n}</span><span class="reward">${s}</span>${o}`,di.classList.add("show","prominent"),Rc=!0,Aa=n,El&&clearTimeout(El),El=setTimeout(()=>{di.classList.remove("prominent"),Rc=!1,El=null,di.innerHTML=`<span class="poi-name">${n}</span>`},ht.activationToast.duration*1e3)}function _f(n){Tc=n,Cn.classList.add("show"),Os&&clearTimeout(Os),Os=setTimeout(()=>{Cn.classList.remove("show"),Os=null,Tc=null},ht.activationToast.duration*1e3)}function kP(n,e){Cn&&(Cn.innerHTML=`${n}<span class="reward">${Ee("hud.discoveryReward",{diamonds:e})}</span><span class="tier-up">${Ee("hud.discoveryTitle")}</span>`,Cn.classList.remove("compact"),_f("discovery"))}function OP(){Cn&&(Cn.innerHTML=Ee("hud.runwayApproach"),Cn.classList.remove("compact"),_f("approach"))}function vd(){!Cn||Tc!=="approach"||(Os&&(clearTimeout(Os),Os=null),Cn.classList.remove("show"),Tc=null)}function UP(n,e){Cn&&(Cn.innerHTML=e?`${Ee("hud.airportUnlockTitle")}<span class="reward">${Ee("hud.airportUnlockBody",{name:n})}</span>`:Ee("hud.airportUnlocked",{name:n}),Cn.classList.add("compact"),_f("unlock"))}function FP(){!qs||vo||(qs.textContent=Ee("hud.wrongApproach"),qs.classList.add("show"),vo=!0,vh())}function Tg(){!qs||!vo||(qs.classList.remove("show"),vo=!1)}function zP(n){di&&(Rc||vo||n!==Aa&&(di.innerHTML=`<span class="poi-name">${n}</span>`,di.classList.add("show"),Aa=n))}function vh(){di&&(Rc||Aa!==null&&(di.classList.remove("show"),Aa=null))}function BP(){const n=hf()==="gyro"?"hud.hintPrelaunchGyro":"hud.hintPrelaunch",e=D.flightState===Ge.INTRO||D.flightState===Ge.CRASHING?"":D.flightState===Ge.PRELAUNCH?Ee(n):D.flightState===Ge.TAKEOFF_ROLL?Ee("hud.hintTakeoff"):Ee("hud.hintNormal");e!==gh&&(xg.textContent=e,gh=e);const t=D.flightState===Ge.PRELAUNCH;t!==Eg&&(xg.classList.toggle("hint-pinned",t),Eg=t),GP(),VP(),WP(),HP()}function HP(){if(!pd&&!md&&!gd)return;const n=Math.round(D.flightPunkte|0),e=Math.round(J.bestFlightPunkte|0),t=D.sessionLandings|0,i=J.bestSessionLandings|0,s=`${n}|${e}|${t}|${i}`;s!==mh&&(mh=s,pd&&(pd.textContent=Sg(n)),md&&(md.textContent=Sg(e)),gd&&(gd.textContent=t.toString()),bg&&(bg.textContent=i.toString()))}function GP(){if(fd&&(fd.style.width=(D.boostFuelGrey*100).toFixed(1)+"%",fd.style.opacity=D.greyActive?"1":"0.7"),!wl)return;const n=Ys(),e=mt.oneShot.tiers[n]||mt.oneShot.tiers[0];if(n!==Mg){wl.hidden=n===0;const s="#"+(e.color|0).toString(16).padStart(6,"0");wl.style.setProperty("--boost-fill",s),Mg=n}if(n===0)return;const i=((1-Math.max(0,Math.min(1,D.boostFuelOneshot)))*100).toFixed(1)+"%";wl.style.setProperty("--drain-pct",i)}function VP(){_g&&J.testMode!==wg&&(_g.classList.toggle("visible",!!J.testMode),wg=J.testMode)}function WP(){const n=wy(),e=xf(fe.position),t=n||!e,i={peak:0,city:0,landscape:0,beach:0},s={peak:0,city:0,landscape:0,beach:0};if(t)for(const a of Object.keys(pu))for(const l of pu[a])i[l.type]++,J.exploredPOIs[l.id]&&s[l.type]++;else for(const a of pu[e.id]||[])i[a.type]++,J.exploredPOIs[a.id]&&s[a.type]++;const o=`${t?"arch":e.id}|${s.peak}/${i.peak}|${s.city}/${i.city}|${s.landscape}/${i.landscape}|${s.beach}/${i.beach}`;if(o!==ph){ph=o;for(const a of["peak","city","landscape","beach"]){const l=DP[a];if(!l)continue;const c=s[a],u=i[a];u>0&&c>=u?l.innerHTML='<span class="material-symbols-outlined tp-gofios-check">check</span>':l.textContent=`${c} / ${u}`}}}const In=new I(0,0,-1),Al=new I,Rg=new I,Ct=new I,Vt=new I,li=new I,Cg=new I,zo=new I(0,0,-1),yd=new I;let xd=!1;function Ay(){switch(D.flightState){case Ge.PRELAUNCH:case Ge.LANDED:return 0;case Ge.TAKEOFF_ROLL:case Ge.LANDING_ROLL:return ki.clamp(D.speed/Ns.takeoffSpeed,0,1);default:return 1}}function la(n,e,t){return n+(e-n)*t}let _d=0;function Bo(n,e){return 1-Math.exp(-e/Math.max(n,1e-4))}function Lg(n){const e=1-n;return 1-e*e*e}function qP(n){return Vt.set(0,0,-1).applyQuaternion(fe.quaternion),Ct.set(Vt.x,0,Vt.z),Ct.lengthSq()<1e-4&&Ct.set(0,0,-1),Ct.normalize(),li.set(0,Xt.height,0),n.copy(fe.position).addScaledVector(Ct,-6.5).add(li)}function XP(n){if(D.flightState===Ge.INTRO&&D.introStartCamPos){const u=Lg(Math.min(1,D.introT));qP(Cg),Gt.position.lerpVectors(D.introStartCamPos,Cg,u),Gt.up.set(0,1,0),Gt.lookAt(fe.position);return}if(D.flightState!==Ge.CRASHING&&(xd=!1),D.flightState===Ge.LANDED){Vt.set(0,0,-1).applyQuaternion(fe.quaternion),In.copy(Vt),Ct.set(Vt.x,0,Vt.z),Ct.lengthSq()<1e-4&&Ct.set(0,0,-1),Ct.normalize(),li.set(0,Xt.runwayHeight,0),Gt.position.copy(fe.position).addScaledVector(Ct,-3).add(li),Gt.up.set(0,1,0),Gt.lookAt(fe.position);return}if(D.flightState===Ge.CRASHING){xd||(Vt.set(0,0,-1).applyQuaternion(fe.quaternion),zo.set(Vt.x,0,Vt.z),zo.lengthSq()<1e-4&&zo.set(0,0,-1),zo.normalize(),yd.copy(fe.position),xd=!0);const u=Lg(Math.min(1,D.crashT)),d=Xt.distance+Ol.camPullback*u;li.set(0,Xt.height+Ol.camRise*u,0),Al.copy(yd).addScaledVector(zo,-d).add(li),Gt.position.lerp(Al,Bo(Ol.camTau,n)),Gt.up.set(0,1,0),Gt.lookAt(yd);return}Vt.set(0,0,-1).applyQuaternion(fe.quaternion);const e=Bo(Xt.yawTau,n),t=Bo(Xt.pitchTau,n);In.x+=(Vt.x-In.x)*e,In.z+=(Vt.z-In.z)*e,In.y+=(Vt.y-In.y)*t,In.normalize(),Ct.set(In.x,0,In.z),Ct.lengthSq()<1e-4&&Ct.set(0,0,-1),Ct.normalize();const i=D.greyActive||D.oneShotActive?1:0,s=Bo(mt.camPushbackTau,n);_d+=(i-_d)*s;const r=Ay(),o=la(Xt.runwayDistance,Xt.distance,r),a=la(Xt.runwayHeight,Xt.height,r),l=la(Xt.runwayLookAhead,Xt.lookAhead,r);li.set(0,a,0),Al.copy(fe.position).addScaledVector(Ct,-(o+mt.camPushback*_d)).add(li);const c=Bo(Xt.posTau,n);Gt.position.lerp(Al,c),Rg.copy(fe.position).addScaledVector(In,l),Gt.up.set(0,1,0),Gt.lookAt(Rg)}function iu(){Vt.set(0,0,-1).applyQuaternion(fe.quaternion),In.copy(Vt),Ct.set(Vt.x,0,Vt.z),Ct.lengthSq()<1e-4&&Ct.set(0,0,-1),Ct.normalize();const n=Ay(),e=la(Xt.runwayDistance,Xt.distance,n),t=la(Xt.runwayHeight,Xt.height,n);li.set(0,t,0),Gt.position.copy(fe.position).addScaledVector(Ct,-e).add(li)}const bf={value:0},Ho=fe.getObjectByName("paperBody");if(Ho){const n=Ho.geometry,e=n.getAttribute("position"),t=e.count/3,i=new Float32Array(e.count*3),s=new Float32Array(e.count*3);for(let r=0;r<t;r++){const o=r*3,a=o+1,l=o+2,c=(e.getX(o)+e.getX(a)+e.getX(l))/3,u=(e.getY(o)+e.getY(a)+e.getY(l))/3,d=(e.getZ(o)+e.getZ(a)+e.getZ(l))/3,h=Math.random(),m=Math.random(),g=Math.random();for(const y of[o,a,l])i[y*3]=c,i[y*3+1]=u,i[y*3+2]=d,s[y*3]=h,s[y*3+1]=m,s[y*3+2]=g}n.setAttribute("aCentroid",new Pt(i,3)),n.setAttribute("aRand",new Pt(s,3)),Ho.material.onBeforeCompile=r=>{r.uniforms.uShatter=bf,r.vertexShader=`attribute vec3 aCentroid;
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
         }`)},Ho.material.customProgramCacheKey=()=>"paperShatter",Ho.material.needsUpdate=!0}let fs=null;function jP(){fs=[],fe.traverse(n=>{if(!n.material)return;const e=Array.isArray(n.material)?n.material:[n.material];for(const t of e)t.userData.crashBaseOpacity=t.opacity,fs.push(t)})}function $P(){fs||jP();for(const n of fs)n.transparent=!0}function YP(n){if(bf.value=n,!fs)return;const e=Math.max(0,1-n*1.15);for(const t of fs)t.opacity=t.userData.crashBaseOpacity*e}function KP(){if(bf.value=0,!!fs)for(const n of fs)n.opacity=n.userData.crashBaseOpacity}let Yl=null;const ri=new I,Pg=new I,Ig=new I,Dg=new At,Ng=new Bn,Tl=new I,kg=new I,ZP=new I;function su(n,e=ZP){return e.set(0,0,-1).applyEuler(new Bn(0,n,0))}function Sf(n){const e=su(n.activeHeading);fe.position.set(n.x-e.x*n.length*.45,n.elevation+.22,n.z-e.z*n.length*.45),fe.quaternion.setFromEuler(new Bn(0,n.activeHeading,0)),D.speed=0,D.flightState=Ge.PRELAUNCH,D.currentRunway=n,D.refillStartGrey=D.boostFuelGrey,D.refillStartOneshot=D.boostFuelOneshot,D.refillT=0,D.greyActive=!1,D.oneShotActive=!1,Dh(),Wc(),tu(),iu()}const Ty=document.getElementById("crash");let yh=null;function JP(n){yh=n}function QP(){D.flightPunkte=0}function Ry(){D.flightPunkte>J.bestFlightPunkte&&(J.bestFlightPunkte=D.flightPunkte),D.flightPunkte=0}function Kl(){if(D.tutorial){yh&&yh("crash");return}D.flightState===Ge.CRASHING||D.flightState===Ge.CRASHED||(D.speed=0,D.flightState=Ge.CRASHING,D.crashT=0,D.sessionLandings=0,Ry(),Ut(),$P())}function eI(n){D.crashT+=n/Ol.duration,YP(Math.min(1,D.crashT)),D.crashT>=1&&(D.alive=!1,D.flightState=Ge.CRASHED,Ty.classList.add("visible"))}let Og=!1;function ru(n={}){n.runwayId&&n.runwayId!==J.checkpointRunwayId&&(J.checkpointRunwayId=n.runwayId,Ut());const e=J.checkpointRunwayId??Qi,t=rt.find(s=>s.id===e)??rt[0],i=n.forceIntro||!J.introPlayed;if(gx(),vL(),qL(),YL(),KP(),Ey(),Ty.classList.remove("visible"),Sf(t),Og||(ny(t),Og=!0),i){const s=new I(0,0,-1).applyQuaternion(fe.quaternion),r=new I(s.x,0,s.z).normalize();D.introStartCamPos=fe.position.clone().addScaledVector(r,-4e3).add(new I(0,f0.startHeight,0)),D.introT=0,D.flightState=Ge.INTRO,St.fog&&(Yl=St.fog,St.fog=null)}}function tI(){const n=cr();return n.pitch!==0||n.roll!==0||n.brake}function Cy(n){if(D.refillT>=1)return;D.refillT=Math.min(1,D.refillT+n/mt.refillDuration);const e=D.refillT;D.boostFuelGrey=D.refillStartGrey+(1-D.refillStartGrey)*e,D.boostFuelOneshot=D.refillStartOneshot+(1-D.refillStartOneshot)*e}function nI(){D.refillT=1,D.boostFuelGrey=1,D.boostFuelOneshot=1}function iI(n){const e=cr();Lx()&&Ys()>0&&D.boostFuelOneshot>0&&!D.oneShotActive&&(D.oneShotActive=!0),D.greyActive=e.boost&&D.boostFuelGrey>0;let t=0,i=0;if(D.oneShotActive){const s=mt.oneShot.tiers[Ys()]||mt.oneShot.tiers[0];D.boostFuelOneshot-=n/Math.max(s.tankDuration,1e-4),D.boostFuelOneshot<=0?(D.boostFuelOneshot=J.testMode?1:0,D.oneShotActive=!1):(t+=s.speedBonus,i+=s.accelRate)}if(D.greyActive){const s=mt.grey;D.boostFuelGrey-=n/Math.max(s.tankDuration,1e-4),D.boostFuelGrey<=0?(D.boostFuelGrey=0,D.greyActive=!1):(t+=s.speedBonus,i+=s.accelRate)}return!D.greyActive&&!D.oneShotActive&&D.boostFuelGrey<1&&(D.boostFuelGrey=Math.min(1,D.boostFuelGrey+n/mt.grey.rechargeTime)),{speedBonus:t,accelBonus:i}}function sI(n){tI()?D.introT=1:D.introT+=n/f0.duration,D.introT>=1&&(D.introT=0,D.introStartCamPos=null,D.flightState=Ge.PRELAUNCH,J.introPlayed=!0,Wc(),tu(),Yl&&(St.fog=Yl,Yl=null),iu())}function rI(n){Cy(n);const e=Px();(hf()!=="gyro"&&cr().pitch>0||e)&&(D.flightState=Ge.TAKEOFF_ROLL,D.takeoffTime=0,QP())}function oI(n){const e=D.currentRunway;D.takeoffTime+=n,Cy(n);const t=Ns.takeoffSpeed,i=Ns.linearShare,s=1-i,o=e.length*Ns.liftoffFraction/(t*(i/2+s/3)),a=Math.min(1,D.takeoffTime/o);D.speed=t*(i*a+s*a*a);const l=su(e.activeHeading);fe.position.x+=l.x*D.speed*n,fe.position.z+=l.z*D.speed*n,fe.position.y=e.elevation+.22,fe.quaternion.setFromEuler(new Bn(0,e.activeHeading,0)),a>=1&&(fe.rotateX(Ns.pitchUpAtLiftoff),D.flightState=Ge.FLYING,D.currentRunway=null,D.postLiftCooldown=1.2,nI())}const Ug=200,aI=250;function lI(n){for(const e of rt){if(J.discoveredRunways[e.id])continue;const t=n.x-e.x,i=n.z-e.z;if(t*t+i*i>Ug*Ug)continue;const s=n.y-e.elevation;s<-50||s>aI||(J.discoveredRunways[e.id]=!0,Ut())}}function cI(n){const e=iI(n),t=cr(),i=t.pitch,s=t.roll,r=Math.max(0,Rt.stallSpeed-D.speed)/Rt.stallSpeed,o=1-r*(1-Rt.stallAuthority),a=i*o;ri.set(0,0,-1).applyQuaternion(fe.quaternion);const l=Math.asin(ki.clamp(ri.y,-1,1));let c=a*Rt.pitchRate*n;c>0&&(c=Math.min(c,Math.max(0,Rt.maxClimbPitch-l))),fe.rotateX(c),fe.rotateZ(-s*Rt.rollRate*n),ri.set(0,0,-1).applyQuaternion(fe.quaternion),Pg.set(1,0,0).applyQuaternion(fe.quaternion),Ig.set(0,1,0).applyQuaternion(fe.quaternion);const u=Math.atan2(Pg.y,Ig.y);fe.rotateOnWorldAxis(Xd,Math.sin(u)*Rt.turnFactor*n),r>.01&&(Tl.set(ri.x,0,ri.z),Tl.lengthSq()>1e-4&&(Tl.normalize(),kg.crossVectors(Tl,Xd).normalize(),fe.rotateOnWorldAxis(kg,-r*Rt.stallPitchRate*n))),ri.set(0,0,-1).applyQuaternion(fe.quaternion);const d=ri.y;D.speed-=d*Rt.speedFromPitch*n,D.speed-=Rt.drag*n,D.brakeAmount>.01&&(D.speed-=D.brakeAmount*Ql.force*n);const h=vP(fe.position.x,fe.position.y,fe.position.z);D.speed+=h*.13*n,D.inThermal=h>.5;const m=Rt.maxSpeed+e.speedBonus;e.accelBonus>0&&D.speed<m&&(D.speed=Math.min(m,D.speed+e.accelBonus*n)),D.speed=Math.max(Rt.minSpeed,Math.min(m,D.speed));const g=fe.position.x,y=fe.position.z;fe.position.addScaledVector(ri,D.speed*n);const p=Rt.sinkRate*(1+r*Rt.stallSink);if(fe.position.y-=p*n,fe.position.y+=h*n,!D.tutorial){const S=fe.position.x-g,R=fe.position.z-y;Gc(Math.sqrt(S*S+R*R))}const f=Pe.size/2-30;if(fe.position.x>f&&(fe.position.x=f),fe.position.x<-f&&(fe.position.x=-f),fe.position.z>f&&(fe.position.z=f),fe.position.z<-f&&(fe.position.z=-f),D.postLiftCooldown>0){D.postLiftCooldown-=n;return}if(!D.tutorial){lI(fe.position);const S=Math.atan2(-ri.x,-ri.z),R=bL(fe.position,S);if(R){D.flightState=Ge.LANDING_ROLL,D.currentRunway=R,fe.position.y=R.elevation+.22;return}}const _=SL(fe.position);if(_&&fe.position.y-_.elevation<$s.rollingHeight){Kl();return}const v=xn(fe.position.x,fe.position.z);(fe.position.y<Math.max(v+.4,Pe.waterLevel+.4)||_P(fe.position.x,fe.position.y,fe.position.z))&&Kl()}function uI(n){const e=D.currentRunway;D.speed=Math.max(0,D.speed-$s.brakeForce*n);const t=su(e.activeHeading),i=fe.position.x,s=fe.position.z;fe.position.x+=t.x*D.speed*n,fe.position.z+=t.z*D.speed*n,fe.position.y=e.elevation+.22;const r=fe.position.x-i,o=fe.position.z-s;Gc(Math.sqrt(r*r+o*o)),Ng.set(0,e.activeHeading,0),Dg.setFromEuler(Ng),fe.quaternion.slerp(Dg,.22);const a=fe.position.x-e.x,l=fe.position.z-e.z,c=a*Math.sin(e.heading)+l*Math.cos(e.heading);if(Math.abs(c)>e.length*.5){Kl();return}D.speed<$s.landingSpeed&&dI(e)}function dI(n){D.speed=0,D.flightState=Ge.LANDED,D.landedToastTimer=p0.toastDuration,D.cinematicT=0,D.cinematicFromPos=fe.position.clone(),D.cinematicFromQuat=fe.quaternion.clone();const e=n.activeHeading,t=su(e,new I);D.cinematicToPos=new I(n.x-t.x*n.length*.45,n.elevation+.22,n.z-t.z*n.length*.45),D.cinematicToQuat=new At().setFromEuler(new Bn(0,e,0)),J.landings+=1,Gc($s.landingBonus),J.checkpointRunwayId=n.id,ny(n);const i=!J.landedRunways[n.id],s=Object.keys(J.landedRunways).some(r=>r!==Qi&&J.landedRunways[r]);J.landedRunways[n.id]=!0,J.discoveredRunways[n.id]=!0,D.sessionLandings+=1,D.sessionLandings>J.bestSessionLandings&&(J.bestSessionLandings=D.sessionLandings),Ry(),Ut(),NP(n),i&&n.id!==Qi&&(D.pendingAirportUnlock={id:n.id,full:!s})}function hI(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function fI(n){if(D.landedToastTimer>0){D.landedToastTimer-=n;return}if(D.cinematicT+=n/p0.tweenDuration,D.cinematicT>=1){fe.position.copy(D.cinematicToPos),fe.quaternion.copy(D.cinematicToQuat),D.cinematicT=0,D.cinematicFromPos=null,D.cinematicToPos=null,D.cinematicFromQuat=null,D.cinematicToQuat=null,D.flightState=Ge.PRELAUNCH,Dh(),Wc(),tu(),D.refillStartGrey=D.boostFuelGrey,D.refillStartOneshot=D.boostFuelOneshot,D.refillT=0,iu(),Ey(),D.pendingAirportUnlock&&(UP(D.pendingAirportUnlock.id,D.pendingAirportUnlock.full),D.pendingAirportUnlock=null);return}const e=hI(D.cinematicT);fe.position.lerpVectors(D.cinematicFromPos,D.cinematicToPos,e),fe.quaternion.copy(D.cinematicFromQuat)}function pI(n){if(D.alive&&!D.paused)switch(D.flightState){case Ge.INTRO:return sI(n);case Ge.PRELAUNCH:return rI(n);case Ge.TAKEOFF_ROLL:return oI(n);case Ge.FLYING:return cI(n);case Ge.LANDING_ROLL:return uI(n);case Ge.LANDED:return fI(n);case Ge.CRASHING:return eI(n);case Ge.CRASHED:return}}const mI=Dt;class Cc extends Jh{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,i,s){const r=this,o=new aT(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}parse(e){const t=this;function i(O,N){if(O.nodeType!==1)return;const C=S(O);let T=!1,ee=null;switch(O.nodeName){case"svg":N=g(O,N);break;case"style":r(O);break;case"g":N=g(O,N);break;case"path":N=g(O,N),O.hasAttribute("d")&&(ee=s(O));break;case"rect":N=g(O,N),ee=l(O);break;case"polygon":N=g(O,N),ee=c(O);break;case"polyline":N=g(O,N),ee=u(O);break;case"circle":N=g(O,N),ee=d(O);break;case"ellipse":N=g(O,N),ee=h(O);break;case"line":N=g(O,N),ee=m(O);break;case"defs":T=!0;break;case"use":N=g(O,N);const he=(O.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),P=O.viewportElement.getElementById(he);P?i(P,N):console.warn("SVGLoader: 'use node' references non-existent node id: "+he);break}ee&&(N.fill!==void 0&&N.fill!=="none"&&ee.color.setStyle(N.fill,mI),E(ee,de),W.push(ee),ee.userData={node:O,style:N});const ce=O.childNodes;for(let X=0;X<ce.length;X++){const he=ce[X];T&&he.nodeName!=="style"&&he.nodeName!=="defs"||i(he,N)}C&&(U.pop(),U.length>0?de.copy(U[U.length-1]):de.identity())}function s(O){const N=new Ss,C=new me,T=new me,ee=new me;let ce=!0,X=!1;const he=O.getAttribute("d");if(he===""||he==="none")return null;const P=he.match(/[a-df-z][^a-df-z]*/ig);for(let se=0,z=P.length;se<z;se++){const Y=P[se],j=Y.charAt(0),pe=Y.slice(1).trim();ce===!0&&(X=!0,ce=!1);let F;switch(j){case"M":F=p(pe);for(let x=0,M=F.length;x<M;x+=2)C.x=F[x+0],C.y=F[x+1],T.x=C.x,T.y=C.y,x===0?N.moveTo(C.x,C.y):N.lineTo(C.x,C.y),x===0&&ee.copy(C);break;case"H":F=p(pe);for(let x=0,M=F.length;x<M;x++)C.x=F[x],T.x=C.x,T.y=C.y,N.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"V":F=p(pe);for(let x=0,M=F.length;x<M;x++)C.y=F[x],T.x=C.x,T.y=C.y,N.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"L":F=p(pe);for(let x=0,M=F.length;x<M;x+=2)C.x=F[x+0],C.y=F[x+1],T.x=C.x,T.y=C.y,N.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"C":F=p(pe);for(let x=0,M=F.length;x<M;x+=6)N.bezierCurveTo(F[x+0],F[x+1],F[x+2],F[x+3],F[x+4],F[x+5]),T.x=F[x+2],T.y=F[x+3],C.x=F[x+4],C.y=F[x+5],x===0&&X===!0&&ee.copy(C);break;case"S":F=p(pe);for(let x=0,M=F.length;x<M;x+=4)N.bezierCurveTo(y(C.x,T.x),y(C.y,T.y),F[x+0],F[x+1],F[x+2],F[x+3]),T.x=F[x+0],T.y=F[x+1],C.x=F[x+2],C.y=F[x+3],x===0&&X===!0&&ee.copy(C);break;case"Q":F=p(pe);for(let x=0,M=F.length;x<M;x+=4)N.quadraticCurveTo(F[x+0],F[x+1],F[x+2],F[x+3]),T.x=F[x+0],T.y=F[x+1],C.x=F[x+2],C.y=F[x+3],x===0&&X===!0&&ee.copy(C);break;case"T":F=p(pe);for(let x=0,M=F.length;x<M;x+=2){const V=y(C.x,T.x),ge=y(C.y,T.y);N.quadraticCurveTo(V,ge,F[x+0],F[x+1]),T.x=V,T.y=ge,C.x=F[x+0],C.y=F[x+1],x===0&&X===!0&&ee.copy(C)}break;case"A":F=p(pe,[3,4],7);for(let x=0,M=F.length;x<M;x+=7){if(F[x+5]==C.x&&F[x+6]==C.y)continue;const V=C.clone();C.x=F[x+5],C.y=F[x+6],T.x=C.x,T.y=C.y,o(N,F[x],F[x+1],F[x+2],F[x+3],F[x+4],V,C),x===0&&X===!0&&ee.copy(C)}break;case"m":F=p(pe);for(let x=0,M=F.length;x<M;x+=2)C.x+=F[x+0],C.y+=F[x+1],T.x=C.x,T.y=C.y,x===0?N.moveTo(C.x,C.y):N.lineTo(C.x,C.y),x===0&&ee.copy(C);break;case"h":F=p(pe);for(let x=0,M=F.length;x<M;x++)C.x+=F[x],T.x=C.x,T.y=C.y,N.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"v":F=p(pe);for(let x=0,M=F.length;x<M;x++)C.y+=F[x],T.x=C.x,T.y=C.y,N.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"l":F=p(pe);for(let x=0,M=F.length;x<M;x+=2)C.x+=F[x+0],C.y+=F[x+1],T.x=C.x,T.y=C.y,N.lineTo(C.x,C.y),x===0&&X===!0&&ee.copy(C);break;case"c":F=p(pe);for(let x=0,M=F.length;x<M;x+=6)N.bezierCurveTo(C.x+F[x+0],C.y+F[x+1],C.x+F[x+2],C.y+F[x+3],C.x+F[x+4],C.y+F[x+5]),T.x=C.x+F[x+2],T.y=C.y+F[x+3],C.x+=F[x+4],C.y+=F[x+5],x===0&&X===!0&&ee.copy(C);break;case"s":F=p(pe);for(let x=0,M=F.length;x<M;x+=4)N.bezierCurveTo(y(C.x,T.x),y(C.y,T.y),C.x+F[x+0],C.y+F[x+1],C.x+F[x+2],C.y+F[x+3]),T.x=C.x+F[x+0],T.y=C.y+F[x+1],C.x+=F[x+2],C.y+=F[x+3],x===0&&X===!0&&ee.copy(C);break;case"q":F=p(pe);for(let x=0,M=F.length;x<M;x+=4)N.quadraticCurveTo(C.x+F[x+0],C.y+F[x+1],C.x+F[x+2],C.y+F[x+3]),T.x=C.x+F[x+0],T.y=C.y+F[x+1],C.x+=F[x+2],C.y+=F[x+3],x===0&&X===!0&&ee.copy(C);break;case"t":F=p(pe);for(let x=0,M=F.length;x<M;x+=2){const V=y(C.x,T.x),ge=y(C.y,T.y);N.quadraticCurveTo(V,ge,C.x+F[x+0],C.y+F[x+1]),T.x=V,T.y=ge,C.x=C.x+F[x+0],C.y=C.y+F[x+1],x===0&&X===!0&&ee.copy(C)}break;case"a":F=p(pe,[3,4],7);for(let x=0,M=F.length;x<M;x+=7){if(F[x+5]==0&&F[x+6]==0)continue;const V=C.clone();C.x+=F[x+5],C.y+=F[x+6],T.x=C.x,T.y=C.y,o(N,F[x],F[x+1],F[x+2],F[x+3],F[x+4],V,C),x===0&&X===!0&&ee.copy(C)}break;case"Z":case"z":N.currentPath.autoClose=!0,N.currentPath.curves.length>0&&(C.copy(ee),N.currentPath.currentPoint.copy(C),ce=!0);break;default:console.warn(Y)}X=!1}return N}function r(O){if(!(!O.sheet||!O.sheet.cssRules||!O.sheet.cssRules.length))for(let N=0;N<O.sheet.cssRules.length;N++){const C=O.sheet.cssRules[N];if(C.type!==1)continue;const T=C.selectorText.split(/,/gm).filter(Boolean).map(ee=>ee.trim());for(let ee=0;ee<T.length;ee++){const ce=Object.fromEntries(Object.entries(C.style).filter(([,X])=>X!==""));te[T[ee]]=Object.assign(te[T[ee]]||{},ce)}}}function o(O,N,C,T,ee,ce,X,he){if(N==0||C==0){O.lineTo(he.x,he.y);return}T=T*Math.PI/180,N=Math.abs(N),C=Math.abs(C);const P=(X.x-he.x)/2,se=(X.y-he.y)/2,z=Math.cos(T)*P+Math.sin(T)*se,Y=-Math.sin(T)*P+Math.cos(T)*se;let j=N*N,pe=C*C;const F=z*z,x=Y*Y,M=F/j+x/pe;if(M>1){const ye=Math.sqrt(M);N=ye*N,C=ye*C,j=N*N,pe=C*C}const V=j*x+pe*F,ge=(j*pe-V)/V;let ve=Math.sqrt(Math.max(0,ge));ee===ce&&(ve=-ve);const ue=ve*N*Y/C,Te=-ve*C*z/N,_e=Math.cos(T)*ue-Math.sin(T)*Te+(X.x+he.x)/2,Re=Math.sin(T)*ue+Math.cos(T)*Te+(X.y+he.y)/2,De=a(1,0,(z-ue)/N,(Y-Te)/C),Fe=a((z-ue)/N,(Y-Te)/C,(-z-ue)/N,(-Y-Te)/C)%(Math.PI*2);O.currentPath.absellipse(_e,Re,N,C,De,De+Fe,ce===0,T)}function a(O,N,C,T){const ee=O*C+N*T,ce=Math.sqrt(O*O+N*N)*Math.sqrt(C*C+T*T);let X=Math.acos(Math.max(-1,Math.min(1,ee/ce)));return O*T-N*C<0&&(X=-X),X}function l(O){const N=v(O.getAttribute("x")||0),C=v(O.getAttribute("y")||0),T=v(O.getAttribute("rx")||O.getAttribute("ry")||0),ee=v(O.getAttribute("ry")||O.getAttribute("rx")||0),ce=v(O.getAttribute("width")),X=v(O.getAttribute("height")),he=1-.551915024494,P=new Ss;return P.moveTo(N+T,C),P.lineTo(N+ce-T,C),(T!==0||ee!==0)&&P.bezierCurveTo(N+ce-T*he,C,N+ce,C+ee*he,N+ce,C+ee),P.lineTo(N+ce,C+X-ee),(T!==0||ee!==0)&&P.bezierCurveTo(N+ce,C+X-ee*he,N+ce-T*he,C+X,N+ce-T,C+X),P.lineTo(N+T,C+X),(T!==0||ee!==0)&&P.bezierCurveTo(N+T*he,C+X,N,C+X-ee*he,N,C+X-ee),P.lineTo(N,C+ee),(T!==0||ee!==0)&&P.bezierCurveTo(N,C+ee*he,N+T*he,C,N+T,C),P}function c(O){function N(ce,X,he){const P=v(X),se=v(he);ee===0?T.moveTo(P,se):T.lineTo(P,se),ee++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,T=new Ss;let ee=0;return O.getAttribute("points").replace(C,N),T.currentPath.autoClose=!0,T}function u(O){function N(ce,X,he){const P=v(X),se=v(he);ee===0?T.moveTo(P,se):T.lineTo(P,se),ee++}const C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,T=new Ss;let ee=0;return O.getAttribute("points").replace(C,N),T.currentPath.autoClose=!1,T}function d(O){const N=v(O.getAttribute("cx")||0),C=v(O.getAttribute("cy")||0),T=v(O.getAttribute("r")||0),ee=new jr;ee.absarc(N,C,T,0,Math.PI*2);const ce=new Ss;return ce.subPaths.push(ee),ce}function h(O){const N=v(O.getAttribute("cx")||0),C=v(O.getAttribute("cy")||0),T=v(O.getAttribute("rx")||0),ee=v(O.getAttribute("ry")||0),ce=new jr;ce.absellipse(N,C,T,ee,0,Math.PI*2);const X=new Ss;return X.subPaths.push(ce),X}function m(O){const N=v(O.getAttribute("x1")||0),C=v(O.getAttribute("y1")||0),T=v(O.getAttribute("x2")||0),ee=v(O.getAttribute("y2")||0),ce=new Ss;return ce.moveTo(N,C),ce.lineTo(T,ee),ce.currentPath.autoClose=!1,ce}function g(O,N){N=Object.assign({},N);let C={};if(O.hasAttribute("class")){const X=O.getAttribute("class").split(/\s/).filter(Boolean).map(he=>he.trim());for(let he=0;he<X.length;he++)C=Object.assign(C,te["."+X[he]])}O.hasAttribute("id")&&(C=Object.assign(C,te["#"+O.getAttribute("id")]));function T(X,he,P){P===void 0&&(P=function(z){return z.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),z}),O.hasAttribute(X)&&(N[he]=P(O.getAttribute(X))),C[X]&&(N[he]=P(C[X])),O.style&&O.style[X]!==""&&(N[he]=P(O.style[X]))}function ee(X){return Math.max(0,Math.min(1,v(X)))}function ce(X){return Math.max(0,v(X))}return T("fill","fill"),T("fill-opacity","fillOpacity",ee),T("fill-rule","fillRule"),T("opacity","opacity",ee),T("stroke","stroke"),T("stroke-opacity","strokeOpacity",ee),T("stroke-width","strokeWidth",ce),T("stroke-linejoin","strokeLineJoin"),T("stroke-linecap","strokeLineCap"),T("stroke-miterlimit","strokeMiterLimit",ce),T("visibility","visibility"),N}function y(O,N){return O-(N-O)}function p(O,N,C){if(typeof O!="string")throw new TypeError("Invalid input: "+typeof O);const T={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},ee=0,ce=1,X=2,he=3;let P=ee,se=!0,z="",Y="";const j=[];function pe(V,ge,ve){const ue=new SyntaxError('Unexpected character "'+V+'" at index '+ge+".");throw ue.partial=ve,ue}function F(){z!==""&&(Y===""?j.push(Number(z)):j.push(Number(z)*Math.pow(10,Number(Y)))),z="",Y=""}let x;const M=O.length;for(let V=0;V<M;V++){if(x=O[V],Array.isArray(N)&&N.includes(j.length%C)&&T.FLAGS.test(x)){P=ce,z=x,F();continue}if(P===ee){if(T.WHITESPACE.test(x))continue;if(T.DIGIT.test(x)||T.SIGN.test(x)){P=ce,z=x;continue}if(T.POINT.test(x)){P=X,z=x;continue}T.COMMA.test(x)&&(se&&pe(x,V,j),se=!0)}if(P===ce){if(T.DIGIT.test(x)){z+=x;continue}if(T.POINT.test(x)){z+=x,P=X;continue}if(T.EXP.test(x)){P=he;continue}T.SIGN.test(x)&&z.length===1&&T.SIGN.test(z[0])&&pe(x,V,j)}if(P===X){if(T.DIGIT.test(x)){z+=x;continue}if(T.EXP.test(x)){P=he;continue}T.POINT.test(x)&&z[z.length-1]==="."&&pe(x,V,j)}if(P===he){if(T.DIGIT.test(x)){Y+=x;continue}if(T.SIGN.test(x)){if(Y===""){Y+=x;continue}Y.length===1&&T.SIGN.test(Y)&&pe(x,V,j)}}T.WHITESPACE.test(x)?(F(),P=ee,se=!1):T.COMMA.test(x)?(F(),P=ee,se=!0):T.SIGN.test(x)?(F(),P=ce,z=x):T.POINT.test(x)?(F(),P=X,z=x):pe(x,V,j)}return F(),j}const f=["mm","cm","in","pt","pc","px"],_={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function v(O){let N="px";if(typeof O=="string"||O instanceof String)for(let T=0,ee=f.length;T<ee;T++){const ce=f[T];if(O.endsWith(ce)){N=ce,O=O.substring(0,O.length-ce.length);break}}let C;return N==="px"&&t.defaultUnit!=="px"?C=_.in[t.defaultUnit]/t.defaultDPI:(C=_[N][t.defaultUnit],C<0&&(C=_[N].in*t.defaultDPI)),C*parseFloat(O)}function S(O){if(!(O.hasAttribute("transform")||O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))))return null;const N=R(O);return U.length>0&&N.premultiply(U[U.length-1]),de.copy(N),U.push(N),N}function R(O){const N=new He,C=q;if(O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))){const T=v(O.getAttribute("x")),ee=v(O.getAttribute("y"));N.translate(T,ee)}if(O.hasAttribute("transform")){const T=O.getAttribute("transform").split(")");for(let ee=T.length-1;ee>=0;ee--){const ce=T[ee].trim();if(ce==="")continue;const X=ce.indexOf("("),he=ce.length;if(X>0&&X<he){const P=ce.slice(0,X),se=p(ce.slice(X+1));switch(C.identity(),P){case"translate":if(se.length>=1){const z=se[0];let Y=0;se.length>=2&&(Y=se[1]),C.translate(z,Y)}break;case"rotate":if(se.length>=1){let z=0,Y=0,j=0;z=se[0]*Math.PI/180,se.length>=3&&(Y=se[1],j=se[2]),$.makeTranslation(-Y,-j),K.makeRotation(z),B.multiplyMatrices(K,$),$.makeTranslation(Y,j),C.multiplyMatrices($,B)}break;case"scale":if(se.length>=1){const z=se[0];let Y=z;se.length>=2&&(Y=se[1]),C.scale(z,Y)}break;case"skewX":se.length===1&&C.set(1,Math.tan(se[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":se.length===1&&C.set(1,0,0,Math.tan(se[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":se.length===6&&C.set(se[0],se[2],se[4],se[1],se[3],se[5],0,0,1);break}}N.premultiply(C)}}return N}function E(O,N){function C(X){le.set(X.x,X.y,1).applyMatrix3(N),X.set(le.x,le.y)}function T(X){const he=X.xRadius,P=X.yRadius,se=Math.cos(X.aRotation),z=Math.sin(X.aRotation),Y=new I(he*se,he*z,0),j=new I(-P*z,P*se,0),pe=Y.applyMatrix3(N),F=j.applyMatrix3(N),x=q.set(pe.x,F.x,0,pe.y,F.y,0,0,0,1),M=$.copy(x).invert(),ve=K.copy(M).transpose().multiply(M).elements,ue=G(ve[0],ve[1],ve[4]),Te=Math.sqrt(ue.rt1),_e=Math.sqrt(ue.rt2);if(X.xRadius=1/Te,X.yRadius=1/_e,X.aRotation=Math.atan2(ue.sn,ue.cs),!((X.aEndAngle-X.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const De=$.set(Te,0,0,0,_e,0,0,0,1),Fe=K.set(ue.cs,ue.sn,0,-ue.sn,ue.cs,0,0,0,1),ye=De.multiply(Fe).multiply(x),Qe=qe=>{const{x:ze,y:Ne}=new I(Math.cos(qe),Math.sin(qe),0).applyMatrix3(ye);return Math.atan2(Ne,ze)};X.aStartAngle=Qe(X.aStartAngle),X.aEndAngle=Qe(X.aEndAngle),A(N)&&(X.aClockwise=!X.aClockwise)}}function ee(X){const he=b(N),P=w(N);X.xRadius*=he,X.yRadius*=P;const se=he>Number.EPSILON?Math.atan2(N.elements[1],N.elements[0]):Math.atan2(-N.elements[3],N.elements[4]);X.aRotation+=se,A(N)&&(X.aStartAngle*=-1,X.aEndAngle*=-1,X.aClockwise=!X.aClockwise)}const ce=O.subPaths;for(let X=0,he=ce.length;X<he;X++){const se=ce[X].curves;for(let z=0;z<se.length;z++){const Y=se[z];Y.isLineCurve?(C(Y.v1),C(Y.v2)):Y.isCubicBezierCurve?(C(Y.v0),C(Y.v1),C(Y.v2),C(Y.v3)):Y.isQuadraticBezierCurve?(C(Y.v0),C(Y.v1),C(Y.v2)):Y.isEllipseCurve&&(Q.set(Y.aX,Y.aY),C(Q),Y.aX=Q.x,Y.aY=Q.y,k(N)?T(Y):ee(Y))}}}function A(O){const N=O.elements;return N[0]*N[4]-N[1]*N[3]<0}function k(O){const N=O.elements,C=N[0]*N[3]+N[1]*N[4];if(C===0)return!1;const T=b(O),ee=w(O);return Math.abs(C/(T*ee))>Number.EPSILON}function b(O){const N=O.elements;return Math.sqrt(N[0]*N[0]+N[1]*N[1])}function w(O){const N=O.elements;return Math.sqrt(N[3]*N[3]+N[4]*N[4])}function G(O,N,C){let T,ee,ce,X,he;const P=O+C,se=O-C,z=Math.sqrt(se*se+4*N*N);return P>0?(T=.5*(P+z),he=1/T,ee=O*he*C-N*he*N):P<0?ee=.5*(P-z):(T=.5*z,ee=-.5*z),se>0?ce=se+z:ce=se-z,Math.abs(ce)>2*Math.abs(N)?(he=-2*N/ce,X=1/Math.sqrt(1+he*he),ce=he*X):Math.abs(N)===0?(ce=1,X=0):(he=-.5*ce/N,ce=1/Math.sqrt(1+he*he),X=he*ce),se>0&&(he=ce,ce=-X,X=he),{rt1:T,rt2:ee,cs:ce,sn:X}}const W=[],te={},U=[],q=new He,$=new He,K=new He,B=new He,Q=new me,le=new I,de=new He,xe=new DOMParser().parseFromString(e,"image/svg+xml");return i(xe.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:W,xml:xe.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:i.ORIGIN,t:0};function r(y,p,f,_){const v=y.x,S=p.x,R=f.x,E=_.x,A=y.y,k=p.y,b=f.y,w=_.y,G=(E-R)*(A-b)-(w-b)*(v-R),W=(S-v)*(A-b)-(k-A)*(v-R),te=(w-b)*(S-v)-(E-R)*(k-A),U=G/te,q=W/te;if(te===0&&G!==0||U<=0||U>=1||q<0||q>1)return null;if(G===0&&te===0){for(let $=0;$<2;$++)if(o($===0?f:_,y,p),s.loc==i.ORIGIN){const K=$===0?f:_;return{x:K.x,y:K.y,t:s.t}}else if(s.loc==i.BETWEEN){const K=+(v+s.t*(S-v)).toPrecision(10),B=+(A+s.t*(k-A)).toPrecision(10);return{x:K,y:B,t:s.t}}return null}else{for(let B=0;B<2;B++)if(o(B===0?f:_,y,p),s.loc==i.ORIGIN){const Q=B===0?f:_;return{x:Q.x,y:Q.y,t:s.t}}const $=+(v+U*(S-v)).toPrecision(10),K=+(A+U*(k-A)).toPrecision(10);return{x:$,y:K,t:U}}}function o(y,p,f){const _=f.x-p.x,v=f.y-p.y,S=y.x-p.x,R=y.y-p.y,E=_*R-S*v;if(y.x===p.x&&y.y===p.y){s.loc=i.ORIGIN,s.t=0;return}if(y.x===f.x&&y.y===f.y){s.loc=i.DESTINATION,s.t=1;return}if(E<-Number.EPSILON){s.loc=i.LEFT;return}if(E>Number.EPSILON){s.loc=i.RIGHT;return}if(_*S<0||v*R<0){s.loc=i.BEHIND;return}if(Math.sqrt(_*_+v*v)<Math.sqrt(S*S+R*R)){s.loc=i.BEYOND;return}let A;_!==0?A=S/_:A=R/v,s.loc=i.BETWEEN,s.t=A}function a(y,p){const f=[],_=[];for(let v=1;v<y.length;v++){const S=y[v-1],R=y[v];for(let E=1;E<p.length;E++){const A=p[E-1],k=p[E],b=r(S,R,A,k);b!==null&&f.find(w=>w.t<=b.t+Number.EPSILON&&w.t>=b.t-Number.EPSILON)===void 0&&(f.push(b),_.push(new me(b.x,b.y)))}}return _}function l(y,p,f){const _=new me;p.getCenter(_);const v=[];return f.forEach(S=>{S.boundingBox.containsPoint(_)&&a(y,S.points).forEach(E=>{v.push({identifier:S.identifier,isCW:S.isCW,point:E})})}),v.sort((S,R)=>S.point.x-R.point.x),v}function c(y,p,f,_,v){(v==null||v==="")&&(v="nonzero");const S=new me;y.boundingBox.getCenter(S);const R=[new me(f,S.y),new me(_,S.y)],E=l(R,y.boundingBox,p);E.sort((W,te)=>W.point.x-te.point.x);const A=[],k=[];E.forEach(W=>{W.identifier===y.identifier?A.push(W):k.push(W)});const b=A[0].point.x,w=[];let G=0;for(;G<k.length&&k[G].point.x<b;)w.length>0&&w[w.length-1]===k[G].identifier?w.pop():w.push(k[G].identifier),G++;if(w.push(y.identifier),v==="evenodd"){const W=w.length%2===0,te=w[w.length-2];return{identifier:y.identifier,isHole:W,for:te}}else if(v==="nonzero"){let W=!0,te=null,U=null;for(let q=0;q<w.length;q++){const $=w[q];W?(U=p[$].isCW,W=!1,te=$):U!==p[$].isCW&&(U=p[$].isCW,W=!0)}return{identifier:y.identifier,isHole:W,for:te}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let u=999999999,d=-999999999,h=e.subPaths.map(y=>{const p=y.getPoints();let f=-999999999,_=999999999,v=-999999999,S=999999999;for(let R=0;R<p.length;R++){const E=p[R];E.y>f&&(f=E.y),E.y<_&&(_=E.y),E.x>v&&(v=E.x),E.x<S&&(S=E.x)}return d<=v&&(d=v+1),u>=S&&(u=S-1),{curves:y.curves,points:p,isCW:pi.isClockWise(p),identifier:-1,boundingBox:new hT(new me(S,_),new me(v,f))}});h=h.filter(y=>y.points.length>1);for(let y=0;y<h.length;y++)h[y].identifier=y;const m=h.map(y=>c(y,h,u,d,e.userData?e.userData.style.fillRule:void 0)),g=[];return h.forEach(y=>{if(!m[y.identifier].isHole){const f=new Vs;f.curves=y.curves,m.filter(v=>v.isHole&&v.for===y.identifier).forEach(v=>{const S=h[v.identifier],R=new jr;R.curves=S.curves,f.holes.push(R)}),g.push(f)}}),g}static getStrokeStyle(e,t,i,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",i=i!==void 0?i:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:i,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,i,s){const r=[],o=[],a=[];if(Cc.pointsToStrokeWithBuffers(e,t,i,s,r,o,a)===0)return null;const l=new vt;return l.setAttribute("position",new et(r,3)),l.setAttribute("normal",new et(o,3)),l.setAttribute("uv",new et(a,2)),l}static pointsToStrokeWithBuffers(e,t,i,s,r,o,a,l){const c=new me,u=new me,d=new me,h=new me,m=new me,g=new me,y=new me,p=new me,f=new me,_=new me,v=new me,S=new me,R=new me,E=new me,A=new me,k=new me,b=new me;i=i!==void 0?i:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,e=se(e);const w=e.length;if(w<2)return 0;const G=e[0].equals(e[w-1]);let W,te=e[0],U;const q=t.strokeWidth/2,$=1/(w-1);let K=0,B,Q,le,de,xe=!1,ne=0,O=l*3,N=l*2;C(e[0],e[1],c).multiplyScalar(q),p.copy(e[0]).sub(c),f.copy(e[0]).add(c),_.copy(p),v.copy(f);for(let z=1;z<w;z++){W=e[z],z===w-1?G?U=e[1]:U=void 0:U=e[z+1];const Y=c;if(C(te,W,Y),d.copy(Y).multiplyScalar(q),S.copy(W).sub(d),R.copy(W).add(d),B=K+$,Q=!1,U!==void 0){C(W,U,u),d.copy(u).multiplyScalar(q),E.copy(W).sub(d),A.copy(W).add(d),le=!0,d.subVectors(U,te),Y.dot(d)<0&&(le=!1),z===1&&(xe=le),d.subVectors(U,W),d.normalize();const j=Math.abs(Y.dot(d));if(j>Number.EPSILON){const pe=q/j;d.multiplyScalar(-pe),h.subVectors(W,te),m.copy(h).setLength(pe).add(d),k.copy(m).negate();const F=m.length(),x=h.length();h.divideScalar(x),g.subVectors(U,W);const M=g.length();switch(g.divideScalar(M),h.dot(k)<x&&g.dot(k)<M&&(Q=!0),b.copy(m).add(W),k.add(W),de=!1,Q?le?(A.copy(k),R.copy(k)):(E.copy(k),S.copy(k)):ce(),t.strokeLineJoin){case"bevel":X(le,Q,B);break;case"round":he(le,Q),le?ee(W,S,E,B,0):ee(W,A,R,B,1);break;case"miter":case"miter-clip":default:const V=q*t.strokeMiterLimit/F;if(V<1)if(t.strokeLineJoin!=="miter-clip"){X(le,Q,B);break}else he(le,Q),le?(g.subVectors(b,S).multiplyScalar(V).add(S),y.subVectors(b,E).multiplyScalar(V).add(E),T(S,B,0),T(g,B,0),T(W,B,.5),T(W,B,.5),T(g,B,0),T(y,B,0),T(W,B,.5),T(y,B,0),T(E,B,0)):(g.subVectors(b,R).multiplyScalar(V).add(R),y.subVectors(b,A).multiplyScalar(V).add(A),T(R,B,1),T(g,B,1),T(W,B,.5),T(W,B,.5),T(g,B,1),T(y,B,1),T(W,B,.5),T(y,B,1),T(A,B,1));else Q?(le?(T(f,K,1),T(p,K,0),T(b,B,0),T(f,K,1),T(b,B,0),T(k,B,1)):(T(f,K,1),T(p,K,0),T(b,B,1),T(p,K,0),T(k,B,0),T(b,B,1)),le?E.copy(b):A.copy(b)):le?(T(S,B,0),T(b,B,0),T(W,B,.5),T(W,B,.5),T(b,B,0),T(E,B,0)):(T(R,B,1),T(b,B,1),T(W,B,.5),T(W,B,.5),T(b,B,1),T(A,B,1)),de=!0;break}}else ce()}else ce();!G&&z===w-1&&P(e[0],_,v,le,!0,K),K=B,te=W,p.copy(E),f.copy(A)}if(!G)P(W,S,R,le,!1,B);else if(Q&&r){let z=b,Y=k;xe!==le&&(z=k,Y=b),le?(de||xe)&&(Y.toArray(r,0*3),Y.toArray(r,3*3),de&&z.toArray(r,1*3)):(de||!xe)&&(Y.toArray(r,1*3),Y.toArray(r,3*3),de&&z.toArray(r,0*3))}return ne;function C(z,Y,j){return j.subVectors(Y,z),j.set(-j.y,j.x).normalize()}function T(z,Y,j){r&&(r[O]=z.x,r[O+1]=z.y,r[O+2]=0,o&&(o[O]=0,o[O+1]=0,o[O+2]=1),O+=3,a&&(a[N]=Y,a[N+1]=j,N+=2)),ne+=3}function ee(z,Y,j,pe,F){c.copy(Y).sub(z).normalize(),u.copy(j).sub(z).normalize();let x=Math.PI;const M=c.dot(u);Math.abs(M)<1&&(x=Math.abs(Math.acos(M))),x/=i,d.copy(Y);for(let V=0,ge=i-1;V<ge;V++)h.copy(d).rotateAround(z,x),T(d,pe,F),T(h,pe,F),T(z,pe,.5),d.copy(h);T(h,pe,F),T(j,pe,F),T(z,pe,.5)}function ce(){T(f,K,1),T(p,K,0),T(S,B,0),T(f,K,1),T(S,B,1),T(R,B,0)}function X(z,Y,j){Y?z?(T(f,K,1),T(p,K,0),T(S,B,0),T(f,K,1),T(S,B,0),T(k,B,1),T(S,j,0),T(E,j,0),T(k,j,.5)):(T(f,K,1),T(p,K,0),T(R,B,1),T(p,K,0),T(k,B,0),T(R,B,1),T(R,j,1),T(k,j,0),T(A,j,1)):z?(T(S,j,0),T(E,j,0),T(W,j,.5)):(T(R,j,1),T(A,j,0),T(W,j,.5))}function he(z,Y){Y&&(z?(T(f,K,1),T(p,K,0),T(S,B,0),T(f,K,1),T(S,B,0),T(k,B,1),T(S,K,0),T(W,B,.5),T(k,B,1),T(W,B,.5),T(E,K,0),T(k,B,1)):(T(f,K,1),T(p,K,0),T(R,B,1),T(p,K,0),T(k,B,0),T(R,B,1),T(R,K,1),T(k,B,0),T(W,B,.5),T(W,B,.5),T(k,B,0),T(A,K,1)))}function P(z,Y,j,pe,F,x){switch(t.strokeLineCap){case"round":F?ee(z,j,Y,x,.5):ee(z,Y,j,x,.5);break;case"square":if(F)c.subVectors(Y,z),u.set(c.y,-c.x),d.addVectors(c,u).add(z),h.subVectors(u,c).add(z),pe?(d.toArray(r,1*3),h.toArray(r,0*3),h.toArray(r,3*3)):(d.toArray(r,1*3),d.toArray(r,3*3),h.toArray(r,0*3));else{c.subVectors(j,z),u.set(c.y,-c.x),d.addVectors(c,u).add(z),h.subVectors(u,c).add(z);const M=r.length;pe?(d.toArray(r,M-1*3),h.toArray(r,M-2*3),h.toArray(r,M-4*3)):(h.toArray(r,M-2*3),d.toArray(r,M-1*3),h.toArray(r,M-4*3))}break}}function se(z){let Y=!1;for(let pe=1,F=z.length-1;pe<F;pe++)if(z[pe].distanceTo(z[pe+1])<s){Y=!0;break}if(!Y)return z;const j=[];j.push(z[0]);for(let pe=1,F=z.length-1;pe<F;pe++)z[pe].distanceTo(z[pe+1])>=s&&j.push(z[pe]);return j.push(z[z.length-1]),j}}}const gI={[ie.PEAK]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-390Zm-132-53 55 37 77-39 77 39 53-35-40-79H386l-38 77ZM209-160h541L646-369l-83 55-83-41-83 41-85-56-103 210ZM80-80l234-475q10-20 29.5-32.5T386-600h54v-280h280l-40 80 40 80H520v120h50q23 0 42 12t30 32L880-80H80Z"/></svg>',[ie.CITY]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>',[ie.LANDSCAPE]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m40-240 240-320 180 240h300L560-586 460-454l-50-66 150-200 360 480H40Zm521-80Zm-361 0h160l-80-107-80 107Zm0 0h160-160Z"/></svg>',[ie.BEACH]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 530-374l56-56 254 254-56 56Zm-546-28q-60-60-89-135t-29-153q0-78 29-152t89-134q60-60 134.5-89.5T525-841q78 0 152.5 29.5T812-722L238-148Zm8-122 54-54q-16-21-30.5-43T243-411q-12-22-21-44t-16-43q-11 59-1.5 118T246-270Zm112-110 222-224q-43-33-86.5-53.5t-81.5-28q-38-7.5-68.5-2.5T296-666q-17 18-22 48.5t2.5 69q7.5 38.5 28 81.5t53.5 87Zm278-280 56-54q-53-32-112-42t-118 2q22 7 44 16t44 20.5q22 11.5 43.5 26T636-660Z"/></svg>'},Ly=[];let Us=null,Ps=null,xh=null;function Py(n){xh&&(xh.visible=!!n)}const Fs=new Je,Rl=new At,Fg=new I,zg=new I(1,1,1),Bg=new I(0,1,0),Gr=new Ae;function vI(){return new Jc(ht.ring.majorRadius,ht.ring.tubeRadius,10,48)}const Iy={};function yI(){const n=new Cc,e=ht.symbol.size/960,t=ht.symbol.extrudeDepth/e;for(const[i,s]of Object.entries(gI)){const r=n.parse(s),o=[];for(const l of r.paths)o.push(...Cc.createShapes(l));const a=new Kh(o,{depth:t,bevelEnabled:!1});a.scale(1,-1,1),a.center(),a.scale(e,e,e),Iy[i]=a}}function xI(){yI();const n=vI(),e=new ct;xh=e;const t={};for(const o of On)t[o.type]=(t[o.type]||0)+1;const i=Kd(new Hn({transparent:!0}));Zd(n,On.length,ht.ring.opacity);const s=new tn(n,i,On.length);s.frustumCulled=!1,e.add(s),Us=s;const r=Kd(new ut({transparent:!0,flatShading:!0,side:$t}));Ps={};for(const o of Object.keys(t)){const a=Iy[o];Zd(a,t[o],.95);const l=new tn(a,r,t[o]);l.frustumCulled=!1,e.add(l),Ps[o]={mesh:l,next:0}}for(let o=0;o<On.length;o++){const a=On[o],l=ht.colorsByType[a.type],u=xn(a.x,a.z)+ht.ring.hoverHeight,d=Ps[a.type],h=d.next++;Fs.makeTranslation(a.x,u,a.z),s.setMatrixAt(o,Fs),d.mesh.setMatrixAt(h,Fs),s.setColorAt(o,Gr.setHex(l.ring)),d.mesh.setColorAt(h,Gr.setHex(l.symbol)),Ly.push({poi:a,ringIndex:o,symbolMesh:d.mesh,symbolIndex:h,ringAlpha:n.attributes.instanceAlpha.array,symbolAlpha:d.mesh.geometry.attributes.instanceAlpha.array,x:a.x,y:u,z:a.z,spin:0,frozen:!1,wasInsideZone:!1,appliedActivated:null})}s.instanceMatrix.needsUpdate=!0,s.instanceColor.needsUpdate=!0;for(const o of Object.keys(Ps)){const a=Ps[o].mesh;a.instanceMatrix.needsUpdate=!0,a.instanceColor.needsUpdate=!0}return e}function _I(n,e){const t=e.x-n.x,i=e.y-n.y,s=e.z-n.z;return t*t+i*i+s*s<=ht.activation.radius*ht.activation.radius}function bI(){const n=m0(Ph()),e=J.oneShotTier|0;return n>e?(J.oneShotTier=n,n):0}function SI(n){const e=ht.rewardsByType[n.type];if(J.testMode){Ag(n.name,e.punkte,e.gofios,0);return}const t=!!J.exploredPOIs[n.id];Gc(e.punkte);let i=0,s=0;t||(J.exploredPOIs[n.id]=!0,J.gofiosByIsland[n.island]=(J.gofiosByIsland[n.island]|0)+e.gofios,i=e.gofios,s=bI()),Ag(n.name,e.punkte,i,s),Ut()}function MI(n,e){if(e)Us.setColorAt(n.ringIndex,Gr.setHex(ht.ring.colorActivated)),n.ringAlpha[n.ringIndex]=ht.ring.opacityActivated,n.symbolMesh.setColorAt(n.symbolIndex,Gr.setHex(ht.symbol.colorActivated)),n.symbolAlpha[n.symbolIndex]=.55;else{const t=ht.colorsByType[n.poi.type];Us.setColorAt(n.ringIndex,Gr.setHex(t.ring)),n.ringAlpha[n.ringIndex]=ht.ring.opacity,n.symbolMesh.setColorAt(n.symbolIndex,Gr.setHex(t.symbol)),n.symbolAlpha[n.symbolIndex]=.95}Us.instanceColor.needsUpdate=!0,Us.geometry.attributes.instanceAlpha.needsUpdate=!0,n.symbolMesh.instanceColor.needsUpdate=!0,n.symbolMesh.geometry.attributes.instanceAlpha.needsUpdate=!0,n.frozen=e}function wI(n,e){if(D.tutorial){vh();return}const t=e.position,i=yx(t);if(i!==J.currentIsland){if(J.currentIsland=i,!J.testMode&&!J.visitedIslands[i]){J.visitedIslands[i]=!0,J.obsidian=(J.obsidian|0)+Jl.islandDiscoveryDiamonds;const o=bt.find(a=>a.id===i);kP(o?o.name:i,Jl.islandDiscoveryDiamonds)}Ut()}let s=null,r=ht.hoverLabelRadius*ht.hoverLabelRadius;for(const o of Ly){const a=!J.testMode&&!!J.exploredPOIs[o.poi.id];a!==o.appliedActivated&&(MI(o,a),o.appliedActivated=a);const l=Math.atan2(t.x-o.x,t.z-o.z);Rl.setFromAxisAngle(Bg,l),Fs.compose(Fg.set(o.x,o.y,o.z),Rl,zg),Us.setMatrixAt(o.ringIndex,Fs),o.frozen||(o.spin+=ht.symbol.rotRate*n),Rl.setFromAxisAngle(Bg,l+o.spin),Fs.compose(Fg.set(o.x,o.y,o.z),Rl,zg),o.symbolMesh.setMatrixAt(o.symbolIndex,Fs);const c=_I(o,t);if(c&&!o.wasInsideZone&&SI(o.poi),o.wasInsideZone=c,J.exploredPOIs[o.poi.id]){const u=t.x-o.poi.x,d=t.z-o.poi.z,h=u*u+d*d;h<r&&(r=h,s=o.poi)}}Us.instanceMatrix.needsUpdate=!0;for(const o of Object.keys(Ps))Ps[o].mesh.instanceMatrix.needsUpdate=!0;s?zP(s.name):vh()}const wt={LAUNCH:0,NAV:1,RINGS:2,GREY_BOOST:3,THERMAL:4,RING_HIGH:5,RING_LOW:6,END:7},Vr=[{key:"tutorial.navLeft",test:n=>n.roll<=-.45,invert:!1},{key:"tutorial.navRight",test:n=>n.roll>=it.navThreshold,invert:!1},{key:"tutorial.navUp",test:n=>n.pitch>=it.navThreshold,invert:!0},{key:"tutorial.navDown",test:n=>n.pitch<=-.45,invert:!0}],Li=document.getElementById("tutorial-layer"),Cl=document.getElementById("tutorial-banner"),Hg=document.getElementById("tutorial-text"),Gg=document.getElementById("tutorial-invert"),ca=document.getElementById("tutorial-invert-toggle"),yo=document.getElementById("tutorial-skip"),Go=document.getElementById("tutorial-flash"),Vg=document.getElementById("tutorial-steer-hint"),Ii=document.getElementById("tutorial-end"),Wg=document.getElementById("tutorial-end-go");let tr=!1,_n=wt.LAUNCH,As=null,Nr=0,Ko=0,Zo=0,Xs=null;const Ji=new I,ls=new I(0,0,-1),bd=new I(1,0,0),Mf=new I(0,0,-1),Qr={pos:new I,quat:new At,state:"PRELAUNCH"};let _h="",Dy=null,zs=null,gt=[],mi=null,ua=null,Lc=[];const eo={x:0,z:0,radius:it.thermal.radius,strength:it.thermal.strength,baseElevation:0},on=new I,qg=new At,EI=new I(0,1,0),Is=new I(0,0,-1),Cr=new I(0,0,-1),AI=[85,175,300,420,500];function Ny(){return 3046806}function TI(){const n=new ct,e=new Jc(3.4,.2,10,40);gt=[];for(let t=0;t<4;t++){const i=new Hn({color:Ny(),transparent:!0,opacity:.95}),s=new tt(e,i);s.visible=!1,n.add(s),gt.push({mesh:s,mat:i,pos:new I,collected:!1,popT:1,forward:0})}return mi=RI(),mi.visible=!1,n.add(mi),n}function RI(){const n=new ct,e=it.thermal,t=gn.columnTop,i=new Hn({color:13625071,transparent:!0,opacity:.18,side:$t,depthWrite:!1}),s=new zn(e.radius*1.05,e.radius*.55,t,24,1,!0);s.translate(0,t/2,0),n.add(new tt(s,i));const r=64,o=new Float32Array(r*3);Lc=[];for(let c=0;c<r;c++){const u=Math.random()*Math.PI*2,d=Math.sqrt(Math.random())*e.radius*.82;Lc.push({ux:Math.cos(u)*d,uz:Math.sin(u)*d,phase:Math.random()})}const a=new vt;a.setAttribute("position",new Pt(o,3));const l=new rv({color:16777215,size:1.7,transparent:!0,opacity:.6,depthWrite:!1});return ua=new ov(a,l),n.add(ua),n}function CI(){zs||(zs=TI()),zs.parent||St.add(zs)}function ky(){for(const n of gt)n.mesh.visible=!1;mi&&(mi.visible=!1)}function LI(n){let e=-1/0;for(const t of AI){const i=xn(Ji.x+n.x*t,Ji.z+n.z*t);i>e&&(e=i)}return e}function PI(){const n=Pe.waterLevel+it.corridorClearHeight,e=Math.max(1,it.corridorSearchSteps);let t=1/0;ls.copy(Is);for(let i=0;i<=e;i++){if(Cr.copy(Is).lerp(Mf,i/e),Cr.lengthSq()<1e-4)continue;Cr.normalize();const s=LI(Cr);if(s<n){ls.copy(Cr);return}s<t&&(t=s,ls.copy(Cr))}}function II(){Ji.copy(fe.position),on.set(0,0,-1).applyQuaternion(fe.quaternion),Is.set(on.x,0,on.z),Is.lengthSq()<1e-4&&Is.set(0,0,-1),Is.normalize(),Is.addScaledVector(Mf,it.seawardBias).normalize(),PI(),bd.crossVectors(ls,Xd).normalize();const n=Ji.y,e=[it.ring1,it.ring2,it.ring3,it.ring4];for(let s=0;s<4;s++){const r=e[s];on.copy(Ji).addScaledVector(ls,r.forward).addScaledVector(bd,r.side);const o=xn(on.x,on.z),a=Math.max(o,Pe.waterLevel)+it.ringClearance,l=Math.max(n+r.dy,a);gt[s].pos.set(on.x,l,on.z),gt[s].mesh.position.copy(gt[s].pos),gt[s].forward=r.forward}const t=it.thermal;on.copy(Ji).addScaledVector(ls,t.forward).addScaledVector(bd,t.side);const i=Math.max(xn(on.x,on.z),Pe.waterLevel);eo.x=on.x,eo.z=on.z,eo.baseElevation=i,mi.position.set(on.x,i,on.z)}function wf(){return(fe.position.x-Ji.x)*ls.x+(fe.position.z-Ji.z)*ls.z}function DI(n){for(const e of gt){if(!e.mesh.visible)continue;const t=Math.atan2(fe.position.x-e.pos.x,fe.position.z-e.pos.z);if(qg.setFromAxisAngle(EI,t),e.mesh.quaternion.copy(qg),e.popT<1){e.popT=Math.min(1,e.popT+n*2.2);const i=1+e.popT*.7;e.mesh.scale.setScalar(i),e.mat.opacity=.95*(1-e.popT),e.popT>=1&&(e.mesh.visible=!1)}}if(mi&&mi.visible&&ua){const e=ua.geometry.attributes.position.array,t=gn.columnTop;for(let i=0;i<Lc.length;i++){const s=Lc[i];s.phase+=n*.28,s.phase>=1&&(s.phase-=1),e[i*3]=s.ux,e[i*3+1]=s.phase*t,e[i*3+2]=s.uz}ua.geometry.attributes.position.needsUpdate=!0}}function js(n){const e=gt[n];e.collected=!1,e.popT=1,e.mesh.scale.setScalar(1),e.mat.color.setHex(Ny()),e.mat.opacity=.95,e.mesh.visible=!0}function Oy(n){const e=gt[n];e.collected=!1,e.popT=1,e.mesh.scale.setScalar(1),e.mat.color.setHex(8293522),e.mat.opacity=.4,e.mesh.visible=!0}function Uy(){Hg&&(Hg.textContent=_h?Ee(_h,Dy||void 0):"")}function ms(n,e=null){_h=n,Dy=e,Uy(),Cl&&(Cl.classList.remove("step-pop"),Cl.offsetWidth,Cl.classList.add("step-pop"))}function ou(n){Gg&&(Gg.hidden=!n,n&&ca&&(ca.checked=Wv()))}function bh(n){Vg&&Vg.classList.toggle("show",!!n)}function NI(n){Go&&(Go.textContent=n,Go.classList.remove("show"),Go.offsetWidth,Go.classList.add("show"))}function ur(n){Qr.pos.copy(fe.position),Qr.quat.copy(fe.quaternion),Qr.state=n}function kI(){if(Qr.state==="PRELAUNCH"){Sf(As);return}fe.position.copy(Qr.pos),fe.quaternion.copy(Qr.quat),D.speed=it.airSpeed,D.flightState=Ge.FLYING,D.postLiftCooldown=it.resetGrace,D.greyActive=!1,D.oneShotActive=!1,iu()}function au(){NI(Ee("tutorial.retry")),_n===wt.RINGS?(js(0),Oy(1),Pc()):_n===wt.RING_HIGH?js(2):_n===wt.RING_LOW&&js(3),kI()}function OI(){_n=wt.NAV,Nr=0,Ko=0,ur("FLYING"),ms(Vr[0].key),ou(Vr[0].invert)}function UI(n){const e=cr();if(Ko=Vr[Nr].test(e)?Ko+n:0,Ko>=it.navHold){if(Nr++,Ko=0,Nr>=Vr.length){FI();return}ms(Vr[Nr].key),ou(Vr[Nr].invert)}}function Pc(){const n=(gt[0].collected?1:0)+(gt[1].collected?1:0);ms("tutorial.rings",{collected:n,total:2})}function FI(){_n=wt.RINGS,ou(!1),D.speed=Math.max(D.speed,it.ringsEntrySpeed),ur("FLYING"),II(),js(0),Oy(1),Pc()}function zI(){if(!gt[0].collected)Ic(0)&&(Dc(0),js(1),Pc());else if(!gt[1].collected&&Ic(1)){Dc(1),Pc(),BI();return}wf()>gt[1].forward+it.ringsOvershoot&&au()}function BI(){_n=wt.GREY_BOOST,Zo=0,ur("FLYING"),yo&&(yo.hidden=!0),ff({brake:!0,boost:!1,oneShot:!0}),document.body.classList.add("tut-show-boost"),ms("tutorial.boost")}function HI(n){Zo=cr().boost?Zo+n:Math.max(0,Zo-n*.5),Zo>=it.boostHold&&GI()}function GI(){_n=wt.THERMAL,ur("FLYING"),mi.visible=!0,js(2),ms("tutorial.thermal")}function VI(){fe.position.y>=gt[2].pos.y-it.thermalReach&&WI()}function WI(){_n=wt.RING_HIGH,ur("FLYING"),ms("tutorial.ringHigh")}function qI(){if(!gt[2].collected&&Ic(2)){Dc(2),XI();return}wf()>gt[2].forward+it.highOvershoot&&au()}function XI(){_n=wt.RING_LOW,ur("FLYING"),js(3),ms("tutorial.ringLow")}function jI(){if(!gt[3].collected&&Ic(3)){Dc(3),$I();return}wf()>gt[3].forward+it.highOvershoot&&au()}function $I(){_n=wt.END,mi.visible=!1,D.paused=!0,Ii&&(Ii.classList.add("visible"),Ii.setAttribute("aria-hidden","false")),Xs=setTimeout(Fy,it.endCardMs)}function Fy(){Xs&&(clearTimeout(Xs),Xs=null),Ii&&(Ii.classList.remove("visible"),Ii.setAttribute("aria-hidden","true")),By()}function Ic(n){const e=gt[n],t=fe.position.x-e.pos.x,i=fe.position.y-e.pos.y,s=fe.position.z-e.pos.z;return t*t+i*i+s*s<=it.ringRadius*it.ringRadius}function Dc(n){gt[n].collected=!0,gt[n].popT=0}function zy(){if(tr)return;As=rt.find(e=>e.id===it.runwayId)??rt[0],As.activeHeading=As.heading;const n=VL(As);n&&(n.rotation.y=0),Mf.set(0,0,-1).applyEuler(new Bn(0,As.activeHeading,0)),y2(),tr=!0,D.tutorial=!0,J.introPlayed=!0,St.fog=new Ra(Ye.sky,it.fog.start,it.fog.end),CI(),ky(),Py(!1),yy(!1),un.indexOf(eo)<0&&un.push(eo),ff({brake:!0,boost:!0,oneShot:!0}),document.body.classList.add("tut-hide-actions"),document.body.classList.remove("tut-show-boost"),Sf(As),_n=wt.LAUNCH,ur("PRELAUNCH"),Li&&(Li.classList.add("visible"),Li.classList.remove("menu-hidden"),Li.setAttribute("aria-hidden","false")),yo&&(yo.hidden=!1),ms("tutorial.launch"),ou(!1),D.paused=!1}function YI(){return wT()?!1:(zy(),!0)}function By(){if(!tr)return;tr=!1,D.tutorial=!1,D.paused=!1,St.fog=new Ra(Ye.sky,Pe.fogStart,Pe.fogEnd),ky(),Py(!0),yy(!0),zs&&zs.parent&&St.remove(zs);const n=un.indexOf(eo);n>=0&&un.splice(n,1),ff({brake:!1,boost:!1,oneShot:!1}),document.body.classList.remove("tut-hide-actions","tut-show-boost"),Li&&(Li.classList.remove("visible","menu-hidden"),Li.setAttribute("aria-hidden","true")),bh(!1),ET(!0)}function Hy(){tr&&(Xs&&(clearTimeout(Xs),Xs=null),Ii&&(Ii.classList.remove("visible"),Ii.setAttribute("aria-hidden","true")),By())}function KI(n){if(!tr)return;const e=D.paused;if(Li&&Li.classList.toggle("menu-hidden",e),e){bh(!1);return}switch(bh(_n===wt.LAUNCH||_n===wt.NAV),_n){case wt.LAUNCH:D.flightState===Ge.FLYING&&OI();break;case wt.NAV:UI(n);break;case wt.RINGS:zI();break;case wt.GREY_BOOST:HI(n);break;case wt.THERMAL:VI();break;case wt.RING_HIGH:qI();break;case wt.RING_LOW:jI();break}DI(n)}JP(au);ca&&ca.addEventListener("change",()=>mc(ca.checked));yo&&yo.addEventListener("click",Hy);Wg&&Wg.addEventListener("click",Fy);eu(()=>{tr&&Uy()});const ZI="3.0.0",JI=8,Xg={version:ZI,build:JI},QI={TFN:"tenerife",TFS:"tenerife",GMZ:"gomera",SPC:"palma",VDE:"hierro",LPA:"gc",FUE:"fuerte",ACE:"lanza",GRAC:"graciosa"},nn=document.getElementById("welcome-overlay"),jg=document.getElementById("welcome-start-sub"),$g=document.getElementById("pause-btn"),ei=document.getElementById("pause-overlay"),Yg=document.getElementById("pause-resume"),Kg=document.getElementById("pause-home"),e3=document.getElementById("crash"),Zg=document.getElementById("welcome-version");Zg&&(Zg.textContent=`v${Xg.version} · Build ${Xg.build} · Swiss Innovation Studios`);const vn=document.getElementById("levels-overlay"),Jo=document.getElementById("levels-map"),to=document.getElementById("levels-markers"),Jg=document.getElementById("levels-title"),Ll=document.getElementById("levels-hint"),Vo=768,Pl=320,Qg=1.08;let e0=null,Il=null;function Gy(){if(Il)return Il;let n=1/0,e=-1/0,t=1/0,i=-1/0;for(const l of bt)n=Math.min(n,l.x-l.bboxRadius),e=Math.max(e,l.x+l.bboxRadius),t=Math.min(t,l.z-l.bboxRadius),i=Math.max(i,l.z+l.bboxRadius);const s=(n+e)/2,r=(t+i)/2,o=(e-n)/2*Qg,a=(i-t)/2*Qg;return Il={cx:s,cz:r,hw:o,hh:a},Il}function Vy(){return nn?.classList.contains("visible")===!0}function t0(){return ei?.classList.contains("visible")===!0}function Na(){nn&&(Hy(),Qo(),D.paused=!0,qy(),nn.classList.add("visible"),nn.setAttribute("aria-hidden","false"))}function Sh(){nn&&(nn.classList.remove("visible"),nn.setAttribute("aria-hidden","true"),Wy()||(D.paused=!1))}function Mh(){ei&&(D.paused=!0,ei.classList.add("visible"),ei.setAttribute("aria-hidden","false"))}function Qo(){ei&&ei.classList.contains("visible")&&(ei.classList.remove("visible"),ei.setAttribute("aria-hidden","true"),Wy()||(D.paused=!1))}function t3(){D.paused||D.flightState!==Ge.CRASHED&&(D.tutorial||Mh())}function Wy(){return nn?.classList.contains("visible")||vn?.classList.contains("visible")||document.getElementById("hangar-overlay")?.classList.contains("visible")||document.getElementById("shop-overlay")?.classList.contains("visible")||document.getElementById("settings-overlay")?.classList.contains("visible")}function qy(){if(!jg)return;const n=J.checkpointRunwayId;jg.textContent=n?Ee("welcome.checkpoint",{id:n}):Ee("welcome.firstFlight")}function n3(){vn&&(nn?.classList.remove("visible"),nn?.setAttribute("aria-hidden","true"),vn.classList.add("visible"),vn.setAttribute("aria-hidden","false"),Xy())}function n0(){vn&&(vn.classList.remove("visible"),vn.setAttribute("aria-hidden","true"),Na())}function Xy(){if(!Jo)return;Jg&&(Jg.textContent=Ee("levels.archTitle"));const n=i3(),e=bt.map(t=>n[t.id]?"1":"0").join("");e0!==e&&(r3(n),e0=e),l3(),c3(n),u3()}function i3(){const n={};for(const e of bt)n[e.id]=!1;for(const e of rt){if(!J.discoveredRunways[e.id])continue;const t=QI[e.id];t&&(n[t]=!0)}return n}function s3(n,e){let t=bt[0].id,i=1/0;for(const s of bt){const r=n-s.x,o=e-s.z,a=r*r+o*o;a<i&&(i=a,t=s.id)}return t}function r3(n){if(!Jo)return;Jo.width=Vo,Jo.height=Pl;const e=Jo.getContext("2d"),t=e.createImageData(Vo,Pl),{cx:i,cz:s,hw:r,hh:o}=Gy(),a=Pe.heightmap.metersPerUnit,l=Pe.waterLevel;for(let c=0;c<Pl;c++){const u=s+(c/(Pl-1)-.5)*2*o;for(let d=0;d<Vo;d++){const h=i+(d/(Vo-1)-.5)*2*r,m=Ia(h,u);let g,y,p;if(m<l+.05)g=52,y=92,p=118;else{const _=s3(h,u),v=m*a;n[_]?[g,y,p]=o3(v):g=y=p=a3(v)}const f=(c*Vo+d)*4;t.data[f]=g,t.data[f+1]=y,t.data[f+2]=p,t.data[f+3]=255}}e.putImageData(t,0,0)}function o3(n){return n<80?[199,184,145]:n<600?[134,152,98]:n<1600?[157,138,110]:n<2400?[180,168,148]:n<3e3?[215,212,200]:[240,240,235]}function a3(n){return n<80?132:n<600?148:n<1600?162:n<2400?176:n<3e3?192:206}function jy(n,e){const{cx:t,cz:i,hw:s,hh:r}=Gy();return{fracX:(n-t)/(2*s)+.5,fracY:(e-i)/(2*r)+.5}}function l3(){if(to){to.querySelectorAll(".levels-marker").forEach(n=>n.remove());for(const n of rt){const e=!!J.landedRunways[n.id],t=!!J.discoveredRunways[n.id],i=e?"landed":t?"discovered":"locked",{fracX:s,fracY:r}=jy(n.x,n.z);if(s<0||s>1||r<0||r>1)continue;const o=document.createElement("button");o.type="button",o.className=`levels-marker levels-marker-${i}`,o.style.left=(s*100).toFixed(2)+"%",o.style.top=(r*100).toFixed(2)+"%",o.dataset.runwayId=n.id,o.disabled=!e;const a=i==="locked"?Ee("levels.markerLocked"):n.id;o.innerHTML=`
      <span class="levels-marker-dot"></span>
      <span class="levels-marker-label">${a}</span>
    `,e?(o.title=Ee("levels.tipStart",{id:n.id}),o.addEventListener("click",()=>d3(n.id))):t?o.title=Ee("levels.tipNotLanded",{id:n.id}):o.title=Ee("levels.tipUndiscovered"),to.appendChild(o)}}}function c3(n){if(to){to.querySelectorAll(".levels-island-label").forEach(e=>e.remove());for(const e of bt){if(!n[e.id])continue;const{fracX:t,fracY:i}=jy(e.x,e.z);if(t<0||t>1||i<0||i>1)continue;const s=document.createElement("span");s.className="levels-island-label",s.textContent=e.name,s.style.left=(t*100).toFixed(2)+"%",s.style.top=(i*100).toFixed(2)+"%",to.appendChild(s)}}}function u3(){if(!Ll)return;const n=rt.filter(e=>J.landedRunways[e.id]).length;n===0?Ll.textContent=Ee("levels.hintNone"):n<rt.length?Ll.textContent=Ee("levels.hintProgress",{landed:n,total:rt.length}):Ll.textContent=Ee("levels.hintAll")}async function d3(n){vn?.classList.remove("visible"),vn?.setAttribute("aria-hidden","true"),nn?.classList.remove("visible"),nn?.setAttribute("aria-hidden","true"),D.flightState===Ge.CRASHED&&await Qs.onCrashRestart(),D.paused=!1,ru({runwayId:n,forceIntro:!0})}async function h3(){D.flightState===Ge.CRASHED?(await Qs.onCrashRestart(),Sh(),ru()):Sh()}function Sd(n){nn?.classList.remove("visible"),nn?.setAttribute("aria-hidden","true"),go(n,{onClose:Na})}(function(){nn&&nn.addEventListener("click",t=>{const i=t.target.closest("[data-welcome-action]");if(!i)return;const s=i.dataset.welcomeAction;s==="start"?h3():s==="levels"?n3():s==="hangar"?Sd("hangar"):s==="shop"?Sd("shop"):s==="settings"&&Sd("settings")}),vn&&vn.addEventListener("click",t=>{if(t.target===vn){n0();return}if(t.target.closest('[data-modal-close="levels"]')){n0();return}});const e=document.getElementById("settings-replay-tutorial");e&&e.addEventListener("click",()=>{for(const t of["settings-overlay","welcome-overlay","levels-overlay"]){const i=document.getElementById(t);i&&(i.classList.remove("visible"),i.setAttribute("aria-hidden","true"))}zy()}),$g&&$g.addEventListener("click",()=>{t0()?Qo():Mh()}),Yg&&Yg.addEventListener("click",Qo),Kg&&Kg.addEventListener("click",Na),ei&&ei.addEventListener("click",t=>{t.target===ei&&Qo()}),document.addEventListener("keydown",t=>{if(t.key==="Escape"&&!document.getElementById("onboarding-overlay")?.classList.contains("visible")&&!document.getElementById("hangar-overlay")?.classList.contains("visible")&&!document.getElementById("shop-overlay")?.classList.contains("visible")&&!document.getElementById("settings-overlay")?.classList.contains("visible")&&!vn?.classList.contains("visible")){if(Vy()){Sh(),D.flightState===Ge.CRASHED&&e3?.classList.add("visible");return}if(t0()){Qo();return}D.flightState!==Ge.CRASHED&&Mh()}})})();eu(()=>{Vy()&&qy(),vn?.classList.contains("visible")&&Xy()});const Ta=document.getElementById("onboarding-overlay"),Nc=document.getElementById("onboarding-lang-step"),kc=document.getElementById("onboarding-story-step"),f3=document.getElementById("onboarding-langs"),i0=document.getElementById("onboarding-story-text"),Md=document.getElementById("onboarding-dots"),Oc=document.getElementById("onboarding-next");let no=0,wh=null;function $y(){const n=Ee("onboarding.story");return Array.isArray(n)?n:[]}function p3(n){if(wh=typeof n=="function"?n:()=>{},!Ta||ST()){wh();return}m3()}function m3(){D.paused=!0,Ta.classList.add("visible"),Ta.setAttribute("aria-hidden","false"),g3()}function g3(){kc&&(kc.hidden=!0),Nc&&(Nc.hidden=!1),Fv(f3,{onPick:n=>{Ov(n),v3()}})}function v3(){Nc&&(Nc.hidden=!0),kc&&(kc.hidden=!1),no=0,Yy()}function Yy(){const n=$y();if(i0&&(i0.textContent=n[no]||""),Md){Md.innerHTML="";for(let t=0;t<n.length;t++){const i=document.createElement("span");i.className="onboarding-dot"+(t===no?" active":""),Md.appendChild(i)}}const e=no>=n.length-1;Oc&&(Oc.textContent=Ee(e?"onboarding.begin":"onboarding.next"))}function y3(){no<$y().length-1?(no++,Yy()):x3()}function x3(){MT(!0),Ta.classList.remove("visible"),Ta.setAttribute("aria-hidden","true"),wh()}Oc&&Oc.addEventListener("click",y3);const wo=new I(0,1,0);function Uc(n,e){for(const t of rt){const i=n-t.x,s=e-t.z,r=Math.cos(t.heading),o=Math.sin(t.heading),a=i*r-s*o,l=i*o+s*r;if(Math.abs(a)<t.width/2+Zl.vegClearSide&&Math.abs(l)<t.length/2+Zl.vegClearEnd)return!0}return!1}const Lr=8;function _3(n,e,t){const i=Tn(n+Lr,e),s=Tn(n-Lr,e),r=Tn(n,e+Lr),o=Tn(n,e-Lr);return t.gx=(i-s)/(2*Lr),t.gz=(r-o)/(2*Lr),t}function b3(){const e=bt.reduce((t,i)=>t+i.bboxRadius*i.bboxRadius,0);return bt.map(t=>{const i=t.bboxRadius*t.bboxRadius/e;return Math.max(8e3,Math.floor(Et.sampleCount*i))})}function S3(){const{treeDensity:n,shrubDensity:e,grassDensity:t,cropDensity:i,bareDensity:s,droughtShrubDensity:r,snowDensity:o,wetlandDensity:a,laurelMaxAltitude:l}=Et,c={};for(const y of bt)c[y.id]={pines:[],laurels:[],shrubs:[],grasses:[],crops:[],rocks:[],snow:[],wetlands:[],cliffs:[]};const u=Et.slopeThreshold,d=Et.cliffDensity,h=l*Pe.heightmap.elevationExaggeration,m={gx:0,gz:0};for(const y of vx){const p=c[y.island];if(!p)continue;const f=y.ringCount,_=y.ringRadius,v=1.4;for(let R=0;R<f;R++){const E=R/f*Math.PI*2+(Math.random()-.5)*.08,A=_*(.88+Math.random()*.24),k=y.x+Math.cos(E)*A,b=y.z+Math.sin(E)*A,w=xn(k,b);w<Pe.waterLevel+.5||Uc(k,b)||p.cliffs.push({x:k,y:w,z:b,gx:Math.cos(E)*v,gz:Math.sin(E)*v})}const S=Math.floor(f*.4);for(let R=0;R<S;R++){const E=Math.random()*Math.PI*2,A=Math.sqrt(Math.random())*_*.75,k=y.x+Math.cos(E)*A,b=y.z+Math.sin(E)*A,w=xn(k,b);w<Pe.waterLevel+.5||p.rocks.push({x:k,y:w,z:b})}}const g=b3();for(let y=0;y<bt.length;y++){const p=bt[y],f=p.bboxRadius,_=g[y],v=c[p.id];for(let S=0;S<_;S++){const R=p.x+(Math.random()-.5)*2*f,E=p.z+(Math.random()-.5)*2*f,A=xn(R,E);if(A<Pe.waterLevel+.5||Uc(R,E))continue;_3(R,E,m);const b=Math.hypot(m.gx,m.gz)>=u&&Math.random()<d;b&&v.cliffs.push({x:R,y:A,z:E,gx:m.gx,gz:m.gz});const w=my(R,E);w===Lt.TREE&&Math.random()<n?A>=h?v.pines.push({x:R,y:A,z:E}):v.laurels.push({x:R,y:A,z:E}):w===Lt.SHRUB&&Math.random()<e?v.shrubs.push({x:R,y:A,z:E}):w===Lt.GRASS&&Math.random()<t?v.grasses.push({x:R,y:A,z:E}):w===Lt.CROP&&Math.random()<i?v.crops.push({x:R,y:A,z:E}):w===Lt.BARE?(!b&&Math.random()<s&&v.rocks.push({x:R,y:A,z:E}),Math.random()<r&&v.shrubs.push({x:R,y:A,z:E})):w===Lt.SNOW&&Math.random()<o?v.snow.push({x:R,y:A,z:E}):w===Lt.WETLAND&&Math.random()<a&&v.wetlands.push({x:R,y:A,z:E})}}return c}function Ky(n,e,t,i,s,r,o,a,l){const c=new tn(e,i,n.length),u=new tn(t,s,n.length),d=new Je,h=new At,m=new I,g=new I;for(let p=0;p<n.length;p++){const{x:f,y:_,z:v}=n[p],S=r+Math.random()*(o-r);g.set(f,_-.3,v),m.set(S,S+Math.random()*.3,S),h.setFromAxisAngle(wo,Math.random()*Math.PI*2),d.compose(g,h,m),c.setMatrixAt(p,d),u.setMatrixAt(p,d),Da(f,_,v,a*S,l*S)}c.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0;const y=new ct;return y.add(c,u),y}function M3(n){const e=new zn(.18,.26,1.6,5);e.translate(0,.8,0);const t=new Oi(1,4.8,7);t.translate(0,3.8,0);const i=new ut({color:Ye.trunk,flatShading:!0}),s=new ut({color:Ye.pineCanopy,flatShading:!0}),r=Et.treeScale;return Ky(n,e,t,i,s,.75*r,1.3*r,1,6.2)}function w3(n){const e=new zn(.22,.32,1,5);e.translate(0,.5,0);const t=new La(1.7,7,5);t.scale(1,.85,1),t.translate(0,2,0);const i=new ut({color:Ye.trunk,flatShading:!0}),s=new ut({color:Ye.laurelCanopy,flatShading:!0}),r=Et.treeScale;return Ky(n,e,t,i,s,.85*r,1.25*r,1.7,3.5)}function E3(n){const e=new Oi(.7,1,5);e.translate(0,.5,0);const t=new ut({color:Ye.shrubBody,flatShading:!0}),i=new tn(e,t,n.length),s=new Je,r=new At,o=new I,a=new I;for(let l=0;l<n.length;l++){const{x:c,y:u,z:d}=n[l],h=.5+Math.random()*.6;a.set(c,u-.2,d),o.set(h+Math.random()*.2,h,h+Math.random()*.2),r.setFromAxisAngle(wo,Math.random()*Math.PI*2),s.compose(a,r,o),i.setMatrixAt(l,s),Da(c,u,d,.85*h,1*h)}return i.instanceMatrix.needsUpdate=!0,i}function A3(n){const e=new Oi(.35,.55,4);e.translate(0,.25,0);const t=new ut({color:16777215,flatShading:!0}),i=new tn(e,t,n.length),s=new Je,r=new At,o=new I,a=new I,l=new Ae(Ye.grassGround),c=Et.grassTints,u=new Ae;for(let d=0;d<n.length;d++){const{x:h,y:m,z:g}=n[d],y=.6+Math.random()*.7;a.set(h,m-.1,g),o.set(y,y*(.8+Math.random()*.5),y),r.setFromAxisAngle(wo,Math.random()*Math.PI*2),s.compose(a,r,o),i.setMatrixAt(d,s);const[p,f,_]=c[Math.random()*c.length|0];u.setRGB(l.r*p,l.g*f,l.b*_),i.setColorAt(d,u)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function T3(n){const e=new Oi(.4,.75,4);e.translate(0,.35,0);const t=new ut({color:16777215,flatShading:!0}),i=new tn(e,t,n.length),s=new Je,r=new At,o=new I,a=new I,l=new Ae(Ye.cropGround),c=Et.grassTints,u=new Ae;for(let d=0;d<n.length;d++){const{x:h,y:m,z:g}=n[d],y=.7+Math.random()*.6;a.set(h,m-.12,g),o.set(y,y*(.9+Math.random()*.4),y),r.setFromAxisAngle(wo,Math.random()*Math.PI*2),s.compose(a,r,o),i.setMatrixAt(d,s);const[p,f,_]=c[Math.random()*c.length|0];u.setRGB(l.r*p,l.g*f,l.b*_),i.setColorAt(d,u)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function R3(n){const e=new Ca(.5,0),t=new ut({color:16777215,flatShading:!0}),i=new tn(e,t,n.length),s=new Je,r=new At,o=new I,a=new I,l=new Bn,c=new Ae(Ye.rock),u=Et.rockTintsLow,d=Et.rockTintsMid,h=Et.rockTintsHigh,m=Et.rockZoneLowMax,g=Et.rockZoneHighMin,y=new Ae;for(let p=0;p<n.length;p++){const{x:f,y:_,z:v}=n[p];let S,R,E;_<m?(S=u,R=.3,E=1.5):_>g?(S=h,R=.4,E=2.5):(S=d,R=.5,E=3.5);const A=R+Math.random()*Math.random()*(E-R);a.set(f,_-A*.15,v),o.set(A*(.7+Math.random()*.6),A*(.55+Math.random()*.45),A*(.7+Math.random()*.6)),l.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),r.setFromEuler(l),s.compose(a,r,o),i.setMatrixAt(p,s);const[k,b,w]=S[Math.random()*S.length|0];y.setRGB(c.r*k,c.g*b,c.b*w),i.setColorAt(p,y),A>1.5&&Da(f,_,v,A,A)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function C3(n){const e=new Ca(.6,0),t=new ut({color:16777215,flatShading:!0}),i=new tn(e,t,n.length),s=new Je,r=new At,o=new At,a=new I,l=new I,c=new I(0,1,0),u=new I,d=new Ae(Ye.rock),h=[[.5,.5,.55],[.4,.4,.45],[.62,.58,.55],[.55,.5,.48],[.45,.45,.5]],m=new Ae,[g,y]=Et.cliffHeightRange;for(let p=0;p<n.length;p++){const{x:f,y:_,z:v,gx:S,gz:R}=n[p];u.set(-S,1,-R).normalize();const E=g+Math.random()*(y-g),A=1.4+Math.random()*1.8;r.setFromUnitVectors(c,u),o.setFromAxisAngle(u,Math.random()*Math.PI*2),r.premultiply(o);const k=(.3+Math.random()*.1)*E;l.set(f-u.x*k,_-u.y*k,v-u.z*k),a.set(A*(.85+Math.random()*.4),E,A*(.85+Math.random()*.4)),s.compose(l,r,a),i.setMatrixAt(p,s);const[b,w,G]=h[Math.random()*h.length|0];m.setRGB(d.r*b,d.g*w,d.b*G),i.setColorAt(p,m)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function L3(n){const e=new Ca(.5,0),t=new ut({color:16777215,flatShading:!0}),i=new tn(e,t,n.length),s=new Je,r=new At,o=new I,a=new I,l=new Bn,c=new Ae;for(let u=0;u<n.length;u++){const{x:d,y:h,z:m}=n[u],g=.4+Math.random()*.9;a.set(d,h-.05,m),o.set(g*(.9+Math.random()*.3),g*(.25+Math.random()*.2),g*(.9+Math.random()*.3)),l.set(0,Math.random()*Math.PI*2,0),r.setFromEuler(l),s.compose(a,r,o),i.setMatrixAt(u,s);const y=.93+Math.random()*.07;c.setRGB(y,y,y),i.setColorAt(u,c)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function P3(n){const e=new en(1,.04,1);e.translate(0,.02,0);const t=new ut({color:16777215,flatShading:!0}),i=new tn(e,t,n.length),s=new Je,r=new At,o=new I,a=new I,l=new Ae,c=[[1.05,1.1,1.15],[1.15,1.15,1.2],[.95,1,1.05],[1.1,1.05,.95]];for(let u=0;u<n.length;u++){const{x:d,y:h,z:m}=n[u],g=1+Math.random()*.8;a.set(d,h+.05,m),o.set(g*(.9+Math.random()*.4),1,g*(.9+Math.random()*.4)),r.setFromAxisAngle(wo,Math.random()*Math.PI*2),s.compose(a,r,o),i.setMatrixAt(u,s);const[y,p,f]=c[Math.random()*c.length|0];l.setRGB(.92*y,.94*p,.96*f),i.setColorAt(u,l)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function I3(n){const{clusterScaleMin:e,clusterScaleMax:t}=Et.urban,i=Math.min(1,Math.pow(n/50,.4));return e+i*(t-e)}function D3(){const n=eP(),{churchClusterPixels:e,housesPerPixel:t,housesMin:i,housesMax:s,houseMinSpacing:r,pixelJitter:o}=Et.urban,a=[],l=[],c=r*r;for(const u of n){const d=Math.max(i,Math.min(s,Math.round(u.pixelCount*t))),h=I3(u.pixelCount),m=[];let g=0;const y=d*14;for(;m.length<d&&g<y;){g++;const p=u.pixels[Math.random()*u.pixels.length|0],f=p.x+(Math.random()-.5)*o,_=p.z+(Math.random()-.5)*o;let v=!0;for(const R of m){const E=R.x-f,A=R.z-_;if(E*E+A*A<c){v=!1;break}}if(!v)continue;const S=xn(f,_);S<Pe.waterLevel+.5||Uc(f,_)||m.push({x:f,y:S,z:_,scale:h})}if(a.push(...m),u.pixelCount>=e){const p=u.centerX,f=u.centerZ,_=xn(p,f);_>=Pe.waterLevel+.5&&!Uc(p,f)&&l.push({x:p,y:_,z:f,scale:h})}}return{houses:a,churches:l}}function N3(n){const e=new en(1.4,1,1.6);e.translate(0,.5,0);const t=new Oi(1.15,.75,4);t.rotateY(Math.PI/4),t.translate(0,1.37,0);const i=new ut({color:Ye.houseWall,flatShading:!0}),s=new ut({color:16777215,flatShading:!0}),r=new tn(e,i,n.length),o=new tn(t,s,n.length),a=new Je,l=new At,c=new I,u=new I,d=new Ae(Ye.houseRoof),h=Et.roofTints,m=new Ae;for(let y=0;y<n.length;y++){const{x:p,y:f,z:_,scale:v}=n[y],S=v*(.85+Math.random()*.3),R=v*(.8+Math.random()*.35),E=v*(.85+Math.random()*.3);u.set(p,f,_),c.set(S,R,E);const A=Math.random()*8|0;l.setFromAxisAngle(wo,A*Math.PI/4),a.compose(u,l,c),r.setMatrixAt(y,a),o.setMatrixAt(y,a);const[k,b,w]=h[Math.random()*h.length|0];m.setRGB(d.r*k,d.g*b,d.b*w),o.setColorAt(y,m),Da(p,f,_,.85*v,1.75*v)}r.instanceMatrix.needsUpdate=!0,o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0;const g=new ct;return g.add(r,o),g}function k3(){const n=new ut({color:Ye.houseWall,flatShading:!0}),e=new ut({color:Ye.houseRoof,flatShading:!0}),t=new tt(new en(1.6,1.2,2.6),n);t.position.y=.6;const i=new tt(new Oi(1.4,.7,4),e);i.rotation.y=Math.PI/4,i.position.y=1.55;const s=new tt(new en(.75,2.4,.75),n);s.position.set(0,1.2,-1.65);const r=new tt(new Oi(.5,1.05,4),e);r.rotation.y=Math.PI/4,r.position.set(0,2.95,-1.65);const o=new ct;return o.add(t,i,s,r),o}function O3(n){const e=k3(),t=new ct;for(const{x:i,y:s,z:r,scale:o}of n){const a=e.clone();a.position.set(i,s,r);const l=o*(.95+Math.random()*.2);a.scale.set(l,l,l),a.rotation.y=Math.random()*Math.PI*2,t.add(a),Da(i,s,r,1.9*l,3.5*l)}return t}const Eh=[],U3=400;function F3(n,e){const t=new I(e.x,60,e.z),i=e.bboxRadius*1.4+50;return n.traverse(s=>{(s.isInstancedMesh||s.isMesh)&&(s.frustumCulled=!0,s.boundingSphere=new ps(t,i))}),{center:t,radius:i}}function z3(){const n=S3(),e=D3(),t=new ct,i={pines:0,laurels:0,shrubs:0,grasses:0,crops:0,rocks:0,cliffs:0,snow:0,wetlands:0};for(const s of bt){const r=n[s.id];if(!r)continue;const o=new ct;o.name=`vegetation:${s.id}`,r.pines.length&&(o.add(M3(r.pines)),i.pines+=r.pines.length),r.laurels.length&&(o.add(w3(r.laurels)),i.laurels+=r.laurels.length),r.shrubs.length&&(o.add(E3(r.shrubs)),i.shrubs+=r.shrubs.length),r.grasses.length&&(o.add(A3(r.grasses)),i.grasses+=r.grasses.length),r.crops.length&&(o.add(T3(r.crops)),i.crops+=r.crops.length),r.rocks.length&&(o.add(R3(r.rocks)),i.rocks+=r.rocks.length),r.cliffs.length&&(o.add(C3(r.cliffs)),i.cliffs+=r.cliffs.length),r.snow.length&&(o.add(L3(r.snow)),i.snow+=r.snow.length),r.wetlands.length&&(o.add(P3(r.wetlands)),i.wetlands+=r.wetlands.length);const a=F3(o,s);Eh.push({group:o,center:a.center,radius:a.radius}),t.add(o)}return e.houses.length&&t.add(N3(e.houses)),e.churches.length&&t.add(O3(e.churches)),console.log(`vegetation: ${i.pines} pines, ${i.laurels} laurels, ${i.shrubs} shrubs, ${i.grasses} grass tufts, ${i.crops} crops, ${i.rocks} rocks, ${i.cliffs} cliffs, ${i.snow} snow, ${i.wetlands} salinas, ${e.houses.length} houses, ${e.churches.length} churches`),t}function B3(n,e){if(!e){for(const i of Eh)i.group.visible=!0;return}const t=Pe.fogEnd+U3;for(const i of Eh)i.group.visible=n.position.distanceTo(i.center)-i.radius<t}const Fc=document.getElementById("island-compass"),wd=Fc?.querySelector(".compass-track"),Dl=document.getElementById("island-name");let s0=null;const Ah=Math.PI/2,r0=6,H3=400,G3=2,zc=7,V3=8,W3=6.2,q3=12;let Zy=560;const Jy=new Map;let qt=null;const Ed=new I;function X3(){if(!wd)return;for(const e of bt){const t=document.createElement("div");t.className="compass-marker"+(e.playable?"":" unreachable"),t.dataset.island=e.id,t.innerHTML=`
      <span class="compass-name">${e.name}</span>
      <span class="compass-dist"></span>
    `,wd.appendChild(t),Jy.set(e.id,{el:t,dist:t.querySelector(".compass-dist"),lastLeft:null,lastDist:null,lastHidden:null})}const n=document.createElement("div");n.className="compass-marker runway-hint hidden",n.innerHTML=`
    <span class="compass-name"></span>
    <span class="compass-dist"></span>
  `,wd.appendChild(n),qt={el:n,name:n.querySelector(".compass-name"),dist:n.querySelector(".compass-dist"),lastLeft:null,lastDist:null,lastName:null,lastHidden:!0},o0(),window.addEventListener("resize",o0)}function Nl(n,e){if(!qt)return;if(!e){qt.lastHidden||(qt.el.classList.add("hidden"),qt.lastHidden=!0);return}const t=Pe.heightmap.metersPerUnit,i=Qy(n),s=e.x-n.position.x,r=e.z-n.position.z,o=Math.sqrt(s*s+r*r)*t/1e3,a=Math.atan2(s,-r);let c=(ex(a-i)/Ah*.5+.5)*100;c=Math.max(zc,Math.min(100-zc,c)),qt.lastHidden&&(qt.el.classList.remove("hidden"),qt.lastHidden=!1),e.id!==qt.lastName&&(qt.name.textContent=e.id,qt.lastName=e.id);const u=c.toFixed(1)+"%";u!==qt.lastLeft&&(qt.el.style.left=u,qt.lastLeft=u);const d=o<10?o.toFixed(1)+" km":Math.round(o)+" km";d!==qt.lastDist&&(qt.dist.textContent=d,qt.lastDist=d)}function Qy(n){return Ed.set(0,0,-1).applyQuaternion(n.quaternion),Math.atan2(Ed.x,-Ed.z)}function ex(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const Wo=[],Ht=[];function o0(){if(!Fc)return;const n=Fc.getBoundingClientRect().width;n>0&&(Zy=n)}function j3(n){if(!Dl)return;const e=n?n.name:"";e!==s0&&(s0=e,e?(Dl.textContent=e,Dl.classList.add("show")):Dl.classList.remove("show"))}function $3(n){if(!Fc)return;const e=Qy(n),t=Pe.heightmap.metersPerUnit,i=xf(n.position);j3(i),Wo.length=0;for(const s of bt){const r=Jy.get(s.id);if(!r)continue;const o=s.x-n.position.x,a=s.z-n.position.z,c=Math.sqrt(o*o+a*a)*t/1e3,u=Math.max(0,c-s.bboxRadius*t/1e3),d=Math.atan2(o,-a),h=ex(d-e);if(i&&s.id===i.id||Math.abs(h)>Ah||c<.5||c>H3){Wo.push({m:r,distKm:c,edgeKm:u,pct:0,halfPct:0,show:!1});continue}const g=(h/Ah*.5+.5)*100,y=(s.name.length*W3+q3)/Zy*50;Wo.push({m:r,distKm:c,edgeKm:u,pct:g,halfPct:y,show:!0})}Ht.length=0;for(const s of Wo)s.show&&Ht.push(s);Ht.sort((s,r)=>s.distKm-r.distKm);for(let s=r0;s<Ht.length;s++)Ht[s].show=!1;Ht.length=Math.min(Ht.length,r0),Ht.sort((s,r)=>s.pct-r.pct);for(let s=0;s<V3;s++){for(let r=0;r<Ht.length-1;r++){const o=Ht[r],a=Ht[r+1],l=o.halfPct+a.halfPct+G3-(a.pct-o.pct);l>0&&(o.pct-=l/2,a.pct+=l/2)}Ht.length&&(Ht[0].pct=Math.max(zc,Ht[0].pct),Ht[Ht.length-1].pct=Math.min(100-zc,Ht[Ht.length-1].pct))}for(const s of Wo){const r=s.m,o=!s.show;if(o!==r.lastHidden&&(r.el.classList.toggle("hidden",o),r.lastHidden=o),o)continue;const a=s.pct.toFixed(1)+"%";a!==r.lastLeft&&(r.el.style.left=a,r.lastLeft=a);const l=s.edgeKm<10?s.edgeKm.toFixed(1)+" km":Math.round(s.edgeKm)+" km";l!==r.lastDist&&(r.dist.textContent=l,r.lastDist=l)}}const Ad=new I;function Y3(){for(const n in J.landedRunways)if(n!==Qi&&J.landedRunways[n])return!1;return!0}function K3(n){let e=null,t=1/0;for(const i of rt){if(i.id===Qi)continue;const s=n.x-i.x,r=n.z-i.z,o=s*s+r*r;o<t&&(t=o,e=i)}return e?{runway:e,dist:Math.sqrt(t)}:null}function Z3(n){return Ad.set(0,0,-1).applyQuaternion(n.quaternion),Math.atan2(-Ad.x,-Ad.z)}function J3(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}let qo=null;function Q3(n,e){if(!(D.flightState===Ge.FLYING)||D.paused||D.tutorial){Nl(e,null),vd(),Tg(),qo=null;return}const i=e.position;if(Y3()){const o=K3(i);o?(Nl(e,o.runway),o.dist<fu.hideDistance?vd():o.dist<=fu.showDistance?qo!==o.runway.id&&(OP(),qo=o.runway.id):o.dist>fu.rearmDistance&&qo===o.runway.id&&(qo=null)):Nl(e,null)}else Nl(e,null),vd();const s=Z3(e);let r=!1;for(const o of rt){const a=i.x-o.x,l=i.z-o.z,c=Math.cos(o.heading),u=Math.sin(o.heading),d=a*c-l*u,h=a*u+l*c;if(Math.abs(d)>Ua.corridorHalfWidth||Math.abs(h)>o.length*.5+Ua.approachDepth)continue;const m=i.y-o.elevation;if(m<-2||m>Ua.maxHeight)continue;if(Math.abs(J3(s-(o.activeHeading+Math.PI)))<=Ua.coneTolerance){r=!0;break}}r?FP():Tg()}const eD=[{id:"speed-tape",icon:"speed",range:120,pxPerUnit:4,tickStep:5,majorStep:20},{id:"alt-tape",icon:"height",range:500,pxPerUnit:1.6,tickStep:25,majorStep:100}],Bc=[];let a0=!1;const l0=document.getElementById("lift-indicator");let c0=null;function tD(){for(const n of eD){const e=document.getElementById(n.id);if(!e)continue;e.innerHTML="";const t=document.createElement("div");t.className="edge-tape-eyebrow";const i=document.createElement("span");i.className="material-symbols-outlined",i.textContent=n.icon,t.appendChild(i),e.appendChild(t);const s=document.createElement("div");s.className="edge-tape-window",e.appendChild(s);const r=document.createElement("div");r.className="edge-tape-track",r.style.height=n.range*n.pxPerUnit+"px",s.appendChild(r);for(let l=0;l<=n.range;l+=n.tickStep){const c=document.createElement("div"),u=l%n.majorStep===0;if(c.className="edge-tape-tick"+(u?" major":""),c.style.top=(n.range-l)*n.pxPerUnit+"px",u){const d=document.createElement("span");d.className="edge-tape-label",d.textContent=l,c.appendChild(d)}r.appendChild(c)}const o=document.createElement("div");o.className="edge-tape-center-line",s.appendChild(o);const a=document.createElement("div");a.className="edge-tape-current",a.textContent="0",s.appendChild(a),Bc.push({cfg:n,win:s,track:r,current:a,lastDisplayed:NaN,winH:0})}a0||(a0=!0,window.addEventListener("resize",()=>{for(const n of Bc)n.winH=0}))}function u0(n,e){const t=Math.max(0,Math.min(n.cfg.range,e));let i=n.winH;if(!i){if(i=n.win.clientHeight,i===0)return;n.winH=i}const s=i/2-(n.cfg.range-t)*n.cfg.pxPerUnit;n.track.style.transform=`translateY(${s}px)`;const r=Math.round(e);r!==n.lastDisplayed&&(n.current.textContent=r,n.lastDisplayed=r)}function nD(n){if(!n||Bc.length===0)return;const e=xn(n.position.x,n.position.z),t=n.position.y-Math.max(e,Pe.waterLevel);for(const i of Bc)i.cfg.id==="speed-tape"?u0(i,D.speed):i.cfg.id==="alt-tape"&&u0(i,t);if(l0){const i=!!D.inThermal;i!==c0&&(l0.classList.toggle("is-active",i),c0=i)}}const tx=[];(function(){for(const e of[-.95,.95]){const t=new Float32Array(ji.verts*3),i=new Float32Array(ji.verts*3);for(let a=0;a<ji.verts;a++){const l=a/(ji.verts-1);t[a*3]=e,t[a*3+1]=-.05,t[a*3+2]=.42+l*ji.maxLen;const c=1-l;i[a*3]=c,i[a*3+1]=c,i[a*3+2]=c}const s=new vt;s.setAttribute("position",new Pt(t,3)),s.setAttribute("color",new Pt(i,3));const r=new Yc({vertexColors:!0,transparent:!0,opacity:0,blending:sc,depthWrite:!1}),o=new iv(s,r);fe.add(o),tx.push(o)}})();function iD(){const n=Rt.stallSpeed+3,e=Rt.maxSpeed*.7,t=ki.clamp((D.speed-n)/(e-n),0,1),i=ji.maxLen*(.3+t*.7);for(const s of tx){const r=s.geometry.attributes.position.array;for(let o=0;o<ji.verts;o++){const a=o/(ji.verts-1);r[o*3+2]=.42+a*i}s.geometry.attributes.position.needsUpdate=!0,s.material.opacity=t*.95}}const sD=.9,nx=.55,rD=35,oD=1.6,ix=new Kc(sD,28);ix.rotateX(-Math.PI/2);const sx=new Hn({color:0,transparent:!0,opacity:nx,depthWrite:!1}),Ds=new tt(ix,sx);Ds.renderOrder=1;function aD(){const n=xn(fe.position.x,fe.position.z),e=Math.max(n,Pe.waterLevel),t=Math.max(0,fe.position.y-e);Ds.position.x=fe.position.x,Ds.position.z=fe.position.z,Ds.position.y=e+.04;const i=Math.min(1,t/rD),s=Math.min(1,t/oD);sx.opacity=nx*s*(1-.85*i);const r=1+i*.4;Ds.scale.set(r,1,r),Ds.visible=fe.position.y>e-.5}_T();iL();Tx();Mx();xo();J.landedRunways[Qi]||(J.landedRunways[Qi]=!0,J.discoveredRunways[Qi]=!0);if(!J.starterGranted){J.obsidian=(J.obsidian|0)+Jl.starterDiamonds,J.visitedIslands[J.currentIsland]=!0;for(const n of Object.keys(J.gofiosByIsland))(J.gofiosByIsland[n]|0)>0&&(J.visitedIslands[n]=!0);J.starterGranted=!0,Ut()}Tv();Js.init();await Promise.all([nP(),K2()]);rt.forEach(n=>{n.elevation=Math.max(Ia(n.x,n.z),Pe.waterLevel+Zl.minAboveWater)});St.add(lP());St.add(uP());St.add(z3());St.add(HL());St.add(mP());St.add(xI());St.add(Ds);St.add(fe);X3();AP();tD();const lD=document.getElementById("restart-btn"),Hc=document.getElementById("crash");async function rx(){await Qs.onCrashRestart(),ru()}lD.addEventListener("click",rx);window.addEventListener("keydown",n=>{n.code==="Space"&&Hc.classList.contains("visible")&&(n.preventDefault(),rx())});function ox(n){Hc.classList.remove("visible"),go(n,{onClose:()=>Hc.classList.add("visible")})}document.getElementById("crash-hangar-btn").addEventListener("click",()=>ox("hangar"));document.getElementById("crash-shop-btn").addEventListener("click",()=>ox("shop"));document.getElementById("crash-home-btn").addEventListener("click",()=>{Hc.classList.remove("visible"),Na()});ru();p3(()=>{YI()||Na()});requestAnimationFrame(()=>{const n=document.getElementById("loading-screen");n&&(n.classList.add("hidden"),setTimeout(()=>n.remove(),600))});setTimeout(()=>Qs.warmup(),5e3);document.addEventListener("visibilitychange",()=>{document.hidden&&t3()});let d0=performance.now();function ax(n){requestAnimationFrame(ax);const e=Math.min(.05,(n-d0)/1e3);d0=n,pI(e),KI(e),gL(e),WL(e),$L(e),iD(),aD(),GL(n/1e3),gP(e),wI(e,fe),$3(fe),Q3(e,fe),IP(fe),nD(fe),XP(e);const t=St.fog!==null;B3(Gt,t),cP(Gt,t),BP(),$x(),OT(n),cn.render(St,Gt)}requestAnimationFrame(ax);export{af as W,Rv as _,of as r};
