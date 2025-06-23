/*
  Warnings:

  - You are about to drop the column `orderId` on the `product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[pro_nmae]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `product_orderId_fkey`;

-- DropIndex
DROP INDEX `product_orderId_fkey` ON `product`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `orderId`;

-- CreateTable
CREATE TABLE `Products_Orders` (
    `proId` INTEGER NOT NULL,
    `orderId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`proId`, `orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Product_pro_nmae_key` ON `Product`(`pro_nmae`);

-- AddForeignKey
ALTER TABLE `Products_Orders` ADD CONSTRAINT `Products_Orders_proId_fkey` FOREIGN KEY (`proId`) REFERENCES `Product`(`pro_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Products_Orders` ADD CONSTRAINT `Products_Orders_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`order_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `customer` RENAME INDEX `customer_customer_email_key` TO `Customer_customer_email_key`;
