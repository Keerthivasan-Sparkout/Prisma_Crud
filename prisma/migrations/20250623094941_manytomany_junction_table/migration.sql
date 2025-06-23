/*
  Warnings:

  - The primary key for the `products_orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[proId,orderId]` on the table `Products_Orders` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Products_Orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `products_orders` DROP PRIMARY KEY,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `quantity` INTEGER NOT NULL DEFAULT 1,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Products_Orders_proId_orderId_key` ON `Products_Orders`(`proId`, `orderId`);
