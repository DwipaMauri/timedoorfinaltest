<template>
  <div :class="{ 'input-wrapper': type === 'file' }">
    <label :for="identity" class="fw-semibold">
      {{ label }} <span style="color: #cb3a31">*</span>
      <slot></slot>
    </label>
    <input
      :class="[{ 'file-input': type === 'file' }, 'form-control']"
      :type="type"
      :id="identity"
      :placeholder="placeholder"
      :readonly="readonly === '1'"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup="$emit('keyInput', $event.target.value)"
      @focus="$emit('totalTimeFocus', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  type: { type: String, required: true },
  label: { type: String, required: true },
  identity: { type: String, required: true },
  placeholder: { type: String, required: false },
  readonly: { type: String, required: true, default: "0" },
  isImage: { type: Boolean, required: true, default: false },
  modelValue: { type: [String, Number] },
});
</script>

<!-- <template>
  <div :class="{ 'input-wrapper': type === 'file' }">
    <label :for="identity" class="fw-semibold">
      {{ label }} <span style="color: red">*</span>
      <slot></slot>
    </label>
    <input
      :class="[{ 'file-input': type === 'file' }, 'form-control']"
      :type="type"
      :id="identity"
      :placeholder="placeholder"
      :readonly="readonly === '1'"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @keyup="$emit('keyInput', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";

const props = defineProps({
  type: { type: String, required: true },
  label: { type: String, required: true },
  identity: { type: String, required: true },
  placeholder: { type: String, default: "" },
  readonly: { type: String, default: "0" },
  modelValue: { type: [String, Number] },
}); -->

<!-- // Create a reactive variable for input value
// const inputValue = ref(props.modelValue);

// // Watch for changes in modelValue prop to sync input value
// watch(() => props.modelValue, (newValue) => {
//   inputValue.value = newValue;
// });

// Emit changes back to the parent
// watch(inputValue, (newValue) => {
//   emit("update:modelValue", newValue);
// });
</script> -->
