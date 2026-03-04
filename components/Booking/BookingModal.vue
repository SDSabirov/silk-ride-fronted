<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="modal-backdrop">
        <div class="modal-panel" :style="{ maxWidth }">
          <!-- Close button -->
          <button
            class="modal-close"
            aria-label="Close"
            @click="close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <!-- Content -->
          <div class="modal-body">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  maxWidth: { type: String, default: '36rem' },
})

const emit = defineEmits(['update:modelValue'])

function close() {
  emit('update:modelValue', false)
}

function onKeydown(e) {
  if (e.key === 'Escape' && props.modelValue) close()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  pointer-events: none;
}

.modal-panel {
  position: relative;
  width: 100%;
  background: #0F0F0F;
  border: 1px solid rgba(201, 168, 76, 0.2);
  border-radius: 12px;
  overflow: hidden;
  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.7),
    0 8px 24px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(201, 168, 76, 0.1);
  pointer-events: auto;
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-close:hover {
  color: #C9A84C;
  border-color: rgba(201, 168, 76, 0.4);
  background: rgba(201, 168, 76, 0.1);
}

.modal-body {
  padding: 0;
}

/* Vue Transition */
.modal-enter-active .modal-panel {
  animation: modalIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-leave-active .modal-panel {
  animation: modalOut 0.25s ease-in forwards;
}

.modal-enter-active {
  transition: opacity 0.35s ease;
}

.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Mobile: bottom-anchored panel */
@media (max-width: 639px) {
  .modal-backdrop {
    align-items: flex-end;
    padding: 0;
  }

  .modal-panel {
    max-height: 85vh;
    overflow-y: auto;
    border-radius: 12px 12px 0 0;
  }
}
</style>
