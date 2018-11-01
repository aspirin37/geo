<template>
    <main class="page-container">
        <dropzone ref="dropzone"
                  id="dropzone"
                  :options="dropzoneOptions"
                  @vdropzone-file-added="addFile"></dropzone>
        <div class="dropzone dropzone-gallery">
        </div>
        <draggable v-model="files">
            <img class="test"
                 v-for="(it, i) in files"
                 :src="it.file"
                 :key="i">
        </draggable>
    </main>
</template>
<script>
import Dropzone from 'vue2-dropzone'
import Draggable from 'vuedraggable'

export default {
    components: {
        Dropzone,
        Draggable
    },
    mounted() {
        this.$nextTick(() => {
            document.querySelector('#dropzone').classList.remove('vue-dropzone')
        })

    },
    data() {
        return {
            dropzoneOptions: {
                url: '/',
                autoProcessQueue: false,
                thumbnailWidth: 120,
                thumbnailHeight: 120,
                previewsContainer: '.dropzone-gallery',
            },
            files: [],
            filesLength: 0,
        }
    },
    methods: {
        addFile(file) {
            let obj = {
                file,
                name: file.name,
                fixed: false,
                order: this.filesLength
            }
            this.files.push(obj)
            this.filesLength++
        }
    }
}
</script>
<style lang="scss"
       scoped>
@import '@/styles/_variables.scss';

.dropzone-gallery {
    border: 0;
    padding: 0;
}
</style>
<style lang="scss">
@import '@/styles/_variables.scss';

.dz-progress {
    opacity: 0 !important;
}

.dropzone .dz-preview:hover .dz-details {
    opacity: 0 !important;
}

.dropzone .dz-preview:hover .dz-image img {
    filter: none;
    transform: none;
}

.test {
    width: 120px;
    height: 120px;
    background: #eee;
}
</style>