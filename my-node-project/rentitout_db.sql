-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 06, 2024 at 05:58 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rentitout_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `user_id`) VALUES
(1, 3),
(2, 9),
(3, 25);

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`, `icon`) VALUES
(1, 'Electronics', 'icon_electronics.png'),
(2, 'Furniture', 'icon_furniture.png'),
(3, 'Vehicles', 'icon_vehicles.png'),
(4, 'Books', 'icon_books.png'),
(5, 'Fashion', 'icon_fashion.png');

-- --------------------------------------------------------

--
-- Table structure for table `category_items`
--

CREATE TABLE `category_items` (
  `id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `items_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category_items`
--

INSERT INTO `category_items` (`id`, `category_id`, `items_id`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 1, 6),
(7, 2, 7),
(8, 3, 8),
(9, 4, 9),
(10, 5, 10),
(11, 1, 11),
(12, 2, 12),
(13, 3, 13),
(14, 4, 14),
(15, 5, 15),
(16, 1, 16),
(17, 2, 17),
(18, 3, 18),
(19, 4, 19),
(20, 5, 20),
(21, 1, 21),
(22, 2, 22),
(23, 3, 23),
(24, 4, 24),
(25, 5, 25);

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `address` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`id`, `user_id`, `phone_number`, `address`) VALUES
(1, 1, '+970599123456', '123 Ahmad Street, City'),
(2, 2, '+970599654321', '456 Mohammad Street, City'),
(3, 4, '+970599789012', '789 Yara Street, City'),
(4, 5, '+970599456789', '101 Aya Street, City'),
(5, 6, '+970599456123', '121 Sami Street, City'),
(6, 7, '+970599654789', '134 Nour Street, City'),
(7, 8, '+970599124578', '541 Amira Street, City'),
(8, 9, '+970599568471', '861 Khaled Street, City'),
(9, 10, '+970599654871', '123 Maha Street, City'),
(10, 11, '+970599147852', '546 Sara Street, City'),
(11, 12, '+970599147951', '102 Omar Street, City'),
(12, 13, '+970599132457', '147 Lina Street, City'),
(13, 14, '+970599963214', '548 Hasan Street, City'),
(14, 15, '+970599753159', '963 Karim Street, City'),
(15, 16, '+970599852741', '741 Mariam Street, City'),
(16, 17, '+970599963852', '951 Ibrahim Street, City'),
(17, 18, '+970599785214', '789 Hala Street, City'),
(18, 19, '+970599621478', '321 Fadi Street, City'),
(19, 20, '+970599852963', '654 Reem Street, City'),
(20, 21, '+970599456951', '897 Salma Street, City'),
(21, 22, '+970599654987', '231 Zain Street, City'),
(22, 23, '+970599159357', '987 Hana Street, City'),
(23, 24, '+970599951357', '357 Tareq Street, City'),
(24, 25, '+970599357852', '654 Noor Street, City'),
(25, 3, '+970599124987', '369 Rami Street, City');

-- --------------------------------------------------------

--
-- Table structure for table `gps_location_from`
--

CREATE TABLE `gps_location_from` (
  `id` int(11) NOT NULL,
  `item_id` int(11) DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gps_location_from`
--

INSERT INTO `gps_location_from` (`id`, `item_id`, `location_id`) VALUES
(51, 1, 1),
(52, 2, 2),
(53, 3, 3),
(54, 4, 4),
(55, 5, 5),
(56, 6, 6),
(57, 7, 7),
(58, 8, 8),
(59, 9, 9),
(60, 10, 10),
(61, 11, 11),
(62, 12, 12),
(63, 13, 13),
(64, 14, 14),
(65, 15, 15),
(66, 16, 16),
(67, 17, 17),
(68, 18, 18),
(69, 19, 19),
(70, 20, 20),
(71, 21, 21),
(72, 22, 22),
(73, 23, 23),
(74, 24, 24),
(75, 25, 25);

-- --------------------------------------------------------

--
-- Table structure for table `gps_location_to`
--

CREATE TABLE `gps_location_to` (
  `id` int(11) NOT NULL,
  `rentals_id` int(11) DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price_per_day` decimal(10,2) NOT NULL,
  `is_available` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `user_id`, `title`, `description`, `price_per_day`, `is_available`, `created_at`, `updated_at`) VALUES
