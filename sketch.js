var cha;
var cha1,cha2,cha3,cha4;
var cham1,cham2,cham3,cham4;
var left,right,up,down;
var grass;
var grassimg1,grassimg2,grassimg3,grassimg4,grassimg5;
var tree1;
var tree;
var treeG,fenceGV,grassG,decG,tileG;
var edgeBG,edgeTG,edgeLG,edgeRG;
var edgeBimg,edgeTimg,edgeLimg,edgeRimg;
var theme;
var c1,c2,c3,c4;
var c1i,c2i,c3i,c4i;
var decimg1,decimg2;
var house1,house1img;
var textbox,textboxImg,font,yes,no,yesi,noi;
var door1;
var textmode;
var state;
var inside;
var tilem,tiled,tileu,tilel,tiler,tilec1,tilec2,tilec3,tilec4;
var wallG;
var wallc1,wallc2,wallc3,wallc4,walld,wallu,walll,wallr,walldr,walldl;
var insideD,insideDB;
var gameState;
var book,book1,bookO,bookM,bookHH,bookSH,bookOH,bookH,bookOp;
var start,startA;
var screen;
var check1,check2,check3,check4,check5,check6;
var start,menu;
var page;
var night,nightimg;
var witch2,witch3,witch4,witch5,witch6,witch7,witch8,witch9,witch10;
var hm;
var starts,options,howto;
var audio,controls,creds;
var bookAH,bookA,bookCH,bookC,bookCRH,bookCR;
var howtoB,optB;
var creB,conB,audB;
var conform;
var audS,audT;
var battleTheme;
var chaB;
var woodenSword,woodImg,ironSword,ironImg,goldSword,goldImg,redSword,redImg;
var won,irn,gon,ren;
var red1,red2,green,yellow1,yellow2,black,edge1,edge2;
var turn,histurn;
var sword;
var check,hit;
var greend,red1d,red2d,blackd;
var chaLife;
var heart,heart1,heart2,heart3,heart4;
var checkd1,checkd2;
var checkd1b,checkd2b;
var dou,move,moved,ask,ask1;
var ok;
var bosss,bb;
var boss,bosssp;
var bossbg,a;
var bossthe;
var red1b,red2b,greenb,yellow1b,yellow2b,blackb,greendb,red1db,red2db,blackdb,turnb,hisTurnb,moveb,movedb,doub;
var witch,blasta,witchG,blastG,witchG2,witchG3;
var sa,sG,s;
var press;
var scheck1,scheck2;
var over;
var bossl;
function preload(){
cha1 = loadAnimation("assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still11.png","assets/ch/still12.png","assets/ch/still13.png","assets/ch/still12.png")
cha2 = loadAnimation("assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still21.png","assets/ch/still22.png","assets/ch/still23.png","assets/ch/still22.png")
cha3 = loadAnimation("assets/ch/still31.png")
cha4 = loadAnimation("assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still41.png","assets/ch/still42.png","assets/ch/still43.png","assets/ch/still42.png")
cham1 = loadAnimation("assets/ch/run11.png","assets/ch/run12.png","assets/ch/run13.png","assets/ch/run14.png","assets/ch/run15.png","assets/ch/run16.png","assets/ch/run17.png","assets/ch/run18.png","assets/ch/run19.png","assets/ch/run110.png",);
cham2 = loadAnimation("assets/ch/run21.png","assets/ch/run22.png","assets/ch/run23.png","assets/ch/run24.png","assets/ch/run25.png","assets/ch/run26.png","assets/ch/run27.png","assets/ch/run28.png","assets/ch/run29.png","assets/ch/run210.png",);
cham3 = loadAnimation("assets/ch/run31.png","assets/ch/run32.png","assets/ch/run33.png","assets/ch/run34.png","assets/ch/run35.png","assets/ch/run36.png","assets/ch/run37.png","assets/ch/run38.png","assets/ch/run39.png","assets/ch/run310.png",);
cham4 = loadAnimation("assets/ch/run41.png","assets/ch/run42.png","assets/ch/run43.png","assets/ch/run44.png","assets/ch/run45.png","assets/ch/run46.png","assets/ch/run47.png","assets/ch/run48.png","assets/ch/run49.png","assets/ch/run410.png",);
grassimg1 = loadImage("assets/tile set/ground/grass11.png");
grassimg2 = loadImage("assets/tile set/ground/grass12.png");
grassimg3 = loadImage("assets/tile set/ground/grass13.png");
grassimg4 = loadImage("assets/tile set/ground/grass14.png");
grassimg5 = loadImage("assets/tile set/ground/grass15.png");
tree1 = loadImage("assets/tree/2.png");
fenceVimg = loadImage("assets/fence/4.png");
edgeBimg = loadImage("assets/tile set/water cliff/tile (12).png");
edgeTimg = loadImage("assets/tile set/water cliff/tile (2).png");
edgeLimg = loadImage("assets/tile set/water cliff/tile (6).png");
edgeRimg = loadImage("assets/tile set/water cliff/tile (8).png");
theme = loadSound("assets/theme.mp3");
c1i = loadImage("assets/tile set/water cliff/tile (1).png");
c2i = loadImage("assets/tile set/water cliff/tile (3).png");
c3i = loadImage("assets/tile set/water cliff/tile (11).png");
c4i = loadImage("assets/tile set/water cliff/tile (13).png");
decimg1 = loadImage("assets/w/1.png");
decimg2 = loadImage("assets/w/2.png");
house1img = loadImage("assets/house/1.png");
textboxImg = loadImage("assets/ui/textbox.png");
yesi = loadImage("assets/ui/yes.png");
noi = loadImage("assets/ui/no.png");
font = loadFont("assets/font.ttf");
inside = loadSound("inside.mp3");
tilem = loadImage("assets/tile set/inside/floor/tile.png");
tiled = loadImage("assets/tile set/inside/floor/6.png");
tileu = loadImage("assets/tile set/inside/floor/2.png");
tilel = loadImage("assets/tile set/inside/floor/8.png");
tiler = loadImage("assets/tile set/inside/floor/4.png");
tilec1 = loadImage("assets/tile set/inside/floor/1.png");
tilec2 = loadImage("assets/tile set/inside/floor/3.png");
tilec3 = loadImage("assets/tile set/inside/floor/5.png");
tilec4 = loadImage("assets/tile set/inside/floor/7.png");
wallc1 = loadImage("assets/tile set/inside/wall/1.png");
wallc2 = loadImage("assets/tile set/inside/wall/3.png");
wallc3 = loadImage("assets/tile set/inside/wall/6.png");
wallc4 = loadImage("assets/tile set/inside/wall/10.png");
walld = loadImage("assets/tile set/inside/wall/9.png");
wallu = loadImage("assets/tile set/inside/wall/2.png");
walll = loadImage("assets/tile set/inside/wall/4.png");
wallr = loadImage("assets/tile set/inside/wall/5.png");
walldr = loadImage("assets/tile set/inside/wall/8.png");
walldl = loadImage("assets/tile set/inside/wall/7.png");
book0 = loadAnimation("book/0.png");
bookO = loadAnimation("book/0.png","book/1.png","book/2.png","book/3.png");
bookO.looping = false;
bookM = loadAnimation("book/4.png","book/5.png","book/7.png","book/8.png",);
bookM.looping = false;
bookSH = loadAnimation("book/play.png");
bookHH = loadAnimation("book/how.png");
bookOH = loadAnimation("book/option.png");
bookH = loadAnimation("book/9.png","book/10.png","book/11.png","book/12.png");
bookH.looping = false;
howtoB = loadAnimation("book/12.png","book/11.png","book/10.png","book/9.png");
howtoB.looping = false;
bookOp = loadAnimation("book/13.png","book/14.png","book/15.png","book/16.png");
bookOp.looping = false;
optB = loadAnimation("book/16.png","book/15.png","book/14.png","book/13.png");
optB.looping = false;
bookAH = loadAnimation("book/s.png");
bookA = loadAnimation("book/17.png","book/18.png","book/19.png","book/20.png");
bookA.looping = false;
audB = loadAnimation("book/20.png","book/19.png","book/18.png","book/17.png",);
audB.looping = false;
bookCH = loadAnimation("book/c.png");
bookC = loadAnimation("book/25.png","book/26.png","book/27.png","book/28.png");
bookC.looping = false;
conB = loadAnimation("book/28.png","book/27.png","book/26.png","book/25.png");
conB.looping = false;
bookCRH = loadAnimation("book/cr.png");
bookCR = loadAnimation("book/21.png","book/22.png","book/23.png","book/24.png");
bookCR.looping = false;
creB = loadAnimation("book/24.png","book/23.png","book/22.png","book/21.png");
creB.looping = false;
startA = loadAnimation("start/12.jpg","start/12.jpg","start/12.jpg","start/11.jpg","start/11.jpg","start/11.jpg","start/10.jpg","start/10.jpg","start/10.jpg",
"start/9.jpg","start/9.jpg","start/9.jpg","start/8.jpg","start/8.jpg","start/7.jpg","start/7.jpg","start/6.jpg","start/6.jpg",
"start/5.jpg","start/5.jpg","start/4.jpg","start/4.jpg","start/3.jpg","start/3.jpg","start/2.jpg","start/2.jpg",
"start/1.jpg","start/1.jpg","start/0.png");
startA.looping = false;
start = loadSound("start.mp3");
menu = loadSound("menu.mp3");
nightimg = loadImage("night.png");
battleTheme = loadSound("b.mp3");
woodImg = loadImage("assets/rpg/s1.png");
ironImg = loadImage("assets/rpg/s2.png");
goldImg = loadImage("assets/rpg/s3.png");
redImg = loadImage("assets/rpg/s4.png");
heart1 = loadAnimation("assets/heart/1.png");
heart2 = loadAnimation("assets/heart/2.png");
heart3 = loadAnimation("assets/heart/3.png");
heart4 = loadAnimation("assets/heart/4.png");
bb = loadAnimation("1.png","1.png","1.png","2.png","2.png","2.png","3.png","3.png","3.png","4.png","4.png","4.png",
"5.png","5.png","5.png","6.png","6.png","6.png","7.png","7.png","7.png","8.png","8.png");
bb.looping = false;
bosssp = loadAnimation("assets/boss/1.png","assets/boss/2.png","assets/boss/3.png","assets/boss/4.png","assets/boss/5.png");
a = loadAnimation("b1.png","b2.png","b3.png");
a.looping = false;
bossthe = loadSound("boss.mp3");
witcha = loadAnimation("assets/enemy/1.png");
blasta  = loadAnimation("assets/enemy/s1.png","assets/enemy/s2.png","assets/enemy/s3.png","assets/enemy/s4.png",);
sa = loadAnimation("s1.png","s2.png");
over = loadSound("over.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  sG = new Group();
  blastG = new Group();
  witchG = new Group();
  witchG2 = new Group();
  witchG3 = new Group();
  treeG = new Group();
  fenceGV = new Group();
  edgeBG = new Group();
  edgeTG = new Group();
  edgeLG = new Group();
  edgeRG = new Group();
  decG = new Group();
  grassG = new Group();
  tileG = new Group();
  wallG = new Group();
  bossbg = createSprite(width/2,height/2);
  bossbg.addAnimation("bg",a);
  bossbg.addAnimation("G",heart4);
  bossbg.changeAnimation("G");
  bossbg.visible =false;
  makeWdec(20,-400,-48,-400,height+400);
  makeWdec(20,width+400,width+60,-400,height+400);
  makeWdec(20,0,width+10,height+130,height+400);
  makeWdec(20,0,width+10,height-700,height-1100);
  edgeT(29,20,20-48);
  nonespr(29,20,20);
  nonespr(29,20,68);
  nonespr(29,20,68+48);
  nonespr(29,20,68+48+48);
  nonespr(29,20,68+48+48+48);
  nonespr(29,20,68+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48+48+48+48);
  nonespr(29,20,68+48+48+48+48+48+48+48+48+48+48+48+48);
  edgeB(29,20,68+48+48+48+48+48+48+48+48+48+48+48+48+48);
  wall(1,250-48-48,height/2-48-48-48-48,wallc1);
  wall(1,250+48+48+48+48+48+48,height/2-48-48-48-48,wallc2);
  wall(1,250-48-48,height/2,wallc3);
  wall(1,250+48+48+48+48+48+48,height/2,wallc4);
  wall(7,250-48,height/2-48-48-48-48,wallu);
  wall(3,250+48+48+48,height/2,walld);
  wall(1,250+48+48,height/2,walldr);
  wall(1,250,height/2,walldl);
  wall(1,250-48,height/2,walld);
  wall(1,250-48-48,height/2-48,walll);
  wall(1,250-48-48,height/2-48-48,walll);
  wall(1,250-48-48,height/2-48-48-48,walll);
  wall(1,250+48+48+48+48+48+48,height/2-48,wallr);
  wall(1,250+48+48+48+48+48+48,height/2-48-48,wallr);
  wall(1,250+48+48+48+48+48+48,height/2-48-48-48,wallr);
  tile(7,250-48,height/2-48,tiled);
  tile(7,250-48,height/2-48-48,tilem);
  tile(7,250-48,height/2-48-48-48,tileu);
  tile(1,250-48,height/2-48-48,tilel)
  tile(1,250+48+48+48+48+48,height/2-48-48,tiler)
  tile(1,250-48,height/2-48-48-48,tilec1);
  tile(1,250+48+48+48+48+48,height/2-48-48-48,tilec2);
  tile(1,250-48,height/2-48,tilec4);
  tile(1,250+48+48+48+48+48,height/2-48,tilec3);
  edgeL(14,20-48,20);
  edgeR(14,48*29+20,20);
  witch(500,height/2,1);
  witch2(100,650,1);
  witch3(300,230,1);
  c1 = createSprite(20-48,20-48);
  c1.addImage(c1i);
  //c1.debug = true;
  c1.setCollider("circle",8,8,15);
  c2 = createSprite(48*29+20,20-48);
  c2.addImage(c2i);
  //c2.debug = true;
  c2.setCollider("circle",-6,8,15);
  c3 = createSprite(20-48,68+48+48+48+48+48+48+48+48+48+48+48+48+48);
  c3.addImage(c3i);
  //c3.debug = true;
  c3.setCollider("circle",8,-4,15);
  c4 = createSprite(48*29+20,68+48+48+48+48+48+48+48+48+48+48+48+48+48);
  c4.addImage(c4i);
  //c4.debug = true;
  c4.setCollider("circle",-6,-6,15);
  house1 = createSprite(300,200);
  house1.addImage(house1img);
  //house1.debug = true;
  house1.setCollider("rectangle",0,30,190,80);
  door1 = createSprite(house1.position.x-24,house1.position.y+55,40,40);
  door1.visible = false;
  textbox = createSprite(width/2,height - 100);
  textbox.addImage(textboxImg);
  textbox.visible = false;
  yes = createSprite(width/2,height - 100);
  yes.addImage(yesi);
  yes.visible = false;
  no = createSprite(width/2,height - 100);
  no.addImage(noi);
  no.visible = false;
  book = createSprite(width/2,height/2-20);
  book.addAnimation("stable",book0);
  book.addAnimation("open",bookO);
  book.addAnimation("menu",bookM);
  book.addAnimation("starto",bookSH);
  book.addAnimation("howH",bookHH);
  book.addAnimation("optH",bookOH);
  book.addAnimation("opt",bookOp);
  book.addAnimation("how",bookH);
  book.addAnimation("bookAH",bookAH);
  book.addAnimation("bookA",bookA);
  book.addAnimation("bookCH",bookCH);
  book.addAnimation("bookC",bookC);
  book.addAnimation("bookCRH",bookCRH);
  book.addAnimation("bookCR",bookCR);
  book.addAnimation("howtoB",howtoB);
  book.addAnimation("optB",optB);
  book.addAnimation("audB",audB);
  book.addAnimation("creB",creB);
  book.addAnimation("conB",conB);
  book.changeAnimation("stable");
  book.scale = 1.4;
  screen = createSprite(width/2,height/2);
  screen.addAnimation("start",startA);
  check1 = createSprite(100,100,5,5);
  check2 = createSprite(100,1500,5,5);
  check1.velocityY = 3;
  check1.visible = false;
  check2.visible = false;
  check3 = createSprite(100,100,5,5);
  check4 = createSprite(100,150,5,5);
  check3.visible = false;
  check4.visible = false;
  check5 = createSprite(100,100,5,5);
  check6 = createSprite(100,150,5,5);
  check5.visible = false;
  check6.visible = false;
  scheck1 = createSprite(100,100,5,5);
  scheck2 = createSprite(100,150,5,5);
  scheck1.visible = false;
  scheck2.visible = false;
  cha = createSprite(width/2, height/2, 50, 50);
  cha.addAnimation("move1",cham1);
  cha.addAnimation("still1",cha1);
  cha.addAnimation("move2",cham2);
  cha.addAnimation("still2",cha2);
  cha.addAnimation("move3",cham3);
  cha.addAnimation("still3",cha3);
  cha.addAnimation("move4",cham4);
  cha.addAnimation("still4",cha4);
  cha.changeAnimation("still1");
  cha.scale = 0.4;
  left = 0;
  right = 0;
  up = 0;
  down = 0;
  cha.setCollider("rectangle",0,50,60,40)
  start.play();
  //cha.debug = true;
  textmode = 0;
  state = "outside";
  gameState = "menuIntro";
  page = 0;

  chaB = createSprite(200,height/2);
  chaB.addAnimation("chab",cha4);
  chaB.visible = false;
  
  insideD = createSprite(250+48,height/2+10,48,48);
  insideD.visible = false;
  insideDB = createSprite(250+48,height/2+11,48,48);
  insideDB.visible = false;

  night = createSprite(cha.position.x,cha.position.y);
  night.addImage(nightimg);
  night.visible = false;

starts = createSprite(width/3+50,height/3-25,110,50);
starts.visible = false;

howto = createSprite(width/3+50,height/2-20,300,50);
howto.visible = false;

options = createSprite(width/3+59,height-210,150,50);
options.visible = false;

controls = createSprite(width/3+55,height/3-40,135,50);
controls.visible = false;

audio = createSprite(width/3+55,height/3+110,100,50)
audio.visible = false;

creds = createSprite(width/3+55,height-160,135,50);
creds.visible = false;

audS = createSprite(width/3-30,height/3-60,120,25)
audS.visible = false;

woodenSword = createSprite(width/5,height-100);
woodenSword.addImage("wooden",woodImg);
woodenSword.visible = false;

ironSword = createSprite(width/3,height-100);
ironSword.addImage("iron",ironImg);
ironSword.visible = false;

red1 = createSprite(200,height-50,400,100);
red1.shapeColor = '#f54242';
red2 = createSprite(width-200,height-50,400,100);
red2.shapeColor = '#f54242';

yellow1 = createSprite(500,height-50,200,100);
yellow1.shapeColor = '#fff242'

yellow2 = createSprite(width-500,height-50,200,100);
yellow2.shapeColor = '#fff242'

green = createSprite(width/2,height-50,165,100);
green.shapeColor = '#4aff4a';

black = createSprite(width/2,height-50,10,130);
black.shapeColor = '#1c1c1c';
black.velocityX = 100;

red1b = createSprite(200,height-50,400,100);
red1b.shapeColor = '#f54242';
red2b = createSprite(width-200,height-50,400,100);
red2b.shapeColor = '#f54242';

yellow1b = createSprite(500,height-50,200,100);
yellow1b.shapeColor = '#fff242'

yellow2b = createSprite(width-500,height-50,200,100);
yellow2b.shapeColor = '#fff242'

greenb = createSprite(width/2,height-50,165,100);
greenb.shapeColor = '#4aff4a';

blackb = createSprite(width/2,height-50,10,130);
blackb.shapeColor = '#1c1c1c';
blackb.velocityX = 100;


edge1 = createSprite(width+50,height-50,100,100);
edge2 = createSprite(-50,height-50,100,100);
edge1.visible =false;
edge2.visible = false;
red1.visible = false;
red2.visible = false;
green.visible = false;
yellow1.visible = false;
yellow2.visible = false;
black.visible = false;

red1b.visible = false;
red2b.visible = false;
greenb.visible = false;
yellow1b.visible = false;
yellow2b.visible = false;
blackb.visible = false;

red1d = createSprite(300,height-50,600,100);
red1d.shapeColor = '#f54242';

red2d = createSprite(width-300,height-50,600,100);
red2d.shapeColor = '#f54242';

greend = createSprite(width/2,height-50,165,100);
greend.shapeColor = '#4aff4a';

blackd = createSprite(width/2,height-50,10,130);
blackd.shapeColor = '#1c1c1c';
blackd.velocityX = 50;

red1db = createSprite(300,height-50,600,100);
red1db.shapeColor = '#f54242';

red2db = createSprite(width-300,height-50,600,100);
red2db.shapeColor = '#f54242';

greendb = createSprite(width/2,height-50,165,100);
greendb.shapeColor = '#4aff4a';

blackdb = createSprite(width/2,height-50,10,130);
blackdb.shapeColor = '#1c1c1c';
blackdb.velocityX = 50;

red1d.visible = false;
red2d.visible = false;
greend.visible = false;
blackd.visible = false;

red1db.visible = false;
red2db.visible = false;
greendb.visible = false;
blackdb.visible = false;

heart = createSprite(width/4,30);
heart.addAnimation("4",heart1);
heart.addAnimation("3",heart2);
heart.addAnimation("2",heart3);
heart.addAnimation("1",heart4);
heart.changeAnimation("4");
heart.visible = false;

checkd1 = createSprite(100,100,5,5);
checkd2 = createSprite(100,150,5,5);
checkd1.visible = false;
checkd2.visible = false;

checkd1b = createSprite(100,100,5,5);
checkd2b = createSprite(100,150,5,5);
checkd1b.visible = false;
checkd2b.visible = false;
  bosss = createSprite(500,height/2+10000);
  bosss.visible = false;
  bosss.addAnimation("boossss",bb);
bosss.addAnimation("booss",cha4);
bosss.changeAnimation("booss");

boss = createSprite(1000,height/2-100);
boss.addAnimation("boss",bosssp);
boss.scale = 1;

  hm = "notdone";
  conform = "yes";

  won = 1;
  irn = 0;
  gon = 0;
  ren = 0;

  turn = "us";
  hisTurn = "false";
  turnb = "us";
  hisTurnb = "false";
  sword = "no";
  check = "false";
  chaLife = 5;
  dou = "false";
  doub = "false";
  move = "false";
  moved = "false";
  moveb = "false";
  movedb = "false";
  ask = "no";
  ok = "nope";
  press = "no";
bossl = 10;
  boss.visible = false;
}

function draw() {
  if(chaLife <= 0){
    chaLife = 1;
    over.play;
    gameState = "over";
    textFont(font);
    fill("black");
    textSize(30);
    text("reload  the  page  to  restart",width/2,height/2);
    cha.destroy();
    theme.stop();
    bossthe.stop();
    inside.stop();
  }
  if(bossl <= 0){
    bossl = 1;
    gameState = "over";
    textFont(font);
    fill("black");
    textSize(30);
    text("you  won,thanks  for  playing",width/2,height/2);
    boss.destroy();
    theme.stop();
    bossthe.stop();
    inside.stop();
  }
  if(sG.isTouching(boss)){
    bossl -= 1;
  }
  
  if(keyIsDown(32) && press === "no"){
    press = "yes";
    s = createSprite(cha.position.x,cha.position.y);
    s.addAnimation("s",sa);
    s.lifetime = 30;
    sG.add(s);
    if(down === 1){
      s.velocityY = 5;
    }else if(left === 1){
      s.velocityX = -5;
    }else if(right === 1){
      s.velocityX = 5;
    }else if(up === 1){
      s.velocityY = -5;
    }
    scheck1.velocityY =3;
  }
  if(scheck1.isTouching(scheck2)){
    scheck1.position.y = 100;
    scheck1.velocityY = 0;
    press = "no";
  }
  if(ok === "yup"){
    ok = "no";
    bosss.visible = true;
    bosss.changeAnimation("boossss",bb);
  }
  if(ask1 === "sure"){
    gameState === "rpg";
  }
  black.bounceOff(edge1);
  black.bounceOff(edge2);
  blackd.bounceOff(edge1);
  blackd.bounceOff(edge2);
  night.position.x = cha.position.x;
  night.position.y = cha.position.y;
  if(checkd1.isTouching(checkd2)){
dou = "true";
checkd1.velocityY = 0;
checkd1.position.y = 100;

  }
  if(checkd1b.isTouching(checkd2)){
    doub = "true";
    checkd1b.velocityY = 0;
    checkd1b.position.y = 100;
    
      }
  drawSprites();
  if(gameState === "menuIntro"){
  if(check1.isTouching(check2)){
  check1.destroy();
  check2.destroy();
  screen.visible = false;
  gameState = "menuStart";
  start.stop();
  menu.loop();
  }
  }
  if(gameState === "menuStart"){
    background("#744f44");
    push();
    rectMode(CENTER);
    fill("#744f44");
    stroke("#382722");
  strokeWeight(10);
    rect(width/2,height/2,width-100,height-100);
    pop();
    drawSprites();
    textFont(font);
    fill("#6b7371");
    text("WRITTEN  BY  RANVEER  SINGH",width/2+60,height/2+100);
    textFont(font);
    fill("black");
    text("PRESS  ENTER",width/2+110,height/2+50);
    if(keyIsDown(13)){
      gameState = "menu";
      page  += 1;
      book.changeAnimation("open");
      check3.velocityY = 3;
    }
  }
  if(check3.isTouching(check4)){
    check3.destroy();
    check4.destroy();
    hm = "done";
  }
  if(check5.isTouching(check6)){
    check5.position.y -= 50;
    check5.velocityY = 0;
    conform = "yes";
  }
  if(gameState === "menu"){
    background("#744f44");
    push();
    rectMode(CENTER);
    fill("#744f44");
    stroke("#382722");
  strokeWeight(10);
    rect(width/2,height/2,width-100,height-100);
    pop();
    if(page === 1){
      if(hm === "done"){
      if(keyIsDown(13)){
        page += 1;
        book.changeAnimation("menu");
      }
    }
    }
    if(page === 2){
      if(mousePressedOver(starts)){
        gameState = "play";
        book.visible = false;
        menu.stop();
        theme.loop();
        treeG.setVisibleEach(true);
      fenceGV.setVisibleEach(true);
      edgeBG.setVisibleEach(true);
      edgeTG.setVisibleEach(true);
      edgeLG.setVisibleEach(true);
      edgeRG.setVisibleEach(true);
      decG.setVisibleEach(true);
      grassG.setVisibleEach(true);
      c1.visible = true;
      c2.visible = true;
      c3.visible = true;
      c4.visible = true;
      house1.visible = true;
      cha.visible = true;
      }
      if(mouseIsOver(starts)){
        book.changeAnimation("starto");
        }else if(mouseIsOver(howto)){
          book.changeAnimation("howH");
        }else if(mouseIsOver(options)){
          book.changeAnimation("optH");
        }else{
          book.changeAnimation("menu");
        }

      if(mousePressedOver(howto)){
        book.changeAnimation("how");
        page += 1;
      }
      if(mousePressedOver(options)){
        book.changeAnimation("opt");
        page += 2;
      }
    }
    if(page === 3){
      if(keyIsDown(8)){
        if(conform === "yes"){
      book.changeAnimation("howtoB");
      page -= 1;
        }
      }
    }
    if(page === 4){
      if(keyIsDown(8)){
        if(conform === "yes"){
        book.changeAnimation("optB");
        page -= 1;
        }
              }
      if(mouseIsOver(controls)){
        book.changeAnimation("bookCH");
      }else if(mouseIsOver(audio)){
        book.changeAnimation("bookAH");
      }else if(mouseIsOver(creds)){
        book.changeAnimation("bookCRH");
      }else{
        book.changeAnimation("opt");
      }
      if(mousePressedOver(controls)){
        page += 1;
        book.changeAnimation("bookC");
        conform = "no";
      }
      if(mousePressedOver(audio)){
        page += 2;
        book.changeAnimation("bookA");
        conform = "no";
      }
      if(mousePressedOver(creds)){
        page += 3;
        book.changeAnimation("bookCR");
        conform = "no";
      }
    }
    if(page === 5){
      if(keyIsDown(8)){
        check5.velocityY = 3;
        book.changeAnimation("conB");
        page -= 1;
              }
    }
    if(page === 6){
      if(keyIsDown(8)){
        check5.velocityY = 3;
        book.changeAnimation("audB");
        page -= 2;
              }
    }
    if(page === 7){
      if(keyIsDown(8)){
        check5.velocityY = 3;
        book.changeAnimation("creB");
        page -= 3;
              }
    }
    drawSprites();
  }
  if(gameState !== "play"){
    treeG.setVisibleEach(false);
    fenceGV.setVisibleEach(false);
    edgeBG.setVisibleEach(false);
    edgeTG.setVisibleEach(false);
    edgeLG.setVisibleEach(false);
    edgeRG.setVisibleEach(false);
    decG.setVisibleEach(false);
    grassG.setVisibleEach(false);
    c1.visible = false;
    c2.visible = false;
    c3.visible = false;
    c4.visible = false;
    house1.visible = false;
    tileG.setVisibleEach(false);
    wallG.setVisibleEach(false);
    cha.visible = false;
  }
  if(gameState === "play"){
  if(state === "outside"){
  background("#71deef");  
  boss.visible = false;
  if(sG.isTouching(witchG)){
    witchG.destroyEach();
  }
  if(sG.isTouching(witchG2)){
    witchG2.destroyEach();
  }
  if(sG.isTouching(witchG3)){
    witchG3.destroyEach();
  }
  if(cha.isTouching(witchG)){
    chaLife -=1;
    cha.position.x -=20;
  }
  if(cha.isTouching(witchG2)){
    chaLife -=1;
    cha.position.x -=20;
  }
  if(cha.isTouching(witchG3)){
    chaLife -=1;
    cha.position.x -=20;
  }
  camera.position.y = cha.position.y;
  camera.position.x = cha.position.x;
  witchG.setVisibleEach(true);
  witchG2.setVisibleEach(true);
  witchG3.setVisibleEach(true);
  if(cha.isTouching(boss)){
    cha.position.x = width/4;
    boss.visible = true;
      state = "boss";
      boss.scale = 2;
      turn = "us";
      blackd.visible = false;
      red1d.visible = false;
      red2d.visible = false;
      greend.visible = false;
      black.visible = false;
      black.velocityX =100;
    theme.stop();
    bossthe.loop();
    bosss.destroy();
    boss.visible =true;
bossbg.changeAnimation("bg");
bossbg.visible =true;
theme.stop();
treeG.setVisibleEach(false);
fenceGV.setVisibleEach(false);
edgeBG.setVisibleEach(false);
edgeTG.setVisibleEach(false);
edgeLG.setVisibleEach(false);
edgeRG.setVisibleEach(false);
decG.setVisibleEach(false);
grassG.setVisibleEach(false);
witchG.visible = false;
c1.visible = false;
c2.visible = false;
c3.visible = false;
c4.visible = false;
house1.visible = false;
  }
  }
textbox.position.x= cha.position.x;
textbox.position.y = cha.position.y+200;
  if(cha.position.y > house1.position.y){
    cha.depth = house1.depth+1;
  }
  if(cha.position.y < house1.position.y){
    cha.depth = house1.depth-1;
  }
  if(keyIsDown(DOWN_ARROW) && !textmode > 0){
    cha.changeAnimation("move1");
    cha.position.y += 5;
    down = 1;
    left = 0;
    right = 0;
    up = 0;
  }
  if(keyIsDown(LEFT_ARROW) && !textmode > 0){
    cha.changeAnimation("move2");
    cha.position.x -= 5;
    left = 1;
    right = 0;
    up = 0;
    down = 0;
  }
  if(keyIsDown(UP_ARROW) && !textmode > 0){
    cha.changeAnimation("move3");
    cha.position.y -= 5;
    left = 0;
    right = 0;
    up = 1;
    down = 0;
  }
  if(keyIsDown(RIGHT_ARROW) && !textmode > 0){
    cha.changeAnimation("move4");
    cha.position.x += 5;
    left = 0;
    right = 1;
    up = 0;
    down = 0;
  }
  if(!keyIsDown(RIGHT_ARROW) && !keyIsDown(LEFT_ARROW) && !keyIsDown(UP_ARROW) && !keyIsDown(DOWN_ARROW)){
    if(down == 1){
      cha.changeAnimation("still1");
    }
    if(left == 1){
      cha.changeAnimation("still2");
    }
    if(up == 1){
      cha.changeAnimation("still3");
    }
    if(right == 1){
      cha.changeAnimation("still4");
    }
  } 
  if(state === "outside"){
    blast(500,height/2,25);
      var rand = Math.round(random(1,20));
      switch(rand){
        case 1:rand = Math.round(random(1,4));
        switch(rand){
        case 1:blastG.setVelocityYEach(-5);
        blastG.setVisibleEach(true);
break;
case 2:blastG.setVelocityYEach(5);
        blastG.setVisibleEach(true);
break;
case 3:blastG.setVelocityXEach(5);
        blastG.setVisibleEach(true);
break;
case 4:blastG.setVelocityXEach(-5);
        blastG.setVisibleEach(true);
break;

        }
          break;
      }
    
  cha.collide(treeG);
  cha.collide(fenceGV);
  cha.collide(edgeBG);
  cha.collide(edgeTG);
  cha.collide(edgeLG);
  cha.collide(edgeRG);
  cha.collide(c1);
  cha.collide(c2);
  cha.collide(c3);
  cha.collide(c4);
  cha.collide(house1);
  }
  if(state == "inside"){
    background("#0c1414");
    witchG.setVisibleEach(false);
    witchG2.setVisibleEach(false);
    witchG3.setVisibleEach(false);
    tileG.setVisibleEach(true);
    wallG.setVisibleEach(true);
    treeG.setVisibleEach(false);
    fenceGV.setVisibleEach(false);
    edgeBG.setVisibleEach(false);
    edgeTG.setVisibleEach(false);
    edgeLG.setVisibleEach(false);
    edgeRG.setVisibleEach(false);
    decG.setVisibleEach(false);
    grassG.setVisibleEach(false);
    c1.visible = false;
    c2.visible = false;
    c3.visible = false;
    c4.visible = false;
    house1.visible = false;
    cha.collide(wallG);
    cha.collide(insideDB);
    if(cha.isTouching(insideD) && state === "inside"){
      textmode = 2;
      textbox.visible = true;
      yes.position.x = cha.position.x-400;
      yes.position.y = height-150;
      no.position.x = cha.position.x-300;
      no.position.y = height-150;
      yes.visible = true;
      no.visible = true;
      
      if(mousePressedOver(no)){
        cha.position.y -= 10;
        down = 0;
        left = 0;
        up = 1;
        right = 0;
      }
      if(mousePressedOver(yes)){
        state = "outside";
        tileG.setVisibleEach(false);
        wallG.setVisibleEach(false);
        inside.stop();
        theme.loop();
        treeG.setVisibleEach(true);
      fenceGV.setVisibleEach(true);
      edgeBG.setVisibleEach(true);
      edgeTG.setVisibleEach(true);
      edgeLG.setVisibleEach(true);
      edgeRG.setVisibleEach(true);
      decG.setVisibleEach(true);
      grassG.setVisibleEach(true);
      c1.visible = true;
      c2.visible = true;
      c3.visible = true;
      c4.visible = true;
      house1.visible = true;
      }
      }else{
          textmode=0;
          textbox.visible = false;
          yes.visible = false;
          no.visible = false;
        }
  }
  drawSprites();
  if(cha.isTouching(insideD) && state === "inside"){
    textFont(font);
    fill("black");
    textSize(30);
    text("do  you  want  to  exit?",cha.position.x-450,height-200);
    }
  if(cha.isTouching(door1) && state === "outside"){
    textmode=1;
    textbox.visible = true;
    yes.position.x = cha.position.x-400;
    yes.position.y = height-150;
    no.position.x = cha.position.x-300;
    no.position.y = height-150;
    yes.visible = true;
    no.visible = true;
    textFont(font);
    fill("black");
    textSize(30);
    text("do  you  want  to  enter?",cha.position.x-450,height-200);
    if(mousePressedOver(no)){
      cha.position.y += 10;
      down = 1;
      left = 0;
      up = 0;
      right = 0;
    }
    if(mousePressedOver(yes)){
      state = "inside";
      theme.stop();
      inside.loop();
    }
    }else{
        textmode=0;
        textbox.visible = false;
        yes.visible = false;
        no.visible = false;
      }
    if(cha.isTouching(blastG)){
      chaLife -= 1;
      cha.position.y -= 15;
  }
    }
    if(state === "boss"){
      witchG.setVisibleEach(false);
      witchG3.setVisibleEach(false);
      witchG2.setVisibleEach(false);
      blast(boss.position.x,boss.position.y,100);
      var rand = Math.round(random(1,4));
      switch(rand){
        case 1:rand = Math.round(random(1,4));
        switch(rand){
        case 1:blastG.setVelocityYEach(-5);
        blastG.setVisibleEach(true);
break;
case 2:blastG.setVelocityYEach(5);
        blastG.setVisibleEach(true);
break;
case 3:blastG.setVelocityXEach(5);
        blastG.setVisibleEach(true);
break;
case 4:blastG.setVelocityXEach(-5);
        blastG.setVisibleEach(true);
break;

        }
          break;
      }
      treeG.setVisibleEach(false);
      fenceGV.setVisibleEach(false);
      edgeBG.setVisibleEach(false);
      edgeTG.setVisibleEach(false);
      edgeLG.setVisibleEach(false);
      edgeRG.setVisibleEach(false);
      decG.setVisibleEach(false);
      grassG.setVisibleEach(false);
      c1.visible = false;
      c2.visible = false;
      c3.visible = false;
      c4.visible = false;
      house1.visible = false;
    }

    if(move === "true" && gameState === "rpg"){
      move = "false";
      black.destroy();
      black = createSprite(width/2,height-50,10,130);
      black.shapeColor = '#1c1c1c';
      black.velocityX = 100;
    }
    if(moved === "true" && gameState === "rpg"){
      moved = "false";
      blackd.destroy();
      blackd = createSprite(width/2,height-50,10,130);
      blackd.shapeColor = '#1c1c1c';
      blackd.velocityX = 50;
    }
    if(moveb === "true" && gameState === "rpgboss"){
      moveb = "false";
      blackb.destroy();
      blackb = createSprite(width/2,height-50,10,130);
      blackb.shapeColor = '#1c1c1c';
      blackb.velocityX = 100;
    }
    if(movedb === "true" && gameState === "rpgboss"){
      movedb = "false";
      blackdb.destroy();
      blackdb = createSprite(width/2,height-50,10,130);
      blackdb.shapeColor = '#1c1c1c';
      blackdb.velocityX = 50;
    }
}

function nonespr(n,x,y) {
  for(var c=0; c<n; c++)
  {
    var grass = createSprite(x+48*c,y,50, 25);
    var rand = Math.round(random(1,5));
    switch (rand){
      case 1: grass.addImage(grassimg1);
      break;
      case 2: grass.addImage(grassimg2);
      break;
      case 3: grass.addImage(grassimg3);
      break;
      case 4: grass.addImage(grassimg4);
      break;
      case 5: grass.addImage(grassimg5);
      break;
  }
  grassG.add(grass);
  }
}
function tile(n,x,y,img) {
  for(var c=0; c<n; c++)
  {
    var tile = createSprite(x+48*c,y,50, 25);
    tile.addImage(img);
    tileG.add(tile);
  }
}
function trees(n,x,y,img){
  for(var c=0; c<n; c++){
    var tree;
   tree = createSprite(x+48*c,y,50, 25);
    tree.addImage(img);
    tree.setCollider("rectangle",7,49,40,25);
    treeG.add(tree);
  }
  //tree.debug = true;
}
function fencesV(n,x,y){
  for(var c=0; c<n; c++){
    var fenceV;
    fenceV = createSprite(x,y+48*c,50, 25);
    fenceV.addImage(fenceVimg);
    fenceV.setCollider("rectangle",0,0,20,50);
    fenceGV.add(fenceV);
  }
  //fenceV.debug = true;
}

function edgeB(n,x,y){
  for(var c=0; c<n; c++)
  {
    var edgeB = createSprite(x+48*c,y,50, 25);
    edgeB.addImage(edgeBimg);
    //edgeB.debug = true;
    edgeB.setCollider("rectangle",0,15,50,60);
    edgeBG.add(edgeB);
  }
}
function edgeT(n,x,y){
  for(var c=0; c<n; c++)
  {
    var edgeT = createSprite(x+48*c,y,50, 25);
    edgeT.addImage(edgeTimg);
    //edgeT.debug = true;
    edgeT.setCollider("rectangle",0,-15,50,40);
    edgeTG.add(edgeT);
  }
}
function edgeL(n,x,y){
  for(var c=0; c<n; c++){
    var edgeL;
    edgeL = createSprite(x,y+48*c,50, 25);
    edgeL.addImage(edgeLimg);
    //edgeL.debug = true;
    edgeL.setCollider("rectangle",-15,0,50,50);
    edgeLG.add(edgeL);
  }
}
function edgeR(n,x,y){
  for(var c=0; c<n; c++){
    var edgeR;
    edgeR = createSprite(x,y+48*c,50, 25);
    edgeR.addImage(edgeRimg);
    //edgeR.debug = true;
    edgeR.setCollider("rectangle",15,0,50,50);
    edgeRG.add(edgeR);
  }
}
function makeWdec(n,w1,w2,h1,h2){
  for(var i=0; i<=n; i++)
  {
    var dec = createSprite(random(w1,w2),random(h1,h2));
    var rand = Math.round(random(1,2));
    switch (rand){
      case 1: dec.addImage(decimg1);
      break;
      case 2: dec.addImage(decimg2);
      break;
  }
  decG.add(dec);
  }
}
function wall(n,x,y,img) {
  for(var c=0; c<n; c++)
  {
    var wall = createSprite(x+48*c,y,50, 25);
    wall.addImage(img);
    wallG.add(wall);
  }
}
function witch(x,y,n){
  for(var c=0; c<n; c++){
enemy = createSprite(x,y);
enemy.addAnimation("hey",witcha);
enemy.visible = false;
blast1 = createSprite(x,y);
blast1.addAnimation("blast",blasta)
blast1.visible = false;
witchG.add(enemy);
blastG.add(blast1);
  }
}
function witch2(x,y,n){
  for(var c=0; c<n; c++){
enemy = createSprite(x,y);
enemy.addAnimation("hey",witcha);
enemy.visible = false;
blast1 = createSprite(x,y);
blast1.addAnimation("blast",blasta)
blast1.visible = false;
witchG2.add(enemy);
blastG.add(blast1);
  }
}
function witch3(x,y,n){
  for(var c=0; c<n; c++){
enemy = createSprite(x,y);
enemy.addAnimation("hey",witcha);
enemy.visible = false;
blast1 = createSprite(x,y);
blast1.addAnimation("blast",blasta)
blast1.visible = false;
witchG3.add(enemy);
blastG.add(blast1);
  }
}
function blast(x,y,n){
  blast1 = createSprite(x,y);
blast1.addAnimation("blast",blasta)
blast1.visible = false;
blastG.add(blast1);
blast1.lifetime = n;
}