(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Jt={sky:12964828,water:3043220,shore:13023631,rock:9077368,snow:15395556,paper:16052712,trunk:7032634,ink:2765624,runway:5591628,pineCanopy:4151864,laurelCanopy:3032880,shrubBody:8160594,grassGround:10858597,cropGround:12100700,urbanGround:10392202,bareGround:10325622,houseWall:15590351,houseRoof:10246468},Ft={size:16e3,segments:1200,waterLevel:.1,fogStart:600,fogEnd:3e3,heightmap:{url:"/teide-game/heightmaps/canaries.png",bbox:{latN:29.5,latS:27.4,lonW:-18.4,lonE:-13.3},center:{lat:28.3,lon:-16.55},metersPerUnit:40,elevRange:[0,4e3]}},_a="TFN",Qf=Object.freeze({startSpeed:22,minSpeed:2,maxSpeed:52,stallSpeed:7,pitchRate:.7,maxClimbPitch:.35,rollRate:1.8,turnFactor:1,speedFromPitch:22,drag:.7,sinkRate:.5,stallSink:9,stallPitchRate:1.9,stallAuthority:.25}),Nc=Object.freeze({startSpeed:22,minSpeed:2,maxSpeed:38,stallSpeed:9,pitchRate:.7,maxClimbPitch:.35,rollRate:1.8,turnFactor:1,speedFromPitch:12,drag:1.6,sinkRate:.5,stallSink:9,stallPitchRate:1.9,stallAuthority:.25}),Me={...Nc},tp=Object.freeze({takeoffSpeed:50,liftoffFraction:.65,linearShare:.15,pitchUpAtLiftoff:.16}),Uc=Object.freeze({takeoffSpeed:32,liftoffFraction:.85,linearShare:.45,pitchUpAtLiftoff:.16}),Di={...Uc},Pn={drag:{kind:"stat",stat:"drag",label:"Aerodynamik",description:"Glättere Faltung — weniger Luftwiderstand, längeres Gleiten.",levels:[1.6,1.3,1,.85,.7],costs:[0,900,2250,9600,19500]},maxSpeed:{kind:"stat",stat:"maxSpeed",label:"Spitzentempo",description:"Erhöht die maximale Fluggeschwindigkeit im Cruise.",levels:[38,42,46,49,52],costs:[0,1200,3e3,13500,27e3]},speedFromPitch:{kind:"stat",stat:"speedFromPitch",label:"Sturzflug",description:"Mehr Beschleunigung im Sturzflug — Höhe wird zu Tempo.",levels:[12,15,18,20,22],costs:[0,750,1950,8400,16500]},stallSpeed:{kind:"stat",stat:"stallSpeed",label:"Stabilität",description:"Tiefere Strömungsabriss-Schwelle — verzeiht langsames Fliegen.",levels:[9,8.5,8,7.5,7],costs:[0,1050,2550,10800,21e3]},takeoffSpeed:{kind:"stat",stat:"takeoffSpeed",label:"Startbahn",description:"Schnellere Beschleunigung beim Start — weniger Roll-Strecke.",levels:[32,37,42,46,50],costs:[0,900,2250,9600,19500]},brake:{kind:"unlock",label:"Luftbremse",description:"Schaltet die Bremsklappen frei (Leertaste im Flug).",levels:[!1,!0],costs:[0,3750]},greyBoost:{kind:"multiStat",target:"greyBoost",label:"Reserve-Boost",description:"Stärkerer Notschub: längere Brennzeit, mehr Schub, schnellerer Refill.",levels:[3,4,5,6,7],costs:[0,750,1950,8400,16500],stats:{tankDuration:[.4,.5,.6,.7,.8],speedBonus:[3,4,5,6,7],rechargeTime:[45,40,35,30,25]}}},Fc={obsidianPerPunkte:100},Ra={force:9,deployTau:.07,maxAngle:1.35},xa={triggerDist:85,triggerHeight:40,deployTau:.35},Hi={brakeForce:14,landingSpeed:2.5,headingTolerance:.45,rollingHeight:1.8,landingBonus:500},Vs={cyclePeriod:6.5,smoothTau:.18,brakeWindow:[.05,1.85],boostWindow:[2.55,4.05],gearWindow:[4.7,6.1]},id={duration:3,startHeight:5e3},sd={toastDuration:1.4,tweenDuration:2},on={columnColor:16777215,columnOpacity:.1,columnTop:95,maxAltitude:95,liftAtCenter:30,particleColor:16777215,particleOpacity:.55,particleSize:1.7,particleDensity:.05,riseSpeed:14},$e={distance:6.5,height:2.6,lookAhead:3.5,posTau:.12,yawTau:.1,pitchTau:.55,runwayDistance:3,runwayHeight:.4,runwayLookAhead:0},ri={verts:8,maxLen:2.8},de={grey:{color:10132122,tankDuration:.4,speedBonus:3,accelRate:35,rechargeTime:45},oneShot:{tiers:[{name:"No Booster",color:0,tankDuration:0,speedBonus:0,accelRate:0},{name:"Booster Level 1",color:5086950,tankDuration:1.2,speedBonus:14,accelRate:45},{name:"Booster Level 2",color:15778888,tankDuration:1.6,speedBonus:20,accelRate:55},{name:"Booster Level 3",color:14702666,tankDuration:2,speedBonus:28,accelRate:70},{name:"Booster Level MAX",color:10905053,tankDuration:2.5,speedBonus:38,accelRate:85}]},refillDuration:1.6,camPushback:2.5,camPushbackTau:.15,exhaust:{offsetX:.36,offsetY:.13,offsetZ:.42,length:1.8,radiusNarrow:.03,radiusWide:.12,intensityTau:.06}},Ee={sampleCount:25e5,treeDensity:1,shrubDensity:.85,grassDensity:.7,cropDensity:.6,bareDensity:.85,droughtShrubDensity:.22,snowDensity:.4,wetlandDensity:.5,slopeThreshold:.45,cliffDensity:.85,cliffHeightRange:[.7,3],rockZoneLowMax:2.5,rockZoneHighMin:37.5,laurelMaxAltitude:1500/40,treeScale:.75,urban:{minClusterPixels:3,churchClusterPixels:8,housesPerPixel:.55,housesMin:2,housesMax:30,houseMinSpacing:2.4,pixelJitter:5.5,clusterScaleMin:.9,clusterScaleMax:1.75},grassTints:[[1.05,1.02,.85],[.85,.95,.7],[1,1,1],[.7,.85,.55],[1.1,1.05,.75],[.95,.9,.8]],rockTintsLow:[[1.2,1.18,1.1],[1.05,.95,.78],[.95,.9,.8],[1.1,1.05,.95],[1.15,1,.82]],rockTintsMid:[[.55,.55,.6],[.45,.45,.5],[.7,.68,.62],[.85,.78,.65],[.5,.52,.55],[.65,.6,.55]],rockTintsHigh:[[1.15,.95,.8],[1.05,.9,.75],[.95,.85,.75],[1.2,1,.85],[.85,.65,.55]],roofTints:[[1,1,1],[.88,.86,.88],[.62,.58,.68],[1.1,.95,.85],[.95,.88,.78]]},ce={ring:{majorRadius:2,tubeRadius:.12,hoverHeight:8,opacity:.85,opacityActivated:.3,colorActivated:7235682},symbol:{size:1.4,extrudeDepth:.22,rotRate:.7,colorActivated:10132122},activation:{radius:2},colorsByType:{peak:{ring:7235682,symbol:9077368},city:{ring:12155486,symbol:15590351},landscape:{ring:5139274,symbol:9283182},beach:{ring:5212840,symbol:15129016}},rewardsByType:{peak:{punkte:800,gofios:5},city:{punkte:400,gofios:1},landscape:{punkte:500,gofios:2},beach:{punkte:400,gofios:1}},tierFractions:[0,.04,.19,.46,.69],hoverLabelRadius:80,activationToast:{duration:3}},te={INTRO:"INTRO",PRELAUNCH:"PRELAUNCH",TAKEOFF_ROLL:"TAKEOFF_ROLL",FLYING:"FLYING",LANDING_ROLL:"LANDING_ROLL",LANDED:"LANDED",CRASHED:"CRASHED"},z={speed:Me.startSpeed,alive:!0,inThermal:!1,brakeAmount:0,gearAmount:0,flightState:te.PRELAUNCH,currentRunway:null,takeoffTime:0,postLiftCooldown:0,landedToastTimer:0,cinematicT:0,cinematicFromPos:null,cinematicToPos:null,cinematicFromQuat:null,cinematicToQuat:null,introT:0,introStartCamPos:null,greyActive:!1,oneShotActive:!1,prevOneShot:!1,boostFuelGrey:1,boostFuelOneshot:0,refillT:1,refillStartGrey:1,refillStartOneshot:0,flightPunkte:0,sessionLandings:0,boosterOverride:null,paused:!1},_t={punkte:0,gofiosByIsland:{tenerife:0,gomera:0,palma:0,gc:0,hierro:0,fuerte:0,lanza:0,graciosa:0},obsidian:0,landings:0,bestFlightPunkte:0,bestSessionLandings:0,upgrades:{drag:0,maxSpeed:0,speedFromPitch:0,stallSpeed:0,takeoffSpeed:0,brake:0,greyBoost:0},oneShotTier:0,exploredPOIs:{},discoveredRunways:{},landedRunways:{},checkpointRunwayId:null,introPlayed:!1,currentIsland:"tenerife",testMode:!1};function ja(n){_t.punkte+=n,z.flightPunkte+=n}function ep(){z.speed=Me.startSpeed,z.alive=!0,z.inThermal=!1,z.brakeAmount=0,z.gearAmount=0,z.flightState=te.PRELAUNCH,z.currentRunway=null,z.takeoffTime=0,z.postLiftCooldown=0,z.landedToastTimer=0,z.cinematicT=0,z.cinematicFromPos=null,z.cinematicToPos=null,z.cinematicFromQuat=null,z.cinematicToQuat=null,z.introT=0,z.introStartCamPos=null,z.greyActive=!1,z.oneShotActive=!1,z.prevOneShot=!1}const Q={PEAK:"peak",CITY:"city",LANDSCAPE:"landscape",BEACH:"beach"};function Oc(n,t){const{center:e,metersPerUnit:i}=Ft.heightmap,s=(t-e.lon)*111320*Math.cos(e.lat*Math.PI/180),r=(n-e.lat)*111320;return{x:s/i,z:-r/i}}const _e=[{id:"tenerife",name:"Tenerife",lat:28.3,lon:-16.55,bboxRadius:1100,playable:!0},{id:"gomera",name:"La Gomera",lat:28.1,lon:-17.21,bboxRadius:350,playable:!0},{id:"palma",name:"La Palma",lat:28.71,lon:-17.85,bboxRadius:600,playable:!0},{id:"gc",name:"Gran Canaria",lat:27.93,lon:-15.59,bboxRadius:700,playable:!0},{id:"hierro",name:"El Hierro",lat:27.74,lon:-18.02,bboxRadius:350,playable:!0},{id:"fuerte",name:"Fuerteventura",lat:28.36,lon:-14.05,bboxRadius:1300,playable:!0},{id:"lanza",name:"Lanzarote",lat:29.04,lon:-13.62,bboxRadius:800,playable:!0},{id:"graciosa",name:"La Graciosa",lat:29.24,lon:-13.5,bboxRadius:180,playable:!0}].map(n=>({...n,...Oc(n.lat,n.lon)})),np=[{id:"teide",name:"Pico del Teide",island:"tenerife",lat:28.2724,lon:-16.6425,ringRadius:10,ringCount:36},{id:"viejo",name:"Pico Viejo",island:"tenerife",lat:28.2632,lon:-16.6534,ringRadius:18,ringCount:48},{id:"taburiente",name:"Caldera de Taburiente",island:"palma",lat:28.708,lon:-17.872,ringRadius:60,ringCount:80},{id:"cumbre-vieja",name:"Cumbre Vieja",island:"palma",lat:28.574,lon:-17.8358,ringRadius:12,ringCount:32},{id:"teneguia",name:"Volcán Teneguía",island:"palma",lat:28.4669,lon:-17.8425,ringRadius:6,ringCount:22},{id:"bandama",name:"Caldera de Bandama",island:"gc",lat:28.0339,lon:-15.4519,ringRadius:10,ringCount:30},{id:"calderon-hondo",name:"Calderón Hondo",island:"fuerte",lat:28.703,lon:-13.939,ringRadius:10,ringCount:30},{id:"arena",name:"Volcán de la Arena",island:"fuerte",lat:28.6997,lon:-13.9594,ringRadius:8,ringCount:24},{id:"timanfaya",name:"Timanfaya",island:"lanza",lat:29,lon:-13.755,ringRadius:40,ringCount:64},{id:"caldera-blanca",name:"Caldera Blanca",island:"lanza",lat:29.0167,lon:-13.7833,ringRadius:15,ringCount:36}].map(n=>({...n,...Oc(n.lat,n.lon)}));function ip(n){let t="tenerife",e=1/0;for(const i of _e){if(!i.playable)continue;const s=n.x-i.x,r=n.z-i.z,a=s*s+r*r;a<e&&(e=a,t=i.id)}return t}const sp=[{id:"tfe-peak-teide",island:"tenerife",type:Q.PEAK,name:"Pico del Teide",lat:28.2724,lon:-16.6425,ele:3715},{id:"tfe-peak-pico-viejo",island:"tenerife",type:Q.PEAK,name:"Pico Viejo",lat:28.2632,lon:-16.6534,ele:3135},{id:"tfe-peak-montana-blanca",island:"tenerife",type:Q.PEAK,name:"Montaña Blanca",lat:28.251,lon:-16.6035,ele:2748},{id:"tfe-peak-guajara",island:"tenerife",type:Q.PEAK,name:"Guajara",lat:28.2207,lon:-16.6157,ele:2718},{id:"tfe-peak-cinchado",island:"tenerife",type:Q.PEAK,name:"Roque Cinchado",lat:28.228,lon:-16.6172,ele:2167},{id:"tfe-peak-tigaiga",island:"tenerife",type:Q.PEAK,name:"Montaña de Tigaiga",lat:28.37,lon:-16.63,ele:1909},{id:"tfe-peak-conde",island:"tenerife",type:Q.PEAK,name:"Roque del Conde",lat:28.1093,lon:-16.7117,ele:1001},{id:"tfe-peak-cruz-carmen",island:"tenerife",type:Q.PEAK,name:"Cruz del Carmen",lat:28.5358,lon:-16.3025,ele:900},{id:"tfe-peak-roques-anaga",island:"tenerife",type:Q.PEAK,name:"Roques de Anaga",lat:28.5775,lon:-16.153,ele:227},{id:"tfe-city-santa-cruz",island:"tenerife",type:Q.CITY,name:"Santa Cruz de Tenerife",lat:28.4636,lon:-16.2518},{id:"tfe-city-la-laguna",island:"tenerife",type:Q.CITY,name:"San Cristóbal de La Laguna",lat:28.4853,lon:-16.3201},{id:"tfe-city-la-orotava",island:"tenerife",type:Q.CITY,name:"La Orotava",lat:28.3902,lon:-16.5234},{id:"tfe-city-puerto-cruz",island:"tenerife",type:Q.CITY,name:"Puerto de la Cruz",lat:28.4144,lon:-16.544},{id:"tfe-city-los-cristianos",island:"tenerife",type:Q.CITY,name:"Los Cristianos",lat:28.0507,lon:-16.71},{id:"tfe-city-las-americas",island:"tenerife",type:Q.CITY,name:"Playa de las Américas",lat:28.054,lon:-16.729},{id:"tfe-city-adeje",island:"tenerife",type:Q.CITY,name:"Adeje",lat:28.1226,lon:-16.7256},{id:"tfe-city-granadilla",island:"tenerife",type:Q.CITY,name:"Granadilla de Abona",lat:28.1182,lon:-16.5781},{id:"tfe-city-icod",island:"tenerife",type:Q.CITY,name:"Icod de los Vinos",lat:28.3729,lon:-16.7106},{id:"tfe-city-garachico",island:"tenerife",type:Q.CITY,name:"Garachico",lat:28.3735,lon:-16.7635},{id:"tfe-city-vilaflor",island:"tenerife",type:Q.CITY,name:"Vilaflor",lat:28.1572,lon:-16.6356},{id:"tfe-city-buenavista",island:"tenerife",type:Q.CITY,name:"Buenavista del Norte",lat:28.3712,lon:-16.8567},{id:"tfe-city-masca",island:"tenerife",type:Q.CITY,name:"Masca",lat:28.3001,lon:-16.8404},{id:"tfe-land-teide-park",island:"tenerife",type:Q.LANDSCAPE,name:"Parque Nacional del Teide",lat:28.2733,lon:-16.6422},{id:"tfe-land-anaga-park",island:"tenerife",type:Q.LANDSCAPE,name:"Parque Rural de Anaga",lat:28.55,lon:-16.2},{id:"tfe-land-teno-park",island:"tenerife",type:Q.LANDSCAPE,name:"Parque Rural de Teno",lat:28.35,lon:-16.85},{id:"tfe-land-barranco-infierno",island:"tenerife",type:Q.LANDSCAPE,name:"Barranco del Infierno",lat:28.1184,lon:-16.7245},{id:"tfe-land-barranco-masca",island:"tenerife",type:Q.LANDSCAPE,name:"Barranco de Masca",lat:28.3,lon:-16.841},{id:"tfe-land-cueva-viento",island:"tenerife",type:Q.LANDSCAPE,name:"Cueva del Viento",lat:28.3754,lon:-16.714},{id:"tfe-land-esperanza",island:"tenerife",type:Q.LANDSCAPE,name:"Bosque de la Esperanza",lat:28.48,lon:-16.41},{id:"tfe-land-pinar-chio",island:"tenerife",type:Q.LANDSCAPE,name:"Pinar de Chío",lat:28.27,lon:-16.71},{id:"tfe-land-los-gigantes",island:"tenerife",type:Q.LANDSCAPE,name:"Acantilados de Los Gigantes",lat:28.248,lon:-16.843},{id:"tfe-land-mirador-garachico",island:"tenerife",type:Q.LANDSCAPE,name:"Mirador de Garachico",lat:28.368,lon:-16.761},{id:"tfe-beach-teresitas",island:"tenerife",type:Q.BEACH,name:"Playa de las Teresitas",lat:28.5096,lon:-16.186},{id:"tfe-beach-vistas",island:"tenerife",type:Q.BEACH,name:"Playa de las Vistas",lat:28.0489,lon:-16.7218},{id:"tfe-beach-arena",island:"tenerife",type:Q.BEACH,name:"Playa de la Arena",lat:28.244,lon:-16.8053},{id:"tfe-beach-medano",island:"tenerife",type:Q.BEACH,name:"Playa El Médano",lat:28.0461,lon:-16.5343},{id:"tfe-beach-benijo",island:"tenerife",type:Q.BEACH,name:"Playa de Benijo",lat:28.5775,lon:-16.1838},{id:"tfe-beach-bollullo",island:"tenerife",type:Q.BEACH,name:"Playa del Bollullo",lat:28.4106,lon:-16.494},{id:"tfe-beach-fanabe",island:"tenerife",type:Q.BEACH,name:"Playa de Fañabé",lat:28.0907,lon:-16.7383},{id:"tfe-beach-jardin",island:"tenerife",type:Q.BEACH,name:"Playa Jardín",lat:28.4189,lon:-16.5586},{id:"tfe-beach-almaciga",island:"tenerife",type:Q.BEACH,name:"Playa de Almáciga",lat:28.5752,lon:-16.1714},{id:"tfe-beach-abama",island:"tenerife",type:Q.BEACH,name:"Playa de Abama",lat:28.1735,lon:-16.7937},{id:"gom-peak-garajonay",island:"gomera",type:Q.PEAK,name:"Alto de Garajonay",lat:28.1163,lon:-17.2476,ele:1487},{id:"gom-city-san-sebastian",island:"gomera",type:Q.CITY,name:"San Sebastián de La Gomera",lat:28.0911,lon:-17.1106},{id:"gom-city-valle-gran-rey",island:"gomera",type:Q.CITY,name:"Valle Gran Rey",lat:28.0922,lon:-17.3358},{id:"gom-city-vallehermoso",island:"gomera",type:Q.CITY,name:"Vallehermoso",lat:28.1797,lon:-17.2658},{id:"gom-city-hermigua",island:"gomera",type:Q.CITY,name:"Hermigua",lat:28.1656,lon:-17.1942},{id:"gom-land-garajonay-park",island:"gomera",type:Q.LANDSCAPE,name:"Parque Nacional de Garajonay",lat:28.1167,lon:-17.25},{id:"gom-land-los-organos",island:"gomera",type:Q.LANDSCAPE,name:"Los Órganos",lat:28.212,lon:-17.282},{id:"gom-land-roque-agando",island:"gomera",type:Q.LANDSCAPE,name:"Roque de Agando",lat:28.1153,lon:-17.2106},{id:"gom-beach-santiago",island:"gomera",type:Q.BEACH,name:"Playa de Santiago",lat:28.0294,lon:-17.1989},{id:"gom-beach-calera",island:"gomera",type:Q.BEACH,name:"Playa de la Calera",lat:28.1023,lon:-17.3401},{id:"gc-peak-nieves",island:"gc",type:Q.PEAK,name:"Pico de las Nieves",lat:27.9617,lon:-15.5803,ele:1949},{id:"gc-city-las-palmas",island:"gc",type:Q.CITY,name:"Las Palmas de Gran Canaria",lat:28.1235,lon:-15.4363},{id:"gc-city-maspalomas",island:"gc",type:Q.CITY,name:"Maspalomas",lat:27.7547,lon:-15.586},{id:"gc-city-teror",island:"gc",type:Q.CITY,name:"Teror",lat:28.0556,lon:-15.547},{id:"gc-city-telde",island:"gc",type:Q.CITY,name:"Telde",lat:27.9974,lon:-15.4178},{id:"gc-land-nublo",island:"gc",type:Q.LANDSCAPE,name:"Roque Nublo",lat:27.965,lon:-15.6175},{id:"gc-land-dunas",island:"gc",type:Q.LANDSCAPE,name:"Dunas de Maspalomas",lat:27.741,lon:-15.5797},{id:"gc-beach-canteras",island:"gc",type:Q.BEACH,name:"Playa de las Canteras",lat:28.1352,lon:-15.4348},{id:"gc-beach-ingles",island:"gc",type:Q.BEACH,name:"Playa del Inglés",lat:27.7597,lon:-15.58},{id:"gc-peak-tejeda",island:"gc",type:Q.PEAK,name:"Cruz de Tejeda",lat:28.0086,lon:-15.6075,ele:1490},{id:"gc-city-tafira",island:"gc",type:Q.CITY,name:"Tafira",lat:28.0769,lon:-15.4569},{id:"gc-city-san-mateo",island:"gc",type:Q.CITY,name:"San Mateo",lat:28.0205,lon:-15.5358},{id:"gc-city-mogan",island:"gc",type:Q.CITY,name:"Puerto de Mogán",lat:27.8158,lon:-15.7625},{id:"gc-land-bandama",island:"gc",type:Q.LANDSCAPE,name:"Caldera de Bandama",lat:28.0339,lon:-15.4519},{id:"gc-land-bentayga",island:"gc",type:Q.LANDSCAPE,name:"Roque Bentayga",lat:27.9697,lon:-15.6519},{id:"gc-land-andenes",island:"gc",type:Q.LANDSCAPE,name:"Andén Verde",lat:28.0769,lon:-15.7833},{id:"gc-beach-amadores",island:"gc",type:Q.BEACH,name:"Playa de Amadores",lat:27.7866,lon:-15.7264},{id:"gc-beach-tauro",island:"gc",type:Q.BEACH,name:"Playa de Tauro",lat:27.7831,lon:-15.7331},{id:"palma-peak-muchachos",island:"palma",type:Q.PEAK,name:"Roque de los Muchachos",lat:28.7544,lon:-17.8851,ele:2426},{id:"palma-city-santa-cruz",island:"palma",type:Q.CITY,name:"Santa Cruz de La Palma",lat:28.6835,lon:-17.7642},{id:"palma-city-llanos",island:"palma",type:Q.CITY,name:"Los Llanos de Aridane",lat:28.6585,lon:-17.9181},{id:"palma-land-taburiente",island:"palma",type:Q.LANDSCAPE,name:"Caldera de Taburiente",lat:28.708,lon:-17.872},{id:"palma-land-cumbre-vieja",island:"palma",type:Q.LANDSCAPE,name:"Cumbre Vieja",lat:28.574,lon:-17.8358},{id:"palma-beach-nogales",island:"palma",type:Q.BEACH,name:"Playa de Nogales",lat:28.7548,lon:-17.7616},{id:"palma-beach-puerto-naos",island:"palma",type:Q.BEACH,name:"Playa de Puerto Naos",lat:28.5828,lon:-17.9128},{id:"palma-peak-bejenado",island:"palma",type:Q.PEAK,name:"Pico Bejenado",lat:28.7036,lon:-17.8839,ele:1854},{id:"palma-peak-birigoyo",island:"palma",type:Q.PEAK,name:"Pico Birigoyo",lat:28.6483,lon:-17.8492,ele:1808},{id:"palma-city-tazacorte",island:"palma",type:Q.CITY,name:"Tazacorte",lat:28.6394,lon:-17.9333},{id:"palma-city-fuencaliente",island:"palma",type:Q.CITY,name:"Fuencaliente",lat:28.4889,lon:-17.8453},{id:"palma-city-mazo",island:"palma",type:Q.CITY,name:"Villa de Mazo",lat:28.6044,lon:-17.7892},{id:"palma-land-salinas",island:"palma",type:Q.LANDSCAPE,name:"Salinas de Fuencaliente",lat:28.4528,lon:-17.8447},{id:"palma-land-volcan-teneguia",island:"palma",type:Q.LANDSCAPE,name:"Volcán Teneguía",lat:28.4669,lon:-17.8425},{id:"palma-beach-charco-verde",island:"palma",type:Q.BEACH,name:"Playa de Charco Verde",lat:28.5483,lon:-17.8975},{id:"hierro-peak-malpaso",island:"hierro",type:Q.PEAK,name:"Pico de Malpaso",lat:27.733,lon:-18.0177,ele:1501},{id:"hierro-city-valverde",island:"hierro",type:Q.CITY,name:"Valverde",lat:27.8055,lon:-17.9183},{id:"hierro-city-frontera",island:"hierro",type:Q.CITY,name:"La Frontera",lat:27.7639,lon:-18.0122},{id:"hierro-land-sabinar",island:"hierro",type:Q.LANDSCAPE,name:"El Sabinar",lat:27.756,lon:-18.1148},{id:"hierro-land-bonanza",island:"hierro",type:Q.LANDSCAPE,name:"Roque de la Bonanza",lat:27.7029,lon:-17.9429},{id:"hierro-beach-charco-azul",island:"hierro",type:Q.BEACH,name:"Charco Azul",lat:27.8061,lon:-18.1057},{id:"hierro-city-tamaduste",island:"hierro",type:Q.CITY,name:"Tamaduste",lat:27.8125,lon:-17.9136},{id:"hierro-city-el-pinar",island:"hierro",type:Q.CITY,name:"El Pinar",lat:27.7053,lon:-17.9928},{id:"hierro-land-roques-salmor",island:"hierro",type:Q.LANDSCAPE,name:"Roques de Salmor",lat:27.8294,lon:-17.9694},{id:"hierro-land-pozo-salud",island:"hierro",type:Q.LANDSCAPE,name:"Pozo de la Salud",lat:27.7681,lon:-18.1219},{id:"hierro-land-punta-dehesa",island:"hierro",type:Q.LANDSCAPE,name:"Punta de la Dehesa",lat:27.7842,lon:-18.1633},{id:"hierro-beach-mar-calmas",island:"hierro",type:Q.BEACH,name:"Mar de las Calmas",lat:27.6961,lon:-18.0356},{id:"fuerte-peak-zarza",island:"fuerte",type:Q.PEAK,name:"Pico de la Zarza",lat:28.0828,lon:-14.3053,ele:807},{id:"fuerte-city-puerto-rosario",island:"fuerte",type:Q.CITY,name:"Puerto del Rosario",lat:28.5011,lon:-13.8627},{id:"fuerte-city-corralejo",island:"fuerte",type:Q.CITY,name:"Corralejo",lat:28.7361,lon:-13.87},{id:"fuerte-city-morro-jable",island:"fuerte",type:Q.CITY,name:"Morro Jable",lat:28.054,lon:-14.349},{id:"fuerte-land-corralejo-park",island:"fuerte",type:Q.LANDSCAPE,name:"Parque Natural de Corralejo",lat:28.717,lon:-13.834},{id:"fuerte-land-calderon",island:"fuerte",type:Q.LANDSCAPE,name:"Calderón Hondo",lat:28.703,lon:-13.939},{id:"fuerte-beach-sotavento",island:"fuerte",type:Q.BEACH,name:"Playa de Sotavento",lat:28.1973,lon:-14.218},{id:"fuerte-beach-cofete",island:"fuerte",type:Q.BEACH,name:"Playa de Cofete",lat:28.0945,lon:-14.382},{id:"fuerte-city-betancuria",island:"fuerte",type:Q.CITY,name:"Betancuria",lat:28.4244,lon:-14.0589},{id:"fuerte-city-antigua",island:"fuerte",type:Q.CITY,name:"Antigua",lat:28.4181,lon:-14.0114},{id:"fuerte-city-pajara",island:"fuerte",type:Q.CITY,name:"Pájara",lat:28.3531,lon:-14.1006},{id:"fuerte-city-caleta-fuste",island:"fuerte",type:Q.CITY,name:"Caleta de Fuste",lat:28.395,lon:-13.8633},{id:"fuerte-city-tuineje",island:"fuerte",type:Q.CITY,name:"Tuineje",lat:28.3219,lon:-14.0481},{id:"fuerte-land-isla-lobos",island:"fuerte",type:Q.LANDSCAPE,name:"Isla de Lobos",lat:28.7556,lon:-13.8225},{id:"fuerte-land-arena-volcano",island:"fuerte",type:Q.LANDSCAPE,name:"Volcán de la Arena",lat:28.6997,lon:-13.9594},{id:"fuerte-beach-garcey",island:"fuerte",type:Q.BEACH,name:"Playa de Garcey",lat:28.3344,lon:-14.2197},{id:"lanza-peak-penas-chache",island:"lanza",type:Q.PEAK,name:"Peñas del Chache",lat:29.1108,lon:-13.5468,ele:671},{id:"lanza-city-arrecife",island:"lanza",type:Q.CITY,name:"Arrecife",lat:28.9637,lon:-13.5477},{id:"lanza-city-costa-teguise",island:"lanza",type:Q.CITY,name:"Costa Teguise",lat:28.987,lon:-13.5},{id:"lanza-city-playa-blanca",island:"lanza",type:Q.CITY,name:"Playa Blanca",lat:28.8597,lon:-13.8253},{id:"lanza-land-timanfaya",island:"lanza",type:Q.LANDSCAPE,name:"Parque Nacional de Timanfaya",lat:29,lon:-13.755},{id:"lanza-land-cueva-verdes",island:"lanza",type:Q.LANDSCAPE,name:"Cueva de los Verdes",lat:29.1574,lon:-13.4342},{id:"lanza-land-mirador-rio",island:"lanza",type:Q.LANDSCAPE,name:"Mirador del Río",lat:29.2179,lon:-13.4827},{id:"lanza-beach-papagayo",island:"lanza",type:Q.BEACH,name:"Playa Papagayo",lat:28.835,lon:-13.804},{id:"lanza-beach-famara",island:"lanza",type:Q.BEACH,name:"Playa de Famara",lat:29.13,lon:-13.5538},{id:"lanza-peak-montana-roja",island:"lanza",type:Q.PEAK,name:"Montaña Roja",lat:28.8567,lon:-13.8636,ele:194},{id:"lanza-city-teguise",island:"lanza",type:Q.CITY,name:"Teguise",lat:29.0589,lon:-13.5614},{id:"lanza-city-haria",island:"lanza",type:Q.CITY,name:"Haría",lat:29.1453,lon:-13.4972},{id:"lanza-city-yaiza",island:"lanza",type:Q.CITY,name:"Yaiza",lat:28.9528,lon:-13.7686},{id:"lanza-city-tinajo",island:"lanza",type:Q.CITY,name:"Tinajo",lat:29.0628,lon:-13.675},{id:"lanza-land-jameos",island:"lanza",type:Q.LANDSCAPE,name:"Jameos del Agua",lat:29.1583,lon:-13.4344},{id:"lanza-land-el-golfo",island:"lanza",type:Q.LANDSCAPE,name:"El Golfo",lat:28.9722,lon:-13.8261},{id:"lanza-beach-quemada",island:"lanza",type:Q.BEACH,name:"Playa Quemada",lat:28.9039,lon:-13.7572},{id:"graciosa-peak-agujas",island:"graciosa",type:Q.PEAK,name:"Las Agujas Grandes",lat:29.262,lon:-13.502,ele:266},{id:"graciosa-city-caleta",island:"graciosa",type:Q.CITY,name:"Caleta del Sebo",lat:29.2261,lon:-13.5021},{id:"graciosa-land-amarilla",island:"graciosa",type:Q.LANDSCAPE,name:"Montaña Amarilla",lat:29.2128,lon:-13.539},{id:"graciosa-beach-conchas",island:"graciosa",type:Q.BEACH,name:"Playa de las Conchas",lat:29.27,lon:-13.541},{id:"graciosa-beach-francesa",island:"graciosa",type:Q.BEACH,name:"Playa Francesa",lat:29.215,lon:-13.531},{id:"graciosa-city-pedro-barba",island:"graciosa",type:Q.CITY,name:"Pedro Barba",lat:29.2461,lon:-13.4778},{id:"graciosa-peak-bermeja",island:"graciosa",type:Q.PEAK,name:"Montaña Bermeja",lat:29.2603,lon:-13.5183,ele:157},{id:"graciosa-beach-lambra",island:"graciosa",type:Q.BEACH,name:"Playa Lambra",lat:29.2725,lon:-13.505}],ai=sp.map(n=>({...n,...Oc(n.lat,n.lon)}));(function(){const t=2*ce.ring.majorRadius+1.2,e=t*t,i=30;for(let s=0;s<i;s++){let r=!1;for(let a=0;a<ai.length;a++)for(let o=a+1;o<ai.length;o++){const c=ai[a],l=ai[o],u=c.x-l.x,h=c.z-l.z,f=u*u+h*h;if(f>=e)continue;if(f<1e-4){c.x+=.13,c.z+=.07,l.x-=.13,l.z-=.07,r=!0;continue}const m=Math.sqrt(f),g=(t-m)*.5,v=u/m,p=h/m;c.x+=v*g,c.z+=p*g,l.x-=v*g,l.z-=p*g,r=!0}if(!r)break}})();const uo=ai.reduce((n,t)=>((n[t.island]??=[]).push(t),n),{}),rp=ai.reduce((n,t)=>n+(ce.rewardsByType[t.type]?.gofios|0),0),rr=ce.tierFractions.map(n=>Math.round(n*rp));function ap(n){return n in Nc?Me:n in Uc?Di:null}const op={greyBoost:de.grey};function Mr(){const n=_t.testMode;Object.assign(Me,n?Qf:Nc),Object.assign(Di,n?tp:Uc);for(const[t,e]of Object.entries(Pn)){const i=n?Number.POSITIVE_INFINITY:_t.upgrades?.[t]|0;if(e.kind==="stat"){const s=Math.max(0,Math.min(e.levels.length-1,i)),r=ap(e.stat);r&&(r[e.stat]=e.levels[s])}else if(e.kind==="multiStat"){const s=op[e.target];if(!s)continue;const r=Object.keys(e.stats),a=e.stats[r[0]].length-1,o=Math.max(0,Math.min(a,i));for(const c of r)s[c]=e.stats[c][o]}}}function Ps(){return _t.testMode?z.boosterOverride!=null?z.boosterOverride:4:_t.oneShotTier|0}function Bc(){let n=0;for(const t of Object.values(_t.gofiosByIsland))n+=t|0;return n}function rd(n){let t=0;for(let e=rr.length-1;e>=0;e--)if(n>=rr[e]){t=e;break}return t}function ad(){return _t.testMode?!0:!!_t.upgrades?.brake}function cp(){const n=rd(Bc());n>(_t.oneShotTier|0)&&(_t.oneShotTier=n)}const zc="teide-save",va=4,od=["punkte","gofiosByIsland","obsidian","landings","bestFlightPunkte","bestSessionLandings","upgrades","oneShotTier","exploredPOIs","discoveredRunways","landedRunways","checkpointRunwayId","currentIsland","testMode"];function lp(){const n={version:va};for(const t of od)n[t]=_t[t];return n}function up(n){for(const t of od){const e=n[t];if(e===void 0)continue;const i=_t[t];i&&typeof i=="object"&&!Array.isArray(i)&&e&&typeof e=="object"&&!Array.isArray(e)?Object.assign(i,e):_t[t]=e}}function hp(n){if(n.version===1){const t={};if(n.exploredPOIs)for(const e of ai){if(!n.exploredPOIs[e.id])continue;const i=ce.rewardsByType[e.type];i&&(t[e.island]=(t[e.island]|0)+i.gofios)}n.gofiosByIsland=t,n.version=2}if(n.version===2&&(n.discoveredRunways={},n.landedRunways={},n.checkpointRunwayId&&(n.discoveredRunways[n.checkpointRunwayId]=!0,n.landedRunways[n.checkpointRunwayId]=!0),n.version=3),n.version===3){const t=n.oneShotTierByIsland||{};let e=0;for(const i of Object.values(t))e=Math.max(e,i|0);n.oneShotTier=e,delete n.oneShotTierByIsland,n.version=4}return n}function dp(){try{const n=localStorage.getItem(zc);if(!n)return!1;let t=JSON.parse(n);return!t||typeof t!="object"?!1:typeof t.version!="number"?(console.warn("[save] discarding save: missing version"),!1):t.version>va?(console.warn(`[save] discarding save: future version ${t.version} > ${va}`),!1):(t=hp(t),t.version!==va?(console.warn(`[save] discarding save: migration left version at ${t.version}`),!1):(up(t),!0))}catch(n){return console.warn("[save] load failed:",n),!1}}function fp(){try{localStorage.setItem(zc,JSON.stringify(lp()))}catch(n){console.warn("[save] write failed:",n)}}let ho=!1;function In(){ho||(ho=!0,queueMicrotask(()=>{ho=!1,fp()}))}function pp(){try{localStorage.removeItem(zc)}catch{}}const ge={up:!1,down:!1,left:!1,right:!1,brake:!1,boost:!1,oneShot:!1};function cd(n,t){switch(n.key){case"ArrowUp":case"w":case"W":ge.up=t;break;case"ArrowDown":case"s":case"S":ge.down=t;break;case"ArrowLeft":case"a":case"A":ge.left=t;break;case"ArrowRight":case"d":case"D":ge.right=t;break;case" ":case"Spacebar":ge.brake=t&&ad(),n.preventDefault();break;case"Shift":ge.boost=t;break;case"f":case"F":ge.oneShot=t;break;case"t":case"T":t&&(_t.testMode=!_t.testMode,Mr(),In());break;case"b":case"B":if(t&&_t.testMode){const e=de.oneShot.tiers.length-1,i=z.boosterOverride!=null?z.boosterOverride:4;z.boosterOverride=(i+1)%(e+1)}break}}window.addEventListener("keydown",n=>cd(n,!0));window.addEventListener("keyup",n=>cd(n,!1));const ld="teide-settings",ud=100,kc=3e3,hd=1e4,Hc=1e7,Gc={low:{segments:800,samples:15e5},standard:{segments:1200,samples:25e5},high:{segments:2e3,samples:5e6},ultra:{segments:kc,samples:Hc}},fo={...Gc.standard};function dd(){try{const n=localStorage.getItem(ld);if(!n)return{...fo};const t=JSON.parse(n);return fd({...fo,...t})}catch{return{...fo}}}function mp(n){try{localStorage.setItem(ld,JSON.stringify(fd(n)))}catch{}}function fd(n){return{segments:Math.max(ud,Math.min(kc,n.segments|0)),samples:Math.max(hd,Math.min(Hc,n.samples|0))}}function gp(){const n=dd(),t=new URLSearchParams(window.location.search),e=parseInt(t.get("segments"),10),i=parseInt(t.get("samples"),10);return Number.isFinite(e)&&e>=ud&&e<=kc&&(n.segments=e),Number.isFinite(i)&&i>=hd&&i<=Hc&&(n.samples=i),Ft.segments=n.segments,Ee.sampleCount=n.samples,n}function _p(n){for(const[t,e]of Object.entries(Gc))if(e.segments===n.segments&&e.samples===n.samples)return t;return null}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vc="160",xp=0,xl=1,vp=2,pd=1,yp=2,Hn=3,gi=0,je=1,qe=2,hi=0,Ss=1,Pa=2,vl=3,yl=4,Mp=5,Ri=100,Sp=101,Ep=102,Ml=103,Sl=104,bp=200,Tp=201,Ap=202,wp=203,cc=204,lc=205,Cp=206,Rp=207,Pp=208,Lp=209,Ip=210,Dp=211,Np=212,Up=213,Fp=214,Op=0,Bp=1,zp=2,La=3,kp=4,Hp=5,Gp=6,Vp=7,Wc=0,Wp=1,Xp=2,di=0,qp=1,Yp=2,$p=3,jp=4,Zp=5,Kp=6,md=300,Ls=301,Is=302,uc=303,hc=304,Za=306,dc=1e3,_n=1001,fc=1002,Xe=1003,El=1004,po=1005,cn=1006,Jp=1007,pr=1008,fi=1009,Qp=1010,tm=1011,Xc=1012,gd=1013,oi=1014,ci=1015,mr=1016,_d=1017,xd=1018,Fi=1020,em=1021,xn=1023,nm=1024,im=1025,Oi=1026,Ds=1027,sm=1028,vd=1029,rm=1030,yd=1031,Md=1033,mo=33776,go=33777,_o=33778,xo=33779,bl=35840,Tl=35841,Al=35842,wl=35843,Sd=36196,Cl=37492,Rl=37496,Pl=37808,Ll=37809,Il=37810,Dl=37811,Nl=37812,Ul=37813,Fl=37814,Ol=37815,Bl=37816,zl=37817,kl=37818,Hl=37819,Gl=37820,Vl=37821,vo=36492,Wl=36494,Xl=36495,am=36283,ql=36284,Yl=36285,$l=36286,Ed=3e3,Bi=3001,om=3200,cm=3201,bd=0,lm=1,un="",be="srgb",Xn="srgb-linear",qc="display-p3",Ka="display-p3-linear",Ia="linear",ae="srgb",Da="rec709",Na="p3",Zi=7680,jl=519,um=512,hm=513,dm=514,Td=515,fm=516,pm=517,mm=518,gm=519,Zl=35044,Kl="300 es",pc=1035,Gn=2e3,Ua=2001;class Bs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jl=1234567;const Es=Math.PI/180,gr=180/Math.PI;function qi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]).toLowerCase()}function De(n,t,e){return Math.max(t,Math.min(e,n))}function Yc(n,t){return(n%t+t)%t}function _m(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function xm(n,t,e){return n!==t?(e-n)/(t-n):0}function ar(n,t,e){return(1-e)*n+e*t}function vm(n,t,e,i){return ar(n,t,1-Math.exp(-e*i))}function ym(n,t=1){return t-Math.abs(Yc(n,t*2)-t)}function Mm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Sm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Em(n,t){return n+Math.floor(Math.random()*(t-n+1))}function bm(n,t){return n+Math.random()*(t-n)}function Tm(n){return n*(.5-Math.random())}function Am(n){n!==void 0&&(Jl=n);let t=Jl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wm(n){return n*Es}function Cm(n){return n*gr}function mc(n){return(n&n-1)===0&&n!==0}function Rm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Fa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Pm(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),u=a((t+i)/2),h=r((t-i)/2),f=a((t-i)/2),m=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*u,c*h,c*f,o*l);break;case"YZY":n.set(c*f,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*f,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*m,o*l);break;case"YXY":n.set(c*m,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*m,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ms(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ve(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Gi={DEG2RAD:Es,RAD2DEG:gr,generateUUID:qi,clamp:De,euclideanModulo:Yc,mapLinear:_m,inverseLerp:xm,lerp:ar,damp:vm,pingpong:ym,smoothstep:Mm,smootherstep:Sm,randInt:Em,randFloat:bm,randFloatSpread:Tm,seededRandom:Am,degToRad:wm,radToDeg:Cm,isPowerOfTwo:mc,ceilPowerOfTwo:Rm,floorPowerOfTwo:Fa,setQuaternionFromProperEuler:Pm,normalize:Ve,denormalize:ms};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,i,s,r,a,o,c,l){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],m=i[5],g=i[8],v=s[0],p=s[3],d=s[6],y=s[1],_=s[4],M=s[7],C=s[2],b=s[5],w=s[8];return r[0]=a*v+o*y+c*C,r[3]=a*p+o*_+c*b,r[6]=a*d+o*M+c*w,r[1]=l*v+u*y+h*C,r[4]=l*p+u*_+h*b,r[7]=l*d+u*M+h*w,r[2]=f*v+m*y+g*C,r[5]=f*p+m*_+g*b,r[8]=f*d+m*M+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,f=o*c-u*r,m=l*r-a*c,g=e*h+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*l-u*i)*v,t[2]=(o*i-s*a)*v,t[3]=f*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(i*c-l*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(yo.makeScale(t,e)),this}rotate(t){return this.premultiply(yo.makeRotation(-t)),this}translate(t,e){return this.premultiply(yo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yo=new kt;function Ad(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lm(){const n=Oa("canvas");return n.style.display="block",n}const Ql={};function or(n){n in Ql||(Ql[n]=!0,console.warn(n))}const tu=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eu=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wr={[Xn]:{transfer:Ia,primaries:Da,toReference:n=>n,fromReference:n=>n},[be]:{transfer:ae,primaries:Da,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ka]:{transfer:Ia,primaries:Na,toReference:n=>n.applyMatrix3(eu),fromReference:n=>n.applyMatrix3(tu)},[qc]:{transfer:ae,primaries:Na,toReference:n=>n.convertSRGBToLinear().applyMatrix3(eu),fromReference:n=>n.applyMatrix3(tu).convertLinearToSRGB()}},Im=new Set([Xn,Ka]),ne={enabled:!0,_workingColorSpace:Xn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Im.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=wr[t].toReference,s=wr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return wr[n].primaries},getTransfer:function(n){return n===un?Ia:wr[n].transfer}};function bs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ki;class wd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ki===void 0&&(Ki=Oa("canvas")),Ki.width=t.width,Ki.height=t.height;const i=Ki.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Oa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bs(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bs(e[i]/255)*255):e[i]=bs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dm=0;class Cd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=qi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(So(s[a].image)):r.push(So(s[a]))}else r=So(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function So(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nm=0;class nn extends Bs{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,i=_n,s=_n,r=cn,a=pr,o=xn,c=fi,l=nn.DEFAULT_ANISOTROPY,u=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=qi(),this.name="",this.source=new Cd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Bi?be:un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==md)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dc:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dc:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===be?Bi:Ed}set encoding(t){or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Bi?be:un}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=md;nn.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,i=0,s=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],g=c[9],v=c[2],p=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,M=(m+1)/2,C=(d+1)/2,b=(u+f)/4,w=(h+v)/4,U=(g+p)/4;return _>M&&_>C?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=b/i,r=w/i):M>C?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=b/s,r=U/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=w/r,s=U/r),this.set(i,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(h-v)/y,this.z=(f-u)/y,this.w=Math.acos((l+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Um extends Bs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Bi?be:un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new nn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends Um{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Rd extends nn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fm extends nn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fe{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const f=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(h!==v||c!==f||l!==m||u!==g){let p=1-o;const d=c*f+l*m+u*g+h*v,y=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const C=Math.sqrt(_),b=Math.atan2(C,d*y);p=Math.sin(p*b)/C,o=Math.sin(o*b)/C}const M=o*y;if(c=c*p+f*M,l=l*p+m*M,u=u*p+g*M,h=h*p+v*M,p===1-o){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+u*h+c*m-l*f,t[e+1]=c*g+u*f+l*h-o*m,t[e+2]=l*g+u*m+o*f-c*h,t[e+3]=u*g-o*h-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),h=o(r/2),f=c(i/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"YZX":this._x=f*u*h+l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h-f*m*g;break;case"XZY":this._x=f*u*h-l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+c*l+a*h-o*u,this.y=i+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Eo.copy(this).projectOnVector(t),this.sub(Eo)}reflect(t){return this.sub(Eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new D,nu=new Fe;class Yi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cr.copy(i.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Rr.subVectors(this.max,Ws),Ji.subVectors(t.a,Ws),Qi.subVectors(t.b,Ws),ts.subVectors(t.c,Ws),Zn.subVectors(Qi,Ji),Kn.subVectors(ts,Qi),Mi.subVectors(Ji,ts);let e=[0,-Zn.z,Zn.y,0,-Kn.z,Kn.y,0,-Mi.z,Mi.y,Zn.z,0,-Zn.x,Kn.z,0,-Kn.x,Mi.z,0,-Mi.x,-Zn.y,Zn.x,0,-Kn.y,Kn.x,0,-Mi.y,Mi.x,0];return!bo(e,Ji,Qi,ts,Rr)||(e=[1,0,0,0,1,0,0,0,1],!bo(e,Ji,Qi,ts,Rr))?!1:(Pr.crossVectors(Zn,Kn),e=[Pr.x,Pr.y,Pr.z],bo(e,Ji,Qi,ts,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new D,new D,new D,new D,new D,new D,new D,new D],hn=new D,Cr=new Yi,Ji=new D,Qi=new D,ts=new D,Zn=new D,Kn=new D,Mi=new D,Ws=new D,Rr=new D,Pr=new D,Si=new D;function bo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Si.fromArray(n,r);const o=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),c=t.dot(Si),l=e.dot(Si),u=i.dot(Si);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Om=new Yi,Xs=new D,To=new D;class xi{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Om.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);const e=Xs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Xs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(To)),this.expandByPoint(Xs.copy(t.center).sub(To))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new D,Ao=new D,Lr=new D,Jn=new D,wo=new D,Ir=new D,Co=new D;class $c{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fn.copy(this.origin).addScaledVector(this.direction,e),Fn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ao.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),Jn.copy(this.origin).sub(Ao);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Lr),o=Jn.dot(this.direction),c=-Jn.dot(Lr),l=Jn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*c-o,f=a*o-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,m=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ao).addScaledVector(Lr,f),m}intersectSphere(t,e){Fn.subVectors(t.center,this.origin);const i=Fn.dot(this.direction),s=Fn.dot(Fn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Fn)!==null}intersectTriangle(t,e,i,s,r){wo.subVectors(e,t),Ir.subVectors(i,t),Co.crossVectors(wo,Ir);let a=this.direction.dot(Co),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,t);const c=o*this.direction.dot(Ir.crossVectors(Jn,Ir));if(c<0)return null;const l=o*this.direction.dot(wo.cross(Jn));if(l<0||c+l>a)return null;const u=-o*Jn.dot(Co);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,i,s,r,a,o,c,l,u,h,f,m,g,v,p){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,u,h,f,m,g,v,p)}set(t,e,i,s,r,a,o,c,l,u,h,f,m,g,v,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),a=1/es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,m=a*h,g=o*u,v=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+g*l,e[5]=f-v*l,e[9]=-o*c,e[2]=v-f*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*u,m=c*h,g=l*u,v=l*h;e[0]=f+v*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=v+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*u,m=c*h,g=l*u,v=l*h;e[0]=f-v*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=v-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*u,m=a*h,g=o*u,v=o*h;e[0]=c*u,e[4]=g*l-m,e[8]=f*l+v,e[1]=c*h,e[5]=v*l+f,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,m=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=v-f*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=m*h+g,e[10]=f-v*h}else if(t.order==="XZY"){const f=a*c,m=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+v,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bm,t,zm)}lookAt(t,e,i){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Qn.crossVectors(i,Ke),Qn.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Qn.crossVectors(i,Ke)),Qn.normalize(),Dr.crossVectors(Ke,Qn),s[0]=Qn.x,s[4]=Dr.x,s[8]=Ke.x,s[1]=Qn.y,s[5]=Dr.y,s[9]=Ke.y,s[2]=Qn.z,s[6]=Dr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],m=i[13],g=i[2],v=i[6],p=i[10],d=i[14],y=i[3],_=i[7],M=i[11],C=i[15],b=s[0],w=s[4],U=s[8],S=s[12],T=s[1],V=s[5],W=s[9],at=s[13],F=s[2],Y=s[6],Z=s[10],K=s[14],G=s[3],it=s[7],ot=s[11],ft=s[15];return r[0]=a*b+o*T+c*F+l*G,r[4]=a*w+o*V+c*Y+l*it,r[8]=a*U+o*W+c*Z+l*ot,r[12]=a*S+o*at+c*K+l*ft,r[1]=u*b+h*T+f*F+m*G,r[5]=u*w+h*V+f*Y+m*it,r[9]=u*U+h*W+f*Z+m*ot,r[13]=u*S+h*at+f*K+m*ft,r[2]=g*b+v*T+p*F+d*G,r[6]=g*w+v*V+p*Y+d*it,r[10]=g*U+v*W+p*Z+d*ot,r[14]=g*S+v*at+p*K+d*ft,r[3]=y*b+_*T+M*F+C*G,r[7]=y*w+_*V+M*Y+C*it,r[11]=y*U+_*W+M*Z+C*ot,r[15]=y*S+_*at+M*K+C*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],v=t[7],p=t[11],d=t[15];return g*(+r*c*h-s*l*h-r*o*f+i*l*f+s*o*m-i*c*m)+v*(+e*c*m-e*l*f+r*a*f-s*a*m+s*l*u-r*c*u)+p*(+e*l*h-e*o*m-r*a*h+i*a*m+r*o*u-i*l*u)+d*(-s*o*u-e*c*h+e*o*f+s*a*h-i*a*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],v=t[13],p=t[14],d=t[15],y=h*p*l-v*f*l+v*c*m-o*p*m-h*c*d+o*f*d,_=g*f*l-u*p*l-g*c*m+a*p*m+u*c*d-a*f*d,M=u*v*l-g*h*l+g*o*m-a*v*m-u*o*d+a*h*d,C=g*h*c-u*v*c-g*o*f+a*v*f+u*o*p-a*h*p,b=e*y+i*_+s*M+r*C;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=y*w,t[1]=(v*f*r-h*p*r-v*s*m+i*p*m+h*s*d-i*f*d)*w,t[2]=(o*p*r-v*c*r+v*s*l-i*p*l-o*s*d+i*c*d)*w,t[3]=(h*c*r-o*f*r-h*s*l+i*f*l+o*s*m-i*c*m)*w,t[4]=_*w,t[5]=(u*p*r-g*f*r+g*s*m-e*p*m-u*s*d+e*f*d)*w,t[6]=(g*c*r-a*p*r-g*s*l+e*p*l+a*s*d-e*c*d)*w,t[7]=(a*f*r-u*c*r+u*s*l-e*f*l-a*s*m+e*c*m)*w,t[8]=M*w,t[9]=(g*h*r-u*v*r-g*i*m+e*v*m+u*i*d-e*h*d)*w,t[10]=(a*v*r-g*o*r+g*i*l-e*v*l-a*i*d+e*o*d)*w,t[11]=(u*o*r-a*h*r-u*i*l+e*h*l+a*i*m-e*o*m)*w,t[12]=C*w,t[13]=(u*v*s-g*h*s+g*i*f-e*v*f-u*i*p+e*h*p)*w,t[14]=(g*o*s-a*v*s-g*i*c+e*v*c+a*i*p-e*o*p)*w,t[15]=(a*h*s-u*o*s+u*i*c-e*h*c-a*i*f+e*o*f)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,f=r*l,m=r*u,g=r*h,v=a*u,p=a*h,d=o*h,y=c*l,_=c*u,M=c*h,C=i.x,b=i.y,w=i.z;return s[0]=(1-(v+d))*C,s[1]=(m+M)*C,s[2]=(g-_)*C,s[3]=0,s[4]=(m-M)*b,s[5]=(1-(f+d))*b,s[6]=(p+y)*b,s[7]=0,s[8]=(g+_)*w,s[9]=(p-y)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=es.set(s[0],s[1],s[2]).length();const a=es.set(s[4],s[5],s[6]).length(),o=es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],dn.copy(this);const l=1/r,u=1/a,h=1/o;return dn.elements[0]*=l,dn.elements[1]*=l,dn.elements[2]*=l,dn.elements[4]*=u,dn.elements[5]*=u,dn.elements[6]*=u,dn.elements[8]*=h,dn.elements[9]*=h,dn.elements[10]*=h,e.setFromRotationMatrix(dn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Gn){const c=this.elements,l=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let m,g;if(o===Gn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ua)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Gn){const c=this.elements,l=1/(e-t),u=1/(i-s),h=1/(a-r),f=(e+t)*l,m=(i+s)*u;let g,v;if(o===Gn)g=(a+r)*h,v=-2*h;else if(o===Ua)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const es=new D,dn=new Zt,Bm=new D(0,0,0),zm=new D(1,1,1),Qn=new D,Dr=new D,Ke=new D,iu=new Zt,su=new Fe;class bn{constructor(t=0,e=0,i=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return iu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(iu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return su.setFromEuler(this),this.setFromQuaternion(su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Pd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let km=0;const ru=new D,ns=new Fe,On=new Zt,Nr=new D,qs=new D,Hm=new D,Gm=new Fe,au=new D(1,0,0),ou=new D(0,1,0),cu=new D(0,0,1),Vm={type:"added"},Wm={type:"removed"};class Te extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new D,e=new bn,i=new Fe,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new kt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(au,t)}rotateY(t){return this.rotateOnAxis(ou,t)}rotateZ(t){return this.rotateOnAxis(cu,t)}translateOnAxis(t,e){return ru.copy(t).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(au,t)}translateY(t){return this.translateOnAxis(ou,t)}translateZ(t){return this.translateOnAxis(cu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Nr.copy(t):Nr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(qs,Nr,this.up):On.lookAt(Nr,qs,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(On),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Vm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wm)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,Hm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Gm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Te.DEFAULT_UP=new D(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new D,Bn=new D,Ro=new D,zn=new D,is=new D,ss=new D,lu=new D,Po=new D,Lo=new D,Io=new D;let Ur=!1;class ln{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),fn.subVectors(t,e),s.cross(fn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){fn.subVectors(s,e),Bn.subVectors(i,e),Ro.subVectors(t,e);const a=fn.dot(fn),o=fn.dot(Bn),c=fn.dot(Ro),l=Bn.dot(Bn),u=Bn.dot(Ro),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(l*c-o*u)*f,g=(a*u-o*c)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getUV(t,e,i,s,r,a,o,c){return Ur===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ur=!0),this.getInterpolation(t,e,i,s,r,a,o,c)}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(a,zn.y),c.addScaledVector(o,zn.z),c)}static isFrontFacing(t,e,i,s){return fn.subVectors(i,e),Bn.subVectors(t,e),fn.cross(Bn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),fn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Ur===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ur=!0),ln.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;is.subVectors(s,i),ss.subVectors(r,i),Po.subVectors(t,i);const c=is.dot(Po),l=ss.dot(Po);if(c<=0&&l<=0)return e.copy(i);Lo.subVectors(t,s);const u=is.dot(Lo),h=ss.dot(Lo);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(is,a);Io.subVectors(t,r);const m=is.dot(Io),g=ss.dot(Io);if(g>=0&&m<=g)return e.copy(r);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(ss,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return lu.subVectors(r,s),o=(h-u)/(h-u+(m-g)),e.copy(s).addScaledVector(lu,o);const d=1/(p+v+f);return a=v*d,o=f*d,e.copy(i).addScaledVector(is,a).addScaledVector(ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ld={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function Do(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Ct{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=Yc(t,1),e=De(e,0,1),i=De(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Do(a,r,t+1/3),this.g=Do(a,r,t),this.b=Do(a,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=be){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){const i=Ld[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}copyLinearToSRGB(t){return this.r=Mo(t.r),this.g=Mo(t.g),this.b=Mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return ne.fromWorkingColorSpace(ze.copy(this),t),Math.round(De(ze.r*255,0,255))*65536+Math.round(De(ze.g*255,0,255))*256+Math.round(De(ze.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(ze.copy(this),e);const i=ze.r,s=ze.g,r=ze.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=be){ne.fromWorkingColorSpace(ze.copy(this),t);const e=ze.r,i=ze.g,s=ze.b;return t!==be?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Fr);const i=ar(ti.h,Fr.h,e),s=ar(ti.s,Fr.s,e),r=ar(ti.l,Fr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new Ct;Ct.NAMES=Ld;let Xm=0;class $i extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Ss,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=lc,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cc&&(i.blendSrc=this.blendSrc),this.blendDst!==lc&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==La&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class qn extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new D,Or=new dt;class Ne{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Zl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ms(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),i=Ve(i,this.array),s=Ve(s,this.array),r=Ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zl&&(t.usage=this.usage),t}}class Id extends Ne{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Dd extends Ne{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Kt extends Ne{constructor(t,e,i){super(new Float32Array(t),e,i)}}let qm=0;const rn=new Zt,No=new Te,rs=new D,Je=new Yi,Ys=new Yi,Pe=new D;class ve extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ad(t)?Dd:Id)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,i){return rn.makeTranslation(t,e,i),this.applyMatrix4(rn),this}scale(t,e,i){return rn.makeScale(t,e,i),this.applyMatrix4(rn),this}lookAt(t){return No.lookAt(t),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Je.min,Ys.min),Je.expandByPoint(Pe),Pe.addVectors(Je.max,Ys.max),Je.expandByPoint(Pe)):(Je.expandByPoint(Ys.min),Je.expandByPoint(Ys.max))}Je.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Pe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Pe.fromBufferAttribute(o,l),c&&(rs.fromBufferAttribute(t,l),Pe.add(rs)),s=Math.max(s,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<o;T++)l[T]=new D,u[T]=new D;const h=new D,f=new D,m=new D,g=new dt,v=new dt,p=new dt,d=new D,y=new D;function _(T,V,W){h.fromArray(s,T*3),f.fromArray(s,V*3),m.fromArray(s,W*3),g.fromArray(a,T*2),v.fromArray(a,V*2),p.fromArray(a,W*2),f.sub(h),m.sub(h),v.sub(g),p.sub(g);const at=1/(v.x*p.y-p.x*v.y);isFinite(at)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(at),y.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(at),l[T].add(d),l[V].add(d),l[W].add(d),u[T].add(y),u[V].add(y),u[W].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let T=0,V=M.length;T<V;++T){const W=M[T],at=W.start,F=W.count;for(let Y=at,Z=at+F;Y<Z;Y+=3)_(i[Y+0],i[Y+1],i[Y+2])}const C=new D,b=new D,w=new D,U=new D;function S(T){w.fromArray(r,T*3),U.copy(w);const V=l[T];C.copy(V),C.sub(w.multiplyScalar(w.dot(V))).normalize(),b.crossVectors(U,V);const at=b.dot(u[T])<0?-1:1;c[T*4]=C.x,c[T*4+1]=C.y,c[T*4+2]=C.z,c[T*4+3]=at}for(let T=0,V=M.length;T<V;++T){const W=M[T],at=W.start,F=W.count;for(let Y=at,Z=at+F;Y<Z;Y+=3)S(i[Y+0]),S(i[Y+1]),S(i[Y+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,u=new D,h=new D;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let v=0,p=c.length;v<p;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*u;for(let d=0;d<u;d++)f[g++]=l[m++]}return new Ne(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ve,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=t(f,i);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uu=new Zt,Ei=new $c,Br=new xi,hu=new D,as=new D,os=new D,cs=new D,Uo=new D,zr=new D,kr=new dt,Hr=new dt,Gr=new dt,du=new D,fu=new D,pu=new D,Vr=new D,Wr=new D;class ee extends Te{constructor(t=new ve,e=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Uo.fromBufferAttribute(h,t),a?zr.addScaledVector(Uo,u):zr.addScaledVector(Uo.sub(e),u))}e.add(zr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Br.copy(i.boundingSphere),Br.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(Br.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Br,hu)===null||Ei.origin.distanceToSquared(hu)>(t.far-t.near)**2))&&(uu.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(uu),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],d=a[p.materialIndex],y=Math.max(p.start,m.start),_=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=y,C=_;M<C;M+=3){const b=o.getX(M),w=o.getX(M+1),U=o.getX(M+2);s=Xr(this,d,t,i,l,u,h,b,w,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const y=o.getX(p),_=o.getX(p+1),M=o.getX(p+2);s=Xr(this,a,t,i,l,u,h,y,_,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],d=a[p.materialIndex],y=Math.max(p.start,m.start),_=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let M=y,C=_;M<C;M+=3){const b=M,w=M+1,U=M+2;s=Xr(this,d,t,i,l,u,h,b,w,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,d=v;p<d;p+=3){const y=p,_=p+1,M=p+2;s=Xr(this,a,t,i,l,u,h,y,_,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Ym(n,t,e,i,s,r,a,o){let c;if(t.side===je?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===gi,o),c===null)return null;Wr.copy(o),Wr.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Wr);return l<e.near||l>e.far?null:{distance:l,point:Wr.clone(),object:n}}function Xr(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,as),n.getVertexPosition(c,os),n.getVertexPosition(l,cs);const u=Ym(n,t,e,i,as,os,cs,Vr);if(u){s&&(kr.fromBufferAttribute(s,o),Hr.fromBufferAttribute(s,c),Gr.fromBufferAttribute(s,l),u.uv=ln.getInterpolation(Vr,as,os,cs,kr,Hr,Gr,new dt)),r&&(kr.fromBufferAttribute(r,o),Hr.fromBufferAttribute(r,c),Gr.fromBufferAttribute(r,l),u.uv1=ln.getInterpolation(Vr,as,os,cs,kr,Hr,Gr,new dt),u.uv2=u.uv1),a&&(du.fromBufferAttribute(a,o),fu.fromBufferAttribute(a,c),pu.fromBufferAttribute(a,l),u.normal=ln.getInterpolation(Vr,as,os,cs,du,fu,pu,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new D,materialIndex:0};ln.getNormal(as,os,cs,h.normal),u.face=h}return u}class Yn extends ve{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(h,2));function g(v,p,d,y,_,M,C,b,w,U,S){const T=M/w,V=C/U,W=M/2,at=C/2,F=b/2,Y=w+1,Z=U+1;let K=0,G=0;const it=new D;for(let ot=0;ot<Z;ot++){const ft=ot*V-at;for(let vt=0;vt<Y;vt++){const rt=vt*T-W;it[v]=rt*y,it[p]=ft*_,it[d]=F,l.push(it.x,it.y,it.z),it[v]=0,it[p]=0,it[d]=b>0?1:-1,u.push(it.x,it.y,it.z),h.push(vt/w),h.push(1-ot/U),K+=1}}for(let ot=0;ot<U;ot++)for(let ft=0;ft<w;ft++){const vt=f+ft+Y*ot,rt=f+ft+Y*(ot+1),N=f+(ft+1)+Y*(ot+1),I=f+(ft+1)+Y*ot;c.push(vt,rt,I),c.push(rt,N,I),G+=6}o.addGroup(m,G,S),m+=G,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ns(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function We(n){const t={};for(let e=0;e<n.length;e++){const i=Ns(n[e]);for(const s in i)t[s]=i[s]}return t}function $m(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Nd(n){return n.getRenderTarget()===null?n.outputColorSpace:ne.workingColorSpace}const jm={clone:Ns,merge:We};var Zm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zm,this.fragmentShader=Km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=$m(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ud extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qe extends Ud{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gr*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Es*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ls=-90,us=1;class Jm extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(ls,us,t,e);s.layers=this.layers,this.add(s);const r=new Qe(ls,us,t,e);r.layers=this.layers,this.add(r);const a=new Qe(ls,us,t,e);a.layers=this.layers,this.add(a);const o=new Qe(ls,us,t,e);o.layers=this.layers,this.add(o);const c=new Qe(ls,us,t,e);c.layers=this.layers,this.add(c);const l=new Qe(ls,us,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Fd extends nn{constructor(t,e,i,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Ls,super(t,e,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qm extends Vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Bi?be:un),this.texture=new Fd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yn(5,5,5),r=new _i({name:"CubemapFromEquirect",uniforms:Ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:hi});r.uniforms.tEquirect.value=e;const a=new ee(s,r),o=e.minFilter;return e.minFilter===pr&&(e.minFilter=cn),new Jm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const Fo=new D,t0=new D,e0=new kt;class wi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Fo.subVectors(i,e).cross(t0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Fo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||e0.getNormalMatrix(t),s=this.coplanarPoint(Fo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new xi,qr=new D;class jc{constructor(t=new wi,e=new wi,i=new wi,s=new wi,r=new wi,a=new wi){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Gn){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],m=s[8],g=s[9],v=s[10],p=s[11],d=s[12],y=s[13],_=s[14],M=s[15];if(i[0].setComponents(c-r,f-l,p-m,M-d).normalize(),i[1].setComponents(c+r,f+l,p+m,M+d).normalize(),i[2].setComponents(c+a,f+u,p+g,M+y).normalize(),i[3].setComponents(c-a,f-u,p-g,M-y).normalize(),i[4].setComponents(c-o,f-h,p-v,M-_).normalize(),e===Gn)i[5].setComponents(c+o,f+h,p+v,M+_).normalize();else if(e===Ua)i[5].setComponents(o,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(qr.x=s.normal.x>0?t.max.x:t.min.x,qr.y=s.normal.y>0?t.max.y:t.min.y,qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Od(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function n0(n,t){const e=t.isWebGL2,i=new WeakMap;function s(l,u){const h=l.array,f=l.usage,m=h.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,h,f),l.onUploadCallback();let v;if(h instanceof Float32Array)v=n.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=n.SHORT;else if(h instanceof Uint32Array)v=n.UNSIGNED_INT;else if(h instanceof Int32Array)v=n.INT;else if(h instanceof Int8Array)v=n.BYTE;else if(h instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,u,h){const f=u.array,m=u._updateRange,g=u.updateRanges;if(n.bindBuffer(h,l),m.count===-1&&g.length===0&&n.bufferSubData(h,0,f),g.length!==0){for(let v=0,p=g.length;v<p;v++){const d=g[v];e?n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);if(h===void 0)i.set(l,s(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class ji extends ve{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,h=t/o,f=e/c,m=[],g=[],v=[],p=[];for(let d=0;d<u;d++){const y=d*f-a;for(let _=0;_<l;_++){const M=_*h-r;g.push(M,-y,0),v.push(0,0,1),p.push(_/o),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<o;y++){const _=y+l*d,M=y+l*(d+1),C=y+1+l*(d+1),b=y+1+l*d;m.push(_,M,b),m.push(M,C,b)}this.setIndex(m),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.width,t.height,t.widthSegments,t.heightSegments)}}var i0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,s0=`#ifdef USE_ALPHAHASH
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
#endif`,r0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,c0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
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
#endif`,u0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0=`#ifdef USE_BATCHING
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
#endif`,d0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,f0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,g0=`#ifdef USE_IRIDESCENCE
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
#endif`,_0=`#ifdef USE_BUMPMAP
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
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,T0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,A0=`#define PI 3.141592653589793
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
} // validated`,w0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,C0=`vec3 transformedNormal = objectNormal;
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
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",N0=`
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
}`,U0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,k0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,V0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W0=`#ifdef USE_GRADIENTMAP
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
}`,X0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
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
#endif`,Z0=`#ifdef USE_ENVMAP
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
#endif`,K0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eg=`PhysicalMaterial material;
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
#endif`,ng=`struct PhysicalMaterial {
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
}`,ig=`
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
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
#endif`,rg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ag=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fg=`#if defined( USE_POINTS_UV )
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
#endif`,pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
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
#endif`,xg=`#ifdef USE_MORPHTARGETS
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
#endif`,vg=`#ifdef USE_MORPHTARGETS
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
#endif`,yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tg=`#ifdef USE_NORMALMAP
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
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ng=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Og=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hg=`float getShadowMask() {
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
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,Wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
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
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i_=`uniform sampler2D t2D;
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
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`#include <common>
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
}`,l_=`#if DEPTH_PACKING == 3200
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
}`,u_=`#define DISTANCE
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
}`,h_=`#define DISTANCE
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`uniform float scale;
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
}`,m_=`uniform vec3 diffuse;
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
}`,g_=`#include <common>
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
}`,__=`uniform vec3 diffuse;
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
}`,x_=`#define LAMBERT
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
}`,v_=`#define LAMBERT
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
}`,y_=`#define MATCAP
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
}`,M_=`#define MATCAP
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
}`,S_=`#define NORMAL
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
}`,E_=`#define NORMAL
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
}`,b_=`#define PHONG
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
}`,T_=`#define PHONG
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
}`,A_=`#define STANDARD
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
}`,w_=`#define STANDARD
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
}`,C_=`#define TOON
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
}`,R_=`#define TOON
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
}`,P_=`uniform float size;
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
}`,L_=`uniform vec3 diffuse;
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
}`,I_=`#include <common>
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
}`,D_=`uniform vec3 color;
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
}`,N_=`uniform float rotation;
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
}`,U_=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:i0,alphahash_pars_fragment:s0,alphamap_fragment:r0,alphamap_pars_fragment:a0,alphatest_fragment:o0,alphatest_pars_fragment:c0,aomap_fragment:l0,aomap_pars_fragment:u0,batching_pars_vertex:h0,batching_vertex:d0,begin_vertex:f0,beginnormal_vertex:p0,bsdfs:m0,iridescence_fragment:g0,bumpmap_pars_fragment:_0,clipping_planes_fragment:x0,clipping_planes_pars_fragment:v0,clipping_planes_pars_vertex:y0,clipping_planes_vertex:M0,color_fragment:S0,color_pars_fragment:E0,color_pars_vertex:b0,color_vertex:T0,common:A0,cube_uv_reflection_fragment:w0,defaultnormal_vertex:C0,displacementmap_pars_vertex:R0,displacementmap_vertex:P0,emissivemap_fragment:L0,emissivemap_pars_fragment:I0,colorspace_fragment:D0,colorspace_pars_fragment:N0,envmap_fragment:U0,envmap_common_pars_fragment:F0,envmap_pars_fragment:O0,envmap_pars_vertex:B0,envmap_physical_pars_fragment:Z0,envmap_vertex:z0,fog_vertex:k0,fog_pars_vertex:H0,fog_fragment:G0,fog_pars_fragment:V0,gradientmap_pars_fragment:W0,lightmap_fragment:X0,lightmap_pars_fragment:q0,lights_lambert_fragment:Y0,lights_lambert_pars_fragment:$0,lights_pars_begin:j0,lights_toon_fragment:K0,lights_toon_pars_fragment:J0,lights_phong_fragment:Q0,lights_phong_pars_fragment:tg,lights_physical_fragment:eg,lights_physical_pars_fragment:ng,lights_fragment_begin:ig,lights_fragment_maps:sg,lights_fragment_end:rg,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:lg,map_fragment:ug,map_pars_fragment:hg,map_particle_fragment:dg,map_particle_pars_fragment:fg,metalnessmap_fragment:pg,metalnessmap_pars_fragment:mg,morphcolor_vertex:gg,morphnormal_vertex:_g,morphtarget_pars_vertex:xg,morphtarget_vertex:vg,normal_fragment_begin:yg,normal_fragment_maps:Mg,normal_pars_fragment:Sg,normal_pars_vertex:Eg,normal_vertex:bg,normalmap_pars_fragment:Tg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:wg,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Rg,opaque_fragment:Pg,packing:Lg,premultiplied_alpha_fragment:Ig,project_vertex:Dg,dithering_fragment:Ng,dithering_pars_fragment:Ug,roughnessmap_fragment:Fg,roughnessmap_pars_fragment:Og,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:zg,shadowmap_vertex:kg,shadowmask_pars_fragment:Hg,skinbase_vertex:Gg,skinning_pars_vertex:Vg,skinning_vertex:Wg,skinnormal_vertex:Xg,specularmap_fragment:qg,specularmap_pars_fragment:Yg,tonemapping_fragment:$g,tonemapping_pars_fragment:jg,transmission_fragment:Zg,transmission_pars_fragment:Kg,uv_pars_fragment:Jg,uv_pars_vertex:Qg,uv_vertex:t_,worldpos_vertex:e_,background_vert:n_,background_frag:i_,backgroundCube_vert:s_,backgroundCube_frag:r_,cube_vert:a_,cube_frag:o_,depth_vert:c_,depth_frag:l_,distanceRGBA_vert:u_,distanceRGBA_frag:h_,equirect_vert:d_,equirect_frag:f_,linedashed_vert:p_,linedashed_frag:m_,meshbasic_vert:g_,meshbasic_frag:__,meshlambert_vert:x_,meshlambert_frag:v_,meshmatcap_vert:y_,meshmatcap_frag:M_,meshnormal_vert:S_,meshnormal_frag:E_,meshphong_vert:b_,meshphong_frag:T_,meshphysical_vert:A_,meshphysical_frag:w_,meshtoon_vert:C_,meshtoon_frag:R_,points_vert:P_,points_frag:L_,shadow_vert:I_,shadow_frag:D_,sprite_vert:N_,sprite_frag:U_},St={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},wn={basic:{uniforms:We([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:We([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:We([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:We([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:We([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:We([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:We([St.points,St.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:We([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:We([St.common,St.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:We([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:We([St.sprite,St.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:We([St.common,St.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:We([St.lights,St.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};wn.physical={uniforms:We([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Yr={r:0,b:0,g:0};function F_(n,t,e,i,s,r,a){const o=new Ct(0);let c=r===!0?0:1,l,u,h=null,f=0,m=null;function g(p,d){let y=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?e:t).get(_)),_===null?v(o,c):_&&_.isColor&&(v(_,1),y=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Za)?(u===void 0&&(u=new ee(new Yn(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Ns(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=ne.getTransfer(_.colorSpace)!==ae,(h!==_||f!==_.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new ee(new ji(2,2),new _i({name:"BackgroundMaterial",uniforms:Ns(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=ne.getTransfer(_.colorSpace)!==ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,d){p.getRGB(Yr,Nd(n)),i.buffers.color.setClear(Yr.r,Yr.g,Yr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),c=d,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,v(o,c)},render:g}}function O_(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},c=p(null);let l=c,u=!1;function h(F,Y,Z,K,G){let it=!1;if(a){const ot=v(K,Z,Y);l!==ot&&(l=ot,m(l.object)),it=d(F,K,Z,G),it&&y(F,K,Z,G)}else{const ot=Y.wireframe===!0;(l.geometry!==K.id||l.program!==Z.id||l.wireframe!==ot)&&(l.geometry=K.id,l.program=Z.id,l.wireframe=ot,it=!0)}G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(it||u)&&(u=!1,U(F,Y,Z,K),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(F){return i.isWebGL2?n.bindVertexArray(F):r.bindVertexArrayOES(F)}function g(F){return i.isWebGL2?n.deleteVertexArray(F):r.deleteVertexArrayOES(F)}function v(F,Y,Z){const K=Z.wireframe===!0;let G=o[F.id];G===void 0&&(G={},o[F.id]=G);let it=G[Y.id];it===void 0&&(it={},G[Y.id]=it);let ot=it[K];return ot===void 0&&(ot=p(f()),it[K]=ot),ot}function p(F){const Y=[],Z=[],K=[];for(let G=0;G<s;G++)Y[G]=0,Z[G]=0,K[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:Z,attributeDivisors:K,object:F,attributes:{},index:null}}function d(F,Y,Z,K){const G=l.attributes,it=Y.attributes;let ot=0;const ft=Z.getAttributes();for(const vt in ft)if(ft[vt].location>=0){const N=G[vt];let I=it[vt];if(I===void 0&&(vt==="instanceMatrix"&&F.instanceMatrix&&(I=F.instanceMatrix),vt==="instanceColor"&&F.instanceColor&&(I=F.instanceColor)),N===void 0||N.attribute!==I||I&&N.data!==I.data)return!0;ot++}return l.attributesNum!==ot||l.index!==K}function y(F,Y,Z,K){const G={},it=Y.attributes;let ot=0;const ft=Z.getAttributes();for(const vt in ft)if(ft[vt].location>=0){let N=it[vt];N===void 0&&(vt==="instanceMatrix"&&F.instanceMatrix&&(N=F.instanceMatrix),vt==="instanceColor"&&F.instanceColor&&(N=F.instanceColor));const I={};I.attribute=N,N&&N.data&&(I.data=N.data),G[vt]=I,ot++}l.attributes=G,l.attributesNum=ot,l.index=K}function _(){const F=l.newAttributes;for(let Y=0,Z=F.length;Y<Z;Y++)F[Y]=0}function M(F){C(F,0)}function C(F,Y){const Z=l.newAttributes,K=l.enabledAttributes,G=l.attributeDivisors;Z[F]=1,K[F]===0&&(n.enableVertexAttribArray(F),K[F]=1),G[F]!==Y&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,Y),G[F]=Y)}function b(){const F=l.newAttributes,Y=l.enabledAttributes;for(let Z=0,K=Y.length;Z<K;Z++)Y[Z]!==F[Z]&&(n.disableVertexAttribArray(Z),Y[Z]=0)}function w(F,Y,Z,K,G,it,ot){ot===!0?n.vertexAttribIPointer(F,Y,Z,G,it):n.vertexAttribPointer(F,Y,Z,K,G,it)}function U(F,Y,Z,K){if(i.isWebGL2===!1&&(F.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const G=K.attributes,it=Z.getAttributes(),ot=Y.defaultAttributeValues;for(const ft in it){const vt=it[ft];if(vt.location>=0){let rt=G[ft];if(rt===void 0&&(ft==="instanceMatrix"&&F.instanceMatrix&&(rt=F.instanceMatrix),ft==="instanceColor"&&F.instanceColor&&(rt=F.instanceColor)),rt!==void 0){const N=rt.normalized,I=rt.itemSize,P=e.get(rt);if(P===void 0)continue;const A=P.buffer,J=P.type,lt=P.bytesPerElement,X=i.isWebGL2===!0&&(J===n.INT||J===n.UNSIGNED_INT||rt.gpuType===gd);if(rt.isInterleavedBufferAttribute){const ut=rt.data,L=ut.stride,tt=rt.offset;if(ut.isInstancedInterleavedBuffer){for(let B=0;B<vt.locationSize;B++)C(vt.location+B,ut.meshPerAttribute);F.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let B=0;B<vt.locationSize;B++)M(vt.location+B);n.bindBuffer(n.ARRAY_BUFFER,A);for(let B=0;B<vt.locationSize;B++)w(vt.location+B,I/vt.locationSize,J,N,L*lt,(tt+I/vt.locationSize*B)*lt,X)}else{if(rt.isInstancedBufferAttribute){for(let ut=0;ut<vt.locationSize;ut++)C(vt.location+ut,rt.meshPerAttribute);F.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ut=0;ut<vt.locationSize;ut++)M(vt.location+ut);n.bindBuffer(n.ARRAY_BUFFER,A);for(let ut=0;ut<vt.locationSize;ut++)w(vt.location+ut,I/vt.locationSize,J,N,I*lt,I/vt.locationSize*ut*lt,X)}}else if(ot!==void 0){const N=ot[ft];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(vt.location,N);break;case 3:n.vertexAttrib3fv(vt.location,N);break;case 4:n.vertexAttrib4fv(vt.location,N);break;default:n.vertexAttrib1fv(vt.location,N)}}}}b()}function S(){W();for(const F in o){const Y=o[F];for(const Z in Y){const K=Y[Z];for(const G in K)g(K[G].object),delete K[G];delete Y[Z]}delete o[F]}}function T(F){if(o[F.id]===void 0)return;const Y=o[F.id];for(const Z in Y){const K=Y[Z];for(const G in K)g(K[G].object),delete K[G];delete Y[Z]}delete o[F.id]}function V(F){for(const Y in o){const Z=o[Y];if(Z[F.id]===void 0)continue;const K=Z[F.id];for(const G in K)g(K[G].object),delete K[G];delete Z[F.id]}}function W(){at(),u=!0,l!==c&&(l=c,m(l.object))}function at(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:W,resetDefaultState:at,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:V,initAttributes:_,enableAttribute:M,disableUnusedAttributes:b}}function B_(n,t,e,i){const s=i.isWebGL2;let r;function a(u){r=u}function o(u,h){n.drawArrays(r,u,h),e.update(h,r,1)}function c(u,h,f){if(f===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,h,f),e.update(h,r,f)}function l(u,h,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function z_(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,M=a||t.has("OES_texture_float"),C=_&&M,b=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:C,maxSamples:b}}function k_(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new wi,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const y=r?0:i,_=y*4;let M=d.clippingState||null;c.value=M,M=u(g,f,_,m);for(let C=0;C!==_;++C)M[C]=e[C];d.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,m,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const d=m+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let _=0,M=m;_!==v;++_,M+=4)a.copy(h[_]).applyMatrix4(y,o),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function H_(n){let t=new WeakMap;function e(a,o){return o===uc?a.mapping=Ls:o===hc&&(a.mapping=Is),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===uc||o===hc)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Qm(c.height/2);return l.fromEquirectangularTexture(n,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Bd extends Ud{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _s=4,mu=[.125,.215,.35,.446,.526,.582],Pi=20,Oo=new Bd,gu=new Ct;let Bo=null,zo=0,ko=0;const Ci=(1+Math.sqrt(5))/2,hs=1/Ci,_u=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ci,hs),new D(0,Ci,-hs),new D(hs,0,Ci),new D(-hs,0,Ci),new D(Ci,hs,0),new D(-Ci,hs,0)];class xu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Bo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bo,zo,ko),t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bo=this._renderer.getRenderTarget(),zo=this._renderer.getActiveCubeFace(),ko=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:mr,format:xn,colorSpace:Xn,depthBuffer:!1},s=vu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G_(r)),this._blurMaterial=V_(r,t,e)}return s}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,Oo)}_sceneToCubeUV(t,e,i,s){const o=new Qe(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(gu),u.toneMapping=di,u.autoClear=!1;const m=new qn({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new ee(new Yn,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(gu),v=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):y===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const _=this._cubeSize;$r(s,y*_,d>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ls||t.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ee(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;$r(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,Oo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=_u[(s-1)%_u.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ee(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Pi-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):Pi;p>Pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pi}`);const d=[];let y=0;for(let w=0;w<Pi;++w){const U=w/v,S=Math.exp(-U*U/2);d.push(S),w===0?y+=S:w<p&&(y+=2*S)}for(let w=0;w<d.length;w++)d[w]=d[w]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const M=this._sizeLods[s],C=3*M*(s>_-_s?s-_+_s:0),b=4*(this._cubeSize-M);$r(e,C,b,3*M,2*M),c.setRenderTarget(e),c.render(h,Oo)}}function G_(n){const t=[],e=[],i=[];let s=n;const r=n-_s+1+mu.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>n-_s?c=mu[a-n+_s-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,v=3,p=2,d=1,y=new Float32Array(v*g*m),_=new Float32Array(p*g*m),M=new Float32Array(d*g*m);for(let b=0;b<m;b++){const w=b%3*2/3-1,U=b>2?0:-1,S=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];y.set(S,v*g*b),_.set(f,p*g*b);const T=[b,b,b,b,b,b];M.set(T,d*g*b)}const C=new ve;C.setAttribute("position",new Ne(y,v)),C.setAttribute("uv",new Ne(_,p)),C.setAttribute("faceIndex",new Ne(M,d)),t.push(C),s>_s&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function vu(n,t,e){const i=new Vi(n,t,e);return i.texture.mapping=Za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $r(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function V_(n,t,e){const i=new Float32Array(Pi),s=new D(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function yu(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Mu(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Zc(){return`

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
	`}function W_(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===uc||c===hc,u=c===Ls||c===Is;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new xu(n)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new xu(n));const f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function X_(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function q_(n,t,e,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,d=v.length;p<d;p++)t.remove(v[p])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const v=m[g];for(let p=0,d=v.length;p<d;p++)t.update(v[p],n.ARRAY_BUFFER)}}function l(h){const f=[],m=h.index,g=h.attributes.position;let v=0;if(m!==null){const y=m.array;v=m.version;for(let _=0,M=y.length;_<M;_+=3){const C=y[_+0],b=y[_+1],w=y[_+2];f.push(C,b,b,w,w,C)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,M=y.length/3-1;_<M;_+=3){const C=_+0,b=_+1,w=_+2;f.push(C,b,b,w,w,C)}}else return;const p=new(Ad(f)?Dd:Id)(f,1);p.version=v;const d=r.get(h);d&&t.remove(d),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Y_(n,t,e,i){const s=i.isWebGL2;let r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function u(m,g){n.drawElements(r,g,o,m*c),e.update(g,r,1)}function h(m,g,v){if(v===0)return;let p,d;if(s)p=n,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,o,m*c,v),e.update(g,r,v)}function f(m,g,v){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<v;d++)this.render(m[d]/c,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,v);let d=0;for(let y=0;y<v;y++)d+=g[y];e.update(d,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function $_(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function j_(n,t){return n[0]-t[0]}function Z_(n,t){return Math.abs(t[1])-Math.abs(n[1])}function K_(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,a=new Le,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let v=r.get(u);if(v===void 0||v.count!==g){let F=function(){W.dispose(),r.delete(u),u.removeEventListener("dispose",F)};v!==void 0&&v.texture.dispose();const y=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let U=0;y===!0&&(U=1),_===!0&&(U=2),M===!0&&(U=3);let S=u.attributes.position.count*U,T=1;S>t.maxTextureSize&&(T=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const V=new Float32Array(S*T*4*g),W=new Rd(V,S,T,g);W.type=ci,W.needsUpdate=!0;const at=U*4;for(let Y=0;Y<g;Y++){const Z=C[Y],K=b[Y],G=w[Y],it=S*T*4*Y;for(let ot=0;ot<Z.count;ot++){const ft=ot*at;y===!0&&(a.fromBufferAttribute(Z,ot),V[it+ft+0]=a.x,V[it+ft+1]=a.y,V[it+ft+2]=a.z,V[it+ft+3]=0),_===!0&&(a.fromBufferAttribute(K,ot),V[it+ft+4]=a.x,V[it+ft+5]=a.y,V[it+ft+6]=a.z,V[it+ft+7]=0),M===!0&&(a.fromBufferAttribute(G,ot),V[it+ft+8]=a.x,V[it+ft+9]=a.y,V[it+ft+10]=a.z,V[it+ft+11]=G.itemSize===4?a.w:1)}}v={count:g,texture:W,size:new dt(S,T)},r.set(u,v),u.addEventListener("dispose",F)}let p=0;for(let y=0;y<f.length;y++)p+=f[y];const d=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",d),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const m=f===void 0?0:f.length;let g=i[u.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];i[u.id]=g}for(let _=0;_<m;_++){const M=g[_];M[0]=_,M[1]=f[_]}g.sort(Z_);for(let _=0;_<8;_++)_<m&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(j_);const v=u.morphAttributes.position,p=u.morphAttributes.normal;let d=0;for(let _=0;_<8;_++){const M=o[_],C=M[0],b=M[1];C!==Number.MAX_SAFE_INTEGER&&b?(v&&u.getAttribute("morphTarget"+_)!==v[C]&&u.setAttribute("morphTarget"+_,v[C]),p&&u.getAttribute("morphNormal"+_)!==p[C]&&u.setAttribute("morphNormal"+_,p[C]),s[_]=b,d+=b):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),p&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}const y=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function J_(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class zd extends nn{constructor(t,e,i,s,r,a,o,c,l,u){if(u=u!==void 0?u:Oi,u!==Oi&&u!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Oi&&(i=oi),i===void 0&&u===Ds&&(i=Fi),super(null,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=c!==void 0?c:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const kd=new nn,Hd=new zd(1,1);Hd.compareFunction=Td;const Gd=new Rd,Vd=new Fm,Wd=new Fd,Su=[],Eu=[],bu=new Float32Array(16),Tu=new Float32Array(9),Au=new Float32Array(4);function zs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Su[s];if(r===void 0&&(r=new Float32Array(s),Su[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function we(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ja(n,t){let e=Eu[t];e===void 0&&(e=new Int32Array(t),Eu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Q_(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function tx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2fv(this.addr,t),we(e,t)}}function ex(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;n.uniform3fv(this.addr,t),we(e,t)}}function nx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4fv(this.addr,t),we(e,t)}}function ix(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,i))return;Au.set(i),n.uniformMatrix2fv(this.addr,!1,Au),we(e,i)}}function sx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,i))return;Tu.set(i),n.uniformMatrix3fv(this.addr,!1,Tu),we(e,i)}}function rx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ae(e,i))return;bu.set(i),n.uniformMatrix4fv(this.addr,!1,bu),we(e,i)}}function ax(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function ox(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2iv(this.addr,t),we(e,t)}}function cx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3iv(this.addr,t),we(e,t)}}function lx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4iv(this.addr,t),we(e,t)}}function ux(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function hx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2uiv(this.addr,t),we(e,t)}}function dx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3uiv(this.addr,t),we(e,t)}}function fx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4uiv(this.addr,t),we(e,t)}}function px(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Hd:kd;e.setTexture2D(t||r,s)}function mx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Vd,s)}function gx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Wd,s)}function _x(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Gd,s)}function xx(n){switch(n){case 5126:return Q_;case 35664:return tx;case 35665:return ex;case 35666:return nx;case 35674:return ix;case 35675:return sx;case 35676:return rx;case 5124:case 35670:return ax;case 35667:case 35671:return ox;case 35668:case 35672:return cx;case 35669:case 35673:return lx;case 5125:return ux;case 36294:return hx;case 36295:return dx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return gx;case 36289:case 36303:case 36311:case 36292:return _x}}function vx(n,t){n.uniform1fv(this.addr,t)}function yx(n,t){const e=zs(t,this.size,2);n.uniform2fv(this.addr,e)}function Mx(n,t){const e=zs(t,this.size,3);n.uniform3fv(this.addr,e)}function Sx(n,t){const e=zs(t,this.size,4);n.uniform4fv(this.addr,e)}function Ex(n,t){const e=zs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function bx(n,t){const e=zs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Tx(n,t){const e=zs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ax(n,t){n.uniform1iv(this.addr,t)}function wx(n,t){n.uniform2iv(this.addr,t)}function Cx(n,t){n.uniform3iv(this.addr,t)}function Rx(n,t){n.uniform4iv(this.addr,t)}function Px(n,t){n.uniform1uiv(this.addr,t)}function Lx(n,t){n.uniform2uiv(this.addr,t)}function Ix(n,t){n.uniform3uiv(this.addr,t)}function Dx(n,t){n.uniform4uiv(this.addr,t)}function Nx(n,t,e){const i=this.cache,s=t.length,r=Ja(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||kd,r[a])}function Ux(n,t,e){const i=this.cache,s=t.length,r=Ja(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vd,r[a])}function Fx(n,t,e){const i=this.cache,s=t.length,r=Ja(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Wd,r[a])}function Ox(n,t,e){const i=this.cache,s=t.length,r=Ja(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Gd,r[a])}function Bx(n){switch(n){case 5126:return vx;case 35664:return yx;case 35665:return Mx;case 35666:return Sx;case 35674:return Ex;case 35675:return bx;case 35676:return Tx;case 5124:case 35670:return Ax;case 35667:case 35671:return wx;case 35668:case 35672:return Cx;case 35669:case 35673:return Rx;case 5125:return Px;case 36294:return Lx;case 36295:return Ix;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return Ox}}class zx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=xx(e.type)}}class kx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bx(e.type)}}class Hx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Ho=/(\w+)(\])?(\[|\.)?/g;function wu(n,t){n.seq.push(t),n.map[t.id]=t}function Gx(n,t,e){const i=n.name,s=i.length;for(Ho.lastIndex=0;;){const r=Ho.exec(i),a=Ho.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){wu(e,l===void 0?new zx(o,n,t):new kx(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new Hx(o),wu(e,h)),e=h}}}class ya{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Gx(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Cu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Vx=37297;let Wx=0;function Xx(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function qx(n){const t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(n);let i;switch(t===e?i="":t===Na&&e===Da?i="LinearDisplayP3ToLinearSRGB":t===Da&&e===Na&&(i="LinearSRGBToLinearDisplayP3"),n){case Xn:case Ka:return[i,"LinearTransferOETF"];case be:case qc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ru(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Xx(n.getShaderSource(t),a)}else return s}function Yx(n,t){const e=qx(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function $x(n,t){let e;switch(t){case qp:e="Linear";break;case Yp:e="Reinhard";break;case $p:e="OptimizedCineon";break;case jp:e="ACESFilmic";break;case Kp:e="AgX";break;case Zp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function jx(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xs).join(`
`)}function Zx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xs).join(`
`)}function Kx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Jx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function xs(n){return n!==""}function Pu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace(Qx,ev)}const tv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ev(n,t){let e=Xt[t];if(e===void 0){const i=tv.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return gc(e)}const nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Iu(n){return n.replace(nv,iv)}function iv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Du(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===pd?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===yp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function rv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ls:case Is:t="ENVMAP_TYPE_CUBE";break;case Za:t="ENVMAP_TYPE_CUBE_UV";break}return t}function av(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function ov(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wc:t="ENVMAP_BLENDING_MULTIPLY";break;case Wp:t="ENVMAP_BLENDING_MIX";break;case Xp:t="ENVMAP_BLENDING_ADD";break}return t}function cv(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function lv(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=sv(e),l=rv(e),u=av(e),h=ov(e),f=cv(e),m=e.isWebGL2?"":jx(e),g=Zx(e),v=Kx(r),p=s.createProgram();let d,y,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(xs).join(`
`),d.length>0&&(d+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(xs).join(`
`),y.length>0&&(y+=`
`)):(d=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xs).join(`
`),y=[m,Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Xt.tonemapping_pars_fragment:"",e.toneMapping!==di?$x("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Yx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xs).join(`
`)),a=gc(a),a=Pu(a,e),a=Lu(a,e),o=gc(o),o=Pu(o,e),o=Lu(o,e),a=Iu(a),o=Iu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const M=_+d+a,C=_+y+o,b=Cu(s,s.VERTEX_SHADER,M),w=Cu(s,s.FRAGMENT_SHADER,C);s.attachShader(p,b),s.attachShader(p,w),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function U(W){if(n.debug.checkShaderErrors){const at=s.getProgramInfoLog(p).trim(),F=s.getShaderInfoLog(b).trim(),Y=s.getShaderInfoLog(w).trim();let Z=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,b,w);else{const G=Ru(s,b,"vertex"),it=Ru(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+at+`
`+G+`
`+it)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):(F===""||Y==="")&&(K=!1);K&&(W.diagnostics={runnable:Z,programLog:at,vertexShader:{log:F,prefix:d},fragmentShader:{log:Y,prefix:y}})}s.deleteShader(b),s.deleteShader(w),S=new ya(s,p),T=Jx(s,p)}let S;this.getUniforms=function(){return S===void 0&&U(this),S};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(p,Vx)),V},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wx++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=w,this}let uv=0;class hv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new dv(t),e.set(t,i)),i}}class dv{constructor(t){this.id=uv++,this.code=t,this.usedTimes=0}}function fv(n,t,e,i,s,r,a){const o=new Pd,c=new hv,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function p(S,T,V,W,at){const F=W.fog,Y=at.geometry,Z=S.isMeshStandardMaterial?W.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||Z),G=K&&K.mapping===Za?K.image.height:null,it=g[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ot=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ft=ot!==void 0?ot.length:0;let vt=0;Y.morphAttributes.position!==void 0&&(vt=1),Y.morphAttributes.normal!==void 0&&(vt=2),Y.morphAttributes.color!==void 0&&(vt=3);let rt,N,I,P;if(it){const He=wn[it];rt=He.vertexShader,N=He.fragmentShader}else rt=S.vertexShader,N=S.fragmentShader,c.update(S),I=c.getVertexShaderID(S),P=c.getFragmentShaderID(S);const A=n.getRenderTarget(),J=at.isInstancedMesh===!0,lt=at.isBatchedMesh===!0,X=!!S.map,ut=!!S.matcap,L=!!K,tt=!!S.aoMap,B=!!S.lightMap,$=!!S.bumpMap,q=!!S.normalMap,ht=!!S.displacementMap,O=!!S.emissiveMap,x=!!S.metalnessMap,E=!!S.roughnessMap,H=S.anisotropy>0,pt=S.clearcoat>0,mt=S.iridescence>0,ct=S.sheen>0,Tt=S.transmission>0,yt=H&&!!S.anisotropyMap,At=pt&&!!S.clearcoatMap,Lt=pt&&!!S.clearcoatNormalMap,Ot=pt&&!!S.clearcoatRoughnessMap,gt=mt&&!!S.iridescenceMap,jt=mt&&!!S.iridescenceThicknessMap,Vt=ct&&!!S.sheenColorMap,Bt=ct&&!!S.sheenRoughnessMap,It=!!S.specularMap,Rt=!!S.specularColorMap,Wt=!!S.specularIntensityMap,Qt=Tt&&!!S.transmissionMap,ue=Tt&&!!S.thicknessMap,Yt=!!S.gradientMap,Mt=!!S.alphaMap,k=S.alphaTest>0,Et=!!S.alphaHash,bt=!!S.extensions,Ut=!!Y.attributes.uv1,Dt=!!Y.attributes.uv2,ie=!!Y.attributes.uv3;let se=di;return S.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(se=n.toneMapping),{isWebGL2:u,shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:rt,fragmentShader:N,defines:S.defines,customVertexShaderID:I,customFragmentShaderID:P,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:lt,instancing:J,instancingColor:J&&at.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:A===null?n.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Xn,map:X,matcap:ut,envMap:L,envMapMode:L&&K.mapping,envMapCubeUVHeight:G,aoMap:tt,lightMap:B,bumpMap:$,normalMap:q,displacementMap:f&&ht,emissiveMap:O,normalMapObjectSpace:q&&S.normalMapType===lm,normalMapTangentSpace:q&&S.normalMapType===bd,metalnessMap:x,roughnessMap:E,anisotropy:H,anisotropyMap:yt,clearcoat:pt,clearcoatMap:At,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Ot,iridescence:mt,iridescenceMap:gt,iridescenceThicknessMap:jt,sheen:ct,sheenColorMap:Vt,sheenRoughnessMap:Bt,specularMap:It,specularColorMap:Rt,specularIntensityMap:Wt,transmission:Tt,transmissionMap:Qt,thicknessMap:ue,gradientMap:Yt,opaque:S.transparent===!1&&S.blending===Ss,alphaMap:Mt,alphaTest:k,alphaHash:Et,combine:S.combine,mapUv:X&&v(S.map.channel),aoMapUv:tt&&v(S.aoMap.channel),lightMapUv:B&&v(S.lightMap.channel),bumpMapUv:$&&v(S.bumpMap.channel),normalMapUv:q&&v(S.normalMap.channel),displacementMapUv:ht&&v(S.displacementMap.channel),emissiveMapUv:O&&v(S.emissiveMap.channel),metalnessMapUv:x&&v(S.metalnessMap.channel),roughnessMapUv:E&&v(S.roughnessMap.channel),anisotropyMapUv:yt&&v(S.anisotropyMap.channel),clearcoatMapUv:At&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&v(S.sheenRoughnessMap.channel),specularMapUv:It&&v(S.specularMap.channel),specularColorMapUv:Rt&&v(S.specularColorMap.channel),specularIntensityMapUv:Wt&&v(S.specularIntensityMap.channel),transmissionMapUv:Qt&&v(S.transmissionMap.channel),thicknessMapUv:ue&&v(S.thicknessMap.channel),alphaMapUv:Mt&&v(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(q||H),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:Dt,vertexUv3s:ie,pointsUvs:at.isPoints===!0&&!!Y.attributes.uv&&(X||Mt),fog:!!F,useFog:S.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:at.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:vt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,useLegacyLights:n._useLegacyLights,decodeVideoTexture:X&&S.map.isVideoTexture===!0&&ne.getTransfer(S.map.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qe,flipSided:S.side===je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:bt&&S.extensions.derivatives===!0,extensionFragDepth:bt&&S.extensions.fragDepth===!0,extensionDrawBuffers:bt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:bt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:bt&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const V in S.defines)T.push(V),T.push(S.defines[V]);return S.isRawShaderMaterial===!1&&(y(T,S),_(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function y(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function _(S,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function M(S){const T=g[S.type];let V;if(T){const W=wn[T];V=jm.clone(W.uniforms)}else V=S.uniforms;return V}function C(S,T){let V;for(let W=0,at=l.length;W<at;W++){const F=l[W];if(F.cacheKey===T){V=F,++V.usedTimes;break}}return V===void 0&&(V=new lv(n,T,S,r),l.push(V)),V}function b(S){if(--S.usedTimes===0){const T=l.indexOf(S);l[T]=l[l.length-1],l.pop(),S.destroy()}}function w(S){c.remove(S)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:M,acquireProgram:C,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:U}}function pv(){let n=new WeakMap;function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function e(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function mv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Nu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Uu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h,f,m,g,v,p){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=p),t++,d}function o(h,f,m,g,v,p){const d=a(h,f,m,g,v,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):e.push(d)}function c(h,f,m,g,v,p){const d=a(h,f,m,g,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||mv),i.length>1&&i.sort(f||Nu),s.length>1&&s.sort(f||Nu)}function u(){for(let h=t,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function gv(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new Uu,n.set(i,[a])):s>=r.length?(a=new Uu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function _v(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ct};break;case"SpotLight":e={position:new D,direction:new D,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function xv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let vv=0;function yv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Mv(n,t){const e=new _v,i=xv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new D);const r=new D,a=new Zt,o=new Zt;function c(u,h){let f=0,m=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let v=0,p=0,d=0,y=0,_=0,M=0,C=0,b=0,w=0,U=0,S=0;u.sort(yv);const T=h===!0?Math.PI:1;for(let W=0,at=u.length;W<at;W++){const F=u[W],Y=F.color,Z=F.intensity,K=F.distance,G=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=Y.r*Z*T,m+=Y.g*Z*T,g+=Y.b*Z*T;else if(F.isLightProbe){for(let it=0;it<9;it++)s.probe[it].addScaledVector(F.sh.coefficients[it],Z);S++}else if(F.isDirectionalLight){const it=e.get(F);if(it.color.copy(F.color).multiplyScalar(F.intensity*T),F.castShadow){const ot=F.shadow,ft=i.get(F);ft.shadowBias=ot.bias,ft.shadowNormalBias=ot.normalBias,ft.shadowRadius=ot.radius,ft.shadowMapSize=ot.mapSize,s.directionalShadow[v]=ft,s.directionalShadowMap[v]=G,s.directionalShadowMatrix[v]=F.shadow.matrix,M++}s.directional[v]=it,v++}else if(F.isSpotLight){const it=e.get(F);it.position.setFromMatrixPosition(F.matrixWorld),it.color.copy(Y).multiplyScalar(Z*T),it.distance=K,it.coneCos=Math.cos(F.angle),it.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),it.decay=F.decay,s.spot[d]=it;const ot=F.shadow;if(F.map&&(s.spotLightMap[w]=F.map,w++,ot.updateMatrices(F),F.castShadow&&U++),s.spotLightMatrix[d]=ot.matrix,F.castShadow){const ft=i.get(F);ft.shadowBias=ot.bias,ft.shadowNormalBias=ot.normalBias,ft.shadowRadius=ot.radius,ft.shadowMapSize=ot.mapSize,s.spotShadow[d]=ft,s.spotShadowMap[d]=G,b++}d++}else if(F.isRectAreaLight){const it=e.get(F);it.color.copy(Y).multiplyScalar(Z),it.halfWidth.set(F.width*.5,0,0),it.halfHeight.set(0,F.height*.5,0),s.rectArea[y]=it,y++}else if(F.isPointLight){const it=e.get(F);if(it.color.copy(F.color).multiplyScalar(F.intensity*T),it.distance=F.distance,it.decay=F.decay,F.castShadow){const ot=F.shadow,ft=i.get(F);ft.shadowBias=ot.bias,ft.shadowNormalBias=ot.normalBias,ft.shadowRadius=ot.radius,ft.shadowMapSize=ot.mapSize,ft.shadowCameraNear=ot.camera.near,ft.shadowCameraFar=ot.camera.far,s.pointShadow[p]=ft,s.pointShadowMap[p]=G,s.pointShadowMatrix[p]=F.shadow.matrix,C++}s.point[p]=it,p++}else if(F.isHemisphereLight){const it=e.get(F);it.skyColor.copy(F.color).multiplyScalar(Z*T),it.groundColor.copy(F.groundColor).multiplyScalar(Z*T),s.hemi[_]=it,_++}}y>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=St.LTC_FLOAT_1,s.rectAreaLTC2=St.LTC_FLOAT_2):(s.rectAreaLTC1=St.LTC_HALF_1,s.rectAreaLTC2=St.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=St.LTC_FLOAT_1,s.rectAreaLTC2=St.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=St.LTC_HALF_1,s.rectAreaLTC2=St.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;const V=s.hash;(V.directionalLength!==v||V.pointLength!==p||V.spotLength!==d||V.rectAreaLength!==y||V.hemiLength!==_||V.numDirectionalShadows!==M||V.numPointShadows!==C||V.numSpotShadows!==b||V.numSpotMaps!==w||V.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=d,s.rectArea.length=y,s.point.length=p,s.hemi.length=_,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=b+w-U,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=S,V.directionalLength=v,V.pointLength=p,V.spotLength=d,V.rectAreaLength=y,V.hemiLength=_,V.numDirectionalShadows=M,V.numPointShadows=C,V.numSpotShadows=b,V.numSpotMaps=w,V.numLightProbes=S,s.version=vv++)}function l(u,h){let f=0,m=0,g=0,v=0,p=0;const d=h.matrixWorldInverse;for(let y=0,_=u.length;y<_;y++){const M=u[y];if(M.isDirectionalLight){const C=s.directional[f];C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),f++}else if(M.isSpotLight){const C=s.spot[g];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),g++}else if(M.isRectAreaLight){const C=s.rectArea[v];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(d),o.identity(),a.copy(M.matrixWorld),a.premultiply(d),o.extractRotation(a),C.halfWidth.set(M.width*.5,0,0),C.halfHeight.set(0,M.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const C=s.point[m];C.position.setFromMatrixPosition(M.matrixWorld),C.position.applyMatrix4(d),m++}else if(M.isHemisphereLight){const C=s.hemi[p];C.direction.setFromMatrixPosition(M.matrixWorld),C.direction.transformDirection(d),p++}}}return{setup:c,setupView:l,state:s}}function Fu(n,t){const e=new Mv(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(h){i.push(h)}function o(h){s.push(h)}function c(h){e.setup(i,h)}function l(h){e.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Sv(n,t){let e=new WeakMap;function i(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new Fu(n,t),e.set(r,[c])):a>=o.length?(c=new Fu(n,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ev extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=om,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bv extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Av=`uniform sampler2D shadow_pass;
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
}`;function wv(n,t,e){let i=new jc;const s=new dt,r=new dt,a=new Le,o=new Ev({depthPacking:cm}),c=new bv,l={},u=e.maxTextureSize,h={[gi]:je,[je]:gi,[qe]:qe},f=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Tv,fragmentShader:Av}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new ve;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ee(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pd;let d=this.type;this.render=function(b,w,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const S=n.getRenderTarget(),T=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),W=n.state;W.setBlending(hi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const at=d!==Hn&&this.type===Hn,F=d===Hn&&this.type!==Hn;for(let Y=0,Z=b.length;Y<Z;Y++){const K=b[Y],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const it=G.getFrameExtents();if(s.multiply(it),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,G.mapSize.y=r.y)),G.map===null||at===!0||F===!0){const ft=this.type!==Hn?{minFilter:Xe,magFilter:Xe}:{};G.map!==null&&G.map.dispose(),G.map=new Vi(s.x,s.y,ft),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ot=G.getViewportCount();for(let ft=0;ft<ot;ft++){const vt=G.getViewport(ft);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),W.viewport(a),G.updateMatrices(K,ft),i=G.getFrustum(),M(w,U,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===Hn&&y(G,U),G.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(S,T,V)};function y(b,w){const U=t.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Vi(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(w,null,U,f,v,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(w,null,U,m,v,null)}function _(b,w,U,S){let T=null;const V=U.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(V!==void 0)T=V;else if(T=U.isPointLight===!0?c:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=T.uuid,at=w.uuid;let F=l[W];F===void 0&&(F={},l[W]=F);let Y=F[at];Y===void 0&&(Y=T.clone(),F[at]=Y,w.addEventListener("dispose",C)),T=Y}if(T.visible=w.visible,T.wireframe=w.wireframe,S===Hn?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:h[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const W=n.properties.get(T);W.light=U}return T}function M(b,w,U,S,T){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===Hn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld);const at=t.update(b),F=b.material;if(Array.isArray(F)){const Y=at.groups;for(let Z=0,K=Y.length;Z<K;Z++){const G=Y[Z],it=F[G.materialIndex];if(it&&it.visible){const ot=_(b,it,S,T);b.onBeforeShadow(n,b,w,U,at,ot,G),n.renderBufferDirect(U,null,at,ot,b,G),b.onAfterShadow(n,b,w,U,at,ot,G)}}}else if(F.visible){const Y=_(b,F,S,T);b.onBeforeShadow(n,b,w,U,at,Y,null),n.renderBufferDirect(U,null,at,Y,b,null),b.onAfterShadow(n,b,w,U,at,Y,null)}}const W=b.children;for(let at=0,F=W.length;at<F;at++)M(W[at],w,U,S,T)}function C(b){b.target.removeEventListener("dispose",C);for(const U in l){const S=l[U],T=b.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function Cv(n,t,e){const i=e.isWebGL2;function s(){let k=!1;const Et=new Le;let bt=null;const Ut=new Le(0,0,0,0);return{setMask:function(Dt){bt!==Dt&&!k&&(n.colorMask(Dt,Dt,Dt,Dt),bt=Dt)},setLocked:function(Dt){k=Dt},setClear:function(Dt,ie,se,Ce,He){He===!0&&(Dt*=Ce,ie*=Ce,se*=Ce),Et.set(Dt,ie,se,Ce),Ut.equals(Et)===!1&&(n.clearColor(Dt,ie,se,Ce),Ut.copy(Et))},reset:function(){k=!1,bt=null,Ut.set(-1,0,0,0)}}}function r(){let k=!1,Et=null,bt=null,Ut=null;return{setTest:function(Dt){Dt?lt(n.DEPTH_TEST):X(n.DEPTH_TEST)},setMask:function(Dt){Et!==Dt&&!k&&(n.depthMask(Dt),Et=Dt)},setFunc:function(Dt){if(bt!==Dt){switch(Dt){case Op:n.depthFunc(n.NEVER);break;case Bp:n.depthFunc(n.ALWAYS);break;case zp:n.depthFunc(n.LESS);break;case La:n.depthFunc(n.LEQUAL);break;case kp:n.depthFunc(n.EQUAL);break;case Hp:n.depthFunc(n.GEQUAL);break;case Gp:n.depthFunc(n.GREATER);break;case Vp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}bt=Dt}},setLocked:function(Dt){k=Dt},setClear:function(Dt){Ut!==Dt&&(n.clearDepth(Dt),Ut=Dt)},reset:function(){k=!1,Et=null,bt=null,Ut=null}}}function a(){let k=!1,Et=null,bt=null,Ut=null,Dt=null,ie=null,se=null,Ce=null,He=null;return{setTest:function(re){k||(re?lt(n.STENCIL_TEST):X(n.STENCIL_TEST))},setMask:function(re){Et!==re&&!k&&(n.stencilMask(re),Et=re)},setFunc:function(re,Ge,Tn){(bt!==re||Ut!==Ge||Dt!==Tn)&&(n.stencilFunc(re,Ge,Tn),bt=re,Ut=Ge,Dt=Tn)},setOp:function(re,Ge,Tn){(ie!==re||se!==Ge||Ce!==Tn)&&(n.stencilOp(re,Ge,Tn),ie=re,se=Ge,Ce=Tn)},setLocked:function(re){k=re},setClear:function(re){He!==re&&(n.clearStencil(re),He=re)},reset:function(){k=!1,Et=null,bt=null,Ut=null,Dt=null,ie=null,se=null,Ce=null,He=null}}}const o=new s,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,v=[],p=null,d=!1,y=null,_=null,M=null,C=null,b=null,w=null,U=null,S=new Ct(0,0,0),T=0,V=!1,W=null,at=null,F=null,Y=null,Z=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,it=0;const ot=n.getParameter(n.VERSION);ot.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(ot)[1]),G=it>=1):ot.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),G=it>=2);let ft=null,vt={};const rt=n.getParameter(n.SCISSOR_BOX),N=n.getParameter(n.VIEWPORT),I=new Le().fromArray(rt),P=new Le().fromArray(N);function A(k,Et,bt,Ut){const Dt=new Uint8Array(4),ie=n.createTexture();n.bindTexture(k,ie),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<bt;se++)i&&(k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY)?n.texImage3D(Et,0,n.RGBA,1,1,Ut,0,n.RGBA,n.UNSIGNED_BYTE,Dt):n.texImage2D(Et+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Dt);return ie}const J={};J[n.TEXTURE_2D]=A(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=A(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(J[n.TEXTURE_2D_ARRAY]=A(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=A(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),lt(n.DEPTH_TEST),c.setFunc(La),O(!1),x(xl),lt(n.CULL_FACE),q(hi);function lt(k){f[k]!==!0&&(n.enable(k),f[k]=!0)}function X(k){f[k]!==!1&&(n.disable(k),f[k]=!1)}function ut(k,Et){return m[k]!==Et?(n.bindFramebuffer(k,Et),m[k]=Et,i&&(k===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Et),k===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Et)),!0):!1}function L(k,Et){let bt=v,Ut=!1;if(k)if(bt=g.get(Et),bt===void 0&&(bt=[],g.set(Et,bt)),k.isWebGLMultipleRenderTargets){const Dt=k.texture;if(bt.length!==Dt.length||bt[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,se=Dt.length;ie<se;ie++)bt[ie]=n.COLOR_ATTACHMENT0+ie;bt.length=Dt.length,Ut=!0}}else bt[0]!==n.COLOR_ATTACHMENT0&&(bt[0]=n.COLOR_ATTACHMENT0,Ut=!0);else bt[0]!==n.BACK&&(bt[0]=n.BACK,Ut=!0);Ut&&(e.isWebGL2?n.drawBuffers(bt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(bt))}function tt(k){return p!==k?(n.useProgram(k),p=k,!0):!1}const B={[Ri]:n.FUNC_ADD,[Sp]:n.FUNC_SUBTRACT,[Ep]:n.FUNC_REVERSE_SUBTRACT};if(i)B[Ml]=n.MIN,B[Sl]=n.MAX;else{const k=t.get("EXT_blend_minmax");k!==null&&(B[Ml]=k.MIN_EXT,B[Sl]=k.MAX_EXT)}const $={[bp]:n.ZERO,[Tp]:n.ONE,[Ap]:n.SRC_COLOR,[cc]:n.SRC_ALPHA,[Ip]:n.SRC_ALPHA_SATURATE,[Pp]:n.DST_COLOR,[Cp]:n.DST_ALPHA,[wp]:n.ONE_MINUS_SRC_COLOR,[lc]:n.ONE_MINUS_SRC_ALPHA,[Lp]:n.ONE_MINUS_DST_COLOR,[Rp]:n.ONE_MINUS_DST_ALPHA,[Dp]:n.CONSTANT_COLOR,[Np]:n.ONE_MINUS_CONSTANT_COLOR,[Up]:n.CONSTANT_ALPHA,[Fp]:n.ONE_MINUS_CONSTANT_ALPHA};function q(k,Et,bt,Ut,Dt,ie,se,Ce,He,re){if(k===hi){d===!0&&(X(n.BLEND),d=!1);return}if(d===!1&&(lt(n.BLEND),d=!0),k!==Mp){if(k!==y||re!==V){if((_!==Ri||b!==Ri)&&(n.blendEquation(n.FUNC_ADD),_=Ri,b=Ri),re)switch(k){case Ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pa:n.blendFunc(n.ONE,n.ONE);break;case vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,C=null,w=null,U=null,S.set(0,0,0),T=0,y=k,V=re}return}Dt=Dt||Et,ie=ie||bt,se=se||Ut,(Et!==_||Dt!==b)&&(n.blendEquationSeparate(B[Et],B[Dt]),_=Et,b=Dt),(bt!==M||Ut!==C||ie!==w||se!==U)&&(n.blendFuncSeparate($[bt],$[Ut],$[ie],$[se]),M=bt,C=Ut,w=ie,U=se),(Ce.equals(S)===!1||He!==T)&&(n.blendColor(Ce.r,Ce.g,Ce.b,He),S.copy(Ce),T=He),y=k,V=!1}function ht(k,Et){k.side===qe?X(n.CULL_FACE):lt(n.CULL_FACE);let bt=k.side===je;Et&&(bt=!bt),O(bt),k.blending===Ss&&k.transparent===!1?q(hi):q(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),o.setMask(k.colorWrite);const Ut=k.stencilWrite;l.setTest(Ut),Ut&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),H(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):X(n.SAMPLE_ALPHA_TO_COVERAGE)}function O(k){W!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),W=k)}function x(k){k!==xp?(lt(n.CULL_FACE),k!==at&&(k===xl?n.cullFace(n.BACK):k===vp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):X(n.CULL_FACE),at=k}function E(k){k!==F&&(G&&n.lineWidth(k),F=k)}function H(k,Et,bt){k?(lt(n.POLYGON_OFFSET_FILL),(Y!==Et||Z!==bt)&&(n.polygonOffset(Et,bt),Y=Et,Z=bt)):X(n.POLYGON_OFFSET_FILL)}function pt(k){k?lt(n.SCISSOR_TEST):X(n.SCISSOR_TEST)}function mt(k){k===void 0&&(k=n.TEXTURE0+K-1),ft!==k&&(n.activeTexture(k),ft=k)}function ct(k,Et,bt){bt===void 0&&(ft===null?bt=n.TEXTURE0+K-1:bt=ft);let Ut=vt[bt];Ut===void 0&&(Ut={type:void 0,texture:void 0},vt[bt]=Ut),(Ut.type!==k||Ut.texture!==Et)&&(ft!==bt&&(n.activeTexture(bt),ft=bt),n.bindTexture(k,Et||J[k]),Ut.type=k,Ut.texture=Et)}function Tt(){const k=vt[ft];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function yt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Vt(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(k){I.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),I.copy(k))}function Qt(k){P.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),P.copy(k))}function ue(k,Et){let bt=h.get(Et);bt===void 0&&(bt=new WeakMap,h.set(Et,bt));let Ut=bt.get(k);Ut===void 0&&(Ut=n.getUniformBlockIndex(Et,k.name),bt.set(k,Ut))}function Yt(k,Et){const Ut=h.get(Et).get(k);u.get(Et)!==Ut&&(n.uniformBlockBinding(Et,Ut,k.__bindingPointIndex),u.set(Et,Ut))}function Mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ft=null,vt={},m={},g=new WeakMap,v=[],p=null,d=!1,y=null,_=null,M=null,C=null,b=null,w=null,U=null,S=new Ct(0,0,0),T=0,V=!1,W=null,at=null,F=null,Y=null,Z=null,I.set(0,0,n.canvas.width,n.canvas.height),P.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:lt,disable:X,bindFramebuffer:ut,drawBuffers:L,useProgram:tt,setBlending:q,setMaterial:ht,setFlipSided:O,setCullFace:x,setLineWidth:E,setPolygonOffset:H,setScissorTest:pt,activeTexture:mt,bindTexture:ct,unbindTexture:Tt,compressedTexImage2D:yt,compressedTexImage3D:At,texImage2D:It,texImage3D:Rt,updateUBOMapping:ue,uniformBlockBinding:Yt,texStorage2D:Vt,texStorage3D:Bt,texSubImage2D:Lt,texSubImage3D:Ot,compressedTexSubImage2D:gt,compressedTexSubImage3D:jt,scissor:Wt,viewport:Qt,reset:Mt}}function Rv(n,t,e,i,s,r,a){const o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(x,E){return m?new OffscreenCanvas(x,E):Oa("canvas")}function v(x,E,H,pt){let mt=1;if((x.width>pt||x.height>pt)&&(mt=pt/Math.max(x.width,x.height)),mt<1||E===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const ct=E?Fa:Math.floor,Tt=ct(mt*x.width),yt=ct(mt*x.height);h===void 0&&(h=g(Tt,yt));const At=H?g(Tt,yt):h;return At.width=Tt,At.height=yt,At.getContext("2d").drawImage(x,0,0,Tt,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+Tt+"x"+yt+")."),At}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function p(x){return mc(x.width)&&mc(x.height)}function d(x){return o?!1:x.wrapS!==_n||x.wrapT!==_n||x.minFilter!==Xe&&x.minFilter!==cn}function y(x,E){return x.generateMipmaps&&E&&x.minFilter!==Xe&&x.minFilter!==cn}function _(x){n.generateMipmap(x)}function M(x,E,H,pt,mt=!1){if(o===!1)return E;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let ct=E;if(E===n.RED&&(H===n.FLOAT&&(ct=n.R32F),H===n.HALF_FLOAT&&(ct=n.R16F),H===n.UNSIGNED_BYTE&&(ct=n.R8)),E===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ct=n.R8UI),H===n.UNSIGNED_SHORT&&(ct=n.R16UI),H===n.UNSIGNED_INT&&(ct=n.R32UI),H===n.BYTE&&(ct=n.R8I),H===n.SHORT&&(ct=n.R16I),H===n.INT&&(ct=n.R32I)),E===n.RG&&(H===n.FLOAT&&(ct=n.RG32F),H===n.HALF_FLOAT&&(ct=n.RG16F),H===n.UNSIGNED_BYTE&&(ct=n.RG8)),E===n.RGBA){const Tt=mt?Ia:ne.getTransfer(pt);H===n.FLOAT&&(ct=n.RGBA32F),H===n.HALF_FLOAT&&(ct=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ct=Tt===ae?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ct=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ct=n.RGB5_A1)}return(ct===n.R16F||ct===n.R32F||ct===n.RG16F||ct===n.RG32F||ct===n.RGBA16F||ct===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function C(x,E,H){return y(x,H)===!0||x.isFramebufferTexture&&x.minFilter!==Xe&&x.minFilter!==cn?Math.log2(Math.max(E.width,E.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?E.mipmaps.length:1}function b(x){return x===Xe||x===El||x===po?n.NEAREST:n.LINEAR}function w(x){const E=x.target;E.removeEventListener("dispose",w),S(E),E.isVideoTexture&&u.delete(E)}function U(x){const E=x.target;E.removeEventListener("dispose",U),V(E)}function S(x){const E=i.get(x);if(E.__webglInit===void 0)return;const H=x.source,pt=f.get(H);if(pt){const mt=pt[E.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&T(x),Object.keys(pt).length===0&&f.delete(H)}i.remove(x)}function T(x){const E=i.get(x);n.deleteTexture(E.__webglTexture);const H=x.source,pt=f.get(H);delete pt[E.__cacheKey],a.memory.textures--}function V(x){const E=x.texture,H=i.get(x),pt=i.get(E);if(pt.__webglTexture!==void 0&&(n.deleteTexture(pt.__webglTexture),a.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(H.__webglFramebuffer[mt]))for(let ct=0;ct<H.__webglFramebuffer[mt].length;ct++)n.deleteFramebuffer(H.__webglFramebuffer[mt][ct]);else n.deleteFramebuffer(H.__webglFramebuffer[mt]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[mt])}else{if(Array.isArray(H.__webglFramebuffer))for(let mt=0;mt<H.__webglFramebuffer.length;mt++)n.deleteFramebuffer(H.__webglFramebuffer[mt]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let mt=0;mt<H.__webglColorRenderbuffer.length;mt++)H.__webglColorRenderbuffer[mt]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[mt]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let mt=0,ct=E.length;mt<ct;mt++){const Tt=i.get(E[mt]);Tt.__webglTexture&&(n.deleteTexture(Tt.__webglTexture),a.memory.textures--),i.remove(E[mt])}i.remove(E),i.remove(x)}let W=0;function at(){W=0}function F(){const x=W;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),W+=1,x}function Y(x){const E=[];return E.push(x.wrapS),E.push(x.wrapT),E.push(x.wrapR||0),E.push(x.magFilter),E.push(x.minFilter),E.push(x.anisotropy),E.push(x.internalFormat),E.push(x.format),E.push(x.type),E.push(x.generateMipmaps),E.push(x.premultiplyAlpha),E.push(x.flipY),E.push(x.unpackAlignment),E.push(x.colorSpace),E.join()}function Z(x,E){const H=i.get(x);if(x.isVideoTexture&&ht(x),x.isRenderTargetTexture===!1&&x.version>0&&H.__version!==x.version){const pt=x.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(H,x,E);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+E)}function K(x,E){const H=i.get(x);if(x.version>0&&H.__version!==x.version){I(H,x,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+E)}function G(x,E){const H=i.get(x);if(x.version>0&&H.__version!==x.version){I(H,x,E);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+E)}function it(x,E){const H=i.get(x);if(x.version>0&&H.__version!==x.version){P(H,x,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+E)}const ot={[dc]:n.REPEAT,[_n]:n.CLAMP_TO_EDGE,[fc]:n.MIRRORED_REPEAT},ft={[Xe]:n.NEAREST,[El]:n.NEAREST_MIPMAP_NEAREST,[po]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[Jp]:n.LINEAR_MIPMAP_NEAREST,[pr]:n.LINEAR_MIPMAP_LINEAR},vt={[um]:n.NEVER,[gm]:n.ALWAYS,[hm]:n.LESS,[Td]:n.LEQUAL,[dm]:n.EQUAL,[mm]:n.GEQUAL,[fm]:n.GREATER,[pm]:n.NOTEQUAL};function rt(x,E,H){if(H?(n.texParameteri(x,n.TEXTURE_WRAP_S,ot[E.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ot[E.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ot[E.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,ft[E.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,ft[E.minFilter])):(n.texParameteri(x,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(x,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==_n||E.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,n.TEXTURE_MAG_FILTER,b(E.magFilter)),n.texParameteri(x,n.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==Xe&&E.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,vt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const pt=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Xe||E.minFilter!==po&&E.minFilter!==pr||E.type===ci&&t.has("OES_texture_float_linear")===!1||o===!1&&E.type===mr&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(x,pt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function N(x,E){let H=!1;x.__webglInit===void 0&&(x.__webglInit=!0,E.addEventListener("dispose",w));const pt=E.source;let mt=f.get(pt);mt===void 0&&(mt={},f.set(pt,mt));const ct=Y(E);if(ct!==x.__cacheKey){mt[ct]===void 0&&(mt[ct]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),mt[ct].usedTimes++;const Tt=mt[x.__cacheKey];Tt!==void 0&&(mt[x.__cacheKey].usedTimes--,Tt.usedTimes===0&&T(E)),x.__cacheKey=ct,x.__webglTexture=mt[ct].texture}return H}function I(x,E,H){let pt=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=n.TEXTURE_3D);const mt=N(x,E),ct=E.source;e.bindTexture(pt,x.__webglTexture,n.TEXTURE0+H);const Tt=i.get(ct);if(ct.version!==Tt.__version||mt===!0){e.activeTexture(n.TEXTURE0+H);const yt=ne.getPrimaries(ne.workingColorSpace),At=E.colorSpace===un?null:ne.getPrimaries(E.colorSpace),Lt=E.colorSpace===un||yt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const Ot=d(E)&&p(E.image)===!1;let gt=v(E.image,Ot,!1,s.maxTextureSize);gt=O(E,gt);const jt=p(gt)||o,Vt=r.convert(E.format,E.colorSpace);let Bt=r.convert(E.type),It=M(E.internalFormat,Vt,Bt,E.colorSpace,E.isVideoTexture);rt(pt,E,jt);let Rt;const Wt=E.mipmaps,Qt=o&&E.isVideoTexture!==!0&&It!==Sd,ue=Tt.__version===void 0||mt===!0,Yt=C(E,gt,jt);if(E.isDepthTexture)It=n.DEPTH_COMPONENT,o?E.type===ci?It=n.DEPTH_COMPONENT32F:E.type===oi?It=n.DEPTH_COMPONENT24:E.type===Fi?It=n.DEPTH24_STENCIL8:It=n.DEPTH_COMPONENT16:E.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Oi&&It===n.DEPTH_COMPONENT&&E.type!==Xc&&E.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=oi,Bt=r.convert(E.type)),E.format===Ds&&It===n.DEPTH_COMPONENT&&(It=n.DEPTH_STENCIL,E.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Fi,Bt=r.convert(E.type))),ue&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,It,gt.width,gt.height):e.texImage2D(n.TEXTURE_2D,0,It,gt.width,gt.height,0,Vt,Bt,null));else if(E.isDataTexture)if(Wt.length>0&&jt){Qt&&ue&&e.texStorage2D(n.TEXTURE_2D,Yt,It,Wt[0].width,Wt[0].height);for(let Mt=0,k=Wt.length;Mt<k;Mt++)Rt=Wt[Mt],Qt?e.texSubImage2D(n.TEXTURE_2D,Mt,0,0,Rt.width,Rt.height,Vt,Bt,Rt.data):e.texImage2D(n.TEXTURE_2D,Mt,It,Rt.width,Rt.height,0,Vt,Bt,Rt.data);E.generateMipmaps=!1}else Qt?(ue&&e.texStorage2D(n.TEXTURE_2D,Yt,It,gt.width,gt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt.width,gt.height,Vt,Bt,gt.data)):e.texImage2D(n.TEXTURE_2D,0,It,gt.width,gt.height,0,Vt,Bt,gt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Qt&&ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,It,Wt[0].width,Wt[0].height,gt.depth);for(let Mt=0,k=Wt.length;Mt<k;Mt++)Rt=Wt[Mt],E.format!==xn?Vt!==null?Qt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Mt,0,0,0,Rt.width,Rt.height,gt.depth,Vt,Rt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Mt,It,Rt.width,Rt.height,gt.depth,0,Rt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,Mt,0,0,0,Rt.width,Rt.height,gt.depth,Vt,Bt,Rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Mt,It,Rt.width,Rt.height,gt.depth,0,Vt,Bt,Rt.data)}else{Qt&&ue&&e.texStorage2D(n.TEXTURE_2D,Yt,It,Wt[0].width,Wt[0].height);for(let Mt=0,k=Wt.length;Mt<k;Mt++)Rt=Wt[Mt],E.format!==xn?Vt!==null?Qt?e.compressedTexSubImage2D(n.TEXTURE_2D,Mt,0,0,Rt.width,Rt.height,Vt,Rt.data):e.compressedTexImage2D(n.TEXTURE_2D,Mt,It,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage2D(n.TEXTURE_2D,Mt,0,0,Rt.width,Rt.height,Vt,Bt,Rt.data):e.texImage2D(n.TEXTURE_2D,Mt,It,Rt.width,Rt.height,0,Vt,Bt,Rt.data)}else if(E.isDataArrayTexture)Qt?(ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Yt,It,gt.width,gt.height,gt.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Vt,Bt,gt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,gt.width,gt.height,gt.depth,0,Vt,Bt,gt.data);else if(E.isData3DTexture)Qt?(ue&&e.texStorage3D(n.TEXTURE_3D,Yt,It,gt.width,gt.height,gt.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Vt,Bt,gt.data)):e.texImage3D(n.TEXTURE_3D,0,It,gt.width,gt.height,gt.depth,0,Vt,Bt,gt.data);else if(E.isFramebufferTexture){if(ue)if(Qt)e.texStorage2D(n.TEXTURE_2D,Yt,It,gt.width,gt.height);else{let Mt=gt.width,k=gt.height;for(let Et=0;Et<Yt;Et++)e.texImage2D(n.TEXTURE_2D,Et,It,Mt,k,0,Vt,Bt,null),Mt>>=1,k>>=1}}else if(Wt.length>0&&jt){Qt&&ue&&e.texStorage2D(n.TEXTURE_2D,Yt,It,Wt[0].width,Wt[0].height);for(let Mt=0,k=Wt.length;Mt<k;Mt++)Rt=Wt[Mt],Qt?e.texSubImage2D(n.TEXTURE_2D,Mt,0,0,Vt,Bt,Rt):e.texImage2D(n.TEXTURE_2D,Mt,It,Vt,Bt,Rt);E.generateMipmaps=!1}else Qt?(ue&&e.texStorage2D(n.TEXTURE_2D,Yt,It,gt.width,gt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Vt,Bt,gt)):e.texImage2D(n.TEXTURE_2D,0,It,Vt,Bt,gt);y(E,jt)&&_(pt),Tt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}x.__version=E.version}function P(x,E,H){if(E.image.length!==6)return;const pt=N(x,E),mt=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+H);const ct=i.get(mt);if(mt.version!==ct.__version||pt===!0){e.activeTexture(n.TEXTURE0+H);const Tt=ne.getPrimaries(ne.workingColorSpace),yt=E.colorSpace===un?null:ne.getPrimaries(E.colorSpace),At=E.colorSpace===un||Tt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Lt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ot=E.image[0]&&E.image[0].isDataTexture,gt=[];for(let Mt=0;Mt<6;Mt++)!Lt&&!Ot?gt[Mt]=v(E.image[Mt],!1,!0,s.maxCubemapSize):gt[Mt]=Ot?E.image[Mt].image:E.image[Mt],gt[Mt]=O(E,gt[Mt]);const jt=gt[0],Vt=p(jt)||o,Bt=r.convert(E.format,E.colorSpace),It=r.convert(E.type),Rt=M(E.internalFormat,Bt,It,E.colorSpace),Wt=o&&E.isVideoTexture!==!0,Qt=ct.__version===void 0||pt===!0;let ue=C(E,jt,Vt);rt(n.TEXTURE_CUBE_MAP,E,Vt);let Yt;if(Lt){Wt&&Qt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Rt,jt.width,jt.height);for(let Mt=0;Mt<6;Mt++){Yt=gt[Mt].mipmaps;for(let k=0;k<Yt.length;k++){const Et=Yt[k];E.format!==xn?Bt!==null?Wt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,k,0,0,Et.width,Et.height,Bt,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,k,Rt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,k,0,0,Et.width,Et.height,Bt,It,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,k,Rt,Et.width,Et.height,0,Bt,It,Et.data)}}}else{Yt=E.mipmaps,Wt&&Qt&&(Yt.length>0&&ue++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Rt,gt[0].width,gt[0].height));for(let Mt=0;Mt<6;Mt++)if(Ot){Wt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,gt[Mt].width,gt[Mt].height,Bt,It,gt[Mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Rt,gt[Mt].width,gt[Mt].height,0,Bt,It,gt[Mt].data);for(let k=0;k<Yt.length;k++){const bt=Yt[k].image[Mt].image;Wt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,k+1,0,0,bt.width,bt.height,Bt,It,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,k+1,Rt,bt.width,bt.height,0,Bt,It,bt.data)}}else{Wt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Bt,It,gt[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Rt,Bt,It,gt[Mt]);for(let k=0;k<Yt.length;k++){const Et=Yt[k];Wt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,k+1,0,0,Bt,It,Et.image[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,k+1,Rt,Bt,It,Et.image[Mt])}}}y(E,Vt)&&_(n.TEXTURE_CUBE_MAP),ct.__version=mt.version,E.onUpdate&&E.onUpdate(E)}x.__version=E.version}function A(x,E,H,pt,mt,ct){const Tt=r.convert(H.format,H.colorSpace),yt=r.convert(H.type),At=M(H.internalFormat,Tt,yt,H.colorSpace);if(!i.get(E).__hasExternalTextures){const Ot=Math.max(1,E.width>>ct),gt=Math.max(1,E.height>>ct);mt===n.TEXTURE_3D||mt===n.TEXTURE_2D_ARRAY?e.texImage3D(mt,ct,At,Ot,gt,E.depth,0,Tt,yt,null):e.texImage2D(mt,ct,At,Ot,gt,0,Tt,yt,null)}e.bindFramebuffer(n.FRAMEBUFFER,x),q(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,mt,i.get(H).__webglTexture,0,$(E)):(mt===n.TEXTURE_2D||mt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pt,mt,i.get(H).__webglTexture,ct),e.bindFramebuffer(n.FRAMEBUFFER,null)}function J(x,E,H){if(n.bindRenderbuffer(n.RENDERBUFFER,x),E.depthBuffer&&!E.stencilBuffer){let pt=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||q(E)){const mt=E.depthTexture;mt&&mt.isDepthTexture&&(mt.type===ci?pt=n.DEPTH_COMPONENT32F:mt.type===oi&&(pt=n.DEPTH_COMPONENT24));const ct=$(E);q(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,pt,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,pt,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,pt,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,x)}else if(E.depthBuffer&&E.stencilBuffer){const pt=$(E);H&&q(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,n.DEPTH24_STENCIL8,E.width,E.height):q(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,x)}else{const pt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let mt=0;mt<pt.length;mt++){const ct=pt[mt],Tt=r.convert(ct.format,ct.colorSpace),yt=r.convert(ct.type),At=M(ct.internalFormat,Tt,yt,ct.colorSpace),Lt=$(E);H&&q(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,At,E.width,E.height):q(E)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,At,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,At,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function lt(x,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,x),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const pt=i.get(E.depthTexture).__webglTexture,mt=$(E);if(E.depthTexture.format===Oi)q(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,pt,0);else if(E.depthTexture.format===Ds)q(E)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pt,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function X(x){const E=i.get(x),H=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");lt(E.__webglFramebuffer,x)}else if(H){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]=n.createRenderbuffer(),J(E.__webglDepthbuffer[pt],x,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),J(E.__webglDepthbuffer,x,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(x,E,H){const pt=i.get(x);E!==void 0&&A(pt.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&X(x)}function L(x){const E=x.texture,H=i.get(x),pt=i.get(E);x.addEventListener("dispose",U),x.isWebGLMultipleRenderTargets!==!0&&(pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture()),pt.__version=E.version,a.memory.textures++);const mt=x.isWebGLCubeRenderTarget===!0,ct=x.isWebGLMultipleRenderTargets===!0,Tt=p(x)||o;if(mt){H.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(o&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[yt]=[];for(let At=0;At<E.mipmaps.length;At++)H.__webglFramebuffer[yt][At]=n.createFramebuffer()}else H.__webglFramebuffer[yt]=n.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let yt=0;yt<E.mipmaps.length;yt++)H.__webglFramebuffer[yt]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(ct)if(s.drawBuffers){const yt=x.texture;for(let At=0,Lt=yt.length;At<Lt;At++){const Ot=i.get(yt[At]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&x.samples>0&&q(x)===!1){const yt=ct?E:[E];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let At=0;At<yt.length;At++){const Lt=yt[At];H.__webglColorRenderbuffer[At]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[At]);const Ot=r.convert(Lt.format,Lt.colorSpace),gt=r.convert(Lt.type),jt=M(Lt.internalFormat,Ot,gt,Lt.colorSpace,x.isXRRenderTarget===!0),Vt=$(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,jt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,H.__webglColorRenderbuffer[At])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),J(H.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(mt){e.bindTexture(n.TEXTURE_CUBE_MAP,pt.__webglTexture),rt(n.TEXTURE_CUBE_MAP,E,Tt);for(let yt=0;yt<6;yt++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let At=0;At<E.mipmaps.length;At++)A(H.__webglFramebuffer[yt][At],x,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,At);else A(H.__webglFramebuffer[yt],x,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);y(E,Tt)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){const yt=x.texture;for(let At=0,Lt=yt.length;At<Lt;At++){const Ot=yt[At],gt=i.get(Ot);e.bindTexture(n.TEXTURE_2D,gt.__webglTexture),rt(n.TEXTURE_2D,Ot,Tt),A(H.__webglFramebuffer,x,Ot,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,0),y(Ot,Tt)&&_(n.TEXTURE_2D)}e.unbindTexture()}else{let yt=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(o?yt=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(yt,pt.__webglTexture),rt(yt,E,Tt),o&&E.mipmaps&&E.mipmaps.length>0)for(let At=0;At<E.mipmaps.length;At++)A(H.__webglFramebuffer[At],x,E,n.COLOR_ATTACHMENT0,yt,At);else A(H.__webglFramebuffer,x,E,n.COLOR_ATTACHMENT0,yt,0);y(E,Tt)&&_(yt),e.unbindTexture()}x.depthBuffer&&X(x)}function tt(x){const E=p(x)||o,H=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let pt=0,mt=H.length;pt<mt;pt++){const ct=H[pt];if(y(ct,E)){const Tt=x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,yt=i.get(ct).__webglTexture;e.bindTexture(Tt,yt),_(Tt),e.unbindTexture()}}}function B(x){if(o&&x.samples>0&&q(x)===!1){const E=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],H=x.width,pt=x.height;let mt=n.COLOR_BUFFER_BIT;const ct=[],Tt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=i.get(x),At=x.isWebGLMultipleRenderTargets===!0;if(At)for(let Lt=0;Lt<E.length;Lt++)e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Lt=0;Lt<E.length;Lt++){ct.push(n.COLOR_ATTACHMENT0+Lt),x.depthBuffer&&ct.push(Tt);const Ot=yt.__ignoreDepthValues!==void 0?yt.__ignoreDepthValues:!1;if(Ot===!1&&(x.depthBuffer&&(mt|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&(mt|=n.STENCIL_BUFFER_BIT)),At&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,yt.__webglColorRenderbuffer[Lt]),Ot===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Tt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Tt])),At){const gt=i.get(E[Lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,gt,0)}n.blitFramebuffer(0,0,H,pt,0,0,H,pt,mt,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ct)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),At)for(let Lt=0;Lt<E.length;Lt++){e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,yt.__webglColorRenderbuffer[Lt]);const Ot=i.get(E[Lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,Ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}}function $(x){return Math.min(s.maxSamples,x.samples)}function q(x){const E=i.get(x);return o&&x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ht(x){const E=a.render.frame;u.get(x)!==E&&(u.set(x,E),x.update())}function O(x,E){const H=x.colorSpace,pt=x.format,mt=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===pc||H!==Xn&&H!==un&&(ne.getTransfer(H)===ae?o===!1?t.has("EXT_sRGB")===!0&&pt===xn?(x.format=pc,x.minFilter=cn,x.generateMipmaps=!1):E=wd.sRGBToLinear(E):(pt!==xn||mt!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=F,this.resetTextureUnits=at,this.setTexture2D=Z,this.setTexture2DArray=K,this.setTexture3D=G,this.setTextureCube=it,this.rebindTextures=ut,this.setupRenderTarget=L,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=A,this.useMultisampledRTT=q}function Pv(n,t,e){const i=e.isWebGL2;function s(r,a=un){let o;const c=ne.getTransfer(a);if(r===fi)return n.UNSIGNED_BYTE;if(r===_d)return n.UNSIGNED_SHORT_4_4_4_4;if(r===xd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Qp)return n.BYTE;if(r===tm)return n.SHORT;if(r===Xc)return n.UNSIGNED_SHORT;if(r===gd)return n.INT;if(r===oi)return n.UNSIGNED_INT;if(r===ci)return n.FLOAT;if(r===mr)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===em)return n.ALPHA;if(r===xn)return n.RGBA;if(r===nm)return n.LUMINANCE;if(r===im)return n.LUMINANCE_ALPHA;if(r===Oi)return n.DEPTH_COMPONENT;if(r===Ds)return n.DEPTH_STENCIL;if(r===pc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===sm)return n.RED;if(r===vd)return n.RED_INTEGER;if(r===rm)return n.RG;if(r===yd)return n.RG_INTEGER;if(r===Md)return n.RGBA_INTEGER;if(r===mo||r===go||r===_o||r===xo)if(c===ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===mo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===go)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===mo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===go)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_o)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bl||r===Tl||r===Al||r===wl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===bl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Tl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Al)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sd)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Cl||r===Rl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Cl)return c===ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Rl)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pl||r===Ll||r===Il||r===Dl||r===Nl||r===Ul||r===Fl||r===Ol||r===Bl||r===zl||r===kl||r===Hl||r===Gl||r===Vl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Pl)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ll)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Il)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dl)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nl)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ul)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fl)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ol)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Bl)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zl)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kl)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hl)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gl)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vl)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vo||r===Wl||r===Xl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===vo)return c===ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===am||r===ql||r===Yl||r===$l)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===vo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ql)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$l)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fi?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class Lv extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fe extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iv={type:"move"};class Go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),d=this._getHandJoint(l,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Iv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new fe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Dv extends Bs{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,m=null,g=null;const v=e.getContextAttributes();let p=null,d=null;const y=[],_=[],M=new dt;let C=null;const b=new Qe;b.layers.enable(1),b.viewport=new Le;const w=new Qe;w.layers.enable(2),w.viewport=new Le;const U=[b,w],S=new Lv;S.layers.enable(1),S.layers.enable(2);let T=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let N=y[rt];return N===void 0&&(N=new Go,y[rt]=N),N.getTargetRaySpace()},this.getControllerGrip=function(rt){let N=y[rt];return N===void 0&&(N=new Go,y[rt]=N),N.getGripSpace()},this.getHand=function(rt){let N=y[rt];return N===void 0&&(N=new Go,y[rt]=N),N.getHandSpace()};function W(rt){const N=_.indexOf(rt.inputSource);if(N===-1)return;const I=y[N];I!==void 0&&(I.update(rt.inputSource,rt.frame,l||a),I.dispatchEvent({type:rt.type,data:rt.inputSource}))}function at(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",at),s.removeEventListener("inputsourceschange",F);for(let rt=0;rt<y.length;rt++){const N=_[rt];N!==null&&(_[rt]=null,y[rt].disconnect(N))}T=null,V=null,t.setRenderTarget(p),m=null,f=null,h=null,s=null,d=null,vt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){r=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){o=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(rt){l=rt},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",at),s.addEventListener("inputsourceschange",F),v.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(M),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const N={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,N),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Vi(m.framebufferWidth,m.framebufferHeight,{format:xn,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let N=null,I=null,P=null;v.depth&&(P=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,N=v.stencil?Ds:Oi,I=v.stencil?Fi:oi);const A={colorFormat:e.RGBA8,depthFormat:P,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(A),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new Vi(f.textureWidth,f.textureHeight,{format:xn,type:fi,depthTexture:new zd(f.textureWidth,f.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const J=t.properties.get(d);J.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),vt.setContext(s),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function F(rt){for(let N=0;N<rt.removed.length;N++){const I=rt.removed[N],P=_.indexOf(I);P>=0&&(_[P]=null,y[P].disconnect(I))}for(let N=0;N<rt.added.length;N++){const I=rt.added[N];let P=_.indexOf(I);if(P===-1){for(let J=0;J<y.length;J++)if(J>=_.length){_.push(I),P=J;break}else if(_[J]===null){_[J]=I,P=J;break}if(P===-1)break}const A=y[P];A&&A.connect(I)}}const Y=new D,Z=new D;function K(rt,N,I){Y.setFromMatrixPosition(N.matrixWorld),Z.setFromMatrixPosition(I.matrixWorld);const P=Y.distanceTo(Z),A=N.projectionMatrix.elements,J=I.projectionMatrix.elements,lt=A[14]/(A[10]-1),X=A[14]/(A[10]+1),ut=(A[9]+1)/A[5],L=(A[9]-1)/A[5],tt=(A[8]-1)/A[0],B=(J[8]+1)/J[0],$=lt*tt,q=lt*B,ht=P/(-tt+B),O=ht*-tt;N.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(O),rt.translateZ(ht),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert();const x=lt+ht,E=X+ht,H=$-O,pt=q+(P-O),mt=ut*X/E*x,ct=L*X/E*x;rt.projectionMatrix.makePerspective(H,pt,mt,ct,x,E),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}function G(rt,N){N===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(N.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;S.near=w.near=b.near=rt.near,S.far=w.far=b.far=rt.far,(T!==S.near||V!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,V=S.far);const N=rt.parent,I=S.cameras;G(S,N);for(let P=0;P<I.length;P++)G(I[P],N);I.length===2?K(S,b,w):S.projectionMatrix.copy(b.projectionMatrix),it(rt,S,N)};function it(rt,N,I){I===null?rt.matrix.copy(N.matrixWorld):(rt.matrix.copy(I.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(N.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(N.projectionMatrix),rt.projectionMatrixInverse.copy(N.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=gr*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(rt){c=rt,f!==null&&(f.fixedFoveation=rt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=rt)};let ot=null;function ft(rt,N){if(u=N.getViewerPose(l||a),g=N,u!==null){const I=u.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let P=!1;I.length!==S.cameras.length&&(S.cameras.length=0,P=!0);for(let A=0;A<I.length;A++){const J=I[A];let lt=null;if(m!==null)lt=m.getViewport(J);else{const ut=h.getViewSubImage(f,J);lt=ut.viewport,A===0&&(t.setRenderTargetTextures(d,ut.colorTexture,f.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(d))}let X=U[A];X===void 0&&(X=new Qe,X.layers.enable(A),X.viewport=new Le,U[A]=X),X.matrix.fromArray(J.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(J.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(lt.x,lt.y,lt.width,lt.height),A===0&&(S.matrix.copy(X.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),P===!0&&S.cameras.push(X)}}for(let I=0;I<y.length;I++){const P=_[I],A=y[I];P!==null&&A!==void 0&&A.update(P,N,l||a)}ot&&ot(rt,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),g=null}const vt=new Od;vt.setAnimationLoop(ft),this.setAnimationLoop=function(rt){ot=rt},this.dispose=function(){}}}function Nv(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Nd(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,y,_,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,M)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?c(p,d,y,_):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===je&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===je&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=t.get(d).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*_,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,y,_){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=_*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===je&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const y=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Uv(n,t,e,i){let s={},r={},a=[];const o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,_){const M=_.program;i.uniformBlockBinding(y,M)}function l(y,_){let M=s[y.id];M===void 0&&(g(y),M=u(y),s[y.id]=M,y.addEventListener("dispose",p));const C=_.program;i.updateUBOMapping(y,C);const b=t.render.frame;r[y.id]!==b&&(f(y),r[y.id]=b)}function u(y){const _=h();y.__bindingPointIndex=_;const M=n.createBuffer(),C=y.__size,b=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,C,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=s[y.id],M=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let b=0,w=M.length;b<w;b++){const U=Array.isArray(M[b])?M[b]:[M[b]];for(let S=0,T=U.length;S<T;S++){const V=U[S];if(m(V,b,S,C)===!0){const W=V.__offset,at=Array.isArray(V.value)?V.value:[V.value];let F=0;for(let Y=0;Y<at.length;Y++){const Z=at[Y],K=v(Z);typeof Z=="number"||typeof Z=="boolean"?(V.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,W+F,V.__data)):Z.isMatrix3?(V.__data[0]=Z.elements[0],V.__data[1]=Z.elements[1],V.__data[2]=Z.elements[2],V.__data[3]=0,V.__data[4]=Z.elements[3],V.__data[5]=Z.elements[4],V.__data[6]=Z.elements[5],V.__data[7]=0,V.__data[8]=Z.elements[6],V.__data[9]=Z.elements[7],V.__data[10]=Z.elements[8],V.__data[11]=0):(Z.toArray(V.__data,F),F+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,_,M,C){const b=y.value,w=_+"_"+M;if(C[w]===void 0)return typeof b=="number"||typeof b=="boolean"?C[w]=b:C[w]=b.clone(),!0;{const U=C[w];if(typeof b=="number"||typeof b=="boolean"){if(U!==b)return C[w]=b,!0}else if(U.equals(b)===!1)return U.copy(b),!0}return!1}function g(y){const _=y.uniforms;let M=0;const C=16;for(let w=0,U=_.length;w<U;w++){const S=Array.isArray(_[w])?_[w]:[_[w]];for(let T=0,V=S.length;T<V;T++){const W=S[T],at=Array.isArray(W.value)?W.value:[W.value];for(let F=0,Y=at.length;F<Y;F++){const Z=at[F],K=v(Z),G=M%C;G!==0&&C-G<K.boundary&&(M+=C-G),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=K.storage}}}const b=M%C;return b>0&&(M+=C-b),y.__size=M,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function p(y){const _=y.target;_.removeEventListener("dispose",p);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(const y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:d}}class Kc{constructor(t={}){const{canvas:e=Lm(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const d=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this._useLegacyLights=!1,this.toneMapping=di,this.toneMappingExposure=1;const _=this;let M=!1,C=0,b=0,w=null,U=-1,S=null;const T=new Le,V=new Le;let W=null;const at=new Ct(0);let F=0,Y=e.width,Z=e.height,K=1,G=null,it=null;const ot=new Le(0,0,Y,Z),ft=new Le(0,0,Y,Z);let vt=!1;const rt=new jc;let N=!1,I=!1,P=null;const A=new Zt,J=new dt,lt=new D,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ut(){return w===null?K:1}let L=i;function tt(R,j){for(let nt=0;nt<R.length;nt++){const st=R[nt],et=e.getContext(st,j);if(et!==null)return et}return null}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vc}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",Et,!1),L===null){const j=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&j.shift(),L=tt(j,R),L===null)throw tt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let B,$,q,ht,O,x,E,H,pt,mt,ct,Tt,yt,At,Lt,Ot,gt,jt,Vt,Bt,It,Rt,Wt,Qt;function ue(){B=new X_(L),$=new z_(L,B,t),B.init($),Rt=new Pv(L,B,$),q=new Cv(L,B,$),ht=new $_(L),O=new pv,x=new Rv(L,B,q,O,$,Rt,ht),E=new H_(_),H=new W_(_),pt=new n0(L,$),Wt=new O_(L,B,pt,$),mt=new q_(L,pt,ht,Wt),ct=new J_(L,mt,pt,ht),Vt=new K_(L,$,x),Ot=new k_(O),Tt=new fv(_,E,H,B,$,Wt,Ot),yt=new Nv(_,O),At=new gv,Lt=new Sv(B,$),jt=new F_(_,E,H,q,ct,f,c),gt=new wv(_,ct,$),Qt=new Uv(L,ht,$,q),Bt=new B_(L,B,ht,$),It=new Y_(L,B,ht,$),ht.programs=Tt.programs,_.capabilities=$,_.extensions=B,_.properties=O,_.renderLists=At,_.shadowMap=gt,_.state=q,_.info=ht}ue();const Yt=new Dv(_,L);this.xr=Yt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=B.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=B.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(Y,Z,!1))},this.getSize=function(R){return R.set(Y,Z)},this.setSize=function(R,j,nt=!0){if(Yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=R,Z=j,e.width=Math.floor(R*K),e.height=Math.floor(j*K),nt===!0&&(e.style.width=R+"px",e.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(Y*K,Z*K).floor()},this.setDrawingBufferSize=function(R,j,nt){Y=R,Z=j,K=nt,e.width=Math.floor(R*nt),e.height=Math.floor(j*nt),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(ot)},this.setViewport=function(R,j,nt,st){R.isVector4?ot.set(R.x,R.y,R.z,R.w):ot.set(R,j,nt,st),q.viewport(T.copy(ot).multiplyScalar(K).floor())},this.getScissor=function(R){return R.copy(ft)},this.setScissor=function(R,j,nt,st){R.isVector4?ft.set(R.x,R.y,R.z,R.w):ft.set(R,j,nt,st),q.scissor(V.copy(ft).multiplyScalar(K).floor())},this.getScissorTest=function(){return vt},this.setScissorTest=function(R){q.setScissorTest(vt=R)},this.setOpaqueSort=function(R){G=R},this.setTransparentSort=function(R){it=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(R=!0,j=!0,nt=!0){let st=0;if(R){let et=!1;if(w!==null){const wt=w.texture.format;et=wt===Md||wt===yd||wt===vd}if(et){const wt=w.texture.type,Pt=wt===fi||wt===oi||wt===Xc||wt===Fi||wt===_d||wt===xd,Nt=jt.getClearColor(),zt=jt.getClearAlpha(),qt=Nt.r,Ht=Nt.g,Gt=Nt.b;Pt?(m[0]=qt,m[1]=Ht,m[2]=Gt,m[3]=zt,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=qt,g[1]=Ht,g[2]=Gt,g[3]=zt,L.clearBufferiv(L.COLOR,0,g))}else st|=L.COLOR_BUFFER_BIT}j&&(st|=L.DEPTH_BUFFER_BIT),nt&&(st|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),At.dispose(),Lt.dispose(),O.dispose(),E.dispose(),H.dispose(),ct.dispose(),Wt.dispose(),Qt.dispose(),Tt.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",He),Yt.removeEventListener("sessionend",re),P&&(P.dispose(),P=null),Ge.stop()};function Mt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const R=ht.autoReset,j=gt.enabled,nt=gt.autoUpdate,st=gt.needsUpdate,et=gt.type;ue(),ht.autoReset=R,gt.enabled=j,gt.autoUpdate=nt,gt.needsUpdate=st,gt.type=et}function Et(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function bt(R){const j=R.target;j.removeEventListener("dispose",bt),Ut(j)}function Ut(R){Dt(R),O.remove(R)}function Dt(R){const j=O.get(R).programs;j!==void 0&&(j.forEach(function(nt){Tt.releaseProgram(nt)}),R.isShaderMaterial&&Tt.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,nt,st,et,wt){j===null&&(j=X);const Pt=et.isMesh&&et.matrixWorld.determinant()<0,Nt=jf(R,j,nt,st,et);q.setMaterial(st,Pt);let zt=nt.index,qt=1;if(st.wireframe===!0){if(zt=mt.getWireframeAttribute(nt),zt===void 0)return;qt=2}const Ht=nt.drawRange,Gt=nt.attributes.position;let me=Ht.start*qt,Ze=(Ht.start+Ht.count)*qt;wt!==null&&(me=Math.max(me,wt.start*qt),Ze=Math.min(Ze,(wt.start+wt.count)*qt)),zt!==null?(me=Math.max(me,0),Ze=Math.min(Ze,zt.count)):Gt!=null&&(me=Math.max(me,0),Ze=Math.min(Ze,Gt.count));const Re=Ze-me;if(Re<0||Re===1/0)return;Wt.setup(et,st,Nt,nt,zt);let Nn,oe=Bt;if(zt!==null&&(Nn=pt.get(zt),oe=It,oe.setIndex(Nn)),et.isMesh)st.wireframe===!0?(q.setLineWidth(st.wireframeLinewidth*ut()),oe.setMode(L.LINES)):oe.setMode(L.TRIANGLES);else if(et.isLine){let $t=st.linewidth;$t===void 0&&($t=1),q.setLineWidth($t*ut()),et.isLineSegments?oe.setMode(L.LINES):et.isLineLoop?oe.setMode(L.LINE_LOOP):oe.setMode(L.LINE_STRIP)}else et.isPoints?oe.setMode(L.POINTS):et.isSprite&&oe.setMode(L.TRIANGLES);if(et.isBatchedMesh)oe.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else if(et.isInstancedMesh)oe.renderInstances(me,Re,et.count);else if(nt.isInstancedBufferGeometry){const $t=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,ao=Math.min(nt.instanceCount,$t);oe.renderInstances(me,Re,ao)}else oe.render(me,Re)};function ie(R,j,nt){R.transparent===!0&&R.side===qe&&R.forceSinglePass===!1?(R.side=je,R.needsUpdate=!0,Ar(R,j,nt),R.side=gi,R.needsUpdate=!0,Ar(R,j,nt),R.side=qe):Ar(R,j,nt)}this.compile=function(R,j,nt=null){nt===null&&(nt=R),p=Lt.get(nt),p.init(),y.push(p),nt.traverseVisible(function(et){et.isLight&&et.layers.test(j.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),R!==nt&&R.traverseVisible(function(et){et.isLight&&et.layers.test(j.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),p.setupLights(_._useLegacyLights);const st=new Set;return R.traverse(function(et){const wt=et.material;if(wt)if(Array.isArray(wt))for(let Pt=0;Pt<wt.length;Pt++){const Nt=wt[Pt];ie(Nt,nt,et),st.add(Nt)}else ie(wt,nt,et),st.add(wt)}),y.pop(),p=null,st},this.compileAsync=function(R,j,nt=null){const st=this.compile(R,j,nt);return new Promise(et=>{function wt(){if(st.forEach(function(Pt){O.get(Pt).currentProgram.isReady()&&st.delete(Pt)}),st.size===0){et(R);return}setTimeout(wt,10)}B.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let se=null;function Ce(R){se&&se(R)}function He(){Ge.stop()}function re(){Ge.start()}const Ge=new Od;Ge.setAnimationLoop(Ce),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(R){se=R,Yt.setAnimationLoop(R),R===null?Ge.stop():Ge.start()},Yt.addEventListener("sessionstart",He),Yt.addEventListener("sessionend",re),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(j),j=Yt.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,j,w),p=Lt.get(R,y.length),p.init(),y.push(p),A.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),rt.setFromProjectionMatrix(A),I=this.localClippingEnabled,N=Ot.init(this.clippingPlanes,I),v=At.get(R,d.length),v.init(),d.push(v),Tn(R,j,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(G,it),this.info.render.frame++,N===!0&&Ot.beginShadows();const nt=p.state.shadowsArray;if(gt.render(nt,R,j),N===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(v,R),p.setupLights(_._useLegacyLights),j.isArrayCamera){const st=j.cameras;for(let et=0,wt=st.length;et<wt;et++){const Pt=st[et];dl(v,R,Pt,Pt.viewport)}}else dl(v,R,j);w!==null&&(x.updateMultisampleRenderTarget(w),x.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(_,R,j),Wt.resetDefaultState(),U=-1,S=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Tn(R,j,nt,st){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)nt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||rt.intersectsSprite(R)){st&&lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(A);const Pt=ct.update(R),Nt=R.material;Nt.visible&&v.push(R,Pt,Nt,nt,lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||rt.intersectsObject(R))){const Pt=ct.update(R),Nt=R.material;if(st&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),lt.copy(R.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),lt.copy(Pt.boundingSphere.center)),lt.applyMatrix4(R.matrixWorld).applyMatrix4(A)),Array.isArray(Nt)){const zt=Pt.groups;for(let qt=0,Ht=zt.length;qt<Ht;qt++){const Gt=zt[qt],me=Nt[Gt.materialIndex];me&&me.visible&&v.push(R,Pt,me,nt,lt.z,Gt)}}else Nt.visible&&v.push(R,Pt,Nt,nt,lt.z,null)}}const wt=R.children;for(let Pt=0,Nt=wt.length;Pt<Nt;Pt++)Tn(wt[Pt],j,nt,st)}function dl(R,j,nt,st){const et=R.opaque,wt=R.transmissive,Pt=R.transparent;p.setupLightsView(nt),N===!0&&Ot.setGlobalState(_.clippingPlanes,nt),wt.length>0&&$f(et,wt,j,nt),st&&q.viewport(T.copy(st)),et.length>0&&Tr(et,j,nt),wt.length>0&&Tr(wt,j,nt),Pt.length>0&&Tr(Pt,j,nt),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function $f(R,j,nt,st){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;const wt=$.isWebGL2;P===null&&(P=new Vi(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")?mr:fi,minFilter:pr,samples:wt?4:0})),_.getDrawingBufferSize(J),wt?P.setSize(J.x,J.y):P.setSize(Fa(J.x),Fa(J.y));const Pt=_.getRenderTarget();_.setRenderTarget(P),_.getClearColor(at),F=_.getClearAlpha(),F<1&&_.setClearColor(16777215,.5),_.clear();const Nt=_.toneMapping;_.toneMapping=di,Tr(R,nt,st),x.updateMultisampleRenderTarget(P),x.updateRenderTargetMipmap(P);let zt=!1;for(let qt=0,Ht=j.length;qt<Ht;qt++){const Gt=j[qt],me=Gt.object,Ze=Gt.geometry,Re=Gt.material,Nn=Gt.group;if(Re.side===qe&&me.layers.test(st.layers)){const oe=Re.side;Re.side=je,Re.needsUpdate=!0,fl(me,nt,st,Ze,Re,Nn),Re.side=oe,Re.needsUpdate=!0,zt=!0}}zt===!0&&(x.updateMultisampleRenderTarget(P),x.updateRenderTargetMipmap(P)),_.setRenderTarget(Pt),_.setClearColor(at,F),_.toneMapping=Nt}function Tr(R,j,nt){const st=j.isScene===!0?j.overrideMaterial:null;for(let et=0,wt=R.length;et<wt;et++){const Pt=R[et],Nt=Pt.object,zt=Pt.geometry,qt=st===null?Pt.material:st,Ht=Pt.group;Nt.layers.test(nt.layers)&&fl(Nt,j,nt,zt,qt,Ht)}}function fl(R,j,nt,st,et,wt){R.onBeforeRender(_,j,nt,st,et,wt),R.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),et.onBeforeRender(_,j,nt,st,R,wt),et.transparent===!0&&et.side===qe&&et.forceSinglePass===!1?(et.side=je,et.needsUpdate=!0,_.renderBufferDirect(nt,j,st,et,R,wt),et.side=gi,et.needsUpdate=!0,_.renderBufferDirect(nt,j,st,et,R,wt),et.side=qe):_.renderBufferDirect(nt,j,st,et,R,wt),R.onAfterRender(_,j,nt,st,et,wt)}function Ar(R,j,nt){j.isScene!==!0&&(j=X);const st=O.get(R),et=p.state.lights,wt=p.state.shadowsArray,Pt=et.state.version,Nt=Tt.getParameters(R,et.state,wt,j,nt),zt=Tt.getProgramCacheKey(Nt);let qt=st.programs;st.environment=R.isMeshStandardMaterial?j.environment:null,st.fog=j.fog,st.envMap=(R.isMeshStandardMaterial?H:E).get(R.envMap||st.environment),qt===void 0&&(R.addEventListener("dispose",bt),qt=new Map,st.programs=qt);let Ht=qt.get(zt);if(Ht!==void 0){if(st.currentProgram===Ht&&st.lightsStateVersion===Pt)return ml(R,Nt),Ht}else Nt.uniforms=Tt.getUniforms(R),R.onBuild(nt,Nt,_),R.onBeforeCompile(Nt,_),Ht=Tt.acquireProgram(Nt,zt),qt.set(zt,Ht),st.uniforms=Nt.uniforms;const Gt=st.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Gt.clippingPlanes=Ot.uniform),ml(R,Nt),st.needsLights=Kf(R),st.lightsStateVersion=Pt,st.needsLights&&(Gt.ambientLightColor.value=et.state.ambient,Gt.lightProbe.value=et.state.probe,Gt.directionalLights.value=et.state.directional,Gt.directionalLightShadows.value=et.state.directionalShadow,Gt.spotLights.value=et.state.spot,Gt.spotLightShadows.value=et.state.spotShadow,Gt.rectAreaLights.value=et.state.rectArea,Gt.ltc_1.value=et.state.rectAreaLTC1,Gt.ltc_2.value=et.state.rectAreaLTC2,Gt.pointLights.value=et.state.point,Gt.pointLightShadows.value=et.state.pointShadow,Gt.hemisphereLights.value=et.state.hemi,Gt.directionalShadowMap.value=et.state.directionalShadowMap,Gt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Gt.spotShadowMap.value=et.state.spotShadowMap,Gt.spotLightMatrix.value=et.state.spotLightMatrix,Gt.spotLightMap.value=et.state.spotLightMap,Gt.pointShadowMap.value=et.state.pointShadowMap,Gt.pointShadowMatrix.value=et.state.pointShadowMatrix),st.currentProgram=Ht,st.uniformsList=null,Ht}function pl(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=ya.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function ml(R,j){const nt=O.get(R);nt.outputColorSpace=j.outputColorSpace,nt.batching=j.batching,nt.instancing=j.instancing,nt.instancingColor=j.instancingColor,nt.skinning=j.skinning,nt.morphTargets=j.morphTargets,nt.morphNormals=j.morphNormals,nt.morphColors=j.morphColors,nt.morphTargetsCount=j.morphTargetsCount,nt.numClippingPlanes=j.numClippingPlanes,nt.numIntersection=j.numClipIntersection,nt.vertexAlphas=j.vertexAlphas,nt.vertexTangents=j.vertexTangents,nt.toneMapping=j.toneMapping}function jf(R,j,nt,st,et){j.isScene!==!0&&(j=X),x.resetTextureUnits();const wt=j.fog,Pt=st.isMeshStandardMaterial?j.environment:null,Nt=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Xn,zt=(st.isMeshStandardMaterial?H:E).get(st.envMap||Pt),qt=st.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Ht=!!nt.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Gt=!!nt.morphAttributes.position,me=!!nt.morphAttributes.normal,Ze=!!nt.morphAttributes.color;let Re=di;st.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Re=_.toneMapping);const Nn=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,oe=Nn!==void 0?Nn.length:0,$t=O.get(st),ao=p.state.lights;if(N===!0&&(I===!0||R!==S)){const sn=R===S&&st.id===U;Ot.setState(st,R,sn)}let he=!1;st.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==ao.state.version||$t.outputColorSpace!==Nt||et.isBatchedMesh&&$t.batching===!1||!et.isBatchedMesh&&$t.batching===!0||et.isInstancedMesh&&$t.instancing===!1||!et.isInstancedMesh&&$t.instancing===!0||et.isSkinnedMesh&&$t.skinning===!1||!et.isSkinnedMesh&&$t.skinning===!0||et.isInstancedMesh&&$t.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&$t.instancingColor===!1&&et.instanceColor!==null||$t.envMap!==zt||st.fog===!0&&$t.fog!==wt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Ot.numPlanes||$t.numIntersection!==Ot.numIntersection)||$t.vertexAlphas!==qt||$t.vertexTangents!==Ht||$t.morphTargets!==Gt||$t.morphNormals!==me||$t.morphColors!==Ze||$t.toneMapping!==Re||$.isWebGL2===!0&&$t.morphTargetsCount!==oe)&&(he=!0):(he=!0,$t.__version=st.version);let vi=$t.currentProgram;he===!0&&(vi=Ar(st,j,et));let gl=!1,Gs=!1,oo=!1;const Oe=vi.getUniforms(),yi=$t.uniforms;if(q.useProgram(vi.program)&&(gl=!0,Gs=!0,oo=!0),st.id!==U&&(U=st.id,Gs=!0),gl||S!==R){Oe.setValue(L,"projectionMatrix",R.projectionMatrix),Oe.setValue(L,"viewMatrix",R.matrixWorldInverse);const sn=Oe.map.cameraPosition;sn!==void 0&&sn.setValue(L,lt.setFromMatrixPosition(R.matrixWorld)),$.logarithmicDepthBuffer&&Oe.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Oe.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Gs=!0,oo=!0)}if(et.isSkinnedMesh){Oe.setOptional(L,et,"bindMatrix"),Oe.setOptional(L,et,"bindMatrixInverse");const sn=et.skeleton;sn&&($.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),Oe.setValue(L,"boneTexture",sn.boneTexture,x)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}et.isBatchedMesh&&(Oe.setOptional(L,et,"batchingTexture"),Oe.setValue(L,"batchingTexture",et._matricesTexture,x));const co=nt.morphAttributes;if((co.position!==void 0||co.normal!==void 0||co.color!==void 0&&$.isWebGL2===!0)&&Vt.update(et,nt,vi),(Gs||$t.receiveShadow!==et.receiveShadow)&&($t.receiveShadow=et.receiveShadow,Oe.setValue(L,"receiveShadow",et.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(yi.envMap.value=zt,yi.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Gs&&(Oe.setValue(L,"toneMappingExposure",_.toneMappingExposure),$t.needsLights&&Zf(yi,oo),wt&&st.fog===!0&&yt.refreshFogUniforms(yi,wt),yt.refreshMaterialUniforms(yi,st,K,Z,P),ya.upload(L,pl($t),yi,x)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(ya.upload(L,pl($t),yi,x),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Oe.setValue(L,"center",et.center),Oe.setValue(L,"modelViewMatrix",et.modelViewMatrix),Oe.setValue(L,"normalMatrix",et.normalMatrix),Oe.setValue(L,"modelMatrix",et.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const sn=st.uniformsGroups;for(let lo=0,Jf=sn.length;lo<Jf;lo++)if($.isWebGL2){const _l=sn[lo];Qt.update(_l,vi),Qt.bind(_l,vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vi}function Zf(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function Kf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,j,nt){O.get(R.texture).__webglTexture=j,O.get(R.depthTexture).__webglTexture=nt;const st=O.get(R);st.__hasExternalTextures=!0,st.__hasExternalTextures&&(st.__autoAllocateDepthBuffer=nt===void 0,st.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),st.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,j){const nt=O.get(R);nt.__webglFramebuffer=j,nt.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,nt=0){w=R,C=j,b=nt;let st=!0,et=null,wt=!1,Pt=!1;if(R){const zt=O.get(R);zt.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(L.FRAMEBUFFER,null),st=!1):zt.__webglFramebuffer===void 0?x.setupRenderTarget(R):zt.__hasExternalTextures&&x.rebindTextures(R,O.get(R.texture).__webglTexture,O.get(R.depthTexture).__webglTexture);const qt=R.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Pt=!0);const Ht=O.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ht[j])?et=Ht[j][nt]:et=Ht[j],wt=!0):$.isWebGL2&&R.samples>0&&x.useMultisampledRTT(R)===!1?et=O.get(R).__webglMultisampledFramebuffer:Array.isArray(Ht)?et=Ht[nt]:et=Ht,T.copy(R.viewport),V.copy(R.scissor),W=R.scissorTest}else T.copy(ot).multiplyScalar(K).floor(),V.copy(ft).multiplyScalar(K).floor(),W=vt;if(q.bindFramebuffer(L.FRAMEBUFFER,et)&&$.drawBuffers&&st&&q.drawBuffers(R,et),q.viewport(T),q.scissor(V),q.setScissorTest(W),wt){const zt=O.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+j,zt.__webglTexture,nt)}else if(Pt){const zt=O.get(R.texture),qt=j||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,zt.__webglTexture,nt||0,qt)}U=-1},this.readRenderTargetPixels=function(R,j,nt,st,et,wt,Pt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=O.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){q.bindFramebuffer(L.FRAMEBUFFER,Nt);try{const zt=R.texture,qt=zt.format,Ht=zt.type;if(qt!==xn&&Rt.convert(qt)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=Ht===mr&&(B.has("EXT_color_buffer_half_float")||$.isWebGL2&&B.has("EXT_color_buffer_float"));if(Ht!==fi&&Rt.convert(Ht)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===ci&&($.isWebGL2||B.has("OES_texture_float")||B.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-st&&nt>=0&&nt<=R.height-et&&L.readPixels(j,nt,st,et,Rt.convert(qt),Rt.convert(Ht),wt)}finally{const zt=w!==null?O.get(w).__webglFramebuffer:null;q.bindFramebuffer(L.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(R,j,nt=0){const st=Math.pow(2,-nt),et=Math.floor(j.image.width*st),wt=Math.floor(j.image.height*st);x.setTexture2D(j,0),L.copyTexSubImage2D(L.TEXTURE_2D,nt,0,0,R.x,R.y,et,wt),q.unbindTexture()},this.copyTextureToTexture=function(R,j,nt,st=0){const et=j.image.width,wt=j.image.height,Pt=Rt.convert(nt.format),Nt=Rt.convert(nt.type);x.setTexture2D(nt,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,nt.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,nt.unpackAlignment),j.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,st,R.x,R.y,et,wt,Pt,Nt,j.image.data):j.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,st,R.x,R.y,j.mipmaps[0].width,j.mipmaps[0].height,Pt,j.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,st,R.x,R.y,Pt,Nt,j.image),st===0&&nt.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(R,j,nt,st,et=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=R.max.x-R.min.x+1,Pt=R.max.y-R.min.y+1,Nt=R.max.z-R.min.z+1,zt=Rt.convert(st.format),qt=Rt.convert(st.type);let Ht;if(st.isData3DTexture)x.setTexture3D(st,0),Ht=L.TEXTURE_3D;else if(st.isDataArrayTexture||st.isCompressedArrayTexture)x.setTexture2DArray(st,0),Ht=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,st.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,st.unpackAlignment);const Gt=L.getParameter(L.UNPACK_ROW_LENGTH),me=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ze=L.getParameter(L.UNPACK_SKIP_PIXELS),Re=L.getParameter(L.UNPACK_SKIP_ROWS),Nn=L.getParameter(L.UNPACK_SKIP_IMAGES),oe=nt.isCompressedTexture?nt.mipmaps[et]:nt.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,oe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,oe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,R.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,R.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,R.min.z),nt.isDataTexture||nt.isData3DTexture?L.texSubImage3D(Ht,et,j.x,j.y,j.z,wt,Pt,Nt,zt,qt,oe.data):nt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ht,et,j.x,j.y,j.z,wt,Pt,Nt,zt,oe.data)):L.texSubImage3D(Ht,et,j.x,j.y,j.z,wt,Pt,Nt,zt,qt,oe),L.pixelStorei(L.UNPACK_ROW_LENGTH,Gt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,Re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Nn),et===0&&st.generateMipmaps&&L.generateMipmap(Ht),q.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?x.setTextureCube(R,0):R.isData3DTexture?x.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?x.setTexture2DArray(R,0):x.setTexture2D(R,0),q.unbindTexture()},this.resetState=function(){C=0,b=0,w=null,q.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===qc?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===Ka?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===be?Bi:Ed}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Bi?be:Xn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Fv extends Kc{}Fv.prototype.isWebGL1Renderer=!0;class Jc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=i}clone(){return new Jc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xd extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Ou extends Ne{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ds=new Zt,Bu=new Zt,jr=[],zu=new Yi,Ov=new Zt,$s=new ee,js=new xi;class En extends ee{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ou(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ov)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ds),zu.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(zu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ds),js.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,s=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(i),t.ray.intersectsSphere(js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),Bu.multiplyMatrices(i,ds),$s.matrixWorld=Bu,$s.raycast(t,jr);for(let a=0,o=jr.length;a<o;a++){const c=jr[a];c.instanceId=r,c.object=this,e.push(c)}jr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ou(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Qa extends $i{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ku=new D,Hu=new D,Gu=new Zt,Vo=new $c,Zr=new xi;class qd extends Te{constructor(t=new ve,e=new Qa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ku.fromBufferAttribute(e,s-1),Hu.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ku.distanceTo(Hu);t.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(s),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;Gu.copy(s).invert(),Vo.copy(t.ray).applyMatrix4(Gu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new D,u=new D,h=new D,f=new D,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const d=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let _=d,M=y-1;_<M;_+=m){const C=g.getX(_),b=g.getX(_+1);if(l.fromBufferAttribute(p,C),u.fromBufferAttribute(p,b),Vo.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const U=t.ray.origin.distanceTo(f);U<t.near||U>t.far||e.push({distance:U,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let _=d,M=y-1;_<M;_+=m){if(l.fromBufferAttribute(p,_),u.fromBufferAttribute(p,_+1),Vo.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(f);b<t.near||b>t.far||e.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Vu=new D,Wu=new D;class Yd extends qd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Vu.fromBufferAttribute(e,s),Wu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Vu.distanceTo(Wu);t.setAttribute("lineDistance",new Kt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bv extends $i{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xu=new Zt,_c=new $c,Kr=new xi,Jr=new D;class zv extends Te{constructor(t=new ve,e=new Bv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;Xu.copy(s).invert(),_c.copy(t.ray).applyMatrix4(Xu);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=f,v=m;g<v;g++){const p=l.getX(g);Jr.fromBufferAttribute(h,p),qu(Jr,p,c,s,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=f,v=m;g<v;g++)Jr.fromBufferAttribute(h,g),qu(Jr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function qu(n,t,e,i,s,r,a){const o=_c.distanceSqToPoint(n);if(o<e){const c=new D;_c.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const u=i[s],f=i[s+1]-u,m=(a-u)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new dt:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new D,s=[],r=[],a=[],o=new D,c=new Zt;for(let m=0;m<=t;m++){const g=m/t;s[m]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),f<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(De(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(De(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Qc extends Dn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const i=e||new dt,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*u-m*h+this.aX,l=f*h+m*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class kv extends Qc{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function tl(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let f=(a-r)/l-(o-r)/(l+u)+(o-a)/u,m=(o-a)/u-(c-a)/(u+h)+(c-o)/h;f*=u,m*=u,s(a,o,f,m)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const Qr=new D,Wo=new tl,Xo=new tl,qo=new tl;class Hv extends Dn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Qr.subVectors(s[0],s[1]).add(s[0]),l=Qr);const h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),m),v=Math.pow(h.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Wo.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,v,p),Xo.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,v,p),qo.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&(Wo.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Xo.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),qo.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return i.set(Wo.calc(c),Xo.calc(c),qo.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Yu(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function Gv(n,t){const e=1-n;return e*e*t}function Vv(n,t){return 2*(1-n)*n*t}function Wv(n,t){return n*n*t}function cr(n,t,e,i){return Gv(n,t)+Vv(n,e)+Wv(n,i)}function Xv(n,t){const e=1-n;return e*e*e*t}function qv(n,t){const e=1-n;return 3*e*e*n*t}function Yv(n,t){return 3*(1-n)*n*n*t}function $v(n,t){return n*n*n*t}function lr(n,t,e,i,s){return Xv(n,t)+qv(n,e)+Yv(n,i)+$v(n,s)}class $d extends Dn{constructor(t=new dt,e=new dt,i=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new dt){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(lr(t,s.x,r.x,a.x,o.x),lr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jv extends Dn{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(lr(t,s.x,r.x,a.x,o.x),lr(t,s.y,r.y,a.y,o.y),lr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jd extends Dn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zv extends Dn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zd extends Dn{constructor(t=new dt,e=new dt,i=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new dt){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(cr(t,s.x,r.x,a.x),cr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kv extends Dn{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(cr(t,s.x,r.x,a.x),cr(t,s.y,r.y,a.y),cr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kd extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(Yu(o,c.x,l.x,u.x,h.x),Yu(o,c.y,l.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new dt().fromArray(s))}return this}}var xc=Object.freeze({__proto__:null,ArcCurve:kv,CatmullRomCurve3:Hv,CubicBezierCurve:$d,CubicBezierCurve3:jv,EllipseCurve:Qc,LineCurve:jd,LineCurve3:Zv,QuadraticBezierCurve:Zd,QuadraticBezierCurve3:Kv,SplineCurve:Kd});class Jv extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new xc[s.type]().fromJSON(s))}return this}}class Ts extends Jv{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new jd(this.currentPoint.clone(),new dt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Zd(this.currentPoint.clone(),new dt(t,e),new dt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new $d(this.currentPoint.clone(),new dt(t,e),new dt(i,s),new dt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Kd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,a,o,c),this}absellipse(t,e,i,s,r,a,o,c){const l=new Qc(t,e,i,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class to extends ve{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new D,u=new dt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const m=i+h/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(o,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class $n extends ve{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],m=[];let g=0;const v=[],p=i/2;let d=0;y(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(m,2));function y(){const M=new D,C=new D;let b=0;const w=(e-t)/i;for(let U=0;U<=r;U++){const S=[],T=U/r,V=T*(e-t)+t;for(let W=0;W<=s;W++){const at=W/s,F=at*c+o,Y=Math.sin(F),Z=Math.cos(F);C.x=V*Y,C.y=-T*i+p,C.z=V*Z,h.push(C.x,C.y,C.z),M.set(Y,w,Z).normalize(),f.push(M.x,M.y,M.z),m.push(at,1-T),S.push(g++)}v.push(S)}for(let U=0;U<s;U++)for(let S=0;S<r;S++){const T=v[S][U],V=v[S+1][U],W=v[S+1][U+1],at=v[S][U+1];u.push(T,V,at),u.push(V,W,at),b+=6}l.addGroup(d,b,0),d+=b}function _(M){const C=g,b=new dt,w=new D;let U=0;const S=M===!0?t:e,T=M===!0?1:-1;for(let W=1;W<=s;W++)h.push(0,p*T,0),f.push(0,T,0),m.push(.5,.5),g++;const V=g;for(let W=0;W<=s;W++){const F=W/s*c+o,Y=Math.cos(F),Z=Math.sin(F);w.x=S*Z,w.y=p*T,w.z=S*Y,h.push(w.x,w.y,w.z),f.push(0,T,0),b.x=Y*.5+.5,b.y=Z*.5*T+.5,m.push(b.x,b.y),g++}for(let W=0;W<s;W++){const at=C+W,F=V+W;M===!0?u.push(F,F+1,at):u.push(F+1,F,at),U+=3}l.addGroup(d,U,M===!0?1:2),d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jn extends $n{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new jn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class el extends ve{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),l(i),u(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const _=new D,M=new D,C=new D;for(let b=0;b<e.length;b+=3)m(e[b+0],_),m(e[b+1],M),m(e[b+2],C),c(_,M,C,y)}function c(y,_,M,C){const b=C+1,w=[];for(let U=0;U<=b;U++){w[U]=[];const S=y.clone().lerp(M,U/b),T=_.clone().lerp(M,U/b),V=b-U;for(let W=0;W<=V;W++)W===0&&U===b?w[U][W]=S:w[U][W]=S.clone().lerp(T,W/V)}for(let U=0;U<b;U++)for(let S=0;S<2*(b-U)-1;S++){const T=Math.floor(S/2);S%2===0?(f(w[U][T+1]),f(w[U+1][T]),f(w[U][T])):(f(w[U][T+1]),f(w[U+1][T+1]),f(w[U+1][T]))}}function l(y){const _=new D;for(let M=0;M<r.length;M+=3)_.x=r[M+0],_.y=r[M+1],_.z=r[M+2],_.normalize().multiplyScalar(y),r[M+0]=_.x,r[M+1]=_.y,r[M+2]=_.z}function u(){const y=new D;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];const M=p(y)/2/Math.PI+.5,C=d(y)/Math.PI+.5;a.push(M,1-C)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){const _=a[y+0],M=a[y+2],C=a[y+4],b=Math.max(_,M,C),w=Math.min(_,M,C);b>.9&&w<.1&&(_<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function m(y,_){const M=y*3;_.x=t[M+0],_.y=t[M+1],_.z=t[M+2]}function g(){const y=new D,_=new D,M=new D,C=new D,b=new dt,w=new dt,U=new dt;for(let S=0,T=0;S<r.length;S+=9,T+=6){y.set(r[S+0],r[S+1],r[S+2]),_.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),b.set(a[T+0],a[T+1]),w.set(a[T+2],a[T+3]),U.set(a[T+4],a[T+5]),C.copy(y).add(_).add(M).divideScalar(3);const V=p(C);v(b,T+0,y,V),v(w,T+2,_,V),v(U,T+4,M,V)}}function v(y,_,M,C){C<0&&y.x===1&&(a[_]=y.x-1),M.x===0&&M.z===0&&(a[_]=C/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new el(t.vertices,t.indices,t.radius,t.details)}}const ta=new D,ea=new D,Yo=new D,na=new ln;class Jd extends ve{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Es*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),f={},m=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:p,c:d}=na;if(v.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),d.fromBufferAttribute(o,l[2]),na.getNormal(Yo),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const _=(y+1)%3,M=h[y],C=h[_],b=na[u[y]],w=na[u[_]],U=`${M}_${C}`,S=`${C}_${M}`;S in f&&f[S]?(Yo.dot(f[S].normal)<=r&&(m.push(b.x,b.y,b.z),m.push(w.x,w.y,w.z)),f[S]=null):U in f||(f[U]={index0:l[y],index1:l[_],normal:Yo.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:p}=f[g];ta.fromBufferAttribute(o,v),ea.fromBufferAttribute(o,p),m.push(ta.x,ta.y,ta.z),m.push(ea.x,ea.y,ea.z)}this.setAttribute("position",new Kt(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class zi extends Ts{constructor(t){super(t),this.uuid=qi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Ts().fromJSON(s))}return this}}const Qv={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Qd(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,h,f,m;if(i&&(r=sy(n,t,r,e)),n.length>80*e){o=l=n[0],c=u=n[1];for(let g=e;g<s;g+=e)h=n[g],f=n[g+1],h<o&&(o=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);m=Math.max(l-o,u-c),m=m!==0?32767/m:0}return _r(r,a,e,o,c,m,0),a}};function Qd(n,t,e,i,s){let r,a;if(s===my(n,t,e,i)>0)for(r=t;r<e;r+=i)a=$u(r,n[r],n[r+1],a);else for(r=e-i;r>=t;r-=i)a=$u(r,n[r],n[r+1],a);return a&&eo(a,a.next)&&(vr(a),a=a.next),a}function Wi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(eo(e,e.next)||le(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function _r(n,t,e,i,s,r,a){if(!n)return;!a&&r&&ly(n,i,s,r);let o=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?ey(n,i,s,r):ty(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),vr(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=ny(Wi(n),t,e),_r(n,t,e,i,s,r,2)):a===2&&iy(n,t,e,i,s,r):_r(Wi(n),t,e,i,s,r,1);break}}}function ty(n){const t=n.prev,e=n,i=n.next;if(le(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,u=s<r?s<a?s:a:r<a?r:a,h=o<c?o<l?o:l:c<l?c:l,f=s>r?s>a?s:a:r>a?r:a,m=o>c?o>l?o:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=m&&vs(s,o,r,c,a,l,g.x,g.y)&&le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ey(n,t,e,i){const s=n.prev,r=n,a=n.next;if(le(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,f=a.y,m=o<c?o<l?o:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,v=o>c?o>l?o:l:c>l?c:l,p=u>h?u>f?u:f:h>f?h:f,d=vc(m,g,t,e,i),y=vc(v,p,t,e,i);let _=n.prevZ,M=n.nextZ;for(;_&&_.z>=d&&M&&M.z<=y;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&vs(o,u,c,h,l,f,_.x,_.y)&&le(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=m&&M.x<=v&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&vs(o,u,c,h,l,f,M.x,M.y)&&le(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=d;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&vs(o,u,c,h,l,f,_.x,_.y)&&le(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=y;){if(M.x>=m&&M.x<=v&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&vs(o,u,c,h,l,f,M.x,M.y)&&le(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function ny(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!eo(s,r)&&tf(s,i,i.next,r)&&xr(s,r)&&xr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),vr(i),vr(i.next),i=n=r),i=i.next}while(i!==n);return Wi(i)}function iy(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&dy(a,o)){let c=ef(a,o);a=Wi(a,a.next),c=Wi(c,c.next),_r(a,t,e,i,s,r,0),_r(c,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function sy(n,t,e,i){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*i,c=r<a-1?t[r+1]*i:n.length,l=Qd(n,o,c,i,!1),l===l.next&&(l.steiner=!0),s.push(hy(l));for(s.sort(ry),r=0;r<s.length;r++)e=ay(s[r],e);return e}function ry(n,t){return n.x-t.x}function ay(n,t){const e=oy(n,t);if(!e)return t;const i=ef(e,n);return Wi(i,i.next),Wi(e,e.next)}function oy(n,t){let e=t,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&vs(a<l?r:i,a,c,l,a<l?i:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),xr(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&cy(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function cy(n,t){return le(n.prev,n,t.prev)<0&&le(t.next,n,n.next)<0}function ly(n,t,e,i){let s=n;do s.z===0&&(s.z=vc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,uy(s)}function uy(n){let t,e,i,s,r,a,o,c,l=1;do{for(e=n,n=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<l&&(o++,i=i.nextZ,!!i);t++);for(c=l;o>0||c>0&&i;)o!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,o--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(a>1);return n}function vc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function hy(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function vs(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function dy(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!fy(n,t)&&(xr(n,t)&&xr(t,n)&&py(n,t)&&(le(n.prev,n,t.prev)||le(n,t.prev,t))||eo(n,t)&&le(n.prev,n,n.next)>0&&le(t.prev,t,t.next)>0)}function le(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function eo(n,t){return n.x===t.x&&n.y===t.y}function tf(n,t,e,i){const s=sa(le(n,t,e)),r=sa(le(n,t,i)),a=sa(le(e,i,n)),o=sa(le(e,i,t));return!!(s!==r&&a!==o||s===0&&ia(n,e,t)||r===0&&ia(n,i,t)||a===0&&ia(e,n,i)||o===0&&ia(e,t,i))}function ia(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function sa(n){return n>0?1:n<0?-1:0}function fy(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&tf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function xr(n,t){return le(n.prev,n,n.next)<0?le(n,t,n.next)>=0&&le(n,n.prev,t)>=0:le(n,t,n.prev)<0||le(n,n.next,t)<0}function py(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ef(n,t){const e=new yc(n.i,n.x,n.y),i=new yc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function $u(n,t,e,i){const s=new yc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function vr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function yc(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function my(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Ln{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Ln.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];ju(t),Zu(i,t);let a=t.length;e.forEach(ju);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Zu(i,e[c]);const o=Qv.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function ju(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Zu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class nl extends ve{constructor(t=new zi([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:gy;let _,M=!1,C,b,w,U;d&&(_=d.getSpacedPoints(u),M=!0,f=!1,C=d.computeFrenetFrames(u,!1),b=new D,w=new D,U=new D),f||(p=0,m=0,g=0,v=0);const S=o.extractPoints(l);let T=S.shape;const V=S.holes;if(!Ln.isClockWise(T)){T=T.reverse();for(let L=0,tt=V.length;L<tt;L++){const B=V[L];Ln.isClockWise(B)&&(V[L]=B.reverse())}}const at=Ln.triangulateShape(T,V),F=T;for(let L=0,tt=V.length;L<tt;L++){const B=V[L];T=T.concat(B)}function Y(L,tt,B){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(tt,B)}const Z=T.length,K=at.length;function G(L,tt,B){let $,q,ht;const O=L.x-tt.x,x=L.y-tt.y,E=B.x-L.x,H=B.y-L.y,pt=O*O+x*x,mt=O*H-x*E;if(Math.abs(mt)>Number.EPSILON){const ct=Math.sqrt(pt),Tt=Math.sqrt(E*E+H*H),yt=tt.x-x/ct,At=tt.y+O/ct,Lt=B.x-H/Tt,Ot=B.y+E/Tt,gt=((Lt-yt)*H-(Ot-At)*E)/(O*H-x*E);$=yt+O*gt-L.x,q=At+x*gt-L.y;const jt=$*$+q*q;if(jt<=2)return new dt($,q);ht=Math.sqrt(jt/2)}else{let ct=!1;O>Number.EPSILON?E>Number.EPSILON&&(ct=!0):O<-Number.EPSILON?E<-Number.EPSILON&&(ct=!0):Math.sign(x)===Math.sign(H)&&(ct=!0),ct?($=-x,q=O,ht=Math.sqrt(pt)):($=O,q=x,ht=Math.sqrt(pt/2))}return new dt($/ht,q/ht)}const it=[];for(let L=0,tt=F.length,B=tt-1,$=L+1;L<tt;L++,B++,$++)B===tt&&(B=0),$===tt&&($=0),it[L]=G(F[L],F[B],F[$]);const ot=[];let ft,vt=it.concat();for(let L=0,tt=V.length;L<tt;L++){const B=V[L];ft=[];for(let $=0,q=B.length,ht=q-1,O=$+1;$<q;$++,ht++,O++)ht===q&&(ht=0),O===q&&(O=0),ft[$]=G(B[$],B[ht],B[O]);ot.push(ft),vt=vt.concat(ft)}for(let L=0;L<p;L++){const tt=L/p,B=m*Math.cos(tt*Math.PI/2),$=g*Math.sin(tt*Math.PI/2)+v;for(let q=0,ht=F.length;q<ht;q++){const O=Y(F[q],it[q],$);A(O.x,O.y,-B)}for(let q=0,ht=V.length;q<ht;q++){const O=V[q];ft=ot[q];for(let x=0,E=O.length;x<E;x++){const H=Y(O[x],ft[x],$);A(H.x,H.y,-B)}}}const rt=g+v;for(let L=0;L<Z;L++){const tt=f?Y(T[L],vt[L],rt):T[L];M?(w.copy(C.normals[0]).multiplyScalar(tt.x),b.copy(C.binormals[0]).multiplyScalar(tt.y),U.copy(_[0]).add(w).add(b),A(U.x,U.y,U.z)):A(tt.x,tt.y,0)}for(let L=1;L<=u;L++)for(let tt=0;tt<Z;tt++){const B=f?Y(T[tt],vt[tt],rt):T[tt];M?(w.copy(C.normals[L]).multiplyScalar(B.x),b.copy(C.binormals[L]).multiplyScalar(B.y),U.copy(_[L]).add(w).add(b),A(U.x,U.y,U.z)):A(B.x,B.y,h/u*L)}for(let L=p-1;L>=0;L--){const tt=L/p,B=m*Math.cos(tt*Math.PI/2),$=g*Math.sin(tt*Math.PI/2)+v;for(let q=0,ht=F.length;q<ht;q++){const O=Y(F[q],it[q],$);A(O.x,O.y,h+B)}for(let q=0,ht=V.length;q<ht;q++){const O=V[q];ft=ot[q];for(let x=0,E=O.length;x<E;x++){const H=Y(O[x],ft[x],$);M?A(H.x,H.y+_[u-1].y,_[u-1].x+B):A(H.x,H.y,h+B)}}}N(),I();function N(){const L=s.length/3;if(f){let tt=0,B=Z*tt;for(let $=0;$<K;$++){const q=at[$];J(q[2]+B,q[1]+B,q[0]+B)}tt=u+p*2,B=Z*tt;for(let $=0;$<K;$++){const q=at[$];J(q[0]+B,q[1]+B,q[2]+B)}}else{for(let tt=0;tt<K;tt++){const B=at[tt];J(B[2],B[1],B[0])}for(let tt=0;tt<K;tt++){const B=at[tt];J(B[0]+Z*u,B[1]+Z*u,B[2]+Z*u)}}i.addGroup(L,s.length/3-L,0)}function I(){const L=s.length/3;let tt=0;P(F,tt),tt+=F.length;for(let B=0,$=V.length;B<$;B++){const q=V[B];P(q,tt),tt+=q.length}i.addGroup(L,s.length/3-L,1)}function P(L,tt){let B=L.length;for(;--B>=0;){const $=B;let q=B-1;q<0&&(q=L.length-1);for(let ht=0,O=u+p*2;ht<O;ht++){const x=Z*ht,E=Z*(ht+1),H=tt+$+x,pt=tt+q+x,mt=tt+q+E,ct=tt+$+E;lt(H,pt,mt,ct)}}}function A(L,tt,B){c.push(L),c.push(tt),c.push(B)}function J(L,tt,B){X(L),X(tt),X(B);const $=s.length/3,q=y.generateTopUV(i,s,$-3,$-2,$-1);ut(q[0]),ut(q[1]),ut(q[2])}function lt(L,tt,B,$){X(L),X(tt),X($),X(tt),X(B),X($);const q=s.length/3,ht=y.generateSideWallUV(i,s,q-6,q-3,q-2,q-1);ut(ht[0]),ut(ht[1]),ut(ht[3]),ut(ht[1]),ut(ht[2]),ut(ht[3])}function X(L){s.push(c[L*3+0]),s.push(c[L*3+1]),s.push(c[L*3+2])}function ut(L){r.push(L.x),r.push(L.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return _y(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new xc[s.type]().fromJSON(s)),new nl(i,t.options)}}const gy={generateTopUV:function(n,t,e,i,s){const r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new dt(r,a),new dt(o,c),new dt(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[s*3],m=t[s*3+1],g=t[s*3+2],v=t[r*3],p=t[r*3+1],d=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new dt(a,1-c),new dt(l,1-h),new dt(f,1-g),new dt(v,1-d)]:[new dt(o,1-c),new dt(u,1-h),new dt(m,1-g),new dt(p,1-d)]}};function _y(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Sr extends el{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sr(t.radius,t.detail)}}class il extends ve{constructor(t=new zi([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(a,2));function l(u){const h=s.length/3,f=u.extractPoints(e);let m=f.shape;const g=f.holes;Ln.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,d=g.length;p<d;p++){const y=g[p];Ln.isClockWise(y)===!0&&(g[p]=y.reverse())}const v=Ln.triangulateShape(m,g);for(let p=0,d=g.length;p<d;p++){const y=g[p];m=m.concat(y)}for(let p=0,d=m.length;p<d;p++){const y=m[p];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let p=0,d=v.length;p<d;p++){const y=v[p],_=y[0]+h,M=y[1]+h,C=y[2]+h;i.push(_,M,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return xy(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];i.push(a)}return new il(i,t.curveSegments)}}function xy(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class no extends ve{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new D,f=new D,m=[],g=[],v=[],p=[];for(let d=0;d<=i;d++){const y=[],_=d/i;let M=0;d===0&&a===0?M=.5/e:d===i&&c===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){const b=C/e;h.x=-t*Math.cos(s+b*r)*Math.sin(a+_*o),h.y=t*Math.cos(a+_*o),h.z=t*Math.sin(s+b*r)*Math.sin(a+_*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),p.push(b+M,1-_),y.push(l++)}u.push(y)}for(let d=0;d<i;d++)for(let y=0;y<e;y++){const _=u[d][y+1],M=u[d][y],C=u[d+1][y],b=u[d+1][y+1];(d!==0||a>0)&&m.push(_,M,b),(d!==i-1||c<Math.PI)&&m.push(M,C,b)}this.setIndex(m),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(v,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class sl extends ve{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new D,h=new D,f=new D;for(let m=0;m<=i;m++)for(let g=0;g<=s;g++){const v=g/s*r,p=m/i*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(v),h.y=(t+e*Math.cos(p))*Math.sin(v),h.z=e*Math.sin(p),o.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=s;g++){const v=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,d=(s+1)*(m-1)+g,y=(s+1)*m+g;a.push(v,p,y),a.push(p,d,y)}this.setIndex(a),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class pe extends $i{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ku={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class vy{constructor(t,e,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const yy=new vy;class rl{constructor(t){this.manager=t!==void 0?t:yy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}rl.DEFAULT_MATERIAL_NAME="__DEFAULT";const kn={};class My extends Error{constructor(t,e){super(t),this.response=e}}class Sy extends rl{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ku.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(kn[t]!==void 0){kn[t].push({onLoad:e,onProgress:i,onError:s});return}kn[t]=[],kn[t].push({onLoad:e,onProgress:i,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=kn[t],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0;let v=0;const p=new ReadableStream({start(d){y();function y(){h.read().then(({done:_,value:M})=>{if(_)d.close();else{v+=M.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let b=0,w=u.length;b<w;b++){const U=u[b];U.onProgress&&U.onProgress(C)}d.enqueue(M),y()}})}}});return new Response(p)}else throw new My(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{Ku.add(t,l);const u=kn[t];delete kn[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=kn[t];if(u===void 0)throw this.manager.itemError(t),l;delete kn[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class al extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Ey extends al{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $o=new Zt,Ju=new D,Qu=new D;class by{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jc,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ju.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ju),Qu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qu),e.updateMatrixWorld(),$o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($o)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ty extends by{constructor(){super(new Bd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mc extends al{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Ty}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ay extends al{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const th=new dt;class wy{constructor(t=new dt(1/0,1/0),e=new dt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=th.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,th).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class Ti{constructor(){this.type="ShapePath",this.color=new Ct,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Ts,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,r,a){return this.currentPath.bezierCurveTo(t,e,i,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(d){const y=[];for(let _=0,M=d.length;_<M;_++){const C=d[_],b=new zi;b.curves=C.curves,y.push(b)}return y}function i(d,y){const _=y.length;let M=!1;for(let C=_-1,b=0;b<_;C=b++){let w=y[C],U=y[b],S=U.x-w.x,T=U.y-w.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(w=y[b],S=-S,U=y[C],T=-T),d.y<w.y||d.y>U.y)continue;if(d.y===w.y){if(d.x===w.x)return!0}else{const V=T*(d.x-w.x)-S*(d.y-w.y);if(V===0)return!0;if(V<0)continue;M=!M}}else{if(d.y!==w.y)continue;if(U.x<=d.x&&d.x<=w.x||w.x<=d.x&&d.x<=U.x)return!0}}return M}const s=Ln.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c;const l=[];if(r.length===1)return o=r[0],c=new zi,c.curves=o.curves,l.push(c),l;let u=!s(r[0].getPoints());u=t?!u:u;const h=[],f=[];let m=[],g=0,v;f[g]=void 0,m[g]=[];for(let d=0,y=r.length;d<y;d++)o=r[d],v=o.getPoints(),a=s(v),a=t?!a:a,a?(!u&&f[g]&&g++,f[g]={s:new zi,p:v},f[g].s.curves=o.curves,u&&g++,m[g]=[]):m[g].push({h:o,p:v[0]});if(!f[0])return e(r);if(f.length>1){let d=!1,y=0;for(let _=0,M=f.length;_<M;_++)h[_]=[];for(let _=0,M=f.length;_<M;_++){const C=m[_];for(let b=0;b<C.length;b++){const w=C[b];let U=!0;for(let S=0;S<f.length;S++)i(w.p,f[S].p)&&(_!==S&&y++,U?(U=!1,h[S].push(w)):d=!0);U&&h[_].push(w)}}y>0&&d===!1&&(m=h)}let p;for(let d=0,y=f.length;d<y;d++){c=f[d].s,l.push(c),p=m[d];for(let _=0,M=p.length;_<M;_++)c.holes.push(p[_].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);function nf(){const n=new ve,t=new Float32Array([0,0,-1.3,-.48,.07,.36,-.95,-.06,.42,0,0,-1.3,0,.22,.5,-.48,.07,.36,0,0,-1.3,.95,-.06,.42,.48,.07,.36,0,0,-1.3,.48,.07,.36,0,.22,.5,0,0,-1.3,-.95,-.06,.42,-.48,-.04,.36,0,0,-1.3,-.48,-.04,.36,0,-.02,.48,0,0,-1.3,.48,-.04,.36,.95,-.06,.42,0,0,-1.3,0,-.02,.48,.48,-.04,.36,-.95,-.06,.42,-.48,-.04,.36,-.48,.07,.36,-.48,.07,.36,0,-.02,.48,0,.22,.5,-.48,.07,.36,-.48,-.04,.36,0,-.02,.48,.95,-.06,.42,.48,.07,.36,.48,-.04,.36,.48,.07,.36,0,.22,.5,0,-.02,.48,.48,.07,.36,0,-.02,.48,.48,-.04,.36,0,.183,.2,0,.4,.5,0,.22,.5,.36,.16,.05,.44,.035,.1,.28,.08,.08,.36,.16,.05,.36,.2,.42,.44,.075,.42,.36,.16,.05,.44,.075,.42,.44,.035,.1,.36,.16,.05,.28,.08,.08,.28,.12,.42,.36,.16,.05,.28,.12,.42,.36,.2,.42,.36,.2,.42,.28,.12,.42,.44,.075,.42,-.36,.16,.05,-.28,.08,.08,-.44,.035,.1,-.36,.16,.05,-.44,.075,.42,-.36,.2,.42,-.36,.16,.05,-.44,.035,.1,-.44,.075,.42,-.36,.16,.05,-.28,.12,.42,-.28,.08,.08,-.36,.16,.05,-.36,.2,.42,-.28,.12,.42,-.36,.2,.42,-.44,.075,.42,-.28,.12,.42]);n.setAttribute("position",new Ne(t,3)),n.computeVertexNormals();const e=new pe({color:Jt.paper,flatShading:!0,side:qe}),i=new ee(n,e),s=new Jd(n,18),r=new Qa({color:Jt.ink,transparent:!0,opacity:.22}),a=new Yd(s,r),o=new fe;o.add(i),o.add(a);const c=new to(.03,20),l=new qn({color:1712164,side:qe});for(const u of[-.36,.36]){const h=new ee(c,l);h.position.set(u,.13,.423),o.add(h)}return o}const xt=nf();xt.position.set(0,38,0);function sf(){const n=new fe,t=[],e=.32,i=.22,s=Math.atan2(.28,.95),r=new pe({color:Jt.paper,side:qe,flatShading:!0}),a=new Qa({color:Jt.ink,transparent:!0,opacity:.32});for(const o of[-.45,.45]){const c=new fe;c.position.set(o,.045,.05),c.rotation.z=o<0?s:-s;const l=new ji(e,i);l.translate(0,-i/2,0),l.rotateX(-Math.PI/2);const u=new ee(l,r),h=new Jd(l);u.add(new Yd(h,a)),c.add(u),n.add(c),t.push(u)}return{group:n,flaps:t}}const{group:Cy,flaps:rf}=sf();xt.add(Cy);function Ry(n){const t=ge.brake&&z.alive&&z.flightState===te.FLYING?1:0,e=1-Math.exp(-n/Ra.deployTau);z.brakeAmount+=(t-z.brakeAmount)*e;const i=-z.brakeAmount*Ra.maxAngle;for(const s of rf)s.rotation.x=i}function Py(){z.brakeAmount=0;for(const n of rf)n.rotation.x=0}const xe=[{id:"TFN",x:510,z:-509,heading:1.885,length:80,width:3},{id:"TFS",x:-61,z:712,heading:-1.396,length:80,width:3},{id:"GMZ",x:-1630,z:752,heading:-1.623,length:60,width:3},{id:"SPC",x:-2967,z:-918,heading:-.611,length:70,width:3},{id:"VDE",x:-3286,z:1364,heading:-2.007,length:55,width:3},{id:"LPA",x:2845,z:1030,heading:-.489,length:90,width:3.5},{id:"FUE",x:6597,z:-417,heading:-.244,length:80,width:3},{id:"ACE",x:7210,z:-1809,heading:-.524,length:80,width:3},{id:"GRAC",x:7455,z:-2588,heading:-1.571,length:40,width:2.5}];for(const n of xe)n.activeHeading=n.heading;function Ly(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const Iy=.42,Dy=.55;function Ny(n,t){for(const e of xe){const i=n.x-e.x,s=n.z-e.z,r=Math.cos(e.heading),a=Math.sin(e.heading),o=i*r-s*a,c=i*a+s*r;if(Math.abs(o)>e.width*.5-Iy||Math.abs(c)>e.length*.5-Dy)continue;const l=n.y-e.elevation;if(l<-.5||l>Hi.rollingHeight)continue;const u=Ly(t-e.activeHeading);if(!(Math.abs(u)>Hi.headingTolerance))return e}return null}function Uy(n,t=1){for(const e of xe){const i=n.x-e.x,s=n.z-e.z,r=Math.cos(e.heading),a=Math.sin(e.heading),o=i*r-s*a,c=i*a+s*r;if(Math.abs(o)<=e.width*.55+t&&Math.abs(c)<=e.length*.5+t)return e}return null}function Fy(n,t,e){for(const i of xe){const s=n.x-i.x,r=n.z-i.z,a=Math.sqrt(s*s+r*r),o=n.y-i.elevation;if(a<t&&o<e&&o>-2)return!0}return!1}const af=[],of=[],eh=1,Sc=.32,nh=1,Ec=.12,ih=1.6,sh=1.2;function Oy(){const n=new fe,t=new pe({color:Jt.runway,flatShading:!0}),e=new no(.28,10,8);for(let i=0;i<xe.length;i++){const s=xe[i],r=new fe,a=new ji(s.width,s.length);a.rotateX(-Math.PI/2),r.add(new ee(a,t));const o=new fe,c=s.width*.68,l=c*1.05,u=new zi;u.moveTo(0,l*.55),u.lineTo(-c/2,-l*.45),u.lineTo(0,-l*.05),u.lineTo(c/2,-l*.45),u.closePath();const h=new il(u);h.rotateX(-Math.PI/2);const f=Math.max(7,Math.round(s.length/5));for(let v=0;v<f;v++){const p=v/(f-1)-.5,d=new qn({color:16771240,transparent:!0,opacity:Sc,depthWrite:!1}),y=new ee(h,d);y.position.set(0,.08,p*s.length*.85),y.renderOrder=1,o.add(y),af.push({mat:d,posT:.5-p})}const g=Math.max(2,Math.floor(s.length/4.5));for(let v=0;v<g;v++){const p=v/(g-1)-.5,d=p*s.length*.97,y=.5-p;for(const _ of[-1,1]){const M=new qn({color:16764006,transparent:!0,opacity:Ec}),C=new ee(e,M);C.position.set(_*s.width*.6,.35,d),o.add(C),of.push({mat:M,posT:y})}}r.add(o),r.position.set(s.x,s.elevation+.04,s.z),r.rotation.y=s.heading,n.add(r)}return n}function By(n){const t=n%ih/ih;for(const i of af){const s=(t-i.posT+1)%1;i.mat.opacity=s<.16?eh-(eh-Sc)*(s/.16):Sc}const e=n%sh/sh;for(const i of of){const s=(e-i.posT+1)%1;i.mat.opacity=s<.22?nh-(nh-Ec)*(s/.22):Ec}}function cf(){const n=new fe,t=new pe({color:Jt.ink,flatShading:!0});function e(i,s,r,a){const o=new fe,c=new $n(.018,.018,r,6);c.translate(0,-r/2,0),o.add(new ee(c,t));const l=new $n(a,a,.04,12);return l.rotateZ(Math.PI/2),l.translate(0,-r,0),o.add(new ee(l,t)),o.position.set(i,-.05,s),o}return n.add(e(0,-.55,.11,.055)),n.add(e(-.42,.12,.12,.06)),n.add(e(.42,.12,.12,.06)),n}const Xi=cf();Xi.scale.setScalar(.001);Xi.visible=!1;xt.add(Xi);function zy(n){const t=Fy(xt.position,xa.triggerDist,xa.triggerHeight)?1:0,e=1-Math.exp(-n/xa.deployTau);z.gearAmount+=(t-z.gearAmount)*e;const i=Math.max(.001,z.gearAmount);Xi.scale.setScalar(i),Xi.visible=z.gearAmount>.02}function ky(){z.gearAmount=1,Xi.scale.setScalar(1),Xi.visible=!0}const rh=new Ct;let tr=0;function lf(){const n=new fe,t=[],e=de.exhaust;for(const i of[-.36,e.offsetX]){const s=new $n(e.radiusNarrow,e.radiusWide,1,12,1,!0);s.rotateX(-Math.PI/2),s.translate(0,0,.5);const r=new qn({color:16777215,transparent:!0,opacity:0,blending:Pa,depthWrite:!1,side:qe}),a=new ee(s,r);a.position.set(i,e.offsetY,e.offsetZ),a.scale.z=0,n.add(a),t.push(a)}return{group:n,streams:t}}const{group:Hy,streams:uf}=lf();xt.add(Hy);function Gy(){return z.oneShotActive?(de.oneShot.tiers[Ps()]||de.oneShot.tiers[0]).color:z.greyActive?de.grey.color:null}function Vy(n){const t=de.exhaust,e=z.oneShotActive||z.greyActive?1:0,i=1-Math.exp(-n/Math.max(t.intensityTau,1e-4));tr+=(e-tr)*i;const s=Gy();s!==null&&rh.setHex(s);for(const r of uf)r.scale.z=t.length*tr,r.material.opacity=.85*tr,s!==null&&r.material.color.copy(rh)}function Wy(){tr=0;for(const n of uf)n.scale.z=0,n.material.opacity=0}let pi=null,gs=null,As=null,Ie=null,ah=null,ur=null,bc=null,Ni=null,hr=null,Tc=null,jo=0,ra=0,aa=0,ei=0;const oh=new Ct;let ws=0,Ac=0,Ma=!1,Ai=null,Ba=0,za=0,Zs=null;const Xy=.35;function qy(){if(pi)return!0;const n=document.getElementById("hangar-3d");if(!n)return!1;pi=new Kc({canvas:n,antialias:!0,alpha:!0}),pi.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),gs=new Xd;const t=new Mc(16774368,.85);t.position.set(2.5,3,2),gs.add(t);const e=new Mc(13229290,.45);e.position.set(-2,1.5,-2),gs.add(e),gs.add(new Ay(16777215,.35)),As=new Qe(28,1,.05,50),As.position.set(0,.25,3.6),As.lookAt(0,0,0),Ie=nf(),Ie.scale.setScalar(1.5),Ie.rotation.x=-.18,Ie.rotation.y=.55,gs.add(Ie);const i=sf();ur=i.group,ur.visible=!1,Ie.add(ur),bc=i.flaps,Ni=cf(),Ni.scale.setScalar(.001),Ni.visible=!1,Ie.add(Ni);const s=lf();return hr=s.group,hr.visible=!1,Ie.add(hr),Tc=s.streams,Yy(n),ah=new ResizeObserver(ch),ah.observe(n),ch(),!0}function ch(){if(!pi)return;const t=pi.domElement.getBoundingClientRect(),e=Math.max(1,Math.round(t.width)),i=Math.max(1,Math.round(t.height));pi.setSize(e,i,!1),As.aspect=e/i,As.updateProjectionMatrix()}function Yy(n){n.addEventListener("pointerdown",e=>{Ma=!0,Ai={px:e.clientX,py:e.clientY,rotX:Ie.rotation.x,rotY:Ie.rotation.y},Zs={ts:performance.now(),px:e.clientX,py:e.clientY},Ba=0,za=0,n.setPointerCapture(e.pointerId),n.style.cursor="grabbing"}),n.addEventListener("pointermove",e=>{if(!Ma||!Ai)return;const i=e.clientX-Ai.px,s=e.clientY-Ai.py;Ie.rotation.y=Ai.rotY+i*.0085,Ie.rotation.x=Gi.clamp(Ai.rotX+s*.0085,-1.2,1.2);const r=performance.now(),a=Math.max(.001,(r-Zs.ts)/1e3);za=(e.clientX-Zs.px)*.0085/a,Ba=(e.clientY-Zs.py)*.0085/a,Zs={ts:r,px:e.clientX,py:e.clientY}});const t=()=>{Ma=!1,Ai=null,n.style.cursor="grab"};n.addEventListener("pointerup",t),n.addEventListener("pointercancel",t),n.addEventListener("pointerleave",t),n.style.cursor="grab",n.style.touchAction="none"}function hf(n){if(!pi||!Ie)return;const t=Math.min(.05,(n-Ac)/1e3||0);Ac=n,Ma||(Ba*=.92,za*=.92,Ie.rotation.y+=(za+Xy)*t,Ie.rotation.x=Gi.clamp(Ie.rotation.x+Ba*t-Ie.rotation.x*.35*t,-1.2,1.2)),$y(t),pi.render(gs,As),ws=requestAnimationFrame(hf)}function $y(n){ei=(ei+n)%Vs.cyclePeriod;const t=1-Math.exp(-n/Math.max(Vs.smoothTau,1e-4));if(Ni){const e=_t.testMode||(_t.upgrades?.takeoffSpeed|0)>0,[i,s]=Vs.gearWindow,a=e&&ei>=i&&ei<=s?1:0,o=1-Math.exp(-n/Math.max(xa.deployTau,1e-4));aa+=(a-aa)*o;const c=Math.max(.001,aa);Ni.scale.setScalar(c),Ni.visible=e&&aa>.02}if(bc&&ur){const e=ad();ur.visible=e;const[i,s]=Vs.brakeWindow,a=e&&ei>=i&&ei<=s?1:0;jo+=(a-jo)*t;const o=-jo*Ra.maxAngle;for(const c of bc)c.rotation.x=o}if(Tc&&hr){const e=Ps(),i=de.oneShot.tiers[e]||de.oneShot.tiers[0];hr.visible=e>0;const[s,r]=Vs.boostWindow,o=e>0&&ei>=s&&ei<=r?1:0;ra+=(o-ra)*t,oh.setHex(i.color||16777215);const c=de.exhaust;for(const l of Tc)l.scale.z=c.length*ra,l.material.opacity=.85*ra,l.material.color.copy(oh)}}function jy(){qy()&&(ws||(Ac=performance.now(),ws=requestAnimationFrame(hf)))}function Zy(){ws&&(cancelAnimationFrame(ws),ws=0)}const ol={hangar:document.getElementById("hangar-overlay"),shop:document.getElementById("shop-overlay"),settings:document.getElementById("settings-overlay")},lh=document.getElementById("garage-punkte"),uh=document.getElementById("garage-highscore"),hh=document.getElementById("garage-obsidian"),dh=document.getElementById("garage-gofios"),ys=document.getElementById("garage-upgrades"),Zo=document.getElementById("garage-upgrade-info"),fh=document.getElementById("shop-obsidian"),ka="__booster__";let tn=null;const li=document.getElementById("obsidian-confirm"),ph=document.getElementById("obsidian-confirm-text"),Ky=document.getElementById("obsidian-confirm-cancel"),Jy=document.getElementById("obsidian-confirm-ok"),Us=document.getElementById("settings-segments"),Fs=document.getElementById("settings-samples"),Qy=document.getElementById("settings-apply"),tM=document.getElementById("settings-cancel"),df=document.querySelectorAll(".settings-preset"),eM=document.getElementById("settings-reset-save"),Rn=document.getElementById("reset-confirm"),nM=document.getElementById("reset-confirm-cancel"),iM=document.getElementById("reset-confirm-ok");let Ms=null,wc=null,Ha=null;function sM(n){return de.oneShot.tiers[n]?.name||`Level ${n}`}function Vn(n){return Math.round(n).toLocaleString("de-DE")}function ff(n,t={}){er();const e=ol[n];e&&(n==="hangar"&&io(),n==="shop"&&dM(),n==="settings"&&fM(),e.classList.add("visible"),e.setAttribute("aria-hidden","false"),Ms=n,wc=typeof t.onClose=="function"?t.onClose:null,n==="hangar"&&jy())}function er(){if(!Ms)return;Ms==="hangar"&&Zy();const n=ol[Ms];n&&(n.classList.remove("visible"),n.setAttribute("aria-hidden","true")),Ms=null;const t=wc;wc=null,t&&t()}function io(){aM(),rM(),mf(),gf()}function rM(){if(tn===ka||tn&&Pn[tn])return;const n=Object.keys(Pn);for(const t of n){const e=_t.upgrades[t]|0,i=Pn[t].levels.length-1;if(e<i){tn=t;return}}tn=n[0]||null}function pf(){const n=Ps(),t=de.oneShot.tiers[n]||de.oneShot.tiers[0],e="#"+(t.color|0).toString(16).padStart(6,"0"),i=Bc(),s=rr.length-1;if(n>=s)return{tier:n,tierCfg:t,colorHex:e,pct:100,rightLabel:"Max",gofios:i};const r=rr[n]|0,a=rr[n+1]|0,o=Math.max(1,a-r),c=Math.max(0,Math.min(100,(i-r)/o*100));return{tier:n,tierCfg:t,colorHex:e,pct:c,rightLabel:`${i} / ${a} <span class="material-symbols-outlined inline-icon">where_to_vote</span>`,gofios:i}}function aM(){if(lh&&(lh.textContent=Vn(_t.punkte)),uh&&(uh.textContent=Vn(_t.bestFlightPunkte|0)),hh&&(hh.textContent=Vn(_t.obsidian|0)),dh){const n=_t.gofiosByIsland[_t.currentIsland]|0;dh.textContent=Vn(n)}}function mf(){if(!ys)return;ys.innerHTML="";for(const[i,s]of Object.entries(Pn)){const r=_t.upgrades[i]|0,a=s.levels.length-1,o=r>=a,c=a>0?r/a*100:r>0?100:0,l=o?0:s.costs[r+1],u=l>0?Math.ceil(l/Fc.obsidianPerPunkte):0,h=i===tn,f='<span class="material-symbols-outlined upgrade-buy-icon">stars</span>',m='<span class="material-symbols-outlined upgrade-buy-icon">diamond</span>';let g,v,p;o?(g="Max",v=!0,p=""):_t.punkte>=l?(g=`Kaufen · ${Vn(l)} ${f}`,v=!1,p="punkte"):(_t.obsidian|0)>=u?(g=`Obsidian · ${u} ${m}`,v=!1,p="obsidian"):(g=`Kaufen · ${Vn(l)} ${f}`,v=!0,p="");const y=_t.testMode&&r>0?`<button class="upgrade-sell" type="button" data-sell="${i}"
                aria-label="Verkaufen für ${Vn(s.costs[r])} Punkte">−</button>`:"",_=document.createElement("div");_.className=`upgrade-row${o?" is-maxed":""}${h?" is-selected":""}`,_.dataset.select=i,_.innerHTML=`
      <span class="upgrade-row-label">${s.label}</span>
      <div class="upgrade-row-bar"><div class="upgrade-row-bar-fill" style="width: ${c}%"></div></div>
      ${y}
      <button class="upgrade-buy${o?" maxed":""}" type="button"
              data-buy="${i}" data-pay="${p}" ${v?"disabled":""}>
        ${g}
      </button>
    `,ys.appendChild(_)}const n=pf(),t=tn===ka,e=document.createElement("div");e.className=`upgrade-row upgrade-row-booster${t?" is-selected":""}`,e.dataset.select=ka,e.innerHTML=`
    <span class="upgrade-row-label">Booster</span>
    <div class="upgrade-row-bar">
      <div class="upgrade-row-bar-fill"
           style="width: ${n.pct}%; background: ${n.colorHex};"></div>
    </div>
    <span class="upgrade-row-gofios">${n.rightLabel}</span>
  `,ys.appendChild(e)}function gf(){if(!Zo)return;const n=Zo.querySelector(".upgrade-info-title"),t=Zo.querySelector(".upgrade-info-desc");if(tn===ka){const a=pf();n&&(n.textContent=`Booster · ${sM(a.tier)}`),t&&(t.textContent="Die Boost-Stufe steigt automatisch, sobald genug Locations entdeckt sind. Flieg neue POIs an, um deinen One-Shot-Boost zu verbessern.");return}const e=tn&&Pn[tn];if(!e){n&&(n.textContent=""),t&&(t.textContent="Tippe ein Upgrade an, um die Beschreibung zu sehen.");return}const i=_t.upgrades[tn]|0,s=e.levels.length-1,r=i>=s;n&&(n.textContent=`${e.label} · ${r?"Max":`Stufe ${i} / ${s}`}`),t&&(t.textContent=e.description)}function oM(n){if(!_t.testMode)return;const t=Pn[n];if(!t)return;const e=_t.upgrades[n]|0;if(e<=0)return;const i=t.costs[e];_t.upgrades[n]=e-1,_t.punkte+=i,Mr(),In(),io()}function cM(n){const t=Pn[n],e=_t.upgrades[n]|0,i=t.costs[e+1];_t.punkte<i||(_t.punkte-=i,_t.upgrades[n]=e+1,Mr(),In(),io())}function lM(n){const t=Pn[n],e=_t.upgrades[n]|0,i=t.costs[e+1],s=Math.ceil(i/Fc.obsidianPerPunkte);(_t.obsidian|0)<s||(_t.obsidian=(_t.obsidian|0)-s,_t.upgrades[n]=e+1,Mr(),In(),io())}function uM(n){const t=Pn[n],e=_t.upgrades[n]|0,i=t.costs[e+1],s=Math.ceil(i/Fc.obsidianPerPunkte);Ha={key:n,punkteCost:i,obsidianCost:s},ph&&(ph.innerHTML=`Du gibst <strong>${s} <span class="material-symbols-outlined inline-icon">diamond</span></strong> für <strong>${t.label}</strong> aus.<br>(entspricht ${Vn(i)} <span class="material-symbols-outlined inline-icon">stars</span>)`),li.classList.add("visible"),li.setAttribute("aria-hidden","false")}function Sa(){li.classList.remove("visible"),li.setAttribute("aria-hidden","true"),Ha=null}function hM(){if(!Ha)return;const n=Ha.key;Sa(),lM(n)}function dM(){fh&&(fh.textContent=Vn(_t.obsidian|0))}let Mn=null;function fM(){Mn=dd(),Us&&(Us.value=Mn.segments),Fs&&(Fs.value=Mn.samples),cl()}function cl(){const n=Mn&&_p(Mn);for(const t of df)t.classList.toggle("active",t.dataset.preset===n)}function pM(n){const t=Gc[n];t&&(Mn={...t},Us&&(Us.value=t.segments),Fs&&(Fs.value=t.samples),cl())}function Cc(){if(!Mn)return;const n=parseInt(Us?.value,10),t=parseInt(Fs?.value,10);Number.isFinite(n)&&(Mn.segments=n),Number.isFinite(t)&&(Mn.samples=t),cl()}function mM(){if(Cc(),!Mn)return;mp(Mn);const n=new URL(window.location.href);n.searchParams.delete("segments"),n.searchParams.delete("samples"),window.location.href=n.toString()}function gM(){Rn&&(Rn.classList.add("visible"),Rn.setAttribute("aria-hidden","false"))}function Ko(){Rn&&(Rn.classList.remove("visible"),Rn.setAttribute("aria-hidden","true"))}function _M(){pp();const n=new URL(window.location.href);n.searchParams.delete("segments"),n.searchParams.delete("samples"),window.location.href=n.toString()}(function(){document.querySelectorAll(".modal-close[data-modal-close]").forEach(t=>{const e=t.dataset.modalClose;(e==="hangar"||e==="shop"||e==="settings")&&t.addEventListener("click",er)});for(const t of Object.values(ol))t&&t.addEventListener("click",e=>{e.target===t&&er()});ys&&ys.addEventListener("click",t=>{const e=t.target.closest("[data-sell]");if(e&&!e.disabled){oM(e.dataset.sell);return}const i=t.target.closest("[data-buy]");if(i){if(i.disabled)return;const r=i.dataset.buy,a=i.dataset.pay;tn=r,a==="punkte"?cM(r):a==="obsidian"&&uM(r);return}const s=t.target.closest("[data-select]");s&&(tn=s.dataset.select,mf(),gf())}),li&&(li.addEventListener("click",t=>{t.target===li&&Sa()}),Ky?.addEventListener("click",Sa),Jy?.addEventListener("click",hM)),Rn&&(Rn.addEventListener("click",t=>{t.target===Rn&&Ko()}),nM?.addEventListener("click",Ko),iM?.addEventListener("click",_M)),document.addEventListener("keydown",t=>{t.key==="Escape"&&(Rn?.classList.contains("visible")?(Ko(),t.stopImmediatePropagation()):li?.classList.contains("visible")?(Sa(),t.stopImmediatePropagation()):Ms&&(er(),t.stopImmediatePropagation()))});for(const t of df)t.addEventListener("click",()=>pM(t.dataset.preset));Us?.addEventListener("input",Cc),Fs?.addEventListener("input",Cc),tM?.addEventListener("click",er),Qy?.addEventListener("click",mM),eM?.addEventListener("click",gM)})();function xM(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}const Se={TREE:10,SHRUB:20,GRASS:30,CROP:40,URBAN:50,BARE:60,SNOW:70,WATER:80,WETLAND:90};let gn=null,_f=[];async function vM(n="/teide-game/landcover/canaries.png"){const t=new Image;t.src=n,await t.decode();const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(t,0,0);const s=i.getImageData(0,0,t.width,t.height).data,r=new Uint8Array(t.width*t.height);for(let a=0,o=0;o<r.length;a+=4,o++)r[o]=s[a];gn={data:r,w:t.width,h:t.height},_f=SM()}function yM(n,t){const{center:e,metersPerUnit:i}=Ft.heightmap,s=n*i,r=-t*i,a=e.lat+r/111320,o=e.lon+s/(111320*Math.cos(e.lat*Math.PI/180));return{lat:a,lon:o}}function MM(n,t){const{bbox:e,center:i,metersPerUnit:s}=Ft.heightmap,r=e.lonW+n/(gn.w-1)*(e.lonE-e.lonW),a=e.latN-t/(gn.h-1)*(e.latN-e.latS),o=(r-i.lon)*111320*Math.cos(i.lat*Math.PI/180),c=(a-i.lat)*111320;return{x:o/s,z:-c/s}}function xf(n,t){if(!gn)return Se.WATER;const{lat:e,lon:i}=yM(n,t),{bbox:s}=Ft.heightmap,r=(i-s.lonW)/(s.lonE-s.lonW)*(gn.w-1),a=(s.latN-e)/(s.latN-s.latS)*(gn.h-1);if(r<0||a<0||r>gn.w-1||a>gn.h-1)return Se.WATER;const o=Math.round(r),c=Math.round(a);return gn.data[c*gn.w+o]}function SM(){const{data:n,w:t,h:e}=gn,{minClusterPixels:i}=Ee.urban,s=new Uint8Array(n.length),r=[],a=[],o=[0,0,0,0];function c(u){const h=u%t,f=u/t|0;let m=0;return h>0&&(o[m++]=u-1),h<t-1&&(o[m++]=u+1),f>0&&(o[m++]=u-t),f<e-1&&(o[m++]=u+t),m}for(let u=0;u<n.length;u++){if(s[u]||n[u]!==Se.URBAN)continue;const h=[],f=[u];s[u]=1;let m=0;for(;m<f.length;){const g=f[m++];h.push(g);const v=c(g);for(let p=0;p<v;p++){const d=o[p];!s[d]&&n[d]===Se.URBAN&&(s[d]=1,f.push(d))}}h.length<i?a.push(...h):r.push(h)}for(const u of a){const h=c(u),f=new Map;for(let v=0;v<h;v++){const p=n[o[v]];p!==Se.URBAN&&p!==Se.WATER&&f.set(p,(f.get(p)||0)+1)}let m=Se.GRASS,g=0;for(const[v,p]of f)p>g&&(m=v,g=p);n[u]=m}const l=r.map(u=>{let h=0,f=0;const m=[];for(const g of u){const v=g%t,p=g/t|0,{x:d,z:y}=MM(v,p);m.push({x:d,z:y}),h+=d,f+=y}return{pixelCount:u.length,centerX:h/u.length,centerZ:f/u.length,pixels:m}});return l.sort((u,h)=>h.pixelCount-u.pixelCount),console.log(`landcover: ${l.length} urban clusters surviving (${a.length} tiny urban pixels reclassified)`),l}function EM(){return _f}let an=null;function bM(){return an}let Li=null,Ui=0;async function TM(n=Ft.heightmap.url){const t=new Image;t.src=n,await t.decode();const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(t,0,0),an={data:i.getImageData(0,0,t.width,t.height).data,w:t.width,h:t.height}}function AM(n,t){const{center:e,metersPerUnit:i}=Ft.heightmap,s=n*i,r=-t*i,a=e.lat+r/111320,o=e.lon+s/(111320*Math.cos(e.lat*Math.PI/180));return{lat:a,lon:o}}function wM(n,t){if(!an)return 0;const{bbox:e,elevRange:i}=Ft.heightmap,s=(t-e.lonW)/(e.lonE-e.lonW)*(an.w-1),r=(e.latN-n)/(e.latN-e.latS)*(an.h-1);if(s<0||r<0||s>an.w-1||r>an.h-1)return 0;const a=Math.floor(s),o=Math.floor(r),c=Math.min(a+1,an.w-1),l=Math.min(o+1,an.h-1),u=s-a,h=r-o,f=i[1]-i[0],m=(g,v)=>{const p=(v*an.w+g)*4,d=an.data[p]<<8|an.data[p+1];return i[0]+d/65535*f};return(1-u)*(1-h)*m(a,o)+u*(1-h)*m(c,o)+(1-u)*h*m(a,l)+u*h*m(c,l)}function Wn(n,t){const{lat:e,lon:i}=AM(n,t);return wM(e,i)/Ft.heightmap.metersPerUnit}const mh=55;function vf(n,t,e){let i=e,s=0;for(const r of xe){const a=n-r.x,o=t-r.z,c=Math.cos(r.heading),l=Math.sin(r.heading),u=a*c-o*l,h=a*l+o*c,f=r.length/2,m=r.width/2,g=Math.max(0,Math.abs(u)-m),v=Math.max(0,Math.abs(h)-f),p=Math.sqrt(g*g+v*v);if(p<mh){const d=Gi.smoothstep(p,0,mh);i=Gi.lerp(r.elevation,i,d),s=Math.max(s,1-d)}}return{y:i,onRunway:s}}function gh(n,t){return vf(n,t,Wn(n,t)).y}function Sn(n,t){if(!Li)return gh(n,t);const e=Ft.size/2,i=Ft.segments,s=Ft.size/i,r=(n+e)/s,a=(t+e)/s;if(r<0||a<0||r>i||a>i)return gh(n,t);const o=Math.min(i-1,Math.floor(r)),c=Math.min(i-1,Math.floor(a)),l=r-o,u=a-c,h=Li[c*Ui+o],f=Li[c*Ui+o+1],m=Li[(c+1)*Ui+o],g=Li[(c+1)*Ui+o+1];return(1-l)*(1-u)*h+l*(1-u)*f+(1-l)*u*m+l*u*g}function CM(){const n=new ji(Ft.size,Ft.size,Ft.segments,Ft.segments);n.rotateX(-Math.PI/2);const t=n.attributes.position,e=new Float32Array(t.count*3);Ui=Ft.segments+1,Li=new Float32Array(Ui*Ui);const i=new Ct(Jt.pineCanopy),s=new Ct(Jt.laurelCanopy),r=new Ct(Jt.shrubBody),a=new Ct(Jt.grassGround),o=new Ct(Jt.cropGround),c=new Ct(Jt.urbanGround),l=new Ct(Jt.bareGround),u=new Ct(Jt.shore),h=new Ct(Jt.snow),f=new Ct(Jt.runway),m=new Ct,g=Ft.heightmap.metersPerUnit,v=80/g,p=2500/g,d=3200/g,y=Ee.laurelMaxAltitude;for(let M=0;M<t.count;M++){const C=t.getX(M),b=t.getZ(M),w=vf(C,b,Wn(C,b)),U=w.y,S=w.onRunway,T=U<Ft.waterLevel?U-50:U;switch(t.setY(M,T),Li[M]=U,xf(C,b)){case Se.TREE:m.copy(U>=y?i:s);break;case Se.SHRUB:m.copy(r);break;case Se.GRASS:m.copy(a);break;case Se.CROP:m.copy(o);break;case Se.URBAN:m.copy(c);break;case Se.BARE:m.copy(l);break;default:m.copy(u);break}if(U>d)m.copy(h);else if(U>p){const at=(U-p)/(d-p);m.lerp(h,at)}if(U<Ft.waterLevel+v){const at=(U-Ft.waterLevel)/v;m.lerp(u,1-Math.max(0,at))}S>.001&&m.lerp(f,S*.35);const W=.94+xM(C,b)*.12;e[M*3]=m.r*W,e[M*3+1]=m.g*W,e[M*3+2]=m.b*W}n.setAttribute("color",new Ne(e,3)),n.computeVertexNormals();const _=new pe({vertexColors:!0,flatShading:!0});return new ee(n,_)}function RM(){const n=new ji(Ft.size*1.6,Ft.size*1.6);n.rotateX(-Math.PI/2);const t=new pe({color:Jt.water,transparent:!0,opacity:.96}),e=new ee(n,t);return e.position.y=Ft.waterLevel,e}const Ue=new Xd;Ue.background=new Ct(Jt.sky);Ue.fog=new Jc(Jt.sky,Ft.fogStart,Ft.fogEnd);const Cn=new Qe(62,window.innerWidth/window.innerHeight,.5,15e3),ks=new Kc({antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});ks.setPixelRatio(Math.min(window.devicePixelRatio,2));ks.setSize(window.innerWidth,window.innerHeight);ks.outputColorSpace=be;document.body.appendChild(ks.domElement);const yf=new Mc(16774882,1.05);yf.position.set(80,140,60);Ue.add(yf);const PM=new Ey(14542572,8292974,.55);Ue.add(PM);const _h=new D(0,1,0);window.addEventListener("resize",()=>{Cn.aspect=window.innerWidth/window.innerHeight,Cn.updateProjectionMatrix(),ks.setSize(window.innerWidth,window.innerHeight)});const LM={tenerife:{count:18,spread:900,radiusRange:[8,18],strengthRange:[.55,1.55]},gomera:{count:6,spread:280,radiusRange:[9,14],strengthRange:[.65,1.3]},palma:{count:9,spread:480,radiusRange:[8,16],strengthRange:[.6,1.5]},gc:{count:12,spread:560,radiusRange:[8,17],strengthRange:[.55,1.5]},hierro:{count:5,spread:280,radiusRange:[9,13],strengthRange:[.65,1.3]},fuerte:{count:12,spread:1100,radiusRange:[10,18],strengthRange:[.55,1.2]},lanza:{count:9,spread:640,radiusRange:[9,16],strengthRange:[.6,1.3]},graciosa:{count:3,spread:120,radiusRange:[8,12],strengthRange:[.7,1.1]}};function IM(n){let t=n>>>0;return()=>{t=t+2654435769>>>0;let e=t;return e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),((e^e>>>15)>>>0)/4294967296}}function DM(){const n=[],t=IM(12648430);for(const e of _e){const i=LM[e.id];if(i)for(let s=0;s<i.count;s++){const r=t()*Math.PI*2,a=Math.sqrt(t())*i.spread,o=e.x+Math.cos(r)*a,c=e.z+Math.sin(r)*a,l=i.radiusRange[0]+t()*(i.radiusRange[1]-i.radiusRange[0]),u=i.strengthRange[0]+t()*(i.strengthRange[1]-i.strengthRange[0]);n.push({x:o,z:c,radius:l,strength:u})}}return n}const mn=DM(),Ga=.55,Mf=1.05,NM=.9;let Ks,Ea,ba,Rc,ii,Va;function UM(){const n=new fe;for(let o=mn.length-1;o>=0;o--)Sn(mn[o].x,mn[o].z)<Ft.waterLevel+.5&&mn.splice(o,1);for(const o of mn)o.baseElevation=Sn(o.x,o.z);for(const o of mn){const c=new qn({color:on.columnColor,transparent:!0,opacity:on.columnOpacity*o.strength,side:qe,depthWrite:!1}),l=new $n(o.radius*Mf,o.radius*Ga,on.columnTop,20,1,!0);l.translate(0,on.columnTop/2,0);const u=new ee(l,c);u.position.set(o.x,o.baseElevation,o.z),n.add(u)}const t=mn.map(o=>Math.max(10,Math.floor(on.particleDensity*Math.PI*o.radius*o.radius))),e=t.reduce((o,c)=>o+c,0);Ks=new Float32Array(e*3),Ea=new Float32Array(e),ba=new Float32Array(e),Rc=new Uint16Array(e),ii=new Float32Array(e);const i=new Float32Array(e);let s=0;for(let o=0;o<mn.length;o++){const c=mn[o];for(let l=0;l<t[o];l++){const u=Math.sqrt(Math.random())*NM,h=Math.random()*Math.PI*2;Ea[s]=Math.cos(h)*u,ba[s]=Math.sin(h)*u,Rc[s]=o,ii[s]=Math.random(),i[s]=on.particleSize*(.7+.5*c.strength);const f=c.radius*Ga;Ks[s*3+0]=c.x+Ea[s]*f,Ks[s*3+1]=c.baseElevation,Ks[s*3+2]=c.z+ba[s]*f,s++}}const r=new ve;r.setAttribute("position",new Ne(Ks,3)),r.setAttribute("size",new Ne(i,1));const a=new _i({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Ct(on.particleColor)},uOpacity:{value:on.particleOpacity}},vertexShader:`
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
    `});return Va=new zv(r,a),n.add(Va),n}function FM(n){if(!Va)return;const t=Va.geometry.attributes.position,e=t.array,i=on.columnTop,s=on.riseSpeed;for(let r=0;r<ii.length;r++){const a=mn[Rc[r]];ii[r]+=s*a.strength/i*n,ii[r]>=1&&(ii[r]-=1);const o=a.radius*(Ga+(Mf-Ga)*ii[r]);e[r*3+0]=a.x+Ea[r]*o,e[r*3+1]=a.baseElevation+ii[r]*i,e[r*3+2]=a.z+ba[r]*o}t.needsUpdate=!0}function OM(n,t,e){let i=0;for(const s of mn){const r=n-s.x,a=e-s.z,o=Math.sqrt(r*r+a*a);if(o>=s.radius)continue;const c=t-(s.baseElevation??0);if(c<0)continue;const l=1-o/s.radius,u=Math.max(0,1-c/on.maxAltitude);i+=on.liftAtCenter*s.strength*l*u}return i}const BM=.4,zM=.08,yr=20,mi=Math.ceil(Ft.size/yr)+2,xh=-8e3-yr,Sf=Array.from({length:mi*mi},()=>[]);function Ef(n,t){return{cx:Math.floor((n-xh)/yr),cz:Math.floor((t-xh)/yr)}}function Er(n,t,e,i,s){const r=i+BM,a={x:n,z:e,r2:r*r,yMin:t,yMax:t+s+zM},o=Math.ceil(r/yr),{cx:c,cz:l}=Ef(n,e);for(let u=-o;u<=o;u++)for(let h=-o;h<=o;h++){const f=c+h,m=l+u;f<0||m<0||f>=mi||m>=mi||Sf[m*mi+f].push(a)}}function kM(n,t,e){const{cx:i,cz:s}=Ef(n,e);if(i<0||s<0||i>=mi||s>=mi)return!1;const r=Sf[s*mi+i];for(let a=0;a<r.length;a++){const o=r[a];if(t<o.yMin||t>o.yMax)continue;const c=o.x-n,l=o.z-e;if(c*c+l*l<o.r2)return!0}return!1}const ui=1024,ki=427,vh=1.08,HM=700,GM=5e3,VM={TFN:"tenerife",TFS:"tenerife",GMZ:"gomera",SPC:"palma",VDE:"hierro",LPA:"gc",FUE:"fuerte",ACE:"lanza",GRAC:"graciosa"},si=document.getElementById("tp-minimap-canvas"),ni=document.createElement("div"),nr=document.createElement("canvas"),Wa=document.createElement("div"),oa=document.createElement("div"),Cs=document.createElement("div"),Ta=document.createElement("div"),Aa=document.createElement("span"),yh=document.getElementById("tp-island"),WM=6;let Js=null,Jo=0,Xa=!1,Mh="",ll=0,ca=null;const Qo=new D;function ul(){if(ca)return ca;let n=1/0,t=-1/0,e=1/0,i=-1/0;for(const s of _e)n=Math.min(n,s.x-s.bboxRadius),t=Math.max(t,s.x+s.bboxRadius),e=Math.min(e,s.z-s.bboxRadius),i=Math.max(i,s.z+s.bboxRadius);return ca={cx:(n+t)/2,cz:(e+i)/2,hw:(t-n)/2*vh,hh:(i-e)/2*vh},ca}function XM(n,t){let e=_e[0].id,i=1/0;for(const s of _e){const r=n-s.x,a=t-s.z,o=r*r+a*a;o<i&&(i=o,e=s.id)}return e}function qM(){!si||Xa||(Xa=!0,si.innerHTML="",ni.className="minimap-stage",ni.style.width=ui+"px",ni.style.height=ki+"px",ni.style.transformOrigin="0 0",nr.className="minimap-canvas",nr.width=ui,nr.height=ki,ni.appendChild(nr),Wa.className="minimap-runways",ni.appendChild(Wa),si.appendChild(ni),oa.className="minimap-overlay",Cs.className="minimap-plane",Cs.innerHTML='<span class="minimap-plane-tri"></span>',oa.appendChild(Cs),Ta.className="minimap-compass",Aa.className="minimap-compass-inner",Aa.textContent="N",Ta.appendChild(Aa),oa.appendChild(Ta),si.appendChild(oa),si.addEventListener("pointerdown",()=>{ll=performance.now()+GM,si.classList.add("is-overview")}),bf(),Af())}function bf(){if(!Xa)return;const n=bM();if(!n)return;const t=nr.getContext("2d"),e=t.createImageData(ui,ki),{cx:i,cz:s,hw:r,hh:a}=ul(),o=Ft.heightmap.metersPerUnit,c=Ft.waterLevel,l=Ft.heightmap.elevRange,u=Ft.heightmap.bbox,h=Ft.heightmap.center,f=Math.cos(h.lat*Math.PI/180),m=u.lonE-u.lonW,g=u.latN-u.latS,v=(h.lon-u.lonW)/m*(n.w-1),p=o/(111320*f)/m*(n.w-1),d=(u.latN-h.lat)/g*(n.h-1),y=o/111320/g*(n.h-1),_=l[1]-l[0],M=l[0],C={};for(const S of _e)C[S.id]=!1;for(const S of xe)if(_t.discoveredRunways[S.id]){const T=VM[S.id];T&&(C[T]=!0)}const b=n.data,w=n.w,U=n.h;for(let S=0;S<ki;S++){const T=s+(S/(ki-1)-.5)*2*a,W=Math.max(0,Math.min(U-1,Math.floor(d+T*y)))*w*4;for(let at=0;at<ui;at++){const F=i+(at/(ui-1)-.5)*2*r,Y=Math.floor(v+F*p);let Z,K,G;if(Y<0||Y>=w)Z=52,K=92,G=118;else{const ot=W+Y*4,ft=b[ot]<<8|b[ot+1],vt=(M+ft/65535*_)/o;if(vt<c+.05)Z=52,K=92,G=118;else{const rt=XM(F,T),N=vt*o;C[rt]?[Z,K,G]=YM(N):Z=K=G=$M(N)}}const it=(S*ui+at)*4;e.data[it]=Z,e.data[it+1]=K,e.data[it+2]=G,e.data[it+3]=255}}t.putImageData(e,0,0)}function YM(n){return n<80?[199,184,145]:n<600?[134,152,98]:n<1600?[157,138,110]:n<2400?[180,168,148]:n<3e3?[215,212,200]:[240,240,235]}function $M(n){return n<80?124:n<600?140:n<1600?156:n<2400?172:n<3e3?190:206}function Tf(n,t){const{cx:e,cz:i,hw:s,hh:r}=ul();return{fracX:(n-e)/(2*s)+.5,fracY:(t-i)/(2*r)+.5}}function Af(){Wa.innerHTML="";for(const n of xe){const t=!!_t.landedRunways[n.id];if(!!!_t.discoveredRunways[n.id]&&!t)continue;const{fracX:i,fracY:s}=Tf(n.x,n.z);if(i<0||i>1||s<0||s>1)continue;const r=document.createElement("span");r.className=`minimap-runway ${t?"is-landed":"is-seen"}`,r.style.left=(i*100).toFixed(2)+"%",r.style.top=(s*100).toFixed(2)+"%",Wa.appendChild(r)}}function wf(n){if(Wn(n.x,n.z)<Ft.waterLevel+.05)return null;let e=null,i=1/0;for(const s of _e){const r=n.x-s.x,a=n.z-s.z,o=r*r+a*a;o<i&&(i=o,e=s)}return e}function Cf(){return performance.now()<ll}const jM="Islas Canarias";let Sh="";function ZM(n){if(!yh)return;const t=wf(n),i=Cf()||!t?jM:t.name;i!==Sh&&(Sh=i,yh.textContent=i)}function KM(n){if(!Xa||!n)return;ZM(n.position);const t=xe.map(C=>_t.discoveredRunways[C.id]?"1":"0").join("")+"|"+xe.map(C=>_t.landedRunways[C.id]?"1":"0").join("");t!==Mh&&(bf(),Af(),Mh=t);const e=si.getBoundingClientRect(),i=e.width,s=e.height;if(i<1||s<1)return;const r=i/2,a=s/2;Qo.set(0,0,-1).applyQuaternion(n.quaternion);const o=Math.atan2(Qo.x,-Qo.z),c=performance.now(),l=c<ll,{hw:u}=ul(),h=2*u/ui,f=i*h/HM,m=s/ki,g=l?m:f,v=Jo?Math.min(.1,(c-Jo)/1e3):0;if(Jo=c,Js===null)Js=g;else{const C=1-Math.exp(-v*WM);Js+=(g-Js)*C}l||si.classList.remove("is-overview");const{fracX:p,fracY:d}=Tf(n.position.x,n.position.z),y=p*ui,_=d*ki;ni.style.transform=`translate(${r}px, ${a}px) rotate(${-o}rad) scale(${Js}) translate(${-y}px, ${-_}px)`,Cs.style.left=r+"px",Cs.style.top=a+"px",Cs.style.transform="translate(-50%, -50%)";const M=Math.min(i,s)*.43;Ta.style.transform=`translate(-50%, -50%) rotate(${-o}rad) translateY(-${M}px)`,Aa.style.transform=`rotate(${o}rad)`}const Pc=document.getElementById("landing-toast"),JM=document.getElementById("controls-hint"),tc=document.getElementById("boost-grey-fill"),la=document.getElementById("boost-oneshot-tile"),Eh=document.getElementById("test-mode-border"),ua=document.getElementById("poi-toast"),dr=document.getElementById("poi-label");document.getElementById("tp-island");const QM={peak:document.querySelector('[data-tp="peak-count"]'),city:document.querySelector('[data-tp="city-count"]'),landscape:document.querySelector('[data-tp="landscape-count"]'),beach:document.querySelector('[data-tp="beach-count"]')},ec=document.getElementById("map-card-punkte"),nc=document.getElementById("map-card-highscore"),ic=document.getElementById("map-card-landings"),bh=document.getElementById("map-card-landings-best");let Th="",Ah="";function wh(n){return Math.round(n).toLocaleString("de-DE")}const Ch=["","Booster Level 1 freigeschalten","Booster Level 2 freigeschalten — La Gomera in Reichweite","Booster Level 3 freigeschalten — Gran Canaria in Reichweite","Booster Level MAX freigeschalten — Fuerteventura / Lanzarote"];let ha=null,qa=null,Rh=-1,Ph=null;const tS="↑ ↓ Pitch · ← → Bank · Space Brake · Shift Boost · F One-Shot",eS="↓ / S to launch",nS="Takeoff roll…";let Lh=null;function iS(n){Pc.innerHTML=`Geschafft! · ${n.id}<span class="bonus">+ ${Hi.landingBonus} pts</span>`,Pc.classList.add("show")}function Rf(){Pc.classList.remove("show")}function Ih(n,t,e,i){if(!ua)return;const s=e>0?`+ ${t} P · + ${e} G`:`+ ${t} P`,r=i&&Ch[i]?`<span class="tier-up">${Ch[i]}</span>`:"";ua.innerHTML=`${n}<span class="reward">${s}</span>${r}`,ua.classList.add("show"),ha&&clearTimeout(ha),ha=setTimeout(()=>{ua.classList.remove("show"),ha=null},ce.activationToast.duration*1e3)}function sS(n){dr&&n!==qa&&(dr.textContent=n,dr.classList.add("show"),qa=n)}function rS(){dr&&qa!==null&&(dr.classList.remove("show"),qa=null)}function aS(){const n=z.flightState===te.INTRO?"":z.flightState===te.PRELAUNCH?eS:z.flightState===te.TAKEOFF_ROLL?nS:tS;n!==Lh&&(JM.textContent=n,Lh=n),cS(),lS(),uS(),oS()}function oS(){if(!ec&&!nc&&!ic)return;const n=Math.round(z.flightPunkte|0),t=Math.round(_t.bestFlightPunkte|0),e=z.sessionLandings|0,i=_t.bestSessionLandings|0,s=`${n}|${t}|${e}|${i}`;s!==Ah&&(Ah=s,ec&&(ec.textContent=wh(n)),nc&&(nc.textContent=wh(t)),ic&&(ic.textContent=e.toString()),bh&&(bh.textContent=i.toString()))}function cS(){if(tc&&(tc.style.width=(z.boostFuelGrey*100).toFixed(1)+"%",tc.style.opacity=z.greyActive?"1":"0.7"),!la)return;const n=Ps(),t=de.oneShot.tiers[n]||de.oneShot.tiers[0];if(n!==Rh){la.hidden=n===0;const s="#"+(t.color|0).toString(16).padStart(6,"0");la.style.setProperty("--boost-fill",s),Rh=n}if(n===0)return;const i=((1-Math.max(0,Math.min(1,z.boostFuelOneshot)))*100).toFixed(1)+"%";la.style.setProperty("--drain-pct",i)}function lS(){Eh&&_t.testMode!==Ph&&(Eh.classList.toggle("visible",!!_t.testMode),Ph=_t.testMode)}function uS(){const n=Cf(),t=wf(xt.position),e=n||!t,i={peak:0,city:0,landscape:0,beach:0},s={peak:0,city:0,landscape:0,beach:0};if(e)for(const o of Object.keys(uo))for(const c of uo[o])i[c.type]++,_t.exploredPOIs[c.id]&&s[c.type]++;else for(const o of uo[t.id]||[])i[o.type]++,_t.exploredPOIs[o.id]&&s[o.type]++;const a=`${e?"arch":t.id}|${s.peak}/${i.peak}|${s.city}/${i.city}|${s.landscape}/${i.landscape}|${s.beach}/${i.beach}`;if(a!==Th){Th=a;for(const o of["peak","city","landscape","beach"]){const c=QM[o];if(!c)continue;const l=s[o],u=i[o];u>0&&l>=u?c.innerHTML='<span class="material-symbols-outlined tp-gofios-check">check</span>':c.textContent=`${l} / ${u}`}}}const pn=new D(0,0,-1),Dh=new D,Nh=new D,Ye=new D,vn=new D,Os=new D,Uh=new D;function Pf(){switch(z.flightState){case te.PRELAUNCH:case te.LANDED:return 0;case te.TAKEOFF_ROLL:case te.LANDING_ROLL:return Gi.clamp(z.speed/Di.takeoffSpeed,0,1);default:return 1}}function fr(n,t,e){return n+(t-n)*e}let sc=0;function da(n,t){return 1-Math.exp(-t/Math.max(n,1e-4))}function hS(n){const t=1-n;return 1-t*t*t}function dS(n){return vn.set(0,0,-1).applyQuaternion(xt.quaternion),Ye.set(vn.x,0,vn.z),Ye.lengthSq()<1e-4&&Ye.set(0,0,-1),Ye.normalize(),Os.set(0,$e.height,0),n.copy(xt.position).addScaledVector(Ye,-6.5).add(Os)}function fS(n){if(z.flightState===te.INTRO&&z.introStartCamPos){const u=hS(Math.min(1,z.introT));dS(Uh),Cn.position.lerpVectors(z.introStartCamPos,Uh,u),Cn.up.set(0,1,0),Cn.lookAt(xt.position);return}vn.set(0,0,-1).applyQuaternion(xt.quaternion);const t=da($e.yawTau,n),e=da($e.pitchTau,n);pn.x+=(vn.x-pn.x)*t,pn.z+=(vn.z-pn.z)*t,pn.y+=(vn.y-pn.y)*e,pn.normalize(),Ye.set(pn.x,0,pn.z),Ye.lengthSq()<1e-4&&Ye.set(0,0,-1),Ye.normalize();const i=z.greyActive||z.oneShotActive?1:0,s=da(de.camPushbackTau,n);sc+=(i-sc)*s;const r=Pf(),a=fr($e.runwayDistance,$e.distance,r),o=fr($e.runwayHeight,$e.height,r),c=fr($e.runwayLookAhead,$e.lookAhead,r);Os.set(0,o,0),Dh.copy(xt.position).addScaledVector(Ye,-(a+de.camPushback*sc)).add(Os);const l=da($e.posTau,n);Cn.position.lerp(Dh,l),Nh.copy(xt.position).addScaledVector(pn,c),Cn.up.set(0,1,0),Cn.lookAt(Nh)}function hl(){vn.set(0,0,-1).applyQuaternion(xt.quaternion),pn.copy(vn),Ye.set(vn.x,0,vn.z),Ye.lengthSq()<1e-4&&Ye.set(0,0,-1),Ye.normalize();const n=Pf(),t=fr($e.runwayDistance,$e.distance,n),e=fr($e.runwayHeight,$e.height,n);Os.set(0,e,0),Cn.position.copy(xt.position).addScaledVector(Ye,-t).add(Os)}let wa=null;const An=new D,Fh=new D,Oh=new D,Bh=new Fe,zh=new bn,fa=new D,kh=new D,pS=new D;function so(n,t=pS){return t.set(0,0,-1).applyEuler(new bn(0,n,0))}function mS(n){const t=so(n.activeHeading);xt.position.set(n.x-t.x*n.length*.45,n.elevation+.22,n.z-t.z*n.length*.45),xt.quaternion.setFromEuler(new bn(0,n.activeHeading,0)),z.speed=0,z.flightState=te.PRELAUNCH,z.currentRunway=n,z.refillStartGrey=z.boostFuelGrey,z.refillStartOneshot=z.boostFuelOneshot,z.refillT=0,z.greyActive=!1,z.oneShotActive=!1,z.prevOneShot=!1,hl()}const Lf=document.getElementById("crash");function gS(){z.flightPunkte=0}function If(){z.flightPunkte>_t.bestFlightPunkte&&(_t.bestFlightPunkte=z.flightPunkte),z.flightPunkte=0}function Ca(){z.alive&&(z.alive=!1,z.flightState=te.CRASHED,z.sessionLandings=0,If(),In(),Lf.classList.add("visible"))}function br(n={}){n.runwayId&&n.runwayId!==_t.checkpointRunwayId&&(_t.checkpointRunwayId=n.runwayId,In());const t=_t.checkpointRunwayId??_a,e=xe.find(s=>s.id===t)??xe[0],i=n.forceIntro||!_t.introPlayed;if(ep(),Py(),ky(),Wy(),Rf(),Lf.classList.remove("visible"),mS(e),i){const s=new D(0,0,-1).applyQuaternion(xt.quaternion),r=new D(s.x,0,s.z).normalize();z.introStartCamPos=xt.position.clone().addScaledVector(r,-4e3).add(new D(0,id.startHeight,0)),z.introT=0,z.flightState=te.INTRO,Ue.fog&&(wa=Ue.fog,Ue.fog=null)}}function _S(){return ge.down||ge.up||ge.left||ge.right||ge.brake}function Df(n){if(z.refillT>=1)return;z.refillT=Math.min(1,z.refillT+n/de.refillDuration);const t=z.refillT;z.boostFuelGrey=z.refillStartGrey+(1-z.refillStartGrey)*t,z.boostFuelOneshot=z.refillStartOneshot+(1-z.refillStartOneshot)*t}function xS(){z.refillT=1,z.boostFuelGrey=1,z.boostFuelOneshot=1}function vS(n){const t=ge.oneShot&&!z.prevOneShot;z.prevOneShot=ge.oneShot,t&&Ps()>0&&z.boostFuelOneshot>0&&!z.oneShotActive&&(z.oneShotActive=!0),z.greyActive=ge.boost&&z.boostFuelGrey>0;let e=0,i=0;if(z.oneShotActive){const s=de.oneShot.tiers[Ps()]||de.oneShot.tiers[0];z.boostFuelOneshot-=n/Math.max(s.tankDuration,1e-4),z.boostFuelOneshot<=0?(z.boostFuelOneshot=_t.testMode?1:0,z.oneShotActive=!1):(e+=s.speedBonus,i+=s.accelRate)}if(z.greyActive){const s=de.grey;z.boostFuelGrey-=n/Math.max(s.tankDuration,1e-4),z.boostFuelGrey<=0?(z.boostFuelGrey=0,z.greyActive=!1):(e+=s.speedBonus,i+=s.accelRate)}return!z.greyActive&&!z.oneShotActive&&z.boostFuelGrey<1&&(z.boostFuelGrey=Math.min(1,z.boostFuelGrey+n/de.grey.rechargeTime)),{speedBonus:e,accelBonus:i}}function yS(n){_S()?z.introT=1:z.introT+=n/id.duration,z.introT>=1&&(z.introT=0,z.introStartCamPos=null,z.flightState=te.PRELAUNCH,_t.introPlayed=!0,wa&&(Ue.fog=wa,wa=null),hl())}function MS(n){Df(n),ge.down&&(z.flightState=te.TAKEOFF_ROLL,z.takeoffTime=0,gS())}function SS(n){const t=z.currentRunway;z.takeoffTime+=n,Df(n);const e=Di.takeoffSpeed,i=Di.linearShare,s=1-i,a=t.length*Di.liftoffFraction/(e*(i/2+s/3)),o=Math.min(1,z.takeoffTime/a);z.speed=e*(i*o+s*o*o);const c=so(t.activeHeading);xt.position.x+=c.x*z.speed*n,xt.position.z+=c.z*z.speed*n,xt.position.y=t.elevation+.22,xt.quaternion.setFromEuler(new bn(0,t.activeHeading,0)),o>=1&&(xt.rotateX(Di.pitchUpAtLiftoff),z.flightState=te.FLYING,z.currentRunway=null,z.postLiftCooldown=1.2,xS())}const Hh=200,ES=250;function bS(n){for(const t of xe){if(_t.discoveredRunways[t.id])continue;const e=n.x-t.x,i=n.z-t.z;if(e*e+i*i>Hh*Hh)continue;const s=n.y-t.elevation;s<-50||s>ES||(_t.discoveredRunways[t.id]=!0,In())}}function TS(n){const t=vS(n),e=(ge.down?1:0)-(ge.up?1:0),i=(ge.right?1:0)-(ge.left?1:0),s=Math.max(0,Me.stallSpeed-z.speed)/Me.stallSpeed,r=1-s*(1-Me.stallAuthority),a=e*r;An.set(0,0,-1).applyQuaternion(xt.quaternion);const o=Math.asin(Gi.clamp(An.y,-1,1));let c=a*Me.pitchRate*n;c>0&&(c=Math.min(c,Math.max(0,Me.maxClimbPitch-o))),xt.rotateX(c),xt.rotateZ(-i*Me.rollRate*n),An.set(0,0,-1).applyQuaternion(xt.quaternion),Fh.set(1,0,0).applyQuaternion(xt.quaternion),Oh.set(0,1,0).applyQuaternion(xt.quaternion);const l=Math.atan2(Fh.y,Oh.y);xt.rotateOnWorldAxis(_h,Math.sin(l)*Me.turnFactor*n),s>.01&&(fa.set(An.x,0,An.z),fa.lengthSq()>1e-4&&(fa.normalize(),kh.crossVectors(fa,_h).normalize(),xt.rotateOnWorldAxis(kh,-s*Me.stallPitchRate*n))),An.set(0,0,-1).applyQuaternion(xt.quaternion);const u=An.y;z.speed-=u*Me.speedFromPitch*n,z.speed-=Me.drag*n,z.brakeAmount>.01&&(z.speed-=z.brakeAmount*Ra.force*n);const h=OM(xt.position.x,xt.position.y,xt.position.z);z.speed+=h*.13*n,z.inThermal=h>.5;const f=Me.maxSpeed+t.speedBonus;t.accelBonus>0&&z.speed<f&&(z.speed=Math.min(f,z.speed+t.accelBonus*n)),z.speed=Math.max(Me.minSpeed,Math.min(f,z.speed));const m=xt.position.x,g=xt.position.z;xt.position.addScaledVector(An,z.speed*n);const v=Me.sinkRate*(1+s*Me.stallSink);xt.position.y-=v*n,xt.position.y+=h*n;const p=xt.position.x-m,d=xt.position.z-g;ja(Math.sqrt(p*p+d*d));const y=Ft.size/2-30;if(xt.position.x>y&&(xt.position.x=y),xt.position.x<-y&&(xt.position.x=-y),xt.position.z>y&&(xt.position.z=y),xt.position.z<-y&&(xt.position.z=-y),z.postLiftCooldown>0){z.postLiftCooldown-=n;return}bS(xt.position);const _=Math.atan2(-An.x,-An.z),M=Ny(xt.position,_);if(M){z.flightState=te.LANDING_ROLL,z.currentRunway=M,xt.position.y=M.elevation+.22;return}const C=Uy(xt.position);if(C&&xt.position.y-C.elevation<Hi.rollingHeight){Ca();return}const b=Sn(xt.position.x,xt.position.z);(xt.position.y<Math.max(b+.4,Ft.waterLevel+.4)||kM(xt.position.x,xt.position.y,xt.position.z))&&Ca()}function AS(n){const t=z.currentRunway;z.speed=Math.max(0,z.speed-Hi.brakeForce*n);const e=so(t.activeHeading),i=xt.position.x,s=xt.position.z;xt.position.x+=e.x*z.speed*n,xt.position.z+=e.z*z.speed*n,xt.position.y=t.elevation+.22;const r=xt.position.x-i,a=xt.position.z-s;ja(Math.sqrt(r*r+a*a)),zh.set(0,t.activeHeading,0),Bh.setFromEuler(zh),xt.quaternion.slerp(Bh,.22);const o=xt.position.x-t.x,c=xt.position.z-t.z,l=o*Math.sin(t.heading)+c*Math.cos(t.heading);if(Math.abs(l)>t.length*.5){Ca();return}z.speed<Hi.landingSpeed&&wS(t)}function wS(n){z.speed=0,z.flightState=te.LANDED,z.landedToastTimer=sd.toastDuration,z.cinematicT=0,z.cinematicFromPos=xt.position.clone(),z.cinematicFromQuat=xt.quaternion.clone();const t=n.activeHeading,e=so(t,new D);z.cinematicToPos=new D(n.x-e.x*n.length*.45,n.elevation+.22,n.z-e.z*n.length*.45),z.cinematicToQuat=new Fe().setFromEuler(new bn(0,t,0)),_t.landings+=1,ja(Hi.landingBonus),_t.checkpointRunwayId=n.id,_t.landedRunways[n.id]=!0,_t.discoveredRunways[n.id]=!0,z.sessionLandings+=1,z.sessionLandings>_t.bestSessionLandings&&(_t.bestSessionLandings=z.sessionLandings),If(),In(),iS(n)}function CS(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function RS(n){if(z.landedToastTimer>0){z.landedToastTimer-=n;return}if(z.cinematicT+=n/sd.tweenDuration,z.cinematicT>=1){xt.position.copy(z.cinematicToPos),xt.quaternion.copy(z.cinematicToQuat),z.cinematicT=0,z.cinematicFromPos=null,z.cinematicToPos=null,z.cinematicFromQuat=null,z.cinematicToQuat=null,z.flightState=te.PRELAUNCH,z.refillStartGrey=z.boostFuelGrey,z.refillStartOneshot=z.boostFuelOneshot,z.refillT=0,hl(),Rf();return}const t=CS(z.cinematicT);xt.position.lerpVectors(z.cinematicFromPos,z.cinematicToPos,t),xt.quaternion.copy(z.cinematicFromQuat)}function PS(n){if(z.alive&&!z.paused)switch(z.flightState){case te.INTRO:return yS(n);case te.PRELAUNCH:return MS(n);case te.TAKEOFF_ROLL:return SS(n);case te.FLYING:return TS(n);case te.LANDING_ROLL:return AS(n);case te.LANDED:return RS(n);case te.CRASHED:return}}const LS={TFN:"tenerife",TFS:"tenerife",GMZ:"gomera",SPC:"palma",VDE:"hierro",LPA:"gc",FUE:"fuerte",ACE:"lanza",GRAC:"graciosa"},ke=document.getElementById("welcome-overlay"),rc=document.getElementById("welcome-start-sub"),Gh=document.getElementById("pause-btn"),yn=document.getElementById("pause-overlay"),Vh=document.getElementById("pause-resume"),Wh=document.getElementById("pause-home"),en=document.getElementById("levels-overlay"),ir=document.getElementById("levels-map"),Rs=document.getElementById("levels-markers"),Xh=document.getElementById("levels-title"),pa=document.getElementById("levels-hint"),Qs=768,ma=320,qh=1.08;let Yh=null,ga=null;function Nf(){if(ga)return ga;let n=1/0,t=-1/0,e=1/0,i=-1/0;for(const c of _e)n=Math.min(n,c.x-c.bboxRadius),t=Math.max(t,c.x+c.bboxRadius),e=Math.min(e,c.z-c.bboxRadius),i=Math.max(i,c.z+c.bboxRadius);const s=(n+t)/2,r=(e+i)/2,a=(t-n)/2*qh,o=(i-e)/2*qh;return ga={cx:s,cz:r,hw:a,hh:o},ga}function IS(){return ke?.classList.contains("visible")===!0}function $h(){return yn?.classList.contains("visible")===!0}function ro(){ke&&(sr(),z.paused=!0,DS(),ke.classList.add("visible"),ke.setAttribute("aria-hidden","false"))}function Lc(){ke&&(ke.classList.remove("visible"),ke.setAttribute("aria-hidden","true"),Uf()||(z.paused=!1))}function jh(){yn&&(z.paused=!0,yn.classList.add("visible"),yn.setAttribute("aria-hidden","false"))}function sr(){yn&&yn.classList.contains("visible")&&(yn.classList.remove("visible"),yn.setAttribute("aria-hidden","true"),Uf()||(z.paused=!1))}function Uf(){return ke?.classList.contains("visible")||en?.classList.contains("visible")||document.getElementById("hangar-overlay")?.classList.contains("visible")||document.getElementById("shop-overlay")?.classList.contains("visible")||document.getElementById("settings-overlay")?.classList.contains("visible")}function DS(){if(!rc)return;const n=_t.checkpointRunwayId;n?rc.textContent=`Checkpoint · ${n}`:rc.textContent="Erstflug · TFN"}function NS(){en&&(ke?.classList.remove("visible"),ke?.setAttribute("aria-hidden","true"),en.classList.add("visible"),en.setAttribute("aria-hidden","false"),US())}function Zh(){en&&(en.classList.remove("visible"),en.setAttribute("aria-hidden","true"),ro())}function US(){if(!ir)return;Xh&&(Xh.textContent="Kanarische Inseln");const n=FS(),t=_e.map(e=>n[e.id]?"1":"0").join("");Yh!==t&&(BS(n),Yh=t),HS(),GS(n),VS()}function FS(){const n={};for(const t of _e)n[t.id]=!1;for(const t of xe){if(!_t.discoveredRunways[t.id])continue;const e=LS[t.id];e&&(n[e]=!0)}return n}function OS(n,t){let e=_e[0].id,i=1/0;for(const s of _e){const r=n-s.x,a=t-s.z,o=r*r+a*a;o<i&&(i=o,e=s.id)}return e}function BS(n){if(!ir)return;ir.width=Qs,ir.height=ma;const t=ir.getContext("2d"),e=t.createImageData(Qs,ma),{cx:i,cz:s,hw:r,hh:a}=Nf(),o=Ft.heightmap.metersPerUnit,c=Ft.waterLevel;for(let l=0;l<ma;l++){const u=s+(l/(ma-1)-.5)*2*a;for(let h=0;h<Qs;h++){const f=i+(h/(Qs-1)-.5)*2*r,m=Wn(f,u);let g,v,p;if(m<c+.05)g=52,v=92,p=118;else{const y=OS(f,u),_=m*o;n[y]?[g,v,p]=zS(_):g=v=p=kS(_)}const d=(l*Qs+h)*4;e.data[d]=g,e.data[d+1]=v,e.data[d+2]=p,e.data[d+3]=255}}t.putImageData(e,0,0)}function zS(n){return n<80?[199,184,145]:n<600?[134,152,98]:n<1600?[157,138,110]:n<2400?[180,168,148]:n<3e3?[215,212,200]:[240,240,235]}function kS(n){return n<80?132:n<600?148:n<1600?162:n<2400?176:n<3e3?192:206}function Ff(n,t){const{cx:e,cz:i,hw:s,hh:r}=Nf();return{fracX:(n-e)/(2*s)+.5,fracY:(t-i)/(2*r)+.5}}function HS(){if(Rs){Rs.querySelectorAll(".levels-marker").forEach(n=>n.remove());for(const n of xe){const t=!!_t.landedRunways[n.id],e=!!_t.discoveredRunways[n.id],i=t?"landed":e?"discovered":"locked",{fracX:s,fracY:r}=Ff(n.x,n.z);if(s<0||s>1||r<0||r>1)continue;const a=document.createElement("button");a.type="button",a.className=`levels-marker levels-marker-${i}`,a.style.left=(s*100).toFixed(2)+"%",a.style.top=(r*100).toFixed(2)+"%",a.dataset.runwayId=n.id,a.disabled=!t;const o=i==="locked"?"???":n.id;a.innerHTML=`
      <span class="levels-marker-dot"></span>
      <span class="levels-marker-label">${o}</span>
    `,t?(a.title=`Bei ${n.id} starten`,a.addEventListener("click",()=>WS(n.id))):e?a.title=`${n.id} — noch nicht gelandet`:a.title="Noch nicht entdeckt",Rs.appendChild(a)}}}function GS(n){if(Rs){Rs.querySelectorAll(".levels-island-label").forEach(t=>t.remove());for(const t of _e){if(!n[t.id])continue;const{fracX:e,fracY:i}=Ff(t.x,t.z);if(e<0||e>1||i<0||i>1)continue;const s=document.createElement("span");s.className="levels-island-label",s.textContent=t.name,s.style.left=(e*100).toFixed(2)+"%",s.style.top=(i*100).toFixed(2)+"%",Rs.appendChild(s)}}}function VS(){if(!pa)return;const n=xe.filter(t=>_t.landedRunways[t.id]).length;n===0?pa.textContent="Lande einen Flughafen, um ihn als Spawnpunkt freizuschalten.":n<xe.length?pa.textContent=`${n} / ${xe.length} Flughäfen freigeschaltet. Tippe einen Spawn an.`:pa.textContent="Alle Flughäfen freigeschaltet. Tippe einen Spawn an."}function WS(n){en?.classList.remove("visible"),en?.setAttribute("aria-hidden","true"),ke?.classList.remove("visible"),ke?.setAttribute("aria-hidden","true"),z.paused=!1,br({runwayId:n,forceIntro:!0})}function XS(){z.flightState===te.CRASHED?(Lc(),br()):Lc()}function ac(n){ke?.classList.remove("visible"),ke?.setAttribute("aria-hidden","true"),ff(n,{onClose:ro})}(function(){ke&&ke.addEventListener("click",t=>{const e=t.target.closest("[data-welcome-action]");if(!e)return;const i=e.dataset.welcomeAction;i==="start"?XS():i==="levels"?NS():i==="hangar"?ac("hangar"):i==="shop"?ac("shop"):i==="settings"&&ac("settings")}),en&&en.addEventListener("click",t=>{if(t.target===en){Zh();return}if(t.target.closest('[data-modal-close="levels"]')){Zh();return}}),Gh&&Gh.addEventListener("click",()=>{$h()?sr():jh()}),Vh&&Vh.addEventListener("click",sr),Wh&&Wh.addEventListener("click",ro),yn&&yn.addEventListener("click",t=>{t.target===yn&&sr()}),document.addEventListener("keydown",t=>{if(t.key==="Escape"&&!document.getElementById("hangar-overlay")?.classList.contains("visible")&&!document.getElementById("shop-overlay")?.classList.contains("visible")&&!document.getElementById("settings-overlay")?.classList.contains("visible")&&!en?.classList.contains("visible")){if(IS()){Lc();return}if($h()){sr();return}z.flightState!==te.CRASHED&&jh()}})})();const Hs=new D(0,1,0);function Ya(n,t){for(const e of xe){const i=n-e.x,s=t-e.z,r=(Math.max(e.length,e.width)*.9)**2;if(i*i+s*s<r)return!0}return!1}const fs=8;function qS(n,t,e){const i=Wn(n+fs,t),s=Wn(n-fs,t),r=Wn(n,t+fs),a=Wn(n,t-fs);return e.gx=(i-s)/(2*fs),e.gz=(r-a)/(2*fs),e}function YS(){const t=_e.reduce((e,i)=>e+i.bboxRadius*i.bboxRadius,0);return _e.map(e=>{const i=e.bboxRadius*e.bboxRadius/t;return Math.max(8e3,Math.floor(Ee.sampleCount*i))})}function $S(){const{treeDensity:n,shrubDensity:t,grassDensity:e,cropDensity:i,bareDensity:s,droughtShrubDensity:r,snowDensity:a,wetlandDensity:o,laurelMaxAltitude:c}=Ee,l={};for(const g of _e)l[g.id]={pines:[],laurels:[],shrubs:[],grasses:[],crops:[],rocks:[],snow:[],wetlands:[],cliffs:[]};const u=Ee.slopeThreshold,h=Ee.cliffDensity,f={gx:0,gz:0};for(const g of np){const v=l[g.island];if(!v)continue;const p=g.ringCount,d=g.ringRadius,y=1.4;for(let M=0;M<p;M++){const C=M/p*Math.PI*2+(Math.random()-.5)*.08,b=d*(.88+Math.random()*.24),w=g.x+Math.cos(C)*b,U=g.z+Math.sin(C)*b,S=Sn(w,U);S<Ft.waterLevel+.5||Ya(w,U)||v.cliffs.push({x:w,y:S,z:U,gx:Math.cos(C)*y,gz:Math.sin(C)*y})}const _=Math.floor(p*.4);for(let M=0;M<_;M++){const C=Math.random()*Math.PI*2,b=Math.sqrt(Math.random())*d*.75,w=g.x+Math.cos(C)*b,U=g.z+Math.sin(C)*b,S=Sn(w,U);S<Ft.waterLevel+.5||v.rocks.push({x:w,y:S,z:U})}}const m=YS();for(let g=0;g<_e.length;g++){const v=_e[g],p=v.bboxRadius,d=m[g],y=l[v.id];for(let _=0;_<d;_++){const M=v.x+(Math.random()-.5)*2*p,C=v.z+(Math.random()-.5)*2*p,b=Sn(M,C);if(b<Ft.waterLevel+.5||Ya(M,C))continue;qS(M,C,f);const U=Math.hypot(f.gx,f.gz)>=u&&Math.random()<h;U&&y.cliffs.push({x:M,y:b,z:C,gx:f.gx,gz:f.gz});const S=xf(M,C);S===Se.TREE&&Math.random()<n?b>=c?y.pines.push({x:M,y:b,z:C}):y.laurels.push({x:M,y:b,z:C}):S===Se.SHRUB&&Math.random()<t?y.shrubs.push({x:M,y:b,z:C}):S===Se.GRASS&&Math.random()<e?y.grasses.push({x:M,y:b,z:C}):S===Se.CROP&&Math.random()<i?y.crops.push({x:M,y:b,z:C}):S===Se.BARE?(!U&&Math.random()<s&&y.rocks.push({x:M,y:b,z:C}),Math.random()<r&&y.shrubs.push({x:M,y:b,z:C})):S===Se.SNOW&&Math.random()<a?y.snow.push({x:M,y:b,z:C}):S===Se.WETLAND&&Math.random()<o&&y.wetlands.push({x:M,y:b,z:C})}}return l}function Of(n,t,e,i,s,r,a,o,c){const l=new En(t,i,n.length),u=new En(e,s,n.length),h=new Zt,f=new Fe,m=new D,g=new D;for(let p=0;p<n.length;p++){const{x:d,y,z:_}=n[p],M=r+Math.random()*(a-r);g.set(d,y-.3,_),m.set(M,M+Math.random()*.3,M),f.setFromAxisAngle(Hs,Math.random()*Math.PI*2),h.compose(g,f,m),l.setMatrixAt(p,h),u.setMatrixAt(p,h),Er(d,y,_,o*M,c*M)}l.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0;const v=new fe;return v.add(l,u),v}function jS(n){const t=new $n(.18,.26,1.6,5);t.translate(0,.8,0);const e=new jn(1,4.8,7);e.translate(0,3.8,0);const i=new pe({color:Jt.trunk,flatShading:!0}),s=new pe({color:Jt.pineCanopy,flatShading:!0}),r=Ee.treeScale;return Of(n,t,e,i,s,.75*r,1.3*r,1,6.2)}function ZS(n){const t=new $n(.22,.32,1,5);t.translate(0,.5,0);const e=new no(1.7,7,5);e.scale(1,.85,1),e.translate(0,2,0);const i=new pe({color:Jt.trunk,flatShading:!0}),s=new pe({color:Jt.laurelCanopy,flatShading:!0}),r=Ee.treeScale;return Of(n,t,e,i,s,.85*r,1.25*r,1.7,3.5)}function KS(n){const t=new jn(.7,1,5);t.translate(0,.5,0);const e=new pe({color:Jt.shrubBody,flatShading:!0}),i=new En(t,e,n.length),s=new Zt,r=new Fe,a=new D,o=new D;for(let c=0;c<n.length;c++){const{x:l,y:u,z:h}=n[c],f=.5+Math.random()*.6;o.set(l,u-.2,h),a.set(f+Math.random()*.2,f,f+Math.random()*.2),r.setFromAxisAngle(Hs,Math.random()*Math.PI*2),s.compose(o,r,a),i.setMatrixAt(c,s),Er(l,u,h,.85*f,1*f)}return i.instanceMatrix.needsUpdate=!0,i}function JS(n){const t=new jn(.35,.55,4);t.translate(0,.25,0);const e=new pe({color:16777215,flatShading:!0}),i=new En(t,e,n.length),s=new Zt,r=new Fe,a=new D,o=new D,c=new Ct(Jt.grassGround),l=Ee.grassTints,u=new Ct;for(let h=0;h<n.length;h++){const{x:f,y:m,z:g}=n[h],v=.6+Math.random()*.7;o.set(f,m-.1,g),a.set(v,v*(.8+Math.random()*.5),v),r.setFromAxisAngle(Hs,Math.random()*Math.PI*2),s.compose(o,r,a),i.setMatrixAt(h,s);const[p,d,y]=l[Math.random()*l.length|0];u.setRGB(c.r*p,c.g*d,c.b*y),i.setColorAt(h,u)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function QS(n){const t=new jn(.4,.75,4);t.translate(0,.35,0);const e=new pe({color:16777215,flatShading:!0}),i=new En(t,e,n.length),s=new Zt,r=new Fe,a=new D,o=new D,c=new Ct(Jt.cropGround),l=Ee.grassTints,u=new Ct;for(let h=0;h<n.length;h++){const{x:f,y:m,z:g}=n[h],v=.7+Math.random()*.6;o.set(f,m-.12,g),a.set(v,v*(.9+Math.random()*.4),v),r.setFromAxisAngle(Hs,Math.random()*Math.PI*2),s.compose(o,r,a),i.setMatrixAt(h,s);const[p,d,y]=l[Math.random()*l.length|0];u.setRGB(c.r*p,c.g*d,c.b*y),i.setColorAt(h,u)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function tE(n){const t=new Sr(.5,0),e=new pe({color:16777215,flatShading:!0}),i=new En(t,e,n.length),s=new Zt,r=new Fe,a=new D,o=new D,c=new bn,l=new Ct(Jt.rock),u=Ee.rockTintsLow,h=Ee.rockTintsMid,f=Ee.rockTintsHigh,m=Ee.rockZoneLowMax,g=Ee.rockZoneHighMin,v=new Ct;for(let p=0;p<n.length;p++){const{x:d,y,z:_}=n[p];let M,C,b;y<m?(M=u,C=.3,b=1.5):y>g?(M=f,C=.4,b=2.5):(M=h,C=.5,b=3.5);const w=C+Math.random()*Math.random()*(b-C);o.set(d,y-w*.15,_),a.set(w*(.7+Math.random()*.6),w*(.55+Math.random()*.45),w*(.7+Math.random()*.6)),c.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),r.setFromEuler(c),s.compose(o,r,a),i.setMatrixAt(p,s);const[U,S,T]=M[Math.random()*M.length|0];v.setRGB(l.r*U,l.g*S,l.b*T),i.setColorAt(p,v),w>1.5&&Er(d,y,_,w,w)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function eE(n){const t=new Sr(.6,0),e=new pe({color:16777215,flatShading:!0}),i=new En(t,e,n.length),s=new Zt,r=new Fe,a=new Fe,o=new D,c=new D,l=new D(0,1,0),u=new D,h=new Ct(Jt.rock),f=[[.5,.5,.55],[.4,.4,.45],[.62,.58,.55],[.55,.5,.48],[.45,.45,.5]],m=new Ct,[g,v]=Ee.cliffHeightRange;for(let p=0;p<n.length;p++){const{x:d,y,z:_,gx:M,gz:C}=n[p];u.set(-M,1,-C).normalize();const b=g+Math.random()*(v-g),w=1.4+Math.random()*1.8;r.setFromUnitVectors(l,u),a.setFromAxisAngle(u,Math.random()*Math.PI*2),r.premultiply(a);const U=(.3+Math.random()*.1)*b;c.set(d-u.x*U,y-u.y*U,_-u.z*U),o.set(w*(.85+Math.random()*.4),b,w*(.85+Math.random()*.4)),s.compose(c,r,o),i.setMatrixAt(p,s);const[S,T,V]=f[Math.random()*f.length|0];m.setRGB(h.r*S,h.g*T,h.b*V),i.setColorAt(p,m)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function nE(n){const t=new Sr(.5,0),e=new pe({color:16777215,flatShading:!0}),i=new En(t,e,n.length),s=new Zt,r=new Fe,a=new D,o=new D,c=new bn,l=new Ct;for(let u=0;u<n.length;u++){const{x:h,y:f,z:m}=n[u],g=.4+Math.random()*.9;o.set(h,f-.05,m),a.set(g*(.9+Math.random()*.3),g*(.25+Math.random()*.2),g*(.9+Math.random()*.3)),c.set(0,Math.random()*Math.PI*2,0),r.setFromEuler(c),s.compose(o,r,a),i.setMatrixAt(u,s);const v=.93+Math.random()*.07;l.setRGB(v,v,v),i.setColorAt(u,l)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function iE(n){const t=new Yn(1,.04,1);t.translate(0,.02,0);const e=new pe({color:16777215,flatShading:!0}),i=new En(t,e,n.length),s=new Zt,r=new Fe,a=new D,o=new D,c=new Ct,l=[[1.05,1.1,1.15],[1.15,1.15,1.2],[.95,1,1.05],[1.1,1.05,.95]];for(let u=0;u<n.length;u++){const{x:h,y:f,z:m}=n[u],g=1+Math.random()*.8;o.set(h,f+.05,m),a.set(g*(.9+Math.random()*.4),1,g*(.9+Math.random()*.4)),r.setFromAxisAngle(Hs,Math.random()*Math.PI*2),s.compose(o,r,a),i.setMatrixAt(u,s);const[v,p,d]=l[Math.random()*l.length|0];c.setRGB(.92*v,.94*p,.96*d),i.setColorAt(u,c)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function sE(n){const{clusterScaleMin:t,clusterScaleMax:e}=Ee.urban,i=Math.min(1,Math.pow(n/50,.4));return t+i*(e-t)}function rE(){const n=EM(),{churchClusterPixels:t,housesPerPixel:e,housesMin:i,housesMax:s,houseMinSpacing:r,pixelJitter:a}=Ee.urban,o=[],c=[],l=r*r;for(const u of n){const h=Math.max(i,Math.min(s,Math.round(u.pixelCount*e))),f=sE(u.pixelCount),m=[];let g=0;const v=h*14;for(;m.length<h&&g<v;){g++;const p=u.pixels[Math.random()*u.pixels.length|0],d=p.x+(Math.random()-.5)*a,y=p.z+(Math.random()-.5)*a;let _=!0;for(const C of m){const b=C.x-d,w=C.z-y;if(b*b+w*w<l){_=!1;break}}if(!_)continue;const M=Sn(d,y);M<Ft.waterLevel+.5||Ya(d,y)||m.push({x:d,y:M,z:y,scale:f})}if(o.push(...m),u.pixelCount>=t){const p=u.centerX,d=u.centerZ,y=Sn(p,d);y>=Ft.waterLevel+.5&&!Ya(p,d)&&c.push({x:p,y,z:d,scale:f})}}return{houses:o,churches:c}}function aE(n){const t=new Yn(1.4,1,1.6);t.translate(0,.5,0);const e=new jn(1.15,.75,4);e.rotateY(Math.PI/4),e.translate(0,1.37,0);const i=new pe({color:Jt.houseWall,flatShading:!0}),s=new pe({color:16777215,flatShading:!0}),r=new En(t,i,n.length),a=new En(e,s,n.length),o=new Zt,c=new Fe,l=new D,u=new D,h=new Ct(Jt.houseRoof),f=Ee.roofTints,m=new Ct;for(let v=0;v<n.length;v++){const{x:p,y:d,z:y,scale:_}=n[v],M=_*(.85+Math.random()*.3),C=_*(.8+Math.random()*.35),b=_*(.85+Math.random()*.3);u.set(p,d,y),l.set(M,C,b);const w=Math.random()*8|0;c.setFromAxisAngle(Hs,w*Math.PI/4),o.compose(u,c,l),r.setMatrixAt(v,o),a.setMatrixAt(v,o);const[U,S,T]=f[Math.random()*f.length|0];m.setRGB(h.r*U,h.g*S,h.b*T),a.setColorAt(v,m),Er(p,d,y,.85*_,1.75*_)}r.instanceMatrix.needsUpdate=!0,a.instanceMatrix.needsUpdate=!0,a.instanceColor.needsUpdate=!0;const g=new fe;return g.add(r,a),g}function oE(){const n=new pe({color:Jt.houseWall,flatShading:!0}),t=new pe({color:Jt.houseRoof,flatShading:!0}),e=new ee(new Yn(1.6,1.2,2.6),n);e.position.y=.6;const i=new ee(new jn(1.4,.7,4),t);i.rotation.y=Math.PI/4,i.position.y=1.55;const s=new ee(new Yn(.75,2.4,.75),n);s.position.set(0,1.2,-1.65);const r=new ee(new jn(.5,1.05,4),t);r.rotation.y=Math.PI/4,r.position.set(0,2.95,-1.65);const a=new fe;return a.add(e,i,s,r),a}function cE(n){const t=oE(),e=new fe;for(const{x:i,y:s,z:r,scale:a}of n){const o=t.clone();o.position.set(i,s,r);const c=a*(.95+Math.random()*.2);o.scale.set(c,c,c),o.rotation.y=Math.random()*Math.PI*2,e.add(o),Er(i,s,r,1.9*c,3.5*c)}return e}function lE(n,t){const e=new D(t.x,60,t.z),i=t.bboxRadius*1.4+50;n.traverse(s=>{(s.isInstancedMesh||s.isMesh)&&(s.frustumCulled=!0,s.boundingSphere=new xi(e,i))})}function uE(){const n=$S(),t=rE(),e=new fe,i={pines:0,laurels:0,shrubs:0,grasses:0,crops:0,rocks:0,cliffs:0,snow:0,wetlands:0};for(const s of _e){const r=n[s.id];if(!r)continue;const a=new fe;a.name=`vegetation:${s.id}`,r.pines.length&&(a.add(jS(r.pines)),i.pines+=r.pines.length),r.laurels.length&&(a.add(ZS(r.laurels)),i.laurels+=r.laurels.length),r.shrubs.length&&(a.add(KS(r.shrubs)),i.shrubs+=r.shrubs.length),r.grasses.length&&(a.add(JS(r.grasses)),i.grasses+=r.grasses.length),r.crops.length&&(a.add(QS(r.crops)),i.crops+=r.crops.length),r.rocks.length&&(a.add(tE(r.rocks)),i.rocks+=r.rocks.length),r.cliffs.length&&(a.add(eE(r.cliffs)),i.cliffs+=r.cliffs.length),r.snow.length&&(a.add(nE(r.snow)),i.snow+=r.snow.length),r.wetlands.length&&(a.add(iE(r.wetlands)),i.wetlands+=r.wetlands.length),lE(a,s),e.add(a)}return t.houses.length&&e.add(aE(t.houses)),t.churches.length&&e.add(cE(t.churches)),console.log(`vegetation: ${i.pines} pines, ${i.laurels} laurels, ${i.shrubs} shrubs, ${i.grasses} grass tufts, ${i.crops} crops, ${i.rocks} rocks, ${i.cliffs} cliffs, ${i.snow} snow, ${i.wetlands} salinas, ${t.houses.length} houses, ${t.churches.length} churches`),e}const hE=be;class $a extends rl{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,i,s){const r=this,a=new Sy(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},i,s)}parse(t){const e=this;function i(N,I){if(N.nodeType!==1)return;const P=M(N);let A=!1,J=null;switch(N.nodeName){case"svg":I=g(N,I);break;case"style":r(N);break;case"g":I=g(N,I);break;case"path":I=g(N,I),N.hasAttribute("d")&&(J=s(N));break;case"rect":I=g(N,I),J=c(N);break;case"polygon":I=g(N,I),J=l(N);break;case"polyline":I=g(N,I),J=u(N);break;case"circle":I=g(N,I),J=h(N);break;case"ellipse":I=g(N,I),J=f(N);break;case"line":I=g(N,I),J=m(N);break;case"defs":A=!0;break;case"use":I=g(N,I);const ut=(N.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),L=N.viewportElement.getElementById(ut);L?i(L,I):console.warn("SVGLoader: 'use node' references non-existent node id: "+ut);break}J&&(I.fill!==void 0&&I.fill!=="none"&&J.color.setStyle(I.fill,hE),b(J,ft),W.push(J),J.userData={node:N,style:I});const lt=N.childNodes;for(let X=0;X<lt.length;X++){const ut=lt[X];A&&ut.nodeName!=="style"&&ut.nodeName!=="defs"||i(ut,I)}P&&(F.pop(),F.length>0?ft.copy(F[F.length-1]):ft.identity())}function s(N){const I=new Ti,P=new dt,A=new dt,J=new dt;let lt=!0,X=!1;const ut=N.getAttribute("d");if(ut===""||ut==="none")return null;const L=ut.match(/[a-df-z][^a-df-z]*/ig);for(let tt=0,B=L.length;tt<B;tt++){const $=L[tt],q=$.charAt(0),ht=$.slice(1).trim();lt===!0&&(X=!0,lt=!1);let O;switch(q){case"M":O=p(ht);for(let x=0,E=O.length;x<E;x+=2)P.x=O[x+0],P.y=O[x+1],A.x=P.x,A.y=P.y,x===0?I.moveTo(P.x,P.y):I.lineTo(P.x,P.y),x===0&&J.copy(P);break;case"H":O=p(ht);for(let x=0,E=O.length;x<E;x++)P.x=O[x],A.x=P.x,A.y=P.y,I.lineTo(P.x,P.y),x===0&&X===!0&&J.copy(P);break;case"V":O=p(ht);for(let x=0,E=O.length;x<E;x++)P.y=O[x],A.x=P.x,A.y=P.y,I.lineTo(P.x,P.y),x===0&&X===!0&&J.copy(P);break;case"L":O=p(ht);for(let x=0,E=O.length;x<E;x+=2)P.x=O[x+0],P.y=O[x+1],A.x=P.x,A.y=P.y,I.lineTo(P.x,P.y),x===0&&X===!0&&J.copy(P);break;case"C":O=p(ht);for(let x=0,E=O.length;x<E;x+=6)I.bezierCurveTo(O[x+0],O[x+1],O[x+2],O[x+3],O[x+4],O[x+5]),A.x=O[x+2],A.y=O[x+3],P.x=O[x+4],P.y=O[x+5],x===0&&X===!0&&J.copy(P);break;case"S":O=p(ht);for(let x=0,E=O.length;x<E;x+=4)I.bezierCurveTo(v(P.x,A.x),v(P.y,A.y),O[x+0],O[x+1],O[x+2],O[x+3]),A.x=O[x+0],A.y=O[x+1],P.x=O[x+2],P.y=O[x+3],x===0&&X===!0&&J.copy(P);break;case"Q":O=p(ht);for(let x=0,E=O.length;x<E;x+=4)I.quadraticCurveTo(O[x+0],O[x+1],O[x+2],O[x+3]),A.x=O[x+0],A.y=O[x+1],P.x=O[x+2],P.y=O[x+3],x===0&&X===!0&&J.copy(P);break;case"T":O=p(ht);for(let x=0,E=O.length;x<E;x+=2){const H=v(P.x,A.x),pt=v(P.y,A.y);I.quadraticCurveTo(H,pt,O[x+0],O[x+1]),A.x=H,A.y=pt,P.x=O[x+0],P.y=O[x+1],x===0&&X===!0&&J.copy(P)}break;case"A":O=p(ht,[3,4],7);for(let x=0,E=O.length;x<E;x+=7){if(O[x+5]==P.x&&O[x+6]==P.y)continue;const H=P.clone();P.x=O[x+5],P.y=O[x+6],A.x=P.x,A.y=P.y,a(I,O[x],O[x+1],O[x+2],O[x+3],O[x+4],H,P),x===0&&X===!0&&J.copy(P)}break;case"m":O=p(ht);for(let x=0,E=O.length;x<E;x+=2)P.x+=O[x+0],P.y+=O[x+1],A.x=P.x,A.y=P.y,x===0?I.moveTo(P.x,P.y):I.lineTo(P.x,P.y),x===0&&J.copy(P);break;case"h":O=p(ht);for(let x=0,E=O.length;x<E;x++)P.x+=O[x],A.x=P.x,A.y=P.y,I.lineTo(P.x,P.y),x===0&&X===!0&&J.copy(P);break;case"v":O=p(ht);for(let x=0,E=O.length;x<E;x++)P.y+=O[x],A.x=P.x,A.y=P.y,I.lineTo(P.x,P.y),x===0&&X===!0&&J.copy(P);break;case"l":O=p(ht);for(let x=0,E=O.length;x<E;x+=2)P.x+=O[x+0],P.y+=O[x+1],A.x=P.x,A.y=P.y,I.lineTo(P.x,P.y),x===0&&X===!0&&J.copy(P);break;case"c":O=p(ht);for(let x=0,E=O.length;x<E;x+=6)I.bezierCurveTo(P.x+O[x+0],P.y+O[x+1],P.x+O[x+2],P.y+O[x+3],P.x+O[x+4],P.y+O[x+5]),A.x=P.x+O[x+2],A.y=P.y+O[x+3],P.x+=O[x+4],P.y+=O[x+5],x===0&&X===!0&&J.copy(P);break;case"s":O=p(ht);for(let x=0,E=O.length;x<E;x+=4)I.bezierCurveTo(v(P.x,A.x),v(P.y,A.y),P.x+O[x+0],P.y+O[x+1],P.x+O[x+2],P.y+O[x+3]),A.x=P.x+O[x+0],A.y=P.y+O[x+1],P.x+=O[x+2],P.y+=O[x+3],x===0&&X===!0&&J.copy(P);break;case"q":O=p(ht);for(let x=0,E=O.length;x<E;x+=4)I.quadraticCurveTo(P.x+O[x+0],P.y+O[x+1],P.x+O[x+2],P.y+O[x+3]),A.x=P.x+O[x+0],A.y=P.y+O[x+1],P.x+=O[x+2],P.y+=O[x+3],x===0&&X===!0&&J.copy(P);break;case"t":O=p(ht);for(let x=0,E=O.length;x<E;x+=2){const H=v(P.x,A.x),pt=v(P.y,A.y);I.quadraticCurveTo(H,pt,P.x+O[x+0],P.y+O[x+1]),A.x=H,A.y=pt,P.x=P.x+O[x+0],P.y=P.y+O[x+1],x===0&&X===!0&&J.copy(P)}break;case"a":O=p(ht,[3,4],7);for(let x=0,E=O.length;x<E;x+=7){if(O[x+5]==0&&O[x+6]==0)continue;const H=P.clone();P.x+=O[x+5],P.y+=O[x+6],A.x=P.x,A.y=P.y,a(I,O[x],O[x+1],O[x+2],O[x+3],O[x+4],H,P),x===0&&X===!0&&J.copy(P)}break;case"Z":case"z":I.currentPath.autoClose=!0,I.currentPath.curves.length>0&&(P.copy(J),I.currentPath.currentPoint.copy(P),lt=!0);break;default:console.warn($)}X=!1}return I}function r(N){if(!(!N.sheet||!N.sheet.cssRules||!N.sheet.cssRules.length))for(let I=0;I<N.sheet.cssRules.length;I++){const P=N.sheet.cssRules[I];if(P.type!==1)continue;const A=P.selectorText.split(/,/gm).filter(Boolean).map(J=>J.trim());for(let J=0;J<A.length;J++){const lt=Object.fromEntries(Object.entries(P.style).filter(([,X])=>X!==""));at[A[J]]=Object.assign(at[A[J]]||{},lt)}}}function a(N,I,P,A,J,lt,X,ut){if(I==0||P==0){N.lineTo(ut.x,ut.y);return}A=A*Math.PI/180,I=Math.abs(I),P=Math.abs(P);const L=(X.x-ut.x)/2,tt=(X.y-ut.y)/2,B=Math.cos(A)*L+Math.sin(A)*tt,$=-Math.sin(A)*L+Math.cos(A)*tt;let q=I*I,ht=P*P;const O=B*B,x=$*$,E=O/q+x/ht;if(E>1){const gt=Math.sqrt(E);I=gt*I,P=gt*P,q=I*I,ht=P*P}const H=q*x+ht*O,pt=(q*ht-H)/H;let mt=Math.sqrt(Math.max(0,pt));J===lt&&(mt=-mt);const ct=mt*I*$/P,Tt=-mt*P*B/I,yt=Math.cos(A)*ct-Math.sin(A)*Tt+(X.x+ut.x)/2,At=Math.sin(A)*ct+Math.cos(A)*Tt+(X.y+ut.y)/2,Lt=o(1,0,(B-ct)/I,($-Tt)/P),Ot=o((B-ct)/I,($-Tt)/P,(-B-ct)/I,(-$-Tt)/P)%(Math.PI*2);N.currentPath.absellipse(yt,At,I,P,Lt,Lt+Ot,lt===0,A)}function o(N,I,P,A){const J=N*P+I*A,lt=Math.sqrt(N*N+I*I)*Math.sqrt(P*P+A*A);let X=Math.acos(Math.max(-1,Math.min(1,J/lt)));return N*A-I*P<0&&(X=-X),X}function c(N){const I=_(N.getAttribute("x")||0),P=_(N.getAttribute("y")||0),A=_(N.getAttribute("rx")||N.getAttribute("ry")||0),J=_(N.getAttribute("ry")||N.getAttribute("rx")||0),lt=_(N.getAttribute("width")),X=_(N.getAttribute("height")),ut=1-.551915024494,L=new Ti;return L.moveTo(I+A,P),L.lineTo(I+lt-A,P),(A!==0||J!==0)&&L.bezierCurveTo(I+lt-A*ut,P,I+lt,P+J*ut,I+lt,P+J),L.lineTo(I+lt,P+X-J),(A!==0||J!==0)&&L.bezierCurveTo(I+lt,P+X-J*ut,I+lt-A*ut,P+X,I+lt-A,P+X),L.lineTo(I+A,P+X),(A!==0||J!==0)&&L.bezierCurveTo(I+A*ut,P+X,I,P+X-J*ut,I,P+X-J),L.lineTo(I,P+J),(A!==0||J!==0)&&L.bezierCurveTo(I,P+J*ut,I+A*ut,P,I+A,P),L}function l(N){function I(lt,X,ut){const L=_(X),tt=_(ut);J===0?A.moveTo(L,tt):A.lineTo(L,tt),J++}const P=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new Ti;let J=0;return N.getAttribute("points").replace(P,I),A.currentPath.autoClose=!0,A}function u(N){function I(lt,X,ut){const L=_(X),tt=_(ut);J===0?A.moveTo(L,tt):A.lineTo(L,tt),J++}const P=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new Ti;let J=0;return N.getAttribute("points").replace(P,I),A.currentPath.autoClose=!1,A}function h(N){const I=_(N.getAttribute("cx")||0),P=_(N.getAttribute("cy")||0),A=_(N.getAttribute("r")||0),J=new Ts;J.absarc(I,P,A,0,Math.PI*2);const lt=new Ti;return lt.subPaths.push(J),lt}function f(N){const I=_(N.getAttribute("cx")||0),P=_(N.getAttribute("cy")||0),A=_(N.getAttribute("rx")||0),J=_(N.getAttribute("ry")||0),lt=new Ts;lt.absellipse(I,P,A,J,0,Math.PI*2);const X=new Ti;return X.subPaths.push(lt),X}function m(N){const I=_(N.getAttribute("x1")||0),P=_(N.getAttribute("y1")||0),A=_(N.getAttribute("x2")||0),J=_(N.getAttribute("y2")||0),lt=new Ti;return lt.moveTo(I,P),lt.lineTo(A,J),lt.currentPath.autoClose=!1,lt}function g(N,I){I=Object.assign({},I);let P={};if(N.hasAttribute("class")){const X=N.getAttribute("class").split(/\s/).filter(Boolean).map(ut=>ut.trim());for(let ut=0;ut<X.length;ut++)P=Object.assign(P,at["."+X[ut]])}N.hasAttribute("id")&&(P=Object.assign(P,at["#"+N.getAttribute("id")]));function A(X,ut,L){L===void 0&&(L=function(B){return B.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),B}),N.hasAttribute(X)&&(I[ut]=L(N.getAttribute(X))),P[X]&&(I[ut]=L(P[X])),N.style&&N.style[X]!==""&&(I[ut]=L(N.style[X]))}function J(X){return Math.max(0,Math.min(1,_(X)))}function lt(X){return Math.max(0,_(X))}return A("fill","fill"),A("fill-opacity","fillOpacity",J),A("fill-rule","fillRule"),A("opacity","opacity",J),A("stroke","stroke"),A("stroke-opacity","strokeOpacity",J),A("stroke-width","strokeWidth",lt),A("stroke-linejoin","strokeLineJoin"),A("stroke-linecap","strokeLineCap"),A("stroke-miterlimit","strokeMiterLimit",lt),A("visibility","visibility"),I}function v(N,I){return N-(I-N)}function p(N,I,P){if(typeof N!="string")throw new TypeError("Invalid input: "+typeof N);const A={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},J=0,lt=1,X=2,ut=3;let L=J,tt=!0,B="",$="";const q=[];function ht(H,pt,mt){const ct=new SyntaxError('Unexpected character "'+H+'" at index '+pt+".");throw ct.partial=mt,ct}function O(){B!==""&&($===""?q.push(Number(B)):q.push(Number(B)*Math.pow(10,Number($)))),B="",$=""}let x;const E=N.length;for(let H=0;H<E;H++){if(x=N[H],Array.isArray(I)&&I.includes(q.length%P)&&A.FLAGS.test(x)){L=lt,B=x,O();continue}if(L===J){if(A.WHITESPACE.test(x))continue;if(A.DIGIT.test(x)||A.SIGN.test(x)){L=lt,B=x;continue}if(A.POINT.test(x)){L=X,B=x;continue}A.COMMA.test(x)&&(tt&&ht(x,H,q),tt=!0)}if(L===lt){if(A.DIGIT.test(x)){B+=x;continue}if(A.POINT.test(x)){B+=x,L=X;continue}if(A.EXP.test(x)){L=ut;continue}A.SIGN.test(x)&&B.length===1&&A.SIGN.test(B[0])&&ht(x,H,q)}if(L===X){if(A.DIGIT.test(x)){B+=x;continue}if(A.EXP.test(x)){L=ut;continue}A.POINT.test(x)&&B[B.length-1]==="."&&ht(x,H,q)}if(L===ut){if(A.DIGIT.test(x)){$+=x;continue}if(A.SIGN.test(x)){if($===""){$+=x;continue}$.length===1&&A.SIGN.test($)&&ht(x,H,q)}}A.WHITESPACE.test(x)?(O(),L=J,tt=!1):A.COMMA.test(x)?(O(),L=J,tt=!0):A.SIGN.test(x)?(O(),L=lt,B=x):A.POINT.test(x)?(O(),L=X,B=x):ht(x,H,q)}return O(),q}const d=["mm","cm","in","pt","pc","px"],y={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function _(N){let I="px";if(typeof N=="string"||N instanceof String)for(let A=0,J=d.length;A<J;A++){const lt=d[A];if(N.endsWith(lt)){I=lt,N=N.substring(0,N.length-lt.length);break}}let P;return I==="px"&&e.defaultUnit!=="px"?P=y.in[e.defaultUnit]/e.defaultDPI:(P=y[I][e.defaultUnit],P<0&&(P=y[I].in*e.defaultDPI)),P*parseFloat(N)}function M(N){if(!(N.hasAttribute("transform")||N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))))return null;const I=C(N);return F.length>0&&I.premultiply(F[F.length-1]),ft.copy(I),F.push(I),I}function C(N){const I=new kt,P=Y;if(N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))){const A=_(N.getAttribute("x")),J=_(N.getAttribute("y"));I.translate(A,J)}if(N.hasAttribute("transform")){const A=N.getAttribute("transform").split(")");for(let J=A.length-1;J>=0;J--){const lt=A[J].trim();if(lt==="")continue;const X=lt.indexOf("("),ut=lt.length;if(X>0&&X<ut){const L=lt.slice(0,X),tt=p(lt.slice(X+1));switch(P.identity(),L){case"translate":if(tt.length>=1){const B=tt[0];let $=0;tt.length>=2&&($=tt[1]),P.translate(B,$)}break;case"rotate":if(tt.length>=1){let B=0,$=0,q=0;B=tt[0]*Math.PI/180,tt.length>=3&&($=tt[1],q=tt[2]),Z.makeTranslation(-$,-q),K.makeRotation(B),G.multiplyMatrices(K,Z),Z.makeTranslation($,q),P.multiplyMatrices(Z,G)}break;case"scale":if(tt.length>=1){const B=tt[0];let $=B;tt.length>=2&&($=tt[1]),P.scale(B,$)}break;case"skewX":tt.length===1&&P.set(1,Math.tan(tt[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":tt.length===1&&P.set(1,0,0,Math.tan(tt[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":tt.length===6&&P.set(tt[0],tt[2],tt[4],tt[1],tt[3],tt[5],0,0,1);break}}I.premultiply(P)}}return I}function b(N,I){function P(X){ot.set(X.x,X.y,1).applyMatrix3(I),X.set(ot.x,ot.y)}function A(X){const ut=X.xRadius,L=X.yRadius,tt=Math.cos(X.aRotation),B=Math.sin(X.aRotation),$=new D(ut*tt,ut*B,0),q=new D(-L*B,L*tt,0),ht=$.applyMatrix3(I),O=q.applyMatrix3(I),x=Y.set(ht.x,O.x,0,ht.y,O.y,0,0,0,1),E=Z.copy(x).invert(),mt=K.copy(E).transpose().multiply(E).elements,ct=V(mt[0],mt[1],mt[4]),Tt=Math.sqrt(ct.rt1),yt=Math.sqrt(ct.rt2);if(X.xRadius=1/Tt,X.yRadius=1/yt,X.aRotation=Math.atan2(ct.sn,ct.cs),!((X.aEndAngle-X.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Lt=Z.set(Tt,0,0,0,yt,0,0,0,1),Ot=K.set(ct.cs,ct.sn,0,-ct.sn,ct.cs,0,0,0,1),gt=Lt.multiply(Ot).multiply(x),jt=Vt=>{const{x:Bt,y:It}=new D(Math.cos(Vt),Math.sin(Vt),0).applyMatrix3(gt);return Math.atan2(It,Bt)};X.aStartAngle=jt(X.aStartAngle),X.aEndAngle=jt(X.aEndAngle),w(I)&&(X.aClockwise=!X.aClockwise)}}function J(X){const ut=S(I),L=T(I);X.xRadius*=ut,X.yRadius*=L;const tt=ut>Number.EPSILON?Math.atan2(I.elements[1],I.elements[0]):Math.atan2(-I.elements[3],I.elements[4]);X.aRotation+=tt,w(I)&&(X.aStartAngle*=-1,X.aEndAngle*=-1,X.aClockwise=!X.aClockwise)}const lt=N.subPaths;for(let X=0,ut=lt.length;X<ut;X++){const tt=lt[X].curves;for(let B=0;B<tt.length;B++){const $=tt[B];$.isLineCurve?(P($.v1),P($.v2)):$.isCubicBezierCurve?(P($.v0),P($.v1),P($.v2),P($.v3)):$.isQuadraticBezierCurve?(P($.v0),P($.v1),P($.v2)):$.isEllipseCurve&&(it.set($.aX,$.aY),P(it),$.aX=it.x,$.aY=it.y,U(I)?A($):J($))}}}function w(N){const I=N.elements;return I[0]*I[4]-I[1]*I[3]<0}function U(N){const I=N.elements,P=I[0]*I[3]+I[1]*I[4];if(P===0)return!1;const A=S(N),J=T(N);return Math.abs(P/(A*J))>Number.EPSILON}function S(N){const I=N.elements;return Math.sqrt(I[0]*I[0]+I[1]*I[1])}function T(N){const I=N.elements;return Math.sqrt(I[3]*I[3]+I[4]*I[4])}function V(N,I,P){let A,J,lt,X,ut;const L=N+P,tt=N-P,B=Math.sqrt(tt*tt+4*I*I);return L>0?(A=.5*(L+B),ut=1/A,J=N*ut*P-I*ut*I):L<0?J=.5*(L-B):(A=.5*B,J=-.5*B),tt>0?lt=tt+B:lt=tt-B,Math.abs(lt)>2*Math.abs(I)?(ut=-2*I/lt,X=1/Math.sqrt(1+ut*ut),lt=ut*X):Math.abs(I)===0?(lt=1,X=0):(ut=-.5*lt/I,lt=1/Math.sqrt(1+ut*ut),X=ut*lt),tt>0&&(ut=lt,lt=-X,X=ut),{rt1:A,rt2:J,cs:lt,sn:X}}const W=[],at={},F=[],Y=new kt,Z=new kt,K=new kt,G=new kt,it=new dt,ot=new D,ft=new kt,vt=new DOMParser().parseFromString(t,"image/svg+xml");return i(vt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:W,xml:vt.documentElement}}static createShapes(t){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:i.ORIGIN,t:0};function r(v,p,d,y){const _=v.x,M=p.x,C=d.x,b=y.x,w=v.y,U=p.y,S=d.y,T=y.y,V=(b-C)*(w-S)-(T-S)*(_-C),W=(M-_)*(w-S)-(U-w)*(_-C),at=(T-S)*(M-_)-(b-C)*(U-w),F=V/at,Y=W/at;if(at===0&&V!==0||F<=0||F>=1||Y<0||Y>1)return null;if(V===0&&at===0){for(let Z=0;Z<2;Z++)if(a(Z===0?d:y,v,p),s.loc==i.ORIGIN){const K=Z===0?d:y;return{x:K.x,y:K.y,t:s.t}}else if(s.loc==i.BETWEEN){const K=+(_+s.t*(M-_)).toPrecision(10),G=+(w+s.t*(U-w)).toPrecision(10);return{x:K,y:G,t:s.t}}return null}else{for(let G=0;G<2;G++)if(a(G===0?d:y,v,p),s.loc==i.ORIGIN){const it=G===0?d:y;return{x:it.x,y:it.y,t:s.t}}const Z=+(_+F*(M-_)).toPrecision(10),K=+(w+F*(U-w)).toPrecision(10);return{x:Z,y:K,t:F}}}function a(v,p,d){const y=d.x-p.x,_=d.y-p.y,M=v.x-p.x,C=v.y-p.y,b=y*C-M*_;if(v.x===p.x&&v.y===p.y){s.loc=i.ORIGIN,s.t=0;return}if(v.x===d.x&&v.y===d.y){s.loc=i.DESTINATION,s.t=1;return}if(b<-Number.EPSILON){s.loc=i.LEFT;return}if(b>Number.EPSILON){s.loc=i.RIGHT;return}if(y*M<0||_*C<0){s.loc=i.BEHIND;return}if(Math.sqrt(y*y+_*_)<Math.sqrt(M*M+C*C)){s.loc=i.BEYOND;return}let w;y!==0?w=M/y:w=C/_,s.loc=i.BETWEEN,s.t=w}function o(v,p){const d=[],y=[];for(let _=1;_<v.length;_++){const M=v[_-1],C=v[_];for(let b=1;b<p.length;b++){const w=p[b-1],U=p[b],S=r(M,C,w,U);S!==null&&d.find(T=>T.t<=S.t+Number.EPSILON&&T.t>=S.t-Number.EPSILON)===void 0&&(d.push(S),y.push(new dt(S.x,S.y)))}}return y}function c(v,p,d){const y=new dt;p.getCenter(y);const _=[];return d.forEach(M=>{M.boundingBox.containsPoint(y)&&o(v,M.points).forEach(b=>{_.push({identifier:M.identifier,isCW:M.isCW,point:b})})}),_.sort((M,C)=>M.point.x-C.point.x),_}function l(v,p,d,y,_){(_==null||_==="")&&(_="nonzero");const M=new dt;v.boundingBox.getCenter(M);const C=[new dt(d,M.y),new dt(y,M.y)],b=c(C,v.boundingBox,p);b.sort((W,at)=>W.point.x-at.point.x);const w=[],U=[];b.forEach(W=>{W.identifier===v.identifier?w.push(W):U.push(W)});const S=w[0].point.x,T=[];let V=0;for(;V<U.length&&U[V].point.x<S;)T.length>0&&T[T.length-1]===U[V].identifier?T.pop():T.push(U[V].identifier),V++;if(T.push(v.identifier),_==="evenodd"){const W=T.length%2===0,at=T[T.length-2];return{identifier:v.identifier,isHole:W,for:at}}else if(_==="nonzero"){let W=!0,at=null,F=null;for(let Y=0;Y<T.length;Y++){const Z=T[Y];W?(F=p[Z].isCW,W=!1,at=Z):F!==p[Z].isCW&&(F=p[Z].isCW,W=!0)}return{identifier:v.identifier,isHole:W,for:at}}else console.warn('fill-rule: "'+_+'" is currently not implemented.')}let u=999999999,h=-999999999,f=t.subPaths.map(v=>{const p=v.getPoints();let d=-999999999,y=999999999,_=-999999999,M=999999999;for(let C=0;C<p.length;C++){const b=p[C];b.y>d&&(d=b.y),b.y<y&&(y=b.y),b.x>_&&(_=b.x),b.x<M&&(M=b.x)}return h<=_&&(h=_+1),u>=M&&(u=M-1),{curves:v.curves,points:p,isCW:Ln.isClockWise(p),identifier:-1,boundingBox:new wy(new dt(M,y),new dt(_,d))}});f=f.filter(v=>v.points.length>1);for(let v=0;v<f.length;v++)f[v].identifier=v;const m=f.map(v=>l(v,f,u,h,t.userData?t.userData.style.fillRule:void 0)),g=[];return f.forEach(v=>{if(!m[v.identifier].isHole){const d=new zi;d.curves=v.curves,m.filter(_=>_.isHole&&_.for===v.identifier).forEach(_=>{const M=f[_.identifier],C=new Ts;C.curves=M.curves,d.holes.push(C)}),g.push(d)}}),g}static getStrokeStyle(t,e,i,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",i=i!==void 0?i:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:i,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,i,s){const r=[],a=[],o=[];if($a.pointsToStrokeWithBuffers(t,e,i,s,r,a,o)===0)return null;const c=new ve;return c.setAttribute("position",new Kt(r,3)),c.setAttribute("normal",new Kt(a,3)),c.setAttribute("uv",new Kt(o,2)),c}static pointsToStrokeWithBuffers(t,e,i,s,r,a,o,c){const l=new dt,u=new dt,h=new dt,f=new dt,m=new dt,g=new dt,v=new dt,p=new dt,d=new dt,y=new dt,_=new dt,M=new dt,C=new dt,b=new dt,w=new dt,U=new dt,S=new dt;i=i!==void 0?i:12,s=s!==void 0?s:.001,c=c!==void 0?c:0,t=tt(t);const T=t.length;if(T<2)return 0;const V=t[0].equals(t[T-1]);let W,at=t[0],F;const Y=e.strokeWidth/2,Z=1/(T-1);let K=0,G,it,ot,ft,vt=!1,rt=0,N=c*3,I=c*2;P(t[0],t[1],l).multiplyScalar(Y),p.copy(t[0]).sub(l),d.copy(t[0]).add(l),y.copy(p),_.copy(d);for(let B=1;B<T;B++){W=t[B],B===T-1?V?F=t[1]:F=void 0:F=t[B+1];const $=l;if(P(at,W,$),h.copy($).multiplyScalar(Y),M.copy(W).sub(h),C.copy(W).add(h),G=K+Z,it=!1,F!==void 0){P(W,F,u),h.copy(u).multiplyScalar(Y),b.copy(W).sub(h),w.copy(W).add(h),ot=!0,h.subVectors(F,at),$.dot(h)<0&&(ot=!1),B===1&&(vt=ot),h.subVectors(F,W),h.normalize();const q=Math.abs($.dot(h));if(q>Number.EPSILON){const ht=Y/q;h.multiplyScalar(-ht),f.subVectors(W,at),m.copy(f).setLength(ht).add(h),U.copy(m).negate();const O=m.length(),x=f.length();f.divideScalar(x),g.subVectors(F,W);const E=g.length();switch(g.divideScalar(E),f.dot(U)<x&&g.dot(U)<E&&(it=!0),S.copy(m).add(W),U.add(W),ft=!1,it?ot?(w.copy(U),C.copy(U)):(b.copy(U),M.copy(U)):lt(),e.strokeLineJoin){case"bevel":X(ot,it,G);break;case"round":ut(ot,it),ot?J(W,M,b,G,0):J(W,w,C,G,1);break;case"miter":case"miter-clip":default:const H=Y*e.strokeMiterLimit/O;if(H<1)if(e.strokeLineJoin!=="miter-clip"){X(ot,it,G);break}else ut(ot,it),ot?(g.subVectors(S,M).multiplyScalar(H).add(M),v.subVectors(S,b).multiplyScalar(H).add(b),A(M,G,0),A(g,G,0),A(W,G,.5),A(W,G,.5),A(g,G,0),A(v,G,0),A(W,G,.5),A(v,G,0),A(b,G,0)):(g.subVectors(S,C).multiplyScalar(H).add(C),v.subVectors(S,w).multiplyScalar(H).add(w),A(C,G,1),A(g,G,1),A(W,G,.5),A(W,G,.5),A(g,G,1),A(v,G,1),A(W,G,.5),A(v,G,1),A(w,G,1));else it?(ot?(A(d,K,1),A(p,K,0),A(S,G,0),A(d,K,1),A(S,G,0),A(U,G,1)):(A(d,K,1),A(p,K,0),A(S,G,1),A(p,K,0),A(U,G,0),A(S,G,1)),ot?b.copy(S):w.copy(S)):ot?(A(M,G,0),A(S,G,0),A(W,G,.5),A(W,G,.5),A(S,G,0),A(b,G,0)):(A(C,G,1),A(S,G,1),A(W,G,.5),A(W,G,.5),A(S,G,1),A(w,G,1)),ft=!0;break}}else lt()}else lt();!V&&B===T-1&&L(t[0],y,_,ot,!0,K),K=G,at=W,p.copy(b),d.copy(w)}if(!V)L(W,M,C,ot,!1,G);else if(it&&r){let B=S,$=U;vt!==ot&&(B=U,$=S),ot?(ft||vt)&&($.toArray(r,0*3),$.toArray(r,3*3),ft&&B.toArray(r,1*3)):(ft||!vt)&&($.toArray(r,1*3),$.toArray(r,3*3),ft&&B.toArray(r,0*3))}return rt;function P(B,$,q){return q.subVectors($,B),q.set(-q.y,q.x).normalize()}function A(B,$,q){r&&(r[N]=B.x,r[N+1]=B.y,r[N+2]=0,a&&(a[N]=0,a[N+1]=0,a[N+2]=1),N+=3,o&&(o[I]=$,o[I+1]=q,I+=2)),rt+=3}function J(B,$,q,ht,O){l.copy($).sub(B).normalize(),u.copy(q).sub(B).normalize();let x=Math.PI;const E=l.dot(u);Math.abs(E)<1&&(x=Math.abs(Math.acos(E))),x/=i,h.copy($);for(let H=0,pt=i-1;H<pt;H++)f.copy(h).rotateAround(B,x),A(h,ht,O),A(f,ht,O),A(B,ht,.5),h.copy(f);A(f,ht,O),A(q,ht,O),A(B,ht,.5)}function lt(){A(d,K,1),A(p,K,0),A(M,G,0),A(d,K,1),A(M,G,1),A(C,G,0)}function X(B,$,q){$?B?(A(d,K,1),A(p,K,0),A(M,G,0),A(d,K,1),A(M,G,0),A(U,G,1),A(M,q,0),A(b,q,0),A(U,q,.5)):(A(d,K,1),A(p,K,0),A(C,G,1),A(p,K,0),A(U,G,0),A(C,G,1),A(C,q,1),A(U,q,0),A(w,q,1)):B?(A(M,q,0),A(b,q,0),A(W,q,.5)):(A(C,q,1),A(w,q,0),A(W,q,.5))}function ut(B,$){$&&(B?(A(d,K,1),A(p,K,0),A(M,G,0),A(d,K,1),A(M,G,0),A(U,G,1),A(M,K,0),A(W,G,.5),A(U,G,1),A(W,G,.5),A(b,K,0),A(U,G,1)):(A(d,K,1),A(p,K,0),A(C,G,1),A(p,K,0),A(U,G,0),A(C,G,1),A(C,K,1),A(U,G,0),A(W,G,.5),A(W,G,.5),A(U,G,0),A(w,K,1)))}function L(B,$,q,ht,O,x){switch(e.strokeLineCap){case"round":O?J(B,q,$,x,.5):J(B,$,q,x,.5);break;case"square":if(O)l.subVectors($,B),u.set(l.y,-l.x),h.addVectors(l,u).add(B),f.subVectors(u,l).add(B),ht?(h.toArray(r,1*3),f.toArray(r,0*3),f.toArray(r,3*3)):(h.toArray(r,1*3),h.toArray(r,3*3),f.toArray(r,0*3));else{l.subVectors(q,B),u.set(l.y,-l.x),h.addVectors(l,u).add(B),f.subVectors(u,l).add(B);const E=r.length;ht?(h.toArray(r,E-1*3),f.toArray(r,E-2*3),f.toArray(r,E-4*3)):(f.toArray(r,E-2*3),h.toArray(r,E-1*3),f.toArray(r,E-4*3))}break}}function tt(B){let $=!1;for(let ht=1,O=B.length-1;ht<O;ht++)if(B[ht].distanceTo(B[ht+1])<s){$=!0;break}if(!$)return B;const q=[];q.push(B[0]);for(let ht=1,O=B.length-1;ht<O;ht++)B[ht].distanceTo(B[ht+1])>=s&&q.push(B[ht]);return q.push(B[B.length-1]),q}}}const dE={[Q.PEAK]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-390Zm-132-53 55 37 77-39 77 39 53-35-40-79H386l-38 77ZM209-160h541L646-369l-83 55-83-41-83 41-85-56-103 210ZM80-80l234-475q10-20 29.5-32.5T386-600h54v-280h280l-40 80 40 80H520v120h50q23 0 42 12t30 32L880-80H80Z"/></svg>',[Q.CITY]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>',[Q.LANDSCAPE]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m40-240 240-320 180 240h300L560-586 460-454l-50-66 150-200 360 480H40Zm521-80Zm-361 0h160l-80-107-80 107Zm0 0h160-160Z"/></svg>',[Q.BEACH]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 530-374l56-56 254 254-56 56Zm-546-28q-60-60-89-135t-29-153q0-78 29-152t89-134q60-60 134.5-89.5T525-841q78 0 152.5 29.5T812-722L238-148Zm8-122 54-54q-16-21-30.5-43T243-411q-12-22-21-44t-16-43q-11 59-1.5 118T246-270Zm112-110 222-224q-43-33-86.5-53.5t-81.5-28q-38-7.5-68.5-2.5T296-666q-17 18-22 48.5t2.5 69q7.5 38.5 28 81.5t53.5 87Zm278-280 56-54q-53-32-112-42t-118 2q22 7 44 16t44 20.5q22 11.5 43.5 26T636-660Z"/></svg>'},Bf=[];function fE(){return new sl(ce.ring.majorRadius,ce.ring.tubeRadius,10,48)}const zf={};function pE(){const n=new $a,t=ce.symbol.size/960,e=ce.symbol.extrudeDepth/t;for(const[i,s]of Object.entries(dE)){const r=n.parse(s),a=[];for(const c of r.paths)a.push(...$a.createShapes(c));const o=new nl(a,{depth:e,bevelEnabled:!1});o.scale(1,-1,1),o.center(),o.scale(t,t,t),zf[i]=o}}function mE(){pE();const n=fE(),t=new fe;for(const e of ai){const i=ce.colorsByType[e.type],s=new qn({color:i.ring,transparent:!0,opacity:ce.ring.opacity,depthWrite:!1}),r=new ee(n,s),a=new pe({color:i.symbol,transparent:!0,opacity:.95,flatShading:!0,side:qe}),o=new ee(zf[e.type],a),c=new fe;c.add(r),c.add(o);const l=Sn(e.x,e.z);c.position.set(e.x,l+ce.ring.hoverHeight,e.z),t.add(c),Bf.push({poi:e,ring:r,ringMat:s,symbol:o,symbolMat:a,poiGroup:c,wasInsideZone:!1,frozen:!1})}return t}function gE(n,t){const e=t.x-n.x,i=t.y-n.y,s=t.z-n.z;return e*e+i*i+s*s<=ce.activation.radius*ce.activation.radius}function _E(){const n=rd(Bc()),t=_t.oneShotTier|0;return n>t?(_t.oneShotTier=n,n):0}function xE(n){const t=ce.rewardsByType[n.type];if(_t.testMode){Ih(n.name,t.punkte,t.gofios,0);return}const e=!!_t.exploredPOIs[n.id];ja(t.punkte);let i=0,s=0;e||(_t.exploredPOIs[n.id]=!0,_t.gofiosByIsland[n.island]=(_t.gofiosByIsland[n.island]|0)+t.gofios,i=t.gofios,s=_E()),Ih(n.name,t.punkte,i,s),In()}function vE(n){const t=!_t.testMode&&!!_t.exploredPOIs[n.poi.id];if(t)n.ringMat.opacity=ce.ring.opacityActivated,n.ringMat.color.setHex(ce.ring.colorActivated),n.symbolMat.opacity=.55,n.symbolMat.color.setHex(ce.symbol.colorActivated);else{const e=ce.colorsByType[n.poi.type];n.ringMat.opacity=ce.ring.opacity,n.ringMat.color.setHex(e.ring),n.symbolMat.opacity=.95,n.symbolMat.color.setHex(e.symbol)}n.frozen=t}function yE(n,t){const e=t.position,i=ip(e);i!==_t.currentIsland&&(_t.currentIsland=i,In());let s=null,r=ce.hoverLabelRadius*ce.hoverLabelRadius;for(const a of Bf){vE(a);const o=e.x-a.poiGroup.position.x,c=e.z-a.poiGroup.position.z;a.poiGroup.rotation.y=Math.atan2(o,c),a.frozen||(a.symbol.rotation.y+=ce.symbol.rotRate*n);const l=gE(a.poiGroup.position,e);if(l&&!a.wasInsideZone&&xE(a.poi),a.wasInsideZone=l,_t.exploredPOIs[a.poi.id]){const u=e.x-a.poi.x,h=e.z-a.poi.z,f=u*u+h*h;f<r&&(r=f,s=a.poi)}}s?sS(s.name):rS()}const kf=document.getElementById("island-compass"),Kh=kf?.querySelector(".compass-track"),Jh=Math.PI/2,ME=12,Hf=new Map,oc=new D;function SE(){if(Kh)for(const n of _e){const t=document.createElement("div");t.className="compass-marker"+(n.playable?"":" unreachable"),t.dataset.island=n.id,t.innerHTML=`
      <span class="compass-name">${n.name}</span>
      <span class="compass-dist"></span>
    `,Kh.appendChild(t),Hf.set(n.id,{el:t,dist:t.querySelector(".compass-dist"),lastLeft:null,lastDist:null,lastHidden:null})}}function EE(n){return oc.set(0,0,-1).applyQuaternion(n.quaternion),Math.atan2(oc.x,-oc.z)}function bE(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const ps=[];function TE(n){if(!kf)return;const t=EE(n),e=Ft.heightmap.metersPerUnit;ps.length=0;for(const s of _e){const r=Hf.get(s.id);if(!r)continue;const a=s.x-n.position.x,o=s.z-n.position.z,l=Math.sqrt(a*a+o*o)*e/1e3,u=Math.atan2(a,-o),h=bE(u-t);if(Math.abs(h)>Jh||l<.5){ps.push({m:r,distKm:l,pct:0,show:!1});continue}const f=(h/Jh*.5+.5)*100;ps.push({m:r,distKm:l,pct:f,show:!0})}ps.sort((s,r)=>s.distKm-r.distKm);const i=[];for(const s of ps){if(!s.show)continue;let r=!1;for(const a of i)if(Math.abs(a-s.pct)<ME){r=!0;break}if(r){s.show=!1;continue}i.push(s.pct)}for(const s of ps){const r=s.m,a=!s.show;if(a!==r.lastHidden&&(r.el.classList.toggle("hidden",a),r.lastHidden=a),a)continue;const o=s.pct.toFixed(1)+"%";o!==r.lastLeft&&(r.el.style.left=o,r.lastLeft=o);const c=s.distKm<10?s.distKm.toFixed(1)+" km":Math.round(s.distKm)+" km";c!==r.lastDist&&(r.dist.textContent=c,r.lastDist=c)}}const AE=[{id:"speed-tape",icon:"speed",range:120,pxPerUnit:4,tickStep:5,majorStep:20},{id:"alt-tape",icon:"height",range:500,pxPerUnit:1.6,tickStep:25,majorStep:100}],Ic=[],Qh=document.getElementById("lift-indicator");let td=null;function wE(){for(const n of AE){const t=document.getElementById(n.id);if(!t)continue;t.innerHTML="";const e=document.createElement("div");e.className="edge-tape-eyebrow";const i=document.createElement("span");i.className="material-symbols-outlined",i.textContent=n.icon,e.appendChild(i),t.appendChild(e);const s=document.createElement("div");s.className="edge-tape-window",t.appendChild(s);const r=document.createElement("div");r.className="edge-tape-track",r.style.height=n.range*n.pxPerUnit+"px",s.appendChild(r);for(let c=0;c<=n.range;c+=n.tickStep){const l=document.createElement("div"),u=c%n.majorStep===0;if(l.className="edge-tape-tick"+(u?" major":""),l.style.top=(n.range-c)*n.pxPerUnit+"px",u){const h=document.createElement("span");h.className="edge-tape-label",h.textContent=c,l.appendChild(h)}r.appendChild(l)}const a=document.createElement("div");a.className="edge-tape-center-line",s.appendChild(a);const o=document.createElement("div");o.className="edge-tape-current",o.textContent="0",s.appendChild(o),Ic.push({cfg:n,win:s,track:r,current:o,lastDisplayed:NaN})}}function ed(n,t){const e=Math.max(0,Math.min(n.cfg.range,t)),i=n.win.clientHeight;if(i===0)return;const s=i/2-(n.cfg.range-e)*n.cfg.pxPerUnit;n.track.style.transform=`translateY(${s}px)`;const r=Math.round(t);r!==n.lastDisplayed&&(n.current.textContent=r,n.lastDisplayed=r)}function CE(n){if(!n||Ic.length===0)return;const t=Sn(n.position.x,n.position.z),e=n.position.y-Math.max(t,Ft.waterLevel);for(const i of Ic)i.cfg.id==="speed-tape"?ed(i,z.speed):i.cfg.id==="alt-tape"&&ed(i,e);if(Qh){const i=!!z.inThermal;i!==td&&(Qh.classList.toggle("is-active",i),td=i)}}const Gf=[];(function(){for(const t of[-.95,.95]){const e=new Float32Array(ri.verts*3),i=new Float32Array(ri.verts*3);for(let o=0;o<ri.verts;o++){const c=o/(ri.verts-1);e[o*3]=t,e[o*3+1]=-.05,e[o*3+2]=.42+c*ri.maxLen;const l=1-c;i[o*3]=l,i[o*3+1]=l,i[o*3+2]=l}const s=new ve;s.setAttribute("position",new Ne(e,3)),s.setAttribute("color",new Ne(i,3));const r=new Qa({vertexColors:!0,transparent:!0,opacity:0,blending:Pa,depthWrite:!1}),a=new qd(s,r);xt.add(a),Gf.push(a)}})();function RE(){const n=Me.stallSpeed+3,t=Me.maxSpeed*.7,e=Gi.clamp((z.speed-n)/(t-n),0,1),i=ri.maxLen*(.3+e*.7);for(const s of Gf){const r=s.geometry.attributes.position.array;for(let a=0;a<ri.verts;a++){const o=a/(ri.verts-1);r[a*3+2]=.42+o*i}s.geometry.attributes.position.needsUpdate=!0,s.material.opacity=e*.95}}const PE=.9,Vf=.55,LE=35,IE=1.6,Wf=new to(PE,28);Wf.rotateX(-Math.PI/2);const Xf=new qn({color:0,transparent:!0,opacity:Vf,depthWrite:!1}),Ii=new ee(Wf,Xf);Ii.renderOrder=1;function DE(){const n=Sn(xt.position.x,xt.position.z),t=Math.max(n,Ft.waterLevel),e=Math.max(0,xt.position.y-t);Ii.position.x=xt.position.x,Ii.position.z=xt.position.z,Ii.position.y=t+.04;const i=Math.min(1,e/LE),s=Math.min(1,e/IE);Xf.opacity=Vf*s*(1-.85*i);const r=1+i*.4;Ii.scale.set(r,1,r),Ii.visible=xt.position.y>t-.5}gp();dp();cp();Mr();_t.landedRunways[_a]||(_t.landedRunways[_a]=!0,_t.discoveredRunways[_a]=!0);await Promise.all([TM(),vM()]);xe.forEach(n=>{n.elevation=Wn(n.x,n.z)});Ue.add(CM());Ue.add(RM());Ue.add(uE());Ue.add(Oy());Ue.add(UM());Ue.add(mE());Ue.add(Ii);Ue.add(xt);SE();qM();wE();const NE=document.getElementById("restart-btn"),Dc=document.getElementById("crash");NE.addEventListener("click",()=>br());window.addEventListener("keydown",n=>{n.code==="Space"&&Dc.classList.contains("visible")&&(n.preventDefault(),br())});function qf(n){Dc.classList.remove("visible"),ff(n,{onClose:()=>Dc.classList.add("visible")})}document.getElementById("crash-hangar-btn").addEventListener("click",()=>qf("hangar"));document.getElementById("crash-shop-btn").addEventListener("click",()=>qf("shop"));br();ro();requestAnimationFrame(()=>{const n=document.getElementById("loading-screen");n&&(n.classList.add("hidden"),setTimeout(()=>n.remove(),600))});let nd=performance.now();function Yf(n){requestAnimationFrame(Yf);const t=Math.min(.05,(n-nd)/1e3);nd=n,PS(t),Ry(t),zy(t),Vy(t),RE(),DE(),By(n/1e3),FM(t),yE(t,xt),TE(xt),KM(xt),CE(xt),fS(t),aS(),ks.render(Ue,Cn)}requestAnimationFrame(Yf);
