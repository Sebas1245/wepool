/*
  Warnings:

  - Added the required column `startsAt` to the `Ride` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Ride` ADD COLUMN `startsAt` ENUM('DRIVER', 'COMPANY') NOT NULL;
