-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3360
-- Generation Time: Dec 05, 2021 at 11:44 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `issue_report`
--

-- --------------------------------------------------------

--
-- Table structure for table `reported_issues`
--

CREATE TABLE `reported_issues` (
  `id` int(11) NOT NULL,
  `issue_name` varchar(255) NOT NULL,
  `issue_desc` varchar(255) DEFAULT NULL,
  `issue_category` varchar(255) NOT NULL,
  `is_customer_posted` tinyint(1) NOT NULL DEFAULT 1,
  `is_solved` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `issue_image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reported_issues`
--

INSERT INTO `reported_issues` (`id`, `issue_name`, `issue_desc`, `issue_category`, `is_customer_posted`, `is_solved`, `createdAt`, `issue_image`) VALUES
(1, 'Issue name 1', '', 'HOT_DESK', 1, 0, '2021-12-04 08:41:44', NULL),
(2, 'Issue name 1', '', 'MEETING_ROOMS', 1, 0, '2021-12-04 08:42:11', NULL),
(3, 'Issue name 2', '', 'PARKING', 1, 0, '2021-12-04 08:42:21', NULL),
(4, 'Issue name 23', '', 'PHONE_BOOTHS', 1, 0, '2021-12-04 08:42:30', NULL),
(5, 'Issue 4', 'Issue 4 desc', 'HOT_DESK', 0, 1, '2020-12-04 09:39:23', ''),
(6, 'Issue 5', 'Issue 5 desc', 'HOT_DESK', 0, 1, '2020-11-04 12:03:59', ''),
(7, 'Issue 6', 'Issue 6 desc', 'HOT_DESK', 0, 1, '2020-10-04 12:03:59', ''),
(8, 'Issue 7', 'Issue 7 desc', 'HOT_DESK', 0, 1, '2020-09-04 12:03:59', ''),
(9, 'Issue 8', 'Issue 8 desc', 'HOT_DESK', 0, 1, '2020-08-04 12:03:59', ''),
(10, 'Issue 5', 'Issue 5 desc', 'HOT_DESK', 0, 1, '2020-08-05 02:08:33', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `reported_issues`
--
ALTER TABLE `reported_issues`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reported_issues`
--
ALTER TABLE `reported_issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
