-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2022 at 11:46 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.2.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hand2mart_prototype`
--

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` int(25) NOT NULL,
  `title` varchar(255) NOT NULL,
  `answer` text NOT NULL,
  `preference` int(5) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `title`, `answer`, `preference`, `created_at`, `modified_at`) VALUES
(1, 'Which transmission is better for driving in Indian cities?', 'A CVT transmission is possibly the best to drive in the city. Because it has an infinite amount of gear ratios, the TCU of a CVT keeps the engine in its sweet spot making this transmission one of the most efficient. With that, as there are no physical gears to change, these are smooth', 4, '2022-08-21 15:07:31', '0000-00-00 00:00:00'),
(2, 'Best sedan under 15 lakhs ?', 'JUST LAUNCHED. Volkswagen Virtus. ...\r\nHyundai Verna. ? 9.40 - 15.44 Lakh. ...\r\nHonda All New City. ? 11.60 - 15.55 Lakh. ...\r\nSkoda Slavia. ? 10.99 - 18.39 Lakh. ...\r\nMaruti Suzuki Ciaz. ? 8.20 - 11.76 Lakh. ...\r\nSkoda Rapid TSI. ? 7.80 - 13.49 Lakh. ...\r\nTata Tigor EV. ? 12.49 - 13.64 Lakh. ...\r\nHonda Amaze. ? 6.65 - 11.52 Lakh.\r\n', 8, '2022-08-21 15:07:31', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(20) NOT NULL,
  `review_text` text NOT NULL,
  `name` varchar(70) NOT NULL,
  `image` mediumblob DEFAULT NULL,
  `stars` int(1) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `review_text`, `name`, `image`, `stars`, `created_at`, `modified_at`) VALUES
(1, 'Hi, the first review!', 'Nikhil', NULL, 5, '2022-08-16 22:39:08', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `trending_bikes`
--

CREATE TABLE `trending_bikes` (
  `id` int(20) NOT NULL,
  `carName` varchar(255) NOT NULL,
  `price` varchar(10) NOT NULL,
  `kms` varchar(10) NOT NULL,
  `mileage` varchar(10) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `transmission` varchar(40) NOT NULL,
  `fuel` varchar(40) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `rating` varchar(5) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `trending_bikes`
--

INSERT INTO `trending_bikes` (`id`, `carName`, `price`, `kms`, `mileage`, `image`, `transmission`, `fuel`, `status`, `rating`, `created_at`, `modified_at`) VALUES
(1, 'Ducati V4 R', '14,00,000', '80,000', '9', NULL, 'Auto+Manual', 'Petrol', 1, '2', '2022-08-20 20:54:37', '0000-00-00 00:00:00'),
(2, 'BMW S1000RR', '12,00,000', '85,000', '11', NULL, 'Auto+Manual', 'Petrol', 1, '1', '2022-08-20 20:54:37', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `trending_cars`
--

CREATE TABLE `trending_cars` (
  `id` int(20) NOT NULL,
  `carName` varchar(255) NOT NULL,
  `price` varchar(10) NOT NULL,
  `kms` varchar(10) NOT NULL,
  `mileage` varchar(10) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `transmission` varchar(40) NOT NULL,
  `fuel` varchar(40) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `rating` varchar(5) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `trending_cars`
--

INSERT INTO `trending_cars` (`id`, `carName`, `price`, `kms`, `mileage`, `image`, `transmission`, `fuel`, `status`, `rating`, `created_at`, `modified_at`) VALUES
(1, 'Audi Rs7', '14,00,000', '80,000', '9', NULL, 'Auto+Manual', 'Petrol', 1, '2', '2022-08-20 20:54:37', '0000-00-00 00:00:00'),
(2, 'BMW M4', '12,00,000', '85,000', '11', NULL, 'Auto+Manual', 'Petrol', 1, '1', '2022-08-20 20:54:37', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trending_bikes`
--
ALTER TABLE `trending_bikes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trending_cars`
--
ALTER TABLE `trending_cars`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `trending_bikes`
--
ALTER TABLE `trending_bikes`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `trending_cars`
--
ALTER TABLE `trending_cars`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
