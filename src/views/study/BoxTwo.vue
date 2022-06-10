<template>
    <div class="two">
        <h1>第二页</h1>
        <canvas ref="canvas" width="1000" height="500" id="canvas"></canvas>
    </div>
</template>
<script lang="ts" setup>
import { arch } from "os";
import { text } from "stream/consumers";
import { onMounted,ref } from "vue";
// let a = [1,'1'];
// a = [];
// console.log(a);
let extend = ():number=>{
    return 123;
}
interface int{
    readonly x:number;
    y:number;
}
let intlist = ref<int[]>([]);
intlist.value.push({x:123,y:233});
// intlist.value[0].x = 1;
// console.log(intlist);
interface int_1{
    x:number
}
class obj implements int{
    readonly x:number;
    y:number;
    constructor(x:number,y:number){
        this.x = x;
        this.y = y;
    }
}
let objlist:Array<obj> = [];
objlist.push(new obj(1,2));
// console.log(objlist);
onMounted(()=>{
    class twoObj{
        name?:string;
        do(a:string){
            this.name = a;
        }
    }
    let two = new twoObj();
    let t = new twoObj();
    // console.log(two.name,t.name);
    two.do('twoooooo');
    t.do('toooo');
    // console.log(two.name,t.name);
    let identity = <T>(arg:T):T =>{
        return arg;
    }
    let output = identity('string');
    // console.log(output);



    // canvas部分
    
   
    // draw();
})
 // let draw = ():void=>{
        // let canvas:HTMLCanvasElement=<HTMLCanvasElement>document.getElementById("canvas");
        // let ctx:any = canvas.getContext('2d');
        // 》》》》》》》》》》  线条、字体相关  《《《《《《《《《《

        // ctx.globalAlpha = 0.1;  //透明度(放在前面)
        // ctx.fillStyle = "rgb(200,0,0)"; //填充颜色
        // ctx.fillRect(x,y,width,height); //填充矩形 
        // ctx.strokeStyle = "rgb(200,0,0)";  //线条颜色
        // ctx.strokeRect(5, 5, 60, 60); //绘制线条边框
        // ctx.clearRect(20,20,30,30); //清除区域
        // ctx.beginPath() //新建一条path
        // ctx.moveTo(50,50); //确定画笔起始点
        // ctx.lineTo(100,100); //移动
        // ctx.lineTo(50,100); //移动
        // ctx.lineWidth = 10; //线条宽度
        // ctx.lineCap = "round"; //线条末端样式（butt:方形  round:圆形  square:square：线段末端以方形结束，但是增加了一个宽度和线段相同，高度是线段厚度一半的矩形区域。）
        // ctx.lineJoin = "round"; //设定两线条接合处的样式（round:圆形  bevel:平  miter:默认）
        // ctx.setLineDash([20,5]); //设置虚线([实线长度，间隙长度])
        // ctx.lineDashOffset = 0; //设置虚线起始偏移量
        // console.log(ctx.getLineDash()); //获取当前虚线样式
        // ctx.closePath(); //闭合路径(两个点为一条线)
        // ctx.stroke();   //描边(不会自动闭合)
        // ctx.fill();  //填充(会自动闭合)
        // 绘制文本
        // ctx.font = "100px sans-serif"; //设置大小，字体等（与css相同）
        // ctx.textAline = 'start';  //设置文本对齐选项（start(默认),end,left,right,center）
        // ctx.textBaseline = 'alphabetic';  //设置基线对齐选项（top,hanging,middle,alphabetic(默认),ideographic,bottom）
        // ctx.direction = "inherit";  //文本方向(ltr,rtl,inherit(默认))
        // ctx.fillText('这是文本',100,200,200) //绘制填充文本（文本,x,y,最大宽度（可选））
        // ctx.strokeText('这是文本',200,200) //绘制文本边框（文本,x,y,最大宽度（可选））

        // 》》》》》》》》》》  线条、字体相关 ---- end ----  《《《《《《《《《《


        
        // 》》》》》》》》》》  圆弧相关  《《《《《《《《《《 

        // 绘制圆弧
        // @params ❶
        // startAngle > 开始弧度
        // endAngle > 结束弧度
        // anticlockwise > 是否逆时针 > true:逆时针  false:顺时针
        // arch(x,y,r,startAngle,endAngle,anticlockwise)
        // radians = (Math.PI/180)*degress 角度转换成弧度  >>>一角度 = π/180 弧度
        // @params ❷
        // x1,y1:控制点一坐标
        // x2,y2:控制点二坐标
        // radius:圆弧半径
        // arcTo(x1,y1,x2,y2,radius)
        // ctx.arcTo(200,50,200,200,100);
        // ctx.lineTo(200,200);
        // ctx.stroke();
        // ctx.beginPath();
        // ctx.rect(50, 50, 10, 10); //起始点
        // ctx.rect(200, 50, 10, 10); //控制点一坐标
        // ctx.rect(200, 200, 10, 10); //控制点二坐标
        // ctx.fill()
        // 绘制二次贝塞尔曲线
        // @params
        // x1,y1:控制点一坐标
        // x2,y2:结束点坐标
        // quadraticCurveTo(x1, y1, x2, y2)
        // 绘制三次贝塞尔曲线
        // x1,y1:控制点一坐标
        // x2,y2:控制点一坐标
        // x3,y3:结束点坐标
        // bezierCurveTo(x1, y1, x2, y2, x3, y3)

        // 》》》》》》》》》》  圆弧相关  ---- end ----  《《《《《《《《《《 



        // 》》》》》》》》》》  绘制图片相关  《《《《《《《《《《

        // 方法一
        // let img:any = document.getElementById('');//获取页面图片
        // 方法二
        // let img = new Image(); //创建一个图片
        // img.onload = function(){
            // ctx.drawImage(img,0,0,180,100); //开始绘制图片(五个参数) 参数：（图片,x,y,width(可选),height(可选)）
            // ctx.drawImage(img,100,0,500,300,200,0,180,100); //切片(九个参数)  参数：(图片,切片x位置,切片y位置,切片宽度,切片高度,切片显示x,切片显示y,切片显示宽度,切片显示高度)
        // }
        // img.src = require("@/assets/nvwushen.jpeg");  //设置图片地址

        // 》》》》》》》》》》  绘制图片相关  ---- end ----  《《《《《《《《《《



        // 》》》》》》》》》》  状态的保存和恢复部分  《《《《《《《《《《
        // ctx.save(); //保存canvas状态（类似数组）
        // ctx.restore(); //加载之前存储的状态
        // ctx.fillRect(0, 0, 150, 150);   // 使用默认设置绘制一个矩形
        // ctx.save();                  // 保存默认状态
    
        // ctx.fillStyle = 'red'       // 在原有配置基础上对颜色做改变
        // ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形
    
        // ctx.save();                  // 保存当前状态
        // ctx.fillStyle = '#FFF'       // 再次改变颜色配置
        // ctx.fillRect(30, 30, 90, 90);   // 使用新的配置绘制一个矩形
    
        // ctx.restore();               // 重新加载之前的颜色状态
        // ctx.fillRect(45, 45, 60, 60);   // 使用上一次的配置绘制一个矩形
    
        // ctx.restore();               // 加载默认颜色配置
        // ctx.fillRect(60, 60, 30, 30);   // 使用加载的配置绘制一个矩形

        // 》》》》》》》》》》  状态的保存和恢复部分  ---- end ----  《《《《《《《《《《



        // 》》》》》》》》》》  移动、旋转、缩放  《《《《《《《《《《
        // ctx.translate(10,90);  //移动到指定位置
        // ctx.rotate(Math.PI/180*45);  //旋转角度
        // ctx.scale(10,30);  //缩放  (x轴缩放系数,y轴缩放系数)
        // ctx.transform(a,b,c,d,e,f);   //变形矩阵   (水平缩放比例,水平倾斜,垂直倾斜,垂直缩放比例,水平移动,垂直移动)
        // 》》》》》》》》》》  移动、旋转、缩放  ---- end ----  《《《《《《《《《《

        

        // 》》》》》》》》》》  合成  《《《《《《《《《《
        // ctx.globalCompositeOperation = "source-over";  //处理重叠部分 值：source-over(默认,新图像会覆盖在原图像上面),source-in(仅显示新图像的重叠部分),source-out(仅显示新图像中没有和老图像重叠的部分)
                                                          //source-atop(显示老图像和新老图像重叠部分),destination-over(新图像会在老图像下面),destination-in(仅显示老图像的重叠部分),destination-out(仅显示老图像中没有和新图像重叠的部分)
                                                          //destination-atop(显示新图像和新老图像重叠部分),ighter(重叠部分颜色做加处理),darken(保留重叠部分最黑的像素),lighten(保留重叠部分最亮的色素),xor(重叠部分变透明),copy(只保留新图像)
        // 》》》》》》》》》》  合成  ---- end ----  《《《《《《《《《《



        // 》》》》》》》》》》  裁剪路径  《《《《《《《《《《
        // ctx.clip()  //把已经创建的路径转换成裁剪路径（只能裁剪方法调用之后绘制的图像）
        // 》》》》》》》》》》  裁剪路径  ---- end ----  《《《《《《《《《《



        // 》》》》》》》》》》  动画 《《《《《《《《《《
        // setInterval()  //计时器
        // setTimeout()  //定时器
        // requestAnimationFrame()  //浏览器在下次重绘之前调用指定的回调函数
        // 》》》》》》》》》》  动画  ---- end ----  《《《《《《《《《《
    // }

</script>
<style>
#canvas{
    margin: 0 auto;
    background: #e2e2e2;
}
</style>