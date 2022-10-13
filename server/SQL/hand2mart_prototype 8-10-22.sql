-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2022 at 02:24 PM
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
-- Table structure for table `footer`
--

CREATE TABLE `footer` (
  `id` int(20) NOT NULL,
  `sub_cat` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `footer`
--

INSERT INTO `footer` (`id`, `sub_cat`, `link`, `category`, `created_at`, `modified_at`) VALUES
(2, 'Advertise-with-us', '#ads', 'others', '2022-08-27 18:35:12', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `master_dealer_bikes`
--

CREATE TABLE `master_dealer_bikes` (
  `id` int(25) NOT NULL,
  `name` varchar(100) NOT NULL,
  `transmission` varchar(40) NOT NULL,
  `ownerType` varchar(100) NOT NULL,
  `fuel` varchar(25) NOT NULL,
  `price` varchar(10) NOT NULL,
  `image` varchar(255) NOT NULL,
  `registration` varchar(255) NOT NULL,
  `manufactured_at` varchar(45) NOT NULL,
  `kms` varchar(10) NOT NULL,
  `mileage` varchar(10) NOT NULL,
  `description` text NOT NULL,
  `modelNumber` varchar(40) NOT NULL,
  `bikeNumber` varchar(40) NOT NULL,
  `insurance_status` int(2) NOT NULL,
  `insurance_upto` varchar(45) NOT NULL,
  `dealerEmail` varchar(255) NOT NULL,
  `rating` int(3) NOT NULL,
  `status` int(1) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `master_dealer_bikes`
--

INSERT INTO `master_dealer_bikes` (`id`, `name`, `transmission`, `ownerType`, `fuel`, `price`, `image`, `registration`, `manufactured_at`, `kms`, `mileage`, `description`, `modelNumber`, `bikeNumber`, `insurance_status`, `insurance_upto`, `dealerEmail`, `rating`, `status`, `created_at`, `modified_at`) VALUES
(1, 'Yamaha R-15 V4', 'Manual', 'Single', 'Petrol', '125000', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYZGRgaGBoYGhgaHRwfHBoYGR0ZGhwcHhwhIS4lIR4rIRwYJjgmKy8xNjU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzYsISs0NDY0NDE0NDQxNDE0NjQ0MTExNDQ0MTQ0MTE0NDY0NDExNDE2NDQ0NDQ0NDE0NDU0NP/AABEIALcBEwMBIgACEQEDEQH/', '2021', '10th November, 2021', '5,000', '55', 'Yamaha R15 V4 is powered by 155 cc engine.This R15 V4 engine generates a power of 18.4 PS @ 10000 rpm and a torque of 14.2 Nm @ 7500 rpm.', 'E-2134TW', '', 1, '2025', 'aritra056@gmail.com', 4, 1, '2022-09-26 18:52:22', '0000-00-00 00:00:00'),
(2, 'Cbr 650R', 'Manual', 'Single', 'Petrol', '7,00,000', '', '2019', '15th June, 2019', '4000', '17', '', 'E45YZI', 'WB-3457', 1, '2025', 'dealer@dealer.com', 0, 1, '2022-10-07 16:44:40', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `master_dealer_cars`
--

CREATE TABLE `master_dealer_cars` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `transmission` varchar(40) NOT NULL,
  `ownerType` varchar(100) NOT NULL,
  `fuel` varchar(25) NOT NULL,
  `price` varchar(10) NOT NULL,
  `image` varchar(255) NOT NULL,
  `registration` varchar(255) NOT NULL,
  `manufactured_at` int(45) NOT NULL,
  `kms` int(10) NOT NULL,
  `mileage` int(10) NOT NULL,
  `description` text NOT NULL,
  `modelNumber` varchar(40) NOT NULL,
  `carNumber` varchar(40) NOT NULL,
  `insurance_status` int(2) NOT NULL,
  `insurance_upto` varchar(45) NOT NULL,
  `dealerEmail` varchar(255) NOT NULL,
  `rating` int(3) NOT NULL,
  `status` int(1) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `master_dealer_cars`
--

INSERT INTO `master_dealer_cars` (`id`, `name`, `transmission`, `ownerType`, `fuel`, `price`, `image`, `registration`, `manufactured_at`, `kms`, `mileage`, `description`, `modelNumber`, `carNumber`, `insurance_status`, `insurance_upto`, `dealerEmail`, `rating`, `status`, `created_at`, `modified_at`) VALUES
(1, 'Mahindra Thar', 'Manual', 'Single', 'Diesel', '14,00,000', '', '2021', 2020, 10000, 17, 'Powered by mStallion 150 TGDI Petrol. Explore the Impossible with the All-New Thar! Made to dominate every terrain. The All-New Thar TGDI is here. Test Drive Now. Unmatched Presence. Superior On & Off road. Cutting-Edge Technology. Choice of AMT & Manual.', 'E-2134TW', 'DL-4568', 1, '2025', 'dealer@dealer.com', 4, 1, '2022-09-24 20:16:45', '0000-00-00 00:00:00'),
(2, 'Alto 800', 'Manual', 'Single', 'Petrol', '100000', '', '2015', 15, 60000, 25, '', 'E45YZI', 'WB-3457', 1, '2025', 'dealer@dealer.com', 0, 1, '2022-10-07 16:24:20', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `master_sold_bikes`
--

CREATE TABLE `master_sold_bikes` (
  `id` int(25) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `bikeId` varchar(15) NOT NULL,
  `bikeNumber` varchar(155) NOT NULL,
  `price` varchar(40) NOT NULL,
  `image` varchar(255) NOT NULL,
  `addressUser` text NOT NULL,
  `addressBike` text NOT NULL,
  `userEmail` varchar(255) NOT NULL,
  `type` varchar(40) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `master_sold_bikes`
--

INSERT INTO `master_sold_bikes` (`id`, `name`, `email`, `bikeId`, `bikeNumber`, `price`, `image`, `addressUser`, `addressBike`, `userEmail`, `type`, `created_at`, `modified_at`) VALUES
(1, 'Yamaha R-15 V4', 'aritra056@gmail.com', '1', '', '125000', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYZGRgaGBoYGhgaHRwfHBoYGR0ZGhwcHhwhIS4lIR4rIRwYJjgmKy8xNjU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzYsISs0NDY0NDE0NDQxNDE0NjQ0MTExNDQ0MTQ0MTE0NDY0NDExNDE2NDQ0NDQ0NDE0NDU0NP/AABEIALcBEwMBIgACEQEDEQH/', 'Address 1 of user', 'Address 1 of bike', 'aritra056@gmail.com', 'dealer', '2022-10-07 12:07:26', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `master_sold_cars`
--

CREATE TABLE `master_sold_cars` (
  `id` int(25) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `carId` varchar(15) NOT NULL,
  `carNumber` varchar(155) NOT NULL,
  `price` varchar(40) NOT NULL,
  `image` varchar(255) NOT NULL,
  `addressUser` text NOT NULL,
  `addressCar` text NOT NULL,
  `userEmail` varchar(255) NOT NULL,
  `type` varchar(40) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `master_sold_cars`
--

INSERT INTO `master_sold_cars` (`id`, `name`, `email`, `carId`, `carNumber`, `price`, `image`, `addressUser`, `addressCar`, `userEmail`, `type`, `created_at`, `modified_at`) VALUES
(18, 'M4 Competition', 'BMW', '1', 'NEW CAR', '56,00,000', 'https://images.hindustantimes.com/auto/img/2022/08/11/600x338/BMW_M4_1660203726944_1660203749086_1660203749086.jpg', '', '', '', '', '2022-09-28 21:06:07', '0000-00-00 00:00:00'),
(19, 'M4 Competition', 'BMW', '1', 'NEW CAR', '56,00,000', 'https://images.hindustantimes.com/auto/img/2022/08/11/600x338/BMW_M4_1660203726944_1660203749086_1660203749086.jpg', '', '', '', 'new', '2022-09-28 21:09:16', '0000-00-00 00:00:00'),
(20, 'Mahindra Thar', 'dealer@dealer.com', '1', '2021', '14,00,000', '', '', '', '', 'dealer', '2022-10-06 12:24:39', '0000-00-00 00:00:00'),
(21, 'Mahindra Thar', 'dealer@dealer.com', '1', '2021', '14,00,000', '', 'Address 1 of user', 'Address 1 of car', 'aritra056@gmail.com', 'dealer', '2022-10-06 13:04:22', '0000-00-00 00:00:00'),
(22, 'Mahindra Thar', 'dealer@dealer.com', '1', 'DL-4568', '14,00,000', '', 'Address 1 of user', 'Address 1 of car', 'aritra056@gmail.com', 'dealer', '2022-10-07 12:03:15', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `master_users`
--

CREATE TABLE `master_users` (
  `id` int(25) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(14) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `userType` int(1) NOT NULL,
  `status` int(1) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_at` datetime NOT NULL,
  `profileImg` varchar(255) NOT NULL,
  `customer_interests` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `master_users`
--

INSERT INTO `master_users` (`id`, `name`, `email`, `phone`, `password`, `address`, `userType`, `status`, `created_at`, `modified_at`, `profileImg`, `customer_interests`) VALUES
(1, 'Test', 'test@test.com', '1234567890', '$2a$12$SSXopQsyfuJW/xzXDnMR1Or07JUagd9hTQlURoBI0gC29wyA3owpe', 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678', 1, 1, '2022-09-13 22:50:47', '0000-00-00 00:00:00', '', ''),
(2, 'Aritra', 'aritra056@gmail.com', '6289537097', '$2b$12$7EDlmErWVyhNL3SbmT3WiO4Nzi/GzzUN8vA77K7Xp1QC3.vnVzll6', 'Tribeni', 2, 1, '2022-09-14 16:23:55', '0000-00-00 00:00:00', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `new_bikes`
--

CREATE TABLE `new_bikes` (
  `id` int(25) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `model_No` varchar(100) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(10) NOT NULL,
  `fuel` varchar(10) NOT NULL,
  `mileage` varchar(5) NOT NULL,
  `transmission` varchar(40) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `rating` int(5) NOT NULL,
  `status` int(1) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `new_cars`
--

CREATE TABLE `new_cars` (
  `id` int(25) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `model_No` varchar(100) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(10) NOT NULL,
  `fuel` varchar(10) NOT NULL,
  `mileage` varchar(5) NOT NULL,
  `transmission` varchar(40) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `rating` int(5) NOT NULL,
  `status` int(1) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `new_cars`
--

INSERT INTO `new_cars` (`id`, `company_name`, `model_No`, `name`, `price`, `fuel`, `mileage`, `transmission`, `description`, `image`, `rating`, `status`, `created_at`, `modified_at`) VALUES
(1, 'BMW', 'M-2109', 'M4 Competition', '56,00,000', 'Petrol', '11', 'Auto+Manual', 'All-new BMW M4 Competition Coupé with M xDrive.\r\n\r\nThe all-new BMW M4 Competition Coupé with M xDrive offers a fascinating combination of aesthetics, character and typical M athleticism. With numerous technologies derived from motorsport, it guarantees maximum driving dynamics – both in everyday use and on the racetrack.', 'https://images.hindustantimes.com/auto/img/2022/08/11/600x338/BMW_M4_1660203726944_1660203749086_1660203749086.jpg', 4, 1, '2022-08-29 16:37:48', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(20) NOT NULL,
  `review_text` text NOT NULL,
  `name` varchar(70) NOT NULL,
  `image` mediumblob DEFAULT NULL,
  `carName` varchar(100) NOT NULL,
  `sellerType` int(1) NOT NULL,
  `sellerEmail` varchar(255) NOT NULL,
  `stars` int(1) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `review_text`, `name`, `image`, `carName`, `sellerType`, `sellerEmail`, `stars`, `created_at`, `modified_at`) VALUES
(1, 'Hi, the first review!', 'Nikhil', NULL, 'Yamaha R15 - M', 2, 'aritra056@gmail.com', 5, '2022-08-16 22:39:08', '0000-00-00 00:00:00');

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

-- --------------------------------------------------------

--
-- Table structure for table `used_bikes`
--

CREATE TABLE `used_bikes` (
  `id` int(25) NOT NULL,
  `name` varchar(100) NOT NULL,
  `transmission` varchar(40) NOT NULL,
  `ownerType` varchar(100) NOT NULL,
  `fuel` varchar(25) NOT NULL,
  `price` varchar(10) NOT NULL,
  `image` varchar(255) NOT NULL,
  `registration` varchar(255) NOT NULL,
  `manufactured_at` varchar(45) NOT NULL,
  `kms` varchar(10) NOT NULL,
  `mileage` varchar(10) NOT NULL,
  `description` text NOT NULL,
  `modelNumber` varchar(40) NOT NULL,
  `bikeNumber` varchar(40) NOT NULL,
  `insurance_status` int(2) NOT NULL,
  `insurance_upto` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `rating` int(3) NOT NULL,
  `status` int(1) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `used_bikes`
--

INSERT INTO `used_bikes` (`id`, `name`, `transmission`, `ownerType`, `fuel`, `price`, `image`, `registration`, `manufactured_at`, `kms`, `mileage`, `description`, `modelNumber`, `bikeNumber`, `insurance_status`, `insurance_upto`, `email`, `rating`, `status`, `created_at`, `modified_at`) VALUES
(1, 'Yamaha R-15 V4', 'Manual', 'Single', 'Petrol', '125000', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYZGRgaGBoYGhgaHRwfHBoYGR0ZGhwcHhwhIS4lIR4rIRwYJjgmKy8xNjU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzYsISs0NDY0NDE0NDQxNDE0NjQ0MTExNDQ0MTQ0MTE0NDY0NDExNDE2NDQ0NDQ0NDE0NDU0NP/AABEIALcBEwMBIgACEQEDEQH/', '2021', '10th November, 2021', '5,000', '55', 'Yamaha R15 V4 is powered by 155 cc engine.This R15 V4 engine generates a power of 18.4 PS @ 10000 rpm and a torque of 14.2 Nm @ 7500 rpm.', 'E-2134TW', '', 1, '2025', 'aritra056@gmail.com', 4, 1, '2022-09-26 18:52:22', '0000-00-00 00:00:00'),
(2, 'Cbr 650R', 'Manual', 'Single', 'Petrol', '7,00,000', '', '2019', '15th June, 2019', '4000', '17', '', 'E45YZI', 'WB-3457', 1, '2025', 'aritra056@gmail.com', 0, 1, '2022-10-08 17:47:17', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `used_cars`
--

CREATE TABLE `used_cars` (
  `id` int(25) NOT NULL,
  `name` varchar(100) NOT NULL,
  `transmission` varchar(40) NOT NULL,
  `ownerType` varchar(100) NOT NULL,
  `fuel` varchar(25) NOT NULL,
  `price` varchar(10) NOT NULL,
  `image` varchar(255) NOT NULL,
  `registration` varchar(255) NOT NULL,
  `manufactured_at` varchar(45) NOT NULL,
  `kms` varchar(10) NOT NULL,
  `mileage` varchar(10) NOT NULL,
  `description` text NOT NULL,
  `modelNumber` varchar(40) NOT NULL,
  `carNumber` varchar(40) NOT NULL,
  `insurance_status` int(2) NOT NULL,
  `insurance_upto` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `rating` int(3) NOT NULL,
  `status` int(1) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `used_cars`
--

INSERT INTO `used_cars` (`id`, `name`, `transmission`, `ownerType`, `fuel`, `price`, `image`, `registration`, `manufactured_at`, `kms`, `mileage`, `description`, `modelNumber`, `carNumber`, `insurance_status`, `insurance_upto`, `email`, `rating`, `status`, `created_at`, `modified_at`) VALUES
(1, 'Mahindra Thar', 'Manual', 'Single', 'Diesel', '12,00,000', 'https://en.wikipedia.org/wiki/Mahindra_Thar', '2021', '15th June, 2020', '15,000', '14', 'The vehicle was launched in the Indian market on October 4, 2010[1] to fill the void left by its predecessor, the Mahindra MM540. The Thar has been voted one of the top-10 SUVs available in the Indian market. Three variants - DI 2WD, DI 4WD, and CRDe, are available with soft-top versions. The Thar also comes with a seven-seater option, though it can be converted into a two-seater.', 'E-2134TW', 'WB-3302', 1, '2025', 'aritra056@gmail.com', 4, 1, '2022-08-26 23:35:45', '0000-00-00 00:00:00'),
(2, 'Alto 800', 'Manual', 'Single', 'Petrol', '100000', '', '2015', '15th June, 2014', '60000', '25', '', 'E45YZI', 'WB-3457', 1, '2025', 'aritra056@gmail.com', 0, 1, '2022-10-07 17:20:02', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer`
--
ALTER TABLE `footer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_dealer_bikes`
--
ALTER TABLE `master_dealer_bikes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_dealer_cars`
--
ALTER TABLE `master_dealer_cars`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_2` (`id`),
  ADD KEY `id` (`id`);

--
-- Indexes for table `master_sold_bikes`
--
ALTER TABLE `master_sold_bikes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_sold_cars`
--
ALTER TABLE `master_sold_cars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_users`
--
ALTER TABLE `master_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `new_bikes`
--
ALTER TABLE `new_bikes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `new_cars`
--
ALTER TABLE `new_cars`
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
-- Indexes for table `used_bikes`
--
ALTER TABLE `used_bikes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `used_cars`
--
ALTER TABLE `used_cars`
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
-- AUTO_INCREMENT for table `footer`
--
ALTER TABLE `footer`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `master_dealer_bikes`
--
ALTER TABLE `master_dealer_bikes`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `master_dealer_cars`
--
ALTER TABLE `master_dealer_cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `master_sold_cars`
--
ALTER TABLE `master_sold_cars`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `master_users`
--
ALTER TABLE `master_users`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `new_cars`
--
ALTER TABLE `new_cars`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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

--
-- AUTO_INCREMENT for table `used_bikes`
--
ALTER TABLE `used_bikes`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `used_cars`
--
ALTER TABLE `used_cars`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
