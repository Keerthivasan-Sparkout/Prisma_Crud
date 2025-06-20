/*
  Warnings:

  - You are about to drop the column `products` on the `order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `products`;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `orderId` INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Order`(`order_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
