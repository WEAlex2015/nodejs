var os = require('os');

// 获取cpu(处理器架构)

var arch = os.arch();
console.log("获取cpu(处理器架构)");
console.log(arch);

// 获取cpu信息

var cpus = os.cpus();
console.log("获取cpu信息");
console.log(cpus);

// 字节顺序 高位优先返回BE,低位优先的返回LE

var endianness = os.endianness();
console.log("字节顺序");
console.log(endianness);

// 空闲内存字节

var freemem = os.freemem()
console.log("空闲内存字节");
console.log(freemem);

// 当前登录用户的根目录

var homedir = os.homedir();
console.log("当前登录用户的根目录");
console.log(homedir);

// 操作系统主机名

var hostname = os.hostname()
console.log("操作系统主机名");
console.log(hostname);

// 系统最近5、10、15分钟的平均负载,这是一个针对linux或unix的统计，windows下始终返回[0,0,0]

var loadavg = os.loadavg();
console.log("系统最近5、10、15分钟的平均负载,windows下始终返回[0,0,0]");
console.log(loadavg);

// 网络配置列表

var networkInterfaces = os.networkInterfaces();
console.log("网络配置列表");
console.log(networkInterfaces);

// 操作系统类型,返回值有'darwin', 'freebsd', 'linux', 'sunos' , 'win32'

var platform = os.platform();
console.log("操作系统类型");
console.log(platform);

// 操作系统版本

var release = os.release();
console.log("操作系统版本");
console.log(release);

// 操作系统临时文件的默认目录

var tmpdir = os.tmpdir()
console.log("操作系统临时文件的默认目录");
console.log(tmpdir);

// 系统总内存

var totalmem = os.totalmem()
console.log("系统总内存");
console.log(totalmem);

// 操作系统名称，基于linux的返回linux,基于苹果的返回Darwin,基于windows的返回Windows_NT

var type = os.type();
console.log("操作系统名称");
console.log(type);

// 计算机正常运行时间

var uptime = os.uptime();
console.log("计算机正常运行时间");
console.log(uptime);