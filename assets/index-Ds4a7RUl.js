(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Kt={sky:12964828,water:3043220,shore:13023631,rock:9077368,snow:15395556,paper:16052712,trunk:7032634,ink:2765624,runway:5591628,pineCanopy:4151864,laurelCanopy:3032880,shrubBody:8160594,grassGround:10858597,cropGround:12100700,urbanGround:10392202,bareGround:10325622,houseWall:15590351,houseRoof:10246468},Jt={size:16e3,segments:800,waterLevel:.1,fogStart:600,fogEnd:3e3,heightmap:{url:"/teide/heightmaps/canaries.png",bbox:{latN:29.5,latS:27.4,lonW:-18.4,lonE:-13.3},center:{lat:28.3,lon:-16.55},metersPerUnit:40,elevRange:[0,4e3]}},Vh="TFN",xo=Object.freeze({startSpeed:22,minSpeed:2,maxSpeed:52,stallSpeed:7,pitchRate:.7,maxClimbPitch:.35,rollRate:1.8,turnFactor:1,speedFromPitch:22,drag:.7,sinkRate:.5,stallSink:9,stallPitchRate:1.9,stallAuthority:.25}),Yr=Object.freeze({startSpeed:22,minSpeed:2,maxSpeed:38,stallSpeed:9,pitchRate:.7,maxClimbPitch:.35,rollRate:1.8,turnFactor:1,speedFromPitch:12,drag:1.2,sinkRate:.5,stallSink:9,stallPitchRate:1.9,stallAuthority:.25}),fe={...Yr},vo=Object.freeze({takeoffSpeed:50,liftoffFraction:.65,linearShare:.15,pitchUpAtLiftoff:.16}),jr=Object.freeze({takeoffSpeed:32,liftoffFraction:.85,linearShare:.45,pitchUpAtLiftoff:.16}),Wn={...jr},Ti={drag:{kind:"stat",stat:"drag",label:"Aerodynamik",description:"Glättere Faltung — weniger Luftwiderstand, längeres Gleiten.",levels:[1.2,1.05,.9,.78,.7],costs:[0,600,1500,3200,6500]},maxSpeed:{kind:"stat",stat:"maxSpeed",label:"Spitzentempo",description:"Erhöht die maximale Fluggeschwindigkeit im Cruise.",levels:[38,42,46,49,52],costs:[0,800,2e3,4500,9e3]},speedFromPitch:{kind:"stat",stat:"speedFromPitch",label:"Sturzflug",description:"Mehr Beschleunigung im Sturzflug — Höhe wird zu Tempo.",levels:[12,15,18,20,22],costs:[0,500,1300,2800,5500]},stallSpeed:{kind:"stat",stat:"stallSpeed",label:"Stabilität",description:"Tiefere Strömungsabriss-Schwelle — verzeiht langsames Fliegen.",levels:[9,8.5,8,7.5,7],costs:[0,700,1700,3600,7e3]},takeoffSpeed:{kind:"stat",stat:"takeoffSpeed",label:"Startbahn",description:"Schnellere Beschleunigung beim Start — weniger Roll-Strecke.",levels:[32,37,42,46,50],costs:[0,600,1500,3200,6500]},brake:{kind:"unlock",label:"Luftbremse",description:"Schaltet die Bremsklappen frei (Leertaste im Flug).",levels:[!1,!0],costs:[0,2500]}},yo={obsidianPerPunkte:100},Ja={force:9,deployTau:.07,maxAngle:1.35},ca={triggerDist:85,triggerHeight:40,deployTau:.35},Mi={brakeForce:14,landingSpeed:2.5,headingTolerance:.45,rollingHeight:1.8,landingBonus:500},_u={duration:3,startHeight:60},xu={toastDuration:1.4,tweenDuration:2},Je={columnColor:16777215,columnOpacity:.1,columnTop:95,maxAltitude:95,liftAtCenter:30,particleColor:16777215,particleOpacity:.55,particleSize:1.7,particleDensity:.05,riseSpeed:14},He={distance:6.5,height:2.6,lookAhead:3.5,posTau:.12,yawTau:.1,pitchTau:.55,runwayDistance:3,runwayHeight:.4,runwayLookAhead:0},Vn={verts:8,maxLen:2.8},Re={grey:{color:10132122,tankDuration:1,speedBonus:8,accelRate:35,rechargeTime:20},oneShot:{tiers:[{name:"No Booster",color:0,tankDuration:0,speedBonus:0,accelRate:0},{name:"Booster Level 1",color:5086950,tankDuration:1.2,speedBonus:14,accelRate:45},{name:"Booster Level 2",color:15778888,tankDuration:1.6,speedBonus:20,accelRate:55},{name:"Booster Level 3",color:14702666,tankDuration:2,speedBonus:28,accelRate:70},{name:"Booster Level MAX",color:10905053,tankDuration:2.5,speedBonus:38,accelRate:85}]},refillDuration:1.6,camPushback:2.5,camPushbackTau:.15,exhaust:{offsetX:.3,offsetY:.04,offsetZ:.45,length:1.8,radiusNarrow:.05,radiusWide:.15,intensityTau:.06}},Ne={sampleCount:15e5,treeDensity:1,shrubDensity:.7,grassDensity:.55,cropDensity:.55,bareDensity:.45,snowDensity:.4,wetlandDensity:.5,rockZoneLowMax:2.5,rockZoneHighMin:37.5,laurelMaxAltitude:1500/40,treeScale:.75,urban:{minClusterPixels:3,churchClusterPixels:8,housesPerPixel:.55,housesMin:2,housesMax:30,houseMinSpacing:2.4,pixelJitter:5.5,clusterScaleMin:.9,clusterScaleMax:1.75},grassTints:[[1.05,1.02,.85],[.85,.95,.7],[1,1,1],[.7,.85,.55],[1.1,1.05,.75],[.95,.9,.8]],rockTintsLow:[[1.2,1.18,1.1],[1.05,.95,.78],[.95,.9,.8],[1.1,1.05,.95],[1.15,1,.82]],rockTintsMid:[[.55,.55,.6],[.45,.45,.5],[.7,.68,.62],[.85,.78,.65],[.5,.52,.55],[.65,.6,.55]],rockTintsHigh:[[1.15,.95,.8],[1.05,.9,.75],[.95,.85,.75],[1.2,1,.85],[.85,.65,.55]],roofTints:[[1,1,1],[.88,.86,.88],[.62,.58,.68],[1.1,.95,.85],[.95,.88,.78]]},oe={ring:{majorRadius:2,tubeRadius:.12,hoverHeight:8,opacity:.85,opacityActivated:.3,colorActivated:7235682},symbol:{size:1.4,extrudeDepth:.22,rotRate:.7,colorActivated:10132122},activation:{radius:2},colorsByType:{peak:{ring:7235682,symbol:9077368},city:{ring:12155486,symbol:15590351},landscape:{ring:5139274,symbol:9283182},beach:{ring:5212840,symbol:15129016}},rewardsByType:{peak:{punkte:800,gofios:5},city:{punkte:400,gofios:1},landscape:{punkte:500,gofios:2},beach:{punkte:400,gofios:1}},tierThresholds:[0,5,25,55,80],hoverLabelRadius:80,activationToast:{duration:3}},ne={INTRO:"INTRO",PRELAUNCH:"PRELAUNCH",TAKEOFF_ROLL:"TAKEOFF_ROLL",FLYING:"FLYING",LANDING_ROLL:"LANDING_ROLL",LANDED:"LANDED",CRASHED:"CRASHED"},G={speed:fe.startSpeed,alive:!0,inThermal:!1,brakeAmount:0,gearAmount:0,flightState:ne.PRELAUNCH,currentRunway:null,takeoffTime:0,postLiftCooldown:0,landedToastTimer:0,cinematicT:0,cinematicFromPos:null,cinematicToPos:null,cinematicFromQuat:null,cinematicToQuat:null,introT:0,introStartCamPos:null,greyActive:!1,oneShotActive:!1,prevOneShot:!1,boostFuelGrey:1,boostFuelOneshot:0,refillT:1,refillStartGrey:1,refillStartOneshot:0,flightPunkte:0,boosterOverride:null},St={punkte:0,gofiosByIsland:{tenerife:0,gomera:0,palma:0,gc:0,hierro:0,fuerte:0,lanza:0,graciosa:0},obsidian:0,landings:0,bestFlightPunkte:0,upgrades:{drag:0,maxSpeed:0,speedFromPitch:0,stallSpeed:0,takeoffSpeed:0,brake:0},oneShotTierByIsland:{tenerife:0,gomera:0,palma:0,gc:0,hierro:0,fuerte:0,lanza:0,graciosa:0},exploredPOIs:{},checkpointRunwayId:null,introPlayed:!1,currentIsland:"tenerife",testMode:!1};function $r(n){St.punkte+=n,G.flightPunkte+=n}function Wh(){G.speed=fe.startSpeed,G.alive=!0,G.inThermal=!1,G.brakeAmount=0,G.gearAmount=0,G.flightState=ne.PRELAUNCH,G.currentRunway=null,G.takeoffTime=0,G.postLiftCooldown=0,G.landedToastTimer=0,G.cinematicT=0,G.cinematicFromPos=null,G.cinematicToPos=null,G.cinematicFromQuat=null,G.cinematicToQuat=null,G.introT=0,G.introStartCamPos=null,G.greyActive=!1,G.oneShotActive=!1,G.prevOneShot=!1}function Xh(n){return n in Yr?fe:n in jr?Wn:null}function Gs(){if(St.testMode){Object.assign(fe,xo),Object.assign(Wn,vo);return}Object.assign(fe,Yr),Object.assign(Wn,jr);for(const[n,t]of Object.entries(Ti)){if(t.kind!=="stat")continue;const e=St.upgrades?.[n]|0,i=Math.max(0,Math.min(t.levels.length-1,e)),s=Xh(t.stat);s&&(s[t.stat]=t.levels[i])}}function Si(n=St.currentIsland){return St.testMode?G.boosterOverride!=null?G.boosterOverride:4:St.oneShotTierByIsland?.[n]|0}function qh(){return St.testMode?!0:!!St.upgrades?.brake}function Yh(n){for(const[t,e]of Object.entries(Ti)){if(e.kind!=="stat"||e.stat!==n)continue;const i=St.upgrades?.[t]|0,s=Math.max(0,Math.min(e.levels.length-1,i));return e.levels[s]}return xo[n]??vo[n]}function jh(){const n=oe.tierThresholds;for(const t of Object.keys(St.gofiosByIsland)){const e=St.gofiosByIsland[t]|0;let i=0;for(let r=n.length-1;r>=0;r--)if(e>=n[r]){i=r;break}(St.oneShotTierByIsland[t]|0)>i&&(St.oneShotTierByIsland[t]=i)}}const Q={PEAK:"peak",CITY:"city",LANDSCAPE:"landscape",BEACH:"beach"};function vu(n,t){const{center:e,metersPerUnit:i}=Jt.heightmap,s=(t-e.lon)*111320*Math.cos(e.lat*Math.PI/180),r=(n-e.lat)*111320;return{x:s/i,z:-r/i}}const Qn=[{id:"tenerife",name:"Tenerife",lat:28.3,lon:-16.55,bboxRadius:1100,playable:!0},{id:"gomera",name:"La Gomera",lat:28.1,lon:-17.21,bboxRadius:350,playable:!0},{id:"palma",name:"La Palma",lat:28.71,lon:-17.85,bboxRadius:600,playable:!0},{id:"gc",name:"Gran Canaria",lat:27.93,lon:-15.59,bboxRadius:700,playable:!0},{id:"hierro",name:"El Hierro",lat:27.74,lon:-18.02,bboxRadius:350,playable:!0},{id:"fuerte",name:"Fuerteventura",lat:28.36,lon:-14.05,bboxRadius:1300,playable:!0},{id:"lanza",name:"Lanzarote",lat:29.04,lon:-13.62,bboxRadius:800,playable:!0},{id:"graciosa",name:"La Graciosa",lat:29.24,lon:-13.5,bboxRadius:180,playable:!0}].map(n=>({...n,...vu(n.lat,n.lon)}));function $h(n){let t="tenerife",e=1/0;for(const i of Qn){if(!i.playable)continue;const s=n.x-i.x,r=n.z-i.z,o=s*s+r*r;o<e&&(e=o,t=i.id)}return t}const Zh=[{id:"tfe-peak-teide",island:"tenerife",type:Q.PEAK,name:"Pico del Teide",lat:28.2724,lon:-16.6425,ele:3715},{id:"tfe-peak-pico-viejo",island:"tenerife",type:Q.PEAK,name:"Pico Viejo",lat:28.2632,lon:-16.6534,ele:3135},{id:"tfe-peak-montana-blanca",island:"tenerife",type:Q.PEAK,name:"Montaña Blanca",lat:28.251,lon:-16.6035,ele:2748},{id:"tfe-peak-guajara",island:"tenerife",type:Q.PEAK,name:"Guajara",lat:28.2207,lon:-16.6157,ele:2718},{id:"tfe-peak-cinchado",island:"tenerife",type:Q.PEAK,name:"Roque Cinchado",lat:28.228,lon:-16.6172,ele:2167},{id:"tfe-peak-tigaiga",island:"tenerife",type:Q.PEAK,name:"Montaña de Tigaiga",lat:28.37,lon:-16.63,ele:1909},{id:"tfe-peak-conde",island:"tenerife",type:Q.PEAK,name:"Roque del Conde",lat:28.1093,lon:-16.7117,ele:1001},{id:"tfe-peak-cruz-carmen",island:"tenerife",type:Q.PEAK,name:"Cruz del Carmen",lat:28.5358,lon:-16.3025,ele:900},{id:"tfe-peak-roques-anaga",island:"tenerife",type:Q.PEAK,name:"Roques de Anaga",lat:28.5775,lon:-16.153,ele:227},{id:"tfe-city-santa-cruz",island:"tenerife",type:Q.CITY,name:"Santa Cruz de Tenerife",lat:28.4636,lon:-16.2518},{id:"tfe-city-la-laguna",island:"tenerife",type:Q.CITY,name:"San Cristóbal de La Laguna",lat:28.4853,lon:-16.3201},{id:"tfe-city-la-orotava",island:"tenerife",type:Q.CITY,name:"La Orotava",lat:28.3902,lon:-16.5234},{id:"tfe-city-puerto-cruz",island:"tenerife",type:Q.CITY,name:"Puerto de la Cruz",lat:28.4144,lon:-16.544},{id:"tfe-city-los-cristianos",island:"tenerife",type:Q.CITY,name:"Los Cristianos",lat:28.0507,lon:-16.71},{id:"tfe-city-las-americas",island:"tenerife",type:Q.CITY,name:"Playa de las Américas",lat:28.054,lon:-16.729},{id:"tfe-city-adeje",island:"tenerife",type:Q.CITY,name:"Adeje",lat:28.1226,lon:-16.7256},{id:"tfe-city-granadilla",island:"tenerife",type:Q.CITY,name:"Granadilla de Abona",lat:28.1182,lon:-16.5781},{id:"tfe-city-icod",island:"tenerife",type:Q.CITY,name:"Icod de los Vinos",lat:28.3729,lon:-16.7106},{id:"tfe-city-garachico",island:"tenerife",type:Q.CITY,name:"Garachico",lat:28.3735,lon:-16.7635},{id:"tfe-city-vilaflor",island:"tenerife",type:Q.CITY,name:"Vilaflor",lat:28.1572,lon:-16.6356},{id:"tfe-city-buenavista",island:"tenerife",type:Q.CITY,name:"Buenavista del Norte",lat:28.3712,lon:-16.8567},{id:"tfe-city-masca",island:"tenerife",type:Q.CITY,name:"Masca",lat:28.3001,lon:-16.8404},{id:"tfe-land-teide-park",island:"tenerife",type:Q.LANDSCAPE,name:"Parque Nacional del Teide",lat:28.2733,lon:-16.6422},{id:"tfe-land-anaga-park",island:"tenerife",type:Q.LANDSCAPE,name:"Parque Rural de Anaga",lat:28.55,lon:-16.2},{id:"tfe-land-teno-park",island:"tenerife",type:Q.LANDSCAPE,name:"Parque Rural de Teno",lat:28.35,lon:-16.85},{id:"tfe-land-barranco-infierno",island:"tenerife",type:Q.LANDSCAPE,name:"Barranco del Infierno",lat:28.1184,lon:-16.7245},{id:"tfe-land-barranco-masca",island:"tenerife",type:Q.LANDSCAPE,name:"Barranco de Masca",lat:28.3,lon:-16.841},{id:"tfe-land-cueva-viento",island:"tenerife",type:Q.LANDSCAPE,name:"Cueva del Viento",lat:28.3754,lon:-16.714},{id:"tfe-land-esperanza",island:"tenerife",type:Q.LANDSCAPE,name:"Bosque de la Esperanza",lat:28.48,lon:-16.41},{id:"tfe-land-pinar-chio",island:"tenerife",type:Q.LANDSCAPE,name:"Pinar de Chío",lat:28.27,lon:-16.71},{id:"tfe-land-los-gigantes",island:"tenerife",type:Q.LANDSCAPE,name:"Acantilados de Los Gigantes",lat:28.248,lon:-16.843},{id:"tfe-land-mirador-garachico",island:"tenerife",type:Q.LANDSCAPE,name:"Mirador de Garachico",lat:28.368,lon:-16.761},{id:"tfe-beach-teresitas",island:"tenerife",type:Q.BEACH,name:"Playa de las Teresitas",lat:28.5096,lon:-16.186},{id:"tfe-beach-vistas",island:"tenerife",type:Q.BEACH,name:"Playa de las Vistas",lat:28.0489,lon:-16.7218},{id:"tfe-beach-arena",island:"tenerife",type:Q.BEACH,name:"Playa de la Arena",lat:28.244,lon:-16.8053},{id:"tfe-beach-medano",island:"tenerife",type:Q.BEACH,name:"Playa El Médano",lat:28.0461,lon:-16.5343},{id:"tfe-beach-benijo",island:"tenerife",type:Q.BEACH,name:"Playa de Benijo",lat:28.5775,lon:-16.1838},{id:"tfe-beach-bollullo",island:"tenerife",type:Q.BEACH,name:"Playa del Bollullo",lat:28.4106,lon:-16.494},{id:"tfe-beach-fanabe",island:"tenerife",type:Q.BEACH,name:"Playa de Fañabé",lat:28.0907,lon:-16.7383},{id:"tfe-beach-jardin",island:"tenerife",type:Q.BEACH,name:"Playa Jardín",lat:28.4189,lon:-16.5586},{id:"tfe-beach-almaciga",island:"tenerife",type:Q.BEACH,name:"Playa de Almáciga",lat:28.5752,lon:-16.1714},{id:"tfe-beach-abama",island:"tenerife",type:Q.BEACH,name:"Playa de Abama",lat:28.1735,lon:-16.7937},{id:"gom-peak-garajonay",island:"gomera",type:Q.PEAK,name:"Alto de Garajonay",lat:28.1163,lon:-17.2476,ele:1487},{id:"gom-city-san-sebastian",island:"gomera",type:Q.CITY,name:"San Sebastián de La Gomera",lat:28.0911,lon:-17.1106},{id:"gom-city-valle-gran-rey",island:"gomera",type:Q.CITY,name:"Valle Gran Rey",lat:28.0922,lon:-17.3358},{id:"gom-city-vallehermoso",island:"gomera",type:Q.CITY,name:"Vallehermoso",lat:28.1797,lon:-17.2658},{id:"gom-city-hermigua",island:"gomera",type:Q.CITY,name:"Hermigua",lat:28.1656,lon:-17.1942},{id:"gom-land-garajonay-park",island:"gomera",type:Q.LANDSCAPE,name:"Parque Nacional de Garajonay",lat:28.1167,lon:-17.25},{id:"gom-land-los-organos",island:"gomera",type:Q.LANDSCAPE,name:"Los Órganos",lat:28.212,lon:-17.282},{id:"gom-land-roque-agando",island:"gomera",type:Q.LANDSCAPE,name:"Roque de Agando",lat:28.1153,lon:-17.2106},{id:"gom-beach-santiago",island:"gomera",type:Q.BEACH,name:"Playa de Santiago",lat:28.0294,lon:-17.1989},{id:"gom-beach-calera",island:"gomera",type:Q.BEACH,name:"Playa de la Calera",lat:28.1023,lon:-17.3401},{id:"gc-peak-nieves",island:"gc",type:Q.PEAK,name:"Pico de las Nieves",lat:27.9617,lon:-15.5803,ele:1949},{id:"gc-city-las-palmas",island:"gc",type:Q.CITY,name:"Las Palmas de Gran Canaria",lat:28.1235,lon:-15.4363},{id:"gc-city-maspalomas",island:"gc",type:Q.CITY,name:"Maspalomas",lat:27.7547,lon:-15.586},{id:"gc-city-teror",island:"gc",type:Q.CITY,name:"Teror",lat:28.0556,lon:-15.547},{id:"gc-city-telde",island:"gc",type:Q.CITY,name:"Telde",lat:27.9974,lon:-15.4178},{id:"gc-land-nublo",island:"gc",type:Q.LANDSCAPE,name:"Roque Nublo",lat:27.965,lon:-15.6175},{id:"gc-land-dunas",island:"gc",type:Q.LANDSCAPE,name:"Dunas de Maspalomas",lat:27.741,lon:-15.5797},{id:"gc-beach-canteras",island:"gc",type:Q.BEACH,name:"Playa de las Canteras",lat:28.1352,lon:-15.4348},{id:"gc-beach-ingles",island:"gc",type:Q.BEACH,name:"Playa del Inglés",lat:27.7597,lon:-15.58},{id:"gc-peak-tejeda",island:"gc",type:Q.PEAK,name:"Cruz de Tejeda",lat:28.0086,lon:-15.6075,ele:1490},{id:"gc-city-tafira",island:"gc",type:Q.CITY,name:"Tafira",lat:28.0769,lon:-15.4569},{id:"gc-city-san-mateo",island:"gc",type:Q.CITY,name:"San Mateo",lat:28.0205,lon:-15.5358},{id:"gc-city-mogan",island:"gc",type:Q.CITY,name:"Puerto de Mogán",lat:27.8158,lon:-15.7625},{id:"gc-land-bandama",island:"gc",type:Q.LANDSCAPE,name:"Caldera de Bandama",lat:28.0339,lon:-15.4519},{id:"gc-land-bentayga",island:"gc",type:Q.LANDSCAPE,name:"Roque Bentayga",lat:27.9697,lon:-15.6519},{id:"gc-land-andenes",island:"gc",type:Q.LANDSCAPE,name:"Andén Verde",lat:28.0769,lon:-15.7833},{id:"gc-beach-amadores",island:"gc",type:Q.BEACH,name:"Playa de Amadores",lat:27.7866,lon:-15.7264},{id:"gc-beach-tauro",island:"gc",type:Q.BEACH,name:"Playa de Tauro",lat:27.7831,lon:-15.7331},{id:"palma-peak-muchachos",island:"palma",type:Q.PEAK,name:"Roque de los Muchachos",lat:28.7544,lon:-17.8851,ele:2426},{id:"palma-city-santa-cruz",island:"palma",type:Q.CITY,name:"Santa Cruz de La Palma",lat:28.6835,lon:-17.7642},{id:"palma-city-llanos",island:"palma",type:Q.CITY,name:"Los Llanos de Aridane",lat:28.6585,lon:-17.9181},{id:"palma-land-taburiente",island:"palma",type:Q.LANDSCAPE,name:"Caldera de Taburiente",lat:28.708,lon:-17.872},{id:"palma-land-cumbre-vieja",island:"palma",type:Q.LANDSCAPE,name:"Cumbre Vieja",lat:28.574,lon:-17.8358},{id:"palma-beach-nogales",island:"palma",type:Q.BEACH,name:"Playa de Nogales",lat:28.7548,lon:-17.7616},{id:"palma-beach-puerto-naos",island:"palma",type:Q.BEACH,name:"Playa de Puerto Naos",lat:28.5828,lon:-17.9128},{id:"palma-peak-bejenado",island:"palma",type:Q.PEAK,name:"Pico Bejenado",lat:28.7036,lon:-17.8839,ele:1854},{id:"palma-peak-birigoyo",island:"palma",type:Q.PEAK,name:"Pico Birigoyo",lat:28.6483,lon:-17.8492,ele:1808},{id:"palma-city-tazacorte",island:"palma",type:Q.CITY,name:"Tazacorte",lat:28.6394,lon:-17.9333},{id:"palma-city-fuencaliente",island:"palma",type:Q.CITY,name:"Fuencaliente",lat:28.4889,lon:-17.8453},{id:"palma-city-mazo",island:"palma",type:Q.CITY,name:"Villa de Mazo",lat:28.6044,lon:-17.7892},{id:"palma-land-salinas",island:"palma",type:Q.LANDSCAPE,name:"Salinas de Fuencaliente",lat:28.4528,lon:-17.8447},{id:"palma-land-volcan-teneguia",island:"palma",type:Q.LANDSCAPE,name:"Volcán Teneguía",lat:28.4669,lon:-17.8425},{id:"palma-beach-charco-verde",island:"palma",type:Q.BEACH,name:"Playa de Charco Verde",lat:28.5483,lon:-17.8975},{id:"hierro-peak-malpaso",island:"hierro",type:Q.PEAK,name:"Pico de Malpaso",lat:27.733,lon:-18.0177,ele:1501},{id:"hierro-city-valverde",island:"hierro",type:Q.CITY,name:"Valverde",lat:27.8055,lon:-17.9183},{id:"hierro-city-frontera",island:"hierro",type:Q.CITY,name:"La Frontera",lat:27.7639,lon:-18.0122},{id:"hierro-land-sabinar",island:"hierro",type:Q.LANDSCAPE,name:"El Sabinar",lat:27.756,lon:-18.1148},{id:"hierro-land-bonanza",island:"hierro",type:Q.LANDSCAPE,name:"Roque de la Bonanza",lat:27.7029,lon:-17.9429},{id:"hierro-beach-charco-azul",island:"hierro",type:Q.BEACH,name:"Charco Azul",lat:27.8061,lon:-18.1057},{id:"hierro-city-tamaduste",island:"hierro",type:Q.CITY,name:"Tamaduste",lat:27.8125,lon:-17.9136},{id:"hierro-city-el-pinar",island:"hierro",type:Q.CITY,name:"El Pinar",lat:27.7053,lon:-17.9928},{id:"hierro-land-roques-salmor",island:"hierro",type:Q.LANDSCAPE,name:"Roques de Salmor",lat:27.8294,lon:-17.9694},{id:"hierro-land-pozo-salud",island:"hierro",type:Q.LANDSCAPE,name:"Pozo de la Salud",lat:27.7681,lon:-18.1219},{id:"hierro-land-punta-dehesa",island:"hierro",type:Q.LANDSCAPE,name:"Punta de la Dehesa",lat:27.7842,lon:-18.1633},{id:"hierro-beach-mar-calmas",island:"hierro",type:Q.BEACH,name:"Mar de las Calmas",lat:27.6961,lon:-18.0356},{id:"fuerte-peak-zarza",island:"fuerte",type:Q.PEAK,name:"Pico de la Zarza",lat:28.0828,lon:-14.3053,ele:807},{id:"fuerte-city-puerto-rosario",island:"fuerte",type:Q.CITY,name:"Puerto del Rosario",lat:28.5011,lon:-13.8627},{id:"fuerte-city-corralejo",island:"fuerte",type:Q.CITY,name:"Corralejo",lat:28.7361,lon:-13.87},{id:"fuerte-city-morro-jable",island:"fuerte",type:Q.CITY,name:"Morro Jable",lat:28.054,lon:-14.349},{id:"fuerte-land-corralejo-park",island:"fuerte",type:Q.LANDSCAPE,name:"Parque Natural de Corralejo",lat:28.717,lon:-13.834},{id:"fuerte-land-calderon",island:"fuerte",type:Q.LANDSCAPE,name:"Calderón Hondo",lat:28.703,lon:-13.939},{id:"fuerte-beach-sotavento",island:"fuerte",type:Q.BEACH,name:"Playa de Sotavento",lat:28.1973,lon:-14.218},{id:"fuerte-beach-cofete",island:"fuerte",type:Q.BEACH,name:"Playa de Cofete",lat:28.0945,lon:-14.382},{id:"fuerte-city-betancuria",island:"fuerte",type:Q.CITY,name:"Betancuria",lat:28.4244,lon:-14.0589},{id:"fuerte-city-antigua",island:"fuerte",type:Q.CITY,name:"Antigua",lat:28.4181,lon:-14.0114},{id:"fuerte-city-pajara",island:"fuerte",type:Q.CITY,name:"Pájara",lat:28.3531,lon:-14.1006},{id:"fuerte-city-caleta-fuste",island:"fuerte",type:Q.CITY,name:"Caleta de Fuste",lat:28.395,lon:-13.8633},{id:"fuerte-city-tuineje",island:"fuerte",type:Q.CITY,name:"Tuineje",lat:28.3219,lon:-14.0481},{id:"fuerte-land-isla-lobos",island:"fuerte",type:Q.LANDSCAPE,name:"Isla de Lobos",lat:28.7556,lon:-13.8225},{id:"fuerte-land-arena-volcano",island:"fuerte",type:Q.LANDSCAPE,name:"Volcán de la Arena",lat:28.6997,lon:-13.9594},{id:"fuerte-beach-garcey",island:"fuerte",type:Q.BEACH,name:"Playa de Garcey",lat:28.3344,lon:-14.2197},{id:"lanza-peak-penas-chache",island:"lanza",type:Q.PEAK,name:"Peñas del Chache",lat:29.1108,lon:-13.5468,ele:671},{id:"lanza-city-arrecife",island:"lanza",type:Q.CITY,name:"Arrecife",lat:28.9637,lon:-13.5477},{id:"lanza-city-costa-teguise",island:"lanza",type:Q.CITY,name:"Costa Teguise",lat:28.987,lon:-13.5},{id:"lanza-city-playa-blanca",island:"lanza",type:Q.CITY,name:"Playa Blanca",lat:28.8597,lon:-13.8253},{id:"lanza-land-timanfaya",island:"lanza",type:Q.LANDSCAPE,name:"Parque Nacional de Timanfaya",lat:29,lon:-13.755},{id:"lanza-land-cueva-verdes",island:"lanza",type:Q.LANDSCAPE,name:"Cueva de los Verdes",lat:29.1574,lon:-13.4342},{id:"lanza-land-mirador-rio",island:"lanza",type:Q.LANDSCAPE,name:"Mirador del Río",lat:29.2179,lon:-13.4827},{id:"lanza-beach-papagayo",island:"lanza",type:Q.BEACH,name:"Playa Papagayo",lat:28.835,lon:-13.804},{id:"lanza-beach-famara",island:"lanza",type:Q.BEACH,name:"Playa de Famara",lat:29.13,lon:-13.5538},{id:"lanza-peak-montana-roja",island:"lanza",type:Q.PEAK,name:"Montaña Roja",lat:28.8567,lon:-13.8636,ele:194},{id:"lanza-city-teguise",island:"lanza",type:Q.CITY,name:"Teguise",lat:29.0589,lon:-13.5614},{id:"lanza-city-haria",island:"lanza",type:Q.CITY,name:"Haría",lat:29.1453,lon:-13.4972},{id:"lanza-city-yaiza",island:"lanza",type:Q.CITY,name:"Yaiza",lat:28.9528,lon:-13.7686},{id:"lanza-city-tinajo",island:"lanza",type:Q.CITY,name:"Tinajo",lat:29.0628,lon:-13.675},{id:"lanza-land-jameos",island:"lanza",type:Q.LANDSCAPE,name:"Jameos del Agua",lat:29.1583,lon:-13.4344},{id:"lanza-land-el-golfo",island:"lanza",type:Q.LANDSCAPE,name:"El Golfo",lat:28.9722,lon:-13.8261},{id:"lanza-beach-quemada",island:"lanza",type:Q.BEACH,name:"Playa Quemada",lat:28.9039,lon:-13.7572},{id:"graciosa-peak-agujas",island:"graciosa",type:Q.PEAK,name:"Las Agujas Grandes",lat:29.262,lon:-13.502,ele:266},{id:"graciosa-city-caleta",island:"graciosa",type:Q.CITY,name:"Caleta del Sebo",lat:29.2261,lon:-13.5021},{id:"graciosa-land-amarilla",island:"graciosa",type:Q.LANDSCAPE,name:"Montaña Amarilla",lat:29.2128,lon:-13.539},{id:"graciosa-beach-conchas",island:"graciosa",type:Q.BEACH,name:"Playa de las Conchas",lat:29.27,lon:-13.541},{id:"graciosa-beach-francesa",island:"graciosa",type:Q.BEACH,name:"Playa Francesa",lat:29.215,lon:-13.531},{id:"graciosa-city-pedro-barba",island:"graciosa",type:Q.CITY,name:"Pedro Barba",lat:29.2461,lon:-13.4778},{id:"graciosa-peak-bermeja",island:"graciosa",type:Q.PEAK,name:"Montaña Bermeja",lat:29.2603,lon:-13.5183,ele:157},{id:"graciosa-beach-lambra",island:"graciosa",type:Q.BEACH,name:"Playa Lambra",lat:29.2725,lon:-13.505}],gi=Zh.map(n=>({...n,...vu(n.lat,n.lon)}));(function(){const t=2*oe.ring.majorRadius+1.2,e=t*t,i=30;for(let s=0;s<i;s++){let r=!1;for(let o=0;o<gi.length;o++)for(let a=o+1;a<gi.length;a++){const l=gi[o],c=gi[a],u=l.x-c.x,h=l.z-c.z,f=u*u+h*h;if(f>=e)continue;if(f<1e-4){l.x+=.13,l.z+=.07,c.x-=.13,c.z-=.07,r=!0;continue}const m=Math.sqrt(f),_=(t-m)*.5,v=u/m,p=h/m;l.x+=v*_,l.z+=p*_,c.x-=v*_,c.z-=p*_,r=!0}if(!r)break}})();const Kh=gi.reduce((n,t)=>((n[t.island]??=[]).push(t),n),{}),yu="teide-save",wr=2,Mu=["punkte","gofiosByIsland","obsidian","landings","bestFlightPunkte","upgrades","oneShotTierByIsland","exploredPOIs","checkpointRunwayId","currentIsland","testMode"];function Jh(){const n={version:wr};for(const t of Mu)n[t]=St[t];return n}function Qh(n){for(const t of Mu){const e=n[t];if(e===void 0)continue;const i=St[t];i&&typeof i=="object"&&!Array.isArray(i)&&e&&typeof e=="object"&&!Array.isArray(e)?Object.assign(i,e):St[t]=e}}function td(n){if(n.version===1){const t={};if(n.exploredPOIs)for(const e of gi){if(!n.exploredPOIs[e.id])continue;const i=oe.rewardsByType[e.type];i&&(t[e.island]=(t[e.island]|0)+i.gofios)}n.gofiosByIsland=t,n.version=2}return n}function ed(){try{const n=localStorage.getItem(yu);if(!n)return!1;let t=JSON.parse(n);return!t||typeof t!="object"?!1:typeof t.version!="number"?(console.warn("[save] discarding save: missing version"),!1):t.version>wr?(console.warn(`[save] discarding save: future version ${t.version} > ${wr}`),!1):(t=td(t),t.version!==wr?(console.warn(`[save] discarding save: migration left version at ${t.version}`),!1):(Qh(t),!0))}catch(n){return console.warn("[save] load failed:",n),!1}}function nd(){try{localStorage.setItem(yu,JSON.stringify(Jh()))}catch(n){console.warn("[save] write failed:",n)}}let ua=!1;function ii(){ua||(ua=!0,queueMicrotask(()=>{ua=!1,nd()}))}const pe={up:!1,down:!1,left:!1,right:!1,brake:!1,boost:!1,oneShot:!1};function Su(n,t){switch(n.key){case"ArrowUp":case"w":case"W":pe.up=t;break;case"ArrowDown":case"s":case"S":pe.down=t;break;case"ArrowLeft":case"a":case"A":pe.left=t;break;case"ArrowRight":case"d":case"D":pe.right=t;break;case" ":case"Spacebar":pe.brake=t&&qh(),n.preventDefault();break;case"Shift":pe.boost=t;break;case"f":case"F":pe.oneShot=t;break;case"t":case"T":t&&(St.testMode=!St.testMode,Gs(),ii());break;case"b":case"B":if(t&&St.testMode){const e=Re.oneShot.tiers.length-1,i=G.boosterOverride!=null?G.boosterOverride:4;G.boosterOverride=(i+1)%(e+1)}break}}window.addEventListener("keydown",n=>Su(n,!0));window.addEventListener("keyup",n=>Su(n,!1));const Mo={garage:document.getElementById("garage-overlay"),shop:document.getElementById("shop-overlay")},jo=document.getElementById("garage-punkte"),$o=document.getElementById("garage-highscore"),Zo=document.getElementById("garage-obsidian"),Ko=document.getElementById("garage-island"),Jo=document.getElementById("garage-booster"),ms=document.getElementById("garage-stats"),Ts=document.getElementById("garage-upgrades"),Qo=document.getElementById("shop-obsidian"),Xn=document.getElementById("obsidian-confirm"),tl=document.getElementById("obsidian-confirm-text"),id=document.getElementById("obsidian-confirm-cancel"),sd=document.getElementById("obsidian-confirm-ok");let As=null,Nr=null;function Eu(n){return Re.oneShot.tiers[n]?.name||`Level ${n}`}function rd(n){return n.charAt(0).toUpperCase()+n.slice(1)}function jn(n){return Math.round(n).toLocaleString("de-DE")}function ad(n){Cr();const t=Mo[n];t&&(n==="garage"&&Zr(),n==="shop"&&_d(),t.classList.add("visible"),t.setAttribute("aria-hidden","false"),As=n)}function Cr(){if(!As)return;const n=Mo[As];n&&(n.classList.remove("visible"),n.setAttribute("aria-hidden","true")),As=null}function Zr(){od(),ud(),hd()}function od(){jo&&(jo.textContent=jn(St.punkte)),$o&&($o.textContent=jn(St.bestFlightPunkte|0)),Zo&&(Zo.textContent=jn(St.obsidian|0)),Ko&&(Ko.textContent=rd(St.currentIsland)),Jo&&(Jo.textContent=Eu(Si(St.currentIsland)))}const ld=[{key:"maxSpeed",label:"Spitzentempo",src:"plane",invert:!1},{key:"drag",label:"Aerodynamik",src:"plane",invert:!0},{key:"speedFromPitch",label:"Sturzflug",src:"plane",invert:!1},{key:"stallSpeed",label:"Stabilität",src:"plane",invert:!0},{key:"takeoffSpeed",label:"Startgeschwindigkeit",src:"takeoff",invert:!1}];function cd(n){const t=Yh(n.key),e=n.src==="plane"?Yr[n.key]:jr[n.key],i=n.src==="plane"?xo[n.key]:vo[n.key],s=n.invert?e-t:t-e,r=n.invert?e-i:i-e;return Math.abs(r)<1e-6?{pct:100,cur:t,full:i}:{pct:Math.max(0,Math.min(100,s/r*100)),cur:t,full:i}}function ud(){if(!ms)return;ms.innerHTML="";for(const o of ld){const{pct:a,cur:l,full:c}=cd(o),u=document.createElement("div");u.className="stat-row",u.innerHTML=`
      <div class="stat-row-head">
        <span>${o.label}</span>
        <span class="stat-row-pct">${Math.round(a)} %</span>
      </div>
      <div class="stat-row-bar"><div class="stat-row-bar-fill" style="width: ${a}%"></div></div>
      ${St.testMode?`<div class="stat-row-debug">${l.toFixed(2)} / ${c.toFixed(2)}</div>`:""}
    `,ms.appendChild(u)}const n=!!St.upgrades?.brake,t=document.createElement("div");t.className=`stat-row binary${n?"":" locked"}`,t.innerHTML=`
    <div class="stat-row-head">
      <span>Luftbremse</span>
      <span class="stat-row-state">${n?"✓ Aktiv":"Gesperrt"}</span>
    </div>
  `,ms.appendChild(t);const e=Si(St.currentIsland),i=Re.oneShot.tiers.length-1,s=e/i*100,r=document.createElement("div");r.className="stat-row",r.innerHTML=`
    <div class="stat-row-head">
      <span>Booster</span>
      <span class="stat-row-pct">${Eu(e)}</span>
    </div>
    <div class="stat-row-bar"><div class="stat-row-bar-fill" style="width: ${s}%"></div></div>
  `,ms.appendChild(r)}function hd(){if(Ts){Ts.innerHTML="";for(const[n,t]of Object.entries(Ti)){const e=St.upgrades[n]|0,i=t.levels.length-1,s=e>=i,r=s?0:t.costs[e+1],o=r>0?Math.ceil(r/yo.obsidianPerPunkte):0;let a,l,c;s?(a="Max",l=!0,c=""):St.punkte>=r?(a=`Kaufen · ${jn(r)} P`,l=!1,c="punkte"):(St.obsidian|0)>=o?(a=`Mit Obsidian · ${o} O`,l=!1,c="obsidian"):(a=`Kaufen · ${jn(r)} P`,l=!0,c="");const u=document.createElement("div");u.className="upgrade-row";const h=St.testMode&&e>0?`<button class="upgrade-sell" type="button" data-sell="${n}">Verkaufen · ${jn(t.costs[e])} P</button>`:"";u.innerHTML=`
      <div class="upgrade-head">
        <span>${t.label}</span>
        <span class="upgrade-level">${e} / ${i}</span>
      </div>
      <div class="upgrade-desc">${t.description}</div>
      <div class="upgrade-actions">
        ${h}
        <button class="upgrade-buy${s?" maxed":""}" type="button"
                data-buy="${n}" data-pay="${c}" ${l?"disabled":""}>
          ${a}
        </button>
      </div>
    `,Ts.appendChild(u)}}}function dd(n){if(!St.testMode)return;const t=Ti[n];if(!t)return;const e=St.upgrades[n]|0;if(e<=0)return;const i=t.costs[e];St.upgrades[n]=e-1,St.punkte+=i,Gs(),ii(),Zr()}function fd(n){const t=Ti[n],e=St.upgrades[n]|0,i=t.costs[e+1];St.punkte<i||(St.punkte-=i,St.upgrades[n]=e+1,Gs(),ii(),Zr())}function pd(n){const t=Ti[n],e=St.upgrades[n]|0,i=t.costs[e+1],s=Math.ceil(i/yo.obsidianPerPunkte);(St.obsidian|0)<s||(St.obsidian=(St.obsidian|0)-s,St.upgrades[n]=e+1,Gs(),ii(),Zr())}function md(n){const t=Ti[n],e=St.upgrades[n]|0,i=t.costs[e+1],s=Math.ceil(i/yo.obsidianPerPunkte);Nr={key:n,punkteCost:i,obsidianCost:s},tl&&(tl.innerHTML=`Du gibst <strong>${s} Obsidian</strong> für <strong>${t.label}</strong> aus.<br>(entspricht ${jn(i)} P)`),Xn.classList.add("visible"),Xn.setAttribute("aria-hidden","false")}function Rr(){Xn.classList.remove("visible"),Xn.setAttribute("aria-hidden","true"),Nr=null}function gd(){if(!Nr)return;const n=Nr.key;Rr(),pd(n)}function _d(){Qo&&(Qo.textContent=jn(St.obsidian|0))}(function(){document.querySelectorAll(".tp-btn").forEach(t=>{t.addEventListener("click",()=>ad(t.dataset.modal))}),document.querySelectorAll(".modal-close").forEach(t=>{t.addEventListener("click",Cr)});for(const t of Object.values(Mo))t&&t.addEventListener("click",e=>{e.target===t&&Cr()});Ts&&Ts.addEventListener("click",t=>{const e=t.target.closest("[data-sell]");if(e&&!e.disabled){dd(e.dataset.sell);return}const i=t.target.closest("[data-buy]");if(!i||i.disabled)return;const s=i.dataset.buy,r=i.dataset.pay;r==="punkte"?fd(s):r==="obsidian"&&md(s)}),Xn&&(Xn.addEventListener("click",t=>{t.target===Xn&&Rr()}),id?.addEventListener("click",Rr),sd?.addEventListener("click",gd)),document.addEventListener("keydown",t=>{t.key==="Escape"&&(Xn?.classList.contains("visible")?Rr():As&&Cr())})})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const So="160",xd=0,el=1,vd=2,bu=1,yd=2,Ln=3,ti=0,We=1,Ve=2,$n=0,Qi=1,Ur=2,nl=3,il=4,Md=5,fi=100,Sd=101,Ed=102,sl=103,rl=104,bd=200,Td=201,Ad=202,wd=203,Qa=204,to=205,Cd=206,Rd=207,Pd=208,Ld=209,Id=210,Dd=211,Nd=212,Ud=213,Fd=214,Od=0,Bd=1,zd=2,Fr=3,kd=4,Gd=5,Hd=6,Vd=7,Eo=0,Wd=1,Xd=2,Zn=0,qd=1,Yd=2,jd=3,$d=4,Zd=5,Kd=6,Tu=300,is=301,ss=302,eo=303,no=304,Kr=306,io=1e3,hn=1001,so=1002,ze=1003,al=1004,ha=1005,Qe=1006,Jd=1007,Ds=1008,Kn=1009,Qd=1010,tf=1011,bo=1012,Au=1013,qn=1014,Yn=1015,Ns=1016,wu=1017,Cu=1018,_i=1020,ef=1021,dn=1023,nf=1024,sf=1025,xi=1026,rs=1027,rf=1028,Ru=1029,af=1030,Pu=1031,Lu=1033,da=33776,fa=33777,pa=33778,ma=33779,ol=35840,ll=35841,cl=35842,ul=35843,Iu=36196,hl=37492,dl=37496,fl=37808,pl=37809,ml=37810,gl=37811,_l=37812,xl=37813,vl=37814,yl=37815,Ml=37816,Sl=37817,El=37818,bl=37819,Tl=37820,Al=37821,ga=36492,wl=36494,Cl=36495,of=36283,Rl=36284,Pl=36285,Ll=36286,Du=3e3,vi=3001,lf=3200,cf=3201,Nu=0,uf=1,nn="",ye="srgb",Dn="srgb-linear",To="display-p3",Jr="display-p3-linear",Or="linear",ae="srgb",Br="rec709",zr="p3",Li=7680,Il=519,hf=512,df=513,ff=514,Uu=515,pf=516,mf=517,gf=518,_f=519,Dl=35044,Nl="300 es",ro=1035,In=2e3,kr=2001;class us{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ul=1234567;const ts=Math.PI/180,Us=180/Math.PI;function Ai(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]).toLowerCase()}function Ce(n,t,e){return Math.max(t,Math.min(e,n))}function Ao(n,t){return(n%t+t)%t}function xf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function vf(n,t,e){return n!==t?(e-n)/(t-n):0}function ws(n,t,e){return(1-e)*n+e*t}function yf(n,t,e,i){return ws(n,t,1-Math.exp(-e*i))}function Mf(n,t=1){return t-Math.abs(Ao(n,t*2)-t)}function Sf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Ef(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function bf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Tf(n,t){return n+Math.random()*(t-n)}function Af(n){return n*(.5-Math.random())}function wf(n){n!==void 0&&(Ul=n);let t=Ul+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cf(n){return n*ts}function Rf(n){return n*Us}function ao(n){return(n&n-1)===0&&n!==0}function Pf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Gr(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Lf(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),u=o((t+i)/2),h=r((t-i)/2),f=o((t-i)/2),m=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $i(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Oe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Fs={DEG2RAD:ts,RAD2DEG:Us,generateUUID:Ai,clamp:Ce,euclideanModulo:Ao,mapLinear:xf,inverseLerp:vf,lerp:ws,damp:yf,pingpong:Mf,smoothstep:Sf,smootherstep:Ef,randInt:bf,randFloat:Tf,randFloatSpread:Af,seededRandom:wf,degToRad:Cf,radToDeg:Rf,isPowerOfTwo:ao,ceilPowerOfTwo:Pf,floorPowerOfTwo:Gr,setQuaternionFromProperEuler:Lf,normalize:Oe,denormalize:$i};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,i,s,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],_=i[8],v=s[0],p=s[3],d=s[6],y=s[1],x=s[4],S=s[7],L=s[2],T=s[5],w=s[8];return r[0]=o*v+a*y+l*L,r[3]=o*p+a*x+l*T,r[6]=o*d+a*S+l*w,r[1]=c*v+u*y+h*L,r[4]=c*p+u*x+h*T,r[7]=c*d+u*S+h*w,r[2]=f*v+m*y+_*L,r[5]=f*p+m*x+_*T,r[8]=f*d+m*S+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,_=e*h+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=h*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=m*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_a.makeScale(t,e)),this}rotate(t){return this.premultiply(_a.makeRotation(-t)),this}translate(t,e){return this.premultiply(_a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new zt;function Fu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function If(){const n=Hr("canvas");return n.style.display="block",n}const Fl={};function Cs(n){n in Fl||(Fl[n]=!0,console.warn(n))}const Ol=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Bl=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xs={[Dn]:{transfer:Or,primaries:Br,toReference:n=>n,fromReference:n=>n},[ye]:{transfer:ae,primaries:Br,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Jr]:{transfer:Or,primaries:zr,toReference:n=>n.applyMatrix3(Bl),fromReference:n=>n.applyMatrix3(Ol)},[To]:{transfer:ae,primaries:zr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Bl),fromReference:n=>n.applyMatrix3(Ol).convertLinearToSRGB()}},Df=new Set([Dn,Jr]),te={enabled:!0,_workingColorSpace:Dn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Df.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Xs[t].toReference,s=Xs[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Xs[n].primaries},getTransfer:function(n){return n===nn?Or:Xs[n].transfer}};function es(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ii;class Ou{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ii===void 0&&(Ii=Hr("canvas")),Ii.width=t.width,Ii.height=t.height;const i=Ii.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(es(e[i]/255)*255):e[i]=es(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nf=0;class Bu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=Ai(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(va(s[o].image)):r.push(va(s[o]))}else r=va(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function va(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ou.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uf=0;class je extends us{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,i=hn,s=hn,r=Qe,o=Ds,a=dn,l=Kn,c=je.DEFAULT_ANISOTROPY,u=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=Ai(),this.name="",this.source=new Bu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===vi?ye:nn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case io:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case so:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case io:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case so:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ye?vi:Du}set encoding(t){Cs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===vi?ye:nn}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Tu;je.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,i=0,s=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,S=(m+1)/2,L=(d+1)/2,T=(u+f)/4,w=(h+v)/4,U=(_+p)/4;return x>S&&x>L?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=T/i,r=w/i):S>L?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=T/s,r=U/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=w/r,s=U/r),this.set(i,s,r,e),this}let y=Math.sqrt((p-_)*(p-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(h-v)/y,this.z=(f-u)/y,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ff extends us{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(Cs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===vi?ye:nn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new je(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Bu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends Ff{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class zu extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Of extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ge{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],m=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=v;return}if(h!==v||l!==f||c!==m||u!==_){let p=1-a;const d=l*f+c*m+u*_+h*v,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const L=Math.sqrt(x),T=Math.atan2(L,d*y);p=Math.sin(p*T)/L,a=Math.sin(a*T)/L}const S=a*y;if(l=l*p+f*S,c=c*p+m*S,u=u*p+_*S,h=h*p+v*S,p===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+u*h+l*m-c*f,t[e+1]=l*_+u*f+c*h-a*m,t[e+2]=c*_+u*m+a*f-l*h,t[e+3]=u*_-a*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ya.copy(this).projectOnVector(t),this.sub(ya)}reflect(t){return this.sub(ya.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new D,zl=new Ge;class wi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qs.copy(i.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),Ys.subVectors(this.max,gs),Di.subVectors(t.a,gs),Ni.subVectors(t.b,gs),Ui.subVectors(t.c,gs),On.subVectors(Ni,Di),Bn.subVectors(Ui,Ni),ai.subVectors(Di,Ui);let e=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-ai.z,ai.y,On.z,0,-On.x,Bn.z,0,-Bn.x,ai.z,0,-ai.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-ai.y,ai.x,0];return!Ma(e,Di,Ni,Ui,Ys)||(e=[1,0,0,0,1,0,0,0,1],!Ma(e,Di,Ni,Ui,Ys))?!1:(js.crossVectors(On,Bn),e=[js.x,js.y,js.z],Ma(e,Di,Ni,Ui,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Tn=[new D,new D,new D,new D,new D,new D,new D,new D],sn=new D,qs=new wi,Di=new D,Ni=new D,Ui=new D,On=new D,Bn=new D,ai=new D,gs=new D,Ys=new D,js=new D,oi=new D;function Ma(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){oi.fromArray(n,r);const a=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),u=i.dot(oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Bf=new wi,_s=new D,Sa=new D;class Ci{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Bf.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(_s,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(Sa)),this.expandByPoint(_s.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new D,Ea=new D,$s=new D,zn=new D,ba=new D,Zs=new D,Ta=new D;class wo{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ea.copy(t).add(e).multiplyScalar(.5),$s.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(Ea);const r=t.distanceTo(e)*.5,o=-this.direction.dot($s),a=zn.dot(this.direction),l=-zn.dot($s),c=zn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ea).addScaledVector($s,f),m}intersectSphere(t,e){An.subVectors(t.center,this.origin);const i=An.dot(this.direction),s=An.dot(An)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,i,s,r){ba.subVectors(e,t),Zs.subVectors(i,t),Ta.crossVectors(ba,Zs);let o=this.direction.dot(Ta),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zn.subVectors(this.origin,t);const l=a*this.direction.dot(Zs.crossVectors(zn,Zs));if(l<0)return null;const c=a*this.direction.dot(ba.cross(zn));if(c<0||l+c>o)return null;const u=-a*zn.dot(Ta);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,i,s,r,o,a,l,c,u,h,f,m,_,v,p){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,f,m,_,v,p)}set(t,e,i,s,r,o,a,l,c,u,h,f,m,_,v,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Fi.setFromMatrixColumn(t,0).length(),r=1/Fi.setFromMatrixColumn(t,1).length(),o=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,m=o*h,_=a*u,v=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+_*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=_+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,_=c*u,v=c*h;e[0]=f+v*a,e[4]=_*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-_,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,_=c*u,v=c*h;e[0]=f-v*a,e[4]=-o*h,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,m=o*h,_=a*u,v=a*h;e[0]=l*u,e[4]=_*c-m,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=m*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,_=a*l,v=a*c;e[0]=l*u,e[4]=v-f*h,e[8]=_*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+_,e[10]=f-v*h}else if(t.order==="XZY"){const f=o*l,m=o*c,_=a*l,v=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=o*u,e[9]=m*h-_,e[2]=_*h-m,e[6]=a*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zf,t,kf)}lookAt(t,e,i){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),kn.crossVectors(i,qe),kn.lengthSq()===0&&(Math.abs(i.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),kn.crossVectors(i,qe)),kn.normalize(),Ks.crossVectors(qe,kn),s[0]=kn.x,s[4]=Ks.x,s[8]=qe.x,s[1]=kn.y,s[5]=Ks.y,s[9]=qe.y,s[2]=kn.z,s[6]=Ks.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],_=i[2],v=i[6],p=i[10],d=i[14],y=i[3],x=i[7],S=i[11],L=i[15],T=s[0],w=s[4],U=s[8],E=s[12],b=s[1],V=s[5],W=s[9],ut=s[13],O=s[2],j=s[6],Z=s[10],J=s[14],H=s[3],st=s[7],at=s[11],pt=s[15];return r[0]=o*T+a*b+l*O+c*H,r[4]=o*w+a*V+l*j+c*st,r[8]=o*U+a*W+l*Z+c*at,r[12]=o*E+a*ut+l*J+c*pt,r[1]=u*T+h*b+f*O+m*H,r[5]=u*w+h*V+f*j+m*st,r[9]=u*U+h*W+f*Z+m*at,r[13]=u*E+h*ut+f*J+m*pt,r[2]=_*T+v*b+p*O+d*H,r[6]=_*w+v*V+p*j+d*st,r[10]=_*U+v*W+p*Z+d*at,r[14]=_*E+v*ut+p*J+d*pt,r[3]=y*T+x*b+S*O+L*H,r[7]=y*w+x*V+S*j+L*st,r[11]=y*U+x*W+S*Z+L*at,r[15]=y*E+x*ut+S*J+L*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],_=t[3],v=t[7],p=t[11],d=t[15];return _*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*m-i*l*m)+v*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+e*c*h-e*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+d*(-s*a*u-e*l*h+e*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],_=t[12],v=t[13],p=t[14],d=t[15],y=h*p*c-v*f*c+v*l*m-a*p*m-h*l*d+a*f*d,x=_*f*c-u*p*c-_*l*m+o*p*m+u*l*d-o*f*d,S=u*v*c-_*h*c+_*a*m-o*v*m-u*a*d+o*h*d,L=_*h*l-u*v*l-_*a*f+o*v*f+u*a*p-o*h*p,T=e*y+i*x+s*S+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=y*w,t[1]=(v*f*r-h*p*r-v*s*m+i*p*m+h*s*d-i*f*d)*w,t[2]=(a*p*r-v*l*r+v*s*c-i*p*c-a*s*d+i*l*d)*w,t[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*m-i*l*m)*w,t[4]=x*w,t[5]=(u*p*r-_*f*r+_*s*m-e*p*m-u*s*d+e*f*d)*w,t[6]=(_*l*r-o*p*r-_*s*c+e*p*c+o*s*d-e*l*d)*w,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*m+e*l*m)*w,t[8]=S*w,t[9]=(_*h*r-u*v*r-_*i*m+e*v*m+u*i*d-e*h*d)*w,t[10]=(o*v*r-_*a*r+_*i*c-e*v*c-o*i*d+e*a*d)*w,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*m-e*a*m)*w,t[12]=L*w,t[13]=(u*v*s-_*h*s+_*i*f-e*v*f-u*i*p+e*h*p)*w,t[14]=(_*a*s-o*v*s-_*i*l+e*v*l+o*i*p-e*a*p)*w,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*f+e*a*f)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,_=r*h,v=o*u,p=o*h,d=a*h,y=l*c,x=l*u,S=l*h,L=i.x,T=i.y,w=i.z;return s[0]=(1-(v+d))*L,s[1]=(m+S)*L,s[2]=(_-x)*L,s[3]=0,s[4]=(m-S)*T,s[5]=(1-(f+d))*T,s[6]=(p+y)*T,s[7]=0,s[8]=(_+x)*w,s[9]=(p-y)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Fi.set(s[0],s[1],s[2]).length();const o=Fi.set(s[4],s[5],s[6]).length(),a=Fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);const c=1/r,u=1/o,h=1/a;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,e.setFromRotationMatrix(rn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=In){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let m,_;if(a===In)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===kr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=In){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),f=(e+t)*c,m=(i+s)*u;let _,v;if(a===In)_=(o+r)*h,v=-2*h;else if(a===kr)_=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Fi=new D,rn=new $t,zf=new D(0,0,0),kf=new D(1,1,1),kn=new D,Ks=new D,qe=new D,kl=new $t,Gl=new Ge;class mn{constructor(t=0,e=0,i=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class ku{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gf=0;const Hl=new D,Oi=new Ge,wn=new $t,Js=new D,xs=new D,Hf=new D,Vf=new Ge,Vl=new D(1,0,0),Wl=new D(0,1,0),Xl=new D(0,0,1),Wf={type:"added"},Xf={type:"removed"};class Me extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new D,e=new mn,i=new Ge,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new zt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ku,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Vl,t)}rotateY(t){return this.rotateOnAxis(Wl,t)}rotateZ(t){return this.rotateOnAxis(Xl,t)}translateOnAxis(t,e){return Hl.copy(t).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vl,t)}translateY(t){return this.translateOnAxis(Wl,t)}translateZ(t){return this.translateOnAxis(Xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Js.copy(t):Js.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(xs,Js,this.up):wn.lookAt(Js,xs,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(wn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Wf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Hf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Me.DEFAULT_UP=new D(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new D,Cn=new D,Aa=new D,Rn=new D,Bi=new D,zi=new D,ql=new D,wa=new D,Ca=new D,Ra=new D;let Qs=!1;class tn{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){an.subVectors(s,e),Cn.subVectors(i,e),Aa.subVectors(t,e);const o=an.dot(an),a=an.dot(Cn),l=an.dot(Aa),c=Cn.dot(Cn),u=Cn.dot(Aa),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(t,e,i,s,r,o,a,l){return Qs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qs=!0),this.getInterpolation(t,e,i,s,r,o,a,l)}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static isFrontFacing(t,e,i,s){return an.subVectors(i,e),Cn.subVectors(t,e),an.cross(Cn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),an.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Qs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Qs=!0),tn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Bi.subVectors(s,i),zi.subVectors(r,i),wa.subVectors(t,i);const l=Bi.dot(wa),c=zi.dot(wa);if(l<=0&&c<=0)return e.copy(i);Ca.subVectors(t,s);const u=Bi.dot(Ca),h=zi.dot(Ca);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Bi,o);Ra.subVectors(t,r);const m=Bi.dot(Ra),_=zi.dot(Ra);if(_>=0&&m<=_)return e.copy(r);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(zi,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return ql.subVectors(r,s),a=(h-u)/(h-u+(m-_)),e.copy(s).addScaledVector(ql,a);const d=1/(p+v+f);return o=v*d,a=f*d,e.copy(i).addScaledVector(Bi,o).addScaledVector(zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function Pa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Rt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Ao(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Pa(o,r,t+1/3),this.g=Pa(o,r,t),this.b=Pa(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=ye){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const i=Gu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return te.fromWorkingColorSpace(De.copy(this),t),Math.round(Ce(De.r*255,0,255))*65536+Math.round(Ce(De.g*255,0,255))*256+Math.round(Ce(De.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(De.copy(this),e);const i=De.r,s=De.g,r=De.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=ye){te.fromWorkingColorSpace(De.copy(this),t);const e=De.r,i=De.g,s=De.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(tr);const i=ws(Gn.h,tr.h,e),s=ws(Gn.s,tr.s,e),r=ws(Gn.l,tr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Rt;Rt.NAMES=Gu;let qf=0;class Ri extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=Qi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qa,this.blendDst=to,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qa&&(i.blendSrc=this.blendSrc),this.blendDst!==to&&(i.blendDst=this.blendDst),this.blendEquation!==fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ei extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new D,er=new dt;class Pe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Dl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=$i(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Oe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),i=Oe(i,this.array),s=Oe(s,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dl&&(t.usage=this.usage),t}}class Hu extends Pe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Vu extends Pe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Zt extends Pe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Yf=0;const Ke=new $t,La=new Me,ki=new D,Ye=new wi,vs=new wi,Ae=new D;class _e extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fu(t)?Vu:Hu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,i){return Ke.makeTranslation(t,e,i),this.applyMatrix4(Ke),this}scale(t,e,i){return Ke.makeScale(t,e,i),this.applyMatrix4(Ke),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Ye.min,vs.min),Ye.expandByPoint(Ae),Ae.addVectors(Ye.max,vs.max),Ye.expandByPoint(Ae)):(Ye.expandByPoint(vs.min),Ye.expandByPoint(vs.max))}Ye.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ae.fromBufferAttribute(a,c),l&&(ki.fromBufferAttribute(t,c),Ae.add(ki)),s=Math.max(s,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new D,u[b]=new D;const h=new D,f=new D,m=new D,_=new dt,v=new dt,p=new dt,d=new D,y=new D;function x(b,V,W){h.fromArray(s,b*3),f.fromArray(s,V*3),m.fromArray(s,W*3),_.fromArray(o,b*2),v.fromArray(o,V*2),p.fromArray(o,W*2),f.sub(h),m.sub(h),v.sub(_),p.sub(_);const ut=1/(v.x*p.y-p.x*v.y);isFinite(ut)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(ut),y.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(ut),c[b].add(d),c[V].add(d),c[W].add(d),u[b].add(y),u[V].add(y),u[W].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let b=0,V=S.length;b<V;++b){const W=S[b],ut=W.start,O=W.count;for(let j=ut,Z=ut+O;j<Z;j+=3)x(i[j+0],i[j+1],i[j+2])}const L=new D,T=new D,w=new D,U=new D;function E(b){w.fromArray(r,b*3),U.copy(w);const V=c[b];L.copy(V),L.sub(w.multiplyScalar(w.dot(V))).normalize(),T.crossVectors(U,V);const ut=T.dot(u[b])<0?-1:1;l[b*4]=L.x,l[b*4+1]=L.y,l[b*4+2]=L.z,l[b*4+3]=ut}for(let b=0,V=S.length;b<V;++b){const W=S[b],ut=W.start,O=W.count;for(let j=ut,Z=ut+O;j<Z;j+=3)E(i[j+0]),E(i[j+1]),E(i[j+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*u;for(let d=0;d<u;d++)f[_++]=c[m++]}return new Pe(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yl=new $t,li=new wo,nr=new Ci,jl=new D,Gi=new D,Hi=new D,Vi=new D,Ia=new D,ir=new D,sr=new dt,rr=new dt,ar=new dt,$l=new D,Zl=new D,Kl=new D,or=new D,lr=new D;class ee extends Me{constructor(t=new _e,e=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Ia.fromBufferAttribute(h,t),o?ir.addScaledVector(Ia,u):ir.addScaledVector(Ia.sub(e),u))}e.add(ir)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nr.copy(i.boundingSphere),nr.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(nr.containsPoint(li.origin)===!1&&(li.intersectSphere(nr,jl)===null||li.origin.distanceToSquared(jl)>(t.far-t.near)**2))&&(Yl.copy(r).invert(),li.copy(t.ray).applyMatrix4(Yl),!(i.boundingBox!==null&&li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=o[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,L=x;S<L;S+=3){const T=a.getX(S),w=a.getX(S+1),U=a.getX(S+2);s=cr(this,d,t,i,c,u,h,T,w,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const y=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);s=cr(this,o,t,i,c,u,h,y,x,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=o[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,L=x;S<L;S+=3){const T=S,w=S+1,U=S+2;s=cr(this,d,t,i,c,u,h,T,w,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const y=p,x=p+1,S=p+2;s=cr(this,o,t,i,c,u,h,y,x,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function jf(n,t,e,i,s,r,o,a){let l;if(t.side===We?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ti,a),l===null)return null;lr.copy(a),lr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(lr);return c<e.near||c>e.far?null:{distance:c,point:lr.clone(),object:n}}function cr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Gi),n.getVertexPosition(l,Hi),n.getVertexPosition(c,Vi);const u=jf(n,t,e,i,Gi,Hi,Vi,or);if(u){s&&(sr.fromBufferAttribute(s,a),rr.fromBufferAttribute(s,l),ar.fromBufferAttribute(s,c),u.uv=tn.getInterpolation(or,Gi,Hi,Vi,sr,rr,ar,new dt)),r&&(sr.fromBufferAttribute(r,a),rr.fromBufferAttribute(r,l),ar.fromBufferAttribute(r,c),u.uv1=tn.getInterpolation(or,Gi,Hi,Vi,sr,rr,ar,new dt),u.uv2=u.uv1),o&&($l.fromBufferAttribute(o,a),Zl.fromBufferAttribute(o,l),Kl.fromBufferAttribute(o,c),u.normal=tn.getInterpolation(or,Gi,Hi,Vi,$l,Zl,Kl,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};tn.getNormal(Gi,Hi,Vi,h.normal),u.face=h}return u}class Nn extends _e{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2));function _(v,p,d,y,x,S,L,T,w,U,E){const b=S/w,V=L/U,W=S/2,ut=L/2,O=T/2,j=w+1,Z=U+1;let J=0,H=0;const st=new D;for(let at=0;at<Z;at++){const pt=at*V-ut;for(let xt=0;xt<j;xt++){const rt=xt*b-W;st[v]=rt*y,st[p]=pt*x,st[d]=O,c.push(st.x,st.y,st.z),st[v]=0,st[p]=0,st[d]=T>0?1:-1,u.push(st.x,st.y,st.z),h.push(xt/w),h.push(1-at/U),J+=1}}for(let at=0;at<U;at++)for(let pt=0;pt<w;pt++){const xt=f+pt+j*at,rt=f+pt+j*(at+1),N=f+(pt+1)+j*(at+1),I=f+(pt+1)+j*at;l.push(xt,rt,I),l.push(rt,N,I),H+=6}a.addGroup(m,H,E),m+=H,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function as(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Be(n){const t={};for(let e=0;e<n.length;e++){const i=as(n[e]);for(const s in i)t[s]=i[s]}return t}function $f(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Wu(n){return n.getRenderTarget()===null?n.outputColorSpace:te.workingColorSpace}const Zf={clone:as,merge:Be};var Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=Jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=$f(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Xu extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends Xu{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ts*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class Qf extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new en(Wi,Xi,t,e);s.layers=this.layers,this.add(s);const r=new en(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const o=new en(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const a=new en(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const l=new en(Wi,Xi,t,e);l.layers=this.layers,this.add(l);const c=new en(Wi,Xi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===In)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class qu extends je{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tp extends Ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(Cs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===vi?ye:nn),this.texture=new qu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nn(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:$n});r.uniforms.tEquirect.value=e;const o=new ee(s,r),a=e.minFilter;return e.minFilter===Ds&&(e.minFilter=Qe),new Qf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Da=new D,ep=new D,np=new zt;class hi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Da.subVectors(i,e).cross(ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Da),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||np.getNormalMatrix(t),s=this.coplanarPoint(Da).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new Ci,ur=new D;class Co{constructor(t=new hi,e=new hi,i=new hi,s=new hi,r=new hi,o=new hi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=In){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],m=s[8],_=s[9],v=s[10],p=s[11],d=s[12],y=s[13],x=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,p-m,S-d).normalize(),i[1].setComponents(l+r,f+c,p+m,S+d).normalize(),i[2].setComponents(l+o,f+u,p+_,S+y).normalize(),i[3].setComponents(l-o,f-u,p-_,S-y).normalize(),i[4].setComponents(l-a,f-h,p-v,S-x).normalize(),e===In)i[5].setComponents(l+a,f+h,p+v,S+x).normalize();else if(e===kr)i[5].setComponents(a,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ur.x=s.normal.x>0?t.max.x:t.min.x,ur.y=s.normal.y>0?t.max.y:t.min.y,ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yu(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ip(n,t){const e=t.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,f=c.usage,m=h.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=n.SHORT;else if(h instanceof Uint32Array)v=n.UNSIGNED_INT;else if(h instanceof Int32Array)v=n.INT;else if(h instanceof Int8Array)v=n.BYTE;else if(h instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,h){const f=u.array,m=u._updateRange,_=u.updateRanges;if(n.bindBuffer(h,c),m.count===-1&&_.length===0&&n.bufferSubData(h,0,f),_.length!==0){for(let v=0,p=_.length;v<p;v++){const d=_[v];e?n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class Pi extends _e{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,f=e/l,m=[],_=[],v=[],p=[];for(let d=0;d<u;d++){const y=d*f-o;for(let x=0;x<c;x++){const S=x*h-r;_.push(S,-y,0),v.push(0,0,1),p.push(x/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const x=y+c*d,S=y+c*(d+1),L=y+1+c*(d+1),T=y+1+c*d;m.push(x,S,T),m.push(S,L,T)}this.setIndex(m),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.width,t.height,t.widthSegments,t.heightSegments)}}var sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rp=`#ifdef USE_ALPHAHASH
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
#endif`,ap=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
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
#endif`,hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
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
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_p=`#ifdef USE_IRIDESCENCE
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
#endif`,xp=`#ifdef USE_BUMPMAP
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wp=`#define PI 3.141592653589793
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
} // validated`,Cp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rp=`vec3 transformedNormal = objectNormal;
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
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Np="gl_FragColor = linearToOutputTexel( gl_FragColor );",Up=`
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
}`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zp=`uniform bool receiveShadow;
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
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nm=`PhysicalMaterial material;
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
#endif`,im=`struct PhysicalMaterial {
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
}`,sm=`
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pm=`#if defined( USE_POINTS_UV )
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
#endif`,mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_m=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xm=`#ifdef USE_MORPHNORMALS
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
#endif`,vm=`#ifdef USE_MORPHTARGETS
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
#endif`,ym=`#ifdef USE_MORPHTARGETS
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
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Am=`#ifdef USE_NORMALMAP
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
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hm=`float getShadowMask() {
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
}`,Vm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ag=`#ifdef ENVMAP_TYPE_CUBE
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
}`,og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
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
}`,ug=`#if DEPTH_PACKING == 3200
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
}`,hg=`#define DISTANCE
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
}`,dg=`#define DISTANCE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`uniform float scale;
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#include <common>
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
}`,xg=`uniform vec3 diffuse;
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
}`,vg=`#define LAMBERT
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
}`,yg=`#define LAMBERT
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
}`,Mg=`#define MATCAP
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
}`,Sg=`#define MATCAP
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
}`,Eg=`#define NORMAL
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
}`,bg=`#define NORMAL
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
}`,Tg=`#define PHONG
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
}`,Ag=`#define PHONG
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
}`,wg=`#define STANDARD
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
}`,Cg=`#define STANDARD
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
}`,Rg=`#define TOON
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
}`,Pg=`#define TOON
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
}`,Lg=`uniform float size;
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
}`,Ig=`uniform vec3 diffuse;
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
}`,Dg=`#include <common>
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
}`,Ng=`uniform vec3 color;
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
}`,Ug=`uniform float rotation;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:sp,alphahash_pars_fragment:rp,alphamap_fragment:ap,alphamap_pars_fragment:op,alphatest_fragment:lp,alphatest_pars_fragment:cp,aomap_fragment:up,aomap_pars_fragment:hp,batching_pars_vertex:dp,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:_p,bumpmap_pars_fragment:xp,clipping_planes_fragment:vp,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:Sp,color_fragment:Ep,color_pars_fragment:bp,color_pars_vertex:Tp,color_vertex:Ap,common:wp,cube_uv_reflection_fragment:Cp,defaultnormal_vertex:Rp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Lp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Dp,colorspace_fragment:Np,colorspace_pars_fragment:Up,envmap_fragment:Fp,envmap_common_pars_fragment:Op,envmap_pars_fragment:Bp,envmap_pars_vertex:zp,envmap_physical_pars_fragment:Kp,envmap_vertex:kp,fog_vertex:Gp,fog_pars_vertex:Hp,fog_fragment:Vp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_fragment:qp,lightmap_pars_fragment:Yp,lights_lambert_fragment:jp,lights_lambert_pars_fragment:$p,lights_pars_begin:Zp,lights_toon_fragment:Jp,lights_toon_pars_fragment:Qp,lights_phong_fragment:tm,lights_phong_pars_fragment:em,lights_physical_fragment:nm,lights_physical_pars_fragment:im,lights_fragment_begin:sm,lights_fragment_maps:rm,lights_fragment_end:am,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:lm,logdepthbuf_pars_vertex:cm,logdepthbuf_vertex:um,map_fragment:hm,map_pars_fragment:dm,map_particle_fragment:fm,map_particle_pars_fragment:pm,metalnessmap_fragment:mm,metalnessmap_pars_fragment:gm,morphcolor_vertex:_m,morphnormal_vertex:xm,morphtarget_pars_vertex:vm,morphtarget_vertex:ym,normal_fragment_begin:Mm,normal_fragment_maps:Sm,normal_pars_fragment:Em,normal_pars_vertex:bm,normal_vertex:Tm,normalmap_pars_fragment:Am,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Cm,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Pm,opaque_fragment:Lm,packing:Im,premultiplied_alpha_fragment:Dm,project_vertex:Nm,dithering_fragment:Um,dithering_pars_fragment:Fm,roughnessmap_fragment:Om,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:km,shadowmap_vertex:Gm,shadowmask_pars_fragment:Hm,skinbase_vertex:Vm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:qm,specularmap_fragment:Ym,specularmap_pars_fragment:jm,tonemapping_fragment:$m,tonemapping_pars_fragment:Zm,transmission_fragment:Km,transmission_pars_fragment:Jm,uv_pars_fragment:Qm,uv_pars_vertex:tg,uv_vertex:eg,worldpos_vertex:ng,background_vert:ig,background_frag:sg,backgroundCube_vert:rg,backgroundCube_frag:ag,cube_vert:og,cube_frag:lg,depth_vert:cg,depth_frag:ug,distanceRGBA_vert:hg,distanceRGBA_frag:dg,equirect_vert:fg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:_g,meshbasic_frag:xg,meshlambert_vert:vg,meshlambert_frag:yg,meshmatcap_vert:Mg,meshmatcap_frag:Sg,meshnormal_vert:Eg,meshnormal_frag:bg,meshphong_vert:Tg,meshphong_frag:Ag,meshphysical_vert:wg,meshphysical_frag:Cg,meshtoon_vert:Rg,meshtoon_frag:Pg,points_vert:Lg,points_frag:Ig,shadow_vert:Dg,shadow_frag:Ng,sprite_vert:Ug,sprite_frag:Fg},Mt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},xn={basic:{uniforms:Be([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Be([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Be([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Be([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Be([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Be([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Be([Mt.points,Mt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Be([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Be([Mt.common,Mt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Be([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Be([Mt.sprite,Mt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Be([Mt.common,Mt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Be([Mt.lights,Mt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};xn.physical={uniforms:Be([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const hr={r:0,b:0,g:0};function Og(n,t,e,i,s,r,o){const a=new Rt(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function _(p,d){let y=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?v(a,l):x&&x.isColor&&(v(x,1),y=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Kr)?(u===void 0&&(u=new ee(new Nn(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:as(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=te.getTransfer(x.colorSpace)!==ae,(h!==x||f!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ee(new Pi(2,2),new ni({name:"BackgroundMaterial",uniforms:as(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=te.getTransfer(x.colorSpace)!==ae,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,d){p.getRGB(hr,Wu(n)),i.buffers.color.setClear(hr.r,hr.g,hr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(a,l)},render:_}}function Bg(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function h(O,j,Z,J,H){let st=!1;if(o){const at=v(J,Z,j);c!==at&&(c=at,m(c.object)),st=d(O,J,Z,H),st&&y(O,J,Z,H)}else{const at=j.wireframe===!0;(c.geometry!==J.id||c.program!==Z.id||c.wireframe!==at)&&(c.geometry=J.id,c.program=Z.id,c.wireframe=at,st=!0)}H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(st||u)&&(u=!1,U(O,j,Z,J),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(O){return i.isWebGL2?n.bindVertexArray(O):r.bindVertexArrayOES(O)}function _(O){return i.isWebGL2?n.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function v(O,j,Z){const J=Z.wireframe===!0;let H=a[O.id];H===void 0&&(H={},a[O.id]=H);let st=H[j.id];st===void 0&&(st={},H[j.id]=st);let at=st[J];return at===void 0&&(at=p(f()),st[J]=at),at}function p(O){const j=[],Z=[],J=[];for(let H=0;H<s;H++)j[H]=0,Z[H]=0,J[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:Z,attributeDivisors:J,object:O,attributes:{},index:null}}function d(O,j,Z,J){const H=c.attributes,st=j.attributes;let at=0;const pt=Z.getAttributes();for(const xt in pt)if(pt[xt].location>=0){const N=H[xt];let I=st[xt];if(I===void 0&&(xt==="instanceMatrix"&&O.instanceMatrix&&(I=O.instanceMatrix),xt==="instanceColor"&&O.instanceColor&&(I=O.instanceColor)),N===void 0||N.attribute!==I||I&&N.data!==I.data)return!0;at++}return c.attributesNum!==at||c.index!==J}function y(O,j,Z,J){const H={},st=j.attributes;let at=0;const pt=Z.getAttributes();for(const xt in pt)if(pt[xt].location>=0){let N=st[xt];N===void 0&&(xt==="instanceMatrix"&&O.instanceMatrix&&(N=O.instanceMatrix),xt==="instanceColor"&&O.instanceColor&&(N=O.instanceColor));const I={};I.attribute=N,N&&N.data&&(I.data=N.data),H[xt]=I,at++}c.attributes=H,c.attributesNum=at,c.index=J}function x(){const O=c.newAttributes;for(let j=0,Z=O.length;j<Z;j++)O[j]=0}function S(O){L(O,0)}function L(O,j){const Z=c.newAttributes,J=c.enabledAttributes,H=c.attributeDivisors;Z[O]=1,J[O]===0&&(n.enableVertexAttribArray(O),J[O]=1),H[O]!==j&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,j),H[O]=j)}function T(){const O=c.newAttributes,j=c.enabledAttributes;for(let Z=0,J=j.length;Z<J;Z++)j[Z]!==O[Z]&&(n.disableVertexAttribArray(Z),j[Z]=0)}function w(O,j,Z,J,H,st,at){at===!0?n.vertexAttribIPointer(O,j,Z,H,st):n.vertexAttribPointer(O,j,Z,J,H,st)}function U(O,j,Z,J){if(i.isWebGL2===!1&&(O.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const H=J.attributes,st=Z.getAttributes(),at=j.defaultAttributeValues;for(const pt in st){const xt=st[pt];if(xt.location>=0){let rt=H[pt];if(rt===void 0&&(pt==="instanceMatrix"&&O.instanceMatrix&&(rt=O.instanceMatrix),pt==="instanceColor"&&O.instanceColor&&(rt=O.instanceColor)),rt!==void 0){const N=rt.normalized,I=rt.itemSize,R=e.get(rt);if(R===void 0)continue;const A=R.buffer,K=R.type,lt=R.bytesPerElement,X=i.isWebGL2===!0&&(K===n.INT||K===n.UNSIGNED_INT||rt.gpuType===Au);if(rt.isInterleavedBufferAttribute){const ct=rt.data,P=ct.stride,tt=rt.offset;if(ct.isInstancedInterleavedBuffer){for(let B=0;B<xt.locationSize;B++)L(xt.location+B,ct.meshPerAttribute);O.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let B=0;B<xt.locationSize;B++)S(xt.location+B);n.bindBuffer(n.ARRAY_BUFFER,A);for(let B=0;B<xt.locationSize;B++)w(xt.location+B,I/xt.locationSize,K,N,P*lt,(tt+I/xt.locationSize*B)*lt,X)}else{if(rt.isInstancedBufferAttribute){for(let ct=0;ct<xt.locationSize;ct++)L(xt.location+ct,rt.meshPerAttribute);O.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ct=0;ct<xt.locationSize;ct++)S(xt.location+ct);n.bindBuffer(n.ARRAY_BUFFER,A);for(let ct=0;ct<xt.locationSize;ct++)w(xt.location+ct,I/xt.locationSize,K,N,I*lt,I/xt.locationSize*ct*lt,X)}}else if(at!==void 0){const N=at[pt];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(xt.location,N);break;case 3:n.vertexAttrib3fv(xt.location,N);break;case 4:n.vertexAttrib4fv(xt.location,N);break;default:n.vertexAttrib1fv(xt.location,N)}}}}T()}function E(){W();for(const O in a){const j=a[O];for(const Z in j){const J=j[Z];for(const H in J)_(J[H].object),delete J[H];delete j[Z]}delete a[O]}}function b(O){if(a[O.id]===void 0)return;const j=a[O.id];for(const Z in j){const J=j[Z];for(const H in J)_(J[H].object),delete J[H];delete j[Z]}delete a[O.id]}function V(O){for(const j in a){const Z=a[j];if(Z[O.id]===void 0)continue;const J=Z[O.id];for(const H in J)_(J[H].object),delete J[H];delete Z[O.id]}}function W(){ut(),u=!0,c!==l&&(c=l,m(c.object))}function ut(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:ut,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:S,disableUnusedAttributes:T}}function zg(n,t,e,i){const s=i.isWebGL2;let r;function o(u){r=u}function a(u,h){n.drawArrays(r,u,h),e.update(h,r,1)}function l(u,h,f){if(f===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,u,h,f),e.update(h,r,f)}function c(u,h,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(u[_],h[_]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=h[v];e.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function kg(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,S=o||t.has("OES_texture_float"),L=x&&S,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:L,maxSamples:T}}function Gg(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new hi,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const y=r?0:i,x=y*4;let S=d.clippingState||null;l.value=S,S=u(_,f,x,m);for(let L=0;L!==x;++L)S[L]=e[L];d.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,m,_){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const d=m+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,S=m;x!==v;++x,S+=4)o.copy(h[x]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Hg(n){let t=new WeakMap;function e(o,a){return a===eo?o.mapping=is:a===no&&(o.mapping=ss),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===eo||a===no)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tp(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class ju extends Xu{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Zi=4,Jl=[.125,.215,.35,.446,.526,.582],pi=20,Na=new ju,Ql=new Rt;let Ua=null,Fa=0,Oa=0;const di=(1+Math.sqrt(5))/2,qi=1/di,tc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,di,qi),new D(0,di,-qi),new D(qi,0,di),new D(-qi,0,di),new D(di,qi,0),new D(-di,qi,0)];class ec{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ua=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Fa,Oa),t.scissorTest=!1,dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Ns,format:dn,colorSpace:Dn,depthBuffer:!1},s=nc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vg(r)),this._blurMaterial=Wg(r,t,e)}return s}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,Na)}_sceneToCubeUV(t,e,i,s){const a=new en(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ql),u.toneMapping=Zn,u.autoClear=!1;const m=new ei({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),_=new ee(new Nn,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(Ql),v=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const x=this._cubeSize;dr(s,y*x,d>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===is||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;dr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Na)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=tc[(s-1)%tc.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ee(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*pi-1),v=r/_,p=isFinite(r)?1+Math.floor(u*v):pi;p>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pi}`);const d=[];let y=0;for(let w=0;w<pi;++w){const U=w/v,E=Math.exp(-U*U/2);d.push(E),w===0?y+=E:w<p&&(y+=2*E)}for(let w=0;w<d.length;w++)d[w]=d[w]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const S=this._sizeLods[s],L=3*S*(s>x-Zi?s-x+Zi:0),T=4*(this._cubeSize-S);dr(e,L,T,3*S,2*S),l.setRenderTarget(e),l.render(h,Na)}}function Vg(n){const t=[],e=[],i=[];let s=n;const r=n-Zi+1+Jl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Zi?l=Jl[o-n+Zi-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,v=3,p=2,d=1,y=new Float32Array(v*_*m),x=new Float32Array(p*_*m),S=new Float32Array(d*_*m);for(let T=0;T<m;T++){const w=T%3*2/3-1,U=T>2?0:-1,E=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];y.set(E,v*_*T),x.set(f,p*_*T);const b=[T,T,T,T,T,T];S.set(b,d*_*T)}const L=new _e;L.setAttribute("position",new Pe(y,v)),L.setAttribute("uv",new Pe(x,p)),L.setAttribute("faceIndex",new Pe(S,d)),t.push(L),s>Zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function nc(n,t,e){const i=new Ei(n,t,e);return i.texture.mapping=Kr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function dr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Wg(n,t,e){const i=new Float32Array(pi),s=new D(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function ic(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function sc(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}function Xg(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===eo||l===no,u=l===is||l===ss;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new ec(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new ec(n));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function qg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Yg(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let p=0,d=v.length;p<d;p++)t.remove(v[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,d=v.length;p<d;p++)t.update(v[p],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let v=0;if(m!==null){const y=m.array;v=m.version;for(let x=0,S=y.length;x<S;x+=3){const L=y[x+0],T=y[x+1],w=y[x+2];f.push(L,T,T,w,w,L)}}else if(_!==void 0){const y=_.array;v=_.version;for(let x=0,S=y.length/3-1;x<S;x+=3){const L=x+0,T=x+1,w=x+2;f.push(L,T,T,w,w,L)}}else return;const p=new(Fu(f)?Vu:Hu)(f,1);p.version=v;const d=r.get(h);d&&t.remove(d),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function jg(n,t,e,i){const s=i.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,_){n.drawElements(r,_,a,m*l),e.update(_,r,1)}function h(m,_,v){if(v===0)return;let p,d;if(s)p=n,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,_,a,m*l,v),e.update(_,r,v)}function f(m,_,v){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<v;d++)this.render(m[d]/l,_[d]);else{p.multiDrawElementsWEBGL(r,_,0,a,m,0,v);let d=0;for(let y=0;y<v;y++)d+=_[y];e.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function $g(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Zg(n,t){return n[0]-t[0]}function Kg(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Jg(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,o=new we,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let v=r.get(u);if(v===void 0||v.count!==_){let O=function(){W.dispose(),r.delete(u),u.removeEventListener("dispose",O)};v!==void 0&&v.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let U=0;y===!0&&(U=1),x===!0&&(U=2),S===!0&&(U=3);let E=u.attributes.position.count*U,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const V=new Float32Array(E*b*4*_),W=new zu(V,E,b,_);W.type=Yn,W.needsUpdate=!0;const ut=U*4;for(let j=0;j<_;j++){const Z=L[j],J=T[j],H=w[j],st=E*b*4*j;for(let at=0;at<Z.count;at++){const pt=at*ut;y===!0&&(o.fromBufferAttribute(Z,at),V[st+pt+0]=o.x,V[st+pt+1]=o.y,V[st+pt+2]=o.z,V[st+pt+3]=0),x===!0&&(o.fromBufferAttribute(J,at),V[st+pt+4]=o.x,V[st+pt+5]=o.y,V[st+pt+6]=o.z,V[st+pt+7]=0),S===!0&&(o.fromBufferAttribute(H,at),V[st+pt+8]=o.x,V[st+pt+9]=o.y,V[st+pt+10]=o.z,V[st+pt+11]=H.itemSize===4?o.w:1)}}v={count:_,texture:W,size:new dt(E,b)},r.set(u,v),u.addEventListener("dispose",O)}let p=0;for(let y=0;y<f.length;y++)p+=f[y];const d=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",d),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const m=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==m){_=[];for(let x=0;x<m;x++)_[x]=[x,0];i[u.id]=_}for(let x=0;x<m;x++){const S=_[x];S[0]=x,S[1]=f[x]}_.sort(Kg);for(let x=0;x<8;x++)x<m&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Zg);const v=u.morphAttributes.position,p=u.morphAttributes.normal;let d=0;for(let x=0;x<8;x++){const S=a[x],L=S[0],T=S[1];L!==Number.MAX_SAFE_INTEGER&&T?(v&&u.getAttribute("morphTarget"+x)!==v[L]&&u.setAttribute("morphTarget"+x,v[L]),p&&u.getAttribute("morphNormal"+x)!==p[L]&&u.setAttribute("morphNormal"+x,p[L]),s[x]=T,d+=T):(v&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),s[x]=0)}const y=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Qg(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class $u extends je{constructor(t,e,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:xi,u!==xi&&u!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===xi&&(i=qn),i===void 0&&u===rs&&(i=_i),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zu=new je,Ku=new $u(1,1);Ku.compareFunction=Uu;const Ju=new zu,Qu=new Of,th=new qu,rc=[],ac=[],oc=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function hs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=rc[s];if(r===void 0&&(r=new Float32Array(s),rc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Qr(n,t){let e=ac[t];e===void 0&&(e=new Int32Array(t),ac[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function t0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function e0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function n0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function i0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function s0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;cc.set(i),n.uniformMatrix2fv(this.addr,!1,cc),Ee(e,i)}}function r0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;lc.set(i),n.uniformMatrix3fv(this.addr,!1,lc),Ee(e,i)}}function a0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;oc.set(i),n.uniformMatrix4fv(this.addr,!1,oc),Ee(e,i)}}function o0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function l0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function c0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function u0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function h0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function d0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function f0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function p0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function m0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?Ku:Zu;e.setTexture2D(t||r,s)}function g0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Qu,s)}function _0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||th,s)}function x0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ju,s)}function v0(n){switch(n){case 5126:return t0;case 35664:return e0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return u0;case 5125:return h0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return x0}}function y0(n,t){n.uniform1fv(this.addr,t)}function M0(n,t){const e=hs(t,this.size,2);n.uniform2fv(this.addr,e)}function S0(n,t){const e=hs(t,this.size,3);n.uniform3fv(this.addr,e)}function E0(n,t){const e=hs(t,this.size,4);n.uniform4fv(this.addr,e)}function b0(n,t){const e=hs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function T0(n,t){const e=hs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function A0(n,t){const e=hs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function w0(n,t){n.uniform1iv(this.addr,t)}function C0(n,t){n.uniform2iv(this.addr,t)}function R0(n,t){n.uniform3iv(this.addr,t)}function P0(n,t){n.uniform4iv(this.addr,t)}function L0(n,t){n.uniform1uiv(this.addr,t)}function I0(n,t){n.uniform2uiv(this.addr,t)}function D0(n,t){n.uniform3uiv(this.addr,t)}function N0(n,t){n.uniform4uiv(this.addr,t)}function U0(n,t,e){const i=this.cache,s=t.length,r=Qr(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Zu,r[o])}function F0(n,t,e){const i=this.cache,s=t.length,r=Qr(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qu,r[o])}function O0(n,t,e){const i=this.cache,s=t.length,r=Qr(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||th,r[o])}function B0(n,t,e){const i=this.cache,s=t.length,r=Qr(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ju,r[o])}function z0(n){switch(n){case 5126:return y0;case 35664:return M0;case 35665:return S0;case 35666:return E0;case 35674:return b0;case 35675:return T0;case 35676:return A0;case 5124:case 35670:return w0;case 35667:case 35671:return C0;case 35668:case 35672:return R0;case 35669:case 35673:return P0;case 5125:return L0;case 36294:return I0;case 36295:return D0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return B0}}class k0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=v0(e.type)}}class G0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=z0(e.type)}}class H0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ba=/(\w+)(\])?(\[|\.)?/g;function uc(n,t){n.seq.push(t),n.map[t.id]=t}function V0(n,t,e){const i=n.name,s=i.length;for(Ba.lastIndex=0;;){const r=Ba.exec(i),o=Ba.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){uc(e,c===void 0?new k0(a,n,t):new G0(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new H0(a),uc(e,h)),e=h}}}class Pr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);V0(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function hc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const W0=37297;let X0=0;function q0(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Y0(n){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(n);let i;switch(t===e?i="":t===zr&&e===Br?i="LinearDisplayP3ToLinearSRGB":t===Br&&e===zr&&(i="LinearSRGBToLinearDisplayP3"),n){case Dn:case Jr:return[i,"LinearTransferOETF"];case ye:case To:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function dc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+q0(n.getShaderSource(t),o)}else return s}function j0(n,t){const e=Y0(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function $0(n,t){let e;switch(t){case qd:e="Linear";break;case Yd:e="Reinhard";break;case jd:e="OptimizedCineon";break;case $d:e="ACESFilmic";break;case Kd:e="AgX";break;case Zd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Z0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ki).join(`
`)}function K0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ki).join(`
`)}function J0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Q0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ki(n){return n!==""}function fc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function oo(n){return n.replace(t_,n_)}const e_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function n_(n,t){let e=Wt[t];if(e===void 0){const i=e_.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return oo(e)}const i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mc(n){return n.replace(i_,s_)}function s_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gc(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function r_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===yd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function a_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case Kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function o_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function l_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Eo:t="ENVMAP_BLENDING_MULTIPLY";break;case Wd:t="ENVMAP_BLENDING_MIX";break;case Xd:t="ENVMAP_BLENDING_ADD";break}return t}function c_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function u_(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=r_(e),c=a_(e),u=o_(e),h=l_(e),f=c_(e),m=e.isWebGL2?"":Z0(e),_=K0(e),v=J0(r),p=s.createProgram();let d,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ki).join(`
`),d.length>0&&(d+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ki).join(`
`),y.length>0&&(y+=`
`)):(d=[gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ki).join(`
`),y=[m,gc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?$0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,j0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ki).join(`
`)),o=oo(o),o=fc(o,e),o=pc(o,e),a=oo(a),a=fc(a,e),a=pc(a,e),o=mc(o),a=mc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=x+d+o,L=x+y+a,T=hc(s,s.VERTEX_SHADER,S),w=hc(s,s.FRAGMENT_SHADER,L);s.attachShader(p,T),s.attachShader(p,w),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function U(W){if(n.debug.checkShaderErrors){const ut=s.getProgramInfoLog(p).trim(),O=s.getShaderInfoLog(T).trim(),j=s.getShaderInfoLog(w).trim();let Z=!0,J=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,T,w);else{const H=dc(s,T,"vertex"),st=dc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+ut+`
`+H+`
`+st)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(O===""||j==="")&&(J=!1);J&&(W.diagnostics={runnable:Z,programLog:ut,vertexShader:{log:O,prefix:d},fragmentShader:{log:j,prefix:y}})}s.deleteShader(T),s.deleteShader(w),E=new Pr(s,p),b=Q0(s,p)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let V=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=s.getProgramParameter(p,W0)),V},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=X0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=w,this}let h_=0;class d_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new f_(t),e.set(t,i)),i}}class f_{constructor(t){this.id=h_++,this.code=t,this.usedTimes=0}}function p_(n,t,e,i,s,r,o){const a=new ku,l=new d_,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function p(E,b,V,W,ut){const O=W.fog,j=ut.geometry,Z=E.isMeshStandardMaterial?W.environment:null,J=(E.isMeshStandardMaterial?e:t).get(E.envMap||Z),H=J&&J.mapping===Kr?J.image.height:null,st=_[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const at=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pt=at!==void 0?at.length:0;let xt=0;j.morphAttributes.position!==void 0&&(xt=1),j.morphAttributes.normal!==void 0&&(xt=2),j.morphAttributes.color!==void 0&&(xt=3);let rt,N,I,R;if(st){const Ue=xn[st];rt=Ue.vertexShader,N=Ue.fragmentShader}else rt=E.vertexShader,N=E.fragmentShader,l.update(E),I=l.getVertexShaderID(E),R=l.getFragmentShaderID(E);const A=n.getRenderTarget(),K=ut.isInstancedMesh===!0,lt=ut.isBatchedMesh===!0,X=!!E.map,ct=!!E.matcap,P=!!J,tt=!!E.aoMap,B=!!E.lightMap,Y=!!E.bumpMap,q=!!E.normalMap,ht=!!E.displacementMap,F=!!E.emissiveMap,g=!!E.metalnessMap,M=!!E.roughnessMap,k=E.anisotropy>0,ft=E.clearcoat>0,mt=E.iridescence>0,ot=E.sheen>0,Tt=E.transmission>0,vt=k&&!!E.anisotropyMap,At=ft&&!!E.clearcoatMap,Lt=ft&&!!E.clearcoatNormalMap,Ft=ft&&!!E.clearcoatRoughnessMap,gt=mt&&!!E.iridescenceMap,jt=mt&&!!E.iridescenceThicknessMap,Ht=ot&&!!E.sheenColorMap,Ot=ot&&!!E.sheenRoughnessMap,It=!!E.specularMap,Ct=!!E.specularColorMap,Vt=!!E.specularIntensityMap,Qt=Tt&&!!E.transmissionMap,ue=Tt&&!!E.thicknessMap,qt=!!E.gradientMap,yt=!!E.alphaMap,z=E.alphaTest>0,Et=!!E.alphaHash,bt=!!E.extensions,Ut=!!j.attributes.uv1,Dt=!!j.attributes.uv2,ie=!!j.attributes.uv3;let se=Zn;return E.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(se=n.toneMapping),{isWebGL2:u,shaderID:st,shaderType:E.type,shaderName:E.name,vertexShader:rt,fragmentShader:N,defines:E.defines,customVertexShaderID:I,customFragmentShaderID:R,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:lt,instancing:K,instancingColor:K&&ut.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:A===null?n.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Dn,map:X,matcap:ct,envMap:P,envMapMode:P&&J.mapping,envMapCubeUVHeight:H,aoMap:tt,lightMap:B,bumpMap:Y,normalMap:q,displacementMap:f&&ht,emissiveMap:F,normalMapObjectSpace:q&&E.normalMapType===uf,normalMapTangentSpace:q&&E.normalMapType===Nu,metalnessMap:g,roughnessMap:M,anisotropy:k,anisotropyMap:vt,clearcoat:ft,clearcoatMap:At,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Ft,iridescence:mt,iridescenceMap:gt,iridescenceThicknessMap:jt,sheen:ot,sheenColorMap:Ht,sheenRoughnessMap:Ot,specularMap:It,specularColorMap:Ct,specularIntensityMap:Vt,transmission:Tt,transmissionMap:Qt,thicknessMap:ue,gradientMap:qt,opaque:E.transparent===!1&&E.blending===Qi,alphaMap:yt,alphaTest:z,alphaHash:Et,combine:E.combine,mapUv:X&&v(E.map.channel),aoMapUv:tt&&v(E.aoMap.channel),lightMapUv:B&&v(E.lightMap.channel),bumpMapUv:Y&&v(E.bumpMap.channel),normalMapUv:q&&v(E.normalMap.channel),displacementMapUv:ht&&v(E.displacementMap.channel),emissiveMapUv:F&&v(E.emissiveMap.channel),metalnessMapUv:g&&v(E.metalnessMap.channel),roughnessMapUv:M&&v(E.roughnessMap.channel),anisotropyMapUv:vt&&v(E.anisotropyMap.channel),clearcoatMapUv:At&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&v(E.sheenRoughnessMap.channel),specularMapUv:It&&v(E.specularMap.channel),specularColorMapUv:Ct&&v(E.specularColorMap.channel),specularIntensityMapUv:Vt&&v(E.specularIntensityMap.channel),transmissionMapUv:Qt&&v(E.transmissionMap.channel),thicknessMapUv:ue&&v(E.thicknessMap.channel),alphaMapUv:yt&&v(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(q||k),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:Dt,vertexUv3s:ie,pointsUvs:ut.isPoints===!0&&!!j.attributes.uv&&(X||yt),fog:!!O,useFog:E.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ut.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:xt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&V.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,useLegacyLights:n._useLegacyLights,decodeVideoTexture:X&&E.map.isVideoTexture===!0&&te.getTransfer(E.map.colorSpace)===ae,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ve,flipSided:E.side===We,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:bt&&E.extensions.derivatives===!0,extensionFragDepth:bt&&E.extensions.fragDepth===!0,extensionDrawBuffers:bt&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:bt&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:bt&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)b.push(V),b.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(y(b,E),x(b,E),b.push(n.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function y(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function x(E,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),E.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function S(E){const b=_[E.type];let V;if(b){const W=xn[b];V=Zf.clone(W.uniforms)}else V=E.uniforms;return V}function L(E,b){let V;for(let W=0,ut=c.length;W<ut;W++){const O=c[W];if(O.cacheKey===b){V=O,++V.usedTimes;break}}return V===void 0&&(V=new u_(n,b,E,r),c.push(V)),V}function T(E){if(--E.usedTimes===0){const b=c.indexOf(E);c[b]=c[c.length-1],c.pop(),E.destroy()}}function w(E){l.remove(E)}function U(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:S,acquireProgram:L,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:U}}function m_(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function g_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function _c(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function xc(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,m,_,v,p){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:v,group:p},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=v,d.group=p),t++,d}function a(h,f,m,_,v,p){const d=o(h,f,m,_,v,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(h,f,m,_,v,p){const d=o(h,f,m,_,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||g_),i.length>1&&i.sort(f||_c),s.length>1&&s.sort(f||_c)}function u(){for(let h=t,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function __(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new xc,n.set(i,[o])):s>=r.length?(o=new xc,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function x_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Rt};break;case"SpotLight":e={position:new D,direction:new D,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function v_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let y_=0;function M_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function S_(n,t){const e=new x_,i=v_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new D);const r=new D,o=new $t,a=new $t;function l(u,h){let f=0,m=0,_=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let v=0,p=0,d=0,y=0,x=0,S=0,L=0,T=0,w=0,U=0,E=0;u.sort(M_);const b=h===!0?Math.PI:1;for(let W=0,ut=u.length;W<ut;W++){const O=u[W],j=O.color,Z=O.intensity,J=O.distance,H=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=j.r*Z*b,m+=j.g*Z*b,_+=j.b*Z*b;else if(O.isLightProbe){for(let st=0;st<9;st++)s.probe[st].addScaledVector(O.sh.coefficients[st],Z);E++}else if(O.isDirectionalLight){const st=e.get(O);if(st.color.copy(O.color).multiplyScalar(O.intensity*b),O.castShadow){const at=O.shadow,pt=i.get(O);pt.shadowBias=at.bias,pt.shadowNormalBias=at.normalBias,pt.shadowRadius=at.radius,pt.shadowMapSize=at.mapSize,s.directionalShadow[v]=pt,s.directionalShadowMap[v]=H,s.directionalShadowMatrix[v]=O.shadow.matrix,S++}s.directional[v]=st,v++}else if(O.isSpotLight){const st=e.get(O);st.position.setFromMatrixPosition(O.matrixWorld),st.color.copy(j).multiplyScalar(Z*b),st.distance=J,st.coneCos=Math.cos(O.angle),st.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),st.decay=O.decay,s.spot[d]=st;const at=O.shadow;if(O.map&&(s.spotLightMap[w]=O.map,w++,at.updateMatrices(O),O.castShadow&&U++),s.spotLightMatrix[d]=at.matrix,O.castShadow){const pt=i.get(O);pt.shadowBias=at.bias,pt.shadowNormalBias=at.normalBias,pt.shadowRadius=at.radius,pt.shadowMapSize=at.mapSize,s.spotShadow[d]=pt,s.spotShadowMap[d]=H,T++}d++}else if(O.isRectAreaLight){const st=e.get(O);st.color.copy(j).multiplyScalar(Z),st.halfWidth.set(O.width*.5,0,0),st.halfHeight.set(0,O.height*.5,0),s.rectArea[y]=st,y++}else if(O.isPointLight){const st=e.get(O);if(st.color.copy(O.color).multiplyScalar(O.intensity*b),st.distance=O.distance,st.decay=O.decay,O.castShadow){const at=O.shadow,pt=i.get(O);pt.shadowBias=at.bias,pt.shadowNormalBias=at.normalBias,pt.shadowRadius=at.radius,pt.shadowMapSize=at.mapSize,pt.shadowCameraNear=at.camera.near,pt.shadowCameraFar=at.camera.far,s.pointShadow[p]=pt,s.pointShadowMap[p]=H,s.pointShadowMatrix[p]=O.shadow.matrix,L++}s.point[p]=st,p++}else if(O.isHemisphereLight){const st=e.get(O);st.skyColor.copy(O.color).multiplyScalar(Z*b),st.groundColor.copy(O.groundColor).multiplyScalar(Z*b),s.hemi[x]=st,x++}}y>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_FLOAT_1,s.rectAreaLTC2=Mt.LTC_FLOAT_2):(s.rectAreaLTC1=Mt.LTC_HALF_1,s.rectAreaLTC2=Mt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_FLOAT_1,s.rectAreaLTC2=Mt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_HALF_1,s.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;const V=s.hash;(V.directionalLength!==v||V.pointLength!==p||V.spotLength!==d||V.rectAreaLength!==y||V.hemiLength!==x||V.numDirectionalShadows!==S||V.numPointShadows!==L||V.numSpotShadows!==T||V.numSpotMaps!==w||V.numLightProbes!==E)&&(s.directional.length=v,s.spot.length=d,s.rectArea.length=y,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=T+w-U,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=E,V.directionalLength=v,V.pointLength=p,V.spotLength=d,V.rectAreaLength=y,V.hemiLength=x,V.numDirectionalShadows=S,V.numPointShadows=L,V.numSpotShadows=T,V.numSpotMaps=w,V.numLightProbes=E,s.version=y_++)}function c(u,h){let f=0,m=0,_=0,v=0,p=0;const d=h.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const S=u[y];if(S.isDirectionalLight){const L=s.directional[f];L.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),f++}else if(S.isSpotLight){const L=s.spot[_];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),_++}else if(S.isRectAreaLight){const L=s.rectArea[v];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),L.halfWidth.set(S.width*.5,0,0),L.halfHeight.set(0,S.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const L=s.point[m];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const L=s.hemi[p];L.direction.setFromMatrixPosition(S.matrixWorld),L.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:s}}function vc(n,t){const e=new S_(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function E_(n,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new vc(n,t),e.set(r,[l])):o>=a.length?(l=new vc(n,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:i,dispose:s}}class b_ extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class T_ extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w_=`uniform sampler2D shadow_pass;
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
}`;function C_(n,t,e){let i=new Co;const s=new dt,r=new dt,o=new we,a=new b_({depthPacking:cf}),l=new T_,c={},u=e.maxTextureSize,h={[ti]:We,[We]:ti,[Ve]:Ve},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:A_,fragmentShader:w_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new _e;_.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ee(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bu;let d=this.type;this.render=function(T,w,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const E=n.getRenderTarget(),b=n.getActiveCubeFace(),V=n.getActiveMipmapLevel(),W=n.state;W.setBlending($n),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ut=d!==Ln&&this.type===Ln,O=d===Ln&&this.type!==Ln;for(let j=0,Z=T.length;j<Z;j++){const J=T[j],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const st=H.getFrameExtents();if(s.multiply(st),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||ut===!0||O===!0){const pt=this.type!==Ln?{minFilter:ze,magFilter:ze}:{};H.map!==null&&H.map.dispose(),H.map=new Ei(s.x,s.y,pt),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const at=H.getViewportCount();for(let pt=0;pt<at;pt++){const xt=H.getViewport(pt);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),W.viewport(o),H.updateMatrices(J,pt),i=H.getFrustum(),S(w,U,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===Ln&&y(H,U),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(E,b,V)};function y(T,w){const U=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ei(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,U,f,v,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,U,m,v,null)}function x(T,w,U,E){let b=null;const V=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)b=V;else if(b=U.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=b.uuid,ut=w.uuid;let O=c[W];O===void 0&&(O={},c[W]=O);let j=O[ut];j===void 0&&(j=b.clone(),O[ut]=j,w.addEventListener("dispose",L)),b=j}if(b.visible=w.visible,b.wireframe=w.wireframe,E===Ln?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,U.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const W=n.properties.get(b);W.light=U}return b}function S(T,w,U,E,b){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===Ln)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);const ut=t.update(T),O=T.material;if(Array.isArray(O)){const j=ut.groups;for(let Z=0,J=j.length;Z<J;Z++){const H=j[Z],st=O[H.materialIndex];if(st&&st.visible){const at=x(T,st,E,b);T.onBeforeShadow(n,T,w,U,ut,at,H),n.renderBufferDirect(U,null,ut,at,T,H),T.onAfterShadow(n,T,w,U,ut,at,H)}}}else if(O.visible){const j=x(T,O,E,b);T.onBeforeShadow(n,T,w,U,ut,j,null),n.renderBufferDirect(U,null,ut,j,T,null),T.onAfterShadow(n,T,w,U,ut,j,null)}}const W=T.children;for(let ut=0,O=W.length;ut<O;ut++)S(W[ut],w,U,E,b)}function L(T){T.target.removeEventListener("dispose",L);for(const U in c){const E=c[U],b=T.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}function R_(n,t,e){const i=e.isWebGL2;function s(){let z=!1;const Et=new we;let bt=null;const Ut=new we(0,0,0,0);return{setMask:function(Dt){bt!==Dt&&!z&&(n.colorMask(Dt,Dt,Dt,Dt),bt=Dt)},setLocked:function(Dt){z=Dt},setClear:function(Dt,ie,se,be,Ue){Ue===!0&&(Dt*=be,ie*=be,se*=be),Et.set(Dt,ie,se,be),Ut.equals(Et)===!1&&(n.clearColor(Dt,ie,se,be),Ut.copy(Et))},reset:function(){z=!1,bt=null,Ut.set(-1,0,0,0)}}}function r(){let z=!1,Et=null,bt=null,Ut=null;return{setTest:function(Dt){Dt?lt(n.DEPTH_TEST):X(n.DEPTH_TEST)},setMask:function(Dt){Et!==Dt&&!z&&(n.depthMask(Dt),Et=Dt)},setFunc:function(Dt){if(bt!==Dt){switch(Dt){case Od:n.depthFunc(n.NEVER);break;case Bd:n.depthFunc(n.ALWAYS);break;case zd:n.depthFunc(n.LESS);break;case Fr:n.depthFunc(n.LEQUAL);break;case kd:n.depthFunc(n.EQUAL);break;case Gd:n.depthFunc(n.GEQUAL);break;case Hd:n.depthFunc(n.GREATER);break;case Vd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}bt=Dt}},setLocked:function(Dt){z=Dt},setClear:function(Dt){Ut!==Dt&&(n.clearDepth(Dt),Ut=Dt)},reset:function(){z=!1,Et=null,bt=null,Ut=null}}}function o(){let z=!1,Et=null,bt=null,Ut=null,Dt=null,ie=null,se=null,be=null,Ue=null;return{setTest:function(re){z||(re?lt(n.STENCIL_TEST):X(n.STENCIL_TEST))},setMask:function(re){Et!==re&&!z&&(n.stencilMask(re),Et=re)},setFunc:function(re,Fe,gn){(bt!==re||Ut!==Fe||Dt!==gn)&&(n.stencilFunc(re,Fe,gn),bt=re,Ut=Fe,Dt=gn)},setOp:function(re,Fe,gn){(ie!==re||se!==Fe||be!==gn)&&(n.stencilOp(re,Fe,gn),ie=re,se=Fe,be=gn)},setLocked:function(re){z=re},setClear:function(re){Ue!==re&&(n.clearStencil(re),Ue=re)},reset:function(){z=!1,Et=null,bt=null,Ut=null,Dt=null,ie=null,se=null,be=null,Ue=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,v=[],p=null,d=!1,y=null,x=null,S=null,L=null,T=null,w=null,U=null,E=new Rt(0,0,0),b=0,V=!1,W=null,ut=null,O=null,j=null,Z=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,st=0;const at=n.getParameter(n.VERSION);at.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(at)[1]),H=st>=1):at.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),H=st>=2);let pt=null,xt={};const rt=n.getParameter(n.SCISSOR_BOX),N=n.getParameter(n.VIEWPORT),I=new we().fromArray(rt),R=new we().fromArray(N);function A(z,Et,bt,Ut){const Dt=new Uint8Array(4),ie=n.createTexture();n.bindTexture(z,ie),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<bt;se++)i&&(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)?n.texImage3D(Et,0,n.RGBA,1,1,Ut,0,n.RGBA,n.UNSIGNED_BYTE,Dt):n.texImage2D(Et+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Dt);return ie}const K={};K[n.TEXTURE_2D]=A(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=A(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(K[n.TEXTURE_2D_ARRAY]=A(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=A(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),lt(n.DEPTH_TEST),l.setFunc(Fr),F(!1),g(el),lt(n.CULL_FACE),q($n);function lt(z){f[z]!==!0&&(n.enable(z),f[z]=!0)}function X(z){f[z]!==!1&&(n.disable(z),f[z]=!1)}function ct(z,Et){return m[z]!==Et?(n.bindFramebuffer(z,Et),m[z]=Et,i&&(z===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Et),z===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Et)),!0):!1}function P(z,Et){let bt=v,Ut=!1;if(z)if(bt=_.get(Et),bt===void 0&&(bt=[],_.set(Et,bt)),z.isWebGLMultipleRenderTargets){const Dt=z.texture;if(bt.length!==Dt.length||bt[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,se=Dt.length;ie<se;ie++)bt[ie]=n.COLOR_ATTACHMENT0+ie;bt.length=Dt.length,Ut=!0}}else bt[0]!==n.COLOR_ATTACHMENT0&&(bt[0]=n.COLOR_ATTACHMENT0,Ut=!0);else bt[0]!==n.BACK&&(bt[0]=n.BACK,Ut=!0);Ut&&(e.isWebGL2?n.drawBuffers(bt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(bt))}function tt(z){return p!==z?(n.useProgram(z),p=z,!0):!1}const B={[fi]:n.FUNC_ADD,[Sd]:n.FUNC_SUBTRACT,[Ed]:n.FUNC_REVERSE_SUBTRACT};if(i)B[sl]=n.MIN,B[rl]=n.MAX;else{const z=t.get("EXT_blend_minmax");z!==null&&(B[sl]=z.MIN_EXT,B[rl]=z.MAX_EXT)}const Y={[bd]:n.ZERO,[Td]:n.ONE,[Ad]:n.SRC_COLOR,[Qa]:n.SRC_ALPHA,[Id]:n.SRC_ALPHA_SATURATE,[Pd]:n.DST_COLOR,[Cd]:n.DST_ALPHA,[wd]:n.ONE_MINUS_SRC_COLOR,[to]:n.ONE_MINUS_SRC_ALPHA,[Ld]:n.ONE_MINUS_DST_COLOR,[Rd]:n.ONE_MINUS_DST_ALPHA,[Dd]:n.CONSTANT_COLOR,[Nd]:n.ONE_MINUS_CONSTANT_COLOR,[Ud]:n.CONSTANT_ALPHA,[Fd]:n.ONE_MINUS_CONSTANT_ALPHA};function q(z,Et,bt,Ut,Dt,ie,se,be,Ue,re){if(z===$n){d===!0&&(X(n.BLEND),d=!1);return}if(d===!1&&(lt(n.BLEND),d=!0),z!==Md){if(z!==y||re!==V){if((x!==fi||T!==fi)&&(n.blendEquation(n.FUNC_ADD),x=fi,T=fi),re)switch(z){case Qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ur:n.blendFunc(n.ONE,n.ONE);break;case nl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case il:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ur:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case nl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case il:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}S=null,L=null,w=null,U=null,E.set(0,0,0),b=0,y=z,V=re}return}Dt=Dt||Et,ie=ie||bt,se=se||Ut,(Et!==x||Dt!==T)&&(n.blendEquationSeparate(B[Et],B[Dt]),x=Et,T=Dt),(bt!==S||Ut!==L||ie!==w||se!==U)&&(n.blendFuncSeparate(Y[bt],Y[Ut],Y[ie],Y[se]),S=bt,L=Ut,w=ie,U=se),(be.equals(E)===!1||Ue!==b)&&(n.blendColor(be.r,be.g,be.b,Ue),E.copy(be),b=Ue),y=z,V=!1}function ht(z,Et){z.side===Ve?X(n.CULL_FACE):lt(n.CULL_FACE);let bt=z.side===We;Et&&(bt=!bt),F(bt),z.blending===Qi&&z.transparent===!1?q($n):q(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const Ut=z.stencilWrite;c.setTest(Ut),Ut&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),k(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):X(n.SAMPLE_ALPHA_TO_COVERAGE)}function F(z){W!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),W=z)}function g(z){z!==xd?(lt(n.CULL_FACE),z!==ut&&(z===el?n.cullFace(n.BACK):z===vd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):X(n.CULL_FACE),ut=z}function M(z){z!==O&&(H&&n.lineWidth(z),O=z)}function k(z,Et,bt){z?(lt(n.POLYGON_OFFSET_FILL),(j!==Et||Z!==bt)&&(n.polygonOffset(Et,bt),j=Et,Z=bt)):X(n.POLYGON_OFFSET_FILL)}function ft(z){z?lt(n.SCISSOR_TEST):X(n.SCISSOR_TEST)}function mt(z){z===void 0&&(z=n.TEXTURE0+J-1),pt!==z&&(n.activeTexture(z),pt=z)}function ot(z,Et,bt){bt===void 0&&(pt===null?bt=n.TEXTURE0+J-1:bt=pt);let Ut=xt[bt];Ut===void 0&&(Ut={type:void 0,texture:void 0},xt[bt]=Ut),(Ut.type!==z||Ut.texture!==Et)&&(pt!==bt&&(n.activeTexture(bt),pt=bt),n.bindTexture(z,Et||K[z]),Ut.type=z,Ut.texture=Et)}function Tt(){const z=xt[pt];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function vt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ft(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function jt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ht(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ot(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Vt(z){I.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),I.copy(z))}function Qt(z){R.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),R.copy(z))}function ue(z,Et){let bt=h.get(Et);bt===void 0&&(bt=new WeakMap,h.set(Et,bt));let Ut=bt.get(z);Ut===void 0&&(Ut=n.getUniformBlockIndex(Et,z.name),bt.set(z,Ut))}function qt(z,Et){const Ut=h.get(Et).get(z);u.get(Et)!==Ut&&(n.uniformBlockBinding(Et,Ut,z.__bindingPointIndex),u.set(Et,Ut))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},pt=null,xt={},m={},_=new WeakMap,v=[],p=null,d=!1,y=null,x=null,S=null,L=null,T=null,w=null,U=null,E=new Rt(0,0,0),b=0,V=!1,W=null,ut=null,O=null,j=null,Z=null,I.set(0,0,n.canvas.width,n.canvas.height),R.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:lt,disable:X,bindFramebuffer:ct,drawBuffers:P,useProgram:tt,setBlending:q,setMaterial:ht,setFlipSided:F,setCullFace:g,setLineWidth:M,setPolygonOffset:k,setScissorTest:ft,activeTexture:mt,bindTexture:ot,unbindTexture:Tt,compressedTexImage2D:vt,compressedTexImage3D:At,texImage2D:It,texImage3D:Ct,updateUBOMapping:ue,uniformBlockBinding:qt,texStorage2D:Ht,texStorage3D:Ot,texSubImage2D:Lt,texSubImage3D:Ft,compressedTexSubImage2D:gt,compressedTexSubImage3D:jt,scissor:Vt,viewport:Qt,reset:yt}}function P_(n,t,e,i,s,r,o){const a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(g,M){return m?new OffscreenCanvas(g,M):Hr("canvas")}function v(g,M,k,ft){let mt=1;if((g.width>ft||g.height>ft)&&(mt=ft/Math.max(g.width,g.height)),mt<1||M===!0)if(typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&g instanceof ImageBitmap){const ot=M?Gr:Math.floor,Tt=ot(mt*g.width),vt=ot(mt*g.height);h===void 0&&(h=_(Tt,vt));const At=k?_(Tt,vt):h;return At.width=Tt,At.height=vt,At.getContext("2d").drawImage(g,0,0,Tt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+g.width+"x"+g.height+") to ("+Tt+"x"+vt+")."),At}else return"data"in g&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+g.width+"x"+g.height+")."),g;return g}function p(g){return ao(g.width)&&ao(g.height)}function d(g){return a?!1:g.wrapS!==hn||g.wrapT!==hn||g.minFilter!==ze&&g.minFilter!==Qe}function y(g,M){return g.generateMipmaps&&M&&g.minFilter!==ze&&g.minFilter!==Qe}function x(g){n.generateMipmap(g)}function S(g,M,k,ft,mt=!1){if(a===!1)return M;if(g!==null){if(n[g]!==void 0)return n[g];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+g+"'")}let ot=M;if(M===n.RED&&(k===n.FLOAT&&(ot=n.R32F),k===n.HALF_FLOAT&&(ot=n.R16F),k===n.UNSIGNED_BYTE&&(ot=n.R8)),M===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(ot=n.R8UI),k===n.UNSIGNED_SHORT&&(ot=n.R16UI),k===n.UNSIGNED_INT&&(ot=n.R32UI),k===n.BYTE&&(ot=n.R8I),k===n.SHORT&&(ot=n.R16I),k===n.INT&&(ot=n.R32I)),M===n.RG&&(k===n.FLOAT&&(ot=n.RG32F),k===n.HALF_FLOAT&&(ot=n.RG16F),k===n.UNSIGNED_BYTE&&(ot=n.RG8)),M===n.RGBA){const Tt=mt?Or:te.getTransfer(ft);k===n.FLOAT&&(ot=n.RGBA32F),k===n.HALF_FLOAT&&(ot=n.RGBA16F),k===n.UNSIGNED_BYTE&&(ot=Tt===ae?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function L(g,M,k){return y(g,k)===!0||g.isFramebufferTexture&&g.minFilter!==ze&&g.minFilter!==Qe?Math.log2(Math.max(M.width,M.height))+1:g.mipmaps!==void 0&&g.mipmaps.length>0?g.mipmaps.length:g.isCompressedTexture&&Array.isArray(g.image)?M.mipmaps.length:1}function T(g){return g===ze||g===al||g===ha?n.NEAREST:n.LINEAR}function w(g){const M=g.target;M.removeEventListener("dispose",w),E(M),M.isVideoTexture&&u.delete(M)}function U(g){const M=g.target;M.removeEventListener("dispose",U),V(M)}function E(g){const M=i.get(g);if(M.__webglInit===void 0)return;const k=g.source,ft=f.get(k);if(ft){const mt=ft[M.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&b(g),Object.keys(ft).length===0&&f.delete(k)}i.remove(g)}function b(g){const M=i.get(g);n.deleteTexture(M.__webglTexture);const k=g.source,ft=f.get(k);delete ft[M.__cacheKey],o.memory.textures--}function V(g){const M=g.texture,k=i.get(g),ft=i.get(M);if(ft.__webglTexture!==void 0&&(n.deleteTexture(ft.__webglTexture),o.memory.textures--),g.depthTexture&&g.depthTexture.dispose(),g.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(k.__webglFramebuffer[mt]))for(let ot=0;ot<k.__webglFramebuffer[mt].length;ot++)n.deleteFramebuffer(k.__webglFramebuffer[mt][ot]);else n.deleteFramebuffer(k.__webglFramebuffer[mt]);k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer[mt])}else{if(Array.isArray(k.__webglFramebuffer))for(let mt=0;mt<k.__webglFramebuffer.length;mt++)n.deleteFramebuffer(k.__webglFramebuffer[mt]);else n.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&n.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&n.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let mt=0;mt<k.__webglColorRenderbuffer.length;mt++)k.__webglColorRenderbuffer[mt]&&n.deleteRenderbuffer(k.__webglColorRenderbuffer[mt]);k.__webglDepthRenderbuffer&&n.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(g.isWebGLMultipleRenderTargets)for(let mt=0,ot=M.length;mt<ot;mt++){const Tt=i.get(M[mt]);Tt.__webglTexture&&(n.deleteTexture(Tt.__webglTexture),o.memory.textures--),i.remove(M[mt])}i.remove(M),i.remove(g)}let W=0;function ut(){W=0}function O(){const g=W;return g>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+g+" texture units while this GPU supports only "+s.maxTextures),W+=1,g}function j(g){const M=[];return M.push(g.wrapS),M.push(g.wrapT),M.push(g.wrapR||0),M.push(g.magFilter),M.push(g.minFilter),M.push(g.anisotropy),M.push(g.internalFormat),M.push(g.format),M.push(g.type),M.push(g.generateMipmaps),M.push(g.premultiplyAlpha),M.push(g.flipY),M.push(g.unpackAlignment),M.push(g.colorSpace),M.join()}function Z(g,M){const k=i.get(g);if(g.isVideoTexture&&ht(g),g.isRenderTargetTexture===!1&&g.version>0&&k.__version!==g.version){const ft=g.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(k,g,M);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+M)}function J(g,M){const k=i.get(g);if(g.version>0&&k.__version!==g.version){I(k,g,M);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+M)}function H(g,M){const k=i.get(g);if(g.version>0&&k.__version!==g.version){I(k,g,M);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+M)}function st(g,M){const k=i.get(g);if(g.version>0&&k.__version!==g.version){R(k,g,M);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+M)}const at={[io]:n.REPEAT,[hn]:n.CLAMP_TO_EDGE,[so]:n.MIRRORED_REPEAT},pt={[ze]:n.NEAREST,[al]:n.NEAREST_MIPMAP_NEAREST,[ha]:n.NEAREST_MIPMAP_LINEAR,[Qe]:n.LINEAR,[Jd]:n.LINEAR_MIPMAP_NEAREST,[Ds]:n.LINEAR_MIPMAP_LINEAR},xt={[hf]:n.NEVER,[_f]:n.ALWAYS,[df]:n.LESS,[Uu]:n.LEQUAL,[ff]:n.EQUAL,[gf]:n.GEQUAL,[pf]:n.GREATER,[mf]:n.NOTEQUAL};function rt(g,M,k){if(k?(n.texParameteri(g,n.TEXTURE_WRAP_S,at[M.wrapS]),n.texParameteri(g,n.TEXTURE_WRAP_T,at[M.wrapT]),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,at[M.wrapR]),n.texParameteri(g,n.TEXTURE_MAG_FILTER,pt[M.magFilter]),n.texParameteri(g,n.TEXTURE_MIN_FILTER,pt[M.minFilter])):(n.texParameteri(g,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(g,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==hn||M.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(g,n.TEXTURE_MAG_FILTER,T(M.magFilter)),n.texParameteri(g,n.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==ze&&M.minFilter!==Qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(g,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(g,n.TEXTURE_COMPARE_FUNC,xt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ft=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===ze||M.minFilter!==ha&&M.minFilter!==Ds||M.type===Yn&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ns&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(n.texParameterf(g,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function N(g,M){let k=!1;g.__webglInit===void 0&&(g.__webglInit=!0,M.addEventListener("dispose",w));const ft=M.source;let mt=f.get(ft);mt===void 0&&(mt={},f.set(ft,mt));const ot=j(M);if(ot!==g.__cacheKey){mt[ot]===void 0&&(mt[ot]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),mt[ot].usedTimes++;const Tt=mt[g.__cacheKey];Tt!==void 0&&(mt[g.__cacheKey].usedTimes--,Tt.usedTimes===0&&b(M)),g.__cacheKey=ot,g.__webglTexture=mt[ot].texture}return k}function I(g,M,k){let ft=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ft=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ft=n.TEXTURE_3D);const mt=N(g,M),ot=M.source;e.bindTexture(ft,g.__webglTexture,n.TEXTURE0+k);const Tt=i.get(ot);if(ot.version!==Tt.__version||mt===!0){e.activeTexture(n.TEXTURE0+k);const vt=te.getPrimaries(te.workingColorSpace),At=M.colorSpace===nn?null:te.getPrimaries(M.colorSpace),Lt=M.colorSpace===nn||vt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const Ft=d(M)&&p(M.image)===!1;let gt=v(M.image,Ft,!1,s.maxTextureSize);gt=F(M,gt);const jt=p(gt)||a,Ht=r.convert(M.format,M.colorSpace);let Ot=r.convert(M.type),It=S(M.internalFormat,Ht,Ot,M.colorSpace,M.isVideoTexture);rt(ft,M,jt);let Ct;const Vt=M.mipmaps,Qt=a&&M.isVideoTexture!==!0&&It!==Iu,ue=Tt.__version===void 0||mt===!0,qt=L(M,gt,jt);if(M.isDepthTexture)It=n.DEPTH_COMPONENT,a?M.type===Yn?It=n.DEPTH_COMPONENT32F:M.type===qn?It=n.DEPTH_COMPONENT24:M.type===_i?It=n.DEPTH24_STENCIL8:It=n.DEPTH_COMPONENT16:M.type===Yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===xi&&It===n.DEPTH_COMPONENT&&M.type!==bo&&M.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=qn,Ot=r.convert(M.type)),M.format===rs&&It===n.DEPTH_COMPONENT&&(It=n.DEPTH_STENCIL,M.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=_i,Ot=r.convert(M.type))),ue&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,It,gt.width,gt.height):e.texImage2D(n.TEXTURE_2D,0,It,gt.width,gt.height,0,Ht,Ot,null));else if(M.isDataTexture)if(Vt.length>0&&jt){Qt&&ue&&e.texStorage2D(n.TEXTURE_2D,qt,It,Vt[0].width,Vt[0].height);for(let yt=0,z=Vt.length;yt<z;yt++)Ct=Vt[yt],Qt?e.texSubImage2D(n.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ht,Ot,Ct.data):e.texImage2D(n.TEXTURE_2D,yt,It,Ct.width,Ct.height,0,Ht,Ot,Ct.data);M.generateMipmaps=!1}else Qt?(ue&&e.texStorage2D(n.TEXTURE_2D,qt,It,gt.width,gt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,gt.width,gt.height,Ht,Ot,gt.data)):e.texImage2D(n.TEXTURE_2D,0,It,gt.width,gt.height,0,Ht,Ot,gt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qt&&ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,qt,It,Vt[0].width,Vt[0].height,gt.depth);for(let yt=0,z=Vt.length;yt<z;yt++)Ct=Vt[yt],M.format!==dn?Ht!==null?Qt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,yt,0,0,0,Ct.width,Ct.height,gt.depth,Ht,Ct.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,yt,It,Ct.width,Ct.height,gt.depth,0,Ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,yt,0,0,0,Ct.width,Ct.height,gt.depth,Ht,Ot,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,yt,It,Ct.width,Ct.height,gt.depth,0,Ht,Ot,Ct.data)}else{Qt&&ue&&e.texStorage2D(n.TEXTURE_2D,qt,It,Vt[0].width,Vt[0].height);for(let yt=0,z=Vt.length;yt<z;yt++)Ct=Vt[yt],M.format!==dn?Ht!==null?Qt?e.compressedTexSubImage2D(n.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ht,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,yt,It,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage2D(n.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ht,Ot,Ct.data):e.texImage2D(n.TEXTURE_2D,yt,It,Ct.width,Ct.height,0,Ht,Ot,Ct.data)}else if(M.isDataArrayTexture)Qt?(ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,qt,It,gt.width,gt.height,gt.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,Ht,Ot,gt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,gt.width,gt.height,gt.depth,0,Ht,Ot,gt.data);else if(M.isData3DTexture)Qt?(ue&&e.texStorage3D(n.TEXTURE_3D,qt,It,gt.width,gt.height,gt.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,Ht,Ot,gt.data)):e.texImage3D(n.TEXTURE_3D,0,It,gt.width,gt.height,gt.depth,0,Ht,Ot,gt.data);else if(M.isFramebufferTexture){if(ue)if(Qt)e.texStorage2D(n.TEXTURE_2D,qt,It,gt.width,gt.height);else{let yt=gt.width,z=gt.height;for(let Et=0;Et<qt;Et++)e.texImage2D(n.TEXTURE_2D,Et,It,yt,z,0,Ht,Ot,null),yt>>=1,z>>=1}}else if(Vt.length>0&&jt){Qt&&ue&&e.texStorage2D(n.TEXTURE_2D,qt,It,Vt[0].width,Vt[0].height);for(let yt=0,z=Vt.length;yt<z;yt++)Ct=Vt[yt],Qt?e.texSubImage2D(n.TEXTURE_2D,yt,0,0,Ht,Ot,Ct):e.texImage2D(n.TEXTURE_2D,yt,It,Ht,Ot,Ct);M.generateMipmaps=!1}else Qt?(ue&&e.texStorage2D(n.TEXTURE_2D,qt,It,gt.width,gt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ht,Ot,gt)):e.texImage2D(n.TEXTURE_2D,0,It,Ht,Ot,gt);y(M,jt)&&x(ft),Tt.__version=ot.version,M.onUpdate&&M.onUpdate(M)}g.__version=M.version}function R(g,M,k){if(M.image.length!==6)return;const ft=N(g,M),mt=M.source;e.bindTexture(n.TEXTURE_CUBE_MAP,g.__webglTexture,n.TEXTURE0+k);const ot=i.get(mt);if(mt.version!==ot.__version||ft===!0){e.activeTexture(n.TEXTURE0+k);const Tt=te.getPrimaries(te.workingColorSpace),vt=M.colorSpace===nn?null:te.getPrimaries(M.colorSpace),At=M.colorSpace===nn||Tt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Lt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ft=M.image[0]&&M.image[0].isDataTexture,gt=[];for(let yt=0;yt<6;yt++)!Lt&&!Ft?gt[yt]=v(M.image[yt],!1,!0,s.maxCubemapSize):gt[yt]=Ft?M.image[yt].image:M.image[yt],gt[yt]=F(M,gt[yt]);const jt=gt[0],Ht=p(jt)||a,Ot=r.convert(M.format,M.colorSpace),It=r.convert(M.type),Ct=S(M.internalFormat,Ot,It,M.colorSpace),Vt=a&&M.isVideoTexture!==!0,Qt=ot.__version===void 0||ft===!0;let ue=L(M,jt,Ht);rt(n.TEXTURE_CUBE_MAP,M,Ht);let qt;if(Lt){Vt&&Qt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ct,jt.width,jt.height);for(let yt=0;yt<6;yt++){qt=gt[yt].mipmaps;for(let z=0;z<qt.length;z++){const Et=qt[z];M.format!==dn?Ot!==null?Vt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,z,0,0,Et.width,Et.height,Ot,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,z,Ct,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,z,0,0,Et.width,Et.height,Ot,It,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,z,Ct,Et.width,Et.height,0,Ot,It,Et.data)}}}else{qt=M.mipmaps,Vt&&Qt&&(qt.length>0&&ue++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ct,gt[0].width,gt[0].height));for(let yt=0;yt<6;yt++)if(Ft){Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,gt[yt].width,gt[yt].height,Ot,It,gt[yt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Ct,gt[yt].width,gt[yt].height,0,Ot,It,gt[yt].data);for(let z=0;z<qt.length;z++){const bt=qt[z].image[yt].image;Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,z+1,0,0,bt.width,bt.height,Ot,It,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,z+1,Ct,bt.width,bt.height,0,Ot,It,bt.data)}}else{Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ot,It,gt[yt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Ct,Ot,It,gt[yt]);for(let z=0;z<qt.length;z++){const Et=qt[z];Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,z+1,0,0,Ot,It,Et.image[yt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,z+1,Ct,Ot,It,Et.image[yt])}}}y(M,Ht)&&x(n.TEXTURE_CUBE_MAP),ot.__version=mt.version,M.onUpdate&&M.onUpdate(M)}g.__version=M.version}function A(g,M,k,ft,mt,ot){const Tt=r.convert(k.format,k.colorSpace),vt=r.convert(k.type),At=S(k.internalFormat,Tt,vt,k.colorSpace);if(!i.get(M).__hasExternalTextures){const Ft=Math.max(1,M.width>>ot),gt=Math.max(1,M.height>>ot);mt===n.TEXTURE_3D||mt===n.TEXTURE_2D_ARRAY?e.texImage3D(mt,ot,At,Ft,gt,M.depth,0,Tt,vt,null):e.texImage2D(mt,ot,At,Ft,gt,0,Tt,vt,null)}e.bindFramebuffer(n.FRAMEBUFFER,g),q(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,mt,i.get(k).__webglTexture,0,Y(M)):(mt===n.TEXTURE_2D||mt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ft,mt,i.get(k).__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function K(g,M,k){if(n.bindRenderbuffer(n.RENDERBUFFER,g),M.depthBuffer&&!M.stencilBuffer){let ft=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(k||q(M)){const mt=M.depthTexture;mt&&mt.isDepthTexture&&(mt.type===Yn?ft=n.DEPTH_COMPONENT32F:mt.type===qn&&(ft=n.DEPTH_COMPONENT24));const ot=Y(M);q(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,ft,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,ft,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,ft,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,g)}else if(M.depthBuffer&&M.stencilBuffer){const ft=Y(M);k&&q(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,n.DEPTH24_STENCIL8,M.width,M.height):q(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,g)}else{const ft=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let mt=0;mt<ft.length;mt++){const ot=ft[mt],Tt=r.convert(ot.format,ot.colorSpace),vt=r.convert(ot.type),At=S(ot.internalFormat,Tt,vt,ot.colorSpace),Lt=Y(M);k&&q(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt,At,M.width,M.height):q(M)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt,At,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,At,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function lt(g,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,g),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);const ft=i.get(M.depthTexture).__webglTexture,mt=Y(M);if(M.depthTexture.format===xi)q(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ft,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ft,0);else if(M.depthTexture.format===rs)q(M)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ft,0,mt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ft,0);else throw new Error("Unknown depthTexture format")}function X(g){const M=i.get(g),k=g.isWebGLCubeRenderTarget===!0;if(g.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");lt(M.__webglFramebuffer,g)}else if(k){M.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ft]),M.__webglDepthbuffer[ft]=n.createRenderbuffer(),K(M.__webglDepthbuffer[ft],g,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),K(M.__webglDepthbuffer,g,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(g,M,k){const ft=i.get(g);M!==void 0&&A(ft.__webglFramebuffer,g,g.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&X(g)}function P(g){const M=g.texture,k=i.get(g),ft=i.get(M);g.addEventListener("dispose",U),g.isWebGLMultipleRenderTargets!==!0&&(ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture()),ft.__version=M.version,o.memory.textures++);const mt=g.isWebGLCubeRenderTarget===!0,ot=g.isWebGLMultipleRenderTargets===!0,Tt=p(g)||a;if(mt){k.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[vt]=[];for(let At=0;At<M.mipmaps.length;At++)k.__webglFramebuffer[vt][At]=n.createFramebuffer()}else k.__webglFramebuffer[vt]=n.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let vt=0;vt<M.mipmaps.length;vt++)k.__webglFramebuffer[vt]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(ot)if(s.drawBuffers){const vt=g.texture;for(let At=0,Lt=vt.length;At<Lt;At++){const Ft=i.get(vt[At]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&g.samples>0&&q(g)===!1){const vt=ot?M:[M];k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let At=0;At<vt.length;At++){const Lt=vt[At];k.__webglColorRenderbuffer[At]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[At]);const Ft=r.convert(Lt.format,Lt.colorSpace),gt=r.convert(Lt.type),jt=S(Lt.internalFormat,Ft,gt,Lt.colorSpace,g.isXRRenderTarget===!0),Ht=Y(g);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,jt,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,k.__webglColorRenderbuffer[At])}n.bindRenderbuffer(n.RENDERBUFFER,null),g.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),K(k.__webglDepthRenderbuffer,g,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(mt){e.bindTexture(n.TEXTURE_CUBE_MAP,ft.__webglTexture),rt(n.TEXTURE_CUBE_MAP,M,Tt);for(let vt=0;vt<6;vt++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let At=0;At<M.mipmaps.length;At++)A(k.__webglFramebuffer[vt][At],g,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At);else A(k.__webglFramebuffer[vt],g,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);y(M,Tt)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){const vt=g.texture;for(let At=0,Lt=vt.length;At<Lt;At++){const Ft=vt[At],gt=i.get(Ft);e.bindTexture(n.TEXTURE_2D,gt.__webglTexture),rt(n.TEXTURE_2D,Ft,Tt),A(k.__webglFramebuffer,g,Ft,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,0),y(Ft,Tt)&&x(n.TEXTURE_2D)}e.unbindTexture()}else{let vt=n.TEXTURE_2D;if((g.isWebGL3DRenderTarget||g.isWebGLArrayRenderTarget)&&(a?vt=g.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,ft.__webglTexture),rt(vt,M,Tt),a&&M.mipmaps&&M.mipmaps.length>0)for(let At=0;At<M.mipmaps.length;At++)A(k.__webglFramebuffer[At],g,M,n.COLOR_ATTACHMENT0,vt,At);else A(k.__webglFramebuffer,g,M,n.COLOR_ATTACHMENT0,vt,0);y(M,Tt)&&x(vt),e.unbindTexture()}g.depthBuffer&&X(g)}function tt(g){const M=p(g)||a,k=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let ft=0,mt=k.length;ft<mt;ft++){const ot=k[ft];if(y(ot,M)){const Tt=g.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,vt=i.get(ot).__webglTexture;e.bindTexture(Tt,vt),x(Tt),e.unbindTexture()}}}function B(g){if(a&&g.samples>0&&q(g)===!1){const M=g.isWebGLMultipleRenderTargets?g.texture:[g.texture],k=g.width,ft=g.height;let mt=n.COLOR_BUFFER_BIT;const ot=[],Tt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(g),At=g.isWebGLMultipleRenderTargets===!0;if(At)for(let Lt=0;Lt<M.length;Lt++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Lt=0;Lt<M.length;Lt++){ot.push(n.COLOR_ATTACHMENT0+Lt),g.depthBuffer&&ot.push(Tt);const Ft=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Ft===!1&&(g.depthBuffer&&(mt|=n.DEPTH_BUFFER_BIT),g.stencilBuffer&&(mt|=n.STENCIL_BUFFER_BIT)),At&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[Lt]),Ft===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Tt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Tt])),At){const gt=i.get(M[Lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,gt,0)}n.blitFramebuffer(0,0,k,ft,0,0,k,ft,mt,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),At)for(let Lt=0;Lt<M.length;Lt++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.RENDERBUFFER,vt.__webglColorRenderbuffer[Lt]);const Ft=i.get(M[Lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Lt,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function Y(g){return Math.min(s.maxSamples,g.samples)}function q(g){const M=i.get(g);return a&&g.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ht(g){const M=o.render.frame;u.get(g)!==M&&(u.set(g,M),g.update())}function F(g,M){const k=g.colorSpace,ft=g.format,mt=g.type;return g.isCompressedTexture===!0||g.isVideoTexture===!0||g.format===ro||k!==Dn&&k!==nn&&(te.getTransfer(k)===ae?a===!1?t.has("EXT_sRGB")===!0&&ft===dn?(g.format=ro,g.minFilter=Qe,g.generateMipmaps=!1):M=Ou.sRGBToLinear(M):(ft!==dn||mt!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=O,this.resetTextureUnits=ut,this.setTexture2D=Z,this.setTexture2DArray=J,this.setTexture3D=H,this.setTextureCube=st,this.rebindTextures=ct,this.setupRenderTarget=P,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=A,this.useMultisampledRTT=q}function L_(n,t,e){const i=e.isWebGL2;function s(r,o=nn){let a;const l=te.getTransfer(o);if(r===Kn)return n.UNSIGNED_BYTE;if(r===wu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Cu)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Qd)return n.BYTE;if(r===tf)return n.SHORT;if(r===bo)return n.UNSIGNED_SHORT;if(r===Au)return n.INT;if(r===qn)return n.UNSIGNED_INT;if(r===Yn)return n.FLOAT;if(r===Ns)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ef)return n.ALPHA;if(r===dn)return n.RGBA;if(r===nf)return n.LUMINANCE;if(r===sf)return n.LUMINANCE_ALPHA;if(r===xi)return n.DEPTH_COMPONENT;if(r===rs)return n.DEPTH_STENCIL;if(r===ro)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===rf)return n.RED;if(r===Ru)return n.RED_INTEGER;if(r===af)return n.RG;if(r===Pu)return n.RG_INTEGER;if(r===Lu)return n.RGBA_INTEGER;if(r===da||r===fa||r===pa||r===ma)if(l===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===da)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===da)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ma)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ol||r===ll||r===cl||r===ul)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ol)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ll)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ul)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Iu)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===hl||r===dl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===hl)return l===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===dl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fl||r===pl||r===ml||r===gl||r===_l||r===xl||r===vl||r===yl||r===Ml||r===Sl||r===El||r===bl||r===Tl||r===Al)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===fl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ml)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_l)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ml)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===El)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Al)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ga||r===wl||r===Cl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===ga)return l===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===of||r===Rl||r===Pl||r===Ll)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===ga)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Rl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ll)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_i?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class I_ extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class me extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D_={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(D_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class N_ extends us{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const v=e.getContextAttributes();let p=null,d=null;const y=[],x=[],S=new dt;let L=null;const T=new en;T.layers.enable(1),T.viewport=new we;const w=new en;w.layers.enable(2),w.viewport=new we;const U=[T,w],E=new I_;E.layers.enable(1),E.layers.enable(2);let b=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let N=y[rt];return N===void 0&&(N=new za,y[rt]=N),N.getTargetRaySpace()},this.getControllerGrip=function(rt){let N=y[rt];return N===void 0&&(N=new za,y[rt]=N),N.getGripSpace()},this.getHand=function(rt){let N=y[rt];return N===void 0&&(N=new za,y[rt]=N),N.getHandSpace()};function W(rt){const N=x.indexOf(rt.inputSource);if(N===-1)return;const I=y[N];I!==void 0&&(I.update(rt.inputSource,rt.frame,c||o),I.dispatchEvent({type:rt.type,data:rt.inputSource}))}function ut(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",ut),s.removeEventListener("inputsourceschange",O);for(let rt=0;rt<y.length;rt++){const N=x[rt];N!==null&&(x[rt]=null,y[rt].disconnect(N))}b=null,V=null,t.setRenderTarget(p),m=null,f=null,h=null,s=null,d=null,xt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){r=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(rt){c=rt},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",ut),s.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(S),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const N={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,N),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Ei(m.framebufferWidth,m.framebufferHeight,{format:dn,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let N=null,I=null,R=null;v.depth&&(R=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,N=v.stencil?rs:xi,I=v.stencil?_i:qn);const A={colorFormat:e.RGBA8,depthFormat:R,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(A),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new Ei(f.textureWidth,f.textureHeight,{format:dn,type:Kn,depthTexture:new $u(f.textureWidth,f.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const K=t.properties.get(d);K.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),xt.setContext(s),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(rt){for(let N=0;N<rt.removed.length;N++){const I=rt.removed[N],R=x.indexOf(I);R>=0&&(x[R]=null,y[R].disconnect(I))}for(let N=0;N<rt.added.length;N++){const I=rt.added[N];let R=x.indexOf(I);if(R===-1){for(let K=0;K<y.length;K++)if(K>=x.length){x.push(I),R=K;break}else if(x[K]===null){x[K]=I,R=K;break}if(R===-1)break}const A=y[R];A&&A.connect(I)}}const j=new D,Z=new D;function J(rt,N,I){j.setFromMatrixPosition(N.matrixWorld),Z.setFromMatrixPosition(I.matrixWorld);const R=j.distanceTo(Z),A=N.projectionMatrix.elements,K=I.projectionMatrix.elements,lt=A[14]/(A[10]-1),X=A[14]/(A[10]+1),ct=(A[9]+1)/A[5],P=(A[9]-1)/A[5],tt=(A[8]-1)/A[0],B=(K[8]+1)/K[0],Y=lt*tt,q=lt*B,ht=R/(-tt+B),F=ht*-tt;N.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(F),rt.translateZ(ht),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert();const g=lt+ht,M=X+ht,k=Y-F,ft=q+(R-F),mt=ct*X/M*g,ot=P*X/M*g;rt.projectionMatrix.makePerspective(k,ft,mt,ot,g,M),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}function H(rt,N){N===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(N.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;E.near=w.near=T.near=rt.near,E.far=w.far=T.far=rt.far,(b!==E.near||V!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),b=E.near,V=E.far);const N=rt.parent,I=E.cameras;H(E,N);for(let R=0;R<I.length;R++)H(I[R],N);I.length===2?J(E,T,w):E.projectionMatrix.copy(T.projectionMatrix),st(rt,E,N)};function st(rt,N,I){I===null?rt.matrix.copy(N.matrixWorld):(rt.matrix.copy(I.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(N.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(N.projectionMatrix),rt.projectionMatrixInverse.copy(N.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Us*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(rt){l=rt,f!==null&&(f.fixedFoveation=rt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=rt)};let at=null;function pt(rt,N){if(u=N.getViewerPose(c||o),_=N,u!==null){const I=u.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let R=!1;I.length!==E.cameras.length&&(E.cameras.length=0,R=!0);for(let A=0;A<I.length;A++){const K=I[A];let lt=null;if(m!==null)lt=m.getViewport(K);else{const ct=h.getViewSubImage(f,K);lt=ct.viewport,A===0&&(t.setRenderTargetTextures(d,ct.colorTexture,f.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(d))}let X=U[A];X===void 0&&(X=new en,X.layers.enable(A),X.viewport=new we,U[A]=X),X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(K.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(lt.x,lt.y,lt.width,lt.height),A===0&&(E.matrix.copy(X.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),R===!0&&E.cameras.push(X)}}for(let I=0;I<y.length;I++){const R=x[I],A=y[I];R!==null&&A!==void 0&&A.update(R,N,c||o)}at&&at(rt,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),_=null}const xt=new Yu;xt.setAnimationLoop(pt),this.setAnimationLoop=function(rt){at=rt},this.dispose=function(){}}}function U_(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Wu(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,y,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,S)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,y,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===We&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===We&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=t.get(d).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=x*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===We&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const y=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function F_(n,t,e,i){let s={},r={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const S=x.program;i.uniformBlockBinding(y,S)}function c(y,x){let S=s[y.id];S===void 0&&(_(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",p));const L=x.program;i.updateUBOMapping(y,L);const T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function u(y){const x=h();y.__bindingPointIndex=x;const S=n.createBuffer(),L=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,L,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=s[y.id],S=y.uniforms,L=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,w=S.length;T<w;T++){const U=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,b=U.length;E<b;E++){const V=U[E];if(m(V,T,E,L)===!0){const W=V.__offset,ut=Array.isArray(V.value)?V.value:[V.value];let O=0;for(let j=0;j<ut.length;j++){const Z=ut[j],J=v(Z);typeof Z=="number"||typeof Z=="boolean"?(V.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,W+O,V.__data)):Z.isMatrix3?(V.__data[0]=Z.elements[0],V.__data[1]=Z.elements[1],V.__data[2]=Z.elements[2],V.__data[3]=0,V.__data[4]=Z.elements[3],V.__data[5]=Z.elements[4],V.__data[6]=Z.elements[5],V.__data[7]=0,V.__data[8]=Z.elements[6],V.__data[9]=Z.elements[7],V.__data[10]=Z.elements[8],V.__data[11]=0):(Z.toArray(V.__data,O),O+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,V.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,x,S,L){const T=y.value,w=x+"_"+S;if(L[w]===void 0)return typeof T=="number"||typeof T=="boolean"?L[w]=T:L[w]=T.clone(),!0;{const U=L[w];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return L[w]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function _(y){const x=y.uniforms;let S=0;const L=16;for(let w=0,U=x.length;w<U;w++){const E=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,V=E.length;b<V;b++){const W=E[b],ut=Array.isArray(W.value)?W.value:[W.value];for(let O=0,j=ut.length;O<j;O++){const Z=ut[O],J=v(Z),H=S%L;H!==0&&L-H<J.boundary&&(S+=L-H),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=J.storage}}}const T=S%L;return T>0&&(S+=L-T),y.__size=S,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(const y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class eh{constructor(t={}){const{canvas:e=If(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const d=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this._useLegacyLights=!1,this.toneMapping=Zn,this.toneMappingExposure=1;const x=this;let S=!1,L=0,T=0,w=null,U=-1,E=null;const b=new we,V=new we;let W=null;const ut=new Rt(0);let O=0,j=e.width,Z=e.height,J=1,H=null,st=null;const at=new we(0,0,j,Z),pt=new we(0,0,j,Z);let xt=!1;const rt=new Co;let N=!1,I=!1,R=null;const A=new $t,K=new dt,lt=new D,X={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ct(){return w===null?J:1}let P=i;function tt(C,$){for(let nt=0;nt<C.length;nt++){const it=C[nt],et=e.getContext(it,$);if(et!==null)return et}return null}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${So}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",z,!1),e.addEventListener("webglcontextcreationerror",Et,!1),P===null){const $=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&$.shift(),P=tt($,C),P===null)throw tt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let B,Y,q,ht,F,g,M,k,ft,mt,ot,Tt,vt,At,Lt,Ft,gt,jt,Ht,Ot,It,Ct,Vt,Qt;function ue(){B=new qg(P),Y=new kg(P,B,t),B.init(Y),Ct=new L_(P,B,Y),q=new R_(P,B,Y),ht=new $g(P),F=new m_,g=new P_(P,B,q,F,Y,Ct,ht),M=new Hg(x),k=new Xg(x),ft=new ip(P,Y),Vt=new Bg(P,B,ft,Y),mt=new Yg(P,ft,ht,Vt),ot=new Qg(P,mt,ft,ht),Ht=new Jg(P,Y,g),Ft=new Gg(F),Tt=new p_(x,M,k,B,Y,Vt,Ft),vt=new U_(x,F),At=new __,Lt=new E_(B,Y),jt=new Og(x,M,k,q,ot,f,l),gt=new C_(x,ot,Y),Qt=new F_(P,ht,Y,q),Ot=new zg(P,B,ht,Y),It=new jg(P,B,ht,Y),ht.programs=Tt.programs,x.capabilities=Y,x.extensions=B,x.properties=F,x.renderLists=At,x.shadowMap=gt,x.state=q,x.info=ht}ue();const qt=new N_(x,P);this.xr=qt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const C=B.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=B.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(j,Z,!1))},this.getSize=function(C){return C.set(j,Z)},this.setSize=function(C,$,nt=!0){if(qt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=C,Z=$,e.width=Math.floor(C*J),e.height=Math.floor($*J),nt===!0&&(e.style.width=C+"px",e.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(j*J,Z*J).floor()},this.setDrawingBufferSize=function(C,$,nt){j=C,Z=$,J=nt,e.width=Math.floor(C*nt),e.height=Math.floor($*nt),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(b)},this.getViewport=function(C){return C.copy(at)},this.setViewport=function(C,$,nt,it){C.isVector4?at.set(C.x,C.y,C.z,C.w):at.set(C,$,nt,it),q.viewport(b.copy(at).multiplyScalar(J).floor())},this.getScissor=function(C){return C.copy(pt)},this.setScissor=function(C,$,nt,it){C.isVector4?pt.set(C.x,C.y,C.z,C.w):pt.set(C,$,nt,it),q.scissor(V.copy(pt).multiplyScalar(J).floor())},this.getScissorTest=function(){return xt},this.setScissorTest=function(C){q.setScissorTest(xt=C)},this.setOpaqueSort=function(C){H=C},this.setTransparentSort=function(C){st=C},this.getClearColor=function(C){return C.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(C=!0,$=!0,nt=!0){let it=0;if(C){let et=!1;if(w!==null){const wt=w.texture.format;et=wt===Lu||wt===Pu||wt===Ru}if(et){const wt=w.texture.type,Pt=wt===Kn||wt===qn||wt===bo||wt===_i||wt===wu||wt===Cu,Nt=jt.getClearColor(),Bt=jt.getClearAlpha(),Xt=Nt.r,kt=Nt.g,Gt=Nt.b;Pt?(m[0]=Xt,m[1]=kt,m[2]=Gt,m[3]=Bt,P.clearBufferuiv(P.COLOR,0,m)):(_[0]=Xt,_[1]=kt,_[2]=Gt,_[3]=Bt,P.clearBufferiv(P.COLOR,0,_))}else it|=P.COLOR_BUFFER_BIT}$&&(it|=P.DEPTH_BUFFER_BIT),nt&&(it|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",z,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),At.dispose(),Lt.dispose(),F.dispose(),M.dispose(),k.dispose(),ot.dispose(),Vt.dispose(),Qt.dispose(),Tt.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",Ue),qt.removeEventListener("sessionend",re),R&&(R.dispose(),R=null),Fe.stop()};function yt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=ht.autoReset,$=gt.enabled,nt=gt.autoUpdate,it=gt.needsUpdate,et=gt.type;ue(),ht.autoReset=C,gt.enabled=$,gt.autoUpdate=nt,gt.needsUpdate=it,gt.type=et}function Et(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function bt(C){const $=C.target;$.removeEventListener("dispose",bt),Ut($)}function Ut(C){Dt(C),F.remove(C)}function Dt(C){const $=F.get(C).programs;$!==void 0&&($.forEach(function(nt){Tt.releaseProgram(nt)}),C.isShaderMaterial&&Tt.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,nt,it,et,wt){$===null&&($=X);const Pt=et.isMesh&&et.matrixWorld.determinant()<0,Nt=zh(C,$,nt,it,et);q.setMaterial(it,Pt);let Bt=nt.index,Xt=1;if(it.wireframe===!0){if(Bt=mt.getWireframeAttribute(nt),Bt===void 0)return;Xt=2}const kt=nt.drawRange,Gt=nt.attributes.position;let de=kt.start*Xt,Xe=(kt.start+kt.count)*Xt;wt!==null&&(de=Math.max(de,wt.start*Xt),Xe=Math.min(Xe,(wt.start+wt.count)*Xt)),Bt!==null?(de=Math.max(de,0),Xe=Math.min(Xe,Bt.count)):Gt!=null&&(de=Math.max(de,0),Xe=Math.min(Xe,Gt.count));const Te=Xe-de;if(Te<0||Te===1/0)return;Vt.setup(et,it,Nt,nt,Bt);let bn,le=Ot;if(Bt!==null&&(bn=ft.get(Bt),le=It,le.setIndex(bn)),et.isMesh)it.wireframe===!0?(q.setLineWidth(it.wireframeLinewidth*ct()),le.setMode(P.LINES)):le.setMode(P.TRIANGLES);else if(et.isLine){let Yt=it.linewidth;Yt===void 0&&(Yt=1),q.setLineWidth(Yt*ct()),et.isLineSegments?le.setMode(P.LINES):et.isLineLoop?le.setMode(P.LINE_LOOP):le.setMode(P.LINE_STRIP)}else et.isPoints?le.setMode(P.POINTS):et.isSprite&&le.setMode(P.TRIANGLES);if(et.isBatchedMesh)le.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else if(et.isInstancedMesh)le.renderInstances(de,Te,et.count);else if(nt.isInstancedBufferGeometry){const Yt=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,ra=Math.min(nt.instanceCount,Yt);le.renderInstances(de,Te,ra)}else le.render(de,Te)};function ie(C,$,nt){C.transparent===!0&&C.side===Ve&&C.forceSinglePass===!1?(C.side=We,C.needsUpdate=!0,Ws(C,$,nt),C.side=ti,C.needsUpdate=!0,Ws(C,$,nt),C.side=Ve):Ws(C,$,nt)}this.compile=function(C,$,nt=null){nt===null&&(nt=C),p=Lt.get(nt),p.init(),y.push(p),nt.traverseVisible(function(et){et.isLight&&et.layers.test($.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),C!==nt&&C.traverseVisible(function(et){et.isLight&&et.layers.test($.layers)&&(p.pushLight(et),et.castShadow&&p.pushShadow(et))}),p.setupLights(x._useLegacyLights);const it=new Set;return C.traverse(function(et){const wt=et.material;if(wt)if(Array.isArray(wt))for(let Pt=0;Pt<wt.length;Pt++){const Nt=wt[Pt];ie(Nt,nt,et),it.add(Nt)}else ie(wt,nt,et),it.add(wt)}),y.pop(),p=null,it},this.compileAsync=function(C,$,nt=null){const it=this.compile(C,$,nt);return new Promise(et=>{function wt(){if(it.forEach(function(Pt){F.get(Pt).currentProgram.isReady()&&it.delete(Pt)}),it.size===0){et(C);return}setTimeout(wt,10)}B.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let se=null;function be(C){se&&se(C)}function Ue(){Fe.stop()}function re(){Fe.start()}const Fe=new Yu;Fe.setAnimationLoop(be),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(C){se=C,qt.setAnimationLoop(C),C===null?Fe.stop():Fe.start()},qt.addEventListener("sessionstart",Ue),qt.addEventListener("sessionend",re),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(qt.cameraAutoUpdate===!0&&qt.updateCamera($),$=qt.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,$,w),p=Lt.get(C,y.length),p.init(),y.push(p),A.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),rt.setFromProjectionMatrix(A),I=this.localClippingEnabled,N=Ft.init(this.clippingPlanes,I),v=At.get(C,d.length),v.init(),d.push(v),gn(C,$,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(H,st),this.info.render.frame++,N===!0&&Ft.beginShadows();const nt=p.state.shadowsArray;if(gt.render(nt,C,$),N===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(v,C),p.setupLights(x._useLegacyLights),$.isArrayCamera){const it=$.cameras;for(let et=0,wt=it.length;et<wt;et++){const Pt=it[et];Ho(v,C,Pt,Pt.viewport)}}else Ho(v,C,$);w!==null&&(g.updateMultisampleRenderTarget(w),g.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(x,C,$),Vt.resetDefaultState(),U=-1,E=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function gn(C,$,nt,it){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)nt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||rt.intersectsSprite(C)){it&&lt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(A);const Pt=ot.update(C),Nt=C.material;Nt.visible&&v.push(C,Pt,Nt,nt,lt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||rt.intersectsObject(C))){const Pt=ot.update(C),Nt=C.material;if(it&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),lt.copy(C.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),lt.copy(Pt.boundingSphere.center)),lt.applyMatrix4(C.matrixWorld).applyMatrix4(A)),Array.isArray(Nt)){const Bt=Pt.groups;for(let Xt=0,kt=Bt.length;Xt<kt;Xt++){const Gt=Bt[Xt],de=Nt[Gt.materialIndex];de&&de.visible&&v.push(C,Pt,de,nt,lt.z,Gt)}}else Nt.visible&&v.push(C,Pt,Nt,nt,lt.z,null)}}const wt=C.children;for(let Pt=0,Nt=wt.length;Pt<Nt;Pt++)gn(wt[Pt],$,nt,it)}function Ho(C,$,nt,it){const et=C.opaque,wt=C.transmissive,Pt=C.transparent;p.setupLightsView(nt),N===!0&&Ft.setGlobalState(x.clippingPlanes,nt),wt.length>0&&Bh(et,wt,$,nt),it&&q.viewport(b.copy(it)),et.length>0&&Vs(et,$,nt),wt.length>0&&Vs(wt,$,nt),Pt.length>0&&Vs(Pt,$,nt),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Bh(C,$,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;const wt=Y.isWebGL2;R===null&&(R=new Ei(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")?Ns:Kn,minFilter:Ds,samples:wt?4:0})),x.getDrawingBufferSize(K),wt?R.setSize(K.x,K.y):R.setSize(Gr(K.x),Gr(K.y));const Pt=x.getRenderTarget();x.setRenderTarget(R),x.getClearColor(ut),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear();const Nt=x.toneMapping;x.toneMapping=Zn,Vs(C,nt,it),g.updateMultisampleRenderTarget(R),g.updateRenderTargetMipmap(R);let Bt=!1;for(let Xt=0,kt=$.length;Xt<kt;Xt++){const Gt=$[Xt],de=Gt.object,Xe=Gt.geometry,Te=Gt.material,bn=Gt.group;if(Te.side===Ve&&de.layers.test(it.layers)){const le=Te.side;Te.side=We,Te.needsUpdate=!0,Vo(de,nt,it,Xe,Te,bn),Te.side=le,Te.needsUpdate=!0,Bt=!0}}Bt===!0&&(g.updateMultisampleRenderTarget(R),g.updateRenderTargetMipmap(R)),x.setRenderTarget(Pt),x.setClearColor(ut,O),x.toneMapping=Nt}function Vs(C,$,nt){const it=$.isScene===!0?$.overrideMaterial:null;for(let et=0,wt=C.length;et<wt;et++){const Pt=C[et],Nt=Pt.object,Bt=Pt.geometry,Xt=it===null?Pt.material:it,kt=Pt.group;Nt.layers.test(nt.layers)&&Vo(Nt,$,nt,Bt,Xt,kt)}}function Vo(C,$,nt,it,et,wt){C.onBeforeRender(x,$,nt,it,et,wt),C.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),et.onBeforeRender(x,$,nt,it,C,wt),et.transparent===!0&&et.side===Ve&&et.forceSinglePass===!1?(et.side=We,et.needsUpdate=!0,x.renderBufferDirect(nt,$,it,et,C,wt),et.side=ti,et.needsUpdate=!0,x.renderBufferDirect(nt,$,it,et,C,wt),et.side=Ve):x.renderBufferDirect(nt,$,it,et,C,wt),C.onAfterRender(x,$,nt,it,et,wt)}function Ws(C,$,nt){$.isScene!==!0&&($=X);const it=F.get(C),et=p.state.lights,wt=p.state.shadowsArray,Pt=et.state.version,Nt=Tt.getParameters(C,et.state,wt,$,nt),Bt=Tt.getProgramCacheKey(Nt);let Xt=it.programs;it.environment=C.isMeshStandardMaterial?$.environment:null,it.fog=$.fog,it.envMap=(C.isMeshStandardMaterial?k:M).get(C.envMap||it.environment),Xt===void 0&&(C.addEventListener("dispose",bt),Xt=new Map,it.programs=Xt);let kt=Xt.get(Bt);if(kt!==void 0){if(it.currentProgram===kt&&it.lightsStateVersion===Pt)return Xo(C,Nt),kt}else Nt.uniforms=Tt.getUniforms(C),C.onBuild(nt,Nt,x),C.onBeforeCompile(Nt,x),kt=Tt.acquireProgram(Nt,Bt),Xt.set(Bt,kt),it.uniforms=Nt.uniforms;const Gt=it.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Gt.clippingPlanes=Ft.uniform),Xo(C,Nt),it.needsLights=Gh(C),it.lightsStateVersion=Pt,it.needsLights&&(Gt.ambientLightColor.value=et.state.ambient,Gt.lightProbe.value=et.state.probe,Gt.directionalLights.value=et.state.directional,Gt.directionalLightShadows.value=et.state.directionalShadow,Gt.spotLights.value=et.state.spot,Gt.spotLightShadows.value=et.state.spotShadow,Gt.rectAreaLights.value=et.state.rectArea,Gt.ltc_1.value=et.state.rectAreaLTC1,Gt.ltc_2.value=et.state.rectAreaLTC2,Gt.pointLights.value=et.state.point,Gt.pointLightShadows.value=et.state.pointShadow,Gt.hemisphereLights.value=et.state.hemi,Gt.directionalShadowMap.value=et.state.directionalShadowMap,Gt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Gt.spotShadowMap.value=et.state.spotShadowMap,Gt.spotLightMatrix.value=et.state.spotLightMatrix,Gt.spotLightMap.value=et.state.spotLightMap,Gt.pointShadowMap.value=et.state.pointShadowMap,Gt.pointShadowMatrix.value=et.state.pointShadowMatrix),it.currentProgram=kt,it.uniformsList=null,kt}function Wo(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=Pr.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function Xo(C,$){const nt=F.get(C);nt.outputColorSpace=$.outputColorSpace,nt.batching=$.batching,nt.instancing=$.instancing,nt.instancingColor=$.instancingColor,nt.skinning=$.skinning,nt.morphTargets=$.morphTargets,nt.morphNormals=$.morphNormals,nt.morphColors=$.morphColors,nt.morphTargetsCount=$.morphTargetsCount,nt.numClippingPlanes=$.numClippingPlanes,nt.numIntersection=$.numClipIntersection,nt.vertexAlphas=$.vertexAlphas,nt.vertexTangents=$.vertexTangents,nt.toneMapping=$.toneMapping}function zh(C,$,nt,it,et){$.isScene!==!0&&($=X),g.resetTextureUnits();const wt=$.fog,Pt=it.isMeshStandardMaterial?$.environment:null,Nt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Dn,Bt=(it.isMeshStandardMaterial?k:M).get(it.envMap||Pt),Xt=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,kt=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Gt=!!nt.morphAttributes.position,de=!!nt.morphAttributes.normal,Xe=!!nt.morphAttributes.color;let Te=Zn;it.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Te=x.toneMapping);const bn=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,le=bn!==void 0?bn.length:0,Yt=F.get(it),ra=p.state.lights;if(N===!0&&(I===!0||C!==E)){const Ze=C===E&&it.id===U;Ft.setState(it,C,Ze)}let he=!1;it.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==ra.state.version||Yt.outputColorSpace!==Nt||et.isBatchedMesh&&Yt.batching===!1||!et.isBatchedMesh&&Yt.batching===!0||et.isInstancedMesh&&Yt.instancing===!1||!et.isInstancedMesh&&Yt.instancing===!0||et.isSkinnedMesh&&Yt.skinning===!1||!et.isSkinnedMesh&&Yt.skinning===!0||et.isInstancedMesh&&Yt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Yt.instancingColor===!1&&et.instanceColor!==null||Yt.envMap!==Bt||it.fog===!0&&Yt.fog!==wt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Ft.numPlanes||Yt.numIntersection!==Ft.numIntersection)||Yt.vertexAlphas!==Xt||Yt.vertexTangents!==kt||Yt.morphTargets!==Gt||Yt.morphNormals!==de||Yt.morphColors!==Xe||Yt.toneMapping!==Te||Y.isWebGL2===!0&&Yt.morphTargetsCount!==le)&&(he=!0):(he=!0,Yt.__version=it.version);let si=Yt.currentProgram;he===!0&&(si=Ws(it,$,et));let qo=!1,ps=!1,aa=!1;const Le=si.getUniforms(),ri=Yt.uniforms;if(q.useProgram(si.program)&&(qo=!0,ps=!0,aa=!0),it.id!==U&&(U=it.id,ps=!0),qo||E!==C){Le.setValue(P,"projectionMatrix",C.projectionMatrix),Le.setValue(P,"viewMatrix",C.matrixWorldInverse);const Ze=Le.map.cameraPosition;Ze!==void 0&&Ze.setValue(P,lt.setFromMatrixPosition(C.matrixWorld)),Y.logarithmicDepthBuffer&&Le.setValue(P,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Le.setValue(P,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,ps=!0,aa=!0)}if(et.isSkinnedMesh){Le.setOptional(P,et,"bindMatrix"),Le.setOptional(P,et,"bindMatrixInverse");const Ze=et.skeleton;Ze&&(Y.floatVertexTextures?(Ze.boneTexture===null&&Ze.computeBoneTexture(),Le.setValue(P,"boneTexture",Ze.boneTexture,g)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}et.isBatchedMesh&&(Le.setOptional(P,et,"batchingTexture"),Le.setValue(P,"batchingTexture",et._matricesTexture,g));const oa=nt.morphAttributes;if((oa.position!==void 0||oa.normal!==void 0||oa.color!==void 0&&Y.isWebGL2===!0)&&Ht.update(et,nt,si),(ps||Yt.receiveShadow!==et.receiveShadow)&&(Yt.receiveShadow=et.receiveShadow,Le.setValue(P,"receiveShadow",et.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(ri.envMap.value=Bt,ri.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ps&&(Le.setValue(P,"toneMappingExposure",x.toneMappingExposure),Yt.needsLights&&kh(ri,aa),wt&&it.fog===!0&&vt.refreshFogUniforms(ri,wt),vt.refreshMaterialUniforms(ri,it,J,Z,R),Pr.upload(P,Wo(Yt),ri,g)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Pr.upload(P,Wo(Yt),ri,g),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Le.setValue(P,"center",et.center),Le.setValue(P,"modelViewMatrix",et.modelViewMatrix),Le.setValue(P,"normalMatrix",et.normalMatrix),Le.setValue(P,"modelMatrix",et.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Ze=it.uniformsGroups;for(let la=0,Hh=Ze.length;la<Hh;la++)if(Y.isWebGL2){const Yo=Ze[la];Qt.update(Yo,si),Qt.bind(Yo,si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return si}function kh(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function Gh(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,$,nt){F.get(C.texture).__webglTexture=$,F.get(C.depthTexture).__webglTexture=nt;const it=F.get(C);it.__hasExternalTextures=!0,it.__hasExternalTextures&&(it.__autoAllocateDepthBuffer=nt===void 0,it.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,$){const nt=F.get(C);nt.__webglFramebuffer=$,nt.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(C,$=0,nt=0){w=C,L=$,T=nt;let it=!0,et=null,wt=!1,Pt=!1;if(C){const Bt=F.get(C);Bt.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(P.FRAMEBUFFER,null),it=!1):Bt.__webglFramebuffer===void 0?g.setupRenderTarget(C):Bt.__hasExternalTextures&&g.rebindTextures(C,F.get(C.texture).__webglTexture,F.get(C.depthTexture).__webglTexture);const Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);const kt=F.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(kt[$])?et=kt[$][nt]:et=kt[$],wt=!0):Y.isWebGL2&&C.samples>0&&g.useMultisampledRTT(C)===!1?et=F.get(C).__webglMultisampledFramebuffer:Array.isArray(kt)?et=kt[nt]:et=kt,b.copy(C.viewport),V.copy(C.scissor),W=C.scissorTest}else b.copy(at).multiplyScalar(J).floor(),V.copy(pt).multiplyScalar(J).floor(),W=xt;if(q.bindFramebuffer(P.FRAMEBUFFER,et)&&Y.drawBuffers&&it&&q.drawBuffers(C,et),q.viewport(b),q.scissor(V),q.setScissorTest(W),wt){const Bt=F.get(C.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+$,Bt.__webglTexture,nt)}else if(Pt){const Bt=F.get(C.texture),Xt=$||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Bt.__webglTexture,nt||0,Xt)}U=-1},this.readRenderTargetPixels=function(C,$,nt,it,et,wt,Pt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=F.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pt!==void 0&&(Nt=Nt[Pt]),Nt){q.bindFramebuffer(P.FRAMEBUFFER,Nt);try{const Bt=C.texture,Xt=Bt.format,kt=Bt.type;if(Xt!==dn&&Ct.convert(Xt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=kt===Ns&&(B.has("EXT_color_buffer_half_float")||Y.isWebGL2&&B.has("EXT_color_buffer_float"));if(kt!==Kn&&Ct.convert(kt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(kt===Yn&&(Y.isWebGL2||B.has("OES_texture_float")||B.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-it&&nt>=0&&nt<=C.height-et&&P.readPixels($,nt,it,et,Ct.convert(Xt),Ct.convert(kt),wt)}finally{const Bt=w!==null?F.get(w).__webglFramebuffer:null;q.bindFramebuffer(P.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(C,$,nt=0){const it=Math.pow(2,-nt),et=Math.floor($.image.width*it),wt=Math.floor($.image.height*it);g.setTexture2D($,0),P.copyTexSubImage2D(P.TEXTURE_2D,nt,0,0,C.x,C.y,et,wt),q.unbindTexture()},this.copyTextureToTexture=function(C,$,nt,it=0){const et=$.image.width,wt=$.image.height,Pt=Ct.convert(nt.format),Nt=Ct.convert(nt.type);g.setTexture2D(nt,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,nt.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,nt.unpackAlignment),$.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,it,C.x,C.y,et,wt,Pt,Nt,$.image.data):$.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,it,C.x,C.y,$.mipmaps[0].width,$.mipmaps[0].height,Pt,$.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,it,C.x,C.y,Pt,Nt,$.image),it===0&&nt.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(C,$,nt,it,et=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=C.max.x-C.min.x+1,Pt=C.max.y-C.min.y+1,Nt=C.max.z-C.min.z+1,Bt=Ct.convert(it.format),Xt=Ct.convert(it.type);let kt;if(it.isData3DTexture)g.setTexture3D(it,0),kt=P.TEXTURE_3D;else if(it.isDataArrayTexture||it.isCompressedArrayTexture)g.setTexture2DArray(it,0),kt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,it.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,it.unpackAlignment);const Gt=P.getParameter(P.UNPACK_ROW_LENGTH),de=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Xe=P.getParameter(P.UNPACK_SKIP_PIXELS),Te=P.getParameter(P.UNPACK_SKIP_ROWS),bn=P.getParameter(P.UNPACK_SKIP_IMAGES),le=nt.isCompressedTexture?nt.mipmaps[et]:nt.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,le.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,le.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,C.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,C.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,C.min.z),nt.isDataTexture||nt.isData3DTexture?P.texSubImage3D(kt,et,$.x,$.y,$.z,wt,Pt,Nt,Bt,Xt,le.data):nt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(kt,et,$.x,$.y,$.z,wt,Pt,Nt,Bt,le.data)):P.texSubImage3D(kt,et,$.x,$.y,$.z,wt,Pt,Nt,Bt,Xt,le),P.pixelStorei(P.UNPACK_ROW_LENGTH,Gt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Xe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Te),P.pixelStorei(P.UNPACK_SKIP_IMAGES,bn),et===0&&it.generateMipmaps&&P.generateMipmap(kt),q.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?g.setTextureCube(C,0):C.isData3DTexture?g.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?g.setTexture2DArray(C,0):g.setTexture2D(C,0),q.unbindTexture()},this.resetState=function(){L=0,T=0,w=null,q.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===To?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Jr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ye?vi:Du}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===vi?ye:Dn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class O_ extends eh{}O_.prototype.isWebGL1Renderer=!0;class Po{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=i}clone(){return new Po(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class B_ extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class yc extends Pe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Yi=new $t,Mc=new $t,fr=[],Sc=new wi,z_=new $t,ys=new ee,Ms=new Ci;class Sn extends ee{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new yc(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,z_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Yi),Sc.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Sc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Yi),Ms.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(Ms)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,s=this.count;if(ys.geometry=this.geometry,ys.material=this.material,ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(i),t.ray.intersectsSphere(Ms)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yi),Mc.multiplyMatrices(i,Yi),ys.matrixWorld=Mc,ys.raycast(t,fr);for(let o=0,a=fr.length;o<a;o++){const l=fr[o];l.instanceId=r,l.object=this,e.push(l)}fr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new yc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ta extends Ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ec=new D,bc=new D,Tc=new $t,ka=new wo,pr=new Ci;class nh extends Me{constructor(t=new _e,e=new ta){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ec.fromBufferAttribute(e,s-1),bc.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ec.distanceTo(bc);t.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pr.copy(i.boundingSphere),pr.applyMatrix4(s),pr.radius+=r,t.ray.intersectsSphere(pr)===!1)return;Tc.copy(s).invert(),ka.copy(t.ray).applyMatrix4(Tc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,h=new D,f=new D,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const d=Math.max(0,o.start),y=Math.min(_.count,o.start+o.count);for(let x=d,S=y-1;x<S;x+=m){const L=_.getX(x),T=_.getX(x+1);if(c.fromBufferAttribute(p,L),u.fromBufferAttribute(p,T),ka.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const U=t.ray.origin.distanceTo(f);U<t.near||U>t.far||e.push({distance:U,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let x=d,S=y-1;x<S;x+=m){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),ka.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(f);T<t.near||T>t.far||e.push({distance:T,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Ac=new D,wc=new D;class ih extends nh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Ac.fromBufferAttribute(e,s),wc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ac.distanceTo(wc);t.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class k_ extends Ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Cc=new $t,lo=new wo,mr=new Ci,gr=new D;class G_ extends Me{constructor(t=new _e,e=new k_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(s),mr.radius+=r,t.ray.intersectsSphere(mr)===!1)return;Cc.copy(s).invert(),lo.copy(t.ray).applyMatrix4(Cc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=f,v=m;_<v;_++){const p=c.getX(_);gr.fromBufferAttribute(h,p),Rc(gr,p,l,s,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,v=m;_<v;_++)gr.fromBufferAttribute(h,_),Rc(gr,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Rc(n,t,e,i,s,r,o){const a=lo.distanceSqToPoint(n);if(a<e){const l=new D;lo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],f=i[s+1]-u,m=(o-u)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new dt:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new D,s=[],r=[],o=[],a=new D,l=new $t;for(let m=0;m<=t;m++){const _=m/t;s[m]=this.getTangentAt(_,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ce(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,_))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Ce(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],m*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lo extends En{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const i=e||new dt,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*h+this.aX,c=f*h+m*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class H_ extends Lo{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Io(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,m*=u,s(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const _r=new D,Ga=new Io,Ha=new Io,Va=new Io;class V_ extends En{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(_r.subVectors(s[0],s[1]).add(s[0]),c=_r);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(_r.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=_r),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),m),v=Math.pow(h.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);v<1e-4&&(v=1),_<1e-4&&(_=v),p<1e-4&&(p=v),Ga.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,v,p),Ha.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,v,p),Va.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,v,p)}else this.curveType==="catmullrom"&&(Ga.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Ha.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Va.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(Ga.calc(l),Ha.calc(l),Va.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Pc(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function W_(n,t){const e=1-n;return e*e*t}function X_(n,t){return 2*(1-n)*n*t}function q_(n,t){return n*n*t}function Rs(n,t,e,i){return W_(n,t)+X_(n,e)+q_(n,i)}function Y_(n,t){const e=1-n;return e*e*e*t}function j_(n,t){const e=1-n;return 3*e*e*n*t}function $_(n,t){return 3*(1-n)*n*n*t}function Z_(n,t){return n*n*n*t}function Ps(n,t,e,i,s){return Y_(n,t)+j_(n,e)+$_(n,i)+Z_(n,s)}class sh extends En{constructor(t=new dt,e=new dt,i=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new dt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class K_ extends En{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y),Ps(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rh extends En{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class J_ extends En{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ah extends En{constructor(t=new dt,e=new dt,i=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new dt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Rs(t,s.x,r.x,o.x),Rs(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Q_ extends En{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Rs(t,s.x,r.x,o.x),Rs(t,s.y,r.y,o.y),Rs(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oh extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return i.set(Pc(a,l.x,c.x,u.x,h.x),Pc(a,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new dt().fromArray(s))}return this}}var co=Object.freeze({__proto__:null,ArcCurve:H_,CatmullRomCurve3:V_,CubicBezierCurve:sh,CubicBezierCurve3:K_,EllipseCurve:Lo,LineCurve:rh,LineCurve3:J_,QuadraticBezierCurve:ah,QuadraticBezierCurve3:Q_,SplineCurve:oh});class tx extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new co[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new co[s.type]().fromJSON(s))}return this}}class ns extends tx{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new rh(this.currentPoint.clone(),new dt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new ah(this.currentPoint.clone(),new dt(t,e),new dt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new sh(this.currentPoint.clone(),new dt(t,e),new dt(i,s),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new oh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Lo(t,e,i,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Do extends _e{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new D,u=new dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const m=i+h/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Do(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Un extends _e{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],m=[];let _=0;const v=[],p=i/2;let d=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(m,2));function y(){const S=new D,L=new D;let T=0;const w=(e-t)/i;for(let U=0;U<=r;U++){const E=[],b=U/r,V=b*(e-t)+t;for(let W=0;W<=s;W++){const ut=W/s,O=ut*l+a,j=Math.sin(O),Z=Math.cos(O);L.x=V*j,L.y=-b*i+p,L.z=V*Z,h.push(L.x,L.y,L.z),S.set(j,w,Z).normalize(),f.push(S.x,S.y,S.z),m.push(ut,1-b),E.push(_++)}v.push(E)}for(let U=0;U<s;U++)for(let E=0;E<r;E++){const b=v[E][U],V=v[E+1][U],W=v[E+1][U+1],ut=v[E][U+1];u.push(b,V,ut),u.push(V,W,ut),T+=6}c.addGroup(d,T,0),d+=T}function x(S){const L=_,T=new dt,w=new D;let U=0;const E=S===!0?t:e,b=S===!0?1:-1;for(let W=1;W<=s;W++)h.push(0,p*b,0),f.push(0,b,0),m.push(.5,.5),_++;const V=_;for(let W=0;W<=s;W++){const O=W/s*l+a,j=Math.cos(O),Z=Math.sin(O);w.x=E*Z,w.y=p*b,w.z=E*j,h.push(w.x,w.y,w.z),f.push(0,b,0),T.x=j*.5+.5,T.y=Z*.5*b+.5,m.push(T.x,T.y),_++}for(let W=0;W<s;W++){const ut=L+W,O=V+W;S===!0?u.push(O,O+1,ut):u.push(O+1,O,ut),U+=3}c.addGroup(d,U,S===!0?1:2),d+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fn extends Un{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Fn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class No extends _e{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),c(i),u(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new D,S=new D,L=new D;for(let T=0;T<e.length;T+=3)m(e[T+0],x),m(e[T+1],S),m(e[T+2],L),l(x,S,L,y)}function l(y,x,S,L){const T=L+1,w=[];for(let U=0;U<=T;U++){w[U]=[];const E=y.clone().lerp(S,U/T),b=x.clone().lerp(S,U/T),V=T-U;for(let W=0;W<=V;W++)W===0&&U===T?w[U][W]=E:w[U][W]=E.clone().lerp(b,W/V)}for(let U=0;U<T;U++)for(let E=0;E<2*(T-U)-1;E++){const b=Math.floor(E/2);E%2===0?(f(w[U][b+1]),f(w[U+1][b]),f(w[U][b])):(f(w[U][b+1]),f(w[U+1][b+1]),f(w[U+1][b]))}}function c(y){const x=new D;for(let S=0;S<r.length;S+=3)x.x=r[S+0],x.y=r[S+1],x.z=r[S+2],x.normalize().multiplyScalar(y),r[S+0]=x.x,r[S+1]=x.y,r[S+2]=x.z}function u(){const y=new D;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const S=p(y)/2/Math.PI+.5,L=d(y)/Math.PI+.5;o.push(S,1-L)}_(),h()}function h(){for(let y=0;y<o.length;y+=6){const x=o[y+0],S=o[y+2],L=o[y+4],T=Math.max(x,S,L),w=Math.min(x,S,L);T>.9&&w<.1&&(x<.2&&(o[y+0]+=1),S<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function m(y,x){const S=y*3;x.x=t[S+0],x.y=t[S+1],x.z=t[S+2]}function _(){const y=new D,x=new D,S=new D,L=new D,T=new dt,w=new dt,U=new dt;for(let E=0,b=0;E<r.length;E+=9,b+=6){y.set(r[E+0],r[E+1],r[E+2]),x.set(r[E+3],r[E+4],r[E+5]),S.set(r[E+6],r[E+7],r[E+8]),T.set(o[b+0],o[b+1]),w.set(o[b+2],o[b+3]),U.set(o[b+4],o[b+5]),L.copy(y).add(x).add(S).divideScalar(3);const V=p(L);v(T,b+0,y,V),v(w,b+2,x,V),v(U,b+4,S,V)}}function v(y,x,S,L){L<0&&y.x===1&&(o[x]=y.x-1),S.x===0&&S.z===0&&(o[x]=L/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new No(t.vertices,t.indices,t.radius,t.details)}}const xr=new D,vr=new D,Wa=new D,yr=new tn;class lh extends _e{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(ts*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},m=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:v,b:p,c:d}=yr;if(v.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),yr.getNormal(Wa),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const x=(y+1)%3,S=h[y],L=h[x],T=yr[u[y]],w=yr[u[x]],U=`${S}_${L}`,E=`${L}_${S}`;E in f&&f[E]?(Wa.dot(f[E].normal)<=r&&(m.push(T.x,T.y,T.z),m.push(w.x,w.y,w.z)),f[E]=null):U in f||(f[U]={index0:c[y],index1:c[x],normal:Wa.clone()})}}for(const _ in f)if(f[_]){const{index0:v,index1:p}=f[_];xr.fromBufferAttribute(a,v),vr.fromBufferAttribute(a,p),m.push(xr.x,xr.y,xr.z),m.push(vr.x,vr.y,vr.z)}this.setAttribute("position",new Zt(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class yi extends ns{constructor(t){super(t),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new ns().fromJSON(s))}return this}}const ex={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=ch(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,m;if(i&&(r=ax(n,t,r,e)),n.length>80*e){a=c=n[0],l=u=n[1];for(let _=e;_<s;_+=e)h=n[_],f=n[_+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return Os(r,o,e,a,l,m,0),o}};function ch(n,t,e,i,s){let r,o;if(s===_x(n,t,e,i)>0)for(r=t;r<e;r+=i)o=Lc(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=Lc(r,n[r],n[r+1],o);return o&&ea(o,o.next)&&(zs(o),o=o.next),o}function bi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ea(e,e.next)||ce(e.prev,e,e.next)===0)){if(zs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Os(n,t,e,i,s,r,o){if(!n)return;!o&&r&&hx(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?ix(n,i,s,r):nx(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),zs(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=sx(bi(n),t,e),Os(n,t,e,i,s,r,2)):o===2&&rx(n,t,e,i,s,r):Os(bi(n),t,e,i,s,r,1);break}}}function nx(n){const t=n.prev,e=n,i=n.next;if(ce(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c;let _=i.next;for(;_!==t;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=m&&Ji(s,a,r,l,o,c,_.x,_.y)&&ce(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ix(n,t,e,i){const s=n.prev,r=n,o=n.next;if(ce(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,v=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,d=uo(m,_,t,e,i),y=uo(v,p,t,e,i);let x=n.prevZ,S=n.nextZ;for(;x&&x.z>=d&&S&&S.z<=y;){if(x.x>=m&&x.x<=v&&x.y>=_&&x.y<=p&&x!==s&&x!==o&&Ji(a,u,l,h,c,f,x.x,x.y)&&ce(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=m&&S.x<=v&&S.y>=_&&S.y<=p&&S!==s&&S!==o&&Ji(a,u,l,h,c,f,S.x,S.y)&&ce(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=d;){if(x.x>=m&&x.x<=v&&x.y>=_&&x.y<=p&&x!==s&&x!==o&&Ji(a,u,l,h,c,f,x.x,x.y)&&ce(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=y;){if(S.x>=m&&S.x<=v&&S.y>=_&&S.y<=p&&S!==s&&S!==o&&Ji(a,u,l,h,c,f,S.x,S.y)&&ce(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function sx(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!ea(s,r)&&uh(s,i,i.next,r)&&Bs(s,r)&&Bs(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),zs(i),zs(i.next),i=n=r),i=i.next}while(i!==n);return bi(i)}function rx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&px(o,a)){let l=hh(o,a);o=bi(o,o.next),l=bi(l,l.next),Os(o,t,e,i,s,r,0),Os(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function ax(n,t,e,i){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=ch(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(fx(c));for(s.sort(ox),r=0;r<s.length;r++)e=lx(s[r],e);return e}function ox(n,t){return n.x-t.x}function lx(n,t){const e=cx(n,t);if(!e)return t;const i=hh(e,n);return bi(i,i.next),bi(e,e.next)}function cx(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Ji(o<c?r:i,o,l,c,o<c?i:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),Bs(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&ux(s,e)))&&(s=e,u=h)),e=e.next;while(e!==a);return s}function ux(n,t){return ce(n.prev,n,t.prev)<0&&ce(t.next,n,n.next)<0}function hx(n,t,e,i){let s=n;do s.z===0&&(s.z=uo(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,dx(s)}function dx(n){let t,e,i,s,r,o,a,l,c=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<c&&(a++,i=i.nextZ,!!i);t++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(o>1);return n}function uo(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function fx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Ji(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function px(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!mx(n,t)&&(Bs(n,t)&&Bs(t,n)&&gx(n,t)&&(ce(n.prev,n,t.prev)||ce(n,t.prev,t))||ea(n,t)&&ce(n.prev,n,n.next)>0&&ce(t.prev,t,t.next)>0)}function ce(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ea(n,t){return n.x===t.x&&n.y===t.y}function uh(n,t,e,i){const s=Sr(ce(n,t,e)),r=Sr(ce(n,t,i)),o=Sr(ce(e,i,n)),a=Sr(ce(e,i,t));return!!(s!==r&&o!==a||s===0&&Mr(n,e,t)||r===0&&Mr(n,i,t)||o===0&&Mr(e,n,i)||a===0&&Mr(e,t,i))}function Mr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Sr(n){return n>0?1:n<0?-1:0}function mx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&uh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Bs(n,t){return ce(n.prev,n,n.next)<0?ce(n,t,n.next)>=0&&ce(n,n.prev,t)>=0:ce(n,t,n.prev)<0||ce(n,n.next,t)<0}function gx(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function hh(n,t){const e=new ho(n.i,n.x,n.y),i=new ho(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Lc(n,t,e,i){const s=new ho(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function zs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ho(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _x(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Mn{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Mn.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Ic(t),Dc(i,t);let o=t.length;e.forEach(Ic);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Dc(i,e[l]);const a=ex.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Ic(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Dc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Uo extends _e{constructor(t=new yi([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:xx;let x,S=!1,L,T,w,U;d&&(x=d.getSpacedPoints(u),S=!0,f=!1,L=d.computeFrenetFrames(u,!1),T=new D,w=new D,U=new D),f||(p=0,m=0,_=0,v=0);const E=a.extractPoints(c);let b=E.shape;const V=E.holes;if(!Mn.isClockWise(b)){b=b.reverse();for(let P=0,tt=V.length;P<tt;P++){const B=V[P];Mn.isClockWise(B)&&(V[P]=B.reverse())}}const ut=Mn.triangulateShape(b,V),O=b;for(let P=0,tt=V.length;P<tt;P++){const B=V[P];b=b.concat(B)}function j(P,tt,B){return tt||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(tt,B)}const Z=b.length,J=ut.length;function H(P,tt,B){let Y,q,ht;const F=P.x-tt.x,g=P.y-tt.y,M=B.x-P.x,k=B.y-P.y,ft=F*F+g*g,mt=F*k-g*M;if(Math.abs(mt)>Number.EPSILON){const ot=Math.sqrt(ft),Tt=Math.sqrt(M*M+k*k),vt=tt.x-g/ot,At=tt.y+F/ot,Lt=B.x-k/Tt,Ft=B.y+M/Tt,gt=((Lt-vt)*k-(Ft-At)*M)/(F*k-g*M);Y=vt+F*gt-P.x,q=At+g*gt-P.y;const jt=Y*Y+q*q;if(jt<=2)return new dt(Y,q);ht=Math.sqrt(jt/2)}else{let ot=!1;F>Number.EPSILON?M>Number.EPSILON&&(ot=!0):F<-Number.EPSILON?M<-Number.EPSILON&&(ot=!0):Math.sign(g)===Math.sign(k)&&(ot=!0),ot?(Y=-g,q=F,ht=Math.sqrt(ft)):(Y=F,q=g,ht=Math.sqrt(ft/2))}return new dt(Y/ht,q/ht)}const st=[];for(let P=0,tt=O.length,B=tt-1,Y=P+1;P<tt;P++,B++,Y++)B===tt&&(B=0),Y===tt&&(Y=0),st[P]=H(O[P],O[B],O[Y]);const at=[];let pt,xt=st.concat();for(let P=0,tt=V.length;P<tt;P++){const B=V[P];pt=[];for(let Y=0,q=B.length,ht=q-1,F=Y+1;Y<q;Y++,ht++,F++)ht===q&&(ht=0),F===q&&(F=0),pt[Y]=H(B[Y],B[ht],B[F]);at.push(pt),xt=xt.concat(pt)}for(let P=0;P<p;P++){const tt=P/p,B=m*Math.cos(tt*Math.PI/2),Y=_*Math.sin(tt*Math.PI/2)+v;for(let q=0,ht=O.length;q<ht;q++){const F=j(O[q],st[q],Y);A(F.x,F.y,-B)}for(let q=0,ht=V.length;q<ht;q++){const F=V[q];pt=at[q];for(let g=0,M=F.length;g<M;g++){const k=j(F[g],pt[g],Y);A(k.x,k.y,-B)}}}const rt=_+v;for(let P=0;P<Z;P++){const tt=f?j(b[P],xt[P],rt):b[P];S?(w.copy(L.normals[0]).multiplyScalar(tt.x),T.copy(L.binormals[0]).multiplyScalar(tt.y),U.copy(x[0]).add(w).add(T),A(U.x,U.y,U.z)):A(tt.x,tt.y,0)}for(let P=1;P<=u;P++)for(let tt=0;tt<Z;tt++){const B=f?j(b[tt],xt[tt],rt):b[tt];S?(w.copy(L.normals[P]).multiplyScalar(B.x),T.copy(L.binormals[P]).multiplyScalar(B.y),U.copy(x[P]).add(w).add(T),A(U.x,U.y,U.z)):A(B.x,B.y,h/u*P)}for(let P=p-1;P>=0;P--){const tt=P/p,B=m*Math.cos(tt*Math.PI/2),Y=_*Math.sin(tt*Math.PI/2)+v;for(let q=0,ht=O.length;q<ht;q++){const F=j(O[q],st[q],Y);A(F.x,F.y,h+B)}for(let q=0,ht=V.length;q<ht;q++){const F=V[q];pt=at[q];for(let g=0,M=F.length;g<M;g++){const k=j(F[g],pt[g],Y);S?A(k.x,k.y+x[u-1].y,x[u-1].x+B):A(k.x,k.y,h+B)}}}N(),I();function N(){const P=s.length/3;if(f){let tt=0,B=Z*tt;for(let Y=0;Y<J;Y++){const q=ut[Y];K(q[2]+B,q[1]+B,q[0]+B)}tt=u+p*2,B=Z*tt;for(let Y=0;Y<J;Y++){const q=ut[Y];K(q[0]+B,q[1]+B,q[2]+B)}}else{for(let tt=0;tt<J;tt++){const B=ut[tt];K(B[2],B[1],B[0])}for(let tt=0;tt<J;tt++){const B=ut[tt];K(B[0]+Z*u,B[1]+Z*u,B[2]+Z*u)}}i.addGroup(P,s.length/3-P,0)}function I(){const P=s.length/3;let tt=0;R(O,tt),tt+=O.length;for(let B=0,Y=V.length;B<Y;B++){const q=V[B];R(q,tt),tt+=q.length}i.addGroup(P,s.length/3-P,1)}function R(P,tt){let B=P.length;for(;--B>=0;){const Y=B;let q=B-1;q<0&&(q=P.length-1);for(let ht=0,F=u+p*2;ht<F;ht++){const g=Z*ht,M=Z*(ht+1),k=tt+Y+g,ft=tt+q+g,mt=tt+q+M,ot=tt+Y+M;lt(k,ft,mt,ot)}}}function A(P,tt,B){l.push(P),l.push(tt),l.push(B)}function K(P,tt,B){X(P),X(tt),X(B);const Y=s.length/3,q=y.generateTopUV(i,s,Y-3,Y-2,Y-1);ct(q[0]),ct(q[1]),ct(q[2])}function lt(P,tt,B,Y){X(P),X(tt),X(Y),X(tt),X(B),X(Y);const q=s.length/3,ht=y.generateSideWallUV(i,s,q-6,q-3,q-2,q-1);ct(ht[0]),ct(ht[1]),ct(ht[3]),ct(ht[1]),ct(ht[2]),ct(ht[3])}function X(P){s.push(l[P*3+0]),s.push(l[P*3+1]),s.push(l[P*3+2])}function ct(P){r.push(P.x),r.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return vx(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new co[s.type]().fromJSON(s)),new Uo(i,t.options)}}const xx={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new dt(r,o),new dt(a,l),new dt(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[s*3],m=t[s*3+1],_=t[s*3+2],v=t[r*3],p=t[r*3+1],d=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new dt(o,1-l),new dt(c,1-h),new dt(f,1-_),new dt(v,1-d)]:[new dt(a,1-l),new dt(u,1-h),new dt(m,1-_),new dt(p,1-d)]}};function vx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class na extends No{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new na(t.radius,t.detail)}}class Fo extends _e{constructor(t=new yi([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function c(u){const h=s.length/3,f=u.extractPoints(e);let m=f.shape;const _=f.holes;Mn.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,d=_.length;p<d;p++){const y=_[p];Mn.isClockWise(y)===!0&&(_[p]=y.reverse())}const v=Mn.triangulateShape(m,_);for(let p=0,d=_.length;p<d;p++){const y=_[p];m=m.concat(y)}for(let p=0,d=m.length;p<d;p++){const y=m[p];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,d=v.length;p<d;p++){const y=v[p],x=y[0]+h,S=y[1]+h,L=y[2]+h;i.push(x,S,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return yx(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];i.push(o)}return new Fo(i,t.curveSegments)}}function yx(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class ia extends _e{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new D,f=new D,m=[],_=[],v=[],p=[];for(let d=0;d<=i;d++){const y=[],x=d/i;let S=0;d===0&&o===0?S=.5/e:d===i&&l===Math.PI&&(S=-.5/e);for(let L=0;L<=e;L++){const T=L/e;h.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),h.y=t*Math.cos(o+x*a),h.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),p.push(T+S,1-x),y.push(c++)}u.push(y)}for(let d=0;d<i;d++)for(let y=0;y<e;y++){const x=u[d][y+1],S=u[d][y],L=u[d+1][y],T=u[d+1][y+1];(d!==0||o>0)&&m.push(x,S,T),(d!==i-1||l<Math.PI)&&m.push(S,L,T)}this.setIndex(m),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Oo extends _e{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new D,h=new D,f=new D;for(let m=0;m<=i;m++)for(let _=0;_<=s;_++){const v=_/s*r,p=m/i*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(v),h.y=(t+e*Math.cos(p))*Math.sin(v),h.z=e*Math.sin(p),a.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=s;_++){const v=(s+1)*m+_-1,p=(s+1)*(m-1)+_-1,d=(s+1)*(m-1)+_,y=(s+1)*m+_;o.push(v,p,y),o.push(p,d,y)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ge extends Ri{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nu,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Nc={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Mx{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const Sx=new Mx;class Bo{constructor(t){this.manager=t!==void 0?t:Sx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Bo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pn={};class Ex extends Error{constructor(t,e){super(t),this.response=e}}class bx extends Bo{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Nc.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Pn[t]!==void 0){Pn[t].push({onLoad:e,onProgress:i,onError:s});return}Pn[t]=[],Pn[t].push({onLoad:e,onProgress:i,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Pn[t],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,_=m!==0;let v=0;const p=new ReadableStream({start(d){y();function y(){h.read().then(({done:x,value:S})=>{if(x)d.close();else{v+=S.byteLength;const L=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:m});for(let T=0,w=u.length;T<w;T++){const U=u[T];U.onProgress&&U.onProgress(L)}d.enqueue(S),y()}})}}});return new Response(p)}else throw new Ex(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{Nc.add(t,c);const u=Pn[t];delete Pn[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=Pn[t];if(u===void 0)throw this.manager.itemError(t),c;delete Pn[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class dh extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Tx extends dh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Xa=new $t,Uc=new D,Fc=new D;class Ax{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uc),Fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fc),e.updateMatrixWorld(),Xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class wx extends Ax{constructor(){super(new ju(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cx extends dh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new wx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Oc=new dt;class Rx{constructor(t=new dt(1/0,1/0),e=new dt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Oc.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oc).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class ui{constructor(){this.type="ShapePath",this.color=new Rt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new ns,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,r,o){return this.currentPath.bezierCurveTo(t,e,i,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(d){const y=[];for(let x=0,S=d.length;x<S;x++){const L=d[x],T=new yi;T.curves=L.curves,y.push(T)}return y}function i(d,y){const x=y.length;let S=!1;for(let L=x-1,T=0;T<x;L=T++){let w=y[L],U=y[T],E=U.x-w.x,b=U.y-w.y;if(Math.abs(b)>Number.EPSILON){if(b<0&&(w=y[T],E=-E,U=y[L],b=-b),d.y<w.y||d.y>U.y)continue;if(d.y===w.y){if(d.x===w.x)return!0}else{const V=b*(d.x-w.x)-E*(d.y-w.y);if(V===0)return!0;if(V<0)continue;S=!S}}else{if(d.y!==w.y)continue;if(U.x<=d.x&&d.x<=w.x||w.x<=d.x&&d.x<=U.x)return!0}}return S}const s=Mn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new yi,l.curves=a.curves,c.push(l),c;let u=!s(r[0].getPoints());u=t?!u:u;const h=[],f=[];let m=[],_=0,v;f[_]=void 0,m[_]=[];for(let d=0,y=r.length;d<y;d++)a=r[d],v=a.getPoints(),o=s(v),o=t?!o:o,o?(!u&&f[_]&&_++,f[_]={s:new yi,p:v},f[_].s.curves=a.curves,u&&_++,m[_]=[]):m[_].push({h:a,p:v[0]});if(!f[0])return e(r);if(f.length>1){let d=!1,y=0;for(let x=0,S=f.length;x<S;x++)h[x]=[];for(let x=0,S=f.length;x<S;x++){const L=m[x];for(let T=0;T<L.length;T++){const w=L[T];let U=!0;for(let E=0;E<f.length;E++)i(w.p,f[E].p)&&(x!==E&&y++,U?(U=!1,h[E].push(w)):d=!0);U&&h[x].push(w)}}y>0&&d===!1&&(m=h)}let p;for(let d=0,y=f.length;d<y;d++){l=f[d].s,c.push(l),p=m[d];for(let x=0,S=p.length;x<S;x++)l.holes.push(p[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:So}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=So);const $e=new B_;$e.background=new Rt(Kt.sky);$e.fog=new Po(Kt.sky,Jt.fogStart,Jt.fogEnd);const vn=new en(62,window.innerWidth/window.innerHeight,.5,5e3),ds=new eh({antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});ds.setPixelRatio(Math.min(window.devicePixelRatio,2));ds.setSize(window.innerWidth,window.innerHeight);ds.outputColorSpace=ye;document.body.appendChild(ds.domElement);const fh=new Cx(16774882,1.05);fh.position.set(80,140,60);$e.add(fh);const Px=new Tx(14542572,8292974,.55);$e.add(Px);const Bc=new D(0,1,0);window.addEventListener("resize",()=>{vn.aspect=window.innerWidth/window.innerHeight,vn.updateProjectionMatrix(),ds.setSize(window.innerWidth,window.innerHeight)});function Lx(){const n=new _e,t=new Float32Array([0,0,-1.3,0,.22,.5,-.95,-.06,.42,0,0,-1.3,.95,-.06,.42,0,.22,.5,0,0,-1.3,-.95,-.06,.42,0,-.02,.48,0,0,-1.3,0,-.02,.48,.95,-.06,.42,0,.22,.5,-.95,-.06,.42,0,-.02,.48,0,.22,.5,0,-.02,.48,.95,-.06,.42]);n.setAttribute("position",new Pe(t,3)),n.computeVertexNormals();const e=new ge({color:Kt.paper,flatShading:!0,side:Ve}),i=new ee(n,e),s=new lh(n,18),r=new ta({color:Kt.ink,transparent:!0,opacity:.22}),o=new ih(s,r),a=new me;return a.add(i),a.add(o),a}const _t=Lx();_t.position.set(0,38,0);const pn=[{id:"TFN",x:510,z:-509,heading:1.885,length:80,width:3},{id:"TFS",x:-61,z:712,heading:-1.396,length:80,width:3},{id:"GMZ",x:-1630,z:752,heading:-1.623,length:60,width:3},{id:"SPC",x:-2967,z:-918,heading:-.611,length:70,width:3},{id:"VDE",x:-3286,z:1364,heading:-2.007,length:55,width:3},{id:"LPA",x:2845,z:1030,heading:-.489,length:90,width:3.5},{id:"FUE",x:6597,z:-417,heading:-.244,length:80,width:3},{id:"ACE",x:7210,z:-1809,heading:-.524,length:80,width:3},{id:"GRAC",x:7455,z:-2588,heading:-1.571,length:40,width:2.5}];for(const n of pn)n.activeHeading=n.heading;function Ix(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const Dx=.42,Nx=.55;function Ux(n,t){for(const e of pn){const i=n.x-e.x,s=n.z-e.z,r=Math.cos(e.heading),o=Math.sin(e.heading),a=i*r-s*o,l=i*o+s*r;if(Math.abs(a)>e.width*.5-Dx||Math.abs(l)>e.length*.5-Nx)continue;const c=n.y-e.elevation;if(c<-.5||c>Mi.rollingHeight)continue;const u=Ix(t-e.activeHeading);if(!(Math.abs(u)>Mi.headingTolerance))return e}return null}function Fx(n,t=1){for(const e of pn){const i=n.x-e.x,s=n.z-e.z,r=Math.cos(e.heading),o=Math.sin(e.heading),a=i*r-s*o,l=i*o+s*r;if(Math.abs(a)<=e.width*.55+t&&Math.abs(l)<=e.length*.5+t)return e}return null}function Ox(n,t,e){for(const i of pn){const s=n.x-i.x,r=n.z-i.z,o=Math.sqrt(s*s+r*r),a=n.y-i.elevation;if(o<t&&a<e&&a>-2)return!0}return!1}const ph=[],mh=[],zc=1,fo=.32,kc=1,po=.12,Gc=1.6,Hc=1.2;function Bx(){const n=new me,t=new ge({color:Kt.runway,flatShading:!0}),e=new ia(.28,10,8);for(let i=0;i<pn.length;i++){const s=pn[i],r=new me,o=new Pi(s.width,s.length);o.rotateX(-Math.PI/2),r.add(new ee(o,t));const a=new me,l=s.width*.68,c=l*1.05,u=new yi;u.moveTo(0,c*.55),u.lineTo(-l/2,-c*.45),u.lineTo(0,-c*.05),u.lineTo(l/2,-c*.45),u.closePath();const h=new Fo(u);h.rotateX(-Math.PI/2);const f=Math.max(7,Math.round(s.length/5));for(let v=0;v<f;v++){const p=v/(f-1)-.5,d=new ei({color:16771240,transparent:!0,opacity:fo,depthWrite:!1}),y=new ee(h,d);y.position.set(0,.08,p*s.length*.85),y.renderOrder=1,a.add(y),ph.push({mat:d,posT:.5-p})}const _=Math.max(2,Math.floor(s.length/4.5));for(let v=0;v<_;v++){const p=v/(_-1)-.5,d=p*s.length*.97,y=.5-p;for(const x of[-1,1]){const S=new ei({color:16764006,transparent:!0,opacity:po}),L=new ee(e,S);L.position.set(x*s.width*.6,.35,d),a.add(L),mh.push({mat:S,posT:y})}}r.add(a),r.position.set(s.x,s.elevation+.04,s.z),r.rotation.y=s.heading,n.add(r)}return n}function zx(n){const t=n%Gc/Gc;for(const i of ph){const s=(t-i.posT+1)%1;i.mat.opacity=s<.16?zc-(zc-fo)*(s/.16):fo}const e=n%Hc/Hc;for(const i of mh){const s=(e-i.posT+1)%1;i.mat.opacity=s<.22?kc-(kc-po)*(s/.22):po}}function kx(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}const ve={TREE:10,SHRUB:20,GRASS:30,CROP:40,URBAN:50,BARE:60,SNOW:70,WATER:80,WETLAND:90};let un=null,gh=[];async function Gx(n="/teide/landcover/canaries.png"){const t=new Image;t.src=n,await t.decode();const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(t,0,0);const s=i.getImageData(0,0,t.width,t.height).data,r=new Uint8Array(t.width*t.height);for(let o=0,a=0;a<r.length;o+=4,a++)r[a]=s[o];un={data:r,w:t.width,h:t.height},gh=Wx()}function Hx(n,t){const{center:e,metersPerUnit:i}=Jt.heightmap,s=n*i,r=-t*i,o=e.lat+r/111320,a=e.lon+s/(111320*Math.cos(e.lat*Math.PI/180));return{lat:o,lon:a}}function Vx(n,t){const{bbox:e,center:i,metersPerUnit:s}=Jt.heightmap,r=e.lonW+n/(un.w-1)*(e.lonE-e.lonW),o=e.latN-t/(un.h-1)*(e.latN-e.latS),a=(r-i.lon)*111320*Math.cos(i.lat*Math.PI/180),l=(o-i.lat)*111320;return{x:a/s,z:-l/s}}function _h(n,t){if(!un)return ve.WATER;const{lat:e,lon:i}=Hx(n,t),{bbox:s}=Jt.heightmap,r=(i-s.lonW)/(s.lonE-s.lonW)*(un.w-1),o=(s.latN-e)/(s.latN-s.latS)*(un.h-1);if(r<0||o<0||r>un.w-1||o>un.h-1)return ve.WATER;const a=Math.round(r),l=Math.round(o);return un.data[l*un.w+a]}function Wx(){const{data:n,w:t,h:e}=un,{minClusterPixels:i}=Ne.urban,s=new Uint8Array(n.length),r=[],o=[],a=[0,0,0,0];function l(u){const h=u%t,f=u/t|0;let m=0;return h>0&&(a[m++]=u-1),h<t-1&&(a[m++]=u+1),f>0&&(a[m++]=u-t),f<e-1&&(a[m++]=u+t),m}for(let u=0;u<n.length;u++){if(s[u]||n[u]!==ve.URBAN)continue;const h=[],f=[u];s[u]=1;let m=0;for(;m<f.length;){const _=f[m++];h.push(_);const v=l(_);for(let p=0;p<v;p++){const d=a[p];!s[d]&&n[d]===ve.URBAN&&(s[d]=1,f.push(d))}}h.length<i?o.push(...h):r.push(h)}for(const u of o){const h=l(u),f=new Map;for(let v=0;v<h;v++){const p=n[a[v]];p!==ve.URBAN&&p!==ve.WATER&&f.set(p,(f.get(p)||0)+1)}let m=ve.GRASS,_=0;for(const[v,p]of f)p>_&&(m=v,_=p);n[u]=m}const c=r.map(u=>{let h=0,f=0;const m=[];for(const _ of u){const v=_%t,p=_/t|0,{x:d,z:y}=Vx(v,p);m.push({x:d,z:y}),h+=d,f+=y}return{pixelCount:u.length,centerX:h/u.length,centerZ:f/u.length,pixels:m}});return c.sort((u,h)=>h.pixelCount-u.pixelCount),console.log(`landcover: ${c.length} urban clusters surviving (${o.length} tiny urban pixels reclassified)`),c}function Xx(){return gh}let on=null;async function qx(n=Jt.heightmap.url){const t=new Image;t.src=n,await t.decode();const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(t,0,0),on={data:i.getImageData(0,0,t.width,t.height).data,w:t.width,h:t.height}}function Yx(n,t){const{center:e,metersPerUnit:i}=Jt.heightmap,s=n*i,r=-t*i,o=e.lat+r/111320,a=e.lon+s/(111320*Math.cos(e.lat*Math.PI/180));return{lat:o,lon:a}}function jx(n,t){if(!on)return 0;const{bbox:e,elevRange:i}=Jt.heightmap,s=(t-e.lonW)/(e.lonE-e.lonW)*(on.w-1),r=(e.latN-n)/(e.latN-e.latS)*(on.h-1);if(s<0||r<0||s>on.w-1||r>on.h-1)return 0;const o=Math.floor(s),a=Math.floor(r),l=Math.min(o+1,on.w-1),c=Math.min(a+1,on.h-1),u=s-o,h=r-a,f=i[1]-i[0],m=(_,v)=>{const p=(v*on.w+_)*4,d=on.data[p]<<8|on.data[p+1];return i[0]+d/65535*f};return(1-u)*(1-h)*m(o,a)+u*(1-h)*m(l,a)+(1-u)*h*m(o,c)+u*h*m(l,c)}function os(n,t){const{lat:e,lon:i}=Yx(n,t);return jx(e,i)/Jt.heightmap.metersPerUnit}const Vc=55;function xh(n,t,e){let i=e,s=0;for(const r of pn){const o=n-r.x,a=t-r.z,l=Math.cos(r.heading),c=Math.sin(r.heading),u=o*l-a*c,h=o*c+a*l,f=r.length/2,m=r.width/2,_=Math.max(0,Math.abs(u)-m),v=Math.max(0,Math.abs(h)-f),p=Math.sqrt(_*_+v*v);if(p<Vc){const d=Fs.smoothstep(p,0,Vc);i=Fs.lerp(r.elevation,i,d),s=Math.max(s,1-d)}}return{y:i,onRunway:s}}function ls(n,t){return xh(n,t,os(n,t)).y}function $x(){const n=new Pi(Jt.size,Jt.size,Jt.segments,Jt.segments);n.rotateX(-Math.PI/2);const t=n.attributes.position,e=new Float32Array(t.count*3),i=new Rt(Kt.pineCanopy),s=new Rt(Kt.laurelCanopy),r=new Rt(Kt.shrubBody),o=new Rt(Kt.grassGround),a=new Rt(Kt.cropGround),l=new Rt(Kt.urbanGround),c=new Rt(Kt.bareGround),u=new Rt(Kt.shore),h=new Rt(Kt.snow),f=new Rt(Kt.runway),m=new Rt,_=Jt.heightmap.metersPerUnit,v=80/_,p=2500/_,d=3200/_,y=Ne.laurelMaxAltitude;for(let S=0;S<t.count;S++){const L=t.getX(S),T=t.getZ(S),w=xh(L,T,os(L,T)),U=w.y,E=w.onRunway;switch(t.setY(S,U),_h(L,T)){case ve.TREE:m.copy(U>=y?i:s);break;case ve.SHRUB:m.copy(r);break;case ve.GRASS:m.copy(o);break;case ve.CROP:m.copy(a);break;case ve.URBAN:m.copy(l);break;case ve.BARE:m.copy(c);break;default:m.copy(u);break}if(U>d)m.copy(h);else if(U>p){const W=(U-p)/(d-p);m.lerp(h,W)}if(U<Jt.waterLevel+v){const W=(U-Jt.waterLevel)/v;m.lerp(u,1-Math.max(0,W))}E>.001&&m.lerp(f,E*.35);const V=.94+kx(L,T)*.12;e[S*3]=m.r*V,e[S*3+1]=m.g*V,e[S*3+2]=m.b*V}n.setAttribute("color",new Pe(e,3)),n.computeVertexNormals();const x=new ge({vertexColors:!0,flatShading:!0});return new ee(n,x)}function Zx(){const n=new Pi(Jt.size*1.6,Jt.size*1.6);n.rotateX(-Math.PI/2);const t=new ge({color:Kt.water,transparent:!0,opacity:.96}),e=new ee(n,t);return e.position.y=Jt.waterLevel,e}const Kx=.4,Jx=.08,ks=20,Jn=Math.ceil(Jt.size/ks)+2,Wc=-8e3-ks,vh=Array.from({length:Jn*Jn},()=>[]);function yh(n,t){return{cx:Math.floor((n-Wc)/ks),cz:Math.floor((t-Wc)/ks)}}function Hs(n,t,e,i,s){const r=i+Kx,o={x:n,z:e,r2:r*r,yMin:t,yMax:t+s+Jx},a=Math.ceil(r/ks),{cx:l,cz:c}=yh(n,e);for(let u=-a;u<=a;u++)for(let h=-a;h<=a;h++){const f=l+h,m=c+u;f<0||m<0||f>=Jn||m>=Jn||vh[m*Jn+f].push(o)}}function Qx(n,t,e){const{cx:i,cz:s}=yh(n,e);if(i<0||s<0||i>=Jn||s>=Jn)return!1;const r=vh[s*Jn+i];for(let o=0;o<r.length;o++){const a=r[o];if(t<a.yMin||t>a.yMax)continue;const l=a.x-n,c=a.z-e;if(l*l+c*c<a.r2)return!0}return!1}const fs=new D(0,1,0);function mo(n,t){for(const e of pn){const i=n-e.x,s=t-e.z,r=(Math.max(e.length,e.width)*.9)**2;if(i*i+s*s<r)return!0}return!1}function tv(){const t=Qn.reduce((e,i)=>e+i.bboxRadius*i.bboxRadius,0);return Qn.map(e=>{const i=e.bboxRadius*e.bboxRadius/t;return Math.max(8e3,Math.floor(Ne.sampleCount*i))})}function ev(){const{treeDensity:n,shrubDensity:t,grassDensity:e,cropDensity:i,bareDensity:s,snowDensity:r,wetlandDensity:o,laurelMaxAltitude:a}=Ne,l=[],c=[],u=[],h=[],f=[],m=[],_=[],v=[],p=tv();for(let d=0;d<Qn.length;d++){const y=Qn[d],x=y.bboxRadius,S=p[d];for(let L=0;L<S;L++){const T=y.x+(Math.random()-.5)*2*x,w=y.z+(Math.random()-.5)*2*x,U=os(T,w);if(U<Jt.waterLevel+.5||mo(T,w))continue;const E=_h(T,w);E===ve.TREE&&Math.random()<n?U>=a?l.push({x:T,y:U,z:w}):c.push({x:T,y:U,z:w}):E===ve.SHRUB&&Math.random()<t?u.push({x:T,y:U,z:w}):E===ve.GRASS&&Math.random()<e?h.push({x:T,y:U,z:w}):E===ve.CROP&&Math.random()<i?f.push({x:T,y:U,z:w}):E===ve.BARE&&Math.random()<s?m.push({x:T,y:U,z:w}):E===ve.SNOW&&Math.random()<r?_.push({x:T,y:U,z:w}):E===ve.WETLAND&&Math.random()<o&&v.push({x:T,y:U,z:w})}}return{pines:l,laurels:c,shrubs:u,grasses:h,crops:f,rocks:m,snow:_,wetlands:v}}function Mh(n,t,e,i,s,r,o,a,l){const c=new Sn(t,i,n.length),u=new Sn(e,s,n.length),h=new $t,f=new Ge,m=new D,_=new D;for(let p=0;p<n.length;p++){const{x:d,y,z:x}=n[p],S=r+Math.random()*(o-r);_.set(d,y,x),m.set(S,S+Math.random()*.3,S),f.setFromAxisAngle(fs,Math.random()*Math.PI*2),h.compose(_,f,m),c.setMatrixAt(p,h),u.setMatrixAt(p,h),Hs(d,y,x,a*S,l*S)}c.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0;const v=new me;return v.add(c,u),v}function nv(n){const t=new Un(.18,.26,1.6,5);t.translate(0,.8,0);const e=new Fn(1,4.8,7);e.translate(0,3.8,0);const i=new ge({color:Kt.trunk,flatShading:!0}),s=new ge({color:Kt.pineCanopy,flatShading:!0}),r=Ne.treeScale;return Mh(n,t,e,i,s,.75*r,1.3*r,1,6.2)}function iv(n){const t=new Un(.22,.32,1,5);t.translate(0,.5,0);const e=new ia(1.7,7,5);e.scale(1,.85,1),e.translate(0,2,0);const i=new ge({color:Kt.trunk,flatShading:!0}),s=new ge({color:Kt.laurelCanopy,flatShading:!0}),r=Ne.treeScale;return Mh(n,t,e,i,s,.85*r,1.25*r,1.7,3.5)}function sv(n){const t=new Fn(.7,1,5);t.translate(0,.5,0);const e=new ge({color:Kt.shrubBody,flatShading:!0}),i=new Sn(t,e,n.length),s=new $t,r=new Ge,o=new D,a=new D;for(let l=0;l<n.length;l++){const{x:c,y:u,z:h}=n[l],f=.5+Math.random()*.6;a.set(c,u,h),o.set(f+Math.random()*.2,f,f+Math.random()*.2),r.setFromAxisAngle(fs,Math.random()*Math.PI*2),s.compose(a,r,o),i.setMatrixAt(l,s),Hs(c,u,h,.85*f,1*f)}return i.instanceMatrix.needsUpdate=!0,i}function rv(n){const t=new Fn(.35,.55,4);t.translate(0,.25,0);const e=new ge({color:16777215,flatShading:!0}),i=new Sn(t,e,n.length),s=new $t,r=new Ge,o=new D,a=new D,l=new Rt(Kt.grassGround),c=Ne.grassTints,u=new Rt;for(let h=0;h<n.length;h++){const{x:f,y:m,z:_}=n[h],v=.6+Math.random()*.7;a.set(f,m,_),o.set(v,v*(.8+Math.random()*.5),v),r.setFromAxisAngle(fs,Math.random()*Math.PI*2),s.compose(a,r,o),i.setMatrixAt(h,s);const[p,d,y]=c[Math.random()*c.length|0];u.setRGB(l.r*p,l.g*d,l.b*y),i.setColorAt(h,u)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function av(n){const t=new Fn(.4,.75,4);t.translate(0,.35,0);const e=new ge({color:16777215,flatShading:!0}),i=new Sn(t,e,n.length),s=new $t,r=new Ge,o=new D,a=new D,l=new Rt(Kt.cropGround),c=Ne.grassTints,u=new Rt;for(let h=0;h<n.length;h++){const{x:f,y:m,z:_}=n[h],v=.7+Math.random()*.6;a.set(f,m,_),o.set(v,v*(.9+Math.random()*.4),v),r.setFromAxisAngle(fs,Math.random()*Math.PI*2),s.compose(a,r,o),i.setMatrixAt(h,s);const[p,d,y]=c[Math.random()*c.length|0];u.setRGB(l.r*p,l.g*d,l.b*y),i.setColorAt(h,u)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function ov(n){const t=new na(.5,0),e=new ge({color:16777215,flatShading:!0}),i=new Sn(t,e,n.length),s=new $t,r=new Ge,o=new D,a=new D,l=new mn,c=new Rt(Kt.rock),u=Ne.rockTintsLow,h=Ne.rockTintsMid,f=Ne.rockTintsHigh,m=Ne.rockZoneLowMax,_=Ne.rockZoneHighMin,v=new Rt;for(let p=0;p<n.length;p++){const{x:d,y,z:x}=n[p];let S,L,T;y<m?(S=u,L=.3,T=1.5):y>_?(S=f,L=.4,T=2.5):(S=h,L=.5,T=3.5);const w=L+Math.random()*Math.random()*(T-L);a.set(d,y+w*.2,x),o.set(w*(.7+Math.random()*.6),w*(.55+Math.random()*.45),w*(.7+Math.random()*.6)),l.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),r.setFromEuler(l),s.compose(a,r,o),i.setMatrixAt(p,s);const[U,E,b]=S[Math.random()*S.length|0];v.setRGB(c.r*U,c.g*E,c.b*b),i.setColorAt(p,v),w>1.5&&Hs(d,y,x,w,w)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function lv(n){const t=new na(.5,0),e=new ge({color:16777215,flatShading:!0}),i=new Sn(t,e,n.length),s=new $t,r=new Ge,o=new D,a=new D,l=new mn,c=new Rt;for(let u=0;u<n.length;u++){const{x:h,y:f,z:m}=n[u],_=.4+Math.random()*.9;a.set(h,f+_*.1,m),o.set(_*(.9+Math.random()*.3),_*(.25+Math.random()*.2),_*(.9+Math.random()*.3)),l.set(0,Math.random()*Math.PI*2,0),r.setFromEuler(l),s.compose(a,r,o),i.setMatrixAt(u,s);const v=.93+Math.random()*.07;c.setRGB(v,v,v),i.setColorAt(u,c)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function cv(n){const t=new Nn(1,.04,1);t.translate(0,.02,0);const e=new ge({color:16777215,flatShading:!0}),i=new Sn(t,e,n.length),s=new $t,r=new Ge,o=new D,a=new D,l=new Rt,c=[[1.05,1.1,1.15],[1.15,1.15,1.2],[.95,1,1.05],[1.1,1.05,.95]];for(let u=0;u<n.length;u++){const{x:h,y:f,z:m}=n[u],_=1+Math.random()*.8;a.set(h,f+.05,m),o.set(_*(.9+Math.random()*.4),1,_*(.9+Math.random()*.4)),r.setFromAxisAngle(fs,Math.random()*Math.PI*2),s.compose(a,r,o),i.setMatrixAt(u,s);const[v,p,d]=c[Math.random()*c.length|0];l.setRGB(.92*v,.94*p,.96*d),i.setColorAt(u,l)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function uv(n){const{clusterScaleMin:t,clusterScaleMax:e}=Ne.urban,i=Math.min(1,Math.pow(n/50,.4));return t+i*(e-t)}function hv(){const n=Xx(),{churchClusterPixels:t,housesPerPixel:e,housesMin:i,housesMax:s,houseMinSpacing:r,pixelJitter:o}=Ne.urban,a=[],l=[],c=r*r;for(const u of n){const h=Math.max(i,Math.min(s,Math.round(u.pixelCount*e))),f=uv(u.pixelCount),m=[];let _=0;const v=h*14;for(;m.length<h&&_<v;){_++;const p=u.pixels[Math.random()*u.pixels.length|0],d=p.x+(Math.random()-.5)*o,y=p.z+(Math.random()-.5)*o;let x=!0;for(const L of m){const T=L.x-d,w=L.z-y;if(T*T+w*w<c){x=!1;break}}if(!x)continue;const S=os(d,y);S<Jt.waterLevel+.5||mo(d,y)||m.push({x:d,y:S,z:y,scale:f})}if(a.push(...m),u.pixelCount>=t){const p=u.centerX,d=u.centerZ,y=os(p,d);y>=Jt.waterLevel+.5&&!mo(p,d)&&l.push({x:p,y,z:d,scale:f})}}return{houses:a,churches:l}}function dv(n){const t=new Nn(1.4,1,1.6);t.translate(0,.5,0);const e=new Fn(1.15,.75,4);e.rotateY(Math.PI/4),e.translate(0,1.37,0);const i=new ge({color:Kt.houseWall,flatShading:!0}),s=new ge({color:16777215,flatShading:!0}),r=new Sn(t,i,n.length),o=new Sn(e,s,n.length),a=new $t,l=new Ge,c=new D,u=new D,h=new Rt(Kt.houseRoof),f=Ne.roofTints,m=new Rt;for(let v=0;v<n.length;v++){const{x:p,y:d,z:y,scale:x}=n[v],S=x*(.85+Math.random()*.3),L=x*(.8+Math.random()*.35),T=x*(.85+Math.random()*.3);u.set(p,d,y),c.set(S,L,T);const w=Math.random()*8|0;l.setFromAxisAngle(fs,w*Math.PI/4),a.compose(u,l,c),r.setMatrixAt(v,a),o.setMatrixAt(v,a);const[U,E,b]=f[Math.random()*f.length|0];m.setRGB(h.r*U,h.g*E,h.b*b),o.setColorAt(v,m),Hs(p,d,y,.85*x,1.75*x)}r.instanceMatrix.needsUpdate=!0,o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0;const _=new me;return _.add(r,o),_}function fv(){const n=new ge({color:Kt.houseWall,flatShading:!0}),t=new ge({color:Kt.houseRoof,flatShading:!0}),e=new ee(new Nn(1.6,1.2,2.6),n);e.position.y=.6;const i=new ee(new Fn(1.4,.7,4),t);i.rotation.y=Math.PI/4,i.position.y=1.55;const s=new ee(new Nn(.75,2.4,.75),n);s.position.set(0,1.2,-1.65);const r=new ee(new Fn(.5,1.05,4),t);r.rotation.y=Math.PI/4,r.position.set(0,2.95,-1.65);const o=new me;return o.add(e,i,s,r),o}function pv(n){const t=fv(),e=new me;for(const{x:i,y:s,z:r,scale:o}of n){const a=t.clone();a.position.set(i,s,r);const l=o*(.95+Math.random()*.2);a.scale.set(l,l,l),a.rotation.y=Math.random()*Math.PI*2,e.add(a),Hs(i,s,r,1.9*l,3.5*l)}return e}function mv(){const n=ev(),t=hv(),e=new me;return n.pines.length&&e.add(nv(n.pines)),n.laurels.length&&e.add(iv(n.laurels)),n.shrubs.length&&e.add(sv(n.shrubs)),n.grasses.length&&e.add(rv(n.grasses)),n.crops.length&&e.add(av(n.crops)),n.rocks.length&&e.add(ov(n.rocks)),n.snow.length&&e.add(lv(n.snow)),n.wetlands.length&&e.add(cv(n.wetlands)),t.houses.length&&e.add(dv(t.houses)),t.churches.length&&e.add(pv(t.churches)),console.log(`vegetation: ${n.pines.length} pines, ${n.laurels.length} laurels, ${n.shrubs.length} shrubs, ${n.grasses.length} grass tufts, ${n.crops.length} crops, ${n.rocks.length} rocks, ${n.snow.length} snow, ${n.wetlands.length} salinas, ${t.houses.length} houses, ${t.churches.length} churches`),e}const gv={tenerife:{count:18,spread:900,radiusRange:[8,18],strengthRange:[.55,1.55]},gomera:{count:6,spread:280,radiusRange:[9,14],strengthRange:[.65,1.3]},palma:{count:9,spread:480,radiusRange:[8,16],strengthRange:[.6,1.5]},gc:{count:12,spread:560,radiusRange:[8,17],strengthRange:[.55,1.5]},hierro:{count:5,spread:280,radiusRange:[9,13],strengthRange:[.65,1.3]},fuerte:{count:12,spread:1100,radiusRange:[10,18],strengthRange:[.55,1.2]},lanza:{count:9,spread:640,radiusRange:[9,16],strengthRange:[.6,1.3]},graciosa:{count:3,spread:120,radiusRange:[8,12],strengthRange:[.7,1.1]}};function _v(n){let t=n>>>0;return()=>{t=t+2654435769>>>0;let e=t;return e=Math.imul(e^e>>>16,569420461),e=Math.imul(e^e>>>15,1935289751),((e^e>>>15)>>>0)/4294967296}}function xv(){const n=[],t=_v(12648430);for(const e of Qn){const i=gv[e.id];if(i)for(let s=0;s<i.count;s++){const r=t()*Math.PI*2,o=Math.sqrt(t())*i.spread,a=e.x+Math.cos(r)*o,l=e.z+Math.sin(r)*o,c=i.radiusRange[0]+t()*(i.radiusRange[1]-i.radiusRange[0]),u=i.strengthRange[0]+t()*(i.strengthRange[1]-i.strengthRange[0]);n.push({x:a,z:l,radius:c,strength:u})}}return n}const cn=xv(),Vr=.55,Sh=1.05,vv=.9;let Ss,Lr,Ir,go,Hn,Wr;function yv(){const n=new me;for(let a=cn.length-1;a>=0;a--)ls(cn[a].x,cn[a].z)<Jt.waterLevel+.5&&cn.splice(a,1);for(const a of cn)a.baseElevation=ls(a.x,a.z);for(const a of cn){const l=new ei({color:Je.columnColor,transparent:!0,opacity:Je.columnOpacity*a.strength,side:Ve,depthWrite:!1}),c=new Un(a.radius*Sh,a.radius*Vr,Je.columnTop,20,1,!0);c.translate(0,Je.columnTop/2,0);const u=new ee(c,l);u.position.set(a.x,a.baseElevation,a.z),n.add(u)}const t=cn.map(a=>Math.max(10,Math.floor(Je.particleDensity*Math.PI*a.radius*a.radius))),e=t.reduce((a,l)=>a+l,0);Ss=new Float32Array(e*3),Lr=new Float32Array(e),Ir=new Float32Array(e),go=new Uint16Array(e),Hn=new Float32Array(e);const i=new Float32Array(e);let s=0;for(let a=0;a<cn.length;a++){const l=cn[a];for(let c=0;c<t[a];c++){const u=Math.sqrt(Math.random())*vv,h=Math.random()*Math.PI*2;Lr[s]=Math.cos(h)*u,Ir[s]=Math.sin(h)*u,go[s]=a,Hn[s]=Math.random(),i[s]=Je.particleSize*(.7+.5*l.strength);const f=l.radius*Vr;Ss[s*3+0]=l.x+Lr[s]*f,Ss[s*3+1]=l.baseElevation,Ss[s*3+2]=l.z+Ir[s]*f,s++}}const r=new _e;r.setAttribute("position",new Pe(Ss,3)),r.setAttribute("size",new Pe(i,1));const o=new ni({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Rt(Je.particleColor)},uOpacity:{value:Je.particleOpacity}},vertexShader:`
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
    `});return Wr=new G_(r,o),n.add(Wr),n}function Mv(n){if(!Wr)return;const t=Wr.geometry.attributes.position,e=t.array,i=Je.columnTop,s=Je.riseSpeed;for(let r=0;r<Hn.length;r++){const o=cn[go[r]];Hn[r]+=s*o.strength/i*n,Hn[r]>=1&&(Hn[r]-=1);const a=o.radius*(Vr+(Sh-Vr)*Hn[r]);e[r*3+0]=o.x+Lr[r]*a,e[r*3+1]=o.baseElevation+Hn[r]*i,e[r*3+2]=o.z+Ir[r]*a}t.needsUpdate=!0}function Sv(n,t,e){let i=0;for(const s of cn){const r=n-s.x,o=e-s.z,a=Math.sqrt(r*r+o*o);if(a>=s.radius)continue;const l=t-(s.baseElevation??0);if(l<0)continue;const c=1-a/s.radius,u=Math.max(0,1-l/Je.maxAltitude);i+=Je.liftAtCenter*s.strength*c*u}return i}const Ev=ye;class Xr extends Bo{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,i,s){const r=this,o=new bx(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},i,s)}parse(t){const e=this;function i(N,I){if(N.nodeType!==1)return;const R=S(N);let A=!1,K=null;switch(N.nodeName){case"svg":I=_(N,I);break;case"style":r(N);break;case"g":I=_(N,I);break;case"path":I=_(N,I),N.hasAttribute("d")&&(K=s(N));break;case"rect":I=_(N,I),K=l(N);break;case"polygon":I=_(N,I),K=c(N);break;case"polyline":I=_(N,I),K=u(N);break;case"circle":I=_(N,I),K=h(N);break;case"ellipse":I=_(N,I),K=f(N);break;case"line":I=_(N,I),K=m(N);break;case"defs":A=!0;break;case"use":I=_(N,I);const ct=(N.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),P=N.viewportElement.getElementById(ct);P?i(P,I):console.warn("SVGLoader: 'use node' references non-existent node id: "+ct);break}K&&(I.fill!==void 0&&I.fill!=="none"&&K.color.setStyle(I.fill,Ev),T(K,pt),W.push(K),K.userData={node:N,style:I});const lt=N.childNodes;for(let X=0;X<lt.length;X++){const ct=lt[X];A&&ct.nodeName!=="style"&&ct.nodeName!=="defs"||i(ct,I)}R&&(O.pop(),O.length>0?pt.copy(O[O.length-1]):pt.identity())}function s(N){const I=new ui,R=new dt,A=new dt,K=new dt;let lt=!0,X=!1;const ct=N.getAttribute("d");if(ct===""||ct==="none")return null;const P=ct.match(/[a-df-z][^a-df-z]*/ig);for(let tt=0,B=P.length;tt<B;tt++){const Y=P[tt],q=Y.charAt(0),ht=Y.slice(1).trim();lt===!0&&(X=!0,lt=!1);let F;switch(q){case"M":F=p(ht);for(let g=0,M=F.length;g<M;g+=2)R.x=F[g+0],R.y=F[g+1],A.x=R.x,A.y=R.y,g===0?I.moveTo(R.x,R.y):I.lineTo(R.x,R.y),g===0&&K.copy(R);break;case"H":F=p(ht);for(let g=0,M=F.length;g<M;g++)R.x=F[g],A.x=R.x,A.y=R.y,I.lineTo(R.x,R.y),g===0&&X===!0&&K.copy(R);break;case"V":F=p(ht);for(let g=0,M=F.length;g<M;g++)R.y=F[g],A.x=R.x,A.y=R.y,I.lineTo(R.x,R.y),g===0&&X===!0&&K.copy(R);break;case"L":F=p(ht);for(let g=0,M=F.length;g<M;g+=2)R.x=F[g+0],R.y=F[g+1],A.x=R.x,A.y=R.y,I.lineTo(R.x,R.y),g===0&&X===!0&&K.copy(R);break;case"C":F=p(ht);for(let g=0,M=F.length;g<M;g+=6)I.bezierCurveTo(F[g+0],F[g+1],F[g+2],F[g+3],F[g+4],F[g+5]),A.x=F[g+2],A.y=F[g+3],R.x=F[g+4],R.y=F[g+5],g===0&&X===!0&&K.copy(R);break;case"S":F=p(ht);for(let g=0,M=F.length;g<M;g+=4)I.bezierCurveTo(v(R.x,A.x),v(R.y,A.y),F[g+0],F[g+1],F[g+2],F[g+3]),A.x=F[g+0],A.y=F[g+1],R.x=F[g+2],R.y=F[g+3],g===0&&X===!0&&K.copy(R);break;case"Q":F=p(ht);for(let g=0,M=F.length;g<M;g+=4)I.quadraticCurveTo(F[g+0],F[g+1],F[g+2],F[g+3]),A.x=F[g+0],A.y=F[g+1],R.x=F[g+2],R.y=F[g+3],g===0&&X===!0&&K.copy(R);break;case"T":F=p(ht);for(let g=0,M=F.length;g<M;g+=2){const k=v(R.x,A.x),ft=v(R.y,A.y);I.quadraticCurveTo(k,ft,F[g+0],F[g+1]),A.x=k,A.y=ft,R.x=F[g+0],R.y=F[g+1],g===0&&X===!0&&K.copy(R)}break;case"A":F=p(ht,[3,4],7);for(let g=0,M=F.length;g<M;g+=7){if(F[g+5]==R.x&&F[g+6]==R.y)continue;const k=R.clone();R.x=F[g+5],R.y=F[g+6],A.x=R.x,A.y=R.y,o(I,F[g],F[g+1],F[g+2],F[g+3],F[g+4],k,R),g===0&&X===!0&&K.copy(R)}break;case"m":F=p(ht);for(let g=0,M=F.length;g<M;g+=2)R.x+=F[g+0],R.y+=F[g+1],A.x=R.x,A.y=R.y,g===0?I.moveTo(R.x,R.y):I.lineTo(R.x,R.y),g===0&&K.copy(R);break;case"h":F=p(ht);for(let g=0,M=F.length;g<M;g++)R.x+=F[g],A.x=R.x,A.y=R.y,I.lineTo(R.x,R.y),g===0&&X===!0&&K.copy(R);break;case"v":F=p(ht);for(let g=0,M=F.length;g<M;g++)R.y+=F[g],A.x=R.x,A.y=R.y,I.lineTo(R.x,R.y),g===0&&X===!0&&K.copy(R);break;case"l":F=p(ht);for(let g=0,M=F.length;g<M;g+=2)R.x+=F[g+0],R.y+=F[g+1],A.x=R.x,A.y=R.y,I.lineTo(R.x,R.y),g===0&&X===!0&&K.copy(R);break;case"c":F=p(ht);for(let g=0,M=F.length;g<M;g+=6)I.bezierCurveTo(R.x+F[g+0],R.y+F[g+1],R.x+F[g+2],R.y+F[g+3],R.x+F[g+4],R.y+F[g+5]),A.x=R.x+F[g+2],A.y=R.y+F[g+3],R.x+=F[g+4],R.y+=F[g+5],g===0&&X===!0&&K.copy(R);break;case"s":F=p(ht);for(let g=0,M=F.length;g<M;g+=4)I.bezierCurveTo(v(R.x,A.x),v(R.y,A.y),R.x+F[g+0],R.y+F[g+1],R.x+F[g+2],R.y+F[g+3]),A.x=R.x+F[g+0],A.y=R.y+F[g+1],R.x+=F[g+2],R.y+=F[g+3],g===0&&X===!0&&K.copy(R);break;case"q":F=p(ht);for(let g=0,M=F.length;g<M;g+=4)I.quadraticCurveTo(R.x+F[g+0],R.y+F[g+1],R.x+F[g+2],R.y+F[g+3]),A.x=R.x+F[g+0],A.y=R.y+F[g+1],R.x+=F[g+2],R.y+=F[g+3],g===0&&X===!0&&K.copy(R);break;case"t":F=p(ht);for(let g=0,M=F.length;g<M;g+=2){const k=v(R.x,A.x),ft=v(R.y,A.y);I.quadraticCurveTo(k,ft,R.x+F[g+0],R.y+F[g+1]),A.x=k,A.y=ft,R.x=R.x+F[g+0],R.y=R.y+F[g+1],g===0&&X===!0&&K.copy(R)}break;case"a":F=p(ht,[3,4],7);for(let g=0,M=F.length;g<M;g+=7){if(F[g+5]==0&&F[g+6]==0)continue;const k=R.clone();R.x+=F[g+5],R.y+=F[g+6],A.x=R.x,A.y=R.y,o(I,F[g],F[g+1],F[g+2],F[g+3],F[g+4],k,R),g===0&&X===!0&&K.copy(R)}break;case"Z":case"z":I.currentPath.autoClose=!0,I.currentPath.curves.length>0&&(R.copy(K),I.currentPath.currentPoint.copy(R),lt=!0);break;default:console.warn(Y)}X=!1}return I}function r(N){if(!(!N.sheet||!N.sheet.cssRules||!N.sheet.cssRules.length))for(let I=0;I<N.sheet.cssRules.length;I++){const R=N.sheet.cssRules[I];if(R.type!==1)continue;const A=R.selectorText.split(/,/gm).filter(Boolean).map(K=>K.trim());for(let K=0;K<A.length;K++){const lt=Object.fromEntries(Object.entries(R.style).filter(([,X])=>X!==""));ut[A[K]]=Object.assign(ut[A[K]]||{},lt)}}}function o(N,I,R,A,K,lt,X,ct){if(I==0||R==0){N.lineTo(ct.x,ct.y);return}A=A*Math.PI/180,I=Math.abs(I),R=Math.abs(R);const P=(X.x-ct.x)/2,tt=(X.y-ct.y)/2,B=Math.cos(A)*P+Math.sin(A)*tt,Y=-Math.sin(A)*P+Math.cos(A)*tt;let q=I*I,ht=R*R;const F=B*B,g=Y*Y,M=F/q+g/ht;if(M>1){const gt=Math.sqrt(M);I=gt*I,R=gt*R,q=I*I,ht=R*R}const k=q*g+ht*F,ft=(q*ht-k)/k;let mt=Math.sqrt(Math.max(0,ft));K===lt&&(mt=-mt);const ot=mt*I*Y/R,Tt=-mt*R*B/I,vt=Math.cos(A)*ot-Math.sin(A)*Tt+(X.x+ct.x)/2,At=Math.sin(A)*ot+Math.cos(A)*Tt+(X.y+ct.y)/2,Lt=a(1,0,(B-ot)/I,(Y-Tt)/R),Ft=a((B-ot)/I,(Y-Tt)/R,(-B-ot)/I,(-Y-Tt)/R)%(Math.PI*2);N.currentPath.absellipse(vt,At,I,R,Lt,Lt+Ft,lt===0,A)}function a(N,I,R,A){const K=N*R+I*A,lt=Math.sqrt(N*N+I*I)*Math.sqrt(R*R+A*A);let X=Math.acos(Math.max(-1,Math.min(1,K/lt)));return N*A-I*R<0&&(X=-X),X}function l(N){const I=x(N.getAttribute("x")||0),R=x(N.getAttribute("y")||0),A=x(N.getAttribute("rx")||N.getAttribute("ry")||0),K=x(N.getAttribute("ry")||N.getAttribute("rx")||0),lt=x(N.getAttribute("width")),X=x(N.getAttribute("height")),ct=1-.551915024494,P=new ui;return P.moveTo(I+A,R),P.lineTo(I+lt-A,R),(A!==0||K!==0)&&P.bezierCurveTo(I+lt-A*ct,R,I+lt,R+K*ct,I+lt,R+K),P.lineTo(I+lt,R+X-K),(A!==0||K!==0)&&P.bezierCurveTo(I+lt,R+X-K*ct,I+lt-A*ct,R+X,I+lt-A,R+X),P.lineTo(I+A,R+X),(A!==0||K!==0)&&P.bezierCurveTo(I+A*ct,R+X,I,R+X-K*ct,I,R+X-K),P.lineTo(I,R+K),(A!==0||K!==0)&&P.bezierCurveTo(I,R+K*ct,I+A*ct,R,I+A,R),P}function c(N){function I(lt,X,ct){const P=x(X),tt=x(ct);K===0?A.moveTo(P,tt):A.lineTo(P,tt),K++}const R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new ui;let K=0;return N.getAttribute("points").replace(R,I),A.currentPath.autoClose=!0,A}function u(N){function I(lt,X,ct){const P=x(X),tt=x(ct);K===0?A.moveTo(P,tt):A.lineTo(P,tt),K++}const R=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,A=new ui;let K=0;return N.getAttribute("points").replace(R,I),A.currentPath.autoClose=!1,A}function h(N){const I=x(N.getAttribute("cx")||0),R=x(N.getAttribute("cy")||0),A=x(N.getAttribute("r")||0),K=new ns;K.absarc(I,R,A,0,Math.PI*2);const lt=new ui;return lt.subPaths.push(K),lt}function f(N){const I=x(N.getAttribute("cx")||0),R=x(N.getAttribute("cy")||0),A=x(N.getAttribute("rx")||0),K=x(N.getAttribute("ry")||0),lt=new ns;lt.absellipse(I,R,A,K,0,Math.PI*2);const X=new ui;return X.subPaths.push(lt),X}function m(N){const I=x(N.getAttribute("x1")||0),R=x(N.getAttribute("y1")||0),A=x(N.getAttribute("x2")||0),K=x(N.getAttribute("y2")||0),lt=new ui;return lt.moveTo(I,R),lt.lineTo(A,K),lt.currentPath.autoClose=!1,lt}function _(N,I){I=Object.assign({},I);let R={};if(N.hasAttribute("class")){const X=N.getAttribute("class").split(/\s/).filter(Boolean).map(ct=>ct.trim());for(let ct=0;ct<X.length;ct++)R=Object.assign(R,ut["."+X[ct]])}N.hasAttribute("id")&&(R=Object.assign(R,ut["#"+N.getAttribute("id")]));function A(X,ct,P){P===void 0&&(P=function(B){return B.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),B}),N.hasAttribute(X)&&(I[ct]=P(N.getAttribute(X))),R[X]&&(I[ct]=P(R[X])),N.style&&N.style[X]!==""&&(I[ct]=P(N.style[X]))}function K(X){return Math.max(0,Math.min(1,x(X)))}function lt(X){return Math.max(0,x(X))}return A("fill","fill"),A("fill-opacity","fillOpacity",K),A("fill-rule","fillRule"),A("opacity","opacity",K),A("stroke","stroke"),A("stroke-opacity","strokeOpacity",K),A("stroke-width","strokeWidth",lt),A("stroke-linejoin","strokeLineJoin"),A("stroke-linecap","strokeLineCap"),A("stroke-miterlimit","strokeMiterLimit",lt),A("visibility","visibility"),I}function v(N,I){return N-(I-N)}function p(N,I,R){if(typeof N!="string")throw new TypeError("Invalid input: "+typeof N);const A={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},K=0,lt=1,X=2,ct=3;let P=K,tt=!0,B="",Y="";const q=[];function ht(k,ft,mt){const ot=new SyntaxError('Unexpected character "'+k+'" at index '+ft+".");throw ot.partial=mt,ot}function F(){B!==""&&(Y===""?q.push(Number(B)):q.push(Number(B)*Math.pow(10,Number(Y)))),B="",Y=""}let g;const M=N.length;for(let k=0;k<M;k++){if(g=N[k],Array.isArray(I)&&I.includes(q.length%R)&&A.FLAGS.test(g)){P=lt,B=g,F();continue}if(P===K){if(A.WHITESPACE.test(g))continue;if(A.DIGIT.test(g)||A.SIGN.test(g)){P=lt,B=g;continue}if(A.POINT.test(g)){P=X,B=g;continue}A.COMMA.test(g)&&(tt&&ht(g,k,q),tt=!0)}if(P===lt){if(A.DIGIT.test(g)){B+=g;continue}if(A.POINT.test(g)){B+=g,P=X;continue}if(A.EXP.test(g)){P=ct;continue}A.SIGN.test(g)&&B.length===1&&A.SIGN.test(B[0])&&ht(g,k,q)}if(P===X){if(A.DIGIT.test(g)){B+=g;continue}if(A.EXP.test(g)){P=ct;continue}A.POINT.test(g)&&B[B.length-1]==="."&&ht(g,k,q)}if(P===ct){if(A.DIGIT.test(g)){Y+=g;continue}if(A.SIGN.test(g)){if(Y===""){Y+=g;continue}Y.length===1&&A.SIGN.test(Y)&&ht(g,k,q)}}A.WHITESPACE.test(g)?(F(),P=K,tt=!1):A.COMMA.test(g)?(F(),P=K,tt=!0):A.SIGN.test(g)?(F(),P=lt,B=g):A.POINT.test(g)?(F(),P=X,B=g):ht(g,k,q)}return F(),q}const d=["mm","cm","in","pt","pc","px"],y={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x(N){let I="px";if(typeof N=="string"||N instanceof String)for(let A=0,K=d.length;A<K;A++){const lt=d[A];if(N.endsWith(lt)){I=lt,N=N.substring(0,N.length-lt.length);break}}let R;return I==="px"&&e.defaultUnit!=="px"?R=y.in[e.defaultUnit]/e.defaultDPI:(R=y[I][e.defaultUnit],R<0&&(R=y[I].in*e.defaultDPI)),R*parseFloat(N)}function S(N){if(!(N.hasAttribute("transform")||N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))))return null;const I=L(N);return O.length>0&&I.premultiply(O[O.length-1]),pt.copy(I),O.push(I),I}function L(N){const I=new zt,R=j;if(N.nodeName==="use"&&(N.hasAttribute("x")||N.hasAttribute("y"))){const A=x(N.getAttribute("x")),K=x(N.getAttribute("y"));I.translate(A,K)}if(N.hasAttribute("transform")){const A=N.getAttribute("transform").split(")");for(let K=A.length-1;K>=0;K--){const lt=A[K].trim();if(lt==="")continue;const X=lt.indexOf("("),ct=lt.length;if(X>0&&X<ct){const P=lt.slice(0,X),tt=p(lt.slice(X+1));switch(R.identity(),P){case"translate":if(tt.length>=1){const B=tt[0];let Y=0;tt.length>=2&&(Y=tt[1]),R.translate(B,Y)}break;case"rotate":if(tt.length>=1){let B=0,Y=0,q=0;B=tt[0]*Math.PI/180,tt.length>=3&&(Y=tt[1],q=tt[2]),Z.makeTranslation(-Y,-q),J.makeRotation(B),H.multiplyMatrices(J,Z),Z.makeTranslation(Y,q),R.multiplyMatrices(Z,H)}break;case"scale":if(tt.length>=1){const B=tt[0];let Y=B;tt.length>=2&&(Y=tt[1]),R.scale(B,Y)}break;case"skewX":tt.length===1&&R.set(1,Math.tan(tt[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":tt.length===1&&R.set(1,0,0,Math.tan(tt[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":tt.length===6&&R.set(tt[0],tt[2],tt[4],tt[1],tt[3],tt[5],0,0,1);break}}I.premultiply(R)}}return I}function T(N,I){function R(X){at.set(X.x,X.y,1).applyMatrix3(I),X.set(at.x,at.y)}function A(X){const ct=X.xRadius,P=X.yRadius,tt=Math.cos(X.aRotation),B=Math.sin(X.aRotation),Y=new D(ct*tt,ct*B,0),q=new D(-P*B,P*tt,0),ht=Y.applyMatrix3(I),F=q.applyMatrix3(I),g=j.set(ht.x,F.x,0,ht.y,F.y,0,0,0,1),M=Z.copy(g).invert(),mt=J.copy(M).transpose().multiply(M).elements,ot=V(mt[0],mt[1],mt[4]),Tt=Math.sqrt(ot.rt1),vt=Math.sqrt(ot.rt2);if(X.xRadius=1/Tt,X.yRadius=1/vt,X.aRotation=Math.atan2(ot.sn,ot.cs),!((X.aEndAngle-X.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Lt=Z.set(Tt,0,0,0,vt,0,0,0,1),Ft=J.set(ot.cs,ot.sn,0,-ot.sn,ot.cs,0,0,0,1),gt=Lt.multiply(Ft).multiply(g),jt=Ht=>{const{x:Ot,y:It}=new D(Math.cos(Ht),Math.sin(Ht),0).applyMatrix3(gt);return Math.atan2(It,Ot)};X.aStartAngle=jt(X.aStartAngle),X.aEndAngle=jt(X.aEndAngle),w(I)&&(X.aClockwise=!X.aClockwise)}}function K(X){const ct=E(I),P=b(I);X.xRadius*=ct,X.yRadius*=P;const tt=ct>Number.EPSILON?Math.atan2(I.elements[1],I.elements[0]):Math.atan2(-I.elements[3],I.elements[4]);X.aRotation+=tt,w(I)&&(X.aStartAngle*=-1,X.aEndAngle*=-1,X.aClockwise=!X.aClockwise)}const lt=N.subPaths;for(let X=0,ct=lt.length;X<ct;X++){const tt=lt[X].curves;for(let B=0;B<tt.length;B++){const Y=tt[B];Y.isLineCurve?(R(Y.v1),R(Y.v2)):Y.isCubicBezierCurve?(R(Y.v0),R(Y.v1),R(Y.v2),R(Y.v3)):Y.isQuadraticBezierCurve?(R(Y.v0),R(Y.v1),R(Y.v2)):Y.isEllipseCurve&&(st.set(Y.aX,Y.aY),R(st),Y.aX=st.x,Y.aY=st.y,U(I)?A(Y):K(Y))}}}function w(N){const I=N.elements;return I[0]*I[4]-I[1]*I[3]<0}function U(N){const I=N.elements,R=I[0]*I[3]+I[1]*I[4];if(R===0)return!1;const A=E(N),K=b(N);return Math.abs(R/(A*K))>Number.EPSILON}function E(N){const I=N.elements;return Math.sqrt(I[0]*I[0]+I[1]*I[1])}function b(N){const I=N.elements;return Math.sqrt(I[3]*I[3]+I[4]*I[4])}function V(N,I,R){let A,K,lt,X,ct;const P=N+R,tt=N-R,B=Math.sqrt(tt*tt+4*I*I);return P>0?(A=.5*(P+B),ct=1/A,K=N*ct*R-I*ct*I):P<0?K=.5*(P-B):(A=.5*B,K=-.5*B),tt>0?lt=tt+B:lt=tt-B,Math.abs(lt)>2*Math.abs(I)?(ct=-2*I/lt,X=1/Math.sqrt(1+ct*ct),lt=ct*X):Math.abs(I)===0?(lt=1,X=0):(ct=-.5*lt/I,lt=1/Math.sqrt(1+ct*ct),X=ct*lt),tt>0&&(ct=lt,lt=-X,X=ct),{rt1:A,rt2:K,cs:lt,sn:X}}const W=[],ut={},O=[],j=new zt,Z=new zt,J=new zt,H=new zt,st=new dt,at=new D,pt=new zt,xt=new DOMParser().parseFromString(t,"image/svg+xml");return i(xt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:W,xml:xt.documentElement}}static createShapes(t){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:i.ORIGIN,t:0};function r(v,p,d,y){const x=v.x,S=p.x,L=d.x,T=y.x,w=v.y,U=p.y,E=d.y,b=y.y,V=(T-L)*(w-E)-(b-E)*(x-L),W=(S-x)*(w-E)-(U-w)*(x-L),ut=(b-E)*(S-x)-(T-L)*(U-w),O=V/ut,j=W/ut;if(ut===0&&V!==0||O<=0||O>=1||j<0||j>1)return null;if(V===0&&ut===0){for(let Z=0;Z<2;Z++)if(o(Z===0?d:y,v,p),s.loc==i.ORIGIN){const J=Z===0?d:y;return{x:J.x,y:J.y,t:s.t}}else if(s.loc==i.BETWEEN){const J=+(x+s.t*(S-x)).toPrecision(10),H=+(w+s.t*(U-w)).toPrecision(10);return{x:J,y:H,t:s.t}}return null}else{for(let H=0;H<2;H++)if(o(H===0?d:y,v,p),s.loc==i.ORIGIN){const st=H===0?d:y;return{x:st.x,y:st.y,t:s.t}}const Z=+(x+O*(S-x)).toPrecision(10),J=+(w+O*(U-w)).toPrecision(10);return{x:Z,y:J,t:O}}}function o(v,p,d){const y=d.x-p.x,x=d.y-p.y,S=v.x-p.x,L=v.y-p.y,T=y*L-S*x;if(v.x===p.x&&v.y===p.y){s.loc=i.ORIGIN,s.t=0;return}if(v.x===d.x&&v.y===d.y){s.loc=i.DESTINATION,s.t=1;return}if(T<-Number.EPSILON){s.loc=i.LEFT;return}if(T>Number.EPSILON){s.loc=i.RIGHT;return}if(y*S<0||x*L<0){s.loc=i.BEHIND;return}if(Math.sqrt(y*y+x*x)<Math.sqrt(S*S+L*L)){s.loc=i.BEYOND;return}let w;y!==0?w=S/y:w=L/x,s.loc=i.BETWEEN,s.t=w}function a(v,p){const d=[],y=[];for(let x=1;x<v.length;x++){const S=v[x-1],L=v[x];for(let T=1;T<p.length;T++){const w=p[T-1],U=p[T],E=r(S,L,w,U);E!==null&&d.find(b=>b.t<=E.t+Number.EPSILON&&b.t>=E.t-Number.EPSILON)===void 0&&(d.push(E),y.push(new dt(E.x,E.y)))}}return y}function l(v,p,d){const y=new dt;p.getCenter(y);const x=[];return d.forEach(S=>{S.boundingBox.containsPoint(y)&&a(v,S.points).forEach(T=>{x.push({identifier:S.identifier,isCW:S.isCW,point:T})})}),x.sort((S,L)=>S.point.x-L.point.x),x}function c(v,p,d,y,x){(x==null||x==="")&&(x="nonzero");const S=new dt;v.boundingBox.getCenter(S);const L=[new dt(d,S.y),new dt(y,S.y)],T=l(L,v.boundingBox,p);T.sort((W,ut)=>W.point.x-ut.point.x);const w=[],U=[];T.forEach(W=>{W.identifier===v.identifier?w.push(W):U.push(W)});const E=w[0].point.x,b=[];let V=0;for(;V<U.length&&U[V].point.x<E;)b.length>0&&b[b.length-1]===U[V].identifier?b.pop():b.push(U[V].identifier),V++;if(b.push(v.identifier),x==="evenodd"){const W=b.length%2===0,ut=b[b.length-2];return{identifier:v.identifier,isHole:W,for:ut}}else if(x==="nonzero"){let W=!0,ut=null,O=null;for(let j=0;j<b.length;j++){const Z=b[j];W?(O=p[Z].isCW,W=!1,ut=Z):O!==p[Z].isCW&&(O=p[Z].isCW,W=!0)}return{identifier:v.identifier,isHole:W,for:ut}}else console.warn('fill-rule: "'+x+'" is currently not implemented.')}let u=999999999,h=-999999999,f=t.subPaths.map(v=>{const p=v.getPoints();let d=-999999999,y=999999999,x=-999999999,S=999999999;for(let L=0;L<p.length;L++){const T=p[L];T.y>d&&(d=T.y),T.y<y&&(y=T.y),T.x>x&&(x=T.x),T.x<S&&(S=T.x)}return h<=x&&(h=x+1),u>=S&&(u=S-1),{curves:v.curves,points:p,isCW:Mn.isClockWise(p),identifier:-1,boundingBox:new Rx(new dt(S,y),new dt(x,d))}});f=f.filter(v=>v.points.length>1);for(let v=0;v<f.length;v++)f[v].identifier=v;const m=f.map(v=>c(v,f,u,h,t.userData?t.userData.style.fillRule:void 0)),_=[];return f.forEach(v=>{if(!m[v.identifier].isHole){const d=new yi;d.curves=v.curves,m.filter(x=>x.isHole&&x.for===v.identifier).forEach(x=>{const S=f[x.identifier],L=new ns;L.curves=S.curves,d.holes.push(L)}),_.push(d)}}),_}static getStrokeStyle(t,e,i,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",i=i!==void 0?i:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:i,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,i,s){const r=[],o=[],a=[];if(Xr.pointsToStrokeWithBuffers(t,e,i,s,r,o,a)===0)return null;const l=new _e;return l.setAttribute("position",new Zt(r,3)),l.setAttribute("normal",new Zt(o,3)),l.setAttribute("uv",new Zt(a,2)),l}static pointsToStrokeWithBuffers(t,e,i,s,r,o,a,l){const c=new dt,u=new dt,h=new dt,f=new dt,m=new dt,_=new dt,v=new dt,p=new dt,d=new dt,y=new dt,x=new dt,S=new dt,L=new dt,T=new dt,w=new dt,U=new dt,E=new dt;i=i!==void 0?i:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,t=tt(t);const b=t.length;if(b<2)return 0;const V=t[0].equals(t[b-1]);let W,ut=t[0],O;const j=e.strokeWidth/2,Z=1/(b-1);let J=0,H,st,at,pt,xt=!1,rt=0,N=l*3,I=l*2;R(t[0],t[1],c).multiplyScalar(j),p.copy(t[0]).sub(c),d.copy(t[0]).add(c),y.copy(p),x.copy(d);for(let B=1;B<b;B++){W=t[B],B===b-1?V?O=t[1]:O=void 0:O=t[B+1];const Y=c;if(R(ut,W,Y),h.copy(Y).multiplyScalar(j),S.copy(W).sub(h),L.copy(W).add(h),H=J+Z,st=!1,O!==void 0){R(W,O,u),h.copy(u).multiplyScalar(j),T.copy(W).sub(h),w.copy(W).add(h),at=!0,h.subVectors(O,ut),Y.dot(h)<0&&(at=!1),B===1&&(xt=at),h.subVectors(O,W),h.normalize();const q=Math.abs(Y.dot(h));if(q>Number.EPSILON){const ht=j/q;h.multiplyScalar(-ht),f.subVectors(W,ut),m.copy(f).setLength(ht).add(h),U.copy(m).negate();const F=m.length(),g=f.length();f.divideScalar(g),_.subVectors(O,W);const M=_.length();switch(_.divideScalar(M),f.dot(U)<g&&_.dot(U)<M&&(st=!0),E.copy(m).add(W),U.add(W),pt=!1,st?at?(w.copy(U),L.copy(U)):(T.copy(U),S.copy(U)):lt(),e.strokeLineJoin){case"bevel":X(at,st,H);break;case"round":ct(at,st),at?K(W,S,T,H,0):K(W,w,L,H,1);break;case"miter":case"miter-clip":default:const k=j*e.strokeMiterLimit/F;if(k<1)if(e.strokeLineJoin!=="miter-clip"){X(at,st,H);break}else ct(at,st),at?(_.subVectors(E,S).multiplyScalar(k).add(S),v.subVectors(E,T).multiplyScalar(k).add(T),A(S,H,0),A(_,H,0),A(W,H,.5),A(W,H,.5),A(_,H,0),A(v,H,0),A(W,H,.5),A(v,H,0),A(T,H,0)):(_.subVectors(E,L).multiplyScalar(k).add(L),v.subVectors(E,w).multiplyScalar(k).add(w),A(L,H,1),A(_,H,1),A(W,H,.5),A(W,H,.5),A(_,H,1),A(v,H,1),A(W,H,.5),A(v,H,1),A(w,H,1));else st?(at?(A(d,J,1),A(p,J,0),A(E,H,0),A(d,J,1),A(E,H,0),A(U,H,1)):(A(d,J,1),A(p,J,0),A(E,H,1),A(p,J,0),A(U,H,0),A(E,H,1)),at?T.copy(E):w.copy(E)):at?(A(S,H,0),A(E,H,0),A(W,H,.5),A(W,H,.5),A(E,H,0),A(T,H,0)):(A(L,H,1),A(E,H,1),A(W,H,.5),A(W,H,.5),A(E,H,1),A(w,H,1)),pt=!0;break}}else lt()}else lt();!V&&B===b-1&&P(t[0],y,x,at,!0,J),J=H,ut=W,p.copy(T),d.copy(w)}if(!V)P(W,S,L,at,!1,H);else if(st&&r){let B=E,Y=U;xt!==at&&(B=U,Y=E),at?(pt||xt)&&(Y.toArray(r,0*3),Y.toArray(r,3*3),pt&&B.toArray(r,1*3)):(pt||!xt)&&(Y.toArray(r,1*3),Y.toArray(r,3*3),pt&&B.toArray(r,0*3))}return rt;function R(B,Y,q){return q.subVectors(Y,B),q.set(-q.y,q.x).normalize()}function A(B,Y,q){r&&(r[N]=B.x,r[N+1]=B.y,r[N+2]=0,o&&(o[N]=0,o[N+1]=0,o[N+2]=1),N+=3,a&&(a[I]=Y,a[I+1]=q,I+=2)),rt+=3}function K(B,Y,q,ht,F){c.copy(Y).sub(B).normalize(),u.copy(q).sub(B).normalize();let g=Math.PI;const M=c.dot(u);Math.abs(M)<1&&(g=Math.abs(Math.acos(M))),g/=i,h.copy(Y);for(let k=0,ft=i-1;k<ft;k++)f.copy(h).rotateAround(B,g),A(h,ht,F),A(f,ht,F),A(B,ht,.5),h.copy(f);A(f,ht,F),A(q,ht,F),A(B,ht,.5)}function lt(){A(d,J,1),A(p,J,0),A(S,H,0),A(d,J,1),A(S,H,1),A(L,H,0)}function X(B,Y,q){Y?B?(A(d,J,1),A(p,J,0),A(S,H,0),A(d,J,1),A(S,H,0),A(U,H,1),A(S,q,0),A(T,q,0),A(U,q,.5)):(A(d,J,1),A(p,J,0),A(L,H,1),A(p,J,0),A(U,H,0),A(L,H,1),A(L,q,1),A(U,q,0),A(w,q,1)):B?(A(S,q,0),A(T,q,0),A(W,q,.5)):(A(L,q,1),A(w,q,0),A(W,q,.5))}function ct(B,Y){Y&&(B?(A(d,J,1),A(p,J,0),A(S,H,0),A(d,J,1),A(S,H,0),A(U,H,1),A(S,J,0),A(W,H,.5),A(U,H,1),A(W,H,.5),A(T,J,0),A(U,H,1)):(A(d,J,1),A(p,J,0),A(L,H,1),A(p,J,0),A(U,H,0),A(L,H,1),A(L,J,1),A(U,H,0),A(W,H,.5),A(W,H,.5),A(U,H,0),A(w,J,1)))}function P(B,Y,q,ht,F,g){switch(e.strokeLineCap){case"round":F?K(B,q,Y,g,.5):K(B,Y,q,g,.5);break;case"square":if(F)c.subVectors(Y,B),u.set(c.y,-c.x),h.addVectors(c,u).add(B),f.subVectors(u,c).add(B),ht?(h.toArray(r,1*3),f.toArray(r,0*3),f.toArray(r,3*3)):(h.toArray(r,1*3),h.toArray(r,3*3),f.toArray(r,0*3));else{c.subVectors(q,B),u.set(c.y,-c.x),h.addVectors(c,u).add(B),f.subVectors(u,c).add(B);const M=r.length;ht?(h.toArray(r,M-1*3),f.toArray(r,M-2*3),f.toArray(r,M-4*3)):(f.toArray(r,M-2*3),h.toArray(r,M-1*3),f.toArray(r,M-4*3))}break}}function tt(B){let Y=!1;for(let ht=1,F=B.length-1;ht<F;ht++)if(B[ht].distanceTo(B[ht+1])<s){Y=!0;break}if(!Y)return B;const q=[];q.push(B[0]);for(let ht=1,F=B.length-1;ht<F;ht++)B[ht].distanceTo(B[ht+1])>=s&&q.push(B[ht]);return q.push(B[B.length-1]),q}}}const bv=document.getElementById("pts"),Tv=document.getElementById("lnd"),Av=document.getElementById("alt"),wv=document.getElementById("spd"),Cv=document.getElementById("hdg"),Rv=document.getElementById("lift-row"),_o=document.getElementById("landing-toast"),Pv=document.getElementById("controls-hint"),qa=document.getElementById("boost-grey-fill"),Ya=document.getElementById("boost-oneshot-tile"),Xc=document.getElementById("test-mode-border"),Er=document.getElementById("poi-toast"),Ls=document.getElementById("poi-label"),qc=document.getElementById("tp-island"),Lv={peak:document.querySelector('[data-tp="peak-count"]'),city:document.querySelector('[data-tp="city-count"]'),landscape:document.querySelector('[data-tp="landscape-count"]'),beach:document.querySelector('[data-tp="beach-count"]')},Yc=document.getElementById("tp-tier-current"),jc=document.getElementById("tp-tier-progress"),$c=document.getElementById("tp-gofios-total");let Zc="";const Kc=["No Booster","Booster Level 1","Booster Level 2","Booster Level 3","Booster Level MAX"],Jc=["","Booster Level 1 freigeschalten","Booster Level 2 freigeschalten — La Gomera in Reichweite","Booster Level 3 freigeschalten — Gran Canaria in Reichweite","Booster Level MAX freigeschalten — Fuerteventura / Lanzarote"];let br=null,qr=null,Qc=-1,ja=null,tu=null;const Iv="↑ ↓ Pitch · ← → Bank · Space Brake",Dv="↓ / S to launch",Nv="Takeoff roll…";let eu=null;const $a=new D;function Es(n,t){return Math.max(0,Math.round(n)).toString().padStart(t,"0")}function Uv(n){_o.innerHTML=`Geschafft! · ${n.id}<span class="bonus">+ ${Mi.landingBonus} pts</span>`,_o.classList.add("show")}function Eh(){_o.classList.remove("show")}function nu(n,t,e,i){if(!Er)return;const s=e>0?`+ ${t} P · + ${e} G`:`+ ${t} P`,r=i&&Jc[i]?`<span class="tier-up">${Jc[i]}</span>`:"";Er.innerHTML=`${n}<span class="reward">${s}</span>${r}`,Er.classList.add("show"),br&&clearTimeout(br),br=setTimeout(()=>{Er.classList.remove("show"),br=null},oe.activationToast.duration*1e3)}function Fv(n){Ls&&n!==qr&&(Ls.textContent=n,Ls.classList.add("show"),qr=n)}function Ov(){Ls&&qr!==null&&(Ls.classList.remove("show"),qr=null)}function Bv(){const n=ls(_t.position.x,_t.position.z);bv.textContent=Es(St.punkte,5),Tv.textContent=Es(St.landings,2),Av.textContent=Es(_t.position.y-Math.max(n,Jt.waterLevel),3),wv.textContent=Es(G.speed,3),$a.set(0,0,-1).applyQuaternion(_t.quaternion);const t=(Math.atan2($a.x,-$a.z)*180/Math.PI+360)%360;Cv.textContent=Es(t,3),Rv.style.opacity=G.inThermal?"0.85":"0";const e=G.flightState===ne.INTRO?"":G.flightState===ne.PRELAUNCH?Dv:G.flightState===ne.TAKEOFF_ROLL?Nv:Iv;e!==eu&&(Pv.textContent=e,eu=e),zv(),kv(),Gv()}function zv(){if(qa&&(qa.style.width=(G.boostFuelGrey*100).toFixed(1)+"%",qa.style.opacity=G.greyActive?"1":"0.7"),!Ya)return;const n=Si(),t=Re.oneShot.tiers[n]||Re.oneShot.tiers[0],e=n>0&&G.boostFuelOneshot>.001;n!==Qc&&(Ya.style.background="#"+t.color.toString(16).padStart(6,"0"),Qc=n,ja=null),e!==ja&&(Ya.classList.toggle("spent",!e),ja=e)}function kv(){Xc&&St.testMode!==tu&&(Xc.classList.toggle("visible",!!St.testMode),tu=St.testMode)}function Gv(){const n=St.currentIsland,t=Kh[n]||[],e={peak:0,city:0,landscape:0,beach:0},i={peak:0,city:0,landscape:0,beach:0};for(const u of t)e[u.type]++,St.exploredPOIs[u.id]&&i[u.type]++;const s=St.gofiosByIsland[n]|0,r=Si(n),o=oe.tierThresholds,a=r+1<o.length?r+1:null,l=a!==null?Math.max(0,o[a]-s):0,c=`${n}|${r}|${s}|${i.peak}/${e.peak}|${i.city}/${e.city}|${i.landscape}/${e.landscape}|${i.beach}/${e.beach}`;if(c!==Zc){Zc=c,qc&&(qc.textContent=n.charAt(0).toUpperCase()+n.slice(1));for(const u of["peak","city","landscape","beach"]){const h=Lv[u];h&&(h.textContent=`${i[u]}/${e[u]}`)}Yc&&(Yc.textContent=Kc[r]||`Level ${r}`),$c&&($c.textContent=`${s} G`),jc&&(jc.textContent=a!==null?`→ ${Kc[a]} in ${l} G`:"— max erreicht")}}const Hv={[Q.PEAK]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-390Zm-132-53 55 37 77-39 77 39 53-35-40-79H386l-38 77ZM209-160h541L646-369l-83 55-83-41-83 41-85-56-103 210ZM80-80l234-475q10-20 29.5-32.5T386-600h54v-280h280l-40 80 40 80H520v120h50q23 0 42 12t30 32L880-80H80Z"/></svg>',[Q.CITY]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>',[Q.LANDSCAPE]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m40-240 240-320 180 240h300L560-586 460-454l-50-66 150-200 360 480H40Zm521-80Zm-361 0h160l-80-107-80 107Zm0 0h160-160Z"/></svg>',[Q.BEACH]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 530-374l56-56 254 254-56 56Zm-546-28q-60-60-89-135t-29-153q0-78 29-152t89-134q60-60 134.5-89.5T525-841q78 0 152.5 29.5T812-722L238-148Zm8-122 54-54q-16-21-30.5-43T243-411q-12-22-21-44t-16-43q-11 59-1.5 118T246-270Zm112-110 222-224q-43-33-86.5-53.5t-81.5-28q-38-7.5-68.5-2.5T296-666q-17 18-22 48.5t2.5 69q7.5 38.5 28 81.5t53.5 87Zm278-280 56-54q-53-32-112-42t-118 2q22 7 44 16t44 20.5q22 11.5 43.5 26T636-660Z"/></svg>'},bh=[];function Vv(){return new Oo(oe.ring.majorRadius,oe.ring.tubeRadius,10,48)}const Th={};function Wv(){const n=new Xr,t=oe.symbol.size/960,e=oe.symbol.extrudeDepth/t;for(const[i,s]of Object.entries(Hv)){const r=n.parse(s),o=[];for(const l of r.paths)o.push(...Xr.createShapes(l));const a=new Uo(o,{depth:e,bevelEnabled:!1});a.scale(1,-1,1),a.center(),a.scale(t,t,t),Th[i]=a}}function Xv(){Wv();const n=Vv(),t=new me;for(const e of gi){const i=oe.colorsByType[e.type],s=new ei({color:i.ring,transparent:!0,opacity:oe.ring.opacity,depthWrite:!1}),r=new ee(n,s),o=new ge({color:i.symbol,transparent:!0,opacity:.95,flatShading:!0,side:Ve}),a=new ee(Th[e.type],o),l=new me;l.add(r),l.add(a);const c=ls(e.x,e.z);l.position.set(e.x,c+oe.ring.hoverHeight,e.z),t.add(l),bh.push({poi:e,ring:r,ringMat:s,symbol:a,symbolMat:o,poiGroup:l,wasInsideZone:!1,frozen:!1})}return t}function qv(n,t){const e=t.x-n.x,i=t.y-n.y,s=t.z-n.z;return e*e+i*i+s*s<=oe.activation.radius*oe.activation.radius}function Yv(n){const t=St.gofiosByIsland[n]|0,e=oe.tierThresholds;let i=0;for(let r=e.length-1;r>=0;r--)if(t>=e[r]){i=r;break}const s=St.oneShotTierByIsland[n]|0;return i>s?(St.oneShotTierByIsland[n]=i,i):0}function jv(n){const t=oe.rewardsByType[n.type];if(St.testMode){nu(n.name,t.punkte,t.gofios,0);return}const e=!!St.exploredPOIs[n.id];$r(t.punkte);let i=0,s=0;e||(St.exploredPOIs[n.id]=!0,St.gofiosByIsland[n.island]=(St.gofiosByIsland[n.island]|0)+t.gofios,i=t.gofios,s=Yv(n.island)),nu(n.name,t.punkte,i,s),ii()}function $v(n){const t=!St.testMode&&!!St.exploredPOIs[n.poi.id];if(t)n.ringMat.opacity=oe.ring.opacityActivated,n.ringMat.color.setHex(oe.ring.colorActivated),n.symbolMat.opacity=.55,n.symbolMat.color.setHex(oe.symbol.colorActivated);else{const e=oe.colorsByType[n.poi.type];n.ringMat.opacity=oe.ring.opacity,n.ringMat.color.setHex(e.ring),n.symbolMat.opacity=.95,n.symbolMat.color.setHex(e.symbol)}n.frozen=t}function Zv(n,t){const e=t.position,i=$h(e);i!==St.currentIsland&&(St.currentIsland=i,ii());let s=null,r=oe.hoverLabelRadius*oe.hoverLabelRadius;for(const o of bh){$v(o);const a=e.x-o.poiGroup.position.x,l=e.z-o.poiGroup.position.z;o.poiGroup.rotation.y=Math.atan2(a,l),o.frozen||(o.symbol.rotation.y+=oe.symbol.rotRate*n);const c=qv(o.poiGroup.position,e);if(c&&!o.wasInsideZone&&jv(o.poi),o.wasInsideZone=c,St.exploredPOIs[o.poi.id]){const u=e.x-o.poi.x,h=e.z-o.poi.z,f=u*u+h*h;f<r&&(r=f,s=o.poi)}}s?Fv(s.name):Ov()}const Ah=document.getElementById("island-compass"),iu=Ah?.querySelector(".compass-track"),su=Math.PI/2,Kv=12,wh=new Map,Za=new D;function Jv(){if(iu)for(const n of Qn){const t=document.createElement("div");t.className="compass-marker"+(n.playable?"":" unreachable"),t.dataset.island=n.id,t.innerHTML=`
      <span class="compass-name">${n.name}</span>
      <span class="compass-dist"></span>
    `,iu.appendChild(t),wh.set(n.id,{el:t,dist:t.querySelector(".compass-dist"),lastLeft:null,lastDist:null,lastHidden:null})}}function Qv(n){return Za.set(0,0,-1).applyQuaternion(n.quaternion),Math.atan2(Za.x,-Za.z)}function ty(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const ji=[];function ey(n){if(!Ah)return;const t=Qv(n),e=Jt.heightmap.metersPerUnit;ji.length=0;for(const s of Qn){const r=wh.get(s.id);if(!r)continue;const o=s.x-n.position.x,a=s.z-n.position.z,c=Math.sqrt(o*o+a*a)*e/1e3,u=Math.atan2(o,-a),h=ty(u-t);if(Math.abs(h)>su||c<.5){ji.push({m:r,distKm:c,pct:0,show:!1});continue}const f=(h/su*.5+.5)*100;ji.push({m:r,distKm:c,pct:f,show:!0})}ji.sort((s,r)=>s.distKm-r.distKm);const i=[];for(const s of ji){if(!s.show)continue;let r=!1;for(const o of i)if(Math.abs(o-s.pct)<Kv){r=!0;break}if(r){s.show=!1;continue}i.push(s.pct)}for(const s of ji){const r=s.m,o=!s.show;if(o!==r.lastHidden&&(r.el.classList.toggle("hidden",o),r.lastHidden=o),o)continue;const a=s.pct.toFixed(1)+"%";a!==r.lastLeft&&(r.el.style.left=a,r.lastLeft=a);const l=s.distKm<10?s.distKm.toFixed(1)+" km":Math.round(s.distKm)+" km";l!==r.lastDist&&(r.dist.textContent=l,r.lastDist=l)}}const Ch=[];(function(){for(const t of[-.95,.95]){const e=new Float32Array(Vn.verts*3),i=new Float32Array(Vn.verts*3);for(let a=0;a<Vn.verts;a++){const l=a/(Vn.verts-1);e[a*3]=t,e[a*3+1]=-.05,e[a*3+2]=.42+l*Vn.maxLen;const c=1-l;i[a*3]=c,i[a*3+1]=c,i[a*3+2]=c}const s=new _e;s.setAttribute("position",new Pe(e,3)),s.setAttribute("color",new Pe(i,3));const r=new ta({vertexColors:!0,transparent:!0,opacity:0,blending:Ur,depthWrite:!1}),o=new nh(s,r);_t.add(o),Ch.push(o)}})();function ny(){const n=fe.stallSpeed+3,t=fe.maxSpeed*.7,e=Fs.clamp((G.speed-n)/(t-n),0,1),i=Vn.maxLen*(.3+e*.7);for(const s of Ch){const r=s.geometry.attributes.position.array;for(let o=0;o<Vn.verts;o++){const a=o/(Vn.verts-1);r[o*3+2]=.42+a*i}s.geometry.attributes.position.needsUpdate=!0,s.material.opacity=e*.95}}const ru=new me,zo=[];(function(){const i=Math.atan2(.28,.95),s=new ge({color:Kt.paper,side:Ve,flatShading:!0}),r=new ta({color:Kt.ink,transparent:!0,opacity:.32});for(const o of[-.45,.45]){const a=new me;a.position.set(o,.045,.05),a.rotation.z=o<0?i:-i;const l=new Pi(.32,.22);l.translate(0,-.22/2,0),l.rotateX(-Math.PI/2);const c=new ee(l,s),u=new lh(l);c.add(new ih(u,r)),a.add(c),ru.add(a),zo.push(c)}_t.add(ru)})();function iy(n){const t=pe.brake&&G.alive&&G.flightState===ne.FLYING?1:0,e=1-Math.exp(-n/Ja.deployTau);G.brakeAmount+=(t-G.brakeAmount)*e;const i=-G.brakeAmount*Ja.maxAngle;for(const s of zo)s.rotation.x=i}function sy(){G.brakeAmount=0;for(const n of zo)n.rotation.x=0}const yn=new me;(function(){const t=new ge({color:Kt.ink,flatShading:!0});function e(i,s,r,o){const a=new me,l=new Un(.018,.018,r,6);l.translate(0,-r/2,0),a.add(new ee(l,t));const c=new Un(o,o,.04,12);return c.rotateZ(Math.PI/2),c.translate(0,-r,0),a.add(new ee(c,t)),a.position.set(i,-.05,s),a}yn.add(e(0,-.55,.11,.055)),yn.add(e(-.42,.12,.12,.06)),yn.add(e(.42,.12,.12,.06)),yn.scale.setScalar(.001),yn.visible=!1,_t.add(yn)})();function ry(n){const t=Ox(_t.position,ca.triggerDist,ca.triggerHeight)?1:0,e=1-Math.exp(-n/ca.deployTau);G.gearAmount+=(t-G.gearAmount)*e;const i=Math.max(.001,G.gearAmount);yn.scale.setScalar(i),yn.visible=G.gearAmount>.02}function ay(){G.gearAmount=1,yn.scale.setScalar(1),yn.visible=!0}const au=new me,ko=[],ou=new Rt;let bs=0;(function(){const t=Re.exhaust;for(const e of[-.3,t.offsetX]){const i=new Un(t.radiusNarrow,t.radiusWide,1,12,1,!0);i.rotateX(-Math.PI/2),i.translate(0,0,.5);const s=new ei({color:16777215,transparent:!0,opacity:0,blending:Ur,depthWrite:!1,side:Ve}),r=new ee(i,s);r.position.set(e,t.offsetY,t.offsetZ),r.scale.z=0,au.add(r),ko.push(r)}_t.add(au)})();function oy(){return G.oneShotActive?(Re.oneShot.tiers[Si()]||Re.oneShot.tiers[0]).color:G.greyActive?Re.grey.color:null}function ly(n){const t=Re.exhaust,e=G.oneShotActive||G.greyActive?1:0,i=1-Math.exp(-n/Math.max(t.intensityTau,1e-4));bs+=(e-bs)*i;const s=oy();s!==null&&ou.setHex(s);for(const r of ko)r.scale.z=t.length*bs,r.material.opacity=.85*bs,s!==null&&r.material.color.copy(ou)}function cy(){bs=0;for(const n of ko)n.scale.z=0,n.material.opacity=0}const uy=.9,Rh=.55,hy=35,dy=1.6,Ph=new Do(uy,28);Ph.rotateX(-Math.PI/2);const Lh=new ei({color:0,transparent:!0,opacity:Rh,depthWrite:!1}),mi=new ee(Ph,Lh);mi.renderOrder=1;function fy(){const n=ls(_t.position.x,_t.position.z),t=Math.max(n,Jt.waterLevel),e=Math.max(0,_t.position.y-t);mi.position.x=_t.position.x,mi.position.z=_t.position.z,mi.position.y=t+.04;const i=Math.min(1,e/hy),s=Math.min(1,e/dy);Lh.opacity=Rh*s*(1-.85*i);const r=1+i*.4;mi.scale.set(r,1,r),mi.visible=_t.position.y>t-.5}const ln=new D(0,0,-1),lu=new D,cu=new D,ke=new D,fn=new D,cs=new D,uu=new D;function Ih(){switch(G.flightState){case ne.PRELAUNCH:case ne.LANDED:return 0;case ne.TAKEOFF_ROLL:case ne.LANDING_ROLL:return Fs.clamp(G.speed/Wn.takeoffSpeed,0,1);default:return 1}}function Is(n,t,e){return n+(t-n)*e}let Ka=0;function Tr(n,t){return 1-Math.exp(-t/Math.max(n,1e-4))}function py(n){const t=1-n;return 1-t*t*t}function my(n){return fn.set(0,0,-1).applyQuaternion(_t.quaternion),ke.set(fn.x,0,fn.z),ke.lengthSq()<1e-4&&ke.set(0,0,-1),ke.normalize(),cs.set(0,He.height,0),n.copy(_t.position).addScaledVector(ke,-6.5).add(cs)}function gy(n){if(G.flightState===ne.INTRO&&G.introStartCamPos){const u=py(Math.min(1,G.introT));my(uu),vn.position.lerpVectors(G.introStartCamPos,uu,u),vn.up.set(0,1,0),vn.lookAt(_t.position);return}fn.set(0,0,-1).applyQuaternion(_t.quaternion);const t=Tr(He.yawTau,n),e=Tr(He.pitchTau,n);ln.x+=(fn.x-ln.x)*t,ln.z+=(fn.z-ln.z)*t,ln.y+=(fn.y-ln.y)*e,ln.normalize(),ke.set(ln.x,0,ln.z),ke.lengthSq()<1e-4&&ke.set(0,0,-1),ke.normalize();const i=G.greyActive||G.oneShotActive?1:0,s=Tr(Re.camPushbackTau,n);Ka+=(i-Ka)*s;const r=Ih(),o=Is(He.runwayDistance,He.distance,r),a=Is(He.runwayHeight,He.height,r),l=Is(He.runwayLookAhead,He.lookAhead,r);cs.set(0,a,0),lu.copy(_t.position).addScaledVector(ke,-(o+Re.camPushback*Ka)).add(cs);const c=Tr(He.posTau,n);vn.position.lerp(lu,c),cu.copy(_t.position).addScaledVector(ln,l),vn.up.set(0,1,0),vn.lookAt(cu)}function Go(){fn.set(0,0,-1).applyQuaternion(_t.quaternion),ln.copy(fn),ke.set(fn.x,0,fn.z),ke.lengthSq()<1e-4&&ke.set(0,0,-1),ke.normalize();const n=Ih(),t=Is(He.runwayDistance,He.distance,n),e=Is(He.runwayHeight,He.height,n);cs.set(0,e,0),vn.position.copy(_t.position).addScaledVector(ke,-t).add(cs)}const _n=new D,hu=new D,du=new D,fu=new Ge,pu=new mn,Ar=new D,mu=new D,_y=new D;function sa(n,t=_y){return t.set(0,0,-1).applyEuler(new mn(0,n,0))}function xy(n){const t=sa(n.activeHeading);_t.position.set(n.x-t.x*n.length*.45,n.elevation+.22,n.z-t.z*n.length*.45),_t.quaternion.setFromEuler(new mn(0,n.activeHeading,0)),G.speed=0,G.flightState=ne.PRELAUNCH,G.currentRunway=n,G.refillStartGrey=G.boostFuelGrey,G.refillStartOneshot=G.boostFuelOneshot,G.refillT=0,G.greyActive=!1,G.oneShotActive=!1,G.prevOneShot=!1,Go()}const Dh=document.getElementById("crash");function vy(){G.flightPunkte=0}function Nh(){G.flightPunkte>St.bestFlightPunkte&&(St.bestFlightPunkte=G.flightPunkte),G.flightPunkte=0}function Dr(){G.alive&&(G.alive=!1,G.flightState=ne.CRASHED,Nh(),ii(),Dh.classList.add("visible"))}function Uh(){const n=St.checkpointRunwayId??Vh,t=pn.find(i=>i.id===n)??pn[0],e=!St.introPlayed;if(Wh(),sy(),ay(),cy(),Eh(),Dh.classList.remove("visible"),xy(t),e){const i=new D(0,0,-1).applyQuaternion(_t.quaternion),s=new D(i.x,0,i.z).normalize();G.introStartCamPos=_t.position.clone().addScaledVector(s,-40).add(new D(0,_u.startHeight,0)),G.introT=0,G.flightState=ne.INTRO}}function yy(){return pe.down||pe.up||pe.left||pe.right||pe.brake}function Fh(n){if(G.refillT>=1)return;G.refillT=Math.min(1,G.refillT+n/Re.refillDuration);const t=G.refillT;G.boostFuelGrey=G.refillStartGrey+(1-G.refillStartGrey)*t,G.boostFuelOneshot=G.refillStartOneshot+(1-G.refillStartOneshot)*t}function My(){G.refillT=1,G.boostFuelGrey=1,G.boostFuelOneshot=1}function Sy(n){const t=pe.oneShot&&!G.prevOneShot;G.prevOneShot=pe.oneShot,t&&Si()>0&&G.boostFuelOneshot>0&&!G.oneShotActive&&(G.oneShotActive=!0),G.greyActive=pe.boost&&G.boostFuelGrey>0;let e=0,i=0;if(G.oneShotActive){const s=Re.oneShot.tiers[Si()]||Re.oneShot.tiers[0];G.boostFuelOneshot-=n/Math.max(s.tankDuration,1e-4),G.boostFuelOneshot<=0?(G.boostFuelOneshot=St.testMode?1:0,G.oneShotActive=!1):(e+=s.speedBonus,i+=s.accelRate)}if(G.greyActive){const s=Re.grey;G.boostFuelGrey-=n/Math.max(s.tankDuration,1e-4),G.boostFuelGrey<=0?(G.boostFuelGrey=0,G.greyActive=!1):(e+=s.speedBonus,i+=s.accelRate)}return!G.greyActive&&!G.oneShotActive&&G.boostFuelGrey<1&&(G.boostFuelGrey=Math.min(1,G.boostFuelGrey+n/Re.grey.rechargeTime)),{speedBonus:e,accelBonus:i}}function Ey(n){yy()?G.introT=1:G.introT+=n/_u.duration,G.introT>=1&&(G.introT=0,G.introStartCamPos=null,G.flightState=ne.PRELAUNCH,St.introPlayed=!0,Go())}function by(n){Fh(n),pe.down&&(G.flightState=ne.TAKEOFF_ROLL,G.takeoffTime=0,vy())}function Ty(n){const t=G.currentRunway;G.takeoffTime+=n,Fh(n);const e=Wn.takeoffSpeed,i=Wn.linearShare,s=1-i,o=t.length*Wn.liftoffFraction/(e*(i/2+s/3)),a=Math.min(1,G.takeoffTime/o);G.speed=e*(i*a+s*a*a);const l=sa(t.activeHeading);_t.position.x+=l.x*G.speed*n,_t.position.z+=l.z*G.speed*n,_t.position.y=t.elevation+.22,_t.quaternion.setFromEuler(new mn(0,t.activeHeading,0)),a>=1&&(_t.rotateX(Wn.pitchUpAtLiftoff),G.flightState=ne.FLYING,G.currentRunway=null,G.postLiftCooldown=1.2,My())}function Ay(n){const t=Sy(n),e=(pe.down?1:0)-(pe.up?1:0),i=(pe.right?1:0)-(pe.left?1:0),s=Math.max(0,fe.stallSpeed-G.speed)/fe.stallSpeed,r=1-s*(1-fe.stallAuthority),o=e*r;_n.set(0,0,-1).applyQuaternion(_t.quaternion);const a=Math.asin(Fs.clamp(_n.y,-1,1));let l=o*fe.pitchRate*n;l>0&&(l=Math.min(l,Math.max(0,fe.maxClimbPitch-a))),_t.rotateX(l),_t.rotateZ(-i*fe.rollRate*n),_n.set(0,0,-1).applyQuaternion(_t.quaternion),hu.set(1,0,0).applyQuaternion(_t.quaternion),du.set(0,1,0).applyQuaternion(_t.quaternion);const c=Math.atan2(hu.y,du.y);_t.rotateOnWorldAxis(Bc,Math.sin(c)*fe.turnFactor*n),s>.01&&(Ar.set(_n.x,0,_n.z),Ar.lengthSq()>1e-4&&(Ar.normalize(),mu.crossVectors(Ar,Bc).normalize(),_t.rotateOnWorldAxis(mu,-s*fe.stallPitchRate*n))),_n.set(0,0,-1).applyQuaternion(_t.quaternion);const u=_n.y;G.speed-=u*fe.speedFromPitch*n,G.speed-=fe.drag*n,G.brakeAmount>.01&&(G.speed-=G.brakeAmount*Ja.force*n);const h=Sv(_t.position.x,_t.position.y,_t.position.z);G.speed+=h*.13*n,G.inThermal=h>.5;const f=fe.maxSpeed+t.speedBonus;t.accelBonus>0&&G.speed<f&&(G.speed=Math.min(f,G.speed+t.accelBonus*n)),G.speed=Math.max(fe.minSpeed,Math.min(f,G.speed));const m=_t.position.x,_=_t.position.z;_t.position.addScaledVector(_n,G.speed*n);const v=fe.sinkRate*(1+s*fe.stallSink);_t.position.y-=v*n,_t.position.y+=h*n;const p=_t.position.x-m,d=_t.position.z-_;$r(Math.sqrt(p*p+d*d));const y=Jt.size/2-30;if(_t.position.x>y&&(_t.position.x=y),_t.position.x<-y&&(_t.position.x=-y),_t.position.z>y&&(_t.position.z=y),_t.position.z<-y&&(_t.position.z=-y),G.postLiftCooldown>0){G.postLiftCooldown-=n;return}const x=Math.atan2(-_n.x,-_n.z),S=Ux(_t.position,x);if(S){G.flightState=ne.LANDING_ROLL,G.currentRunway=S,_t.position.y=S.elevation+.22;return}const L=Fx(_t.position);if(L&&_t.position.y-L.elevation<Mi.rollingHeight){Dr();return}const T=ls(_t.position.x,_t.position.z);(_t.position.y<Math.max(T+.4,Jt.waterLevel+.4)||Qx(_t.position.x,_t.position.y,_t.position.z))&&Dr()}function wy(n){const t=G.currentRunway;G.speed=Math.max(0,G.speed-Mi.brakeForce*n);const e=sa(t.activeHeading),i=_t.position.x,s=_t.position.z;_t.position.x+=e.x*G.speed*n,_t.position.z+=e.z*G.speed*n,_t.position.y=t.elevation+.22;const r=_t.position.x-i,o=_t.position.z-s;$r(Math.sqrt(r*r+o*o)),pu.set(0,t.activeHeading,0),fu.setFromEuler(pu),_t.quaternion.slerp(fu,.22);const a=_t.position.x-t.x,l=_t.position.z-t.z,c=a*Math.sin(t.heading)+l*Math.cos(t.heading);if(Math.abs(c)>t.length*.5){Dr();return}G.speed<Mi.landingSpeed&&Cy(t)}function Cy(n){G.speed=0,G.flightState=ne.LANDED,G.landedToastTimer=xu.toastDuration,G.cinematicT=0,G.cinematicFromPos=_t.position.clone(),G.cinematicFromQuat=_t.quaternion.clone();const t=n.activeHeading,e=sa(t,new D);G.cinematicToPos=new D(n.x-e.x*n.length*.45,n.elevation+.22,n.z-e.z*n.length*.45),G.cinematicToQuat=new Ge().setFromEuler(new mn(0,t,0)),St.landings+=1,$r(Mi.landingBonus),St.checkpointRunwayId=n.id,Nh(),ii(),Uv(n)}function Ry(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function Py(n){if(G.landedToastTimer>0){G.landedToastTimer-=n;return}if(G.cinematicT+=n/xu.tweenDuration,G.cinematicT>=1){_t.position.copy(G.cinematicToPos),_t.quaternion.copy(G.cinematicToQuat),G.cinematicT=0,G.cinematicFromPos=null,G.cinematicToPos=null,G.cinematicFromQuat=null,G.cinematicToQuat=null,G.flightState=ne.PRELAUNCH,G.refillStartGrey=G.boostFuelGrey,G.refillStartOneshot=G.boostFuelOneshot,G.refillT=0,Go(),Eh();return}const t=Ry(G.cinematicT);_t.position.lerpVectors(G.cinematicFromPos,G.cinematicToPos,t),_t.quaternion.copy(G.cinematicFromQuat)}function Ly(n){if(G.alive)switch(G.flightState){case ne.INTRO:return Ey(n);case ne.PRELAUNCH:return by(n);case ne.TAKEOFF_ROLL:return Ty(n);case ne.FLYING:return Ay(n);case ne.LANDING_ROLL:return wy(n);case ne.LANDED:return Py(n);case ne.CRASHED:return}}ed();jh();Gs();await Promise.all([qx(),Gx()]);pn.forEach(n=>{n.elevation=os(n.x,n.z)});$e.add($x());$e.add(Zx());$e.add(mv());$e.add(Bx());$e.add(yv());$e.add(Xv());$e.add(mi);$e.add(_t);Jv();document.getElementById("restart-btn").addEventListener("click",Uh);Uh();let gu=performance.now();function Oh(n){requestAnimationFrame(Oh);const t=Math.min(.05,(n-gu)/1e3);gu=n,Ly(t),iy(t),ry(t),ly(t),ny(),fy(),zx(n/1e3),Mv(t),Zv(t,_t),ey(_t),gy(t),Bv(),ds.render($e,vn)}requestAnimationFrame(Oh);
