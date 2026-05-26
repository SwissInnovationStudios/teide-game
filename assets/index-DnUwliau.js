(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Jt={sky:12964828,water:3043220,shore:13023631,snow:15395556,paper:16052712,trunk:7032634,ink:2765624,runway:5591628,pineCanopy:4151864,laurelCanopy:3032880,shrubBody:8160594,grassGround:10858597,cropGround:12100700,urbanGround:10392202,bareGround:10325622,houseWall:15590351,houseRoof:10246468},jt={size:16e3,segments:800,waterLevel:.1,fogStart:600,fogEnd:3e3,heightmap:{url:"/teide/heightmaps/canaries.png",bbox:{latN:29.5,latS:27.4,lonW:-18.4,lonE:-13.3},center:{lat:28.3,lon:-16.55},metersPerUnit:40,elevRange:[0,4e3]}},Gh="TFN",ga=Object.freeze({startSpeed:22,minSpeed:2,maxSpeed:52,stallSpeed:7,pitchRate:.7,maxClimbPitch:.35,rollRate:1.8,turnFactor:1,speedFromPitch:22,drag:.7,sinkRate:.5,stallSink:9,stallPitchRate:1.9,stallAuthority:.25}),Wr=Object.freeze({startSpeed:22,minSpeed:2,maxSpeed:38,stallSpeed:9,pitchRate:.7,maxClimbPitch:.35,rollRate:1.8,turnFactor:1,speedFromPitch:12,drag:1.2,sinkRate:.5,stallSink:9,stallPitchRate:1.9,stallAuthority:.25}),fe={...Wr},_a=Object.freeze({takeoffSpeed:50,liftoffFraction:.65,linearShare:.15,pitchUpAtLiftoff:.16}),Xr=Object.freeze({takeoffSpeed:32,liftoffFraction:.85,linearShare:.45,pitchUpAtLiftoff:.16}),kn={...Xr},Ei={drag:{kind:"stat",stat:"drag",label:"Aerodynamik",description:"Glättere Faltung — weniger Luftwiderstand, längeres Gleiten.",levels:[1.2,1.05,.9,.78,.7],costs:[0,600,1500,3200,6500]},maxSpeed:{kind:"stat",stat:"maxSpeed",label:"Spitzentempo",description:"Erhöht die maximale Fluggeschwindigkeit im Cruise.",levels:[38,42,46,49,52],costs:[0,800,2e3,4500,9e3]},speedFromPitch:{kind:"stat",stat:"speedFromPitch",label:"Sturzflug",description:"Mehr Beschleunigung im Sturzflug — Höhe wird zu Tempo.",levels:[12,15,18,20,22],costs:[0,500,1300,2800,5500]},stallSpeed:{kind:"stat",stat:"stallSpeed",label:"Stabilität",description:"Tiefere Strömungsabriss-Schwelle — verzeiht langsames Fliegen.",levels:[9,8.5,8,7.5,7],costs:[0,700,1700,3600,7e3]},takeoffSpeed:{kind:"stat",stat:"takeoffSpeed",label:"Startbahn",description:"Schnellere Beschleunigung beim Start — weniger Roll-Strecke.",levels:[32,37,42,46,50],costs:[0,600,1500,3200,6500]},brake:{kind:"unlock",label:"Luftbremse",description:"Schaltet die Bremsklappen frei (Leertaste im Flug).",levels:[!1,!0],costs:[0,2500]}},xa={obsidianPerPunkte:100},Ko={force:9,deployTau:.07,maxAngle:1.35},ao={triggerDist:85,triggerHeight:40,deployTau:.35},vi={brakeForce:14,landingSpeed:2.5,headingTolerance:.45,rollingHeight:1.8,landingBonus:500},mu={duration:3,startHeight:60},gu={toastDuration:1.4,tweenDuration:2},Ze={columnColor:16777215,columnOpacity:.1,columnTop:95,maxAltitude:95,liftAtCenter:30,particleColor:16777215,particleOpacity:.55,particleSize:1.7,particleDensity:.05,riseSpeed:14},ke={distance:6.5,height:2.6,lookAhead:3.5,posTau:.12,yawTau:.1,pitchTau:.55,runwayDistance:3,runwayHeight:.4,runwayLookAhead:0},zn={verts:8,maxLen:2.8},we={grey:{color:10132122,tankDuration:1,speedBonus:8,accelRate:35,rechargeTime:20},oneShot:{tiers:[{name:"No Booster",color:0,tankDuration:0,speedBonus:0,accelRate:0},{name:"Booster Level 1",color:5086950,tankDuration:1.2,speedBonus:14,accelRate:45},{name:"Booster Level 2",color:15778888,tankDuration:1.6,speedBonus:20,accelRate:55},{name:"Booster Level 3",color:14702666,tankDuration:2,speedBonus:28,accelRate:70},{name:"Booster Level MAX",color:10905053,tankDuration:2.5,speedBonus:38,accelRate:85}]},refillDuration:1.6,camPushback:2.5,camPushbackTau:.15,exhaust:{offsetX:.3,offsetY:.04,offsetZ:.45,length:1.8,radiusNarrow:.05,radiusWide:.15,intensityTau:.06}},Ln={sampleCount:8e5,treeDensity:1,shrubDensity:.7,grassDensity:.55,laurelMaxAltitude:1500/40,treeScale:.75,urban:{minClusterPixels:3,churchClusterPixels:8,housesPerPixel:.55,housesMin:2,housesMax:30,houseMinSpacing:2.4,pixelJitter:5.5,clusterScaleMin:.9,clusterScaleMax:1.75},grassTints:[[1.05,1.02,.85],[.85,.95,.7],[1,1,1],[.7,.85,.55],[1.1,1.05,.75],[.95,.9,.8]],roofTints:[[1,1,1],[.88,.86,.88],[.62,.58,.68],[1.1,.95,.85],[.95,.88,.78]]},ae={ring:{majorRadius:2,tubeRadius:.12,hoverHeight:8,opacity:.85,opacityActivated:.3,colorActivated:7235682},symbol:{size:1.4,extrudeDepth:.22,rotRate:.7,colorActivated:10132122},activation:{radius:2},colorsByType:{peak:{ring:7235682,symbol:9077368},city:{ring:12155486,symbol:15590351},landscape:{ring:5139274,symbol:9283182},beach:{ring:5212840,symbol:15129016}},rewardsByType:{peak:{punkte:800,gofios:5},city:{punkte:400,gofios:1},landscape:{punkte:500,gofios:2},beach:{punkte:400,gofios:1}},tierThresholds:[0,5,25,55,80],hoverLabelRadius:80,activationToast:{duration:3}},ne={INTRO:"INTRO",PRELAUNCH:"PRELAUNCH",TAKEOFF_ROLL:"TAKEOFF_ROLL",FLYING:"FLYING",LANDING_ROLL:"LANDING_ROLL",LANDED:"LANDED",CRASHED:"CRASHED"},G={speed:fe.startSpeed,alive:!0,inThermal:!1,brakeAmount:0,gearAmount:0,flightState:ne.PRELAUNCH,currentRunway:null,takeoffTime:0,postLiftCooldown:0,landedToastTimer:0,cinematicT:0,cinematicFromPos:null,cinematicToPos:null,cinematicFromQuat:null,cinematicToQuat:null,introT:0,introStartCamPos:null,greyActive:!1,oneShotActive:!1,prevOneShot:!1,boostFuelGrey:1,boostFuelOneshot:0,refillT:1,refillStartGrey:1,refillStartOneshot:0,flightPunkte:0,boosterOverride:null},St={punkte:0,gofiosByIsland:{tenerife:0,gomera:0,palma:0,gc:0,hierro:0,fuerte:0,lanza:0,graciosa:0},obsidian:0,landings:0,bestFlightPunkte:0,upgrades:{drag:0,maxSpeed:0,speedFromPitch:0,stallSpeed:0,takeoffSpeed:0,brake:0},oneShotTierByIsland:{tenerife:0,gomera:0,palma:0,gc:0,hierro:0,fuerte:0,lanza:0,graciosa:0},exploredPOIs:{},checkpointRunwayId:null,introPlayed:!1,currentIsland:"tenerife",testMode:!1};function qr(n){St.punkte+=n,G.flightPunkte+=n}function Hh(){G.speed=fe.startSpeed,G.alive=!0,G.inThermal=!1,G.brakeAmount=0,G.gearAmount=0,G.flightState=ne.PRELAUNCH,G.currentRunway=null,G.takeoffTime=0,G.postLiftCooldown=0,G.landedToastTimer=0,G.cinematicT=0,G.cinematicFromPos=null,G.cinematicToPos=null,G.cinematicFromQuat=null,G.cinematicToQuat=null,G.introT=0,G.introStartCamPos=null,G.greyActive=!1,G.oneShotActive=!1,G.prevOneShot=!1}function Vh(n){return n in Wr?fe:n in Xr?kn:null}function Bs(){if(St.testMode){Object.assign(fe,ga),Object.assign(kn,_a);return}Object.assign(fe,Wr),Object.assign(kn,Xr);for(const[n,t]of Object.entries(Ei)){if(t.kind!=="stat")continue;const e=St.upgrades?.[n]|0,i=Math.max(0,Math.min(t.levels.length-1,e)),s=Vh(t.stat);s&&(s[t.stat]=t.levels[i])}}function yi(n=St.currentIsland){return St.testMode?G.boosterOverride!=null?G.boosterOverride:4:St.oneShotTierByIsland?.[n]|0}function Wh(){return St.testMode?!0:!!St.upgrades?.brake}function Xh(n){for(const[t,e]of Object.entries(Ei)){if(e.kind!=="stat"||e.stat!==n)continue;const i=St.upgrades?.[t]|0,s=Math.max(0,Math.min(e.levels.length-1,i));return e.levels[s]}return ga[n]??_a[n]}function qh(){const n=ae.tierThresholds;for(const t of Object.keys(St.gofiosByIsland)){const e=St.gofiosByIsland[t]|0;let i=0;for(let r=n.length-1;r>=0;r--)if(e>=n[r]){i=r;break}(St.oneShotTierByIsland[t]|0)>i&&(St.oneShotTierByIsland[t]=i)}}const gt={PEAK:"peak",CITY:"city",LANDSCAPE:"landscape",BEACH:"beach"};function _u(n,t){const{center:e,metersPerUnit:i}=jt.heightmap,s=(t-e.lon)*111320*Math.cos(e.lat*Math.PI/180),r=(n-e.lat)*111320;return{x:s/i,z:-r/i}}const va=[{id:"tenerife",name:"Tenerife",lat:28.3,lon:-16.55,playable:!0},{id:"gomera",name:"La Gomera",lat:28.1,lon:-17.21,playable:!0},{id:"palma",name:"La Palma",lat:28.71,lon:-17.85,playable:!0},{id:"gc",name:"Gran Canaria",lat:27.93,lon:-15.59,playable:!0},{id:"hierro",name:"El Hierro",lat:27.74,lon:-18.02,playable:!0},{id:"fuerte",name:"Fuerteventura",lat:28.36,lon:-14.05,playable:!0},{id:"lanza",name:"Lanzarote",lat:29.04,lon:-13.62,playable:!0},{id:"graciosa",name:"La Graciosa",lat:29.24,lon:-13.5,playable:!0}].map(n=>({...n,..._u(n.lat,n.lon)}));function Yh(n){let t="tenerife",e=1/0;for(const i of va){if(!i.playable)continue;const s=n.x-i.x,r=n.z-i.z,a=s*s+r*r;a<e&&(e=a,t=i.id)}return t}const $h=[{id:"tfe-peak-teide",island:"tenerife",type:gt.PEAK,name:"Pico del Teide",lat:28.2724,lon:-16.6425,ele:3715},{id:"tfe-peak-pico-viejo",island:"tenerife",type:gt.PEAK,name:"Pico Viejo",lat:28.2632,lon:-16.6534,ele:3135},{id:"tfe-peak-montana-blanca",island:"tenerife",type:gt.PEAK,name:"Montaña Blanca",lat:28.251,lon:-16.6035,ele:2748},{id:"tfe-peak-guajara",island:"tenerife",type:gt.PEAK,name:"Guajara",lat:28.2207,lon:-16.6157,ele:2718},{id:"tfe-peak-cinchado",island:"tenerife",type:gt.PEAK,name:"Roque Cinchado",lat:28.228,lon:-16.6172,ele:2167},{id:"tfe-peak-tigaiga",island:"tenerife",type:gt.PEAK,name:"Montaña de Tigaiga",lat:28.37,lon:-16.63,ele:1909},{id:"tfe-peak-conde",island:"tenerife",type:gt.PEAK,name:"Roque del Conde",lat:28.1093,lon:-16.7117,ele:1001},{id:"tfe-peak-cruz-carmen",island:"tenerife",type:gt.PEAK,name:"Cruz del Carmen",lat:28.5358,lon:-16.3025,ele:900},{id:"tfe-peak-roques-anaga",island:"tenerife",type:gt.PEAK,name:"Roques de Anaga",lat:28.5775,lon:-16.153,ele:227},{id:"tfe-city-santa-cruz",island:"tenerife",type:gt.CITY,name:"Santa Cruz de Tenerife",lat:28.4636,lon:-16.2518},{id:"tfe-city-la-laguna",island:"tenerife",type:gt.CITY,name:"San Cristóbal de La Laguna",lat:28.4853,lon:-16.3201},{id:"tfe-city-la-orotava",island:"tenerife",type:gt.CITY,name:"La Orotava",lat:28.3902,lon:-16.5234},{id:"tfe-city-puerto-cruz",island:"tenerife",type:gt.CITY,name:"Puerto de la Cruz",lat:28.4144,lon:-16.544},{id:"tfe-city-los-cristianos",island:"tenerife",type:gt.CITY,name:"Los Cristianos",lat:28.0507,lon:-16.71},{id:"tfe-city-las-americas",island:"tenerife",type:gt.CITY,name:"Playa de las Américas",lat:28.054,lon:-16.729},{id:"tfe-city-adeje",island:"tenerife",type:gt.CITY,name:"Adeje",lat:28.1226,lon:-16.7256},{id:"tfe-city-granadilla",island:"tenerife",type:gt.CITY,name:"Granadilla de Abona",lat:28.1182,lon:-16.5781},{id:"tfe-city-icod",island:"tenerife",type:gt.CITY,name:"Icod de los Vinos",lat:28.3729,lon:-16.7106},{id:"tfe-city-garachico",island:"tenerife",type:gt.CITY,name:"Garachico",lat:28.3735,lon:-16.7635},{id:"tfe-city-vilaflor",island:"tenerife",type:gt.CITY,name:"Vilaflor",lat:28.1572,lon:-16.6356},{id:"tfe-city-buenavista",island:"tenerife",type:gt.CITY,name:"Buenavista del Norte",lat:28.3712,lon:-16.8567},{id:"tfe-city-masca",island:"tenerife",type:gt.CITY,name:"Masca",lat:28.3001,lon:-16.8404},{id:"tfe-land-teide-park",island:"tenerife",type:gt.LANDSCAPE,name:"Parque Nacional del Teide",lat:28.2733,lon:-16.6422},{id:"tfe-land-anaga-park",island:"tenerife",type:gt.LANDSCAPE,name:"Parque Rural de Anaga",lat:28.55,lon:-16.2},{id:"tfe-land-teno-park",island:"tenerife",type:gt.LANDSCAPE,name:"Parque Rural de Teno",lat:28.35,lon:-16.85},{id:"tfe-land-barranco-infierno",island:"tenerife",type:gt.LANDSCAPE,name:"Barranco del Infierno",lat:28.1184,lon:-16.7245},{id:"tfe-land-barranco-masca",island:"tenerife",type:gt.LANDSCAPE,name:"Barranco de Masca",lat:28.3,lon:-16.841},{id:"tfe-land-cueva-viento",island:"tenerife",type:gt.LANDSCAPE,name:"Cueva del Viento",lat:28.3754,lon:-16.714},{id:"tfe-land-esperanza",island:"tenerife",type:gt.LANDSCAPE,name:"Bosque de la Esperanza",lat:28.48,lon:-16.41},{id:"tfe-land-pinar-chio",island:"tenerife",type:gt.LANDSCAPE,name:"Pinar de Chío",lat:28.27,lon:-16.71},{id:"tfe-land-los-gigantes",island:"tenerife",type:gt.LANDSCAPE,name:"Acantilados de Los Gigantes",lat:28.248,lon:-16.843},{id:"tfe-land-mirador-garachico",island:"tenerife",type:gt.LANDSCAPE,name:"Mirador de Garachico",lat:28.368,lon:-16.761},{id:"tfe-beach-teresitas",island:"tenerife",type:gt.BEACH,name:"Playa de las Teresitas",lat:28.5096,lon:-16.186},{id:"tfe-beach-vistas",island:"tenerife",type:gt.BEACH,name:"Playa de las Vistas",lat:28.0489,lon:-16.7218},{id:"tfe-beach-arena",island:"tenerife",type:gt.BEACH,name:"Playa de la Arena",lat:28.244,lon:-16.8053},{id:"tfe-beach-medano",island:"tenerife",type:gt.BEACH,name:"Playa El Médano",lat:28.0461,lon:-16.5343},{id:"tfe-beach-benijo",island:"tenerife",type:gt.BEACH,name:"Playa de Benijo",lat:28.5775,lon:-16.1838},{id:"tfe-beach-bollullo",island:"tenerife",type:gt.BEACH,name:"Playa del Bollullo",lat:28.4106,lon:-16.494},{id:"tfe-beach-fanabe",island:"tenerife",type:gt.BEACH,name:"Playa de Fañabé",lat:28.0907,lon:-16.7383},{id:"tfe-beach-jardin",island:"tenerife",type:gt.BEACH,name:"Playa Jardín",lat:28.4189,lon:-16.5586},{id:"tfe-beach-almaciga",island:"tenerife",type:gt.BEACH,name:"Playa de Almáciga",lat:28.5752,lon:-16.1714},{id:"tfe-beach-abama",island:"tenerife",type:gt.BEACH,name:"Playa de Abama",lat:28.1735,lon:-16.7937},{id:"gom-peak-garajonay",island:"gomera",type:gt.PEAK,name:"Alto de Garajonay",lat:28.1163,lon:-17.2476,ele:1487},{id:"gom-city-san-sebastian",island:"gomera",type:gt.CITY,name:"San Sebastián de La Gomera",lat:28.0911,lon:-17.1106},{id:"gom-city-valle-gran-rey",island:"gomera",type:gt.CITY,name:"Valle Gran Rey",lat:28.0922,lon:-17.3358},{id:"gom-city-vallehermoso",island:"gomera",type:gt.CITY,name:"Vallehermoso",lat:28.1797,lon:-17.2658},{id:"gom-city-hermigua",island:"gomera",type:gt.CITY,name:"Hermigua",lat:28.1656,lon:-17.1942},{id:"gom-land-garajonay-park",island:"gomera",type:gt.LANDSCAPE,name:"Parque Nacional de Garajonay",lat:28.1167,lon:-17.25},{id:"gom-land-los-organos",island:"gomera",type:gt.LANDSCAPE,name:"Los Órganos",lat:28.212,lon:-17.282},{id:"gom-land-roque-agando",island:"gomera",type:gt.LANDSCAPE,name:"Roque de Agando",lat:28.1153,lon:-17.2106},{id:"gom-beach-santiago",island:"gomera",type:gt.BEACH,name:"Playa de Santiago",lat:28.0294,lon:-17.1989},{id:"gom-beach-calera",island:"gomera",type:gt.BEACH,name:"Playa de la Calera",lat:28.1023,lon:-17.3401},{id:"gc-peak-nieves",island:"gc",type:gt.PEAK,name:"Pico de las Nieves",lat:27.9617,lon:-15.5803,ele:1949},{id:"gc-city-las-palmas",island:"gc",type:gt.CITY,name:"Las Palmas de Gran Canaria",lat:28.1235,lon:-15.4363},{id:"gc-city-maspalomas",island:"gc",type:gt.CITY,name:"Maspalomas",lat:27.7547,lon:-15.586},{id:"gc-city-teror",island:"gc",type:gt.CITY,name:"Teror",lat:28.0556,lon:-15.547},{id:"gc-city-telde",island:"gc",type:gt.CITY,name:"Telde",lat:27.9974,lon:-15.4178},{id:"gc-land-nublo",island:"gc",type:gt.LANDSCAPE,name:"Roque Nublo",lat:27.965,lon:-15.6175},{id:"gc-land-dunas",island:"gc",type:gt.LANDSCAPE,name:"Dunas de Maspalomas",lat:27.741,lon:-15.5797},{id:"gc-beach-canteras",island:"gc",type:gt.BEACH,name:"Playa de las Canteras",lat:28.1352,lon:-15.4348},{id:"gc-beach-ingles",island:"gc",type:gt.BEACH,name:"Playa del Inglés",lat:27.7597,lon:-15.58},{id:"palma-peak-muchachos",island:"palma",type:gt.PEAK,name:"Roque de los Muchachos",lat:28.7544,lon:-17.8851,ele:2426},{id:"palma-city-santa-cruz",island:"palma",type:gt.CITY,name:"Santa Cruz de La Palma",lat:28.6835,lon:-17.7642},{id:"palma-city-llanos",island:"palma",type:gt.CITY,name:"Los Llanos de Aridane",lat:28.6585,lon:-17.9181},{id:"palma-land-taburiente",island:"palma",type:gt.LANDSCAPE,name:"Caldera de Taburiente",lat:28.708,lon:-17.872},{id:"palma-land-cumbre-vieja",island:"palma",type:gt.LANDSCAPE,name:"Cumbre Vieja",lat:28.574,lon:-17.8358},{id:"palma-beach-nogales",island:"palma",type:gt.BEACH,name:"Playa de Nogales",lat:28.7548,lon:-17.7616},{id:"palma-beach-puerto-naos",island:"palma",type:gt.BEACH,name:"Playa de Puerto Naos",lat:28.5828,lon:-17.9128},{id:"hierro-peak-malpaso",island:"hierro",type:gt.PEAK,name:"Pico de Malpaso",lat:27.733,lon:-18.0177,ele:1501},{id:"hierro-city-valverde",island:"hierro",type:gt.CITY,name:"Valverde",lat:27.8055,lon:-17.9183},{id:"hierro-city-frontera",island:"hierro",type:gt.CITY,name:"La Frontera",lat:27.7639,lon:-18.0122},{id:"hierro-land-sabinar",island:"hierro",type:gt.LANDSCAPE,name:"El Sabinar",lat:27.756,lon:-18.1148},{id:"hierro-land-bonanza",island:"hierro",type:gt.LANDSCAPE,name:"Roque de la Bonanza",lat:27.7029,lon:-17.9429},{id:"hierro-beach-charco-azul",island:"hierro",type:gt.BEACH,name:"Charco Azul",lat:27.8061,lon:-18.1057},{id:"fuerte-peak-zarza",island:"fuerte",type:gt.PEAK,name:"Pico de la Zarza",lat:28.0828,lon:-14.3053,ele:807},{id:"fuerte-city-puerto-rosario",island:"fuerte",type:gt.CITY,name:"Puerto del Rosario",lat:28.5011,lon:-13.8627},{id:"fuerte-city-corralejo",island:"fuerte",type:gt.CITY,name:"Corralejo",lat:28.7361,lon:-13.87},{id:"fuerte-city-morro-jable",island:"fuerte",type:gt.CITY,name:"Morro Jable",lat:28.054,lon:-14.349},{id:"fuerte-land-corralejo-park",island:"fuerte",type:gt.LANDSCAPE,name:"Parque Natural de Corralejo",lat:28.717,lon:-13.834},{id:"fuerte-land-calderon",island:"fuerte",type:gt.LANDSCAPE,name:"Calderón Hondo",lat:28.703,lon:-13.939},{id:"fuerte-beach-sotavento",island:"fuerte",type:gt.BEACH,name:"Playa de Sotavento",lat:28.1973,lon:-14.218},{id:"fuerte-beach-cofete",island:"fuerte",type:gt.BEACH,name:"Playa de Cofete",lat:28.0945,lon:-14.382},{id:"lanza-peak-penas-chache",island:"lanza",type:gt.PEAK,name:"Peñas del Chache",lat:29.1108,lon:-13.5468,ele:671},{id:"lanza-city-arrecife",island:"lanza",type:gt.CITY,name:"Arrecife",lat:28.9637,lon:-13.5477},{id:"lanza-city-costa-teguise",island:"lanza",type:gt.CITY,name:"Costa Teguise",lat:28.987,lon:-13.5},{id:"lanza-city-playa-blanca",island:"lanza",type:gt.CITY,name:"Playa Blanca",lat:28.8597,lon:-13.8253},{id:"lanza-land-timanfaya",island:"lanza",type:gt.LANDSCAPE,name:"Parque Nacional de Timanfaya",lat:29,lon:-13.755},{id:"lanza-land-cueva-verdes",island:"lanza",type:gt.LANDSCAPE,name:"Cueva de los Verdes",lat:29.1574,lon:-13.4342},{id:"lanza-land-mirador-rio",island:"lanza",type:gt.LANDSCAPE,name:"Mirador del Río",lat:29.2179,lon:-13.4827},{id:"lanza-beach-papagayo",island:"lanza",type:gt.BEACH,name:"Playa Papagayo",lat:28.835,lon:-13.804},{id:"lanza-beach-famara",island:"lanza",type:gt.BEACH,name:"Playa de Famara",lat:29.13,lon:-13.5538},{id:"graciosa-peak-agujas",island:"graciosa",type:gt.PEAK,name:"Las Agujas Grandes",lat:29.262,lon:-13.502,ele:266},{id:"graciosa-city-caleta",island:"graciosa",type:gt.CITY,name:"Caleta del Sebo",lat:29.2261,lon:-13.5021},{id:"graciosa-land-amarilla",island:"graciosa",type:gt.LANDSCAPE,name:"Montaña Amarilla",lat:29.2128,lon:-13.539},{id:"graciosa-beach-conchas",island:"graciosa",type:gt.BEACH,name:"Playa de las Conchas",lat:29.27,lon:-13.541},{id:"graciosa-beach-francesa",island:"graciosa",type:gt.BEACH,name:"Playa Francesa",lat:29.215,lon:-13.531}],pi=$h.map(n=>({...n,..._u(n.lat,n.lon)}));(function(){const t=2*ae.ring.majorRadius+1.2,e=t*t,i=30;for(let s=0;s<i;s++){let r=!1;for(let a=0;a<pi.length;a++)for(let o=a+1;o<pi.length;o++){const l=pi[a],c=pi[o],u=l.x-c.x,h=l.z-c.z,f=u*u+h*h;if(f>=e)continue;if(f<1e-4){l.x+=.13,l.z+=.07,c.x-=.13,c.z-=.07,r=!0;continue}const m=Math.sqrt(f),_=(t-m)*.5,v=u/m,p=h/m;l.x+=v*_,l.z+=p*_,c.x-=v*_,c.z-=p*_,r=!0}if(!r)break}})();const jh=pi.reduce((n,t)=>((n[t.island]??=[]).push(t),n),{}),xu="teide-save",br=2,vu=["punkte","gofiosByIsland","obsidian","landings","bestFlightPunkte","upgrades","oneShotTierByIsland","exploredPOIs","checkpointRunwayId","currentIsland","testMode"];function Zh(){const n={version:br};for(const t of vu)n[t]=St[t];return n}function Kh(n){for(const t of vu){const e=n[t];if(e===void 0)continue;const i=St[t];i&&typeof i=="object"&&!Array.isArray(i)&&e&&typeof e=="object"&&!Array.isArray(e)?Object.assign(i,e):St[t]=e}}function Jh(n){if(n.version===1){const t={};if(n.exploredPOIs)for(const e of pi){if(!n.exploredPOIs[e.id])continue;const i=ae.rewardsByType[e.type];i&&(t[e.island]=(t[e.island]|0)+i.gofios)}n.gofiosByIsland=t,n.version=2}return n}function Qh(){try{const n=localStorage.getItem(xu);if(!n)return!1;let t=JSON.parse(n);return!t||typeof t!="object"?!1:typeof t.version!="number"?(console.warn("[save] discarding save: missing version"),!1):t.version>br?(console.warn(`[save] discarding save: future version ${t.version} > ${br}`),!1):(t=Jh(t),t.version!==br?(console.warn(`[save] discarding save: migration left version at ${t.version}`),!1):(Kh(t),!0))}catch(n){return console.warn("[save] load failed:",n),!1}}function td(){try{localStorage.setItem(xu,JSON.stringify(Zh()))}catch(n){console.warn("[save] write failed:",n)}}let lo=!1;function ti(){lo||(lo=!0,queueMicrotask(()=>{lo=!1,td()}))}const pe={up:!1,down:!1,left:!1,right:!1,brake:!1,boost:!1,oneShot:!1};function yu(n,t){switch(n.key){case"ArrowUp":case"w":case"W":pe.up=t;break;case"ArrowDown":case"s":case"S":pe.down=t;break;case"ArrowLeft":case"a":case"A":pe.left=t;break;case"ArrowRight":case"d":case"D":pe.right=t;break;case" ":case"Spacebar":pe.brake=t&&Wh(),n.preventDefault();break;case"Shift":pe.boost=t;break;case"f":case"F":pe.oneShot=t;break;case"t":case"T":t&&(St.testMode=!St.testMode,Bs(),ti());break;case"b":case"B":if(t&&St.testMode){const e=we.oneShot.tiers.length-1,i=G.boosterOverride!=null?G.boosterOverride:4;G.boosterOverride=(i+1)%(e+1)}break}}window.addEventListener("keydown",n=>yu(n,!0));window.addEventListener("keyup",n=>yu(n,!1));const ya={garage:document.getElementById("garage-overlay"),shop:document.getElementById("shop-overlay")},qa=document.getElementById("garage-punkte"),Ya=document.getElementById("garage-highscore"),$a=document.getElementById("garage-obsidian"),ja=document.getElementById("garage-island"),Za=document.getElementById("garage-booster"),ds=document.getElementById("garage-stats"),Ss=document.getElementById("garage-upgrades"),Ka=document.getElementById("shop-obsidian"),Gn=document.getElementById("obsidian-confirm"),Ja=document.getElementById("obsidian-confirm-text"),ed=document.getElementById("obsidian-confirm-cancel"),nd=document.getElementById("obsidian-confirm-ok");let Es=null,Lr=null;function Mu(n){return we.oneShot.tiers[n]?.name||`Level ${n}`}function id(n){return n.charAt(0).toUpperCase()+n.slice(1)}function Wn(n){return Math.round(n).toLocaleString("de-DE")}function sd(n){Tr();const t=ya[n];t&&(n==="garage"&&Yr(),n==="shop"&&md(),t.classList.add("visible"),t.setAttribute("aria-hidden","false"),Es=n)}function Tr(){if(!Es)return;const n=ya[Es];n&&(n.classList.remove("visible"),n.setAttribute("aria-hidden","true")),Es=null}function Yr(){rd(),ld(),cd()}function rd(){qa&&(qa.textContent=Wn(St.punkte)),Ya&&(Ya.textContent=Wn(St.bestFlightPunkte|0)),$a&&($a.textContent=Wn(St.obsidian|0)),ja&&(ja.textContent=id(St.currentIsland)),Za&&(Za.textContent=Mu(yi(St.currentIsland)))}const od=[{key:"maxSpeed",label:"Spitzentempo",src:"plane",invert:!1},{key:"drag",label:"Aerodynamik",src:"plane",invert:!0},{key:"speedFromPitch",label:"Sturzflug",src:"plane",invert:!1},{key:"stallSpeed",label:"Stabilität",src:"plane",invert:!0},{key:"takeoffSpeed",label:"Startgeschwindigkeit",src:"takeoff",invert:!1}];function ad(n){const t=Xh(n.key),e=n.src==="plane"?Wr[n.key]:Xr[n.key],i=n.src==="plane"?ga[n.key]:_a[n.key],s=n.invert?e-t:t-e,r=n.invert?e-i:i-e;return Math.abs(r)<1e-6?{pct:100,cur:t,full:i}:{pct:Math.max(0,Math.min(100,s/r*100)),cur:t,full:i}}function ld(){if(!ds)return;ds.innerHTML="";for(const a of od){const{pct:o,cur:l,full:c}=ad(a),u=document.createElement("div");u.className="stat-row",u.innerHTML=`
      <div class="stat-row-head">
        <span>${a.label}</span>
        <span class="stat-row-pct">${Math.round(o)} %</span>
      </div>
      <div class="stat-row-bar"><div class="stat-row-bar-fill" style="width: ${o}%"></div></div>
      ${St.testMode?`<div class="stat-row-debug">${l.toFixed(2)} / ${c.toFixed(2)}</div>`:""}
    `,ds.appendChild(u)}const n=!!St.upgrades?.brake,t=document.createElement("div");t.className=`stat-row binary${n?"":" locked"}`,t.innerHTML=`
    <div class="stat-row-head">
      <span>Luftbremse</span>
      <span class="stat-row-state">${n?"✓ Aktiv":"Gesperrt"}</span>
    </div>
  `,ds.appendChild(t);const e=yi(St.currentIsland),i=we.oneShot.tiers.length-1,s=e/i*100,r=document.createElement("div");r.className="stat-row",r.innerHTML=`
    <div class="stat-row-head">
      <span>Booster</span>
      <span class="stat-row-pct">${Mu(e)}</span>
    </div>
    <div class="stat-row-bar"><div class="stat-row-bar-fill" style="width: ${s}%"></div></div>
  `,ds.appendChild(r)}function cd(){if(Ss){Ss.innerHTML="";for(const[n,t]of Object.entries(Ei)){const e=St.upgrades[n]|0,i=t.levels.length-1,s=e>=i,r=s?0:t.costs[e+1],a=r>0?Math.ceil(r/xa.obsidianPerPunkte):0;let o,l,c;s?(o="Max",l=!0,c=""):St.punkte>=r?(o=`Kaufen · ${Wn(r)} P`,l=!1,c="punkte"):(St.obsidian|0)>=a?(o=`Mit Obsidian · ${a} O`,l=!1,c="obsidian"):(o=`Kaufen · ${Wn(r)} P`,l=!0,c="");const u=document.createElement("div");u.className="upgrade-row";const h=St.testMode&&e>0?`<button class="upgrade-sell" type="button" data-sell="${n}">Verkaufen · ${Wn(t.costs[e])} P</button>`:"";u.innerHTML=`
      <div class="upgrade-head">
        <span>${t.label}</span>
        <span class="upgrade-level">${e} / ${i}</span>
      </div>
      <div class="upgrade-desc">${t.description}</div>
      <div class="upgrade-actions">
        ${h}
        <button class="upgrade-buy${s?" maxed":""}" type="button"
                data-buy="${n}" data-pay="${c}" ${l?"disabled":""}>
          ${o}
        </button>
      </div>
    `,Ss.appendChild(u)}}}function ud(n){if(!St.testMode)return;const t=Ei[n];if(!t)return;const e=St.upgrades[n]|0;if(e<=0)return;const i=t.costs[e];St.upgrades[n]=e-1,St.punkte+=i,Bs(),ti(),Yr()}function hd(n){const t=Ei[n],e=St.upgrades[n]|0,i=t.costs[e+1];St.punkte<i||(St.punkte-=i,St.upgrades[n]=e+1,Bs(),ti(),Yr())}function dd(n){const t=Ei[n],e=St.upgrades[n]|0,i=t.costs[e+1],s=Math.ceil(i/xa.obsidianPerPunkte);(St.obsidian|0)<s||(St.obsidian=(St.obsidian|0)-s,St.upgrades[n]=e+1,Bs(),ti(),Yr())}function fd(n){const t=Ei[n],e=St.upgrades[n]|0,i=t.costs[e+1],s=Math.ceil(i/xa.obsidianPerPunkte);Lr={key:n,punkteCost:i,obsidianCost:s},Ja&&(Ja.innerHTML=`Du gibst <strong>${s} Obsidian</strong> für <strong>${t.label}</strong> aus.<br>(entspricht ${Wn(i)} P)`),Gn.classList.add("visible"),Gn.setAttribute("aria-hidden","false")}function Ar(){Gn.classList.remove("visible"),Gn.setAttribute("aria-hidden","true"),Lr=null}function pd(){if(!Lr)return;const n=Lr.key;Ar(),dd(n)}function md(){Ka&&(Ka.textContent=Wn(St.obsidian|0))}(function(){document.querySelectorAll(".tp-btn").forEach(t=>{t.addEventListener("click",()=>sd(t.dataset.modal))}),document.querySelectorAll(".modal-close").forEach(t=>{t.addEventListener("click",Tr)});for(const t of Object.values(ya))t&&t.addEventListener("click",e=>{e.target===t&&Tr()});Ss&&Ss.addEventListener("click",t=>{const e=t.target.closest("[data-sell]");if(e&&!e.disabled){ud(e.dataset.sell);return}const i=t.target.closest("[data-buy]");if(!i||i.disabled)return;const s=i.dataset.buy,r=i.dataset.pay;r==="punkte"?hd(s):r==="obsidian"&&fd(s)}),Gn&&(Gn.addEventListener("click",t=>{t.target===Gn&&Ar()}),ed?.addEventListener("click",Ar),nd?.addEventListener("click",pd)),document.addEventListener("keydown",t=>{t.key==="Escape"&&(Gn?.classList.contains("visible")?Ar():Es&&Tr())})})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="160",gd=0,Qa=1,_d=2,Su=1,xd=2,wn=3,jn=0,He=1,Ge=2,Xn=0,Ki=1,Ir=2,tl=3,el=4,vd=5,ui=100,yd=101,Md=102,nl=103,il=104,Sd=200,Ed=201,bd=202,Td=203,Jo=204,Qo=205,Ad=206,wd=207,Cd=208,Rd=209,Pd=210,Ld=211,Id=212,Dd=213,Ud=214,Nd=0,Fd=1,Od=2,Dr=3,Bd=4,zd=5,kd=6,Gd=7,Sa=0,Hd=1,Vd=2,qn=0,Wd=1,Xd=2,qd=3,Yd=4,$d=5,jd=6,Eu=300,es=301,ns=302,ta=303,ea=304,$r=306,na=1e3,ln=1001,ia=1002,Be=1003,sl=1004,co=1005,Ke=1006,Zd=1007,Ps=1008,Yn=1009,Kd=1010,Jd=1011,Ea=1012,bu=1013,Hn=1014,Vn=1015,Ls=1016,Tu=1017,Au=1018,mi=1020,Qd=1021,cn=1023,tf=1024,ef=1025,gi=1026,is=1027,nf=1028,wu=1029,sf=1030,Cu=1031,Ru=1033,uo=33776,ho=33777,fo=33778,po=33779,rl=35840,ol=35841,al=35842,ll=35843,Pu=36196,cl=37492,ul=37496,hl=37808,dl=37809,fl=37810,pl=37811,ml=37812,gl=37813,_l=37814,xl=37815,vl=37816,yl=37817,Ml=37818,Sl=37819,El=37820,bl=37821,mo=36492,Tl=36494,Al=36495,rf=36283,wl=36284,Cl=36285,Rl=36286,Lu=3e3,_i=3001,of=3200,af=3201,Iu=0,lf=1,tn="",xe="srgb",Rn="srgb-linear",ba="display-p3",jr="display-p3-linear",Ur="linear",oe="srgb",Nr="rec709",Fr="p3",Ri=7680,Pl=519,cf=512,uf=513,hf=514,Du=515,df=516,ff=517,pf=518,mf=519,Ll=35044,Il="300 es",sa=1035,Cn=2e3,Or=2001;class ls{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dl=1234567;const Ji=Math.PI/180,Is=180/Math.PI;function bi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toLowerCase()}function Ae(n,t,e){return Math.max(t,Math.min(e,n))}function Ta(n,t){return(n%t+t)%t}function gf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function _f(n,t,e){return n!==t?(e-n)/(t-n):0}function bs(n,t,e){return(1-e)*n+e*t}function xf(n,t,e,i){return bs(n,t,1-Math.exp(-e*i))}function vf(n,t=1){return t-Math.abs(Ta(n,t*2)-t)}function yf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Mf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Sf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Ef(n,t){return n+Math.random()*(t-n)}function bf(n){return n*(.5-Math.random())}function Tf(n){n!==void 0&&(Dl=n);let t=Dl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Af(n){return n*Ji}function wf(n){return n*Is}function ra(n){return(n&n-1)===0&&n!==0}function Cf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Br(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rf(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),u=a((t+i)/2),h=r((t-i)/2),f=a((t-i)/2),m=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*u,l*h,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Yi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ds={DEG2RAD:Ji,RAD2DEG:Is,generateUUID:bi,clamp:Ae,euclideanModulo:Ta,mapLinear:gf,inverseLerp:_f,lerp:bs,damp:xf,pingpong:vf,smoothstep:yf,smootherstep:Mf,randInt:Sf,randFloat:Ef,randFloatSpread:bf,seededRandom:Tf,degToRad:Af,radToDeg:wf,isPowerOfTwo:ra,ceilPowerOfTwo:Cf,floorPowerOfTwo:Br,setQuaternionFromProperEuler:Rf,normalize:Fe,denormalize:Yi};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,i,s,r,a,o,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],_=i[8],v=s[0],p=s[3],d=s[6],M=s[1],x=s[4],E=s[7],L=s[2],C=s[5],P=s[8];return r[0]=a*v+o*M+l*L,r[3]=a*p+o*x+l*C,r[6]=a*d+o*E+l*P,r[1]=c*v+u*M+h*L,r[4]=c*p+u*x+h*C,r[7]=c*d+u*E+h*P,r[2]=f*v+m*M+_*L,r[5]=f*p+m*x+_*C,r[8]=f*d+m*E+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=o*l-u*r,m=c*r-a*l,_=e*h+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=h*v,t[1]=(s*c-u*i)*v,t[2]=(o*i-s*a)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(go.makeScale(t,e)),this}rotate(t){return this.premultiply(go.makeRotation(-t)),this}translate(t,e){return this.premultiply(go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const go=new zt;function Uu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Pf(){const n=zr("canvas");return n.style.display="block",n}const Ul={};function Ts(n){n in Ul||(Ul[n]=!0,console.warn(n))}const Nl=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fl=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hs={[Rn]:{transfer:Ur,primaries:Nr,toReference:n=>n,fromReference:n=>n},[xe]:{transfer:oe,primaries:Nr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[jr]:{transfer:Ur,primaries:Fr,toReference:n=>n.applyMatrix3(Fl),fromReference:n=>n.applyMatrix3(Nl)},[ba]:{transfer:oe,primaries:Fr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Fl),fromReference:n=>n.applyMatrix3(Nl).convertLinearToSRGB()}},Lf=new Set([Rn,jr]),te={enabled:!0,_workingColorSpace:Rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Lf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Hs[t].toReference,s=Hs[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Hs[n].primaries},getTransfer:function(n){return n===tn?Ur:Hs[n].transfer}};function Qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _o(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Pi;class Nu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=zr("canvas")),Pi.width=t.width,Pi.height=t.height;const i=Pi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Qi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Qi(e[i]/255)*255):e[i]=Qi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let If=0;class Fu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=bi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(xo(s[a].image)):r.push(xo(s[a]))}else r=xo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function xo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Nu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Df=0;class qe extends ls{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,i=ln,s=ln,r=Ke,a=Ps,o=cn,l=Yn,c=qe.DEFAULT_ANISOTROPY,u=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=bi(),this.name="",this.source=new Fu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===_i?xe:tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Eu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case na:t.x=t.x-Math.floor(t.x);break;case ln:t.x=t.x<0?0:1;break;case ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case na:t.y=t.y-Math.floor(t.y);break;case ln:t.y=t.y<0?0:1;break;case ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xe?_i:Lu}set encoding(t){Ts("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===_i?xe:tn}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Eu;qe.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,i=0,s=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,E=(m+1)/2,L=(d+1)/2,C=(u+f)/4,P=(h+v)/4,k=(_+p)/4;return x>E&&x>L?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=C/i,r=P/i):E>L?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=C/s,r=k/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=P/r,s=k/r),this.set(i,s,r,e),this}let M=Math.sqrt((p-_)*(p-_)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(h-v)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uf extends ls{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(Ts("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===_i?xe:tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new qe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Fu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends Uf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ou extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nf extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=v;return}if(h!==v||l!==f||c!==m||u!==_){let p=1-o;const d=l*f+c*m+u*_+h*v,M=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const L=Math.sqrt(x),C=Math.atan2(L,d*M);p=Math.sin(p*C)/L,o=Math.sin(o*C)/L}const E=o*M;if(l=l*p+f*E,c=c*p+m*E,u=u*p+_*E,h=h*p+v*E,p===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+u*h+l*m-c*f,t[e+1]=l*_+u*f+c*h-o*m,t[e+2]=c*_+u*m+o*f-l*h,t[e+3]=u*_-o*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,i=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ol.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ol.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),u=2*(o*e-r*s),h=2*(r*i-a*e);return this.x=e+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return vo.copy(this).projectOnVector(t),this.sub(vo)}reflect(t){return this.sub(vo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vo=new F,Ol=new dn;class Ti{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,en):en.fromBufferAttribute(r,a),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vs.copy(i.boundingBox)),Vs.applyMatrix4(t.matrixWorld),this.union(Vs)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),Ws.subVectors(this.max,fs),Li.subVectors(t.a,fs),Ii.subVectors(t.b,fs),Di.subVectors(t.c,fs),Dn.subVectors(Ii,Li),Un.subVectors(Di,Ii),ii.subVectors(Li,Di);let e=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-ii.z,ii.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,ii.z,0,-ii.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-ii.y,ii.x,0];return!yo(e,Li,Ii,Di,Ws)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,Li,Ii,Di,Ws))?!1:(Xs.crossVectors(Dn,Un),e=[Xs.x,Xs.y,Xs.z],yo(e,Li,Ii,Di,Ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new F,new F,new F,new F,new F,new F,new F,new F],en=new F,Vs=new Ti,Li=new F,Ii=new F,Di=new F,Dn=new F,Un=new F,ii=new F,fs=new F,Ws=new F,Xs=new F,si=new F;function yo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){si.fromArray(n,r);const o=s.x*Math.abs(si.x)+s.y*Math.abs(si.y)+s.z*Math.abs(si.z),l=t.dot(si),c=e.dot(si),u=i.dot(si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ff=new Ti,ps=new F,Mo=new F;class Ai{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Ff.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ps,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(Mo)),this.expandByPoint(ps.copy(t.center).sub(Mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new F,So=new F,qs=new F,Nn=new F,Eo=new F,Ys=new F,bo=new F;class Aa{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){So.copy(t).add(e).multiplyScalar(.5),qs.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(So);const r=t.distanceTo(e)*.5,a=-this.direction.dot(qs),o=Nn.dot(this.direction),l=-Nn.dot(qs),c=Nn.lengthSq(),u=Math.abs(1-a*a);let h,f,m,_;if(u>0)if(h=a*l-o,f=a*o-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const v=1/u;h*=v,f*=v,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(So).addScaledVector(qs,f),m}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const i=Sn.dot(this.direction),s=Sn.dot(Sn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(o=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,i,s,r){Eo.subVectors(e,t),Ys.subVectors(i,t),bo.crossVectors(Eo,Ys);let a=this.direction.dot(bo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,t);const l=o*this.direction.dot(Ys.crossVectors(Nn,Ys));if(l<0)return null;const c=o*this.direction.dot(Eo.cross(Nn));if(c<0||l+c>a)return null;const u=-o*Nn.dot(bo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(t,e,i,s,r,a,o,l,c,u,h,f,m,_,v,p){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,u,h,f,m,_,v,p)}set(t,e,i,s,r,a,o,l,c,u,h,f,m,_,v,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,m=a*h,_=o*u,v=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+_*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,_=c*u,v=c*h;e[0]=f+v*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-_,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,_=c*u,v=c*h;e[0]=f-v*o,e[4]=-a*h,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*u,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*u,m=a*h,_=o*u,v=o*h;e[0]=l*u,e[4]=_*c-m,e[8]=f*c+v,e[1]=l*h,e[5]=v*c+f,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=v-f*h,e[8]=_*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*h+_,e[10]=f-v*h}else if(t.order==="XZY"){const f=a*l,m=a*c,_=o*l,v=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+v,e[5]=a*u,e[9]=m*h-_,e[2]=_*h-m,e[6]=o*u,e[10]=v*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Of,t,Bf)}lookAt(t,e,i){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Fn.crossVectors(i,We),Fn.lengthSq()===0&&(Math.abs(i.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Fn.crossVectors(i,We)),Fn.normalize(),$s.crossVectors(We,Fn),s[0]=Fn.x,s[4]=$s.x,s[8]=We.x,s[1]=Fn.y,s[5]=$s.y,s[9]=We.y,s[2]=Fn.z,s[6]=$s.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],_=i[2],v=i[6],p=i[10],d=i[14],M=i[3],x=i[7],E=i[11],L=i[15],C=s[0],P=s[4],k=s[8],S=s[12],T=s[1],X=s[5],Y=s[9],ct=s[13],N=s[2],$=s[6],Z=s[10],J=s[14],H=s[3],it=s[7],rt=s[11],dt=s[15];return r[0]=a*C+o*T+l*N+c*H,r[4]=a*P+o*X+l*$+c*it,r[8]=a*k+o*Y+l*Z+c*rt,r[12]=a*S+o*ct+l*J+c*dt,r[1]=u*C+h*T+f*N+m*H,r[5]=u*P+h*X+f*$+m*it,r[9]=u*k+h*Y+f*Z+m*rt,r[13]=u*S+h*ct+f*J+m*dt,r[2]=_*C+v*T+p*N+d*H,r[6]=_*P+v*X+p*$+d*it,r[10]=_*k+v*Y+p*Z+d*rt,r[14]=_*S+v*ct+p*J+d*dt,r[3]=M*C+x*T+E*N+L*H,r[7]=M*P+x*X+E*$+L*it,r[11]=M*k+x*Y+E*Z+L*rt,r[15]=M*S+x*ct+E*J+L*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],_=t[3],v=t[7],p=t[11],d=t[15];return _*(+r*l*h-s*c*h-r*o*f+i*c*f+s*o*m-i*l*m)+v*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*u-r*l*u)+p*(+e*c*h-e*o*m-r*a*h+i*a*m+r*o*u-i*c*u)+d*(-s*o*u-e*l*h+e*o*f+s*a*h-i*a*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],_=t[12],v=t[13],p=t[14],d=t[15],M=h*p*c-v*f*c+v*l*m-o*p*m-h*l*d+o*f*d,x=_*f*c-u*p*c-_*l*m+a*p*m+u*l*d-a*f*d,E=u*v*c-_*h*c+_*o*m-a*v*m-u*o*d+a*h*d,L=_*h*l-u*v*l-_*o*f+a*v*f+u*o*p-a*h*p,C=e*M+i*x+s*E+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=M*P,t[1]=(v*f*r-h*p*r-v*s*m+i*p*m+h*s*d-i*f*d)*P,t[2]=(o*p*r-v*l*r+v*s*c-i*p*c-o*s*d+i*l*d)*P,t[3]=(h*l*r-o*f*r-h*s*c+i*f*c+o*s*m-i*l*m)*P,t[4]=x*P,t[5]=(u*p*r-_*f*r+_*s*m-e*p*m-u*s*d+e*f*d)*P,t[6]=(_*l*r-a*p*r-_*s*c+e*p*c+a*s*d-e*l*d)*P,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*m+e*l*m)*P,t[8]=E*P,t[9]=(_*h*r-u*v*r-_*i*m+e*v*m+u*i*d-e*h*d)*P,t[10]=(a*v*r-_*o*r+_*i*c-e*v*c-a*i*d+e*o*d)*P,t[11]=(u*o*r-a*h*r-u*i*c+e*h*c+a*i*m-e*o*m)*P,t[12]=L*P,t[13]=(u*v*s-_*h*s+_*i*f-e*v*f-u*i*p+e*h*p)*P,t[14]=(_*o*s-a*v*s-_*i*l+e*v*l+a*i*p-e*o*p)*P,t[15]=(a*h*s-u*o*s+u*i*l-e*h*l-a*i*f+e*o*f)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,h=o+o,f=r*c,m=r*u,_=r*h,v=a*u,p=a*h,d=o*h,M=l*c,x=l*u,E=l*h,L=i.x,C=i.y,P=i.z;return s[0]=(1-(v+d))*L,s[1]=(m+E)*L,s[2]=(_-x)*L,s[3]=0,s[4]=(m-E)*C,s[5]=(1-(f+d))*C,s[6]=(p+M)*C,s[7]=0,s[8]=(_+x)*P,s[9]=(p-M)*P,s[10]=(1-(f+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ui.set(s[0],s[1],s[2]).length();const a=Ui.set(s[4],s[5],s[6]).length(),o=Ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const c=1/r,u=1/a,h=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,e.setFromRotationMatrix(nn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Cn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let m,_;if(o===Cn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Or)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Cn){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(a-r),f=(e+t)*c,m=(i+s)*u;let _,v;if(o===Cn)_=(a+r)*h,v=-2*h;else if(o===Or)_=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ui=new F,nn=new Qt,Of=new F(0,0,0),Bf=new F(1,1,1),Fn=new F,$s=new F,We=new F,Bl=new Qt,zl=new dn;class In{constructor(t=0,e=0,i=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zl.setFromEuler(this),this.setFromQuaternion(zl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Bu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zf=0;const kl=new F,Ni=new dn,En=new Qt,js=new F,ms=new F,kf=new F,Gf=new dn,Gl=new F(1,0,0),Hl=new F(0,1,0),Vl=new F(0,0,1),Hf={type:"added"},Vf={type:"removed"};class ve extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new F,e=new In,i=new dn,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new zt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(Gl,t)}rotateY(t){return this.rotateOnAxis(Hl,t)}rotateZ(t){return this.rotateOnAxis(Vl,t)}translateOnAxis(t,e){return kl.copy(t).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gl,t)}translateY(t){return this.translateOnAxis(Hl,t)}translateZ(t){return this.translateOnAxis(Vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?js.copy(t):js.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ms,js,this.up):En.lookAt(js,ms,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),Ni.setFromRotationMatrix(En),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Hf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,t,kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,Gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ve.DEFAULT_UP=new F(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new F,bn=new F,To=new F,Tn=new F,Fi=new F,Oi=new F,Wl=new F,Ao=new F,wo=new F,Co=new F;let Zs=!1;class Je{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){sn.subVectors(s,e),bn.subVectors(i,e),To.subVectors(t,e);const a=sn.dot(sn),o=sn.dot(bn),l=sn.dot(To),c=bn.dot(bn),u=bn.dot(To),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-o*u)*f,_=(a*u-o*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(t,e,i,s,r,a,o,l){return Zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zs=!0),this.getInterpolation(t,e,i,s,r,a,o,l)}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static isFrontFacing(t,e,i,s){return sn.subVectors(i,e),bn.subVectors(t,e),sn.cross(bn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),sn.cross(bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zs=!0),Je.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;Fi.subVectors(s,i),Oi.subVectors(r,i),Ao.subVectors(t,i);const l=Fi.dot(Ao),c=Oi.dot(Ao);if(l<=0&&c<=0)return e.copy(i);wo.subVectors(t,s);const u=Fi.dot(wo),h=Oi.dot(wo);if(u>=0&&h<=u)return e.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(Fi,a);Co.subVectors(t,r);const m=Fi.dot(Co),_=Oi.dot(Co);if(_>=0&&m<=_)return e.copy(r);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(Oi,o);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return Wl.subVectors(r,s),o=(h-u)/(h-u+(m-_)),e.copy(s).addScaledVector(Wl,o);const d=1/(p+v+f);return a=v*d,o=f*d,e.copy(i).addScaledVector(Fi,a).addScaledVector(Oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function Ro(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Lt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Ta(t,1),e=Ae(e,0,1),i=Ae(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ro(a,r,t+1/3),this.g=Ro(a,r,t),this.b=Ro(a,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=xe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){const i=zu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=_o(t.r),this.g=_o(t.g),this.b=_o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return te.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Ae(Ie.r*255,0,255))*65536+Math.round(Ae(Ie.g*255,0,255))*256+Math.round(Ae(Ie.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ie.copy(this),e);const i=Ie.r,s=Ie.g,r=Ie.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=xe){te.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,i=Ie.g,s=Ie.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(On),this.setHSL(On.h+t,On.s+e,On.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Ks);const i=bs(On.h,Ks.h,e),s=bs(On.s,Ks.s,e),r=bs(On.l,Ks.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new Lt;Lt.NAMES=zu;let Wf=0;class wi extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Ki,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Qo,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(i.blending=this.blending),this.side!==jn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jo&&(i.blendSrc=this.blendSrc),this.blendDst!==Qo&&(i.blendDst=this.blendDst),this.blendEquation!==ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Zn extends wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new F,Js=new pt;class Ce{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ll,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Yi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),i=Fe(i,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ll&&(t.usage=this.usage),t}}class ku extends Ce{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Gu extends Ce{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Zt extends Ce{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Xf=0;const je=new Qt,Po=new ve,Bi=new F,Xe=new Ti,gs=new Ti,be=new F;class _e extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uu(t)?Gu:ku)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,i){return je.makeTranslation(t,e,i),this.applyMatrix4(je),this}scale(t,e,i){return je.makeScale(t,e,i),this.applyMatrix4(je),this}lookAt(t){return Po.lookAt(t),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Zt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){const i=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(Xe.min,gs.min),Xe.expandByPoint(be),be.addVectors(Xe.max,gs.max),Xe.expandByPoint(be)):(Xe.expandByPoint(gs.min),Xe.expandByPoint(gs.max))}Xe.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)be.fromBufferAttribute(o,c),l&&(Bi.fromBufferAttribute(t,c),be.add(Bi)),s=Math.max(s,i.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ce(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new F,u[T]=new F;const h=new F,f=new F,m=new F,_=new pt,v=new pt,p=new pt,d=new F,M=new F;function x(T,X,Y){h.fromArray(s,T*3),f.fromArray(s,X*3),m.fromArray(s,Y*3),_.fromArray(a,T*2),v.fromArray(a,X*2),p.fromArray(a,Y*2),f.sub(h),m.sub(h),v.sub(_),p.sub(_);const ct=1/(v.x*p.y-p.x*v.y);isFinite(ct)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(ct),M.copy(m).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(ct),c[T].add(d),c[X].add(d),c[Y].add(d),u[T].add(M),u[X].add(M),u[Y].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let T=0,X=E.length;T<X;++T){const Y=E[T],ct=Y.start,N=Y.count;for(let $=ct,Z=ct+N;$<Z;$+=3)x(i[$+0],i[$+1],i[$+2])}const L=new F,C=new F,P=new F,k=new F;function S(T){P.fromArray(r,T*3),k.copy(P);const X=c[T];L.copy(X),L.sub(P.multiplyScalar(P.dot(X))).normalize(),C.crossVectors(k,X);const ct=C.dot(u[T])<0?-1:1;l[T*4]=L.x,l[T*4+1]=L.y,l[T*4+2]=L.z,l[T*4+3]=ct}for(let T=0,X=E.length;T<X;++T){const Y=E[T],ct=Y.start,N=Y.count;for(let $=ct,Z=ct+N;$<Z;$+=3)S(i[$+0]),S(i[$+1]),S(i[$+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ce(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,h=new F;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let d=0;d<u;d++)f[_++]=c[m++]}return new Ce(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,i);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xl=new Qt,ri=new Aa,Qs=new Ai,ql=new F,zi=new F,ki=new F,Gi=new F,Lo=new F,tr=new F,er=new pt,nr=new pt,ir=new pt,Yl=new F,$l=new F,jl=new F,sr=new F,rr=new F;class ee extends ve{constructor(t=new _e,e=new Zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(Lo.fromBufferAttribute(h,t),a?tr.addScaledVector(Lo,u):tr.addScaledVector(Lo.sub(e),u))}e.add(tr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(r),ri.copy(t.ray).recast(t.near),!(Qs.containsPoint(ri.origin)===!1&&(ri.intersectSphere(Qs,ql)===null||ri.origin.distanceToSquared(ql)>(t.far-t.near)**2))&&(Xl.copy(r).invert(),ri.copy(t.ray).applyMatrix4(Xl),!(i.boundingBox!==null&&ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ri)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=a[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=M,L=x;E<L;E+=3){const C=o.getX(E),P=o.getX(E+1),k=o.getX(E+2);s=or(this,d,t,i,c,u,h,C,P,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const M=o.getX(p),x=o.getX(p+1),E=o.getX(p+2);s=or(this,a,t,i,c,u,h,M,x,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=a[p.materialIndex],M=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=M,L=x;E<L;E+=3){const C=E,P=E+1,k=E+2;s=or(this,d,t,i,c,u,h,C,P,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const M=p,x=p+1,E=p+2;s=or(this,a,t,i,c,u,h,M,x,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function qf(n,t,e,i,s,r,a,o){let l;if(t.side===He?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===jn,o),l===null)return null;rr.copy(o),rr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(rr);return c<e.near||c>e.far?null:{distance:c,point:rr.clone(),object:n}}function or(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,zi),n.getVertexPosition(l,ki),n.getVertexPosition(c,Gi);const u=qf(n,t,e,i,zi,ki,Gi,sr);if(u){s&&(er.fromBufferAttribute(s,o),nr.fromBufferAttribute(s,l),ir.fromBufferAttribute(s,c),u.uv=Je.getInterpolation(sr,zi,ki,Gi,er,nr,ir,new pt)),r&&(er.fromBufferAttribute(r,o),nr.fromBufferAttribute(r,l),ir.fromBufferAttribute(r,c),u.uv1=Je.getInterpolation(sr,zi,ki,Gi,er,nr,ir,new pt),u.uv2=u.uv1),a&&(Yl.fromBufferAttribute(a,o),$l.fromBufferAttribute(a,l),jl.fromBufferAttribute(a,c),u.normal=Je.getInterpolation(sr,zi,ki,Gi,Yl,$l,jl,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};Je.getNormal(zi,ki,Gi,h.normal),u.face=h}return u}class Kn extends _e{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(h,2));function _(v,p,d,M,x,E,L,C,P,k,S){const T=E/P,X=L/k,Y=E/2,ct=L/2,N=C/2,$=P+1,Z=k+1;let J=0,H=0;const it=new F;for(let rt=0;rt<Z;rt++){const dt=rt*X-ct;for(let xt=0;xt<$;xt++){const st=xt*T-Y;it[v]=st*M,it[p]=dt*x,it[d]=N,c.push(it.x,it.y,it.z),it[v]=0,it[p]=0,it[d]=C>0?1:-1,u.push(it.x,it.y,it.z),h.push(xt/P),h.push(1-rt/k),J+=1}}for(let rt=0;rt<k;rt++)for(let dt=0;dt<P;dt++){const xt=f+dt+$*rt,st=f+dt+$*(rt+1),D=f+(dt+1)+$*(rt+1),I=f+(dt+1)+$*rt;l.push(xt,st,I),l.push(st,D,I),H+=6}o.addGroup(m,H,S),m+=H,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ss(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Oe(n){const t={};for(let e=0;e<n.length;e++){const i=ss(n[e]);for(const s in i)t[s]=i[s]}return t}function Yf(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Hu(n){return n.getRenderTarget()===null?n.outputColorSpace:te.workingColorSpace}const $f={clone:ss,merge:Oe};var jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jf,this.fragmentShader=Zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=Yf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Vu extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Qe extends Vu{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ji*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Is*2*Math.atan(Math.tan(Ji*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ji*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Vi=1;class Kf extends ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(Hi,Vi,t,e);s.layers=this.layers,this.add(s);const r=new Qe(Hi,Vi,t,e);r.layers=this.layers,this.add(r);const a=new Qe(Hi,Vi,t,e);a.layers=this.layers,this.add(a);const o=new Qe(Hi,Vi,t,e);o.layers=this.layers,this.add(o);const l=new Qe(Hi,Vi,t,e);l.layers=this.layers,this.add(l);const c=new Qe(Hi,Vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Or)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,f,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Wu extends qe{constructor(t,e,i,s,r,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:es,super(t,e,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jf extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(Ts("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===_i?xe:tn),this.texture=new Wu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kn(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:Xn});r.uniforms.tEquirect.value=e;const a=new ee(s,r),o=e.minFilter;return e.minFilter===Ps&&(e.minFilter=Ke),new Kf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const Io=new F,Qf=new F,tp=new zt;class li{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Io.subVectors(i,e).cross(Qf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Io),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||tp.getNormalMatrix(t),s=this.coplanarPoint(Io).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new Ai,ar=new F;class wa{constructor(t=new li,e=new li,i=new li,s=new li,r=new li,a=new li){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Cn){const i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],m=s[8],_=s[9],v=s[10],p=s[11],d=s[12],M=s[13],x=s[14],E=s[15];if(i[0].setComponents(l-r,f-c,p-m,E-d).normalize(),i[1].setComponents(l+r,f+c,p+m,E+d).normalize(),i[2].setComponents(l+a,f+u,p+_,E+M).normalize(),i[3].setComponents(l-a,f-u,p-_,E-M).normalize(),i[4].setComponents(l-o,f-h,p-v,E-x).normalize(),e===Cn)i[5].setComponents(l+o,f+h,p+v,E+x).normalize();else if(e===Or)i[5].setComponents(o,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ar.x=s.normal.x>0?t.max.x:t.min.x,ar.y=s.normal.y>0?t.max.y:t.min.y,ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xu(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ep(n,t){const e=t.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,f=c.usage,m=h.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,h,f),c.onUploadCallback();let v;if(h instanceof Float32Array)v=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=n.SHORT;else if(h instanceof Uint32Array)v=n.UNSIGNED_INT;else if(h instanceof Int32Array)v=n.INT;else if(h instanceof Int8Array)v=n.BYTE;else if(h instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,h){const f=u.array,m=u._updateRange,_=u.updateRanges;if(n.bindBuffer(h,c),m.count===-1&&_.length===0&&n.bufferSubData(h,0,f),_.length!==0){for(let v=0,p=_.length;v<p;v++){const d=_[v];e?n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:a,remove:o,update:l}}class Ci extends _e{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=t/o,f=e/l,m=[],_=[],v=[],p=[];for(let d=0;d<u;d++){const M=d*f-a;for(let x=0;x<c;x++){const E=x*h-r;_.push(E,-M,0),v.push(0,0,1),p.push(x/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const x=M+c*d,E=M+c*(d+1),L=M+1+c*(d+1),C=M+1+c*d;m.push(x,E,C),m.push(E,L,C)}this.setIndex(m),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.width,t.height,t.widthSegments,t.heightSegments)}}var np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ip=`#ifdef USE_ALPHAHASH
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
#endif`,sp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,op=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lp=`#ifdef USE_AOMAP
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
#endif`,cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
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
#endif`,hp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,dp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mp=`#ifdef USE_IRIDESCENCE
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
#endif`,gp=`#ifdef USE_BUMPMAP
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tp=`#define PI 3.141592653589793
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
} // validated`,Ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ip="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dp=`
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
}`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
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
}`,Wp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
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
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tm=`PhysicalMaterial material;
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
#endif`,em=`struct PhysicalMaterial {
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
}`,nm=`
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
#endif`,im=`#if defined( RE_IndirectDiffuse )
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
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,cm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dm=`#if defined( USE_POINTS_UV )
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
#endif`,fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gm=`#ifdef USE_MORPHNORMALS
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
#endif`,_m=`#ifdef USE_MORPHTARGETS
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
#endif`,xm=`#ifdef USE_MORPHTARGETS
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
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bm=`#ifdef USE_NORMALMAP
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
#endif`,Tm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Um=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,km=`float getShadowMask() {
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
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
#endif`,Zm=`#ifdef USE_TRANSMISSION
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ng=`uniform sampler2D t2D;
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`#include <common>
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
}`,lg=`#if DEPTH_PACKING == 3200
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
}`,cg=`#define DISTANCE
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
}`,ug=`#define DISTANCE
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
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`uniform float scale;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,gg=`uniform vec3 diffuse;
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
}`,_g=`#define LAMBERT
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
}`,xg=`#define LAMBERT
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
}`,vg=`#define MATCAP
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
}`,yg=`#define MATCAP
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
}`,Mg=`#define NORMAL
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
}`,Sg=`#define NORMAL
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
}`,Eg=`#define PHONG
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
}`,bg=`#define PHONG
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
}`,Tg=`#define STANDARD
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
}`,Ag=`#define STANDARD
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
}`,wg=`#define TOON
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
}`,Cg=`#define TOON
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
}`,Rg=`uniform float size;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Ig=`uniform vec3 color;
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
}`,Dg=`uniform float rotation;
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
}`,Ug=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:np,alphahash_pars_fragment:ip,alphamap_fragment:sp,alphamap_pars_fragment:rp,alphatest_fragment:op,alphatest_pars_fragment:ap,aomap_fragment:lp,aomap_pars_fragment:cp,batching_pars_vertex:up,batching_vertex:hp,begin_vertex:dp,beginnormal_vertex:fp,bsdfs:pp,iridescence_fragment:mp,bumpmap_pars_fragment:gp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:xp,clipping_planes_pars_vertex:vp,clipping_planes_vertex:yp,color_fragment:Mp,color_pars_fragment:Sp,color_pars_vertex:Ep,color_vertex:bp,common:Tp,cube_uv_reflection_fragment:Ap,defaultnormal_vertex:wp,displacementmap_pars_vertex:Cp,displacementmap_vertex:Rp,emissivemap_fragment:Pp,emissivemap_pars_fragment:Lp,colorspace_fragment:Ip,colorspace_pars_fragment:Dp,envmap_fragment:Up,envmap_common_pars_fragment:Np,envmap_pars_fragment:Fp,envmap_pars_vertex:Op,envmap_physical_pars_fragment:jp,envmap_vertex:Bp,fog_vertex:zp,fog_pars_vertex:kp,fog_fragment:Gp,fog_pars_fragment:Hp,gradientmap_pars_fragment:Vp,lightmap_fragment:Wp,lightmap_pars_fragment:Xp,lights_lambert_fragment:qp,lights_lambert_pars_fragment:Yp,lights_pars_begin:$p,lights_toon_fragment:Zp,lights_toon_pars_fragment:Kp,lights_phong_fragment:Jp,lights_phong_pars_fragment:Qp,lights_physical_fragment:tm,lights_physical_pars_fragment:em,lights_fragment_begin:nm,lights_fragment_maps:im,lights_fragment_end:sm,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:om,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:lm,map_fragment:cm,map_pars_fragment:um,map_particle_fragment:hm,map_particle_pars_fragment:dm,metalnessmap_fragment:fm,metalnessmap_pars_fragment:pm,morphcolor_vertex:mm,morphnormal_vertex:gm,morphtarget_pars_vertex:_m,morphtarget_vertex:xm,normal_fragment_begin:vm,normal_fragment_maps:ym,normal_pars_fragment:Mm,normal_pars_vertex:Sm,normal_vertex:Em,normalmap_pars_fragment:bm,clearcoat_normal_fragment_begin:Tm,clearcoat_normal_fragment_maps:Am,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Cm,opaque_fragment:Rm,packing:Pm,premultiplied_alpha_fragment:Lm,project_vertex:Im,dithering_fragment:Dm,dithering_pars_fragment:Um,roughnessmap_fragment:Nm,roughnessmap_pars_fragment:Fm,shadowmap_pars_fragment:Om,shadowmap_pars_vertex:Bm,shadowmap_vertex:zm,shadowmask_pars_fragment:km,skinbase_vertex:Gm,skinning_pars_vertex:Hm,skinning_vertex:Vm,skinnormal_vertex:Wm,specularmap_fragment:Xm,specularmap_pars_fragment:qm,tonemapping_fragment:Ym,tonemapping_pars_fragment:$m,transmission_fragment:jm,transmission_pars_fragment:Zm,uv_pars_fragment:Km,uv_pars_vertex:Jm,uv_vertex:Qm,worldpos_vertex:tg,background_vert:eg,background_frag:ng,backgroundCube_vert:ig,backgroundCube_frag:sg,cube_vert:rg,cube_frag:og,depth_vert:ag,depth_frag:lg,distanceRGBA_vert:cg,distanceRGBA_frag:ug,equirect_vert:hg,equirect_frag:dg,linedashed_vert:fg,linedashed_frag:pg,meshbasic_vert:mg,meshbasic_frag:gg,meshlambert_vert:_g,meshlambert_frag:xg,meshmatcap_vert:vg,meshmatcap_frag:yg,meshnormal_vert:Mg,meshnormal_frag:Sg,meshphong_vert:Eg,meshphong_frag:bg,meshphysical_vert:Tg,meshphysical_frag:Ag,meshtoon_vert:wg,meshtoon_frag:Cg,points_vert:Rg,points_frag:Pg,shadow_vert:Lg,shadow_frag:Ig,sprite_vert:Dg,sprite_frag:Ug},Mt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},mn={basic:{uniforms:Oe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Oe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Oe([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Oe([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Oe([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Oe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Oe([Mt.points,Mt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Oe([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Oe([Mt.common,Mt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Oe([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Oe([Mt.sprite,Mt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Oe([Mt.common,Mt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Oe([Mt.lights,Mt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};mn.physical={uniforms:Oe([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const lr={r:0,b:0,g:0};function Ng(n,t,e,i,s,r,a){const o=new Lt(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function _(p,d){let M=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?v(o,l):x&&x.isColor&&(v(x,1),M=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===$r)?(u===void 0&&(u=new ee(new Kn(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:ss(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=te.getTransfer(x.colorSpace)!==oe,(h!==x||f!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ee(new Ci(2,2),new Jn({name:"BackgroundMaterial",uniforms:ss(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=te.getTransfer(x.colorSpace)!==oe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,d){p.getRGB(lr,Hu(n)),i.buffers.color.setClear(lr.r,lr.g,lr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:_}}function Fg(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null);let c=l,u=!1;function h(N,$,Z,J,H){let it=!1;if(a){const rt=v(J,Z,$);c!==rt&&(c=rt,m(c.object)),it=d(N,J,Z,H),it&&M(N,J,Z,H)}else{const rt=$.wireframe===!0;(c.geometry!==J.id||c.program!==Z.id||c.wireframe!==rt)&&(c.geometry=J.id,c.program=Z.id,c.wireframe=rt,it=!0)}H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(it||u)&&(u=!1,k(N,$,Z,J),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(N){return i.isWebGL2?n.bindVertexArray(N):r.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?n.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function v(N,$,Z){const J=Z.wireframe===!0;let H=o[N.id];H===void 0&&(H={},o[N.id]=H);let it=H[$.id];it===void 0&&(it={},H[$.id]=it);let rt=it[J];return rt===void 0&&(rt=p(f()),it[J]=rt),rt}function p(N){const $=[],Z=[],J=[];for(let H=0;H<s;H++)$[H]=0,Z[H]=0,J[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:Z,attributeDivisors:J,object:N,attributes:{},index:null}}function d(N,$,Z,J){const H=c.attributes,it=$.attributes;let rt=0;const dt=Z.getAttributes();for(const xt in dt)if(dt[xt].location>=0){const D=H[xt];let I=it[xt];if(I===void 0&&(xt==="instanceMatrix"&&N.instanceMatrix&&(I=N.instanceMatrix),xt==="instanceColor"&&N.instanceColor&&(I=N.instanceColor)),D===void 0||D.attribute!==I||I&&D.data!==I.data)return!0;rt++}return c.attributesNum!==rt||c.index!==J}function M(N,$,Z,J){const H={},it=$.attributes;let rt=0;const dt=Z.getAttributes();for(const xt in dt)if(dt[xt].location>=0){let D=it[xt];D===void 0&&(xt==="instanceMatrix"&&N.instanceMatrix&&(D=N.instanceMatrix),xt==="instanceColor"&&N.instanceColor&&(D=N.instanceColor));const I={};I.attribute=D,D&&D.data&&(I.data=D.data),H[xt]=I,rt++}c.attributes=H,c.attributesNum=rt,c.index=J}function x(){const N=c.newAttributes;for(let $=0,Z=N.length;$<Z;$++)N[$]=0}function E(N){L(N,0)}function L(N,$){const Z=c.newAttributes,J=c.enabledAttributes,H=c.attributeDivisors;Z[N]=1,J[N]===0&&(n.enableVertexAttribArray(N),J[N]=1),H[N]!==$&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,$),H[N]=$)}function C(){const N=c.newAttributes,$=c.enabledAttributes;for(let Z=0,J=$.length;Z<J;Z++)$[Z]!==N[Z]&&(n.disableVertexAttribArray(Z),$[Z]=0)}function P(N,$,Z,J,H,it,rt){rt===!0?n.vertexAttribIPointer(N,$,Z,H,it):n.vertexAttribPointer(N,$,Z,J,H,it)}function k(N,$,Z,J){if(i.isWebGL2===!1&&(N.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const H=J.attributes,it=Z.getAttributes(),rt=$.defaultAttributeValues;for(const dt in it){const xt=it[dt];if(xt.location>=0){let st=H[dt];if(st===void 0&&(dt==="instanceMatrix"&&N.instanceMatrix&&(st=N.instanceMatrix),dt==="instanceColor"&&N.instanceColor&&(st=N.instanceColor)),st!==void 0){const D=st.normalized,I=st.itemSize,w=e.get(st);if(w===void 0)continue;const b=w.buffer,K=w.type,at=w.bytesPerElement,V=i.isWebGL2===!0&&(K===n.INT||K===n.UNSIGNED_INT||st.gpuType===bu);if(st.isInterleavedBufferAttribute){const lt=st.data,R=lt.stride,Q=st.offset;if(lt.isInstancedInterleavedBuffer){for(let O=0;O<xt.locationSize;O++)L(xt.location+O,lt.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let O=0;O<xt.locationSize;O++)E(xt.location+O);n.bindBuffer(n.ARRAY_BUFFER,b);for(let O=0;O<xt.locationSize;O++)P(xt.location+O,I/xt.locationSize,K,D,R*at,(Q+I/xt.locationSize*O)*at,V)}else{if(st.isInstancedBufferAttribute){for(let lt=0;lt<xt.locationSize;lt++)L(xt.location+lt,st.meshPerAttribute);N.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let lt=0;lt<xt.locationSize;lt++)E(xt.location+lt);n.bindBuffer(n.ARRAY_BUFFER,b);for(let lt=0;lt<xt.locationSize;lt++)P(xt.location+lt,I/xt.locationSize,K,D,I*at,I/xt.locationSize*lt*at,V)}}else if(rt!==void 0){const D=rt[dt];if(D!==void 0)switch(D.length){case 2:n.vertexAttrib2fv(xt.location,D);break;case 3:n.vertexAttrib3fv(xt.location,D);break;case 4:n.vertexAttrib4fv(xt.location,D);break;default:n.vertexAttrib1fv(xt.location,D)}}}}C()}function S(){Y();for(const N in o){const $=o[N];for(const Z in $){const J=$[Z];for(const H in J)_(J[H].object),delete J[H];delete $[Z]}delete o[N]}}function T(N){if(o[N.id]===void 0)return;const $=o[N.id];for(const Z in $){const J=$[Z];for(const H in J)_(J[H].object),delete J[H];delete $[Z]}delete o[N.id]}function X(N){for(const $ in o){const Z=o[$];if(Z[N.id]===void 0)continue;const J=Z[N.id];for(const H in J)_(J[H].object),delete J[H];delete Z[N.id]}}function Y(){ct(),u=!0,c!==l&&(c=l,m(c.object))}function ct(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:ct,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:X,initAttributes:x,enableAttribute:E,disableUnusedAttributes:C}}function Og(n,t,e,i){const s=i.isWebGL2;let r;function a(u){r=u}function o(u,h){n.drawArrays(r,u,h),e.update(h,r,1)}function l(u,h,f){if(f===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,u,h,f),e.update(h,r,f)}function c(u,h,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(u[_],h[_]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=h[v];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Bg(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=a||t.has("OES_texture_float"),L=x&&E,C=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:L,maxSamples:C}}function zg(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new li,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const M=r?0:i,x=M*4;let E=d.clippingState||null;l.value=E,E=u(_,f,x,m);for(let L=0;L!==x;++L)E[L]=e[L];d.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,m,_){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const d=m+v*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let x=0,E=m;x!==v;++x,E+=4)a.copy(h[x]).applyMatrix4(M,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function kg(n){let t=new WeakMap;function e(a,o){return o===ta?a.mapping=es:o===ea&&(a.mapping=ns),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ta||o===ea)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Jf(l.height/2);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class qu extends Vu{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $i=4,Zl=[.125,.215,.35,.446,.526,.582],hi=20,Do=new qu,Kl=new Lt;let Uo=null,No=0,Fo=0;const ci=(1+Math.sqrt(5))/2,Wi=1/ci,Jl=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ci,Wi),new F(0,ci,-Wi),new F(Wi,0,ci),new F(-Wi,0,ci),new F(ci,Wi,0),new F(-ci,Wi,0)];class Ql{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uo,No,Fo),t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uo=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Fo=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Ls,format:cn,colorSpace:Rn,depthBuffer:!1},s=tc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gg(r)),this._blurMaterial=Hg(r,t,e)}return s}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,Do)}_sceneToCubeUV(t,e,i,s){const o=new Qe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Kl),u.toneMapping=qn,u.autoClear=!1;const m=new Zn({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),_=new ee(new Kn,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(Kl),v=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):M===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const x=this._cubeSize;cr(s,M*x,d>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===es||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ee(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;cr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Do)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Jl[(s-1)%Jl.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ee(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*hi-1),v=r/_,p=isFinite(r)?1+Math.floor(u*v):hi;p>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${hi}`);const d=[];let M=0;for(let P=0;P<hi;++P){const k=P/v,S=Math.exp(-k*k/2);d.push(S),P===0?M+=S:P<p&&(M+=2*S)}for(let P=0;P<d.length;P++)d[P]=d[P]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const E=this._sizeLods[s],L=3*E*(s>x-$i?s-x+$i:0),C=4*(this._cubeSize-E);cr(e,L,C,3*E,2*E),l.setRenderTarget(e),l.render(h,Do)}}function Gg(n){const t=[],e=[],i=[];let s=n;const r=n-$i+1+Zl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>n-$i?l=Zl[a-n+$i-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,v=3,p=2,d=1,M=new Float32Array(v*_*m),x=new Float32Array(p*_*m),E=new Float32Array(d*_*m);for(let C=0;C<m;C++){const P=C%3*2/3-1,k=C>2?0:-1,S=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];M.set(S,v*_*C),x.set(f,p*_*C);const T=[C,C,C,C,C,C];E.set(T,d*_*C)}const L=new _e;L.setAttribute("position",new Ce(M,v)),L.setAttribute("uv",new Ce(x,p)),L.setAttribute("faceIndex",new Ce(E,d)),t.push(L),s>$i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function tc(n,t,e){const i=new Mi(n,t,e);return i.texture.mapping=$r,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Hg(n,t,e){const i=new Float32Array(hi),s=new F(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ec(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

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
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function nc(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ca(){return`

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
	`}function Vg(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ta||l===ea,u=l===es||l===ns;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new Ql(n)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new Ql(n));const f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Wg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Xg(n,t,e,i){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let p=0,d=v.length;p<d;p++)t.remove(v[p])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,d=v.length;p<d;p++)t.update(v[p],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let v=0;if(m!==null){const M=m.array;v=m.version;for(let x=0,E=M.length;x<E;x+=3){const L=M[x+0],C=M[x+1],P=M[x+2];f.push(L,C,C,P,P,L)}}else if(_!==void 0){const M=_.array;v=_.version;for(let x=0,E=M.length/3-1;x<E;x+=3){const L=x+0,C=x+1,P=x+2;f.push(L,C,C,P,P,L)}}else return;const p=new(Uu(f)?Gu:ku)(f,1);p.version=v;const d=r.get(h);d&&t.remove(d),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function qg(n,t,e,i){const s=i.isWebGL2;let r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,_){n.drawElements(r,_,o,m*l),e.update(_,r,1)}function h(m,_,v){if(v===0)return;let p,d;if(s)p=n,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,_,o,m*l,v),e.update(_,r,v)}function f(m,_,v){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<v;d++)this.render(m[d]/l,_[d]);else{p.multiDrawElementsWEBGL(r,_,0,o,m,0,v);let d=0;for(let M=0;M<v;M++)d+=_[M];e.update(d,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Yg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function $g(n,t){return n[0]-t[0]}function jg(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Zg(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,a=new Te,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let v=r.get(u);if(v===void 0||v.count!==_){let N=function(){Y.dispose(),r.delete(u),u.removeEventListener("dispose",N)};v!==void 0&&v.texture.dispose();const M=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let k=0;M===!0&&(k=1),x===!0&&(k=2),E===!0&&(k=3);let S=u.attributes.position.count*k,T=1;S>t.maxTextureSize&&(T=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const X=new Float32Array(S*T*4*_),Y=new Ou(X,S,T,_);Y.type=Vn,Y.needsUpdate=!0;const ct=k*4;for(let $=0;$<_;$++){const Z=L[$],J=C[$],H=P[$],it=S*T*4*$;for(let rt=0;rt<Z.count;rt++){const dt=rt*ct;M===!0&&(a.fromBufferAttribute(Z,rt),X[it+dt+0]=a.x,X[it+dt+1]=a.y,X[it+dt+2]=a.z,X[it+dt+3]=0),x===!0&&(a.fromBufferAttribute(J,rt),X[it+dt+4]=a.x,X[it+dt+5]=a.y,X[it+dt+6]=a.z,X[it+dt+7]=0),E===!0&&(a.fromBufferAttribute(H,rt),X[it+dt+8]=a.x,X[it+dt+9]=a.y,X[it+dt+10]=a.z,X[it+dt+11]=H.itemSize===4?a.w:1)}}v={count:_,texture:Y,size:new pt(S,T)},r.set(u,v),u.addEventListener("dispose",N)}let p=0;for(let M=0;M<f.length;M++)p+=f[M];const d=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(n,"morphTargetBaseInfluence",d),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",v.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const m=f===void 0?0:f.length;let _=i[u.id];if(_===void 0||_.length!==m){_=[];for(let x=0;x<m;x++)_[x]=[x,0];i[u.id]=_}for(let x=0;x<m;x++){const E=_[x];E[0]=x,E[1]=f[x]}_.sort(jg);for(let x=0;x<8;x++)x<m&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort($g);const v=u.morphAttributes.position,p=u.morphAttributes.normal;let d=0;for(let x=0;x<8;x++){const E=o[x],L=E[0],C=E[1];L!==Number.MAX_SAFE_INTEGER&&C?(v&&u.getAttribute("morphTarget"+x)!==v[L]&&u.setAttribute("morphTarget"+x,v[L]),p&&u.getAttribute("morphNormal"+x)!==p[L]&&u.setAttribute("morphNormal"+x,p[L]),s[x]=C,d+=C):(v&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),s[x]=0)}const M=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Kg(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Yu extends qe{constructor(t,e,i,s,r,a,o,l,c,u){if(u=u!==void 0?u:gi,u!==gi&&u!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===gi&&(i=Hn),i===void 0&&u===is&&(i=mi),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Be,this.minFilter=l!==void 0?l:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $u=new qe,ju=new Yu(1,1);ju.compareFunction=Du;const Zu=new Ou,Ku=new Nf,Ju=new Wu,ic=[],sc=[],rc=new Float32Array(16),oc=new Float32Array(9),ac=new Float32Array(4);function cs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=ic[s];if(r===void 0&&(r=new Float32Array(s),ic[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Me(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Zr(n,t){let e=sc[t];e===void 0&&(e=new Int32Array(t),sc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Jg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Qg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2fv(this.addr,t),Me(e,t)}}function t0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;n.uniform3fv(this.addr,t),Me(e,t)}}function e0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4fv(this.addr,t),Me(e,t)}}function n0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,i))return;ac.set(i),n.uniformMatrix2fv(this.addr,!1,ac),Me(e,i)}}function i0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,i))return;oc.set(i),n.uniformMatrix3fv(this.addr,!1,oc),Me(e,i)}}function s0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,i))return;rc.set(i),n.uniformMatrix4fv(this.addr,!1,rc),Me(e,i)}}function r0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function o0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2iv(this.addr,t),Me(e,t)}}function a0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3iv(this.addr,t),Me(e,t)}}function l0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4iv(this.addr,t),Me(e,t)}}function c0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function u0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;n.uniform2uiv(this.addr,t),Me(e,t)}}function h0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;n.uniform3uiv(this.addr,t),Me(e,t)}}function d0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;n.uniform4uiv(this.addr,t),Me(e,t)}}function f0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?ju:$u;e.setTexture2D(t||r,s)}function p0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ku,s)}function m0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ju,s)}function g0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Zu,s)}function _0(n){switch(n){case 5126:return Jg;case 35664:return Qg;case 35665:return t0;case 35666:return e0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return o0;case 35668:case 35672:return a0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return u0;case 36295:return h0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}function x0(n,t){n.uniform1fv(this.addr,t)}function v0(n,t){const e=cs(t,this.size,2);n.uniform2fv(this.addr,e)}function y0(n,t){const e=cs(t,this.size,3);n.uniform3fv(this.addr,e)}function M0(n,t){const e=cs(t,this.size,4);n.uniform4fv(this.addr,e)}function S0(n,t){const e=cs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function E0(n,t){const e=cs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function b0(n,t){const e=cs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function T0(n,t){n.uniform1iv(this.addr,t)}function A0(n,t){n.uniform2iv(this.addr,t)}function w0(n,t){n.uniform3iv(this.addr,t)}function C0(n,t){n.uniform4iv(this.addr,t)}function R0(n,t){n.uniform1uiv(this.addr,t)}function P0(n,t){n.uniform2uiv(this.addr,t)}function L0(n,t){n.uniform3uiv(this.addr,t)}function I0(n,t){n.uniform4uiv(this.addr,t)}function D0(n,t,e){const i=this.cache,s=t.length,r=Zr(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||$u,r[a])}function U0(n,t,e){const i=this.cache,s=t.length,r=Zr(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ku,r[a])}function N0(n,t,e){const i=this.cache,s=t.length,r=Zr(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ju,r[a])}function F0(n,t,e){const i=this.cache,s=t.length,r=Zr(e,s);ye(i,r)||(n.uniform1iv(this.addr,r),Me(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Zu,r[a])}function O0(n){switch(n){case 5126:return x0;case 35664:return v0;case 35665:return y0;case 35666:return M0;case 35674:return S0;case 35675:return E0;case 35676:return b0;case 5124:case 35670:return T0;case 35667:case 35671:return A0;case 35668:case 35672:return w0;case 35669:case 35673:return C0;case 5125:return R0;case 36294:return P0;case 36295:return L0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return N0;case 36289:case 36303:case 36311:case 36292:return F0}}class B0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=_0(e.type)}}class z0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O0(e.type)}}class k0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function lc(n,t){n.seq.push(t),n.map[t.id]=t}function G0(n,t,e){const i=n.name,s=i.length;for(Oo.lastIndex=0;;){const r=Oo.exec(i),a=Oo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){lc(e,c===void 0?new B0(o,n,t):new z0(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new k0(o),lc(e,h)),e=h}}}class wr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);G0(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function cc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const H0=37297;let V0=0;function W0(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function X0(n){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(n);let i;switch(t===e?i="":t===Fr&&e===Nr?i="LinearDisplayP3ToLinearSRGB":t===Nr&&e===Fr&&(i="LinearSRGBToLinearDisplayP3"),n){case Rn:case jr:return[i,"LinearTransferOETF"];case xe:case ba:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function uc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+W0(n.getShaderSource(t),a)}else return s}function q0(n,t){const e=X0(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Y0(n,t){let e;switch(t){case Wd:e="Linear";break;case Xd:e="Reinhard";break;case qd:e="OptimizedCineon";break;case Yd:e="ACESFilmic";break;case jd:e="AgX";break;case $d:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ji).join(`
`)}function j0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ji).join(`
`)}function Z0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function K0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ji(n){return n!==""}function hc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const J0=/^[ \t]*#include +<([\w\d./]+)>/gm;function oa(n){return n.replace(J0,t_)}const Q0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function t_(n,t){let e=Wt[t];if(e===void 0){const i=Q0.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return oa(e)}const e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fc(n){return n.replace(e_,n_)}function n_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pc(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function i_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Su?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===xd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function s_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case es:case ns:t="ENVMAP_TYPE_CUBE";break;case $r:t="ENVMAP_TYPE_CUBE_UV";break}return t}function r_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function o_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sa:t="ENVMAP_BLENDING_MULTIPLY";break;case Hd:t="ENVMAP_BLENDING_MIX";break;case Vd:t="ENVMAP_BLENDING_ADD";break}return t}function a_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function l_(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=i_(e),c=s_(e),u=r_(e),h=o_(e),f=a_(e),m=e.isWebGL2?"":$0(e),_=j0(e),v=Z0(r),p=s.createProgram();let d,M,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ji).join(`
`),d.length>0&&(d+=`
`),M=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ji).join(`
`),M.length>0&&(M+=`
`)):(d=[pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),M=[m,pc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==qn?Y0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,q0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ji).join(`
`)),a=oa(a),a=hc(a,e),a=dc(a,e),o=oa(o),o=hc(o,e),o=dc(o,e),a=fc(a),o=fc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const E=x+d+a,L=x+M+o,C=cc(s,s.VERTEX_SHADER,E),P=cc(s,s.FRAGMENT_SHADER,L);s.attachShader(p,C),s.attachShader(p,P),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function k(Y){if(n.debug.checkShaderErrors){const ct=s.getProgramInfoLog(p).trim(),N=s.getShaderInfoLog(C).trim(),$=s.getShaderInfoLog(P).trim();let Z=!0,J=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,C,P);else{const H=uc(s,C,"vertex"),it=uc(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+ct+`
`+H+`
`+it)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(N===""||$==="")&&(J=!1);J&&(Y.diagnostics={runnable:Z,programLog:ct,vertexShader:{log:N,prefix:d},fragmentShader:{log:$,prefix:M}})}s.deleteShader(C),s.deleteShader(P),S=new wr(s,p),T=K0(s,p)}let S;this.getUniforms=function(){return S===void 0&&k(this),S};let T;this.getAttributes=function(){return T===void 0&&k(this),T};let X=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=s.getProgramParameter(p,H0)),X},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=V0++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=P,this}let c_=0;class u_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new h_(t),e.set(t,i)),i}}class h_{constructor(t){this.id=c_++,this.code=t,this.usedTimes=0}}function d_(n,t,e,i,s,r,a){const o=new Bu,l=new u_,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function p(S,T,X,Y,ct){const N=Y.fog,$=ct.geometry,Z=S.isMeshStandardMaterial?Y.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||Z),H=J&&J.mapping===$r?J.image.height:null,it=_[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const rt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,dt=rt!==void 0?rt.length:0;let xt=0;$.morphAttributes.position!==void 0&&(xt=1),$.morphAttributes.normal!==void 0&&(xt=2),$.morphAttributes.color!==void 0&&(xt=3);let st,D,I,w;if(it){const Ue=mn[it];st=Ue.vertexShader,D=Ue.fragmentShader}else st=S.vertexShader,D=S.fragmentShader,l.update(S),I=l.getVertexShaderID(S),w=l.getFragmentShaderID(S);const b=n.getRenderTarget(),K=ct.isInstancedMesh===!0,at=ct.isBatchedMesh===!0,V=!!S.map,lt=!!S.matcap,R=!!J,Q=!!S.aoMap,O=!!S.lightMap,q=!!S.bumpMap,W=!!S.normalMap,ut=!!S.displacementMap,U=!!S.emissiveMap,g=!!S.metalnessMap,y=!!S.roughnessMap,z=S.anisotropy>0,ht=S.clearcoat>0,ft=S.iridescence>0,ot=S.sheen>0,Tt=S.transmission>0,vt=z&&!!S.anisotropyMap,At=ht&&!!S.clearcoatMap,Pt=ht&&!!S.clearcoatNormalMap,Ft=ht&&!!S.clearcoatRoughnessMap,mt=ft&&!!S.iridescenceMap,$t=ft&&!!S.iridescenceThicknessMap,Ht=ot&&!!S.sheenColorMap,Ot=ot&&!!S.sheenRoughnessMap,It=!!S.specularMap,Ct=!!S.specularColorMap,Vt=!!S.specularIntensityMap,Kt=Tt&&!!S.transmissionMap,ue=Tt&&!!S.thicknessMap,qt=!!S.gradientMap,yt=!!S.alphaMap,B=S.alphaTest>0,Et=!!S.alphaHash,bt=!!S.extensions,Nt=!!$.attributes.uv1,Dt=!!$.attributes.uv2,ie=!!$.attributes.uv3;let se=qn;return S.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(se=n.toneMapping),{isWebGL2:u,shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:st,fragmentShader:D,defines:S.defines,customVertexShaderID:I,customFragmentShaderID:w,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:at,instancing:K,instancingColor:K&&ct.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:b===null?n.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Rn,map:V,matcap:lt,envMap:R,envMapMode:R&&J.mapping,envMapCubeUVHeight:H,aoMap:Q,lightMap:O,bumpMap:q,normalMap:W,displacementMap:f&&ut,emissiveMap:U,normalMapObjectSpace:W&&S.normalMapType===lf,normalMapTangentSpace:W&&S.normalMapType===Iu,metalnessMap:g,roughnessMap:y,anisotropy:z,anisotropyMap:vt,clearcoat:ht,clearcoatMap:At,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Ft,iridescence:ft,iridescenceMap:mt,iridescenceThicknessMap:$t,sheen:ot,sheenColorMap:Ht,sheenRoughnessMap:Ot,specularMap:It,specularColorMap:Ct,specularIntensityMap:Vt,transmission:Tt,transmissionMap:Kt,thicknessMap:ue,gradientMap:qt,opaque:S.transparent===!1&&S.blending===Ki,alphaMap:yt,alphaTest:B,alphaHash:Et,combine:S.combine,mapUv:V&&v(S.map.channel),aoMapUv:Q&&v(S.aoMap.channel),lightMapUv:O&&v(S.lightMap.channel),bumpMapUv:q&&v(S.bumpMap.channel),normalMapUv:W&&v(S.normalMap.channel),displacementMapUv:ut&&v(S.displacementMap.channel),emissiveMapUv:U&&v(S.emissiveMap.channel),metalnessMapUv:g&&v(S.metalnessMap.channel),roughnessMapUv:y&&v(S.roughnessMap.channel),anisotropyMapUv:vt&&v(S.anisotropyMap.channel),clearcoatMapUv:At&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&v(S.sheenRoughnessMap.channel),specularMapUv:It&&v(S.specularMap.channel),specularColorMapUv:Ct&&v(S.specularColorMap.channel),specularIntensityMapUv:Vt&&v(S.specularIntensityMap.channel),transmissionMapUv:Kt&&v(S.transmissionMap.channel),thicknessMapUv:ue&&v(S.thicknessMap.channel),alphaMapUv:yt&&v(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(W||z),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:Nt,vertexUv2s:Dt,vertexUv3s:ie,pointsUvs:ct.isPoints===!0&&!!$.attributes.uv&&(V||yt),fog:!!N,useFog:S.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:ct.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:xt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,useLegacyLights:n._useLegacyLights,decodeVideoTexture:V&&S.map.isVideoTexture===!0&&te.getTransfer(S.map.colorSpace)===oe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ge,flipSided:S.side===He,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:bt&&S.extensions.derivatives===!0,extensionFragDepth:bt&&S.extensions.fragDepth===!0,extensionDrawBuffers:bt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:bt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:bt&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const X in S.defines)T.push(X),T.push(S.defines[X]);return S.isRawShaderMaterial===!1&&(M(T,S),x(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function M(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function x(S,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function E(S){const T=_[S.type];let X;if(T){const Y=mn[T];X=$f.clone(Y.uniforms)}else X=S.uniforms;return X}function L(S,T){let X;for(let Y=0,ct=c.length;Y<ct;Y++){const N=c[Y];if(N.cacheKey===T){X=N,++X.usedTimes;break}}return X===void 0&&(X=new l_(n,T,S,r),c.push(X)),X}function C(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function P(S){l.remove(S)}function k(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:L,releaseProgram:C,releaseShaderCache:P,programs:c,dispose:k}}function f_(){let n=new WeakMap;function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function e(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function p_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function mc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function gc(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h,f,m,_,v,p){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:v,group:p},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=v,d.group=p),t++,d}function o(h,f,m,_,v,p){const d=a(h,f,m,_,v,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(h,f,m,_,v,p){const d=a(h,f,m,_,v,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(h,f){e.length>1&&e.sort(h||p_),i.length>1&&i.sort(f||mc),s.length>1&&s.sort(f||mc)}function u(){for(let h=t,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function m_(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new gc,n.set(i,[a])):s>=r.length?(a=new gc,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function g_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Lt};break;case"SpotLight":e={position:new F,direction:new F,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function __(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let x_=0;function v_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function y_(n,t){const e=new g_,i=__(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new F);const r=new F,a=new Qt,o=new Qt;function l(u,h){let f=0,m=0,_=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let v=0,p=0,d=0,M=0,x=0,E=0,L=0,C=0,P=0,k=0,S=0;u.sort(v_);const T=h===!0?Math.PI:1;for(let Y=0,ct=u.length;Y<ct;Y++){const N=u[Y],$=N.color,Z=N.intensity,J=N.distance,H=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=$.r*Z*T,m+=$.g*Z*T,_+=$.b*Z*T;else if(N.isLightProbe){for(let it=0;it<9;it++)s.probe[it].addScaledVector(N.sh.coefficients[it],Z);S++}else if(N.isDirectionalLight){const it=e.get(N);if(it.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const rt=N.shadow,dt=i.get(N);dt.shadowBias=rt.bias,dt.shadowNormalBias=rt.normalBias,dt.shadowRadius=rt.radius,dt.shadowMapSize=rt.mapSize,s.directionalShadow[v]=dt,s.directionalShadowMap[v]=H,s.directionalShadowMatrix[v]=N.shadow.matrix,E++}s.directional[v]=it,v++}else if(N.isSpotLight){const it=e.get(N);it.position.setFromMatrixPosition(N.matrixWorld),it.color.copy($).multiplyScalar(Z*T),it.distance=J,it.coneCos=Math.cos(N.angle),it.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),it.decay=N.decay,s.spot[d]=it;const rt=N.shadow;if(N.map&&(s.spotLightMap[P]=N.map,P++,rt.updateMatrices(N),N.castShadow&&k++),s.spotLightMatrix[d]=rt.matrix,N.castShadow){const dt=i.get(N);dt.shadowBias=rt.bias,dt.shadowNormalBias=rt.normalBias,dt.shadowRadius=rt.radius,dt.shadowMapSize=rt.mapSize,s.spotShadow[d]=dt,s.spotShadowMap[d]=H,C++}d++}else if(N.isRectAreaLight){const it=e.get(N);it.color.copy($).multiplyScalar(Z),it.halfWidth.set(N.width*.5,0,0),it.halfHeight.set(0,N.height*.5,0),s.rectArea[M]=it,M++}else if(N.isPointLight){const it=e.get(N);if(it.color.copy(N.color).multiplyScalar(N.intensity*T),it.distance=N.distance,it.decay=N.decay,N.castShadow){const rt=N.shadow,dt=i.get(N);dt.shadowBias=rt.bias,dt.shadowNormalBias=rt.normalBias,dt.shadowRadius=rt.radius,dt.shadowMapSize=rt.mapSize,dt.shadowCameraNear=rt.camera.near,dt.shadowCameraFar=rt.camera.far,s.pointShadow[p]=dt,s.pointShadowMap[p]=H,s.pointShadowMatrix[p]=N.shadow.matrix,L++}s.point[p]=it,p++}else if(N.isHemisphereLight){const it=e.get(N);it.skyColor.copy(N.color).multiplyScalar(Z*T),it.groundColor.copy(N.groundColor).multiplyScalar(Z*T),s.hemi[x]=it,x++}}M>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_FLOAT_1,s.rectAreaLTC2=Mt.LTC_FLOAT_2):(s.rectAreaLTC1=Mt.LTC_HALF_1,s.rectAreaLTC2=Mt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_FLOAT_1,s.rectAreaLTC2=Mt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_HALF_1,s.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;const X=s.hash;(X.directionalLength!==v||X.pointLength!==p||X.spotLength!==d||X.rectAreaLength!==M||X.hemiLength!==x||X.numDirectionalShadows!==E||X.numPointShadows!==L||X.numSpotShadows!==C||X.numSpotMaps!==P||X.numLightProbes!==S)&&(s.directional.length=v,s.spot.length=d,s.rectArea.length=M,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=C+P-k,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=S,X.directionalLength=v,X.pointLength=p,X.spotLength=d,X.rectAreaLength=M,X.hemiLength=x,X.numDirectionalShadows=E,X.numPointShadows=L,X.numSpotShadows=C,X.numSpotMaps=P,X.numLightProbes=S,s.version=x_++)}function c(u,h){let f=0,m=0,_=0,v=0,p=0;const d=h.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const E=u[M];if(E.isDirectionalLight){const L=s.directional[f];L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),f++}else if(E.isSpotLight){const L=s.spot[_];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),_++}else if(E.isRectAreaLight){const L=s.rectArea[v];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),o.identity(),a.copy(E.matrixWorld),a.premultiply(d),o.extractRotation(a),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){const L=s.point[m];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){const L=s.hemi[p];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:s}}function _c(n,t){const e=new y_(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(h){i.push(h)}function o(h){s.push(h)}function l(h){e.setup(i,h)}function c(h){e.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function M_(n,t){let e=new WeakMap;function i(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new _c(n,t),e.set(r,[l])):a>=o.length?(l=new _c(n,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:i,dispose:s}}class S_ extends wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class E_ extends wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,T_=`uniform sampler2D shadow_pass;
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
}`;function A_(n,t,e){let i=new wa;const s=new pt,r=new pt,a=new Te,o=new S_({depthPacking:af}),l=new E_,c={},u=e.maxTextureSize,h={[jn]:He,[He]:jn,[Ge]:Ge},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:b_,fragmentShader:T_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new _e;_.setAttribute("position",new Ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ee(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Su;let d=this.type;this.render=function(C,P,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const S=n.getRenderTarget(),T=n.getActiveCubeFace(),X=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Xn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ct=d!==wn&&this.type===wn,N=d===wn&&this.type!==wn;for(let $=0,Z=C.length;$<Z;$++){const J=C[$],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const it=H.getFrameExtents();if(s.multiply(it),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/it.x),s.x=r.x*it.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/it.y),s.y=r.y*it.y,H.mapSize.y=r.y)),H.map===null||ct===!0||N===!0){const dt=this.type!==wn?{minFilter:Be,magFilter:Be}:{};H.map!==null&&H.map.dispose(),H.map=new Mi(s.x,s.y,dt),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const rt=H.getViewportCount();for(let dt=0;dt<rt;dt++){const xt=H.getViewport(dt);a.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),Y.viewport(a),H.updateMatrices(J,dt),i=H.getFrustum(),E(P,k,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===wn&&M(H,k),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(S,T,X)};function M(C,P){const k=t.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Mi(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,k,f,v,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,k,m,v,null)}function x(C,P,k,S){let T=null;const X=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(X!==void 0)T=X;else if(T=k.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Y=T.uuid,ct=P.uuid;let N=c[Y];N===void 0&&(N={},c[Y]=N);let $=N[ct];$===void 0&&($=T.clone(),N[ct]=$,P.addEventListener("dispose",L)),T=$}if(T.visible=P.visible,T.wireframe=P.wireframe,S===wn?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:h[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Y=n.properties.get(T);Y.light=k}return T}function E(C,P,k,S,T){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===wn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);const ct=t.update(C),N=C.material;if(Array.isArray(N)){const $=ct.groups;for(let Z=0,J=$.length;Z<J;Z++){const H=$[Z],it=N[H.materialIndex];if(it&&it.visible){const rt=x(C,it,S,T);C.onBeforeShadow(n,C,P,k,ct,rt,H),n.renderBufferDirect(k,null,ct,rt,C,H),C.onAfterShadow(n,C,P,k,ct,rt,H)}}}else if(N.visible){const $=x(C,N,S,T);C.onBeforeShadow(n,C,P,k,ct,$,null),n.renderBufferDirect(k,null,ct,$,C,null),C.onAfterShadow(n,C,P,k,ct,$,null)}}const Y=C.children;for(let ct=0,N=Y.length;ct<N;ct++)E(Y[ct],P,k,S,T)}function L(C){C.target.removeEventListener("dispose",L);for(const k in c){const S=c[k],T=C.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function w_(n,t,e){const i=e.isWebGL2;function s(){let B=!1;const Et=new Te;let bt=null;const Nt=new Te(0,0,0,0);return{setMask:function(Dt){bt!==Dt&&!B&&(n.colorMask(Dt,Dt,Dt,Dt),bt=Dt)},setLocked:function(Dt){B=Dt},setClear:function(Dt,ie,se,Se,Ue){Ue===!0&&(Dt*=Se,ie*=Se,se*=Se),Et.set(Dt,ie,se,Se),Nt.equals(Et)===!1&&(n.clearColor(Dt,ie,se,Se),Nt.copy(Et))},reset:function(){B=!1,bt=null,Nt.set(-1,0,0,0)}}}function r(){let B=!1,Et=null,bt=null,Nt=null;return{setTest:function(Dt){Dt?at(n.DEPTH_TEST):V(n.DEPTH_TEST)},setMask:function(Dt){Et!==Dt&&!B&&(n.depthMask(Dt),Et=Dt)},setFunc:function(Dt){if(bt!==Dt){switch(Dt){case Nd:n.depthFunc(n.NEVER);break;case Fd:n.depthFunc(n.ALWAYS);break;case Od:n.depthFunc(n.LESS);break;case Dr:n.depthFunc(n.LEQUAL);break;case Bd:n.depthFunc(n.EQUAL);break;case zd:n.depthFunc(n.GEQUAL);break;case kd:n.depthFunc(n.GREATER);break;case Gd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}bt=Dt}},setLocked:function(Dt){B=Dt},setClear:function(Dt){Nt!==Dt&&(n.clearDepth(Dt),Nt=Dt)},reset:function(){B=!1,Et=null,bt=null,Nt=null}}}function a(){let B=!1,Et=null,bt=null,Nt=null,Dt=null,ie=null,se=null,Se=null,Ue=null;return{setTest:function(re){B||(re?at(n.STENCIL_TEST):V(n.STENCIL_TEST))},setMask:function(re){Et!==re&&!B&&(n.stencilMask(re),Et=re)},setFunc:function(re,Ne,fn){(bt!==re||Nt!==Ne||Dt!==fn)&&(n.stencilFunc(re,Ne,fn),bt=re,Nt=Ne,Dt=fn)},setOp:function(re,Ne,fn){(ie!==re||se!==Ne||Se!==fn)&&(n.stencilOp(re,Ne,fn),ie=re,se=Ne,Se=fn)},setLocked:function(re){B=re},setClear:function(re){Ue!==re&&(n.clearStencil(re),Ue=re)},reset:function(){B=!1,Et=null,bt=null,Nt=null,Dt=null,ie=null,se=null,Se=null,Ue=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,v=[],p=null,d=!1,M=null,x=null,E=null,L=null,C=null,P=null,k=null,S=new Lt(0,0,0),T=0,X=!1,Y=null,ct=null,N=null,$=null,Z=null;const J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,it=0;const rt=n.getParameter(n.VERSION);rt.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(rt)[1]),H=it>=1):rt.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),H=it>=2);let dt=null,xt={};const st=n.getParameter(n.SCISSOR_BOX),D=n.getParameter(n.VIEWPORT),I=new Te().fromArray(st),w=new Te().fromArray(D);function b(B,Et,bt,Nt){const Dt=new Uint8Array(4),ie=n.createTexture();n.bindTexture(B,ie),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<bt;se++)i&&(B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY)?n.texImage3D(Et,0,n.RGBA,1,1,Nt,0,n.RGBA,n.UNSIGNED_BYTE,Dt):n.texImage2D(Et+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Dt);return ie}const K={};K[n.TEXTURE_2D]=b(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=b(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(K[n.TEXTURE_2D_ARRAY]=b(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=b(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),at(n.DEPTH_TEST),l.setFunc(Dr),U(!1),g(Qa),at(n.CULL_FACE),W(Xn);function at(B){f[B]!==!0&&(n.enable(B),f[B]=!0)}function V(B){f[B]!==!1&&(n.disable(B),f[B]=!1)}function lt(B,Et){return m[B]!==Et?(n.bindFramebuffer(B,Et),m[B]=Et,i&&(B===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Et),B===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Et)),!0):!1}function R(B,Et){let bt=v,Nt=!1;if(B)if(bt=_.get(Et),bt===void 0&&(bt=[],_.set(Et,bt)),B.isWebGLMultipleRenderTargets){const Dt=B.texture;if(bt.length!==Dt.length||bt[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,se=Dt.length;ie<se;ie++)bt[ie]=n.COLOR_ATTACHMENT0+ie;bt.length=Dt.length,Nt=!0}}else bt[0]!==n.COLOR_ATTACHMENT0&&(bt[0]=n.COLOR_ATTACHMENT0,Nt=!0);else bt[0]!==n.BACK&&(bt[0]=n.BACK,Nt=!0);Nt&&(e.isWebGL2?n.drawBuffers(bt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(bt))}function Q(B){return p!==B?(n.useProgram(B),p=B,!0):!1}const O={[ui]:n.FUNC_ADD,[yd]:n.FUNC_SUBTRACT,[Md]:n.FUNC_REVERSE_SUBTRACT};if(i)O[nl]=n.MIN,O[il]=n.MAX;else{const B=t.get("EXT_blend_minmax");B!==null&&(O[nl]=B.MIN_EXT,O[il]=B.MAX_EXT)}const q={[Sd]:n.ZERO,[Ed]:n.ONE,[bd]:n.SRC_COLOR,[Jo]:n.SRC_ALPHA,[Pd]:n.SRC_ALPHA_SATURATE,[Cd]:n.DST_COLOR,[Ad]:n.DST_ALPHA,[Td]:n.ONE_MINUS_SRC_COLOR,[Qo]:n.ONE_MINUS_SRC_ALPHA,[Rd]:n.ONE_MINUS_DST_COLOR,[wd]:n.ONE_MINUS_DST_ALPHA,[Ld]:n.CONSTANT_COLOR,[Id]:n.ONE_MINUS_CONSTANT_COLOR,[Dd]:n.CONSTANT_ALPHA,[Ud]:n.ONE_MINUS_CONSTANT_ALPHA};function W(B,Et,bt,Nt,Dt,ie,se,Se,Ue,re){if(B===Xn){d===!0&&(V(n.BLEND),d=!1);return}if(d===!1&&(at(n.BLEND),d=!0),B!==vd){if(B!==M||re!==X){if((x!==ui||C!==ui)&&(n.blendEquation(n.FUNC_ADD),x=ui,C=ui),re)switch(B){case Ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ir:n.blendFunc(n.ONE,n.ONE);break;case tl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case el:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ir:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case tl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case el:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,L=null,P=null,k=null,S.set(0,0,0),T=0,M=B,X=re}return}Dt=Dt||Et,ie=ie||bt,se=se||Nt,(Et!==x||Dt!==C)&&(n.blendEquationSeparate(O[Et],O[Dt]),x=Et,C=Dt),(bt!==E||Nt!==L||ie!==P||se!==k)&&(n.blendFuncSeparate(q[bt],q[Nt],q[ie],q[se]),E=bt,L=Nt,P=ie,k=se),(Se.equals(S)===!1||Ue!==T)&&(n.blendColor(Se.r,Se.g,Se.b,Ue),S.copy(Se),T=Ue),M=B,X=!1}function ut(B,Et){B.side===Ge?V(n.CULL_FACE):at(n.CULL_FACE);let bt=B.side===He;Et&&(bt=!bt),U(bt),B.blending===Ki&&B.transparent===!1?W(Xn):W(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),o.setMask(B.colorWrite);const Nt=B.stencilWrite;c.setTest(Nt),Nt&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),z(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?at(n.SAMPLE_ALPHA_TO_COVERAGE):V(n.SAMPLE_ALPHA_TO_COVERAGE)}function U(B){Y!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),Y=B)}function g(B){B!==gd?(at(n.CULL_FACE),B!==ct&&(B===Qa?n.cullFace(n.BACK):B===_d?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):V(n.CULL_FACE),ct=B}function y(B){B!==N&&(H&&n.lineWidth(B),N=B)}function z(B,Et,bt){B?(at(n.POLYGON_OFFSET_FILL),($!==Et||Z!==bt)&&(n.polygonOffset(Et,bt),$=Et,Z=bt)):V(n.POLYGON_OFFSET_FILL)}function ht(B){B?at(n.SCISSOR_TEST):V(n.SCISSOR_TEST)}function ft(B){B===void 0&&(B=n.TEXTURE0+J-1),dt!==B&&(n.activeTexture(B),dt=B)}function ot(B,Et,bt){bt===void 0&&(dt===null?bt=n.TEXTURE0+J-1:bt=dt);let Nt=xt[bt];Nt===void 0&&(Nt={type:void 0,texture:void 0},xt[bt]=Nt),(Nt.type!==B||Nt.texture!==Et)&&(dt!==bt&&(n.activeTexture(bt),dt=bt),n.bindTexture(B,Et||K[B]),Nt.type=B,Nt.texture=Et)}function Tt(){const B=xt[dt];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function vt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ft(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function mt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ht(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ot(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function It(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Vt(B){I.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),I.copy(B))}function Kt(B){w.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),w.copy(B))}function ue(B,Et){let bt=h.get(Et);bt===void 0&&(bt=new WeakMap,h.set(Et,bt));let Nt=bt.get(B);Nt===void 0&&(Nt=n.getUniformBlockIndex(Et,B.name),bt.set(B,Nt))}function qt(B,Et){const Nt=h.get(Et).get(B);u.get(Et)!==Nt&&(n.uniformBlockBinding(Et,Nt,B.__bindingPointIndex),u.set(Et,Nt))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},dt=null,xt={},m={},_=new WeakMap,v=[],p=null,d=!1,M=null,x=null,E=null,L=null,C=null,P=null,k=null,S=new Lt(0,0,0),T=0,X=!1,Y=null,ct=null,N=null,$=null,Z=null,I.set(0,0,n.canvas.width,n.canvas.height),w.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:at,disable:V,bindFramebuffer:lt,drawBuffers:R,useProgram:Q,setBlending:W,setMaterial:ut,setFlipSided:U,setCullFace:g,setLineWidth:y,setPolygonOffset:z,setScissorTest:ht,activeTexture:ft,bindTexture:ot,unbindTexture:Tt,compressedTexImage2D:vt,compressedTexImage3D:At,texImage2D:It,texImage3D:Ct,updateUBOMapping:ue,uniformBlockBinding:qt,texStorage2D:Ht,texStorage3D:Ot,texSubImage2D:Pt,texSubImage3D:Ft,compressedTexSubImage2D:mt,compressedTexSubImage3D:$t,scissor:Vt,viewport:Kt,reset:yt}}function C_(n,t,e,i,s,r,a){const o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(g,y){return m?new OffscreenCanvas(g,y):zr("canvas")}function v(g,y,z,ht){let ft=1;if((g.width>ht||g.height>ht)&&(ft=ht/Math.max(g.width,g.height)),ft<1||y===!0)if(typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&g instanceof ImageBitmap){const ot=y?Br:Math.floor,Tt=ot(ft*g.width),vt=ot(ft*g.height);h===void 0&&(h=_(Tt,vt));const At=z?_(Tt,vt):h;return At.width=Tt,At.height=vt,At.getContext("2d").drawImage(g,0,0,Tt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+g.width+"x"+g.height+") to ("+Tt+"x"+vt+")."),At}else return"data"in g&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+g.width+"x"+g.height+")."),g;return g}function p(g){return ra(g.width)&&ra(g.height)}function d(g){return o?!1:g.wrapS!==ln||g.wrapT!==ln||g.minFilter!==Be&&g.minFilter!==Ke}function M(g,y){return g.generateMipmaps&&y&&g.minFilter!==Be&&g.minFilter!==Ke}function x(g){n.generateMipmap(g)}function E(g,y,z,ht,ft=!1){if(o===!1)return y;if(g!==null){if(n[g]!==void 0)return n[g];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+g+"'")}let ot=y;if(y===n.RED&&(z===n.FLOAT&&(ot=n.R32F),z===n.HALF_FLOAT&&(ot=n.R16F),z===n.UNSIGNED_BYTE&&(ot=n.R8)),y===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ot=n.R8UI),z===n.UNSIGNED_SHORT&&(ot=n.R16UI),z===n.UNSIGNED_INT&&(ot=n.R32UI),z===n.BYTE&&(ot=n.R8I),z===n.SHORT&&(ot=n.R16I),z===n.INT&&(ot=n.R32I)),y===n.RG&&(z===n.FLOAT&&(ot=n.RG32F),z===n.HALF_FLOAT&&(ot=n.RG16F),z===n.UNSIGNED_BYTE&&(ot=n.RG8)),y===n.RGBA){const Tt=ft?Ur:te.getTransfer(ht);z===n.FLOAT&&(ot=n.RGBA32F),z===n.HALF_FLOAT&&(ot=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ot=Tt===oe?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ot=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ot=n.RGB5_A1)}return(ot===n.R16F||ot===n.R32F||ot===n.RG16F||ot===n.RG32F||ot===n.RGBA16F||ot===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function L(g,y,z){return M(g,z)===!0||g.isFramebufferTexture&&g.minFilter!==Be&&g.minFilter!==Ke?Math.log2(Math.max(y.width,y.height))+1:g.mipmaps!==void 0&&g.mipmaps.length>0?g.mipmaps.length:g.isCompressedTexture&&Array.isArray(g.image)?y.mipmaps.length:1}function C(g){return g===Be||g===sl||g===co?n.NEAREST:n.LINEAR}function P(g){const y=g.target;y.removeEventListener("dispose",P),S(y),y.isVideoTexture&&u.delete(y)}function k(g){const y=g.target;y.removeEventListener("dispose",k),X(y)}function S(g){const y=i.get(g);if(y.__webglInit===void 0)return;const z=g.source,ht=f.get(z);if(ht){const ft=ht[y.__cacheKey];ft.usedTimes--,ft.usedTimes===0&&T(g),Object.keys(ht).length===0&&f.delete(z)}i.remove(g)}function T(g){const y=i.get(g);n.deleteTexture(y.__webglTexture);const z=g.source,ht=f.get(z);delete ht[y.__cacheKey],a.memory.textures--}function X(g){const y=g.texture,z=i.get(g),ht=i.get(y);if(ht.__webglTexture!==void 0&&(n.deleteTexture(ht.__webglTexture),a.memory.textures--),g.depthTexture&&g.depthTexture.dispose(),g.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(z.__webglFramebuffer[ft]))for(let ot=0;ot<z.__webglFramebuffer[ft].length;ot++)n.deleteFramebuffer(z.__webglFramebuffer[ft][ot]);else n.deleteFramebuffer(z.__webglFramebuffer[ft]);z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer[ft])}else{if(Array.isArray(z.__webglFramebuffer))for(let ft=0;ft<z.__webglFramebuffer.length;ft++)n.deleteFramebuffer(z.__webglFramebuffer[ft]);else n.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&n.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ft=0;ft<z.__webglColorRenderbuffer.length;ft++)z.__webglColorRenderbuffer[ft]&&n.deleteRenderbuffer(z.__webglColorRenderbuffer[ft]);z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(g.isWebGLMultipleRenderTargets)for(let ft=0,ot=y.length;ft<ot;ft++){const Tt=i.get(y[ft]);Tt.__webglTexture&&(n.deleteTexture(Tt.__webglTexture),a.memory.textures--),i.remove(y[ft])}i.remove(y),i.remove(g)}let Y=0;function ct(){Y=0}function N(){const g=Y;return g>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+g+" texture units while this GPU supports only "+s.maxTextures),Y+=1,g}function $(g){const y=[];return y.push(g.wrapS),y.push(g.wrapT),y.push(g.wrapR||0),y.push(g.magFilter),y.push(g.minFilter),y.push(g.anisotropy),y.push(g.internalFormat),y.push(g.format),y.push(g.type),y.push(g.generateMipmaps),y.push(g.premultiplyAlpha),y.push(g.flipY),y.push(g.unpackAlignment),y.push(g.colorSpace),y.join()}function Z(g,y){const z=i.get(g);if(g.isVideoTexture&&ut(g),g.isRenderTargetTexture===!1&&g.version>0&&z.__version!==g.version){const ht=g.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(z,g,y);return}}e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+y)}function J(g,y){const z=i.get(g);if(g.version>0&&z.__version!==g.version){I(z,g,y);return}e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+y)}function H(g,y){const z=i.get(g);if(g.version>0&&z.__version!==g.version){I(z,g,y);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+y)}function it(g,y){const z=i.get(g);if(g.version>0&&z.__version!==g.version){w(z,g,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+y)}const rt={[na]:n.REPEAT,[ln]:n.CLAMP_TO_EDGE,[ia]:n.MIRRORED_REPEAT},dt={[Be]:n.NEAREST,[sl]:n.NEAREST_MIPMAP_NEAREST,[co]:n.NEAREST_MIPMAP_LINEAR,[Ke]:n.LINEAR,[Zd]:n.LINEAR_MIPMAP_NEAREST,[Ps]:n.LINEAR_MIPMAP_LINEAR},xt={[cf]:n.NEVER,[mf]:n.ALWAYS,[uf]:n.LESS,[Du]:n.LEQUAL,[hf]:n.EQUAL,[pf]:n.GEQUAL,[df]:n.GREATER,[ff]:n.NOTEQUAL};function st(g,y,z){if(z?(n.texParameteri(g,n.TEXTURE_WRAP_S,rt[y.wrapS]),n.texParameteri(g,n.TEXTURE_WRAP_T,rt[y.wrapT]),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,rt[y.wrapR]),n.texParameteri(g,n.TEXTURE_MAG_FILTER,dt[y.magFilter]),n.texParameteri(g,n.TEXTURE_MIN_FILTER,dt[y.minFilter])):(n.texParameteri(g,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(g,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(y.wrapS!==ln||y.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(g,n.TEXTURE_MAG_FILTER,C(y.magFilter)),n.texParameteri(g,n.TEXTURE_MIN_FILTER,C(y.minFilter)),y.minFilter!==Be&&y.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(n.texParameteri(g,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(g,n.TEXTURE_COMPARE_FUNC,xt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ht=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===Be||y.minFilter!==co&&y.minFilter!==Ps||y.type===Vn&&t.has("OES_texture_float_linear")===!1||o===!1&&y.type===Ls&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(n.texParameterf(g,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function D(g,y){let z=!1;g.__webglInit===void 0&&(g.__webglInit=!0,y.addEventListener("dispose",P));const ht=y.source;let ft=f.get(ht);ft===void 0&&(ft={},f.set(ht,ft));const ot=$(y);if(ot!==g.__cacheKey){ft[ot]===void 0&&(ft[ot]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ft[ot].usedTimes++;const Tt=ft[g.__cacheKey];Tt!==void 0&&(ft[g.__cacheKey].usedTimes--,Tt.usedTimes===0&&T(y)),g.__cacheKey=ot,g.__webglTexture=ft[ot].texture}return z}function I(g,y,z){let ht=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ht=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ht=n.TEXTURE_3D);const ft=D(g,y),ot=y.source;e.bindTexture(ht,g.__webglTexture,n.TEXTURE0+z);const Tt=i.get(ot);if(ot.version!==Tt.__version||ft===!0){e.activeTexture(n.TEXTURE0+z);const vt=te.getPrimaries(te.workingColorSpace),At=y.colorSpace===tn?null:te.getPrimaries(y.colorSpace),Pt=y.colorSpace===tn||vt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Ft=d(y)&&p(y.image)===!1;let mt=v(y.image,Ft,!1,s.maxTextureSize);mt=U(y,mt);const $t=p(mt)||o,Ht=r.convert(y.format,y.colorSpace);let Ot=r.convert(y.type),It=E(y.internalFormat,Ht,Ot,y.colorSpace,y.isVideoTexture);st(ht,y,$t);let Ct;const Vt=y.mipmaps,Kt=o&&y.isVideoTexture!==!0&&It!==Pu,ue=Tt.__version===void 0||ft===!0,qt=L(y,mt,$t);if(y.isDepthTexture)It=n.DEPTH_COMPONENT,o?y.type===Vn?It=n.DEPTH_COMPONENT32F:y.type===Hn?It=n.DEPTH_COMPONENT24:y.type===mi?It=n.DEPTH24_STENCIL8:It=n.DEPTH_COMPONENT16:y.type===Vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===gi&&It===n.DEPTH_COMPONENT&&y.type!==Ea&&y.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Hn,Ot=r.convert(y.type)),y.format===is&&It===n.DEPTH_COMPONENT&&(It=n.DEPTH_STENCIL,y.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=mi,Ot=r.convert(y.type))),ue&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,It,mt.width,mt.height):e.texImage2D(n.TEXTURE_2D,0,It,mt.width,mt.height,0,Ht,Ot,null));else if(y.isDataTexture)if(Vt.length>0&&$t){Kt&&ue&&e.texStorage2D(n.TEXTURE_2D,qt,It,Vt[0].width,Vt[0].height);for(let yt=0,B=Vt.length;yt<B;yt++)Ct=Vt[yt],Kt?e.texSubImage2D(n.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ht,Ot,Ct.data):e.texImage2D(n.TEXTURE_2D,yt,It,Ct.width,Ct.height,0,Ht,Ot,Ct.data);y.generateMipmaps=!1}else Kt?(ue&&e.texStorage2D(n.TEXTURE_2D,qt,It,mt.width,mt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt.width,mt.height,Ht,Ot,mt.data)):e.texImage2D(n.TEXTURE_2D,0,It,mt.width,mt.height,0,Ht,Ot,mt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Kt&&ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,qt,It,Vt[0].width,Vt[0].height,mt.depth);for(let yt=0,B=Vt.length;yt<B;yt++)Ct=Vt[yt],y.format!==cn?Ht!==null?Kt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,yt,0,0,0,Ct.width,Ct.height,mt.depth,Ht,Ct.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,yt,It,Ct.width,Ct.height,mt.depth,0,Ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,yt,0,0,0,Ct.width,Ct.height,mt.depth,Ht,Ot,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,yt,It,Ct.width,Ct.height,mt.depth,0,Ht,Ot,Ct.data)}else{Kt&&ue&&e.texStorage2D(n.TEXTURE_2D,qt,It,Vt[0].width,Vt[0].height);for(let yt=0,B=Vt.length;yt<B;yt++)Ct=Vt[yt],y.format!==cn?Ht!==null?Kt?e.compressedTexSubImage2D(n.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ht,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,yt,It,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?e.texSubImage2D(n.TEXTURE_2D,yt,0,0,Ct.width,Ct.height,Ht,Ot,Ct.data):e.texImage2D(n.TEXTURE_2D,yt,It,Ct.width,Ct.height,0,Ht,Ot,Ct.data)}else if(y.isDataArrayTexture)Kt?(ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,qt,It,mt.width,mt.height,mt.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,Ht,Ot,mt.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,mt.width,mt.height,mt.depth,0,Ht,Ot,mt.data);else if(y.isData3DTexture)Kt?(ue&&e.texStorage3D(n.TEXTURE_3D,qt,It,mt.width,mt.height,mt.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,Ht,Ot,mt.data)):e.texImage3D(n.TEXTURE_3D,0,It,mt.width,mt.height,mt.depth,0,Ht,Ot,mt.data);else if(y.isFramebufferTexture){if(ue)if(Kt)e.texStorage2D(n.TEXTURE_2D,qt,It,mt.width,mt.height);else{let yt=mt.width,B=mt.height;for(let Et=0;Et<qt;Et++)e.texImage2D(n.TEXTURE_2D,Et,It,yt,B,0,Ht,Ot,null),yt>>=1,B>>=1}}else if(Vt.length>0&&$t){Kt&&ue&&e.texStorage2D(n.TEXTURE_2D,qt,It,Vt[0].width,Vt[0].height);for(let yt=0,B=Vt.length;yt<B;yt++)Ct=Vt[yt],Kt?e.texSubImage2D(n.TEXTURE_2D,yt,0,0,Ht,Ot,Ct):e.texImage2D(n.TEXTURE_2D,yt,It,Ht,Ot,Ct);y.generateMipmaps=!1}else Kt?(ue&&e.texStorage2D(n.TEXTURE_2D,qt,It,mt.width,mt.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ht,Ot,mt)):e.texImage2D(n.TEXTURE_2D,0,It,Ht,Ot,mt);M(y,$t)&&x(ht),Tt.__version=ot.version,y.onUpdate&&y.onUpdate(y)}g.__version=y.version}function w(g,y,z){if(y.image.length!==6)return;const ht=D(g,y),ft=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,g.__webglTexture,n.TEXTURE0+z);const ot=i.get(ft);if(ft.version!==ot.__version||ht===!0){e.activeTexture(n.TEXTURE0+z);const Tt=te.getPrimaries(te.workingColorSpace),vt=y.colorSpace===tn?null:te.getPrimaries(y.colorSpace),At=y.colorSpace===tn||Tt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Pt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ft=y.image[0]&&y.image[0].isDataTexture,mt=[];for(let yt=0;yt<6;yt++)!Pt&&!Ft?mt[yt]=v(y.image[yt],!1,!0,s.maxCubemapSize):mt[yt]=Ft?y.image[yt].image:y.image[yt],mt[yt]=U(y,mt[yt]);const $t=mt[0],Ht=p($t)||o,Ot=r.convert(y.format,y.colorSpace),It=r.convert(y.type),Ct=E(y.internalFormat,Ot,It,y.colorSpace),Vt=o&&y.isVideoTexture!==!0,Kt=ot.__version===void 0||ht===!0;let ue=L(y,$t,Ht);st(n.TEXTURE_CUBE_MAP,y,Ht);let qt;if(Pt){Vt&&Kt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ct,$t.width,$t.height);for(let yt=0;yt<6;yt++){qt=mt[yt].mipmaps;for(let B=0;B<qt.length;B++){const Et=qt[B];y.format!==cn?Ot!==null?Vt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,B,0,0,Et.width,Et.height,Ot,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,B,Ct,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,B,0,0,Et.width,Et.height,Ot,It,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,B,Ct,Et.width,Et.height,0,Ot,It,Et.data)}}}else{qt=y.mipmaps,Vt&&Kt&&(qt.length>0&&ue++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ue,Ct,mt[0].width,mt[0].height));for(let yt=0;yt<6;yt++)if(Ft){Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,mt[yt].width,mt[yt].height,Ot,It,mt[yt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Ct,mt[yt].width,mt[yt].height,0,Ot,It,mt[yt].data);for(let B=0;B<qt.length;B++){const bt=qt[B].image[yt].image;Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,B+1,0,0,bt.width,bt.height,Ot,It,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,B+1,Ct,bt.width,bt.height,0,Ot,It,bt.data)}}else{Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ot,It,mt[yt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Ct,Ot,It,mt[yt]);for(let B=0;B<qt.length;B++){const Et=qt[B];Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,B+1,0,0,Ot,It,Et.image[yt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,B+1,Ct,Ot,It,Et.image[yt])}}}M(y,Ht)&&x(n.TEXTURE_CUBE_MAP),ot.__version=ft.version,y.onUpdate&&y.onUpdate(y)}g.__version=y.version}function b(g,y,z,ht,ft,ot){const Tt=r.convert(z.format,z.colorSpace),vt=r.convert(z.type),At=E(z.internalFormat,Tt,vt,z.colorSpace);if(!i.get(y).__hasExternalTextures){const Ft=Math.max(1,y.width>>ot),mt=Math.max(1,y.height>>ot);ft===n.TEXTURE_3D||ft===n.TEXTURE_2D_ARRAY?e.texImage3D(ft,ot,At,Ft,mt,y.depth,0,Tt,vt,null):e.texImage2D(ft,ot,At,Ft,mt,0,Tt,vt,null)}e.bindFramebuffer(n.FRAMEBUFFER,g),W(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ht,ft,i.get(z).__webglTexture,0,q(y)):(ft===n.TEXTURE_2D||ft>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ft<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ht,ft,i.get(z).__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function K(g,y,z){if(n.bindRenderbuffer(n.RENDERBUFFER,g),y.depthBuffer&&!y.stencilBuffer){let ht=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(z||W(y)){const ft=y.depthTexture;ft&&ft.isDepthTexture&&(ft.type===Vn?ht=n.DEPTH_COMPONENT32F:ft.type===Hn&&(ht=n.DEPTH_COMPONENT24));const ot=q(y);W(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,ht,y.width,y.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,ht,y.width,y.height)}else n.renderbufferStorage(n.RENDERBUFFER,ht,y.width,y.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,g)}else if(y.depthBuffer&&y.stencilBuffer){const ht=q(y);z&&W(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,n.DEPTH24_STENCIL8,y.width,y.height):W(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,n.DEPTH24_STENCIL8,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,g)}else{const ht=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ft=0;ft<ht.length;ft++){const ot=ht[ft],Tt=r.convert(ot.format,ot.colorSpace),vt=r.convert(ot.type),At=E(ot.internalFormat,Tt,vt,ot.colorSpace),Pt=q(y);z&&W(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,At,y.width,y.height):W(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt,At,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,At,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function at(g,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,g),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const ht=i.get(y.depthTexture).__webglTexture,ft=q(y);if(y.depthTexture.format===gi)W(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ht,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ht,0);else if(y.depthTexture.format===is)W(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ht,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function V(g){const y=i.get(g),z=g.isWebGLCubeRenderTarget===!0;if(g.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");at(y.__webglFramebuffer,g)}else if(z){y.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[ht]),y.__webglDepthbuffer[ht]=n.createRenderbuffer(),K(y.__webglDepthbuffer[ht],g,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=n.createRenderbuffer(),K(y.__webglDepthbuffer,g,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(g,y,z){const ht=i.get(g);y!==void 0&&b(ht.__webglFramebuffer,g,g.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&V(g)}function R(g){const y=g.texture,z=i.get(g),ht=i.get(y);g.addEventListener("dispose",k),g.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=n.createTexture()),ht.__version=y.version,a.memory.textures++);const ft=g.isWebGLCubeRenderTarget===!0,ot=g.isWebGLMultipleRenderTargets===!0,Tt=p(g)||o;if(ft){z.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(o&&y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[vt]=[];for(let At=0;At<y.mipmaps.length;At++)z.__webglFramebuffer[vt][At]=n.createFramebuffer()}else z.__webglFramebuffer[vt]=n.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let vt=0;vt<y.mipmaps.length;vt++)z.__webglFramebuffer[vt]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ot)if(s.drawBuffers){const vt=g.texture;for(let At=0,Pt=vt.length;At<Pt;At++){const Ft=i.get(vt[At]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&g.samples>0&&W(g)===!1){const vt=ot?y:[y];z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let At=0;At<vt.length;At++){const Pt=vt[At];z.__webglColorRenderbuffer[At]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[At]);const Ft=r.convert(Pt.format,Pt.colorSpace),mt=r.convert(Pt.type),$t=E(Pt.internalFormat,Ft,mt,Pt.colorSpace,g.isXRRenderTarget===!0),Ht=q(g);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,$t,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,z.__webglColorRenderbuffer[At])}n.bindRenderbuffer(n.RENDERBUFFER,null),g.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),K(z.__webglDepthRenderbuffer,g,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ft){e.bindTexture(n.TEXTURE_CUBE_MAP,ht.__webglTexture),st(n.TEXTURE_CUBE_MAP,y,Tt);for(let vt=0;vt<6;vt++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let At=0;At<y.mipmaps.length;At++)b(z.__webglFramebuffer[vt][At],g,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At);else b(z.__webglFramebuffer[vt],g,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);M(y,Tt)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){const vt=g.texture;for(let At=0,Pt=vt.length;At<Pt;At++){const Ft=vt[At],mt=i.get(Ft);e.bindTexture(n.TEXTURE_2D,mt.__webglTexture),st(n.TEXTURE_2D,Ft,Tt),b(z.__webglFramebuffer,g,Ft,n.COLOR_ATTACHMENT0+At,n.TEXTURE_2D,0),M(Ft,Tt)&&x(n.TEXTURE_2D)}e.unbindTexture()}else{let vt=n.TEXTURE_2D;if((g.isWebGL3DRenderTarget||g.isWebGLArrayRenderTarget)&&(o?vt=g.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,ht.__webglTexture),st(vt,y,Tt),o&&y.mipmaps&&y.mipmaps.length>0)for(let At=0;At<y.mipmaps.length;At++)b(z.__webglFramebuffer[At],g,y,n.COLOR_ATTACHMENT0,vt,At);else b(z.__webglFramebuffer,g,y,n.COLOR_ATTACHMENT0,vt,0);M(y,Tt)&&x(vt),e.unbindTexture()}g.depthBuffer&&V(g)}function Q(g){const y=p(g)||o,z=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let ht=0,ft=z.length;ht<ft;ht++){const ot=z[ht];if(M(ot,y)){const Tt=g.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,vt=i.get(ot).__webglTexture;e.bindTexture(Tt,vt),x(Tt),e.unbindTexture()}}}function O(g){if(o&&g.samples>0&&W(g)===!1){const y=g.isWebGLMultipleRenderTargets?g.texture:[g.texture],z=g.width,ht=g.height;let ft=n.COLOR_BUFFER_BIT;const ot=[],Tt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(g),At=g.isWebGLMultipleRenderTargets===!0;if(At)for(let Pt=0;Pt<y.length;Pt++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Pt=0;Pt<y.length;Pt++){ot.push(n.COLOR_ATTACHMENT0+Pt),g.depthBuffer&&ot.push(Tt);const Ft=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Ft===!1&&(g.depthBuffer&&(ft|=n.DEPTH_BUFFER_BIT),g.stencilBuffer&&(ft|=n.STENCIL_BUFFER_BIT)),At&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[Pt]),Ft===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Tt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Tt])),At){const mt=i.get(y[Pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,mt,0)}n.blitFramebuffer(0,0,z,ht,0,0,z,ht,ft,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ot)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),At)for(let Pt=0;Pt<y.length;Pt++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,vt.__webglColorRenderbuffer[Pt]);const Ft=i.get(y[Pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,Ft,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function q(g){return Math.min(s.maxSamples,g.samples)}function W(g){const y=i.get(g);return o&&g.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ut(g){const y=a.render.frame;u.get(g)!==y&&(u.set(g,y),g.update())}function U(g,y){const z=g.colorSpace,ht=g.format,ft=g.type;return g.isCompressedTexture===!0||g.isVideoTexture===!0||g.format===sa||z!==Rn&&z!==tn&&(te.getTransfer(z)===oe?o===!1?t.has("EXT_sRGB")===!0&&ht===cn?(g.format=sa,g.minFilter=Ke,g.generateMipmaps=!1):y=Nu.sRGBToLinear(y):(ht!==cn||ft!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}this.allocateTextureUnit=N,this.resetTextureUnits=ct,this.setTexture2D=Z,this.setTexture2DArray=J,this.setTexture3D=H,this.setTextureCube=it,this.rebindTextures=lt,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=b,this.useMultisampledRTT=W}function R_(n,t,e){const i=e.isWebGL2;function s(r,a=tn){let o;const l=te.getTransfer(a);if(r===Yn)return n.UNSIGNED_BYTE;if(r===Tu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Au)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Kd)return n.BYTE;if(r===Jd)return n.SHORT;if(r===Ea)return n.UNSIGNED_SHORT;if(r===bu)return n.INT;if(r===Hn)return n.UNSIGNED_INT;if(r===Vn)return n.FLOAT;if(r===Ls)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Qd)return n.ALPHA;if(r===cn)return n.RGBA;if(r===tf)return n.LUMINANCE;if(r===ef)return n.LUMINANCE_ALPHA;if(r===gi)return n.DEPTH_COMPONENT;if(r===is)return n.DEPTH_STENCIL;if(r===sa)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===nf)return n.RED;if(r===wu)return n.RED_INTEGER;if(r===sf)return n.RG;if(r===Cu)return n.RG_INTEGER;if(r===Ru)return n.RGBA_INTEGER;if(r===uo||r===ho||r===fo||r===po)if(l===oe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===uo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===uo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ho)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rl||r===ol||r===al||r===ll)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===rl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ol)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===al)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ll)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pu)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===cl||r===ul)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===cl)return l===oe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ul)return l===oe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hl||r===dl||r===fl||r===pl||r===ml||r===gl||r===_l||r===xl||r===vl||r===yl||r===Ml||r===Sl||r===El||r===bl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===hl)return l===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dl)return l===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fl)return l===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pl)return l===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ml)return l===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gl)return l===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_l)return l===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xl)return l===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vl)return l===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yl)return l===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ml)return l===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sl)return l===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===El)return l===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bl)return l===oe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mo||r===Tl||r===Al)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===mo)return l===oe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Tl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Al)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rf||r===wl||r===Cl||r===Rl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===mo)return o.COMPRESSED_RED_RGTC1_EXT;if(r===wl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mi?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class P_ extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class me extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const L_={type:"move"};class Bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(L_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class I_ extends ls{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const v=e.getContextAttributes();let p=null,d=null;const M=[],x=[],E=new pt;let L=null;const C=new Qe;C.layers.enable(1),C.viewport=new Te;const P=new Qe;P.layers.enable(2),P.viewport=new Te;const k=[C,P],S=new P_;S.layers.enable(1),S.layers.enable(2);let T=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let D=M[st];return D===void 0&&(D=new Bo,M[st]=D),D.getTargetRaySpace()},this.getControllerGrip=function(st){let D=M[st];return D===void 0&&(D=new Bo,M[st]=D),D.getGripSpace()},this.getHand=function(st){let D=M[st];return D===void 0&&(D=new Bo,M[st]=D),D.getHandSpace()};function Y(st){const D=x.indexOf(st.inputSource);if(D===-1)return;const I=M[D];I!==void 0&&(I.update(st.inputSource,st.frame,c||a),I.dispatchEvent({type:st.type,data:st.inputSource}))}function ct(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",ct),s.removeEventListener("inputsourceschange",N);for(let st=0;st<M.length;st++){const D=x[st];D!==null&&(x[st]=null,M[st].disconnect(D))}T=null,X=null,t.setRenderTarget(p),m=null,f=null,h=null,s=null,d=null,xt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){r=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){o=st,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(st){c=st},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(st){if(s=st,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",ct),s.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const D={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,D),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Mi(m.framebufferWidth,m.framebufferHeight,{format:cn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let D=null,I=null,w=null;v.depth&&(w=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=v.stencil?is:gi,I=v.stencil?mi:Hn);const b={colorFormat:e.RGBA8,depthFormat:w,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(b),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new Mi(f.textureWidth,f.textureHeight,{format:cn,type:Yn,depthTexture:new Yu(f.textureWidth,f.textureHeight,I,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const K=t.properties.get(d);K.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),xt.setContext(s),xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(st){for(let D=0;D<st.removed.length;D++){const I=st.removed[D],w=x.indexOf(I);w>=0&&(x[w]=null,M[w].disconnect(I))}for(let D=0;D<st.added.length;D++){const I=st.added[D];let w=x.indexOf(I);if(w===-1){for(let K=0;K<M.length;K++)if(K>=x.length){x.push(I),w=K;break}else if(x[K]===null){x[K]=I,w=K;break}if(w===-1)break}const b=M[w];b&&b.connect(I)}}const $=new F,Z=new F;function J(st,D,I){$.setFromMatrixPosition(D.matrixWorld),Z.setFromMatrixPosition(I.matrixWorld);const w=$.distanceTo(Z),b=D.projectionMatrix.elements,K=I.projectionMatrix.elements,at=b[14]/(b[10]-1),V=b[14]/(b[10]+1),lt=(b[9]+1)/b[5],R=(b[9]-1)/b[5],Q=(b[8]-1)/b[0],O=(K[8]+1)/K[0],q=at*Q,W=at*O,ut=w/(-Q+O),U=ut*-Q;D.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(U),st.translateZ(ut),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert();const g=at+ut,y=V+ut,z=q-U,ht=W+(w-U),ft=lt*V/y*g,ot=R*V/y*g;st.projectionMatrix.makePerspective(z,ht,ft,ot,g,y),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}function H(st,D){D===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(D.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(s===null)return;S.near=P.near=C.near=st.near,S.far=P.far=C.far=st.far,(T!==S.near||X!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,X=S.far);const D=st.parent,I=S.cameras;H(S,D);for(let w=0;w<I.length;w++)H(I[w],D);I.length===2?J(S,C,P):S.projectionMatrix.copy(C.projectionMatrix),it(st,S,D)};function it(st,D,I){I===null?st.matrix.copy(D.matrixWorld):(st.matrix.copy(I.matrixWorld),st.matrix.invert(),st.matrix.multiply(D.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(D.projectionMatrix),st.projectionMatrixInverse.copy(D.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Is*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(st){l=st,f!==null&&(f.fixedFoveation=st),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=st)};let rt=null;function dt(st,D){if(u=D.getViewerPose(c||a),_=D,u!==null){const I=u.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let w=!1;I.length!==S.cameras.length&&(S.cameras.length=0,w=!0);for(let b=0;b<I.length;b++){const K=I[b];let at=null;if(m!==null)at=m.getViewport(K);else{const lt=h.getViewSubImage(f,K);at=lt.viewport,b===0&&(t.setRenderTargetTextures(d,lt.colorTexture,f.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(d))}let V=k[b];V===void 0&&(V=new Qe,V.layers.enable(b),V.viewport=new Te,k[b]=V),V.matrix.fromArray(K.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(K.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(at.x,at.y,at.width,at.height),b===0&&(S.matrix.copy(V.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),w===!0&&S.cameras.push(V)}}for(let I=0;I<M.length;I++){const w=x[I],b=M[I];w!==null&&b!==void 0&&b.update(w,D,c||a)}rt&&rt(st,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),_=null}const xt=new Xu;xt.setAnimationLoop(dt),this.setAnimationLoop=function(st){rt=st},this.dispose=function(){}}}function D_(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Hu(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,x,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,M,x):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===He&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===He&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=t.get(d).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,x){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=x*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===He&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const M=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function U_(n,t,e,i){let s={},r={},a=[];const o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,x){const E=x.program;i.uniformBlockBinding(M,E)}function c(M,x){let E=s[M.id];E===void 0&&(_(M),E=u(M),s[M.id]=E,M.addEventListener("dispose",p));const L=x.program;i.updateUBOMapping(M,L);const C=t.render.frame;r[M.id]!==C&&(f(M),r[M.id]=C)}function u(M){const x=h();M.__bindingPointIndex=x;const E=n.createBuffer(),L=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,E),E}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const x=s[M.id],E=M.uniforms,L=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,P=E.length;C<P;C++){const k=Array.isArray(E[C])?E[C]:[E[C]];for(let S=0,T=k.length;S<T;S++){const X=k[S];if(m(X,C,S,L)===!0){const Y=X.__offset,ct=Array.isArray(X.value)?X.value:[X.value];let N=0;for(let $=0;$<ct.length;$++){const Z=ct[$],J=v(Z);typeof Z=="number"||typeof Z=="boolean"?(X.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,Y+N,X.__data)):Z.isMatrix3?(X.__data[0]=Z.elements[0],X.__data[1]=Z.elements[1],X.__data[2]=Z.elements[2],X.__data[3]=0,X.__data[4]=Z.elements[3],X.__data[5]=Z.elements[4],X.__data[6]=Z.elements[5],X.__data[7]=0,X.__data[8]=Z.elements[6],X.__data[9]=Z.elements[7],X.__data[10]=Z.elements[8],X.__data[11]=0):(Z.toArray(X.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,X.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,x,E,L){const C=M.value,P=x+"_"+E;if(L[P]===void 0)return typeof C=="number"||typeof C=="boolean"?L[P]=C:L[P]=C.clone(),!0;{const k=L[P];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return L[P]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function _(M){const x=M.uniforms;let E=0;const L=16;for(let P=0,k=x.length;P<k;P++){const S=Array.isArray(x[P])?x[P]:[x[P]];for(let T=0,X=S.length;T<X;T++){const Y=S[T],ct=Array.isArray(Y.value)?Y.value:[Y.value];for(let N=0,$=ct.length;N<$;N++){const Z=ct[N],J=v(Z),H=E%L;H!==0&&L-H<J.boundary&&(E+=L-H),Y.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=E,E+=J.storage}}}const C=E%L;return C>0&&(E+=L-C),M.__size=E,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function p(M){const x=M.target;x.removeEventListener("dispose",p);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Qu{constructor(t={}){const{canvas:e=Pf(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const d=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this._useLegacyLights=!1,this.toneMapping=qn,this.toneMappingExposure=1;const x=this;let E=!1,L=0,C=0,P=null,k=-1,S=null;const T=new Te,X=new Te;let Y=null;const ct=new Lt(0);let N=0,$=e.width,Z=e.height,J=1,H=null,it=null;const rt=new Te(0,0,$,Z),dt=new Te(0,0,$,Z);let xt=!1;const st=new wa;let D=!1,I=!1,w=null;const b=new Qt,K=new pt,at=new F,V={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return P===null?J:1}let R=i;function Q(A,j){for(let et=0;et<A.length;et++){const nt=A[et],tt=e.getContext(nt,j);if(tt!==null)return tt}return null}try{const A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ma}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",B,!1),e.addEventListener("webglcontextcreationerror",Et,!1),R===null){const j=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&j.shift(),R=Q(j,A),R===null)throw Q(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let O,q,W,ut,U,g,y,z,ht,ft,ot,Tt,vt,At,Pt,Ft,mt,$t,Ht,Ot,It,Ct,Vt,Kt;function ue(){O=new Wg(R),q=new Bg(R,O,t),O.init(q),Ct=new R_(R,O,q),W=new w_(R,O,q),ut=new Yg(R),U=new f_,g=new C_(R,O,W,U,q,Ct,ut),y=new kg(x),z=new Vg(x),ht=new ep(R,q),Vt=new Fg(R,O,ht,q),ft=new Xg(R,ht,ut,Vt),ot=new Kg(R,ft,ht,ut),Ht=new Zg(R,q,g),Ft=new zg(U),Tt=new d_(x,y,z,O,q,Vt,Ft),vt=new D_(x,U),At=new m_,Pt=new M_(O,q),$t=new Ng(x,y,z,W,ot,f,l),mt=new A_(x,ot,q),Kt=new U_(R,ut,q,W),Ot=new Og(R,O,ut,q),It=new qg(R,O,ut,q),ut.programs=Tt.programs,x.capabilities=q,x.extensions=O,x.properties=U,x.renderLists=At,x.shadowMap=mt,x.state=W,x.info=ut}ue();const qt=new I_(x,R);this.xr=qt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const A=O.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=O.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize($,Z,!1))},this.getSize=function(A){return A.set($,Z)},this.setSize=function(A,j,et=!0){if(qt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,Z=j,e.width=Math.floor(A*J),e.height=Math.floor(j*J),et===!0&&(e.style.width=A+"px",e.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set($*J,Z*J).floor()},this.setDrawingBufferSize=function(A,j,et){$=A,Z=j,J=et,e.width=Math.floor(A*et),e.height=Math.floor(j*et),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(rt)},this.setViewport=function(A,j,et,nt){A.isVector4?rt.set(A.x,A.y,A.z,A.w):rt.set(A,j,et,nt),W.viewport(T.copy(rt).multiplyScalar(J).floor())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,j,et,nt){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,j,et,nt),W.scissor(X.copy(dt).multiplyScalar(J).floor())},this.getScissorTest=function(){return xt},this.setScissorTest=function(A){W.setScissorTest(xt=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){it=A},this.getClearColor=function(A){return A.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(A=!0,j=!0,et=!0){let nt=0;if(A){let tt=!1;if(P!==null){const wt=P.texture.format;tt=wt===Ru||wt===Cu||wt===wu}if(tt){const wt=P.texture.type,Rt=wt===Yn||wt===Hn||wt===Ea||wt===mi||wt===Tu||wt===Au,Ut=$t.getClearColor(),Bt=$t.getClearAlpha(),Xt=Ut.r,kt=Ut.g,Gt=Ut.b;Rt?(m[0]=Xt,m[1]=kt,m[2]=Gt,m[3]=Bt,R.clearBufferuiv(R.COLOR,0,m)):(_[0]=Xt,_[1]=kt,_[2]=Gt,_[3]=Bt,R.clearBufferiv(R.COLOR,0,_))}else nt|=R.COLOR_BUFFER_BIT}j&&(nt|=R.DEPTH_BUFFER_BIT),et&&(nt|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",B,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),At.dispose(),Pt.dispose(),U.dispose(),y.dispose(),z.dispose(),ot.dispose(),Vt.dispose(),Kt.dispose(),Tt.dispose(),qt.dispose(),qt.removeEventListener("sessionstart",Ue),qt.removeEventListener("sessionend",re),w&&(w.dispose(),w=null),Ne.stop()};function yt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function B(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=ut.autoReset,j=mt.enabled,et=mt.autoUpdate,nt=mt.needsUpdate,tt=mt.type;ue(),ut.autoReset=A,mt.enabled=j,mt.autoUpdate=et,mt.needsUpdate=nt,mt.type=tt}function Et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function bt(A){const j=A.target;j.removeEventListener("dispose",bt),Nt(j)}function Nt(A){Dt(A),U.remove(A)}function Dt(A){const j=U.get(A).programs;j!==void 0&&(j.forEach(function(et){Tt.releaseProgram(et)}),A.isShaderMaterial&&Tt.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,et,nt,tt,wt){j===null&&(j=V);const Rt=tt.isMesh&&tt.matrixWorld.determinant()<0,Ut=Oh(A,j,et,nt,tt);W.setMaterial(nt,Rt);let Bt=et.index,Xt=1;if(nt.wireframe===!0){if(Bt=ft.getWireframeAttribute(et),Bt===void 0)return;Xt=2}const kt=et.drawRange,Gt=et.attributes.position;let de=kt.start*Xt,Ve=(kt.start+kt.count)*Xt;wt!==null&&(de=Math.max(de,wt.start*Xt),Ve=Math.min(Ve,(wt.start+wt.count)*Xt)),Bt!==null?(de=Math.max(de,0),Ve=Math.min(Ve,Bt.count)):Gt!=null&&(de=Math.max(de,0),Ve=Math.min(Ve,Gt.count));const Ee=Ve-de;if(Ee<0||Ee===1/0)return;Vt.setup(tt,nt,Ut,et,Bt);let yn,le=Ot;if(Bt!==null&&(yn=ht.get(Bt),le=It,le.setIndex(yn)),tt.isMesh)nt.wireframe===!0?(W.setLineWidth(nt.wireframeLinewidth*lt()),le.setMode(R.LINES)):le.setMode(R.TRIANGLES);else if(tt.isLine){let Yt=nt.linewidth;Yt===void 0&&(Yt=1),W.setLineWidth(Yt*lt()),tt.isLineSegments?le.setMode(R.LINES):tt.isLineLoop?le.setMode(R.LINE_LOOP):le.setMode(R.LINE_STRIP)}else tt.isPoints?le.setMode(R.POINTS):tt.isSprite&&le.setMode(R.TRIANGLES);if(tt.isBatchedMesh)le.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else if(tt.isInstancedMesh)le.renderInstances(de,Ee,tt.count);else if(et.isInstancedBufferGeometry){const Yt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,io=Math.min(et.instanceCount,Yt);le.renderInstances(de,Ee,io)}else le.render(de,Ee)};function ie(A,j,et){A.transparent===!0&&A.side===Ge&&A.forceSinglePass===!1?(A.side=He,A.needsUpdate=!0,Gs(A,j,et),A.side=jn,A.needsUpdate=!0,Gs(A,j,et),A.side=Ge):Gs(A,j,et)}this.compile=function(A,j,et=null){et===null&&(et=A),p=Pt.get(et),p.init(),M.push(p),et.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(p.pushLight(tt),tt.castShadow&&p.pushShadow(tt))}),A!==et&&A.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(p.pushLight(tt),tt.castShadow&&p.pushShadow(tt))}),p.setupLights(x._useLegacyLights);const nt=new Set;return A.traverse(function(tt){const wt=tt.material;if(wt)if(Array.isArray(wt))for(let Rt=0;Rt<wt.length;Rt++){const Ut=wt[Rt];ie(Ut,et,tt),nt.add(Ut)}else ie(wt,et,tt),nt.add(wt)}),M.pop(),p=null,nt},this.compileAsync=function(A,j,et=null){const nt=this.compile(A,j,et);return new Promise(tt=>{function wt(){if(nt.forEach(function(Rt){U.get(Rt).currentProgram.isReady()&&nt.delete(Rt)}),nt.size===0){tt(A);return}setTimeout(wt,10)}O.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let se=null;function Se(A){se&&se(A)}function Ue(){Ne.stop()}function re(){Ne.start()}const Ne=new Xu;Ne.setAnimationLoop(Se),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(A){se=A,qt.setAnimationLoop(A),A===null?Ne.stop():Ne.start()},qt.addEventListener("sessionstart",Ue),qt.addEventListener("sessionend",re),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),qt.enabled===!0&&qt.isPresenting===!0&&(qt.cameraAutoUpdate===!0&&qt.updateCamera(j),j=qt.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,j,P),p=Pt.get(A,M.length),p.init(),M.push(p),b.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),st.setFromProjectionMatrix(b),I=this.localClippingEnabled,D=Ft.init(this.clippingPlanes,I),v=At.get(A,d.length),v.init(),d.push(v),fn(A,j,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(H,it),this.info.render.frame++,D===!0&&Ft.beginShadows();const et=p.state.shadowsArray;if(mt.render(et,A,j),D===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),$t.render(v,A),p.setupLights(x._useLegacyLights),j.isArrayCamera){const nt=j.cameras;for(let tt=0,wt=nt.length;tt<wt;tt++){const Rt=nt[tt];ka(v,A,Rt,Rt.viewport)}}else ka(v,A,j);P!==null&&(g.updateMultisampleRenderTarget(P),g.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(x,A,j),Vt.resetDefaultState(),k=-1,S=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function fn(A,j,et,nt){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)et=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||st.intersectsSprite(A)){nt&&at.setFromMatrixPosition(A.matrixWorld).applyMatrix4(b);const Rt=ot.update(A),Ut=A.material;Ut.visible&&v.push(A,Rt,Ut,et,at.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||st.intersectsObject(A))){const Rt=ot.update(A),Ut=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),at.copy(A.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),at.copy(Rt.boundingSphere.center)),at.applyMatrix4(A.matrixWorld).applyMatrix4(b)),Array.isArray(Ut)){const Bt=Rt.groups;for(let Xt=0,kt=Bt.length;Xt<kt;Xt++){const Gt=Bt[Xt],de=Ut[Gt.materialIndex];de&&de.visible&&v.push(A,Rt,de,et,at.z,Gt)}}else Ut.visible&&v.push(A,Rt,Ut,et,at.z,null)}}const wt=A.children;for(let Rt=0,Ut=wt.length;Rt<Ut;Rt++)fn(wt[Rt],j,et,nt)}function ka(A,j,et,nt){const tt=A.opaque,wt=A.transmissive,Rt=A.transparent;p.setupLightsView(et),D===!0&&Ft.setGlobalState(x.clippingPlanes,et),wt.length>0&&Fh(tt,wt,j,et),nt&&W.viewport(T.copy(nt)),tt.length>0&&ks(tt,j,et),wt.length>0&&ks(wt,j,et),Rt.length>0&&ks(Rt,j,et),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Fh(A,j,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;const wt=q.isWebGL2;w===null&&(w=new Mi(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")?Ls:Yn,minFilter:Ps,samples:wt?4:0})),x.getDrawingBufferSize(K),wt?w.setSize(K.x,K.y):w.setSize(Br(K.x),Br(K.y));const Rt=x.getRenderTarget();x.setRenderTarget(w),x.getClearColor(ct),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();const Ut=x.toneMapping;x.toneMapping=qn,ks(A,et,nt),g.updateMultisampleRenderTarget(w),g.updateRenderTargetMipmap(w);let Bt=!1;for(let Xt=0,kt=j.length;Xt<kt;Xt++){const Gt=j[Xt],de=Gt.object,Ve=Gt.geometry,Ee=Gt.material,yn=Gt.group;if(Ee.side===Ge&&de.layers.test(nt.layers)){const le=Ee.side;Ee.side=He,Ee.needsUpdate=!0,Ga(de,et,nt,Ve,Ee,yn),Ee.side=le,Ee.needsUpdate=!0,Bt=!0}}Bt===!0&&(g.updateMultisampleRenderTarget(w),g.updateRenderTargetMipmap(w)),x.setRenderTarget(Rt),x.setClearColor(ct,N),x.toneMapping=Ut}function ks(A,j,et){const nt=j.isScene===!0?j.overrideMaterial:null;for(let tt=0,wt=A.length;tt<wt;tt++){const Rt=A[tt],Ut=Rt.object,Bt=Rt.geometry,Xt=nt===null?Rt.material:nt,kt=Rt.group;Ut.layers.test(et.layers)&&Ga(Ut,j,et,Bt,Xt,kt)}}function Ga(A,j,et,nt,tt,wt){A.onBeforeRender(x,j,et,nt,tt,wt),A.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),tt.onBeforeRender(x,j,et,nt,A,wt),tt.transparent===!0&&tt.side===Ge&&tt.forceSinglePass===!1?(tt.side=He,tt.needsUpdate=!0,x.renderBufferDirect(et,j,nt,tt,A,wt),tt.side=jn,tt.needsUpdate=!0,x.renderBufferDirect(et,j,nt,tt,A,wt),tt.side=Ge):x.renderBufferDirect(et,j,nt,tt,A,wt),A.onAfterRender(x,j,et,nt,tt,wt)}function Gs(A,j,et){j.isScene!==!0&&(j=V);const nt=U.get(A),tt=p.state.lights,wt=p.state.shadowsArray,Rt=tt.state.version,Ut=Tt.getParameters(A,tt.state,wt,j,et),Bt=Tt.getProgramCacheKey(Ut);let Xt=nt.programs;nt.environment=A.isMeshStandardMaterial?j.environment:null,nt.fog=j.fog,nt.envMap=(A.isMeshStandardMaterial?z:y).get(A.envMap||nt.environment),Xt===void 0&&(A.addEventListener("dispose",bt),Xt=new Map,nt.programs=Xt);let kt=Xt.get(Bt);if(kt!==void 0){if(nt.currentProgram===kt&&nt.lightsStateVersion===Rt)return Va(A,Ut),kt}else Ut.uniforms=Tt.getUniforms(A),A.onBuild(et,Ut,x),A.onBeforeCompile(Ut,x),kt=Tt.acquireProgram(Ut,Bt),Xt.set(Bt,kt),nt.uniforms=Ut.uniforms;const Gt=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Gt.clippingPlanes=Ft.uniform),Va(A,Ut),nt.needsLights=zh(A),nt.lightsStateVersion=Rt,nt.needsLights&&(Gt.ambientLightColor.value=tt.state.ambient,Gt.lightProbe.value=tt.state.probe,Gt.directionalLights.value=tt.state.directional,Gt.directionalLightShadows.value=tt.state.directionalShadow,Gt.spotLights.value=tt.state.spot,Gt.spotLightShadows.value=tt.state.spotShadow,Gt.rectAreaLights.value=tt.state.rectArea,Gt.ltc_1.value=tt.state.rectAreaLTC1,Gt.ltc_2.value=tt.state.rectAreaLTC2,Gt.pointLights.value=tt.state.point,Gt.pointLightShadows.value=tt.state.pointShadow,Gt.hemisphereLights.value=tt.state.hemi,Gt.directionalShadowMap.value=tt.state.directionalShadowMap,Gt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Gt.spotShadowMap.value=tt.state.spotShadowMap,Gt.spotLightMatrix.value=tt.state.spotLightMatrix,Gt.spotLightMap.value=tt.state.spotLightMap,Gt.pointShadowMap.value=tt.state.pointShadowMap,Gt.pointShadowMatrix.value=tt.state.pointShadowMatrix),nt.currentProgram=kt,nt.uniformsList=null,kt}function Ha(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=wr.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Va(A,j){const et=U.get(A);et.outputColorSpace=j.outputColorSpace,et.batching=j.batching,et.instancing=j.instancing,et.instancingColor=j.instancingColor,et.skinning=j.skinning,et.morphTargets=j.morphTargets,et.morphNormals=j.morphNormals,et.morphColors=j.morphColors,et.morphTargetsCount=j.morphTargetsCount,et.numClippingPlanes=j.numClippingPlanes,et.numIntersection=j.numClipIntersection,et.vertexAlphas=j.vertexAlphas,et.vertexTangents=j.vertexTangents,et.toneMapping=j.toneMapping}function Oh(A,j,et,nt,tt){j.isScene!==!0&&(j=V),g.resetTextureUnits();const wt=j.fog,Rt=nt.isMeshStandardMaterial?j.environment:null,Ut=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Rn,Bt=(nt.isMeshStandardMaterial?z:y).get(nt.envMap||Rt),Xt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,kt=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Gt=!!et.morphAttributes.position,de=!!et.morphAttributes.normal,Ve=!!et.morphAttributes.color;let Ee=qn;nt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ee=x.toneMapping);const yn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,le=yn!==void 0?yn.length:0,Yt=U.get(nt),io=p.state.lights;if(D===!0&&(I===!0||A!==S)){const $e=A===S&&nt.id===k;Ft.setState(nt,A,$e)}let he=!1;nt.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==io.state.version||Yt.outputColorSpace!==Ut||tt.isBatchedMesh&&Yt.batching===!1||!tt.isBatchedMesh&&Yt.batching===!0||tt.isInstancedMesh&&Yt.instancing===!1||!tt.isInstancedMesh&&Yt.instancing===!0||tt.isSkinnedMesh&&Yt.skinning===!1||!tt.isSkinnedMesh&&Yt.skinning===!0||tt.isInstancedMesh&&Yt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Yt.instancingColor===!1&&tt.instanceColor!==null||Yt.envMap!==Bt||nt.fog===!0&&Yt.fog!==wt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Ft.numPlanes||Yt.numIntersection!==Ft.numIntersection)||Yt.vertexAlphas!==Xt||Yt.vertexTangents!==kt||Yt.morphTargets!==Gt||Yt.morphNormals!==de||Yt.morphColors!==Ve||Yt.toneMapping!==Ee||q.isWebGL2===!0&&Yt.morphTargetsCount!==le)&&(he=!0):(he=!0,Yt.__version=nt.version);let ei=Yt.currentProgram;he===!0&&(ei=Gs(nt,j,tt));let Wa=!1,hs=!1,so=!1;const Pe=ei.getUniforms(),ni=Yt.uniforms;if(W.useProgram(ei.program)&&(Wa=!0,hs=!0,so=!0),nt.id!==k&&(k=nt.id,hs=!0),Wa||S!==A){Pe.setValue(R,"projectionMatrix",A.projectionMatrix),Pe.setValue(R,"viewMatrix",A.matrixWorldInverse);const $e=Pe.map.cameraPosition;$e!==void 0&&$e.setValue(R,at.setFromMatrixPosition(A.matrixWorld)),q.logarithmicDepthBuffer&&Pe.setValue(R,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Pe.setValue(R,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,hs=!0,so=!0)}if(tt.isSkinnedMesh){Pe.setOptional(R,tt,"bindMatrix"),Pe.setOptional(R,tt,"bindMatrixInverse");const $e=tt.skeleton;$e&&(q.floatVertexTextures?($e.boneTexture===null&&$e.computeBoneTexture(),Pe.setValue(R,"boneTexture",$e.boneTexture,g)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}tt.isBatchedMesh&&(Pe.setOptional(R,tt,"batchingTexture"),Pe.setValue(R,"batchingTexture",tt._matricesTexture,g));const ro=et.morphAttributes;if((ro.position!==void 0||ro.normal!==void 0||ro.color!==void 0&&q.isWebGL2===!0)&&Ht.update(tt,et,ei),(hs||Yt.receiveShadow!==tt.receiveShadow)&&(Yt.receiveShadow=tt.receiveShadow,Pe.setValue(R,"receiveShadow",tt.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(ni.envMap.value=Bt,ni.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),hs&&(Pe.setValue(R,"toneMappingExposure",x.toneMappingExposure),Yt.needsLights&&Bh(ni,so),wt&&nt.fog===!0&&vt.refreshFogUniforms(ni,wt),vt.refreshMaterialUniforms(ni,nt,J,Z,w),wr.upload(R,Ha(Yt),ni,g)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(wr.upload(R,Ha(Yt),ni,g),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Pe.setValue(R,"center",tt.center),Pe.setValue(R,"modelViewMatrix",tt.modelViewMatrix),Pe.setValue(R,"normalMatrix",tt.normalMatrix),Pe.setValue(R,"modelMatrix",tt.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const $e=nt.uniformsGroups;for(let oo=0,kh=$e.length;oo<kh;oo++)if(q.isWebGL2){const Xa=$e[oo];Kt.update(Xa,ei),Kt.bind(Xa,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function Bh(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function zh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,j,et){U.get(A.texture).__webglTexture=j,U.get(A.depthTexture).__webglTexture=et;const nt=U.get(A);nt.__hasExternalTextures=!0,nt.__hasExternalTextures&&(nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,j){const et=U.get(A);et.__webglFramebuffer=j,et.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,et=0){P=A,L=j,C=et;let nt=!0,tt=null,wt=!1,Rt=!1;if(A){const Bt=U.get(A);Bt.__useDefaultFramebuffer!==void 0?(W.bindFramebuffer(R.FRAMEBUFFER,null),nt=!1):Bt.__webglFramebuffer===void 0?g.setupRenderTarget(A):Bt.__hasExternalTextures&&g.rebindTextures(A,U.get(A.texture).__webglTexture,U.get(A.depthTexture).__webglTexture);const Xt=A.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Rt=!0);const kt=U.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(kt[j])?tt=kt[j][et]:tt=kt[j],wt=!0):q.isWebGL2&&A.samples>0&&g.useMultisampledRTT(A)===!1?tt=U.get(A).__webglMultisampledFramebuffer:Array.isArray(kt)?tt=kt[et]:tt=kt,T.copy(A.viewport),X.copy(A.scissor),Y=A.scissorTest}else T.copy(rt).multiplyScalar(J).floor(),X.copy(dt).multiplyScalar(J).floor(),Y=xt;if(W.bindFramebuffer(R.FRAMEBUFFER,tt)&&q.drawBuffers&&nt&&W.drawBuffers(A,tt),W.viewport(T),W.scissor(X),W.setScissorTest(Y),wt){const Bt=U.get(A.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+j,Bt.__webglTexture,et)}else if(Rt){const Bt=U.get(A.texture),Xt=j||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Bt.__webglTexture,et||0,Xt)}k=-1},this.readRenderTargetPixels=function(A,j,et,nt,tt,wt,Rt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=U.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ut=Ut[Rt]),Ut){W.bindFramebuffer(R.FRAMEBUFFER,Ut);try{const Bt=A.texture,Xt=Bt.format,kt=Bt.type;if(Xt!==cn&&Ct.convert(Xt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=kt===Ls&&(O.has("EXT_color_buffer_half_float")||q.isWebGL2&&O.has("EXT_color_buffer_float"));if(kt!==Yn&&Ct.convert(kt)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(kt===Vn&&(q.isWebGL2||O.has("OES_texture_float")||O.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-nt&&et>=0&&et<=A.height-tt&&R.readPixels(j,et,nt,tt,Ct.convert(Xt),Ct.convert(kt),wt)}finally{const Bt=P!==null?U.get(P).__webglFramebuffer:null;W.bindFramebuffer(R.FRAMEBUFFER,Bt)}}},this.copyFramebufferToTexture=function(A,j,et=0){const nt=Math.pow(2,-et),tt=Math.floor(j.image.width*nt),wt=Math.floor(j.image.height*nt);g.setTexture2D(j,0),R.copyTexSubImage2D(R.TEXTURE_2D,et,0,0,A.x,A.y,tt,wt),W.unbindTexture()},this.copyTextureToTexture=function(A,j,et,nt=0){const tt=j.image.width,wt=j.image.height,Rt=Ct.convert(et.format),Ut=Ct.convert(et.type);g.setTexture2D(et,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,et.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,et.unpackAlignment),j.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,nt,A.x,A.y,tt,wt,Rt,Ut,j.image.data):j.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,nt,A.x,A.y,j.mipmaps[0].width,j.mipmaps[0].height,Rt,j.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,nt,A.x,A.y,Rt,Ut,j.image),nt===0&&et.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(A,j,et,nt,tt=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=A.max.x-A.min.x+1,Rt=A.max.y-A.min.y+1,Ut=A.max.z-A.min.z+1,Bt=Ct.convert(nt.format),Xt=Ct.convert(nt.type);let kt;if(nt.isData3DTexture)g.setTexture3D(nt,0),kt=R.TEXTURE_3D;else if(nt.isDataArrayTexture||nt.isCompressedArrayTexture)g.setTexture2DArray(nt,0),kt=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,nt.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,nt.unpackAlignment);const Gt=R.getParameter(R.UNPACK_ROW_LENGTH),de=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ve=R.getParameter(R.UNPACK_SKIP_PIXELS),Ee=R.getParameter(R.UNPACK_SKIP_ROWS),yn=R.getParameter(R.UNPACK_SKIP_IMAGES),le=et.isCompressedTexture?et.mipmaps[tt]:et.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,le.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,le.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,A.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,A.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,A.min.z),et.isDataTexture||et.isData3DTexture?R.texSubImage3D(kt,tt,j.x,j.y,j.z,wt,Rt,Ut,Bt,Xt,le.data):et.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(kt,tt,j.x,j.y,j.z,wt,Rt,Ut,Bt,le.data)):R.texSubImage3D(kt,tt,j.x,j.y,j.z,wt,Rt,Ut,Bt,Xt,le),R.pixelStorei(R.UNPACK_ROW_LENGTH,Gt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,de),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ve),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ee),R.pixelStorei(R.UNPACK_SKIP_IMAGES,yn),tt===0&&nt.generateMipmaps&&R.generateMipmap(kt),W.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?g.setTextureCube(A,0):A.isData3DTexture?g.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?g.setTexture2DArray(A,0):g.setTexture2D(A,0),W.unbindTexture()},this.resetState=function(){L=0,C=0,P=null,W.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ba?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===jr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xe?_i:Lu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===_i?xe:Rn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class N_ extends Qu{}N_.prototype.isWebGL1Renderer=!0;class Ra{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=i}clone(){return new Ra(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class F_ extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class xc extends Ce{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xi=new Qt,vc=new Qt,ur=[],yc=new Ti,O_=new Qt,_s=new ee,xs=new Ai;class rs extends ee{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new xc(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,O_)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Xi),yc.copy(t.boundingBox).applyMatrix4(Xi),this.boundingBox.union(yc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Xi),xs.copy(t.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const i=this.matrixWorld,s=this.count;if(_s.geometry=this.geometry,_s.material=this.material,_s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(i),t.ray.intersectsSphere(xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Xi),vc.multiplyMatrices(i,Xi),_s.matrixWorld=vc,_s.raycast(t,ur);for(let a=0,o=ur.length;a<o;a++){const l=ur[a];l.instanceId=r,l.object=this,e.push(l)}ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new xc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends wi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Mc=new F,Sc=new F,Ec=new Qt,zo=new Aa,hr=new Ai;class th extends ve{constructor(t=new _e,e=new Kr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Mc.fromBufferAttribute(e,s-1),Sc.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Mc.distanceTo(Sc);t.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hr.copy(i.boundingSphere),hr.applyMatrix4(s),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;Ec.copy(s).invert(),zo.copy(t.ray).applyMatrix4(Ec);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new F,u=new F,h=new F,f=new F,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const d=Math.max(0,a.start),M=Math.min(_.count,a.start+a.count);for(let x=d,E=M-1;x<E;x+=m){const L=_.getX(x),C=_.getX(x+1);if(c.fromBufferAttribute(p,L),u.fromBufferAttribute(p,C),zo.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const k=t.ray.origin.distanceTo(f);k<t.near||k>t.far||e.push({distance:k,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let x=d,E=M-1;x<E;x+=m){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),zo.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(f);C<t.near||C>t.far||e.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const bc=new F,Tc=new F;class eh extends th{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)bc.fromBufferAttribute(e,s),Tc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+bc.distanceTo(Tc);t.setAttribute("lineDistance",new Zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class B_ extends wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ac=new Qt,aa=new Aa,dr=new Ai,fr=new F;class z_ extends ve{constructor(t=new _e,e=new B_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(s),dr.radius+=r,t.ray.intersectsSphere(dr)===!1)return;Ac.copy(s).invert(),aa.copy(t.ray).applyMatrix4(Ac);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=f,v=m;_<v;_++){const p=c.getX(_);fr.fromBufferAttribute(h,p),wc(fr,p,l,s,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,v=m;_<v;_++)fr.fromBufferAttribute(h,_),wc(fr,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function wc(n,t,e,i,s,r,a){const o=aa.distanceSqToPoint(n);if(o<e){const l=new F;aa.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);const u=i[s],f=i[s+1]-u,m=(a-u)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new pt:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new F,s=[],r=[],a=[],o=new F,l=new Qt;for(let m=0;m<=t;m++){const _=m/t;s[m]=this.getTangentAt(_,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ae(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,_))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Ae(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],m*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Pa extends vn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const i=e||new pt,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*h+this.aX,c=f*h+m*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class k_ extends Pa{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function La(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+h)+(l-o)/h;f*=u,m*=u,s(a,o,f,m)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const pr=new F,ko=new La,Go=new La,Ho=new La;class G_ extends vn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new F){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(pr.subVectors(s[0],s[1]).add(s[0]),c=pr);const h=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(pr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=pr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),m),v=Math.pow(h.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);v<1e-4&&(v=1),_<1e-4&&(_=v),p<1e-4&&(p=v),ko.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,_,v,p),Go.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,_,v,p),Ho.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,_,v,p)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Go.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ho.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(ko.calc(l),Go.calc(l),Ho.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Cc(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function H_(n,t){const e=1-n;return e*e*t}function V_(n,t){return 2*(1-n)*n*t}function W_(n,t){return n*n*t}function As(n,t,e,i){return H_(n,t)+V_(n,e)+W_(n,i)}function X_(n,t){const e=1-n;return e*e*e*t}function q_(n,t){const e=1-n;return 3*e*e*n*t}function Y_(n,t){return 3*(1-n)*n*n*t}function $_(n,t){return n*n*n*t}function ws(n,t,e,i,s){return X_(n,t)+q_(n,e)+Y_(n,i)+$_(n,s)}class nh extends vn{constructor(t=new pt,e=new pt,i=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new pt){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ws(t,s.x,r.x,a.x,o.x),ws(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class j_ extends vn{constructor(t=new F,e=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new F){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ws(t,s.x,r.x,a.x,o.x),ws(t,s.y,r.y,a.y,o.y),ws(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ih extends vn{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Z_ extends vn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sh extends vn{constructor(t=new pt,e=new pt,i=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new pt){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(As(t,s.x,r.x,a.x),As(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K_ extends vn{constructor(t=new F,e=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new F){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(As(t,s.x,r.x,a.x),As(t,s.y,r.y,a.y),As(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rh extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return i.set(Cc(o,l.x,c.x,u.x,h.x),Cc(o,l.y,c.y,u.y,h.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var la=Object.freeze({__proto__:null,ArcCurve:k_,CatmullRomCurve3:G_,CubicBezierCurve:nh,CubicBezierCurve3:j_,EllipseCurve:Pa,LineCurve:ih,LineCurve3:Z_,QuadraticBezierCurve:sh,QuadraticBezierCurve3:K_,SplineCurve:rh});class J_ extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new la[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new la[s.type]().fromJSON(s))}return this}}class ts extends J_{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new ih(this.currentPoint.clone(),new pt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new sh(this.currentPoint.clone(),new pt(t,e),new pt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new nh(this.currentPoint.clone(),new pt(t,e),new pt(i,s),new pt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new rh(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){const c=new Pa(t,e,i,s,r,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ia extends _e{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new F,u=new pt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){const m=i+h/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/t+1)/2,u.y=(a[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(o,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Pn extends _e{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],m=[];let _=0;const v=[],p=i/2;let d=0;M(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(m,2));function M(){const E=new F,L=new F;let C=0;const P=(e-t)/i;for(let k=0;k<=r;k++){const S=[],T=k/r,X=T*(e-t)+t;for(let Y=0;Y<=s;Y++){const ct=Y/s,N=ct*l+o,$=Math.sin(N),Z=Math.cos(N);L.x=X*$,L.y=-T*i+p,L.z=X*Z,h.push(L.x,L.y,L.z),E.set($,P,Z).normalize(),f.push(E.x,E.y,E.z),m.push(ct,1-T),S.push(_++)}v.push(S)}for(let k=0;k<s;k++)for(let S=0;S<r;S++){const T=v[S][k],X=v[S+1][k],Y=v[S+1][k+1],ct=v[S][k+1];u.push(T,X,ct),u.push(X,Y,ct),C+=6}c.addGroup(d,C,0),d+=C}function x(E){const L=_,C=new pt,P=new F;let k=0;const S=E===!0?t:e,T=E===!0?1:-1;for(let Y=1;Y<=s;Y++)h.push(0,p*T,0),f.push(0,T,0),m.push(.5,.5),_++;const X=_;for(let Y=0;Y<=s;Y++){const N=Y/s*l+o,$=Math.cos(N),Z=Math.sin(N);P.x=S*Z,P.y=p*T,P.z=S*$,h.push(P.x,P.y,P.z),f.push(0,T,0),C.x=$*.5+.5,C.y=Z*.5*T+.5,m.push(C.x,C.y),_++}for(let Y=0;Y<s;Y++){const ct=L+Y,N=X+Y;E===!0?u.push(N,N+1,ct):u.push(N+1,N,ct),k+=3}c.addGroup(d,k,E===!0?1:2),d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qn extends Pn{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Qn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const mr=new F,gr=new F,Vo=new F,_r=new Je;class oh extends _e{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Ji*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},m=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:v,b:p,c:d}=_r;if(v.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),_r.getNormal(Vo),h[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,h[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,h[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){const x=(M+1)%3,E=h[M],L=h[x],C=_r[u[M]],P=_r[u[x]],k=`${E}_${L}`,S=`${L}_${E}`;S in f&&f[S]?(Vo.dot(f[S].normal)<=r&&(m.push(C.x,C.y,C.z),m.push(P.x,P.y,P.z)),f[S]=null):k in f||(f[k]={index0:c[M],index1:c[x],normal:Vo.clone()})}}for(const _ in f)if(f[_]){const{index0:v,index1:p}=f[_];mr.fromBufferAttribute(o,v),gr.fromBufferAttribute(o,p),m.push(mr.x,mr.y,mr.z),m.push(gr.x,gr.y,gr.z)}this.setAttribute("position",new Zt(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class xi extends ts{constructor(t){super(t),this.uuid=bi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new ts().fromJSON(s))}return this}}const Q_={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=ah(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,h,f,m;if(i&&(r=sx(n,t,r,e)),n.length>80*e){o=c=n[0],l=u=n[1];for(let _=e;_<s;_+=e)h=n[_],f=n[_+1],h<o&&(o=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-o,u-l),m=m!==0?32767/m:0}return Us(r,a,e,o,l,m,0),a}};function ah(n,t,e,i,s){let r,a;if(s===mx(n,t,e,i)>0)for(r=t;r<e;r+=i)a=Rc(r,n[r],n[r+1],a);else for(r=e-i;r>=t;r-=i)a=Rc(r,n[r],n[r+1],a);return a&&Jr(a,a.next)&&(Fs(a),a=a.next),a}function Si(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Jr(e,e.next)||ce(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Us(n,t,e,i,s,r,a){if(!n)return;!a&&r&&cx(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?ex(n,i,s,r):tx(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),Fs(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=nx(Si(n),t,e),Us(n,t,e,i,s,r,2)):a===2&&ix(n,t,e,i,s,r):Us(Si(n),t,e,i,s,r,1);break}}}function tx(n){const t=n.prev,e=n,i=n.next;if(ce(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,u=s<r?s<a?s:a:r<a?r:a,h=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c;let _=i.next;for(;_!==t;){if(_.x>=u&&_.x<=f&&_.y>=h&&_.y<=m&&Zi(s,o,r,l,a,c,_.x,_.y)&&ce(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ex(n,t,e,i){const s=n.prev,r=n,a=n.next;if(ce(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,f=a.y,m=o<l?o<c?o:c:l<c?l:c,_=u<h?u<f?u:f:h<f?h:f,v=o>l?o>c?o:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,d=ca(m,_,t,e,i),M=ca(v,p,t,e,i);let x=n.prevZ,E=n.nextZ;for(;x&&x.z>=d&&E&&E.z<=M;){if(x.x>=m&&x.x<=v&&x.y>=_&&x.y<=p&&x!==s&&x!==a&&Zi(o,u,l,h,c,f,x.x,x.y)&&ce(x.prev,x,x.next)>=0||(x=x.prevZ,E.x>=m&&E.x<=v&&E.y>=_&&E.y<=p&&E!==s&&E!==a&&Zi(o,u,l,h,c,f,E.x,E.y)&&ce(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;x&&x.z>=d;){if(x.x>=m&&x.x<=v&&x.y>=_&&x.y<=p&&x!==s&&x!==a&&Zi(o,u,l,h,c,f,x.x,x.y)&&ce(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;E&&E.z<=M;){if(E.x>=m&&E.x<=v&&E.y>=_&&E.y<=p&&E!==s&&E!==a&&Zi(o,u,l,h,c,f,E.x,E.y)&&ce(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function nx(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!Jr(s,r)&&lh(s,i,i.next,r)&&Ns(s,r)&&Ns(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Fs(i),Fs(i.next),i=n=r),i=i.next}while(i!==n);return Si(i)}function ix(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&dx(a,o)){let l=ch(a,o);a=Si(a,a.next),l=Si(l,l.next),Us(a,t,e,i,s,r,0),Us(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function sx(n,t,e,i){const s=[];let r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=ah(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(hx(c));for(s.sort(rx),r=0;r<s.length;r++)e=ox(s[r],e);return e}function rx(n,t){return n.x-t.x}function ox(n,t){const e=ax(n,t);if(!e)return t;const i=ch(e,n);return Si(i,i.next),Si(e,e.next)}function ax(n,t){let e=t,i=-1/0,s;const r=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,l=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Zi(a<c?r:i,a,l,c,a<c?i:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),Ns(e,n)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&lx(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function lx(n,t){return ce(n.prev,n,t.prev)<0&&ce(t.next,n,n.next)<0}function cx(n,t,e,i){let s=n;do s.z===0&&(s.z=ca(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,ux(s)}function ux(n){let t,e,i,s,r,a,o,l,c=1;do{for(e=n,n=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(a>1);return n}function ca(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function hx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Zi(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function dx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!fx(n,t)&&(Ns(n,t)&&Ns(t,n)&&px(n,t)&&(ce(n.prev,n,t.prev)||ce(n,t.prev,t))||Jr(n,t)&&ce(n.prev,n,n.next)>0&&ce(t.prev,t,t.next)>0)}function ce(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Jr(n,t){return n.x===t.x&&n.y===t.y}function lh(n,t,e,i){const s=vr(ce(n,t,e)),r=vr(ce(n,t,i)),a=vr(ce(e,i,n)),o=vr(ce(e,i,t));return!!(s!==r&&a!==o||s===0&&xr(n,e,t)||r===0&&xr(n,i,t)||a===0&&xr(e,n,i)||o===0&&xr(e,t,i))}function xr(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function vr(n){return n>0?1:n<0?-1:0}function fx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&lh(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ns(n,t){return ce(n.prev,n,n.next)<0?ce(n,t,n.next)>=0&&ce(n,n.prev,t)>=0:ce(n,t,n.prev)<0||ce(n,n.next,t)<0}function px(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ch(n,t){const e=new ua(n.i,n.x,n.y),i=new ua(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Rc(n,t,e,i){const s=new ua(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Fs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ua(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mx(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class xn{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return xn.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Pc(t),Lc(i,t);let a=t.length;e.forEach(Pc);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Lc(i,e[l]);const o=Q_.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Pc(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Lc(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Da extends _e{constructor(t=new xi([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:gx;let x,E=!1,L,C,P,k;d&&(x=d.getSpacedPoints(u),E=!0,f=!1,L=d.computeFrenetFrames(u,!1),C=new F,P=new F,k=new F),f||(p=0,m=0,_=0,v=0);const S=o.extractPoints(c);let T=S.shape;const X=S.holes;if(!xn.isClockWise(T)){T=T.reverse();for(let R=0,Q=X.length;R<Q;R++){const O=X[R];xn.isClockWise(O)&&(X[R]=O.reverse())}}const ct=xn.triangulateShape(T,X),N=T;for(let R=0,Q=X.length;R<Q;R++){const O=X[R];T=T.concat(O)}function $(R,Q,O){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(Q,O)}const Z=T.length,J=ct.length;function H(R,Q,O){let q,W,ut;const U=R.x-Q.x,g=R.y-Q.y,y=O.x-R.x,z=O.y-R.y,ht=U*U+g*g,ft=U*z-g*y;if(Math.abs(ft)>Number.EPSILON){const ot=Math.sqrt(ht),Tt=Math.sqrt(y*y+z*z),vt=Q.x-g/ot,At=Q.y+U/ot,Pt=O.x-z/Tt,Ft=O.y+y/Tt,mt=((Pt-vt)*z-(Ft-At)*y)/(U*z-g*y);q=vt+U*mt-R.x,W=At+g*mt-R.y;const $t=q*q+W*W;if($t<=2)return new pt(q,W);ut=Math.sqrt($t/2)}else{let ot=!1;U>Number.EPSILON?y>Number.EPSILON&&(ot=!0):U<-Number.EPSILON?y<-Number.EPSILON&&(ot=!0):Math.sign(g)===Math.sign(z)&&(ot=!0),ot?(q=-g,W=U,ut=Math.sqrt(ht)):(q=U,W=g,ut=Math.sqrt(ht/2))}return new pt(q/ut,W/ut)}const it=[];for(let R=0,Q=N.length,O=Q-1,q=R+1;R<Q;R++,O++,q++)O===Q&&(O=0),q===Q&&(q=0),it[R]=H(N[R],N[O],N[q]);const rt=[];let dt,xt=it.concat();for(let R=0,Q=X.length;R<Q;R++){const O=X[R];dt=[];for(let q=0,W=O.length,ut=W-1,U=q+1;q<W;q++,ut++,U++)ut===W&&(ut=0),U===W&&(U=0),dt[q]=H(O[q],O[ut],O[U]);rt.push(dt),xt=xt.concat(dt)}for(let R=0;R<p;R++){const Q=R/p,O=m*Math.cos(Q*Math.PI/2),q=_*Math.sin(Q*Math.PI/2)+v;for(let W=0,ut=N.length;W<ut;W++){const U=$(N[W],it[W],q);b(U.x,U.y,-O)}for(let W=0,ut=X.length;W<ut;W++){const U=X[W];dt=rt[W];for(let g=0,y=U.length;g<y;g++){const z=$(U[g],dt[g],q);b(z.x,z.y,-O)}}}const st=_+v;for(let R=0;R<Z;R++){const Q=f?$(T[R],xt[R],st):T[R];E?(P.copy(L.normals[0]).multiplyScalar(Q.x),C.copy(L.binormals[0]).multiplyScalar(Q.y),k.copy(x[0]).add(P).add(C),b(k.x,k.y,k.z)):b(Q.x,Q.y,0)}for(let R=1;R<=u;R++)for(let Q=0;Q<Z;Q++){const O=f?$(T[Q],xt[Q],st):T[Q];E?(P.copy(L.normals[R]).multiplyScalar(O.x),C.copy(L.binormals[R]).multiplyScalar(O.y),k.copy(x[R]).add(P).add(C),b(k.x,k.y,k.z)):b(O.x,O.y,h/u*R)}for(let R=p-1;R>=0;R--){const Q=R/p,O=m*Math.cos(Q*Math.PI/2),q=_*Math.sin(Q*Math.PI/2)+v;for(let W=0,ut=N.length;W<ut;W++){const U=$(N[W],it[W],q);b(U.x,U.y,h+O)}for(let W=0,ut=X.length;W<ut;W++){const U=X[W];dt=rt[W];for(let g=0,y=U.length;g<y;g++){const z=$(U[g],dt[g],q);E?b(z.x,z.y+x[u-1].y,x[u-1].x+O):b(z.x,z.y,h+O)}}}D(),I();function D(){const R=s.length/3;if(f){let Q=0,O=Z*Q;for(let q=0;q<J;q++){const W=ct[q];K(W[2]+O,W[1]+O,W[0]+O)}Q=u+p*2,O=Z*Q;for(let q=0;q<J;q++){const W=ct[q];K(W[0]+O,W[1]+O,W[2]+O)}}else{for(let Q=0;Q<J;Q++){const O=ct[Q];K(O[2],O[1],O[0])}for(let Q=0;Q<J;Q++){const O=ct[Q];K(O[0]+Z*u,O[1]+Z*u,O[2]+Z*u)}}i.addGroup(R,s.length/3-R,0)}function I(){const R=s.length/3;let Q=0;w(N,Q),Q+=N.length;for(let O=0,q=X.length;O<q;O++){const W=X[O];w(W,Q),Q+=W.length}i.addGroup(R,s.length/3-R,1)}function w(R,Q){let O=R.length;for(;--O>=0;){const q=O;let W=O-1;W<0&&(W=R.length-1);for(let ut=0,U=u+p*2;ut<U;ut++){const g=Z*ut,y=Z*(ut+1),z=Q+q+g,ht=Q+W+g,ft=Q+W+y,ot=Q+q+y;at(z,ht,ft,ot)}}}function b(R,Q,O){l.push(R),l.push(Q),l.push(O)}function K(R,Q,O){V(R),V(Q),V(O);const q=s.length/3,W=M.generateTopUV(i,s,q-3,q-2,q-1);lt(W[0]),lt(W[1]),lt(W[2])}function at(R,Q,O,q){V(R),V(Q),V(q),V(Q),V(O),V(q);const W=s.length/3,ut=M.generateSideWallUV(i,s,W-6,W-3,W-2,W-1);lt(ut[0]),lt(ut[1]),lt(ut[3]),lt(ut[1]),lt(ut[2]),lt(ut[3])}function V(R){s.push(l[R*3+0]),s.push(l[R*3+1]),s.push(l[R*3+2])}function lt(R){r.push(R.x),r.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return _x(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new la[s.type]().fromJSON(s)),new Da(i,t.options)}}const gx={generateTopUV:function(n,t,e,i,s){const r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new pt(r,a),new pt(o,l),new pt(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],h=t[i*3+2],f=t[s*3],m=t[s*3+1],_=t[s*3+2],v=t[r*3],p=t[r*3+1],d=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new pt(a,1-l),new pt(c,1-h),new pt(f,1-_),new pt(v,1-d)]:[new pt(o,1-l),new pt(u,1-h),new pt(m,1-_),new pt(p,1-d)]}};function _x(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ua extends _e{constructor(t=new xi([new pt(0,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(a,2));function c(u){const h=s.length/3,f=u.extractPoints(e);let m=f.shape;const _=f.holes;xn.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,d=_.length;p<d;p++){const M=_[p];xn.isClockWise(M)===!0&&(_[p]=M.reverse())}const v=xn.triangulateShape(m,_);for(let p=0,d=_.length;p<d;p++){const M=_[p];m=m.concat(M)}for(let p=0,d=m.length;p<d;p++){const M=m[p];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let p=0,d=v.length;p<d;p++){const M=v[p],x=M[0]+h,E=M[1]+h,L=M[2]+h;i.push(x,E,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return xx(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];i.push(a)}return new Ua(i,t.curveSegments)}}function xx(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Qr extends _e{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new F,f=new F,m=[],_=[],v=[],p=[];for(let d=0;d<=i;d++){const M=[],x=d/i;let E=0;d===0&&a===0?E=.5/e:d===i&&l===Math.PI&&(E=-.5/e);for(let L=0;L<=e;L++){const C=L/e;h.x=-t*Math.cos(s+C*r)*Math.sin(a+x*o),h.y=t*Math.cos(a+x*o),h.z=t*Math.sin(s+C*r)*Math.sin(a+x*o),_.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),p.push(C+E,1-x),M.push(c++)}u.push(M)}for(let d=0;d<i;d++)for(let M=0;M<e;M++){const x=u[d][M+1],E=u[d][M],L=u[d+1][M],C=u[d+1][M+1];(d!==0||a>0)&&m.push(x,E,C),(d!==i-1||l<Math.PI)&&m.push(E,L,C)}this.setIndex(m),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Na extends _e{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new F,h=new F,f=new F;for(let m=0;m<=i;m++)for(let _=0;_<=s;_++){const v=_/s*r,p=m/i*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(v),h.y=(t+e*Math.cos(p))*Math.sin(v),h.z=e*Math.sin(p),o.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=s;_++){const v=(s+1)*m+_-1,p=(s+1)*(m-1)+_-1,d=(s+1)*(m-1)+_,M=(s+1)*m+_;a.push(v,p,M),a.push(p,d,M)}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Na(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Re extends wi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Ic={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class vx{constructor(t,e,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const yx=new vx;class Fa{constructor(t){this.manager=t!==void 0?t:yx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Fa.DEFAULT_MATERIAL_NAME="__DEFAULT";const An={};class Mx extends Error{constructor(t,e){super(t),this.response=e}}class Sx extends Fa{constructor(t){super(t)}load(t,e,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Ic.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(An[t]!==void 0){An[t].push({onLoad:e,onProgress:i,onError:s});return}An[t]=[],An[t].push({onLoad:e,onProgress:i,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=An[t],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,_=m!==0;let v=0;const p=new ReadableStream({start(d){M();function M(){h.read().then(({done:x,value:E})=>{if(x)d.close();else{v+=E.byteLength;const L=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:m});for(let C=0,P=u.length;C<P;C++){const k=u[C];k.onProgress&&k.onProgress(L)}d.enqueue(E),M()}})}}});return new Response(p)}else throw new Mx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{Ic.add(t,c);const u=An[t];delete An[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=An[t];if(u===void 0)throw this.manager.itemError(t),c;delete An[t];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class uh extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Ex extends uh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Wo=new Qt,Dc=new F,Uc=new F;class bx{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Dc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dc),Uc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uc),e.updateMatrixWorld(),Wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Tx extends bx{constructor(){super(new qu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ax extends uh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Tx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Nc=new pt;class wx{constructor(t=new pt(1/0,1/0),e=new pt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Nc.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Nc).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}class ai{constructor(){this.type="ShapePath",this.color=new Lt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new ts,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,i,s){return this.currentPath.quadraticCurveTo(t,e,i,s),this}bezierCurveTo(t,e,i,s,r,a){return this.currentPath.bezierCurveTo(t,e,i,s,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(d){const M=[];for(let x=0,E=d.length;x<E;x++){const L=d[x],C=new xi;C.curves=L.curves,M.push(C)}return M}function i(d,M){const x=M.length;let E=!1;for(let L=x-1,C=0;C<x;L=C++){let P=M[L],k=M[C],S=k.x-P.x,T=k.y-P.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(P=M[C],S=-S,k=M[L],T=-T),d.y<P.y||d.y>k.y)continue;if(d.y===P.y){if(d.x===P.x)return!0}else{const X=T*(d.x-P.x)-S*(d.y-P.y);if(X===0)return!0;if(X<0)continue;E=!E}}else{if(d.y!==P.y)continue;if(k.x<=d.x&&d.x<=P.x||P.x<=d.x&&d.x<=k.x)return!0}}return E}const s=xn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new xi,l.curves=o.curves,c.push(l),c;let u=!s(r[0].getPoints());u=t?!u:u;const h=[],f=[];let m=[],_=0,v;f[_]=void 0,m[_]=[];for(let d=0,M=r.length;d<M;d++)o=r[d],v=o.getPoints(),a=s(v),a=t?!a:a,a?(!u&&f[_]&&_++,f[_]={s:new xi,p:v},f[_].s.curves=o.curves,u&&_++,m[_]=[]):m[_].push({h:o,p:v[0]});if(!f[0])return e(r);if(f.length>1){let d=!1,M=0;for(let x=0,E=f.length;x<E;x++)h[x]=[];for(let x=0,E=f.length;x<E;x++){const L=m[x];for(let C=0;C<L.length;C++){const P=L[C];let k=!0;for(let S=0;S<f.length;S++)i(P.p,f[S].p)&&(x!==S&&M++,k?(k=!1,h[S].push(P)):d=!0);k&&h[x].push(P)}}M>0&&d===!1&&(m=h)}let p;for(let d=0,M=f.length;d<M;d++){l=f[d].s,c.push(l),p=m[d];for(let x=0,E=p.length;x<E;x++)l.holes.push(p[x].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);const Ye=new F_;Ye.background=new Lt(Jt.sky);Ye.fog=new Ra(Jt.sky,jt.fogStart,jt.fogEnd);const gn=new Qe(62,window.innerWidth/window.innerHeight,.5,5e3),us=new Qu({antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0});us.setPixelRatio(Math.min(window.devicePixelRatio,2));us.setSize(window.innerWidth,window.innerHeight);us.outputColorSpace=xe;document.body.appendChild(us.domElement);const hh=new Ax(16774882,1.05);hh.position.set(80,140,60);Ye.add(hh);const Cx=new Ex(14542572,8292974,.55);Ye.add(Cx);const Fc=new F(0,1,0);window.addEventListener("resize",()=>{gn.aspect=window.innerWidth/window.innerHeight,gn.updateProjectionMatrix(),us.setSize(window.innerWidth,window.innerHeight)});function Rx(){const n=new _e,t=new Float32Array([0,0,-1.3,0,.22,.5,-.95,-.06,.42,0,0,-1.3,.95,-.06,.42,0,.22,.5,0,0,-1.3,-.95,-.06,.42,0,-.02,.48,0,0,-1.3,0,-.02,.48,.95,-.06,.42,0,.22,.5,-.95,-.06,.42,0,-.02,.48,0,.22,.5,0,-.02,.48,.95,-.06,.42]);n.setAttribute("position",new Ce(t,3)),n.computeVertexNormals();const e=new Re({color:Jt.paper,flatShading:!0,side:Ge}),i=new ee(n,e),s=new oh(n,18),r=new Kr({color:Jt.ink,transparent:!0,opacity:.22}),a=new eh(s,r),o=new me;return o.add(i),o.add(a),o}const _t=Rx();_t.position.set(0,38,0);const hn=[{id:"TFN",x:510,z:-509,heading:1.885,length:80,width:3},{id:"TFS",x:-61,z:712,heading:-1.396,length:80,width:3},{id:"GMZ",x:-1630,z:752,heading:-1.623,length:60,width:3},{id:"SPC",x:-2967,z:-918,heading:-.611,length:70,width:3},{id:"VDE",x:-3286,z:1364,heading:-2.007,length:55,width:3},{id:"LPA",x:2845,z:1030,heading:-.489,length:90,width:3.5},{id:"FUE",x:6597,z:-417,heading:-.244,length:80,width:3},{id:"ACE",x:7210,z:-1809,heading:-.524,length:80,width:3},{id:"GRAC",x:7455,z:-2588,heading:-1.571,length:40,width:2.5}];for(const n of hn)n.activeHeading=n.heading;function Px(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const Lx=.42,Ix=.55;function Dx(n,t){for(const e of hn){const i=n.x-e.x,s=n.z-e.z,r=Math.cos(e.heading),a=Math.sin(e.heading),o=i*r-s*a,l=i*a+s*r;if(Math.abs(o)>e.width*.5-Lx||Math.abs(l)>e.length*.5-Ix)continue;const c=n.y-e.elevation;if(c<-.5||c>vi.rollingHeight)continue;const u=Px(t-e.activeHeading);if(!(Math.abs(u)>vi.headingTolerance))return e}return null}function Ux(n,t=1){for(const e of hn){const i=n.x-e.x,s=n.z-e.z,r=Math.cos(e.heading),a=Math.sin(e.heading),o=i*r-s*a,l=i*a+s*r;if(Math.abs(o)<=e.width*.55+t&&Math.abs(l)<=e.length*.5+t)return e}return null}function Nx(n,t,e){for(const i of hn){const s=n.x-i.x,r=n.z-i.z,a=Math.sqrt(s*s+r*r),o=n.y-i.elevation;if(a<t&&o<e&&o>-2)return!0}return!1}const dh=[],fh=[],Oc=1,ha=.32,Bc=1,da=.12,zc=1.6,kc=1.2;function Fx(){const n=new me,t=new Re({color:Jt.runway,flatShading:!0}),e=new Qr(.28,10,8);for(let i=0;i<hn.length;i++){const s=hn[i],r=new me,a=new Ci(s.width,s.length);a.rotateX(-Math.PI/2),r.add(new ee(a,t));const o=new me,l=s.width*.68,c=l*1.05,u=new xi;u.moveTo(0,c*.55),u.lineTo(-l/2,-c*.45),u.lineTo(0,-c*.05),u.lineTo(l/2,-c*.45),u.closePath();const h=new Ua(u);h.rotateX(-Math.PI/2);const f=Math.max(7,Math.round(s.length/5));for(let v=0;v<f;v++){const p=v/(f-1)-.5,d=new Zn({color:16771240,transparent:!0,opacity:ha,depthWrite:!1}),M=new ee(h,d);M.position.set(0,.08,p*s.length*.85),M.renderOrder=1,o.add(M),dh.push({mat:d,posT:.5-p})}const _=Math.max(2,Math.floor(s.length/4.5));for(let v=0;v<_;v++){const p=v/(_-1)-.5,d=p*s.length*.97,M=.5-p;for(const x of[-1,1]){const E=new Zn({color:16764006,transparent:!0,opacity:da}),L=new ee(e,E);L.position.set(x*s.width*.6,.35,d),o.add(L),fh.push({mat:E,posT:M})}}r.add(o),r.position.set(s.x,s.elevation+.04,s.z),r.rotation.y=s.heading,n.add(r)}return n}function Ox(n){const t=n%zc/zc;for(const i of dh){const s=(t-i.posT+1)%1;i.mat.opacity=s<.16?Oc-(Oc-ha)*(s/.16):ha}const e=n%kc/kc;for(const i of fh){const s=(e-i.posT+1)%1;i.mat.opacity=s<.22?Bc-(Bc-da)*(s/.22):da}}function Bx(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}const De={TREE:10,SHRUB:20,GRASS:30,CROP:40,URBAN:50,BARE:60,WATER:80};let an=null,ph=[];async function zx(n="/teide/landcover/canaries.png"){const t=new Image;t.src=n,await t.decode();const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(t,0,0);const s=i.getImageData(0,0,t.width,t.height).data,r=new Uint8Array(t.width*t.height);for(let a=0,o=0;o<r.length;a+=4,o++)r[o]=s[a];an={data:r,w:t.width,h:t.height},ph=Hx()}function kx(n,t){const{center:e,metersPerUnit:i}=jt.heightmap,s=n*i,r=-t*i,a=e.lat+r/111320,o=e.lon+s/(111320*Math.cos(e.lat*Math.PI/180));return{lat:a,lon:o}}function Gx(n,t){const{bbox:e,center:i,metersPerUnit:s}=jt.heightmap,r=e.lonW+n/(an.w-1)*(e.lonE-e.lonW),a=e.latN-t/(an.h-1)*(e.latN-e.latS),o=(r-i.lon)*111320*Math.cos(i.lat*Math.PI/180),l=(a-i.lat)*111320;return{x:o/s,z:-l/s}}function mh(n,t){if(!an)return De.WATER;const{lat:e,lon:i}=kx(n,t),{bbox:s}=jt.heightmap,r=(i-s.lonW)/(s.lonE-s.lonW)*(an.w-1),a=(s.latN-e)/(s.latN-s.latS)*(an.h-1);if(r<0||a<0||r>an.w-1||a>an.h-1)return De.WATER;const o=Math.round(r),l=Math.round(a);return an.data[l*an.w+o]}function Hx(){const{data:n,w:t,h:e}=an,{minClusterPixels:i}=Ln.urban,s=new Uint8Array(n.length),r=[],a=[],o=[0,0,0,0];function l(u){const h=u%t,f=u/t|0;let m=0;return h>0&&(o[m++]=u-1),h<t-1&&(o[m++]=u+1),f>0&&(o[m++]=u-t),f<e-1&&(o[m++]=u+t),m}for(let u=0;u<n.length;u++){if(s[u]||n[u]!==De.URBAN)continue;const h=[],f=[u];s[u]=1;let m=0;for(;m<f.length;){const _=f[m++];h.push(_);const v=l(_);for(let p=0;p<v;p++){const d=o[p];!s[d]&&n[d]===De.URBAN&&(s[d]=1,f.push(d))}}h.length<i?a.push(...h):r.push(h)}for(const u of a){const h=l(u),f=new Map;for(let v=0;v<h;v++){const p=n[o[v]];p!==De.URBAN&&p!==De.WATER&&f.set(p,(f.get(p)||0)+1)}let m=De.GRASS,_=0;for(const[v,p]of f)p>_&&(m=v,_=p);n[u]=m}const c=r.map(u=>{let h=0,f=0;const m=[];for(const _ of u){const v=_%t,p=_/t|0,{x:d,z:M}=Gx(v,p);m.push({x:d,z:M}),h+=d,f+=M}return{pixelCount:u.length,centerX:h/u.length,centerZ:f/u.length,pixels:m}});return c.sort((u,h)=>h.pixelCount-u.pixelCount),console.log(`landcover: ${c.length} urban clusters surviving (${a.length} tiny urban pixels reclassified)`),c}function Vx(){return ph}let rn=null;async function Wx(n=jt.heightmap.url){const t=new Image;t.src=n,await t.decode();const e=document.createElement("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(t,0,0),rn={data:i.getImageData(0,0,t.width,t.height).data,w:t.width,h:t.height}}function Xx(n,t){const{center:e,metersPerUnit:i}=jt.heightmap,s=n*i,r=-t*i,a=e.lat+r/111320,o=e.lon+s/(111320*Math.cos(e.lat*Math.PI/180));return{lat:a,lon:o}}function qx(n,t){if(!rn)return 0;const{bbox:e,elevRange:i}=jt.heightmap,s=(t-e.lonW)/(e.lonE-e.lonW)*(rn.w-1),r=(e.latN-n)/(e.latN-e.latS)*(rn.h-1);if(s<0||r<0||s>rn.w-1||r>rn.h-1)return 0;const a=Math.floor(s),o=Math.floor(r),l=Math.min(a+1,rn.w-1),c=Math.min(o+1,rn.h-1),u=s-a,h=r-o,f=i[1]-i[0],m=(_,v)=>{const p=(v*rn.w+_)*4,d=rn.data[p]<<8|rn.data[p+1];return i[0]+d/65535*f};return(1-u)*(1-h)*m(a,o)+u*(1-h)*m(l,o)+(1-u)*h*m(a,c)+u*h*m(l,c)}function os(n,t){const{lat:e,lon:i}=Xx(n,t);return qx(e,i)/jt.heightmap.metersPerUnit}const Gc=55;function gh(n,t,e){let i=e,s=0;for(const r of hn){const a=n-r.x,o=t-r.z,l=Math.cos(r.heading),c=Math.sin(r.heading),u=a*l-o*c,h=a*c+o*l,f=r.length/2,m=r.width/2,_=Math.max(0,Math.abs(u)-m),v=Math.max(0,Math.abs(h)-f),p=Math.sqrt(_*_+v*v);if(p<Gc){const d=Ds.smoothstep(p,0,Gc);i=Ds.lerp(r.elevation,i,d),s=Math.max(s,1-d)}}return{y:i,onRunway:s}}function zs(n,t){return gh(n,t,os(n,t)).y}function Yx(){const n=new Ci(jt.size,jt.size,jt.segments,jt.segments);n.rotateX(-Math.PI/2);const t=n.attributes.position,e=new Float32Array(t.count*3),i=new Lt(Jt.pineCanopy),s=new Lt(Jt.laurelCanopy),r=new Lt(Jt.shrubBody),a=new Lt(Jt.grassGround),o=new Lt(Jt.cropGround),l=new Lt(Jt.urbanGround),c=new Lt(Jt.bareGround),u=new Lt(Jt.shore),h=new Lt(Jt.snow),f=new Lt(Jt.runway),m=new Lt,_=jt.heightmap.metersPerUnit,v=80/_,p=2500/_,d=3200/_,M=Ln.laurelMaxAltitude;for(let E=0;E<t.count;E++){const L=t.getX(E),C=t.getZ(E),P=gh(L,C,os(L,C)),k=P.y,S=P.onRunway;switch(t.setY(E,k),mh(L,C)){case De.TREE:m.copy(k>=M?i:s);break;case De.SHRUB:m.copy(r);break;case De.GRASS:m.copy(a);break;case De.CROP:m.copy(o);break;case De.URBAN:m.copy(l);break;case De.BARE:m.copy(c);break;default:m.copy(u);break}if(k>d)m.copy(h);else if(k>p){const Y=(k-p)/(d-p);m.lerp(h,Y)}if(k<jt.waterLevel+v){const Y=(k-jt.waterLevel)/v;m.lerp(u,1-Math.max(0,Y))}S>.001&&m.lerp(f,S*.35);const X=.94+Bx(L,C)*.12;e[E*3]=m.r*X,e[E*3+1]=m.g*X,e[E*3+2]=m.b*X}n.setAttribute("color",new Ce(e,3)),n.computeVertexNormals();const x=new Re({vertexColors:!0,flatShading:!0});return new ee(n,x)}function $x(){const n=new Ci(jt.size*1.6,jt.size*1.6);n.rotateX(-Math.PI/2);const t=new Re({color:Jt.water,transparent:!0,opacity:.96}),e=new ee(n,t);return e.position.y=jt.waterLevel,e}const jx=.4,Zx=.08,Os=20,$n=Math.ceil(jt.size/Os)+2,Hc=-8e3-Os,_h=Array.from({length:$n*$n},()=>[]);function xh(n,t){return{cx:Math.floor((n-Hc)/Os),cz:Math.floor((t-Hc)/Os)}}function to(n,t,e,i,s){const r=i+jx,a={x:n,z:e,r2:r*r,yMin:t,yMax:t+s+Zx},o=Math.ceil(r/Os),{cx:l,cz:c}=xh(n,e);for(let u=-o;u<=o;u++)for(let h=-o;h<=o;h++){const f=l+h,m=c+u;f<0||m<0||f>=$n||m>=$n||_h[m*$n+f].push(a)}}function Kx(n,t,e){const{cx:i,cz:s}=xh(n,e);if(i<0||s<0||i>=$n||s>=$n)return!1;const r=_h[s*$n+i];for(let a=0;a<r.length;a++){const o=r[a];if(t<o.yMin||t>o.yMax)continue;const l=o.x-n,c=o.z-e;if(l*l+c*c<o.r2)return!0}return!1}const eo=new F(0,1,0);function fa(n,t){for(const e of hn){const i=n-e.x,s=t-e.z,r=(Math.max(e.length,e.width)*.9)**2;if(i*i+s*s<r)return!0}return!1}function Jx(){const{sampleCount:n,treeDensity:t,shrubDensity:e,grassDensity:i,laurelMaxAltitude:s}=Ln,r=[],a=[],o=[],l=[];for(let c=0;c<n;c++){const u=(Math.random()-.5)*jt.size*.95,h=(Math.random()-.5)*jt.size*.95,f=os(u,h);if(f<jt.waterLevel+.5||fa(u,h))continue;const m=mh(u,h);m===De.TREE&&Math.random()<t?f>=s?r.push({x:u,y:f,z:h}):a.push({x:u,y:f,z:h}):m===De.SHRUB&&Math.random()<e?o.push({x:u,y:f,z:h}):m===De.GRASS&&Math.random()<i&&l.push({x:u,y:f,z:h})}return{pines:r,laurels:a,shrubs:o,grasses:l}}function vh(n,t,e,i,s,r,a,o,l){const c=new rs(t,i,n.length),u=new rs(e,s,n.length),h=new Qt,f=new dn,m=new F,_=new F;for(let p=0;p<n.length;p++){const{x:d,y:M,z:x}=n[p],E=r+Math.random()*(a-r);_.set(d,M,x),m.set(E,E+Math.random()*.3,E),f.setFromAxisAngle(eo,Math.random()*Math.PI*2),h.compose(_,f,m),c.setMatrixAt(p,h),u.setMatrixAt(p,h),to(d,M,x,o*E,l*E)}c.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0;const v=new me;return v.add(c,u),v}function Qx(n){const t=new Pn(.18,.26,1.6,5);t.translate(0,.8,0);const e=new Qn(1,4.8,7);e.translate(0,3.8,0);const i=new Re({color:Jt.trunk,flatShading:!0}),s=new Re({color:Jt.pineCanopy,flatShading:!0}),r=Ln.treeScale;return vh(n,t,e,i,s,.75*r,1.3*r,1,6.2)}function tv(n){const t=new Pn(.22,.32,1,5);t.translate(0,.5,0);const e=new Qr(1.7,7,5);e.scale(1,.85,1),e.translate(0,2,0);const i=new Re({color:Jt.trunk,flatShading:!0}),s=new Re({color:Jt.laurelCanopy,flatShading:!0}),r=Ln.treeScale;return vh(n,t,e,i,s,.85*r,1.25*r,1.7,3.5)}function ev(n){const t=new Qn(.7,1,5);t.translate(0,.5,0);const e=new Re({color:Jt.shrubBody,flatShading:!0}),i=new rs(t,e,n.length),s=new Qt,r=new dn,a=new F,o=new F;for(let l=0;l<n.length;l++){const{x:c,y:u,z:h}=n[l],f=.5+Math.random()*.6;o.set(c,u,h),a.set(f+Math.random()*.2,f,f+Math.random()*.2),r.setFromAxisAngle(eo,Math.random()*Math.PI*2),s.compose(o,r,a),i.setMatrixAt(l,s),to(c,u,h,.85*f,1*f)}return i.instanceMatrix.needsUpdate=!0,i}function nv(n){const t=new Qn(.35,.55,4);t.translate(0,.25,0);const e=new Re({color:16777215,flatShading:!0}),i=new rs(t,e,n.length),s=new Qt,r=new dn,a=new F,o=new F,l=new Lt(Jt.grassGround),c=Ln.grassTints,u=new Lt;for(let h=0;h<n.length;h++){const{x:f,y:m,z:_}=n[h],v=.6+Math.random()*.7;o.set(f,m,_),a.set(v,v*(.8+Math.random()*.5),v),r.setFromAxisAngle(eo,Math.random()*Math.PI*2),s.compose(o,r,a),i.setMatrixAt(h,s);const[p,d,M]=c[Math.random()*c.length|0];u.setRGB(l.r*p,l.g*d,l.b*M),i.setColorAt(h,u)}return i.instanceMatrix.needsUpdate=!0,i.instanceColor.needsUpdate=!0,i}function iv(n){const{clusterScaleMin:t,clusterScaleMax:e}=Ln.urban,i=Math.min(1,Math.pow(n/50,.4));return t+i*(e-t)}function sv(){const n=Vx(),{churchClusterPixels:t,housesPerPixel:e,housesMin:i,housesMax:s,houseMinSpacing:r,pixelJitter:a}=Ln.urban,o=[],l=[],c=r*r;for(const u of n){const h=Math.max(i,Math.min(s,Math.round(u.pixelCount*e))),f=iv(u.pixelCount),m=[];let _=0;const v=h*14;for(;m.length<h&&_<v;){_++;const p=u.pixels[Math.random()*u.pixels.length|0],d=p.x+(Math.random()-.5)*a,M=p.z+(Math.random()-.5)*a;let x=!0;for(const L of m){const C=L.x-d,P=L.z-M;if(C*C+P*P<c){x=!1;break}}if(!x)continue;const E=os(d,M);E<jt.waterLevel+.5||fa(d,M)||m.push({x:d,y:E,z:M,scale:f})}if(o.push(...m),u.pixelCount>=t){const p=u.centerX,d=u.centerZ,M=os(p,d);M>=jt.waterLevel+.5&&!fa(p,d)&&l.push({x:p,y:M,z:d,scale:f})}}return{houses:o,churches:l}}function rv(n){const t=new Kn(1.4,1,1.6);t.translate(0,.5,0);const e=new Qn(1.15,.75,4);e.rotateY(Math.PI/4),e.translate(0,1.37,0);const i=new Re({color:Jt.houseWall,flatShading:!0}),s=new Re({color:16777215,flatShading:!0}),r=new rs(t,i,n.length),a=new rs(e,s,n.length),o=new Qt,l=new dn,c=new F,u=new F,h=new Lt(Jt.houseRoof),f=Ln.roofTints,m=new Lt;for(let v=0;v<n.length;v++){const{x:p,y:d,z:M,scale:x}=n[v],E=x*(.85+Math.random()*.3),L=x*(.8+Math.random()*.35),C=x*(.85+Math.random()*.3);u.set(p,d,M),c.set(E,L,C);const P=Math.random()*8|0;l.setFromAxisAngle(eo,P*Math.PI/4),o.compose(u,l,c),r.setMatrixAt(v,o),a.setMatrixAt(v,o);const[k,S,T]=f[Math.random()*f.length|0];m.setRGB(h.r*k,h.g*S,h.b*T),a.setColorAt(v,m),to(p,d,M,.85*x,1.75*x)}r.instanceMatrix.needsUpdate=!0,a.instanceMatrix.needsUpdate=!0,a.instanceColor.needsUpdate=!0;const _=new me;return _.add(r,a),_}function ov(){const n=new Re({color:Jt.houseWall,flatShading:!0}),t=new Re({color:Jt.houseRoof,flatShading:!0}),e=new ee(new Kn(1.6,1.2,2.6),n);e.position.y=.6;const i=new ee(new Qn(1.4,.7,4),t);i.rotation.y=Math.PI/4,i.position.y=1.55;const s=new ee(new Kn(.75,2.4,.75),n);s.position.set(0,1.2,-1.65);const r=new ee(new Qn(.5,1.05,4),t);r.rotation.y=Math.PI/4,r.position.set(0,2.95,-1.65);const a=new me;return a.add(e,i,s,r),a}function av(n){const t=ov(),e=new me;for(const{x:i,y:s,z:r,scale:a}of n){const o=t.clone();o.position.set(i,s,r);const l=a*(.95+Math.random()*.2);o.scale.set(l,l,l),o.rotation.y=Math.random()*Math.PI*2,e.add(o),to(i,s,r,1.9*l,3.5*l)}return e}function lv(){const n=Jx(),t=sv(),e=new me;return n.pines.length&&e.add(Qx(n.pines)),n.laurels.length&&e.add(tv(n.laurels)),n.shrubs.length&&e.add(ev(n.shrubs)),n.grasses.length&&e.add(nv(n.grasses)),t.houses.length&&e.add(rv(t.houses)),t.churches.length&&e.add(av(t.churches)),console.log(`vegetation: ${n.pines.length} pines, ${n.laurels.length} laurels, ${n.shrubs.length} shrubs, ${n.grasses.length} grass tufts, ${t.houses.length} houses, ${t.churches.length} churches`),e}const di=[{x:40,z:-55,radius:12,strength:1.05},{x:-90,z:80,radius:16,strength:.65},{x:170,z:130,radius:9,strength:1.45},{x:-180,z:-140,radius:14,strength:.8},{x:-50,z:220,radius:11,strength:1.2},{x:230,z:-90,radius:8,strength:1.55},{x:-240,z:60,radius:17,strength:.6},{x:120,z:-240,radius:13,strength:.95},{x:380,z:240,radius:11,strength:1.2},{x:-360,z:340,radius:18,strength:.55},{x:410,z:-310,radius:10,strength:1.3},{x:-430,z:-250,radius:14,strength:.8},{x:0,z:470,radius:15,strength:.7},{x:0,z:-480,radius:9,strength:1.45},{x:500,z:60,radius:16,strength:.65},{x:-510,z:-30,radius:12,strength:1.05}],kr=.55,yh=1.05,cv=.9;let vs,Cr,Rr,pa,Bn,Gr;function uv(){const n=new me;for(const o of di)o.baseElevation=zs(o.x,o.z);for(const o of di){const l=new Zn({color:Ze.columnColor,transparent:!0,opacity:Ze.columnOpacity*o.strength,side:Ge,depthWrite:!1}),c=new Pn(o.radius*yh,o.radius*kr,Ze.columnTop,20,1,!0);c.translate(0,Ze.columnTop/2,0);const u=new ee(c,l);u.position.set(o.x,o.baseElevation,o.z),n.add(u)}const t=di.map(o=>Math.max(10,Math.floor(Ze.particleDensity*Math.PI*o.radius*o.radius))),e=t.reduce((o,l)=>o+l,0);vs=new Float32Array(e*3),Cr=new Float32Array(e),Rr=new Float32Array(e),pa=new Uint16Array(e),Bn=new Float32Array(e);const i=new Float32Array(e);let s=0;for(let o=0;o<di.length;o++){const l=di[o];for(let c=0;c<t[o];c++){const u=Math.sqrt(Math.random())*cv,h=Math.random()*Math.PI*2;Cr[s]=Math.cos(h)*u,Rr[s]=Math.sin(h)*u,pa[s]=o,Bn[s]=Math.random(),i[s]=Ze.particleSize*(.7+.5*l.strength);const f=l.radius*kr;vs[s*3+0]=l.x+Cr[s]*f,vs[s*3+1]=l.baseElevation,vs[s*3+2]=l.z+Rr[s]*f,s++}}const r=new _e;r.setAttribute("position",new Ce(vs,3)),r.setAttribute("size",new Ce(i,1));const a=new Jn({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Lt(Ze.particleColor)},uOpacity:{value:Ze.particleOpacity}},vertexShader:`
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
    `});return Gr=new z_(r,a),n.add(Gr),n}function hv(n){if(!Gr)return;const t=Gr.geometry.attributes.position,e=t.array,i=Ze.columnTop,s=Ze.riseSpeed;for(let r=0;r<Bn.length;r++){const a=di[pa[r]];Bn[r]+=s*a.strength/i*n,Bn[r]>=1&&(Bn[r]-=1);const o=a.radius*(kr+(yh-kr)*Bn[r]);e[r*3+0]=a.x+Cr[r]*o,e[r*3+1]=a.baseElevation+Bn[r]*i,e[r*3+2]=a.z+Rr[r]*o}t.needsUpdate=!0}function dv(n,t,e){let i=0;for(const s of di){const r=n-s.x,a=e-s.z,o=Math.sqrt(r*r+a*a);if(o>=s.radius)continue;const l=t-(s.baseElevation??0);if(l<0)continue;const c=1-o/s.radius,u=Math.max(0,1-l/Ze.maxAltitude);i+=Ze.liftAtCenter*s.strength*c*u}return i}const fv=xe;class Hr extends Fa{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,i,s){const r=this,a=new Sx(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},i,s)}parse(t){const e=this;function i(D,I){if(D.nodeType!==1)return;const w=E(D);let b=!1,K=null;switch(D.nodeName){case"svg":I=_(D,I);break;case"style":r(D);break;case"g":I=_(D,I);break;case"path":I=_(D,I),D.hasAttribute("d")&&(K=s(D));break;case"rect":I=_(D,I),K=l(D);break;case"polygon":I=_(D,I),K=c(D);break;case"polyline":I=_(D,I),K=u(D);break;case"circle":I=_(D,I),K=h(D);break;case"ellipse":I=_(D,I),K=f(D);break;case"line":I=_(D,I),K=m(D);break;case"defs":b=!0;break;case"use":I=_(D,I);const lt=(D.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),R=D.viewportElement.getElementById(lt);R?i(R,I):console.warn("SVGLoader: 'use node' references non-existent node id: "+lt);break}K&&(I.fill!==void 0&&I.fill!=="none"&&K.color.setStyle(I.fill,fv),C(K,dt),Y.push(K),K.userData={node:D,style:I});const at=D.childNodes;for(let V=0;V<at.length;V++){const lt=at[V];b&&lt.nodeName!=="style"&&lt.nodeName!=="defs"||i(lt,I)}w&&(N.pop(),N.length>0?dt.copy(N[N.length-1]):dt.identity())}function s(D){const I=new ai,w=new pt,b=new pt,K=new pt;let at=!0,V=!1;const lt=D.getAttribute("d");if(lt===""||lt==="none")return null;const R=lt.match(/[a-df-z][^a-df-z]*/ig);for(let Q=0,O=R.length;Q<O;Q++){const q=R[Q],W=q.charAt(0),ut=q.slice(1).trim();at===!0&&(V=!0,at=!1);let U;switch(W){case"M":U=p(ut);for(let g=0,y=U.length;g<y;g+=2)w.x=U[g+0],w.y=U[g+1],b.x=w.x,b.y=w.y,g===0?I.moveTo(w.x,w.y):I.lineTo(w.x,w.y),g===0&&K.copy(w);break;case"H":U=p(ut);for(let g=0,y=U.length;g<y;g++)w.x=U[g],b.x=w.x,b.y=w.y,I.lineTo(w.x,w.y),g===0&&V===!0&&K.copy(w);break;case"V":U=p(ut);for(let g=0,y=U.length;g<y;g++)w.y=U[g],b.x=w.x,b.y=w.y,I.lineTo(w.x,w.y),g===0&&V===!0&&K.copy(w);break;case"L":U=p(ut);for(let g=0,y=U.length;g<y;g+=2)w.x=U[g+0],w.y=U[g+1],b.x=w.x,b.y=w.y,I.lineTo(w.x,w.y),g===0&&V===!0&&K.copy(w);break;case"C":U=p(ut);for(let g=0,y=U.length;g<y;g+=6)I.bezierCurveTo(U[g+0],U[g+1],U[g+2],U[g+3],U[g+4],U[g+5]),b.x=U[g+2],b.y=U[g+3],w.x=U[g+4],w.y=U[g+5],g===0&&V===!0&&K.copy(w);break;case"S":U=p(ut);for(let g=0,y=U.length;g<y;g+=4)I.bezierCurveTo(v(w.x,b.x),v(w.y,b.y),U[g+0],U[g+1],U[g+2],U[g+3]),b.x=U[g+0],b.y=U[g+1],w.x=U[g+2],w.y=U[g+3],g===0&&V===!0&&K.copy(w);break;case"Q":U=p(ut);for(let g=0,y=U.length;g<y;g+=4)I.quadraticCurveTo(U[g+0],U[g+1],U[g+2],U[g+3]),b.x=U[g+0],b.y=U[g+1],w.x=U[g+2],w.y=U[g+3],g===0&&V===!0&&K.copy(w);break;case"T":U=p(ut);for(let g=0,y=U.length;g<y;g+=2){const z=v(w.x,b.x),ht=v(w.y,b.y);I.quadraticCurveTo(z,ht,U[g+0],U[g+1]),b.x=z,b.y=ht,w.x=U[g+0],w.y=U[g+1],g===0&&V===!0&&K.copy(w)}break;case"A":U=p(ut,[3,4],7);for(let g=0,y=U.length;g<y;g+=7){if(U[g+5]==w.x&&U[g+6]==w.y)continue;const z=w.clone();w.x=U[g+5],w.y=U[g+6],b.x=w.x,b.y=w.y,a(I,U[g],U[g+1],U[g+2],U[g+3],U[g+4],z,w),g===0&&V===!0&&K.copy(w)}break;case"m":U=p(ut);for(let g=0,y=U.length;g<y;g+=2)w.x+=U[g+0],w.y+=U[g+1],b.x=w.x,b.y=w.y,g===0?I.moveTo(w.x,w.y):I.lineTo(w.x,w.y),g===0&&K.copy(w);break;case"h":U=p(ut);for(let g=0,y=U.length;g<y;g++)w.x+=U[g],b.x=w.x,b.y=w.y,I.lineTo(w.x,w.y),g===0&&V===!0&&K.copy(w);break;case"v":U=p(ut);for(let g=0,y=U.length;g<y;g++)w.y+=U[g],b.x=w.x,b.y=w.y,I.lineTo(w.x,w.y),g===0&&V===!0&&K.copy(w);break;case"l":U=p(ut);for(let g=0,y=U.length;g<y;g+=2)w.x+=U[g+0],w.y+=U[g+1],b.x=w.x,b.y=w.y,I.lineTo(w.x,w.y),g===0&&V===!0&&K.copy(w);break;case"c":U=p(ut);for(let g=0,y=U.length;g<y;g+=6)I.bezierCurveTo(w.x+U[g+0],w.y+U[g+1],w.x+U[g+2],w.y+U[g+3],w.x+U[g+4],w.y+U[g+5]),b.x=w.x+U[g+2],b.y=w.y+U[g+3],w.x+=U[g+4],w.y+=U[g+5],g===0&&V===!0&&K.copy(w);break;case"s":U=p(ut);for(let g=0,y=U.length;g<y;g+=4)I.bezierCurveTo(v(w.x,b.x),v(w.y,b.y),w.x+U[g+0],w.y+U[g+1],w.x+U[g+2],w.y+U[g+3]),b.x=w.x+U[g+0],b.y=w.y+U[g+1],w.x+=U[g+2],w.y+=U[g+3],g===0&&V===!0&&K.copy(w);break;case"q":U=p(ut);for(let g=0,y=U.length;g<y;g+=4)I.quadraticCurveTo(w.x+U[g+0],w.y+U[g+1],w.x+U[g+2],w.y+U[g+3]),b.x=w.x+U[g+0],b.y=w.y+U[g+1],w.x+=U[g+2],w.y+=U[g+3],g===0&&V===!0&&K.copy(w);break;case"t":U=p(ut);for(let g=0,y=U.length;g<y;g+=2){const z=v(w.x,b.x),ht=v(w.y,b.y);I.quadraticCurveTo(z,ht,w.x+U[g+0],w.y+U[g+1]),b.x=z,b.y=ht,w.x=w.x+U[g+0],w.y=w.y+U[g+1],g===0&&V===!0&&K.copy(w)}break;case"a":U=p(ut,[3,4],7);for(let g=0,y=U.length;g<y;g+=7){if(U[g+5]==0&&U[g+6]==0)continue;const z=w.clone();w.x+=U[g+5],w.y+=U[g+6],b.x=w.x,b.y=w.y,a(I,U[g],U[g+1],U[g+2],U[g+3],U[g+4],z,w),g===0&&V===!0&&K.copy(w)}break;case"Z":case"z":I.currentPath.autoClose=!0,I.currentPath.curves.length>0&&(w.copy(K),I.currentPath.currentPoint.copy(w),at=!0);break;default:console.warn(q)}V=!1}return I}function r(D){if(!(!D.sheet||!D.sheet.cssRules||!D.sheet.cssRules.length))for(let I=0;I<D.sheet.cssRules.length;I++){const w=D.sheet.cssRules[I];if(w.type!==1)continue;const b=w.selectorText.split(/,/gm).filter(Boolean).map(K=>K.trim());for(let K=0;K<b.length;K++){const at=Object.fromEntries(Object.entries(w.style).filter(([,V])=>V!==""));ct[b[K]]=Object.assign(ct[b[K]]||{},at)}}}function a(D,I,w,b,K,at,V,lt){if(I==0||w==0){D.lineTo(lt.x,lt.y);return}b=b*Math.PI/180,I=Math.abs(I),w=Math.abs(w);const R=(V.x-lt.x)/2,Q=(V.y-lt.y)/2,O=Math.cos(b)*R+Math.sin(b)*Q,q=-Math.sin(b)*R+Math.cos(b)*Q;let W=I*I,ut=w*w;const U=O*O,g=q*q,y=U/W+g/ut;if(y>1){const mt=Math.sqrt(y);I=mt*I,w=mt*w,W=I*I,ut=w*w}const z=W*g+ut*U,ht=(W*ut-z)/z;let ft=Math.sqrt(Math.max(0,ht));K===at&&(ft=-ft);const ot=ft*I*q/w,Tt=-ft*w*O/I,vt=Math.cos(b)*ot-Math.sin(b)*Tt+(V.x+lt.x)/2,At=Math.sin(b)*ot+Math.cos(b)*Tt+(V.y+lt.y)/2,Pt=o(1,0,(O-ot)/I,(q-Tt)/w),Ft=o((O-ot)/I,(q-Tt)/w,(-O-ot)/I,(-q-Tt)/w)%(Math.PI*2);D.currentPath.absellipse(vt,At,I,w,Pt,Pt+Ft,at===0,b)}function o(D,I,w,b){const K=D*w+I*b,at=Math.sqrt(D*D+I*I)*Math.sqrt(w*w+b*b);let V=Math.acos(Math.max(-1,Math.min(1,K/at)));return D*b-I*w<0&&(V=-V),V}function l(D){const I=x(D.getAttribute("x")||0),w=x(D.getAttribute("y")||0),b=x(D.getAttribute("rx")||D.getAttribute("ry")||0),K=x(D.getAttribute("ry")||D.getAttribute("rx")||0),at=x(D.getAttribute("width")),V=x(D.getAttribute("height")),lt=1-.551915024494,R=new ai;return R.moveTo(I+b,w),R.lineTo(I+at-b,w),(b!==0||K!==0)&&R.bezierCurveTo(I+at-b*lt,w,I+at,w+K*lt,I+at,w+K),R.lineTo(I+at,w+V-K),(b!==0||K!==0)&&R.bezierCurveTo(I+at,w+V-K*lt,I+at-b*lt,w+V,I+at-b,w+V),R.lineTo(I+b,w+V),(b!==0||K!==0)&&R.bezierCurveTo(I+b*lt,w+V,I,w+V-K*lt,I,w+V-K),R.lineTo(I,w+K),(b!==0||K!==0)&&R.bezierCurveTo(I,w+K*lt,I+b*lt,w,I+b,w),R}function c(D){function I(at,V,lt){const R=x(V),Q=x(lt);K===0?b.moveTo(R,Q):b.lineTo(R,Q),K++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new ai;let K=0;return D.getAttribute("points").replace(w,I),b.currentPath.autoClose=!0,b}function u(D){function I(at,V,lt){const R=x(V),Q=x(lt);K===0?b.moveTo(R,Q):b.lineTo(R,Q),K++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,b=new ai;let K=0;return D.getAttribute("points").replace(w,I),b.currentPath.autoClose=!1,b}function h(D){const I=x(D.getAttribute("cx")||0),w=x(D.getAttribute("cy")||0),b=x(D.getAttribute("r")||0),K=new ts;K.absarc(I,w,b,0,Math.PI*2);const at=new ai;return at.subPaths.push(K),at}function f(D){const I=x(D.getAttribute("cx")||0),w=x(D.getAttribute("cy")||0),b=x(D.getAttribute("rx")||0),K=x(D.getAttribute("ry")||0),at=new ts;at.absellipse(I,w,b,K,0,Math.PI*2);const V=new ai;return V.subPaths.push(at),V}function m(D){const I=x(D.getAttribute("x1")||0),w=x(D.getAttribute("y1")||0),b=x(D.getAttribute("x2")||0),K=x(D.getAttribute("y2")||0),at=new ai;return at.moveTo(I,w),at.lineTo(b,K),at.currentPath.autoClose=!1,at}function _(D,I){I=Object.assign({},I);let w={};if(D.hasAttribute("class")){const V=D.getAttribute("class").split(/\s/).filter(Boolean).map(lt=>lt.trim());for(let lt=0;lt<V.length;lt++)w=Object.assign(w,ct["."+V[lt]])}D.hasAttribute("id")&&(w=Object.assign(w,ct["#"+D.getAttribute("id")]));function b(V,lt,R){R===void 0&&(R=function(O){return O.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),O}),D.hasAttribute(V)&&(I[lt]=R(D.getAttribute(V))),w[V]&&(I[lt]=R(w[V])),D.style&&D.style[V]!==""&&(I[lt]=R(D.style[V]))}function K(V){return Math.max(0,Math.min(1,x(V)))}function at(V){return Math.max(0,x(V))}return b("fill","fill"),b("fill-opacity","fillOpacity",K),b("fill-rule","fillRule"),b("opacity","opacity",K),b("stroke","stroke"),b("stroke-opacity","strokeOpacity",K),b("stroke-width","strokeWidth",at),b("stroke-linejoin","strokeLineJoin"),b("stroke-linecap","strokeLineCap"),b("stroke-miterlimit","strokeMiterLimit",at),b("visibility","visibility"),I}function v(D,I){return D-(I-D)}function p(D,I,w){if(typeof D!="string")throw new TypeError("Invalid input: "+typeof D);const b={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},K=0,at=1,V=2,lt=3;let R=K,Q=!0,O="",q="";const W=[];function ut(z,ht,ft){const ot=new SyntaxError('Unexpected character "'+z+'" at index '+ht+".");throw ot.partial=ft,ot}function U(){O!==""&&(q===""?W.push(Number(O)):W.push(Number(O)*Math.pow(10,Number(q)))),O="",q=""}let g;const y=D.length;for(let z=0;z<y;z++){if(g=D[z],Array.isArray(I)&&I.includes(W.length%w)&&b.FLAGS.test(g)){R=at,O=g,U();continue}if(R===K){if(b.WHITESPACE.test(g))continue;if(b.DIGIT.test(g)||b.SIGN.test(g)){R=at,O=g;continue}if(b.POINT.test(g)){R=V,O=g;continue}b.COMMA.test(g)&&(Q&&ut(g,z,W),Q=!0)}if(R===at){if(b.DIGIT.test(g)){O+=g;continue}if(b.POINT.test(g)){O+=g,R=V;continue}if(b.EXP.test(g)){R=lt;continue}b.SIGN.test(g)&&O.length===1&&b.SIGN.test(O[0])&&ut(g,z,W)}if(R===V){if(b.DIGIT.test(g)){O+=g;continue}if(b.EXP.test(g)){R=lt;continue}b.POINT.test(g)&&O[O.length-1]==="."&&ut(g,z,W)}if(R===lt){if(b.DIGIT.test(g)){q+=g;continue}if(b.SIGN.test(g)){if(q===""){q+=g;continue}q.length===1&&b.SIGN.test(q)&&ut(g,z,W)}}b.WHITESPACE.test(g)?(U(),R=K,Q=!1):b.COMMA.test(g)?(U(),R=K,Q=!0):b.SIGN.test(g)?(U(),R=at,O=g):b.POINT.test(g)?(U(),R=V,O=g):ut(g,z,W)}return U(),W}const d=["mm","cm","in","pt","pc","px"],M={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x(D){let I="px";if(typeof D=="string"||D instanceof String)for(let b=0,K=d.length;b<K;b++){const at=d[b];if(D.endsWith(at)){I=at,D=D.substring(0,D.length-at.length);break}}let w;return I==="px"&&e.defaultUnit!=="px"?w=M.in[e.defaultUnit]/e.defaultDPI:(w=M[I][e.defaultUnit],w<0&&(w=M[I].in*e.defaultDPI)),w*parseFloat(D)}function E(D){if(!(D.hasAttribute("transform")||D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))))return null;const I=L(D);return N.length>0&&I.premultiply(N[N.length-1]),dt.copy(I),N.push(I),I}function L(D){const I=new zt,w=$;if(D.nodeName==="use"&&(D.hasAttribute("x")||D.hasAttribute("y"))){const b=x(D.getAttribute("x")),K=x(D.getAttribute("y"));I.translate(b,K)}if(D.hasAttribute("transform")){const b=D.getAttribute("transform").split(")");for(let K=b.length-1;K>=0;K--){const at=b[K].trim();if(at==="")continue;const V=at.indexOf("("),lt=at.length;if(V>0&&V<lt){const R=at.slice(0,V),Q=p(at.slice(V+1));switch(w.identity(),R){case"translate":if(Q.length>=1){const O=Q[0];let q=0;Q.length>=2&&(q=Q[1]),w.translate(O,q)}break;case"rotate":if(Q.length>=1){let O=0,q=0,W=0;O=Q[0]*Math.PI/180,Q.length>=3&&(q=Q[1],W=Q[2]),Z.makeTranslation(-q,-W),J.makeRotation(O),H.multiplyMatrices(J,Z),Z.makeTranslation(q,W),w.multiplyMatrices(Z,H)}break;case"scale":if(Q.length>=1){const O=Q[0];let q=O;Q.length>=2&&(q=Q[1]),w.scale(O,q)}break;case"skewX":Q.length===1&&w.set(1,Math.tan(Q[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Q.length===1&&w.set(1,0,0,Math.tan(Q[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Q.length===6&&w.set(Q[0],Q[2],Q[4],Q[1],Q[3],Q[5],0,0,1);break}}I.premultiply(w)}}return I}function C(D,I){function w(V){rt.set(V.x,V.y,1).applyMatrix3(I),V.set(rt.x,rt.y)}function b(V){const lt=V.xRadius,R=V.yRadius,Q=Math.cos(V.aRotation),O=Math.sin(V.aRotation),q=new F(lt*Q,lt*O,0),W=new F(-R*O,R*Q,0),ut=q.applyMatrix3(I),U=W.applyMatrix3(I),g=$.set(ut.x,U.x,0,ut.y,U.y,0,0,0,1),y=Z.copy(g).invert(),ft=J.copy(y).transpose().multiply(y).elements,ot=X(ft[0],ft[1],ft[4]),Tt=Math.sqrt(ot.rt1),vt=Math.sqrt(ot.rt2);if(V.xRadius=1/Tt,V.yRadius=1/vt,V.aRotation=Math.atan2(ot.sn,ot.cs),!((V.aEndAngle-V.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Pt=Z.set(Tt,0,0,0,vt,0,0,0,1),Ft=J.set(ot.cs,ot.sn,0,-ot.sn,ot.cs,0,0,0,1),mt=Pt.multiply(Ft).multiply(g),$t=Ht=>{const{x:Ot,y:It}=new F(Math.cos(Ht),Math.sin(Ht),0).applyMatrix3(mt);return Math.atan2(It,Ot)};V.aStartAngle=$t(V.aStartAngle),V.aEndAngle=$t(V.aEndAngle),P(I)&&(V.aClockwise=!V.aClockwise)}}function K(V){const lt=S(I),R=T(I);V.xRadius*=lt,V.yRadius*=R;const Q=lt>Number.EPSILON?Math.atan2(I.elements[1],I.elements[0]):Math.atan2(-I.elements[3],I.elements[4]);V.aRotation+=Q,P(I)&&(V.aStartAngle*=-1,V.aEndAngle*=-1,V.aClockwise=!V.aClockwise)}const at=D.subPaths;for(let V=0,lt=at.length;V<lt;V++){const Q=at[V].curves;for(let O=0;O<Q.length;O++){const q=Q[O];q.isLineCurve?(w(q.v1),w(q.v2)):q.isCubicBezierCurve?(w(q.v0),w(q.v1),w(q.v2),w(q.v3)):q.isQuadraticBezierCurve?(w(q.v0),w(q.v1),w(q.v2)):q.isEllipseCurve&&(it.set(q.aX,q.aY),w(it),q.aX=it.x,q.aY=it.y,k(I)?b(q):K(q))}}}function P(D){const I=D.elements;return I[0]*I[4]-I[1]*I[3]<0}function k(D){const I=D.elements,w=I[0]*I[3]+I[1]*I[4];if(w===0)return!1;const b=S(D),K=T(D);return Math.abs(w/(b*K))>Number.EPSILON}function S(D){const I=D.elements;return Math.sqrt(I[0]*I[0]+I[1]*I[1])}function T(D){const I=D.elements;return Math.sqrt(I[3]*I[3]+I[4]*I[4])}function X(D,I,w){let b,K,at,V,lt;const R=D+w,Q=D-w,O=Math.sqrt(Q*Q+4*I*I);return R>0?(b=.5*(R+O),lt=1/b,K=D*lt*w-I*lt*I):R<0?K=.5*(R-O):(b=.5*O,K=-.5*O),Q>0?at=Q+O:at=Q-O,Math.abs(at)>2*Math.abs(I)?(lt=-2*I/at,V=1/Math.sqrt(1+lt*lt),at=lt*V):Math.abs(I)===0?(at=1,V=0):(lt=-.5*at/I,at=1/Math.sqrt(1+lt*lt),V=lt*at),Q>0&&(lt=at,at=-V,V=lt),{rt1:b,rt2:K,cs:at,sn:V}}const Y=[],ct={},N=[],$=new zt,Z=new zt,J=new zt,H=new zt,it=new pt,rt=new F,dt=new zt,xt=new DOMParser().parseFromString(t,"image/svg+xml");return i(xt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:Y,xml:xt.documentElement}}static createShapes(t){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:i.ORIGIN,t:0};function r(v,p,d,M){const x=v.x,E=p.x,L=d.x,C=M.x,P=v.y,k=p.y,S=d.y,T=M.y,X=(C-L)*(P-S)-(T-S)*(x-L),Y=(E-x)*(P-S)-(k-P)*(x-L),ct=(T-S)*(E-x)-(C-L)*(k-P),N=X/ct,$=Y/ct;if(ct===0&&X!==0||N<=0||N>=1||$<0||$>1)return null;if(X===0&&ct===0){for(let Z=0;Z<2;Z++)if(a(Z===0?d:M,v,p),s.loc==i.ORIGIN){const J=Z===0?d:M;return{x:J.x,y:J.y,t:s.t}}else if(s.loc==i.BETWEEN){const J=+(x+s.t*(E-x)).toPrecision(10),H=+(P+s.t*(k-P)).toPrecision(10);return{x:J,y:H,t:s.t}}return null}else{for(let H=0;H<2;H++)if(a(H===0?d:M,v,p),s.loc==i.ORIGIN){const it=H===0?d:M;return{x:it.x,y:it.y,t:s.t}}const Z=+(x+N*(E-x)).toPrecision(10),J=+(P+N*(k-P)).toPrecision(10);return{x:Z,y:J,t:N}}}function a(v,p,d){const M=d.x-p.x,x=d.y-p.y,E=v.x-p.x,L=v.y-p.y,C=M*L-E*x;if(v.x===p.x&&v.y===p.y){s.loc=i.ORIGIN,s.t=0;return}if(v.x===d.x&&v.y===d.y){s.loc=i.DESTINATION,s.t=1;return}if(C<-Number.EPSILON){s.loc=i.LEFT;return}if(C>Number.EPSILON){s.loc=i.RIGHT;return}if(M*E<0||x*L<0){s.loc=i.BEHIND;return}if(Math.sqrt(M*M+x*x)<Math.sqrt(E*E+L*L)){s.loc=i.BEYOND;return}let P;M!==0?P=E/M:P=L/x,s.loc=i.BETWEEN,s.t=P}function o(v,p){const d=[],M=[];for(let x=1;x<v.length;x++){const E=v[x-1],L=v[x];for(let C=1;C<p.length;C++){const P=p[C-1],k=p[C],S=r(E,L,P,k);S!==null&&d.find(T=>T.t<=S.t+Number.EPSILON&&T.t>=S.t-Number.EPSILON)===void 0&&(d.push(S),M.push(new pt(S.x,S.y)))}}return M}function l(v,p,d){const M=new pt;p.getCenter(M);const x=[];return d.forEach(E=>{E.boundingBox.containsPoint(M)&&o(v,E.points).forEach(C=>{x.push({identifier:E.identifier,isCW:E.isCW,point:C})})}),x.sort((E,L)=>E.point.x-L.point.x),x}function c(v,p,d,M,x){(x==null||x==="")&&(x="nonzero");const E=new pt;v.boundingBox.getCenter(E);const L=[new pt(d,E.y),new pt(M,E.y)],C=l(L,v.boundingBox,p);C.sort((Y,ct)=>Y.point.x-ct.point.x);const P=[],k=[];C.forEach(Y=>{Y.identifier===v.identifier?P.push(Y):k.push(Y)});const S=P[0].point.x,T=[];let X=0;for(;X<k.length&&k[X].point.x<S;)T.length>0&&T[T.length-1]===k[X].identifier?T.pop():T.push(k[X].identifier),X++;if(T.push(v.identifier),x==="evenodd"){const Y=T.length%2===0,ct=T[T.length-2];return{identifier:v.identifier,isHole:Y,for:ct}}else if(x==="nonzero"){let Y=!0,ct=null,N=null;for(let $=0;$<T.length;$++){const Z=T[$];Y?(N=p[Z].isCW,Y=!1,ct=Z):N!==p[Z].isCW&&(N=p[Z].isCW,Y=!0)}return{identifier:v.identifier,isHole:Y,for:ct}}else console.warn('fill-rule: "'+x+'" is currently not implemented.')}let u=999999999,h=-999999999,f=t.subPaths.map(v=>{const p=v.getPoints();let d=-999999999,M=999999999,x=-999999999,E=999999999;for(let L=0;L<p.length;L++){const C=p[L];C.y>d&&(d=C.y),C.y<M&&(M=C.y),C.x>x&&(x=C.x),C.x<E&&(E=C.x)}return h<=x&&(h=x+1),u>=E&&(u=E-1),{curves:v.curves,points:p,isCW:xn.isClockWise(p),identifier:-1,boundingBox:new wx(new pt(E,M),new pt(x,d))}});f=f.filter(v=>v.points.length>1);for(let v=0;v<f.length;v++)f[v].identifier=v;const m=f.map(v=>c(v,f,u,h,t.userData?t.userData.style.fillRule:void 0)),_=[];return f.forEach(v=>{if(!m[v.identifier].isHole){const d=new xi;d.curves=v.curves,m.filter(x=>x.isHole&&x.for===v.identifier).forEach(x=>{const E=f[x.identifier],L=new ts;L.curves=E.curves,d.holes.push(L)}),_.push(d)}}),_}static getStrokeStyle(t,e,i,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",i=i!==void 0?i:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:i,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,i,s){const r=[],a=[],o=[];if(Hr.pointsToStrokeWithBuffers(t,e,i,s,r,a,o)===0)return null;const l=new _e;return l.setAttribute("position",new Zt(r,3)),l.setAttribute("normal",new Zt(a,3)),l.setAttribute("uv",new Zt(o,2)),l}static pointsToStrokeWithBuffers(t,e,i,s,r,a,o,l){const c=new pt,u=new pt,h=new pt,f=new pt,m=new pt,_=new pt,v=new pt,p=new pt,d=new pt,M=new pt,x=new pt,E=new pt,L=new pt,C=new pt,P=new pt,k=new pt,S=new pt;i=i!==void 0?i:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,t=Q(t);const T=t.length;if(T<2)return 0;const X=t[0].equals(t[T-1]);let Y,ct=t[0],N;const $=e.strokeWidth/2,Z=1/(T-1);let J=0,H,it,rt,dt,xt=!1,st=0,D=l*3,I=l*2;w(t[0],t[1],c).multiplyScalar($),p.copy(t[0]).sub(c),d.copy(t[0]).add(c),M.copy(p),x.copy(d);for(let O=1;O<T;O++){Y=t[O],O===T-1?X?N=t[1]:N=void 0:N=t[O+1];const q=c;if(w(ct,Y,q),h.copy(q).multiplyScalar($),E.copy(Y).sub(h),L.copy(Y).add(h),H=J+Z,it=!1,N!==void 0){w(Y,N,u),h.copy(u).multiplyScalar($),C.copy(Y).sub(h),P.copy(Y).add(h),rt=!0,h.subVectors(N,ct),q.dot(h)<0&&(rt=!1),O===1&&(xt=rt),h.subVectors(N,Y),h.normalize();const W=Math.abs(q.dot(h));if(W>Number.EPSILON){const ut=$/W;h.multiplyScalar(-ut),f.subVectors(Y,ct),m.copy(f).setLength(ut).add(h),k.copy(m).negate();const U=m.length(),g=f.length();f.divideScalar(g),_.subVectors(N,Y);const y=_.length();switch(_.divideScalar(y),f.dot(k)<g&&_.dot(k)<y&&(it=!0),S.copy(m).add(Y),k.add(Y),dt=!1,it?rt?(P.copy(k),L.copy(k)):(C.copy(k),E.copy(k)):at(),e.strokeLineJoin){case"bevel":V(rt,it,H);break;case"round":lt(rt,it),rt?K(Y,E,C,H,0):K(Y,P,L,H,1);break;case"miter":case"miter-clip":default:const z=$*e.strokeMiterLimit/U;if(z<1)if(e.strokeLineJoin!=="miter-clip"){V(rt,it,H);break}else lt(rt,it),rt?(_.subVectors(S,E).multiplyScalar(z).add(E),v.subVectors(S,C).multiplyScalar(z).add(C),b(E,H,0),b(_,H,0),b(Y,H,.5),b(Y,H,.5),b(_,H,0),b(v,H,0),b(Y,H,.5),b(v,H,0),b(C,H,0)):(_.subVectors(S,L).multiplyScalar(z).add(L),v.subVectors(S,P).multiplyScalar(z).add(P),b(L,H,1),b(_,H,1),b(Y,H,.5),b(Y,H,.5),b(_,H,1),b(v,H,1),b(Y,H,.5),b(v,H,1),b(P,H,1));else it?(rt?(b(d,J,1),b(p,J,0),b(S,H,0),b(d,J,1),b(S,H,0),b(k,H,1)):(b(d,J,1),b(p,J,0),b(S,H,1),b(p,J,0),b(k,H,0),b(S,H,1)),rt?C.copy(S):P.copy(S)):rt?(b(E,H,0),b(S,H,0),b(Y,H,.5),b(Y,H,.5),b(S,H,0),b(C,H,0)):(b(L,H,1),b(S,H,1),b(Y,H,.5),b(Y,H,.5),b(S,H,1),b(P,H,1)),dt=!0;break}}else at()}else at();!X&&O===T-1&&R(t[0],M,x,rt,!0,J),J=H,ct=Y,p.copy(C),d.copy(P)}if(!X)R(Y,E,L,rt,!1,H);else if(it&&r){let O=S,q=k;xt!==rt&&(O=k,q=S),rt?(dt||xt)&&(q.toArray(r,0*3),q.toArray(r,3*3),dt&&O.toArray(r,1*3)):(dt||!xt)&&(q.toArray(r,1*3),q.toArray(r,3*3),dt&&O.toArray(r,0*3))}return st;function w(O,q,W){return W.subVectors(q,O),W.set(-W.y,W.x).normalize()}function b(O,q,W){r&&(r[D]=O.x,r[D+1]=O.y,r[D+2]=0,a&&(a[D]=0,a[D+1]=0,a[D+2]=1),D+=3,o&&(o[I]=q,o[I+1]=W,I+=2)),st+=3}function K(O,q,W,ut,U){c.copy(q).sub(O).normalize(),u.copy(W).sub(O).normalize();let g=Math.PI;const y=c.dot(u);Math.abs(y)<1&&(g=Math.abs(Math.acos(y))),g/=i,h.copy(q);for(let z=0,ht=i-1;z<ht;z++)f.copy(h).rotateAround(O,g),b(h,ut,U),b(f,ut,U),b(O,ut,.5),h.copy(f);b(f,ut,U),b(W,ut,U),b(O,ut,.5)}function at(){b(d,J,1),b(p,J,0),b(E,H,0),b(d,J,1),b(E,H,1),b(L,H,0)}function V(O,q,W){q?O?(b(d,J,1),b(p,J,0),b(E,H,0),b(d,J,1),b(E,H,0),b(k,H,1),b(E,W,0),b(C,W,0),b(k,W,.5)):(b(d,J,1),b(p,J,0),b(L,H,1),b(p,J,0),b(k,H,0),b(L,H,1),b(L,W,1),b(k,W,0),b(P,W,1)):O?(b(E,W,0),b(C,W,0),b(Y,W,.5)):(b(L,W,1),b(P,W,0),b(Y,W,.5))}function lt(O,q){q&&(O?(b(d,J,1),b(p,J,0),b(E,H,0),b(d,J,1),b(E,H,0),b(k,H,1),b(E,J,0),b(Y,H,.5),b(k,H,1),b(Y,H,.5),b(C,J,0),b(k,H,1)):(b(d,J,1),b(p,J,0),b(L,H,1),b(p,J,0),b(k,H,0),b(L,H,1),b(L,J,1),b(k,H,0),b(Y,H,.5),b(Y,H,.5),b(k,H,0),b(P,J,1)))}function R(O,q,W,ut,U,g){switch(e.strokeLineCap){case"round":U?K(O,W,q,g,.5):K(O,q,W,g,.5);break;case"square":if(U)c.subVectors(q,O),u.set(c.y,-c.x),h.addVectors(c,u).add(O),f.subVectors(u,c).add(O),ut?(h.toArray(r,1*3),f.toArray(r,0*3),f.toArray(r,3*3)):(h.toArray(r,1*3),h.toArray(r,3*3),f.toArray(r,0*3));else{c.subVectors(W,O),u.set(c.y,-c.x),h.addVectors(c,u).add(O),f.subVectors(u,c).add(O);const y=r.length;ut?(h.toArray(r,y-1*3),f.toArray(r,y-2*3),f.toArray(r,y-4*3)):(f.toArray(r,y-2*3),h.toArray(r,y-1*3),f.toArray(r,y-4*3))}break}}function Q(O){let q=!1;for(let ut=1,U=O.length-1;ut<U;ut++)if(O[ut].distanceTo(O[ut+1])<s){q=!0;break}if(!q)return O;const W=[];W.push(O[0]);for(let ut=1,U=O.length-1;ut<U;ut++)O[ut].distanceTo(O[ut+1])>=s&&W.push(O[ut]);return W.push(O[O.length-1]),W}}}const pv=document.getElementById("pts"),mv=document.getElementById("lnd"),gv=document.getElementById("alt"),_v=document.getElementById("spd"),xv=document.getElementById("hdg"),vv=document.getElementById("lift-row"),ma=document.getElementById("landing-toast"),yv=document.getElementById("controls-hint"),Xo=document.getElementById("boost-grey-fill"),qo=document.getElementById("boost-oneshot-tile"),Vc=document.getElementById("test-mode-border"),yr=document.getElementById("poi-toast"),Cs=document.getElementById("poi-label"),Wc=document.getElementById("tp-island"),Mv={peak:document.querySelector('[data-tp="peak-count"]'),city:document.querySelector('[data-tp="city-count"]'),landscape:document.querySelector('[data-tp="landscape-count"]'),beach:document.querySelector('[data-tp="beach-count"]')},Xc=document.getElementById("tp-tier-current"),qc=document.getElementById("tp-tier-progress"),Yc=document.getElementById("tp-gofios-total");let $c="";const jc=["No Booster","Booster Level 1","Booster Level 2","Booster Level 3","Booster Level MAX"],Zc=["","Booster Level 1 freigeschalten","Booster Level 2 freigeschalten — La Gomera in Reichweite","Booster Level 3 freigeschalten — Gran Canaria in Reichweite","Booster Level MAX freigeschalten — Fuerteventura / Lanzarote"];let Mr=null,Vr=null,Kc=-1,Yo=null,Jc=null;const Sv="↑ ↓ Pitch · ← → Bank · Space Brake",Ev="↓ / S to launch",bv="Takeoff roll…";let Qc=null;const $o=new F;function ys(n,t){return Math.max(0,Math.round(n)).toString().padStart(t,"0")}function Tv(n){ma.innerHTML=`Geschafft! · ${n.id}<span class="bonus">+ ${vi.landingBonus} pts</span>`,ma.classList.add("show")}function Mh(){ma.classList.remove("show")}function tu(n,t,e,i){if(!yr)return;const s=e>0?`+ ${t} P · + ${e} G`:`+ ${t} P`,r=i&&Zc[i]?`<span class="tier-up">${Zc[i]}</span>`:"";yr.innerHTML=`${n}<span class="reward">${s}</span>${r}`,yr.classList.add("show"),Mr&&clearTimeout(Mr),Mr=setTimeout(()=>{yr.classList.remove("show"),Mr=null},ae.activationToast.duration*1e3)}function Av(n){Cs&&n!==Vr&&(Cs.textContent=n,Cs.classList.add("show"),Vr=n)}function wv(){Cs&&Vr!==null&&(Cs.classList.remove("show"),Vr=null)}function Cv(){const n=zs(_t.position.x,_t.position.z);pv.textContent=ys(St.punkte,5),mv.textContent=ys(St.landings,2),gv.textContent=ys(_t.position.y-Math.max(n,jt.waterLevel),3),_v.textContent=ys(G.speed,3),$o.set(0,0,-1).applyQuaternion(_t.quaternion);const t=(Math.atan2($o.x,-$o.z)*180/Math.PI+360)%360;xv.textContent=ys(t,3),vv.style.opacity=G.inThermal?"0.85":"0";const e=G.flightState===ne.INTRO?"":G.flightState===ne.PRELAUNCH?Ev:G.flightState===ne.TAKEOFF_ROLL?bv:Sv;e!==Qc&&(yv.textContent=e,Qc=e),Rv(),Pv(),Lv()}function Rv(){if(Xo&&(Xo.style.width=(G.boostFuelGrey*100).toFixed(1)+"%",Xo.style.opacity=G.greyActive?"1":"0.7"),!qo)return;const n=yi(),t=we.oneShot.tiers[n]||we.oneShot.tiers[0],e=n>0&&G.boostFuelOneshot>.001;n!==Kc&&(qo.style.background="#"+t.color.toString(16).padStart(6,"0"),Kc=n,Yo=null),e!==Yo&&(qo.classList.toggle("spent",!e),Yo=e)}function Pv(){Vc&&St.testMode!==Jc&&(Vc.classList.toggle("visible",!!St.testMode),Jc=St.testMode)}function Lv(){const n=St.currentIsland,t=jh[n]||[],e={peak:0,city:0,landscape:0,beach:0},i={peak:0,city:0,landscape:0,beach:0};for(const u of t)e[u.type]++,St.exploredPOIs[u.id]&&i[u.type]++;const s=St.gofiosByIsland[n]|0,r=yi(n),a=ae.tierThresholds,o=r+1<a.length?r+1:null,l=o!==null?Math.max(0,a[o]-s):0,c=`${n}|${r}|${s}|${i.peak}/${e.peak}|${i.city}/${e.city}|${i.landscape}/${e.landscape}|${i.beach}/${e.beach}`;if(c!==$c){$c=c,Wc&&(Wc.textContent=n.charAt(0).toUpperCase()+n.slice(1));for(const u of["peak","city","landscape","beach"]){const h=Mv[u];h&&(h.textContent=`${i[u]}/${e[u]}`)}Xc&&(Xc.textContent=jc[r]||`Level ${r}`),Yc&&(Yc.textContent=`${s} G`),qc&&(qc.textContent=o!==null?`→ ${jc[o]} in ${l} G`:"— max erreicht")}}const Iv={[gt.PEAK]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-390Zm-132-53 55 37 77-39 77 39 53-35-40-79H386l-38 77ZM209-160h541L646-369l-83 55-83-41-83 41-85-56-103 210ZM80-80l234-475q10-20 29.5-32.5T386-600h54v-280h280l-40 80 40 80H520v120h50q23 0 42 12t30 32L880-80H80Z"/></svg>',[gt.CITY]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-120v-560h240v-80l120-120 120 120v240h240v400H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm240 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z"/></svg>',[gt.LANDSCAPE]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m40-240 240-320 180 240h300L560-586 460-454l-50-66 150-200 360 480H40Zm521-80Zm-361 0h160l-80-107-80 107Zm0 0h160-160Z"/></svg>',[gt.BEACH]:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 530-374l56-56 254 254-56 56Zm-546-28q-60-60-89-135t-29-153q0-78 29-152t89-134q60-60 134.5-89.5T525-841q78 0 152.5 29.5T812-722L238-148Zm8-122 54-54q-16-21-30.5-43T243-411q-12-22-21-44t-16-43q-11 59-1.5 118T246-270Zm112-110 222-224q-43-33-86.5-53.5t-81.5-28q-38-7.5-68.5-2.5T296-666q-17 18-22 48.5t2.5 69q7.5 38.5 28 81.5t53.5 87Zm278-280 56-54q-53-32-112-42t-118 2q22 7 44 16t44 20.5q22 11.5 43.5 26T636-660Z"/></svg>'},Sh=[];function Dv(){return new Na(ae.ring.majorRadius,ae.ring.tubeRadius,10,48)}const Eh={};function Uv(){const n=new Hr,t=ae.symbol.size/960,e=ae.symbol.extrudeDepth/t;for(const[i,s]of Object.entries(Iv)){const r=n.parse(s),a=[];for(const l of r.paths)a.push(...Hr.createShapes(l));const o=new Da(a,{depth:e,bevelEnabled:!1});o.scale(1,-1,1),o.center(),o.scale(t,t,t),Eh[i]=o}}function Nv(){Uv();const n=Dv(),t=new me;for(const e of pi){const i=ae.colorsByType[e.type],s=new Zn({color:i.ring,transparent:!0,opacity:ae.ring.opacity,depthWrite:!1}),r=new ee(n,s),a=new Re({color:i.symbol,transparent:!0,opacity:.95,flatShading:!0,side:Ge}),o=new ee(Eh[e.type],a),l=new me;l.add(r),l.add(o);const c=zs(e.x,e.z);l.position.set(e.x,c+ae.ring.hoverHeight,e.z),t.add(l),Sh.push({poi:e,ring:r,ringMat:s,symbol:o,symbolMat:a,poiGroup:l,wasInsideZone:!1,frozen:!1})}return t}function Fv(n,t){const e=t.x-n.x,i=t.y-n.y,s=t.z-n.z;return e*e+i*i+s*s<=ae.activation.radius*ae.activation.radius}function Ov(n){const t=St.gofiosByIsland[n]|0,e=ae.tierThresholds;let i=0;for(let r=e.length-1;r>=0;r--)if(t>=e[r]){i=r;break}const s=St.oneShotTierByIsland[n]|0;return i>s?(St.oneShotTierByIsland[n]=i,i):0}function Bv(n){const t=ae.rewardsByType[n.type];if(St.testMode){tu(n.name,t.punkte,t.gofios,0);return}const e=!!St.exploredPOIs[n.id];qr(t.punkte);let i=0,s=0;e||(St.exploredPOIs[n.id]=!0,St.gofiosByIsland[n.island]=(St.gofiosByIsland[n.island]|0)+t.gofios,i=t.gofios,s=Ov(n.island)),tu(n.name,t.punkte,i,s),ti()}function zv(n){const t=!St.testMode&&!!St.exploredPOIs[n.poi.id];if(t)n.ringMat.opacity=ae.ring.opacityActivated,n.ringMat.color.setHex(ae.ring.colorActivated),n.symbolMat.opacity=.55,n.symbolMat.color.setHex(ae.symbol.colorActivated);else{const e=ae.colorsByType[n.poi.type];n.ringMat.opacity=ae.ring.opacity,n.ringMat.color.setHex(e.ring),n.symbolMat.opacity=.95,n.symbolMat.color.setHex(e.symbol)}n.frozen=t}function kv(n,t){const e=t.position,i=Yh(e);i!==St.currentIsland&&(St.currentIsland=i,ti());let s=null,r=ae.hoverLabelRadius*ae.hoverLabelRadius;for(const a of Sh){zv(a);const o=e.x-a.poiGroup.position.x,l=e.z-a.poiGroup.position.z;a.poiGroup.rotation.y=Math.atan2(o,l),a.frozen||(a.symbol.rotation.y+=ae.symbol.rotRate*n);const c=Fv(a.poiGroup.position,e);if(c&&!a.wasInsideZone&&Bv(a.poi),a.wasInsideZone=c,St.exploredPOIs[a.poi.id]){const u=e.x-a.poi.x,h=e.z-a.poi.z,f=u*u+h*h;f<r&&(r=f,s=a.poi)}}s?Av(s.name):wv()}const bh=document.getElementById("island-compass"),eu=bh?.querySelector(".compass-track"),nu=Math.PI/2,Gv=12,Th=new Map,jo=new F;function Hv(){if(eu)for(const n of va){const t=document.createElement("div");t.className="compass-marker"+(n.playable?"":" unreachable"),t.dataset.island=n.id,t.innerHTML=`
      <span class="compass-name">${n.name}</span>
      <span class="compass-dist"></span>
    `,eu.appendChild(t),Th.set(n.id,{el:t,dist:t.querySelector(".compass-dist"),lastLeft:null,lastDist:null,lastHidden:null})}}function Vv(n){return jo.set(0,0,-1).applyQuaternion(n.quaternion),Math.atan2(jo.x,-jo.z)}function Wv(n){for(;n>Math.PI;)n-=2*Math.PI;for(;n<=-Math.PI;)n+=2*Math.PI;return n}const qi=[];function Xv(n){if(!bh)return;const t=Vv(n),e=jt.heightmap.metersPerUnit;qi.length=0;for(const s of va){const r=Th.get(s.id);if(!r)continue;const a=s.x-n.position.x,o=s.z-n.position.z,c=Math.sqrt(a*a+o*o)*e/1e3,u=Math.atan2(a,-o),h=Wv(u-t);if(Math.abs(h)>nu||c<.5){qi.push({m:r,distKm:c,pct:0,show:!1});continue}const f=(h/nu*.5+.5)*100;qi.push({m:r,distKm:c,pct:f,show:!0})}qi.sort((s,r)=>s.distKm-r.distKm);const i=[];for(const s of qi){if(!s.show)continue;let r=!1;for(const a of i)if(Math.abs(a-s.pct)<Gv){r=!0;break}if(r){s.show=!1;continue}i.push(s.pct)}for(const s of qi){const r=s.m,a=!s.show;if(a!==r.lastHidden&&(r.el.classList.toggle("hidden",a),r.lastHidden=a),a)continue;const o=s.pct.toFixed(1)+"%";o!==r.lastLeft&&(r.el.style.left=o,r.lastLeft=o);const l=s.distKm<10?s.distKm.toFixed(1)+" km":Math.round(s.distKm)+" km";l!==r.lastDist&&(r.dist.textContent=l,r.lastDist=l)}}const Ah=[];(function(){for(const t of[-.95,.95]){const e=new Float32Array(zn.verts*3),i=new Float32Array(zn.verts*3);for(let o=0;o<zn.verts;o++){const l=o/(zn.verts-1);e[o*3]=t,e[o*3+1]=-.05,e[o*3+2]=.42+l*zn.maxLen;const c=1-l;i[o*3]=c,i[o*3+1]=c,i[o*3+2]=c}const s=new _e;s.setAttribute("position",new Ce(e,3)),s.setAttribute("color",new Ce(i,3));const r=new Kr({vertexColors:!0,transparent:!0,opacity:0,blending:Ir,depthWrite:!1}),a=new th(s,r);_t.add(a),Ah.push(a)}})();function qv(){const n=fe.stallSpeed+3,t=fe.maxSpeed*.7,e=Ds.clamp((G.speed-n)/(t-n),0,1),i=zn.maxLen*(.3+e*.7);for(const s of Ah){const r=s.geometry.attributes.position.array;for(let a=0;a<zn.verts;a++){const o=a/(zn.verts-1);r[a*3+2]=.42+o*i}s.geometry.attributes.position.needsUpdate=!0,s.material.opacity=e*.95}}const iu=new me,Oa=[];(function(){const i=Math.atan2(.28,.95),s=new Re({color:Jt.paper,side:Ge,flatShading:!0}),r=new Kr({color:Jt.ink,transparent:!0,opacity:.32});for(const a of[-.45,.45]){const o=new me;o.position.set(a,.045,.05),o.rotation.z=a<0?i:-i;const l=new Ci(.32,.22);l.translate(0,-.22/2,0),l.rotateX(-Math.PI/2);const c=new ee(l,s),u=new oh(l);c.add(new eh(u,r)),o.add(c),iu.add(o),Oa.push(c)}_t.add(iu)})();function Yv(n){const t=pe.brake&&G.alive&&G.flightState===ne.FLYING?1:0,e=1-Math.exp(-n/Ko.deployTau);G.brakeAmount+=(t-G.brakeAmount)*e;const i=-G.brakeAmount*Ko.maxAngle;for(const s of Oa)s.rotation.x=i}function $v(){G.brakeAmount=0;for(const n of Oa)n.rotation.x=0}const _n=new me;(function(){const t=new Re({color:Jt.ink,flatShading:!0});function e(i,s,r,a){const o=new me,l=new Pn(.018,.018,r,6);l.translate(0,-r/2,0),o.add(new ee(l,t));const c=new Pn(a,a,.04,12);return c.rotateZ(Math.PI/2),c.translate(0,-r,0),o.add(new ee(c,t)),o.position.set(i,-.05,s),o}_n.add(e(0,-.55,.11,.055)),_n.add(e(-.42,.12,.12,.06)),_n.add(e(.42,.12,.12,.06)),_n.scale.setScalar(.001),_n.visible=!1,_t.add(_n)})();function jv(n){const t=Nx(_t.position,ao.triggerDist,ao.triggerHeight)?1:0,e=1-Math.exp(-n/ao.deployTau);G.gearAmount+=(t-G.gearAmount)*e;const i=Math.max(.001,G.gearAmount);_n.scale.setScalar(i),_n.visible=G.gearAmount>.02}function Zv(){G.gearAmount=1,_n.scale.setScalar(1),_n.visible=!0}const su=new me,Ba=[],ru=new Lt;let Ms=0;(function(){const t=we.exhaust;for(const e of[-.3,t.offsetX]){const i=new Pn(t.radiusNarrow,t.radiusWide,1,12,1,!0);i.rotateX(-Math.PI/2),i.translate(0,0,.5);const s=new Zn({color:16777215,transparent:!0,opacity:0,blending:Ir,depthWrite:!1,side:Ge}),r=new ee(i,s);r.position.set(e,t.offsetY,t.offsetZ),r.scale.z=0,su.add(r),Ba.push(r)}_t.add(su)})();function Kv(){return G.oneShotActive?(we.oneShot.tiers[yi()]||we.oneShot.tiers[0]).color:G.greyActive?we.grey.color:null}function Jv(n){const t=we.exhaust,e=G.oneShotActive||G.greyActive?1:0,i=1-Math.exp(-n/Math.max(t.intensityTau,1e-4));Ms+=(e-Ms)*i;const s=Kv();s!==null&&ru.setHex(s);for(const r of Ba)r.scale.z=t.length*Ms,r.material.opacity=.85*Ms,s!==null&&r.material.color.copy(ru)}function Qv(){Ms=0;for(const n of Ba)n.scale.z=0,n.material.opacity=0}const ty=.9,wh=.55,ey=35,ny=1.6,Ch=new Ia(ty,28);Ch.rotateX(-Math.PI/2);const Rh=new Zn({color:0,transparent:!0,opacity:wh,depthWrite:!1}),fi=new ee(Ch,Rh);fi.renderOrder=1;function iy(){const n=zs(_t.position.x,_t.position.z),t=Math.max(n,jt.waterLevel),e=Math.max(0,_t.position.y-t);fi.position.x=_t.position.x,fi.position.z=_t.position.z,fi.position.y=t+.04;const i=Math.min(1,e/ey),s=Math.min(1,e/ny);Rh.opacity=wh*s*(1-.85*i);const r=1+i*.4;fi.scale.set(r,1,r),fi.visible=_t.position.y>t-.5}const on=new F(0,0,-1),ou=new F,au=new F,ze=new F,un=new F,as=new F,lu=new F;function Ph(){switch(G.flightState){case ne.PRELAUNCH:case ne.LANDED:return 0;case ne.TAKEOFF_ROLL:case ne.LANDING_ROLL:return Ds.clamp(G.speed/kn.takeoffSpeed,0,1);default:return 1}}function Rs(n,t,e){return n+(t-n)*e}let Zo=0;function Sr(n,t){return 1-Math.exp(-t/Math.max(n,1e-4))}function sy(n){const t=1-n;return 1-t*t*t}function ry(n){return un.set(0,0,-1).applyQuaternion(_t.quaternion),ze.set(un.x,0,un.z),ze.lengthSq()<1e-4&&ze.set(0,0,-1),ze.normalize(),as.set(0,ke.height,0),n.copy(_t.position).addScaledVector(ze,-6.5).add(as)}function oy(n){if(G.flightState===ne.INTRO&&G.introStartCamPos){const u=sy(Math.min(1,G.introT));ry(lu),gn.position.lerpVectors(G.introStartCamPos,lu,u),gn.up.set(0,1,0),gn.lookAt(_t.position);return}un.set(0,0,-1).applyQuaternion(_t.quaternion);const t=Sr(ke.yawTau,n),e=Sr(ke.pitchTau,n);on.x+=(un.x-on.x)*t,on.z+=(un.z-on.z)*t,on.y+=(un.y-on.y)*e,on.normalize(),ze.set(on.x,0,on.z),ze.lengthSq()<1e-4&&ze.set(0,0,-1),ze.normalize();const i=G.greyActive||G.oneShotActive?1:0,s=Sr(we.camPushbackTau,n);Zo+=(i-Zo)*s;const r=Ph(),a=Rs(ke.runwayDistance,ke.distance,r),o=Rs(ke.runwayHeight,ke.height,r),l=Rs(ke.runwayLookAhead,ke.lookAhead,r);as.set(0,o,0),ou.copy(_t.position).addScaledVector(ze,-(a+we.camPushback*Zo)).add(as);const c=Sr(ke.posTau,n);gn.position.lerp(ou,c),au.copy(_t.position).addScaledVector(on,l),gn.up.set(0,1,0),gn.lookAt(au)}function za(){un.set(0,0,-1).applyQuaternion(_t.quaternion),on.copy(un),ze.set(un.x,0,un.z),ze.lengthSq()<1e-4&&ze.set(0,0,-1),ze.normalize();const n=Ph(),t=Rs(ke.runwayDistance,ke.distance,n),e=Rs(ke.runwayHeight,ke.height,n);as.set(0,e,0),gn.position.copy(_t.position).addScaledVector(ze,-t).add(as)}const pn=new F,cu=new F,uu=new F,hu=new dn,du=new In,Er=new F,fu=new F,ay=new F;function no(n,t=ay){return t.set(0,0,-1).applyEuler(new In(0,n,0))}function ly(n){const t=no(n.activeHeading);_t.position.set(n.x-t.x*n.length*.45,n.elevation+.22,n.z-t.z*n.length*.45),_t.quaternion.setFromEuler(new In(0,n.activeHeading,0)),G.speed=0,G.flightState=ne.PRELAUNCH,G.currentRunway=n,G.refillStartGrey=G.boostFuelGrey,G.refillStartOneshot=G.boostFuelOneshot,G.refillT=0,G.greyActive=!1,G.oneShotActive=!1,G.prevOneShot=!1,za()}const Lh=document.getElementById("crash");function cy(){G.flightPunkte=0}function Ih(){G.flightPunkte>St.bestFlightPunkte&&(St.bestFlightPunkte=G.flightPunkte),G.flightPunkte=0}function Pr(){G.alive&&(G.alive=!1,G.flightState=ne.CRASHED,Ih(),ti(),Lh.classList.add("visible"))}function Dh(){const n=St.checkpointRunwayId??Gh,t=hn.find(i=>i.id===n)??hn[0],e=!St.introPlayed;if(Hh(),$v(),Zv(),Qv(),Mh(),Lh.classList.remove("visible"),ly(t),e){const i=new F(0,0,-1).applyQuaternion(_t.quaternion),s=new F(i.x,0,i.z).normalize();G.introStartCamPos=_t.position.clone().addScaledVector(s,-40).add(new F(0,mu.startHeight,0)),G.introT=0,G.flightState=ne.INTRO}}function uy(){return pe.down||pe.up||pe.left||pe.right||pe.brake}function Uh(n){if(G.refillT>=1)return;G.refillT=Math.min(1,G.refillT+n/we.refillDuration);const t=G.refillT;G.boostFuelGrey=G.refillStartGrey+(1-G.refillStartGrey)*t,G.boostFuelOneshot=G.refillStartOneshot+(1-G.refillStartOneshot)*t}function hy(){G.refillT=1,G.boostFuelGrey=1,G.boostFuelOneshot=1}function dy(n){const t=pe.oneShot&&!G.prevOneShot;G.prevOneShot=pe.oneShot,t&&yi()>0&&G.boostFuelOneshot>0&&!G.oneShotActive&&(G.oneShotActive=!0),G.greyActive=pe.boost&&G.boostFuelGrey>0;let e=0,i=0;if(G.oneShotActive){const s=we.oneShot.tiers[yi()]||we.oneShot.tiers[0];G.boostFuelOneshot-=n/Math.max(s.tankDuration,1e-4),G.boostFuelOneshot<=0?(G.boostFuelOneshot=St.testMode?1:0,G.oneShotActive=!1):(e+=s.speedBonus,i+=s.accelRate)}if(G.greyActive){const s=we.grey;G.boostFuelGrey-=n/Math.max(s.tankDuration,1e-4),G.boostFuelGrey<=0?(G.boostFuelGrey=0,G.greyActive=!1):(e+=s.speedBonus,i+=s.accelRate)}return!G.greyActive&&!G.oneShotActive&&G.boostFuelGrey<1&&(G.boostFuelGrey=Math.min(1,G.boostFuelGrey+n/we.grey.rechargeTime)),{speedBonus:e,accelBonus:i}}function fy(n){uy()?G.introT=1:G.introT+=n/mu.duration,G.introT>=1&&(G.introT=0,G.introStartCamPos=null,G.flightState=ne.PRELAUNCH,St.introPlayed=!0,za())}function py(n){Uh(n),pe.down&&(G.flightState=ne.TAKEOFF_ROLL,G.takeoffTime=0,cy())}function my(n){const t=G.currentRunway;G.takeoffTime+=n,Uh(n);const e=kn.takeoffSpeed,i=kn.linearShare,s=1-i,a=t.length*kn.liftoffFraction/(e*(i/2+s/3)),o=Math.min(1,G.takeoffTime/a);G.speed=e*(i*o+s*o*o);const l=no(t.activeHeading);_t.position.x+=l.x*G.speed*n,_t.position.z+=l.z*G.speed*n,_t.position.y=t.elevation+.22,_t.quaternion.setFromEuler(new In(0,t.activeHeading,0)),o>=1&&(_t.rotateX(kn.pitchUpAtLiftoff),G.flightState=ne.FLYING,G.currentRunway=null,G.postLiftCooldown=1.2,hy())}function gy(n){const t=dy(n),e=(pe.down?1:0)-(pe.up?1:0),i=(pe.right?1:0)-(pe.left?1:0),s=Math.max(0,fe.stallSpeed-G.speed)/fe.stallSpeed,r=1-s*(1-fe.stallAuthority),a=e*r;pn.set(0,0,-1).applyQuaternion(_t.quaternion);const o=Math.asin(Ds.clamp(pn.y,-1,1));let l=a*fe.pitchRate*n;l>0&&(l=Math.min(l,Math.max(0,fe.maxClimbPitch-o))),_t.rotateX(l),_t.rotateZ(-i*fe.rollRate*n),pn.set(0,0,-1).applyQuaternion(_t.quaternion),cu.set(1,0,0).applyQuaternion(_t.quaternion),uu.set(0,1,0).applyQuaternion(_t.quaternion);const c=Math.atan2(cu.y,uu.y);_t.rotateOnWorldAxis(Fc,Math.sin(c)*fe.turnFactor*n),s>.01&&(Er.set(pn.x,0,pn.z),Er.lengthSq()>1e-4&&(Er.normalize(),fu.crossVectors(Er,Fc).normalize(),_t.rotateOnWorldAxis(fu,-s*fe.stallPitchRate*n))),pn.set(0,0,-1).applyQuaternion(_t.quaternion);const u=pn.y;G.speed-=u*fe.speedFromPitch*n,G.speed-=fe.drag*n,G.brakeAmount>.01&&(G.speed-=G.brakeAmount*Ko.force*n);const h=dv(_t.position.x,_t.position.y,_t.position.z);G.speed+=h*.13*n,G.inThermal=h>.5;const f=fe.maxSpeed+t.speedBonus;t.accelBonus>0&&G.speed<f&&(G.speed=Math.min(f,G.speed+t.accelBonus*n)),G.speed=Math.max(fe.minSpeed,Math.min(f,G.speed));const m=_t.position.x,_=_t.position.z;_t.position.addScaledVector(pn,G.speed*n);const v=fe.sinkRate*(1+s*fe.stallSink);_t.position.y-=v*n,_t.position.y+=h*n;const p=_t.position.x-m,d=_t.position.z-_;qr(Math.sqrt(p*p+d*d));const M=jt.size/2-30;if(_t.position.x>M&&(_t.position.x=M),_t.position.x<-M&&(_t.position.x=-M),_t.position.z>M&&(_t.position.z=M),_t.position.z<-M&&(_t.position.z=-M),G.postLiftCooldown>0){G.postLiftCooldown-=n;return}const x=Math.atan2(-pn.x,-pn.z),E=Dx(_t.position,x);if(E){G.flightState=ne.LANDING_ROLL,G.currentRunway=E,_t.position.y=E.elevation+.22;return}const L=Ux(_t.position);if(L&&_t.position.y-L.elevation<vi.rollingHeight){Pr();return}const C=zs(_t.position.x,_t.position.z);(_t.position.y<Math.max(C+.4,jt.waterLevel+.4)||Kx(_t.position.x,_t.position.y,_t.position.z))&&Pr()}function _y(n){const t=G.currentRunway;G.speed=Math.max(0,G.speed-vi.brakeForce*n);const e=no(t.activeHeading),i=_t.position.x,s=_t.position.z;_t.position.x+=e.x*G.speed*n,_t.position.z+=e.z*G.speed*n,_t.position.y=t.elevation+.22;const r=_t.position.x-i,a=_t.position.z-s;qr(Math.sqrt(r*r+a*a)),du.set(0,t.activeHeading,0),hu.setFromEuler(du),_t.quaternion.slerp(hu,.22);const o=_t.position.x-t.x,l=_t.position.z-t.z,c=o*Math.sin(t.heading)+l*Math.cos(t.heading);if(Math.abs(c)>t.length*.5){Pr();return}G.speed<vi.landingSpeed&&xy(t)}function xy(n){G.speed=0,G.flightState=ne.LANDED,G.landedToastTimer=gu.toastDuration,G.cinematicT=0,G.cinematicFromPos=_t.position.clone(),G.cinematicFromQuat=_t.quaternion.clone();const t=n.activeHeading,e=no(t,new F);G.cinematicToPos=new F(n.x-e.x*n.length*.45,n.elevation+.22,n.z-e.z*n.length*.45),G.cinematicToQuat=new dn().setFromEuler(new In(0,t,0)),St.landings+=1,qr(vi.landingBonus),St.checkpointRunwayId=n.id,Ih(),ti(),Tv(n)}function vy(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}function yy(n){if(G.landedToastTimer>0){G.landedToastTimer-=n;return}if(G.cinematicT+=n/gu.tweenDuration,G.cinematicT>=1){_t.position.copy(G.cinematicToPos),_t.quaternion.copy(G.cinematicToQuat),G.cinematicT=0,G.cinematicFromPos=null,G.cinematicToPos=null,G.cinematicFromQuat=null,G.cinematicToQuat=null,G.flightState=ne.PRELAUNCH,G.refillStartGrey=G.boostFuelGrey,G.refillStartOneshot=G.boostFuelOneshot,G.refillT=0,za(),Mh();return}const t=vy(G.cinematicT);_t.position.lerpVectors(G.cinematicFromPos,G.cinematicToPos,t),_t.quaternion.copy(G.cinematicFromQuat)}function My(n){if(G.alive)switch(G.flightState){case ne.INTRO:return fy(n);case ne.PRELAUNCH:return py(n);case ne.TAKEOFF_ROLL:return my(n);case ne.FLYING:return gy(n);case ne.LANDING_ROLL:return _y(n);case ne.LANDED:return yy(n);case ne.CRASHED:return}}Qh();qh();Bs();await Promise.all([Wx(),zx()]);hn.forEach(n=>{n.elevation=os(n.x,n.z)});Ye.add(Yx());Ye.add($x());Ye.add(lv());Ye.add(Fx());Ye.add(uv());Ye.add(Nv());Ye.add(fi);Ye.add(_t);Hv();document.getElementById("restart-btn").addEventListener("click",Dh);Dh();let pu=performance.now();function Nh(n){requestAnimationFrame(Nh);const t=Math.min(.05,(n-pu)/1e3);pu=n,My(t),Yv(t),jv(t),Jv(t),qv(),iy(),Ox(n/1e3),hv(t),kv(t,_t),Xv(_t),oy(t),Cv(),us.render(Ye,gn)}requestAnimationFrame(Nh);
