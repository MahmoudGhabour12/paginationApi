-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2020 at 09:33 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `easykash`
--

-- --------------------------------------------------------

--
-- Table structure for table `offers`
--

CREATE TABLE `offers` (
  `id` int(10) UNSIGNED NOT NULL,
  `seller_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(128) NOT NULL,
  `amount` decimal(19,2) NOT NULL,
  `fees` decimal(19,2) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Dumping data for table `offers`
--

INSERT INTO `offers` (`id`, `seller_id`, `title`, `amount`, `fees`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'offer num 1', '2000.00', '200.00', '2020-08-28 19:21:32', '2020-08-28 19:21:32'),
(2, 1, 'offer num 2', '1344.00', '432.00', '2020-08-28 19:23:55', '2020-08-28 19:23:55'),
(3, 1, 'offer num 3', '300.00', '52.00', '2020-08-28 19:24:09', '2020-08-28 19:24:09'),
(4, 1, 'offer num 4', '400.00', '200.00', '2020-08-28 19:24:22', '2020-08-28 19:24:22'),
(5, 1, 'offer num 5', '800.00', '250.00', '2020-08-28 19:24:35', '2020-08-28 19:24:35'),
(6, 1, 'offer num 6', '20.00', '580.00', '2020-08-28 19:24:48', '2020-08-28 19:24:48'),
(7, 1, 'offer num 7', '120.00', '60.00', '2020-08-28 19:25:00', '2020-08-28 19:25:00'),
(8, 1, 'offer num 7', '120.00', '60.00', '2020-08-28 19:25:00', '2020-08-28 19:25:00'),
(9, 1, 'offer num 9', '250.00', '98.00', '2020-08-28 19:25:14', '2020-08-28 19:25:14'),
(10, 1, 'offer num 6', '150.00', '80.00', '2020-08-28 19:25:25', '2020-08-28 19:25:25'),
(11, 1, 'offer num 12', '680.00', '250.00', '2020-08-28 19:25:42', '2020-08-28 19:25:42'),
(12, 1, 'new offer', '23.00', '56.00', '2020-08-28 19:26:01', '2020-08-28 19:26:01'),
(13, 1, 'new offer2', '222.00', '23.00', '2020-08-28 19:26:12', '2020-08-28 19:26:12'),
(14, 1, 'new offer3', '11.00', '213.00', '2020-08-28 19:26:23', '2020-08-28 19:26:23'),
(15, 1, 'new offer3', '11.00', '213.00', '2020-08-28 19:26:46', '2020-08-28 19:26:46'),
(16, 1, 'new offer4', '121.00', '55.00', '2020-08-28 19:26:56', '2020-08-28 19:26:56'),
(17, 1, 'new offer123', '112.00', '12.00', '2020-08-28 19:27:07', '2020-08-28 19:27:07'),
(18, 1, 'new 13', '23.00', '345.00', '2020-08-28 19:27:20', '2020-08-28 19:27:20'),
(19, 1, ' big offer', '12.00', '500.00', '2020-08-28 19:27:36', '2020-08-28 19:27:36'),
(20, 1, ' big offer 1', '1112.00', '5010.00', '2020-08-28 19:27:46', '2020-08-28 19:27:46'),
(21, 1, ' big offer 11', '122.00', '12.00', '2020-08-28 19:27:57', '2020-08-28 19:27:57'),
(22, 1, ' big offer 12', '454.00', '123.00', '2020-08-28 19:28:07', '2020-08-28 19:28:07'),
(23, 1, ' big offer 12', '600.00', '123.00', '2020-08-28 19:28:18', '2020-08-28 19:28:18'),
(24, 1, ' big offer 14', '6100.00', '1213.00', '2020-08-28 19:28:33', '2020-08-28 19:28:33');

-- --------------------------------------------------------

--
-- Table structure for table `sellers`
--

CREATE TABLE `sellers` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(128) NOT NULL,
  `phone` decimal(19,2) NOT NULL,
  `email` varchar(128) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Dumping data for table `sellers`
--

INSERT INTO `sellers` (`id`, `name`, `phone`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'Mahmoud', '10256888.00', 'mahmoud@gmail.com', '2020-08-28 19:32:16', '2020-08-28 19:32:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sellers`
--
ALTER TABLE `sellers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `offers`
--
ALTER TABLE `offers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `sellers`
--
ALTER TABLE `sellers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
