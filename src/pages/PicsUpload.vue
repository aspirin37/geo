<template>
    <main class="page-container">
        <!-- <dropzone ref="dropzone"
                  id="dropzone"
                  :options="dropzoneOptions"
                  @vdropzone-file-added="addFile"></dropzone>
        <div class="dropzone dropzone-gallery">
        </div> -->
        <drop class="dropzone"
              @drop="handleDrop">
            Drop something here
        </drop>
        <draggable class="dropzone-gallery"
                   :options="{animation: 300}"
                   v-model="files">
            <div v-for="(it, i) in files"
                 :key="i">
                <img :src="it.src">
            </div>
        </draggable>
    </main>
</template>
<script>
import Draggable from 'vuedraggable'
import { Drop } from 'vue-drag-drop';

export default {
    components: {
        Draggable,
        Drop
    },
    data() {
        return {
            files: [],
            filesLength: 0,
        }
    },
    methods: {
        addFile(file) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                let obj = {
                    file,
                    src: reader.result,
                    name: file.name,
                    fixed: false,
                    order: this.filesLength
                }
                this.files.push(obj)
                this.filesLength++
            }

        },
        handleDrop(data, evt) {
            event.preventDefault();
            const files = event.dataTransfer.files;
            for (let i = 0; i < files.length; i++) {
                this.addFile(files.item(i))
            }
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

// .dz-progress {
//     opacity: 0 !important;
// }

// .dropzone .dz-preview:hover .dz-details {
//     opacity: 0 !important;
// }

// .dropzone .dz-preview:hover .dz-image img {
//     filter: none;
//     transform: none;
// }

.dropzone-gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.dropzone-gallery img {
    // margin: 10px;
    border-radius: 20px;
    overflow: hidden;
    width: 120px;
    height: 120px;
    position: relative;
    display: block;
    z-index: 10;
}
</style>