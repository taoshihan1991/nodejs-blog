-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2015 年 12 月 29 日 23:29
-- 服务器版本: 5.5.40
-- PHP 版本: 5.3.29

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
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`id`, `title`, `content`, `time`, `author`, `category_id`) VALUES
(1, 'Node.js Express 框架', 'PHP7已经发布了, 作为PHP10年来最大的版本升级, 最大的性能升级, PHP7在多放的测试中都表现出很明显的性能提升, 然而, 为了让它能发挥出最大的性能, 我还是有几件事想提醒下.\nPHP7已经发布了, 作为PHP10年来最大的版本升级, 最大的性能升级, PHP7在多放的测试中都表现出很明显的性能提升, 然而, 为了让它能发挥出最大的性能, 我还是有几件事想提醒下.\nPHP7已经发布了, 作为PHP10年来最大的版本升级, 最大的性能升级, PHP7在多放的测试中都表现出很明显的性能提升, 然而, 为了让它能发挥出最大的性能, 我还是有几件事想提醒下.Express 简介\nExpress 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。\n使用 Express 可以快速地搭建一个完整功能的网站。\nExpress 框架核心特性：\n可以设置中间件来响应 HTTP 请求。\n定义了路由表用于执行不同的 HTTP 请求动作。\n可以通过向模板传递参数来动态渲染 HTML 页面。\n', 1451392609, 'tsh', 0),
(2, '我的第一篇博文', '我的第一篇博文内容', 1451392609, 'tsh', 2),
(3, 'Node.js模块系统', '为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统。\r\n模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。', 1446824075, '', 2),
(4, 'Node.js 回调函数', 'Node.js 异步编程的直接体现就是回调。\r\n异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。\r\n回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。\r\n例如，我们可以一边读取文件，一边执行其他命令，在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求。', 1451403275, '', 1);

-- --------------------------------------------------------

--
-- 表的结构 `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增编号',
  `name` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, '随笔'),
(2, '笔记');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
