<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-8">NuxtUI Demo</h1>

    <div class="space-y-8">
      <!-- Buttons Section -->
      <div>
        <h2 class="text-xl font-semibold mb-4">Buttons</h2>
        <div class="flex gap-4">
          <UButton>Default</UButton>
          <UButton color="primary">Primary</UButton>
          <UButton color="gray">Gray</UButton>
          <UButton variant="soft">Soft</UButton>
          <UButton variant="outline">Outline</UButton>
          <UButton variant="ghost">Ghost</UButton>
        </div>
      </div>

      <!-- Alert Section -->
      <div>
        <h2 class="text-xl font-semibold mb-4">Alert</h2>
        <UAlert title="Success!" description="NuxtUI is successfully installed." />
      </div>

      <!-- Card Section -->
      <div>
        <h2 class="text-xl font-semibold mb-4">Card</h2>
        <UCard class="max-w-md">
          <template #header>
            <h3 class="font-semibold">Card Header</h3>
          </template>
          <p>This is a NuxtUI card component with a header, body, and footer.</p>
          <template #footer>
            <div class="flex justify-end">
              <UButton size="sm">Action</UButton>
            </div>
          </template>
        </UCard>
      </div>

      <!-- Badge Section -->
      <div>
        <h2 class="text-xl font-semibold mb-4">Badges</h2>
        <div class="flex gap-4">
          <UBadge>Default</UBadge>
          <UBadge color="primary">Primary</UBadge>
          <UBadge color="green">Green</UBadge>
          <UBadge variant="soft">Soft</UBadge>
          <UBadge variant="outline">Outline</UBadge>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// NuxtUI components are auto-imported, no need to import them manually
</script>