(1, 1, 'Laptop', 'High-performance laptop for rent', 15.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(2, 2, 'Sofa', 'Comfortable 3-seater sofa', 10.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(3, 3, 'Car', 'Compact car available for daily rental', 50.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(4, 4, 'Novel', 'Fiction novel for literature lovers', 2.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(5, 5, 'Dress', 'Elegant evening dress', 20.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(6, 6, 'Camera', 'DSLR camera with 18-55mm lens', 25.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(7, 7, 'Dining Table', 'Large wooden dining table', 15.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(8, 8, 'Bicycle', 'Mountain bike for rent', 8.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(9, 9, 'Textbook', 'Physics textbook for students', 3.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(10, 10, 'Jacket', 'Winter jacket, very warm', 12.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(11, 11, 'Smartphone', 'Latest model smartphone', 18.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(12, 12, 'Chair', 'Comfortable office chair', 5.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(13, 13, 'Motorbike', 'Yamaha motorbike for rent', 45.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(14, 14, 'Notebook', 'Fictional writing notebook', 2.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(15, 15, 'Handbag', 'Leather handbag for rent', 10.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(16, 16, 'TV', '55-inch LED TV for rent', 20.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(17, 17, 'Desk', 'Wooden study desk', 7.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(18, 18, 'Truck', 'Heavy-duty truck for rent', 70.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(19, 19, 'Magazine', 'Fashion magazine for reading', 2.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(20, 20, 'Shoes', 'Sport shoes available for rent', 10.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(21, 21, 'Tablet', 'High-end tablet for rent', 15.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(22, 22, 'Lamp', 'Decorative table lamp', 4.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(23, 23, 'Scooter', 'Electric scooter for rent', 30.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(24, 24, 'Comic Book', 'Collection of classic comics', 3.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27'),
(25, 25, 'Sunglasses', 'Stylish sunglasses', 5.00, 1, '2024-10-06 01:30:27', '2024-10-06 01:30:27');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` int(11) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `postal_code` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`id`, `city`, `state`, `country`, `postal_code`) VALUES
(1, 'Ramallah', 'West Bank', 'Palestine', '00970'),
(2, 'Nablus', 'West Bank', 'Palestine', '00970'),
(3, 'Jenin', 'West Bank', 'Palestine', '00970'),
(4, 'Hebron', 'West Bank', 'Palestine', '00970'),
(5, 'Bethlehem', 'West Bank', 'Palestine', '00970'),
(6, 'Jericho', 'West Bank', 'Palestine', '00970'),
(7, 'Tulkarm', 'West Bank', 'Palestine', '00970'),
(8, 'Qalqilya', 'West Bank', 'Palestine', '00970'),
(9, 'Salfit', 'West Bank', 'Palestine', '00970'),
(10, 'Tubas', 'West Bank', 'Palestine', '00970'),
(11, 'Gaza City', 'Gaza Strip', 'Palestine', '00972'),
(12, 'Khan Younis', 'Gaza Strip', 'Palestine', '00972'),
(13, 'Rafah', 'Gaza Strip', 'Palestine', '00972'),
(14, 'Deir al-Balah', 'Gaza Strip', 'Palestine', '00972'),
(15, 'Beit Hanoun', 'Gaza Strip', 'Palestine', '00972'),
(16, 'Beit Lahia', 'Gaza Strip', 'Palestine', '00972'),
(17, 'Jabalya', 'Gaza Strip', 'Palestine', '00972'),
(18, 'Birzeit', 'West Bank', 'Palestine', '00970'),
(19, 'Al-Bireh', 'West Bank', 'Palestine', '00970'),
(20, 'Beit Jala', 'West Bank', 'Palestine', '00970'),
(21, 'Beit Sahour', 'West Bank', 'Palestine', '00970'),
(22, 'Halhul', 'West Bank', 'Palestine', '00970'),
(23, 'Dura', 'West Bank', 'Palestine', '00970'),
(24, 'Yatta', 'West Bank', 'Palestine', '00970'),
(25, 'Ad-Dhahiriya', 'West Bank', 'Palestine', '00970'),
(26, 'Al-Eizariya', 'West Bank', 'Palestine', '00970'),
(27, 'Azzun', 'West Bank', 'Palestine', '00970'),
(28, 'Jaba', 'West Bank', 'Palestine', '00970'),
(29, 'Abu Dis', 'West Bank', 'Palestine', '00970'),
(30, 'Al-Ram', 'West Bank', 'Palestine', '00970'),
(31, 'Ar-Ramtha', 'West Bank', 'Palestine', '00970'),
(32, 'Beituniya', 'West Bank', 'Palestine', '00970'),
(33, 'Anabta', 'West Bank', 'Palestine', '00970'),
(34, 'Shuafat', 'West Bank', 'Palestine', '00970'),
(35, 'Sair', 'West Bank', 'Palestine', '00970'),
(36, 'Taffuh', 'West Bank', 'Palestine', '00970'),
(37, 'Idhna', 'West Bank', 'Palestine', '00970'),
(38, 'Beit Awwa', 'West Bank', 'Palestine', '00970'),
(39, 'Al-Khader', 'West Bank', 'Palestine', '00970'),
(40, 'Bani Na\'im', 'West Bank', 'Palestine', '00970'),
(41, 'Deir Sammit', 'West Bank', 'Palestine', '00970'),
(42, 'Al-Dahiriya', 'West Bank', 'Palestine', '00970'),
(43, 'Jabalia', 'Gaza Strip', 'Palestine', '00972'),
(44, 'Khuza\'a', 'Gaza Strip', 'Palestine', '00972'),
(45, 'Al-Mughraqa', 'Gaza Strip', 'Palestine', '00972'),
(46, 'Al-Burayj', 'Gaza Strip', 'Palestine', '00972'),
(47, 'Shati Refugee Camp', 'Gaza Strip', 'Palestine', '00972');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `sent_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `message` text NOT NULL,
  `is_read` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `rental_id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `payment_method` enum('PayPal','CreditCard') NOT NULL,
  `payment_status` enum('pending','completed','failed') NOT NULL,
  `transaction_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rentals`
--

CREATE TABLE `rentals` (
  `id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `renter_id` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `status` enum('pending','approved','returned') NOT NULL DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `rental_id` int(11) NOT NULL,
  `reviewer_id` int(11) NOT NULL,
  `rating` int(11) DEFAULT NULL CHECK (`rating` >= 1 and `rating` <= 5),
  `comment` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role` enum('admin','client') NOT NULL DEFAULT 'client',
  `login_token` varchar(1024) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `role`, `login_token`, `created_at`, `updated_at`) VALUES
(1, 'ahmad123', 'password1', 'ahmad@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(2, 'mohammad123', 'password2', 'mohammad@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(3, 'rami123', 'password3', 'rami@gmail.com', 'admin', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(4, 'yara123', 'password4', 'yara@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(5, 'aya123', 'password5', 'aya@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(6, 'sami123', 'password6', 'sami@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(7, 'nour123', 'password7', 'nour@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(8, 'amira123', 'password8', 'amira@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(9, 'khaled123', 'password9', 'khaled@gmail.com', 'admin', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(10, 'maha123', 'password10', 'maha@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(11, 'sara123', 'password11', 'sara@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(12, 'omar123', 'password12', 'omar@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(13, 'lina123', 'password13', 'lina@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(14, 'hasan123', 'password14', 'hasan@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(15, 'karim123', 'password15', 'karim@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(16, 'mariam123', 'password16', 'mariam@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(17, 'ibrahim123', 'password17', 'ibrahim@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(18, 'hala123', 'password18', 'hala@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(19, 'fadi123', 'password19', 'fadi@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(20, 'reem123', 'password20', 'reem@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(21, 'salma123', 'password21', 'salma@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(22, 'zain123', 'password22', 'zain@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(23, 'hana123', 'password23', 'hana@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(24, 'tareq123', 'password24', 'tareq@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04'),
(25, 'noor123', 'password25', 'noor@gmail.com', '', '', '2024-10-06 01:29:04', '2024-10-06 01:29:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category_items`
--
ALTER TABLE `category_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `items_id` (`items_id`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `gps_location_from`
--
ALTER TABLE `gps_location_from`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_id` (`item_id`),
  ADD KEY `location_id` (`location_id`);

--
-- Indexes for table `gps_location_to`
--
ALTER TABLE `gps_location_to`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rentals_id` (`rentals_id`),
  ADD KEY `location_id` (`location_id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sender_id` (`sender_id`),
  ADD KEY `receiver_id` (`receiver_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rental_id` (`rental_id`);

--
-- Indexes for table `rentals`
--
ALTER TABLE `rentals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_id` (`item_id`),
  ADD KEY `renter_id` (`renter_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rental_id` (`rental_id`),
  ADD KEY `reviewer_id` (`reviewer_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `category_items`
--
ALTER TABLE `category_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `gps_location_from`
--
ALTER TABLE `gps_location_from`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `gps_location_to`
--
ALTER TABLE `gps_location_to`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rentals`
--
ALTER TABLE `rentals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `category_items`
--
ALTER TABLE `category_items`
  ADD CONSTRAINT `category_items_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `category_items_ibfk_2` FOREIGN KEY (`items_id`) REFERENCES `items` (`id`);

--
-- Constraints for table `client`
--
ALTER TABLE `client`
  ADD CONSTRAINT `client_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `gps_location_from`
--
ALTER TABLE `gps_location_from`
  ADD CONSTRAINT `gps_location_from_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`),
  ADD CONSTRAINT `gps_location_from_ibfk_2` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`);

--
-- Constraints for table `gps_location_to`
--
ALTER TABLE `gps_location_to`
  ADD CONSTRAINT `gps_location_to_ibfk_1` FOREIGN KEY (`rentals_id`) REFERENCES `rentals` (`id`),
  ADD CONSTRAINT `gps_location_to_ibfk_2` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`);

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`rental_id`) REFERENCES `rentals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rentals`
--
ALTER TABLE `rentals`
  ADD CONSTRAINT `rentals_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `items` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rentals_ibfk_2` FOREIGN KEY (`renter_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`rental_id`) REFERENCES `rentals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`reviewer_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

--
-- create a barter table
--
CREATE TABLE barters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_id INT,
    barter_item_id INT, -- The item being offered for barter
    renter_id INT, -- The person who is offering the barter
    start_date DATE,
    end_date DATE,
    status ENUM('pending', 'approved', 'returned') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (item_id) REFERENCES items(id),
    FOREIGN KEY (barter_item_id) REFERENCES items(id),
    FOREIGN KEY (renter_id) REFERENCES users(id)
);

-- Schedule verification via email and phone
CREATE TABLE verification_codes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    code VARCHAR(10) NOT NULL,
    expiration DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE user_verifications (
    user_id INT PRIMARY KEY,
    verified_email BOOLEAN DEFAULT FALSE,
    verified_phone BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Document upload schedule
CREATE TABLE user_documents (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    document_type VARCHAR(50),
    document_path VARCHAR(255),
    verified_status ENUM('pending', 'rejected', 'approved') DEFAULT 'pending',
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Manual verification schedule
CREATE TABLE manual_verifications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    status ENUM('pending', 'rejected', 'approved') DEFAULT 'pending',
    reviewer_id INT,
    review_notes TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Security deposit table

CREATE TABLE rental_deposits (
    id INT PRIMARY KEY AUTO_INCREMENT,
    rental_id INT NOT NULL,
    deposit_amount DECIMAL(10, 2),
    status ENUM('held', 'deducted', 'refunded') DEFAULT 'held',
    FOREIGN KEY (rental_id) REFERENCES rentals(id)
);

-- Item insurance schedule
CREATE TABLE rental_insurance (
    id INT PRIMARY KEY AUTO_INCREMENT,
    rental_id INT NOT NULL,
    insurance_fee DECIMAL(10, 2),
    insurance_status ENUM('active', 'expired') DEFAULT 'active',
    policy_details TEXT,
    FOREIGN KEY (rental_id) REFERENCES rentals(id)
);

-- Damage coverage policy schedule
CREATE TABLE damage_policies (
    policy_id INT PRIMARY KEY AUTO_INCREMENT,
    description TEXT,
    minor_damage_fee DECIMAL(10, 2),
    major_damage_fee DECIMAL(10, 2)
);

--User reporting table
CREATE TABLE reports (
    report_id INT PRIMARY KEY AUTO_INCREMENT,
    reported_user_id INT NOT NULL,
    reporter_user_id INT NOT NULL,
    reason TEXT,
    evidence_path VARCHAR(255),
    status ENUM('pending', 'rejected', 'approved') DEFAULT 'pending',
    FOREIGN KEY (reported_user_id) REFERENCES users(id),
    FOREIGN KEY (reporter_user_id) REFERENCES users(id)
);

--Complaint review table
CREATE TABLE report_reviews (
    id INT PRIMARY KEY AUTO_INCREMENT,
    report_id INT NOT NULL,
    reviewer_id INT,
    action_taken TEXT,
    notes TEXT,
    FOREIGN KEY (report_id) REFERENCES reports(report_id)
);


INSERT INTO verification_codes (user_id, code, expiration) VALUES (1, '123456', '2024-11-05 10:00:00'), (2, '789101', '2024-11-06 11:00:00');

INSERT INTO user_verifications (user_id, verified_email, verified_phone) VALUES (1, TRUE, FALSE), (2, FALSE, FALSE);

INSERT INTO user_documents (user_id, document_type, document_path, verified_status) VALUES (1, 'identity', '/uploads/identity_user1.pdf', 'approved'), (2, 'license', '/uploads/license_user2.pdf', 'pending');

INSERT INTO manual_verifications (user_id, status, reviewer_id, review_notes) VALUES (1, 'approved', 3, 'Verified manually.'), (2, 'pending', NULL, 'Awaiting manual verification.');

INSERT INTO damage_policies (description, minor_damage_fee, major_damage_fee) VALUES ('Standard Damage Policy', 50.00, 200.00), ('Premium Damage Policy', 100.00, 500.00);

 INSERT INTO `rentals` (`id`, `item_id`, `renter_id`, `start_date`, `end_date`, `total_price`, `status`) VALUES (1, 1, 2, '2024-10-01', '2024-10-05', 75.00, 'approved'), (2, 3, 1, '2024-10-06', '2024-10-10', 250.00, 'returned'), (3, 5, 4, '2024-10-11', '2024-10-15', 100.00, 'pending'), (4, 2, 3, '2024-10-16', '2024-10-20', 50.00, 'approved'), (5, 4, 5, '2024-10-21', '2024-10-25', 10.00, 'approved'), (6, 6, 6, '2024-10-26', '2024-10-30', 125.00, 'returned'), (7, 7, 7, '2024-11-01', '2024-11-05', 75.00, 'pending'), (8, 8, 8, '2024-11-06', '2024-11-10', 40.00, 'approved'), (9, 9, 9, '2024-11-11', '2024-11-15', 15.00, 'approved'), (10, 10, 10, '2024-11-16', '2024-11-20', 60.00, 'pending');
