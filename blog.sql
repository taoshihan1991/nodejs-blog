-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 �?08 �?27 �?19:11
-- 服务器版本: 5.5.40
-- PHP 版本: 5.5.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `blog`
--

-- --------------------------------------------------------

--
-- 表的结构 `article`
--

CREATE TABLE IF NOT EXISTS `article` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增编号',
  `title` varchar(125) NOT NULL DEFAULT '',
  `content` text NOT NULL,
  `time` int(10) unsigned NOT NULL DEFAULT '0',
  `author` varchar(50) NOT NULL DEFAULT '',
  `category_id` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`id`, `title`, `content`, `time`, `author`, `category_id`) VALUES
(1, 'Node.js Express 框架', '    PHP7已经发布了, 作为PHP10年来最大的版本升级, 最大的性能升级, PHP7在多放的测试中都表现出很明显的性能提升, 然而, 为了让它能发挥出最大的性能, 我还是有几件事想提醒下.\r\n\r\n    PHP7已经发布了, 作为PHP10年来最大的版本升级, 最大的性能升级, PHP7在多放的测试中都表现出很明显的性能提升, 然而, 为了让它能发挥出最大的性能, 我还是有几件事想提醒下.\r\n    PHP7已经发布了, 作为PHP10年来最大的版本升级, 最大的性能升级, PHP7在多放的测试中都表现出很明显的性能提升, 然而, 为了让它能发挥出最大的性能, 我还是有几件事想提醒下.Express 简介\r\nExpress 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。\r\n使用 Express 可以快速地搭建一个完整功能的网站。\r\nExpress 框架核心特性：\r\n可以设置中间件来响应 HTTP 请求。\r\n定义了路由表用于执行不同的 HTTP 请求动作。\r\n可以通过向模板传递参数来动态渲染 HTML 页面。\r\n', 1451392609, 'tsh', 1),
(2, '我的第一篇博文', '我的第一篇博文内容\r\n\r\n我的第一篇博文内容\r\n\r\n我的第一篇博文内容\r\n\r\n我的第一篇博文内容', 1451392609, 'tsh', 2),
(3, 'Node.js模块系统', '为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。\r\n模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。', 1446824075, '', 2),
(4, 'Node.js 回调函数', 'Node.js 异步编程的直接体现就是回调。\r\n\r\n<p>ssss</p>\r\n异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。\r\n回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。\r\n例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。sssddd', 1451403275, '', 1),
(13, '平凡之路', '平凡之路', 1453989012, '', 1),
(14, '风云雄霸天下拍的很好', '时至今日 很多画面还会浮现脑海雄霸的三分归元气无名的万剑归宗\r\n剑圣差点干掉雄霸（脑补画面中\r\n当初最激动的莫过于每次看到火麒麟的出现 对于童年的我简直是谜一样的存在 太吸引人了！\r\n最后看到它被雄霸杀死后居然流泪了！ \r\n我也难过了好久我会告诉你我那时经常吹泡泡，然后模仿雄霸的动作大喊：“三分归元气！”么？\r\n倚楼听风雨淡看江湖路转眼间，十多年过去了 如果真有人翻拍的话，只希望能把火麒麟的特效做好一点，毕竟千叶的雄霸无法超越\r\n\r\n片头片尾曲和中间的背景音乐简直好听\r\n第二梦美美哒不要不要的', 1455635074, '', 2),
(15, 'nodejs-blog上线啦1', 'nodejs-blog上线啦1', 1457869733, '', 3),
(16, '青果云音乐', '青果云音乐正式上线\r\n大家欢迎', 1472286300, '', 1),
(12, '夜空中最亮的星', '夜空中最亮的星 能否听清\r\n那仰望的人 心底的孤独和叹息\r\n夜空中最亮的星 能否记起\r\n曾与我同行 消失在风里的身影\r\n我祈祷拥有一颗透明的心灵\r\n和会流泪的眼睛\r\n给我再去相信的勇气\r\n越过谎言去拥抱你\r\n每当我找不到存在的意义\r\n每当我迷失在黑夜里\r\n夜空中最亮的星\r\n请指引我靠近你\r\n夜空中最亮的星 是否知道\r\n曾与我同行的身影 如今在哪里\r\n夜空中最亮的星 是否在意\r\n是等太阳升起 还是意外先来临\r\n我宁愿所有痛苦都留在心里\r\n也不愿忘记你的眼睛\r\n给我再去相信的勇气\r\n越过谎言去拥抱你\r\n每当我找不到存在的意义\r\n每当我迷失在黑夜里\r\n夜空中最亮的星 请照亮我前行\r\n我祈祷拥有一颗透明的心灵\r\n和会流泪的眼睛\r\n给我再去相信的勇气\r\n越过谎言去拥抱你\r\n每当我找不到存在的意义\r\n每当我迷失在黑夜里\r\n夜空中最亮的星\r\n请照亮我前行\r\n夜空中最亮的星 能否听清\r\n那仰望的人 心底的孤独和叹息\r\n<embed src="http://music.163.com/style/swf/widget.swf?sid=25706282&type=2&auto=0&width=320&height=66" width="340" height="86"  allowNetworking="all"></embed>', 1453988651, '', 1);

-- --------------------------------------------------------

--
-- 表的结构 `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增编号',
  `name` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, '全栈'),
(2, '随笔'),
(3, '关于');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
