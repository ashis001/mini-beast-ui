-- Create database if not exists (optional)
-- CREATE DATABASE IF NOT EXISTS `u383989558_erp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- USE `u383989558_erp`;

-- Contacts table
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(191) NOT NULL,
  `email` VARCHAR(191) NULL,
  `phone` VARCHAR(64) NULL,
  `message` TEXT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_contacts_email` (`email`),
  KEY `idx_contacts_phone` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Optional: Leads table (aligning to your earlier snippet)
CREATE TABLE IF NOT EXISTS `leads` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `admin_user_id` INT UNSIGNED NOT NULL,
  `customer_name` VARCHAR(191) NOT NULL,
  `customer_phone` VARCHAR(64) NOT NULL,
  `customer_email` VARCHAR(191) NULL,
  `customer_address` VARCHAR(255) NULL,
  `interested_item_id` INT NULL,
  `notes` TEXT NULL,
  `status` ENUM('new','contacted','qualified','lost','won') NOT NULL DEFAULT 'new',
  `priority` ENUM('low','medium','high','urgent') NOT NULL DEFAULT 'medium',
  `follow_up_date` DATE NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_leads_status` (`status`),
  KEY `idx_leads_priority` (`priority`),
  KEY `idx_leads_follow_up_date` (`follow_up_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
ALTER TABLE `contacts`
  ADD COLUMN `first_name` VARCHAR(191) NULL AFTER `id`,
  ADD COLUMN `last_name` VARCHAR(191) NULL AFTER `first_name`,
  ADD COLUMN `company` VARCHAR(191) NULL AFTER `email`,
  ADD COLUMN `job_title` VARCHAR(191) NULL AFTER `company`,
  ADD COLUMN `country` VARCHAR(128) NULL AFTER `job_title`,
  ADD COLUMN `zip` VARCHAR(32) NULL AFTER `country`,
  ADD COLUMN `consent` TINYINT(1) NOT NULL DEFAULT 0 AFTER `zip`;

-- Optional: if you add first/last, you may drop or keep `name`