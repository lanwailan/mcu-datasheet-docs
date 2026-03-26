import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        // MCU 相关字段
        mcu_vendor: z.string().optional(),
        mcu_family: z.string().optional(),
        mcu_series: z.string().optional(),
        mcu_model: z.string().optional(),
        core: z.string().optional(),
        flash_size: z.string().optional(),
        ram_size: z.string().optional(),
        clock_speed: z.string().optional(),
        package: z.string().optional(),
        operating_voltage: z.string().optional(),
        temperature_range: z.string().optional(),
        datasheet_version: z.string().optional(),
        release_date: z.string().optional(),
        keywords: z.array(z.string()).optional(),
      }),
    }),
  }),
};