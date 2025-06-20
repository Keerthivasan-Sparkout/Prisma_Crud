-- CreateTable
CREATE TABLE `product` (
    `pro_id` INTEGER NOT NULL AUTO_INCREMENT,
    `pro_nmae` VARCHAR(191) NOT NULL,
    `pro_price` INTEGER NOT NULL,

    PRIMARY KEY (`pro_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
